
import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image"; // ✅ use Image, not Images

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
      {/* Left Text */}
      <div className="max-w-lg">
        <h1 className="text-[72px] font-semibold text-[#000000] leading-[140%] whitespace-nowrap">
          Explore Your City
        </h1>
        <ul className="mt-4 text-gray-600 space-y-2">
          <li>- Welcome to Nigeria&apos;s foremost digital market place.</li>
          <li>- Search for Product&apos;s or Service Hassle Free.</li>
        </ul>
        <SearchBar />
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <Image
          src="/images/business.png"  // ✅ no "public" here
          alt="Hero Illustration"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
