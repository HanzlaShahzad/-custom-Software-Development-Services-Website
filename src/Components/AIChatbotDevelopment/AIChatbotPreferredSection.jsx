import React from "react";
import {
  Star,
  MessageSquareCode,
  Bot,
  Cpu,
  Workflow,
  Mic,
  ShieldCheck,
  GitBranch,
  Layers,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

const STATS = [
  { value: "2017", label: "Conversational AI Since" },
  { value: "200+", label: "Custom LLMs Deployed" },
  { value: "90+", label: "AI & NLP Engineers" },
  { value: "15+", label: "Industries Served Globally" },
];

export default function AIChatbotPreferredSection() {
  return (
    <section className="w-full bg-[#faf9f5] py-20 px-6 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1450px]">
        {/* Main Grid: Left Content & Right Interactive Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Headings, Description & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Top Label */}
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-gray-500 font-bold uppercase">
                  WHY CHOOSE CODEWIRE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#0f172a] leading-[1.15] tracking-tight">
                An{" "}
                <span
                  style={{ color: ACCENT_YELLOW }}
                  className="underline decoration-black/10 underline-offset-8"
                >
                  AI Chatbot
                </span>{" "}
                Company Trusted by Enterprises Worldwide
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                We engineer bespoke conversational AI solutions, LLM
                fine-tuning, and secure RAG pipelines that transform customer
                interactions into automated excellence. Trusted for
                high-accuracy answers, multi-agent workflows, and
                zero-hallucination guardrails.
              </p>
            </div>

            <div className="space-y-6">
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-b-gray-200 border-t-gray-200">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-black text-[#0f172a] font-mono">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Badges & Ratings Row */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {/* Payoneer / Certified */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-black font-black text-xs shadow-md"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    Top
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block font-mono uppercase tracking-wider">
                      Best AI Chatbot Company
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      Payoneer Certified
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300 hidden sm:block" />

                {/* Clutch Rating */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-black text-[#0f172a] font-mono tracking-tight">
                    Clutch
                  </span>
                  <div>
                    <div
                      className="flex items-center gap-0.5 mb-0.5"
                      style={{ color: ACCENT_YELLOW }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={ACCENT_YELLOW} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-800">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300 hidden sm:block" />

                {/* Trustpilot */}
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-[#0f172a] tracking-wide flex items-center gap-1">
                      <Star size={12} fill="currentColor" strokeWidth={0} />
                      Trustpilot
                    </span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-sm flex items-center justify-center text-black"
                          style={{ backgroundColor: ACCENT_YELLOW }}
                        >
                          <Star size={10} fill="currentColor" strokeWidth={0} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Equal-Height Circular AI Ecosystem Graphic */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative w-full h-full min-h-[500px] rounded-3xl bg-[#071525] border border-white/10 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
              {/* Radial Background Glow */}
              <div
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />

              {/* Concentric Rotating / Glowing Rings */}
              <div className="absolute inset-8 rounded-full border border-blue-500/30 border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-20 rounded-full border border-[#fcbc02]/20 border-dotted" />
              <div className="absolute inset-32 rounded-full border border-blue-400/20" />

              {/* Center Core Node: Chatbot AI */}
              <div className="relative z-20 w-24 h-24 rounded-2xl bg-[#0f1f33] border-2 border-[#fcbc02] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(252,188,2,0.4)]">
                <span className="text-xl font-black tracking-wider text-white">
                  Chatbot
                </span>
                <span className="text-[9px] font-mono text-[#fcbc02] tracking-widest uppercase mt-0.5">
                  Core AI
                </span>
              </div>

              {/* Orbiting Feature Node 1: Custom LLMs */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <MessageSquareCode
                    size={20}
                    style={{ color: ACCENT_YELLOW }}
                  />
                </div>
              </a>

              {/* Orbiting Feature Node 2: RAG Knowledge Bases */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute top-16 right-16 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <Bot size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 3: Multi-Agent Workflows */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <Workflow size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 4: LLM Fine-Tuning */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute bottom-16 right-16 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <Cpu size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 5: Voice Bots */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <Mic size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 6: Security & Guardrails */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute bottom-16 left-16 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <ShieldCheck size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 7: Omnichannel Integration */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <GitBranch size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>

              {/* Orbiting Feature Node 8: Evaluation MLOps */}
              <a href={getContextualContactUsPath()} target="_blank" rel="noopener noreferrer" className="absolute top-16 left-16 z-20 flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:border-[#fcbc02] transition-colors">
                  <Layers size={20} style={{ color: ACCENT_YELLOW }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
