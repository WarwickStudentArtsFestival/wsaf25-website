import { FilterOption } from '@/app/events/components/events-list/filter-options';
import { fetchVenues } from '@/app/lib/venues';

export type EventsListContext = {
  events: Event[];
  categories: FilterOption[];
  venues: FilterOption[];
  durations: FilterOption[];
};

export default async function getContext(
  events: Event[],
): Promise<EventsListContext> {
  const venues = await fetchVenues();

  return {
    events,
    categories: [],
    venues: [],
    durations: [],
  };
}

const getFrequency = <T extends string>(items: T[]): Record<T, number> => {
  return items.reduce(
    (acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {} as Record<T, number>,
  );
};
