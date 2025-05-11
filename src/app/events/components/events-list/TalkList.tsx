'use client';
import React from 'react';
import TalkCard from './TalkCard';
import { Talk } from '@/app/lib/types';

type TalkListProps = {
  talks: Talk[];
};

export default function TalkList({ talks }: TalkListProps) {
  const TALKS_BEFORE_SCROLL = 4;

  if (!talks || talks.length === 0) {
    return <p>No events found. Maybe enable some filters?</p>;
  }

  return (
    <div
      className={`relative w-full grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2 ${
        talks.length > TALKS_BEFORE_SCROLL
          ? 'max-h-[500px] overflow-y-auto'
          : 'h-auto'
      }`}
    >
      {talks.map((talk, id) => (
        <div key={`${talk.code}-${id}`} className="w-full sm:p-2">
          <TalkCard talk={talk} id={id} />
        </div>
      ))}
    </div>
  );
}
