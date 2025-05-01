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
  const [color, setColor] = useState<string>('#4f1d75');
  const [brushSize, setBrushSize] = useState<number>(40);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [caption, setCaption] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const canvasRef = useRef<CanvasRef>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const sendToDiscord = async () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (!canvas) return toast.error('Canvas not found');

    const ctx = canvas.getContext('2d');
    if (!ctx) return toast.error('Canvas context not available');

    // Load the paintbrush image
    const paintbrushImg = new window.Image();
    paintbrushImg.src = Paintbrush.src;

    paintbrushImg.onload = () => {
      // Save the current canvas content
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Create a new canvas for sending to Discord
      const sendCanvas = document.createElement('canvas');
      const sendCtx = sendCanvas.getContext('2d');
      if (!sendCtx)
        return toast.error('Unable to create canvas for sending to Discord');

      // Set the dimensions for the new canvas to match the original
      sendCanvas.width = canvas.width;
      sendCanvas.height = canvas.height;

      // Draw the original content of the canvas onto the new canvas
      sendCtx.putImageData(imageData, 0, 0);

      // Draw the paintbrush image on the new canvas (only for sending)
      const centerX = sendCanvas.width / 2 - paintbrushImg.width / 2;
      const centerY = sendCanvas.height / 2 - paintbrushImg.height / 2;
      sendCtx.drawImage(paintbrushImg, centerX, centerY);

      // Convert the modified canvas to a blob and send to Discord
      sendCanvas.toBlob(async (blob) => {
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
