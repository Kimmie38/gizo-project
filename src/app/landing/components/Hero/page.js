import React from "react";
import SearchBar from "../SearchBar/page";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-12 sm:py-20 bg-gray-50">
      {/* Left Content */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
          Explore Your City
        </h1>
        <ul className="mt-6 text-gray-600 space-y-3 text-sm sm:text-base">
          <li>• Welcome to Nigeria&apos;s foremost digital marketplace.</li>
          <li>• Search for Products or Services hassle-free.</li>
        </ul>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-md mx-auto md:mx-0">
          <SearchBar />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/images/business.png"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-56 sm:w-72 md:w-80 lg:w-[420px] h-auto drop-shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
