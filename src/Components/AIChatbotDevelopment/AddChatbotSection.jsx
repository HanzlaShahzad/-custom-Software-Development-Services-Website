import React from "react";
import { Sparkles, Code2, ArrowRight } from "lucide-react";
import {
  getContextualContactUsPath,
} from "../../utils/navigation";

const ACCENT_YELLOW = "#fcbc02";

const PLATFORMS = [
  { name: "WordPress", subtitle: "CMS" },
  { name: "Shopify", subtitle: "E-Commerce" },
  { name: "Squarespace", subtitle: "Builder" },
  { name: "Weebly", subtitle: "Sites" },
  { name: "Wix", subtitle: "Cloud" },
  { name: "Joomla!", subtitle: "Portal" },
  { name: "GoDaddy", subtitle: "Hosting" },
  { name: "Bubble", subtitle: "No-Code" },
  { name: "React", subtitle: "Web Apps" },
  { name: "Blogger", subtitle: "Blogs" },
];
export default function SingleScreenAddChatbot() {
  return (
    <section className="relative w-full h-screen max-h-[850px] min-h-[700px] bg-[#07111e] flex flex-col justify-center px-6 lg:px-12 overflow-hidden font-sans">
      {/* Ambient Radial Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] opacity-15 blur-[110px] pointer-events-none rounded-full"
        style={{ backgroundColor: ACCENT_YELLOW }}
      />

      <div className="relative z-10 mx-auto max-w-5xl w-full text-center flex flex-col justify-center h-full">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mx-auto mb-4 backdrop-blur-md">
          <Sparkles size={13} style={{ color: ACCENT_YELLOW }} />
          <span className="text-[11px] font-mono tracking-widest uppercase text-gray-300">
            Empowering Conversations with AI
          </span>
        </div>

        {/* Main Header Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight mb-2.5">
          Add Your Chatbot to{" "}
          <span
            style={{ color: ACCENT_YELLOW }}
            className="relative inline-block"
          >
            Any Website
          </span>
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-10 flex items-center justify-center gap-2 font-medium">
          <Code2 size={16} style={{ color: ACCENT_YELLOW }} />
          Install our AI chatbots on any website with one line of code[cite: 2].
        </p>

        {/* Platform Integration Cards Grid (Increased box size & padding) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto w-full">
          {PLATFORMS.map((platform, index) => (
            <a
              key={index}
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0f1d30]/90 hover:bg-[#14263f] border border-white/10 hover:border-[#fcbc02]/60 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(252,188,2,0.15)] flex flex-col items-center justify-center min-h-[96px] cursor-pointer"
            >
              <span className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:scale-105 transition-transform">
                {platform.name}
              </span>
              <span className="text-[11px] text-gray-400 font-medium mt-1">
                {platform.subtitle}
              </span>

              <div
                className="absolute bottom-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />
            </a>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-10">
          <a
            href={getContextualContactUsPath()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-[#07111e] transition-all duration-300 hover:shadow-[0_0_25px_rgba(252,188,2,0.4)] hover:scale-105"
            style={{ backgroundColor: ACCENT_YELLOW }}
          >
            Get Started Free
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
