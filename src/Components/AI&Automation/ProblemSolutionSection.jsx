import React from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const ACCENT_YELLOW = "#ca8a04";
const SOFT_YELLOW_BG = "#fefce8";

const problemSolutionData = [
  {
    problemType: "PROBLEM",
    problemStat: "15-20",
    problemStatUnit: "HRS/WEEK",
    problemTitle: "Support tickets pile up after hours",
    problemDesc:
      "Teams without after-hours coverage often lose this much time weekly just triaging routine questions manually.",
    solutionType: "SOLUTION",
    solutionTitle: "A support agent live 24/7",
    solutionDesc:
      "Triages and resolves common tickets around the clock, escalating only what genuinely needs a human.",
  },
  {
    problemType: "PROBLEM",
    problemStat: "10-15",
    problemStatUnit: "HRS/WEEK",
    problemTitle: "Manual data entry across CRM & billing",
    problemDesc:
      "Relying on staff to copy-paste invoice updates creates costly bottlenecks and human errors.",
    solutionType: "SOLUTION",
    solutionTitle: "Autonomous data sync & workflow bot",
    solutionDesc:
      "Instantly validates, updates, and routes transaction records between your core business tools.",
  },
  {
    problemType: "PROBLEM",
    problemStat: "25+",
    problemStatUnit: "HOURS/WEEK",
    problemTitle: "Leads sitting cold during peak hours",
    problemDesc:
      "Prospective clients drop off when response times stretch past a few minutes during busy surges.",
    solutionType: "SOLUTION",
    solutionTitle: "Instant lead qualification assistant",
    solutionDesc:
      "Engages website visitors the second they land, answers inquiries, and books meetings automatically.",
  },
  {
    problemType: "PROBLEM",
    problemStat: "40%",
    problemStatUnit: "DELAY RATE",
    problemTitle: "Disorganized inventory tracking & updates",
    problemDesc:
      "Stock levels fall out of sync across online marketplaces, leading to overselling and missed orders.",
    solutionType: "SOLUTION",
    solutionTitle: "Real-time AI inventory synchronization",
    solutionDesc:
      "Monitors and balances stock metrics across all active sales channels dynamically.",
  },
  {
    problemType: "PROBLEM",
    problemStat: "30%",
    problemStatUnit: "TIME LOST",
    problemTitle: "Repetitive employee onboarding queries",
    problemDesc:
      "HR teams spend countless hours answering identical policy and setup questions for new hires.",
    solutionType: "SOLUTION",
    solutionTitle: "Internal HR & IT knowledge assistant",
    solutionDesc:
      "Provides instant answers to team handbook guidelines, tool setups, and internal documentation.",
  },
  {
    problemType: "PROBLEM",
    problemStat: "50+",
    problemStatUnit: "HOURS/MONTH",
    problemTitle: "Scattered customer feedback & reviews",
    problemDesc:
      "Valuable insights get lost across multiple support channels, social media, and app store ratings.",
    solutionType: "SOLUTION",
    solutionTitle: "AI sentiment analysis & reporting bot",
    solutionDesc:
      "Aggregates feedback streams automatically and highlights critical action items for leadership.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="bg-[#faf9f5] text-black py-20 sm:py-28 px-5 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-4">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/70">
                Friction vs. Resolution
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.1]">
              If This Sounds Familiar, <br />
              Here's <span style={{ color: ACCENT_YELLOW }}>What Fixes It</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-black/70 leading-relaxed font-light">
              Most teams don't wake up wanting "an AI agent" — they're just
              tired of these specific operational bottlenecks eating hours every
              week.
            </p>
          </div>
        </div>

        {/* 6 ROWS OF PROBLEM / SOLUTION CARDS */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {problemSolutionData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch group"
            >
              {/* LEFT BOX: PROBLEM */}
              <div className="lg:col-span-6 bg-white border border-black/10 rounded- p-8 sm:p-10 flex flex-col justify-between relative shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/20">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-red-600">
                        {row.problemType}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-100">
                      Pain Point #{index + 1}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                      {row.problemTitle}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-2xl sm:text-3xl font-black tracking-tighter text-black">
                        {row.problemStat}
                      </span>
                      <p className="text-[10px] font-bold text-black/50 tracking-wider">
                        {row.problemStatUnit}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-light pt-4 border-t border-black/5">
                  {row.problemDesc}
                </p>
              </div>

              {/* CENTER CONNECTOR ICON (Desktop) */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black/30 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>

              {/* RIGHT BOX: SOLUTION */}
              <div
                className="lg:col-span-5 border rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-sm transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: SOFT_YELLOW_BG,
                  borderColor: "#fde04755",
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: ACCENT_YELLOW }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: ACCENT_YELLOW }}
                    >
                      {row.solutionType}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black mb-4">
                    {row.solutionTitle}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-light pt-4 border-t border-black/10">
                  {row.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
