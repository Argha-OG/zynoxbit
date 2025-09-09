import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-blue-300 pb-20 pt-20 ">
      {/* <h1 className="text-4xl font-bold text-center  ">About Us</h1> */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center items-center ">
        {/* <div className="w-1/2 pr-10">
          <video
            src="/about.mp4"
            autoPlay
            controls
            className="rounded-xl"
          ></video>
        </div> */}
        <div className="w-1/2 space-y-2">
          <p className="font-semibold text-2xl">
            <q>
              Your Trusted Partner for Digital Transformation & Growth Across
              Asia.
            </q>
          </p>
          <p className=" text-xl">
            {/* A company's journey is defined by its purpose.*/} Zynoxbit was
            founded on a shared vision to simplify digital growth for businesses
            struggling to navigate the complexities of the digital landscape.
            <br /> We are a dedicated digital solutions company with a strategic
            presence in both Malaysia and Bangladesh, specializing in empowering
            small, medium, and large businesses to unlock their full potential.
            Our mission is to move beyond providing services to become a true
            strategic partner, helping our clients attract new customers, build
            enduring credibility, and accelerate their growth.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full" src="/team.png" alt="" />
        </div>
      </div>
      <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-2 grid-rows-2">
        <div className="card bg-white w-96 shadow-sm">
          <figure>
            <img
              className="object-cover object-center"
              src="/Siam.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Siyam Khan</h2>
            <p>CEO of ZynoxBit</p>
            <div className="card-actions">
              <button className="btn">LinkedIn</button>
              <button className="btn">Facebook</button>
            </div>
          </div>
        </div>

        <div className="card bg-white w-96 shadow-sm">
          <figure>
            <img
              className="object-cover object-center"
              src="/Siam.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Siyam Khan</h2>
            <p>CEO of ZynoxBit</p>
            <div className="card-actions">
              <button className="btn">LinkedIn</button>
              <button className="btn">Facebook</button>
            </div>
          </div>
        </div>

        <div className="card bg-white w-96 shadow-sm">
          <figure>
            <img
              className="object-cover object-center"
              src="/Siam.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Siyam Khan</h2>
            <p>CEO of ZynoxBit</p>
            <div className="card-actions">
              <button className="btn">LinkedIn</button>
              <button className="btn">Facebook</button>
            </div>
          </div>
        </div>

        <div className="card bg-white w-96 shadow-sm">
          <figure>
            <img
              className="object-cover object-center"
              src="/Siam.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Siyam Khan</h2>
            <p>CEO of ZynoxBit</p>
            <div className="card-actions">
              <button className="btn">LinkedIn</button>
              <button className="btn">Facebook</button>
            </div>
          </div>
        </div>
      </div>
      //here
    </div>
  );
};

export default About;
