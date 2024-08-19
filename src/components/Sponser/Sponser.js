import React from "react";
import SponserDetails from "./SponsorDetails";

const Sponser = () => {
  const sponsers = [
    {
      id: 1,

      img: "https://i.ibb.co/rQNFgPR/image-11.png",
    },
    {
      id: 2,

      img: "https://i.ibb.co/M2dfDcB/image-12.png",
    },
    {
      id: 3,

      img: "https://i.ibb.co/rmYXWFz/image-13.png",
    },
    {
      id: 4,

      img: "https://i.ibb.co/Zfp2hWq/image-14.png",
    },
    {
      id: 5,

      img: "https://i.ibb.co/6n9KfgW/image-15.png",
    },
  ];
  return (
    <div className="bg-white pt-14 flex flex-col items-center justify-center pb-20  ">
      <h1 className=" lg:text-3xl sm:text-xxl text-center text-black font-semibold">
        Trusted more than <span className="text-peach900">100+</span> in the
        world
      </h1>

      <p className="py-6 text-center text-silver font-normal">
        they have asked us more than 3 times to teach their employees <br />
        about various things. to improve their skills
      </p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-12  mt-7 place-items-center   '>
        {sponsers.slice(0, 4).map((sponser) => (
          <SponserDetails key={sponser.id} sponser={sponser} />
        ))}
        {/* Dribble logo on a full row centered */}
        <div className="col-span-2 md:col-span-1 flex justify-center items-center w-full">
          <SponserDetails sponser={sponsers[4]} />
        </div>
      </div>
    </div>
  );
};

export default Sponser;
