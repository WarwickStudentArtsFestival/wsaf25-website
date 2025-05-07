import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { fetchRoom } from '@/app/lib/fetchRoom';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import RoomInfo from './components/RoomInfo';
import Events from '@/app/events/components/events/Events';
import { fetchTalks } from '@/app/lib/fetchTalks';
import Image from 'next/image';

type Params = Promise<{ id: string }>;

export default async function VenuePage({ params }: { params: Params }) {
  const { id } = await params;
  const room = await fetchRoom(id);
  const allTalks = await fetchTalks();

  if (!room || room === 'API_ERROR' || allTalks === 'API_ERROR') {
    return <ErrorMessage msg={`Venue not found!`} />;
  }

  const filteredTalks = allTalks.filter(
    (t) => t.slot?.room?.en == room.name.en,
  );
  return (
    <>
      <PageHeader />
      <div className="w-full sm:w-2xl my-4 mx-auto bg-white rounded-xl shadow border border-gray-200">
        <div className="relative">
          {room.image && (
            <Image
              src={room.image}
              alt={room.imageAlt || 'Venue image'}
              className="w-full rounded-xl"
            />
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
            <HighlightedHeading
              className="text-black text-2xl"
              text={room.name?.en || 'Unnamed Venue'}
            />
          </div>
        </div>
        <div className="p-6">
          <Link
            href="/venues"
            className="flex items-center text-sm text-black hover:underline mb-4"
          >
            <FaArrowLeft className="mr-2 text-purple-500" />
            Back to Venues
          </Link>
          <RoomInfo room={room} />
        </div>
      </div>
      <div className="sticky top-15 z-40 bg-white w-full">
        <h3 className="text-teal pt-4 font-semibold italic">
          What&apos;s on in...
        </h3>
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          {room.name?.en || 'Unnamed Venue'}
        </h1>
      </div>
      <div className="w-full mt-8">
        <Events allTalks={filteredTalks} />
      </div>
    </>
  );
}

{
  /* {room.image && (
            <div className="my-8">
            </div>
          )}
          <div className="mt-4">
            <iframe
              src={room.mapUrl + '?controls=off'}
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="Campus Map"
            />
          </div> */
}
