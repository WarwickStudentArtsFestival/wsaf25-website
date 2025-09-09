import { Metadata } from 'next';
import PriceList from './price-list-page';
import barMenuConfig from '@config/bar-menu-config';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Bar Menu',
  description: `Explore the bar menu featuring a variety of beers, wines, spirits, cocktails, and soft drinks. Beverages served at the bar on ${barMenuConfig.location} until  ${barMenuConfig.endTime}.`,
};

export default function Page() {
  if (!barMenuConfig.enabled) {
    return notFound();
  }

  return <PriceList />;
}
