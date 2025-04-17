"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init();
  });
  return <section>{children}</section>;
};

export default AOSProvider;