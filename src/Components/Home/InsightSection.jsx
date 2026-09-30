import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getContextualPath } from "../../utils/navigation";

const InsightsSection = () => {
  const articles = [
    {
      id: 1,
      category: "SOFTWARE ENGINEERING",
      title: "Clean Code & Refactoring: Writing Maintainable Systems",
      description:
        "Learn essential practices for refactoring legacy codebases, reducing technical debt, and improving long-term code quality.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
      readTime: "5 min read",
    },
    {
      id: 2,
      category: "DEVOPS & CI/CD",
      title: "Building Resilient Automated Pipelines with GitHub Actions",
      description:
        "Accelerate release cycles and ensure continuous delivery through robust testing, automated builds, and cloud deployment pipelines.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80",
      readTime: "4 min read",
    },
    {
      id: 3,
      category: "FULL-STACK DEVELOPMENT",
      title:
        "Mastering React 19 Server Components and Performance Optimizations",
      description:
        "Explore how Server Components streamline data fetching, reduce bundle sizes, and boost modern web performance.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
      readTime: "6 min read",
    },
    {
      id: 4,
      category: "API DESIGN & ARCHITECTURE",
      title: "REST vs GraphQL vs gRPC: Choosing the Right API Strategy",
      description:
        "A detailed architectural breakdown comparing data fetching overhead, typing systems, and ideal backend communication channels.",
      image:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80",
      readTime: "7 min read",
    },
    {
      id: 5,
      category: "CLOUD NATIVE",
      title: "Kubernetes & Docker Container Orchestration at Scale",
      description:
        "Key strategies for managing microservice clusters, auto-scaling backend infrastructure, and maintaining zero downtime.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80",
      readTime: "5 min read",
    },
  ];

  const visibleCards = 2;
  const displayArticles = [...articles, ...articles, ...articles];

  const [currentIndex, setCurrentIndex] = useState(articles.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= articles.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(articles.length);
    } else if (currentIndex < articles.length) {
      setIsTransitioning(false);
      setCurrentIndex(articles.length * 2 - 1);
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] text-slate-900 py-10 px-4 md:px-12 flex items-center justify-center min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading & Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-4">
          <div>
            <div className="inline-block px-3 py-1 bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs font-bold tracking-widest uppercase rounded-md mb-4">
              INSIGHTS
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Insights That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-yellow-600">
                Move Business
              </span>{" "}
              <br />
              Forward
            </h2>

            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
              Explore expert articles, industry trends, and practical insights
              on software engineering, DevOps, cloud architecture, and modern
              web development.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <Link
              to={getContextualPath("blogs")}
              className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wide group w-fit cursor-pointer"
            >
              <span className="border-b-2 border-yellow-400 group-hover:border-yellow-500 transition-colors">
                View All Insights
              </span>
              <svg
                className="w-4 h-4 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* Controls & Dynamic Progress Indicator */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 text-slate-800 hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 text-slate-800 hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex-1 ml-2 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-yellow-400 h-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(((currentIndex % articles.length) + 1) / articles.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Infinite Auto-Sliding Carousel */}
        <div
          className="lg:col-span-8 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex gap-5 transform-gpu ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : "transition-none"
            }`}
            style={{
              // Correctly shifts by exact card width (50%) plus the gap offset (10px) per step
              transform: `translateX(calc(-${currentIndex} * (50% + 10px)))`,
            }}
          >
            {displayArticles.map((article, idx) => (
              <div
                key={`${article.id}-${idx}`}
                className="min-w-[calc(50%-10px)] max-w-[calc(50%-10px)] flex-shrink-0 bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(234,179,8,0.15)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-yellow-300 text-yellow-800 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-md shadow-sm uppercase">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={getContextualPath("blogs")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-yellow-600 transition-colors cursor-pointer"
                  >
                    <span>Read more</span>
                    <svg
                      className="w-3.5 h-3.5 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  <span className="text-[11px] font-medium text-slate-400">
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
