import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IconProps {
  src: string | StaticImport;
  alt: string;
}

function Icon({ src, alt }: IconProps) {
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(0);
  const [amplitude, setAmplitude] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (!hovered && amplitude <= 0.1) return;

    const decay = 0.98;

    const animate = () => {
      const newAmplitude = hovered ? 20 : amplitude * decay;
      const newAngle = Math.sin(Date.now() / 100) * newAmplitude;

      setAmplitude(newAmplitude);
      setAngle(newAngle);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [hovered, amplitude]);

  // `src` might be an imported static image or a string URL
  const href = typeof src === 'string' ? src : src.src;

  return (
    <div
      className="relative aspect-square"
      onMouseEnter={() => {
        setHovered(true);
        setAmplitude(20);
      }}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: `rotate(${angle}deg)`,
        transformOrigin: '50% 0%',
        transition: 'transform 0.05s linear',
      }}
    >
      <a href={href} download>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          placeholder="blur"
        />
      </a>
    </div>
  );
}

export default Icon;
