import React from 'react';
import FilterSection from './FilterSection';
import { Talk } from '@/app/lib/types';

type FilterPanelProps = {
  talks: Talk[];
  filteredTalks: Talk[];
  selectedTracks: string[];
  onTrackFilterChange: (tracks: string[]) => void;
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

const FilterPanel: React.FC<FilterPanelProps> = ({
  talks,
  filteredTalks,
  selectedTracks,
  onTrackFilterChange,
}) => {
  const trackFreq = getFrequency(talks.map((t) => t.track.en));
  const trackItems = Object.entries(trackFreq).sort((a, b) => b[1] - a[1]);

  return (
    <div className="sticky top-20 border p-4 text-left text-black border-slate-300 rounded-md overflow-auto max-h-screen shadow-lg">
      <h3 className="font-bold mb-4 text-lg border-b pb-2">Filters</h3>

      <FilterSection
        label="Event Type"
        items={trackItems}
        selectedItems={selectedTracks}
        onChange={onTrackFilterChange}
        showIcons={true}
      />

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredTalks.length} of {talks.length} events
      </div>
    </div>
  );
};

export default FilterPanel;
