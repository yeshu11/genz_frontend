"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/AllServices.css";

const services = [
  {
    id: "app-development",
    title: "App Development",
    description: "Build native & cross-platform mobile apps with seamless UX. Our team delivers high-performance apps tailored to your business needs, ensuring scalability and user engagement.",
    image: "/App.jpg",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Create responsive, scalable websites with modern frameworks. We focus on stunning designs, fast load times, and SEO optimization to elevate your online presence.",
    image: "/Web.jpg",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Leverage secure, efficient cloud infrastructure. We provide migration, deployment, and management services across AWS, Azure, and Google Cloud for optimal performance.",
    image: "/cloud.jpg",
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Boost your online visibility with expert SEO strategies. Our data-driven approach ensures higher rankings and increased organic traffic for your business.",
    image: "/SEO.png",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Craft intuitive, user-centric designs for apps & websites. We focus on usability, aesthetics, and engagement to enhance user satisfaction across devices.",
    image: "/ui_ux.jpg",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect your digital assets with robust security solutions. We offer vulnerability assessments, penetration testing, and compliance to safeguard your business.",
    image: "/cyber.jpg",
  },
];

const AllServices = () => {
  useEffect(() => {
    // Scroll animation
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

    // Tilt effect for images
    const images = document.querySelectorAll(".service-image");
    images.forEach((image) => {
      const container = image.closest(".all-services-image");
      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to container
        const y = e.clientY - rect.top; // Mouse Y relative to container
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const maxTilt = 10; // Maximum tilt angle in degrees

        // Calculate tilt angles
        const tiltX = ((centerY - y) / centerY) * maxTilt;
        const tiltY = ((x - centerX) / centerX) * maxTilt;

        // Apply 3D transform
        image.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });

      container.addEventListener("mouseleave", () => {
        // Reset transform on mouse leave
        image.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="all-services-section">
      <div className="all-services-container">
        <h2 className="all-services-heading animate-on-scroll">
          All <span className="all-services-heading-highlight">Services</span>
        </h2>
        <p className="all-services-description animate-on-scroll">
          Discover our full range of IT services designed to drive innovation and growth for your business.
        </p>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`all-services-item ${index % 2 === 0 ? "card-right" : "card-left"}`}
          >
            <div className="all-services-text">
              <h3 className="all-services-title animate-on-scroll">{service.title}</h3>
              <p className="all-services-description-text animate-on-scroll">{service.description}</p>
              <Link href={`/services/${service.id}`}>
                <button className="view-more-button animate-on-scroll">View More</button>
              </Link>
            </div>
            <div className="all-services-image">
              <Image
                src={service.image}
                alt={`${service.title} illustration`}
                width={400}
                height={300}
                className="service-image animate-on-scroll"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;