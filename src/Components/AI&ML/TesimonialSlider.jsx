import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// TESTIMONIALS DATA (AI & ML DEVELOPMENT FOCUS)
// =====================================================

const testimonialsData = [
  {
    name: "Sarah Coleman",
    role: "VP of Engineering at Precision Analytics Corp",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    industry: "Enterprise AI & Predictive Modeling",
    location: "Illinois, US",
    tags: [
      "Custom Machine Learning Models",
      "Predictive Analytics",
      "MLOps & Deployment",
    ],
    quote:
      "Integrating Codewire's custom machine learning models revolutionized our data forecasting pipeline. We automated predictive insights with exceptional accuracy and significantly reduced manual processing bottlenecks. Their deep technical expertise in AI engineering exceeded all expectations.",
  },
  {
    name: "Michael Vance",
    role: "Chief Technology Officer at Apex Logistics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    industry: "Logistics & Supply Chain Intelligence",
    location: "New York, US",
    tags: [
      "Natural Language Processing",
      "Real-Time Data Pipelines",
      "Cloud AI Infrastructure",
    ],
    quote:
      "The advanced NLP and automated analytics solutions deployed by Codewire transformed our supply chain routing. We achieved a 40% improvement in demand forecasting efficiency and logistics visibility. An absolute game-changer for our enterprise operations.",
  },
  {
    name: "Marcus Vance",
    role: "VP of Engineering at CloudScale Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    industry: "Enterprise Software & Cloud Infrastructure",
    location: "Austin, Texas",
    tags: ["Mobile App Development", "API Integration", "Cloud Architecture"],
    quote:
      "Codewire's expertise in custom mobile app development and seamless API integration transformed our legacy architecture into a high-performance ecosystem. Their engineering team delivered robust solutions that scaled with our growing user base effortlessly.",
  },
];

// =====================================================
// TESTIMONIALS CONTINUOUS SLIDER SECTION
// =====================================================

export default function AIMLTestimonialsSlider() {
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
            See Why Enterprises Trust Our AI Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Voices of Global Leaders on Our{" "}
            <span style={{ color: ACCENT_YELLOW }}>
              AI & ML Development Excellence
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
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 2.1c1.1 1.4 2.2 3.6 2.8 6.2H6.9C7.7 8.8 9.3 6.9 11 4.1zm-4.9 7.9h5.5c.3 2.4 1 4.6 2.1 6.3-1.9 1.5-4.3 2.4-6.9 2.5a8.2 8.2 0 01-.7-8.8zm6.9 8.2c1.4-.1 3.1-.7 4.6-1.8.6-1.2 1-2.6 1.2-4.1h-5.8c-.3 2.2-.7 4.1-1.4 6.1zm6.9-8.2h-5.8c-.2-2.6-.8-4.9-1.8-6.9 2.4-.9 5.3-.6 7.6.9 1.1 1.5 1.7 3.5 1.7 6zm-9.3-7.2c-2.1 1.1-3.7 3.1-4.6 5.6h5.8c.2-1.8.7-3.5 1.6-5.1-.6-.2-1.1-.3-1.8-.5z" />
                  </svg>
                  {current.location}
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
