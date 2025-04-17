"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import '@/styles/Loader.css';

// Custom Loading Component
export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if we're on the client
  const pathname = usePathname();
  const formatPathname = (path) => {
    if (path === "/") return "Home Page";
    return path
      .replace("/", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const loadingText = formatPathname(pathname);
  console.log(loadingText)

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setLoading(true);
      setAnimateOut(false);
      setContentVisible(false);

      const loaderTimeout = setTimeout(() => {
        setAnimateOut(true);

        setTimeout(() => {
          setLoading(false);
          setContentVisible(true);
        }, 1000);
      }, 1500);

      return () => clearTimeout(loaderTimeout);
    }
  }, [pathname, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full overflow-auto">
      {/* Loader */}
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#1a1919] text-white z-[999] transition-all duration-1000 ${animateOut ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
          <div className="lg:text-5xl md:text-2xl text-lg font-thin uppercase tracking-[20px] flex text-white">
            {loadingText.split("").map((char, index) => (
              <span
                key={index}
                className="opacity-0 loading-animation"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      <div
        className={`transition-opacity duration-1000 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {children}
      </div>
    </div>
  );
}
