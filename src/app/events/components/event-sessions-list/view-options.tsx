import { FaColumns, FaList } from 'react-icons/fa';

export default function ViewOptions({
  selectedView,
  setView,
}: {
  selectedView: 'list' | 'timeline';
  setView: (view: 'list' | 'timeline') => void;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">View</h4>
      </div>
      <div className="inline-flex rounded-md border-slate-300 border justify-center items-center text-sm overflow-hidden">
        <button
          className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer hover:bg-slate-100 ${selectedView === 'list' ? 'bg-slate-100 drop-shadow-sm' : ''}`}
          onClick={() => setView('list')}
        >
          <FaList />
          List
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer hover:bg-slate-100 ${selectedView === 'timeline' ? 'bg-slate-100 drop-shadow-sm' : ''}`}
          onClick={() => setView('timeline')}
        >
          <FaColumns />
          Timeline
        </button>
      </div>
    </div>
  );
}
