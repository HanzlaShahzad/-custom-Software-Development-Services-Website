import React from "react";
import { Star } from "lucide-react";

const ACCENT_YELLOW = "#ca8a04";

export default function WhyTheyChooseUsSection() {
  return (
    <section className="relative w-full h-[calc(100vh-88px)] min-h-[600px] max-h-[850px] bg-white flex items-center overflow-hidden py-4">
      <div className="mx-auto max-w-[1450px] w-full px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT (Slightly smaller text to fit single screen) */}
          <div className="flex flex-col justify-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
              style={{ color: ACCENT_YELLOW }}
            >
              200+ Projects in AI Agent &amp; Voice Agent Development
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black leading-[1.15] mb-4">
              Why{" "}
              <span style={{ color: ACCENT_YELLOW }}>Global Enterprises</span>{" "}
              Choose Us for AI Agent Development
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              From sales automation to customer support, our AI agent &amp; AI
              voice agent development empowers organizations with reliable,
              scalable, &amp; future-ready solutions. We help businesses
              innovate &amp; thrive in competitive industries.
            </p>

            {/* STATS ROW */}
            <div className="grid grid-cols-2 gap-6 mb-6 border-y border-black/10 py-5">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-black mb-0.5">
                  120<span style={{ color: ACCENT_YELLOW }}>+</span>
                </div>
                <div className="text-xs font-semibold text-[#64748b]">
                  Successful Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-black mb-0.5">
                  100<span style={{ color: ACCENT_YELLOW }}>+</span>
                </div>
                <div className="text-xs font-semibold text-[#64748b]">
                  Associated Professionals
                </div>
              </div>
            </div>

            {/* TRUST BADGES & LOGOS */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Payoneer / Best Development Badge */}
              <div className="flex items-center gap-2.5 bg-[#fefce8] border border-[#ca8a04]/20 px-3 py-2 rounded-xl">
                <div
                  className="w-7 h-7 rounded-full bg-[#ca8a04]/10 flex items-center justify-center font-bold text-xs"
                  style={{ color: ACCENT_YELLOW }}
                >
                  <Star size={14} fill="currentColor" strokeWidth={0} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#64748b]">
                    Best Development Company
                  </div>
                  <div className="text-xs font-black text-black tracking-tight">
                    Payoneer
                  </div>
                </div>
              </div>

              {/* Clutch Badge */}
              <div className="flex flex-col justify-center">
                <div className="text-base font-black tracking-tight text-black">
                  Clutch
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[11px] font-bold text-black">
                    4.9/5
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Trustpilot Badge */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                  <span>Trustpilot</span>
                </div>
                <div className="flex gap-0.5 bg-emerald-600 p-0.5 rounded mt-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / GRAPHIC CONTAINER */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#071525] group h-[380px] sm:h-[420px] lg:h-[460px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071525]/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="AI Agent Development & Technology"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-85"
            />

            {/* FUTURISTIC UI OVERLAY ELEMENTS */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-end">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-white text-[10px] font-mono tracking-widest">
                  SYS.AI_AGENT_ACTIVE
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-[#ca8a04]/40 p-4 rounded-xl max-w-xs">
                <div className="text-[10px] uppercase font-bold text-[#ca8a04] tracking-wider mb-1">
                  Next-Gen Automation
                </div>
                <div className="text-white font-bold text-sm">
                  Empowering Global Enterprises with Intelligent Voice &amp;
                  Chat Agents.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
