'use client';

import { useRef, useEffect, useState } from 'react';

interface AutoScrollContainerProps {
  children: React.ReactNode;
}

export default function AutoScrollContainer({
  children,
}: AutoScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    if (!container || !scrollContent) return;

    let animationFrame: number;
    const speed = 3; // px per frame

    const scroll = () => {
      if (!isHovered) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= scrollContent.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={scrollRef} className="flex w-max">
        {children}
        {children}
      </div>
    </div>
  );
}
