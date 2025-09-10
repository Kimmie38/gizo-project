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
    <section className="py-12 sm:py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          How it works.
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          This is how our products work
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
