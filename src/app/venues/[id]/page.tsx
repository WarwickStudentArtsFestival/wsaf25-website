import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { fetchRoom } from '@/app/lib/fetchRoom';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import RoomInfo from './components/RoomInfo';
import Events from '@/app/events/components/events/Events';
import { fetchTalks } from '@/app/lib/fetchTalks';

type Params = Promise<{ id: string[] }>;

export default async function VenuePage({ params }: { params: Params }) {
  const { id } = await params;
  const room = await fetchRoom(id[0]);
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
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
              <h3 className="text-teal font-semibold italic text-left -pb-4">
                What&apos;s on in...
              </h3>
              <h1 className="text-4xl font-bold text-teal-600 mb-4 ">
                {room.name?.en || 'Unnamed Venue'}
              </h1>
              <RoomInfo room={room} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white sticky z-40 top-15">
        <div className="m-4 mb-0">
          <HighlightedHeading
            className="mb-0"
            text={room.name?.en || 'Unnamed Venue'}
          />
        </div>
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
          </div> */
}
