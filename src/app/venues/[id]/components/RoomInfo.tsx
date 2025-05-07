import React from 'react';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import { ExtendedRoom } from '@/app/lib/types';
import { FaArrowLeft } from 'react-icons/fa';

interface RoomInfoProps {
  room: ExtendedRoom;
}
export default function RoomInfo({ room }: RoomInfoProps) {
  return (
    <div className="p-6">
      <Link
        href="/venues"
        className="mb-4 flex items-center text-sm text-black hover:underline"
      >
        <FaArrowLeft className="mr-2 text-purple-500" />
        See all Venues
      </Link>

      <div className="mt-6 flex flex-col gap-6 text-left lg:flex-row">
        <div className="lg:w-2/3">
          <h2 className="mb-4 text-xl font-semibold text-black">Description</h2>
          <p className="prose max-w-none">
            {room.description?.en || 'No description available.'}
          </p>
        </div>

        {room.roomLocation && (
          <div className="lg:w-1/3">
            <div className="mb-2 flex items-center space-x-2">
              <FiMapPin className="flex-shrink-0 text-purple-500" />
              <h3 className="font-semibold text-black">{room.roomLocation}</h3>
            </div>

            {room.mapUrl && (
              <Link
                href={room.mapUrl}
                target="_blank"
                className="flex items-center gap-2 text-sm text-purple-600 hover:underline"
              >
                <FiExternalLink />
                View on campus map
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
