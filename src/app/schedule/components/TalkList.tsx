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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-16">
      {talks.map((talk, id) => (
        <TalkCard key={`${talk.code}-${id}`} talk={talk} id={id} />
      ))}
    </div>
  );
}
