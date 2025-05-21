import React from 'react';
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi';
import Link from 'next/link';
import TrackPill from '../../../components/track/TrackPill';
import { EventSession } from '@/lib/events';
import { FaWalking } from 'react-icons/fa';
import { trackColourMap } from '@/lib/trackTypes';

export default function EventSessionCard({
  eventSession,
  hideVenue,
}: {
  eventSession: EventSession;
  hideVenue?: boolean;
}) {
  const rawTrack = eventSession.event.categoryPretalxTrack;
  const trackKey = rawTrack.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';
  const bgColor = `${trackColor}10`;

  return (
    <Link href={`/events/${eventSession.event.id}`}>
      <div
        className="border py-4 px-2 md:p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg"
        style={{ background: bgColor }}
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
            style={{ color: trackColor }}
          >
            {eventSession.event.name}
          </h3>
          <ul className="text-sm space-y-1">
            {eventSession.event.artistName && (
              <li className="flex items-center gap-2">
                <FiUsers style={{ color: trackColor }} />
                <span>{eventSession.event.artistName}</span>
              </li>
            )}
            {!hideVenue && (
              <li className="flex items-center gap-2">
                <FiMapPin style={{ color: trackColor }} />
                <span>{eventSession.venueName}</span>
              </li>
            )}
            <li className="flex items-center gap-2">
              <FiCalendar style={{ color: trackColor }} />
              <span>
                {eventSession.start.toLocaleDateString('en-gb', {
                  weekday: 'long',
                })}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FiClock style={{ color: trackColor }} />
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
          </ul>
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm font-medium">
          <span>View Details</span>
          <FiArrowRight style={{ color: trackColor }} />
        </div>
      </div>
    </Link>
  );
}
