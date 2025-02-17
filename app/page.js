"use client"; // Enables animations

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
        className="text-white h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 via-purple-800 to-black relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <motion.h1 
            className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Gen <span className="inline-block text-6xl text-blue-500 animate-bounce">Z</span> Developer
          </motion.h1>
        </main>
      </motion.div>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {["Web Development", "App Development", "Consulting"].map((service, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-6 rounded-lg shadow-lg text-gray-900 hover:scale-105 transform transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p>We provide high-quality {service.toLowerCase()} tailored for businesses.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hiring Section */}
      <motion.section 
        id="hiring" 
        className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Submit Your Resume</h3>
            <form>
              <input type="text" placeholder="Your Name" className="mb-4 w-full p-2 border rounded-lg" />
              <input type="email" placeholder="Your Email" className="mb-4 w-full p-2 border rounded-lg" />
              <input type="file" className="mb-4 w-full p-2 border rounded-lg" />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Careers Section */}
      <motion.section 
        id="careers" 
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Explore Job Openings</h2>
          <p className="mb-4 text-gray-300">We are hiring! Check out the available job opportunities.</p>
          <a href="/careers" target="_blank">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              View Openings
            </button>
          </a>
        </div>
      </motion.section>

      {/* Payment Section */}
      <motion.section 
        id="payment" 
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Payment</h2>
          <p className="mb-4">Make a secure payment for our services.</p>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
            Proceed to Payment
          </button>
        </div>
      </motion.section>
    </>
  );
}
