import { customRoomData } from '@/app/lib/customRoomData';
import { Room, ExtendedRoom } from './types';
import { cache } from 'react';

export const fetchRoom = cache(
  async (roomSlug: string): Promise<ExtendedRoom | 'API_ERROR'> => {
    if (!process.env.PRETALX_PRIVATE_API_TOKEN || !roomSlug) {
      return 'API_ERROR';
    }

    const url = `https://pretalx.wsaf.org.uk/api/events/2025/rooms/${roomSlug}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Token ${process.env.PRETALX_PRIVATE_API_TOKEN}`,
        Accept: 'application/json',
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      return 'API_ERROR';
    }

    const data: Room = await res.json();
    const extendedRoom: ExtendedRoom = {
      ...data,
      ...customRoomData[data.id],
    };

    return extendedRoom;
  },
);
