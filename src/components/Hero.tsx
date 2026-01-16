import { motion } from "motion/react";
import logo from "figma:asset/8ce4abfabd4ed711b3433795634c7599a8677fdd.png";
import heroBackground from "figma:asset/15cd67fadb8fd6f1b6a401fab718e39ddc3a775d.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Armani Hallson KLCC"
          className="w-full h-full object-cover hero-bg-responsive"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-transparent"></div>
        {/* Animated golden particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-30"></div>
          <div
            className="absolute top-1/2 right-1/3 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-20"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-25"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 max-w-7xl mx-auto pt-20 md:pt-0">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={logo}
            alt="Armani Hallson KLCC"
            className="w-48 md:w-64 lg:w-80 mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}