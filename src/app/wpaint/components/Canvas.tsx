import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';

export interface CanvasProps {
  color: string;
  brushSize: number;
  onDraw?: () => void;
}

export interface CanvasRef {
  undo: () => void;
}

const Canvas = forwardRef<CanvasRef, CanvasProps>(
  ({ color, brushSize }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    });
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [history, setHistory] = useState<ImageData[]>([]);

    const resizeCanvas = useCallback(() => {
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

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    }, [canvasSize]);

    useEffect(() => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mouseup', () => setIsDrawing(false));
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mouseup', () => setIsDrawing(false));
      };
    }, [resizeCanvas]);

    const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
      if ('touches' in e) {
        const touch = e.touches[0];
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const saveHistory = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory((prev) => [...prev, data]);
      }
    };

    const undo = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx && history.length > 0) {
        const newHistory = [...history];
        const last = newHistory.pop();
        setHistory(newHistory);
        if (last) ctx.putImageData(last, 0, 0);
      }
    };

    // Expose the undo function to parent
    useImperativeHandle(ref, () => ({ undo }));

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
      saveHistory();
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
  },
);

Canvas.displayName = 'Canvas';
export default Canvas;
