import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';
import LastYearSection from './components/last-year';
import HistoryOverview from './components/history-of-wsaf';
import EarlyYearsSection from './components/the-beginning';
import MiddleYearsSection from './components/the-middle';
import FinalYearsSection from './components/the-end';
import Gallery from './components/history-gallery';

export const metadata: Metadata = {
  title: 'The History of WSAF',
  description:
    'Warwick Student Arts Festival is not a completely novel idea - it made its first debut on 20-24 June 2004, with over 50 events. Since then, it ran for 11 further years before it stopped, with more and more success each time. Our aim is to bring this event back to campus, reclaiming the title as "Europe\'s largest annual student arts festival".',
};

export default function History() {
  return (
    <main>
      <PageHeader />
      <LastYearSection />
      <section className="bg-teal mt-6 text-slate-200 w-full mx-auto px-4">
        <HistoryOverview />
      </section>
      <EarlyYearsSection />
      <section className="bg-teal mt-6 text-slate-200 w-full mx-auto px-4">
        <MiddleYearsSection />
      </section>
      <FinalYearsSection />
      <Gallery />
    </main>
  );
}
