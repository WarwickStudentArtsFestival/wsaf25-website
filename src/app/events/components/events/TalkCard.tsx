import React from 'react';
import {
  FiMapPin,
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiAlertCircle,
  FiUser,
} from 'react-icons/fi';
import { Talk } from '../../lib/types';
import Link from 'next/link';
import TrackPill from '../track/TrackPill';
import { formatDate, formatTime } from '../../lib/dateUtils';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <Link href={`/events/${talk.code}`}>
      <div
        key={`${talk.code}-${id}`}
        className="border p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg"
      >
        <TrackPill track={talk.track?.en} />
        <div className="flex flex-col flex-grow">
          <h3 className="text-teal text-xl font-semibold mb-3">{talk.title}</h3>

          {talk.slot?.start ? (
            [
              {
                icon: <FiMapPin className="text-purple-500" />,
                text: talk.slot.room.en,
              },
              {
                icon: <FiCalendar className="text-purple-500" />,
                text: formatDate(talk.slot.start),
              },
              {
                icon: <FiClock className="text-purple-500" />,
                text: `${formatTime(talk.slot.start)} - ${formatTime(talk.slot.end)}`,
              },
              {
                icon: <FiUser className="text-purple-500" />,
                text: talk.speakers.map((s) => s.name).join(', '),
              },
            ].map(({ icon, text }, index) => (
              <p key={index} className="text-sm flex items-center gap-2 mb-2">
                {icon}
                {text}
              </p>
            ))
          ) : (
            <p className="text-sm flex items-center gap-2 mb-1">
              <FiAlertCircle className="text-purple-500" />
              Not Confirmed Yet
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-4 text-black text-sm font-medium">
          <span>View Details</span>
          <FiArrowRight className="text-purple-500" />
        </div>
      </div>
    </Link>
  );
}
