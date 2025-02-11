import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import LenisSmoothScroll from './LenisSmoothScroll';
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Return hex",
  description: "Return Hex is a software company specializing in cutting-edge technology solutions. They provide innovative software development, AI, and cloud services to businesses worldwide",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Loading>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisSmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </Loading>
    </html>

  );
}

export default RootLayout