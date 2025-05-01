'use client';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
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

const PaintApp = () => {
  const [color, setColor] = useState('#4f1d75');
  const [brushSize, setBrushSize] = useState(40);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [caption, setCaption] = useState('');
  const [author, setAuthor] = useState('');

  const canvasRef = useRef<CanvasRef>(null);

  const sendToDiscord = async () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) return toast.error('Canvas not found');

    canvas.toBlob(async (blob) => {
      if (!blob) return toast.error('Failed to get image blob');

      const formData = new FormData();
      formData.append('file', blob, 'canvas.png');
      formData.append('caption', caption || 'Untitled');
      formData.append('author', author || 'Unknown');

      const sendingToast = toast.loading('Sending to Discord...');
      try {
        const response = await fetch('/api/sendToDiscord', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (!response.ok) {
          toast.error(result.error || 'Failed to send image', {
            id: sendingToast,
          });
        } else {
          toast.success('Image sent to Discord!', { id: sendingToast });
        }
      } catch (err) {
        toast.error('Error sending image', { id: sendingToast });
        console.error(err);
      }
    }, 'image/png');
  };

  const saveCanvas = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'my-artwork.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

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
            onClick={saveCanvas}
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
            onClick={sendToDiscord}
            icon={FiSend}
            text="Send to Discord"
            bgColor="bg-[#7289da]"
          />
        </div>
      </div>
    </>
  );
};

export default PaintApp;
