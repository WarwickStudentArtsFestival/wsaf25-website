import { fetchTalk } from '@/app/schedule/lib/fetchTalk';
import PageHeader from '@/app/components/page-header';
import ErrorMessage from '../../components/ErrorMessage';
import HighlightedHeading from '@/app/components/highlighted-heading';

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
    <div>
      <PageHeader />
      <HighlightedHeading text={talk.title} />
      <h1 className="text-teal text-2xl font-semibold mb-2">{talk.title}</h1>
    </div>
  );
}
