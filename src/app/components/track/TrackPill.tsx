import React from 'react';
import TrackIcon from './TrackIcon';
import { trackColourMap } from '@/lib/trackTypes';

type TrackPillProps = {
  size?: number; // Icon size
  padding?: number; // Padding around icon
  track?: string;
  leftToRight?: boolean;
  showName?: boolean;
};

const TrackPill: React.FC<TrackPillProps> = ({
  track,
  size = 25,
  padding = 8, // default to p-2 (approx. 0.5rem or 8px)
  leftToRight = false,
  showName = true,
}) => {
  if (!track) return null;

  const key = track.replace(/\s+/g, '');
  const color = trackColourMap[key] || '#a855f7'; // default purple
  const bg = `${color}20`; // semi-transparent
  const border = color;
  const text = color;

  const pillStyle: React.CSSProperties = {
    backgroundColor: bg,
    color: text,
    border: `1px solid ${border}`,
  };

  const nameElement = showName ? (
    <span className="px-3 py-1 rounded-full font-bold" style={pillStyle}>
      {track}
    </span>
  ) : null;

  const iconElement = (
    <span
      className="rounded-full"
      style={{
        ...pillStyle,
        padding: `${padding}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TrackIcon track={track} size={size} />
    </span>
  );

  return (
    <p className="inline-flex items-center gap-2 text-sm font-medium">
      {leftToRight ? (
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
