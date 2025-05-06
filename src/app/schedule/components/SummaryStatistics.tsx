import React from 'react';
import { Talk } from '../lib/types';
import TrackIcon from './TrackIcon';

type SummaryStatsProps = {
  talks: Talk[];
};

const getFrequency = <T extends string>(items: T[]): Record<T, number> => {
  return items.reduce(
    (acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {} as Record<T, number>,
  );
};

const renderFrequencies = (label: string, freq: Record<string, number>) => (
  <div>
    <span className="font-semibold">{label}:</span>
    <ul className="list-disc list-inside ml-4">
      {Object.entries(freq).map(([key, count]) => (
        <li key={key} className="flex items-center gap-2">
          <TrackIcon track={key} />
          {key || '(None)'}: {count}
        </li>
      ))}
    </ul>
  </div>
);

const SummaryStatistics: React.FC<SummaryStatsProps> = ({ talks }) => {
  const trackFreq = getFrequency(talks.map((t) => t.track.en));
  const roomFreq = getFrequency(talks.map((t) => t.slot?.room?.en));
  const submissionTypeFreq = getFrequency(
    talks.map((t) => t.submission_type.en),
  );

  return (
    <div className="m-4 p-4 mx-auto text-left w-fit bg-gray-100 rounded shadow flex flex-col gap-4">
      <div>
        <span className="font-semibold">Total performances:</span>{' '}
        {talks.length}
      </div>
      {renderFrequencies('Events', trackFreq)}
      {renderFrequencies('Rooms', roomFreq)}
      {renderFrequencies('Submission types', submissionTypeFreq)}
    </div>
  );
};

export default SummaryStatistics;
