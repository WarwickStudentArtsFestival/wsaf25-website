import React from 'react';

interface ColourPickerProps {
  currentColor: string;
  onColorChange: (color: string) => void;
}

const ColourPicker: React.FC<ColourPickerProps> = ({
  currentColor,
  onColorChange,
}) => {
  const colours = [
    '#4f1d75',
    '#ff0054',
    '#ff5400',
    '#ffbd00',
    '#087f8c',
    '#ffffff',
    '#000000',
  ];

  return (
    <div className="flex flex-row sm:flex-wrap items-center justify-center">
      <label
        htmlFor="brush-colour"
        className="block p-4 text-xl font-medium text-teal"
      >
        Brush Colour:
      </label>
      {colours.map((colorOption) => (
        <button
          id="brush-colour"
          key={colorOption}
          className={`w-12 h-12 m-1 sm:m-2 outline-2 outline-black cursor-pointer ${
            currentColor === colorOption ? 'rounded-square' : 'rounded-full'
          }`}
          style={{ backgroundColor: colorOption }}
          onClick={() => onColorChange(colorOption)}
        />
      ))}
    </div>
  );
};

export default ColourPicker;
