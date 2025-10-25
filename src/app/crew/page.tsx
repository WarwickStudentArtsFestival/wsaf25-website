import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaCalendarPlus, FaDiscord } from 'react-icons/fa';

import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import RoleCard from '@/app/components/role-card';
import PeopleInvolved from '../components/people-involved/people-involved';
import CrewFaq from '../(home)/components/faq/tabs/crew-faq';

import PosteringImage from '@/assets/images/postering.jpg';
import crewConfig from '@config/crew-config';
import mainConfig from '@config/main-config';

export const metadata: Metadata = {
  title: 'Crew',
  description:
    "Warwick Student Arts Festival would not be possible without our amazing team of volunteers. From marketing to catering and from stewarding to tech, our team have been working hard since February to make the event the best that it can be. However, we're still looking for people to help!",
};

export default function Team() {
  return (
    <main>
      <section>
        <PageHeader />
        <div className="mt-4">
          <HighlightedHeading text="Join The Crew" />
        </div>

        <div className="flex mx-4 mt-4 flex-col md:flex-row justify-center items-center md:items-start max-w-6xl xl:mx-auto px-4 gap-4">
          <div className="md:text-right leading-snug -mx-4 sm:mx-0">
            <h2 className="text-teal text-2xl font-semibold mb-4">
              Warwick Student Arts Festival would not be possible without our
              amazing team of volunteers.
            </h2>
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
              and <strong>food</strong> each day.{' '}
              {crewConfig.allowSignUps ? (
                <>
                  <a
                    href={mainConfig.crew.signupUrl}
                    target="_blank"
                    className="text-teal"
                  >
                    Sign up to join our crew now
                  </a>
                  , or if you feel like you could contribute in a different way,
                  contact us at{' '}
                  <a
                    href="mailto:info@wsaf.org.uk"
                    target="_blank"
                    className="text-teal"
                  >
                    info@wsaf.org.uk
                  </a>{' '}
                  or{' '}
                  <a
                    href={mainConfig.socials.discordInvite}
                    target="_blank"
                    className="text-teal"
                  >
                    Discord
                  </a>
                  .
                </>
              ) : (
                <>
                  <a
                    href={mainConfig.socials.discordInvite}
                    target="_blank"
                    className="text-teal"
                  >
                    Join our Discord now
                  </a>
                  , or contact us at{' '}
                  <a
                    href="mailto:info@wsaf.org.uk"
                    target="_blank"
                    className="text-teal"
                  >
                    info@wsaf.org.uk
                  </a>
                  .
                </>
              )}
            </p>
            {crewConfig.allowSignUps && (
              <p className="mb-4">
                We also recommend that all volunteers join our{' '}
                <a
                  href={mainConfig.socials.discordInvite}
                  target="_blank"
                  className="text-teal"
                >
                  Discord
                </a>{' '}
                for easier communication and to stay up to date!
              </p>
            )}
            <div className="flex gap-2 justify-center md:justify-end flex-wrap">
              {crewConfig.allowSignUps ? (
                <a
                  href={mainConfig.crew.signupUrl}
                  target="_blank"
                  className="inline-block bg-purple text-white uppercase font-bold px-3 py-1.5 drop-shadow-sm hover:scale-105 text-xl lg:text-2xl"
                >
                  <FaCalendarPlus className="inline-block mb-1 mr-2" />
                  Sign Up Now
                </a>
              ) : (
                <a
                  href={mainConfig.socials.discordInvite}
                  target="_blank"
                  className="inline-block bg-purple text-white uppercase font-bold px-3 py-1.5 drop-shadow-sm hover:scale-105 text-xl lg:text-2xl"
                >
                  <FaDiscord className="inline-block mb-1 mr-2" />
                  Join Discord
                </a>
              )}
            </div>
          </div>

          <Image
            src={PosteringImage}
            alt="Warwick Student Arts Festival volunteers putting up posters on campus."
            className="hidden sm:block max-w-64 sm:max-w-80 lg:max-w-md float-right"
            priority
            placeholder="blur"
          />
        </div>
      </section>

      <section className="my-4 max-w-8xl mx-auto">
        <HighlightedHeading text="Crew Roles" />
        <div className="mt-2 grid w-full px-2 xl:px-16 sm:py-4 xs:grid-cols-2 sm:grid-cols-3 grid-cols-1 lg:grid-cols-6 gap-4">
          {crewConfig.roles.map((role) => (
            <RoleCard
              key={role.name}
              image={role.image}
              imageAlt="Placeholder"
              title={role.name}
              footer="placeholder"
              link='"#"'
              description={[role.description]}
            />
          ))}
        </div>
      </section>

      <section>
        <HighlightedHeading text="Meet the Team" />
        <h2 className="text-teal text-xl pt-2 sm:text-2xl font-semibold">
          Organisers
        </h2>
        <p className="mb-1 max-w-6xl mx-auto px-4">
          Our organisers are responsible for the overall planning and running of
          WSAF.
        </p>
        <PeopleInvolved />
      </section>

      <div className="max-w-7xl xl:mx-auto mb-8 mx-8">
        <HighlightedHeading text="FAQ" />
        <CrewFaq />
      </div>
    </main>
  );
}
