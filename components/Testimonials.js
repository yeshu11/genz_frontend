"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "John Smith",
      role: "Frontend Developer",
      text: "GENZ transformed our web app's frontend with a sleek, responsive design. Their React expertise is unmatched!",
      image: null,
    },
    {
      name: "Emma Wilson",
      role: "Marketing Director",
      text: "Their SEO strategies skyrocketed our organic traffic by 60%. The dashboard they built is a game-changer.",
      image: null,
    },
    {
      name: "Michael Brown",
      role: "CTO",
      text: "The backend system GENZ developed handles millions of requests flawlessly. Scalability at its finest!",
      image: null,
    },
    {
      name: "Sophie Davis",
      role: "Product Manager",
      text: "GENZ's mobile app UI is intuitive and gorgeous. Users love the smooth animations and clean layout.",
      image: null,
    },
    {
      name: "Liam Johnson",
      role: "Startup Founder",
      text: "Their full-stack team delivered our MVP in record time. From Next.js frontend to Node.js backend, top-notch!",
      image: null,
    },
    {
      name: "Olivia Taylor",
      role: "E-commerce Owner",
      text: "GENZ optimized our Shopify app’s performance, reducing load times by 40%. Customers are thrilled!",
      image: null,
    },
    {
      name: "James Anderson",
      role: "SEO Specialist",
      text: "Their keyword research tool is phenomenal. It’s helped us dominate search rankings effortlessly.",
      image: null,
    },
    {
      name: "Isabella Martinez",
      role: "App Developer",
      text: "GENZ’s React Native app is seamless across iOS and Android. Their attention to detail is incredible.",
      image: null,
    },
    {
      name: "William Clark",
      role: "Tech Lead",
      text: "The microservices architecture they built for us is robust and easy to maintain. Highly recommend!",
      image: null,
    },
    {
      name: "Charlotte Harris",
      role: "Content Strategist",
      text: "GENZ’s SEO content tools streamlined our workflow, boosting engagement by 50%. Pure brilliance!",
      image: null,
    },
    {
      name: "Ethan Walker",
      role: "Web Designer",
      text: "Their Tailwind CSS implementation gave our site a modern, cohesive look. Pixel-perfect delivery!",
      image: null,
    },
    {
      name: "Ava Lewis",
      role: "CEO",
      text: "GENZ’s end-to-end solution for our SaaS platform was flawless, from UI/UX to cloud deployment.",
      image: null,
    },
    {
      name: "Noah Thompson",
      role: "Backend Engineer",
      text: "Their Express.js APIs are lightning-fast and secure. Integration with our systems was seamless.",
      image: null,
    },
    {
      name: "Mia White",
      role: "Growth Hacker",
      text: "GENZ’s analytics dashboard gave us deep insights into user behavior, driving our growth strategy.",
      image: null,
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 2); // 7 slides
  const extendedSlides = [...Array(totalSlides), 0]; // Duplicate first slide for seamless loop

  const updateSlider = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= totalSlides) {
        // Reset to first slide without transition
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = `translateX(0%)`;
          setTimeout(() => {
            sliderRef.current.style.transition = "transform 0.5s ease-in-out";
          }, 0);
        }
        return 0;
      }
      return prevIndex + 1;
    });
  }, [sliderRef, totalSlides]); // Removed testimonials

  useEffect(() => {
    intervalRef.current = setInterval(updateSlider, 5000);
    return () => clearInterval(intervalRef.current);
  }, [updateSlider]);

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(updateSlider, 5000);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          What Our <span className="testimonials-heading-highlight">Clients Say</span>
        </h2>
        <p className="testimonials-description">
          Hear from our global clients about how GENZ delivers impactful web, app,
          and SEO solutions.
        </p>
        <div
          className="testimonials-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="testimonials-slider-inner"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {extendedSlides.map((_, slideIndex) => {
              const actualIndex = slideIndex >= totalSlides ? 0 : slideIndex;
              return (
                <div className="testimonials-slide" key={`slide-${slideIndex}`}>
                  {testimonials
                    .slice(actualIndex * 2, actualIndex * 2 + 2)
                    .map((testimonial, cardIndex) => (
                      <div
                        className="testimonial-card"
                        key={`${actualIndex}-${cardIndex}`}
                      >
                        <div className="testimonial-client">
                          <Image
                            src={testimonial.image || "/persona.png"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="client-image"
                          />
                          <div className="client-info">
                            <h3 className="client-name">{testimonial.name}</h3>
                            <p className="client-role">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="testimonials-image-wrapper">
        <Image
          src="/testimonial.webp"
          alt="Testimonial Decoration"
          width={300}
          height={200}
          className="testimonials-image"
        />
      </div>
    </section>
  );
};

export default Testimonials;