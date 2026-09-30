import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getContextualOurWorkPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const stories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "How Self Hosted LLMs Delivered 100% Data Control...",
    description:
      "By combining n8n & Ollama, Codewire developed a powerful, scalable workflow that enables seamless interaction with locally hosted Large Language Models (LLMs). This innovative platform ensures complete data privacy and control.",
    tags: ["Custom Development", "Blockchain Integration", "Workflow Design"],
    industry: "Artificial Intelligence, Blockchain, Automation",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "AI-Powered Customer Support Reduced Response Time by 70%",
    description:
      "We built an intelligent chatbot system integrated with the client's CRM that handles 80% of support tickets automatically, dramatically improving customer satisfaction scores.",
    tags: ["AI Chatbot", "CRM Integration", "Automation"],
    industry: "E-commerce, Customer Support",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Custom Workflow Automation Saved 120 Hours Per Month",
    description:
      "Codewire designed and implemented an end-to-end automation system using n8n and custom AI agents that eliminated repetitive manual tasks across sales, operations, and finance teams.",
    tags: ["Process Automation", "AI Agents", "Integration"],
    industry: "SaaS, Operations",
  },
];

export default function SuccessStoriesSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const total = stories.length;

  // Create extended array: original + first slide cloned at the end
  const extendedStories = [...stories, stories[0]];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (current >= total) return; // safety
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (current <= 0) {
      // Jump to the cloned last position instantly, then go back
      setIsTransitioning(false);
      setCurrent(total);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrent(total - 1);
      }, 20);
      return;
    }
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  // When we reach the cloned first slide, instantly jump back to real first
  useEffect(() => {
    if (current === total) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700); // must match the CSS duration
      return () => clearTimeout(timer);
    }
  }, [current, total]);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
              OUR SUCCESS STORIES
            </p>
            <h2 className="text-[32px] font-semibold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[46px]">
              Success Stories That Prove Our
              <br />
              Expertise
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              See how our AI automation solutions help businesses streamline
              operations, reduce costs, and drive measurable growth.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={getContextualOurWorkPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md px-5 py-3 text-[13px] font-semibold
                uppercase tracking-wide text-white transition hover:brightness-95
              "
              style={{ backgroundColor: ACCENT }}
            >
              VIEW ALL SUCCESS STORIES →
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-gray-200 text-gray-600 transition hover:bg-gray-50
                "
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-gray-200 text-gray-600 transition hover:bg-gray-50
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ========== INFINITE SLIDER ========== */}
        <div className="relative mt-12 overflow-hidden rounded-2xl shadow-lg">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {extendedStories.map((story, index) => (
              <div
                key={`${story.id}-${index}`}
                className="grid min-w-full grid-cols-1 lg:grid-cols-2"
              >
                {/* Image Container with identical uniform dimensions and object-contain so full landscape images fit perfectly without cutting */}
                <div className="relative h-[320px] lg:h-[420px] w-full bg-[#0b132b] flex items-center justify-center overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      max-h-full max-w-full object-contain
                      transition-transform duration-500 ease-out
                      hover:scale-105
                    "
                  />
                </div>

                {/* Content with blue background */}
                <div className="flex flex-col justify-between bg-[#0f172a] p-8 text-white lg:p-10">
                  <div>
                    <h3 className="text-[24px] font-bold leading-snug lg:text-[28px]">
                      {story.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-relaxed text-gray-300 lg:text-[15px]">
                      {story.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 px-3 py-1 text-[12px] text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-[13px] text-gray-400">
                      <span className="font-medium text-white/70">
                        INDUSTRY:
                      </span>{" "}
                      {story.industry}
                    </p>
                  </div>

                  <a
                    href={getContextualOurWorkPath()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold transition hover:gap-3"
                    style={{ color: ACCENT }}
                  >
                    Read the Full Success Story
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
