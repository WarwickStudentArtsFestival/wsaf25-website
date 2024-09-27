import KeyDate, { KeyDateProps } from './key-date';

const keyDates: KeyDateProps[] = [
  {
    name: 'Submissions Open',
    date: 'Mon 1st Apr',
    dateTime: '2024-04-01',
    description: 'WSAF performance submissions open.',
    warwickWeek: 'Easter Holiday',
  },
  {
    name: 'Submissions Close',
    date: 'Sun 12th May',
    dateTime: '2024-05-12',
    description:
      'Submission form closes and the schedule and logistics are finalised.',
    warwickWeek: 'Term 3, Week 3',
  },
  {
    name: 'WSAF',
    date: 'Sat 8th - Mon 10th June',
    dateTime: '2024-06-08',
    description:
      'The festival itself - a 3 day showcase and celebration of all aspects of the arts.',
    warwickWeek: 'Term 3, Week 7/8',
  },
];

export default function KeyDates() {
  return (
    <section className="mb-12">
      <h2 className="mb-4">Key Dates</h2>

      <div className="relative">
        <hr className="hidden lg:block border-secondary border-b-8 absolute top-1/2 w-full" />
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
