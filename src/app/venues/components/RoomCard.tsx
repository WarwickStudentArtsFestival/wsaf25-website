import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiList, FiArrowRight } from 'react-icons/fi';
import { ExtendedRoom } from '@/app/lib/types';
import { customRoomData } from '@/app/lib/customRoomData';

interface RoomCardProps {
  room: ExtendedRoom;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/venues/${room.id}`}
      className="transform transition-transform hover:scale-[1.02] h-full"
    >
      <div className="border text-left border-slate-300 rounded-md overflow-hidden flex flex-col w-full max-w-sm mx-auto h-full min-h-[450px]">
        <div className="relative w-full aspect-[4/3]">
          {room.image ? (
            <Image
              src={room.image}
              alt={customRoomData[room.id]?.imageAlt || 'Room Image'}
              className="object-cover"
              fill
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span>No image available</span>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-teal text-xl font-semibold mb-2">
            {room.name.en}
          </h3>
          {room.roomLocation && (
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-purple-500 flex-shrink-0" />
              <h3 className="text-black font-semibold">{room.roomLocation}</h3>
            </div>
          )}
          {room.eventCount !== undefined && (
            <div className="flex items-center space-x-2 my-2">
              <FiList className="text-purple-500 flex-shrink-0" />
              <h3 className="text-black font-semibold">
                {room.eventCount} Events
              </h3>
            </div>
          )}
          <p className="text-sm text-gray-700 flex-1 my-2">
            {room.description.en}
          </p>
          <div className="flex items-center gap-2 mt-4 text-black text-sm font-medium">
            <span>View Details</span>
            <FiArrowRight className="text-purple-500" />
          </div>
        </div>
      </div>
    </Link>
  );
}
