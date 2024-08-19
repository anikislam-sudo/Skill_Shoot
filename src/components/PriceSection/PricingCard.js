import React from 'react';


const PricingCard = ({ title, price, period, features, isPro = false }) => {
    return (
        <div className={`card  w-80 bg-base-100 rounded-xl  transition-all duration-300 ease-in-out hover:scale-110 hover:z-10 `}>
      {isPro && <div className="badge badge-none border  rounded-full px-3 py-3 text-white bg-peach900 absolute right-2 top-3">MOST POPULAR</div>}
      <div className="card-body rounded-lg   transition-colors duration-300 ease-in-out hover:bg-Green hover:text-white">
        <h2 className="card-title">{title}</h2>
        <p className="text-3xl font-bold">${price}<span className="text-sm  font-normal">/{period}</span></p>
        <p className=''>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="card-actions justify-center   mt-4">
          <button className={`btn w-full rounded-md  hover:bg-peach900 hover:text-white text-peach900`}>Choose plan</button>
        </div>
      </div>
    </div>
    );
};

export default PricingCard;