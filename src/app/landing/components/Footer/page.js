// app/components/Footer.js
"use client";

import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Restaurants", href: "#" },
      { name: "Hotels", href: "#" },
      { name: "Automotives", href: "#" },
      { name: "Contractors", href: "#" },
      { name: "Pharmacies", href: "#" },
      { name: "Hospitals and clinics", href: "#" },
      { name: "Shopping", href: "#" },
      { name: "Legal", href: "#" },
    ],
  },
  {
    title: "Users",
    links: [
      { name: "Add business", href: "#" },
      { name: "Remove business", href: "#" },
      { name: "Sign up", href: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Sign up", href: "#" },
      { name: "Locations", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#27312E] text-gray-300 py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
