import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { customRoomData } from '../lib/customRoomData';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

type VenuePageProps = {
  params: {
    id: string;
  };
};

export default function VenuePage({ params }: VenuePageProps) {
  const venue = customRoomData[params.id];

  if (!venue) {
    return <ErrorMessage msg={`Venue '${params.id}' not found!`} />;
  }

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

          <HighlightedHeading text={venue.name?.en || 'Unnamed Venue'} />

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                <h2 className="text-black text-xl font-semibold mb-4">
                  Description
                </h2>
                <p className="prose max-w-none">
                  {venue.description?.en || 'No description available.'}
                </p>
              </div>
              <div className="lg:w-1/3 space-y-4">
                {venue.roomLocation && (
                  <div className="flex items-center text-gray-700">
                    <FiMapPin className="text-purple-500 mr-2" />
                    <span className="font-medium">{venue.roomLocation}</span>
                  </div>
                )}
              </div>
            </div>

            {venue.image && (
              <div className="my-8">
                <Image
                  src={venue.image}
                  alt={venue.imageAlt || 'Venue image'}
                  width={800}
                  height={600}
                  className="w-full max-h-96 object-cover rounded-lg"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
