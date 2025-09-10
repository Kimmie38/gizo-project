import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // install heroicons if not yet

const features = ["Community Business", "Trusted", "Linkages", "Easy to use"];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/smartphone.png" // place inside /public/images/
            alt="People discussing"
            width={300}
            height={400}
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why you should choose us.
          </h2>
          <ul className="space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
