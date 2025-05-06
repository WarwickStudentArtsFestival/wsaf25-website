import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { Room } from '../lib/types';
import { customRoomData } from '../lib/customRoomData';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const roomImage = customRoomData[room.id]?.image;
  const roomLocation = customRoomData[room.id]?.roomLocation;

  return (
    <Link
      href={`/venues/${room.id}`}
      className="transform transition-transform hover:scale-[1.02] h-full"
    >
      <div className="border text-left border-slate-300 rounded-md overflow-hidden flex flex-col w-full max-w-sm mx-auto h-full min-h-[450px]">
        <div className="relative w-full aspect-[4/3]">
          {roomImage ? (
            <Image
              src={roomImage}
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
          {roomLocation && (
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-purple-500 flex-shrink-0" />
              <h3 className="text-black font-semibold">{roomLocation}</h3>
            </div>
          )}
          <p className="text-sm text-gray-700 flex-1 my-2">
            {room.description.en}
          </p>
        </div>
      </div>
    </Link>
  );
}
