import React from "react";
import { ArrowRight, Star, Home, ChevronRight } from "lucide-react";

const ACCENT_COLOR = "#fdbe04";

const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

export default function SoftwareDevelopmentHero() {
  return (
    <div className="min-h-screen bg-[#071525] text-white font-sans selection:bg-[#fdbe04] selection:text-black">
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#0b1d32] border-b border-white/10 py-3.5 px-4 sm:px-8">
        <div className="max-w-[1450px] mx-auto flex items-center gap-2 text-xs sm:text-sm font-mono text-white/60">
          <Home size={14} className="text-white/40" />
          <a href="/">Home</a>
          <ChevronRight size={14} className="text-white/30" />
          <span
            className="font-bold text-white px-2.5 py-0.5 rounded border border-yellow-500/30"
            style={{ backgroundColor: `${ACCENT_COLOR}20` }}
          >
            Software Development Services
          </span>
        </div>
      </div>

      {/* Hero Section with Background Image & Dark Overlay */}
      <section className="relative w-full min-h-[750px] flex items-center py-16 lg:py-24 overflow-hidden">
        {/* Background Image: Modern Software Engineering Setting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Software Development Team"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Blue Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/90 to-[#071525]/60" />
          <div className="absolute inset-0 bg-[#071525]/50 backdrop-blur-[2px]" />
        </div>

        <div className="mx-auto max-w-[1450px] px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-4xl space-y-6">
            {/* Featured Badge */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/40 shadow-sm"
                style={{ backgroundColor: `${ACCENT_COLOR}20` }}
              >
                <Star
                  size={13}
                  fill={ACCENT_COLOR}
                  className="text-[#fdbe04]"
                />
                <span className="text-[11px] font-mono tracking-widest text-[#fdbe04] uppercase font-extrabold">
                  FEATURED SOFTWARE SUCCESS STORY
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.1]">
              Accelerating Enterprise Growth and Scaling Digital Products with{" "}
              <span
                className="px-2.5 py-0.5 rounded text-black inline-block shadow-md mt-1"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                Custom Software Development
              </span>
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-3xl font-light">
              The client is a high-growth fintech enterprise handling millions
              of daily transactions across global markets. As user demand surged
              and tech debt accumulated, the enterprise began experiencing
              system latency and architectural bottlenecks...
            </p>

            {/* Metrics Row (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-4 border-t border-white/15 max-w-3xl">
              <div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#fdbe04] block mb-1">
                  3x
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                  Faster Time-to-Market
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#fdbe04] block mb-1">
                  99.9%
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                  System Uptime & Reliability
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#fdbe04] block mb-1">
                  -45%
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
                  Infrastructure & Maintenance Costs
                </span>
              </div>
            </div>

            {/* CTA Buttons / Category Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 py-3.5 px-6 rounded-lg text-black font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <span>BOOK A DISCOVRY CALL</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-white tracking-wide backdrop-blur-md">
                Software Engineering
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
