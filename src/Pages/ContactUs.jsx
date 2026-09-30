import React, { useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  Send,
  ChevronDown,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  Layers,
} from "lucide-react";

const COUNTRIES = [
  {
    name: "United States",
    code: "+1",
    flag: "🇺🇸",
    minLen: 10,
    maxLen: 10,
    format: "10 digits",
  },
  {
    name: "Pakistan",
    code: "+92",
    flag: "🇵🇰",
    minLen: 10,
    maxLen: 10,
    format: "10 digits starting with 3",
  },
  {
    name: "India",
    code: "+91",
    flag: "🇮🇳",
    minLen: 10,
    maxLen: 10,
    format: "10 digits starting with 6-9",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "🇬🇧",
    minLen: 10,
    maxLen: 10,
    format: "10 digits",
  },
  {
    name: "Canada",
    code: "+1",
    flag: "🇨🇦",
    minLen: 10,
    maxLen: 10,
    format: "10 digits",
  },
  {
    name: "Australia",
    code: "+61",
    flag: "🇦🇺",
    minLen: 9,
    maxLen: 9,
    format: "9 digits",
  },
  {
    name: "Germany",
    code: "+49",
    flag: "🇩🇪",
    minLen: 10,
    maxLen: 11,
    format: "10-11 digits",
  },
  {
    name: "United Arab Emirates",
    code: "+971",
    flag: "🇦🇪",
    minLen: 9,
    maxLen: 9,
    format: "9 digits starting with 5",
  },
  {
    name: "Saudi Arabia",
    code: "+966",
    flag: "🇸🇦",
    minLen: 9,
    maxLen: 9,
    format: "9 digits",
  },
  {
    name: "France",
    code: "+33",
    flag: "🇫🇷",
    minLen: 9,
    maxLen: 9,
    format: "9 digits",
  },
];

