import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { fetchRoom } from '@/app/lib/fetchRoom';
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

  if (!room || room === 'API_ERROR') {
    return <ErrorMessage msg={`Venue '${params.id}' not found!`} />;
  }

  return (
    <>
      <PageHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
          <HighlightedHeading text={room.name?.en || 'Unnamed Venue'} />

          <div className="bg-white p-6 py-0 my-4 h-fit rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <div className="my-4 text-left">
                <Link
                  href="/venues"
                  className="inline-flex p-0 b-0 text-black items-center text-sm hover:underline"
                >
                  <FaArrowLeft className="mr-2 text-purple-500" />
                  Back to Venues
                </Link>
              </div>

              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                {room.name?.en || 'Unnamed Venue'}
              </h1>

              <div className="flex flex-col text-left lg:flex-row gap-6 mt-6">
                <div className="lg:w-2/3">
                  <h2 className="text-black text-xl font-semibold mb-4">
                    Description
                  </h2>
                  <p className="prose max-w-none">
                    {room.description?.en || 'No description available.'}
                  </p>
                </div>
                {room.roomLocation && (
                  <div className="lg:w-1/3">
                    <div className="flex items-center space-x-2 mb-2">
                      <FiMapPin className="text-purple-500 flex-shrink-0" />
                      <h3 className="text-black font-semibold">
                        {room.roomLocation}
                      </h3>
                    </div>
                    {room.mapUrl && (
                      <Link
                        href={room.mapUrl}
                        target="_blank"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View on map
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {room.image && (
            <div className="my-8">
              <Image
                src={room.image}
                alt={room.imageAlt || `${room.name?.en} image`}
                width={800}
                height={600}
                className="w-full max-h-96 object-contain rounded-lg"
                priority
              />
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
          </div>
        </div>
      </div>
    </>
  );
}
