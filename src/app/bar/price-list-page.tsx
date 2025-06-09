'use client';
import React, { useRef, useEffect, useState } from 'react';
import PageHeader from '@/app/components/page-header';
import { barMenu } from './price-list';
import { FiMapPin } from 'react-icons/fi';
import Challenge21 from '@/assets/wbar/challenge21.jpg';
import AskForAngela from '@/assets/wbar/askforangela.jpg';
import Image from 'next/image';
import { LeftSquiggle, RightSquiggle } from './squiggle';

export default function PriceList() {
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [squiggleCount, setSquiggleCount] = useState(0);

  useEffect(() => {
    if (menuContentRef.current) {
      const contentHeight = menuContentRef.current.offsetHeight;
      const squiggleHeight = 48;
      const height = Math.ceil(contentHeight / squiggleHeight) * squiggleHeight;
      menuContentRef.current.style.height = `${height}px`;
      setSquiggleCount(height / squiggleHeight);
    }
  }, []);

  return (
    <div className="bg-purple sm:bg-orange text-white">
      <PageHeader />

      <div className="mx-auto  sm:my-8 max-w-2xl">
        <div className="flex flex-row">
          <div className="hidden sm:block h-full flex-col">
            {Array.from({ length: squiggleCount }).map((_, i) => (
              <LeftSquiggle key={i} />
            ))}
          </div>
          <div className="p-4 sm:p-8 bg-purple h-fit" ref={menuContentRef}>
            <h1 className="text-3xl font-semibold">BAR MENU</h1>
            <div className="flex flex-row mx-auto items-center gap-2 w-fit sm:mb-8">
              <FiMapPin /> Benefactors Place
            </div>
            {barMenu.menu.map(({ category, items }, categoryIndex) => (
              <div key={categoryIndex} className="mb-6 flex flex-col">
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
              <p>
                If you look under 21 be prepared to show ID to purchase alcohol
              </p>
              <p>Bar runs until last event ends, usually around 10 PM</p>
              <div className="flex mt-4 mb-8">
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
          <div className="hidden sm:block h-full flex-col">
            {Array.from({ length: squiggleCount }).map((_, i) => (
              <RightSquiggle key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
