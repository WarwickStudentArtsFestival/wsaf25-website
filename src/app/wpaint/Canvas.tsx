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

  const resizeCanvas = React.useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const { clientWidth, clientHeight } = canvas;
      if (
        canvasSize.width !== clientWidth ||
        canvasSize.height !== clientHeight
      ) {
        setCanvasSize({ width: clientWidth, height: clientHeight });
        canvas.width = clientWidth;
        canvas.height = clientHeight;
      }
    }
  }, [canvasSize]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseUp = () => setIsDrawing(false);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizeCanvas]);

  const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
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

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const { x, y } = getPosition(e);
    const ctx = canvasRef.current.getContext('2d');
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
      className="border border-black aspect-video w-full h-full"
      style={{ touchAction: 'none' }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={() => setIsDrawing(false)}
      onTouchCancel={() => setIsDrawing(false)}
    />
  );
};

export default Canvas;
