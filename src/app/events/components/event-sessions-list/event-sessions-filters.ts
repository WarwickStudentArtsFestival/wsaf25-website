import { useSearchParams } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import { EventSessionsListContext } from '@/app/events/components/event-sessions-list/event-sessions-list-context';
import { EventSession } from '@/lib/events';

export type FilterOption = {
  label: string;
  value: string;
  bitFieldIndex: number;
  count: number;
  icon?: ReactNode;
};

export type SelectedFilters = {
  search: string | null;
  category: FilterOption[] | null;
  venue: FilterOption[] | null;
  duration: FilterOption[] | null;
};

export type SelectedFilterValues = {
  search: string | null;
  category: string[] | null;
  venue: string[] | null;
  duration: string[] | null;
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
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const venueParam = searchParams.get('venue');
    const durationParam = searchParams.get('duration');

    return {
      search: searchParam || null,
      category: getFilterOptionsFromBitField(categoryParam, context.categories),
      venue: getFilterOptionsFromBitField(venueParam, context.venues),
      duration: getFilterOptionsFromBitField(durationParam, context.durations),
    };
  }, [searchParams]);

  const selectedFilterValues = useMemo<SelectedFilterValues>(
    () => ({
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
    key: 'search' | 'category' | 'venue' | 'duration',
    value: string | FilterOption[] | null,
  ) => {
    const newSearchParams = getSearchParams({ [key]: value });

    // Use window.state instead of router to avoid reloading the page
    window.history.pushState(null, '', `?${newSearchParams}`);
  };

  const isEventSessionInFilter = (eventSession: EventSession) => {
    console.log(selectedFilterValues);
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

  return {
    selectedFilters,
    selectedFilterValues,
    setFilter,
    isEventSessionInFilter,
  };
}
