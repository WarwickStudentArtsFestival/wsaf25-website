import { fetchVenuesWithEventCount } from '@/lib/venues';
import { durationCategories, eventCategories } from '@/data/events';
import { EventSession } from '@/lib/events';
import { FilterOption } from '@/app/events/components/event-sessions-list/event-sessions-filters';

export type EventSessionsListContext = {
  eventSessions: EventSession[];
  categories: FilterOption[];
  venues: FilterOption[];
  durations: FilterOption[];
  dropInCount: number;
  venueInfo: Record<string, { order: number; name: string; slug: string }>;
};

export default async function getContext(
  eventSessions: EventSession[],
): Promise<EventSessionsListContext> {
  const venues = await fetchVenuesWithEventCount();

  const venueInfo: Record<
    string,
    { order: number; name: string; slug: string }
  > = {};
  for (let i = 0; i < venues.length; i++) {
    venueInfo[venues[i].name] = {
      order: i,
      name: venues[i].name,
      slug: venues[i].slug,
    };
  }

  return {
    eventSessions,
    categories: eventCategories.map((category) => ({
      label: category.label,
      value: category.pretalxTrack,
      count: eventSessions.filter(
        (session) =>
          session.event.categoryPretalxTrack === category.pretalxTrack,
      ).length,
      icon: category.icon,
      bitFieldIndex: category.filterBitFieldIndex,
    })),
    venues: venues.map((venue) => ({
      label: venue.name,
      value: venue.name,
      count: venue.eventCount,
      bitFieldIndex: venue.filterBitFieldIndex,
    })),
    durations: durationCategories.map((duration) => ({
      label: duration.label,
      value: duration.slug,
      count: eventSessions.filter(
        (session) => session.durationCategory === duration.slug,
      ).length,
      bitFieldIndex: duration.filterBitFieldIndex,
    })),
    dropInCount: eventSessions.filter((session) => session.event.dropIn).length,
    venueInfo,
  };
}
