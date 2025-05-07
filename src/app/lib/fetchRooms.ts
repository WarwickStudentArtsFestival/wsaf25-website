import 'server-only';

import { customRoomData } from '@/app/lib/customRoomData';
import { fetchTalks } from './fetchTalks';
import { ExtendedRoom, Room, Talk } from './types';

export async function fetchRooms(): Promise<
  (ExtendedRoom & { eventCount: number })[] | 'API_ERROR'
> {
  const events = await fetchTalks();
  if (!process.env.PRETALX_PRIVATE_API_TOKEN || events === 'API_ERROR') {
    console.error('Missing Pretalx API token');
    return 'API_ERROR';
  }

  // Count how many events are in each room
  const eventCounts: Record<string, number> = {};
  for (const talk of events as Talk[]) {
    const roomName = talk.slot?.room?.en;
    if (roomName) {
      eventCounts[roomName] = (eventCounts[roomName] || 0) + 1;
    }
  }

  let allRooms: Room[] = [];
  let nextPageUrl = 'https://pretalx.wsaf.org.uk/api/events/2025/rooms';

  while (nextPageUrl) {
    const res = await fetch(nextPageUrl, {
      headers: {
        Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch Pretalx room data:', await res.text());
      return 'API_ERROR';
    }

    const data = await res.json();
    allRooms = allRooms.concat(data.results);
    nextPageUrl = data.next || null;
  }

  const extendedRooms: (ExtendedRoom & { eventCount: number })[] = allRooms.map(
    (room) => ({
      ...room,
      ...customRoomData[room.id],
      eventCount: eventCounts[room.name.en] || 0,
    }),
  );

  return extendedRooms;
}
