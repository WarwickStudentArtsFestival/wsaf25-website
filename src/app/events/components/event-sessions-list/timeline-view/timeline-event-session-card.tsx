import { EventSession } from '@/lib/events';
import Link from 'next/link';
import { eventCategories } from '@/data/events';
import ErrorMessage from '@/app/components/ErrorMessage';
import { FaWalking } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';
import React from 'react';

export default function TimelineEventSessionCard({
  eventSession,
  parentEventStyling = false,
  selectEvent,
}: {
  eventSession: EventSession;
  parentEventStyling?: boolean;
  selectEvent: (slug: string) => void;
}) {
  const category = eventCategories.find(
    (c) => c.pretalxTrack === eventSession.event.categoryPretalxTrack,
  );
  if (!category) {
    return <ErrorMessage msg="Track category not found" />;
  }
  return (
    // timeline-event-session-card class used for printing
    <div
      className={`timeline-event-session-card h-full flex flex-col ${parentEventStyling ? '-mx-2 mb-0.5' : 'my-0.5'}`}
    >
      <Link
        href={`/events/${eventSession.event.slug}`}
        onClick={(e) => {
          e.preventDefault();
          selectEvent(eventSession.event.slug);
        }}
        className={`h-full p-1 block  border-slate-300 overflow-hidden hover:shadow-sm ${parentEventStyling ? 'border-b' : 'border rounded-md'}`}
        style={{
          background: parentEventStyling
            ? `${category.colour}20`
            : `${category.colour}10`,
          color: category.colour,
        }}
      >
        <div className="flex items-center gap-1 float-right mx-1">
          {(eventSession.event.dropIn || eventSession.parent?.event.dropIn) && (
            <FaWalking className="text-teal" title="Drop-in" />
          )}
          {(eventSession.event.ticketLink ||
            eventSession.parent?.event.ticketLink) && (
            <FaTicket className="text-teal" title="Ticket Required" />
          )}
        </div>
        {/* This is a hacky way to make the title of the event still centered*/}
        <div className="flex items-center gap-1 float-left invisible mx-1">
          {eventSession.event.dropIn && (
            <FaWalking className="text-teal" title="Drop-in" />
          )}
          {(eventSession.event.ticketLink ||
            eventSession.parent?.event.ticketLink) && (
            <FaTicket className="text-teal" title="Ticket Required" />
          )}
        </div>
        <p className="text-sm font-semibold">{eventSession.event.name}</p>
        {eventSession.start && eventSession.end && (
          <p className="text-xs">
            {eventSession.start.toLocaleTimeString('en-gb', {
              hour: 'numeric',
              hour12: true,
              minute: '2-digit',
            })}{' '}
            -{' '}
            {eventSession.end.toLocaleTimeString('en-gb', {
              hour: 'numeric',
              hour12: true,
              minute: '2-digit',
            })}
          </p>
        )}
      </Link>
    </div>
  );
}
