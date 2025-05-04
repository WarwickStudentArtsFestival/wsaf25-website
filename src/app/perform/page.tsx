import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import SubmissionsFaq from '@/app/(home)/components/faq/submissions-faq';

import Artwork from '@/assets/perform/fabgallery.jpg';
import Drama from '@/assets/perform/lastorders.jpg';
import Music from '@/assets/perform/orch.jpg';
import Dance from '@/assets/perform/dance.jpg';
import SpokenWord from '@/assets/perform/spoken-word.jpg';

import RoleCard from '../components/RoleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perform or Exhibit',
};

export default function Perform() {
  const performanceTypes = [
    {
      name: 'Artwork',
      description:
        'Visual art displayed across our Art Galleries in FAB. This includes photography, painting, sculpture, and installations from student artists. Last year we had tapestry work and a tie dye workshop!',
      image: Artwork,
    },
    {
      name: 'Dance',
      description:
        'Dance performances to light up the main stage with rhythm, movement, and expression. Open to all groups and individuals.',
      image: Dance,
    },
    {
      name: 'Drama',
      description:
        'Theatrical productions ranging from original student-written works to classic plays. WSAF 2024 showcased six student written plays! Drama at WSAF includes everything from monologues to full ensemble performances.',
      image: Drama,
    },
    {
      name: 'Music',
      description:
        'Musical performances from bands, soloists, choirs, and ensembles. Last year, Wind Orchestra played continuously for eight hours in their charity playathon! WSAF provides an open platform for musicians of all styles and genres to showcase their talent.',
      image: Music,
    },
    {
      name: 'Spoken Word',
      description:
        'Poetry, storytelling, and stand-up comedy, spoken word performances give space to personal expression and creativity using the power of voice.',
      image: SpokenWord,
    },
  ];

  return (
    <main className="mb-4">
      <PageHeader />
      <HighlightedHeading text="Submit to WSAF" />
      <div className="max-w-6xl mx-auto px-4">
        <p>
          While event submissions are now closed, if you are still interested in
          performing please contact us at{' '}
          <a
            href="https://www.instagram.com/wsaf25/"
            target="_blank"
            className="text-teal"
          >
            @wsaf25
          </a>{' '}
          or fill in the{' '}
          <a
            href="https://submit.wsaf.org.uk/2025/cfp"
            target="_blank"
            className="text-teal"
          >
            submissions form
          </a>{' '}
          and we&apos;ll try and fit you in. Please note that we cannot
          guarantee an available slot or inclusion in any promotional or
          physical material.
        </p>
        {/* <HighlightCountdown /> */}
      </div>
      <section className="my-4 max-w-8xl mx-auto">
        <HighlightedHeading text="Perform Or Exhibit" />
        <div className="mt-2 grid w-full px-16 py-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 justify-center">
          {performanceTypes.map((role) => (
            <RoleCard
              image={role.image}
              imageAlt="Placeholder"
              key={role.name}
              title={role.name}
              footer="placeholder"
              link='"#"'
              description={[role.description]}
            />
          ))}
        </div>
      </section>
      <div className="max-w-7xl mx-8 xl:mx-auto p-4">
        <HighlightedHeading text="FAQ" />
        <SubmissionsFaq />
      </div>
    </main>
  );
}
