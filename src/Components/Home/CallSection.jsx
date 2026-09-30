import React, { useState } from "react";
import { Star } from "lucide-react";

// Circular Yellow Checkmark Icon Component
const YellowCheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-xs">
    <svg
      className="w-3.5 h-3.5 text-slate-950 stroke-[3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </div>
);

// Trustpilot Logo & 5-Star Rating Badge
const TrustpilotBadge = () => (
  <div className="flex flex-col gap-1 items-start">
    <div className="flex items-center gap-1">
      <svg
        className="h-4 w-auto text-[#00B67A]"
        viewBox="0 0 120 30"
        fill="currentColor"
      >
        <path d="M10 2l2.8 8.5H22l-7 5.2 2.7 8.4-6.7-5.3-6.7 5.3 2.7-8.4-7-5.2h9.2z" />
        <text
          x="26"
          y="20"
          className="font-extrabold text-[18px] fill-slate-900 tracking-tight font-sans"
        >
          Trustpilot
        </text>
      </svg>
    </div>
    {/* 5 Yellow Stars */}
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-yellow-400 flex items-center justify-center rounded-xs shadow-2xs"
        >
          <svg
            className="w-2.5 h-2.5 text-slate-950 fill-slate-950"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      ))}
    </div>
  </div>
);

// Clutch Rating Badge Component
const ClutchBadge = () => (
  <div className="flex flex-col gap-0.5">
    <div className="flex items-center gap-1.5">
      <span className="font-black text-xl text-slate-900 tracking-tighter font-sans">
        Clutch
      </span>
    </div>
    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
      <span>4.9/5</span>
      <div className="flex text-yellow-400 text-xs gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
    </div>
  </div>
);

// Payoneer Badge Component
const PayoneerBadge = () => (
  <div className="flex items-center gap-2">
    <div className="w-7 h-7 rounded-full border-2 border-amber-500 flex items-center justify-center relative">
      <div className="w-3 h-3 rounded-full bg-amber-400" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
        Best Development
      </span>
      <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
        Company
      </span>
      <span className="text-xs font-bold text-slate-900 tracking-tight mt-0.5">
        Payoneer
      </span>
    </div>
  </div>
);

export default function DiscoveryCallSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Checklist items
  const checklistItems = [
    "Startup Founders",
    "Product & Engineering Leaders",
    "Enterprises & Scale-Ups",
    "Operations Leaders",
    "Teams Exploring AI",
    "SaaS Founders",
  ];

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate API booking processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="min-h-screen lg:h-screen w-full bg-gradient-to-br p-4 from-white mt-18 via-amber-50/20 to-slate-50 text-slate-900 flex items-center justify-center sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Background Subtle Yellow Accent Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-200/30 rounded-full p-8 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      {/* Main Content Grid Box */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* LEFT COLUMN: Header, Value Propositions & Trust Badges */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          {/* Yellow Sub-header Tag */}
          <div>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-yellow-100/80 text-yellow-800 text-[11px] sm:text-xs font-extrabold tracking-wider uppercase border border-yellow-200 shadow-2xs">
              START YOUR AI AUTOMATION JOURNEY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            If Your Roadmap Is Moving Slower Than Your Ambition,{" "}
            <span className="text-yellow-500 underline decoration-yellow-300 underline-offset-4 decoration-4">
              Let's Build It Together.
            </span>
          </h1>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <YellowCheckIcon />
                <span className="text-sm font-bold text-slate-800 tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Trust Badges Row */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8">
            <TrustpilotBadge />
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <ClutchBadge />
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <PayoneerBadge />
          </div>
        </div>

        {/* RIGHT COLUMN: Elevated Booking Card */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
            {/* Top Yellow Card Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-yellow-400" />

            {!isSubmitted ? (
              <div className="space-y-5">
                {/* Form Header */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Book Your Free{" "}
                    <span className="text-yellow-500">Discovery Call</span>
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Tell us what you're building. We'll map the fastest path to{" "}
                    <strong className="text-slate-900 font-semibold">
                      ship it no cost, no obligation.
                    </strong>
                  </p>
                </div>

                {/* Progress / Accent Bar Indicator */}
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-yellow-400 rounded-full" />
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  {/* Full Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Work Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Needs Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Tell us about your needs
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your project, AI goal, or timeline..."
                      value={formData.needs}
                      onChange={(e) =>
                        setFormData({ ...formData, needs: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <p className="text-xs text-red-500 font-semibold">
                      {errorMessage}
                    </p>
                  )}

                  {/* Privacy Disclaimer */}
                  <p className="text-[11px] text-slate-500 leading-normal">
                    By continuing, you agree to be contacted about your enquiry.
                    We never share your details and there is no obligation.
                  </p>

                  {/* Primary CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-950 font-black text-sm tracking-wide uppercase py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-slate-950"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        PROCESSING...
                      </span>
                    ) : (
                      <>
                        <span>CONTINUE TO BOOKING</span>
                        <svg
                          className="w-4 h-4 stroke-[3]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <svg
                    className="w-8 h-8 text-slate-950 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Request Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-slate-900">
                    {formData.fullName}
                  </strong>
                  . Our engineering leads will review your inquiry and reach out
                  to{" "}
                  <strong className="text-slate-900">{formData.email}</strong>{" "}
                  shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: "", email: "", needs: "" });
                  }}
                  className="mt-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 underline tracking-wide"
                >
                  Book another session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
