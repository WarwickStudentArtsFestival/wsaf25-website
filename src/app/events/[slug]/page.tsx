import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import Image from 'next/image';
import TalkHeader from './components/TalkHeader';
import { Toaster } from 'react-hot-toast';
import { EventWithSessions, fetchEvent } from '@/lib/events';
import React from 'react';
import EventDetails from '@/app/events/[slug]/components/EventDetails';
import { eventCategories } from '@/data/events';
import Share from '@/app/events/[slug]/components/Share';
import GoToVenue from '@/app/events/[slug]/components/GoToVenue';
import GoToGenre from '@/app/events/[slug]/components/GoToGenre';
import { ResolvingMetadata } from 'next';
import { formatTime } from '@/lib/dates';

export const revalidate = 3600; // Fetch new information every hour

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata,
) {
  const { slug } = await params;

  try {
    const event = await fetchEvent(slug);
    if (!event) {
      return {
        title: 'Events',
        description:
          "Find out what's happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!",
      };
    }

    const parents = [
      ...new Set(
        event.sessions
          .map((session) => session.parent)
          .filter((parent) => !!parent),
      ),
    ];

    const sessionDescription = event.sessions
      .map(
        (session) =>
          `${session.start.toLocaleDateString('en-GB', { weekday: 'short' })} ${formatTime(session.start).replace(' ', '')} - ${formatTime(session.end).replace(' ', '')} (${session.venueName})`,
      )
      .join('\n');

    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: `${parents.length === 1 ? `${parents[0].event.name}: ` : ''}${event.name}${event.artist.name ? ` (${event.artist.name})` : ''}`,
      description: `${sessionDescription}\n\n${event.shortDescription || event.description}`,
      openGraph: event.image
        ? {
            images: [event.image, ...previousImages],
          }
        : {},
    };
  } catch (error) {
    console.error('Error fetching event from API', error);
    return {
      title: 'Events',
      description:
        "Find out what's happening at the Warwick Student Arts Festival 2025, running from Friday 13th June to Monday 16th June 2025!",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;

  let event: EventWithSessions | null = null;
  // TODO: Better 404 page
  try {
    event = await fetchEvent(slug);
  } catch (error) {
    console.error('Error fetching event', error);
    return <ErrorMessage msg="Unknown error" />;
  }

  if (!event) return <ErrorMessage msg={`Event '${slug}' not found!`} />;

  const parents = [
    ...new Set(
      event.sessions
        .map((session) => session.parent)
        .filter((parent) => !!parent),
    ),
  ];

  const category = eventCategories.find(
    (c) => c.pretalxTrack === event.categoryPretalxTrack,
  );

  if (!category) {
    return (
      <ErrorMessage
        msg={`Track category '${event.categoryPretalxTrack}' not found!`}
      />
    );
  }
  return (
    <div className="-mb-2">
      <Toaster position="top-center" />
      <PageHeader />
      <div className="max-w-4xl sm:my-8 -my-2 mx-auto md:px-4 sm:px-6 lg:px-8">
        <div
          style={{ backgroundColor: `${category.colour}10` }}
          className="bg-white p-6 py-0 h-fit rounded-lg  md:border md:border-gray-200"
        >
          <div style={{ color: category.colour }}>
            <TalkHeader track={event.categoryPretalxTrack} />
          </div>

          <div className="my-4">
            {event.artist && event.artist.name && (
              // <PresentedBy speaker={event.artist.name} />
              <div
                className="flex gap-4  italic text-2xl"
                style={{ color: category.colour }}
              >
                <div className="flex flex-wrap">
                  <span>{event.artist.name}</span>
                  <span>&nbsp;presents...</span>
                </div>
              </div>
            )}
            <h1
              style={{ color: category.colour }}
              className="text-4xl font-bold break-words px-2 -mx-6 sm:mx-auto "
            >
              &ldquo;{parents.length === 1 && `${parents[0].event.name}: `}
              {event.name}&rdquo;
            </h1>
          </div>
          {event.image && (
            <div className="my-4">
              <Image
                src={event.image}
                alt={`${event.name} presentation image`}
                width={800}
                height={600}
                className="w-full max-h-96 object-contain rounded-lg"
                priority
              />
            </div>
          )}

          <div className="flex flex-col mb-4 text-left lg:flex-row gap-6">
            <div className="lg:w-2/3 md:p-4">
              <h2 className="text-black text-xl font-semibold mb-4">
                Description
              </h2>
              {event.shortDescription && (
                <div
                  className="prose text-black font-semibold max-w-none mb-2"
                  dangerouslySetInnerHTML={{ __html: event.shortDescription }}
                />
              )}

              <div
                className="prose text-gray-700 max-w-none"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />

              {event.artist.description && (
                <div className="my-4">
                  <h2 className="text-lg font-semibold">{event.artist.name}</h2>

                  {event.artist.description && (
                    <div>{event.artist.description}</div>
                  )}

                  {event.artist.instagramHandle && (
                    <a
                      href={`https://instagram.com/${event.artist.instagramHandle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-500 hover:underline"
                    >
                      {event.artist.instagramHandle}
                    </a>
                  )}

                  {event.artist.website && (
                    <a
                      href={event.artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-blue-500 hover:underline"
                    >
                      {event.artist.website}
                    </a>
                  )}
                </div>
              )}

              <div className="hidden lg:block">
                <h2 className="text-black text-xl font-semibold my-4">
                  Related Events
                </h2>
                <div style={{ color: category.colour }}>
                  <GoToVenue eventWithSessions={event} />
                  <GoToGenre eventWithSessions={event} />
                </div>
              </div>
            </div>
            <div
              style={{ color: category.colour }}
              className="lg:w-1/3 flex flex-col gap-4 md:p-4 md:pl-0"
            >
              {/* <div style={{ backgroundColor: darkBg }}> */}
              <EventDetails eventWithSessions={event} />
              {/* </div> */}
              <Share talk={event} />
            </div>
            <div className="block lg:hidden">
              <h2 className="text-black text-xl font-semibold my-4">
                Related Events
              </h2>
              <GoToVenue eventWithSessions={event} />
              <GoToGenre eventWithSessions={event} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
