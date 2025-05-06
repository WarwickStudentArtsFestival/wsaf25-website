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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
          <HighlightedHeading text={talk.title} />

          <div className="bg-white p-6 py-0 my-4 h-fit rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <div className="my-4 text-left">
                <Link
                  href="/schedule"
                  className="inline-flex p-0 b-0 text-black items-center text-sm hover:underline"
                >
                  <FaArrowLeft className="mr-2 text-purple-500" />
                  Back to Schedule
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                {talk.title}
              </h1>

              <div className="flex flex-col text-left lg:flex-row gap-6 mt-6">
                <div className="lg:w-2/3">
                  <h2 className="text-black text-xl font-semibold mb-4">
                    Description
                  </h2>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: talk.description }}
                  />
                </div>
                <div className="lg:w-1/3">
                  <EventDetails
                    start={talk.slot?.start}
                    end={talk.slot?.end}
                    room={talk.slot?.room?.en}
                  />
                </div>
              </div>

              <div className="flex mt-4 flex-row flex-wrap items-center justify-between gap-4 p-4">
                <PresentedBy speakers={talk.speakers} />
                <TrackPill track={talk.track.en} />
              </div>
            </div>
          </div>

          {talk.image && (
            <div className="my-8">
              <Image
                src={talk.image}
                alt={`${talk.title} presentation image`}
                width={800}
                height={600}
                className="w-full max-h-96 object-contain rounded-lg"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
