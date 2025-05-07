import React from 'react';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import { ExtendedRoom } from '@/app/lib/types';

type RoomInfoProps = {
  room: ExtendedRoom;
};

const RoomInfo: React.FC<RoomInfoProps> = ({ room }) => {
  return (
    <div className="flex flex-col text-left lg:flex-row gap-6 mt-6">
      <div className="lg:w-2/3">
        <h2 className="text-black text-xl font-semibold mb-4">Description</h2>
        <p className="prose max-w-none">
          {room.description?.en || 'No description available.'}
        </p>
      </div>

      {room.roomLocation && (
        <div className="lg:w-1/3">
          <div className="flex items-center space-x-2 mb-2">
            <FiMapPin className="text-purple-500 flex-shrink-0" />
            <h3 className="text-black font-semibold">{room.roomLocation}</h3>
          </div>

          {room.mapUrl && (
            <Link
              href={room.mapUrl}
              target="_blank"
              className="text-sm flex-row flex gap-2 items-center text-purple-600 hover:underline"
            >
              <FiExternalLink />
              View on campus map
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default RoomInfo;
