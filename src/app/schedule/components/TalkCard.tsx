import React from 'react';
import Image from 'next/image';
import { FiMapPin, FiClock, FiTag, FiUsers, FiList } from 'react-icons/fi';
import { Talk } from '../lib/types';
import DefaultImage from '@/assets/logo.png';
import Link from 'next/link';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <Link href={`/schedule/event/${talk.code}`}>
      <div
        key={`${talk.code}-${id}`}
        className="border text-left border-slate-300 rounded-md overflow-hidden w-full h-full flex flex-col hover:scale-[1.02] transition duration-100 ease-in-out"
      >
        {/* <div className="relative w-full h-59 overflow-hidden rounded-t-md">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-md">
            <Image
              src={talk.image || DefaultImage}
              alt={
                talk.image ? `${talk.title} background` : 'Default background'
              }
              fill
              className="object-cover blur-lg scale-110"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-white/70 dark:bg-black/50" />
            <Image
              src={talk.image || DefaultImage}
              alt={talk.title}
              fill={!!talk.image}
              width={!talk.image ? 100 : undefined}
              height={!talk.image ? 100 : undefined}
              className={
                talk.image
                  ? 'object-contain z-10'
                  : 'object-contain mx-auto my-auto align-center justify-center rounded-t-md'
              }
            />
          </div>
        </div> */}

        <p className="inline-flex items-center gap-1 px-3 py-1 w-fit text-sm font-medium text-purple-800 bg-purple-100 rounded-full">
          <FiTag className="text-purple-500" />
          <span>
            <strong>Type:</strong> {talk.submission_type.en}
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
        </div>
      </div>
    </Link>
  );
}
