'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import Canvas from './Canvas';
import ColourPicker from './ColourPicker';
import BrushSizePicker from './BrushSizePicker';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Image from 'next/image';
import { FiX, FiSave } from 'react-icons/fi';
import ActionButton from './ActionButton';

const PaintApp = () => {
  const [color, setColor] = useState<string>('#4f1d75');
  const [brushSize, setBrushSize] = useState<number>(40);
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
    <div className="text-center relative sm:cursor-none">
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

      <div className="p-4 justify-center flex gap-4 mx-auto">
        <ActionButton
          onClick={clearCanvas}
          icon={FiX}
          text="Clear Canvas"
          bgColor="bg-[#ff0054]"
        />
        <ActionButton
          onClick={saveCanvas}
          icon={FiSave}
          text="Save Image"
          bgColor="bg-[#087f8c]"
        />
      </div>

      <Image
        src={Paintbrush}
        alt="Paintbrush"
        width={300}
        height={300}
        className="pointer-events-none fixed z-50 hidden md:block"
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
