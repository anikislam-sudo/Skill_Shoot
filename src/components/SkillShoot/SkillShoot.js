import React from "react";
import img2 from "../../assets/Image (1).png";
import group from "../../assets/Group 48095520.png";
import group1 from "../../assets/Group 48095522.png";
import group2 from "../../assets/Group 48095524.png";
import group3 from "../../assets/Group 48095526.png";
const SkillShoot = () => {
  return (
    <div className="bg-white  py-4">
      <div className="mx-auto max-w-[1220px] p-9 flex flex-col md:flex-row items-center">
        {/* Left side with image and icons */}
        <div className=" hidden lg:block w-full md:w-1/2 mb-8 md:mb-0 relative">
          <div className=" w-3/4 h-3/4 ">
          <img
            src={img2}
            alt="Professional woman"
            className=" w-full"
          />
          {/* Add icons and "How to build a team" card here */}
        </div>
        </div>

        {/* Right side with text and stats */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4">
            Let us <span className="text-Green">Skill Shoot</span>
          </h2>
          <p className="mb-6 text-silver">
            We are a company engaged in education with the aim of improving the
            skills of many people and so that younger people can reach the
            career paths they want.
          </p>
          <p className="mb-6 text-silver">
            We have been around since 2019 with currently 100+ updated materials
            and 15k members who have joined.
          </p>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center mr-24 gap-x-1">
    <img className="w-10 h-10" src={group} alt="" />
    <p className="pl-2 text-sm whitespace-nowrap">15k People Join</p>
  </div>
  <div className="flex items-center mr-24 gap-x-1">
    <img className="w-10 h-10" src={group1} alt="" />
    <p className="pl-2 text-sm  whitespace-nowrap">Trusted Mentor</p>
  </div>
  <div className="flex items-center mr-24 gap-x-1">
    <img className="w-10 h-10" src={group2} alt="" />
    <p className="pl-2 text-sm whitespace-nowrap">30+ Free Videos</p>
  </div>
  <div className="flex items-center mr-24 gap-x-1">
    <img className="w-10 h-10" src={group3} alt="" />
    <p className="pl-2 text-sm whitespace-nowrap">100+ Premium Videos</p>
  </div>
</div>

          </div>
        </div>
      </div>
  
  );
};

export default SkillShoot;
