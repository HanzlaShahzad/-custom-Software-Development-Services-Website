import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Globe, Quote } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// TESTIMONIALS DATA (AI CHATBOT FOCUS)
// =====================================================

const testimonialsData = [
  {
    name: "Arthur Pendelton",
    role: "Chief Customer Officer at Global FinTech Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    industry: "Enterprise Banking & Support",
    location: "London, UK",
    tags: [
      "Custom LLM Chatbots",
      "Retrieval-Augmented Generation (RAG)",
      "Zero-Hallucination Guardrails",
    ],
    quote:
      "Implementing Codewire's custom LLM chatbot and RAG pipeline cut our tier-1 support ticket backlog by over 65%. Customers get instant, accurate financial answers sourced directly from our compliance documentation without hallucinations. Absolutely exceptional execution.",
  },
  {
    name: "Samantha Wright",
    role: "VP of Product at OmniRetail Corp",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    industry: "E-Commerce & Omnichannel",
    location: "New York, US",
    tags: [
      "Multi-Agent AI Workflows",
      "WhatsApp & CRM Integration",
      "Voice Bots",
    ],
    quote:
      "The multi-agent conversational AI system Codewire built for us handles complex order tracking, returns, and cross-selling seamlessly across web and WhatsApp. Our customer satisfaction metrics have hit an all-time high since deployment.",
  },
  {
    name: "Dr. Liam Chen",
    role: "Head of Digital Transformation at EduLearn Global",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    industry: "EdTech & Knowledge Platforms",
    location: "Toronto, Canada",
    tags: ["LLM Fine-Tuning", "Interactive Voice Assistants", "Scalable MLOps"],
    quote:
      "Codewire fine-tuned open-source LLMs on our proprietary curriculum and built lightning-fast voice tutors for our students. Their deep understanding of prompt alignment and AI security guardrails is unmatched in the industry.",
  },
];

// =====================================================
// TESTIMONIALS CONTINUOUS SLIDER SECTION
// =====================================================

export default function AIChatbotTestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(
    "translate-x-0 opacity-100",
  );
  const [isAnimating, setIsAnimating] = useState(false);

  // Use a ref to track the latest index for the auto-slide timer without re-triggering hooks incorrectly
  const indexRef = useRef(currentIndex);
  indexRef.current = currentIndex;

  const triggerSlide = (newIndex, direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Slide out direction
    setSlideDirection(
      direction === "next"
        ? "-translate-x-12 opacity-0"
        : "translate-x-12 opacity-0",
    );

    setTimeout(() => {
      setCurrentIndex(newIndex);
      // Prepare start position from opposite side
      setSlideDirection(
        direction === "next"
          ? "translate-x-12 opacity-0"
          : "-translate-x-12 opacity-0",
      );

      requestAnimationFrame(() => {
        setSlideDirection("translate-x-0 opacity-100");
        setTimeout(() => setIsAnimating(false), 300);
      });
    }, 300);
  };

  // Continuous Auto-slide timer that loops endlessly
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % testimonialsData.length;
      triggerSlide(nextIndex, "next");
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    triggerSlide(newIndex, "prev");
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonialsData.length;
    triggerSlide(newIndex, "next");
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="bg-[#071525] text-white h-screen max-h-[850px] flex flex-col justify-center px-5 sm:px-7 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
            See Why Enterprises Trust Our Conversational AI
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Voices of Global Leaders on Our{" "}
            <span style={{ color: ACCENT_YELLOW }}>
              AI Chatbot & LLM Excellence
            </span>
          </h2>
        </div>

        {/* SYNCHRONIZED CONTINUOUS SLIDER CONTAINER */}
        <div
          className={`
            grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300 transform ${slideDirection}
          `}
        >
          {/* LEFT: CLIENT IMAGE (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* RIGHT: TESTIMONIAL DETAILS (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* CLIENT NAME & ROLE */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {current.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                  {current.role}
                </p>
              </div>

              {/* TAGS WITH YELLOW ACCENT */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-semibold text-black shadow-sm"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {current.industry}
                </span>

                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10 flex items-center gap-1.5">
                  <Globe size={12} /> {current.location}
                </span>

                {current.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded-full text-xs font-medium bg-transparent text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* QUOTE / REVIEW */}
              <div className="relative mb-6">
                <Quote
                  size={28}
                  className="absolute -top-3 -left-5 text-yellow-400/20"
                  strokeWidth={1}
                />
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light italic">
                  "{current.quote}"
                </p>
              </div>
            </div>

            {/* CONTROLS (Prev / Next & Slide Indicators) */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              {/* DOTS */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      triggerSlide(idx, idx > currentIndex ? "next" : "prev")
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-6 bg-yellow-400"
                        : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* PREV / NEXT BUTTONS */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors cursor-pointer group"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft
                    size={15}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  <span>Prev</span>
                </button>
                <span className="text-white/30">/</span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors cursor-pointer group"
                  aria-label="Next Testimonial"
                >
                  <span>Next</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