const SERVICES = [
  "Web Application Development",
  "Mobile App Development",
  "AI & Automation",
  "E-Commerce Solutions",
  "UI/UX Design",
  "Cloud & DevOps",
  "Other",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    countryObj: COUNTRIES[0],
    service: "",
    nda: null,
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const customGreen = "oklch(0.83 0.17 83.45)";

  const validatePhone = (phoneStr, country) => {
    const cleaned = phoneStr.replace(/\D/g, "");
    if (!cleaned) return "Phone number is required";
    if (cleaned.length < country.minLen || cleaned.length > country.maxLen) {
      return `Invalid length for ${country.name}. Expected: ${country.format}`;
    }
    if (country.code === "+92" && !cleaned.startsWith("3")) {
      return "Pakistani numbers should start with 3";
    }
    if (country.code === "+91" && !/^[6-9]/.test(cleaned)) {
      return "Indian numbers should start with 6-9";
    }
    if (country.code === "+971" && !cleaned.startsWith("5")) {
      return "UAE numbers should start with 5";
    }
    return "";
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value.trim() ? "Name is required" : "";
      case "email":
        if (!value.trim()) return "Email is required";
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "company":
        return !value.trim() ? "Company name is required" : "";
      case "phone":
        return validatePhone(value, formData.countryObj);
      case "service":
        return !value ? "Please select a service" : "";
      case "projectDetails":
        return !value.trim() ? "Please tell us about your project" : "";
      case "nda":
        return value === null ? "Please select an NDA option" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, formData[name]),
    }));
  };

  const handleSelectCountry = (country) => {
    setFormData((prev) => ({
      ...prev,
      countryObj: country,
      phone: "",
    }));
    setShowCountryDropdown(false);
    setTouched((prev) => ({ ...prev, phone: false }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleSelectService = (service) => {
    setFormData((prev) => ({ ...prev, service }));
    setShowServiceDropdown(false);
    setTouched((prev) => ({ ...prev, service: true }));
    setErrors((prev) => ({ ...prev, service: "" }));
  };

  const handleNdaSelect = (val) => {
    setFormData((prev) => ({ ...prev, nda: val }));
    setTouched((prev) => ({ ...prev, nda: true }));
    setErrors((prev) => ({ ...prev, nda: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      company: true,
      phone: true,
      service: true,
      nda: true,
      projectDetails: true,
    };
    setTouched(allTouched);

    const newErrors = {};
    [
      "name",
      "email",
      "company",
      "phone",
      "service",
      "nda",
      "projectDetails",
    ].forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-[#071329] text-slate-800 font-sans relative overflow-x-hidden pb-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="text-sm font-medium text-white/80 flex items-center gap-2">
          <a href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
          <span>›</span>
          <span className="font-semibold text-white">Contact Us</span>
        </div>
      </div>

      {/* Header */}
      <header className="w-full pt-10 pb-20 px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Have an Idea?{" "}
            <span style={{ color: customGreen }}>Let’s Get It Done.</span>
          </h1>
        </div>
      </header>

      {/* Main Form */}
      <main className="max-w-4xl mx-auto px-4 relative z-20 -mt-10">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="p-6 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-2 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Your details
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Share a few details about your project and our team will get
                    back to you.
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full mb-10 overflow-hidden">
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ width: "50%", backgroundColor: customGreen }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                {/* Name */}
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone + Country Code */}
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200 text-slate-700">
                      <span className="text-base">
                        {formData.countryObj.flag}
                      </span>
                      <span className="text-xs font-semibold text-slate-600">
                        {formData.countryObj.code}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder={`Phone (${formData.countryObj.format})`}
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Services Dropdown */}
                <div className="relative border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-400" />
                    <button
                      type="button"
                      onClick={() => {
                        setShowServiceDropdown(!showServiceDropdown);
                        setShowCountryDropdown(false);
                      }}
                      className="w-full flex items-center justify-between text-left text-sm text-slate-800"
                    >
                      <span
                        className={
                          formData.service ? "text-slate-800" : "text-slate-400"
                        }
                      >
                        {formData.service || "Select a service"}
                      </span>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  {showServiceDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 z-50 max-h-60 overflow-y-auto">
                      {SERVICES.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleSelectService(service)}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 border-b border-slate-100 last:border-none text-slate-800"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}

                  {touched.service && errors.service && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.service}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-800 transition-colors">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={() => handleBlur("company")}
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                  {touched.company && errors.company && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Country Name Field (Clickable Dropdown) */}
                <div className="relative border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <button
                      type="button"
                      onClick={() => {
                        setShowCountryDropdown(!showCountryDropdown);
                        setShowServiceDropdown(false);
                      }}
                      className="w-full flex items-center justify-between text-left text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">
                          {formData.countryObj.flag}
                        </span>
                        <span className="text-slate-800">
                          {formData.countryObj.name}
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 z-50 max-h-60 overflow-y-auto">
                      {COUNTRIES.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => handleSelectCountry(c)}
                          className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 text-left text-sm border-b border-slate-100 last:border-none"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">{c.flag}</span>
                            <span className="font-medium text-slate-800">
                              {c.name}
                            </span>
                          </div>
                          <span className="text-slate-500 text-xs font-semibold">
                            {c.code}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* NDA */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 relative md:col-span-2">
                  <span className="text-sm text-slate-600 font-medium">
                    Do you need an NDA first?
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleNdaSelect("Yes")}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        formData.nda === "Yes"
                          ? "text-white border-transparent shadow-sm"
                          : "border-slate-300 text-slate-600 bg-white hover:bg-slate-50"
                      }`}
                      style={
                        formData.nda === "Yes"
                          ? { backgroundColor: customGreen }
                          : {}
                      }
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNdaSelect("No")}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        formData.nda === "No"
                          ? "bg-slate-800 text-white border-transparent shadow-sm"
                          : "border-slate-300 text-slate-600 bg-white hover:bg-slate-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                  {touched.nda && errors.nda && (
                    <p className="absolute text-red-500 text-xs -bottom-5 left-0 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.nda}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="mt-8 relative border-b border-slate-200 pb-2 focus-within:border-slate-800 transition-colors">
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-slate-400 mt-1" />
                  <textarea
                    rows="3"
                    name="projectDetails"
                    placeholder="Tell us more about your project"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    onBlur={() => handleBlur("projectDetails")}
                    className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none resize-none"
                  />
                </div>
                {touched.projectDetails && errors.projectDetails && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded text-white font-bold text-sm tracking-wide shadow-lg hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  style={{ backgroundColor: customGreen }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
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
                      REQUEST FREE ESTIMATE
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center space-y-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: "oklch(0.92 0.08 83.45)" }}
              >
                <CheckCircle
                  className="w-10 h-10"
                  style={{ color: customGreen }}
                />
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="text-2xl font-bold text-slate-900">
                  Details Received Successfully!
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you{" "}
                  <span className="font-semibold">{formData.name}</span>! We’ve
                  received your request for{" "}
                  <span className="font-semibold">{formData.service}</span>. Our
                  team will contact you shortly at{" "}
                  <span className="font-semibold">{formData.email}</span>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    countryObj: COUNTRIES[0],
                    service: "",
                    nda: null,
                    projectDetails: "",
                  });
                  setTouched({});
                  setErrors({});
                }}
                className="px-6 py-2.5 rounded text-sm font-semibold text-white transition-all shadow"
                style={{ backgroundColor: customGreen }}
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="text-center mt-12 text-xs text-slate-400">
        <p>© 2026 Codewire. All rights reserved.</p>
      </footer>
    </div>
  );
}
