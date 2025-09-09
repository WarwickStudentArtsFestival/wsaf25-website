import Question from '@/app/(home)/components/faq/question';
import Answer from '@/app/(home)/components/faq/answer';
import mainConfig from '@config/main-config';

export default function SubmissionsFaq() {
  return (
    <article className="space-y-6">
      <div>
        <Question>When will I hear back about my submission?</Question>
        <Answer>
          We&apos;re hoping to schedule all events on the weekend after
          submissions close, with the aim to get back to you by the end of the
          week.
        </Answer>
      </div>

      <div>
        <Question>
          I&apos;d just like to perform a short set individually. Is this
          possible?
        </Question>
        <Answer>
          Yes! Currently, we&apos;re planning on combining similar acts into
          larger events where there&apos;s a lot of interest, but if not
          we&apos;ll try to find a place to slot you into the schedule anyway.
        </Answer>
      </div>

      <div>
        <Question>Can I still do my own marketing and advertising?</Question>
        <Answer>
          Absolutely! We want to help promote everyone&apos;s events as much as
          possible and are happy to work with you to do this. If you&apos;d like
          us not to advertise your event at all and do this yourself, please
          just let us know in the submissions form.
        </Answer>
      </div>

      <div>
        <Question>
          Is there any funding available for production costs?
        </Question>
        <Answer>
          Yes! Whilst performing or exhibiting in WSAF is voluntary, we have a
          limited amount of funding available for production or equiment costs -
          please just let us know in the submissions form. Tech (sound, lights
          and video) will be provided by WSAF in collaboration with Tech Crew
          and does not need to be individually budgeted for.
        </Answer>
      </div>

      <div>
        <Question>Do I need to sort my own venue and tech?</Question>
        <Answer>
          No - we will be providing all venues and tech for the weekend. If you
          have any specific requirements, please contact us or let us know in
          the submissions form and we&apos;ll do our best to accommodate them.
        </Answer>
      </div>

      <div>
        <Question>How long can my performance be?</Question>
        <Answer>
          We&apos;re hoping for most shows to be shorter than 60 minutes, to
          allow people to see as much as possible over the weekend. We will,
          however, do our best to schedule any performance - in 2024 we had a{' '}
          <a
            href="https://2024.wsaf.org.uk/events/wind-orchestra-charity-playathon"
            target="_blank"
            className="text-teal"
          >
            full-day Wind Orchestra Charity Playathon
          </a>
          !
        </Answer>
      </div>

      <div>
        <Question>Where can I find more information?</Question>
        <Answer>
          Please contact us by email at{' '}
          <a
            href="mailto:submissions@wsaf.org.uk"
            target="_blank"
            className="text-teal"
          >
            submissions@wsaf.org.uk
          </a>{' '}
          or on Instagram at{' '}
          <a
            href={`https://www.instagram.com/${mainConfig.socials.instagram}/`}
            target="_blank"
            className="text-teal"
          >
            @{mainConfig.socials.instagram}
          </a>
          .
        </Answer>
      </div>
    </article>
  );
}
