import Hero from './components/hero';
import WhoInvolved from './components/who-involved';
import Faq from './components/faq';
import React from 'react';
import About from './components/about';
import History from './components/history';
import KeyDates from './components/key-dates';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <KeyDates />
      <WhoInvolved />
      <History />
      <Faq />
    </main>
  );
}
