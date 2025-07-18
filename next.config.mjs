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
      destination: 'https://www.instagram.com/wsaf25/',
      permanent: true,
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/TuFwJX4GKM',
      permanent: true,
    },
    {
      source: '/youtube',
      destination: 'https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A',
      permanent: true,
    },
    {
      source: '/stream',
      destination: 'https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A',
      permanent: true,
    },
    {
      source: '/feedback',
      destination: 'https://forms.gle/dJTh3R1MT6ZE2QWk7',
      permanent: true,
    },
    {
      source: '/volunteer',
      destination: 'https://helfertool.wsaf.org.uk/wsaf2025/',
      permanent: true,
    },
    {
      source: '/schedule',
      destination: '/events?timeline=',
      permanent: true,
    },
    {
      source: '/submit',
      destination: 'https://submit.wsaf.org.uk/2025/cfp',
      permanent: true,
    },
    {
      source: '/performers-portal',
      destination: 'https://submit.wsaf.org.uk/2025/cfp',
      permanent: true,
    },
    {
      source: '/qr/d62',
      destination:
        'https://2024.wsaf.org.uk/schedule?utm_campaign=schedule&utm_medium=ds&utm_source=screens',
      permanent: true,
    },
    {
      source: '/qr/2d2',
      destination:
        'https://2024.wsaf.org.uk/schedule?utm_campaign=schedule&utm_medium=ds&utm_source=oculus',
      permanent: true,
    },
    {
      source: '/qr/ee4',
      destination:
        'https://2024.wsaf.org.uk/schedule?utm_campaign=slides&utm_medium=ds&utm_source=tv',
      permanent: true,
    },
    {
      source: '/qr/a2d',
      destination:
        'https://wsaf.org.uk?utm_campaign=slides25&utm_medium=ds&utm_source=bigscreen',
      permanent: true,
    },
    {
      source: '/qr/d2g',
      destination:
        'https://wsaf.org.uk?utm_campaign=join_wsaf&utm_medium=print&utm_source=a3',
      permanent: true,
    },
    {
      source: '/qr/p01',
      destination:
        'https://wsaf.org.uk/events?venue=2&from=49&to=97&utm_campaign=sat_schedule&utm_medium=print&utm_source=booklet',
      permanent: true,
    },
    {
      source: '/qr/p02',
      destination:
        'https://wsaf.org.uk/events?category=512&utm_campaign=screenings&utm_medium=print&utm_source=booklet',
      permanent: true,
    },
    {
      source: '/qr/p03',
      destination:
        'https://wsaf.org.uk/events?category=64&utm_campaign=gallery&utm_medium=print&utm_source=booklet',
      permanent: true,
    },
    {
      source: '/qr/p04',
      destination:
        'https://wsaf.org.uk/events?utm_campaign=schedule&utm_medium=print&utm_source=leaflet',
      permanent: true,
    },
    {
      source: '/qr/p05',
      destination:
        'https://wsaf.org.uk/events?utm_campaign=schedule&utm_medium=print&utm_source=poster3',
      permanent: true,
    },
    {
      source: '/qr/p06',
      destination:
        'https://wsaf.org.uk?utm_campaign=main&utm_medium=print&utm_source=poster3',
      permanent: true,
    },
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
