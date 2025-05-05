import React from 'react';
import EventCard from '../EventCard';
import { Event } from '../lib/types';

type TalkListProps = {
  talks: Event[];
};

export default function TalkList({ talks }: TalkListProps) {
  if (talks.length === 0) {
    return <p>No talks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {talks.map((talk, id) => (
        <EventCard key={`${talk.slug}-${id}`} talk={talk} id={id} />
      ))}
    </div>
  );
}
