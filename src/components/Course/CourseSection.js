import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import the CourseCard component
import square1 from "/projects/Skill_shoot/task-app/src/assets/Group 575.png";
import round1 from "/projects/Skill_shoot/task-app/src/assets/ornamen (1).png";

const CourseSection = () => {
  const courses = [
    {
      title: "Basics of learning team management",
      instructor: "Jane Owel",
      role: "IT Manager",
      participants: "https://i.ibb.co/kJcrJyC/Group-587.png",
      price: 120,
      videos: "https://youtu.be/uWQ_8CtvzoY?si=DgE7710hTvn9Myt-",
      video: 25,
      imgSrc: "https://i.ibb.co/pZRwpG6/Group-583.png",
    },
    {
      title: "Learn basic database structure",
      instructor: "Raynaldo Jr",
      role: "Data Science",
      participants: "https://i.ibb.co/Rp4QScV/Group-587-1.png",
      price: 180,
      videos: "https://youtu.be/oEJMJuFD204?si=h1KW6Hj_fZCWVf7U",
      video: 20,
      imgSrc: "https://i.ibb.co/Sv68ts2/Group-583-2.png",
    },
    {
      title: "Create dynamic website with basic PHP",
      instructor: "Markus Low",
      role: "Programmer",
      participants: "https://i.ibb.co/C0kywP6/Group-587-2.png",
      price: 135,
      videos: "https://youtu.be/fg1rjQOOWoQ?si=0T1QZqc3Nrdrpw2t",
      video: 20,
      imgSrc: "https://i.ibb.co/BsSd2Q2/Group-583-1.png",
    },
    {
      title: "Advanced React Development",
      instructor: "Sarah Parker",
      role: "Frontend Engineer",
      participants: "https://i.ibb.co/C0kywP6/Group-587-2.png",
      price: 220,
      videos: "https://youtu.be/ipOYH_Wi9Xw?si=wR-5alNlLvwjYf-f",
      video: 30,
      imgSrc: "https://i.ibb.co/BsSd2Q2/Group-583-1.png",
    },
    {
      title: "Mastering Python for Data Science",
      instructor: "Daniel Wu",
      role: "Data Scientist",
      participants: "https://i.ibb.co/C0kywP6/Group-587-2.png",
      price: 200,
      videos: "https://youtu.be/4QzL1lakbvA?si=tC8VF3552_3w2ufe",
      video: 40,
      imgSrc: "https://i.ibb.co/Sv68ts2/Group-583-2.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? courses.length - visibleCount : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === courses.length - visibleCount ? 0 : prevSlide + 1
    );
  };

  const visibleCourses = [
    ...courses.slice(currentSlide, currentSlide + visibleCount),
    ...(currentSlide + visibleCount > courses.length
      ? courses.slice(0, (currentSlide + visibleCount) % courses.length)
      : []),
  ];

  return (
    <div className="relative bg-Green py-20">
    <img
      src={square1}
      alt="decor"
      className="absolute top-8 left-4 md:left-12 lg:left-24 w-10 h-10"
    />
    <img
      src={round1}
      alt="decor"
      className="absolute top-4 right-4 md:right-12 lg:right-24 w-10 h-10"
    />
    <div className="container mx-auto text-center px-4 md:px-8 lg:px-16 relative">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
        Popular courses of the week
      </h2>
      <p className="text-white text-sm md:text-base lg:text-lg font-light mb-8">
        List of the most popular courses that are often <br /> studied by our members
      </p>
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          className="btn btn-circle bg-Green text-white   text-white outline outline-white absolute z-10 -left-4 top-1/2  "
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          &lt;
        </button>

        {/* Card Display */}
        <div className="flex rounded-xl overflow-hidden space-x-4 ">
          {visibleCourses.map((course, index) => (
            <div key={index} className="">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="btn btn-circle bg-Green text-white outline outline-white absolute z-10 -right-4 top-1/2 "
          onClick={handleNext}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
  );
};

export default CourseSection;
