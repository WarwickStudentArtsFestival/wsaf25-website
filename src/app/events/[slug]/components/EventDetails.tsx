import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/lib/dates';
import { EventWithSessions } from '@/lib/events';

type EventDetailsProps = {
  eventWithSessions: EventWithSessions;
};

export default function EventDetails({ eventWithSessions }: EventDetailsProps) {
  console.log(eventWithSessions.sessions.length, 'sessions length');
  return (
    <div className="flex-1 h-fit text-left w-full overflow-hidden border bg-white border-gray-200 p-4">
      <h2 className="text-black text-xl font-semibold mb-4">Event Details</h2>
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
            value: session.start ? formatDate(session.start) : 'TBD',
          },
          {
            icon: <FiClock className="h-5 w-5" />,
            title: 'Time',
            value:
              session.start && session.end  
                ? `${formatTime(session.start)} - ${formatTime(session.end)}`
                : 'TBD',
          },
        ];

        return (
          <div key={idx} className="mb-6">
            {eventWithSessions.sessions.length > 1 && (
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Session {idx + 1}
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
  );
}
