import React from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Image from 'next/image';
import warwickTechCrewLogo from '@/assets/organisations/warwick-tech-crew.png';
import warwickSuLogo from '@/assets/organisations/warwick-su.svg';
import warwickPresentsLogo from '@/assets/organisations/warwick-presents.png';

export default function Perform() {
  return (
    <main className="space-y-8">
      <PageHeader />

      <section>
        <div className="mb-6">
          <HighlightedHeading text="Delivery Partners" />
        </div>

        <h1 className="text-2xl font-semibold text-teal mb-4">
          WSAF would not be possible without <br /> the generous support of our
          delivery partners
        </h1>
      </section>

      <section className="mb-16 mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Our Key Delivery Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <a
            href="https://www.warwicktechcrew.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={warwickTechCrewLogo}
              alt="Warwick Tech Crew logo"
              className="h-14 sm:h-20 w-auto transition-transform hover:scale-105"
            />
          </a>
          <a
            href="https://warwick.ac.uk/students/warwickpresents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={warwickPresentsLogo}
              alt="Warwick Presents logo"
              className="h-12 sm:h-16 w-auto transition-transform hover:scale-105"
            />
          </a>
          <a
            href="https://www.warwicksu.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={warwickSuLogo}
              alt="Warwick SU logo"
              className="h-12 sm:h-18 w-auto transition-transform hover:scale-105"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
