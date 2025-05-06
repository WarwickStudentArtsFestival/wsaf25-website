import TrackIcon from './track/TrackIcon';

type FilterSectionProps = {
  label: string;
  items: [string, number][];
  selectedItems: string[];
  onChange: (items: string[]) => void;
  showIcons?: boolean;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  label,
  items,
  selectedItems,
  onChange,
  showIcons = false,
}) => {
  const handleItemToggle = (item: string) => {
    const isSelected = selectedItems.includes(item);
    const newSelectedItems = isSelected
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    onChange(newSelectedItems);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      onChange([]);
    } else {
      const allItems = items.map(([item]) => item);
      onChange(allItems);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{label}:</span>
        <button
          type="button"
          onClick={handleSelectAll}
          className="text-xs text-blue-600 hover:underline"
        >
          {selectedItems.length === items.length
            ? 'Deselect All'
            : 'Select All'}
        </button>
      </div>
      <ul className="space-y-1">
        {items.map(([key, count]) => (
          <li key={key} className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                checked={selectedItems.includes(key)}
                onChange={() => handleItemToggle(key)}
                className="mr-2 h-4 w-4"
              />
              <div className="flex items-center gap-2 flex-1">
                {showIcons && <TrackIcon size={15} track={key} />}
                <span className="text-sm">{key || '(None)'}</span>
                <span className="text-xs text-gray-500 ml-auto">({count})</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
