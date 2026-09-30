import React, { useState } from "react";
import {
  Mail,
  User,
  Building,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";

const ACCENT_YELLOW = "#eab308";

export default function GetAQuoteSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Generative AI Development",
    projectBudget: "$10,000 - $25,000",
    timeline: "1 - 3 Months",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid format.";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Details required.";
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = "Min 10 chars.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "Generative AI Development",
      projectBudget: "$10,000 - $25,000",
      timeline: "1 - 3 Months",
      projectDetails: "",
    });

    setIsSubmitted(false);
  };

  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-start pt-4 sm:pt-5 px-4 sm:px-6 lg:px-8 overflow-x-hidden border-t border-black/10">
      <div className="mx-auto max-w-[1050px] w-full">
        {/* SECTION HEADER */}
        <div className="text-center max-w-xl mx-auto mb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-0.5">
            PROJECT ESTIMATION
          </p>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
            Request a Detailed{" "}
            <span style={{ color: ACCENT_YELLOW }}>Quote</span>
          </h2>
        </div>

        {/* MAIN CARD */}
        <div className="bg-[#fafaf9] border border-black/10 rounded-3xl p-4 sm:p-5 shadow-xl">
          {isSubmitted ? (
            /* SUCCESS STATE */
            <div className="py-8 text-center space-y-3">
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-black font-bold shadow-md"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <CheckCircle2 size={24} />
              </div>

              <h3 className="text-lg font-bold text-black">
                Quote Request Submitted Successfully!
              </h3>

              <p className="text-xs text-black/70 max-w-md mx-auto">
                Thank you{" "}
                <span className="font-semibold text-black">
                  {formData.fullName}
                </span>
                . Confirmation sent to{" "}
                <span className="font-semibold text-black">
                  {formData.email}
                </span>
                .
              </p>

              <button
                onClick={resetForm}
                className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-black/80 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
              {/* ========================= */}
              {/* NAME + EMAIL */}
              {/* ========================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* FULL NAME */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black/40">
                      <User size={15} />
                    </div>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full pl-9 pr-3 py-4 rounded-xl border bg-white text-xs focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-black/15 focus:border-yellow-500"
                      }`}
                    />
                  </div>

                  {errors.fullName && (
                    <p className="text-[9px] text-red-500 flex items-center gap-1">
                      <AlertCircle size={9} />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black/40">
                      <Mail size={15} />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full pl-9 pr-3 py-4 rounded-xl border bg-white text-xs focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500"
                          : "border-black/15 focus:border-yellow-500"
                      }`}
                    />
                  </div>

                  {errors.email && (
                    <p className="text-[9px] text-red-500 flex items-center gap-1">
                      <AlertCircle size={9} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* ========================= */}
              {/* PHONE + COMPANY */}
              {/* ========================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* PHONE */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Phone Number (Optional)
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black/40">
                      <Phone size={15} />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-9 pr-3 py-4 rounded-xl border border-black/15 bg-white text-xs focus:outline-none focus:border-yellow-500 transition-all"
                    />
                  </div>
                </div>

                {/* COMPANY */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Company Name (Optional)
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black/40">
                      <Building size={15} />
                    </div>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Cyberdyne Systems"
                      className="w-full pl-9 pr-3 py-4 rounded-xl border border-black/15 bg-white text-xs focus:outline-none focus:border-yellow-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* ========================= */}
              {/* SELECT FIELDS */}
              {/* ========================= */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* SERVICE */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Service Required
                  </label>

                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3 py-4 rounded-xl border border-black/15 bg-white text-xs focus:outline-none focus:border-yellow-500 transition-all cursor-pointer"
                  >
                    <option value="Full-Stack Web Application">
                      Full-Stack Web Application
                    </option>
                    <option value="Generative AI Development">
                      Mobile App Development
                    </option>
                    <option value="Generative AI Development">
                      Generative AI Development
                    </option>

                    <option value="Cloud & DevOps">
                      Cloud & DevOps Architecture
                    </option>

                    <option value="UI/UX Product Design">
                      UI/UX Product Design
                    </option>
                  </select>
                </div>

                {/* BUDGET */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Estimated Budget
                  </label>

                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="w-full px-3 py-4 rounded-xl border border-black/15 bg-white text-xs focus:outline-none focus:border-yellow-500 transition-all cursor-pointer"
                  >
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>

                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>

                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>

                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>

                {/* TIMELINE */}
                <div className="space-y-0.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                    Desired Timeline
                  </label>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3 py-4 rounded-xl border border-black/15 bg-white text-xs focus:outline-none focus:border-yellow-500 transition-all cursor-pointer"
                  >
                    <option value="Less than 1 Month">&lt; 1 Month</option>

                    <option value="1 - 3 Months">1 - 3 Months</option>

                    <option value="3 - 6 Months">3 - 6 Months</option>

                    <option value="6+ Months">6+ Months</option>
                  </select>
                </div>
              </div>

              {/* ========================= */}
              {/* PROJECT DETAILS */}
              {/* ========================= */}
              <div className="space-y-0.5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-black/80">
                  Project Scope & Details{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <div className="absolute top-4 left-3 pointer-events-none text-black/40">
                    <FileText size={15} />
                  </div>

                  <textarea
                    name="projectDetails"
                    rows={2}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe your goals or key requirements..."
                    className={`w-full pl-9 pr-3 py-4 rounded-xl border bg-white text-xs focus:outline-none transition-all resize-none ${
                      errors.projectDetails
                        ? "border-red-500"
                        : "border-black/15 focus:border-yellow-500"
                    }`}
                  />
                </div>

                {errors.projectDetails && (
                  <p className="text-[9px] text-red-500 flex items-center gap-1">
                    <AlertCircle size={9} />
                    {errors.projectDetails}
                  </p>
                )}
              </div>

              {/* ========================= */}
              {/* SUBMIT */}
              {/* ========================= */}
              <button
                type="submit"
                className="group w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-black font-bold text-xs tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer mt-1"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                <span>SUBMIT QUOTE REQUEST</span>

                <Send
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
