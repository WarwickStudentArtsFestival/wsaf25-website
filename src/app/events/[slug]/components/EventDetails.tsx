import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/lib/dates';
import { EventWithSessions } from '@/lib/events';

type EventDetailsProps = {
  eventWithSessions: EventWithSessions;
};

export default function EventDetails({ eventWithSessions }: EventDetailsProps) {
  const room = eventWithSessions.sessions[0].venueName;
  const start = eventWithSessions.sessions[0].start;
  const end = eventWithSessions.sessions[0].end;

  const talkDetails = [
    {
      icon: <FiMapPin className="h-5 w-5" />,
      title: 'Venue',
      value: room || 'TBD',
    },
    {
      icon: <FiCalendar className="h-5 w-5 " />,
      title: 'Date',
      value: start ? formatDate(start) : 'TBD',
    },
    {
      icon: <FiClock className="h-5 w-5 " />,
      title: 'Time',
      value: start && end ? `${formatTime(start)} - ${formatTime(end)}` : 'TBD',
    },
  ];

  return (
    <div className="flex-1 h-fit text-left w-full overflow-hidden border border-gray-200 p-4">
      <h2 className="text-black text-xl font-semibold mb-4">Event Details</h2>
      {talkDetails.map((detail, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <div className="">{detail.icon}</div>
          <div className="text-left flex-grow">
            {/* <h3 className=" text-lg font-semibold">{detail.title}</h3> */}
            <p className="text-sm text-black">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
