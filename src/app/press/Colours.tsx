import React, { useState } from 'react';

function Colours() {
  const colors = ['#087f8c', '#4f1d75', '#ff0054', '#ff5400', '#ffbd00'];
  const [copied, setCopied] = useState('');

  const handleClick = (hexValue: string) => {
    navigator.clipboard.writeText(hexValue);
    setCopied(hexValue);
    setTimeout(() => setCopied(''), 1000);
  };

  return (
    <div className="grid mx-auto max-w-7xl grid-cols-3 sm:grid-cols-5 gap-4 p-4 mb-4">
      {colors.map((hex, key) => (
        <div
          key={key}
          onClick={() => handleClick(hex)}
          className="w-full aspect-square rounded-lg cursor-pointer relative transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-gray-300 flex items-end justify-center"
          style={{ backgroundColor: hex }}
        >
          {copied === hex && (
            <div className="absolute bottom-full mb-1 bg-black text-white px-2 py-1 rounded shadow-md text-xs sm:text-sm md:text-base">
              Copied!
            </div>
          )}
          <p className="text-white pb-1 text-l sm:text-xl">{hex}</p>
        </div>
      ))}
    </div>
  );
}

export default Colours;
