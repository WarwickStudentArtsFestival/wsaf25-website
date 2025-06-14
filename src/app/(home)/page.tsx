import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import React from 'react';
import About from './components/about';
import Faq from '@/app/(home)/components/faq/faq';
import History from './components/history';
import EventPreview from './components/event-preview';
import Feedback from '@/app/(home)/components/feedback';
import YouTube from '@/app/(home)/components/youtube';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feedback />
      <About />
      <EventPreview />
      <YouTube />
      <WhoInvolved />
      <History />
      <Faq defaultTab="General" />
    </main>
  );
}
