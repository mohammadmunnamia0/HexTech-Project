"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div>
      {/* Animated Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] overflow-hidden"
      >
        <div className="absolute inset-0 animate-gradient-bg bg-[length:400%_400%] bg-gradient-to-r from-gray-700 via-white to-black"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-54073.jpg?t=st=1742110286~exp=1742113886~hmac=f6e55b2ef651fec312ea3bcd8215fd7ac097fe56ba952773966b6af8dee59cb0&w=1380')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-white text-center"
          >
            Get in Touch
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}
