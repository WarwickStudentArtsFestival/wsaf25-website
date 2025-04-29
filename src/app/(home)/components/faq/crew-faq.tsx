import Question from '@/app/(home)/components/faq/question';
import Answer from '@/app/(home)/components/faq/answer';
import Link from 'next/link';

export default function CrewFaq() {
  return (
    <article className="space-y-6">
      <div>
        <Question>What can I help with?</Question>
        <Answer>
          We have many different teams across the festival which can suit your
          interests and commitment. More information can be found on the{' '}
          <Link className="text-teal" href="/crew">
            crew page
          </Link>
          .
        </Answer>
      </div>

      <div>
        <Question>What benefits are there?</Question>
        <Answer>
          In addition to meeting other people, gaining new skills and having a
          once-in-a-lifetime experience, you’ll also get a free crew t-shirt and
          food throughout the event!
        </Answer>
      </div>

      <div>
        <Question>
          I have exams or other commitments. Can I still help?
        </Question>
        <Answer>
          Yes - we need as much help as we can get, both in advance of the
          festival and on the day. Everything is done on a voluntary basis, so
          you get to choose what you want to work on. We only ask that you
          don&apos;t overcommit, and let us know as soon as possible if you can
          no longer do something.
        </Answer>
      </div>

      <div>
        <Question>I have no experience. Can I still help?</Question>
        <Answer>
          Absolutely! You don&apos;t need to apply to help out - if you want to
          help in any team, you can! This is only the second time we&apos;re
          doing this, so if you think you have no clue what you&apos;re doing,
          we probably don&apos;t have much more of a clue...
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
