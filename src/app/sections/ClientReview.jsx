"use client";
import image1 from "@/assets/review/1.jpg";
import image2 from "@/assets/review/2.jpg";
import image3 from "@/assets/review/3.png";
import image4 from "@/assets/review/4.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    id: 1,
    clientName: "Another Das Sourob",
    clientImage: image1,
    review:
      "HexTech transformed our business with their cutting-edge software solutions. Their team was highly responsive, professional, and dedicated to delivering exactly what we needed. Highly recommended.",
    role: "Founder, Director, CEO at varietybd.com",
  },
  {
    id: 2,
    clientName: "Ikthiar Ahmed Khan",
    clientImage: image2,
    review:
      "We've been working with HexTech for over a year, and their software has significantly improved our efficiency. Their scalable solutions and proactive support set them apart from the competition.",
    role: "Founder, Director, CEO at Fluxtechstudio",
  },
  {
    id: 3,
    clientName: "Akib Al Mahi",
    clientImage: image3,
    review:
      "HexTech took the time to understand our challenges and delivered a tailored software solution that streamlined our processes. Their attention to detail and commitment to quality are outstanding!",
    role: "Founder  at Hatherkache",
  },
  {
    id: 4,
    clientName: " Saiful Islam",
    clientImage: image4,
    review:
      "The user interface of this page done is so intuitive, I was able to start using it without any guidance.",
    role: "CEO",
  },
];
const ClientReview = () => {
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
    <section className="bg-Custom_bg lg:mt-32 mt-10">
      <div className="container lg:flex mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="text-center lg:p-12 text-white"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <span className="text-sm  font-medium block text-left mb-4">
            Testimonial
          </span>
          <h1 className="text-4xl font-bold  leading-tight text-left mb-16">
            200+ Customers gave their
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 to-gray-200">
              {" "}
              Feedback
            </span>
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

        <div
          className="mt-5 lg:w-[60%] mx-auto p-10 border border-gray-300 rounded-2xl shadow-lg"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <Swiper {...swiperConfig}>
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="group bg-white p-6 rounded-2xl border border-gray-300 hover:border-black transition-all duration-500"
              >
                <div
                  className="flex items-center gap-4 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="2500"
                >
                  <Image
                    height={48}
                    width={48}
                    className="rounded-full object-cover"
                    src={review.clientImage}
                    alt={review.clientName}
                  />
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      {review.clientName}
                    </h2>
                    <span className="text-sm text-gray-500">{review.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 leading-6">
                  {review.review}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
