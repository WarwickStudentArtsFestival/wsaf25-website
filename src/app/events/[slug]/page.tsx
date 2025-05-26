import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import Image from 'next/image';
import TalkHeader from './components/TalkHeader';
import { Toaster } from 'react-hot-toast';
import { EventWithSessions, fetchEvent } from '@/lib/events';
import React from 'react';
import EventDetails from '@/app/events/[slug]/components/EventDetails';
import Share from '@/app/events/[slug]/components/Share';
import GoToVenue from '@/app/events/[slug]/components/GoToVenue';
import GoToGenre from '@/app/events/[slug]/components/GoToGenre';
import { trackColourMap } from '@/lib/trackTypes';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
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

  const rawTrack = event.categoryPretalxTrack;
  const trackKey = rawTrack.replace(/\s/g, '');
  const trackColor = trackColourMap[trackKey] || '#000';
  const lightBg = `${trackColor}10`;
  // const darkBg = `${trackColor}15`;

  return (
    <div className="-mb-2">
      <Toaster position="top-center" />
      <PageHeader />
      <div className="max-w-4xl sm:my-8 -my-2 mx-auto md:px-4 sm:px-6 lg:px-8">
        <div
          style={{ backgroundColor: lightBg }}
          className="bg-white p-6 py-0 h-fit rounded-lg  md:border md:border-gray-200"
        >
          <div style={{ color: trackColor }}>
            <TalkHeader track={event.categoryPretalxTrack} />
          </div>

          <div className="my-4">
            {/* <PresentedBy speakers={event.speakers} /> */}
            <h1
              style={{ color: trackColor }}
              className="text-4xl font-bold break-words px-2 -mx-6 sm:mx-auto "
            >
              &ldquo;{event.name}&rdquo;
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
              <div
                className="prose text-gray-700 max-w-none"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
              <div className="hidden lg:block">
                <h2 className="text-black text-xl font-semibold my-4">
                  Related Events
                </h2>
                <div style={{ color: trackColor }}>
                  <GoToVenue eventWithSessions={event} />
                  <GoToGenre eventWithSessions={event} />
                </div>
              </div>
            </div>
            <div
              style={{ color: trackColor }}
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
