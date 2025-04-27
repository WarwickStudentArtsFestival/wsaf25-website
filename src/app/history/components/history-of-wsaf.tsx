import HighlightedHeading from '@/app/components/highlighted-heading';
import FestivalsTable from '@/app/history/components/festivals-table';

export default function HistoryOverview() {
  return (
    <div className="max-w-7xl mx-auto pt-6">
      <HighlightedHeading text="History of WSAF" />
      <p className="my-2">
        Warwick Student Arts Festival is not a completely novel idea - it made
        its{' '}
        <a
          href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
          className="text-slate-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          first debut on 20-24 June 2004
        </a>
        , with over 50 events. Since then, it ran for 11 further years before it
        stopped, with more and more success each time.{' '}
        <strong>
          Our aim is to bring this event back to campus, reclaiming the title as
          &quot;Europe&apos;s largest annual student arts festival&quot;.
        </strong>
      </p>
      <p>
        This page is based from the research of WSAF organisers Adam Skrzymowski
        and Josh Heng, which is based off what we can find online. Whilst we
        have made this as accurate as possible, there is likely to be things
        we&apos;ve missed or got wrong - if you know more about the lore of WSAF
        or know anything that could be interesting, please contact us at{' '}
        <a
          href="mailto:info@wsaf.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300"
        >
          info@wsaf.org.uk
        </a>
        !
      </p>
      <section className="mb-6">
        <FestivalsTable />
      </section>
    </div>
  );
}
