import { EventWithSessions, getEventCategory } from '@/lib/events';
import Link from 'next/link';
import TrackPill from '@/app/components/track/TrackPill';
import { FaArrowRight } from 'react-icons/fa';
import { findVenue, Venue } from '@/lib/venues';
import Image from 'next/image';
import React from 'react';

export default function RelatedEvents({
  event,
  venues,
}: {
  event: EventWithSessions;
  venues: Venue[];
}) {
  const category = getEventCategory(event);
  const categoryBitFieldValue = (1 << category.filterBitFieldIndex).toString();

  const eventVenues = [
    ...new Set(event.sessions.map((session) => session.venue.id)),
  ]
    .map((venueId) => findVenue(venueId, venues))
    .filter((venue) => !!venue);

  return (
    <div className="flex mt-4 gap-4 flex-wrap">
      <Link
        href={`/events?category=${categoryBitFieldValue}`}
        className="flex grow gap-4 items-center p-4 bg-white border border-gray-200 hover:scale-105 transition duration-100 ease-in-out shadow-lg"
      >
        <TrackPill
          showName={false}
          track={category.label}
          padding={13}
          size={25}
        />
        <div className="text-left text-black">
          <p className="italic leading-4 mt-2 text-sm">See more...</p>
          <p className="font-semibold">{category.label}</p>
        </div>
        <div className="ml-auto">
          <FaArrowRight style={{ color: category.colour }} className="mx-4" />
        </div>
      </Link>

      {eventVenues.map((venue) => (
        <Link
          key={venue.id}
          href={`/venues/${venue.slug}`}
          className="flex grow gap-4 items-center p-4 bg-white border border-gray-200 hover:scale-105 transition duration-100 ease-in-out shadow-lg"
        >
          <Image
            src={venue.image}
            alt={venue.imageAlt || 'Room Image'}
            width={50}
            height={50}
            className="w-13 h-13 rounded-md object-cover"
          />

          <div className="text-left text-black">
            <p className="italic leading-4 mt-2 text-sm">See more...</p>
            <p className="font-semibold">{venue.name}</p>
          </div>
          <div className="ml-auto">
            <FaArrowRight style={{ color: category.colour }} className="mx-4" />
          </div>
        </Link>
      ))}
    </div>
  );
}
