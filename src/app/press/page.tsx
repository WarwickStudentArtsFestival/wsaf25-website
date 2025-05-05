import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Icons from './Icons';
import Colours from './Colours';
import { Logos } from '@/app/press/Logos';
import { Copy } from '@/app/press/Copy';
import { PartnerLogos } from '@/app/press/PartnerLogos';
import Media from '@/app/press/Media';
import Submissions from '@/app/press/submissions';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press Kit',
  description:
    'This page provides information and resources to publicise the Warwick Student Arts Festival.',
};

export default function Press() {
  return (
    <main>
      <PageHeader />
      <h1 className="text-teal text-2xl font-semibold mb-2">Press Kit</h1>
      <div className="max-w-7xl mx-auto px-4 mb-4 space-y-4">
        <div>
          <p>
            The Warwick Student Arts Festival used to be a yearly event from{' '}
            <Link href="/history" target="_blank" className="text-teal">
              2004 to 2015
            </Link>
            . A group of students from{' '}
            <a
              href="https://www.warwicktechcrew.co.uk/"
              target="_blank"
              className="text-teal"
            >
              Tech Crew
            </a>{' '}
            decided to bring it back{' '}
            <a
              href="https://2024.wsaf.org.uk"
              target="_blank"
              className="text-teal"
            >
              last year
            </a>
            , and it was a huge success with 2,500+ attendees across 70+ events
            in 9 venues. This year we are planning to go even bigger with a
            4-day festival, merging with{' '}
            <a
              href="https://www.warwicksu.com/societies-sports/societies/Band/"
              target="_blank"
              className="text-teal"
            >
              BandSoc&apos;s WickFest
            </a>{' '}
            and{' '}
            <a
              href="https://www.warwicksu.com/societies-sports/societies/MusicTheatreWarwick/"
              target="_blank"
              className="text-teal"
            >
              MTW StageFest
            </a>{' '}
            and collaborating with{' '}
            <a
              href="https://warwick.ac.uk/study/undergraduate/opendays/"
              target="_blank"
              className="text-teal"
            >
              University Open Days
            </a>
            .
          </p>
        </div>
        <div>
          <p>
            This page provides information and resources to publicise the
            Warwick Student Arts Festival. Any resources on this page are free
            to use and distribute.
          </p>
          <p>
            For more information, please contact us at{' '}
            <a
              href="mailto:info@wsaf.org.uk"
              target="_blank"
              className="text-teal"
            >
              info@wsaf.org.uk
            </a>{' '}
            or on Instagram at{' '}
            <a
              href="https://www.instagram.com/wsaf25/"
              target="_blank"
              className="text-teal"
            >
              @wsaf25
            </a>
            .
          </p>
        </div>
      </div>

      <HighlightedHeading text="Logos" />
      <p className="max-w-2xl mx-auto px-4">Click each logo to download.</p>
      <Logos />

      <HighlightedHeading text="Copy" />
      <Copy />

      <HighlightedHeading text="Media" />
      <Media />

      <HighlightedHeading text="Colour Palette" />
      <p className="max-w-2xl mx-auto px-4">
        We use the following colours in all of our designs. Our primary colour
        is teal.
      </p>
      <Colours />

      <HighlightedHeading text="Icons" />
      <p className="max-w-2xl mx-auto px-4">Click each icon to download.</p>
      <Icons />

      <HighlightedHeading text="Font" />
      <p className="mb-8">
        We use{' '}
        <a
          className="text-teal"
          href="https://fonts.google.com/specimen/Lexend"
        >
          the Lexend variable font
        </a>{' '}
        for all of our text: on our website, in all of our marketing and for
        documents.
      </p>

      <HighlightedHeading text="Submissions" />
      <Submissions />
      
      <HighlightedHeading text="Delivery Partner Logos" />
      <p className="max-w-2xl mx-auto px-4">Click each logo to download.</p>
      <PartnerLogos />
    </main>
  );
}
