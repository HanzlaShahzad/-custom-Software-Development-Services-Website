import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Navigate } from "react-router-dom";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

const PACKAGES = [
  {
    tier: "TIER 01 • QUICK AUTOMATION",
    name: "One Workflow Automation",
    description:
      "One process or department deep-dive. Best for teams testing the waters before a full engagement.",
    price: "$1,500",
    timeline: "ONE-TIME • DELIVERED IN 14 BUSINESS DAYS",
    popular: false,
    features: [
      "Single workflow or department deep-dive",
      "Manual task hours quantified per role",
      "Top 3 automation opportunities ranked by ROI",
      "Recommended tools and integration approach",
      "Build estimate and payback period",
      "One 60-minute review call",
    ],
  },
  {
    tier: "TIER 02 • FULL AUTOMATION",
    name: "Department Automation",
    description:
      "Full cross-department workflow and process map for scaling businesses ready to eliminate bottlenecks.",
    price: "$3,500",
    timeline: "ONE-TIME • DELIVERED IN 21 BUSINESS DAYS",
    popular: true,
    features: [
      "Everything in Workflow Audit",
      "Full cross-department workflow and process map",
      "Complete software inventory and integration audit",
      "Tools flow analysis and visibility gap report",
      "High-fidelity automation opportunities scored by ROI",
      "Phased 90-day roadmap with build estimates",
      "Two 60-minute strategy calls",
      "Build credit 100% applied if you proceed within 60 days",
    ],
  },
  {
    tier: "TIER 03 • STRATEGIC AUTOMATION",
    name: "Enterprise AI Automation",
    description:
      "Executive-level engagement for boardrooms. Ready to make AI a board-level priority.",
    price: "$7,500",
    timeline: "ONE-TIME • DELIVERED IN 30 BUSINESS DAYS",
    popular: false,
    features: [
      "Everything in Operations Audit",
      "AI readiness assessment across the org",
      "Build vs buy analysis with cost modeling",
      "Custom AI use-case feasibility studies",
      "Risk assessment and compliance review",
      "12-month strategic roadmap with milestones",
      "Executive workshop (half-day, on-site or remote)",
      "Build credit 150% applied if you proceed within 60 days",
    ],
  },
];

export default function AiAutomationPricingSection() {
  return (
    <section className="w-full bg-[#faf9f5] py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1450px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071525]/5 border border-[#071525]/10 mb-4">
              <Sparkles size={13} className="text-[#071525]" />
              <span className="text-[11px] font-mono tracking-widest text-[#071525] uppercase font-bold">
                AI AUTOMATION PACKAGES
              </span>
            </div>
            <h2 className="text-[32px] font-black leading-tight text-[#0f172a] sm:text-[44px] lg:text-[52px] tracking-tight">
              Pick the Automation <br />
              package that{" "}
              <span className="px-2 py-0.5 rounded text-white bg-[#071525]">
                fits your
              </span>{" "}
              business.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base font-bold text-[#0f172a] mb-1.5">
              The 30-min consultation tells you which one.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Each audit is a fully written report with workflow analysis, AI
              opportunities, and a phased roadmap. Yours to keep.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-[32px] flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#071525] text-white border-2 shadow-2xl lg:-translate-y-4"
                  : "bg-white text-[#0f172a] border border-gray-200/80 shadow-xl hover:shadow-2xl"
              } p-8 sm:p-10`}
              style={{ borderColor: pkg.popular ? ACCENT_YELLOW : undefined }}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-black font-extrabold text-[11px] font-mono tracking-widest uppercase shadow-lg"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Tier Label */}
                <span
                  className={`block text-[11px] font-mono tracking-widest uppercase mb-3 ${pkg.popular ? "text-white/60" : "text-gray-500"}`}
                >
                  {pkg.tier}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-black tracking-tight mb-3">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${pkg.popular ? "text-white/70" : "text-gray-600"}`}
                >
                  {pkg.description}
                </p>

                {/* Price Box */}
                <div className="mb-6 pb-6 border-b border-gray-200/20">
                  <div
                    className="text-4xl sm:text-5xl font-black tracking-tight font-mono mb-1"
                    style={{ color: pkg.popular ? ACCENT_YELLOW : "#0f172a" }}
                  >
                    {pkg.price}
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-wider block ${pkg.popular ? "text-white/50" : "text-gray-400"}`}
                  >
                    {pkg.timeline}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${pkg.popular ? "bg-white/10" : "bg-gray-100"}`}
                      >
                        <Check size={11} style={{ color: ACCENT_YELLOW }} />
                      </div>
                      <span
                        className={`text-xs sm:text-sm leading-snug ${pkg.popular ? "text-white/90" : "text-gray-700"}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getContextualContactUsPath()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full group inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer active:scale-98 ${
                    pkg.popular
                      ? "text-black hover:opacity-90"
                      : "bg-[#071525] text-white hover:bg-[#0c233b]"
                  }`}
                  style={{
                    backgroundColor: pkg.popular ? ACCENT_YELLOW : undefined,
                  }}
                >
                  <span>I NEED THIS</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
