"use client";

import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import Link from "next/link";

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          el.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToDetails = () => {
    const detailsSection = document.querySelector(".about-details-section");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading animate-on-scroll" onClick={handleScrollToDetails}>
          About <span className="about-heading-highlight">Us</span>
        </h2>
        <p className="about-description animate-on-scroll">
          Discover who we are, our mission, and how we empower businesses with cutting-edge digital solutions.
        </p>
      </div>
      <div className="about-details-section">
        <div className="about-details-content">
          <div className="about-details-text-content">
            <h3 className="about-details-heading animate-on-scroll">
              <span className="black-text">Who</span> <span className="orange-text">We Are</span>
            </h3>
            <p className="about-details-text animate-on-scroll">
              GENZ is a vibrant collective of innovators, developers, and strategists committed to turning visions into reality. Since our inception in 2020, we’ve been driven by a passion for delivering top-tier web, app, and SEO solutions that fuel business growth. From startups to global enterprises, we prioritize quality, scalability, and innovation in every project we undertake.
            </p>
            <Link href="/about-details" prefetch={true}>
              <button className="explore-button animate-on-scroll">Explore</button>
            </Link>
          </div>
          <div className="about-details-image">
            <img
              src="/about_final.jpg"
              alt="About Us"
              className="about-details-image-img animate-on-scroll"
            />
          </div>
        </div>
      </div>
      <div className="about-image-wrapper">
        <img
          src="/blue_white.png"
          alt="About Us Decoration"
          className="about-image animate-on-scroll"
        />
      </div>
    </section>
  );
};

export default AboutUs;