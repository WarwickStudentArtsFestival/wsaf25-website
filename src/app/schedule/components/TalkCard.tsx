import React from 'react';
import Image from 'next/image';
import { Talk } from '../lib/types';
import DefaultImage from '@/assets/images/fab-terrace-2.jpg';
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
        className="border text-left border-slate-300 rounded-md overflow-hidden w-full flex flex-col hover:scale-[1.02] transition duration-100 ease-in-out"
      >
        <div className="relative w-full h-59 overflow-hidden rounded-t-md">
          {(talk.image && (
            <Image
              src={talk.image}
              alt={talk.title}
              fill
              className="object-cover rounded-t-md"
            />
          )) || (
            <Image
              src={DefaultImage}
              alt={talk.title}
              fill
              className="object-cover rounded-t-md"
            />
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-teal-700 text-xl font-semibold mb-2">
            {talk.title}
          </h3>

          {talk.slot?.room && (
            <p className="text-sm text-gray-700">
              <strong>Room:</strong> {talk.slot.room.en}
            </p>
          )}

          {talk.slot?.start && (
            <p className="text-sm text-gray-700">
              <strong>Start:</strong>{' '}
              {new Date(talk.slot.start).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          )}

          {talk.slot?.end && (
            <p className="text-sm text-gray-700">
              <strong>End:</strong>{' '}
              {new Date(talk.slot.end).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          )}

          {talk.submission_type && (
            <p className="text-sm text-gray-700">
              <strong>Type:</strong> {talk.submission_type.en}
            </p>
          )}

          {talk.track && (
            <p className="text-sm text-gray-700">
              <strong>Track:</strong> {talk.track.en}
            </p>
          )}

          {talk.duration && (
            <p className="text-sm text-gray-700">
              <strong>Duration:</strong> {talk.duration} min
            </p>
          )}

          {talk.speakers.length > 0 && (
            <p className="text-sm text-gray-700">
              <strong>Speakers:</strong>{' '}
              {talk.speakers.map((s) => s.name).join(', ')}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-800">{talk.description}</p>
        </div>
      </div>
    </Link>
  );
}
