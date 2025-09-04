import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-blue-300 services py-5">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl text-center font-bold pb-15"> Our Core Solutions</h1>
        <div className="grid grid-cols-2 grid-rows-2 space-x-10">
          <div className="space-y-3">
            <div>
              <h1 className="text-2xl font-semibold">
                High-Performance Digital Platforms
              </h1>
              <p className="text-justify">
                From robust website development to complex web applications, we
                build secure, scalable, and innovative digital solutions that
                drive customer acquisition and build your brand's authority.
              </p>
            </div>
            <img
              src="high.jpg"
              className="rounded-xl transition duration-300 ease-in-out hover:-translate-y-2"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <img
              src="high.jpg"
              className="rounded-xl transition duration-300 ease-in-out hover:-translate-y-2"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold pt-2">
                Growth-Driven Social Engagement
              </h1>
              <p className="text-justify">
                Our social media and paid advertising strategies are designed to
                go beyond likes and shares to attract customers and generate
                tangible conversions. We focus on data-driven approaches to
                ensure every decision provides a clear path to success.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="text-2xl font-semibold pt-2">
                Online Visibility & Security
              </h1>
              <p className="text-justify">
                Our end-to-end services in Search Engine Optimization (SEO) and
                website maintenance ensure your business is not only visible to
                your target audience but is also secure and consistently
                performing at its peak..
              </p>
            </div>
            <img
              src="high.jpg"
              className="rounded-xl transition duration-300 ease-in-out hover:-translate-y-2"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <img
              src="high.jpg"
              className="rounded-xl transition duration-300 ease-in-out hover:-translate-y-2"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold pt-2">
                Intuitive User Experience (UI/UX)
              </h1>
              <p className="text-justify">
                We design and enhance user interfaces with a focus on seamless
                navigation and compelling aesthetics. Our goal is to create
                digital experiences that are not only beautiful but also
                intuitive, helping to retain customers and drive higher
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
