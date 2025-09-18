"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function ProductSection({ title, products = [] }) {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (!Array.isArray(products) || products.length === 0) return;

    // Optional: shuffle products on first load
    const shuffled = shuffleArray(products);

    setVisibleProducts(shuffled.slice(0, 4));
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 4) % shuffled.length;
        setVisibleProducts(shuffled.slice(nextIndex, nextIndex + 4));
        return nextIndex;
      });
    }, 2000); // ⏱ rotate every 2 secs

    return () => clearInterval(interval);
  }, [products]);

  return (
    <section className='bg-white rounded-2xl shadow p-4 mb-6'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
        <Link href='/products' className='text-sm text-green-600 font-medium'>
          See more
        </Link>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product, index) => (
            <ProductCard
              key={`${product?.id ?? "no-id"}-${index}`}
              product={product}
            />
          ))
        ) : (
          <p className='text-gray-500 text-sm'>No products available</p>
        )}
      </div>
    </section>
  );
}
