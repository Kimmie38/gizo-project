import React from "react";
import SearchBar from "../SearchBar/page";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-12 sm:py-16 bg-gray-50">
      {/* Left Text */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#000000] leading-snug">
          Explore Your City
        </h1>
        <ul className="mt-4 text-gray-600 space-y-2 text-sm sm:text-base">
          <li>- Welcome to Nigeria&apos;s foremost digital market place.</li>
          <li>- Search for Product&apos;s or Service Hassle Free.</li>
        </ul>

        {/* Search bar should resize too */}
        <div className="mt-6 w-full max-w-md mx-auto md:mx-0">
          <SearchBar />
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          src="/images/business.png"
          alt="Hero Illustration"
          width={400}
          height={400}
          className="w-64 h-auto sm:w-80 lg:w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;
