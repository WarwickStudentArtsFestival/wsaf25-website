import React, { useState } from 'react';

type ColourBoxProps = {
  hex: string;
};

const ColourBox: React.FC<ColourBoxProps> = ({ hex }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full aspect-square rounded-lg cursor-pointer relative transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-gray-300 flex items-end justify-center"
      style={{ backgroundColor: hex }}
    >
      {copied && (
        <div className="absolute bottom-full mb-1 bg-black text-white px-2 py-1 rounded shadow-md text-xs sm:text-sm md:text-base">
          Copied!
        </div>
      )}
      <p className="text-white pb-1 text-l sm:text-xl">{hex}</p>
    </div>
  );
};

export default ColourBox;