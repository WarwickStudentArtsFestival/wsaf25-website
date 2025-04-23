'use client';
import {FiCalendar} from 'react-icons/fi';
import {useEffect, useState} from 'react';

// Submissions close end of Friday 2nd May
const targetDate = new Date('2025-05-02T22:59Z').getTime();

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
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <a
      href="https://submit.wsaf.org.uk/2025/cfp"
      className="inline-block mb-1 bg-purple px-6 py-2 rounded-md drop-shadow-xs hover:scale-105 text-white"
      target="_blank"
    >
      <FiCalendar className="mx-auto text-3xl text-yellow"/>
      <p className="text-yellow text-xs h-4">{timeLeft}</p>
      <h3 className="text-xl font-semibold">Event Submissions Closing Soon</h3>
      <p className="text-sm text-slate-300">Registration for events close on Friday Week 2 (2nd May)</p>
    </a>
  )
}