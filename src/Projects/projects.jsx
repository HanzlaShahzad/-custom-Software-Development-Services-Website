import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    category: "AI & Automation",
    categoryLabel: "FOOD & HOSPITALITY",
    title: "ChefsHub",
    description:
      "ChefsHub is a full-stack platform connecting chefs with suppliers, offering a Laravel-powered backend API, public website, supplier and chef admin panels, a Nuxt.js-based admin dashboard, and a native Flutter mobile app.",
    challenge:
      "The client needed one backend to power four very different experiences — a public website, supplier and chef admin panels, a platform-wide admin dashboard, and a native mobile app — without duplicating business logic or compromising on scale.",
    solution:
      "We built a Laravel 11 + Sanctum backend exposing separate route groups per client, paired with a Vue.js/Vite public site, a Nuxt.js admin SPA, and a Flutter mobile app for chefs and users.",
    features: [
      "One Laravel backend powering web, admin, supplier and mobile clients",
      "Native Flutter app (iOS & Android) on a dedicated Sanctum-authenticated Mobile API",
      "Full marketplace: product catalog, cart, orders, promo codes, Stripe checkout",
      "Training courses with scheduled sessions, bookings and payments",
      "WhatsApp integration, push notifications (FCM) and templated email",
      "Admin panel with activity/audit logging, moderation and system-wide settings",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Vue.js", "Nuxt.js", "Flutter"],
    image: "https://codewiresolutions.com/images/chefshub.jpeg",
    imagePosition: "left",
  },
  {
    id: 2,
    category: "Web Applications",
    categoryLabel: "AI / SAAS",
    title: "Project360 AI",
    description:
      "An AI-powered project management platform that automates planning, tracking and reporting for modern teams.",
    challenge:
      "Teams were wasting hours on manual status updates, reports and task prioritization across disconnected tools.",
    solution:
      "We built an intelligent platform with AI-driven task suggestions, auto-generated progress reports and real-time collaboration — all in one dashboard.",
    features: [
      "AI-assisted planning",
      "Automated reporting",
      "Faster project delivery",
    ],
    tech: ["Laravel", "OpenAI", "React", "Node.js", "AWS"],
    image: "https://codewiresolutions.com/images/project360.jpeg",
    imagePosition: "left",
  },
  {
    id: 3,
    category: "AI & Automation",
    categoryLabel: "RECRUITMENT / HR TECH",
    title: "CoolBuffs — AI-Powered Recruitment Platform",
    description:
      "CoolBuffs is a full-scale job board and recruitment platform serving three user types — job seekers, employers, and platform admins — with a custom-built AI assistant layered on top to help visitors get instant answers about the platform.",
    challenge:
      "Traditional job boards make users dig through FAQs, pricing pages, and dashboards to find answers. CoolBuffs solves this with a site-wide AI chatbot that understands the platform’s own documentation and can answer visitor questions in real time.",
    solution:
      "We built a multi-role Laravel + Vue.js job board with a custom-built, RAG-powered AI assistant layered on top — a decoupled Python/FastAPI microservice that answers using content from the platform’s own knowledge base and streams responses in real time.",
    features: [
      "Custom RAG-based AI chatbot (not a third-party plugin)",
      "Swappable AI provider layer: Gemini, OpenAI, Anthropic, OpenRouter, Ollama",
      "Local FAISS vector search — no third-party vector DB lock-in",
      "Redis-backed rate limiting with full usage logging",
      "Admin AI control panel with health checks, reindexing and token-usage analytics",
      "Multi-gateway checkout: Stripe, PayPal, PayU",
    ],
    tech: ["Laravel", "Vue.js", "Python (FastAPI)", "MySQL", "Redis"],
    image: "https://codewiresolutions.com/images/coolbuffs.jpeg",
    imagePosition: "left",
  },
  {
    id: 4,
    category: "Web Applications",
    categoryLabel: "FINANCE / REAL ESTATE",
    title: "Broker Con Valor",
    description:
      "A professional brokerage and real estate advisory website for an Italian financial services firm.",
    challenge:
      "The client needed a clean, trustworthy web presence in Italian that clearly communicated their financial and real estate services to high-value clients.",
    solution:
      "We built a polished multilingual WordPress site with service pages, lead capture forms and SEO optimization targeting the Italian market.",
    features: [
      "Professional brand presence",
      "Lead generation ready",
      "SEO optimized for Italy",
    ],
    tech: ["Laravel", "PHP", "JavaScript", "CSS"],
    image: "https://codewiresolutions.com/images/brokerconvalor.jpeg",
    imagePosition: "left",
  },
  {
    id: 5,
    category: "Web Applications",
    categoryLabel: "TECHNOLOGY",
    title: "Healthy Food",
    description:
      "A modern web platform built for a tech-forward business, featuring a clean UI, fast performance and scalable architecture.",
    challenge:
      "The client needed a robust, maintainable web application that could grow with their business and provide an excellent user experience from day one.",
    solution:
      "We architected a full-stack React + Node.js application with a component-driven frontend, RESTful API and cloud-ready infrastructure.",
    features: [
      "Sub-2s load time",
      "Scalable cloud architecture",
      "Clean component system",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://codewiresolutions.com/images/pro1.jpeg",
    imagePosition: "left",
  },
  {
    id: 6,
    category: "Web Applications",
    categoryLabel: "WEB APPLICATIONS",
    title: "CareOX v2",
    description:
      "CareOX v2 is a multi-tenant order fulfilment and warehouse management platform that lets a company manage its entire operations pipeline — from sales orders to shipment — in one system.",
    challenge:
      "Fulfilment businesses needed one system to run warehouse operations, multi-channel orders, CRM, finance and email — instead of stitching together spreadsheets and disconnected tools across multiple client companies.",
    solution:
      "We built a Laravel 8 + Inertia/Vue 3 ERP-style platform with Admin, Super Admin and Fulfilment roles, a full physical warehouse hierarchy, order/fulfiliment/shipment workflows, direct marketplace integrations, built-in CRM and finance modules, and an in-app email client with IMAP support.",
    features: [
      "Full warehouse hierarchy: Warehouse, Building, Aisle, Bay, Bin, Container, Stock",
      "Multi-tenant company/admin/super-admin role management",
      "Direct sales-channel integrations: Amazon, Groupon, Wowcher, Gogroupie, Ejogga, Xstreamgym",
      "Built-in CRM: customers, beneficiaries, deals, quotations, cases",
      "Finance suite: invoices, payments, payment gateways, currency exchange, payroll",
      "In-app email client (Inbox, Sent, Trash, Junk) with IMAP integration",
    ],
    tech: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "Docker"],
    image: "https://codewiresolutions.com/images/careox.png",
    imagePosition: "right",
  },
  {
    id: 7,
    category: "Web Applications",
    categoryLabel: "WEB APPLICATIONS",
    title: "XStream Gym",
    description:
      "XStream Gym is a full-stack fitness platform that connects certified trainers with members through live-streamed and on-demand workout classes, built with Laravel and Inertia.js.",
    challenge:
      "The client wanted a single platform that could stream live fitness classes in real time, run a trainer marketplace with scheduling and payouts, track member health and nutrition, and keep members socially engaged — all under one role-based admin system.",
    solution:
      "We built a Laravel + Inertia.js platform with a WebSocket/Redis streaming backend for live classes, a trainer marketplace with profiles, schedules and reviews, Stripe-powered subscriptions and trainer payouts, integrated diet/nutrition and wearable-device tracking, social features, and a role-based admin dashboard.",
    features: [
      "Real-time live class streaming via WebSocket/Redis with class series and attendance tracking",
      "Trainer marketplace with profiles, schedules, class management and reviews",
      "Stripe-powered tiered subscriptions, trainer payouts and bank/withdrawal management",
      "Health & nutrition tracking with diet plans, meal logging and wearable device sync",
      "Social features: friend connections, messaging, likes and notifications",
      "Role-based admin dashboard for users, trainers, classes, payments and disputes/cases",
    ],
    tech: ["Laravel", "Inertia.js", "Vue.js", "WebSocket", "Redis", "Stripe"],
    image: "https://codewiresolutions.com/images/XStream%20Gym.png",
    imagePosition: "left",
  },
  {
    id: 8,
    category: "Web Applications",
    categoryLabel: "FINANCE / REMITTANCE",
    title: "Universal Services",
    description:
      "Universal Services is a secure, full-stack remittance platform for international money transfers, built with Laravel 8, Vue.js 2, and Inertia.js for a fast, SPA-like experience without a separate API layer.",
    challenge:
      "The client needed a compliant, trustworthy platform for cross-border money transfers that could handle multi-currency rates, KYC/AML onboarding, and a full back-office for suppliers, collection stations and payments — all with real-time visibility for both customers and admins.",
    solution:
      "We built a Laravel 8 + Inertia/Vue 2 platform combining a customer-facing transfer flow with a comprehensive admin dashboard: multi-currency exchange rate management, KYC/AML compliance workflows, beneficiary management with transfer tracking, and reporting via DomPDF and Laravel Excel, secured with Jetstream/Fortify role-based access and two-factor authentication.",
    features: [
      "Multi-currency support with real-time exchange rate management",
      "KYC/AML compliant customer onboarding workflows",
      "Beneficiary management with live transfer tracking",
      "Admin dashboard covering suppliers, collection stations, rates, cheques and payments",
      "PDF and Excel reporting: customer statements, outstanding balances, supplier rates, transfer history",
      "Role-based access control with two-factor authentication",
    ],
    tech: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "MySQL"],
    image: "https://codewiresolutions.com/images/universal-services.jpg",
    imagePosition: "right",
  },
];

