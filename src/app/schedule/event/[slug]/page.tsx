import { fetchTalk } from '@/app/schedule/lib/fetchTalk';
import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import PresentedBy from './components/PresentedBy';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import EventDetails from './components/EventDetails';
import TrackPill from '../track/TrackPill';

type TalkPageProps = {
  params: {
    slug: string;
  };
};

export default async function TalkPage({ params }: TalkPageProps) {
  const { slug } = await params;
  const talk = await fetchTalk(slug);

  if (!talk || talk === 'API_ERROR') {
    return <ErrorMessage msg={`Event '${slug}' not found!`} />;
  }

  return (
    <>
      <PageHeader />
      <div className="max-w-4xl mx-auto">
        <div className="my-4">
          <HighlightedHeading text={talk.title} />

          <div className="bg-white p-6 my-4 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                {talk.title}
              </h1>
              <div className="flex flex-row p-4 items-center">
                <PresentedBy speakers={talk.speakers} />{' '}
                <div className="ml-auto">
                  <TrackPill track={talk.track.en} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-2/3 p-6 text-left">
                  <h2 className="text-black text-xl font-semibold mb-4">
                    Description
                  </h2>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: talk.description }}
                  />
                </div>

                <EventDetails
                  start={talk.slot?.start}
                  end={talk.slot?.end}
                  room={talk.slot?.room?.en}
                />
              </div>
            </div>
          </div>

          {talk.image && (
            <div className="mb-8">
              <Image
                src={talk.image}
                alt={`${talk.title} presentation image`}
                width={800}
                height={600}
                className="w-full max-h-96 object-contain rounded-lg "
                priority
              />
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/schedule"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            >
              <FaArrowLeft className="mr-3" />
              Back to Schedule
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
