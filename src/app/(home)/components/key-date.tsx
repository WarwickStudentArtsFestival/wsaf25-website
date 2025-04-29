export type KeyDateProps = {
  name: string;
  date: string;
  dateTime: string;
  description?: string;
  warwickWeek?: string;
};

export default function KeyDate({
  name,
  date,
  dateTime,
  description,
  warwickWeek,
}: {
  name: string;
  date: string;
  dateTime: string;
  description?: string;
  warwickWeek?: string;
}) {
  return (
    <article className="relative group lg:even:mt-[224px] lg:odd:mb-[215px] flex flex-col">
      <div className="hidden group-odd:hidden lg:block">
        <div className="bg-purple rounded-full w-6 h-6 -mb-3 mx-auto" />
        <div className="bg-purple w-2 h-40 -mb-28 mx-auto" />
      </div>
      <div className="relative bg-purple h-full lg:h-auto md:w-72 p-4 mx-4 flex flex-col group-even:mt-auto">
        <header>
          <h3 className="uppercase font-bold text-2xl">{name}</h3>
          <time className="text-yellow font-bold text-lg" dateTime={dateTime}>
            {date}
            {warwickWeek && (
              <span className="block font-normal text-xs -mt-1 mb-1">
                {warwickWeek}
              </span>
            )}
          </time>
        </header>
        <div className="mt-auto">
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="hidden group-even:hidden lg:block mt-auto">
        <div className="bg-purple w-2 h-40 -mt-28 mx-auto" />
        <div className="bg-purple rounded-full w-6 h-6 -mt-3 mx-auto" />
      </div>
    </article>
  );
}
