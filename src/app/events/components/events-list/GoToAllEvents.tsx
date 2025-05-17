import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function GoToAllEvents() {
  return (
    <div className="my-4 bg-white p-4 w-fit mx-auto h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <Link
        href={`/events?genre=0`}
        passHref
        className="cursor-pointer group"
        title={`View more events`}
      >
        <div className="flex items-center gap-2">
          <div className="text-purple-500">
            <FaArrowLeft size={30} />
          </div>
          <div className="text-left m-2  text-black font-medium group-hover:underline">
            Back to all events
          </div>
        </div>
      </Link>
    </div>
  );
}
