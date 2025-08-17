import React from 'react'
import HeroGif from "../../assets/hero.gif"
import MainLayout from '../../../layout/MainLayout.jsx';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="bg-blue-300 h-[600px]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Welcome to Zynoxbit!
                </h2>

                <p className="mt-4 text-gray-700">
                  We're your digital growth partner — crafting websites,
                  managing Meta ads, and driving results through smart digital
                  strategies. Let’s take your brand to the next level.
                </p>
              </div>
              <div className="mt-4 space-between">
                <a
                  className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                  href="https://wa.me/+601114004965"
                  target="_blank"
                >
                  Contact On WhatsApp
                </a>

                <a
                  className="ml-2 inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
                  href="https://wa.me/+601114004965" target='_blank'
                >
                  Let’s talk strategy
                </a>
              </div>
            </div>

            <div>
              <img src={HeroGif} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="products h-[300px] bg-blue-500 rounded-b-[96px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 -mt-36">
          <div className="h-86 rounded-4xl bg-gray-300"></div>
          <div className="h-86 rounded-4xl bg-gray-300 lg:col-span-2"></div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage