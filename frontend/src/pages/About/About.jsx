import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center about ">
      <h1 className="text-center font-bold text-4xl mb-10">About us</h1>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="flex gap-10 items-center">
          <video
            src="/about.mp4"
            autoPlay
            controls
            className="rounded-xl shadow-2xl w-1/2"
          ></video>

          <div className="w-1/2">
            <p className="font-semibold text-3xl text-gray-700 mb-3">
              "Your Trusted Partner for Digital Transformation & Growth Across
              Asia."
            </p>
            <p className="text-justify text-xl text-gray-600">
              A company's journey is defined by its purpose. Zynoxbit was
              founded on a shared vision to simplify digital growth for
              businesses struggling to navigate the complexities of the digital
              landscape. We are a dedicated digital solutions company with a
              strategic presence in both Malaysia and Bangladesh, specializing
              in empowering small, medium, and large businesses to unlock their
              full potential. Our mission is to move beyond providing services
              to become a true strategic partner, helping our clients attract
              new customers, build enduring credibility, and accelerate their
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
