import KeyDate, { KeyDateProps } from './key-date';
import HighlightedHeading from '@/app/components/highlighted-heading';

const keyDates: KeyDateProps[] = [
  {
    name: 'Submissions Open',
    date: 'Mon 10th March',
    dateTime: '2025-03-10',
    description: 'WSAF performance submissions open.',
    warwickWeek: 'Term 2 Week 10',
  },
  {
    name: 'Submissions Close',
    date: 'Friday 2nd May',
    dateTime: '2025-05-02',
    description:
      'Submission form closes and the schedule and logistics are finalised.',
    warwickWeek: 'Term 3, Week 2',
  },
  {
    name: 'WSAF',
    date: 'Fri 13th - Mon 16th June',
    dateTime: '2025-06-13',
    description:
      'The festival itself - a 4 day showcase and celebration of all aspects of the arts.',
    warwickWeek: 'Term 3, Week 8/9',
  },
];

export default function KeyDates() {
  return (
    <section className="bg-white text-white py-8">
      <HighlightedHeading text="When is WSAF?" />
      <h2 className="text-white text-2xl font-semibold mb-4">
        Key Festival Dates
      </h2>

      <div className="relative">
        <hr className="hidden lg:block border-purple border-b-8 absolute top-1/2 w-full" />
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-stretch gap-y-6 lg:-space-x-36 xl:-space-x-28">
          {keyDates.map((date) => (
            <KeyDate
              key={date.name}
              name={date.name}
              date={date.date}
              dateTime={date.dateTime}
              description={date.description}
              warwickWeek={date.warwickWeek}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
