import React from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Cloud,
  Globe,
  MonitorSmartphone,
  Rocket,
  Star,
  Zap,
} from "lucide-react";

const AIModelsSection = () => {
  const partners = [
    { name: "Azure", icon: <Cloud size={16} /> },
    { name: "CISCO Ai", icon: <Globe size={16} /> },
    { name: "KANBRICK", icon: <Zap size={16} /> },
    { name: "K&K HOUSTON", icon: <Building2 size={16} /> },
    { name: "AWS Ai", icon: <Rocket size={16} /> },
    { name: "inteliber", icon: <MonitorSmartphone size={16} /> },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: "user",
      text: "Hi! Can you help me automate customer support?",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "bot",
      text: "Hello! Absolutely. We build 24/7 AI chatbots trained on your custom data.",
      time: "10:00 AM",
    },
    {
      id: 3,
      sender: "user",
      text: "Great choice! Does it integrate with our CRM?",
      time: "10:01 AM",
    },
    {
      id: 4,
      sender: "bot",
      text: "Yes! We connect seamlessly with Salesforce, HubSpot, Zendesk, and custom APIs.",
      time: "10:01 AM",
    },
    {
      id: 5,
      sender: "user",
      text: "Nice! Any special offers on this month?",
      time: "10:02 AM",
    },
    {
      id: 6,
      sender: "bot",
      text: "Yes! It's currently 40% off as part of our seasonal enterprise bundle.",
      time: "10:02 AM",
    },
    {
      id: 7,
      sender: "user",
      text: "That's awesome. How soon can we launch?",
      time: "10:03 AM",
    },
    {
      id: 8,
      sender: "bot",
      text: "We deploy production-ready AI assistants in under 2 weeks with full training!",
      time: "10:03 AM",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8fbfa] text-slate-900 overflow-hidden font-sans min-h-screen flex flex-col justify-between pt-6 pb-10">
      {/* Top Breadcrumb */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10 ms-16">
        {/* Breadcrumb / Top Header Links */}
        <div className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-2">
          <a href="/" className="hover:text-yellow-700 transition-colors">
            Home
          </a>
          <span className="text-slate-400">›</span>
          <span className="text-slate-900 font-semibold">
            AI & Chatbot Development
          </span>
        </div>
      </div>

      {/* Hero Grid Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5">
          <span
            className="text-[11px] font-bold tracking-widest text-slate-800 uppercase px-3.5 py-1 rounded-full border border-[#fdbe04]/40"
            style={{ backgroundColor: "#fdbe0425" }}
          >
            TRANSFORM CUSTOMER ENGAGEMENT WITH CHATBOTS
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[1.18] tracking-tight">
            AI Chatbots That Drive{" "}
            <span
              className="underline decoration-2 underline-offset-6"
              style={{ color: "#fdbe04", textDecorationColor: "#fdbe04" }}
            >
              Unmatched Customer
            </span>{" "}
            Engagement Through 24/7{" "}
            <span
              className="px-2.5 py-0.5 rounded text-slate-900 inline-block mt-1 font-bold"
              style={{ backgroundColor: "#fdbe0440" }}
            >
              Automation
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Empower your brand with intelligent chatbots trained on your own
            data, documents, & website. Automate customer interactions, capture
            leads, & provide instant support across your digital touchpoints day
            & night.
          </p>

          {/* Trust Badges & Clutch Rating */}
          <div className="pt-2 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/80">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs shadow-md"
                style={{ backgroundColor: "#fdbe04" }}
              >
                BD
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Best Development Company
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                  Payoneer Certified
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/80">
              <div>
                <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Clutch
                </p>
                <div
                  className="flex items-center gap-1 text-xs font-bold"
                  style={{ color: "#fdbe04" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="text-slate-600 ml-1 text-xs font-semibold">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - iPhone / Chat Mockup */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Floating badge top-left */}
          <div className="absolute -top-4 -left-4 sm:-left-8 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 z-30 animate-pulse">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-900 text-lg font-bold"
              style={{ backgroundColor: "#fdbe0440" }}
            >
              <Bot size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                Smart AI Assistant
              </p>
              <p className="text-[10px] text-slate-400 font-medium">
                Online 24/7
              </p>
            </div>
          </div>

          {/* Floating badge bottom-right */}
          <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-slate-900 text-white p-3 rounded-2xl shadow-xl flex items-center justify-center z-30 border border-slate-800">
            <svg
              className="w-5 h-5 fill-current"
              style={{ color: "#fdbe04" }}
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.246-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>

          {/* iPhone Mockup Frame */}
          <div
            className="relative w-[300px] sm:w-[330px] h-[520px] bg-slate-900 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800"
            style={{ ringColor: "#fdbe0425" }}
          >
            {/* Phone Screen Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-40 flex items-center justify-center">
              <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
            </div>

            {/* Internal Chat Screen */}
            <div className="w-full h-full bg-slate-50/90 rounded-[34px] overflow-hidden flex flex-col pt-7 pb-3 px-3 relative">
              {/* Chat Header */}
              <div className="bg-white px-3 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between mb-2 z-20">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-900 text-[11px] font-black shadow-sm"
                    style={{ backgroundColor: "#fdbe04" }}
                  >
                    AI
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      Codewire AI Bot
                    </h4>
                    <p
                      className="text-[9px] font-semibold flex items-center gap-1"
                      style={{ color: "#fdbe04" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-ping"
                        style={{ backgroundColor: "#fdbe04" }}
                      ></span>{" "}
                      Active now
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">
                  Secure
                </span>
              </div>

              {/* Seamless Continuously Scrolling Messages Container */}
              <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 overflow-hidden flex flex-col">
                  <div className="flex flex-col space-y-3 animate-smooth-scroll pt-2 pb-4">
                    {[...chatMessages, ...chatMessages].map((msg, index) => (
                      <div
                        key={`${msg.id}-${index}`}
                        className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                      >
                        <div
                          className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-[11px] sm:text-xs leading-relaxed shadow-sm ${
                            msg.sender === "user"
                              ? "text-slate-900 rounded-br-none font-medium"
                              : "bg-white text-slate-800 rounded-bl-none border border-slate-200/80 font-medium shadow-xs"
                          }`}
                          style={
                            msg.sender === "user"
                              ? { backgroundColor: "#fdbe04" }
                              : {}
                          }
                        >
                          {msg.text}
                        </div>
                        <span className="text-[8px] text-slate-400 mt-0.5 px-1">
                          {msg.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-slate-50/90 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-slate-50/90 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Chat Input Bar */}
              <div className="mt-2 bg-white px-3 py-2 rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-xs z-20">
                <span className="text-[11px] text-slate-400 font-normal">
                  Type a message...
                </span>
                <div
                  className="w-6 h-6 rounded-xl flex items-center justify-center text-slate-900 shadow-sm cursor-pointer transition-colors"
                  style={{ backgroundColor: "#fdbe04" }}
                >
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Ticker Section */}
      <div className="mt-14 pt-6 border-t border-slate-200/80 bg-slate-900 text-white py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
          <p
            className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase"
            style={{ color: "#fdbe04" }}
          >
            TRUSTED & PARTNERED BY BUSINESSES WORLDWIDE TO BUILD SMARTER CHATBOT
            SOLUTIONS
          </p>
        </div>

        {/* Sliding Marquee Track */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex space-x-14 animate-marquee whitespace-nowrap items-center min-w-full justify-around px-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-slate-300 font-bold tracking-wider text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="text-base" style={{ color: "#fdbe04" }}>
                  {partner.icon}
                </span>
                <span>{partner.name}</span>
              </div>
            ))}
            {partners.map((partner, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-2 text-slate-300 font-bold tracking-wider text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="text-base" style={{ color: "#fdbe04" }}>
                  {partner.icon}
                </span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Keyframes for Smooth Animations */}
      <style>{`
        @keyframes smoothScroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-smooth-scroll {
          animation: smoothScroll 22s linear infinite;
        }

        .animate-smooth-scroll:hover {
          animation-play-state: paused;
        }

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
    </section>
  );
};

export default AIModelsSection;
