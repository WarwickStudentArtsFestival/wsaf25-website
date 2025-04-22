import IdCard from '@/app/components/id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import { FiArrowRight } from 'react-icons/fi';

export default function KeyDates() {
  return (
    <section className="mb-4 md:mb-8">
      <h2>Who&apos;s Involved?</h2>
      <p className="mt-2 mb-1 mx-4">
        WSAF 2024 was organised by a team of over 30 volunteers in roles such as
        organisation, marketing, tech and logistics.
        <br />
        If you&apos;d be interested in helping out this year, please email us at{' '}
        <a
          href="mailto:info@wsaf.org.uk"
          className="text-accent"
          target="_blank"
        >
          info@wsaf.org.uk.
        </a>
      </p>

      <div className="flex justify-center flex-wrap mb-4">
        <IdCard
          name="You?"
          role="Volunteer"
          image={AvatarImage}
          emailDescription
        />
      </div>

      <a
        href="https://2024.wsaf.org.uk/team"
        className="inline-block bg-tertiary px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          View the WSAF 2024 Team
        </span>
      </a>
    </section>
  );
}
