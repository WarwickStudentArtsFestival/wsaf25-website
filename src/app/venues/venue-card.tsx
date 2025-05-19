import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiList, FiMapPin } from 'react-icons/fi';
import { VenueWithEventCount } from '@/lib/venues';

export default function VenueCard({ venue }: { venue: VenueWithEventCount }) {
  return (
    <Link
      href={`/venues/${venue.id}`}
      className="transform transition-transform hover:scale-[1.02] h-full"
    >
      <div className="border text-left border-slate-300 rounded-md overflow-hidden flex flex-col w-full max-w-sm mx-auto h-full min-h-[450px]">
        <div className="relative w-full aspect-[4/3]">
          {venue.image ? (
            <Image
              src={venue.image}
              alt={venue.imageAlt}
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
          <h3 className="text-teal text-xl font-semibold mb-2">{venue.name}</h3>
          {venue.roomLocation && (
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-purple-500 flex-shrink-0" />
              <h3 className="text-black font-semibold">{venue.roomLocation}</h3>
            </div>
          )}
          <div className="flex items-center space-x-2 my-2">
            <FiList className="text-purple-500 flex-shrink-0" />
            <h3 className="text-black font-semibold">
              {venue.eventCount} Events
            </h3>
          </div>
          <p className="text-sm text-gray-700 flex-1 my-2">
            {venue.description}
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
