import { Star } from "lucide-react";
import React, { useState } from "react";

export default function ServiceHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-[#fcfbe8] text-slate-900 font-sans min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-yellow-300/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        {/* Breadcrumb / Top Header Links */}
        <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-2">
          <a href="/" className="hover:text-yellow-700 transition-colors">
            Home
          </a>
          <span className="text-slate-400">›</span>
          <span className="text-slate-900 font-semibold">
            Software Development Services
          </span>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Hero Copy & Trust Badges */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-yellow-800 bg-yellow-200/60 px-3 py-1 rounded-md">
                SOFTWARE DEVELOPMENT SERVICES
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
                Building the Future of Digital Innovation, <br />
                <span className="text-yellow-600">
                  Trusted by Industry Giants
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Revolutionize your business with our custom software & web
                development services. As a top development company, we lead with
                innovation to help you thrive in today’s competitive digital
                era.
              </p>
            </div>

            {/* Bottom Partner / Trust Logos Row */}
            <div className="pt-6 border-t border-yellow-200/70 flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Abstract Gradient Ring Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-pink-500 p-[2px] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full bg-[#fcfbe8] rounded-full" />
                </div>
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  Best Development <br />
                  Company
                </div>
              </div>

              {/* Payoneer Partner Logo */}
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-base sm:text-lg text-slate-900">
                <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
                <span>Payoneer</span>
              </div>

              {/* Clutch Badge */}
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900">
                  Clutch
                </span>
                <span className="text-[11px] font-bold text-yellow-600 tracking-tight flex items-center gap-1">
                  4.9/5
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Consultation / Project Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#fcfbe8] border border-yellow-300/80 rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(234,179,8,0.08)] relative">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-6 leading-snug">
                Get expert help for your projects.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-yellow-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all shadow-2xs"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-yellow-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all shadow-2xs"
                  />
                </div>

                {/* Message / Requirement Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                    What we can do for you?
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-yellow-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all shadow-2xs resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-400 active:scale-[0.99] text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>JUMP-START YOUR PROJECT</span>
                  <svg
                    className="w-4 h-4 stroke-[2.5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
