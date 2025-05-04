'use client';
import { Toaster } from 'react-hot-toast';
import React, { useEffect, useRef, useState } from 'react';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '../../components/highlighted-heading';
import TextInput from './TextInput';
import Canvas, { CanvasRef } from './Canvas';
import ColourPicker from './ColourPicker';
import BrushSizePicker from './BrushSizePicker';
import Paintbrush from '@/assets/icons/paintbrush.png';
import Gallery from './Gallery';
import NextImage from 'next/image';
import { FiRotateCcw, FiSave, FiX } from 'react-icons/fi';
import ActionButton from './ActionButton';
import { saveImage } from '../lib/saveImage';
import SubmissionModal from './SubmissionModal';

const PaintApp = () => {
  const [brushSettings, setBrushSettings] = useState({
    color: '#4f1d75',
    size: 40,
  });
  const [form, setForm] = useState({ caption: '', author: '' });
  const [mouse, setMouse] = useState({
    inside: false,
    position: { x: 0, y: 0 },
    canvasPos: { x: 0, y: 0 },
  });

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
    setForm({ caption: '', author: '' });
    localStorage.removeItem('canvasState');
    saveCanvasState();
  };

  const undoCanvas = () => {
    canvasRef.current?.undo();
    saveCanvasState();
  };

  const saveCanvasState = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    if (canvas) {
      const dataURL = canvas.toDataURL();
      localStorage.setItem('canvasState', dataURL);
    }
  };

  const loadCanvasState = () => {
    const savedCanvasState = localStorage.getItem('canvasState');
    if (savedCanvasState) {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        const img = new window.Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        }; 
        img.src = savedCanvasState;
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
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

    const handleMouseUp = () => {
      saveCanvasState();
    };

    const handleTouchEnd = () => {
      saveCanvasState();
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const updateCanvasPosition = () => {
      if (canvasWrapperRef.current) {
        const rect = canvasWrapperRef.current.getBoundingClientRect();
        setMouse((prev) => ({
          ...prev,
          canvasPos: { x: rect.right, y: rect.bottom },
        }));
      }
    };

    updateCanvasPosition();
    window.addEventListener('resize', updateCanvasPosition);
    return () => window.removeEventListener('resize', updateCanvasPosition);
  }, []);

  useEffect(() => {
    loadCanvasState();
  }, []);

  const getBrushStyle = (): React.CSSProperties =>
    mouse.inside
      ? {
          left: mouse.position.x,
          top: mouse.position.y,
          translate: '-5% -25%',
          rotate: '120deg',
        }
      : {
          left: `${mouse.canvasPos.x - 250}px`,
          bottom: '150px',
          position: 'absolute',
          rotate: '120deg',
        };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`text-center relative ${mouse.inside ? 'cursor-none' : 'cursor-default'}`}
      >
        <PageHeader />
        <HighlightedHeading text="W-Paint" />
        <h1 className="text-teal text-2xl font-semibold mb-2">
          Create your own W-Artwork!
        </h1>

        <div>
          <ColourPicker
            currentColor={brushSettings.color}
            onColorChange={(color) =>
              setBrushSettings((prev) => ({ ...prev, color }))
            }
          />
          <BrushSizePicker
            brushSize={brushSettings.size}
            onBrushSizeChange={(size) =>
              setBrushSettings((prev) => ({ ...prev, size }))
            }
          />
        </div>

        <div
          ref={canvasWrapperRef}
          onMouseEnter={() => setMouse((prev) => ({ ...prev, inside: true }))}
          onMouseLeave={() => setMouse((prev) => ({ ...prev, inside: false }))}
          className="border border-black mt-5 mx-auto aspect-video w-full sm:w-1/2"
        >
          <Canvas
            ref={canvasRef}
            color={brushSettings.color}
            brushSize={brushSettings.size}
            onDraw={saveCanvasState}
          />
        </div>

        <TextInput
          value={form.caption}
          onChange={(caption) => setForm((prev) => ({ ...prev, caption }))}
          placeholder="Caption your artwork..."
        />
        <TextInput
          value={form.author}
          onChange={(author) => setForm((prev) => ({ ...prev, author }))}
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
            onClick={() => saveImage(form.caption, form.author)}
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
          <SubmissionModal
            caption={form.caption}
            author={form.author}
            setCaption={(newCaption: string) =>
              setForm((prev) => ({ ...prev, caption: newCaption }))
            }
            setAuthor={(newAuthor: string) =>
              setForm((prev) => ({ ...prev, author: newAuthor }))
            }
          />
        </div>

        <NextImage
          src={Paintbrush}
          alt="Paintbrush"
          width={300}
          height={300}
          className="pointer-events-none fixed z-20 hidden md:block"
          style={getBrushStyle()}
        />
      </div>
      <h1 className="text-teal text-2xl font-semibold mb-2 mt-4">W-Gallery</h1>
      <Gallery />
    </>
  );
};

export default PaintApp;
