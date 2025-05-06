import React from 'react';
import TrackIcon from './TrackIcon';

type TrackPill = {
  track: string | undefined;
};

const TrackPill = ({ track }: TrackPill) => {
  if (!track) return null;

  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 rounded-full mb-4">
      <span className="p-2 bg-purple-200 text-purple-800 border border-purple-800 rounded-full">
        <TrackIcon track={track} size={17} />
      </span>
      <span className="bg-purple-200 text-purple-800 border border-purple-800 rounded-full px-3 py-1">
        <strong>{track}</strong>
      </span>
    </p>
  );
};

export default TrackPill;
