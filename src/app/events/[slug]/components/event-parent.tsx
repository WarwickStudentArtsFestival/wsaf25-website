import React from 'react';
import { EventSession } from '@/lib/events';
import Link from 'next/link';

export default function EventParent({
  parentEvent,
}: {
  parentEvent: EventSession;
}) {
  return (
    <Link
      href={`/events/${parentEvent.event.slug}`}
      className="block bg-white shadow-lg border border-gray-200 border-gray-200 p-4 mt-4 hover:scale-105 transition duration-100 ease-in-out"
    >
      <h2 className="font-semibold text-black">{parentEvent.event.name}</h2>
      <p className="text-sm text-black">
        This event is part of{' '}
        <span className="font-medium">{parentEvent.event.name}</span>:
      </p>
      <p className="text-sm">
        {parentEvent.event.shortDescription || parentEvent.event.description}
      </p>
    </Link>
  );
}
