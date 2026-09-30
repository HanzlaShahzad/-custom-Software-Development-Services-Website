import React from "react";
import { ArrowRight, BrainCircuit, Cpu, Network } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// AI & ML INDUSTRIES & ENTERPRISE DOMAINS DATA
// =====================================================

const industriesData = [
  {
    title: "Enterprise Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    icon: BrainCircuit,
    description:
      "Empowering enterprises with custom foundation model integration, secure RAG architectures, and autonomous AI agents designed to automate complex cognitive workflows.",
    tags: ["LLM Integration", "Autonomous Agents", "Enterprise RAG"],
  },
  {
    title: "Machine Learning & Predictive Analytics",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
    icon: Cpu,
    description:
      "Building high-performance predictive machine learning models, custom neural networks, and automated data pipelines to turn raw enterprise data into actionable foresight.",
    tags: ["Predictive Models", "Deep Learning", "Data Pipelines"],
  },
  {
    title: "AI-Driven Cloud & MLOps Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    icon: Network,
    description:
      "Architecting scalable cloud infrastructure and robust MLOps pipelines optimized for low-latency model inference, continuous monitoring, and enterprise compliance.",
    tags: ["MLOps Pipelines", "Cloud Inference", "Model Monitoring"],
  },
];

// =====================================================
// AI & ML LEADERSHIP SECTION
// =====================================================

export default function AILeadershipIndustriesSection() {
  return (
    <section className="bg-white text-black h-screen max-h-[850px] flex flex-col justify-center px-5 mt-10 sm:px-7 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-1.5">
            AI & MACHINE LEARNING LEADERSHIP
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-2">
            Pioneering the Future With{" "}
            <span style={{ color: ACCENT_YELLOW }}>Advanced AI & ML</span>
          </h2>
          <p className="text-xs sm:text-sm text-black/70">
            Accelerating digital transformation with robust machine learning
            models, custom neural networks, and scalable enterprise AI
            architectures.
          </p>
        </div>

        {/* 3 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industriesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  cursor-pointer
                  relative
                  h-[420px]
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  border
                  border-black/10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(234,179,8,0.25)]
                  flex
                  flex-col
                  justify-end
                  p-6
                "
              >
                {/* BACKGROUND IMAGE (Always visible with subtle zoom on hover) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Balanced dark gradient overlay for sharp legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                </div>

                {/* TOP-RIGHT CORNER ARROW BUTTON (Appears on hover) */}
                <div className="absolute top-5 right-5 z-20 h-10 w-10 rounded-full bg-[#fef9c3] flex items-center justify-center text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="relative z-10 flex flex-col justify-end text-white">
                  {/* ICON */}
                  <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mb-3 border border-white/25">
                    <IconComponent size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION (Expands smoothly on hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-1 pb-3 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* TAGS / BADGES AT THE BOTTOM */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/20">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/15 text-white backdrop-blur-sm border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
