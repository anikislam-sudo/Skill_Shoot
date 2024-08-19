import React from "react";
import ReactPlayer from "react-player";

const CourseCard = ({ course }) => {
  return (
    <div className="card  w-full md:w-96 sm:w-50 bg-base-100 shadow-xl p-0">
      <div className="w-full h-48 md:h-60 relative">
        <ReactPlayer
          url={course.videos}
          width="100%"
          height="100%"
          controls={true}
          light={true}
          className="absolute top-0 left-0"
        />
      </div>
      <div className="card-body p-5">
        <h2 className="card-title text-start pl-4 text-lg sm:text-xl md:text-2xl">
          {course.title}
        </h2>
        <div className="flex lg:flex-row sm:flex-row justify-around items-center mt-4 ">
          <img
            src={course.imgSrc}
            alt=""
            className="rounded-full w-25 h-10 sm:w-25 sm:h-10 md:w-25 md:h-10"
          />
          <img
            src={course.participants}
            alt="Participants"
            className="w-20 h-10 sm:w-40 sm:h-32 md:w-40 md:h-10"
          />
        </div>
      </div>
      <div className=" bg-wcolor card-actions flex flex-row-reverse   justify-around items-center mt-2">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left mt-2 sm:mt-0">
          ${course.price}/<span className="text-sm">{course.video} Videos</span>
        </p>
        <button className="btn m-2 bg-Green text-white lg:w-auto sm:w-auto">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
