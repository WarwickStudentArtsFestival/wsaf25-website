import { ReactNode } from 'react';

export type FilterOption = {
  label: string;
  value: string;
  count: number;
  icon?: ReactNode;
};

type FilterOptionsProps = {
  label: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (items: string[]) => void;
};

export default function FilterOptions({
  label,
  options,
  selectedOptions,
  onChange,
}: FilterOptionsProps) {
  const handleOptionToggle = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    const newSelectedOptions = isSelected
      ? selectedOptions.filter((i) => i !== option)
      : [...selectedOptions, option];

    onChange(newSelectedOptions);
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      onChange([]);
    } else {
      const allOptions = options.map((option) => option.value);
      onChange(allOptions);
    }
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
          {selectedOptions.length === options.length
            ? 'Deselect All'
            : 'Select All'}
        </button>
      </div>
      <ul className="space-y-1">
        {options.map((option) => (
          <li key={option.value} className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleOptionToggle(option.value)}
                className="mr-2 h-4 w-4"
              />
              <div className="flex items-center gap-2 flex-1">
                {option.icon}
                <span className="text-sm">{option.label}</span>
                <span className="text-xs text-gray-500 ml-auto">
                  ({option.count})
                </span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
