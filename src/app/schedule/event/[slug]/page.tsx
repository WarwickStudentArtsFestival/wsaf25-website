import { fetchTalk } from '@/app/schedule/lib/fetchTalk';
import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';
// import TalkTypePill from '../../components/TalkTypePill';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
// import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatTime } from '../../lib/dateUtils';

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

  // const duration = formatDuration(talk.duration);
  const talkDetails = [
    {
      icon: <FiMapPin className="h-5 w-5 text-purple-500" />,
      title: 'Room',
      value: talk.slot?.room?.en || 'TBD',
    },
    {
      icon: <FiCalendar className="h-5 w-5 text-purple-500" />,
      title: 'Date',
      value: `${formatDate(talk.slot?.start)}`,
    },
    {
      icon: <FiClock className="h-5 w-5 text-purple-500" />,
      title: 'Time',
      value: `${formatTime(talk.slot?.start)} - ${formatTime(talk.slot?.end)}`,
    },
  ];

  return (
    <div className="">
      <PageHeader />
      <div className="max-w-4xl mx-auto">
        <div className="my-4">
          <HighlightedHeading text={talk.title} />

          <div className="bg-white p-6 my-4 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-teal-600 mb-4">
                {talk.title}
              </h1>
              {/* <div className="flex flex-row items-center space-x-4">
                <h3 className="text-2xl font-semibold text-black flex items-center">
                  <FiUser className="h-5 w-5 text-purple-500 mr-2" />
                  Presented By:
                </h3>
                <div className="flex flex-wrap gap-4">
                  {talk.speakers.map((speaker) => (
                    <div
                      key={speaker.code}
                      className="flex items-center gap-2 text-lg text-gray-700"
                    >
                      <span className="font-medium">{speaker.name}</span>
                    </div>
                  ))}
                </div> */}
              {/* <div className="ml-auto">
                  <TalkTypePill track={talk.track?.en} />
                </div> */}
              {/* </div> */}
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
                <div className="flex-1 p-6 border border-slate-300 rounded-md shadow-lg h-fit text-left overflow-hidden">
                  <h2 className="text-black text-xl font-semibold mb-4">
                    Event Details
                  </h2>
                  {talkDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <div className="text-purple-500">{detail.icon}</div>
                      <div className="text-left flex-grow">
                        <h3 className="text-teal text-lg font-semibold">
                          {detail.title}
                        </h3>
                        <p className="text-sm text-black">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* {talk.image && (
              <div className="mb-8">
                <Image
                  src={talk.image}
                  alt={`${talk.title} presentation image`}
                  width={800}
                  height={600}
                  className="w-full max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>
            )} */}

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
