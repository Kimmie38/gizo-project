"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import wall from "../../../../public/wall.png"; // ✅ background

export default function Signup() {
  const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleNext = (e) => {
    e.preventDefault();
    router.push("/signIN/Details");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-end items-center text-white p-6 md:p-8">
        <Image
          src={wall}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay content */}
        <div className="relative z-10 text-center mt-40 md:mt-0 mb-1 md:mb-40 max-w-md px-4">
          <h2 className="text-3xl font-semibold mb-2">How it works</h2>
          <p className="text-xs md:text-sm leading-relaxed text-gray-200">
            Create an account and set up your profile to begin. Explore the
            marketplace to find products or vendors, buy and sell securely with
            our trusted payment system, track your orders in real time, and
            share reviews to help others.
          </p>

          {/* Small progress dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white overflow-y-auto">
        <div className="max-w-lg w-full px-6 md:px-10 py-12">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-2 text-black">
            Create Account
          </h1>
          <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
            Get started by setting up your account.
          </p>

          {/* Stepper */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                1
              </div>
              <p className="text-xs mt-2 font-medium text-black">
                Personal Information
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 font-bold">
                2
              </div>
              <p className="text-xs mt-2 text-emerald-500">Business Information</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 font-bold">
                3
              </div>
              <p className="text-xs mt-2 text-emerald-500">Business Socials</p>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-lg font-semibold mb-4 text-black">
            Personal Information
          </h2>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleNext}>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Confirm Password
              </label>
              <div className="relative">
                 <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition"
            >
              Next
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/signIN/login" className="text-emerald-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
