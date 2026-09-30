import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://codewiresolutions.com";
const SITE_NAME = "Codewire Solutions";
const DEFAULT_IMAGE = `${SITE_URL}/images/logo.png`;

const pageMetadata = {
  "/": {
    title: "AI Automation & Software Development Company | Codewire Solutions",
    description:
      "Codewire Solutions builds reliable AI automation, web applications, chatbots, and custom software that help businesses work smarter.",
    type: "website",
  },
  "/ai-ml-development-services": {
    title: "AI & Machine Learning Development Services | Codewire Solutions",
    description:
      "Build practical AI and machine learning solutions with Codewire Solutions, from intelligent automation to production-ready predictive systems.",
    type: "service",
  },
  "/ai-agent-development-services": {
    title: "AI Agent Development Services | Codewire Solutions",
    description:
      "Design and deploy capable AI agents that automate workflows, connect business systems, and deliver consistent results.",
    type: "service",
  },
  "/ai-automation-agency": {
    title: "AI Automation Agency for Business Workflows | Codewire Solutions",
    description:
      "Automate repetitive business work with dependable AI workflows, integrations, and custom systems from Codewire Solutions.",
    type: "service",
  },
  "/generative-ai": {
    title: "Generative AI Development Services | Codewire Solutions",
    description:
      "Create useful generative AI products and workflows with secure, scalable solutions tailored to your business goals.",
    type: "service",
  },
  "/computer-vision-development-services": {
    title: "Computer Vision Development Services | Codewire Solutions",
    description:
      "Turn visual data into business insight with custom computer vision and image intelligence solutions.",
    type: "service",
  },
  "/ai-chatbot-development": {
    title: "AI Chatbot Development Services | Codewire Solutions",
    description:
      "Launch intelligent AI chatbots that improve customer support, lead generation, and business operations.",
    type: "service",
  },
  "/web-application-development": {
    title: "Web Application Development Services | Codewire Solutions",
    description:
      "Build fast, scalable web applications with a product-focused development team.",
    type: "service",
  },
  "/ecommerce-platforms": {
    title: "E-commerce Platform Development | Codewire Solutions",
    description:
      "Create conversion-focused e-commerce platforms and experiences designed for growth.",
    type: "service",
  },
  "/technology-sevices": {
    title:
      "Technology Services & Custom Software Development | Codewire Solutions",
    description:
      "Choose the right technology strategy and build custom software that supports long-term growth.",
    type: "service",
  },
  "/hiring-developers": {
    title: "Hire Software Developers | Codewire Solutions",
    description:
      "Hire experienced developers and technology teams to move your software projects forward.",
    type: "service",
  },
  "/case-studies": {
    title: "Software Development Case Studies | Codewire Solutions",
    description:
      "Explore software, AI, and automation projects delivered by Codewire Solutions.",
    type: "article",
  },
  "/about-us": {
    title: "About Codewire Solutions | AI & Software Development Team",
    description:
      "Learn how Codewire Solutions helps businesses build dependable AI, automation, and software products.",
    type: "website",
  },
  "/contact-us": {
    title: "Contact Codewire Solutions | Start Your Project",
    description:
      "Tell Codewire Solutions about your software, AI, or automation project and explore how we can help.",
    type: "website",
  },
  "/quote": {
    title: "Get a Software Development Quote | Codewire Solutions",
    description:
      "Request a tailored quote for your AI, automation, web, or custom software project.",
    type: "website",
  },
};

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:type", metadata.type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
    setLink("canonical", canonicalUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      description: metadata.description,
      sameAs: [],
    };
    let script = document.head.querySelector(
      'script[data-seo="organization-schema"]',
    );
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "organization-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}
