import { Event } from '@/lib/events';
import React from 'react';
import { FiGlobe, FiInstagram } from 'react-icons/fi';

export default function EventArtist({
  event,
  accentColour,
}: {
  event: Event;
  accentColour: string;
}) {
  if (
    !event.artist.description &&
    !event.artist.website &&
    !event.artist.instagramHandle &&
    !event.artist.image
  ) {
    return null;
  }

  return (
    <div className="bg-white border-gray-200 p-4 flex mt-4">
      <div>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-semibold text-black">{event.artist.name}</h2>

          <div
            className="flex items-center gap-4 text-sm font-semibold"
            style={{ color: accentColour }}
          >
            {event.artist.instagramHandle && (
              <a
                href={`https://instagram.com/${event.artist.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-0.5 items-center hover:underline"
              >
                <FiInstagram className="w-5 h-5 mt-0.5" />
                {event.artist.instagramHandle}
              </a>
            )}

            {event.artist.website && (
              <a
                href={event.artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-0.5 items-center hover:underline"
              >
                <FiGlobe className="w-5 h-5" />
                Website
              </a>
            )}
          </div>
        </div>

        {event.artist.description && (
          <div className="text-slate-800 text-sm">
            {event.artist.description}
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}
