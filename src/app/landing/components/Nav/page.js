import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">⌕</span>
        <span className="font-semibold .viga-regular text-[#282B31]">Company name</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/cart">Cart</Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
         <Link href="/signIN/login">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Sign In
        </button>
        </Link>
        <Link href="/signIN/signup">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
