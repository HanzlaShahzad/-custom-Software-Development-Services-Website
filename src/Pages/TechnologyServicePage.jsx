import React, { useState } from "react";
import {
  ChevronRight,
  Home,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  ShieldCheck,
  Star,
} from "lucide-react";
import { getContextualContactUsPath } from "../utils/navigation";

const ACCENT_YELLOW = "#fdbe04";

// The 9 Technologies & Services data mapped with structured sections
const TECHNOLOGY_PAGES = {
  "Custom Software Development": {
    category: "DEVELOPMENT SERVICES",
    title:
      "Scalable & High-Performance Technologies Engineered For Modern Enterprises",
    subtitle:
      "Transform your business operations and user experiences with custom full-stack app & application development services. From high-throughput SaaS platforms to complex enterprise web portals, our expert engineering team builds robust, secure, and future-proof digital solutions tailored to your unique growth goals.",
    heroBadge: "App & APPLICATION DEVELOPMENT SERVICES",
    overview:
      "Off-the-shelf software often forces you to compromise your workflows. Our custom software development service designs secure, high-performance systems from the ground up to eliminate bottlenecks and accelerate operational efficiency.",
    capabilities: [
      "Full-Stack Web & Desktop Application Engineering",
      "Legacy System Modernization & Code Refactoring",
      "Microservices Architecture & API Middleware Development",
      "Automated Testing & Enterprise-Grade Security Compliance",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Blueprinting",
        desc: "Mapping technical requirements, database schemas, and UX wireframes.",
      },
      {
        step: "02",
        title: "Agile Sprints",
        desc: "Iterative development cycles with continuous stakeholder feedback.",
      },
      {
        step: "03",
        title: "Rigorous QA",
        desc: "Automated unit tests, load testing, and vulnerability assessments.",
      },
      {
        step: "04",
        title: "Deployment & Support",
        desc: "Seamless cloud launch with ongoing maintenance SLAs.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    benefitTitle: "Why Invest in Custom Software?",
    benefitDesc:
      "Custom solutions scale infinitely without recurring licensing fees, perfectly integrating with your proprietary business processes.",
  },
  "Mobile App Development": {
    category: "MOBILE APP DEVELOPMENT SERVICES",
    title: "High-Performance Mobile Apps Engineered For Global Users",
    subtitle:
      "Create intuitive, lightning-fast iOS and Android applications engineered for superior user retention, seamless cross-platform sync, and flawless hardware integration.",
    heroBadge: "MOBILE APP DEVELOPMENT SERVICES",
    overview:
      "In a mobile-first world, user experience dictates success. We build responsive cross-platform apps using React Native and Flutter, as well as native Swift and Kotlin apps designed to captivate users and drive engagement.",
    capabilities: [
      "Cross-Platform App Development (React Native, Flutter)",
      "Native iOS (Swift) & Android (Kotlin) Engineering",
      "Seamless Push Notifications & Real-Time Syncing",
      "App Store Optimization (ASO) & Store Submission Support",
    ],
    process: [
      {
        step: "01",
        title: "UX/UI Prototyping",
        desc: "Designing thumb-friendly interactive mobile wireframes.",
      },
      {
        step: "02",
        title: "Core Logic & APIs",
        desc: "Building secure backend endpoints and state management.",
      },
      {
        step: "03",
        title: "Device Testing",
        desc: "Testing across dozens of physical screen sizes and OS versions.",
      },
      {
        step: "04",
        title: "Launch & Iterate",
        desc: "Publishing to Apple App Store and Google Play Console.",
      },
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "GraphQL",
    ],
    benefitTitle: "Engage Users Anywhere",
    benefitDesc:
      "Deliver native-grade performance with optimized codebases that reduce time-to-market across both major mobile ecosystems.",
  },
  "DevOps Service": {
    category: "DEVOPS & CLOUD SERVICES",
    title: "Robust Cloud Architecture & Automated DevOps Pipelines",
    subtitle:
      "Automate your release pipelines, secure cloud environments, and achieve 99.99% uptime with enterprise-grade DevOps engineering and zero-downtime deployment workflows.",
    heroBadge: "DEVOPS & CLOUD SERVICES",
    overview:
      "Slow deployments and server crashes halt business momentum. Our DevOps specialists implement modern CI/CD pipelines, containerization, and automated infrastructure monitoring to ensure seamless scaling.",
    capabilities: [
      "CI/CD Pipeline Automation (GitHub Actions, GitLab CI)",
      "Cloud Architecture Design (AWS, Google Cloud, Azure)",
      "Containerization & Orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform) & 24/7 Uptime Monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        desc: "Analyzing current cloud bottlenecks and security gaps.",
      },
      {
        step: "02",
        title: "Pipeline Setup",
        desc: "Configuring automated build, test, and deployment scripts.",
      },
      {
        step: "03",
        title: "Containerization",
        desc: "Migrating legacy servers to resilient Docker/Kubernetes clusters.",
      },
      {
        step: "04",
        title: "Monitoring & Tuning",
        desc: "Setting up real-time telemetry, auto-scaling, and alerts.",
      },
    ],
    techStack: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GitHub Actions",
      "Prometheus",
    ],
    benefitTitle: "Zero Downtime Deployments",
    benefitDesc:
      "Eliminate human deployment errors and ship updates to production multiple times a day with total confidence.",
  },
  "Flexible Teams": {
    category: "FLEXIBLE TEAM AUGMENTATION",
    title: "Elite Engineering Talent Plugged Directly Into Your Sprints",
    subtitle:
      "Scale your technical capacity instantly with vetted full-stack developers, QA specialists, and project managers who seamlessly adapt to your agile workflow.",
    heroBadge: "TEAM AUGMENTATION SERVICES",
    overview:
      "Hiring full-time engineers is time-consuming and expensive. Our flexible team model gives you immediate access to vetted tech talent that plugs directly into your workflow and scales up or down as needed.",
    capabilities: [
      "On-Demand Access to Vetted Full-Stack Developers",
      "Seamless Integration into Existing Sprint Ceremonies",
      "Scalable Resource Allocation Based on Project Quarters",
      "Zero Overhead Hiring, HR, or Payroll Complications",
    ],
    process: [
      {
        step: "01",
        title: "Needs Assessment",
        desc: "Defining skill sets and hours required for your roadmap.",
      },
      {
        step: "02",
        title: "Talent Matching",
        desc: "Selecting the ideal engineers tailored to your tech stack.",
      },
      {
        step: "03",
        title: "Sprint Onboarding",
        desc: "Integrating developers directly into Slack, Jira, and GitHub.",
      },
      {
        step: "04",
        title: "Flexible Scaling",
        desc: "Adding or scaling back team members as project phases evolve.",
      },
    ],
    techStack: ["Agile/Scrum", "Jira", "Slack", "Git", "TypeScript", "Python"],
    benefitTitle: "Agility Without Compromise",
    benefitDesc:
      "Accelerate your product delivery timelines without taking on the long-term liabilities of permanent hiring.",
  },
  "Dedicated Teams": {
    category: "DEDICATED DEVELOPMENT SQUADS",
    title: "Your Dedicated Engineering Department For Long-Term Growth",
    subtitle:
      "Secure an exclusive, dedicated squad of software engineers focused entirely on building, optimizing, and scaling your digital products with full ownership.",
    heroBadge: "DEDICATED SQUADS",
    overview:
      "When your product requires deep domain knowledge and continuous long-term evolution, a dedicated engineering team provides the stability, focus, and cultural alignment of an in-house department.",
    capabilities: [
      "Exclusive Dedicated Pods (Devs, QA, DevOps, Product Managers)",
      "Deep Alignment with Brand Vision and Long-Term Roadmap",
      "Dedicated Technical Leadership and Code Quality Standards",
      "Consistent Velocity and Predictable Monthly Sprint Outputs",
    ],
    process: [
      {
        step: "01",
        title: "Squad Assembly",
        desc: "Hand-picking a dedicated pod tailored to your industry.",
      },
      {
        step: "02",
        title: "Deep-Dive Workshop",
        desc: "Aligning the squad with your architecture and business goals.",
      },
      {
        step: "03",
        title: "Continuous Delivery",
        desc: "Executing consistent bi-weekly sprints with transparent reporting.",
      },
      {
        step: "04",
        title: "Growth Optimization",
        desc: "Proactively refactoring, scaling, and adding innovative features.",
      },
    ],
    techStack: ["Full-Stack", "Cloud Native", "React", "Node.js", "Kubernetes"],
    benefitTitle: "Your In-House Tech Dept",
    benefitDesc:
      "Enjoy the benefits of a fully managed, high-performing engineering division without the recruitment friction.",
  },
  "End to End Dilvery": {
    category: "TURNKEY PROJECT DELIVERY",
    title: "Complete End-to-End Turnkey Software Delivery",
    subtitle:
      "From initial concept validation and UI/UX architecture to final production deployment, we manage the complete lifecycle of your software product.",
    heroBadge: "TURNKEY SOLUTIONS",
    overview:
      "Don't want to manage individual developers or project managers? Our end-to-end delivery model takes total ownership of your product realization, delivering a market-ready solution on time and on budget.",
    capabilities: [
      "Complete Product Lifecycle Management & Execution",
      "Comprehensive UI/UX Research & Interactive Prototyping",
      "Rigorous Quality Assurance & Security Penetration Testing",
      "Post-Launch Support, Monitoring, and Feature Enhancements",
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Scope",
        desc: "Defining product requirements and fixed milestone deliverables.",
      },
      {
        step: "02",
        title: "Design & Build",
        desc: "Executing high-fidelity UI design and robust backend coding.",
      },
      {
        step: "03",
        title: "Testing & Polish",
        desc: "Performing exhaustive user acceptance testing and bug fixes.",
      },
      {
        step: "04",
        title: "Handover & Support",
        desc: "Deploying to live production with complete documentation.",
      },
    ],
    techStack: ["Figma", "React", "Node.js", "PostgreSQL", "AWS", "CI/CD"],
    benefitTitle: "Zero Stress Execution",
    benefitDesc:
      "Focus entirely on your business growth while our seasoned engineering managers handle every technical detail.",
  },
  "Software as a saas": {
    category: "SaaS PRODUCT ENGINEERING",
    title: "Multi-Tenant SaaS Platforms Built For Rapid Scaling",
    subtitle:
      "Build subscription-ready software as a service platforms featuring multi-tenant database isolation, automated Stripe billing, and robust analytics.",
    heroBadge: "SaaS ENGINEERING",
    overview:
      "SaaS products require unique architectural considerations like multi-tenancy, tiered subscription billing, and robust analytics. We build subscription-ready software designed to scale from MVP to millions of users.",
    capabilities: [
      "Multi-Tenant Database Architecture & Data Isolation",
      "Stripe & Recurring Subscription Billing Integration",
      "Role-Based Access Control (RBAC) & Team Management",
      "Real-Time Usage Analytics & Admin Dashboards",
    ],
    process: [
      {
        step: "01",
        title: "SaaS Architecture Design",
        desc: "Structuring tenant isolation and billing models.",
      },
      {
        step: "02",
        title: "MVP Core Development",
        desc: "Building core features to test product-market fit rapidly.",
      },
      {
        step: "03",
        title: "Billing & Auth Integration",
        desc: "Setting up secure user signups, OAuth, and Stripe webhooks.",
      },
      {
        step: "04",
        title: "Scale & Optimize",
        desc: "Optimizing database queries and adding enterprise features.",
      },
    ],
    techStack: ["Next.js", "Stripe API", "PostgreSQL", "Redis", "Tailwind CSS"],
    benefitTitle: "Accelerate Time-to-Market",
    benefitDesc:
      "Launch your recurring revenue SaaS platform in weeks with pre-built authentication, billing, and dashboard modules.",
  },
  "ecommerce & retail": {
    category: "E-COMMERCE & RETAIL SOLUTIONS",
    title: "High-Converting E-Commerce Stores & Headless Retail Platforms",
    subtitle:
      "Launch lightning-fast, conversion-optimized online shops and headless retail systems on Shopify Plus, WooCommerce, and custom architectures.",
    heroBadge: "E-COMMERCE SOLUTIONS",
    overview:
      "Modern retail requires frictionless checkouts, lightning-fast load speeds, and seamless inventory sync. We build custom e-commerce stores on Shopify Plus, WooCommerce, and headless frameworks.",
    capabilities: [
      "Custom Shopify Plus & WooCommerce Storefronts",
      "Headless Commerce Architecture (Next.js + Shopify Storefront API)",
      "Inventory, ERP, & Multi-Channel Marketplace Syncing",
      "Advanced Conversion Rate Optimization (CRO) & Speed Tuning",
    ],
    process: [
      {
        step: "01",
        title: "Catalog & Workflow Analysis",
        desc: "Reviewing SKU structures, shipping rules, and tax setups.",
      },
      {
        step: "02",
        title: "Custom Storefront Build",
        desc: "Developing responsive UI with high-converting checkout flows.",
      },
      {
        step: "03",
        title: "ERP & Payment Sync",
        desc: "Connecting payment gateways, ERPs, and fulfillment APIs.",
      },
      {
        step: "04",
        title: "Launch & Growth",
        desc: "Deploying live with ongoing performance and marketing support.",
      },
    ],
    techStack: [
      "Shopify Plus",
      "WooCommerce",
      "Next.js",
      "Stripe",
      "GraphQL",
      "Redis",
    ],
    benefitTitle: "Maximize Online Revenue",
    benefitDesc:
      "Deliver blazing-fast shopping experiences across desktop and mobile that convert casual browsers into loyal buyers.",
  },
  "Logistic and distribution": {
    category: "LOGISTICS & SUPPLY CHAIN SOFTWARE",
    title: "Intelligent Logistics, Fleet Tracking & Distribution Systems",
    subtitle:
      "Optimize supply chain visibility, real-time fleet GPS tracking, warehouse management systems, and automated routing algorithms.",
    heroBadge: "SUPPLY CHAIN TECH",
    overview:
      "Logistics efficiency directly impacts your bottom line. We build custom software for real-time shipment tracking, warehouse inventory management, and intelligent route optimization.",
    capabilities: [
      "Real-Time Fleet GPS Tracking & Telematics Integration",
      "Warehouse Management Systems (WMS) & Barcode Scanning",
      "Automated Route Optimization & Dispatch Algorithms",
      "Customer Portal & Automated Delivery Notifications",
    ],
    process: [
      {
        step: "01",
        title: "Supply Chain Audit",
        desc: "Identifying bottlenecks in dispatch, inventory, and tracking.",
      },
      {
        step: "02",
        title: "Algorithm & UI Design",
        desc: "Building route mapping interfaces and database models.",
      },
      {
        step: "03",
        title: "IoT & API Integration",
        desc: "Connecting GPS trackers, barcode scanners, and carrier APIs.",
      },
      {
        step: "04",
        title: "Rollout & Training",
        desc: "Deploying software across dispatchers, drivers, and warehouses.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
      "MQTT",
      "AWS",
    ],
    benefitTitle: "Streamline Operations",
    benefitDesc:
      "Reduce fuel costs, eliminate delivery delays, and gain total real-time visibility over your entire distribution network.",
  },
};

