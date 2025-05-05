import React from 'react';
import { Talk } from './lib/types';

type TalkCardProps = {
  talk: Talk;
  id: number;
};

export default function TalkCard({ talk, id }: TalkCardProps) {
  return (
    <div
      key={`${talk.code}-${id}`}
      className={`border p-4 rounded shadow ${
        talk.state === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'
      }`}
    >
      <h2 className="text-xl font-semibold">{talk.title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        {talk.start && new Date(talk.start).toLocaleString()} –{' '}
        {talk.end && new Date(talk.end).toLocaleString()}
      </p>

      {talk.room && (
        <p className="text-sm text-gray-700">
          <strong>Room:</strong> {talk.room}
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

      {talk.tags.length > 0 && (
        <p className="text-sm text-gray-700">
          <strong>Tags:</strong> {talk.tags.join(', ')}
        </p>
      )}

      <p className="mt-2 text-gray-800">{talk.description}</p>
    </div>
  );
}
