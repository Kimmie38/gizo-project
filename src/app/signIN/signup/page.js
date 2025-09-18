"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    router.push("/signIN/Details");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4"
    >
      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-10">
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
            <p className="text-xs mt-2 text-emerald-500">
              Business Information
            </p>
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
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
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
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
            className="w-full mt-4 py-3 rounded-md font-medium text-sm md:text-base 
                       bg-emerald-500 hover:bg-emerald-600 text-white transition"
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
          <a
            href="/signIN/login"
            className="text-emerald-500 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
