import Faq from '@/app/(home)/components/faq/faq';

import React from 'react';
import PageHeader from '@/app/components/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

export default function FAQ() {
  return (
    <main>
      <PageHeader />
      <Faq defaultTab="General" />
    </main>
  );
}
