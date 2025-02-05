"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const OurWorks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch("/OurWorks.json")
            .then(res => res.json())
            .then(data => setWorks(data));
    }, []);

    return (
        <section className='container'>
            {/* Title + Subtitle */}
            <h2 className='title'>Our Software Company Works</h2>
            <h4 className='subtitle'>
                Return hex, a custom software development & consulting company focusing on web, mobile, desktop & embedded software development.
                It’s committed to meeting the highest ethical standards of work by implementing web & mobile solutions without compromising on quality & functionality.
            </h4>

            {/* Our Works Slider */}
            <section className='mb-5'>
                <Swiper
                    autoplay={{
                        delay: 3000, // 3 seconds per slide
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={work?.id}>
                            <article
                                className={`duration-300 h-full p-3 md:py-5 md:px-8 shadow-lg max-w-4xl mx-auto rounded-2xl cursor-pointer
                                    ${index % 2 === 0 ? "border border-primary" : " bg-zinc-100"}`}
                            >
                                <img
                                    className='w-12 h-12 rounded-full object-cover mx-auto'
                                    src={work?.logo}
                                    alt={work?.title}
                                />
                                <h5 className='my-3 lg:my-5 text-center text-lg md:text-xl lg:text-2xl font-semibold'>
                                    {work?.title}
                                </h5>
                                <p className='text-zinc-500'>{work?.description}</p>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </section>
    );
};

export default OurWorks;
