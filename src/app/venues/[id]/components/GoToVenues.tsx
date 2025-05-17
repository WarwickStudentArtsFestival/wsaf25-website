import Link from 'next/link';
import { FaArrowRight, FaWarehouse } from 'react-icons/fa';

export default async function GoToVenues() {
  return (
    <div className="my-4 bg-white p-4 w-fit h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition duration-100 ease-in-out">
      <Link
        href={`/venues`}
        passHref
        className=" cursor-pointer group"
        title={`View more venues`}
      >
        <div className="flex items-center gap-2">
          <div className="text-purple-500 p-4">
            <FaWarehouse size={40} />
          </div>
          <div className="flex flex-col text-left m-2 items-start gap-1 text-black font-medium group-hover:underline">
            <span className="italic pt-2 text-teal font-semibold text-lg -my-2">
              See more...
            </span>
            <span className="font-semibold pt-0">Venues</span>
          </div>
          <div className="text-purple-500">
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
}
