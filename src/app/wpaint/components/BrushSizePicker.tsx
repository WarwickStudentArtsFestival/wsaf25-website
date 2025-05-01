import React from 'react';

interface BrushSizePickerProps {
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
}

const BrushSizePicker: React.FC<BrushSizePickerProps> = ({
  brushSize,
  onBrushSizeChange,
}) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <label
        htmlFor="brush-size"
        className="block text-xl font-medium text-black"
      >
        Brush Size:
      </label>
      <div className="flex items-center">
        <input
          type="range"
          id="brush-size"
          min="5"
          max="200"
          value={brushSize}
          onChange={(e) => onBrushSizeChange(Number(e.target.value))}
          className="w-42"
        />
        <span className="ml-2 w-20 text-xl text-black">{Math.round(brushSize / 2)}%</span>
      </div>
    </div>
  );
};

export default BrushSizePicker;
