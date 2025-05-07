import Image from 'next/image';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { ExtendedRoom } from '@/app/lib/types';

interface RoomHeaderProps {
  room: ExtendedRoom;
}

export default function RoomHeader({ room }: RoomHeaderProps) {
  return (
    <div className="relative">
      {room.image && (
        <Image
          src={room.image}
          alt={room.imageAlt || 'Venue image'}
          className="w-full md:rounded-xl rounded-none"
          layout="responsive"
          width={1200}
          height={600}
        />
      )}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
        <HighlightedHeading
          className="text-black text-2xl"
          text={room.name?.en || 'Unnamed Venue'}
        />
      </div>
    </div>
  );
}
