import { notFound } from 'next/navigation';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import React from 'react';
import mainConfig from '@config/main-config';
import qrRedirectsConfig from '@config/qr-redirects-config';

export const dynamicParams = false;
export const dynamic = 'force-static';

function getRedirects() {
  // Build redirects from config directly to ensure static analysis during export
  const baseRedirects = [
    {
      source: '/instagram',
      destination: `https://www.instagram.com/${mainConfig.socials.instagram}/`,
    },
    {
      source: '/discord',
      destination: mainConfig.socials.discordInvite,
    },
    {
      source: '/youtube',
      destination: `https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`,
    },
    {
      source: '/stream',
      destination: `https://www.youtube.com/@${mainConfig.socials.youtubeHandle}`,
    },
    {
      source: '/feedback',
      destination: mainConfig.feedback.url,
    },
    {
      source: '/volunteer',
      destination: mainConfig.crew.signupUrl,
    },
    {
      source: '/schedule',
      destination: '/events?timeline=',
    },
    {
      source: '/submit',
      destination: mainConfig.submissions.submitUrl,
    },
    {
      source: '/performers-portal',
      destination: mainConfig.submissions.submitUrl,
    },
  ];

  const qrRedirects = qrRedirectsConfig.redirects.map((redirect) => {
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
    };
  });

  return [...baseRedirects, ...qrRedirects].map(({ source, destination }) => ({
    path: source.slice(1),
    destination,
  }));
}

export function generateStaticParams() {
  try {
    const redirects = getRedirects();

    return redirects.map(({ path }) => {
      // Filter out empty strings from split (in case of leading/trailing slashes)
      const slugParts = path.split('/').filter(Boolean);
      return { slug: slugParts };
    });
  } catch (error) {
    console.error('Error generating static params for redirects:', error);
    return [];
  }
}

export default async function Redirect(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;

  const { slug } = params;
  const path = slug[0];

  const redirects = await getRedirects();
  if (!redirects) return notFound();

  const redirect = redirects.find((redirect) => redirect.path === path);
  if (!redirect) return notFound();

  return (
    <main>
      <link rel="canonical" href={redirect.destination} />
      <meta property="og:url" content={redirect.destination} />
      <meta http-equiv="refresh" content={`0; url=${redirect.destination}`} />

      <section className="mb-8 md:mb-16">
        <PageHeader />
        <HighlightedHeading text="Please Wait" />
        <h1 className="text-teal text-2xl font-semibold mb-2">Redirecting</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto px-4 gap-4">
          <p>Redirecting to {redirect.destination}...</p>
        </div>
      </section>
    </main>
  );
}
