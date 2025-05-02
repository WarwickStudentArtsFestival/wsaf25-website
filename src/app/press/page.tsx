import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Icons from './Icons';
import Colours from './Colours';
import { Logos } from '@/app/press/Logos';
import { Copy } from '@/app/press/Copy';
import { PartnerLogos } from '@/app/press/PartnerLogos';
import Media from '@/app/press/Media';
import type { Metadata } from 'next';

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
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p>
          This page provides information and resources to publicise the Warwick
          Student Arts Festival. Any resources on this page are free to use and
          distribute.
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

      <HighlightedHeading text="Delivery Partner Logos" />
      <p className="max-w-2xl mx-auto px-4">Click each logo to download.</p>
      <PartnerLogos />
    </main>
  );
}
