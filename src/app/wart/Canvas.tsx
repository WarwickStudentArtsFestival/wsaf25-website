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

  const startDrawing = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setLastPos({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-black mt-5 mx-auto aspect-square w-auto"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
};

export default Canvas;
