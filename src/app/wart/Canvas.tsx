import React, { useRef, useState, useEffect } from 'react';

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
  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const resizeCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const { clientWidth, clientHeight } = canvas;
      if (
        canvasSize.width !== clientWidth ||
        canvasSize.height !== clientHeight
      ) {
        setCanvasSize({ width: clientWidth, height: clientHeight });
        // Re-scale or re-draw the canvas content here if necessary
        canvas.width = clientWidth;
        canvas.height = clientHeight;
        redrawCanvas();
      }
    }
  };

  const redrawCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // You can re-draw any persistent content here if needed
      }
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasSize]);

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
      className="border border-black mt-5 mx-auto aspect-video w-full sm:w-1/2"
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
