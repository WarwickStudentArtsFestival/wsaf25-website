import React from 'react';
import Image from 'next/image';
import { Talk } from './lib/types';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <div
      key={`${talk.code}-${id}`}
      className={`border p-4 rounded shadow text-left ${
        talk.state === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'
      }`}
    >
      <h2 className="text-xl font-semibold">{talk.title}</h2>

      {talk.image && (
        <Image
          src={talk.image}
          alt={talk.title}
          width={200}
          height={200}
          className="rounded mt-2 mb-4"
        />
      )}

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

      <p className="mt-2 text-gray-800">{talk.description}</p>
    </div>
  );
}
