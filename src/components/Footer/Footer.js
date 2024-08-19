import React from 'react';
import zigzag from "/projects/Skill_shoot/task-app/src/assets/Vector 15.png";
import doubleCircle from "/projects/Skill_shoot/task-app/src/assets/Group 162529.png";

const Footer = () => {
  return (
    <footer className="bg-Green flex-grow-2 text-center p-10">
      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <div className="relative flex justify-center items-center">
          <div className="absolute hidden lg:block top-36 left-8 md:left-20">
            {/* Left Decorative Zigzag Line */}
            <img src={zigzag} alt="zigzag" />
          </div>
          <div className="absolute hidden lg:block top-20 right-8 md:right-20">
            
            <img src={doubleCircle} alt="doubleCircle" />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute lg:hidden sm:block top-80 left-8 md:left-20">
            {/* Left Decorative Zigzag Line */}
            <img src={zigzag} alt="zigzag" />
          </div>
          <div className="absolute lg:hidden sm:block top-60 right-5 md:right-20">
            {/* Right Decorative Circles */}
            <img src={doubleCircle} alt="doubleCircle" />
          </div>
        </div>

        {/* Subscription Section */}
        <h2 className="text-white text-xl md:text-3xl font-semibold">
          Subscribe to get notified about updates
        </h2>
        <p className="text-silver mt-2">
          By subscribing with your mail, you will accept our privacy policy
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-200 text-silver border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white w-full md:max-w-xs"
          />
          <button className="btn bg-peach900 border-none rounded text-white w-full md:w-auto py-3 px-6 mt-4 md:mt-0 md:ml-2">
            Subscribe us
          </button>
        </div>

        {/* Footer Content (Title and Links) */}
        <div className="flex flex-col md:flex-row justify-around items-center mt-20 text-white">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-silver mt-4 md:mt-0">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/" className="hover:text-white">Course</a>
            <a href="/" className="hover:text-white">Subscribe</a>
            <a href="/" className="hover:text-white">About</a>
            <a href="/" className="hover:text-white">Testimoni</a>
          </div>
          <div className="font-bold pt-4">
            Skill <span className="text-peach900">Shoot</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
