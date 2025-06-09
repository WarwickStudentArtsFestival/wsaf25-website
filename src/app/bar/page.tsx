import { Metadata } from 'next';
import PriceList from './price-list-page';

export const metadata: Metadata = {
  title: 'Bar Menu',
  description:
    'Explore the bar menu featuring a variety of beers, wines, spirits, cocktails, and soft drinks. Beverages served at the bar on Benefactors place until 10:30 PM.',
};

export default function Page() {
  return <PriceList />;
}
