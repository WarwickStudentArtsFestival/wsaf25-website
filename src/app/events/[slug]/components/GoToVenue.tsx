import { Talk } from '@/app/lib/types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

type GoToVenueProps = {
  talk: Talk;
};

export default function GoToVenue({ talk }: GoToVenueProps) {
  return (
    <div className="w-full my-4 bg-white p-6 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-102 transition duration-150 ease-in-out">
      <Link
        href={`/venues/${talk.slot?.room_id}`}
        passHref
        className="flex items-center justify-between w-full cursor-pointer hover:text-purple-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="text-purple-500">
            <FiMapPin className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="text-teal text-lg font-semibold">Venue</h3>
            <p className="text-sm text-black">{talk.slot?.room?.en || 'TBD'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black">Go to Venue</span>
          <FaArrowRight className="text-purple-500" />
        </div>
      </Link>
    </div>
  );
}
