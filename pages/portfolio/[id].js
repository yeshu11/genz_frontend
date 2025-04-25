"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"; // Added for <Image>
import "../../styles/PortfolioDetail.css";

const portfolioItems = [
  {
    id: "the-stylease",
    timeline: "2022 — SEO",
    headline: "The Stylease",
    title: "Search Mastery",
    desc: "Created an SEO analytics dashboard to monitor rankings, optimize content, and boost organic traffic for clients.",
    detailedDesc: "The Stylease was an SEO analytics dashboard designed for digital marketers. Built with React and Chart.js, it provided real-time keyword tracking, competitor analysis, and content optimization suggestions. The backend used Python (Django) with PostgreSQL for data storage. Features included automated reports, integration with Google Analytics and Search Console, and a customizable dashboard for clients. We focused on a clean UI with Material-UI, ensuring responsiveness across devices. The platform helped clients increase organic traffic by 40% on average.",
    background: "/stylease_final_true.png",
    largeImage: "/trya.png",
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
    detailedDesc: "CaratLane is a secure mobile banking app developed with React Native for cross-platform compatibility. It featured biometric authentication (fingerprint and face ID), real-time transaction processing with WebSocket, and end-to-end encryption using AES-256. The backend was built with Spring Boot and MySQL, with JWT-based authentication. We integrated push notifications with Firebase and added a budgeting tool for users. The UI was designed with a focus on simplicity, using NativeBase for components. The app was tested for PCI-DSS compliance and deployed on Google Cloud with a 99.9% uptime.",
    background: "/caratlane_final_1.png",
    largeImage: "/caratlane_large.png",
    headlineColor: "#50326e",
    hoverColor: "#8e44ad",
  },
];

const PortfolioDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = portfolioItems.find((item) => item.id === id);

  if (!portfolio) {
    return <div className="not-found">Portfolio not found</div>;
  }

  return (
    <section
      className="portfolio-detail-section"
      style={{ background: portfolio.headlineColor }}
    >
      <div className="detail-container">
        <Link href="/" className="back-button">
          ← Back to Main
        </Link>
        <h1 className="detail-headline" style={{ color: "#ffffff" }}>
          {portfolio.headline}
        </h1>
        <h3 className="detail-title">{portfolio.title}</h3>
        <div className="detail-image-container">
          <Image
            src={portfolio.largeImage || portfolio.background}
            alt={portfolio.headline}
            width={800}
            height={600} // Estimated for large portfolio image
            className="detail-image"
          />
        </div>
        <div className="detail-content">
          <p className="detail-timeline">{portfolio.timeline}</p>
          <p className="detail-desc">{portfolio.detailedDesc}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;