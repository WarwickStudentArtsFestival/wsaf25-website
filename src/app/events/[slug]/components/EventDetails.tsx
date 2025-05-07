import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/app/lib/dateUtils';
import { Talk } from '@/app/lib/types';

type EventDetailsProps = {
  talk: Talk;
};

export default function EventDetails({ talk }: EventDetailsProps) {
  const room = talk.slot?.room?.en;
  const start = talk.slot?.start;
  const end = talk.slot?.end;

  const talkDetails = [
    {
      icon: <FiMapPin className="h-5 w-5 text-purple-500" />,
      title: 'Venue',
      value: room || 'TBD',
    },
    {
      icon: <FiCalendar className="h-5 w-5 text-purple-500" />,
      title: 'Date',
      value: start ? formatDate(start) : 'TBD',
    },
    {
      icon: <FiClock className="h-5 w-5 text-purple-500" />,
      title: 'Time',
      value: start && end ? `${formatTime(start)} - ${formatTime(end)}` : 'TBD',
    },
  ];

  return (
    <div className="flex-1 h-fit text-left overflow-hidden border border-gray-200 shadow-lg p-4">
      <h2 className="text-black text-xl font-semibold mb-4">Event Details</h2>
      {talkDetails.map((detail, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <div className="text-purple-500">{detail.icon}</div>
          <div className="text-left flex-grow">
            <h3 className="text-teal text-lg font-semibold">{detail.title}</h3>
            <p className="text-sm text-black">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
