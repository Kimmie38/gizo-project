"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ import router
import wall from "../../../../public/wall.png"; // ✅ same background

export default function Login() {
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault(); // prevent form reload
    router.push("/signIN/Details"); // ✅ navigate to login
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
        <div className="relative z-10 text-center mt-40 md:mt-0 mb-8 md:mb-12 max-w-md px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">How it works</h2>
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
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-4 sm:px-6 md:px-8 py-12 md:py-0">
          <h1 className="text-3xl font-bold text-center mb-2 text-black">
            Login
          </h1>
          <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
            Welcome back, sign into your account
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleNext}>
            {/* <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            /> */}
            <input
              type="email"
              placeholder="Email"
              className="w-[450px] px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[450px] px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {/* <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-transparent text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            /> */}

            <button
              type="submit"
              className="w-[450px] mt-6 py-3 rounded-xl font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition"
            >
              Next
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="px-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/signIN/signup" className="text-emerald-400 hover:underline">
              Sign In
            </a>
          </p>


          {/* Google Signup */}
          <button className="w-[450px] mt-4 flex items-center justify-center border border-gray-600 py-3 rounded-xl hover:bg-gray-800 transition text-sm md:text-base text-black">
            <Image
              src="/icons/google.png" // ✅ from public/icons
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
