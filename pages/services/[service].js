"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../styles/ServiceDetails.css";

const serviceDetails = {
  "app-development": {
    title: "App Development",
    image: "/app2.jpg",
    description: `
      Our app development services are designed to transform your ideas into high-performance, user-centric mobile applications that drive business success. Whether you're targeting iOS, Android, or both, we deliver tailored solutions that combine cutting-edge technology with intuitive design. Our process begins with a deep understanding of your business goals, target audience, and industry requirements. From there, we craft a comprehensive strategy that includes ideation, prototyping, development, testing, and deployment.

      We specialize in both native and cross-platform development. For native apps, we leverage Swift for iOS and Kotlin for Android to ensure optimal performance and seamless integration with platform-specific features. For cross-platform solutions, we use frameworks like React Native and Flutter, which allow us to deliver cost-effective apps without compromising quality. Our team prioritizes user experience (UX), creating interfaces that are not only visually appealing but also intuitive and engaging. We conduct extensive user research and usability testing to ensure every interaction feels natural and purposeful.

      Scalability is at the core of our development philosophy. We build apps with modular architectures that can grow with your business, whether you're launching a minimum viable product (MVP) or scaling to millions of users. Our backend expertise includes Node.js, Firebase, and GraphQL, enabling us to create robust APIs and integrate with existing systems. Security is another key focus—we implement encryption, secure authentication, and compliance with standards like GDPR and HIPAA to protect user data.

      Beyond development, we offer ongoing maintenance and updates to keep your app competitive in a fast-evolving digital landscape. Our team monitors performance, fixes bugs, and integrates new features as needed. We also provide analytics integration to track user behavior and optimize engagement. Whether you're building an e-commerce app, a social networking platform, or an enterprise solution, we have the expertise to deliver results.

      Our app development process is collaborative and transparent. We involve you at every stage, from wireframing to final deployment, ensuring the end product aligns with your vision. Our agile methodology allows us to adapt to changing requirements, delivering incremental updates for faster time-to-market. We also prioritize accessibility, ensuring your app is usable by people with disabilities, in line with WCAG guidelines.

      In addition to technical excellence, we bring a business-oriented mindset to every project. We analyze market trends, competitor apps, and user expectations to position your app for success. Our goal is not just to build an app but to create a digital asset that drives revenue, enhances brand loyalty, and delivers measurable ROI. With GENZ, you get a partner committed to your success, from concept to launch and beyond.

      We’ve worked with startups, SMEs, and global enterprises across industries like healthcare, retail, education, and finance. Our portfolio includes apps that have achieved millions of downloads and top rankings in app stores. By combining creativity, technical expertise, and strategic insight, we ensure your app stands out in a crowded market.

      Choosing GENZ means choosing innovation, reliability, and results. Let us help you turn your vision into a reality with an app that captivates users and drives growth. Contact us today to discuss your project and take the first step toward digital transformation.
    `,
  },
  "web-development": {
    title: "Web Development",
    image: "/web2.jpg",
    description: `
      Our web development services empower businesses with modern, responsive, and high-performance websites that leave a lasting impression. We specialize in creating digital experiences that blend stunning design, robust functionality, and strategic optimization to elevate your online presence. Whether you need a corporate website, an e-commerce platform, or a custom web application, our team delivers solutions tailored to your unique needs.

      Our development process starts with a detailed consultation to understand your goals, audience, and industry. We then create a roadmap that includes design mockups, technology selection, and a development timeline. Our front-end developers use modern frameworks like React, Next.js, and Vue.js to build pixel Perfect, responsive interfaces that work seamlessly across devices. For the backend, we leverage Node.js, Django, or Ruby on Rails to create secure, scalable APIs and server-side logic.

      SEO is a critical component of our web development services. We optimize every site for search engines, ensuring fast load times, clean code, and proper meta tags. Our team conducts keyword research and implements on-page SEO best practices to boost your rankings. We also integrate analytics tools like Google Analytics to track performance and provide actionable insights.

      Design is another area where we excel. Our UI/UX designers create visually appealing layouts that align with your brand identity while prioritizing usability. We use tools like Figma and Adobe XD to prototype designs, allowing you to provide feedback before development begins. Our iterative design process ensures the final product is both beautiful and functional.

      We also offer content management system (CMS) solutions, including WordPress and custom-built CMS platforms. These allow you to easily update your site’s content without technical expertise. For e-commerce, we build platforms using Shopify, WooCommerce, or custom solutions, complete with secure payment gateways and inventory management.

      Security is non-negotiable. We implement HTTPS, input validation, and protection against common vulnerabilities like SQL injection and XSS. Our sites are built to comply with industry standards, ensuring your data and users are safe. We also provide ongoing maintenance, including updates, backups, and performance optimization, to keep your site running smoothly.

      Our web development services are designed for scalability. Whether you’re starting with a simple landing page or building a complex web application, we create architectures that can handle growth. We use cloud platforms like AWS and Vercel to ensure high availability and fast load times, even under heavy traffic.

      At GENZ, we believe a website is more than just a digital presence—it’s a tool for growth. We’ve built sites for businesses in retail, healthcare, education, and more, helping them attract customers, generate leads, and increase revenue. Our collaborative approach ensures you’re involved at every step, from initial concept to launch.

      Let us help you create a website that not only looks great but also delivers results. With our expertise in design, development, and optimization, we’ll build a digital platform that sets you apart from the competition. Contact us today to start your web development journey.
    `,
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    image: "/cloud2.jpg",
    description: `
      Our cloud solutions empower businesses with scalable, secure, and cost-effective infrastructure that drives innovation and efficiency. We provide end-to-end cloud services, including migration, deployment, and management, across leading platforms like AWS, Azure, and Google Cloud. Our goal is to help you leverage the power of the cloud to transform your operations and achieve your business objectives.

      The cloud offers unparalleled flexibility, but navigating its complexities requires expertise. Our team begins by assessing your current infrastructure and business needs. We then design a cloud strategy that aligns with your goals, whether it’s reducing costs, improving performance, or enhancing security. Our migration services ensure a smooth transition from on-premises systems to the cloud, with minimal downtime and data integrity.

      We specialize in building cloud-native applications that take full advantage of microservices, containers, and serverless architectures. Using tools like Docker, Kubernetes, and AWS Lambda, we create systems that are highly scalable and resilient. Our DevOps practices, including CI/CD pipelines and Infrastructure as Code (IaC), streamline development and deployment, enabling faster time-to-market.

      Security is a top priority in our cloud solutions. We implement robust measures like encryption, identity and access management (IAM), and network security to protect your data. Our team ensures compliance with regulations like GDPR, HIPAA, and SOC 2, giving you peace of mind. We also conduct regular security audits and vulnerability assessments to stay ahead of threats.

      Performance optimization is another key focus. We use content delivery networks (CDNs), load balancers, and auto-scaling to ensure your applications perform reliably under varying loads. Our monitoring tools provide real-time insights into system health, allowing us to proactively address issues before they impact your business.

      Our cloud management services include 24/7 support, cost optimization, and performance tuning. We analyze usage patterns to eliminate waste and recommend cost-effective configurations. Whether you’re running a SaaS platform, a data-intensive application, or an enterprise system, we ensure your cloud infrastructure is efficient and reliable.

      We’ve helped businesses across industries harness the cloud to achieve their goals. From startups building scalable platforms to enterprises modernizing legacy systems, our solutions deliver measurable results. Our collaborative approach ensures you’re involved in every decision, from strategy to implementation.

      With GENZ, you get a partner who understands the cloud inside and out. Let us help you unlock the full potential of cloud technology with solutions that are secure, scalable, and future-ready. Contact us today to discuss your cloud journey and take the first step toward transformation.
    `,
  },
  "seo-services": {
    title: "SEO Services",
    image: "/seo2.jpg",
    description: `
      Our SEO services are designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. In a digital world where competition is fierce, appearing at the top of search results is critical to success. We combine data-driven strategies, industry best practices, and creative content to help you reach your target audience and achieve measurable results.

      Our SEO process begins with a comprehensive audit of your website. We analyze technical performance, on-page elements, and off-page factors to identify opportunities for improvement. Our team conducts in-depth keyword research to uncover high-value terms that align with your business goals. We then create a customized SEO strategy that includes on-page optimization, content creation, and link-building.

      On-page SEO is a cornerstone of our services. We optimize meta tags, headings, images, and URL structures to make your site search-engine-friendly. Our team also improves site speed, mobile responsiveness, and crawlability to enhance user experience and rankings. We use tools like Google Search Console and SEMrush to monitor performance and refine our approach.

      Content is king in SEO, and we excel at creating high-quality, engaging content that resonates with your audience. Our writers produce blog posts, articles, and landing pages optimized for target keywords while providing real value to readers. We also optimize existing content to improve relevance and authority, ensuring your site ranks for competitive terms.

      Off-page SEO is equally important. We build high-quality backlinks from authoritative sites to boost your domain authority. Our outreach team collaborates with industry influencers, bloggers, and media outlets to secure valuable links. We also leverage local SEO strategies, including Google My Business optimization, to help businesses attract nearby customers.

      Transparency is at the heart of our SEO services. We provide detailed reports on keyword rankings, traffic growth, and ROI, so you can see the impact of our work. Our team stays up-to-date with search engine algorithm changes, ensuring your strategy remains effective in an ever-evolving landscape.

      We’ve helped businesses in e-commerce, healthcare, education, and more achieve top rankings and significant traffic growth. Whether you’re a local business or a global brand, our SEO services are tailored to your needs. Our goal is to make your website a powerful tool for attracting customers and driving revenue.

      With GENZ, you get a partner who’s passionate about your success. Let us help you dominate search results with SEO strategies that deliver long-term results. Contact us today to start your SEO journey and take your online presence to the next level.
    `,
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    image: "/ui_ux2.jpg",
    description: `
      Our UI/UX design services focus on creating intuitive, engaging, and visually stunning interfaces that delight users and drive engagement. A great user experience is the foundation of any successful digital product, and we’re here to help you deliver experiences that leave a lasting impression. From mobile apps to websites, our designs are crafted to align with your brand and meet the needs of your audience.

      Our design process begins with user research. We conduct surveys, interviews, and usability tests to understand your target audience’s preferences and pain points. This data informs our personas and user journeys, ensuring every design decision is user-centric. We then create wireframes and prototypes using tools like Figma and Sketch, allowing you to visualize the user flow before development begins.

      Visual design is where our creativity shines. Our designers craft pixel-perfect interfaces that combine aesthetics with functionality. We use color theory, typography, and layout principles to create designs that are both beautiful and intuitive. Our designs are fully responsive, ensuring a consistent experience across desktops, tablets, and smartphones.

      Usability is a key focus. We follow accessibility guidelines (WCAG) to make your product usable by people with disabilities. Our team conducts A/B testing and heatmapping to optimize navigation and interaction flows. We also prioritize micro-interactions—small animations and transitions that enhance the user experience without overwhelming the interface.

      Collaboration is central to our process. We work closely with your team to ensure the design aligns with your brand identity and business goals. Our iterative approach allows for continuous feedback and refinement, ensuring the final product meets your expectations. We also provide design systems, including style guides and component libraries, to ensure consistency across your product.

      Our UI/UX services extend beyond design. We collaborate with developers to ensure the final product matches the approved designs, conducting pixel-perfect audits during implementation. We also offer post-launch support, analyzing user feedback and metrics to refine the experience over time.

      We’ve designed interfaces for apps, websites, and SaaS platforms across industries like healthcare, retail, and education. Our designs have improved user retention, reduced bounce rates, and increased conversions for our clients. Whether you’re launching a new product or redesigning an existing one, we have the expertise to deliver results.

      With GENZ, you get a partner who’s passionate about creating user experiences that stand out. Let us help you build a product that not only looks great but also drives engagement and loyalty. Contact us today to start your UI/UX design journey.
    `,
  },
  "cybersecurity": {
    title: "Cybersecurity",
    image: "/cyber2.jpg",
    description: `
      Our cybersecurity services provide comprehensive protection for your digital assets, ensuring your business is safeguarded against evolving threats. In today’s interconnected world, cybersecurity is not just an option—it’s a necessity. We offer tailored solutions that combine advanced technology, strategic planning, and proactive monitoring to keep your systems secure and compliant with industry standards.

      Our approach begins with a thorough assessment of your current security posture. We conduct vulnerability scans, penetration testing, and risk analyses to identify potential weaknesses in your infrastructure. This allows us to create a customized cybersecurity strategy that addresses your specific needs, whether you’re a small business or a large enterprise.

      We implement a multi-layered security framework to protect your data and systems. This includes encryption, secure authentication (e.g., OAuth, SAML), and firewalls to prevent unauthorized access. Our team also deploys intrusion detection systems (IDS) and security information and event management (SIEM) tools to monitor threats in real-time. We ensure compliance with regulations like GDPR, HIPAA, PCI-DSS, and SOC 2, helping you avoid costly penalties and maintain customer trust.

      Penetration testing is a core component of our services. Our ethical hackers simulate real-world attacks to uncover vulnerabilities before malicious actors can exploit them. We provide detailed reports with actionable recommendations to strengthen your defenses. Regular security audits and patch management further ensure your systems remain up-to-date and resilient.

      Employee training is another critical aspect of our cybersecurity offerings. We provide workshops and simulations to educate your staff on recognizing phishing attacks, managing passwords, and following best practices. A well-informed team is your first line of defense against social engineering and human error, which are common entry points for cyberattacks.

      For businesses with cloud-based systems, we offer specialized cloud security solutions. We secure your AWS, Azure, or Google Cloud environments with identity and access management (IAM), network segmentation, and data encryption. Our team also monitors for misconfigurations, which are a leading cause of cloud breaches.

      In the event of a security incident, our incident response team is ready to act. We follow a structured process to contain threats, mitigate damage, and recover systems quickly. Our post-incident analysis helps you understand the root cause and implement measures to prevent future attacks.

      We’ve protected businesses in healthcare, finance, e-commerce, and more, helping them maintain data integrity and customer confidence. Our proactive approach has prevented countless breaches and minimized downtime for our clients. Whether you need a one-time security assessment or ongoing managed security services, we have the expertise to deliver.

      At GENZ, we believe cybersecurity is about more than just technology—it’s about trust. We work closely with you to understand your business and tailor our solutions to your needs. Our transparent reporting keeps you informed about your security status, empowering you to make confident decisions.

      Let us help you build a secure digital foundation that protects your business and supports your growth. With our cybersecurity services, you can focus on what you do best while we handle the threats. Contact us today to discuss your security needs and take the first step toward a safer future.
    `,
  },
};

const ServiceDetail = () => {
  const router = useRouter();
  const { service } = router.query;
  const details = serviceDetails[service];

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

  if (!details) {
    return <div className="service-detail-section">Service not found</div>;
  }

  return (
    <section className="service-detail-section">
      <div className="service-detail-container">
        <Link href="/">
          <button className="back-button animate-on-scroll">← Back to Home</button>
        </Link>
        <div className="service-hero">
          <div className="service-hero-text">
            <h1 className="service-hero-title animate-on-scroll">{details.title}</h1>
          </div>
          <Image
            src={details.image}
            alt={details.title}
            width={1200}
            height={600}
            className="service-hero-image animate-on-scroll"
            priority
          />
        </div>
        <div className="service-description">
          <h2 className="service-description-heading animate-on-scroll">About {details.title}</h2>
          <p className="service-description-text animate-on-scroll">{details.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;