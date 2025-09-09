import { QrRedirectsConfig } from '@config/types/qr-redirects-config';

const qrRedirectsConfig: QrRedirectsConfig = {
  redirects: [
    {
      shortlink: '/qr/d62',
      destination: 'https://2024.wsaf.org.uk/schedule',
      campaign: 'schedule',
      medium: 'ds',
      source: 'screens',
    },
    {
      shortlink: '/qr/2d2',
      destination: 'https://2024.wsaf.org.uk/schedule',
      campaign: 'schedule',
      medium: 'ds',
      source: 'oculus',
    },
    {
      shortlink: '/qr/ee4',
      destination: 'https://2024.wsaf.org.uk/schedule',
      campaign: 'slides',
      medium: 'ds',
      source: 'tv',
    },
    {
      shortlink: '/qr/a2d',
      destination: 'https://wsaf.org.uk',
      campaign: 'slides25',
      medium: 'ds',
      source: 'bigscreen',
    },
    {
      shortlink: '/qr/d2g',
      destination: 'https://wsaf.org.uk',
      campaign: 'join_wsaf',
      medium: 'print',
      source: 'a3',
    },
    {
      shortlink: '/qr/p01',
      destination: 'https://wsaf.org.uk/events?venue=2&from=49&to=97',
      campaign: 'sat_schedule',
      medium: 'print',
      source: 'booklet',
    },
    {
      shortlink: '/qr/p02',
      destination: 'https://wsaf.org.uk/events?category=512',
      campaign: 'screenings',
      medium: 'print',
      source: 'booklet',
    },
    {
      shortlink: '/qr/p03',
      destination: 'https://wsaf.org.uk/events?category=64',
      campaign: 'gallery',
      medium: 'print',
      source: 'booklet',
    },
    {
      shortlink: '/qr/p04',
      destination: 'https://wsaf.org.uk/events',
      campaign: 'schedule',
      medium: 'print',
      source: 'leaflet',
    },
    {
      shortlink: '/qr/p05',
      destination: 'https://wsaf.org.uk/events',
      campaign: 'schedule',
      medium: 'print',
      source: 'poster3',
    },
    {
      shortlink: '/qr/p06',
      destination: 'https://wsaf.org.uk',
      campaign: 'main',
      medium: 'print',
      source: 'poster3',
    },
  ],
};

export default qrRedirectsConfig;
