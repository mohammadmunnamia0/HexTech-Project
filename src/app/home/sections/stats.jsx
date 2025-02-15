"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, showPlus = false }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const duration = 3000; // 3 seconds
      const increment = Math.ceil(value / (duration / 16));
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 16);
  
      return () => clearInterval(interval);
    }, [value]);
  
    return <span>{count.toLocaleString()}{showPlus ? "+" : ""}</span>;
  };
  

const Stats = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
        <div className="absolute h-60 w-60 rounded-2xl border-4 border-gray-600"></div>
        <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-gray-600"></div>
        <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-gray-600"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
            We are <br className="sm:hidden" />
            growing rapidly
          </h2>
          <hr className="mt-4 h-1.5 w-32 border-none bg-gray-600 sm:mx-auto sm:mt-8" />
        </div>

        <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-gray-600">
              <AnimatedNumber value={250} showPlus={true} />
            </p>
            <p className="relative mt-5 text-gray-600">
              Users worldwide trust us
            </p>
          </div>

          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-gray-600">
              <AnimatedNumber value={101} showPlus={true} />
            </p>
            <p className="relative mt-5 text-gray-600">
              Business growth rate this year
            </p>
          </div>

          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-gray-600">
              <AnimatedNumber value={85} showPlus={true} />
            </p>
            <p className="relative mt-5 text-gray-600">
              Successful projects completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
