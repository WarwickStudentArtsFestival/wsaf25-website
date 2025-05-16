'use client';
import React from 'react';
import { FilterOption } from '@/app/events/components/events-list/filter-options';

const categoryOptions: FilterOption[] = [
  {
    label: 'Workshop',
    value: 'workshop',
    count: 10,
  },
  {
    label: 'Talk',
    value: 'talk',
    count: 20,
  },
  {
    label: 'Panel Discussion',
    value: 'panel-discussion',
    count: 5,
  },
];

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

const OptionsSidebar: React.FC<FilterPanelProps> = ({
  talks,
  filteredTalks,
  selectedTracks,
  onTrackFilterChange,
}) => {
  const trackFreq = getFrequency(talks.map((t) => t.track.en));
  const trackItems = Object.entries(trackFreq).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  return (
    <div className="sticky z-50 top-20 border p-4 text-left text-black border-slate-300 rounded-md overflow-auto max-h-screen shadow-lg">
      <div className="border-b flex gap-2 items-center justify-between pb-2">
        <h3 className="font-bold text-lg">Filters</h3>
        <div className="text-sm text-gray-500 text-right">
          Showing {filteredTalks.length} of {talks.length} events
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="font-semibold mb-1">Search</h4>
          <input
            type="text"
            placeholder="Search by title or speaker"
            className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <h4 className="font-semibold">Time</h4>
          <div>From to</div>
        </div>
        {/*<FilterOptions label="Category" options="" selectedOptions="" onChange=""
        <FilterSection
          label="Event Type"
          items={trackItems}
          selectedItems={selectedTracks}
          onChange={onTrackFilterChange}
          showIcons={true}
        />*/}
        <div>
          <p className="font-semibold">Venue</p>
        </div>
        <div>
          <p className="font-semibold">Duration</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsSidebar;
