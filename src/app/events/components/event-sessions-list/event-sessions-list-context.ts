import { FilterOption } from '@/app/events/components/events-list/filter-options';
import { fetchVenuesWithEventCount } from '@/lib/venues';
import { durationCategories, eventCategories } from '@/data/events';
import { EventSession } from '@/lib/events';

export type EventSessionsListContext = {
  eventSessions: EventSession[];
  categories: FilterOption[];
  venues: FilterOption[];
  durations: FilterOption[];
};

export default async function getContext(
  eventSessions: EventSession[],
): Promise<EventSessionsListContext> {
  const venues = await fetchVenuesWithEventCount();

  return {
    eventSessions,
    categories: eventCategories.map((category) => ({
      label: category.label,
      value: category.slug,
      count: eventSessions.filter(
        (session) =>
          session.event.categoryPretalxTrack === category.pretalxTrack,
      ).length,
      icon: category.icon,
    })),
    venues: venues.map((venue) => ({
      label: venue.name,
      value: venue.slug,
      count: venue.eventCount,
    })),
    durations: durationCategories.map((category) => ({
      label: category.label,
      value: category.slug,
      count: eventSessions.filter(
        (session) => session.durationCategory === category.slug,
      ).length,
    })),
  };
}
