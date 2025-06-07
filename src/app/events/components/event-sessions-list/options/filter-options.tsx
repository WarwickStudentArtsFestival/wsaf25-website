import { FilterOption } from '@/app/events/components/event-sessions-list/event-sessions-filters';

import { eventCategories } from '@/data/events';

type FilterOptionsProps = {
  label: string;
  options: FilterOption[];
  selectedFilters: FilterOption[] | null;
  selectedFilterValues: string[] | null;
  onChange: (items: FilterOption[] | null) => void;
};

export default function FilterOptions({
  label,
  options,
  selectedFilters,
  selectedFilterValues,
  onChange,
}: FilterOptionsProps) {
  const handleOptionToggle = (option: string) => {
    if (!selectedFilterValues || !selectedFilters) {
      onChange(options.filter((i) => i.value !== option));
    } else if (selectedFilterValues.includes(option)) {
      onChange(selectedFilters.filter((i) => i.value !== option));
    } else {
      // Otherwise add
      onChange([...selectedFilters, options.find((i) => i.value === option)!]);
    }
  };

  const handleSelectAll = () => {
    // [] = no options selected
    // null = all options selected
    if (!selectedFilterValues) onChange([]);
    else onChange(null);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">{label}</h4>
        <button
          type="button"
          onClick={handleSelectAll}
          className="text-xs text-blue-600 hover:underline cursor-pointer"
        >
          {selectedFilterValues ? 'Select All' : 'Deselect All'}
        </button>
      </div>
      <ul className="space-y-1">
        {options.map((option) => {
          // if the option exists in event categories, use its color
          const category = eventCategories.find(
            (c) => c.pretalxTrack === option.value,
          );
          const color = category ? category.colour : '#000';
          return (
            <li key={option.value} className="flex items-center gap-2">
              <label className="flex items-center cursor-pointer w-full">
                <input
                  type="checkbox"
                  checked={
                    !selectedFilterValues ||
                    selectedFilterValues.includes(option.value)
                  }
                  onChange={() => handleOptionToggle(option.value)}
                  className="mr-2 h-4 w-4"
                />
                <div className="flex items-center gap-2 flex-1">
                  <span style={{ color: color }}>{option.icon}</span>
                  {/* <span style={{ color: trackColor }}>{option.icon}</span> */}
                  <span className="text-sm">{option.label}</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    ({option.count})
                  </span>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
