"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../styles/AboutDetails.css";

const AboutDetails = () => {
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
    const images = document.querySelectorAll(".details-image-img");
    images.forEach((image) => {
      const container = image.closest(".details-image");
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
    <section className="about-details-page">
      <div className="details-container">
        <div className="details-section">
          <div className="details-text-content left">
            <h2 className="details-heading animate-on-scroll">Our <span className="highlight">Story</span></h2>
            <p className="details-text animate-on-scroll">
              GENZ was born in 2020 with a bold vision to redefine digital excellence. Founded by a group of passionate innovators, we set out to bridge the gap between ideas and impactful solutions. Our journey began with a small team dedicated to creating user-centric web and app experiences. Over the years, we’ve grown into a global force, serving clients from diverse industries. Our commitment to quality, creativity, and technical precision has earned us a reputation for delivering projects that not only meet but exceed expectations. From crafting intuitive interfaces to optimizing search engine visibility, every step we take is guided by a desire to empower businesses. Today, GENZ stands as a trusted partner for startups and enterprises alike, driven by the belief that technology can transform lives and businesses when wielded with purpose.
            </p>
          </div>
          <div className="details-image right">
            <Image
              src="/our_story.jpg"
              alt="Our Story"
              width={500}
              height={300}
              className="details-image-img animate-on-scroll"
              priority
            />
          </div>
        </div>

        <div className="details-section">
          <div className="details-image left">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={500}
              height={300}
              className="details-image-img animate-on-scroll"
              loading="eager"
            />
          </div>
          <div className="details-text-content right">
            <h2 className="details-heading animate-on-scroll">Our <span className="highlight">Mission</span></h2>
            <p className="details-text animate-on-scroll">
              At GENZ, our mission is to empower businesses with technology that is intuitive, scalable, and future-ready. We believe in creating solutions that don’t just solve problems but also inspire growth and innovation. Our team works tirelessly to understand each client’s unique needs, ensuring that every project is tailored to deliver maximum impact. Whether it’s developing a robust backend system, designing a seamless user interface, or boosting online discoverability through SEO, we approach every task with precision and passion. Our mission extends beyond delivering projects; we aim to build lasting partnerships, helping our clients navigate the ever-evolving digital landscape with confidence and clarity.
            </p>
          </div>
        </div>

        <div className="details-section">
          <div className="details-text-content left">
            <h2 className="details-heading animate-on-scroll">Our <span className="highlight">Vision</span></h2>
            <p className="details-text animate-on-scroll">
              Our vision is to be a global leader in digital innovation, setting new standards for what technology can achieve. We see a world where businesses of all sizes can harness cutting-edge solutions to realize their full potential. At GENZ, we’re not just building websites or apps; we’re shaping the future of digital experiences. We envision a seamless integration of design, functionality, and performance, where every interaction leaves a lasting impression. By staying ahead of industry trends and embracing emerging technologies, we aim to create solutions that are not only relevant today but also ready for tomorrow’s challenges.
            </p>
          </div>
          <div className="details-image right">
            <Image
              src="/Business_team_.jpg"
              alt="Our Vision"
              width={500}
              height={300}
              className="details-image-img animate-on-scroll"
              loading="eager"
            />
          </div>
        </div>

        <div className="details-section">
          <div className="details-image left">
            <Image
              src="/needus.jpg"
              alt="Why You Need Us"
              width={500}
              height={300}
              className="details-image-img animate-on-scroll"
              loading="eager"
            />
          </div>
          <div className="details-text-content right">
            <h2 className="details-heading animate-on-scroll">Why You <span className="highlight">Need Us</span></h2>
            <p className="details-text animate-on-scroll">
              Choosing GENZ means partnering with a team that’s as invested in your success as you are. We bring a unique blend of creativity, technical expertise, and strategic insight to every project. Our multidisciplinary team ensures that no detail is overlooked, from pixel-perfect designs to optimized performance. We understand the challenges businesses face in a competitive digital world, and we’re here to provide solutions that drive results. Whether you need a website that captivates your audience, an app that streamlines operations, or SEO that boosts your rankings, we deliver with precision. With GENZ, you’re not just getting a service provider—you’re gaining a partner committed to your growth.
            </p>
          </div>
        </div>

        <div className="details-section">
          <div className="details-text-content left">
            <h2 className="details-heading animate-on-scroll">Our <span className="highlight">Approach</span></h2>
            <p className="details-text animate-on-scroll">
              Our approach is rooted in collaboration, innovation, and excellence. We start by listening to our clients, understanding their goals, and identifying their challenges. This allows us to craft solutions that are not only effective but also aligned with their vision. Our iterative process ensures that every project evolves through feedback and refinement, delivering results that are both practical and inspiring. From initial concept to final deployment, we maintain transparency and communication, keeping our clients involved at every stage. Our commitment to staying agile and adaptable means we can pivot quickly to meet changing needs, ensuring that our solutions remain relevant and impactful.
            </p>
          </div>
          <div className="details-image right">
            <Image
              src="/approach.jpg"
              alt="Our Approach"
              width={500}
              height={300}
              className="details-image-img animate-on-scroll"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;