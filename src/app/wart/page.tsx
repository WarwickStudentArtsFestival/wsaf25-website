'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import Canvas from './Canvas';
import ColourPicker from './ColourPicker';
import BrushSizePicker from './BrushSizePicker';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Image from 'next/image';

const PaintApp = () => {
  const [color, setColor] = useState<string>('#4f1d75');
  const [brushSize, setBrushSize] = useState<number>(10);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const saveCanvas = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'my-artwork.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const clearCanvas = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="text-center relative cursor-none">
      <PageHeader />
      <HighlightedHeading text="Create your own W-ARTWORK !" />
      <div>
        <ColourPicker currentColor={color} onColorChange={setColor} />
        <BrushSizePicker
          brushSize={brushSize}
          onBrushSizeChange={setBrushSize}
        />
      </div>
      <Canvas color={color} brushSize={brushSize} />
      <button
        onClick={clearCanvas}
        className="mt-4 ml-4 px-5 py-2.5 rounded-xl bg-red-100 text-red-800 font-medium shadow-sm hover:bg-red-200 transition-colors"
      >
        Clear
      </button>
      <button
        onClick={saveCanvas}
        className="mt-4 ml-4 px-5 py-2.5 rounded-xl bg-green-100 text-green-800 font-medium shadow-sm hover:bg-green-200 transition-colors"
      >
        Save
      </button>

      <Image
        src={Paintbrush}
        alt="Paintbrush"
        width={300}
        height={300}
        className="pointer-events-none fixed z-50"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          translate: '-5% -25%',
          rotate: '120deg',
        }}
      />
    </div>
  );
};

export default PaintApp;
