import React from 'react';
import { Metadata } from 'next';

import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import RoleCard from '@/app/components/role-card';
import SubmissionsFaq from '@/app/(home)/components/faq/tabs/submissions-faq';
import { FaPaintBrush } from 'react-icons/fa';
import performConfig from '@config/perform-config';
import mainConfig from '@config/main-config';

export const metadata: Metadata = {
  title: 'Perform or Exhibit',
};

export default function Perform() {
  return (
    <main className="mb-4">
      <PageHeader />
      <HighlightedHeading text="Submit to WSAF" />
      <div className="max-w-6xl mx-auto px-4">
        {!performConfig.closed ? (
          <p>
            Submit your performance, event, exhibition or anything in-between on
            our{' '}
            <a
              href={mainConfig.submissions.submitUrl}
              target="_blank"
              className="text-teal"
            >
              submissions form
            </a>
            !<br />
            Please contact us at{' '}
            <a
              href="https://www.instagram.com/wsaf25/"
              target="_blank"
              className="text-teal"
            >
              @wsaf25
            </a>{' '}
            if you have any questions.
          </p>
        ) : performConfig.showSubmissionLink ? (
          <p>
            While event submissions are now closed, if you are still interested
            in performing please contact us at{' '}
            <a
              href="https://www.instagram.com/wsaf25/"
              target="_blank"
              className="text-teal"
            >
              @wsaf25
            </a>{' '}
            or fill in the{' '}
            <a
              href={mainConfig.submissions.submitUrl}
              target="_blank"
              className="text-teal"
            >
              submissions form
            </a>{' '}
            and we&apos;ll try and fit you in. Please note that we cannot
            guarantee an available slot or inclusion in any promotional or
            physical material.
          </p>
        ) : (
          <p>Unfortunately event submissions are now closed.</p>
        )}

        {performConfig.showSubmissionLink && (
          <a
            href={mainConfig.submissions.submitUrl}
            target="_blank"
            className="inline-block bg-secondary px-4 py-1 drop-shadow-sm my-4 hover:scale-105 bg-purple text-white"
          >
            <span className="block text-xl lg:text-2xl font-bold uppercase">
              <FaPaintBrush className="inline-block mb-1 mr-2" /> Performers
              Portal
            </span>
            <span className="block text-sm">
              Create or edit your submission
            </span>
          </a>
        )}
      </div>

      <section className="my-4 max-w-8xl mx-auto">
        <HighlightedHeading text="Perform Or Exhibit" />
        <div className="mt-2 grid w-full px-2 xl:px-16 sm:py-4 sm:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-4">
          {performConfig.performanceTypes.map((type) => (
            <div key={type.name} className="h-full">
              <RoleCard
                image={type.image}
                imageAlt="Placeholder"
                title={type.name}
                footer="placeholder"
                link="#"
                description={[type.description]}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl xl:mx-auto mb-8 mx-8">
        <HighlightedHeading text="FAQ" />
        <SubmissionsFaq />
      </div>
    </main>
  );
}
