'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomepageRedirect() {
  const router = useRouter();
  useEffect(() => router.replace('/'));

  return <p>Redirecting...</p>;
}
