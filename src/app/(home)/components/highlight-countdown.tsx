'use client';
import { FiCalendar } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import homepageConfig from '@config/homepage-config';

// WSAF starts 10am on Friday 13th June
const targetDate = new Date(
  homepageConfig.about.countdown.countdownDateIso,
).getTime();

export default function HighlightCountdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href="/events"
      className="inline-block mb-1 bg-purple px-6 py-4 rounded-md drop-shadow-xs hover:scale-105 text-white mx-2 text-center w-full max-w-md"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex items-center gap-2 text-yellow text-xl">
          <FiCalendar className="text-2xl" />
          {homepageConfig.about.countdown.title}
        </p>
        <h3 className="text-2xl font-semibold">{timeLeft}</h3>
        <p className="text-base text-slate-300 leading-4 text-center">
          {homepageConfig.about.countdown.subtitle}
        </p>
      </div>
    </Link>
  );
}
