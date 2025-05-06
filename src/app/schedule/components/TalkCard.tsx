import React from 'react';
import { FiMapPin, FiClock, FiUsers, FiList } from 'react-icons/fi';
import { Talk } from '../lib/types';
import Link from 'next/link';
import TrackIcon from './TrackIcon';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <Link href={`/schedule/event/${talk.code}`}>
      <div
        key={`${talk.code}-${id}`}
        className="border p-4 text-left border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-100 ease-in-out"
      >
        <p className="inline-flex items-center gap-2 text-sm font-medium rounded-full">
          <span className=" p-2 bg-purple-200 text-purple-800 border border-purple-800 rounded-full">
            <TrackIcon track={talk.track?.en} size={17} />
          </span>
          <span className="bg-purple-200 text-purple-800 border border-purple-800 rounded-full px-3 py-1">
            <strong>{talk.track?.en}</strong>
          </span>
        </p>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-teal-700 text-xl font-semibold mb-2">
            {talk.title}
          </h3>
          {talk.slot?.room && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <FiMapPin className="inline text-gray-500" />
              <strong>Room:</strong> {talk.slot.room.en}
            </p>
          )}
          {talk.slot?.start && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <FiClock className="inline text-gray-500" />
              <strong>Start:</strong>{' '}
              {new Date(talk.slot.start).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          )}
          {talk.track && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <FiList className="inline text-gray-500" />
              <strong>Track:</strong> {talk.track.en}
            </p>
          )}
          {talk.speakers.length > 0 && (
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <FiUsers className="inline text-gray-500" />
              <strong>Speakers:</strong>{' '}
              {talk.speakers.map((s) => s.name).join(', ')}
            </p>
          )}

          {/* <p className="inline-flex items-center gap-1 px-3 py-1 w-fit text-sm font-medium text-orange bg-orange-100 rounded-full">
            <FiTag className="text-purple-500" />
            <span>
              <strong>Type:</strong> {talk.submission_type.en}
            </span>
          </p> */}
        </div>
      </div>
    </Link>
  );
}
