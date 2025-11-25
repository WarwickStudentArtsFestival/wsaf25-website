'use client';

import { InstagramEmbed } from 'react-social-media-embed';

export default function RecapInstagramReels() {
  return (
    <div className="flex gap-2 justify-center flex-wrap mx-2">
      <InstagramEmbed
        url="https://www.instagram.com/wsaf26/reel/DK36A1VtoC_/"
        captioned
      />
      <div className="hidden sm:block">
        <InstagramEmbed
          url="https://www.instagram.com/wsaf26/reel/DK6lEUSMVF3/"
          captioned
        />
      </div>
      <div className="hidden md:block">
        <InstagramEmbed
          url="https://www.instagram.com/wsaf26/reel/DK9-Lt2t6xF/"
          captioned
        />
      </div>
      <div className="hidden md:block">
        <InstagramEmbed
          url="https://www.instagram.com/wsaf26/reel/DLH-cGjNXsO/"
          captioned
        />
      </div>
    </div>
  );
}
