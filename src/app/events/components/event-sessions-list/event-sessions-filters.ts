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
  view: 'list' | 'timeline';
  sort: 'random' | 'time' | 'venue';
  randomSeed: number | null;
  search: string | null;
  category: FilterOption[] | null;
  venue: FilterOption[] | null;
  duration: FilterOption[] | null;
  dateFrom: number;
  dateTo: number;
  dropInOnly: boolean;
  selectedEvent?: string;
};

export type SelectedFilterValues = {
  view: 'list' | 'timeline';
  sort: 'random' | 'time' | 'venue';
  randomSeed: number | null;
  search: string | null;
  category: string[] | null;
  venue: string[] | null;
  duration: string[] | null;
  dateFrom: number;
  dateTo: number;
  dropInOnly: boolean;
  selectedEvent?: string;
};

export type EventSessionGroup = {
  name: string | null;
  sessions: EventSession[];
};

const defaultFilters: SelectedFilters = {
  view: 'list',
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

function getSelectedFiltersFromUrlParams(
  searchParams: URLSearchParams,
  context: EventSessionsListContext,
  defaultSortByTime = false,
): SelectedFilters {
  const timelineParam = searchParams.get('timeline');
  const sortParam = searchParams.get('sort');
  const searchParam = searchParams.get('search');
  const categoryParam = searchParams.get('category');
  const venueParam = searchParams.get('venue');
  const durationParam = searchParams.get('duration');
  const dateFromParam = searchParams.get('from');
  const dateToParam = searchParams.get('to');
  const dropInOnlyParam = searchParams.get('dropInOnly');
  const selectedEvent = searchParams.get('event');

  let dateFrom = dateFromParam && parseInt(dateFromParam);
  if (!dateFrom || isNaN(dateFrom)) dateFrom = 0;
  else {
    dateFrom = Math.max(
      Math.min(dateFrom, eventDateTimeIntervals.all.length - 1),
      0,
    );
  }

  let dateTo = dateToParam && parseInt(dateToParam);
  if (!dateTo || isNaN(dateTo)) dateTo = eventDateTimeIntervals.all.length - 1;
  else {
    dateTo = Math.min(
      Math.max(dateTo, dateFrom + 1),
      eventDateTimeIntervals.all.length - 1,
    );
  }

  return {
    view: timelineParam !== null ? 'timeline' : 'list',
    sort: (sortParam && ['random', 'time', 'venue'].includes(sortParam)
      ? sortParam
      : defaultSortByTime
        ? 'time'
        : 'random') as 'random' | 'time' | 'venue',
    randomSeed: sortParam === 'random' ? new Date().getTime() : null,
    search: searchParam || null,
    category: getFilterOptionsFromBitField(categoryParam, context.categories),
    venue: getFilterOptionsFromBitField(venueParam, context.venues),
    duration: getFilterOptionsFromBitField(durationParam, context.durations),
    dateFrom,
    dateTo,
    dropInOnly: dropInOnlyParam !== null,
    selectedEvent: selectedEvent || undefined,
  };
}

export default function useEventSessionsFilters(
  context: EventSessionsListContext,
  defaultSortByTime = false,
) {
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    getSelectedFiltersFromUrlParams(searchParams, context, defaultSortByTime),
  );

  // URL search parameters that represent the selected filters
  const selectedFiltersUrlParams = useMemo(() => {
    const params = new URLSearchParams();

    if (selectedFilters.view === 'timeline') params.set('timeline', '');
    if (selectedFilters.sort !== (defaultSortByTime ? 'time' : 'random'))
      params.set('sort', selectedFilters.sort);
    if (selectedFilters.search) params.set('search', selectedFilters.search);
    if (selectedFilters.category) {
      params.set(
        'category',
        getBitFieldFromFilterOptions(selectedFilters.category),
      );
    }
    if (selectedFilters.venue) {
      params.set('venue', getBitFieldFromFilterOptions(selectedFilters.venue));
    }
    if (selectedFilters.duration) {
      params.set(
        'duration',
        getBitFieldFromFilterOptions(selectedFilters.duration),
      );
    }
    if (selectedFilters.dateFrom !== 0) {
      params.set('from', selectedFilters.dateFrom.toString());
    }
    if (selectedFilters.dateTo !== eventDateTimeIntervals.all.length - 1) {
      params.set('to', selectedFilters.dateTo.toString());
    }
    if (selectedFilters.dropInOnly) {
      params.set('dropInOnly', '');
    }
    if (selectedFilters.selectedEvent) {
      params.set('event', selectedFilters.selectedEvent);
    }

    return params.toString();
  }, [selectedFilters, defaultSortByTime]);

  // When URL search params change, update the selected filters
  useEffect(() => {
    // If the URL search params are the same as the selected filters, do nothing
    if (selectedFiltersUrlParams === searchParams.toString()) return;

    const newFilters = getSelectedFiltersFromUrlParams(searchParams, context);
    setSelectedFilters(newFilters);

    // We only want to update this from the searchParams, not if selectedFilters change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, context]);

  // When selected filters change => update the URL search params (debounce to
  // avoid errors with updating the URL too frequently)
  const updateUrlFromFilters = useDebouncedCallback(() => {
    if (selectedFiltersUrlParams !== searchParams.toString()) {
      // Use window.state instead of router to avoid reloading the page
      window.history.pushState(null, '', `?${selectedFiltersUrlParams}`);
    }
    // Wait for 200ms of no movement before updating the URL
  }, 200);

  const selectedFilterValues = useMemo<SelectedFilterValues>(
    () => ({
      view: selectedFilters.view,
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
      selectedEvent: selectedFilters.selectedEvent,
    }),
    [selectedFilters],
  );

  const isEventSessionInFilter = (eventSession: EventSession) => {
    if (selectedFilters.view === 'list') {
      if (selectedFilterValues.search) {
        if (
          !eventSession.event.name
            .toLowerCase()
            .includes(selectedFilterValues.search)
        )
          return false;
      }

      if (selectedFilterValues.duration) {
        if (
          !selectedFilterValues.duration.includes(eventSession.durationCategory)
        )
          return false;
      }

      if (
        !eventDateTimeIntervals.all[selectedFilterValues.dateFrom].allowBefore
      ) {
        const earliestTime =
          eventDateTimeIntervals.all[selectedFilterValues.dateFrom].date;

        if (eventSession.event.dropIn) {
          if (eventSession.end && eventSession.end.getTime() < earliestTime)
            return false;
        } else {
          if (eventSession.start && eventSession.start.getTime() < earliestTime)
            return false;
        }
      }
      if (!eventDateTimeIntervals.all[selectedFilterValues.dateTo].allowAfter) {
        const latestTime =
          eventDateTimeIntervals.all[selectedFilterValues.dateTo].date;

        if (eventSession.event.dropIn) {
          if (eventSession.start && eventSession.start.getTime() > latestTime)
            return false;
        } else {
          if (eventSession.end && eventSession.end.getTime() > latestTime)
            return false;
        }
      }

      if (selectedFilterValues.dropInOnly) {
        if (!eventSession.event.dropIn) return false;
      }
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
      if (!selectedFilterValues.venue.includes(eventSession.venue.name))
        return false;
    }

    return true;
  };

  const sortAndGroupEventSessions = (
    eventSessions: EventSession[],
    venuesOptions: FilterOption[],
  ): { sessionGroups: EventSessionGroup[]; sessionCount: number } => {
    let sessionGroups: EventSessionGroup[] = [];

    if (selectedFilters.view === 'timeline') {
      sessionGroups = [
        {
          name: null,
          sessions: eventSessions.sort(
            (a, b) => a.start.getTime() - b.start.getTime(),
          ),
        },
      ];
    } else if (selectedFilters.sort === 'venue') {
      const orderedSessions = eventSessions.sort(
        (a, b) => a.start.getTime() - b.start.getTime(),
      );
      sessionGroups = venuesOptions.map((venue) => ({
        name: venue.label,
        sessions: orderedSessions.filter(
          (session) => session.venue.name === venue.value,
        ),
      }));
    } else if (selectedFilters.sort === 'time') {
      const orderedSessions = eventSessions.sort(
        (a, b) => a.start.getTime() - b.start.getTime(),
      );

      let currentGroup: EventSessionGroup | null = null;
      let currentGroupDate: number | null = null;
      for (const session of orderedSessions) {
        const sessionGroupDate = session.start
          ? session.start.getUTCDate()
          : null;
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
    } else {
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

  const setFilter = (newFilters: Partial<SelectedFilters>) => {
    const updatedFilters = {
      ...selectedFilters,
      ...newFilters,
    };

    setSelectedFilters(updatedFilters);
    updateUrlFromFilters();
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
