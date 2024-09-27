// Required for Next redirects to work on export
import nextConfig from '../../../../next.config.mjs';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { Metadata } from 'next';
import PageHeader from '@/app/components/page-header';

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

export default async function Redirect({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const redirects = await getRedirects();
  if (!redirects) return notFound();

  const path = slug.join('/');
  const redirect = redirects.find((redirect) => redirect.path === path);
  if (!redirect) return notFound();

  return (
    <main>
      <link rel="canonical" href={redirect.destination} />
      <meta property="og:url" content={redirect.destination} />
      <meta http-equiv="refresh" content={`0; url=${redirect.destination}`} />

      <section className="mb-8 md:mb-16">
        <PageHeader title="Redirect" />

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto px-4 gap-4">
          <p>Redirecting to {redirect.destination}...</p>
        </div>
      </section>
    </main>
  );
}
