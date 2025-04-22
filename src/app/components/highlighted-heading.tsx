export default function HighlightedHeading({ text }: { text: string; }) {
  return (
    <div className="uppercase text-xl font-bold text-black bg-yellow py-1 px-8 m-2 inline-block">
      { text }
    </div>
  )
}