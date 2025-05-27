import { trackColourMap } from '@/lib/trackTypes';
import { EventWithSessions } from '@/lib/events';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ErrorMessage from '@/app/components/ErrorMessage';
import TrackPill from '@/app/components/track/TrackPill';
import { eventCategories } from '@/data/events';

export default async function GoToGenre({
  eventWithSessions,
}: {
  eventWithSessions: EventWithSessions;
}) {
  if (!eventWithSessions) {
    return <ErrorMessage msg="Event not found" />;
  }

  const track = eventWithSessions.categoryPretalxTrack;
  const category = eventCategories.find((c) => c.pretalxTrack === track);

  if (!category) {
    return <ErrorMessage msg="Track category not found" />;
  }

  const bitFieldValue = (1 << category.filterBitFieldIndex).toString();
  const trackKey = track.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';

  return (
    <div className="my-4 bg-white p-4 h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <Link
        href={`/events?category=${bitFieldValue}`}
        passHref
        className="cursor-pointer"
        title={`View more ${track}`}
      >
        <div className="flex items-center justify-center gap-2">
          <TrackPill showName={false} track={track} padding={13} size={25} />
          <div className="flex flex-col text-left m-2 items-start gap-1 font-medium">
            <span className="italic pt-2 text-black font-semibold text-lg -my-2">
              See more...
            </span>
            <span className="font-semibold text-black pt-0">{track}</span>
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