export default function TechnologyServicePage({
  currentTechnology = "Custom Software Development",
}) {
  const [selectedTech] = useState(currentTechnology);
  const pageData =
    TECHNOLOGY_PAGES[selectedTech] ||
    TECHNOLOGY_PAGES["Custom Software Development"];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-[#fdbe04] selection:text-black">
      {/* Breadcrumb / Top Header Links */}
      {/* Main Content Container with Consistent Max Width & Vertical Section Gaps */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-2">
          <a href="/" className="hover:text-yellow-700 transition-colors">
            Home
          </a>
          <span className="text-slate-400">›</span>
          <span className="text-slate-900 font-semibold">
            Software Development Services
          </span>
        </div>
        {/* SECTION 1: HERO SECTION MATCHING REFERENCE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative bottom-4">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                {pageData.heroBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              {pageData.title.split(" ").slice(0, 3).join(" ")}{" "}
              <span
                className="px-2 py-0.5 rounded text-slate-900 inline-block my-1 shadow-sm font-black border border-yellow-400/30"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                {pageData.title.split(" ").slice(3, 5).join(" ")}
              </span>{" "}
              {pageData.title.split(" ").slice(5).join(" ")}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {pageData.subtitle}
            </p>

            {/* Clutch & Payoneer Certified Rating Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                  Top
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">
                    Best Development Company
                  </p>
                  <p className="text-slate-500 font-mono text-[10px]">
                    Payoneer Certified
                  </p>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-3">
                <span className="font-black text-lg tracking-wider text-slate-900">
                  Clutch
                </span>
                <div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-600 font-bold">
                    4.9/5 Rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Floating Request Form Box */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-xl relative border border-slate-200/80">
            <div
              className="absolute top-0 left-0 right-0 h-[4px] rounded-t-3xl"
              style={{ backgroundColor: ACCENT_YELLOW }}
            />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
              Let&apos;s build your app & application.
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              Fill out the form below to connect regarding{" "}
              <span className="font-bold text-slate-900">{selectedTech}</span>.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  What project do you have in mind?
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your app & application or MVP requirements..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-black font-black text-xs uppercase tracking-wider transition-transform duration-300 hover:scale-[1.01] cursor-pointer shadow-md flex items-center justify-center gap-2"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <span>Jump-Start Your Web Project</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </section>

        {/* CONTINUOUSLY SLIDING BRAND TICKER BANNER */}
        <section className="border-y border-slate-200 py-6 bg-white overflow-hidden shadow-sm">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 text-center">
            WE&apos;RE TRUSTED BY LEADING TEAMS FOR WEB DEVELOPMENT:
          </p>
          <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center gap-16 animate-marquee min-w-max shrink-0 text-slate-400 font-bold text-sm tracking-widest pr-16">
              <span>CISCO AI</span>
              <span>KANBRICK</span>
              <span>K & K HOUSTON</span>
              <span>CABBER</span>
              <span>CENTRA</span>
              <span>TIBER</span>
              <span>MICROSOFT AZURE</span>
            </div>
            <div
              className="flex items-center gap-16 animate-marquee min-w-max shrink-0 text-slate-400 font-bold text-sm tracking-widest pr-16"
              aria-hidden="true"
            >
              <span>CISCO AI</span>
              <span>KANBRICK</span>
              <span>K & K HOUSTON</span>
              <span>CABBER</span>
              <span>CENTRA</span>
              <span>TIBER</span>
              <span>MICROSOFT AZURE</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICE OVERVIEW */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase font-bold text-amber-600">
                SERVICE OVERVIEW
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4 tracking-tight">
                Transforming Complexity Into Reliable Digital Assets
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {pageData.overview}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <Zap size={24} className="text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 text-base">
                  Rapid Setup
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Accelerated delivery cycles with agile workflows.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <ShieldCheck size={24} className="text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 text-base">
                  Secure & Scalable
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Enterprise-grade security standards built into every line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY CAPABILITIES */}
        <section className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-12 sm:p-10 shadow-sm backdrop-blur-sm">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-xs font-mono tracking-widest uppercase font-bold text-amber-600 shadow-2xs mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Core Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                  <CheckCircle
                    size={20}
                    className="text-amber-500 group-hover:text-white shrink-0 transition-colors duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-slate-900 transition-colors">
                  {cap}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: STEP-BY-STEP PROCESS */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-widest uppercase font-bold text-amber-600">
              WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Our Step-by-Step Delivery Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.process.map((p, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative shadow-sm"
              >
                <span className="text-3xl font-black font-mono text-amber-500 opacity-60 block mb-4">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: TECH STACK & TOOLS */}
        <section className="text-center">
          <span className="text-xs font-mono tracking-widest uppercase font-bold text-amber-600">
            TECHNOLOGIES
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-8">
            Built With Modern Tech Stacks
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {pageData.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-mono font-bold text-slate-800 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: VALUE & BENEFITS */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest uppercase font-bold text-amber-700">
              ADVANTAGE
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">
              {pageData.benefitTitle}
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {pageData.benefitDesc}
            </p>
          </div>
        </section>

        {/* SECTION 7: CALL TO ACTION FOOTER */}
        <section className="text-center pb-8">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden max-w-4xl mx-auto shadow-xl">
            <div
              className="absolute top-0 left-0 right-0 h-[4px]"
              style={{ backgroundColor: ACCENT_YELLOW }}
            />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Ready to Accelerate Your{" "}
              <span style={{ color: "#d99b00" }}>{selectedTech}</span> Project?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Speak directly with our senior architects and get a custom
              technical roadmap tailored to your business goals.
            </p>
            <a
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-black font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              <span>TALK TO US</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Tailwind Custom Marquee Animation Utility */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
