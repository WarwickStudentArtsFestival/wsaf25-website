import { useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import { EventSession } from '@/lib/events';
import { eventDateTimeIntervals, formatDate } from '@/lib/dates';
import { useDebouncedCallback } from 'use-debounce';

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
  dateFrom: number;
  dateTo: number;
  dropInOnly: boolean;
};

export type SelectedFilterValues = {
  sort: 'random' | 'time' | 'venue';
  randomSeed: number | null;
  search: string | null;
  category: string[] | null;
  venue: string[] | null;
  duration: string[] | null;
  dateFrom: number;
  dateTo: number;
  dropInOnly: boolean;
};

export type EventSessionGroup = {
  name: string | null;
  sessions: EventSession[];
};

const defaultFilters: SelectedFilters = {
  sort: 'random',
  randomSeed: new Date().getTime(),
  search: null,
  category: null,
  venue: null,
  duration: null,
  dateFrom: 0,
  dateTo: eventDateTimeIntervals.all.length - 1,
  dropInOnly: false,
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
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(defaultFilters);

  const searchParams = useSearchParams();
  // Update selected filters from URL search params when URL search params updated
  useEffect(() => {
    if (selectedFiltersUrlParams === searchParams.toString()) return;

    const sortParam = searchParams.get('sort');
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const venueParam = searchParams.get('venue');
    const durationParam = searchParams.get('duration');
    const dateFromParam = searchParams.get('from');
    const dateToParam = searchParams.get('to');
    const dropInOnlyParam = searchParams.get('dropInOnly');

    let dateFrom = dateFromParam && parseInt(dateFromParam);
    if (!dateFrom || isNaN(dateFrom)) dateFrom = 0;
    else {
      dateFrom = Math.max(
        Math.min(dateFrom, eventDateTimeIntervals.all.length - 1),
        0,
      );
    }

    let dateTo = dateToParam && parseInt(dateToParam);
    if (!dateTo || isNaN(dateTo))
      dateTo = eventDateTimeIntervals.all.length - 1;
    else {
      dateTo = Math.min(
        Math.max(dateTo, dateFrom + 1),
        eventDateTimeIntervals.all.length - 1,
      );
    }

    setSelectedFilters({
      sort: (sortParam && ['random', 'time', 'venue'].includes(sortParam)
        ? sortParam
        : 'random') as 'random' | 'time' | 'venue',
      randomSeed: sortParam === 'random' ? new Date().getTime() : null,
      search: searchParam || null,
      category: getFilterOptionsFromBitField(categoryParam, context.categories),
      venue: getFilterOptionsFromBitField(venueParam, context.venues),
      duration: getFilterOptionsFromBitField(durationParam, context.durations),
      dateFrom,
      dateTo,
      dropInOnly: dropInOnlyParam !== null,
    });
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
      dateFrom: selectedFilters.dateFrom,
      dateTo: selectedFilters.dateTo,
      dropInOnly: selectedFilters.dropInOnly,
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
    if (filters.dateFrom !== 0) {
      params.set('from', filters.dateFrom.toString());
    }
    if (filters.dateTo !== eventDateTimeIntervals.all.length - 1) {
      params.set('to', filters.dateTo.toString());
    }
    if (filters.dropInOnly) {
      params.set('dropInOnly', '');
    }

    return params.toString();
  };

  const selectedFiltersUrlParams = useMemo(
    () => getSearchParams(selectedFilters),
    [selectedFilters],
  );

  const updateUrlFromFilters = useDebouncedCallback(() => {
    if (selectedFiltersUrlParams !== searchParams.toString()) {
      // Use window.state instead of router to avoid reloading the page
      window.history.replaceState(null, '', `?${selectedFiltersUrlParams}`);
    }
    // Wait for 200ms of no movement before updating the URL
  }, 200);

  const setFilter = (newFilters: Partial<SelectedFilters>) => {
    const updatedFilters = {
      ...selectedFilters,
      ...newFilters,
    };

    setSelectedFilters(updatedFilters);
    updateUrlFromFilters();
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

    // TODO - drop in event logic
    if (
      !eventDateTimeIntervals.all[selectedFilterValues.dateFrom].allowBefore
    ) {
      const earliestTime =
        eventDateTimeIntervals.all[selectedFilterValues.dateFrom].date;
      if (eventSession.start.getTime() < earliestTime) return false;
    }
    if (!eventDateTimeIntervals.all[selectedFilterValues.dateTo].allowAfter) {
      const latestTime =
        eventDateTimeIntervals.all[selectedFilterValues.dateTo].date;
      if (eventSession.end.getTime() > latestTime) return false;
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

  const resetFilters = () => {
    setSelectedFilters(defaultFilters);
    updateUrlFromFilters();
  };

  return {
    selectedFilters,
    selectedFilterValues,
    setFilter,
    resetFilters,
    isEventSessionInFilter,
    sortAndGroupEventSessions,
  };
}
