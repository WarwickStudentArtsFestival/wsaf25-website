import { trackTypes } from '@/lib/trackTypes';
import { EventWithSessions } from '@/lib/events';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ErrorMessage from '@/app/components/ErrorMessage';
import TrackPill from '@/app/components/track/TrackPill';
import { trackColourMap } from '@/lib/trackTypes';

export default async function GoToGenre({
  eventWithSessions,
}: {
  eventWithSessions: EventWithSessions;
}) {
  if (!eventWithSessions) {
    return <ErrorMessage msg="Event not found" />;
  }
  const index = trackTypes.indexOf(eventWithSessions.categoryPretalxTrack);
  const rawTrack = eventWithSessions.categoryPretalxTrack;
  const trackKey = rawTrack.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';

  return (
    <div className="my-4 bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <Link
        href={`/events?genre=${2 ** index}`}
        passHref
        className=" cursor-pointer group"
        title={`View more ${eventWithSessions.categoryPretalxTrack}`}
      >
        <div className="flex items-center justify-center gap-2">
          <TrackPill
            showName={false}
            track={eventWithSessions.categoryPretalxTrack}
            padding={13}
            size={25}
          />
          <div className="flex flex-col text-left m-2 items-start gap-1  font-medium ">
            <span className="italic pt-2 text-black font-semibold text-lg -my-2">
              See more...
            </span>
            <span className="font-semibold text-black pt-0">
              {eventWithSessions.categoryPretalxTrack}
            </span>
          </div>
          <div
            className="flex-1 flex justify-end pr-4"
            style={{ color: trackColor }}
          >
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
