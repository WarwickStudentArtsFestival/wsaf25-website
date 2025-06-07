import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useMemo, useState } from 'react';
import { eventDateTimeIntervals } from '@/lib/dates';

function DatetimeSelectorPopup({
  dateTimeIndex,
  onChange,
}: {
  dateTimeIndex: number;
  onChange: (value: number) => void;
}) {
  const { selectedDateIndex, selectedHourIndex } = useMemo(() => {
    let selectedDateIndex = eventDateTimeIntervals.days.findIndex(
      (day) =>
        day.firstIndex <= dateTimeIndex && day.lastIndex >= dateTimeIndex,
    );
    if (selectedDateIndex === -1) selectedDateIndex = 0;

    let selectedHourIndex = eventDateTimeIntervals.days[
      selectedDateIndex
    ].hours.findIndex(
      (hour) =>
        hour.firstIndex <= dateTimeIndex && hour.lastIndex >= dateTimeIndex,
    );
    if (selectedHourIndex === -1) selectedHourIndex = 0;

    return {
      selectedDateIndex,
      selectedHourIndex,
    };
  }, [dateTimeIndex]);

  return (
    <div className="flex flex-col gap-2 items-center min-w-70">
      <div className="inline-flex rounded-md border-slate-300 border justify-center items-center text-sm overflow-hidden">
        {eventDateTimeIntervals.days.map((day, i) => (
          <button
            key={day.firstIndex}
            className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer ${selectedDateIndex === i ? 'bg-slate-200 drop-shadow-sm' : 'hover:bg-slate-100 '}`}
            onClick={() => onChange(day.firstIndex)}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-1">
        {eventDateTimeIntervals.days[selectedDateIndex].hours.map((hour, i) => (
          <button
            key={hour.firstIndex}
            className={`text-xs px-1 py-0.5 border-slate-300 border rounded-md hover:cursor-pointer ${selectedHourIndex === i ? 'bg-slate-200 drop-shadow-sm' : 'hover:bg-slate-100 '}`}
            onClick={() => onChange(hour.firstIndex)}
          >
            {hour.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-1">
        {eventDateTimeIntervals.days[selectedDateIndex].hours[
          selectedHourIndex
        ].minuteIntervals.map((interval) => (
          <button
            key={interval.date}
            className={`text-xs px-1 py-0.5 border-slate-300 border rounded-md hover:cursor-pointer ${interval.index === dateTimeIndex ? 'bg-slate-200 drop-shadow-sm' : 'hover:bg-slate-100 '}`}
            onClick={() => onChange(interval.index)}
          >
            {interval.timeLabel}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DatetimeSelector({
  dateTimeIndex,
  onChange,
  small,
}: {
  dateTimeIndex: number;
  onChange: (value: number) => void;
  small?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    middleware: [offset(8), flip(), shift()],
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <button
        ref={refs.setReference}
        className={`flex items-center cursor-pointer border border-slate-300 rounded-md hover:bg-slate-100 justify-center ${small ? 'min-w-24 text-xs px-1 py-0.5' : 'min-w-28 text-sm px-2 py-1'}`}
        {...getReferenceProps()}
      >
        {eventDateTimeIntervals.all[dateTimeIndex].dateTimeLabel}
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="bg-white px-4 py-2 rounded-md shadow-lg border border-slate-300 z-200 mb-1"
          >
            <DatetimeSelectorPopup
              dateTimeIndex={dateTimeIndex}
              onChange={onChange}
            />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
