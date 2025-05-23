import ErrorMessage from '@/app/components/ErrorMessage';
import { EventWithSessions } from '@/lib/events';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import { fetchVenueFromName } from '@/lib/venues';
import { trackColourMap } from '@/lib/trackTypes';

export default async function GoToVenue({
  eventWithSessions,
}: {
  eventWithSessions: EventWithSessions;
}) {
  const venue = await fetchVenueFromName(
    eventWithSessions.sessions[0].venueName,
  );
  if (!venue) {
    return <ErrorMessage msg="Venue not found" />;
  }
  const rawTrack = eventWithSessions.categoryPretalxTrack;
  const trackKey = rawTrack.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';

  return (
    <div className="my-4 bg-white p-4  h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
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
          <div className="flex flex-col text-left m-2 items-start gap-1  font-medium ">
            <span className="italic pt-2 font-semibold text-lg -my-2 text-black">

              More events in...
            </span>
            <span className="font-semibold pt-0 text-black">{venue.name}</span>
          </div>
          <div
            style={{ color: trackColor }}
            className="flex-1 flex justify-end pr-4"
          >
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
