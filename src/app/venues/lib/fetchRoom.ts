import { Room } from './types';

export async function fetchRoom(roomSlug: string): Promise<Room | 'API_ERROR'> {
  if (!process.env.PRETALX_PRIVATE_API_TOKEN) {
    return 'API_ERROR';
  }

  const url = `https://pretalx.wsaf.org.uk/api/events/2025/rooms/${roomSlug}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch event data:', await res.text());
    return 'API_ERROR';
  }

  const data: Room = await res.json();
  return data;
}
