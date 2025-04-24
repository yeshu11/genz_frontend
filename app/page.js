"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Portfolio from "@/components/Portfolio";
import WeServe from "@/components/WeServe";
import Testimonials from "@/components/Testimonials";
import Hero3DModel from "@/components/Hero3DModel";
import Tilt from "react-parallax-tilt";
import AboutUs from "../components/AboutUs";
import Services from "@/components/Services";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar className={scrollDirection === "down" ? "hidden" : "block"} />

      {/* Hero Section */}
      <motion.div
        className="relative text-black h-[105vh] flex flex-row items-center justify-between bg-custom-gradient px-4 sm:px-6 lg:px-10 hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full sm:w-3/5 lg:w-2/5 z-10">
          {/* Laptop Text */}
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-6xl font-extrabold text-white leading-tight hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses
            <br />
            with Cutting-Edge IT Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We bridge the gap between technology
            <br />
            and business, delivering innovative
            <br />
            solutions that drive growth, efficiency,
            <br />
            and success.
          </motion.p>

          {/* Tablet Text */}
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight hidden sm:block lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses
            <br />
            with Cutting-Edge<br /> IT Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed hidden sm:block lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We bridge the gap
            <br />
            between technology and business,
            <br />
            delivering innovative solutions <br /> that drive growth, efficiency,
            <br />
            and success.
          </motion.p>

          {/* Mobile Text */}
          <motion.h1
ក
            className="text-2xl sm:text-4xl lg:text-9xl font-extrabold text-white leading-tight block sm:hidden"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             Empowering Businesses with 
              <br />
              IT Solutions
            </motion.h1>
            <motion.p className="mt-1 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed block sm:hidden">
              We bridge the gap
              between technology<br />&
              business, delivering innovative
              solutions.
          </motion.p>
        </div>

        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[750px] lg:h-[750px] flex-shrink-0 lg:self-end">
          <Hero3DModel />
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <Services />

      {/* Portfolio Section */}
      <WeServe />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Us Section */}
      <AboutUs />
    </>
  );
}