export default function LoadingPage({ eventCount }: { eventCount: number }) {
  return (
    <div>
      <h2 className="text-teal text-xl pt-2 sm:mt-4 font-semibold sm:text-2xl">
        Loading Events...
      </h2>
      <p className="mt-1">
        Loading <span className="font-semibold">{eventCount}</span> WSAF 2025
        events
      </p>
    </div>
  );
}
