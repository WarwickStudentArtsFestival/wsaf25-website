import { fetchTalk } from '@/app/schedule/lib/fetchTalk';
import ErrorMessage from '../../components/ErrorMessage';
import Image from 'next/image';

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
    <div className="p-8 text-black space-y-6">
      <h1 className="text-4xl font-bold">{talk.title}</h1>
      {/* <Image
        src={talk.image}
        alt={talk.title}
        className="rounded-lg shadow-lg w-full h-auto"
        width={800}
        height={600}
      /> */}
    </div>
  );
}
