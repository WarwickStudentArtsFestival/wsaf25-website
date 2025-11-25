import React from 'react';
import Link from 'next/link';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function RecapMessage() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <HighlightedHeading text="A Message About WSAF 2025" />

      <p className="mb-4">
        The <strong>Warwick Student Arts Festival</strong> came back to campus
        for the <strong>second year</strong> on{' '}
        <strong>13th-16th June 2025</strong>, featuring{' '}
        <Link
          href="/events"
          target="_blank"
          className="text-teal hover:underline font-semibold"
        >
          165 events
        </Link>{' '}
        across{' '}
        <Link
          href="/venues"
          target="_blank"
          className="text-teal hover:underline font-semibold"
        >
          10 venues
        </Link>{' '}
        and welcoming <strong>over 8000 attendees</strong>. In addition to
        continuing on the success of the previous year, WSAF 2025 introduced a{' '}
        <Link
          href="/bar"
          target="_blank"
          className="text-teal hover:underline font-semibold"
        >
          fully student-run outdoor bar
        </Link>{' '}
        and partnered with{' '}
        <Link
          href="/events/Q3ZVBG"
          target="_blank"
          className="text-teal hover:underline font-semibold"
        >
          Music Theatre Warwick&apos;s Stagefest
        </Link>{' '}
        and{' '}
        <Link
          href="/events/MNSAYG"
          target="_blank"
          className="text-teal hover:underline font-semibold"
        >
          Warwick BandSoc&apos;s WickFest
        </Link>{' '}
        to form an{' '}
        <strong>even bigger celebration of student creativity</strong>.
      </p>

      <p className="mb-4">
        Not only did WSAF 2025 give <strong>300+ students</strong> the
        opportunity to <strong>showcase their talents</strong>, but in a
        post-event survey,{' '}
        <strong>
          over 50% of respondents said that WSAF encouraged them to see
          something they usually wouldn&apos;t see
        </strong>
        , with{' '}
        <strong>
          30% of respondents not normally attending live arts events or
          performances at all
        </strong>
        . Overall, we received an <strong>average rating of 9/10</strong>, with
        <strong>
          everyone saying they would be likely to recommend the festival to
          their friends and attend the festival again
        </strong>
        .
      </p>

      <p className="mb-2">
        <strong>
          Thank you to everyone who attended, took part in, or organised Warwick
          Student Arts Festival 2025. Our core goal is to celebrate student
          creativity at the University of Warwick, and we couldn&apos;t have
          achieved that without the countless hours of organisation, practise
          and teamwork going on in the months, weeks and days leading up to the
          festival.
        </strong>
      </p>
      <p className="text-sm text-slate-800">Josh Heng, WSAF Organiser Team</p>
    </div>
  );
}
