import React, { useEffect, useState, useRef } from "react";
import {
  getContextualContactUsPath,
  getContextualOurWorkPath,
  getContextualPath,
} from "../../utils/navigation";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  X,
  Menu,
  Check,
  PenLine,
  Mail,
  Hand,
} from "lucide-react";

const ACCENT_YELLOW = "#ca8a04"; // Rich solid yellow theme color
const CALENDLY_URL = "https://calendly.com/hanzlashahzad41/30min";

// =====================================================
// SERVICES DATA
// =====================================================

const servicesData = {
  leftItems: [
    "AI & Machine Learning",
    "Automation & AI Agents",
    "Business Intelligent Automation",
    "Generative AI",
    "Computer Vision",
    "AI Chatbot Development",
  ],

  columns: [
    {
      title: "Emerging Technologies",
      items: [
        "AI & Machine Learning",
        "E-commerce Platforms",
        "Business Intelligent Automation",
        "AI Chatbot Development",
      ],
    },
    {
      title: "Software Development",
      items: [
        "Web Application Development",
        "Custom Software Development",
        "Mobile App Development",
        "DevOps Services",
      ],
    },
    {
      title: "Engagement Models",
      items: ["Flexible Teams", "Dedicated Teams", "End-to-End Delivery"],
    },
    {
      title: "Industries",
      items: [
        "Software as a Service (SaaS)",
        "E-commerce & Retail",
        "Logistic & Distribution",
      ],
    },
  ],

  solutions: ["SEE ALL SOLUTIONS"],
};

// =====================================================
// ENGINEERS DATA
// =====================================================

const engineersData = {
  leftBox: {
    title: "AI & Data Engineers",
    items: [
      "Hire Machine Learning Engineers",
      "Hire Data Scientists Engineers",
    ],
  },
  columns: [
    {
      title: "Full Stack & DevOps Engineers",
      items: [
        "Hire Python Developers",
        "Hire DevOps Developers",
        "Hire React Js Developers",
      ],
    },
    {
      title: "Mobile App Engineers",
      items: [
        "Hire Flutter Developers",
        "Hire React Native Developers",
        "Hire Android Developers",
      ],
    },
    {
      title: "Web Applications",
      items: ["Hire Ruby Rails", "Hire Django", "Hire Go Lang"],
    },
  ],
};

// =====================================================
// GET LINK
// =====================================================

function getServiceLink(item) {
  if (item === "AI & Machine Learning" || item.includes("Machine Learning")) {
    return "/ai-ml-development-services";
  } else if (item === "Automation & AI Agents") {
    return "/ai-agent-development-services";
  } else if (item === "Business Intelligent Automation") {
    return "/ai-automation-agency";
  } else if (item === "Generative AI") {
    return "/generative-ai";
  } else if (item === "Computer Vision") {
    return "/computer-vision-development-services";
  } else if (item === "AI Chatbot Development") {
    return "/ai-chatbot-development";
  } else if (item === "Web Application Development") {
    return "/web-application-development";
  } else if (item === "E-commerce Platforms") {
    return "/ecommerce-platforms";
  } else if (
    item === "Custom Software Development" ||
    item === "Mobile App Development" ||
    item === "DevOps Services" ||
    item === "Flexible Teams" ||
    item === "Dedicated Teams" ||
    item === "End-to-End Delivery" ||
    item === "Software as a Service (SaaS)" ||
    item === "E-commerce & Retail" ||
    item === "Logistic & Distribution"
  ) {
    return "/technology-sevices";
  } else if (
    item === "Hire Python Developers" ||
    item === "Hire DevOps Developers" ||
    item === "Hire React Js Developers" ||
    item === "Hire Python Developers" ||
    item === "Hire Flutter Developers" ||
    item === "Hire React Native Developers" ||
    item === "Hire Android Developers" ||
    item === "Hire Ruby Rails" ||
    item === "Hire Django" ||
    item === "Hire Go Lang" ||
    item === "Hire Machine Learning Engineers" ||
    item === "Hire Data Scientists Engineers"
  ) {
    return "/hiring-developers";
  }
}

// =====================================================
// ARROW LINK
// =====================================================

