import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import Image from 'next/image';
import EventDetails from './components/EventDetails';
import GoToVenue from './components/GoToVenue';
import TalkHeader from './components/TalkHeader';
import Share from './components/Share';
import { Toaster } from 'react-hot-toast';
import GoToGenre from './components/GoToGenre';
import { fetchEvent } from '@/lib/events';
import React from 'react';

export default async function Page({ params }: { params: { slug: string } }) {
  let event;

  // TODO: Better 404 page
  try {
    event = await fetchEvent(params.slug);
  } catch (error) {
    console.error('Error fetching event', error);
    return <ErrorMessage msg="Unknown error" />;
  }

  if (!event) return <ErrorMessage msg={`Event '${params.slug}' not found!`} />;

  return (
    <>
      <Toaster position="top-center" />
      <PageHeader />
      <div className="max-w-4xl mx-auto md:px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <div className="bg-white p-6 py-0 mb-4 h-fit rounded-lg  md:border md:border-gray-200">
            <TalkHeader track={event.categoryPretalxTrack} />

            <div className="my-4">
              <!-- <PresentedBy speakers={event.speakers} /> -->
              <h1 className="text-4xl font-bold break-words text-teal-600 px-2 -mx-6 sm:mx-auto ">
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
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
                <div className="hidden lg:block">
                  <h2 className="text-black text-xl font-semibold my-4">
                    Related Events
                  </h2>
                  <GoToVenue talk={event} />
                  <GoToGenre talk={event} />
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col gap-4 md:p-4 md:pl-0">
                <EventDetails talk={event} />
                <Share talk={event} />
              </div>
              <div className="block lg:hidden">
                <h2 className="text-black text-xl font-semibold my-4">
                  Related Events
                </h2>
                <GoToVenue talk={event} />
                <GoToGenre talk={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
