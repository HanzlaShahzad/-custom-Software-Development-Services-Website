import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {
  getContextualContactUsPath,
  getContextualPath,
} from "../../utils/navigation";

// =====================================================
// CALENDLY
// =====================================================

const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

// =====================================================
// Skyline SVG Vector
// =====================================================

const NYCSkylineSVG = () => (
  <svg
    viewBox="0 0 300 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-24 sm:h-28 text-white/85 transition-colors duration-100 ease-out hover:text-yellow-400 cursor-pointer"
  >
    <path
      fill="currentColor"
      opacity="0.9"
      d="M10,110 L10,85 L18,85 L18,110 Z M22,110 L22,70 L34,70 L34,110 Z M38,110 L38,50 L42,50 L42,40 L46,40 L46,50 L52,50 L52,110 Z M56,110 L56,75 L68,75 L68,110 Z"
    />
    <path
      fill="currentColor"
      d="M85,110 L85,60 C85,60 88,50 92,35 C94,30 93,25 93,20 C95,20 96,15 96,10 L98,10 C98,15 99,20 101,20 C101,25 100,30 102,35 C106,50 109,60 109,60 L109,110 Z"
    />
    <path
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      d="M110,110 Q145,50 180,110 M110,75 L180,75 M125,110 L125,85 M140,110 L140,70 M155,110 L155,70 M170,110 L170,85"
    />
    <path
      fill="currentColor"
      opacity="0.95"
      d="M185,110 L185,45 L190,45 L190,30 L195,15 L197,15 L202,30 L202,45 L208,45 L208,110 Z M212,110 L212,65 L224,65 L224,110 Z M228,110 L228,55 L242,55 L242,110 Z M246,110 L246,80 L258,80 L258,110 Z"
    />
    <path stroke="currentColor" strokeWidth="1.5" d="M0,110 L300,110" />
  </svg>
);

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  return (
    <footer className="w-full bg-[#080d1a] text-slate-100 font-sans relative mt-20 sm:mt-28 lg:mt-32">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================
            TOP CTA HERO SECTION
        ===================================================== */}
        <div className="relative pt-6 lg:pt-10 pb-12 lg:pb-16 border-b border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline & Call to Action */}
            <div className="lg:col-span-7 space-y-6 pt-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                Ready to Transform Your Business with AI Automation?
              </h2>

              <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed">
                Let's build smarter workflows together.
              </p>

              <div className="pt-2">
                <a
                  href={getContextualContactUsPath()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs sm:text-sm tracking-widest uppercase rounded-lg shadow-lg shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>

            {/* Right Column - Fully Responsive Top Cutout Photo Frame */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.02]">
                <div
                  className="relative bg-slate-300 shadow-2xl overflow-hidden p-1 sm:p-1.5 w-full"
                  style={{
                    clipPath: "polygon(5% 12%, 96% 0%, 100% 88%, 0% 100%)",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Clah6T0o1w-HwsIEdnNi1-77rtNVt6UDMb3s13XSFJ0Iyr0DtwLdPE2j&s=10"
                    alt="AI Specialist on Laptop"
                    className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover object-top block"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MIDDLE FOOTER LINK DIRECTORY
        ===================================================== */}
        <div className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 border-b border-slate-800/80">
          {/* COLUMN 1 - DISCOVER CODEWIRE */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold text-sm sm:text-base tracking-wide">
              Discover Codewire
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <Link
                to="/ai-ml-development-services"
                className="block hover:text-yellow-400 transition-colors"
              >
                AI ML Services
              </Link>
              <Link
                to="/ai-chatbot-development"
                className="block hover:text-yellow-400 transition-colors"
              >
                AI Chatbot Development
              </Link>
              <Link
                to="/ai-automation-agency"
                className="block hover:text-yellow-400 transition-colors"
              >
                AI Automation Services
              </Link>
              <Link
                to="/ai-agent-development-services"
                className="block hover:text-yellow-400 transition-colors"
              >
                AI Agent Development
              </Link>
              <Link
                to="/generative-ai"
                className="block hover:text-yellow-400 transition-colors"
              >
                Generative AI Development
              </Link>
            </div>
          </div>

          {/* COLUMN 2 - RESOURCES */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold text-sm sm:text-base tracking-wide">
              Resources
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <Link
                to={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition-colors"
              >
                Engagement Models
              </Link>
              <Link
                to={getContextualPath("blogs")}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition-colors"
              >
                Insights
              </Link>
            </div>
          </div>

          {/* COLUMN 3 - CAREER & PARTNER */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-yellow-400 font-bold text-sm sm:text-base tracking-wide">
                Who We Are
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <Link
                  to="/about-us"
                  className="block hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 4 & 5 - GET IN TOUCH */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <h3 className="text-yellow-400 font-bold text-sm sm:text-base tracking-wide">
              Get in Touch
            </h3>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-md border border-yellow-400 text-yellow-400 font-bold text-xs hover:bg-yellow-400/10 transition-colors uppercase tracking-wider cursor-pointer"
              >
                CONTACT US →
              </a>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-md bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs transition-colors uppercase tracking-wider cursor-pointer"
              >
                SCHEDULE A CALL
              </a>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 pt-1">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a2 2 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+92 03152645283</span>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex items-center gap-5">
              {/* Clutch */}
              <div className="text-left bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  Trusted By
                </div>
                <div className="text-base font-black text-white tracking-wider">
                  Clutch
                </div>
                <div className="text-[10px] text-yellow-400 font-bold flex items-center gap-1">
                  <span>4.9</span>
                  <span className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </span>
                  <span className="text-slate-400">Reviews 13</span>
                </div>
              </div>

              {/* Payoneer */}
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center font-bold text-yellow-400 text-xs">
                  P
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 leading-none">
                    Best Development Company
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Payoneer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUSTPILOT & SOCIAL MEDIA BAR
        ===================================================== */}
        <div className="py-8 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="text-white text-xl font-black flex items-center gap-1">
              <Star size={18} fill="currentColor" strokeWidth={0} />
              <span className="text-lg tracking-tight">Trustpilot</span>
            </span>

            <div className="flex gap-0.5 bg-emerald-600 px-1.5 py-0.5 rounded text-white text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white tracking-wide">
              Follow Us On
            </span>

            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/codewire-solutions-ltd/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-slate-950 rounded flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            SINGLE HEAD OFFICE / PAKISTAN ADDRESS SECTION
        ===================================================== */}
        <div className="py-12 border-b border-slate-800/80 mx-auto max-w-lg">
          <div className="text-center">
            <NYCSkylineSVG />
            <h4 className="text-base font-bold text-white mt-3">Head Office</h4>
            <p className="text-sm font-semibold text-slate-200 mb-1">
              Pakistan
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
              Peoples Town, Vehari, Postal 61100, Punjab.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LEGAL BAR
        ===================================================== */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 All Rights Reserved.</p>

          <div className="flex items-center gap-6 font-medium">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-yellow-400 transition-colors"
            >
              Terms &amp; conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
