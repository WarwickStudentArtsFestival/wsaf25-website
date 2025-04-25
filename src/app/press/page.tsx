'use client';

import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import ColourBox from './ColourBox';

export default function Press() {
  const colors = ['#4f1d75', '#ff0054', '#ff5400', '#ffbd00', '#087f8c'];
  return (
    <main>
      <PageHeader />
      <h1 className="text-teal text-2xl font-semibold mb-2">Press Kit</h1>

      <HighlightedHeading text="Colour Palette" />

      <div className="grid mx-auto max-w-7xl grid-cols-3 sm:grid-cols-5 gap-4 p-4">
        {colors.map((color, idx) => (
          <ColourBox key={idx} hex={color} />
        ))}
      </div>

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
    </main>
  );
}
