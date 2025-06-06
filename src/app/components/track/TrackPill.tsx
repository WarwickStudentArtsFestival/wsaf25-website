import React from 'react';
import { eventCategories } from '@/data/events';

type TrackPillProps = {
  size?: number; // Icon size
  padding?: number; // Padding around icon
  track?: string;
  leftToRight?: boolean;
  showName?: boolean;
};

const TrackPill: React.FC<TrackPillProps> = ({
  track,
  padding = 8,
  leftToRight = false,
  showName = true,
}) => {
  if (!track) return null;

  const category = eventCategories.find((c) => c.pretalxTrack === track);
  if (!category) return null;

  const nameElement = showName ? (
    <span
      className="px-3 py-1 rounded-full font-bold"
      style={{
        backgroundColor: `${category.colour}20`,
        color: category.colour,
        border: `1px solid ${category.colour}`,
      }}
    >
      {track}
    </span>
  ) : null;

  const iconElement = (
    <span
      className="rounded-full"
      style={{
        backgroundColor: `${category.colour}20`,
        color: category.colour,
        border: `1px solid ${category.colour}`,
        padding: `${padding}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {category.icon}
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
