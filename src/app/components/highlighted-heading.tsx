interface HighlightedHeadingProps {
  text: string;
  className?: string;
}

export default function HighlightedHeading({
  text,
  className,
}: HighlightedHeadingProps) {
  return (
    <div
      className={`uppercase text-xl font-bold text-black bg-yellow py-1 px-8 m-2 inline-block ${className || ''}`}
    >
      {text}
    </div>
  );
}
