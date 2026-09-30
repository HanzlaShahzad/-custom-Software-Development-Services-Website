import React from "react";
import {
  GitBranch,
  Database,
  Layers,
  Users,
  Zap,
  BarChart3,
  BookOpen,
  Cpu,
} from "lucide-react";

const ACCENT_YELLOW = "#fcbc02";

const LEFT_ITEMS = [
  { title: "Your Workflows", subtitle: "Mapped & automated", icon: GitBranch },
  { title: "Your Data", subtitle: "Cleared & structured", icon: Database },
  { title: "Existing Stack", subtitle: "Tools you already use", icon: Layers },
  { title: "Your Team", subtitle: "People, AI-enabled", icon: Users },
];

const RIGHT_ITEMS = [
  { title: "Live Automation", subtitle: "Running on autopilot", icon: Zap },
  { title: "ROI Dashboard", subtitle: "Track, measure, grow", icon: BarChart3 },
  {
    title: "SOP & Training",
    subtitle: "Documented & scalable",
    icon: BookOpen,
  },
  { title: "Integrated AI", subtitle: "Seamlessly connected", icon: Cpu },
];

const STATS = [
  { value: "200+", label: "AI Projects Delivered[cite: 5]" },
  { value: "98%", label: "Implementation Success[cite: 5]" },
  { value: "14 Days", label: "Average Delivery Time[cite: 5]" },
  { value: "~3x", label: "Average ROI Increase[cite: 5]" },
];

export default function WorkflowAnimatedBridge() {
  return (
    <section className="w-full bg-[#071525] py-24 px-6 lg:px-12 text-white relative overflow-hidden">
      {/* Custom CSS Keyframes for moving particle dots along paths */}
      <style>{`
        @keyframes moveDotLeft {
          0% { offset-distance: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes moveDotRight {
          0% { offset-distance: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .animated-pulse-dot-left {
          offset-path: path("M 0 50 Q 150 50 300 150");
          animation: moveDotLeft 3s infinite linear;
        }
        .animated-pulse-dot-right {
          offset-path: path("M 0 150 Q 150 150 300 50");
          animation: moveDotRight 3s infinite linear;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#fcbc02]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1450px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="block text-[11px] font-mono tracking-widest text-[#fcbc02] uppercase mb-3">
              AI AUTOMATION DELIVERABLES[cite: 5]
            </span>
            <h2 className="text-[36px] font-black leading-tight sm:text-[46px] lg:text-[56px] tracking-tight">
              We bridge the gap between <br />
              your <span style={{ color: ACCENT_YELLOW }}>
                workflow
              </span> and <span style={{ color: ACCENT_YELLOW }}>AI</span>{" "}
              automation.[cite: 5]
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-bold text-white mb-1.5">
              Most AI projects fail at implementation.[cite: 5]
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              We make yours succeed by combining deep domain expertise with a
              battle-tested 7-day delivery process.[cite: 5]
            </p>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative mb-24">
          {/* Left Column Cards */}
          <div className="lg:col-span-4 space-y-4">
            {LEFT_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#fcbc02]/50 transition-all duration-300 backdrop-blur-md flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fcbc02] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Hub with SVG Flow Lines */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-10 relative min-h-[300px]">
            {/* SVG Overlay for connecting lines and traveling dots */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 300 300"
            >
              {/* Top-left to center path */}
              <path
                d="M 0 50 Q 150 50 300 150"
                fill="none"
                stroke="rgba(252,188,2,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Bottom-left to center path */}
              <path
                d="M 0 250 Q 150 200 300 150"
                fill="none"
                stroke="rgba(252,188,2,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Center to top-right path */}
              <path
                d="M 0 150 Q 150 200 300 50"
                fill="none"
                stroke="rgba(252,188,2,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Center to bottom-right path */}
              <path
                d="M 0 150 Q 150 250 300 250"
                fill="none"
                stroke="rgba(252,188,2,0.2)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Moving Glowing Yellow Dots */}
              <circle
                r="4"
                fill={ACCENT_YELLOW}
                className="animated-pulse-dot-left"
                style={{ filter: "drop-shadow(0 0 6px #fcbc02)" }}
              />
              <circle
                r="4"
                fill={ACCENT_YELLOW}
                className="animated-pulse-dot-right"
                style={{
                  animationDelay: "1.5s",
                  filter: "drop-shadow(0 0 6px #fcbc02)",
                }}
              />
            </svg>

            {/* Central Circle Card */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#0f233c] to-[#040d18] border-2 border-[#fcbc02] shadow-[0_0_60px_rgba(252,188,2,0.3)] flex flex-col items-center justify-center text-center p-4 z-20">
              <div className="absolute inset-0 rounded-full border border-[#fcbc02]/40 animate-ping opacity-20 pointer-events-none" />
              <div className="w-10 h-10 rounded-full bg-[#fcbc02]/20 flex items-center justify-center text-[#fcbc02] mb-1.5">
                <Zap size={20} />
              </div>
              <h3 className="text-sm font-black text-white tracking-wide">
                Codewire AI
              </h3>
              <p className="text-[10px] text-[#fcbc02] font-mono tracking-wider">
                Audit → Build → Deploy[cite: 5]
              </p>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-4 space-y-4">
            {RIGHT_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#fcbc02]/50 transition-all duration-300 backdrop-blur-md flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fcbc02] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
            >
              <div
                className="text-3xl sm:text-4xl font-black font-mono mb-1"
                style={{ color: ACCENT_YELLOW }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
