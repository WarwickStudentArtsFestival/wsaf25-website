import React from 'react';
import type { Metadata } from 'next';
import { ScheduleData } from './components/SchedulePage';

export const metadata: Metadata = {
  title: 'WSAF Schedule',
};

export default async function SchedulePage() {
  return <ScheduleData />;
}
