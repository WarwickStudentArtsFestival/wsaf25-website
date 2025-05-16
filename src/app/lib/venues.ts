import { fetchFromPretalx } from '@/app/lib/pretalx';
import { StaticImageData } from 'next/image';
import venueData from '@/app/venue-data';
import { fetchEvents } from '@/app/lib/events';

export type AdditionalVenueData = {
  imageAlt: string;
  mapUrl: string;
  image: StaticImageData | string;
  roomLocation: string;
};

export type PretalxRoom = {
  id: number;
  guid: string;
  name: {
    en: string;
  };
  description: {
    en: string;
  };
  capacity: number;
  position: number | null;
  url: string;
  speaker_info: { en: string };
  availabilities: {
    id: number;
    start: string;
    end: string;
    allDay: boolean;
  }[];
};

export type Venue = {
  id: number;
  name: string;
  description: string;
} & Partial<AdditionalVenueData>;

export type VenueWithEventCount = Venue & {
  eventCount: number;
};

function constructVenueFromPretalxRoom(room: PretalxRoom): Venue {
  const venue = {
    id: room.id,
    name: room.name.en,
    description: room.description.en,
  };

  const additionalVenueData = venueData[room.id];
  if (!venueData) {
    console.error(`No venue data found for room ID: ${room.id}`);
    return venue;
  }

  return {
    ...venue,
    ...additionalVenueData,
  };
}

export async function fetchVenues(): Promise<VenueWithEventCount[]> {
  const response = await fetchFromPretalx<{ results: PretalxRoom[] }>(
    '/rooms?limit=200',
  );
  const venues = response.results.map(constructVenueFromPretalxRoom);

  // Populate venues with event counts
  const events = await fetchEvents();
  const eventCounts: Record<string, number> = {};
  for (const event of events) {
    const roomName = event.slot?.room?.en;
    if (roomName) {
      eventCounts[roomName] = (eventCounts[roomName] || 0) + 1;
    }
  }
  return venues.map((venue) => ({
    ...venue,
    eventCount: eventCounts[venue.name] || 0,
  }));
}

export async function fetchVenue(slug: string): Promise<Venue> {
  const room = await fetchFromPretalx<PretalxRoom>(`/rooms/${slug}`);
  return constructVenueFromPretalxRoom(room);
}
