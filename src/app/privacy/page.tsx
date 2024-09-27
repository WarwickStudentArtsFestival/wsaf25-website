import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Warwick Student Arts Festival 2025',
  description:
    'This Privacy Policy was last updated on 21 May 2024 and describes our policies and procedures on the collection, use and disclosure of personal information.',
};

export default function Privacy() {
  return (
    <main>
      <PageHeader title="Privacy Policy" />

      <section className="mx-auto max-w-7xl px-4">
        <p className="mb-2">
          This Privacy Policy was last updated on 21 May 2024 and describes our
          policies and procedures on the collection, use and disclosure of
          personal information. This website is owned and controlled by the
          Warwick Student Arts Festival Organisers, which is owned by{' '}
          <a
            href="https://www.warwicktechcrew.co.uk/"
            target="_blank"
            className="text-accent"
          >
            Warwick Tech Crew
          </a>{' '}
          from{' '}
          <a
            href="https://www.warwicksu.com/"
            target="_blank"
            className="text-accent"
          >
            Warwick Students&apos; Union
          </a>
          . Any questions or requests can be made by emailing{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-accent"
          >
            info@wsaf.org.uk
          </a>
          .
        </p>
        <p className="mb-2">
          We use the Google Analytics service to gather information about how
          this website is being used to help improve our services - this
          includes information such as how you found our website, what pages you
          visit and how long you visit them before. This places a small
          &apos;cookie&apos; text file in your browser, which helps us identify
          you across sessions.
        </p>
        <p className="mb-2">
          We store all information submitted regarding performances and shows in
          order to be able to schedule and advertise events for the festival -
          this includes your personal contact details and any personal
          information you may have entered into the form. Please contact us at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-accent"
          >
            info@wsaf.org.uk
          </a>{' '}
          to amend or delete this data.
        </p>
      </section>
    </main>
  );
}
