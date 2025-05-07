"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Portfolio from "@/components/Portfolio";
import WeServe from "@/components/WeServe";
import Testimonials from "@/components/Testimonials";
import Hero3DModel from "@/components/Hero3DModel";
import AboutUs from "../components/AboutUs";
import Services from "@/components/Services";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY) {
            setScrollDirection("down");
          } else {
            setScrollDirection("up");
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar className={scrollDirection === "down" ? "hidden" : "block"} />

      {/* Hero Section */}
      <div className="relative text-black h-[100vh] flex flex-row items-center justify-between bg-custom-gradient px-4 sm:px-6 lg:px-10 hero-section">
        <div className="w-full sm:w-3/5 lg:w-2/5 z-10">
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Empowering Businesses with Cutting-Edge IT Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            We bridge the gap between technology and business, delivering innovative solutions that drive growth, efficiency, and success.
          </motion.p>
        </div>

        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[750px] lg:h-[750px] flex-shrink-0 lg:self-end">
          <Hero3DModel />
        </div>
      </div>

      <Services />
      <WeServe />
      <Portfolio />
      <Testimonials />
      <AboutUs />
    </>
  );
}