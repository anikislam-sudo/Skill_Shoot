import React from 'react';
import logo1 from "/projects/Skill_shoot/task-app/src/assets/unsplash_d1UPkiFd04A.png";
import box from "/projects/Skill_shoot/task-app/src/assets/Group 542.png";
import box1 from "/projects/Skill_shoot/task-app/src/assets/Group 555.png";
import box2 from "/projects/Skill_shoot/task-app/src/assets/Group 556.png";
import box3 from "/projects/Skill_shoot/task-app/src/assets/Group 554.png";
const WhyExistSection = () => {
  return (
    <div className="py-12 mx-auto bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Title, Description, Profile, Stats */}
          <div className='pt-5 text-left sm:text-center'>
            {/* Title and Description */}
            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left lg:ml-7 ">
  Why do we <span className="text-peach900">exist?</span>
</h2>
<p className="mt-4 text-silver text-thin text-center lg:text-left lg:ml-7">
  Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills.
</p>

            {/* CEO Profile */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start mt-6 lg:mt-14 lg:ml-7 pb-3 border-b-2 border-gray-300 lg:border-b-2 lg:pb-3 max-w-xs sm:max-w-auto mx-auto lg:mx-0">
  
  <img
    src={logo1}
    alt="CEO Image"
    className="rounded-full w-16 h-16 mb-4 lg:mb-0 lg:mr-4"
  />
  <div className="text-center lg:text-left  pb-2">
  <h3 className="font-bold text-gray-900">Jerony Pulquosta</h3>
  <p className="text-gray-500">CEO Skill Shoot</p>

</div>


</div>


            {/* Stats */}
            <div className=" pl-6 flex lg:flex-row sm:flex-row gap-8 mt-14 ml-7 sm:ml-0 items-center ">
  <div className="text-center sm:text-left">
    <h3 className="text-4xl font-bold text-gray-900">100+</h3>
    <p className="text-gray-500">Updated Material</p>
  </div>
  <div className="text-center sm:text-left">
    <h3 className="text-4xl font-bold text-gray-900">15K</h3>
    <p className="text-gray-500">Member Join</p>
  </div>
</div>

          </div>

          {/* Right Column: Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 pb-2 gap-8">
  <div className="bg-white p-6 flex flex-col items-center md:items-start">
    <div className="text-center mb-4">
      <img src={box} alt="" className='w-10 h-10' />
    </div>
    <div className="flex items-center mb-4">
      <h3 className="text-md font-bold text-Green text-center md:text-left">
        Material Limitations
      </h3>
    </div>
    <p className="text-gray-600 text-center md:text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>

  <div className="bg-white p-6 flex flex-col items-center md:items-start">
    <div className="text-center mb-4">
      <img src={box1} alt="" className='w-10 h-10' />
    </div>
    <div className="flex items-center mb-4">
      <h3 className="text-md font-bold text-Green text-center md:text-left">
        Unprofessional Mentor
      </h3>
    </div>
    <p className="text-silver text-center md:text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>

  <div className="bg-white p-6 flex flex-col items-center md:items-start">
    <div className="text-center mb-4">
      <img src={box2} alt="" className='w-10 h-10' />
    </div>
    <div className="flex items-center mb-4">
      <h3 className="text-md font-bold text-Green text-center md:text-left">
        Video Quality
      </h3>
    </div>
    <p className="text-gray-600 text-center md:text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>

  <div className="bg-white p-6 flex flex-col items-center md:items-start">
    <div className="text-center mb-4">
      <img src={box3} alt="" className='w-10 h-10' />
    </div>
    <div className="flex items-center mb-4">
      <h3 className="text-md font-bold text-Green text-center md:text-left">
        High Price
      </h3>
    </div>
    <p className="text-gray-600 text-center md:text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default WhyExistSection;
