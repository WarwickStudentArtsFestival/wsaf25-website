import Link from 'next/link';
import React from 'react';
import { FaTicket } from 'react-icons/fa6';
import { EventWithSessions, SessionWithChildren } from '@/lib/events';

export default function EventTickets({
  event,
  accentColour,
}: {
  event: EventWithSessions;
  accentColour: string;
}) {
  const ticketLink =
    event.ticketLink ||
    event.sessions.find(
      (session: SessionWithChildren) => session.parent?.event.ticketLink,
    )?.parent?.event.ticketLink;
  if (!ticketLink) return null;

  return (
    <Link
      href={ticketLink}
      target="_blank"
      className="block bg-white shadow-lg border border-gray-200 border-gray-200 p-4 text-left my-4 hover:scale-105 transition duration-100 ease-in-out"
    >
      <h2 className="font-semibold text-black">
        <FaTicket
          className="inline mr-1 mb-0.5"
          style={{ color: accentColour }}
        />
        Tickets Required
      </h2>
      <p className="text-sm text-black">
        Due to capacity restrictions, this event requires a free ticket to
        attend. Please ensure you have a book a valid ticket by clicking here.
      </p>
    </Link>
  );
}
