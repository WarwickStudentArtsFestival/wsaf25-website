import PageHeader from '../components/page-header';
import HighlightedHeading from '../components/highlighted-heading';
import ErrorMessage from '../components/ErrorMessage';
import { fetchVenuesWithEventCount } from '@/lib/venues';
import VenueCard from '@/app/venues/venue-card';
import React from 'react';
import FeedbackCallout from '@/app/components/feedback-callout';
import mainConfig from '@config/main-config';
import eventsConfig from '@config/events-config';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Fetch new information every hour

export async function generateMetadata() {
  if (!eventsConfig.enabled) return notFound();

  try {
    const venues = await fetchVenuesWithEventCount();

    return {
      title: 'Venues',
      description: `View the Warwick Student Arts Festival's ${venues.length} venues and spaces`,
    };
  } catch (error) {
    console.error('Error fetching rooms from API', error);
    return {
      title: 'Venues',
      description: `View the Warwick Student Arts Festival's venues and spaces`,
    };
  }
}

export default async function VenuesPage() {
  if (!eventsConfig.enabled) return notFound();

  let venues;

  try {
    venues = await fetchVenuesWithEventCount();
  } catch (error) {
    console.error('Error fetching rooms from API', error);
    return <ErrorMessage msg="w-please-set-the-api-token" />;
  }

  return (
    <main className="w-full">
      <PageHeader />
      <HighlightedHeading text="Venues" />
      <h1 className="text-teal text-2xl font-semibold mb-2">
        Venues and Spaces
      </h1>

      <div className="mx-auto px-4 gap-8 md:px-16 mx-auto">
        {mainConfig.feedback.banner && <FeedbackCallout />}
      </div>

      <div className="mt-2 grid px-4 gap-8 md:px-16 mx-auto py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-4 justify-center">
        {venues
          .filter((venue) => venue.eventCount > 0)
          .map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
      </div>
    </main>
  );
}
