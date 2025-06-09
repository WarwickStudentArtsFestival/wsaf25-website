import React from 'react';
import PageHeader from '@/app/components/page-header';
import { barMenu } from './price-list';
import type { Metadata } from 'next';
import { FiMapPin } from 'react-icons/fi';
import Challenge21 from '@/assets/wbar/challenge21.jpg';
import AskForAngela from '@/assets/wbar/askforangela.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bar Menu',
  description:
    'Explore the bar menu featuring a variety of beers, wines, spirits, cocktails, and soft drinks. Beverages served at the bar on Benefactors place until 10:30 PM.',
};

export default function PriceList() {
  return (
    <div className="bg-purple sm:bg-orange text-white">
      <PageHeader />
      <div className="mx-auto bg-purple sm:my-8 p-3 sm:p-8 max-w-2xl">
        <h1 className="text-3xl font-semibold">BAR MENU</h1>
        <div className="flex flex-row mx-auto items-center gap-2 w-fit sm:mb-8">
          <FiMapPin /> Benefactors Place
        </div>
        {barMenu.menu.map(({ category, items }, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <div className="w-fit mx-auto gap-2 flex flex-row items-center uppercase text-xl font-bold text-black bg-yellow py-1 px-8 m-2">
              {category}
            </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="grid w-full grid-cols-[2fr_1fr_2fr] sm:grid-cols-[2fr_1fr_2fr] gap-4 border-b pb-2 items-start"
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
          <p>If you look under 21 be prepared to show ID to purchase alcohol</p>
          <p>Bar runs until last event ends, usually around 10 PM</p>
          <div className="flex mt-4">
            <Image
              src={AskForAngela}
              alt="Ask for Angela"
              className="mx-auto h-20 w-auto"
              priority
            />
            <Image
              src={Challenge21}
              alt="Challenge 21"
              className="mx-auto h-20 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
