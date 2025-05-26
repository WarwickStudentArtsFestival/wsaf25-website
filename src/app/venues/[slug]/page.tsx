import PageHeader from '@/app/components/page-header';
import ErrorMessage from '@/app/components/ErrorMessage';
import { fetchVenueFromSlug } from '@/lib/venues';
import React from 'react';
import { fetchEventSessionsInVenue } from '@/lib/events';
import Image from 'next/image';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import { FaArrowRight, FaWarehouse } from 'react-icons/fa';
import EventSessionsList from '@/app/events/components/event-sessions-list/event-sessions-list';
import getContext from '@/app/events/components/event-sessions-list/event-sessions-list-context';

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let venue, eventSessions, eventSessionsListContext;
  const { slug } = await params;

  // TODO: Better 404 page
  try {
    venue = await fetchVenueFromSlug(slug);
  } catch (error) {
    console.error('Error fetching rooms from API', error);
    return <ErrorMessage msg="Unknown error" />;
  }

  if (!venue) {
    return <ErrorMessage msg={`Venue not found!`} />;
  }

  try {
    eventSessions = await fetchEventSessionsInVenue(venue.name);
    eventSessionsListContext = await getContext(eventSessions);
  } catch (error) {
    console.error('Error fetching events from API', error);
    return <ErrorMessage msg="Unknown error" />;
  }

  return (
    <>
      <PageHeader />
      <div className="w-full sm:w-2xl md:my-4 -mt-2 mx-auto bg-white rounded-xl shadow border border-gray-200">
        <div className="relative">
          {venue.image && (
            <Image
              src={venue.image}
              alt={venue.imageAlt || 'Venue image'}
              className="w-full md:rounded-xl rounded-none"
              layout="responsive"
              width={1200}
              height={600}
            />
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
            <HighlightedHeading
              className="text-black text-2xl"
              text={venue.name || 'Unnamed Venue'}
            />
          </div>
        </div>
        <div className="p-6">
          <div className=" flex flex-col gap-6 text-left lg:flex-row">
            <div className="lg:w-2/3">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Description
              </h2>
              <p className="prose max-w-none">
                {venue.description || 'No description available.'}
              </p>
            </div>

            {venue.roomLocation && (
              <div className="lg:w-1/3">
                <div className="mb-2 flex items-center space-x-2">
                  <FiMapPin className="flex-shrink-0 text-purple-500" />
                  <h3 className="font-semibold text-black">
                    {venue.roomLocation}
                  </h3>
                </div>

                {venue.mapUrl && (
                  <Link
                    href={venue.mapUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-purple-600 hover:underline"
                  >
                    <FiExternalLink />
                    View on campus map
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sticky top-15 z-40 bg-white w-full">
        <h3 className="text-teal pt-4 font-semibold italic">
          What&apos;s on at...
        </h3>
        <h1 className="text-4xl sticky top-25 font-bold text-teal-600 mb-4 px-2">
          {venue.name || 'Unnamed Venue'}
        </h1>
      </div>
      <div className="w-full">
        <EventSessionsList
          eventSessions={eventSessions}
          context={eventSessionsListContext}
          disableVenues
        />
      </div>
      <div className="flex my-4 w-full flex-col items-center justify-center mx-auto">
        <h2 className="text-black text-xl font-semibold">Related Events</h2>
        <div className="my-4 bg-white p-4 w-fit h-fit rounded-lg shadow-lg border border-gray-200 hover:scale-102 transition duration-150 ease-in-out">
          <Link
            href={`/venues`}
            passHref
            className=" cursor-pointer group"
            title={`View more venues`}
          >
            <div className="flex items-center gap-2">
              <div className="text-purple-500 p-4">
                <FaWarehouse size={40} />
              </div>
              <div className="flex flex-col text-left m-2 items-start gap-1 text-black font-medium group-hover:underline">
                <span className="italic pt-2 text-teal font-semibold text-lg -my-2">
                  See more...
                </span>
                <span className="font-semibold pt-0">Venues</span>
              </div>
              <div className="text-purple-500">
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

{
  /* {room.image && (
            <div className="my-8">
            </div>
          )}
          <div className="mt-4">
            <iframe
              src={room.mapUrl + '?controls=off'}
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="Campus Map"
            />
          </div> */
}
