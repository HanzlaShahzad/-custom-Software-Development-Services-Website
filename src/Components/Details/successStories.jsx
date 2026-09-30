import React, { useState } from "react";
import { ArrowRight, ChevronRight, Home } from "lucide-react";

const ACCENT_COLOR = "#fdbe04";

// =====================================================
// FILTER CATEGORIES & SUBCATEGORIES DATA
// =====================================================
const filterData = {
  Industries: [
    "Show All",
    "Fintech & Banking",
    "E-Commerce & Retail",
    "SaaS & Enterprise Tech",
  ],
  Services: [
    "Show All",
    "Custom Software Solutions",
    "Mobile App Solutions",
    "Web Development",
    "Cloud & DevOps",
    "API Integration",
  ],
  "AI Solutions": [
    "Show All",
    "Artificial Intelligence",
    "AI Automation",
    "Workflow Automation",
    "Data Analytics",
    "Machine Learning",
  ],
};

// =====================================================
// SUCCESS STORIES / TECH BOXES DATA
// =====================================================
const allSuccessStories = [
  {
    id: 1,
    category: "Fintech & Banking",
    subCat: "Artificial Intelligence",
    title:
      "How We Transformed Revenue Cycle Visibility Through Automated Billing Workflows",
    description:
      "A fintech provider struggled with limited visibility into billing operations, unclear claims status, and inefficient revenue cycle management processes...",
    metrics: [
      { value: "60%", label: "Reduction in manual billing tracking effort" },
      { value: "45%", label: "Faster identification of claims issues" },
      { value: "35+", label: "Hours revenue team time recovered weekly" },
    ],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "SaaS & Enterprise Tech",
    subCat: "Custom Software Solutions",
    title:
      "Architecting a Modular Enterprise Resource Planning Suite from the Ground Up",
    description:
      "An enterprise tech corporation required a fully tailor-made internal ERP to replace legacy monolithic codebases and unify multi-department data...",
    metrics: [
      { value: "70%", label: "Faster data retrieval across internal systems" },
      { value: "99.9%", label: "System reliability and data consistency" },
      { value: "50+", label: "Custom modules seamlessly integrated" },
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "E-Commerce & Retail",
    subCat: "Web Development",
    title:
      "Scaling High-Traffic Retail Platforms to Handle Millions of Flash Sale Requests",
    description:
      "A major e-commerce storefront suffered server crashes during peak holiday events due to monolithic architecture limitations and poor caching strategies...",
    metrics: [
      { value: "5x", label: "Increase in concurrent checkout capacity" },
      { value: "0", label: "Downtime during Black Friday traffic surges" },
      { value: "-60%", label: "Page load latency globally" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "SaaS & Enterprise Tech",
    subCat: "Custom Software Solutions",
    title:
      "Building a High-Performance Custom Core Engine for B2B Client Portals",
    description:
      "A rapidly scaling enterprise platform needed a custom backend infrastructure capable of handling high-frequency API calls and real-time syncing...",
    metrics: [
      { value: "3x", label: "Increase in overall system processing speed" },
      { value: "90%", label: "Decrease in transaction timeouts" },
      { value: "10M+", label: "Daily requests handled smoothly" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    category: "Fintech & Banking",
    subCat: "Workflow Automation",
    title:
      "Streamlining KYC and Loan Approvals with Secure Document Extraction Pipelines",
    description:
      "A digital lender was bogged down by manual KYC verification steps that took days to process applicant portfolios and financial statements...",
    metrics: [
      { value: "75%", label: "Reduction in loan processing time" },
      { value: "99.8%", label: "OCR data extraction accuracy" },
      { value: "3x", label: "Daily application onboarding volume" },
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    category: "SaaS & Enterprise Tech",
    subCat: "Cloud & DevOps",
    title:
      "Accelerating Deployment Cycles with Automated MLOps and Cloud Infrastructure",
    description:
      "A growing SaaS business experienced multi-day release cycles and frequent staging bugs that hampered feature rollouts for enterprise clients...",
    metrics: [
      { value: "85%", label: "Faster code-to-production pipelines" },
      { value: "99.99%", label: "Core service uptime achieved" },
      { value: "-50%", label: "Cloud hosting resource waste" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    category: "E-Commerce & Retail",
    subCat: "Artificial Intelligence",
    title: "Personalizing Product Recommendations Using Deep Learning Engines",
    description:
      "Retail merchants needed a smarter cross-sell and up-sell strategy to increase average order values across diverse user segments...",
    metrics: [
      { value: "+28%", label: "Average order value increase" },
      { value: "3.5x", label: "Click-through rate on suggested products" },
      { value: "45%", label: "Higher repeat customer retention" },
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    category: "Fintech & Banking",
    subCat: "Custom Software Solutions",
    title:
      "Developing a Secure Proprietary Trading Dashboard and Portfolio Tracker",
    description:
      "A boutique wealth management firm required an isolated, highly secure custom software system to monitor live equities and client assets...",
    metrics: [
      { value: "100%", label: "Military-grade data encryption compliance" },
      { value: "<5ms", label: "Live price stream update latency" },
      { value: "4.9/5", label: "Internal portfolio manager satisfaction" },
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    category: "Fintech & Banking",
    subCat: "Machine Learning",
    title:
      "Detecting Fraudulent Transactions in Milliseconds Using Real-Time ML Models",
    description:
      "A global payment gateway needed an automated fraud detection mechanism capable of flagging suspicious credit card activities instantly...",
    metrics: [
      { value: "<15ms", label: "Fraud scoring response time" },
      { value: "99.5%", label: "Fraud detection precision rate" },
      { value: "$2.4M", label: "Fraudulent chargebacks prevented annually" },
    ],
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    category: "E-Commerce & Retail",
    subCat: "AI Automation",
    title:
      "Automating Customer Support Queries with Intelligent Conversational Bots",
    description:
      "An online retail leader faced soaring customer support ticket backlogs during seasonal rollouts and product launches...",
    metrics: [
      { value: "70%", label: "Automated ticket resolution rate" },
      { value: "24/7", label: "Instant conversational support availability" },
      { value: "50%", label: "Reduction in support operational overhead" },
    ],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
  },
  // --- NEW MOBILE APP & API INTEGRATION BOXES ---
  {
    id: 11,
    category: "E-Commerce & Retail",
    subCat: "Mobile App Solutions",
    title:
      "Building a Cross-Platform Mobile Shopping App with Native Performance",
    description:
      "An emerging retail brand needed a high-performance iOS and Android shopping app featuring instant push notifications, biometrics, and cart sync...",
    metrics: [
      { value: "4.9★", label: "Average app store rating across platforms" },
      { value: "3.2x", label: "Higher mobile conversion rate vs mobile web" },
      { value: "<1s", label: "Average screen transition latency" },
    ],
    image:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    category: "Fintech & Banking",
    subCat: "Mobile App Solutions",
    title:
      "Launching a Secure Mobile Banking App with Offline Biometric Authentication",
    description:
      "A next-gen digital bank required a robust, highly secure mobile app allowing users to manage accounts, transfer funds, and authenticate instantly...",
    metrics: [
      { value: "500K+", label: "Active monthly mobile users onboarded" },
      { value: "100%", label: "Zero security breaches reported post-launch" },
      { value: "99.8%", label: "Crash-free user session rate" },
    ],
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    category: "SaaS & Enterprise Tech",
    subCat: "API Integration",
    title:
      "Connecting Legacy ERPs to Modern SaaS Tools via Unified REST & GraphQL APIs",
    description:
      "An enterprise client struggled with fragmented data structures across disparate third-party applications, leading to manual copy-paste bottlenecks...",
    metrics: [
      { value: "95%", label: "Reduction in manual data entry errors" },
      { value: "20ms", label: "Average webhook event processing speed" },
      { value: "40+", label: "Enterprise systems successfully connected" },
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    category: "E-Commerce & Retail",
    subCat: "API Integration",
    title:
      "Automating Multi-Vendor Marketplace Syncing with Real-Time Payment APIs",
    description:
      "A multi-vendor digital marketplace required secure, low-latency API connections to split payments, manage inventory, and sync tracking info automatically...",
    metrics: [
      { value: "99.99%", label: "Payment gateway event sync success" },
      { value: "3x", label: "Faster seller payout distribution processing" },
      {
        value: "-80%",
        label: "Vendor support ticket volume regarding billing",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0a67d553c2a5?w=800&auto=format&fit=crop&q=80",
  },
];

export default function FilterableSuccessStories() {
  const [activeMainTab, setActiveMainTab] = useState("Industries");
  const [activeSubFilter, setActiveSubFilter] = useState("Show All");

  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
    setActiveSubFilter("Show All");
  };

  const filteredStories = allSuccessStories.filter((story) => {
    if (activeSubFilter === "Show All") {
      if (activeMainTab === "AI Solutions") {
        return (
          story.subCat.includes("AI") ||
          story.subCat.includes("Artificial") ||
          story.subCat.includes("Machine") ||
          story.subCat.includes("Automation")
        );
      }
      return true;
    }

    if (activeMainTab === "Industries") {
      return story.category === activeSubFilter;
    }
    if (activeMainTab === "Services" || activeMainTab === "AI Solutions") {
      return story.subCat === activeSubFilter;
    }
    return true;
  });

  return (
    <div className="min-h-screen mt-30 bg-[#071525] text-white font-sans selection:bg-[#fdbe04] selection:text-black">
      {/* FILTER TABS SECTION */}
      <section className="max-w-[1450px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        {/* Main Header Tabs */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-white/10 pb-4 mb-6">
          {Object.keys(filterData).map((tab) => {
            const isActive = activeMainTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleMainTabChange(tab)}
                className={`text-base sm:text-lg font-bold tracking-tight pb-2 transition-all relative cursor-pointer ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab}
                {isActive && (
                  <span
                    className="absolute bottom-[-17px] left-0 right-0 h-[3px] rounded-full"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Sub-Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {filterData[activeMainTab].map((subFilter) => {
            const isSubActive = activeSubFilter === subFilter;
            return (
              <button
                key={subFilter}
                onClick={() => setActiveSubFilter(subFilter)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  isSubActive
                    ? "text-black shadow-md border-transparent"
                    : "bg-white/5 text-white/80 border-white/15 hover:bg-white/10 hover:text-white"
                }`}
                style={isSubActive ? { backgroundColor: ACCENT_COLOR } : {}}
              >
                {subFilter}
              </button>
            );
          })}
        </div>
      </section>

      {/* SUCCESS STORIES GRID */}
      <section className="max-w-[1450px] mx-auto px-6 lg:px-12 pb-24">
        {filteredStories.length === 0 ? (
          <div className="text-center py-24 text-white/50 text-base font-mono">
            No success stories found matching this filter combination.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-[#0b1d32]/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-yellow-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Category Pill Tag */}
                  <span
                    className="inline-block px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-black mb-4"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    {story.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-3 group-hover:text-yellow-400 transition-colors">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                    {story.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 py-6 border-t border-b border-white/10 mb-6">
                    {story.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span
                          className="text-2xl sm:text-3xl font-black font-mono block mb-1"
                          style={{ color: ACCENT_COLOR }}
                        >
                          {m.value}
                        </span>
                        <span className="text-[11px] text-white/60 font-medium leading-tight block">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Thumbnail Image Box */}
                  <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#071525]">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/80 via-transparent to-transparent opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
