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
      title: "Fashion E-Commerce Platform",
      desc: "Built a high-performance backend for TheStylease with Node.js and optimized SEO for enhanced discoverability.",
      detailedDesc: "TheStylease is a fashion-focused e-commerce platform that connects users with premium clothing and accessories, offering a curated shopping experience with rental and purchase options. Our team developed a high-performance backend for TheStylease using Node.js with Express.js, delivering a lightweight and scalable solution to handle complex e-commerce workflows. The platform supports features like product browsing, order management, and user personalization, catering to a growing community of fashion enthusiasts.",
      background: "/stylease_final_true.png",
      largeImage: "/stylease_large.png",
      headlineColor: "#ffbd59",
      hoverColor: "#f1c40f",
    },
    {
      id: "opigo",
      timeline: "2023 — Backend",
      headline: "OpiGo",
      title: "Scalable CRM Platform",
      desc: "Engineered a robust CRM backend for Opigo using Ruby on Rails and Elasticsearch for efficient data management.",
      detailedDesc: "Opigo is a cutting-edge CRM platform designed to streamline customer relationship management for e-commerce and service-based businesses. Our team developed a high-performance backend for Opigo using Ruby on Rails, capitalizing on its rapid development capabilities and MVC architecture to create a scalable and maintainable system. The platform supports businesses in managing leads, automating workflows, and analyzing customer interactions with precision.",
      background: "/opigo_final.png",
      largeImage: "/opigo_large.png",
      headlineColor: "#5271ff",
      hoverColor: "#e67e22",
    },
    {
      id: "caratlane",
      timeline: "2024",
      headline: "CaratLane",
      title: "Robust E-Commerce Backend",
      desc: "Developed a scalable e-commerce backend for CaratLane with Ruby on Rails, integrating multiple APIs for seamless operations.",
      detailedDesc: "CaratLane is a leading online jewelry platform offering a vast catalog of diamond, gold, and gemstone jewelry, enabling customers to browse, customize, and purchase products with ease. Our team contributed to building a robust backend infrastructure for CaratLane using Ruby on Rails, leveraging its Model-View-Controller (MVC) architecture to ensure scalability and maintainability. The backend was designed to handle high traffic and complex workflows, supporting features like product catalog management, order processing, and user authentication",
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