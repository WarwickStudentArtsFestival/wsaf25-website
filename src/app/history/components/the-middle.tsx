import Image from 'next/image';
import Wsaf2008Schedule from '@/assets/history/wsaf-2008-schedule.jpg';
import Wsaf2010Logo from '@/assets/history/wsaf-2010-logo.jpg';
import Wsaf2012Poster from '@/assets/history/wsaf-2012-poster.jpg';
import HighlightedHeading from '@/app/components/highlighted-heading';

export default function MiddleYearsSection() {
  return (
    <div className="max-w-7xl mx-auto pt-6">
      <div>
        <HighlightedHeading text="The Middle" />
        <p className="mb-2">
          <a
            href="https://web.archive.org/web/20081007200600/http://www.wsaf.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300"
          >
            WSAF &apos;08
          </a>{' '}
          celebrated the 5th anniversary of the festival, and at this point was
          recognised as{' '}
          <strong>the world&apos;s biggest student-led arts festival</strong>.
          The 5th year saw a Guinness record attempt to make the longest conga
          line in the world, a Chinese carnival parade and a ghost tour around
          campus. By this point, annual WSAF traditions included an opening
          concert by Revelation Rock Gospel Choir and late-night outdoor film
          screenings by Warwick Student Cinema. WSAF &apos;08 was also the first
          festival whose{' '}
          <a
            href="https://warwick.ac.uk/newsandevents/news-old/get_set_for/wsaf_prog_08_190608_print.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300"
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
              className="text-violet-300"
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
              className="text-violet-300"
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
              className="text-violet-300"
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
              className="text-violet-300"
            >
              SPLAT-Fest
            </a>
            , standing for{' '}
            <strong>
              Student Performance, Literature, Art & Theatre Festival
            </strong>
            . This year was the first year that featured literature, with events
            such as a &apos;Writers Panel Discussion&apos;, &apos;Speed Book
            Club&apos; and &apos;Poetry Slam&apos; - in the first{' '}
            <a
              href="https://warwick.ac.uk/newsandevents/pressreleases/award-winning_author_to/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300"
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
              className="text-violet-300"
            >
              WSAF 2010
            </a>{' '}
            introduced the <strong>Funday Sunday</strong>, a family day out
            designed to &quot;celebrate the relationship between the University
            and the wider community.&quot;
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
              className="text-violet-300"
            >
              WSAF 2011
            </a>{' '}
            took place on Saturday 25th-Tuesday 28th June 2011, continuing the
            focus on the wider community with events aimed at children and young
            people. This also continued into{' '}
            <a
              href="https://warwick.ac.uk/newsandevents/news-old/wsaf2010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300"
            >
              WSAF 2012
            </a>
            , with performances from Music Theatre Warwick Juniors and a
            Community Creative Arts Competition featuring performances from Aces
            Cheer and Dance Club, Rhapsody Academy of Dance, Tile Hill School
            Choir and Finham Park School Choir.
          </p>
          <p>
            2012 also introduced each day centering around a different theme:
            Community on Sunday, Creation on Monday, Collaboration on Tuesday,
            and Celebration on Wednesday.{' '}
            <a
              href="http://web.archive.org/web/20130810135711/http://wsaf.co.uk/whatiswsaf.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300"
            >
              2013
            </a>{' '}
            continued these themes but added a focus on &apos;urban and sensory
            themes.&apos;
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
              className="text-violet-300"
            >
              WSAF 2012 Poster
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
