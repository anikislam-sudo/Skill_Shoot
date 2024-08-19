import React from "react";
import round from "/projects/Skill_shoot/task-app/src/assets/Intersect (1).png";
import square1 from "/projects/Skill_shoot/task-app/src/assets/Group 575.png";

const BannerTwo = () => {
  return (
    <div className="bg-white flex justify-center items-center py-6 mx-auto px-4 py-4">
      <div className="hero relative bg-LightPeach rounded-lg flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[250px] max-w-6xl px-6 md:px-10 py-8">
        <div className="text-center md:text-left space-y-4 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-peach900">Improve</span> your skills, and
            reach <br className="hidden md:block" /> your career as soon as possible
          </h2>
        </div>
        <div className="flex flex-col  items-center md:items-start">
          <div className="mb-4">
            <button className="btn btn-rounded mr-2 mb-2 md:mb-0 text-white bg-peach900">
              Join Now
            </button>
            <button className="btn btn-rounded text-white bg-Green">
              Subscribe Course
            </button>
          </div>
          <img
            src={round}
            alt="decor"
            className="absolute top-[-10px] left-0 md:left-0 w-8 h-8 md:w-10 md:h-10"
          />
          <img
            src={square1}
            alt="decor"
            className="absolute  hidden lg:block bottom-[-17px]  left-1/2 transform -translate-x-1/2 md:left-[600px]  w-6 h-6 md:w-8 md:h-8"
          />
          <img
            src={square1}
            alt="decor"
           className="absolute top-30 -right-8 transform -translate-x-1/2 lg:hidden sm:block w-8 h-8 md:w-8 md:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
