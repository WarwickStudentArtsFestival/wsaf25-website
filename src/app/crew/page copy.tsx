import PageHeader from '@/app/components/page-header';
import PosteringImage from '@/assets/images/postering.jpg';
import Image from 'next/image';
import organisers from '@/app/team/organisers';
import IdCard from '@/app/components/id-card';
import volunteers from '@/app/team/volunteers';
import AvatarImage from '@/assets/people/avatar.jpg';
import { FaDiscord } from 'react-icons/fa';
import CrewRole from '@/app/team/components/crew-role';
import { Metadata } from 'next';
import { FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Team | Warwick Student Arts Festival 2024',
  description:
    "Warwick Student Arts Festival would not be possible without our amazing team of volunteers. From marketing to catering and from stewarding to tech, our team have been working hard since February to make the event the best that it can be. However, we're still looking for people to help!",
};

const crewRoles = [
  {
    name: 'Marketing',
    description:
      'The marketing team ensures that everyone around campus and in the local community knows about WSAF and all of its events. This includes marketing through social media, posters, flyers and T-shirts and taking photos and videos throughout the event.',
  },
  {
    name: 'Stewards',
    description:
      "Stewards help ensure that all attendees know what's going on and have a great experience. They also check ticket reservations for busy events and distribute stickers and leaflets.",
  },
  {
    name: 'Tech',
    description:
      'The tech team ensure that everyone can be seen and heard through the use of sound/PA and lighting/LX systems. They are also responsible for livestreaming and recording events, where applicable. All tech operators must be members of Warwick Tech Crew - please contact us for more information.',
  },
  {
    name: 'Venue Managers',
    description:
      'Venue managers are responsible for looking after each venue and its performance schedule throughout WSAF. They ensure that performers, tech operators and stewards are aware of the schedule and any special requirements and that they communicate well with each other.',
  },
  {
    name: 'Operations',
    description:
      'The operations and logistics team ensures that the event runs smoothly and are on hand to resolve any issues that can crop up. This can range from transporting equipment between venues to sorting last-minute scheduling issues.',
  },
];

export default function Team() {
  return (
    <main>
      <section className="mb-8 md:mb-16">
        <PageHeader title="Team" />

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto px-4 gap-4">
          <div className="md:text-right leading-snug">
            <p className="text-lg font-semibold mb-1">
              Warwick Student Arts Festival would not be possible without our
              amazing team of volunteers.
            </p>
            <p className="mb-4">
              From marketing to catering and from stewarding to tech, our team
              have been working hard since February to make the event the best
              that it can be.{' '}
              <strong>
                However, we&apos;re still looking for people to help!
              </strong>
            </p>
            <p className="mb-4">
              Not only do volunteers get to meet new people and gain new
              experience, but all crew receive a <strong>free T-shirt</strong>{' '}
              and <strong>lunch</strong> on each day. If you&apos;d be
              interested in helping out in any of the listed roles (or feel like
              you could contribute in a different way), join the{' '}
              <a href="/discord" target="_blank" className="text-accent">
                Discord
              </a>{' '}
              or contact us at{' '}
              <a
                href="mailto:info@wsaf.org.uk"
                target="_blank"
                className="text-accent"
              >
                info@wsaf.org.uk
              </a>
              .
            </p>

            <div className="flex gap-2 justify-center md:justify-end flex-wrap">
              <a
                href="/discord"
                target="_blank"
                className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
              >
                <span className="text-xl lg:text-2xl uppercase font-bold">
                  <FaDiscord className="inline-block mb-1 mr-2" />
                  Join Discord
                </span>
              </a>
              {/* <a
                href="/helfertool"
                target="_blank"
                className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
              >
                <span className="text-xl lg:text-2xl uppercase font-bold">
                  <FiArrowRight className="inline-block mb-1 mr-2" />
                  Sign Up
                </span>
              </a> */}
            </div>
          </div>
          <Image
            src={PosteringImage}
            alt="Warwick Student Arts Festival volunteers putting up posters on campus."
            className="max-w-64 sm:max-w-80 lg:max-w-md float-right"
            priority
            placeholder="blur"
          />
        </div>
      </section>

      <section className="mb-8 md:mb-16 max-w-8xl mx-auto">
        <h2>Crew Roles</h2>
        <div className="mt-2 flex flex-wrap gap-4 justify-center mx-4">
          {crewRoles.map((role) => (
            <CrewRole
              key={role.name}
              name={role.name}
              description={role.description}
            />
          ))}
        </div>

        <a
          href="/helfertool"
          className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mt-4 mx-4"
          target="_blank"
        >
          <span className="text-xl uppercase font-bold">
            <FiArrowRight className="inline mr-2 mb-1" />
            View or Sign Up to a Role
          </span>
        </a>
      </section>

      <section className="md:mb-16">
        <h2>Organiser Team</h2>
        <p className="mb-1 max-w-6xl mx-auto px-4">
          Our organiser team, led by the four founders, have been central in the
          preparation and coordination of WSAF.
        </p>

        <div className="flex justify-center flex-wrap mb-8 mx-4">
          {organisers.map((person) => (
            <IdCard
              key={person.name}
              name={person.name}
              description={person.description}
              role={person.role}
              image={person.image}
            />
          ))}
        </div>
      </section>

      <section className="md:mb-16">
        <h2>Volunteer Team</h2>
        <p className="mb-1 max-w-6xl mx-auto px-4">
          Our volunteer team are also essential to the running of WSAF, and
          we&apos;re still looking for others to join! You can view our
          available roles and sign up{' '}
          <a href="/helfertool" target="_blank" className="text-accent">
            here
          </a>
          , join the{' '}
          <a href="/discord" target="_blank" className="text-accent">
            Discord
          </a>{' '}
          or contact us at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-accent"
          >
            info@wsaf.org.uk
          </a>
          .
        </p>
        <div className="flex justify-center flex-wrap mb-8 mx-4">
          {volunteers.map((person) => (
            <IdCard
              key={person.name}
              name={person.name}
              description={person.description}
              role={person.role}
              image={person.image}
            />
          ))}
          <IdCard
            name="You?"
            role="Volunteer"
            image={AvatarImage}
            emailDescription
          />
        </div>
      </section>
    </main>
  );
}
