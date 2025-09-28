"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ReviewCard from "../service/ReviewCard";
import ProductSection from "./ProductSection/page";

const ProductDetail = ({ product, reviews, similarProducts }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const shuffleAndPick = () => {
      const shuffled = [...similarProducts].sort(() => Math.random() - 0.5);
      setVisibleProducts(shuffled.slice(0, 4));
    };

    shuffleAndPick(); // initial load
    const interval = setInterval(shuffleAndPick, 3000);
    return () => clearInterval(interval);
  }, [similarProducts]);

  return (
    <main className='max-w-[1440px] mx-auto bg-[#FAFAFA]'>
      {/* Header */}
      <section className='flex gap-[10px] my-[20px] items-center'>
        <div className='border-2 border-black rounded-full w-fit h-fit p-3'>
          <Icon icon='qlementine-icons:arrow-left-16' />
        </div>
        <h1>Services</h1>
      </section>

      {/* Product Section */}
      <section className='flex bg-white rounded-[24px] py-[30px] px-[20px]'>
        {/* Left: Images */}
        <section className='flex-1/2'>
          <Image
            src={product.image}
            alt={product.name}
            width={573}
            height={804}
            className='rounded-[24px] mb-[32px]'
          />
        </section>

        {/* Right: Details */}
        <section className='flex-1/2'>
          <h1 className='text-[40px] font-normal'>{product.name}</h1>
          <div className='flex justify-between items-center'>
            <p className='text-[33px] font-normal'>₦{product.price}</p>
            <div className='flex items-center gap-[4px]'>
              <Icon
                icon='mynaui:star-solid'
                className='text-[#E6D806] w-[19px] h-[19px]'
              />
              <p className='text-[18px] font-medium'>{product.rating}</p>
            </div>
          </div>

          {/* Description */}
          <h1 className='text-[28px] font-normal mt-[28px]'>Description:</h1>
          <p className='text-[#4C4C4C] text-[23px] font-normal mt-[8px]'>
            {product.description}
          </p>

          {/* Contact Buttons */}
          <section className='flex flex-col gap-[24px] my-[44px]'>
            <button className='bg-[#1CAB95] rounded-[8px] text-white w-[614px] h-[56px] flex items-center justify-center gap-2'>
              <Icon icon='meteor-icons:whatsapp' />
              Message Vendor
              <Icon icon='fluent-mdl2:arrow-up-right' />
            </button>
            <button className='border border-[#1CAB95] text-[#1CAB95] rounded-[8px] w-[614px] h-[56px] flex items-center justify-center gap-2'>
              <Icon icon='heroicons-outline:phone' />
              Call Vendor
              <Icon icon='fluent-mdl2:arrow-up-right' />
            </button>
          </section>

          {/* Reviews */}
          <h1 className='text-[23px] font-normal'>Review</h1>
          <div className='flex gap-[15px] my-[12px]'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                icon='solar:star-line-duotone'
                className='w-[20px] h-[20px]'
              />
            ))}
          </div>
          {reviews.map((r, i) => (
            <ReviewCard
              key={i}
              name={r.name}
              image={r.image}
              rating={r.rating}
              review={r.review}
            />
          ))}
        </section>
      </section>

      {/* Similar Products */}
      <section className='my-[32px]'>
        <ProductSection title='Similar Products' products={visibleProducts} />
      </section>
    </main>
  );
};

export default ProductDetail;
