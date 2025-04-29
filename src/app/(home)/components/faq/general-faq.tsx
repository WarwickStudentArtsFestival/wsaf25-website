import Question from '@/app/(home)/components/faq/question';
import Answer from '@/app/(home)/components/faq/answer';
import Link from 'next/link';

export default function GeneralFaq() {
  return (
    <article className="space-y-6">
      <div>
        <Question>Why are you putting on this event?</Question>
        <Answer>
          The University of Warwick has a wealth of highly motivated student
          bands, theatre societies and other performing groups which we want to
          present to whole University community in the summer term. This is
          inspired by the old &apos;Warwick Student Arts Festival&apos;, which
          to our knowledge last took place in 2015.
        </Answer>
      </div>

      <div>
        <Question>Are you run by the University?</Question>
        <Answer>
          No, we are an independent group of students. Last year, WSAF operated
          under the{' '}
          <a
            href="https://warwicktechcrew.co.uk"
            target="_blank"
            className="text-teal"
          >
            Tech Crew
          </a>{' '}
          society, however we are currently in the process of establishing a
          society of our own. Last year and this year we were fortunate to
          receive funding from{' '}
          <a
            href="https://warwick.ac.uk/students/together/eventorganisers/extracurricular/programmefunding"
            target="_blank"
            className="text-teal"
          >
            Together@Warwick
          </a>
          &apos;s grant scheme, and due to the nature of the festival we have
          closely collaborated with university departments such as Marketing,
          Estates, AV Services and Conferences. Despite this, all decisions are
          still made by students!
        </Answer>
      </div>

      <div>
        <Question>
          How is WSAF different to other society events such as{' '}
          <a
            href="https://www.warwicksu.com/campaigns-communities/campaigns/archived/studentactivities/socsfest/"
            target="_blank"
            className="text-teal"
          >
            SocFest
          </a>
          ?
        </Question>
        <Answer>
          WSAF&apos;s aim is to widen performance opportunities and to give
          people the chance to watch something that they might not have seen
          otherwise. We&apos;re providing a collection of a wider range of arts
          than a certain type of drama or society, but are more performance and
          arts-related than SocFest. You&apos;re more than welcome to submit and
          exhibit the same performance at both WSAF and another event.
        </Answer>
      </div>

      <div>
        <Question>
          I&apos;d like to help out but don&apos;t want or have anything to
          perform. Is this possible?
        </Question>
        <Answer>
          Of course! We&apos;re a fully student-run initiative so also need help
          in advance with organisation, marketing and planning, and on the day
          with operations, stewarding and tech. Please see our{' '}
          <Link href="/crew" className="text-teal">
            crew page
          </Link>{' '}
          for more information.
        </Answer>
      </div>

      <div>
        <Question>
          I&apos;ve found references to an older Warwick Student Arts Festival
          or Warwick Fringe before. Is this related?
        </Question>
        <Answer>
          Yes! The Warwick Student Arts Festival used to be a yearly event from
          2004 to 2015, and we brought it back last year in 2025! You can find
          out more about WSAF&apos;s history on the{' '}
          <Link href="/history" className="text-teal">
            history page
          </Link>
          .
        </Answer>
      </div>

      <div>
        <Question>Where can I find more information?</Question>
        <Answer>
          Please contact us by email at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-teal"
          >
            info@wsaf.org.uk
          </a>{' '}
          or on Instagram at{' '}
          <a
            href="https://www.instagram.com/wsaf25/"
            target="_blank"
            className="text-teal"
          >
            @wsaf25
          </a>
          .
        </Answer>
      </div>
    </article>
  );
}
