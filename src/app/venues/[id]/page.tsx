import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { customRoomData } from '../lib/customRoomData';
import { fetchRoom } from '../lib/fetchRoom';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

type VenuePageProps = {
  params: {
    id: string;
  };
};

export default async function VenuePage({ params }: VenuePageProps) {
  const { id } = await params;
  const room = await fetchRoom(id);

  if (!room || room == 'API_ERROR') {
    return <ErrorMessage msg={`Venue '${params.id}' not found!`} />;
  }

  const { image, imageAlt, mapUrl, roomLocation } = customRoomData[room.id];

  return (
    <>
      <PageHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
          <div className="my-4 text-left">
            <Link
              href="/venues"
              className="inline-flex p-0 b-0 text-black items-center text-sm hover:underline"
            >
              <FaArrowLeft className="mr-2 text-purple-500" />
              Back to Venues
            </Link>
          </div>

          <HighlightedHeading text={room.name?.en || 'Unnamed Venue'} />

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                {roomLocation && (
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="text-purple-500 flex-shrink-0" />
                    <h3 className="text-black font-semibold">{roomLocation}</h3>
                  </div>
                )}
                <h2 className="text-black text-xl font-semibold mb-4">
                  Description
                </h2>
                <p className="prose max-w-none">
                  {room.description?.en || 'No description available.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
