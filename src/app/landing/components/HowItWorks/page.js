import React from "react";
import Image from "next/image"; // ✅ Correct import

const steps = [
  {
    icon: "/images/location.png", // must exist inside public/images/
    title: "Check location",
    desc: "Learn more about where, when and how to reach out. Troubleshoot and ease space problems.",
  },
  {
    icon: "/images/solution.png", // ✅ give this a real image
    title: "Explore",
    desc: "Locate different services, organizations and linkages. Troubleshoot and bridge gaps.",
  },
  {
    icon: "/images/handshake.png",
    title: "Communicate",
    desc: "Connect directly with businesses, exchange ideas and strengthen collaboration.",
  },
];

const HowItWorks = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='text-center mb-12'>
        <h2 className='text-2xl font-bold text-gray-900'>How it works.</h2>
        <p className='text-gray-600'>This is how our products work</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='p-6 bg-gray-50 rounded-4x2 shadow hover:shadow-md transition'
          >
            <div className='flex justify-center mb-4'>
              <Image src={step.icon} alt={step.title} width={64} height={64} />
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              {step.title}
            </h3>
            <p className='text-gray-600 text-sm'>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
