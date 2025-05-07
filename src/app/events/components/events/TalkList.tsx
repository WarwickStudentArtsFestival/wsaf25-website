'use client';
import React, { useRef, useState, useEffect } from 'react';
import TalkCard from './TalkCard';
import { Talk } from '@/app/lib/types';

type TalkListProps = {
  talks: Talk[];
};

export default function TalkList({ talks }: TalkListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const percent = (scrollTop / scrollHeight) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  if (talks.length === 0) {
    return <p>No events found. Maybe enable some filters?</p>;
  }

  return (
    <div className="relative max-md:h-[500px] overflow-hidden">
      <div
        ref={scrollRef}
        className="max-md:h-[500px] w-full max-md:overflow-y-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2"
      >
        {talks.map((talk, id) => (
          <div key={`${talk.code}-${id}`} className="h-full w-full sm:p-2">
            <TalkCard talk={talk} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div
          className="bg-teal p-2 mx-4 transition-all duration-150 absolute sm:hidden left-1 top-0 bottom-0 w-2 z-10"
          style={{ height: `${scrollPercent}%` }}
        /> */
}
