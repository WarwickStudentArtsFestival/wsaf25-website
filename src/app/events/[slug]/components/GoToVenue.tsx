import { Talk } from '@/app/lib/types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

type GoToVenueProps = {
  talk: Talk;
};

export default function GoToVenue({ talk }: GoToVenueProps) {
  return (
    <div className="bg-white p-6 my-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-150 ease-in-out">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-purple-500">
          <FiMapPin className="h-5 w-5" />
        </div>
        <div className="text-left flex-grow">
          <h3 className="text-teal text-lg font-semibold">Venue</h3>
          <p className="text-sm text-black">{talk.slot?.room?.en || 'TBD'}</p>
        </div>
        <Link
          href={`/venues/${talk.slot?.room_id}`}
          passHref
          className="inline-flex items-center mt-4 px-4 py-2 cursor-pointer hover:text-purple-500 transition-colors duration-200"
        >
          <span className="mr-2 text-black">Go to Venue</span>
          <FaArrowRight className="text-purple-500" />
        </Link>
      </div>
    </div>
  );
}
