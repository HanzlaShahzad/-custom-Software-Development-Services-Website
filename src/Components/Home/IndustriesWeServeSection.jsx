import React from "react";
import { Link } from "react-router-dom";
import {
  getContextualContactUsPath,
} from "../../utils/navigation";

// Data configuration for Software Development fields & specialized services
const col1Cards = [
  {
    id: "custom-saas",
    number: "01",
    title: "Custom SaaS Platforms",
    description:
      "Scalable multi-tenant cloud applications, subscription management, and high-performance backend architecture.",
    bgImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud & DevOps Engineering",
    description:
      "Automated CI/CD pipelines, Kubernetes container orchestration, and serverless infrastructure on AWS/GCP/Azure.",
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
  },
];

const col2Cards = [
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile App Development",
    description:
      "Native iOS & Android apps and cross-platform React Native solutions with smooth animations and offline support.",
    bgImage:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    id: "web-dev",
    number: "03",
    title: "Web Application Development",
    description:
      "Scalable, high-performance full-stack web apps built with modern frameworks, robust APIs, and responsive design.",
    bgImage:
      "https://essencesoftwares.com/wp-content/uploads/2020/10/Web-Development.jpeg",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    id: "enterprise-systems",
    number: "05",
    title: "Enterprise Systems & APIs",
    description:
      "Robust microservices architecture, secure REST/GraphQL API design, and legacy system modernization.",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    ),
  },
];

export default function IndustriesWeServe() {

  const IndustryCard = ({ item, heightClass }) => (
    <a
      href={getContextualContactUsPath()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group       cursor-pointer
      relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transform-gpu transition-all duration-300 select-none will-change-transform flex flex-col justify-between p-3.5 ${heightClass}`}
    >
      {/* Background Image with GPU-accelerated Zoom on Hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
        style={{ backgroundImage: `url(${item.bgImage})` }}
      />

      {/* Base Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/10 transition-opacity duration-300" />

      {/* Low Yellow Bottom Shade - Pure CSS transition for zero lag */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-amber-950/95 via-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none transform-gpu" />

      {/* Card Header Row: Top-Left Icon & Top-Right Toggle */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Top-Left Yellow Icon Badge */}
        <div className="w-8 h-8 rounded-xl bg-yellow-400 text-slate-950 flex items-center justify-center font-bold shadow-sm transition-colors duration-200 group-hover:bg-yellow-300">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {item.iconPath}
          </svg>
        </div>

        {/* Top-Right Corner Toggle: Number swaps to Yellow Circle Arrow on Hover */}
        <div className="relative flex items-center justify-end w-8 h-8">
          {/* Index Number (Default State) */}
          <span className="text-xs font-semibold text-slate-200 tracking-wider transition-all duration-300 transform-gpu group-hover:opacity-0 group-hover:scale-50">
            {item.number}
          </span>

          {/* Yellow Circle Arrow (Hover State) */}
          <div className="absolute right-0 w-8 h-8 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center shadow-md opacity-0 scale-50 -rotate-45 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 transform-gpu">
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Footer Content: Title & Detail Text */}
      <div className="relative z-10 flex flex-col justify-end">
        {/* Card Title */}
        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight drop-shadow-sm transition-transform duration-300 transform-gpu">
          {item.title}
        </h3>

        {/* Expandable Detail Description */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
          <div className="overflow-hidden">
            <p className="text-amber-100 text-[11px] sm:text-xs leading-snug font-normal pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen lg:h-screen bg-white text-slate-900 font-sans flex items-center justify-center p-4 lg:p-6 relative overflow-hidden">
      {/* Soft Ambient Radial Backdrop Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <section className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* LEFT COLUMN: Watermark Logo, Pill Badge, Headline, CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center relative pr-0 lg:pr-2">
            {/* Codewire Solutions Watermark Logo under Text */}
            <div
              className="absolute -top-12 -left-6 w-80 h-80 opacity-20 pointer-events-none select-none bg-contain bg-no-repeat bg-left-top filter contrast-[1.2] brightness-[0.9]"
              style={{
                backgroundImage: `url('https://codewiresolutions.com/images/logo.png')`,
              }}
            />

            <div className="relative z-10 space-y-4">
              {/* Wrapped Yellow Pill Badge Tag */}
              <div>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[11px] font-bold tracking-widest uppercase border border-yellow-200/80 shadow-2xs">
                  SOFTWARE EXPERTISE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-[1.18]">
                Building World-Class <br />
                <span className="relative inline-block px-2 py-0.5 mr-2 mt-1">
                  <span className="relative z-10 text-slate-950">Software</span>
                  <span className="absolute inset-0 bg-yellow-400 -rotate-1 rounded-sm z-0" />
                </span>
                <span className="text-yellow-500 inline-block">Solutions</span>
              </h1>

              {/* Description Body Copy */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                We engineer robust, high-performance software systems, custom
                SaaS applications, and modern digital products designed to scale
                your business.
              </p>

              {/* Solid Yellow Wrapped Primary CTA Button */}
              <div className="pt-2">
                <Link
                  to={getContextualContactUsPath()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>View More Experties</span>
                  <svg
                    className="w-4 h-4 stroke-[2.5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Compact Cards Grid Fitting on Single Screen */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5">
              <IndustryCard
                item={col1Cards[0]}
                heightClass="h-[235px] sm:h-[285px] lg:h-[300px]"
              />
              <IndustryCard
                item={col1Cards[1]}
                heightClass="h-[135px] sm:h-[140px] lg:h-[145px]"
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              {col2Cards.map((item) => (
                <IndustryCard
                  key={item.id}
                  item={item}
                  heightClass="h-[135px] sm:h-[140px] lg:h-[145px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
