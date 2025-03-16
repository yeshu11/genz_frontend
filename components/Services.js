"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Web Development", description: "Custom websites with modern technologies.", icon: "🌐" },
  { title: "App Development", description: "Mobile applications for Android & iOS.", icon: "📱" },
  { title: "Cloud Solutions", description: "Cloud-based infrastructure and services.", icon: "☁️" },
  { title: "UI/UX Design", description: "User-centered design with a seamless experience.", icon: "🎨" }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-72 p-6 bg-gray-800 rounded-xl shadow-lg transform transition hover:-rotate-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
