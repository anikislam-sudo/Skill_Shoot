import React from "react";
import img1 from "../../assets/pexels-katerina-holmes-5905497-removebg-preview 1.png";
import round from "../../assets/Intersect (1).png";
import round2 from "../../assets/Intersect.png";
import square from "../../assets/Group 574.png";
import square1 from "../../assets/Group 575.png";
import square2 from "../../assets/Group 576.png";
import round1 from "../../assets/ornamen (1).png";

const PromoSection = () => {
  return (
    <div className="bg-white flex justify-center items-center px-5  pt-14 mx-auto">
      <div className="hero relative bg-LightPeach rounded flex items-center justify-between w-full h-[300px] max-w-5xl  px-10">
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-2xl font-bold ">
            Happy <span className="text-peach900">Chinese New Year</span>, 20%{" "}
            <br /> discount for you today
          </h2>
          <div className="flex justify-center lg:justify-start">
            <button className="btn text-white bg-Green">
              Subscribe Course
            </button>
          </div>
        </div>

        <div className=" ">
          <img
            src={img1}
            alt="Promo"
            className=" hidden lg:block h-[433px] mb-[135px] bottom-0 w-auto rounded-lg  "
          />
          {/* Floating shapes for decoration */}
          <img
            src={round}
            alt="decor"
            className="absolute top-0 left-0 w-10 h-10"
          />
          <img
            src={round2}
            alt="decor"
            className="absolute bottom-0 right-0 w-10 h-10"
          />
          <img
            src={round1}
            alt="decor"
            className=" hidden lg:block absolute bottom-12 left-50 w-6 h-6"
          />

          <img
            src={square}
            alt="decor"
            className=" hidden lg:block absolute top-20 left-124 w-10 h-10"
          />
          <img
            src={square1}
            alt="decor"
            className=" hidden lg:block absolute top-20 right-14 w-8 h-8"
          />
          <img
            src={square2}
            alt="decor"
            className=" hidden lg:block absolute bottom-12 right-14 w-10 h-10"
          />
        </div>

        <div className="lg:hidden">
          <img
            src={round1}
            alt="decor"
            className="absolute bottom-5 right-80 w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
