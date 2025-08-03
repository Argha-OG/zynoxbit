import React from 'react'
import HeroGif from "../assets/hero.gif"

const HomePage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Welcome to Zynoxbit!
              </h2>

              <p className="mt-4 text-gray-700">
                We're your digital growth partner — crafting websites, managing
                Meta ads, and driving results through smart digital strategies.
                Let’s take your brand to the next level.
              </p>
            </div>
            <div className="mt-4 space-between">
              <a
                className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                href="#"
              >
                Explore our services
              </a>

              <a
                className="ml-2 inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
                href="#"
              >
                Let’s talk strategy
              </a>

              <p className="mt-4 text-gray-700">
                This Website is Under Construction. Please Contact Our Web Expert On linkedin <a href="https://www.linkedin.com/in/argha-biswas/" className='text-2xl font-semibold'>Argha Biswas</a>
              </p>
            </div>
          </div>

          <div>
            <img src={HeroGif} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage