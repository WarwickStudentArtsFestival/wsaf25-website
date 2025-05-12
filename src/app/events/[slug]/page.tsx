import { fetchTalk } from '@/app/lib/fetchTalk';
import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import PresentedBy from './components/PresentedBy';
import Image from 'next/image';
import EventDetails from './components/EventDetails';
import GoToVenue from './components/GoToVenue';
import TalkHeader from './components/TalkHeader';
import Share from './components/Share';
import { Toaster } from 'react-hot-toast';
import GoToGenre from './components/GoToGenre';

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const talk = await fetchTalk(slug);

  if (!talk || talk === 'API_ERROR') {
    return <ErrorMessage msg={`Event '${slug}' not found!`} />;
  }

  return (
    <>
      <Toaster position="top-center" />
      <PageHeader />
      <div className="max-w-4xl mx-auto md:px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <div className="bg-white p-6 py-0 mb-4 h-fit rounded-lg  md:border md:border-gray-200">
            <TalkHeader track={talk.track.en} />

            <div className="my-4">
              <PresentedBy speakers={talk.speakers} />
              <h1 className="text-4xl font-bold break-words text-teal-600 px-2 -mx-6 sm:mx-auto ">
                &ldquo;{talk.title}&rdquo;
              </h1>
            </div>
            {talk.image && (
              <div className="my-4">
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

            <div className="flex flex-col mb-4 text-left lg:flex-row gap-6">
              <div className="lg:w-2/3 md:p-4">
                <h2 className="text-black text-xl font-semibold mb-4">
                  Description
                </h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: talk.description }}
                />
                <div className="hidden lg:block">
                  <h2 className="text-black text-xl font-semibold my-4">
                    Related Events
                  </h2>
                  <GoToVenue talk={talk} />
                  <GoToGenre talk={talk} />
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col gap-4 md:p-4 md:pl-0">
                <EventDetails talk={talk} />
                <Share talk={talk} />
              </div>
              <div className="block lg:hidden">
                <h2 className="text-black text-xl font-semibold my-4">
                  Related Events
                </h2>
                <GoToVenue talk={talk} />
                <GoToGenre talk={talk} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
