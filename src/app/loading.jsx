"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Custom Loading Component
export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're on the client
  const pathname = usePathname();


  useEffect(() => {
    setIsClient(true); // Make sure we only run client-side logic after hydration
  }, []);


  useEffect(() => {
    if (isClient) {
      // Reset states properly without overriding the animation
      setLoading(true);
      setAnimateOut(false);
      setContentVisible(false);


      const loaderTimeout = setTimeout(() => {
        setAnimateOut(true); // Start fade-out animation


        setTimeout(() => {
          setLoading(false); // Fully remove loader
          setContentVisible(true); // Show content
        }, 1000); // Exit animation duration (matches the transition time)
      }, 1500); // Default loading duration


      return () => clearTimeout(loaderTimeout);
    }
  }, [pathname, isClient]); // Runs every time the path changes (after hydration)


  if (!isClient) {
    return null; // Return null during SSR to avoid hydration mismatch
  }


  return (
    <div className="relative w-full overflow-auto">
      {" "}
      {/* Ensure scroll is possible here */}
      {/* Loader */}
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] text-white z-[1000] transition-all duration-1000 ${
            animateOut
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div className="loader-container">
            <div className="body">
              <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="base">
                <span></span>
                <div className="face"></div>
              </div>
            </div>
            <div className="longfazers">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mt-28 loading"></div>
          </div>
        </div>
      )}
      {/* Page Content */}
      <div
        className={`transition-opacity duration-1000 ${
          contentVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
