import React, { useState, useEffect } from 'react';
import '../styles/WeServe.css';

const industries = [
  {
    name: 'Health Care',
    description: 'Transforming healthcare with innovative IT solutions for patient care and data management.',
    icon: '🏥',
    accentColor: '#4CAF50',
  },
  {
    name: 'Ecommerce',
    description: 'Empowering online retail with seamless platforms and personalized shopping experiences.',
    icon: '🛒',
    accentColor: '#FF5722',
  },
  {
    name: 'Banking',
    description: 'Secure and scalable solutions for financial institutions to enhance digital banking.',
    icon: '🏦',
    accentColor: '#2196F3',
  },
  {
    name: 'Real Estate',
    description: 'Streamlining property management and transactions with smart IT tools.',
    icon: '🏠',
    accentColor: '#9C27B0',
  },
  {
    name: 'Logistics',
    description: 'Optimizing supply chains with real-time tracking and automation solutions.',
    icon: '🚚',
    accentColor: '#FFC107',
  },
  {
    name: 'Education',
    description: 'Enhancing learning with digital platforms and interactive tools for education.',
    icon: '📚',
    accentColor: '#E91E63',
  },
];

const WeServe = () => {
  const [visibleCards, setVisibleCards] = useState(industries);

  useEffect(() => {
    const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
    const isMobile = window.innerWidth <= 480;

    if (isTablet) {
      // Initialize with first 2 cards
      setVisibleCards(industries.slice(0, 2));
      console.log('Tablet: Initial 2 cards:', industries.slice(0, 2)); // Debug log

      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          const currentIndex = industries.indexOf(prev[0]);
          const nextIndex = (currentIndex + 2) % industries.length;
          const newCards = industries.slice(nextIndex, nextIndex + 2);
          console.log('Tablet: Cycling to 2 cards:', newCards); // Debug log
          return newCards;
        });
      }, 3000);
      return () => clearInterval(interval);
    } else if (isMobile) {
      setVisibleCards([industries[0]]);
      const interval = setInterval(() => {
        setVisibleCards((prev) => {
          const currentIndex = industries.indexOf(prev[0]);
          const nextIndex = (currentIndex + 1) % industries.length;
          return [industries[nextIndex]];
        });
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setVisibleCards(industries);
    }
  }, []);

  return (
    <section className="we-serve-section">
      <div className="we-serve-container">
        <h2 className="we-serve-heading">
          Industries <span className="highlight">We Serve</span>
        </h2>
        <p className="we-serve-tagline">
          Delivering tailored IT solutions across diverse industries to drive innovation and growth.
        </p>
        <div className="we-serve-grid">
          {visibleCards.map((industry, index) => (
            <div
              key={`${industry.name}-${index}`} // Unique key with index
              className="industry-card"
              style={{ '--accent-color': industry.accentColor }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServe;