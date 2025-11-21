import KeyDate from './key-date';
import HighlightedHeading from '@/app/components/highlighted-heading';
import homepageConfig from '@config/homepage-config';

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
          {homepageConfig.keyDates.map((date) => (
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
