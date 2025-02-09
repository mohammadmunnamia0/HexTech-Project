"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ClientReview = () => {
    const reviews = [
        {
            "id": 1,
            "clientName": "Rakib",
            "clientImage": "https://randomuser.me/api/portraits/men/1.jpg",
            "review": "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
            "role": "Product Designer"
        },
        {
            "id": 2,
            "clientName": "Tonmoy",
            "clientImage": "https://randomuser.me/api/portraits/women/2.jpg",
            "review": "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            "role": "CEO"
        },
        {
            "id": 3,
            "clientName": "Linkon",
            "clientImage": "https://randomuser.me/api/portraits/women/2.jpg",
            "review": "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            "role": "CEO"
        },
        {
            "id": 4,
            "clientName": "Munna",
            "clientImage": "https://randomuser.me/api/portraits/women/2.jpg",
            "review": "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            "role": "CEO"
        },
        {
            "id": 5,
            "clientName": "Fahim",
            "clientImage": "https://randomuser.me/api/portraits/women/2.jpg",
            "review": "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
            "role": "CEO"
        }
    ];

    return (
        <section className="container lg:flex mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:p-12">
                <span className="text-sm text-gray-500 font-medium block text-left mb-4">Testimonial</span>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight text-left mb-16">
                    23k+ Customers gave their
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 to-gray-200"> Feedback</span>
                </h2>
                <div className="flex gap-6 mt-6">
                    <button className="swiper-button-prev-custom flex justify-center items-center border border-gray-600 w-10 h-10 rounded-lg hover:bg-black hover:text-white">
                        ←
                    </button>
                    <button className="swiper-button-next-custom flex justify-center items-center border border-gray-600 w-10 h-10 rounded-lg hover:bg-black hover:text-white">
                        →
                    </button>
                </div>
            </div>

            <div className="mt-5 lg:w-[60%] mx-auto p-10 border border-gray-300 rounded-2xl shadow-lg">
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    loop={true}
                    breakpoints={{
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
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="group bg-white p-6 rounded-2xl border border-gray-300 hover:border-black transition-all duration-500">
                            <div className="flex items-center gap-4 mb-4">
                                <img className="w-12 h-12 rounded-full object-cover" src={review.clientImage} alt={review.clientName} />
                                <div>
                                    <h5 className="text-lg font-medium text-gray-900">{review.clientName}</h5>
                                    <span className="text-sm text-gray-500">{review.role}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mb-4 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.103 1.317c.367-.743 1.427-.743 1.794 0l1.81 3.667a1 1 0 00.753.547l4.046.588c.82.12 1.147 1.128.553 1.707l-2.928 2.854a1 1 0 00-.286.885l.691 4.03c.14.817-.717 1.44-1.451 1.055l-3.619-1.902a1 1 0 00-.932 0L4.092 16.43c-.734.385-1.59-.238-1.451-1.055l.691-4.03a1 1 0 00-.286-.885L.117 7.606c-.594-.579-.267-1.587.553-1.707l4.046-.588a1 1 0 00.753-.547l1.81-3.667z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 leading-6">{review.review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ClientReview;
