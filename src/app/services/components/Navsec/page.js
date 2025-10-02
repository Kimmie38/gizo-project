
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const mockCarouselItems = [
  {
    id: 1,
    image: "/images/sewing.png",
    headline: "KASUWAN GIZO",
    subtext: "RENDER A SERVICE OR SELL PRODUCTS WE'VE GOT YOU!!",
  },
  {
    id: 2,
    image: "/images/customer.png",
    headline: "KASUWAN GIZO",
    subtext: "RENDER A SERVICE OR SELL PRODUCTS WE'VE GOT YOU!!",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockCarouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? mockCarouselItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mockCarouselItems.length);
  };

  return (
    <div className='min-h-screen bg-[#FAFAFA]  '>
      <nav className='flex items-center justify-between px-6 py-4  shadow-sm'>
        <div className='flex items-center gap-2'>
          <span className='text-2xl text-green-600 font-bold'>⦿</span>
          <span className='text-[#282B31] font-medium text-[18px] leading-[20px]'>
            Kasuwan Gizo
          </span>
        </div>
        <div className='flex items-center gap-3 flex-1 max-w-2xl ml-6  p-[16px]'>
          <select className=' rounded-[8px] px-3 py-2 text-sm text-[#000000] focus:outline-none'>
            <option className=' rounded-[8px] bg-red-600 p-[16px] w-[150px]'>
              All Nigeria
            </option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Kano</option>
          </select>

          <div className='flex items-center flex-1 border  rounded-[8px] px-2 py-2 bg-[#FFF] w-[522px] h-[56px] text-[#555555] font-medium'>
            <Icon icon='iconoir:search' className='h-5 w-5 text-gray-500' />
            <input
              type='text'
              placeholder='Search Product'
              className='flex-1 bg-transparent outline-none px-2 text-sm'
            />
          </div>

          <button className='flex items-center gap-1 border rounded-lg px-3 py-2 text-sm text-gray-600'>
            <Icon icon='solar:alt-arrow-down-linear' className='h-4 w-4' />
            Filters
          </button>
        </div>
        <div className='ml-6'>
          <Icon
            icon='ant-design:shopping-outlined'
            className='h-6 w-6 text-gray-700'
          />
        </div>
      </nav>
      <section className='mt-6 px-6'>
        <div className='relative w-full h-64 md:h-96 rounded-xl overflow-hidden'>
          <Image
            src={
              mockCarouselItems[activeIndex]?.image || "/images/fallback.jpg"
            }
            alt={mockCarouselItems[activeIndex]?.headline || "Carousel image"}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4'>
            <h1 className='text-2xl md:text-4xl font-bold mb-2'>
              {mockCarouselItems[activeIndex]?.headline}
            </h1>
            <p className='text-lg md:text-xl font-semibold'>
              RENDER A <span className='text-[#28F5BC]'>SERVICE</span> OR SELL{" "}
              <span className='text-[#28F5BC]'>PRODUCTS</span> We&apos;ve got you!!
            </p>
          </div>
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full'
          >
            <Icon icon='mdi:chevron-left' className='h-6 w-6' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full'
          >
            <Icon icon='ant-design:shopping-outlined' className='h-6 w-6' />
          </button>
        </div>
        <div className='flex justify-center mt-3 space-x-2'>
          {mockCarouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
