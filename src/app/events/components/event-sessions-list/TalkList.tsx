'use client';
import React from 'react';
import TalkCard from './TalkCard';
import { Talk } from '@/lib/types';

type TalkListProps = {
  talks: Talk[];
};

export default function TalkList({ talks }: TalkListProps) {
  if (!talks || talks.length === 0) {
    return <p>No events found. Maybe enable some filters?</p>;
  }

  return (
    <div
      className={`
        relative w-full grid gap-2
        grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2
        ${talks.length > 4 ? 'overflow-y-auto' : ''}
        max-h-[calc(6*10rem)] sm:max-h-[calc(6*10rem)]
      `}
    >
      {talks.map((talk, id) => (
        <div key={`${talk.code}-${id}`} className="w-full sm:p-2">
          <TalkCard talk={talk} id={id} />
        </div>
      ))}
    </div>
  );
}
