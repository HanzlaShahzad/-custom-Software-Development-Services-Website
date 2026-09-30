import React from "react";
import {
  MessageSquare,
  Send,
  Share2,
  Camera,
  Globe,
  FileCode,
  Mic,
  TrendingUp,
  Megaphone,
  Sparkles,
  Headphones,
  ShoppingBag,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

const AI_MODELS = [
  {
    icon: (
      <MessageSquare size={32} strokeWidth={1.5} className="text-[#fcbc02]" />
    ),
    title: "AI WhatsApp Chatbot",
    description:
      "Automate customer support and engagement instantly on WhatsApp.",
  },
  {
    icon: <Send size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Telegram Chatbot",
    description:
      "Deploy intelligent bots for community management and instant replies.",
  },
  {
    icon: <Share2 size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Facebook Chatbot",
    description:
      "Convert Messenger leads into paying customers 24/7 automatically.",
  },
  {
    icon: <Camera size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Instagram Chatbot",
    description:
      "Engage followers and handle direct message inquiries seamlessly.",
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Website Chatbot",
    description:
      "Embed smart context-aware assistants directly into your web portal.",
  },
  {
    icon: <FileCode size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI WordPress Chatbot",
    description:
      "Integrate robust AI assistant widgets into any WordPress site.",
  },
  {
    icon: <Mic size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "Voice enabled Chatbots",
    description:
      "Deliver real-time natural voice conversations with advanced LLMs.",
  },
  {
    icon: <TrendingUp size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Sales Agent",
    description:
      "Qualify leads and guide prospects through your pipeline autonomously.",
  },
  {
    icon: <Megaphone size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Marketing Agent",
    description:
      "Generate copy, schedule campaigns, and analyze engagement metrics.",
  },
  {
    icon: <Sparkles size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Voice Assistant Apps",
    description:
      "Build custom voice-driven applications for enterprise workflows.",
  },
  {
    icon: (
      <ShoppingBag size={32} strokeWidth={1.5} className="text-[#fcbc02]" />
    ),
    title: "AI Shopping Agent",
    description:
      "Provide personalized product recommendations and shopping support.",
  },
  {
    icon: <UserCheck size={32} strokeWidth={1.5} className="text-[#fcbc02]" />,
    title: "AI Customer Support Agent",
    description:
      "Resolve tickets and troubleshoot user issues with high accuracy.",
  },
];

export default function AIModelsSection() {
  return (
    <section className="w-full bg-[#071525] py-24 px-6 lg:px-12 relative overflow-hidden text-white">
      {/* Background Yellow Glow Accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ backgroundColor: ACCENT_YELLOW }}
      />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-inner">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT_YELLOW }}
            />
            <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-gray-300">
              ENTERPRISE AI CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
            From GPT to Claude: Models That Enable{" "}
            <span
              className="inline-block px-2 rounded"
              style={{ color: ACCENT_YELLOW }}
            >
              Intelligent Enterprise
            </span>{" "}
            Solutions
          </h2>

          <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Empower your operations across channels and platforms with
            cutting-edge AI automation agents built for maximum productivity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {AI_MODELS.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                flex-col
                items-center
                text-center
                p-6
                rounded-2xl
                bg-[#0f1f33]
                border
                border-white/10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#fcbc02]/50
                hover:shadow-[0_20px_40px_-15px_rgba(252,188,2,0.25)]
              "
            >
              {/* Top Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-[#fcbc02]/10 transition-colors">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#fcbc02] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Subtle Indicator */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 rounded-full"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href={getContextualContactUsPath()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            style={{ backgroundColor: ACCENT_YELLOW }}
          >
            <span>Explore All AI Solutions</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