function ArrowLink({ children }) {
  return (
    <a
      href={getServiceLink(children)}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-1.5
        text-[15px]
        font-medium
        leading-5
        text-[#1e293b]
        hover:text-black
        transition-all
        duration-200
        hover:translate-x-1
      "
    >
      <span>{children}</span>
      <ArrowRight
        size={16}
        strokeWidth={2}
        className="
          shrink-0
          transition-transform
          duration-200
          group-hover:translate-x-1
        "
      />
    </a>
  );
}

// =====================================================
// MEGA MENU
// =====================================================

function MegaMenu({ type, onMouseEnter, onMouseLeave }) {
  if (type === "engineers") {
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="
          absolute
          left-0
          top-full
          z-[6000]
          w-full
          border-t
          border-black/10
          bg-[#fefce8]
          shadow-2xl
          hidden lg:block
        "
      >
        <div className="mx-auto max-w-[1450px] px-10 py-10">
          <div className="grid grid-cols-[280px_1fr_1fr_1fr] gap-8 items-start">
            {/* LEFT HIGHLIGHT BOX WITH SOLID YELLOW BG */}
            <div className="bg-[#fdbe04] rounded-2xl p-6 shadow-sm text-white">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                AI & Data Engineers
              </h3>
              <div className="text-xl font-bold mb-6 text-white">
                ENGINEER HIRING
              </div>
              <div className="space-y-4">
                {engineersData.leftBox.items.map((item) => (
                  <a
                    key={item}
                    href={getServiceLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-3
                      text-[15px]
                      font-medium
                      leading-5
                      text-white
                      transition-all
                      duration-200
                      hover:translate-x-1
                    "
                  >
                    <span>{item}</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 text-white"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* REST OF THE ENGINEER COLUMNS */}
            {engineersData.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#ca8a04]">
                  {column.title}
                </h3>
                <div className="space-y-4">
                  {column.items.map((item) => (
                    <ArrowLink key={item}>{item}</ArrowLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        absolute
        left-0
        top-full
        z-[6000]
        w-full
        border-t
        border-black/10
        bg-[#fefce8]
        shadow-2xl
        hidden lg:block
      "
    >
      <div className="mx-auto max-w-[1450px] px-10 py-10">
        <div className="grid grid-cols-[280px_1fr_230px] gap-10 items-start">
          {/* LEFT WITH SOLID YELLOW BG */}
          <div className="rounded-2xl p-6 shadow-sm text-white bg-[#fdbe04]">
            <div className="space-y-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                AI Innovation for Every Need
              </div>
              <div className="text-xl font-bold mb-2 text-white">
                AI & Automation
              </div>
              {servicesData.leftItems.map((item) => (
                <a
                  key={item}
                  href={getServiceLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-3
                    text-[15px]
                    font-medium
                    leading-5
                    text-white
                    transition-all
                    duration-200
                    hover:translate-x-1
                  "
                >
                  <span>{item}</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 text-white"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CENTER COLUMNS */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {servicesData.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#ca8a04]">
                  {column.title}
                </h3>
                <div className="space-y-4">
                  {column.items.map((item) => (
                    <ArrowLink key={item}>{item}</ArrowLink>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl bg-[#071525] p-6 text-white shadow-sm">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white/50">
              Solutions
            </h3>
            <div className="space-y-4">
              {servicesData.solutions.map((item) => (
                <a
                  key={item}
                  href={getContextualContactUsPath()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-1.5
                    text-[15px]
                    font-medium
                    leading-5
                    text-white
                    transition-all
                    duration-200
                    hover:translate-x-1
                  "
                >
                  <span>{item}</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// RESPONSIVE MENU OVERLAY
// =====================================================

function ResponsiveMenuOverlay({ onClose }) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileEngineersOpen, setMobileEngineersOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#071525] text-white">
      <div className="flex h-[76px] sm:h-[88px] items-center justify-between border-b border-white/10 px-5 sm:px-10">
        <div className="flex items-center gap-0">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://codewiresolutions.com/images/logo.png"
              width={45}
              height={45}
              className="sm:w-[55px] cursor-pointer sm:h-[55px]"
              alt=""
            />
          </a>
          <div className="flex flex-col">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="text-xl sm:text-2xl font-black tracking-widest text-white"
            >
              CODEWIRE
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm cursor-pointer tracking-widest"
            >
              Solution
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center text-white"
          aria-label="Close menu"
        >
          <X size={28} strokeWidth={2.3} className="sm:w-8 sm:h-8" />
        </button>
      </div>

      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 py-10 sm:py-16">
        {/* MOBILE ACCORDION / NAVIGATION LINKS */}
        <div className="space-y-6 mb-12 lg:hidden">
          {/* Services Dropdown in Mobile */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between text-xl font-bold text-white py-2"
            >
              <span>Services</span>
              {mobileServicesOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {mobileServicesOpen && (
              <div className="mt-4 pl-4 space-y-3">
                {servicesData.leftItems.map((item) => (
                  <a
                    key={item}
                    href={getServiceLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block text-sm text-white/70 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Engineers Dropdown in Mobile */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => setMobileEngineersOpen(!mobileEngineersOpen)}
              className="flex w-full items-center justify-between text-xl font-bold text-white py-2"
            >
              <span>Engineers</span>
              {mobileEngineersOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {mobileEngineersOpen && (
              <div className="mt-4 pl-4 space-y-3">
                {engineersData.leftBox.items.map((item) => (
                  <a
                    key={item}
                    href={getServiceLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block text-sm text-white/70 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-sm">
                <Check size={16} />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                About Us
              </h3>
            </div>
            <div className="space-y-4 pl-11">
              <a
                href="/our-work"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Success Stories
              </a>
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Company Overview
              </a>
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-sm">
                <PenLine size={16} />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Blogs & Insights
              </h3>
            </div>
            <div className="space-y-4 pl-11">
              <a
                href={getContextualPath("blogs")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Engineering Culture
              </a>
              <a
                href={getContextualPath("blogs")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                AI & Tech Trends
              </a>
              <a
                href="/case-studies"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block text-base sm:text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-sm">
                <Mail size={16} />
              </span>
              <a
                href="/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-xl sm:text-2xl font-bold tracking-tight text-white"
              >
                Contact Us
              </a>
            </div>
            <div className="space-y-4 pl-11 text-sm text-white/70">
              <p>
                <strong className="text-white block text-base mb-1">
                  Head Office | Pakistan
                </strong>{" "}
                Peoples Town, Vehari, Postal 61100, Punjab.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-20 rounded-2xl p-6 sm:p-8 bg-[rgb(254 189 4)] text-white bg-[#febc06] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl shrink-0 mx-auto md:mx-0">
              <Hand size={20} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">
                Hi, we're Codewire.
              </h4>
              <p className="text-xs sm:text-sm font-medium text-white/90">
                Schedule a call to discover smarter ways to grow & innovate.
              </p>
            </div>
          </div>
          <a
            type="button"
            onClick={() => {
              onClose();
            }}
            href="/about-us"
            className="w-full md:w-auto rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 shrink-0 text-center"
          >
            About Codewire
          </a>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// NAVBAR
// =====================================================

export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openMegaMenu = (menu) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveMegaMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const closeMegaMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setActiveMegaMenu(null);
  };

  return (
    <>
      <header className="relative z-[5000] w-full bg-white">
        <nav className="relative mx-auto flex h-[76px] sm:h-[88px] max-w-[1450px] items-center justify-between px-4 sm:px-7 lg:px-10">
          <div className="flex items-center gap-0 pt-2">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://codewiresolutions.com/images/logo.png"
                width={42}
                height={42}
                className="relative top-0.5 cursor-pointer sm:w-[55px] sm:h-[55px]"
                alt=""
              />
            </a>
            <div className="flex flex-col gap-0">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[0.2em] font-[800]  text-black relative top-0.5 sm:text-lg"
              >
                CODEWIRE
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] cursor-pointer sm:text-sm relative bottom-1 tracking-[0.2em]"
              >
                Solution
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden h-full items-center gap-6 xl:gap-7 lg:flex">
              {/* SERVICES */}
              <div
                className="flex h-full items-center"
                onMouseEnter={() => openMegaMenu("services")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 text-[15px] font-medium text-black"
                >
                  Services
                  {activeMegaMenu === "services" ? (
                    <ChevronUp size={17} />
                  ) : (
                    <ChevronDown size={17} />
                  )}
                </button>
              </div>

              <a
                href={getContextualOurWorkPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-black transition-opacity hover:opacity-60"
              >
                Success Stories
              </a>

              {/* ENGINEERS */}
              <div
                className="flex h-full items-center"
                onMouseEnter={() => openMegaMenu("engineers")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 text-[15px] font-medium text-black"
                >
                  Engineers
                  {activeMegaMenu === "engineers" ? (
                    <ChevronUp size={17} />
                  ) : (
                    <ChevronDown size={17} />
                  )}
                </button>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#fdbe04] px-4 xl:px-5 py-2.5 xl:py-3 text-xs xl:text-sm font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer"
              >
                BOOK CONSULTATION CALL
              </a>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center text-black"
            >
              <Menu
                size={28}
                strokeWidth={2.3}
                className="sm:w-[31px] sm:h-[31px]"
              />
            </button>
          </div>

          {activeMegaMenu === "services" && (
            <MegaMenu
              type="services"
              onMouseEnter={cancelClose}
              onMouseLeave={closeMegaMenu}
            />
          )}

          {activeMegaMenu === "engineers" && (
            <MegaMenu
              type="engineers"
              onMouseEnter={cancelClose}
              onMouseLeave={closeMegaMenu}
            />
          )}
        </nav>
        <div className="border-t border-black/10 bg-white" />
      </header>

      {menuOpen && <ResponsiveMenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  );
}
