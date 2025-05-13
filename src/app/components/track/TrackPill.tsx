import React from 'react';
import TrackIcon, { trackColorMap } from './TrackIcon';

type TrackPillProps = {
  track?: string;
  ltr?: boolean;
};

const TrackPill: React.FC<TrackPillProps> = ({ track, ltr = false }) => {
  if (!track) return null;

  const key = track.replace(/\s+/g, '');
  const color = trackColorMap[key] || '#a855f7'; // default purple
  const bg = `${color}20`; // semi-transparent
  const border = color;
  const text = color;

  const pillStyle: React.CSSProperties = {
    backgroundColor: bg,
    color: text,
    border: `1px solid ${border}`,
  };

  const nameElement = (
    <span className="px-3 py-1 rounded-full font-bold" style={pillStyle}>
      {track}
    </span>
  );

  const iconElement = (
    <span className="p-2 rounded-full" style={pillStyle}>
      <TrackIcon track={track} size={17} />
    </span>
  );

  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium mb-4">
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
