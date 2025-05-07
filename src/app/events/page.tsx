import type { Metadata } from 'next';
import { fetchTalks } from '@/app/lib/fetchTalks';
import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/page-header';
import Events from './components/events/Events';

export const metadata: Metadata = {
  title: 'WSAF Events',
  description: 'List of all the events on in WSAF 2025',
};

export default async function EventsPage() {
  let talks = await fetchTalks();
  if (talks === 'API_ERROR') {
    console.error('Error fetching talks from API');
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }
  talks = talks.sort(() => Math.random() - 0.5);

  return (
    <main className="w-full">
      <PageHeader />
      <Events allTalks={talks} />
    </main>
  );
}
