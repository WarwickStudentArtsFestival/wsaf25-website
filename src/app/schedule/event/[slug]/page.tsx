import { fetchTalk } from '@/app/schedule/lib/fetchTalk';
import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
import { FiCalendar, FiClock, FiUser, FiMapPin, FiTag } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatDuration } from '../../lib/dateUtils';

type TalkPageProps = {
  params: {
    slug: string;
  };
};

export default async function TalkPage({ params }: TalkPageProps) {
  const { slug } = params;
  const talk = await fetchTalk(slug);

  if (!talk || talk === 'API_ERROR') {
    return <ErrorMessage msg={`Event '${slug}' not found!`} />;
  }

  const timeDisplay = talk.slot
    ? `${formatDate(talk.slot.start)} at ${formatDate(talk.slot.start)}`
    : 'TBD';
  const duration = formatDuration(talk.duration);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <PageHeader />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <HighlightedHeading text={talk.title} />

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                {talk.title}
              </h1>

              {/* Speakers Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Speakers
                </h2>
                <div className="flex flex-wrap gap-4">
                  {talk.speakers.map((speaker) => (
                    <div
                      key={speaker.code}
                      className="flex items-center gap-2 text-lg"
                    >
                      <FiUser className="h-5 w-5 text-teal-600" />
                      <span className="font-medium">{speaker.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <FiTag className="h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Track</h3>
                    <p className="text-gray-600">{talk.track.en}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin className="h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Room</h3>
                    <p className="text-gray-600">
                      {talk.slot?.room?.en || 'TBD'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FiCalendar className="h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Time</h3>
                    <p className="text-gray-600">{timeDisplay}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FiClock className="h-5 w-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <p className="text-gray-600">{duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Description
              </h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: talk.description }}
              />
            </div>
          </div>

          {/* Talk Image */}
          {talk.image && (
            <div className="mb-8">
              <Image
                src={talk.image}
                alt={`${talk.title} presentation image`}
                width={800}
                height={600}
                className="w-full max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Back to Schedule Button */}
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
    </div>
  );
}
