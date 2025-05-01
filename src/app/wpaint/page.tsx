'use client';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import Canvas, { CanvasRef } from './Canvas';
import ColourPicker from './ColourPicker';
import BrushSizePicker from './BrushSizePicker';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Image from 'next/image';
import { FiX, FiSave, FiRotateCcw, FiSend } from 'react-icons/fi';
import ActionButton from './ActionButton';

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
      formData.append(
        'payload_json',
        JSON.stringify({
          content: `# *["${caption || 'Untitled'}"](https://wsaf.org.uk/wpaint)*\n_by ${author || 'Unknown'}_`,
        }),
      );

      const webhookUrl = process.env.NEXT_PRIVATE_DISCORD_WEBHOOK_URL;
      if (!webhookUrl) {
        toast.error('Webhook URL is not set');
        return;
      }
      const sendingToast = toast.loading('Sending to Discord...');
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          toast.error('Failed to send image', { id: sendingToast });
          console.error(await response.text());
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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

        <div className="mt-6 px-4 2xl:w-2/3 mx-auto flex justify-center">
          <input
            type="text"
            placeholder="Caption your genius..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded w-full sm:w-1/2 text-black"
          />
        </div>

        <div className="mt-4 px-4 2xl:w-2/3 mx-auto flex justify-center">
          <input
            type="text"
            placeholder="Sign your name..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded w-full sm:w-1/2 text-black"
          />
        </div>

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

        {isMouseInside && (
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
        )}
      </div>
    </>
  );
};

export default PaintApp;
