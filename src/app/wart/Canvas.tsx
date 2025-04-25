import React, { useRef, useState } from 'react';

interface CanvasProps {
  color: string;
  brushSize: number;
}

const Canvas: React.FC<CanvasProps> = ({ color, brushSize }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      const touch = e.touches[0];
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    } else {
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const { x, y } = getPosition(e);
    setIsDrawing(true);
    setLastPos({ x, y });
    e.preventDefault();
  };

  const stopDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(false);
    e.preventDefault();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const { x, y } = getPosition(e);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(lastPos.x, lastPos.y);
      ctx.lineTo(x, y);
      ctx.lineWidth = brushSize;
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    setLastPos({ x, y });
    e.preventDefault();
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-black mt-5 mx-auto aspect-square w-full sm:w-auto"
      style={{ touchAction: 'none' }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
    />
  );
};

export default Canvas;
