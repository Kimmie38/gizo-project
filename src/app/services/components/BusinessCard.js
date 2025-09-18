// // components/BusinessCard.jsx
// import React from "react";
// import Image from "next/image";

// export default function BusinessCard({ logo, name, description, location }) {
//   return (
//     <div className='bg-white shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300'>
//       {/* Logo */}
//       <div className='flex justify-center'>
//         <div className='w-16 h-16 rounded-full overflow-hidden'>
//           <Image src={logo} alt={name} width={64} height={64} />
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className='mt-4 flex flex-col flex-grow'>
//         <h3 className='text-sm font-semibold text-gray-900'>{name}</h3>
//         <p className='text-xs text-gray-500 mt-2 line-clamp-3'>{description}</p>
//       </div>

//       {/* Location */}
//       <p className='text-xs text-gray-400 mt-2'>{location}</p>

//       {/* Button */}
//       <button className='mt-3 bg-emerald-100 text-emerald-700 font-medium text-xs py-2 px-3 rounded-lg w-full hover:bg-emerald-200'>
//         View More
//       </button>
//     </div>
//   );
// }

// ------------------------------------------''''=========================
// components/BusinessSection.jsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// function BusinessCard({ logo, name, description, location }) {
//   if (!name) return null;

//   return (
//     <div className="rounded-xl shadow-sm overflow-hidden flex flex-col w-full p-4">
//       {/* Logo */}
//       {logo && (
//         <div className="flex justify-center">
//           <div className="w-16 h-16 rounded-full overflow-hidden">
//             <Image src={logo} alt={name} width={64} height={64} />
//           </div>
//         </div>
//       )}

//       {/* Text Content */}
//       <div className="mt-4 flex flex-col flex-grow">
//         <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
//         <p className="text-xs text-gray-500 mt-2 line-clamp-3">{description}</p>
//       </div>

//       {/* Location */}
//       <p className="text-xs text-gray-400 mt-2">{location}</p>
//     </div>
//   );
// }

// export default function BusinessSection({ title, businesses = [] }) {
//   const [visibleBusinesses, setVisibleBusinesses] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

//   useEffect(() => {
//     if (!Array.isArray(businesses) || businesses.length === 0) return;

//     const shuffled = shuffleArray(businesses);
//     setVisibleBusinesses(shuffled.slice(0, 4));

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const nextIndex = (prev + 4) % shuffled.length;
//         setVisibleBusinesses(shuffled.slice(nextIndex, nextIndex + 4));
//         return nextIndex;
//       });
//     }, 2000); // rotate every 2 secs

//     return () => clearInterval(interval);
//   }, [businesses]);

//   return (
//     <section className="bg-white rounded-2xl shadow p-4 mb-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold text-gray-800">{title}</h2>
//         <Link href="/businesses" className="text-sm text-green-600 font-medium">
//           See more
//         </Link>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {visibleBusinesses.length > 0 ? (
//           visibleBusinesses.map((biz, index) => (
//             <BusinessCard
//               key={`${biz?.id ?? "no-id"}-${index}`}
//               logo={biz.logo}
//               name={biz.name}
//               description={biz.description}
//               location={biz.location}
//             />
//           ))
//         ) : (
//           <p className="text-gray-500 text-sm">No businesses available</p>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star, MapPin } from "lucide-react";

function BusinessCard({ logo, name, description, location, rating, reviews, price }) {
  if (!name) return null;

  return (
    <div className="mb-10 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col w-full">
      {/* Logo / Business Image */}
      <div className="relative w-full h-40">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Business Details */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span>
            {rating ?? "4.7"} ({reviews ?? "100"})
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center text-xs text-gray-400 mt-1">
          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
          {location}
        </div>

        {/* Price */}
        {price && (
          <p className="text-base font-semibold text-gray-900 mt-2">
            
          </p>
        )}

        {/* Button */}
        <button className="mt-auto bg-green-100 text-[#158070] rounded-lg py-2 text-sm font-medium hover:bg-green-200 transition">
          View More →
        </button>
      </div>
    </div>
  );
}

export default function BusinessSection({ title, businesses = [] }) {
  const [visibleBusinesses, setVisibleBusinesses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (!Array.isArray(businesses) || businesses.length === 0) return;

    const shuffled = shuffleArray(businesses);
    setVisibleBusinesses(shuffled.slice(0, 4));

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 4) % shuffled.length;
        setVisibleBusinesses(shuffled.slice(nextIndex, nextIndex + 4));
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [businesses]);

  return (
    <section className="bg-white rounded-2xl shadow p-4 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <Link href="/businesses" className="text-sm text-green-600 font-medium">
          See more
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleBusinesses.length > 0 ? (
          visibleBusinesses.map((biz, index) => (
            <BusinessCard
              key={`${biz?.id ?? "no-id"}-${index}`}
              logo={biz.logo}
              name={biz.name}
              description={biz.description}
              location={biz.location}
              rating={biz.rating}
              reviews={biz.reviews}
              price={biz.price}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No businesses available</p>
        )}
      </div>
    </section>
  );
}
