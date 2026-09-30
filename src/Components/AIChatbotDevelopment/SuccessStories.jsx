import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { getContextualOurWorkPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const stories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    title: "Enterprise LLM Chatbot Automated 85% of Customer Inquiries",
    description:
      "By integrating a custom RAG-powered conversational assistant with their CRM, Codewire enabled instant, zero-hallucination support responses, cutting average resolution time down to seconds.",
    tags: ["Conversational AI", "RAG Pipeline", "LLM Integration"],
    industry: "Fintech, Enterprise Customer Support",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title:
      "Cross-Platform Mobile App & Real-Time API Integration Scaled User Engagement",
    description:
      "Codewire architected a high-performance cross-platform mobile application coupled with unified REST and GraphQL APIs, reducing data synchronization latency by 85% and boosting active mobile users.",
    tags: ["Mobile App Development", "API Integration", "Custom Software"],
    industry: "Enterprise Software, SaaS",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    title: "Fine-Tuned Domain LLM Saved 150+ Support Hours Weekly",
    description:
      "Codewire fine-tuned an open-source foundational model on internal product documentation and technical manuals, creating a specialized assistant that technical support teams rely on daily.",
    tags: ["Model Fine-Tuning", "Knowledge Base RAG", "Workflow Automation"],
    industry: "SaaS, Enterprise Technology",
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
            <p className=" text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
              OUR SUCCESS STORIES
            </p>
            <h2 className="text-[32px] font-semibold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[46px]">
              Success Stories That Prove Our
              <br />
              Expertise
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              See how our AI chatbot solutions help businesses streamline
              support, secure data, and drive measurable conversational growth.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={getContextualOurWorkPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md px-5 py-3 text-[13px] font-semibold
                uppercase tracking-wide text-white transition hover:brightness-95
              "
              style={{ backgroundColor: ACCENT }}
            >
              VIEW ALL SUCCESS STORIES →
            </a>

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
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden lg:h-[420px]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-500 ease-out
                      hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
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
