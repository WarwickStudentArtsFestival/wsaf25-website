import { EventSession } from '@/lib/events';
import Link from 'next/link';
import { eventCategories } from '@/data/events';
import ErrorMessage from '@/app/components/ErrorMessage';

export default function TimelineEventSessionCard({
  eventSession,
}: {
  eventSession: EventSession;
}) {
  const category = eventCategories.find(
    (c) => c.pretalxTrack === eventSession.event.categoryPretalxTrack,
  );
  if (!category) {
    return <ErrorMessage msg="Track category not found" />;
  }
  return (
    // timeline-event-session-card class used for printing
    <div className="timeline-event-session-card w-full h-full flex flex-col my-0.5">
      <Link
        href={`/events/${eventSession.event.id}`}
        className="h-full p-1 block border text-black border-slate-300 rounded-md overflow-hidden hover:shadow-sm"
        style={{ background: `${category.colour}10`, color: category.colour }}
      >
        <p className="text-sm font-semibold">{eventSession.event.name}</p>
        {eventSession.start && eventSession.end && (
          <p className="text-xs">
            {eventSession.start.toLocaleTimeString('en-gb', {
              hour: 'numeric',
              hour12: true,
              minute: '2-digit',
            })}{' '}
            -{' '}
            {eventSession.end.toLocaleTimeString('en-gb', {
              hour: 'numeric',
              hour12: true,
              minute: '2-digit',
            })}
          </p>
        )}
      </Link>
    </div>
  );
}
