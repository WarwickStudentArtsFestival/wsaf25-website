import Faq from '@/app/components/faq/faq';
import React from 'react';
import PageHeader from '@/app/components/page-header';

export default function FAQ() {
  return (
    <main>
      <PageHeader />
      <Faq defaultTab="General" />
    </main>
  );
}
