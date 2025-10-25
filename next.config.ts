import mainConfig from '@config/main-config';
import qrRedirectsConfig from '@config/qr-redirects-config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXTJS_OUTPUT || 'standalone',
  images: {
    unoptimized: false, // Set to true for export
    remotePatterns: process.env.WSAF_ASSETS_BASE_URL
      ? [
          {
            protocol: process.env.WSAF_ASSETS_BASE_URL.includes('https')
              ? 'https'
              : 'http',
            hostname: process.env.WSAF_ASSETS_BASE_URL.replace('https://', '')
              .replace('http://', '')
              .split('/')[0],
            pathname: '/**',
          },
        ]
      : [
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'pretalx.wsaf.org.uk',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'submit.wsaf.org.uk',
            pathname: '/**',
          },
        ],
  },
  redirects: () => [
    {
      source: '/instagram',
      destination: `https://www.instagram.com/${mainConfig.socials.instagram}/`,
      permanent: true,
    },
    {
      source: '/discord',
      destination: mainConfig.socials.discordInvite,
      permanent: true,
    },
    {
      source: '/youtube',
      destination: `https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`,
      permanent: true,
    },
    {
      source: '/stream',
      destination: `https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`,
      permanent: true,
    },
    {
      source: '/feedback',
      destination: mainConfig.feedback.url,
      permanent: true,
    },
    {
      source: '/volunteer',
      destination: mainConfig.crew.signupUrl,
      permanent: true,
    },
    {
      source: '/schedule',
      destination: '/events?timeline=',
      permanent: true,
    },
    {
      source: '/submit',
      destination: mainConfig.submissions.submitUrl,
      permanent: true,
    },
    {
      source: '/performers-portal',
      destination: mainConfig.submissions.submitUrl,
      permanent: true,
    },
    ...qrRedirectsConfig.redirects.map((redirect) => {
      const destination = new URL(redirect.destination);
      if (redirect.campaign) {
        destination.searchParams.set('utm_campaign', redirect.campaign);
      }
      if (redirect.medium) {
        destination.searchParams.set('utm_medium', redirect.medium);
      }
      if (redirect.source) {
        destination.searchParams.set('utm_source', redirect.source);
      }

      return {
        source: redirect.shortlink,
        destination: destination.toString(),
        permanent: true,
      };
    }),
  ],
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
