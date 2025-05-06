import type { Metadata } from 'next';
import PageHeader from '../components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import { fetchRoom } from './lib/fetchRoom';

export const metadata: Metadata = {
  title: 'WSAF Venues',
  description: 'List of Venues, Rooms and Spaces in use at WSAF 2025',
};

export default async function EventsPage() {
  const roomPromises = ['1'].map((id) => fetchRoom(id));
  const rooms = await Promise.all(roomPromises);

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Venues" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        Venues, Rooms and Spaces
        {rooms.map((r, index) => (
          <p key={index}>
            {r !== 'API_ERROR' ? r.name.en : 'Error loading room'}
          </p>
        ))}
      </h1>
    </main>
  );
}
