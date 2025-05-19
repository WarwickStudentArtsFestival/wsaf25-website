import { fetchPretalxSchedule, PretalxScheduleRoom } from '@/lib/pretalx';
import { StaticImageData } from 'next/image';
import venues from '@/data/venues';

export type AdditionalVenueData = {
  imageAlt: string;
  mapUrl: string;
  image: StaticImageData | string;
  roomLocation: string;
  slug: string;
};

export type Venue = {
  id: string;
  name: string;
  description: string;
} & AdditionalVenueData;

export type VenueWithEventCount = Venue & {
  eventCount: number;
};

function constructVenueFromPretalxRoom(
  room: PretalxScheduleRoom,
): Venue | null {
  const venue = {
    id: room.guid,
    name: room.name,
    description: room.description,
  };

  const additionalVenueData = venues[room.guid];
  if (!venues) {
    console.error(
      `No venue data found for room ID: ${room.guid} (${room.name})`,
    );
    return null;
  }

  return {
    ...venue,
    ...additionalVenueData,
  };
}

export async function fetchVenues(): Promise<Venue[]> {
  const schedule = await fetchPretalxSchedule();
  const rooms = schedule.schedule.conference.rooms;
  return rooms.map(constructVenueFromPretalxRoom).filter((v) => v !== null);
}

export async function fetchVenuesWithEventCount(): Promise<
  VenueWithEventCount[]
> {
  const venues = await fetchVenues();
  const venuesWithEventCount = venues.map((venue) => ({
    ...venue,
    eventCount: 0,
  }));

  const schedule = await fetchPretalxSchedule();
  for (const day of schedule.schedule.conference.days) {
    for (const roomName of Object.keys(day.rooms)) {
      const venue = venuesWithEventCount.find((v) => v.name === roomName);
      if (venue) {
        venue.eventCount += day.rooms[roomName].length;
      }
    }
  }

  return venuesWithEventCount;
}

export async function fetchVenue(slug: string): Promise<Venue | null> {
  const venues = await fetchVenues();
  return venues.find((v) => v.id === slug) || null;
}
