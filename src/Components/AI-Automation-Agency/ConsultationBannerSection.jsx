import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02"; // Your signature yellow accent

export default function ConsultationBannerYellowCorner() {
  return (
    <section className="w-full bg-[#faf9f5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div className="relative rounded-[32px] bg-[#071525] border border-white/10 px-8 py-12 sm:px-12 sm:py-16 lg:px-16 overflow-hidden shadow-2xl">
          {/* Yellow Top-Right Corner Glow & Decorative Circle */}
          <div
            className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: ACCENT_YELLOW }}
          />
          <div
            className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-25 pointer-events-none"
            style={{ backgroundColor: ACCENT_YELLOW }}
          />

          {/* Subtle bottom-left glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left Content Side */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
                  FREE • NO OBLIGATION • 30 MINUTES
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] mb-4">
                Ready to automate your business? Start with a free{" "}
                <span style={{ color: ACCENT_YELLOW }}>
                  Business AI Automation
                </span>{" "}
                Consultation.
              </h2>

              {/* Subtitle description */}
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                We&apos;ll map your biggest AI automation opportunities and hand
                you a written roadmap.
              </p>
            </div>

            {/* Right Button Side */}
            <div className="flex-shrink-0 lg:self-center">
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl text-black font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <span className="tracking-wide">AUTOMATE MY BUSINESS</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
