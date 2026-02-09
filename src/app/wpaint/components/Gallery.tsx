'use client';

import Image from 'next/image';
import React, { useMemo, useState } from 'react';

const Gallery: React.FC<{ files: string[] }> = ({ files }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const shuffleArray = (array: string[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const imageFilenames = useMemo(() => shuffleArray(files), [files]);

  return (
    <>
      <div className="grid grid-cols-1 bg-black lg:grid-cols-2 gap-4 p-4">
        {imageFilenames.map((filename, index) => (
          <div
            key={index}
            className="relative w-full cursor-pointer hover:scale-[1.01] transition-transform"
            onClick={() => setSelected(index)}
          >
            <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden shadow">
              <Image
                src={`/wpaint-gallery/${filename}`}
                alt={`Canvas ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[90%] max-w-4xl aspect-video">
            <Image
              src={`/wpaint-gallery/${imageFilenames[selected]}`}
              alt={`Canvas ${selected + 1}`}
              fill
              className="object-contain rounded-md"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
};;

export default Gallery;
