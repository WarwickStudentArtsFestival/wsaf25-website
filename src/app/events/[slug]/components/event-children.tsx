import { EventWithSessions } from '@/lib/events';
import Link from 'next/link';
import React from 'react';
import { FiUsers } from 'react-icons/fi';

export default function EventChildren({ event }: { event: EventWithSessions }) {
  const children = event.sessions.flatMap((session) => session.children || []);
  if (children.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {children.map((childSession) => (
        <Link
          key={childSession.id}
          href={`/events/${childSession.event.slug}`}
          className="grow block bg-white shadow-lg border border-gray-200 border-gray-200 p-4 hover:scale-105 transition duration-100 ease-in-out"
        >
          <h2 className="font-semibold text-sm text-black text-left">
            {childSession.event.name}
          </h2>
          <ul>
            {childSession.event.artist.name && (
              <li className="flex text-black items-center gap-1 text-xs">
                <FiUsers />
                <span>{childSession.event.artist.name}</span>
              </li>
            )}
            <li className="flex items-center gap-1 text-xs">
              <span>
                {childSession.start.toLocaleTimeString('en-gb', {
                  hour: 'numeric',
                  hour12: true,
                  minute: '2-digit',
                })}{' '}
                -{' '}
                {childSession.end.toLocaleTimeString('en-gb', {
                  hour: 'numeric',
                  hour12: true,
                  minute: '2-digit',
                })}
              </span>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
