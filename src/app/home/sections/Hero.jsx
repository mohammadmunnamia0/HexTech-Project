'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import office1 from '@/assets/Hero/office.jpg';
import office2 from '@/assets/Hero/office2.jpg';
import office3 from '@/assets/Hero/office3.jpg';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Crafting Digital Excellence',
    subtitle: 'We transform complex challenges into elegant solutions.',
    background: office1,
  },
  {
    id: 2,
    title: 'Innovation Meets Design',
    subtitle: "Building tomorrow's digital experiences today.",
    background: office2,
  },
  {
    id: 3,
    title: 'Elevating Your Vision',
    subtitle: 'Where creativity meets technical expertise.',
    background: office3,
  }
];



export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-[100vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="w-full h-full hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
                 {/* Background Image */}
                 <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.background}
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                priority
                className="transition-all duration-[1.5s] scale-110 group-[.swiper-slide-active]:scale-100"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 overflow-hidden">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white opacity-0 translate-y-8 animate-[slideUp_1s_ease-out_0.5s_forwards] tracking-tight">
                    {slide.title}
                  </h1>
                </div>
                <div className="overflow-hidden mb-12">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 opacity-0 translate-y-8 animate-[slideUp_1s_ease-out_0.7s_forwards] font-light">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="opacity-0 translate-y-8 animate-[slideUp_1s_ease-out_0.9s_forwards] space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/about" class="relative inline-flex items-center justify-center px-8 overflow-hidden  font-medium  text-white bg-gray-800  group min-w-[200px]">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1  opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative text-lg px-8 py-3">About Us</span>
                  </Link>
                  <Link href="/HireUS" class="relative px-8 py-4 overflow-hidden font-medium text-gray-600 bg-gray-100  border-gray-100  shadow-inner group min-w-[200px]">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-black  opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease px-8 py-3 text-lg">Hire Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}