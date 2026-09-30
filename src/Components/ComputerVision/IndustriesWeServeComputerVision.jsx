import React from "react";
import { getContextualContactUsPath } from "../../utils/navigation";

// Data configuration for Computer Vision fields & specialized services
const col1Cards = [
  {
    id: "visual-inspection",
    number: "01",
    title: "Automated Visual Inspection",
    description:
      "High-precision defect detection, real-time quality control on assembly lines, and surface anomaly analysis.",
    bgImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    ),
  },
  {
    id: "edge-ai",
    number: "04",
    title: "Edge AI & IoT Vision",
    description:
      "Deploying lightweight deep learning models on IoT devices, NVIDIA Jetson, and edge hardware for low-latency processing.",
    bgImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
];

const col2Cards = [
  {
    id: "object-tracking",
    number: "02",
    title: "Object Tracking & Analytics",
    description:
      "Real-time multi-object tracking, spatial analysis, behavior monitoring, and automated counting in video feeds.",
    bgImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    ),
  },
  {
    id: "medical-imaging",
    number: "03",
    title: "Medical Image Processing",
    description:
      "Advanced diagnostic assistance tools, DICOM integration, segmentation, and secure HIPAA-compliant image pipelines.",
    bgImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    id: "ocr-extraction",
    number: "05",
    title: "OCR & Document AI",
    description:
      "Intelligent text extraction from complex layouts, ID verification, automated document processing, and structured data conversion.",
    bgImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
];

export default function ComputerVisionIndustries() {

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

      {/* Low Yellow Bottom Shade */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-amber-950/95 via-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none transform-gpu" />

      {/* Card Header Row */}
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

        {/* Top-Right Corner Toggle */}
        <div className="relative flex items-center justify-end w-8 h-8">
          {/* Index Number */}
          <span className="text-xs font-semibold text-slate-200 tracking-wider transition-all duration-300 transform-gpu group-hover:opacity-0 group-hover:scale-50">
            {item.number}
          </span>

          {/* Yellow Circle Arrow */}
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

      {/* Card Footer Content */}
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
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center relative pr-0 lg:pr-2">
            {/* Codewire Solutions Watermark Logo */}
            <div
              className="absolute -top-12 -left-6 w-80 h-80 opacity-20 pointer-events-none select-none bg-contain bg-no-repeat bg-left-top filter contrast-[1.2] brightness-[0.9]"
              style={{
                backgroundImage:
                  "url('https://codewiresolutions.com/images/logo.png')",
              }}
            />

            <div className="relative z-10 space-y-4">
              {/* Badge */}
              <div>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[11px] font-bold tracking-widest uppercase border border-yellow-200/80 shadow-2xs">
                  COMPUTER VISION EXPERTISE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-[1.18]">
                Advanced Computer <br />
                <span className="relative inline-block px-2 py-0.5 mr-2 mt-1">
                  <span className="relative z-10 text-slate-950">Vision</span>
                  <span className="absolute inset-0 bg-yellow-400 -rotate-1 rounded-sm z-0" />
                </span>
                <span className="text-yellow-500 inline-block">Services</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                We engineer custom computer vision systems, real-time video
                analytics, and deep learning solutions designed to automate
                visual intelligence and scale your enterprise operations.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={getContextualContactUsPath()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>START YOUR VISION PROJECT</span>

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
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
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
