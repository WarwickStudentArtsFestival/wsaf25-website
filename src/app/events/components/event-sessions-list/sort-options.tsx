import { FaRandom, FaRegBuilding, FaRegClock } from 'react-icons/fa';

export default function SortOptions({
  selectedSort,
  setSort,
  randomiseSessions,
  disableVenues,
}: {
  selectedSort: string;
  setSort: (sort: string) => void;
  randomiseSessions: () => void;
  disableVenues?: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Sort By</h4>
      </div>
      <div className="inline-flex rounded-md border-slate-300 border justify-center items-center text-sm overflow-hidden">
        <button
          className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer hover:bg-slate-100 ${selectedSort === 'random' ? 'bg-slate-100 drop-shadow-sm' : ''}`}
          onClick={() =>
            selectedSort === 'random' ? randomiseSessions() : setSort('random')
          }
        >
          <FaRandom />
          Random
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer hover:bg-slate-100 ${selectedSort === 'time' ? 'bg-slate-100 drop-shadow-sm' : ''}`}
          onClick={() => setSort('time')}
        >
          <FaRegClock />
          Time
        </button>
        {disableVenues || (
          <button
            className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer hover:bg-slate-100 ${selectedSort === 'venue' ? 'bg-slate-100 drop-shadow-sm' : ''}`}
            onClick={() => setSort('venue')}
          >
            <FaRegBuilding />
            Venue
          </button>
        )}
      </div>
    </div>
  );
}
