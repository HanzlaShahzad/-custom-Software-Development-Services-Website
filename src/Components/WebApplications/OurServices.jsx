import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fdbe04";

const SERVICES = [
  {
    title: "Custom Web App Development",
    description:
      "Tailored web apps built from the ground up to match your exact business workflows—scalable, highly secure, & seamlessly integrated to drive operational efficiency and user adoption.",
  },
  {
    title: "Frontend & Backend Development",
    description:
      "Full-stack technical expertise utilizing cutting-edge modern frameworks to deliver stunning, responsive user interfaces paired with lightning-fast, secure, and reliable backend architectures.",
  },
  {
    title: "SaaS & Enterprise Solutions",
    description:
      "From turnkey SaaS products to heavy-duty enterprise systems, we engineer resilient, multi-tenant, and AI-driven platforms designed for seamless scalability and long-term business growth.",
  },
  {
    title: "Web Portal Development",
    description:
      "Centralized, enterprise-grade secure portals designed to streamline complex internal processes, improve stakeholder collaboration, and dramatically boost overall productivity.",
  },
  {
    title: "Strategic Consulting",
    description:
      "Expert technological guidance, architectural roadmapping, and rigorous security auditing to guarantee your digital product remains future-proof, competitive, and robust.",
  },
  {
    title: "Start Your Journey",
    description:
      "Ready to accelerate your next big project? Collaborate with our elite engineering team to bring your custom web application vision to life with precision and speed.",
  },
];

export default function WebAppServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-[#f8fbfa] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-bold block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.18] max-w-4xl">
            Our Expansive Range of End-to-end Web App Development Services
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            Our web application solutions cover everything from custom cloud
            platforms & interactive portals to seamless front-end & robust
            back-end development. We deliver secure, scalable solutions designed
            to evolve with your business, including expert consulting & ongoing
            support.[cite: 5]
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <a
                key={index}
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`                cursor-pointer
                relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-pointer overflow-hidden border border-slate-200/80 shadow-sm ${
                  isHovered
                    ? "text-slate-900 shadow-xl"
                    : "bg-white text-slate-900"
                }`}
                style={{
                  backgroundColor: isHovered ? ACCENT_YELLOW : "#ffffff",
                }}
              >
                {/* Absolute Top-Right Corner Accent Shape when NOT hovered */}
                {!isHovered && (
                  <div
                    className="absolute top-0 right-0 w-28 h-28 rounded-bl-full transition-all duration-300 opacity-90 pointer-events-none"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  />
                )}

                {/* Top Header Row with Arrow Icon appearing strictly on hover */}
                <div className="flex items-start justify-between relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 max-w-[80%] leading-snug">
                    {service.title}
                  </h3>
                  <div
                    className={`w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center transition-all duration-300 transform ${
                      isHovered
                        ? "opacity-150 scale-100 rotate-0"
                        : "opacity-0 scale-75 -rotate-45 pointer-events-none"
                    }`}
                  >
                    <ArrowUpRight size={18} className="text-white font-black" />
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed relative z-10 mt-4 font-medium transition-colors ${
                    isHovered ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
