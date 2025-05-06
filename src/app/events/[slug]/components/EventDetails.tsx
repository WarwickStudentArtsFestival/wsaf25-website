import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { formatDate, formatTime } from '@/app/lib/dateUtils';

type EventDetailsProps = {
  start?: string;
  end?: string;
  room?: string;
};

export default function EventDetails({ start, end, room }: EventDetailsProps) {
  const talkDetails = [
    {
      icon: <FiMapPin className="h-5 w-5 text-purple-500" />,
      title: 'Room',
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
    <div className="flex-1 p-6 border border-slate-300 rounded-md shadow-lg h-fit text-left overflow-hidden">
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
