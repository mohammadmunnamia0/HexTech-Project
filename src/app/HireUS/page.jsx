import WhyUs from "./WhyUs/WhyUs";
import HireUs from "./section/HireUs";

export default function HiringPage() {
  return (
    <section className="pt-28">
      {/* <div>
        <h1 className="text-center text-5xl font-serif">
          Best Platform to Get <br /> Your Dream Comes True{" "}
        </h1>
        <p className="text-center text-2xl p-16 font-serif ">
          More then 0 Successful Completed Projected
        </p>
      </div> */}
      <WhyUs></WhyUs>
      <HireUs />
    </section>
  );
}
