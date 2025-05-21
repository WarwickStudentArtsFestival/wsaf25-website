import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import TrackPill from '../../../components/track/TrackPill';

type TalkHeaderProps = {
  track: string;
};

const TalkHeader: React.FC<TalkHeaderProps> = ({ track }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="my-4 text-left">
        <Link
          href="/events"
          className="inline-flex p-0 b-0  items-center text-sm hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          <span className="text-black">Back to All Events</span>
        </Link>
      </div>
      <div className="pt-4">
        <TrackPill track={track} leftToRight={true} />
      </div>
    </div>
  );
};

export default TalkHeader;
