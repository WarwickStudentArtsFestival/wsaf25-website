'use client';

interface AutoScrollContainerProps {
  children: React.ReactNode;
}

export default function AutoScrollContainer({
  children,
}: AutoScrollContainerProps) {
  return (
    <div className="relative w-full overflow-hidden group">
      {/* will have to change scroll duration if the number of events changes much */}
      <div className="flex w-max animate-[scroll_300s_linear_infinite] group-hover:[animation-play-state:paused]">
        <div className="flex">{children}</div>
        {/* Duplicated to create seamless scroll as it repeats */}
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}
