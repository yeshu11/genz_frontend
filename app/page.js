"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Portfolio from "@/components/Portfolio";
import WeServe from "@/components/WeServe";
import AboutUs from "@/components/AboutUs";
import Hero3DModel from "@/components/Hero3DModel";
import Tilt from "react-parallax-tilt";
import Testimonials from "@/components/Testimonials";

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
        className="relative text-black h-[105vh] flex justify-between items-center bg-custom-gradient px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full sm:w-2/5">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses with Cutting-Edge IT Solutions.
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We bridge the gap between technology and business, delivering innovative solutions that drive growth, efficiency, and success.
          </motion.p>
        </div>

        <div className="absolute bottom-0 right-0 w-[750px] h-[750px]">
          <Hero3DModel />
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 250"
            className="w-full h-[120px] md:h-[120px] lg:h-[160px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 C480,100 960,200 1440,160 L1440,250 L0,250 Z"
              fill="rgb(3, 7, 18)" 
            />
          </svg>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="relative bg-gray-950 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[
            { title: "Web Development", icon: "🌐" },
            { title: "App Development", icon: "📱" },
            { title: "Cloud Solutions", icon: "☁️" },
            { title: "UI/UX Design", icon: "🎨" }
          ].map((service, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.08}
              transitionSpeed={400}
              className="w-64"
            >
              <motion.div
                className="w-full p-[2px] rounded-[20px] shadow-lg border-2 border-green-500 border-b-purple-500 border-r-purple-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-900 rounded-[20px] py-6 px-8 min-h-[300px] flex flex-col justify-center items-center">
                  <div className="text-5xl">{service.icon}</div>
                  <h3 className="text-white text-xl font-semibold mt-4">{service.title}</h3>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Other Sections */}
      <Portfolio />
      <WeServe />
      <AboutUs />
    </>
  );
}
