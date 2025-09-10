import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="pb-20 pt-20 ">
      {/* <h1 className="text-4xl font-bold text-center  ">About Us</h1> */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center items-center gap-10 ">
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
            <br /> <br />
            We are a dedicated digital solutions company with a strategic
            presence in both Malaysia and Bangladesh, specializing in empowering
            small, medium, and large businesses to unlock their full potential.
            Our mission is to move beyond providing services to become a true
            strategic partner, helping our clients attract new customers, build
            enduring credibility, and accelerate their growth.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full rounded-xl" src="/team.webp" alt="" />
        </div>
      </div>

      <hr />

      <div className="flex items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-1/2">
          <h1 className="text-3xl">Vision</h1>
        </div>
        <div className="w-1/2 text-xl">
          <p>
            Our vision is to empower every business with technology, unlocking
            their fullest potential seamlessly and efficiently.
          </p>
        </div>
      </div>

      <hr />

      <div className="flex items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-1/2">
          <h1 className=" text-3xl">Core Values</h1>
        </div>
        <div className="w-1/2">
          <div className="collapse collapse-arrow  border ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              Excellence in Quality
            </div>
            <div className="collapse-content text-sm">
              Committing to the highest standards in our products and processes,
              with a relentless pursuit of innovation and improvement.
            </div>
          </div>
          <div className="collapse collapse-arrow border ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Growth and Accountability
            </div>
            <div className="collapse-content text-sm">
              Encouraging continuous personal and professional development while
              upholding a strong sense of responsibility for our actions and
              outcomes.
            </div>
          </div>
          <div className="collapse collapse-arrow  border ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Empathy and Support
            </div>
            <div className="collapse-content text-sm">
              Cultivating a culture of empathy, respect, and proactive support,
              ensuring we meet and anticipate the needs of our customers and
              colleagues.
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-1/2">
          <h1 className="text-3xl">Leadership Team </h1>
        </div>
        <div className="w-1/2 text-xl">
          <p>
            Our commitment is to build a diverse team in every aspect. With
            radical candor, we admit we’re not there yet. To achieve this, we
            need talented people like you.
          </p>
        </div>
      </div>

      <hr />

      <div className="team-container flex items-center gap-2 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="team-member group relative overflow-hidden">
          <img
            src="/Siam.jpeg"
            className="team-member-img h-120 w-100 rounded object-cover "
            alt=""
          />

          <div
            className="absolute bottom-0 w-full text-xl text-white text-shadow-2xl 
                  translate-y-full group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out 
                  bg-black/60 p-3   "
          >
            <h1>Siyam Khan</h1>
            <p>Founder & CEO</p>
          </div>
        </div>

        <div className="team-member group relative overflow-hidden">
          <img
            src="/Argha.jpg"
            className="team-member-img h-120 w-100 rounded object-cover "
            alt=""
          />

          <div
            className="absolute bottom-0 w-full text-xl text-white text-shadow-2xl 
                  translate-y-full group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out 
                  bg-black/60 p-3   "
          >
            <h1>Argha Biswas</h1>
            <p>CTO</p>
          </div>
        </div>

        <div className="team-member group relative overflow-hidden">
          <img
            src="/Rijvi.jpeg"
            className="team-member-img h-120 w-100 rounded object-cover "
            alt=""
          />

          <div
            className="absolute bottom-0 w-full text-xl text-white text-shadow-2xl 
                  translate-y-full group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out 
                  bg-black/60 p-3   "
          >
            <h1>Sheikh Rijvi</h1>
            <p>Developer & Researcher</p>
          </div>
        </div>

        <div className="team-member group relative overflow-hidden">
          <img
            src="/Rafid.jpg"
            className="team-member-img h-120 w-100 rounded object-cover "
            alt=""
          />

          <div
            className="absolute bottom-0 w-full text-xl text-white text-shadow-2xl 
                  translate-y-full group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out 
                  bg-black/60 p-3   "
          >
            <h1>Rafidul Islam</h1>
            <p>Founding Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
