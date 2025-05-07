import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import { fetchRoom } from '@/app/lib/fetchRoom';
import RoomInfo from './components/RoomInfo';
import Events from '@/app/events/components/events/Events';
import { fetchTalks } from '@/app/lib/fetchTalks';
import GoToVenues from './components/GoToVenues';
import RoomHeader from './components/RoomHeader';

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
      <div className="w-full sm:w-2xl md:my-4 -mt-2 mx-auto bg-white rounded-xl shadow border border-gray-200">
        <RoomHeader room={room} />
        <RoomInfo room={room} />
      </div>
      <div className="sticky top-15 z-40 bg-white w-full">
        <h3 className="text-teal pt-4 font-semibold italic">
          What&apos;s on at...
        </h3>
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          {room.name?.en || 'Unnamed Venue'}
        </h1>
      </div>
      <div className="w-full mt-8">
        <Events allTalks={filteredTalks} />
      </div>
      <div className="flex my-4 w-full flex-col items-center justify-center mx-auto">
        <h2 className="text-black text-xl font-semibold">Related Events</h2>
        <GoToVenues />
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
