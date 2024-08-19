import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
    const plans = [
        {
          title: 'Base',
          price: 50,
          period: 'month',
          features: ['Access all videos', 'Get Certificate', 'Chat support', 'Update Notification', 'Download material'],
        },
        {
          title: 'Pro',
          price: 100,
          period: '6 month',
          features: ['Access all videos', 'Get Certificate', 'Chat support', 'Update Notification', 'Download material'],
          isPro: true,
        },
        {
          title: 'Enterprise',
          price: 200,
          period: '12 month',
          features: ['Access all videos', 'Get Certificate', 'Chat support', 'Update Notification', 'Download material'],
        },
      ];

    return (
        <div className='bg-white py-6'>
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">
                    <span className='text-peach900'>Subscribe</span> with us now
                </h1>
                <p className="text-base md:text-md text-center text-silver mb-8 md:mb-12">
                    By subscribing now you will be able to access the material easily <br />
                    and cheaply, so you will be very efficient and benefit.
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-2">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
