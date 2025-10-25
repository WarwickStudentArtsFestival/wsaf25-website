import LastYearGallery from '@/app/history/components/last-year-gallery';
import mainConfig from '@config/main-config';

export default function Media() {
  return (
    <div className="mb-8 mx-2">
      <p className="mb-2">
        We have a{' '}
        <a
          href="https://youtu.be/5_doeGYlb-U"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal"
        >
          trailer available on YouTube
        </a>{' '}
        - please contact us to get this in a different format or resolution.
      </p>

      <iframe
        className="mx-auto h-auto aspect-video w-full max-w-128"
        src="https://www.youtube.com/embed/5_doeGYlb-U?modestbranding=1&rel=0"
        title="WSAF Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <p className="mt-6 mb-2 max-w-7xl mx-auto">
        Photos from last year can be found on the{' '}
        <a
          href="https://gallery.warwickdrama.org.uk/index.php?/category/87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal"
        >
          Warwick Drama Gallery Archive
        </a>
        . A larger selection of photos is also available to University of
        Warwick students/staff on{' '}
        <a
          href="https://livewarwickac.sharepoint.com/:f:/s/WarwickFringe/EnqqcT06cldNuZmc3UeFO14BHvCdzUWUw0kUae6wfXtV0Q"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal"
        >
          Sharepoint
        </a>
        . Please contact us if you would like a specific image you can&apos;t
        find, or if you would like an image in a specific format.
      </p>

      <a
        href="https://gallery.warwickdrama.org.uk/index.php?/category/87"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:scale-[101%] transition duration-100"
      >
        <LastYearGallery />
      </a>

      <p className="mt-6 mb-2 max-w-6xl mx-auto">
        Last year, several of our events were also livestreamed on{' '}
        <a
          href={`https://www.youtube.com/@${mainConfig.socials.youtubeHandle}/streams`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal"
        >
          our YouTube Channel
        </a>{' '}
        or the{' '}
        <a
          href="https://www.youtube.com/@RAWVisual/streams"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal"
        >
          RAW YouTube Channel
        </a>
        . Several tools are available online which can download these videos.
      </p>
    </div>
  );
}
