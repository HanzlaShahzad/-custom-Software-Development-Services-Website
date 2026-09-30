import React from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const ACCENT_YELLOW = "#fcbc02";

const TRUSTED_LOGOS = [
  { name: "Tiber", text: "tiber" },
  { name: "Azure", text: "Microsoft Azure" },
  { name: "CISCO Ai", text: "CISCO Ai" },
  { name: "KANBRICK", text: "KANBRICK" },
  { name: "K&K Houston", text: "K & K HOUSTON" },
  { name: "Cabber", text: "Cabber" },
  { name: "Centra", text: "Centra" },
];

export default function GenerativeAiHeroSectionCompact() {
  return (
    <section className="w-full bg-[#faf9f5] pt-12 pb-14 overflow-hidden relative">
      {/* Breadcrumb / Top Header Links */}
      <div className="mb-6 ms-13 sm:mb-8 text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-2">
        <a href="/" className="hover:text-yellow-700 transition-colors">
          Home
        </a>
        <span className="text-slate-400">›</span>
        <span className="text-slate-900 font-semibold">
          Software Development Services
        </span>
      </div>
      {/* Background Ambient Yellow Glows */}
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: ACCENT_YELLOW }}
      />

      <div className="mx-auto max-w-[1450px] px-6 lg:px-12 relative z-10">
        {/* Main Grid: Content & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071525]/5 border border-[#071525]/10 shadow-sm">
                <Sparkles size={13} className="text-[#071525]" />
                <span className="text-[11px] font-mono tracking-widest text-[#071525] uppercase font-bold">
                  GENERATIVE AI DEVELOPMENT SERVICES
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0f172a] leading-[1.12]">
              At the Forefront of{" "}
              <span
                style={{ color: ACCENT_YELLOW }}
                className="bg-[#071525] px-2.5 py-0.5 pb-1 rounded text-white inline-block shadow-sm"
              >
                Enterprise
              </span>{" "}
              Transformation With{" "}
              <span style={{ color: ACCENT_YELLOW }}>Generative AI</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl font-normal">
              Empower your business with best generative AI development services
              designed to optimize workflows & boost innovation. By working with
              a leading generative AI development company, you gain intelligent
              solutions that increase efficiency, scalability, & measurable
              growth across industries.
            </p>

            {/* Trust Badges / Clutch Rating */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-gray-300/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#071525] flex items-center justify-center text-white font-black text-xs shadow-md">
                  Top
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block font-mono">
                    Best Development Company
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    Payoneer Certified
                  </span>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-300 hidden sm:block" />

              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-[#0f172a] font-mono">
                  Clutch
                </span>
                <div>
                  <div className="flex items-center gap-1 text-[#fcbc02] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={ACCENT_YELLOW} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-700">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Lead Card (Yellow Shaded Background & Left Border Accent) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 border border-gray-200/80 shadow-2xl overflow-hidden">
              {/* Left Side Vertical Accent Line */}
              <div
                className="absolute top-0 left-0 bottom-0 w-2"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />

              {/* Subtle Yellow Background Shade inside card */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-[#fcbc02] via-transparent to-transparent" />

              <h3 className="text-lg font-black text-[#0f172a] mb-5 pl-2">
                Get expert help for your projects.
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted");
                }}
                className="space-y-8 relative z-10 pl-2"
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-3.5 py-3 rounded-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#fcbc02] focus:ring-2 focus:ring-[#fcbc02]/20 transition-all shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-3 rounded-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#fcbc02] focus:ring-2 focus:ring-[#fcbc02]/20 transition-all shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1">
                    What we can do for you?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your needs."
                    className="w-full px-3.5 py-3 rounded-sm bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#fcbc02] focus:ring-2 focus:ring-[#fcbc02]/20 transition-all resize-none shadow-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-black font-extrabold text-xs transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-98 cursor-pointer mt-1"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  <span>JUMP-START YOUR PROJECT</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Continuously Sliding Logo Marquee Bar */}
      <div className="w-full border-t border-b border-gray-200/80 bg-white/60 py-5 relative overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-6 mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">
            WE&apos;RE TRUSTED BY:
          </span>
        </div>

        {/* CSS Keyframes for infinite seamless scrolling */}
        <style>{`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-slider {
            display: flex;
            width: max-content;
            animation: infiniteScroll 25s linear infinite;
          }
          .animate-infinite-slider:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Gradient Fade Masks for Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#faf9f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#faf9f5] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-infinite-slider items-center gap-14 px-6">
            {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map(
              (logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer px-2"
                >
                  <span className="text-lg sm:text-xl font-black tracking-wider uppercase font-mono text-gray-700">
                    {logo.text}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
