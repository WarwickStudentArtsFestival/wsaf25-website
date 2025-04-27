import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import React from 'react';
import About from './components/about';
import KeyDates from './components/key-dates';
import Faq from '@/app/(home)/components/faq/faq';
import History from './components/history';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <KeyDates />
      <Faq defaultTab="General" />
      <History />
      <WhoInvolved />
    </main>
  );
}
