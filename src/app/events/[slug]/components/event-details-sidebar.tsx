import { EventWithSessions, Session } from '@/lib/events';
import { FiCalendar, FiClock, FiGrid, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/lib/dates';
import Link from 'next/link';
import { FaWalking } from 'react-icons/fa';

function EventSession({
  dropIn,
  session,
  showingNumber,
  accentColour,
}: {
  dropIn: boolean;
  session: Session;
  showingNumber: number;
  accentColour: string;
}) {
  return (
    <div>
      {showingNumber ? (
        <h3 className="text-sm font-semibold uppercase text-gray-800 mb-1">
          Showing {showingNumber}
        </h3>
      ) : null}

      <ul className="space-y-2 text-sm" style={{ color: accentColour }}>
        {session.parent && (
          <li>
            <Link
              href={`/events/${session.parent.event.slug}`}
              className="flex gap-2 group"
              target="_blank"
            >
              <FiGrid className="h-5 w-5 mt-[1px]" />
              <span className="font-medium group-hover:underline">
                Part of {session.parent.event.name}
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link
            href={`/venues/${session.venue.slug}`}
            className="flex gap-2 group"
            target="_blank"
          >
            <FiMapPin className="h-5 w-5 mt-[1px]" />
            <span className="font-medium group-hover:underline">
              {session.venue.name}
            </span>
          </Link>
        </li>
        <li className="flex gap-2">
          <FiCalendar className="h-5 w-5 mt-[1px]" />
          <span className="text-black">{formatDate(session.start)}</span>
        </li>
        <li className="flex gap-2">
          <FiClock className="h-5 w-5 mt-[1px]" />
          <span className="text-black">
            {formatTime(session.start)} - {formatTime(session.end)}
          </span>
        </li>
        {dropIn && (
          <li className="flex gap-2">
            <FaWalking className="h-5 w-5 mt-[1px]" />
            <span className="text-black">Drop-in Event</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function EventDetailsSidebar({
  event,
  accentColour,
}: {
  event: EventWithSessions;
  accentColour: string;
}) {
  return (
    <div className="bg-white border-gray-200 border p-4 text-left">
      <h2 className="text-black text-lg font-semibold mb-2">Event Details</h2>
      <div className="flex gap-4 flex-wrap">
        {event.sessions.map((session, i) => (
          <EventSession
            session={session}
            showingNumber={event.sessions.length === 1 ? 0 : i + 1}
            key={i}
            accentColour={accentColour}
            dropIn={event.dropIn}
          />
        ))}
      </div>
    </div>
  );
}
