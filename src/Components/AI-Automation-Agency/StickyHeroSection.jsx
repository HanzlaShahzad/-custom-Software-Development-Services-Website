import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

export function StickyHeroProblemSection() {
  return (
    <section className="relative w-full">
      {/* ───────────────────────────────────────────────
          1. FIXED BACKGROUND (only for this section)
      ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-[#071525]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1800"
            alt=""
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071525]/70 via-[#071525]/40 to-[#071525]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#071525_75%)]" />
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-20"
          style={{ backgroundColor: ACCENT_YELLOW }}
        />
      </div>

      {/* ───────────────────────────────────────────────
          2. SCROLLING CONTENT
      ─────────────────────────────────────────────── */}
      <div className="relative z-10 -mt-[100vh] min-h-[140vh] w-full flex flex-col items-center justify-start pt-[18vh] pb-32 px-4 sm:px-6 lg:px-10 pointer-events-none">
        <div className="mx-auto max-w-[1380px] w-full pointer-events-auto">
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0a1a2e]/80 border border-white/[0.08] backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 p-7 sm:p-10 lg:p-12 xl:p-14 items-center">
              {/* ── Left: Completely redesigned $80 UI ── */}
              <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] mb-8 w-fit">
                  <Sparkles size={13} style={{ color: ACCENT_YELLOW }} />
                  <span className="text-[11px] font-mono tracking-[0.18em] text-white/75 uppercase font-medium">
                    Operational Efficiency Audit
                  </span>
                </div>

                {/* ──── NEW: Big number contrast block ──── */}
                <div className="mb-7">
                  <div className="flex flex-wrap items-end gap-x-4 gap-y-2 mb-3">
                    {/* $80K block */}
                    <div className="relative">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1">
                        You pay
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                          $80K
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white/40">
                          /yr
                        </span>
                      </div>
                    </div>

                    {/* Divider arrow */}
                    <div className="hidden sm:flex items-center pb-3 text-white/25">
                      <svg
                        width="28"
                        height="12"
                        viewBox="0 0 28 12"
                        fill="none"
                      >
                        <path
                          d="M0 6h24M20 1l6 5-6 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* $8/hr block */}
                    <div className="relative">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1">
                        They do
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
                          style={{ color: ACCENT_YELLOW }}
                        >
                          $8
                        </span>
                        <span className="text-sm sm:text-base font-medium text-white/40">
                          /hr tasks
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Supporting line */}
                  <p className="text-[15px] sm:text-base text-white/60 leading-relaxed max-w-lg">
                    That’s not a people problem — it’s a process problem. Fixed
                    in 14 days with custom workflow automation.
                  </p>
                </div>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                  <a
                    href={getContextualContactUsPath()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-black font-extrabold text-sm tracking-wide transition-all duration-300 shadow-[0_8px_30px_-6px_rgba(252,188,2,0.45)] hover:scale-[1.03] hover:shadow-[0_12px_36px_-6px_rgba(252,188,2,0.55)] active:scale-[0.98] cursor-pointer"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    FIND MY $8/HOUR TASK
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>

                  <div className="flex items-center gap-2 text-[13px] font-mono text-white/55">
                    <CheckCircle2
                      size={16}
                      style={{ color: ACCENT_YELLOW }}
                      className="shrink-0"
                    />
                    <span>Delivered in 14 days or less</span>
                  </div>
                </div>
              </div>

              {/* ── Right: Visual card ── */}
              <div className="lg:col-span-5 relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-transparent to-transparent opacity-70 z-10 pointer-events-none" />

                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    alt="Analytics Dashboard Preview"
                    className="w-full h-[260px] sm:h-[300px] lg:h-[340px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-[#071525]/92 border border-white/[0.1] backdrop-blur-md flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/45 block mb-0.5">
                        Average Time Recovered
                      </span>
                      <span
                        className="text-lg sm:text-xl font-black font-mono tracking-tight"
                        style={{ color: ACCENT_YELLOW }}
                      >
                        35+ Hours / Week
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                      <Zap size={16} style={{ color: ACCENT_YELLOW }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StickyHeroProblemSection;
