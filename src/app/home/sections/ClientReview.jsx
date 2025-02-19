"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import image1 from "@/assets/review/1.jpg";
import image2 from "@/assets/review/2.jpg";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';


const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            clientName: "Rakib",
            clientImage: image1,
            review: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
            role: "Product Designer"
        },
        {
            id: 2,
            clientName: "Tonmoy",
            clientImage: image2,
            review: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            role: "CEO"
        },
        {
            id: 3,
            clientName: "Linkon",
            clientImage: image1,
            review: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            role: "CEO"
        },
        {
            id: 4,
            clientName: "Munna",
            clientImage: image2,
            review: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            role: "CEO"
        },
        {
            id: 5,
            clientName: "Fahim",
            clientImage: image1,
            review: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            role: "CEO"
        }
    ];

    const swiperConfig = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true },
        navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
        modules: [Pagination, Navigation, Autoplay],
        className: "mySwiper",
    };

    return (
        <section className="bg-black lg:mt-32 mt-10">
            <div className="container lg:flex mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="text-center lg:p-12 text-white">
                    <span className="text-sm  font-medium block text-left mb-4">Testimonial</span>
                    <h1 className="text-4xl font-bold  leading-tight text-left mb-16">
                        23k+ Customers gave their
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 to-gray-200"> Feedback</span>
                    </h1>
                    <div className="flex gap-6 mt-6">
                        <button className="swiper-button-prev-custom flex justify-center items-center border border-white w-10 h-10 rounded-lg hover:bg-white hover:border-none hover:text-black">
                            ←
                        </button>
                        <button className="swiper-button-next-custom flex justify-center items-center border border-white w-10 h-10 rounded-lg hover:bg-white hover:border-none hover:text-black">
                            →
                        </button>
                    </div>
                </div>

                <div className="mt-5 lg:w-[60%] mx-auto p-10 border border-gray-300 rounded-2xl shadow-lg">
                    <Swiper {...swiperConfig}>
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id} className="group bg-white p-6 rounded-2xl border border-gray-300 hover:border-black transition-all duration-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image height={48} width={48} className="rounded-full object-cover" src={review.clientImage} alt={review.clientName} />
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">{review.clientName}</h2>
                                        <span className="text-sm text-gray-500">{review.role}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-4 text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="w-5 h-5" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 leading-6">{review.review}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ClientReview;
