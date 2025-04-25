import PageHeader from '@/app/components/page-header';
import FestivalsTable from '@/app/history/festivals-table';
import Wsaf2004Poster from '@/assets/history/wsaf-2004-poster.jpg';
import Wsaf2004Dj from '@/assets/history/wsaf-2004-dj.jpg';
import Wsaf2004Breakdancing from '@/assets/history/wsaf-2004-breakdancing.jpg';
import Wsaf2004Film from '@/assets/history/wsaf-2004-film.jpg';
import Wsaf2008Schedule from '@/assets/history/wsaf-2008-schedule.jpg';
import Wsaf2010Logo from '@/assets/history/wsaf-2010-logo.jpg';
import Wsaf2012Poster from '@/assets/history/wsaf-2012-poster.jpg';
import Wsaf2014Logo from '@/assets/history/wsaf-2014-logo.jpg';
import Wsaf2015Logo from '@/assets/history/wsaf-2015-logo.jpg';
import Image from 'next/image';
import Gallery from '@/app/history/gallery';
import { Metadata } from 'next';
import Link from 'next/link';
import HighlightedHeading from '@/app/components/highlighted-heading';

export const metadata: Metadata = {
  title: 'The History of WSAF | Warwick Student Arts Festival 2025',
  description:
    'Warwick Student Arts Festival is not a completely novel idea - it made its first debut on 20-24 June 2004, with over 50 events. Since then, it ran for 11 further years before it stopped, with more and more success each time. Our aim is to bring this event back to campus, reclaiming the title as "Europe\'s largest annual student arts festival".',
};

