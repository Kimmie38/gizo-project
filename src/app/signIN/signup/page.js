"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import wall from "../../../../public/wall.png"; // ✅ background image

export default function BusinessSocials() {
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    router.push("/Dashboard"); // ✅ after socials, go to dashboard
  };

  const handlePrevious = () => {
    router.back(); // ✅ go back one step
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4"
    >
      {/* Card wrapper with two columns */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Info / Image */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-end items-center text-white">
          <Image
            src={wall}
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay content */}
          <div className="relative z-10 text-center mt-40 md:mt-0 mb-8 md:mb-24 max-w-md px-6">
            <h2 className="text-3xl font-semibold mb-2">Almost there!</h2>
            <p className="text-xs md:text-sm leading-relaxed text-gray-200">
              Add your business socials so customers can easily reach you across
              platforms. This helps build trust and improves visibility.
            </p>

            {/* Progress dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Right Side - Business Socials Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-lg p-8 md:p-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-2 text-black">
              Create Account
            </h1>
            <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
              Link your socials to connect with customers.
            </p>

            {/* Stepper */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                  <AiOutlineCheck className="text-lg" />
                </div>
                <p className="text-xs mt-2 font-medium text-black">
                  Personal Info
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                  <AiOutlineCheck className="text-lg" />
                </div>
                <p className="text-xs mt-2 font-medium text-black">
                  Business Info
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 font-bold">
                  3
                </div>
                <p className="text-xs mt-2 text-emerald-500 font-medium">
                  Business Socials
                </p>
              </div>
            </div>

            {/* Section Title */}
            <h2 className="text-lg font-semibold mb-4 text-black">
              Business Socials
            </h2>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleNext}>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Facebook
                </label>
                <input
                  type="text"
                  placeholder="https://facebook.com/yourbusiness"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Instagram
                </label>
                <input
                  type="text"
                  placeholder="@yourbusiness"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Twitter (X)
                </label>
                <input
                  type="text"
                  placeholder="@yourbusiness"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="+234 8012345678"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="w-1/2 mr-2 py-3 rounded-md font-medium text-sm md:text-base bg-gray-200 
                  hover:bg-gray-300 text-black transition"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="w-1/2 ml-2 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 
                  hover:bg-emerald-600 text-white transition"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
