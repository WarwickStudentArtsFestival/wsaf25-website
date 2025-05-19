import React from 'react';
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import TrackPill from '../../../components/track/TrackPill';
import { EventSession } from '@/lib/events';
import { formatTime } from '@/lib/dateUtils';

type InfoItem = {
  icon: React.ReactNode;
  text: string;
  showOnSmall?: boolean;
};

export default function EventSessionCard({
  eventSession,
}: {
  eventSession: EventSession;
}) {
  const infoItems: InfoItem[] = [
    {
      icon: <FiMapPin className="text-purple-500" />,
      text: eventSession.venueName,
      showOnSmall: true,
    },
    {
      icon: <FiCalendar className="text-purple-500" />,
      text: eventSession.start.toLocaleDateString([], { weekday: 'long' }),
      showOnSmall: false,
    },
    {
      icon: <FiClock className="text-purple-500" />,
      text: `${formatTime(eventSession.start)} - ${formatTime(eventSession.end)}`,
      showOnSmall: true,
    },
  ];

  return (
    <Link href={`/events/${eventSession.event.id}`}>
      <div className="border py-4  px-2 md:p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg">
        <TrackPill track={eventSession.event.categoryPretalxTrack} />
        <div className="flex flex-col flex-grow">
          <h3 className="text-teal text-xl font-semibold mb-3">
            {eventSession.event.name}
          </h3>
          <div className="block">
            {infoItems.map(({ icon, text, showOnSmall }, index) => (
              <p
                key={index}
                className={`text-sm flex items-center gap-2 mb-2 ${
                  showOnSmall ? '' : 'hidden sm:flex'
                }`}
              >
                <span className="w-1/11">{icon}</span>
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-black text-sm font-medium">
          <span>View Details</span>
          <FiArrowRight className="text-purple-500" />
        </div>
      </div>
    </Link>
  );
}
