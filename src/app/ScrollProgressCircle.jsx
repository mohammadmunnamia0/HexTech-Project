"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressCircle() {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Circle size and progress calculation
    const radius = 40; // Circle size
    const circumference = 2 * Math.PI * radius; // Full circumference
    const offset = circumference - (scrollProgress / 100) * circumference; // Offset for progress

    return (
        <div className="fixed bottom-[100px] right-5 z-50">
            <svg width="70" height="70" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="2"
                    fill="#808080"
                />

                {/* Progress Circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#000000" 
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)" 
                    className="transition-all duration-1000 ease-out"
                />

                {/* Percentage Text */}
                <text className="font-thin" x="50" y="58" textAnchor="middle" fontSize="24" fill="#ffffff">
                    {Math.round(scrollProgress)}%
                </text>
            </svg>
        </div>
    );
};

