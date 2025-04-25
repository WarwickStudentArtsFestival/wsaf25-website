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

      <HighlightedHeading text="Font" />
      <h3 className="text-black leading-tight">
        We use{' '}
        <a
          className="text-purple"
          href="https://fonts.google.com/specimen/Lexend"
        >
          Lexend
        </a>{' '}
        for all our text.
      </h3>

      <HighlightedHeading text="Icons" />
      <Icons />
    </main>
  );
}
