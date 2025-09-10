"use client";  
 // if using Next.js App Router
import React from "react";
import Image from "next/image";
import { Bookmark, Share2 } from "lucide-react"; // using lucide-react for icons

const stores = [
  {
    id: 1,
    name: "The Coffee Shack",
    address: "Address",
    logo: "/images/elipse.png", // put inside /public/images/
    preview: "/images/frame.png", // put inside /public/images/
    desc: "Description of the business and the services they offer. You can keep this fairly short.",
  },
  {
    id: 2,
    name: "The Coffee Shack",
    address: "Address",
    logo: "/images/elipse.png",
    preview: "/images/frame.png",
    desc: "Description of the business and the services they offer. You can keep this fairly short.",
  },
  {
    id: 3,
    name: "The Coffee Shack",
    address: "Address",
    logo: "/images/elipse.png",
    preview: "/images/frame.png",
    desc: "Description of the business and the services they offer. You can keep this fairly short.",
  },
  {
    id: 4,
    name: "The Coffee Shack",
    address: "Address",
    logo: "/images/elipse.png",
    preview: "/images/frame.png",
    desc: "Description of the business and the services they offer. You can keep this fairly short.",
  },
];

const FeaturedStores = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our featured stores</h2>
        <p className="text-gray-600">These are some of our stores</p>
      </div>

      {/* Store Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Store Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Image
                  src={store.logo}
                  alt={store.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {store.name}
                  </h3>
                  <p className="text-xs text-gray-500">{store.address}</p>
                </div>
              </div>
              <div className="flex gap-2 text-gray-500">
                <Bookmark className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                <Share2 className="w-4 h-4 cursor-pointer hover:text-gray-700" />
              </div>
            </div>

            {/* Preview Image */}
            <div className="relative w-full h-40 mb-3">
              <Image
                src={store.preview}
                alt={store.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600">{store.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStores;
