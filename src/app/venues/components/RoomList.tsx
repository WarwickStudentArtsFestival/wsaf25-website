import React from 'react';
import { ExtendedRoom } from '@/app/lib/types';
import RoomCard from './RoomCard';

interface RoomListProps {
  rooms: ExtendedRoom[];
}

export default function RoomList({ rooms }: RoomListProps) {
  return (
    <div className="mt-2 grid px-4 gap-8 md:px-16 mx-auto py-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 justify-center">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
}
