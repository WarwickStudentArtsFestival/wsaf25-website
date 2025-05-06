import React from 'react';
import TalkCard from './TalkCard';
import { Talk } from '../lib/types';

type TalkListProps = {
  talks: Talk[];
};

export default function TalkList({ talks }: TalkListProps) {
  if (talks.length === 0) {
    return <p>No talks found.</p>;
  }

  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
      {talks.map((talk, id) => (
        <div key={`${talk.code}-${id}`} className="h-full">
          <TalkCard talk={talk} id={id} />
        </div>
      ))}
    </div>
  );
}
