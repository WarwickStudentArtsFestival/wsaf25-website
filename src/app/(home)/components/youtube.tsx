import HighlightedHeading from '@/app/components/highlighted-heading';
import { FiVideo } from 'react-icons/fi';
import mainConfig from '@config/main-config';
import homepageConfig from '@config/homepage-config';

export default function YouTube() {
  return (
    <section className="px-4 py-8">
      <a
        href={`https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`}
        target="_blank"
        className="block mx-auto overflow-hidden p-2 border border-slate-300 rounded-md hover:scale-105 w-full md:max-w-xl transition duration-100 ease-in-out"
      >
        <HighlightedHeading text={homepageConfig.youtube.heading} />
        <h2 className="text-teal text-2xl font-semibold mb-2">
          {homepageConfig.youtube.title}
        </h2>
        <p>{homepageConfig.youtube.description}</p>

        <FiVideo className="mx-auto text-4xl mt-2" />
      </a>
    </section>
  );
}
