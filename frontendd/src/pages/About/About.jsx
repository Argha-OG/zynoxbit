import React from "react";

const About = () => {
  return (
    <div className="bg-blue-300 pb-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center items-center ">
        <div className="w-1/2 pr-10">
          <video
            src="/about.mp4"
            autoPlay
            controls
            className="rounded-xl"
          ></video>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-center p-5">About Us</h1>
          <p className="font-semibold">
            Your Trusted Partner for Digital Transformation & Growth Across
            Asia.
          </p>
          <p className="text-justify">
            A company's journey is defined by its purpose. Zynoxbit was founded
            on a shared vision to simplify digital growth for businesses
            struggling to navigate the complexities of the digital landscape. We
            are a dedicated digital solutions company with a strategic presence
            in both Malaysia and Bangladesh, specializing in empowering small,
            medium, and large businesses to unlock their full potential. Our
            mission is to move beyond providing services to become a true
            strategic partner, helping our clients attract new customers, build
            enduring credibility, and accelerate their growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
