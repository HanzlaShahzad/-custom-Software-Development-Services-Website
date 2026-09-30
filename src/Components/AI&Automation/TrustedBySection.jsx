import React from "react";
import { Star, ArrowRight } from "lucide-react";

const ACCENT_YELLOW = "#ca8a04"; // Rich solid gold/yellow

const row1Logos = [
  { label: "Patrick" },
  { label: "MedPharma" },
  { label: "ResumeGenie" },
  { label: "workouts women" },
  { label: "De Meterkast" },
  { label: "AlphaTech" },
];

const row2Logos = [
  { label: "drive lab" },
  { label: "THINKONTOP" },
  { label: "eClinicalWorks" },
  { label: "CloudScale" },
  { label: "DataPulse" },
  { label: "NexusAI" },
];

export function HeroSectionWithMarquee() {
  return (
    <section className="bg-[#faf9f5] text-black w-full flex flex-col py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* TOP HERO BOX */}
      <div className="bg-[#071525] text-white rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-85 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
            alt="AI Agent Background"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/80 to-transparent lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-2.5 flex-wrap">
            <span className="hover:text-white cursor-pointer">
              {" "}
              <a href="/">Home</a>
            </span>
            <span>&gt;</span>
            <span className="text-white/90">AI Agent Development</span>
          </div>

          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
            AI AGENT DEVELOPMENT SERVICES
          </p>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 leading-tight">
            Building Smarter Enterprises With Next-Generation{" "}
            <span style={{ color: ACCENT_YELLOW }}>AI Agents</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed font-light max-w-2xl">
            Our custom AI agent development services help you automate complex
            workflows, improve customer interactions, & build smart AI
            assistants designed to fit your business goals.
          </p>
        </div>

        {/* FLOATING WHITE TRUST & RATINGS CARD */}
        <div className="relative z-20 bg-white text-black rounded-2xl p-3.5 sm:px-6 sm:py-3.5 shadow-2xl flex flex-wrap items-center justify-between gap-3 sm:gap-4 max-w-5xl mx-auto w-full mt-6 sm:mt-8 border border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="client"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                alt="client"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                alt="client"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-black/90">
              240+ happy clients
            </span>
          </div>

          <div className="h-4 w-[1px] bg-black/15 hidden md:block" />

          <div className="flex items-center gap-1.5">
            <div className="flex text-yellow-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-black">
              4.2 / 5
            </span>
          </div>

          <div className="h-4 w-[1px] bg-black/15 hidden md:block" />

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-black">
            <span className="text-emerald-600 font-extrabold flex items-center gap-1">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              Trustpilot
            </span>
          </div>

          <div className="h-4 w-[1px] bg-black/15 hidden md:block" />

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold text-black">
            <span>Clutch</span>
            <span className="text-[10px] text-black/60 font-medium flex items-center gap-0.5">
              4.9/5
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: TRUSTED BY MARQUEES */}
      <div className="pt-8 sm:pt-10 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center mb-4 sm:mb-5">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-1">
              AI AGENT DEVELOPMENT
            </p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black">
              Trusted by Growing{" "}
              <span style={{ color: ACCENT_YELLOW }}>Businesses</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-black/70 font-light">
              We partner with forward-thinking enterprises and fast-growing
              startups across industries.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-2.5">
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#faf9f5] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#faf9f5] to-transparent z-10 pointer-events-none" />

          <div className="flex w-full overflow-hidden">
            <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-left items-center">
              {[...row1Logos, ...row1Logos, ...row1Logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-black/10 rounded-xl min-w-[130px] sm:min-w-[160px] shadow-sm"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-black/70 uppercase">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className="flex gap-4 sm:gap-6 shrink-0 animate-marquee-right items-center">
              {[...row2Logos, ...row2Logos, ...row2Logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-black/10 rounded-xl min-w-[130px] sm:min-w-[160px] shadow-sm"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-black/70 uppercase">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft { 0% { transform: translateX(0%); } 100% { transform: translateX(-33.333%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0%); } }
        .animate-marquee-left { display: flex; width: max-content; animation: marqueeLeft 28s linear infinite; }
        .animate-marquee-right { display: flex; width: max-content; animation: marqueeRight 28s linear infinite; }
        .animate-marquee-left:hover, .animate-marquee-right:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
