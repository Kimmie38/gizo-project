"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 py-4 bg-white shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">⌕</span>
        <span className="font-semibold text-[#282B31]">Company name</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/cart">Cart</Link>
      </div>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex gap-3">
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden z-50">
          {/* Links */}
          <div className="flex flex-col gap-4 text-gray-700 w-full">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4 w-full">
            <Link href="/signIN/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Sign In
              </button>
            </Link>
            <Link href="/signIN/signup" onClick={() => setMenuOpen(false)}>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
