"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import "../styles/Services.css";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Create responsive, scalable websites tailored to your needs.",
    leftColor: "#34eb83", // Light green
    rightColor: "#0a8c47", // Dark green
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Build native & cross-platform mobile apps with seamless UX.",
    leftColor: "#f7e32e", // Light yellow
    rightColor: "#c7b300", // Dark yellow
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Secure, efficient cloud infrastructure for your business.",
    leftColor: "#d7a1f9", // Light purple
    rightColor: "#8e44ad", // Dark purple
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Boost your online visibility with expert SEO strategies.",
    leftColor: "#4fc3f7", // Light blue
    rightColor: "#0277bd", // Dark blue
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect your digital assets with robust security solutions.",
    leftColor: "#ffcc80", // Light orange
    rightColor: "#f57c00", // Dark orange
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Craft intuitive, user-centric designs for apps & websites.",
    leftColor: "#ff8a80", // Light red
    rightColor: "#d32f2f", // Dark red
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScroll > 100) {
        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.8) {
            el.classList.add("animated");
          }
        });
        lastScroll = now;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isPaused && !isSliding) {
      const interval = setInterval(() => {
        setIsSliding(true);
        setCurrentIndex((prev) => {
          if (isMobile) {
            return (prev + 1) % services.length; // 1 card per slide on mobile
          }
          return (prev + 2) % services.length; // 2 cards per slide on tablet/laptop
        });
        setTimeout(() => setIsSliding(false), 800); // Match transition duration
      }, 5000); // Slide time 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, isSliding, isMobile]);

  const getVisibleServices = () => {
    if (isMobile) {
      const currIndex = currentIndex % services.length;
      return [{ ...services[currIndex], position: "center" }]; // 1 card on mobile
    }
    const currIndex = currentIndex % services.length;
    const nextIndex = (currentIndex + 1) % services.length;
    return [
      { ...services[currIndex], position: "left" },
      { ...services[nextIndex], position: "right" },
    ]; // 2 cards on tablet/laptop
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading animate-on-scroll">
          Our <span className="services-heading-highlight">Services</span>
        </h2>
        <p className="services-description animate-on-scroll">
          Explore our comprehensive IT services designed to empower your business with cutting-edge technology.
        </p>
        <div className="services-cards">
          <div className="card-container">
            {getVisibleServices().map((service, index) => (
              <Tilt
                key={`${service.id}-${service.position}`}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className={`tilt-card ${service.position}-card ${isSliding ? "sliding" : ""}`}
              >
                <Link href={`/services/${service.id}`} prefetch={true}>
                  <div
                    className={`service-card animate-on-scroll ${service.position}-card`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="box">
                      <div className="content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span
                          className="card-button"
                          style={{
                            background: `linear-gradient(to right, ${service.leftColor}, ${service.rightColor})`,
                          }}
                        >
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Tilt>
            ))}
          </div>
          <Link href="/services/all">
            <button className="explore-services-button animate-on-scroll">
              Explore Services <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;