import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { getContextualContactUsPath } from "../utils/navigation";
import Projects from "../Projects/projects";

const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

export default function SoftwareDevelopmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "Web Application Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const SERVICES = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Web Application Development",
      desc: "High-performance, scalable custom web apps using React, Node, and Next.js.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      title: "Mobile App Development",
      desc: "Native & cross-platform iOS/Android apps with React Native and Flutter.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
      title: "E-Commerce Solutions",
      desc: "Custom storefronts, secure payments, and high-conversion shopping experiences.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Business Automation & AI",
      desc: "Custom AI agents, workflow bots, and intelligent process automation.",
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "SaaS Product Engineering",
      desc: "From MVP to enterprise-grade cloud SaaS with rapid iteration.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Cloud & DevOps Integration",
      desc: "Secure CI/CD pipelines and 99.9% uptime on AWS, GCP, or Azure.",
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "UI/UX Design Systems",
      desc: "Beautiful, conversion-focused interfaces and design systems.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
      title: "QA & Automated Testing",
      desc: "End-to-end testing, performance, and quality assurance pipelines.",
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-cyan-400" />,
      title: "Digital Transformation",
      desc: "Full-stack modernization and technology strategy consulting.",
    },
  ];

  const PERKS = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Web Development",
      desc: "Build high-performance, scalable web applications tailored to your business goals using modern frameworks.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Solutions",
      desc: "Launch native and cross-platform iOS & Android apps that deliver seamless user experiences.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Automation",
      desc: "Integrate intelligent AI agents and workflow automation to supercharge your operations.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "SaaS Product Engineering",
      desc: "From MVP to enterprise-grade SaaS — we help you build, scale, and launch faster.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Platforms",
      desc: "Create high-converting online stores with secure payments and exceptional shopping experiences.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cloud & DevOps",
      desc: "Secure CI/CD pipelines and rock-solid infrastructure on AWS, GCP, or Azure.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Design Systems",
      desc: "Beautiful, conversion-focused interfaces that turn visitors into loyal customers.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "End-to-End Delivery",
      desc: "From idea to launch — dedicated agile teams with 99% on-time delivery guarantee.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      {/* Force white body */}
      <style>{`
        body, html, #root {
          background-color: #ffffff !important;
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* =====================================================
          HERO SECTION – Deep Navy + Yellow
      ===================================================== */}
      <section className="relative w-full lg:min-h-[calc(100vh-80px)] min-h-[650px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#080d1a] text-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <Zap size={14} /> Software & Engineering Agency
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Transforming Ideas Into{" "}
              <span className="text-yellow-400">Scalable Software</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              We engineer cutting-edge web apps, high-performance mobile apps,
              e-commerce platforms, and smart automation systems designed to
              supercharge your business growth.
            </p>

            <div className="space-y-2 pt-1">
              {[
                "Custom web & mobile solutions built for speed & scale",
                "Advanced business automation & AI workflow integration",
                "Dedicated agile teams with 99% on-time delivery",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative backdrop-blur-xl">
              <div className="absolute -top-3 right-6 bg-yellow-400 text-slate-950 font-black text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                Get a Free Quote
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                Start Your Project
              </h3>
              <p className="text-slate-400 text-xs mb-4">
                Fill out the form below and our architecture experts will reach
                out within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-5 text-center space-y-2 my-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Request Received!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you,{" "}
                    <span className="font-semibold text-white">
                      {formData.fullName}
                    </span>
                    . We will review your details shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Primary Service Needed
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors cursor-pointer"
                    >
                      <option>Web Application Development</option>
                      <option>Mobile App Development</option>
                      <option>E-Commerce Solutions</option>
                      <option>Business Automation & AI</option>
                      <option>SaaS Product Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    SUBMIT PROJECT REQUEST
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VERTICAL GAP ========== */}
      <div className="h-16 sm:h-24 bg-white" />

      {/* =====================================================
          SERVICES GRID – 9 Boxes
      ===================================================== */}
      <section className="py-20 bg-[#041f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Comprehensive Software & Engineering Capabilities
            </h2>
            <p className="text-cyan-100/70 text-sm sm:text-base">
              From robust backends to immersive frontends and intelligent
              automations, we build future-ready solutions tailored to your
              unique market vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, idx) => (
              <a
                href={getContextualContactUsPath()}
                key={idx}
                className="bg-[#0c2a2a] cursor-pointer border border-cyan-900/60 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                  {srv.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {srv.title}
                </h3>
                <p className="text-cyan-100/55 text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VERTICAL GAP ========== */}
      <div className="h-16 sm:h-24 bg-white" />

      {/* =====================================================
          CODEWIRE IMAGE SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Dark coding workspace"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24 text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.12em] uppercase leading-[1.05] mb-8">
            Let&apos;s Craft Your
            <br />
            Next Masterpiece
          </h2>

          <p className="text-white/85 text-sm sm:text-base tracking-wide mb-3">
            We are ready for new projects
          </p>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white/90 text-sm tracking-widest hover:text-white transition-colors mb-12 cursor-pointer"
          >
            ( Schedule A Call )
          </a>

          <div className="text-2xl sm:text-3xl font-serif tracking-[0.4em] text-white/95 mb-14">
            Codewire
          </div>

          <a
            href={getContextualContactUsPath()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-full border border-white/35 bg-black/60 backdrop-blur-md text-xs sm:text-sm tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            CONTACT US
          </a>
        </div>
      </section>

      {/* ========== VERTICAL GAP ========== */}
      <div className="h-16 sm:h-24 bg-white" />

      {/* =====================================================
          START YOUR JOURNEY – Software Development Services
          (Yellow lines between boxes using #fcbd05)
      ===================================================== */}
      <section className="py-20 bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Start Your Journey
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ready to transform your ideas into powerful digital products? Our
              full-stack software development services are designed to take you
              from concept to launch — and beyond. Partner with us and
              experience seamless execution, cutting-edge technology, and a team
              that treats your success as our own.
            </p>
          </div>

          {/* 2×4 Grid with yellow lines between boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-300">
            {PERKS.map((perk, idx) => (
              <div
                key={idx}
                className="group bg-[#0a0f1a] p-8 flex flex-col items-center text-center transition-all duration-300 ease-out hover:bg-white cursor-default"
              >
                {/* Icon */}
                <div className="mb-5 text-white group-hover:text-black transition-colors duration-300">
                  {perk.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white group-hover:text-black mb-3 transition-colors duration-300">
                  {perk.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VERTICAL GAP ========== */}
      <div className="h-16 sm:h-24 bg-white" />

      {/* =====================================================
          CTA BANNER – Violet (Last Section)
      ===================================================== */}
      <section className="py-20 bg-[#1a0b2e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#2a1545] via-[#1f0f38] to-[#12081f] border border-fuchsia-800/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Build Something Incredible Together?
            </h2>
            <p className="text-fuchsia-100/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Partner with our expert developers and engineers to bring your
              next enterprise or startup software product to life.
            </p>

            <a
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-fuchsia-500/25 hover:scale-105 cursor-pointer"
            >
              Schedule a Free Tech Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
