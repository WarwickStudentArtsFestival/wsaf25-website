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
import { EventSession, getEventCategory } from '@/lib/events';
import { FaWalking } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';

export default function EventSessionCard({
  eventSession,
  hideVenue,
  selectEvent,
}: {
  eventSession: EventSession;
  hideVenue?: boolean;
  selectEvent?: () => void;
}) {
  const category = getEventCategory(eventSession.event);
  return (
    <Link
      href={`/events/${eventSession.event.slug}`}
      onClick={
        selectEvent
          ? (e) => {
              e.preventDefault();
              selectEvent();
            }
          : undefined
      }
    >
      <div
        className="border py-4 px-2 md:p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg"
        style={{ background: `${category.colour}10` }}
      >
        <div className="flex justify-between flex-wrap gap-2">
          <TrackPill
            size={17}
            padding={5}
            track={eventSession.event.categoryPretalxTrack}
          />
          <div className="flex gap-2 items-center flex-wrap">
            {(eventSession.event.dropIn ||
              eventSession.parent?.event.dropIn) && (
              <span
                className="flex gap-0.5 items-center rounded-md border px-1 text-sm"
                style={{
                  background: `${category.colour}10`,
                  borderColor: category.colour,
                  color: category.colour,
                }}
              >
                <FaWalking /> Drop-in
              </span>
            )}
            {(eventSession.event.ticketLink ||
              eventSession.parent?.event.ticketLink) && (
              <span
                className="flex gap-0.5 items-center rounded-md border px-1 text-sm"
                style={{
                  background: `${category.colour}10`,
                  borderColor: category.colour,
                  color: category.colour,
                }}
              >
                <FaTicket /> Ticket Required
              </span>
            )}
          </div>
        </div>

        <div className="flex mt-3 flex-col flex-grow">
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: category.colour }}
          >
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
                <span>{eventSession.venue.name}</span>
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
