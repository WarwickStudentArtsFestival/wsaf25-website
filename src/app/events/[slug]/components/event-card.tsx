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
import { FiMaximize2 } from 'react-icons/fi';
import EventChildren from '@/app/events/[slug]/components/event-children';
import EventTickets from '@/app/events/[slug]/components/event-tickets';

export default function EventCard({
  event,
  venues,
  onClose,
}: {
  event: EventWithSessions;
  venues?: Venue[];
  onClose?: () => void;
}) {
  const category = getEventCategory(event);

  const parents = [...new Set(event.sessions.map((session) => session.parent))];

  return (
    <div
      className="bg-white p-2 md:p-6 border border-gray-200 max-w-4xl mx-auto rounded-md w-full"
      style={{ backgroundColor: `${category.colour}15` }}
    >
      <div className="flex flex-row justify-between mb-2">
        <Link
          href="/events"
          className="inline-flex gap-2 items-center text-sm hover:underline"
          onClick={
            onClose
              ? (e) => {
                  e.preventDefault();
                  onClose();
                }
              : undefined
          }
        >
          <FaArrowLeft style={{ color: category.colour }} />
          <span className="text-black text-left">Back to All Events</span>
        </Link>

        <div className="flex gap-4 items-center">
          <TrackPill track={event.categoryPretalxTrack} leftToRight={true} />
          {onClose && (
            <Link
              href={`/events/${event.slug}`}
              className="hover:scale-105 transition-all duration-150 ease-in-out"
              style={{ color: category.colour }}
            >
              <FiMaximize2 className="w-5 h-5" />
            </Link>
          )}
        </div>
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

      <EventTickets event={event} accentColour={category.colour} />

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

          {event.contentWarnings && (
            <div className="px-2 text-sm text-gray-700">
              <h3 className="font-semibold uppercase">Content Warnings</h3>
              <p>{event.contentWarnings}</p>
            </div>
          )}

          <div className="mt-auto">
            {/* We only show the event card if there is only one parent (i.e.
            the event only exists with that single parent */}
            {parents.length === 1 && parents[0] && (
              <EventParent parentEvent={parents[0]} />
            )}

            <EventArtist event={event} accentColour={category.colour} />
          </div>
        </div>

        <div
          className={`space-y-4 grow ${event.sessions.length > 3 ? 'w-full' : 'w-64'}`}
        >
          <EventDetailsSidebar event={event} accentColour={category.colour} />
          <EventShare event={event} accentColour={category.colour} />
        </div>
      </div>

      <EventChildren event={event} />

      {venues && <RelatedEvents event={event} venues={venues} />}
    </div>
  );
}
