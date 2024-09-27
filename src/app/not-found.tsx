'use client';

import HomepageRedirect from '@/app/(home)/components/homepage-redirect';

export default function NotFound() {
  return (
    <main className="p-4">
      <h1 className="uppercase font-bold text-2xl">Page Not Found</h1>
      <HomepageRedirect />
    </main>
  );
}
