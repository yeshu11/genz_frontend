"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import "../../styles/PortfolioDetail.css";

const portfolioItems = [
  {
    id: "the-stylease",
    timeline: "2022 — SEO",
    headline: "The Stylease",
    title: "Fashion E-Commerce Platform",
    desc: "Built a high-performance backend for TheStylease with Node.js and optimized SEO for enhanced discoverability.",
    detailedDesc: "TheStylease is a fashion-focused e-commerce platform that connects users with premium clothing and accessories, offering a curated shopping experience with rental and purchase options. Our team developed a high-performance backend for TheStylease using Node.js with Express.js, delivering a lightweight and scalable solution to handle complex e-commerce workflows. The platform supports features like product browsing, order management, and user personalization, catering to a growing community of fashion enthusiasts. The backend leveraged MongoDB for flexible data storage, enabling dynamic product catalogs and user profiles. We implemented RESTful APIs to integrate third-party services, including payment gateways (e.g., PayPal, Stripe), logistics APIs for shipping, and social media APIs for seamless sharing. To ensure performance, we used Redis for caching product data and user sessions, minimizing latency during high-traffic events like flash sales. Security was enhanced with JWT-based authentication and data encryption to protect user transactions. A critical component of the project was SEO optimization to boost TheStylease’s visibility on search engines. We implemented server-side rendering (SSR) with Next.js to improve page load times and search engine indexing. Structured data (Schema.org) was added to enhance rich snippets, while optimized meta tags, alt texts, and keyword-rich URLs improved organic rankings. We also integrated Google Analytics and Search Console to monitor performance and refine SEO strategies. A sitemap and robots.txt were configured to ensure efficient crawling by search engines. Automated testing with Jest and continuous deployment pipelines ensured code reliability and rapid updates. The system was hosted on AWS, utilizing ECS for containerized deployments and CloudFront for CDN acceleration. Our Agile workflow, with regular client syncs, ensured alignment with TheStylease’s brand vision. The combination of a robust Node.js backend and strategic SEO efforts positioned TheStylease as a competitive player in the fashion e-commerce space, driving both user engagement and organic traffic.",
    background: "/stylease_final_true.png",
    largeImage: "/trya.png",
    headlineColor: "#ffbd59",
    hoverColor: "#f1c40f",
  },
  {
    id: "opigo",
    timeline: "2023 — Backend",
    headline: "OpiGo",
    title: "Scalable CRM Platform",
    desc: "Engineered a robust CRM backend for Opigo using Ruby on Rails and Elasticsearch for efficient data management.",
    detailedDesc: "Opigo is a cutting-edge CRM platform designed to streamline customer relationship management for e-commerce and service-based businesses. Our team developed a high-performance backend for Opigo using Ruby on Rails, capitalizing on its rapid development capabilities and MVC architecture to create a scalable and maintainable system. The platform supports businesses in managing leads, automating workflows, and analyzing customer interactions with precision. The backend was built with Ruby on Rails, utilizing Active Record for seamless PostgreSQL database interactions and Sidekiq for asynchronous task processing, such as email notifications and data imports. A key feature was the integration of Elasticsearch, which powered advanced search and analytics capabilities. Elasticsearch enabled lightning-fast querying of customer data, product inventories, and transaction histories, providing businesses with real-time insights. We configured Elasticsearch to index large datasets, optimizing search performance for complex queries like fuzzy matching and faceted search. Multiple third-party APIs were integrated, including payment processors (e.g., Stripe), marketing automation tools, and communication APIs for SMS and email campaigns. RESTful APIs were designed to ensure smooth interoperability between Opigo’s frontend and external systems. To enhance performance, we implemented Redis caching for frequently accessed data, reducing database load during high-traffic periods. Security features included OAuth-based authentication and data encryption to protect sensitive customer information. Automated testing with RSpec ensured code quality, while CI/CD pipelines facilitated rapid deployments. The system was deployed on AWS, using EC2 for compute resources and RDS for database management. Our Agile approach, with iterative sprints, ensured alignment with Opigo’s evolving requirements. The integration of Elasticsearch and Ruby on Rails’ gem ecosystem enabled advanced analytics, such as customer segmentation and churn prediction, empowering businesses to make data-driven decisions. This backend solution positioned Opigo as a reliable and scalable CRM platform for modern enterprises.",
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
    detailedDesc: "CaratLane is a leading online jewelry platform offering a vast catalog of diamond, gold, and gemstone jewelry, enabling customers to browse, customize, and purchase products with ease. Our team contributed to building a robust backend infrastructure for CaratLane using Ruby on Rails, leveraging its Model-View-Controller (MVC) architecture to ensure scalability and maintainability. The backend was designed to handle high traffic and complex workflows, supporting features like product catalog management, order processing, and user authentication. We implemented a RESTful API architecture to integrate multiple third-party services, including payment gateways (e.g., Razorpay, Paytm), logistics APIs for real-time shipping updates, and CRM tools for personalized customer interactions. The Ruby on Rails framework facilitated rapid development through its convention-over-configuration approach, while Active Record simplified database interactions with PostgreSQL. To enhance performance, we utilized Redis for caching frequently accessed data, such as product listings and user sessions, ensuring low latency during peak shopping seasons. Security was a priority, with role-based access control (RBAC) implemented to manage admin and user permissions. We also integrated APIs for dynamic pricing and inventory synchronization, enabling real-time updates across CaratLane’s online and offline channels. Automated testing with RSpec and Capybara ensured code reliability, while continuous integration pipelines streamlined deployments. The system was hosted on AWS, leveraging Elastic Beanstalk for scalability and S3 for media storage. Our focus was on delivering a backend that could scale seamlessly during high-demand periods, such as festive sales, while maintaining a smooth user experience. The project adhered to Agile methodologies, with regular sprints and client feedback loops to align with business goals. By leveraging Ruby on Rails’ extensive gem ecosystem, we integrated analytics tools to track user behavior, enabling data-driven marketing strategies. This backend solution empowered CaratLane to deliver a seamless shopping experience, reinforcing its position as a trusted name in online jewelry retail.",
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
            height={600}
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