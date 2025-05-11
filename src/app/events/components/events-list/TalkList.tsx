'use client';
import React from 'react';
import TalkCard from './TalkCard';
import { Talk } from '@/app/lib/types';

type TalkListProps = {
  talks: Talk[];
};

export default function TalkList({ talks }: TalkListProps) {
  if (!talks || talks.length === 0) {
    return <p>No events found. Maybe enable some filters?</p>;
  }

  return (
    <div className="relative max-md:h-[500px] overflow-hidden">
      <div className="max-md:h-[500px] w-full max-md:overflow-y-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2">
        {talks.map((talk, id) => (
          <div key={`${talk.code}-${id}`} className="h-full w-full sm:p-2">
            <TalkCard talk={talk} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
}
