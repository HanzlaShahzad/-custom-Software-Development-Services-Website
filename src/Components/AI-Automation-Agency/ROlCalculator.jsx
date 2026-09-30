import React, { useState } from "react";
import {
  Calculator,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Sparkles,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

const PRESETS = [
  { name: "B2B Services", teamSize: 35, hours: 8, cost: 75 },
  { name: "E-commerce", teamSize: 20, hours: 12, cost: 45 },
  { name: "Web Application Services", teamSize: 50, hours: 6, cost: 90 },
  { name: "HR / Staffing", teamSize: 15, hours: 10, cost: 60 },
  { name: "Professional Services", teamSize: 25, hours: 15, cost: 85 },
];

export default function RoiCalculatorWide() {
  const [teamSize, setTeamSize] = useState(38);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyCost, setHourlyCost] = useState(94);
  const weeksPerYear = 50;
  const automationEfficiency = 0.5;

  const hoursSavedPerWeek = Math.round(
    teamSize * hoursPerWeek * automationEfficiency,
  );
  const moneySavedPerYear = Math.round(
    hoursSavedPerWeek * hourlyCost * weeksPerYear,
  );
  const moneySavedPerMonth = Math.round(moneySavedPerYear / 12);

  return (
    <section className="w-full bg-[#faf9f5] py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-[1450px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071525]/5 border border-[#071525]/10 mb-3">
            <Calculator size={12} className="text-[#071525]" />
            <span className="text-[11px] font-mono tracking-widest text-[#071525] uppercase font-bold">
              ROI CALCULATOR
            </span>
          </div>
          <h2 className="text-[32px] font-bold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[48px]">
            How Many Productive Hours Is Your Business{" "}
            <span className="px-2.5 py-0.5 rounded text-white bg-[#071525]">
              Losing
            </span>{" "}
            Every Week?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            Adjust your business inputs below to instantly calculate weekly time
            recovery and bottom-line annual savings.
          </p>
        </div>

        {/* Main Dashboard Card (Matches full site width) */}
        <div className="bg-[#071525] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
          {/* Subtle Background Ambience */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: ACCENT_YELLOW }}
          />

          {/* Left Panel: Inputs & Controls */}
          <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              {/* Quick Presets */}
              <div className="mb-8">
                <span className="block text-[11px] font-mono tracking-widest text-white/40 uppercase mb-3">
                  Quick Industry Presets
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setTeamSize(preset.teamSize);
                        setHoursPerWeek(preset.hours);
                        setHourlyCost(preset.cost);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/10 text-white/80 hover:bg-white/[0.09] hover:text-white hover:border-white/20 transition-all cursor-pointer active:scale-95"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Team Size */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-semibold text-white/90 flex items-center gap-2.5">
                    <Users size={16} style={{ color: ACCENT_YELLOW }} />
                    Team size on manual work
                  </label>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/[0.06] text-white border border-white/10">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcbc02]"
                />
              </div>

              {/* Slider 2: Manual Hours */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-semibold text-white/90 flex items-center gap-2.5">
                    <Clock size={16} style={{ color: ACCENT_YELLOW }} />
                    Manual hours per person / week
                  </label>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/[0.06] text-white border border-white/10">
                    {hoursPerWeek} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcbc02]"
                />
              </div>

              {/* Slider 3: Hourly Cost */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-semibold text-white/90 flex items-center gap-2.5">
                    <DollarSign size={16} style={{ color: ACCENT_YELLOW }} />
                    Loaded hourly cost (USD)
                  </label>
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10"
                    style={{ color: ACCENT_YELLOW }}
                  >
                    ${hourlyCost}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="250"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcbc02]"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
              <span>Conservative 50% efficiency baseline</span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} style={{ color: ACCENT_YELLOW }} /> Verified
                Model
              </span>
            </div>
          </div>

          {/* Right Panel: Estimated Savings Display */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#040d18] relative">
            <div>
              <span className="block text-[11px] font-mono tracking-widest text-white/40 uppercase mb-4">
                Financial Impact Output
              </span>

              <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                You could recover{" "}
                <strong className="text-white font-bold">
                  {hoursSavedPerWeek} hours
                </strong>{" "}
                weekly and put{" "}
                <strong className="text-white font-bold">
                  ${moneySavedPerYear.toLocaleString()}
                </strong>{" "}
                back into your bottom line.
              </p>

              {/* Big Highlight Box */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-wider text-white/40 font-mono block mb-1.5">
                  Estimated Annual Savings
                </span>
                <div
                  className="text-4xl sm:text-5xl font-black tracking-tight font-mono"
                  style={{ color: ACCENT_YELLOW }}
                >
                  ${moneySavedPerYear.toLocaleString()}
                </div>
              </div>

              {/* Two Column Mini Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">
                    Saved / week
                  </span>
                  <span className="text-base font-bold font-mono text-white">
                    {hoursSavedPerWeek} hrs
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono block">
                    Saved / month
                  </span>
                  <span className="text-base font-bold font-mono text-white">
                    ${moneySavedPerMonth.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-black font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-98 cursor-pointer"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <span>CLAIM THESE SAVINGS NOW</span>
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
