import Question from '@/app/components/faq/question';
import Answer from '@/app/components/faq/answer';

export default function CrewFaq() {
  return (
    <article className="space-y-6">
      <div>
        <Question>What can I help with?</Question>
      </div>

      <div>
        <Question>What benefits are there?</Question>
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
