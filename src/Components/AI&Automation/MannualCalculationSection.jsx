import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// CALENDLY
// =====================================================

const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

// =====================================================
// MANUAL COST CALCULATOR SECTION
// =====================================================

export default function ManualCostCalculatorSection() {
  // State for the three sliders
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [hourlyCost, setHourlyCost] = useState(35);

  // =====================================================
  // CALCULATION LOGIC
  // =====================================================

  // Monthly Cost =
  // Hours per week * Number of people * Hourly rate * 4.333
  const monthlyCost = Math.round(
    hoursPerWeek * numberOfPeople * hourlyCost * 4.333,
  );

  const yearlyCost = monthlyCost * 12;

  // =====================================================
  // FORMATTER FOR CURRENCY
  // =====================================================

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="bg-[#071525] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-[1300px] w-full bg-[#071525] border border-white/10 rounded-sm p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: TITLE & SLIDERS */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                FREE TOOL
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-3 leading-tight">
                See What Manual Work Is Actually Costing You
              </h2>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-8 max-w-xl">
                Not ready for a full call yet? Get an instant estimate first –
                no email required.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* SLIDER 1: Hours spent per week */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-white/80 font-medium">
                    Hours spent per week on this task
                  </span>

                  <span className="font-bold text-white text-sm sm:text-base">
                    {hoursPerWeek} hrs
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="80"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#eab308]"
                />

                <div className="flex justify-between text-[10px] text-white/40">
                  <span>1</span>
                  <span>80</span>
                </div>
              </div>

              {/* SLIDER 2: Number of people doing it */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-white/80 font-medium">
                    Number of people doing it
                  </span>

                  <span className="font-bold text-white text-sm sm:text-base">
                    {numberOfPeople} people
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="50"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                  className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#eab308]"
                />

                <div className="flex justify-between text-[10px] text-white/40">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              {/* SLIDER 3: Average hourly cost */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-white/80 font-medium">
                    Average hourly cost ($)
                  </span>

                  <span className="font-bold text-white text-sm sm:text-base">
                    ${hourlyCost}
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#eab308]"
                />

                <div className="flex justify-between text-[10px] text-white/40">
                  <span>$10</span>
                  <span>$250</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ESTIMATED COST DISPLAY CARD */}
          <div className="lg:col-span-5 bg-[#0b1d32] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-inner relative">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
              ● ESTIMATED COST OF MANUAL WORK
            </p>

            {/* MONTHLY COST */}
            <div className="mb-6">
              <div
                className="text-3xl sm:text-5xl font-black tracking-tight mb-1"
                style={{ color: ACCENT_YELLOW }}
              >
                {formatCurrency(monthlyCost)}
              </div>

              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">
                PER MONTH
              </span>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* YEARLY COST */}
            <div className="mb-8">
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                {formatCurrency(yearlyCost)}
              </div>

              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">
                PER YEAR
              </span>
            </div>

            {/* ACTION BUTTON */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              <span>Book a Call to know how Agent Could Cut This</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
