"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const ClientReview = () => {
    const works = [
        {
            "id": 1,
            "clientName": "John Doe",
            "clientImage": "https://randomuser.me/api/portraits/men/1.jpg",
            "review": "Great experience working with this team! They delivered exactly what we needed for our website."
        },
        {
            "id": 2,
            "clientName": "Sarah Smith",
            "clientImage": "https://randomuser.me/api/portraits/women/2.jpg",
            "review": "Their mobile app development services exceeded our expectations. Highly recommend!"
        },
        {
            "id": 3,
            "clientName": "Michael Brown",
            "clientImage": "https://randomuser.me/api/portraits/men/3.jpg",
            "review": "Professional and skilled developers! Our eCommerce store turned out amazing."
        },
        {
            "id": 4,
            "clientName": "Emily White",
            "clientImage": "https://randomuser.me/api/portraits/women/4.jpg",
            "review": "Fantastic UI/UX design! The team really understood our vision."
        },
        {
            "id": 5,
            "clientName": "David Wilson",
            "clientImage": "https://randomuser.me/api/portraits/men/5.jpg",
            "review": "Reliable long-term maintenance service. Always available when needed!"
        }
    ]
        

    return (
        <section className="container mb-12">
            {/* Title + Subtitle */}
            <h2 className="title">What Our Clients Say</h2>
            <h4 className="subtitle">
                Hear from our satisfied clients about their experience working with us. <br />
                We take pride in delivering top-notch software solutions.
            </h4>
            {/* Our Works Slider */}
            <section className="mb-5">
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
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={work?.id}>
                            <article
                                className={`duration-300 h-full p-3 md:py-5 md:px-8 shadow-lg max-w-4xl mx-auto rounded-2xl cursor-pointer
                                  ${index % 2 === 0
                                        ? "border border-primary"
                                        : " bg-zinc-100"
                                    }`}
                            >
                                <img
                                    className="w-12 h-12 rounded-full object-cover mx-auto"
                                    src={work?.clientImage}
                                    alt={work?.title}
                                />
                                <h5 className="my-3 lg:my-5 text-center text-lg md:text-xl lg:text-2xl font-semibold">
                                    {work?.clientName}
                                </h5>
                                <p className="text-zinc-500 text-center">{work?.review}</p>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </section>
    );
};


export default ClientReview;
