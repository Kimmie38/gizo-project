import React from "react";
import Image from "next/image";

const steps = [
  {
    icon: "/images/location.png",
    title: "Check location",
    desc: "Learn more about where, when and how to reach out. Troubleshoot and ease space problems.",
  },
  {
    icon: "/images/solution.png",
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
    <section className="py-14 sm:py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Simple steps to get started and grow with us
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-50 mb-6">
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
