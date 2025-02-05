import Image from "next/image";
import bg from "@/assets/hero_bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[380px] md:h-[480px] lg:h-[600px] w-full">
      <Image src={bg} alt="Hero Background" fill className="object-cover" />
      <section className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <h1 className="max-w-2xl md:max-w-4xl px-3 text-3xl md:text-4xl lg:text-6xl font-bold text-center text-white">Innovative Software Solutions for Your Business</h1>
        <section className="flex justify-center items-center gap-5 md:gap-8 lg:gap-12 mt-10 md:mt-12 lg:mt-16">
          <button className="rounded-full bg-black text-white px-5 py-3 border border-black font-semibold lg:text-lg">Contact Us</button>
          <button className="rounded-full bg-white text-black px-5 py-3 border border-black font-semibold lg:text-lg">Our Services</button>
        </section>
      </section>
    </section>
  );
};

export default Hero;
