import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import React from 'react';
import About from './components/about';
import Faq from '@/app/(home)/components/faq/faq';
import History from './components/history';
import EventPreview from './components/event-preview';
import Feedback from '@/app/(home)/components/feedback';
import YouTube from '@/app/(home)/components/youtube';
import mainConfig from '@config/main-config';
import homepageConfig from '@config/homepage-config';
import eventsConfig from '@config/events-config';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      {mainConfig.feedback.homepage && <Feedback />}
      <About />
      {homepageConfig.eventPreview.enabled && eventsConfig.enabled && (
        <EventPreview />
      )}
      {homepageConfig.youtube.enabled && <YouTube />}
      <WhoInvolved />
      <History />
      <Faq defaultTab="General" />
    </main>
  );
}
