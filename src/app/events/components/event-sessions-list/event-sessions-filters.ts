import { useSearchParams } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import { EventSession } from '@/lib/events';
import { formatDate } from '@/lib/dates';

export type FilterOption = {
  label: string;
  value: string;
  bitFieldIndex: number;
  count: number;
  icon?: ReactNode;
};

export type SelectedFilters = {
  sort: 'random' | 'time' | 'venue';
  randomSeed: number | null;
  search: string | null;
  category: FilterOption[] | null;
  venue: FilterOption[] | null;
  duration: FilterOption[] | null;
};

export type SelectedFilterValues = {
  sort: 'random' | 'time' | 'venue';
  randomSeed: number | null;
  search: string | null;
  category: string[] | null;
  venue: string[] | null;
  duration: string[] | null;
};

export type EventSessionGroup = {
  name: string | null;
  sessions: EventSession[];
};

function getFilterOptionsFromBitField(
  bitFieldString: string | null,
  options: FilterOption[],
): FilterOption[] | null {
  if (!bitFieldString) return null;
  const bitField = parseInt(bitFieldString);
  if (isNaN(bitField)) return null;

  const selectedOptions = options.filter(
    (option) => bitField & (1 << option.bitFieldIndex),
  );
  if (selectedOptions.length === options.length) return null;

  return selectedOptions;
}

function getBitFieldFromFilterOptions(options: FilterOption[]): string {
  return options
    .reduce((acc, option) => acc | (1 << option.bitFieldIndex), 0)
    .toString();
}

export default function useEventSessionsFilters(
  context: EventSessionsListContext,
) {
  const searchParams = useSearchParams();

  const selectedFilters = useMemo<SelectedFilters>(() => {
    const sortParam = searchParams.get('sort');
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const venueParam = searchParams.get('venue');
    const durationParam = searchParams.get('duration');

    if (sortParam === 'random2') {
      window.history.replaceState(
        null,
        '',
        `?${searchParams.toString().replace('sort=random2', 'random')}`,
      );
    }

    return {
      sort: (sortParam && ['random', 'time', 'venue'].includes(sortParam)
        ? sortParam
        : 'random') as 'random' | 'time' | 'venue',
      randomSeed: sortParam === 'random' ? new Date().getTime() : null,
      search: searchParam || null,
      category: getFilterOptionsFromBitField(categoryParam, context.categories),
      venue: getFilterOptionsFromBitField(venueParam, context.venues),
      duration: getFilterOptionsFromBitField(durationParam, context.durations),
    };
  }, [searchParams]);

  const selectedFilterValues = useMemo<SelectedFilterValues>(
    () => ({
      sort: selectedFilters.sort,
      randomSeed: selectedFilters.randomSeed,
      search: selectedFilters.search
        ? selectedFilters.search.toLowerCase()
        : null,
      category: selectedFilters.category
        ? selectedFilters.category.map((option) => option.value)
        : null,
      venue: selectedFilters.venue
        ? selectedFilters.venue.map((option) => option.value)
        : null,
      duration: selectedFilters.duration
        ? selectedFilters.duration.map((option) => option.value)
        : null,
    }),
    [selectedFilters],
  );

  const getSearchParams = (newFilters: Partial<SelectedFilters>) => {
    const filters = {
      ...selectedFilters,
      ...newFilters,
    };

    const params = new URLSearchParams();

    if (filters.sort !== 'random') params.set('sort', filters.sort);
    if (filters.search) params.set('search', filters.search);
    if (filters.category) {
      params.set('category', getBitFieldFromFilterOptions(filters.category));
    }
    if (filters.venue) {
      params.set('venue', getBitFieldFromFilterOptions(filters.venue));
    }
    if (filters.duration) {
      params.set('duration', getBitFieldFromFilterOptions(filters.duration));
    }

    return params.toString();
  };

  const setFilter = (
    key: 'sort' | 'search' | 'category' | 'venue' | 'duration',
    value: string | FilterOption[] | null,
  ) => {
    const newSearchParams = getSearchParams({ [key]: value });

    // Use window.state instead of router to avoid reloading the page
    window.history.replaceState(null, '', `?${newSearchParams}`);
  };

  const isEventSessionInFilter = (eventSession: EventSession) => {
    if (selectedFilterValues.search) {
      if (
        !eventSession.event.name
          .toLowerCase()
          .includes(selectedFilterValues.search)
      )
        return false;
    }
    if (selectedFilterValues.category) {
      if (
        !selectedFilterValues.category.includes(
          eventSession.event.categoryPretalxTrack,
        )
      )
        return false;
    }
    if (selectedFilterValues.venue) {
      if (!selectedFilterValues.venue.includes(eventSession.venueName))
        return false;
    }
    if (selectedFilterValues.duration) {
      if (
        !selectedFilterValues.duration.includes(eventSession.durationCategory)
      )
        return false;
    }

    return true;
  };

  const sortAndGroupEventSessions = (
    eventSessions: EventSession[],
    venuesOptions: FilterOption[],
  ): { sessionGroups: EventSessionGroup[]; sessionCount: number } => {
    let sessionGroups: EventSessionGroup[] = [];

    switch (selectedFilters.sort) {
      case 'time': {
        const orderedSessions = eventSessions.sort(
          (a, b) => a.start.getTime() - b.start.getTime(),
        );

        let currentGroup: EventSessionGroup | null = null;
        let currentGroupDate: number | null = null;
        for (const session of orderedSessions) {
          const sessionGroupDate = session.start.getUTCDate();
          if (currentGroupDate !== sessionGroupDate) {
            if (currentGroup) sessionGroups.push(currentGroup);
            currentGroup = {
              name: formatDate(session.start),
              sessions: [session],
            };
            currentGroupDate = sessionGroupDate;
          } else {
            currentGroup?.sessions.push(session);
          }
        }
        if (currentGroup) sessionGroups.push(currentGroup);
        break;
      }
      case 'venue':
        const orderedSessions = eventSessions.sort(
          (a, b) => a.start.getTime() - b.start.getTime(),
        );
        sessionGroups = venuesOptions.map((venue) => ({
          name: venue.label,
          sessions: orderedSessions.filter(
            (session) => session.venueName === venue.value,
          ),
        }));
        break;
      default:
        sessionGroups = [
          {
            name: null,
            sessions: eventSessions
              .map((session) => ({ sort: Math.random(), session }))
              .sort((a, b) => a.sort - b.sort)
              .map((item) => item.session),
          },
        ];
    }

    return {
      sessionGroups: sessionGroups.filter((group) => group.sessions.length > 0),
      sessionCount: eventSessions.length,
    };
  };

  return {
    selectedFilters,
    selectedFilterValues,
    setFilter,
    isEventSessionInFilter,
    sortAndGroupEventSessions,
  };
}
