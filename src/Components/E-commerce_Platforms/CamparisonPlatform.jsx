import React, { useState } from "react";
import { CheckCircle, XCircle, Target } from "lucide-react";

const ACCENT_YELLOW = "#fdbe04";

const COMPARISON_DATA = [
  {
    displayName: "Shopify",
    pros: "Launch 2-3x faster, 99.9% uptime, 8,000+ apps available.",
    cons: "Limited backend flexibility (~30% customization possible).",
    bestFor: "D2C brands, SMEs.",
  },
  {
    displayName: "WooCommerce",
    pros: "60% lower setup cost, 100% open-source, 50,000+ plugins.",
    cons: "Hosting & security fully user-managed (adds ~15% workload).",
    bestFor: "SMEs, content-first.",
  },
  {
    displayName: "Magento (Adobe)",
    pros: "Supports 500K+ SKUs, multi-store scalability, 100+ integrations.",
    cons: "Requires dedicated server infrastructure and specialized developer maintenance.",
    bestFor: "High-volume enterprise merchants.",
  },
  {
    displayName: "BigCommerce",
    pros: "Built-in B2B tools, 99% uptime, SaaS maintenance-free.",
    cons: "Annual sales revenue limits tier thresholds.",
    bestFor: "Fast-growing mid-market & B2B brands.",
  },
  {
    displayName: "Salesforce Cloud",
    pros: "Unmatched CRM synchronization, AI-powered Einstein personalization, global scale.",
    cons: "High implementation costs and complex configuration timelines.",
    bestFor: "Large global enterprises.",
  },
  {
    displayName: "OpenCart",
    pros: "Lightweight architecture, user-friendly admin dashboard, free core software.",
    cons: "Extensive module dependency for advanced marketing and SEO features.",
    bestFor: "Small startups & niche web shops.",
  },
];

export default function EcommercePlatformComparisonGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-[#fcfbfa] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Mini Badge */}
        <div className="inline-block mb-3">
          <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase font-bold">
            PLATFORM COMPARISON
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.18] max-w-4xl mx-auto mb-4">
          Compare Ecommerce Platforms{" "}
          <span style={{ color: ACCENT_YELLOW }}>Before You Choose</span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
          Explore the strengths, limitations, & best-fit use cases of leading
          eCommerce platforms to make an informed decision for your business.
        </p>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {COMPARISON_DATA.map((platform, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top sliding highlight line from left to right */}
                <div
                  className="absolute top-0 left-0 h-[3px] transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: ACCENT_YELLOW,
                    width: isHovered ? "100%" : "0%",
                  }}
                />

                <div>
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {platform.displayName}
                    </h3>
                  </div>

                  {/* Pros Section */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                      <CheckCircle
                        size={15}
                        className="text-emerald-500 shrink-0"
                      />
                      <span>PROS</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium pl-6">
                      {platform.pros}
                    </p>
                  </div>

                  {/* Cons Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                      <XCircle size={15} className="text-rose-500 shrink-0" />
                      <span>CONS</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium pl-6">
                      {platform.cons}
                    </p>
                  </div>
                </div>

                {/* Best For Footer Section */}
                <div className="pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl">
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    <Target
                      size={14}
                      style={{ color: ACCENT_YELLOW }}
                      className="shrink-0"
                    />
                    <span>BEST FOR</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 pl-6">
                    {platform.bestFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
