import { FiCalendar, FiClock, FiGrid, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/lib/dates';
import { EventWithSessions } from '@/lib/events';

type EventDetailsProps = {
  eventWithSessions: EventWithSessions;
};

export default function EventDetails({ eventWithSessions }: EventDetailsProps) {
  return (
    <div className="flex-1 h-fit text-left w-full overflow-hidden border bg-white border-gray-200 p-4">
      <h2 className="text-black text-xl font-semibold mb-4">Event Details</h2>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        {eventWithSessions.sessions.map((session, idx) => {
          const talkDetails = [
            {
              icon: <FiMapPin className="h-5 w-5" />,
              title: 'Venue',
              value: session.venueName || 'TBD',
            },
            {
              icon: <FiCalendar className="h-5 w-5" />,
              title: 'Date',
              value: formatDate(session.start),
            },
            {
              icon: <FiClock className="h-5 w-5" />,
              title: 'Time',
              value: `${formatTime(session.start)} - ${formatTime(session.end)}`,
            },
          ];
          if (session.parent) {
            talkDetails.unshift({
              icon: <FiGrid className="h-5 w-5" />,
              title: 'Event',
              value: `Part of ${session.parent.event.name}`,
            });
          }

          return (
            <div key={idx} className="mb-6 ">
              {eventWithSessions.sessions.length > 1 && (
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Showing {idx + 1}
                </h3>
              )}
              {talkDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                  <div>{detail.icon}</div>
                  <div className="text-left flex-grow">
                    <p className="text-sm text-black">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
