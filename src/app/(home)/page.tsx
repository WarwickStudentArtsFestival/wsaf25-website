import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import React from 'react';
import About from './components/about';
import Faq from '@/app/(home)/components/faq/faq';
import History from './components/history';
import EventPreview from './components/event-preview';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EventPreview />
      <WhoInvolved />
      <History />
      <Faq defaultTab="General" />
    </main>
  );
}
