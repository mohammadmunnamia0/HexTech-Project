"use client";

import { useEffect, useState } from "react";
import { FaTerminal } from "react-icons/fa";
import { FiArrowLeft, FiHexagon } from "react-icons/fi";

export default function NotFound() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [hexagons, setHexagons] = useState([]);

  useEffect(() => {
    const newHexagons = Array(20)
      .fill(null)
      .map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        rotate: Math.random() * 360,
        opacity: Math.random() * 100,
        pulse: Math.random() > 0.5,
      }));
    setHexagons(newHexagons);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex items-center justify-center relative">
      {/* Animated hex grid background */}
      <div
        className={`absolute inset-0 opacity-10 ${
          isGlitching ? "animate-pulse" : ""
        }`}
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        <div className="relative w-full h-full">
          {hexagons.map((hex, i) => (
            <FiHexagon
              key={i}
              className={`absolute w-24 h-24 transform ${
                hex.pulse ? "animate-pulse" : ""
              }`}
              style={{
                left: `${hex.left}%`,
                top: `${hex.top}%`,
                transform: `rotate(${hex.rotate}deg)`,
                opacity: hex.opacity / 100,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div>
          {/* Company logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <FiHexagon className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold ml-4">HexTech</h1>
          </div>

          {/* Error message */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="bg-red-500/10 rounded-2xl p-4">
                <FaTerminal className="w-8 h-8 text-red-500" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-red-500">
                  Error 404
                </h2>
                <p className="text-xl font-medium text-white/90">
                  Page Not Found
                </p>
                <p className="text-white/60 max-w-lg">
                  The requested resource could not be located on the server. It
                  might have been moved, deleted, or never existed.
                </p>
              </div>
            </div>

            {/* Terminal-like error details */}
            <div className="mt-8 bg-black/50 rounded-xl p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 text-white/60">
                <span className="text-red-500">→</span>
                <span>Error occurred at:</span>
                <span className="text-yellow-500">
                  {window.location.pathname}
                </span>
              </div>
              <div className="mt-2 text-white/40">
                Stack trace:
                <div className="ml-4 mt-1 space-y-1">
                  <div>at Router.resolve (router.ts:256:23)</div>
                  <div>at async Server.handle (server.ts:128:45)</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => window.history.back()}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                Go Back
              </button>
              <a
                href="/"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                Home Page
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-xl"></div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/40 text-sm">
          <p>© 2025 HexTech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