const filters = [
  { label: "All", value: "All", count: 8 },
  { label: "Web Applications", value: "Web Applications", count: 6 },
  { label: "Mobile Apps", value: "Mobile Apps", count: 0 },
  { label: "E-commerce", value: "E-commerce", count: 0 },
  { label: "WordPress", value: "WordPress", count: 0 },
  { label: "UI/UX", value: "UI/UX", count: 0 },
  { label: "AI & Automation", value: "AI & Automation", count: 2 },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    project: "",
  });

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* ==================== HERO SECTION (Our Work) ==================== */}
      <section className="w-full pt-10 pb-16 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <p className="text-sm text-slate-500 mb-8">
            Home <span className="mx-1.5">›</span> Our Work
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 uppercase">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                OUR WORK
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-900 leading-[1.15] tracking-tight">
                Work that{" "}
                <span className="bg-[#1a1a1a] text-[#f5b800] px-2 py-1 rounded-md">
                  speaks for
                </span>{" "}
                itself
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                A look at the kinds of products we build and the outcomes they
                drive — across web, mobile, e-commerce, AI and more. Real
                projects. Real results.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                    Top
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-slate-800">
                      Best Development Company
                    </p>
                    <p className="text-slate-500">Payoneer Certified</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200" />

                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 text-sm">
                    Clutch
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Let’s build something great together.
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                      What Project Do You Have In Mind?
                    </label>
                    <textarea
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your idea or project requirements."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f5b800] focus:ring-1 focus:ring-[#f5b800] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    START YOUR PROJECT
                    <span>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FILTERS ==================== */}
      <section className="w-full pt-10 pb-8 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-[#f5b800] text-slate-900 shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#f5b800] hover:text-slate-900"
                }`}
              >
                {filter.label}{" "}
                <span className="ml-1 opacity-70">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS LIST ==================== */}
      {filteredProjects.length === 0 ? (
        <section className="py-32 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        </section>
      ) : (
        filteredProjects.map((project) => (
          <section key={project.id} className="py-20 bg-[#f8f7f4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Image */}
                <div
                  className={`lg:sticky lg:top-28 self-start h-fit ${
                    project.imagePosition === "right"
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-8 ${
                    project.imagePosition === "right"
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#c9a227] text-sm font-medium">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    {project.categoryLabel}
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-bold text-[#c9a227] leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                    <div>
                      <h3 className="text-xs font-bold tracking-widest text-slate-800 uppercase mb-3">
                        CHALLENGE
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold tracking-widest text-[#c9a227] uppercase mb-3">
                        SOLUTION
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    {project.features.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f5e6b8] text-slate-800 text-sm font-medium w-fit"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#c9a227] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-slate-800 font-medium hover:text-[#c9a227] transition-colors pt-2"
                  >
                    Read full case study
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
