import React from 'react';

export function Copy() {
  return (
    <div className="mb-4 mx-auto max-w-7xl px-4">
      <p>
        Feel free to directly copy or modify any of the copy below to suit your
        publication. We do however ask that you try to get these key points
        across:
      </p>
      <ol className="list-decimal list-inside text-sm text-slate-800">
        <li>
          This is a <strong>fully student-run </strong> arts festival.
        </li>
        <li>
          The festival will take place on{' '}
          <strong>Fri 13th - Mon 16th June</strong>, or{' '}
          <strong>Term 3, Week 8-9</strong>.
        </li>
        <li>
          WSAF is a festival for <strong>every type of art</strong>.
        </li>
        <li>
          <strong>Everyone</strong> is welcome to get involved, no matter their
          experience.
        </li>
      </ol>

      <p className="mt-2 mb-1">Some example copy is found below:</p>
      <ul className="text-sm text-slate-800 space-y-4">
        <li>
          The Warwick Student Arts Festival is a fully student-run free,
          four-day arts festival taking place in Week 8-9.
        </li>
        <li>
          The Warwick Student Arts Festival is a free, student-run celebration
          of the arts, taking place in Week 8 and 9 this term. From Friday 13th
          to Monday 16th June they&apos;ll have 4 days full of art, theatre,
          dance, music, spoken word, comedy and so much more, all on Warwick’s
          campus.
        </li>
        <li>
          The Warwick Student Arts Festival is a free, four-day arts festival
          taking place in Week 8 and 9 of Term 3, celebrating all aspects of the
          arts at Warwick. They&apos;re a fully student-run event, planned,
          organised and run by students, for students. Last year, WSAF hosted
          over 2,000 attendees across over 70 events - and this year
          they&apos;re planning to go even bigger! From multiple stages across
          campus to an outdoor, licensed bar, it’ll be sure to be an
          unforgettable experience.
        </li>
      </ul>

      <p className="mt-2">
        Please contact us at{' '}
        <a href="mailto:info@wsaf.org.uk" target="_blank" className="text-teal">
          info@wsaf.org.uk
        </a>{' '}
        or at{' '}
        <a
          href="https://www.instagram.com/wsaf25/"
          target="_blank"
          className="text-teal"
        >
          @wsaf25
        </a>{' '}
        if you&apos;d like personalised copy or would like us to check copy that
        you have created.
      </p>
    </div>
  );
}
