import React from "react";
import HeroGif from "../../../assets/hero.gif";
import WebGif from "../../../assets/webapp.gif";
import WebMainGif from "../../../assets/webmain.gif";

const HomePage = () => {
  return (
    <>
      <div className="bg-blue-300 pb-30">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 sm:text-2xl max-w-2/3">
                  Transforming Your Business to Go Digital & Grow Smarter
                </h2>

                <p className="mt-4 text-gray-700 text-xl">
                  We're your digital growth partner — crafting websites,
                  managing Meta ads, and driving results through smart digital
                  strategies. Let’s take your brand to the next level.
                </p>
              </div>
              {/* <div className="mt-12 space-between text-2xl lg:text-2xl">
                <a
                  className="inline-block rounded-4xl border border-blue-600 bg-blue-600 px-8 py-2 text-lg font-medium text-white hover:bg-white hover:text-black focus:ring-3 focus:outline-hidden"
                  href="https://wa.me/+601114004965"
                  target="_blank"
                >
                  Contact On WhatsApp
                </a>

                <a
                  className="ml-2 inline-block rounded-4xl border border-black px-8 py-2 text-lg font-medium bg-white text-black hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden"
                  href="https://wa.me/+601114004965"
                  target="_blank"
                >
                  Let’s talk strategy
                </a>
              </div> */}
            </div>

            <div>
              <img src={HeroGif} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="products h-auto bg-blue-500 rounded-b-[96px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 -mt-36">
          <a
            href="#"
            className="transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="relative h-96 rounded-4xl bg-white border p-4 shadow-sm sm:p-6">
              <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-4xl font-medium text-pretty text-gray-900">
                    Web Application Development
                  </h3>

                  <p className="mt-4 text-pretty text-gray-700">
                    Transform your ideas into powerful web apps. Our
                    custom-built solutions help you automate tasks, improve
                    customer experience, and drive growth.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center ">
                <img
                  className="h-40 rounded"
                  src={WebGif}
                  alt="Web Animation"
                />
              </div>
            </div>
          </a>

          <div className="relative h-96 rounded-4xl p-4 shadow-sm sm:p-6 bg-blue-200 lg:col-span-2 transition duration-300 ease-in-out hover:-translate-y-2">
            <a className="" href="">
              <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-4xl font-medium text-pretty text-gray-900">
                    Website Maintenance, Security & SEO
                  </h3>

                  <p className="mt-4 text-pretty text-gray-700">
                    Keep your website fast, secure, and always up to date. We
                    handle regular updates, protect your site from threats, and
                    optimize it for search engines — so your business stays
                    visible, safe, and ahead of the competition.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center overflow-hidden h-54">
                <img
                  className="h-54 rounded bg-transparent"
                  src={WebMainGif}
                  alt="Web Animation"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
