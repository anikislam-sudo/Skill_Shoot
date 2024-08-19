import React from "react";

import img from "../../assets/pexels-max-fischer-5212317-removebg-preview 1.png";
import pencil from "../../assets/Group 25.png";
import media from "../../assets/Group 15.png";
import card from "../../assets/Group 23.png";
import calendar from "../../assets/Group 24.png";
import insta from "../../assets/bxl-instagram-alt (1) 1.png";
import twitter from "../../assets/bxl-twitter (1) 1.png";
import discord from "../../assets/bxl-discord-alt 1.png";

import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="bg-Green w-full">
      <div className="max-w-[1220px] mx-auto p-10">
        <div className="hero flex flex-col lg:flex-row sm:flex-row-reverse items-center justify-between relative">
          {/* Left Section - Text and Button */}
          <div className="space-y-6 max-w-lg text-center lg:text-left relative lg:static">
            <h1 className="text-4xl  text-white font-semibold">
              There is always <br />
              something new for <br />
              us to learn
            </h1>
            <p className="py-6 text-white font-thin">
              We have created more than 100+ materials on various things that
              will help your career, with mentors who are experienced in their
              fields.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
  
  <button className="btn rounded bg-peach900 text-white   ">
    Start Journey
  </button>
  <div className="flex space-x-4">
    <img className="w-5" src={insta} alt="Instagram" />
    <img className="w-5" src={twitter} alt="Twitter" />
    <img className="w-5" src={discord} alt="Discord" />
  </div>
</div>


            {/* Images Around Text Section - Visible on Mobile */}
            <div className="lg:hidden">
              <div className="absolute -top-20 right-50 w-12 h-12">
                <img src={pencil} alt="Pencil" />
              </div>
              <div className="absolute bottom-5 right-5 w-12 h-12">
                <img src={media} alt="Media" />
              </div>
              <div className=" hidden absolute bottom-10 left-5 w-12 h-12">
                <img src={card} alt="Card" />
              </div>
              <div className="absolute bottom-20 right-70 w-12 h-12">
                <img src={calendar} alt="Calendar" />
              </div>
            </div>
          </div>

          {/* Right Section - Person Image and Images Around It (Visible on Desktop) */}
          <div className="hidden lg:block relative mt-8 lg:mt-0 flex-shrink-0">
            <img src={img} alt="Person" className="max-w-full h-auto" />
            <div className="absolute top-2 left-5 p-2 w-14 h-10">
              <img src={pencil} alt="Pencil" />
            </div>
            <div className="absolute top-40 right-20 w-10 h-10">
              <img src={media} alt="Media" />
            </div>
            <div className="absolute bottom-60 right-60 w-50">
              <img src={card} alt="Card" />
            </div>
            <div className="absolute bottom-16 right-4 w-10 h-10">
              <img src={calendar} alt="Calendar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;







