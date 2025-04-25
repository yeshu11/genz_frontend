"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react"; // Added useMemo
import Link from "next/link";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = useMemo(() => [
    {
      id: "the-stylease",
      timeline: "2022 — SEO",
      headline: "The Stylease",
      title: "Search Mastery",
      desc: "Created an SEO analytics dashboard to monitor rankings, optimize content, and boost organic traffic for clients.",
      detailedDesc: "The Stylease was an SEO analytics dashboard designed for digital marketers. Built with React and Chart.js, it provided real-time keyword tracking, competitor analysis, and content optimization suggestions. The backend used Python (Django) with PostgreSQL for data storage. Features included automated reports, integration with Google Analytics and Search Console, and a customizable dashboard for clients. We focused on a clean UI with Material-UI, ensuring responsiveness across devices. The platform helped clients increase organic traffic by 40% on average.",
      background: "/stylease_final_true.png",
      largeImage: "/stylease_large.png",
      headlineColor: "#ffbd59",
      hoverColor: "#f1c40f",
    },
    {
      id: "opigo",
      timeline: "2023 — Backend",
      headline: "OpiGo",
      title: "Scalable CRM",
      desc: "Built a high-performance e-commerce platform with Next.js, featuring custom payment gateways and real-time inventory updates.",
      detailedDesc: "Opigo is a scalable CRM system tailored for e-commerce businesses. Developed with Next.js for the frontend and Express.js for the backend, it featured real-time data syncing with Socket.IO, custom payment integrations, and a robust customer segmentation engine. The database was powered by MongoDB with Redis caching for performance. We implemented role-based access control (RBAC) and automated email workflows. The UI was designed with Framer Motion for smooth animations, and the system was deployed on AWS with Docker for scalability.",
      background: "/opigo_final.png",
      largeImage: "/opigo_large.png",
      headlineColor: "#5271ff",
      hoverColor: "#e67e22",
    },
    {
      id: "caratlane",
      timeline: "2024",
      headline: "CaratLane",
      title: "Secure Banking",
      desc: "Built a secure mobile banking app with biometric authentication, real-time transactions, and top-tier encryption.",
      detailedDesc: "CaratLane is a secure mobile banking app developed with React Native for cross-platform compatibility. It featured biometric authentication (fingerprint and face ID), real-time transaction processing with WebSocket, and end-to-end encryption using AES-256. The backend was built with Spring Boot and MySQL, with JWT-based authentication. We integrated push notifications with Firebase and added a budgeting tool for users. The UI was designed with a focus on simplicity, using NativeBase for components. The app was tested for PCI-DSS compliance and deployed on Google Cloud.",
      background: "/caratlane_final_1.png",
      largeImage: "/caratlane_large_1.png",
      headlineColor: "#50326e",
      hoverColor: "#8e44ad",
    },
  ], []); // Empty deps for static data

  const updateSlider = useCallback(
    (direction = "next") => {
      setCurrentIndex((prevIndex) => {
        let newIndex;
        if (direction === "next") {
          newIndex = (prevIndex + 1) % portfolioItems.length;
        } else {
          newIndex = (prevIndex - 1 + portfolioItems.length) % portfolioItems.length;
        }

        const slider = sliderRef.current;
        const cards = Array.from(slider.children);

        cards.forEach((card, index) => {
          card.style.transition = "none";
          card.classList.add("displaynone");
          card.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";

          if (index === newIndex) {
            card.classList.remove("displaynone");
            card.classList.add("display", "animated");
            card.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
          }

          setTimeout(() => {
            card.style.transition = "transform 0.8s ease";
            if (index === newIndex) {
              card.style.transform = "translateX(0)";
            }
          }, 10);
        });

        return newIndex;
      });
    },
    [portfolioItems, sliderRef]
  );

  useEffect(() => {
    // Initial render
    const slider = sliderRef.current;
    const cards = Array.from(slider.children);
    cards.forEach((card, index) => {
      card.style.transition = "none";
      if (index !== currentIndex) {
        card.classList.add("displaynone");
        card.style.transform = "translateX(100%)";
      } else {
        card.classList.remove("displaynone");
        card.classList.add("display", "animated");
        card.style.transform = "translateX(0)";
      }
    });

    // Set interval for auto-slide
    intervalRef.current = setInterval(() => updateSlider("next"), 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, updateSlider]);

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => updateSlider("next"), 8000);
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    updateSlider("prev");
    intervalRef.current = setInterval(() => updateSlider("next"), 8000);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    updateSlider("next");
    intervalRef.current = setInterval(() => updateSlider("next"), 8000);
  };

  return (
    <section className="portfolio-section">
      <div className="intro-text">
        <h1 className="intro-heading">
          <span className="intro-heading-our">Our </span>
          <span className="intro-heading-creations">Creations</span>
        </h1>
        <p className="intro-subheading">
          Explore our standout web and mobile app projects that redefine excellence.
        </p>
        <p className="intro-subheading-2">
          Crafted with passion at GENZ for impact and innovation.
        </p>
      </div>
      <div className="body-overlay">
        <div className="container">
          <div className="outer-top"></div>
          <div className="slider-wrapper">
            <button className="slider-arrow left-arrow" onClick={handlePrev}>
              ◀
            </button>
            <div
              className="portfolio-slider"
              ref={sliderRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`leftandin animated ${
                    index === currentIndex ? "display" : "displaynone fadeIn"
                  }`}
                  id={`leftandin${index + 1}`}
                >
                  <div className="outer-left">
                    <h6 className="timeline animated fadeIn">
                      {item.timeline}
                    </h6>
                    <h1
                      className="headline animated fadeInLeft"
                      style={{
                        color: item.headlineColor,
                        "--hover-color": item.hoverColor,
                      }}
                    >
                      {item.headline.split("<br>").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.headline.split("<br>").length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <h3 className="title animated bounceInLeft">
                      {item.title}
                    </h3>
                    <p className="description animated fadeInDown delay-06s">
                      {item.desc}
                    </p>
                    <Link href={`/portfolio/${item.id}`}>
                      <button
                        className="cta animated pulse"
                        style={{
                          background: item.headlineColor,
                          "--hover-bg": item.hoverColor,
                        }}
                      >
                        <p className="animated fadeIn delay-06s">See Project</p>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="inner animated fadeIn"
                    id={`inner${index + 1}`}
                    style={{ backgroundImage: `url(${item.background})` }}
                  ></div>
                </div>
              ))}
            </div>
            <button className="slider-arrow right-arrow" onClick={handleNext}>
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;