export default function History() {
  return (
    <main>
      <PageHeader />
      <HighlightedHeading text="History" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        The History of WSAF
      </h1>

      <section className="max-w-6xl mx-auto px-4">
        <p className="mb-2">
          Warwick Student Arts Festival is not a completely novel idea - it made
          its{' '}
          <a
            href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
            className="text-teal"
            target="_blank"
            rel="noopener noreferrer"
          >
            first debut on 20-24 June 2004
          </a>
          , with over 50 events. Since then, it ran for 11 further years before
          it stopped, with more and more success each time.{' '}
          <strong>
            Our aim is to bring this event back to campus, reclaiming the title
            as &quot;Europe&apos;s largest annual student arts festival&quot;.
          </strong>
        </p>
        <p>
          This page is based from the research of WSAF organisers Adam
          Skrzymowski and Josh Heng, which is based off what we can find online.
          Whilst we have made this as accurate as possible, there is likely to
          be things we&apos;ve missed or got wrong - if you know more about the
          lore of WSAF or know anything that could be interesting, please
          contact us at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal"
          >
            info@wsaf.org.uk
          </a>
          !
        </p>
      </section>

      <section className="mb-6">
        <FestivalsTable />
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-teal text-xl font-semibold mb-2">The Beginning</h2>

        <div className="flex-col-reverse sm:flex-row flex gap-2 sm:gap-4 mb-2">
          <div className="sm:w-96 grow sm:text-right">
            <p className="mb-2">
              The{' '}
              <a
                href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
                className="text-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                first ever Warwick Student Arts Festival
              </a>{' '}
              took place from Sunday 20th June to Thursday 24th June 2004, being
              described as a
              <em>
                &quot;spectacular celebration of the creative talent at the
                University, encapsulating virtually every artistic genre
                imaginable.&quot;
              </em>{' '}
              This festival had 60 events involving around 700 students, ranging
              from a &apos;Paint Explosion&apos; and &apos;Prom in the
              Park&apos; to an &apos;Indian Raga Evening&apos; and &apos;Stomp
              Style Percussion&apos;.{' '}
              <a
                href="https://www.bbc.co.uk/coventry/features/student/break-dancing-at-warwick-uni.shtml"
                className="text-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                An article from BBC News
              </a>{' '}
              also reported breakdancing, a 24-hour DJ marathon and Student Film
              Festival.
            </p>
            <p>
              The next year,{' '}
              <a
                href="https://web.archive.org/web/20210918050951/https://blogs.warwick.ac.uk/wsaf/?num=10&start=10"
                className="text-teal"
                target="_blank"
                rel="noopener noreferrer"
              >
                WSAF &apos;05
              </a>
              , featured a <strong>piazza stage</strong> and started with an
              hour and a half of{' '}
              <em>&quot;The Greatest Show on Campus&quot;</em>, a combination of
              magic, juggling and music. This festival also included WSAF
              postcards and a printed programme, with hundreds of volunteers.
            </p>
          </div>
          <figure>
            <Image
              src={Wsaf2004Poster}
              alt="Poster from WSAF 2004"
              className="w-36 object-contain mx-auto"
              placeholder="blur"
              priority
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2004 Poster
              </a>
            </figcaption>
          </figure>
        </div>

        <figure className="mb-4">
          <div className="flex gap-4 justify-center flex-wrap">
            <Image
              src={Wsaf2004Dj}
              alt="24-hour DJ marathon at WSAF '04"
              placeholder="blur"
              className="object-contain h-40 w-auto"
            />
            <Image
              src={Wsaf2004Breakdancing}
              alt="Breakdancing at WSAF '04"
              placeholder="blur"
              className="object-contain h-40 w-auto"
            />
            <Image
              src={Wsaf2004Film}
              alt="12 foot high outdoor screen at WSAF '04"
              placeholder="blur"
              className="object-contain h-40 w-auto"
            />
          </div>
          <figcaption className="text-xs mt-0.5">
            <a
              href="https://www.bbc.co.uk/coventry/features/student/break-dancing-at-warwick-uni.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF &apos;04 Images from BBC News
            </a>
          </figcaption>
        </figure>

        <div className="flex-col sm:flex-row flex gap-4 sm:text-left mb-2">
          <figure>
            <iframe
              width="241"
              height="180"
              src="https://www.youtube.com/embed/zdXN7Y-Flxo?si=hP0IUv_ZMrEANFXy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mx-auto"
            ></iframe>
            <figcaption className="text-xs mt-0.5 text-center">
              <a
                href="https://www.youtube.com/watch?v=zdXN7Y-Flxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF Amarillo Music Video
              </a>
            </figcaption>
          </figure>
          <div className="sm:w-96 grow">
            <p className="mb-2">
              Perhaps one of the most notable relics of WSAF &apos;05 was the{' '}
              <a
                href="https://www.youtube.com/watch?v=zdXN7Y-Flxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF Amarillo Music Video Trailer
              </a>
              , which premiered to over 3,000 people at Top Banana (the Student
              Union nightclub event predating Pop!). This was reportedly Warwick
              TV&apos;s most popular video in 2008, and won the &quot;Highly
              Commended Music to Video&quot; award at the 2006 National Student
              Television Association Awards.
            </p>
            <p>
              We can&apos;t anything about WSAF &apos;06 and can only find very
              little about{' '}
              <a
                href="https://web.archive.org/web/20070630063134/http://www.wsaf.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF &apos;07
              </a>
              . However, we do know that WSAF &apos;07 featured over 77 events
              and took place over 5 days so can only assume that WSAF grew and
              grew each year. We also know that while some events in WSAF
              &apos;04 were paid, by WSAF &apos;07 the full festival was free.
            </p>
          </div>
        </div>

        <h2 className="text-teal text-2xl font-semibold mt-4 mb-2">
          The Middle
        </h2>

        <div>
          <p className="mb-2">
            <a
              href="https://web.archive.org/web/20081007200600/http://www.wsaf.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF &apos;08
            </a>{' '}
            celebrated the 5th anniversary of the festival, and at this point
            was recognised as{' '}
            <strong>the world&apos;s biggest student-led arts festival</strong>.
            The 5th year saw a Guinness record attempt to make the longest conga
            line in the world, a Chinese carnival parade and a ghost tour around
            campus. By this point, annual WSAF traditions included an opening
            concert by Revelation Rock Gospel Choir and late-night outdoor film
            screenings by Warwick Student Cinema. WSAF &apos;08 was also the
            first festival whose{' '}
            <a
              href="https://warwick.ac.uk/newsandevents/news-old/get_set_for/wsaf_prog_08_190608_print.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              16-page printed programme
            </a>{' '}
            we can find.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-2 flex-wrap">
          <figure>
            <iframe
              width="341"
              height="256"
              src="https://www.youtube.com/embed/NETIyo4Uc_o?si=bPm_Vyn5skPze2_w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="max-w-full 2xs:h-64"
            ></iframe>
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://www.youtube.com/watch?v=NETIyo4Uc_o"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF &apos;08 Trailer
              </a>
            </figcaption>
          </figure>
          <figure>
            <Image
              src={Wsaf2008Schedule}
              alt="WSAF '08 Schedule"
              className="object-contain w-auto 2xs:h-64"
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/get_set_for/wsaf_prog_08_190608_print.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF &apos;08 Schedule
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 sm:mt-0 flex-col sm:flex-row flex gap-2 sm:gap-4 mb-2">
          <figure>
            <Image
              src={Wsaf2010Logo}
              alt="WSAF 2010 Logo"
              className="object-contain w-36 mx-auto"
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/wsaf2010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2010 Logo
              </a>
            </figcaption>
          </figure>
          <div className="sm:w-96 grow sm:text-left">
            <p className="mb-2">
              In 2009, Warwick Student Arts Festival was temporarily renamed to{' '}
              <a
                href="http://web.archive.org/web/20090524043909/http://wsaf.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                SPLAT-Fest
              </a>
              , standing for{' '}
              <strong>
                Student Performance, Literature, Art & Theatre Festival
              </strong>
              . This year was the first year that featured literature, with
              events such as a &apos;Writers Panel Discussion&apos;, &apos;Speed
              Book Club&apos; and &apos;Poetry Slam&apos; - in the first{' '}
              <a
                href="https://warwick.ac.uk/newsandevents/pressreleases/award-winning_author_to/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF-related press release from Warwick University
              </a>
              , it was announced that award-winning author AL Kennedy would
              headline at the festival.
            </p>
            <p>
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/wsaf2010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2010
              </a>{' '}
              introduced the <strong>Funday Sunday</strong>, a family day out
              designed to &quot;celebrate the relationship between the
              University and the wider community.&quot;
            </p>
          </div>
        </div>

        <div className="flex-col-reverse sm:flex-row flex gap-2 sm:gap-4 mb-4">
          <div className="sm:w-96 grow sm:text-right">
            <p className="mb-2">
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/wsaf2010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2011
              </a>{' '}
              took place on Saturday 25th-Tuesday 28th June 2011, continuing the
              focus on the wider community with events aimed at children and
              young people. This also continued into{' '}
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/wsaf2010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2012
              </a>
              , with performances from Music Theatre Warwick Juniors and a
              Community Creative Arts Competition featuring performances from
              Aces Cheer and Dance Club, Rhapsody Academy of Dance, Tile Hill
              School Choir and Finham Park School Choir.
            </p>
            <p>
              2012 also introduced each day centering around a different theme:
              Community on Sunday, Creation on Monday, Collaboration on Tuesday,
              and Celebration on Wednesday.{' '}
              <a
                href="http://web.archive.org/web/20130810135711/http://wsaf.co.uk/whatiswsaf.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                2013
              </a>{' '}
              continued these themes but added a focus on &apos;urban and
              sensory themes.&apos;
            </p>
          </div>
          <figure>
            <Image
              src={Wsaf2012Poster}
              alt="WSAF 2012 Poster"
              className="object-contain w-28 mx-auto"
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://warwick.ac.uk/newsandevents/news-old/wsaf_2012/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2012 Poster
              </a>
            </figcaption>
          </figure>
        </div>

        <h2 className="text-teal text-2xl font-semibold mb-2 mt-4">The End?</h2>

        <div className="sm:mt-2 mb-2 flex gap-4 justify-center items-center">
          <figure>
            <Image
              src={Wsaf2014Logo}
              alt="WSAF 2014 Logo"
              className="object-contain 2xs:h-32 w-auto"
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://warwick.ac.uk/insite/news/intnews2/wsaf2014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2014 Logo
              </a>
            </figcaption>
          </figure>
          <figure>
            <Image
              src={Wsaf2015Logo}
              alt="WSAF 2015 Logo"
              className="object-contain h-32 w-auto"
            />
            <figcaption className="text-xs mt-0.5">
              <a
                href="https://www.facebook.com/photo/?fbid=158415133533661&set=pb.100080955263187.-2207520000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal"
              >
                WSAF 2015 Logo
              </a>
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="mb-2">
            <a
              href="https://warwick.ac.uk/insite/news/intnews2/wsaf2014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              WSAF 2014
            </a>{' '}
            and{' '}
            <a
              href="https://www.facebook.com/warwickstudentartsfest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              2015
            </a>{' '}
            are the last festivals we can find. Although we are unable to find
            much information about these or WSAF stopped, WSAF 2014 started
            using a{' '}
            <a
              href="https://www.facebook.com/warwickstudentartsfest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              Facebook page
            </a>{' '}
            which still exists today, containing many images of what the last
            festivals were like.
          </p>
          <p>
            But this is not the end of the story! 9 years later, WSAF 2024 is
            being launched by a completely new team, and we hope that this can
            continue for many years into the future. As you excited as we are,
            or has this page inspired you to help?{' '}
            <Link href="/team" className="text-teal">
              Join our team!
            </Link>
          </p>
        </div>

        <Gallery />
      </section>
    </main>
  );
}
