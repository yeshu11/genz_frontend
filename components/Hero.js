"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          The Future of Tech Innovation
        </motion.h1>

        {/* View Job Openings Button */}
        <div className="mt-6">
          <a
            href="/careers"
            target="careersTab"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Job Openings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
