"use client";
import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from "react-icons/fa";

const Technology = () => {
  const marqueeLeftRef = useRef(null);
  const marqueeRightRef = useRef(null);

  useEffect(() => {
    const animateMarquee = (element, direction) => {
      let position = direction === "left" ? -100 : 100;
      const step = direction === "left" ? 0.2 : -0.2;
      
      const move = () => {
        position += step;
        if (direction === "left" && position >= 100) position = -100;
        if (direction === "right" && position <= -100) position = 100;
        element.style.transform = `translateX(${position}%)`;
        requestAnimationFrame(move);
      };
      move();
    };

    if (marqueeLeftRef.current) {
      animateMarquee(marqueeLeftRef.current, "left");
    }
    if (marqueeRightRef.current) {
      animateMarquee(marqueeRightRef.current, "right");
    }
  }, []);

  return (
    <div className="relative w-full  text-white py-4 overflow-hidden">
      {/* Top Scrolling Line */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap">
        <div ref={marqueeLeftRef} className="inline-block">
          <span className="mx-4"><FaReact /> </span>
          <span className="mx-4"><FaNodeJs /> </span>
          <span className="mx-4"><FaDatabase /> </span>
         
        </div>
      </div>
      
      {/* Bottom Scrolling Line */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap">
        <div ref={marqueeRightRef} className="inline-block">
          <span className="mx-4"><FaDocker /> Docker</span>
          <span className="mx-4">TypeScript</span>
          <span className="mx-4">Kubernetes</span>
          <span className="mx-4"><FaAws /> AWS</span>
        </div>
      </div>
    </div>
  );
};

export default Technology;