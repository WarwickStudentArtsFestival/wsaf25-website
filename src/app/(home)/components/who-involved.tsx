import IdCard from '@/app/components/id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import { FiArrowRight } from 'react-icons/fi';
import HighlightedHeading from '@/app/components/highlighted-heading';
import Link from 'next/link';
import organisers from '@/app/crew/organisers';
import React from 'react';

export default function KeyDates() {
  return (
    <section className="py-8">
      <HighlightedHeading text="Who is WSAF?" />
      <h2 className="text-teal text-2xl font-semibold">
        The Team Behind The Warwick Student Arts Festival
      </h2>
      <p className="mt-2 mb-1 mx-4">
        Whilst we collaborate with the University and are primarily funded by
        the Together@Warwick grant, WSAF is a fully student-run event. We have
        many teams including marketing, stewarding, digital and tech, and
        we&apos;d love to see you be a part of it!
      </p>

      <div className="flex text-white justify-center flex-wrap mb-4">
        {organisers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            role="Organiser"
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

      <Link
        href="/crew"
        className="inline-block bg-purple px-4 py-1 rounded-xs drop-shadow-xs hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl uppercase text-white font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          Join the WSAF 2025 Crew
        </span>
      </Link>
    </section>
  );
}
