import React from "react";
import {
  ArrowRight,
  FileSearch,
  Cpu,
  Sliders,
  Rocket,
  Users,
} from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// ROADMAP STEPS DATA
// =====================================================

const roadmapSteps = [
  {
    step: "01",
    title: "Requirement Analysis & Data Preparation",
    description:
      "We begin by understanding client needs, identifying data sources, & preparing clean datasets for training. This ensures the foundation for accurate & reliable Generative AI development.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Model Design & Training",
    description:
      "Our team designs the AI architecture, trains the model with advanced algorithms, & evaluates its accuracy, efficiency, & overall performance through rigorous testing.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Fine-Tuning & Optimization",
    description:
      "The trained AI model is refined & optimized to boost precision, reliability, & scalability, ensuring it aligns perfectly with the client's business goals.",
    icon: Sliders,
  },
  {
    step: "04",
    title: "Deployment & Continuous Support",
    description:
      "The final GenAI solution is seamlessly integrated into existing systems, followed by ongoing monitoring, upgrades, & maintenance for long-term performance.",
    icon: Rocket,
  },
];

// =====================================================
// GENAI DEVELOPMENT ROADMAP SECTION
// =====================================================
const calendly_Url = "https://calendly.com/hanzlashahzad41/30min";

export default function GenAiRoadmapSection() {
  return (
    <section className="bg-white text-black py-24 px-5 sm:px-7 lg:px-12">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-2">
            GENAI DEVELOPMENT ROADMAP
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-4 leading-tight">
            From Concept to Deployment: GenAI Solutions in Just{" "}
            <span style={{ color: ACCENT_YELLOW }}>4 Weeks</span>
          </h2>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed">
            From concept to deployment, our Generative AI expertise delivers
            secure, reliable, & future-ready solutions, empowering businesses
            with innovation, efficiency, & measurable impact through scalable
            GenAI systems tailored to diverse industries.
          </p>
        </div>

        {/* MAIN LAYOUT WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* LEFT COLUMN: STICKY BOX PINNED DURING SCROLL */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-[#fafaf9] border border-black/10 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Rep"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Rep"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
                    alt="Rep"
                  />
                </div>
                <div className="h-9 w-9 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold text-xs">
                  <Users size={18} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mb-2">
                We have reps across the US.
              </h3>
              <p className="text-sm text-black/70 mb-6">
                Speak with a client engagement specialist near you. Get tailored
                insights and direct assistance for your enterprise workflow.
              </p>

              {/* Yellow CTA Button */}
              <a
                href={calendly_Url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 px-6 rounded-2xl flex items-center justify-between text-black font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <span>SCHEDULE A CALL WITH GENAI EXPERT</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLLING PHASES */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {roadmapSteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-yellow-400"
                >
                  {/* Step Icon Node */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-black font-black shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-yellow-50 text-yellow-800 border border-yellow-200">
                        PHASE {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed font-light">
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
