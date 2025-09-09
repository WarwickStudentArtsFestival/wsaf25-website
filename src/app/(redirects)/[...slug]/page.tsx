import nextConfig from '../../../../next.config';
import { notFound } from 'next/navigation';
import PageHeader from '@/app/components/page-header';
import HighlightedHeading from '@/app/components/highlighted-heading';
import React from 'react';

export const dynamicParams = false;
export const dynamic = 'force-static';

async function getRedirects() {
  if (!nextConfig.redirects) return [];
  const redirects = await nextConfig.redirects();

  return redirects.map(({ source, destination }) => ({
    path: source.slice(1),
    destination,
  }));
}

export async function generateStaticParams() {
  const redirects = await getRedirects();

  return redirects.map(({ path }) => ({ slug: path.split('/') }));
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
