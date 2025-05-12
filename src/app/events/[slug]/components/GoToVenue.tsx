import ErrorMessage from '@/app/components/ErrorMessage';
import { fetchRoom } from '@/app/lib/fetchRoom';
import { Talk } from '@/app/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

type GoToVenueProps = {
  talk: Talk;
};

export default async function GoToVenue({ talk }: GoToVenueProps) {
  const room = await fetchRoom(String(talk.slot?.room_id));
  if (room === 'API_ERROR') {
    return <ErrorMessage msg="Room not found" />;
  }
  return (
    <div className="my-4 bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-102 transition duration-150 ease-in-out">
      <Link
        href={`/venues/${room.id}`}
        passHref
        className=" cursor-pointer group"
        title={`View more events at ${room.name.en}`}
      >
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={room.image || '/logo.png'}
              alt={room.imageAlt || 'Room Image'}
              className="w-13 h-13 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col text-left m-2 items-start gap-1 text-black font-medium group-hover:underline">
            <span className="italic pt-2 text-teal font-semibold text-lg -my-2">
              More events in...
            </span>
            <span className="font-semibold pt-0">{room.name.en}</span>
          </div>
          <div className="text-purple-500">
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
