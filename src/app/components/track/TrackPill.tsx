import React from 'react';
import TrackIcon from './TrackIcon';

type TrackPillProps = {
  track: string | undefined;
  ltr?: boolean;
};

const TrackPill = ({ track, ltr = false }: TrackPillProps) => {
  if (!track) return null;

  const commonClasses =
    'bg-purple-200 text-purple-800 border border-purple-800 rounded-full';

  const nameElement = (
    <span className={`${commonClasses} px-3 py-1`}>
      <strong>{track}</strong>
    </span>
  );

  const iconElement = (
    <span className={`p-2 ${commonClasses}`}>
      <TrackIcon track={track} size={17} />
    </span>
  );

  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 rounded-full mb-4">
      {ltr ? (
        <>
          {nameElement}
          {iconElement}
        </>
      ) : (
        <>
          {iconElement}
          {nameElement}
        </>
      )}
    </p>
  );
};

export default TrackPill;
