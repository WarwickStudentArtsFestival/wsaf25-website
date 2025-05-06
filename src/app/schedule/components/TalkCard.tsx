import React from 'react';
import { FiMapPin, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { Talk } from '../lib/types';
import Link from 'next/link';
import TrackIcon from './TrackIcon';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

const formatDate = (time: string) => {
  const date = new Date(time);
  return date.toLocaleDateString([], {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

function formatDuration(durationInMinutes: number): string {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return minutes > 0 ? `${hours}h ${minutes} min` : `${hours}h`;
}

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <Link href={`/schedule/event/${talk.code}`}>
      <div
        key={`${talk.code}-${id}`}
        className="border p-4 text-left text-black border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-150 ease-in-out shadow-lg"
      >
        <p className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 rounded-full mb-4">
          <span className="p-2 bg-purple-200 text-purple-800 border border-purple-800 rounded-full">
            <TrackIcon track={talk.track?.en} size={17} />
          </span>
          <span className="bg-purple-200 text-purple-800 border border-purple-800 rounded-full px-3 py-1">
            <strong>{talk.track?.en}</strong>
          </span>
        </p>

        <div className="flex flex-col flex-grow">
          {talk.slot?.room && (
            <p className="text-sm  flex items-center gap-2 mb-2">
              <FiMapPin className="text-purple-500" />
              {talk.slot.room.en}
            </p>
          )}

          <h3 className="text-teal text-xl font-semibold mb-3">{talk.title}</h3>

          {talk.slot?.start && (
            <>
              <p className="text-sm  flex items-center gap-2 mb-1">
                <FiCalendar className="text-purple-500" />
                {formatDate(talk.slot.start)}
              </p>
              <p className="text-sm  flex items-center gap-2 mb-2">
                <FiClock className="text-purple-500" />
                {formatDuration(talk.duration)}
              </p>
            </>
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
