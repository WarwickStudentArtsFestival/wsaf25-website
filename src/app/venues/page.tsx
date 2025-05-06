import type { Metadata } from 'next';
import PageHeader from '../components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import { fetchRooms } from './lib/fetchRooms';
import ErrorMessage from '../components/ErrorMessage';
import RoomList from './components/RoomList';

export const metadata: Metadata = {
  title: 'WSAF Venues',
  description: 'List of Venues, Rooms and Spaces in use at WSAF 2025',
};

export default async function EventsPage() {
  const rooms = await fetchRooms();

  if (rooms === 'API_ERROR') {
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Venues" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        Venues, Rooms and Spaces
      </h1>
      <RoomList rooms={rooms} />
    </main>
  );
}
