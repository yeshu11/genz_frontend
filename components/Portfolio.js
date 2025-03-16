"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "E-Commerce Platform", details: "A modern online shopping experience.", testimonial: "Best e-commerce site I've used!" },
  { name: "SaaS Application", details: "Cloud-based software for businesses.", testimonial: "Transformed our business operations!" },
  { name: "Mobile App", details: "Seamless experience on iOS and Android.", testimonial: "User-friendly and feature-rich!" }
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-72 p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelected(project)}
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-300 mt-2">{project.details}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="mt-8 p-6 bg-white text-gray-900 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h3 className="text-xl font-semibold">Client Testimonial</h3>
          <p className="italic mt-2">"{selected.testimonial}"</p>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
