import { EventWithSessions, getEventCategory } from '@/lib/events';
import EventArtist from '@/app/events/[slug]/components/event-artist';
import EventDetailsSidebar from '@/app/events/[slug]/components/event-details-sidebar';
import React from 'react';
import EventShare from '@/app/events/[slug]/components/event-share';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import TrackPill from '@/app/components/track/TrackPill';
import RelatedEvents from '@/app/events/[slug]/components/related-events';
import { Venue } from '@/lib/venues';
import EventParent from '@/app/events/[slug]/components/event-parent';

export default function EventCard({
  event,
  venues,
}: {
  event: EventWithSessions;
  venues: Venue[];
}) {
  const category = getEventCategory(event);

  const parents = [...new Set(event.sessions.map((session) => session.parent))];

  return (
    <div
      className="bg-white p-2 md:p-6 border border-gray-200 max-w-4xl mx-auto rounded-md"
      style={{ backgroundColor: `${category.colour}15` }}
    >
      <div className="flex flex-row justify-between mb-2">
        <Link
          href="/events"
          className="inline-flex gap-2 items-center text-sm hover:underline"
        >
          <FaArrowLeft style={{ color: category.colour }} />
          <span className="text-black text-left">Back to All Events</span>
        </Link>
        <TrackPill track={event.categoryPretalxTrack} leftToRight={true} />
      </div>

      <div style={{ color: category.colour }} className="mb-2">
        {event.artist.name && (
          <p className="text-left italic text-2xl">
            {event.artist.name} presents...
          </p>
        )}
        <h1 className="text-4xl font-bold break-words">
          &ldquo;{event.name}&rdquo;
        </h1>
      </div>

      {event.image && (
        <div className="my-4">
          <Image
            src={event.image}
            alt={`${event.name} image`}
            width={800}
            height={600}
            className="w-full max-h-48 object-contain rounded-lg"
            priority
          />
        </div>
      )}

      <div className="flex gap-4 flex-wrap">
        <div className="space-y-4 text-left w-lg grow flex flex-col">
          {event.shortDescription && (
            <div
              className="text-black font-semibold mb-2 px-2"
              dangerouslySetInnerHTML={{ __html: event.shortDescription }}
            />
          )}

          <div
            className="text-gray-700 px-2"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />

          <div className="mt-auto">
            {/* We only show the event card if there is only one parent (i.e.
            the event only exists with that single parent */}
            {parents.length === 1 && parents[0] && (
              <EventParent parentEvent={parents[0]} />
            )}

            <EventArtist event={event} accentColour={category.colour} />
          </div>
        </div>

        <div className="space-y-4 w-64 grow">
          <EventDetailsSidebar event={event} accentColour={category.colour} />
          <EventShare event={event} accentColour={category.colour} />
        </div>
      </div>

      <RelatedEvents event={event} venues={venues} />
    </div>
  );
}
