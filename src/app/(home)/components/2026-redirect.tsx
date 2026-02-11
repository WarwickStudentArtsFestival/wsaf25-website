import homepageConfig from '@config/homepage-config';
import { FiArrowRight } from 'react-icons/fi';

export default function Redirect2026() {
  switch (homepageConfig.about.redirect2026.type) {

    case 'wsaf2026':
      return (
        <a
          href="https://wsaf.org.uk"
          className="inline-block bg-teal text-white px-6 py-3 rounded-sm drop-shadow-sm hover:scale-105 mt-2"
        >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            <FiArrowRight className="inline-block mb-1 mr-2" />
            WSAF 2026
          </span>
        </a>
      );

    default:
      return null;
  }
}