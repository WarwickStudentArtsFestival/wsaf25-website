'use client';

import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Icons from './Icons';
import Colours from './Colours';

export default function Press() {
  return (
    <main>
      <PageHeader />
      <h1 className="text-teal text-2xl font-semibold mb-2">Press Kit</h1>


      <HighlightedHeading text="Colour Palette" />
      <Colours />

      <HighlightedHeading text="Icons" />
      <Icons />

      <HighlightedHeading text="Font" />
      <h3 className="text-black leading-tight mb-8">
        We use{' '}
        <a
          className="text-purple"
          href="https://fonts.google.com/specimen/Lexend"
        >
          the Lexend variable font
        </a>{' '}
        for all of our text: on our website, in all of our marketing and for doccuments.
      </h3>
    </main>
  );
}
