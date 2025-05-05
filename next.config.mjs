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
      destination: 'https://2024.wsaf.org.uk',
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
      source: '/submit',
      destination: 'https://submit.wsaf.org.uk/2025/cfp',
      permanent: true,
    },
  ],
};

export default nextConfig;
