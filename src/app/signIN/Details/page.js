"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheck } from "react-icons/ai";
import wall from "../../../../public/wall.png"; // ✅ background

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    router.push("/signIN/Socials"); // ✅ go to next step
  };

  const handlePrevious = () => {
    router.back(); // ✅ go back one step
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        },
        (err) => {
          console.error(err);
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
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
                <AiOutlineCheck className="text-lg" />
              </div>
              <p className="text-xs mt-2 font-medium text-black">
                Personal Information
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                2
              </div>
              <p className="text-xs mt-2 text-emerald-500 font-medium">
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
            Business Information
          </h2>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleNext}>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Business Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Business Phone Number
              </label>
              <input
                type="text"
                placeholder="+234 8078562309"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Business Category Dropdown */}
           <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-md border border-gray-300 text-black 
                          bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          focus:border-emerald-500 cursor-pointer"
              >
                <option value="">Select</option>
                <option value="Fashion">Fashion & Tailoring</option>
                <option value="Food">Food & Catering</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Retail">Retail & Trading</option>
                <option value="Tech">Tech & IT Services</option>
                <option value="Logistics">Logistics & Transport</option>
                <option value="Beauty">Beauty & Personal Care</option>
                <option value="Education">Education & Training</option>
                <option value="Construction">Construction</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media">Media & Entertainment</option>
                <option value="Finance">Finance & Consultancy</option>
                <option value="Handicrafts">Handicrafts & Art</option>
                <option value="Automobile">Automobile Services</option>
                <option value="Cleaning">Cleaning & Laundry</option>
                <option value="Event">Event Planning</option>
                <option value="Printing">Printing & Publishing</option>
                <option value="Other">Other</option>
              </select>

              {/* Chevron Icon */}
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                ▼
              </span>
            </div>
          </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Business Location
              </label>
              <input
                type="text"
                placeholder="Jos, Plateau State"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={handleGetLocation}
                className="mt-2 text-emerald-600 text-sm hover:underline"
              >
                📍 Use current location
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePrevious}
                className="w-1/2 mr-2 py-3 rounded-md font-medium text-sm md:text-base bg-gray-200 hover:bg-gray-300 text-black transition"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-1/2 ml-2 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
