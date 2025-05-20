import { trackTypes } from '@/lib/types';
import { Event } from '@/lib/events';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import TrackIcon from '../../../components/track/TrackIcon';

export default async function GoToGenre({ event }: { event: Event }) {
  const index = trackTypes.indexOf(event.categoryPretalxTrack);

  return (
    <div className="my-4 bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <Link
        href={`/events?genre=${2 ** index}`}
        passHref
        className=" cursor-pointer group"
        title={`View more ${event.categoryPretalxTrack}`}
      >
        <div className="flex items-center gap-2">
          <div className="bg-purple-200 text-purple-800 border border-purple-800 rounded-full p-4">
            <TrackIcon track={event.categoryPretalxTrack} size={20} />
          </div>
          <div className="flex flex-col text-left m-2 items-start gap-1 text-black font-medium group-hover:underline">
            <span className="italic pt-2 text-teal font-semibold text-lg -my-2">
              See more...
            </span>
            <span className="font-semibold pt-0">
              {event.categoryPretalxTrack}
            </span>
          </div>
          <div className="text-purple-500">
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
