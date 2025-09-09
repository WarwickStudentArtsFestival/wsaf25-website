import HighlightedHeading from '@/app/components/highlighted-heading';
import { FiVideo } from 'react-icons/fi';
import mainConfig from '@config/main-config';

export default function YouTube() {
  return (
    <section className="px-4 py-8">
      <a
        href={`https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`}
        target="_blank"
        className="block mx-auto overflow-hidden p-2 border border-slate-300 rounded-md hover:scale-105 w-full md:max-w-xl transition duration-100 ease-in-out"
      >
        <HighlightedHeading text="Livestream" />
        <h2 className="text-teal text-2xl font-semibold mb-2">
          Watch or Recap Online
        </h2>
        <p>
          Many of our events are being livestreamed to YouTube. Click here to
          watch live or on-demand!
        </p>

        <FiVideo className="mx-auto text-4xl mt-2" />
      </a>
    </section>
  );
}
