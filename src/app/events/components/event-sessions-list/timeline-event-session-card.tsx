import { EventSession } from '@/lib/events';
import Link from 'next/link';
import { trackColourMap } from '@/lib/trackTypes';

export default function TimelineEventSessionCard({
  eventSession,
}: {
  eventSession: EventSession;
}) {
  const rawTrack = eventSession.event.categoryPretalxTrack;
  const trackKey = rawTrack.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';
  const bgColor = `${trackColor}10`;

  return (
    <div className="w-full h-full flex flex-col my-0.5">
      <Link
        href={`/events/${eventSession.event.id}`}
        className="h-full p-1 block border text-black border-slate-300 rounded-md overflow-hidden hover:shadow-sm"
        style={{ background: bgColor, color: trackColor }}
      >
        <p className="text-sm font-semibold">{eventSession.event.name}</p>
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
      </Link>
    </div>
  );
}
