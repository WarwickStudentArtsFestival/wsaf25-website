import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';
import HighlightedHeading from '@/app/components/highlighted-heading';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'This Privacy Policy was last updated on 1 May 2025 and describes our policies and procedures on the collection, use and disclosure of personal information.',
};

export default function Privacy() {
  return (
    <main>
      <PageHeader />
      <HighlightedHeading text="Privacy" />
      <h1 className="text-teal text-2xl font-semibold mb-2">Privacy Policy</h1>

      <section className="mx-auto max-w-7xl px-4">
        <p className="mb-2">
          This Privacy Policy was last updated on 1 May 2025 and describes our
          policies and procedures on the collection, use and disclosure of
          personal information. This website is owned and controlled by the
          Warwick Student Arts Festival Organisers from the{' '}
          <a
            href="https://www.warwicksu.com/"
            target="_blank"
            className="text-yellow"
          >
            Warwick Students&apos; Union
          </a>
          . Any questions or requests can be made by emailing{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-yellow"
          >
            info@wsaf.org.uk
          </a>
          .
        </p>
        <h1 className="text-teal text-2xl font-semibold mb-2">
          Google Analytics
        </h1>
        <p className="mb-2">
          We use the Google Analytics service to gather information about how
          this website is being used to help improve our services - this
          includes information such as how you found our website, what pages you
          visit and how long you visit them for. This places a small
          &apos;cookie&apos; text file in your browser, which helps us identify
          you across sessions.
        </p>
        <h1 className="text-teal text-2xl font-semibold mb-2">
          Event & Performance Submissions
        </h1>
        <p className="mb-2">
          We retain all information submitted in relation to performances and
          shows to facilitate scheduling and promotion of events during the
          festival. This may include your contact details and any personal
          information provided through the form. We store this data for archival
          purposes and for potential inclusion in promotional material. WSAF
          organisers may also contact you using these details about future WSAF
          events. Please contact us at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-yellow"
          >
            info@wsaf.org.uk
          </a>{' '}
          to amend or delete this data.
        </p>
        <h1 className="text-teal text-2xl font-semibold mb-2">W-Paint</h1>
        <p className="mb-8">
          When you click &quot;Submit to WSAF&quot; button in the{' '}
          <Link className="text-yellow" href="/wpaint">
            W-Paint
          </Link>{' '}
          app, your artwork (including the canvas image, your caption, and the
          name you enter) is sent to a Discord channel accessible to organisers.
          By submitting, you grant WSAF and its organisers a continuous,
          non-exclusive, royalty-free licence to use, display, modify, and share
          your work for purposes such as promotion and exhibition. We reserve
          the right to edit or remove artwork at any time without notice. To
          request removal from Discord or WSAF media, email{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-yellow"
          >
            info@wsaf.org.uk
          </a>{' '}
          with details of your artwork.
        </p>
      </section>
    </main>
  );
}
