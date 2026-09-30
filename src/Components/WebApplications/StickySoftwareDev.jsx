import React, { useState } from "react";
import { CheckCircle2, ChevronUp, ChevronDown } from "lucide-react";

export default function KeyFeaturesSection() {
  const [openFeature, setOpenFeature] = useState(0);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  const FEATURES = [
    {
      title: "Secure",
      description:
        "Our secure web applications are built to protect sensitive data & prevent vulnerabilities, ensuring user trust. With encrypted communication & strong authentication protocols, we deliver solutions that safeguard your business & customer information.",
      points: [
        "Handling sensitive user or business data",
        "Financial & e-commerce transactions",
        "Preventing security breaches",
        "Ensuring compliance with regulations",
        "Building trust with end-users",
      ],
    },
    {
      title: "Fast",
      description:
        "Lightning-fast load times and optimized performance ensure your users never wait. We use modern caching, code splitting, and edge delivery to keep your application blazing fast.",
      points: [
        "Sub-second page load times",
        "Optimized assets & lazy loading",
        "CDN & edge caching strategies",
        "Performance budgets & monitoring",
        "Smooth interactions on all devices",
      ],
    },
    {
      title: "Scalable",
      description:
        "Built to grow with your business. Our architecture supports millions of users without compromising performance or reliability.",
      points: [
        "Horizontal & vertical scaling ready",
        "Microservices & serverless options",
        "Database optimization & sharding",
        "Auto-scaling infrastructure",
        "Future-proof technology stack",
      ],
    },
    {
      title: "Robust",
      description:
        "Enterprise-grade reliability with comprehensive error handling, monitoring, and failover systems so your application stays online when it matters most.",
      points: [
        "99.9%+ uptime guarantee",
        "Automated testing & CI/CD",
        "Real-time monitoring & alerts",
        "Graceful error recovery",
        "Disaster recovery planning",
      ],
    },
    {
      title: "Responsive",
      description:
        "Perfect experience on every screen size. From mobile phones to large desktops, your application looks and works beautifully everywhere.",
      points: [
        "Mobile-first design approach",
        "Fluid layouts & adaptive components",
        "Touch-friendly interactions",
        "Consistent branding across devices",
        "Cross-browser compatibility",
      ],
    },
    {
      title: "User-Friendly",
      description:
        "Intuitive interfaces that users love. We focus on clear navigation, accessibility, and delightful interactions that drive engagement and conversions.",
      points: [
        "Clean & intuitive navigation",
        "Accessibility (WCAG) compliance",
        "Thoughtful micro-interactions",
        "Clear calls-to-action",
        "Reduced learning curve for users",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white lg:mt-30 lg:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT – Sticky Image */}
          <div className="relative lg:sticky lg:top-28 flex justify-center">
            {/* Yellow circle background */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#fcbd05]/80 blur-[2px]" />

            {/* Devices mockup */}
            <div className="relative z-10 flex items-end justify-center gap-4">
              {/* Phone */}
              <div className="w-36 sm:w-44 rounded-[2rem] border-[6px] border-slate-800 bg-white shadow-2xl overflow-hidden -mb-6">
                <div className="bg-slate-100 h-6 flex items-center justify-center">
                  <div className="w-16 h-1.5 bg-slate-300 rounded-full" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-3 bg-[#fcbd05] rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-slate-200 rounded w-full" />
                  <div className="h-2 bg-slate-200 rounded w-5/6" />
                  <div className="mt-3 h-16 bg-slate-100 rounded-lg" />
                  <div className="h-8 bg-[#fcbd05] rounded-lg text-[10px] font-bold text-white flex items-center justify-center">
                    Buy Now
                  </div>
                </div>
              </div>

              {/* Laptop */}
              <div className="w-64 sm:w-80 rounded-xl border-[8px] border-slate-800 bg-white shadow-2xl overflow-hidden">
                <div className="bg-slate-100 h-5 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-slate-800 rounded w-20" />
                    <div className="h-6 bg-[#fcbd05] rounded px-3 text-[10px] font-bold text-white flex items-center">
                      Shop
                    </div>
                  </div>
                  <div className="h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-slate-700">
                        Shop from any
                      </div>
                      <div className="text-xs font-bold text-[#fcbd05]">
                        store worldwide
                      </div>
                    </div>
                  </div>
                  <div className="h-8 bg-slate-100 rounded" />
                  <div className="h-8 bg-[#fcbd05] rounded text-xs font-bold text-white flex items-center justify-center">
                    Final final price?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Accordion Features */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2 leading-tight">
              Key Features of High-Quality Web Applications
            </h2>
            <p className="text-slate-500 text-sm mb-8">Development Services</p>

            <div className="space-y-1">
              {FEATURES.map((feature, index) => {
                const isOpen = openFeature === index;
                return (
                  <div
                    key={index}
                    className="border-b border-slate-200 last:border-b-0"
                  >
                    {/* Header button */}
                    <button
                      onClick={() => toggleFeature(index)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <span
                        className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
                          isOpen
                            ? "text-[#fcbd05]"
                            : "text-slate-800 group-hover:text-[#fcbd05]"
                        }`}
                      >
                        {feature.title}
                      </span>
                      {isOpen ? (
                        <ChevronDown className="w-5 h-5 text-[#fcbd05]" />
                      ) : (
                        <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-[#fcbd05] transition-colors" />
                      )}
                    </button>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100 pb-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mb-3">
                        Our {feature.title.toLowerCase()} web apps are best for:
                      </p>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#fcbd05] flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
