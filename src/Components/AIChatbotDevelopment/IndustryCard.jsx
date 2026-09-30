import React from "react";
import { ArrowRight, MessageSquareCode, Bot, Cpu } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// AI CHATBOT DEVELOPMENT SERVICES DATA
// =====================================================

const chatbotDevelopmentData = [
  {
    title: "Conversational NLP & Intent Engines",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1000",
    icon: MessageSquareCode,
    description:
      "Build context-aware conversational bots powered by advanced Natural Language Processing. Understand complex user intent, sentiment, and multi-turn dialogue with extreme precision.",
    tags: ["Advanced NLP", "Intent Recognition", "Multi-Turn Context"],
  },
  {
    title: "Omnichannel AI Virtual Assistants",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    icon: Bot,
    description:
      "Deploy intelligent virtual assistants seamlessly across web, mobile apps, WhatsApp, Slack, and social channels to deliver consistent 24/7 customer support and engagement.",
    tags: ["Cross-Platform Sync", "24/7 Availability", "Omnichannel APIs"],
  },
  {
    title: "Enterprise LLM & RAG Chatbots",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    icon: Cpu,
    description:
      "Architect secure Retrieval-Augmented Generation (RAG) chatbots connected directly to your internal enterprise databases, ensuring hallucination-free answers grounded in your data.",
    tags: ["Enterprise RAG", "Secure Vector Search", "Zero Hallucination"],
  },
];

// =====================================================
// AI CHATBOT DEVELOPMENT SECTION
// =====================================================

export default function AiChatbotDevelopmentSection() {
  return (
    <section className="bg-white text-black h-screen max-h-[850px] flex flex-col justify-center px-5 mt-10 sm:px-7 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-1.5">
            AI CHATBOT DEVELOPMENT SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-2">
            Engineering Intelligent Conversations With{" "}
            <span style={{ color: ACCENT_YELLOW }}>Custom AI Chatbots</span>
          </h2>
          <p className="text-xs sm:text-sm text-black/70">
            Transform user engagement and automate complex workflows with
            next-generation conversational AI solutions.
          </p>
        </div>

        {/* 3 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chatbotDevelopmentData.map((item, index) => {
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
                  cursor-pointer
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
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Balanced dark gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                </div>

                {/* TOP-RIGHT CORNER ARROW BUTTON */}
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

                  {/* DESCRIPTION */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-1 pb-3 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* TAGS AT THE BOTTOM */}
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
