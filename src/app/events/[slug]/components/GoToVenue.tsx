import ErrorMessage from '@/app/components/ErrorMessage';
import { Event } from '@/app/lib/events';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import { fetchVenue } from '@/app/lib/venues';

type GoToVenueProps = {
  talk: Event;
};

export default async function GoToVenue({ talk }: GoToVenueProps) {
  let venue;
  try {
    venue = await fetchVenue(String(talk.slot?.room_id));
  } catch (error) {
    console.error('Error fetching room', error);
    return <ErrorMessage msg="Room not found" />;
  }

  return (
    <div className="my-4 bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-102 transition duration-150 ease-in-out">
      <Link
        href={`/venues/${venue.id}`}
        passHref
        className="cursor-pointer group"
        title={`View more events at ${venue.name}`}
      >
        <div className="flex items-center gap-2">
          <div>
            {venue.image && (
              <Image
                src={venue.image}
                alt={venue.imageAlt || 'Room Image'}
                width={50}
                height={50}
                className="w-13 h-13 rounded-md object-cover"
              />
            )}
          </div>
          <div className="flex flex-col text-left m-2 items-start gap-1 text-black font-medium group-hover:underline">
            <span className="italic pt-2 text-teal font-semibold text-lg -my-2">
              More events in...
            </span>
            <span className="font-semibold pt-0">{venue.name}</span>
          </div>
          <div className="text-purple-500">
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
