import React from "react";
import { Cpu, Zap, Shield, Sparkles } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "rgb(254 189 4)";

// =====================================================
// MODEL AGNOSTIC AI CHATBOT DATA (ICONS & LOGOS)
// =====================================================

const modelLogosRow1 = [
  { name: "Retail AI", icon: Cpu, badge: "Retail AI" },
  { name: "Azure OpenAI", icon: Zap, badge: "Azure" },
  { name: "ChatGPT", icon: Sparkles, badge: "GPT-4" },
  { name: "Claude AI", icon: Shield, badge: "Claude" },
];

const modelLogosRow2 = [
  { name: "CrewAI", badge: "CrewAI" },
  { name: "Supabase", badge: "S" },
  { name: "HuggingFace", badge: "HF" },
  { name: "Meta Llama", badge: "Meta" },
  { name: "Google Gemini", badge: "G" },
];

const modelLogosRow3 = [
  { name: "Vercel", badge: "Vercel" },
  { name: "Anthropic", badge: "Anthropic" },
  { name: "OpenAI", badge: "OpenAI" },
  { name: "Mistral", badge: "Mistral" },
  { name: "ElevenLabs", badge: "ElevenLabs" },
];

// =====================================================
// MODEL AGNOSTIC SECTION COMPONENT (FITS SCREEN)
// =====================================================

export default function ModelAgnosticSection() {
  return (
    <section className="bg-slate-950 text-white h-screen max-h-[850px] flex flex-col justify-center items-center px-5 sm:px-7 lg:px-10 overflow-hidden relative">
      {/* Background Subtle Glow Accent */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ backgroundColor: ACCENT_YELLOW }}
      />

      <div className="mx-auto max-w-[1200px] w-full text-center relative z-10 flex flex-col justify-center h-full py-6">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            We Are <span style={{ color: ACCENT_YELLOW }}>Model Agnostic</span>
            [cite: 8]
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our AI Chatbot is model-agnostic, meaning we are not dependent on
            one LLM provider. Our proprietary AI Model Gateway, called the GPT
            Router, dynamically routes between multiple AI models. This ensures
            faster responses, the best quality output, & non-stop reliability
            for your chatbot[cite: 8].
          </p>
        </div>

        {/* LOGO GRID CONTAINER (FITTED FOR SCREEN) */}
        <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-4 my-auto">
          {/* ROW 1 (4 items) */}
          <div className="flex flex-wrap justify-center items-center gap-3.5">
            {modelLogosRow1.map((item, idx) => (
              <a
                key={idx}
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer group"
              >
                <item.icon
                  size={26}
                  style={{ color: ACCENT_YELLOW }}
                  className="mb-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-200">
                  {item.badge}
                </span>
              </a>
            ))}
          </div>

          {/* ROW 2 (5 items) */}
          <div className="flex flex-wrap justify-center items-center gap-3.5">
            {modelLogosRow2.map((item, idx) => (
              <a
                key={idx}
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer group"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-slate-900 mb-1 shadow-sm"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {item.badge.charAt(0)}
                </div>
                <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-200">
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* ROW 3 (5 items) */}
          <div className="flex flex-wrap justify-center items-center gap-3.5">
            {modelLogosRow3.map((item, idx) => (
              <a
                key={idx}
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer group"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-slate-900 mb-1 shadow-sm text-xs"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {item.badge.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-200">
                  {item.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
