import React from 'react';
import PageHeader from '@/app/components/page-header';
import { barMenu } from './price-list';
import type { Metadata } from 'next';
// import { FaMapPin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Bar Menu',
  description:
    'Explore the bar menu featuring a variety of beers, wines, spirits, cocktails, and soft drinks. Beverages served at the bar on Benefactors place until 10:30 PM.',
};

export default function PriceList() {
  return (
    <div className="bg-purple text-white">
      <PageHeader />
      <h1 className="text-3xl mt-8 font-semibold">BAR MENU</h1>
      {/* <FaMapPin /> Benefactors Place */}
      <div className="mx-auto p-3 sm:p-8 max-w-2xl">
        {barMenu.menu.map(({ category, items }, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <div className="w-fit mx-auto gap-2 flex flex-row items-center uppercase text-xl font-bold text-black bg-yellow py-1 px-8 m-2">
              {category}
            </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="grid w-full grid-cols-[2fr_1fr_1fr] gap-4 border-b pb-2 last:border-b-0 items-start"
                >
                  <div className="text-left flex flex-col w-fit ">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-gray-300">
                      {item.subtitle && `${item.subtitle}`}
                    </span>
                  </div>

                  <div className="text-center text-sm text-gray-300">
                    <div>{item.unit_quantity}</div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="font-medium">{item.unit_price}</div>
                    {item.line_1 && (
                      <div className="text-sm text-right text-gray-300">
                        {item.line_1}
                      </div>
                    )}
                    {item.line_2 && (
                      <div className="text-sm text-right text-gray-300">
                        {item.line_2}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="text-center mt-8 space-y-2">
          <p>All drinks served until 10:30 PM</p>
          <p>ID required for all purchases</p>
        </div>
      </div>
    </div>
  );
}
