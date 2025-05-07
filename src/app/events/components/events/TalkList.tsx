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
    <div className="relative max-md:h-[500px]">
      <div className="absolute visible sm:hidden right-1 top-0 bottom-0 w-2 bg-gray-200 rounded-full z-10">
        <div
          className="bg-purple rounded-full w-full transition-all duration-150"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      <div
        ref={scrollRef}
        className="max-md:h-[500px] left-2 max-md:overflow-y-auto pr-4"
      >
        <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {talks.map((talk, id) => (
            <div key={`${talk.code}-${id}`} className="h-full">
              <TalkCard talk={talk} id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
