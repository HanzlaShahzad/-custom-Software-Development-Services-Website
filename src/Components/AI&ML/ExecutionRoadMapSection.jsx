import React from "react";
import { Compass, Users, Code, ArrowRight } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// CALENDLY
// =====================================================

const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

// =====================================================
// ROADMAP STEPS DATA
// =====================================================

const roadmapSteps = [
  {
    step: "01",
    title: "Plan Your AI Strategy & Team Setup",
    description:
      "Share your goals, timeline, & budget. We'll design a detailed AI/ML strategy & define the perfect team structure to match your success metrics.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Assemble Skilled AI & ML Experts Quickly",
    description:
      "With the plan locked, we onboard top engineers & developers. Your dedicated team is ready to start delivering results within 3–4 weeks.",
    icon: Users,
  },
  {
    step: "03",
    title: "Development, Testing & Implementation",
    description:
      "Our AI/ML experts design, build, & rigorously test your solutions to ensure smooth functionality. Once validated, we implement them effectively, setting clear goals for reliable, future-ready results.",
    icon: Code,
  },
];

// =====================================================
// ROADMAP SECTION COMPONENT
// =====================================================

export default function ExecutionRoadmapSection() {
  return (
    <section className="bg-white text-black h-screen max-h-[850px] flex flex-col justify-center px-5 sm:px-7 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1350px] w-full">
        {/* SECTION HEADER */}
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-1.5">
            PROVEN AI ML DEVELOPMENT ROADMAP
          </p>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-2">
            From Vision to{" "}
            <span style={{ color: ACCENT_YELLOW }}>Execution in 4 Weeks</span>
          </h2>

          <p className="text-xs sm:text-sm text-black/70 max-w-2xl">
            Kickstart your AI & ML projects faster with Codewire. From strategy
            to execution, we help you build powerful, scalable solutions that
            deliver results in just 3–4 weeks.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: US REPS CARD & CTA */}
          <div className="lg:col-span-4 bg-[#f8fafc] border border-black/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Team Avatars */}
              <div className="flex items-center -space-x-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                  alt="Rep"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                />

                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                  alt="Rep"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
                  alt="Rep"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-black mb-2">
                We have reps across the US.
              </h3>

              <p className="text-xs sm:text-sm text-black/70 mb-6 font-light leading-relaxed">
                Speak with a client engagement specialist near you to explore
                your roadmap.
              </p>
            </div>

            {/* BOOK A CALL */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl text-xs font-bold text-black shadow-lg transition-transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              <span>BOOK A CALL</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT COLUMN: TIMELINE STEPS */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative">
            {roadmapSteps.map((item, index) => {
              const IconComp = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 relative group"
                >
                  {/* Connecting Vertical Line */}
                  {index !== roadmapSteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-24px] w-0.5 border-l-2 border-dashed border-black/20 z-0" />
                  )}

                  {/* Icon Circle */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-black shrink-0 shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    <IconComp size={20} strokeWidth={2.2} />
                  </div>

                  {/* Step Content */}
                  <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-5 flex-1 shadow-sm transition-shadow hover:shadow-md">
                    <h4 className="text-base sm:text-lg font-bold text-black tracking-tight mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
