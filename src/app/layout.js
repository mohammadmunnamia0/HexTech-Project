/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
import LenisSmoothScroll from "./LenisSmoothScroll";
import Loading from "./loading";
import ScrollProgressCircle from "./ScrollProgressCircle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HexTech",
  description:
    "Hex-Tech is a software company specializing in cutting-edge technology solutions. They provide innovative software development, AI, and cloud services to businesses worldwide",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"
        />
      </head>
      <Loading>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisSmoothScroll />
          <Navbar />
          <ScrollProgressCircle />
          <main>
            <Toaster richColors position="bottom-right" />
            {children}
          </main>
          <Footer />
        </body>
      </Loading>
    </html>
  );
};

export default RootLayout;
