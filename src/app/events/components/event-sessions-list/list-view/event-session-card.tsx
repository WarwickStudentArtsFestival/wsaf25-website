import React from 'react';
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiGrid,
  FiMapPin,
  FiRepeat,
  FiUsers,
} from 'react-icons/fi';
import Link from 'next/link';
import TrackPill from '../../../../components/track/TrackPill';
import { EventSession } from '@/lib/events';
import { FaWalking } from 'react-icons/fa';
import { eventCategories } from '@/data/events';
import ErrorMessage from '@/app/components/ErrorMessage';

export default function EventSessionCard({
  eventSession,
  hideVenue,
}: {
  eventSession: EventSession;
  hideVenue?: boolean;
}) {
  const category = eventCategories.find(
    (c) => c.pretalxTrack === eventSession.event.categoryPretalxTrack,
  );
  if (!category) {
    return <ErrorMessage msg="Track category not found" />;
  }
  return (
    <Link href={`/events/${eventSession.event.id}`}>
      <div
        className="border py-4 px-2 md:p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg"
        style={{ background: `${category.colour}10` }}
      >
        <div className="flex justify-between">
          <TrackPill
            size={17}
            padding={5}
            track={eventSession.event.categoryPretalxTrack}
          />
          <div>
            {eventSession.event.dropIn && (
              <span className="flex gap-0.5 items-center text-teal rounded-md border-teal border px-1 text-sm bg-teal-50">
                <FaWalking className="text-teal" /> Drop-in
              </span>
            )}
          </div>
        </div>

        <div className="flex mt-3 flex-col flex-grow">
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: category.colour }}
          >
            {eventSession.parent && `${eventSession.parent.event.name}: `}
            {eventSession.event.name}
          </h3>
          <ul className="text-sm space-y-1">
            {eventSession.parent && (
              <li className="flex items-center gap-2">
                <FiGrid style={{ color: category.colour }} />
                <span>Part of {eventSession.parent.event.name}</span>
              </li>
            )}
            {eventSession.event.artist.name && (
              <li className="flex items-center gap-2">
                <FiUsers style={{ color: category.colour }} />
                <span>{eventSession.event.artist.name}</span>
              </li>
            )}
            {!hideVenue && (
              <li className="flex items-center gap-2">
                <FiMapPin style={{ color: category.colour }} />
                <span>{eventSession.venueName}</span>
              </li>
            )}
            {eventSession.start && eventSession.end && (
              <>
                <li className="flex items-center gap-2">
                  <FiCalendar style={{ color: category.colour }} />
                  <span>
                    {eventSession.start.toLocaleDateString('en-gb', {
                      weekday: 'long',
                    })}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FiClock style={{ color: category.colour }} />
                  <span>
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
                  </span>
                </li>
              </>
            )}
            {eventSession.event.sessionCount > 1 && (
              <li className="flex items-center gap-2">
                <FiRepeat style={{ color: category.colour }} />
                <span>{eventSession.event.sessionCount} Showings</span>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm font-medium">
          <span>View Details</span>
          <FiArrowRight style={{ color: category.colour }} />
        </div>
      </div>
    </Link>
  );
}
