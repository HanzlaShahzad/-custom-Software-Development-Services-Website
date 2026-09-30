import React from "react";
import {
  ArrowRight,
  Bot,
  Cpu,
  Sparkles,
  Eye,
  LineChart,
  Workflow,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";
const ACCENT_YELLOW = "#eab308";

// =====================================================
// AI & ML SERVICES CARDS DATA (6 CARDS)
// =====================================================

const aiServicesCards = [
  {
    title: "Chatbots & Virtual Agents",
    description:
      "Artificial intelligence development services expand customer service capabilities. Our intelligent virtual agents process a high volume of inquiries simultaneously & provide immediate feedback.",
    icon: Bot,
    link: "/ai-chatbot-development",
  },
  {
    title: "Agentic AI Services",
    description:
      "Our agentic AI services are custom-built to automate decisions & adapt well to real-world challenges using advanced algorithms & natural language processing.",
    icon: Cpu,
    link: "/agentic-ai-services",
  },
  {
    title: "Generative AI Development",
    description:
      "Revamp your existing software products with our end-to-end generative AI & ML development services to elevate performance & user experience.",
    icon: Sparkles,
    link: "/generative-ai-development",
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Enable systems to derive meaningful information from digital images and videos. We build custom computer vision pipelines for recognition and object detection.",
    icon: Eye,
    link: "/computer-vision",
  },
  {
    title: "Predictive Analytics & ML",
    description:
      "Leverage enterprise data to predict future trends and operational risks. Our data scientists build robust machine learning models for strategic foresight.",
    icon: LineChart,
    link: "/predictive-analytics",
  },
  {
    title: "Custom LLM & Fine-Tuning",
    description:
      "Deploy secure, domain-specific Large Language Models tailored to your corporate data with optimized RAG architectures and fine-tuning.",
    icon: Workflow,
    link: "/custom-llm",
  },
];

// =====================================================
// AI & ML SERVICES SHOWCASE SECTION
// =====================================================

export default function AIServicesShowcase() {
  return (
    <section className="mx-auto max-w-[1450px] px-5 py-12 sm:px-7 lg:px-10">
      {/* SECTION HEADER */}
      <div className="mb-12 max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/50 mb-2">
          AI ML DEVELOPMENT SERVICES & SOLUTIONS
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-4">
          Transforming Ideas into Scalable Realities Through World-Class{" "}
          <span style={{ color: ACCENT_YELLOW }}>AI Solutions.</span>
        </h2>
        <p className="text-base text-black/70 leading-relaxed">
          We help businesses unlock growth with intelligent, future-ready AI
          solutions. Our specialists deliver tailored strategies by integrating
          agentic AI, custom LLMs, & generative AI.
        </p>
      </div>

      {/* TWO ROWS WITH THREE BOXES EACH */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiServicesCards.map((card, index) => {
          const IconComponent = card.icon;
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
                rounded-2xl
                border
                border-black/10
                bg-white
                p-8
                min-h-[320px]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_15px_30px_rgba(234,179,8,0.2)]
                hover:border-yellow-400
                flex
                flex-col
                justify-between
                overflow-hidden
              "
            >
              {/* YELLOW CORNER SHAPE (Visible by default, hides on hover) */}
              <div
                className="
                  absolute 
                  top-0 
                  right-0 
                  w-16 
                  h-16 
                  bg-[#eab308] 
                  rounded-bl-full 
                  flex 
                  items-start 
                  justify-end 
                  p-3 
                  text-black
                  transition-all 
                  duration-300 
                  group-hover:opacity-0 
                  group-hover:scale-75
                "
              >
                {/* <ArrowRight size={16} strokeWidth={2.5} className="mt-1 mr-1" /> */}
              </div>

              {/* ALTERNATE ARROW THAT APPEARS ON HOVER */}
              <div
                className="
                  absolute 
                  top-6 
                  right-6 
                  h-9 w-9 
                  rounded-full 
                  bg-[#fef9c3] 
                  flex 
                  items-center 
                  justify-center 
                  text-black
                  opacity-0 
                  scale-75
                  group-hover:opacity-100 
                  group-hover:scale-100 
                  transition-all 
                  duration-300
                "
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>

              <div>
                {/* ICON */}
                <div className="h-12 w-12 rounded-xl bg-[#fef9c3] flex items-center justify-center text-black mb-6">
                  <IconComponent size={24} strokeWidth={2} />
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="text-xl font-bold tracking-tight text-black mb-3 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* CARD BOTTOM LINK */}
              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-black">
                <span>Explore service</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
