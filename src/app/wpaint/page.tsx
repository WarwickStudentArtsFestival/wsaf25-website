'use client';

import { Toaster } from 'react-hot-toast';
import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import TextInput from './components/TextInput';
import Canvas, { CanvasRef } from './components/Canvas';
import ColourPicker from './components/ColourPicker';
import BrushSizePicker from './components/BrushSizePicker';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Image from 'next/image';
import { FiX, FiSave, FiRotateCcw, FiSend } from 'react-icons/fi';
import ActionButton from './components/ActionButton';
import { saveImage } from './lib/saveImage';
import { sendToDiscord } from './lib/sendToDiscord';

const PaintApp = () => {
  const [color, setColor] = useState<string>('#4f1d75');
  const [brushSize, setBrushSize] = useState<number>(40);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [caption, setCaption] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const canvasRef = useRef<CanvasRef>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const clearCanvas = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    setCaption('');
    setAuthor('');
  };

  const undoCanvas = () => {
    canvasRef.current?.undo();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key === 'z' &&
        !(document.activeElement instanceof HTMLInputElement)
      ) {
        e.preventDefault();
        undoCanvas();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const updateCanvasPosition = () => {
      if (canvasWrapperRef.current) {
        const rect = canvasWrapperRef.current.getBoundingClientRect();
        setCanvasPosition({
          x: rect.right,
          y: rect.bottom,
        });
      }
    };

    updateCanvasPosition();
    window.addEventListener('resize', updateCanvasPosition);
    return () => window.removeEventListener('resize', updateCanvasPosition);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`text-center relative ${isMouseInside ? 'cursor-none' : 'cursor-default'}`}
      >
        <PageHeader />
        <HighlightedHeading text="Create your own W-ARTWORK !" />
        <div>
          <ColourPicker currentColor={color} onColorChange={setColor} />
          <BrushSizePicker
            brushSize={brushSize}
            onBrushSizeChange={setBrushSize}
          />
        </div>

        <div
          ref={canvasWrapperRef}
          onMouseEnter={() => setIsMouseInside(true)}
          onMouseLeave={() => setIsMouseInside(false)}
          className="border border-black mt-5 mx-auto aspect-video w-full sm:w-1/2"
        >
          <Canvas ref={canvasRef} color={color} brushSize={brushSize} />
        </div>

        <TextInput
          value={caption}
          onChange={setCaption}
          placeholder="Caption your genius..."
        />
        <TextInput
          value={author}
          onChange={setAuthor}
          placeholder="Sign your name..."
        />

        <div className="p-4 grid grid-cols-2 sm:flex sm:justify-center gap-4 mx-auto">
          <ActionButton
            onClick={clearCanvas}
            icon={FiX}
            text="Clear Canvas"
            bgColor="bg-[#ff0054]"
          />
          <ActionButton
            onClick={() => saveImage(caption, author)}
            icon={FiSave}
            text="Save Image"
            bgColor="bg-[#087f8c]"
          />
          <ActionButton
            onClick={undoCanvas}
            icon={FiRotateCcw}
            text="Undo"
            bgColor="bg-[#ff5400]"
          />
          <ActionButton
            onClick={() => sendToDiscord(caption, author)}
            icon={FiSend}
            text="Send to WSAF"
            bgColor="bg-[#7289da]"
          />
        </div>

        <Image
          src={Paintbrush}
          alt="Paintbrush"
          width={300}
          height={300}
          className="pointer-events-none fixed z-50 hidden md:block"
          style={
            isMouseInside
              ? {
                  left: cursorPos.x,
                  top: cursorPos.y,
                  translate: '-5% -25%',
                  rotate: '120deg',
                }
              : {
                  left: `${canvasPosition.x - 250}px`,
                  bottom: '150px',
                  position: 'absolute',
                  rotate: '120deg',
                }
          }
        />
      </div>
    </>
  );
};

export default PaintApp;
