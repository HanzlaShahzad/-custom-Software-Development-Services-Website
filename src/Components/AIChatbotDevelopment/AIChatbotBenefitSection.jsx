import React from "react";
import {
  MessageSquare,
  Bot,
  Check,
  Clock,
  Zap,
  Target,
  ShoppingBag,
  Share2,
  Layers,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_COLOR = "rgb(254 189 4)";

export default function AIChatbotBenefitSections() {
  return (
    <div className="w-[90%] mx-auto bg-white font-sans overflow-hidden py-10 space-y-16">
      {/* =========================================================
        SECTION 1: 24/7 Customer Support & Custom LLM Integration
        ========================================================= */}
      <section
        className="w-full min-h-[750px] h-screen max-h-[850px] flex flex-col justify-center px-6 lg:px-12 rounded-3xl"
        style={{
          background:
            "linear-gradient(100deg, rgba(254, 189, 4, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)",
        }}
      >
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="mb-6 text-center lg:text-left">
            <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-500 mb-1">
              Enterprise AI Chatbot Development Solutions[cite: 3]
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Delivering{" "}
              <span style={{ color: ACCENT_COLOR }}>
                Operational Excellence
              </span>
              , Creating Lasting Customer Value[cite: 3]
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white shadow-xl">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[90%] max-w-[270px] h-[190px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden select-none flex flex-col justify-between">
                <div className="bg-[#0f172a] px-3 py-2 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-black font-bold text-xs"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      <Bot size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold">24/7 AI Assistant</p>
                      <p className="text-[9px] text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>{" "}
                        Active
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2 space-y-1.5 bg-gray-50 text-[11px] flex-1 overflow-hidden">
                  <div className="flex justify-end">
                    <div className="bg-[#e2e8f0] text-gray-800 rounded-lg p-2 max-w-[85%]">
                      Can you help me after hours?[cite: 3]
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 text-gray-800 rounded-lg p-2 max-w-[85%] shadow-sm">
                      Yes! Real-time assistance is active 24/7.[cite: 3]
                    </div>
                  </div>
                </div>
                <div className="p-2 bg-white border-t border-gray-100 flex items-center justify-between text-gray-400 text-xs">
                  <span>Type a message...</span>
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center text-black"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <MessageSquare size={10} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <Clock size={14} style={{ color: ACCENT_COLOR }} />
                <span>Round-the-Clock Automated Support[cite: 3]</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
                Build Tailored Conversational Engines for Immediate Impact[cite:
                3].
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our bespoke chatbot development services leverage cutting-edge
                natural language processing (NLP) and fine-tuned LLMs to deliver
                precise, context-aware responses tailored to your company's
                domain knowledge.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <div
                    className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span>
                    Provide real-time support beyond traditional business hours
                    with zero lag time[cite: 3]
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div
                    className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span>
                    Automate precise answers for complex FAQs and multi-tier
                    service requests[cite: 3]
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div
                    className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span>
                    Handle tens of thousands of unique user conversations
                    simultaneously[cite: 3]
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
        SECTION 2: Streamline Conversations & Workflow Automation
        ========================================================= */}
      <section
        className="w-full min-h-[750px] h-screen max-h-[850px] flex flex-col justify-center px-6 lg:px-12 rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(254, 189, 4, 0.1) 100%)",
        }}
      >
        <div className="mx-auto w-[90%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[90%] max-w-[280px] h-[190px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden select-none flex flex-col justify-between">
              <div className="bg-[#0f172a] px-3 py-2 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-black font-bold text-xs"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    <Bot size={14} />
                  </div>
                  <p className="text-xs font-bold">Workflow Chat AI</p>
                </div>
              </div>
              <div className="p-2 space-y-1.5 bg-gray-50 text-[11px] flex-1 overflow-hidden">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-lg p-2 max-w-[85%]">
                    Cancel my enterprise subscription plan[cite: 5].
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-800 rounded-lg p-2 max-w-[85%] shadow-sm">
                    I can process this instantly. Account email?[cite: 5]
                  </div>
                </div>
              </div>
              <div className="p-2 bg-white border-t border-gray-100 flex items-center justify-between text-gray-400 text-xs">
                <span>Type Something...</span>
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center text-black"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <MessageSquare size={10} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200">
              <Zap size={14} style={{ color: ACCENT_COLOR }} />
              <span>Massive Efficiency Boost[cite: 5]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Streamline Conversations at Scale[cite: 5].
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Eliminate repetitive support friction by deploying intelligent
              chat flows that execute actions directly in your backend
              software—updating statuses, validating fields, and processing
              requests autonomously.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Manage thousands of customer chats simultaneously with zero
                  queuing delay[cite: 5]
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Automate backend workflows to achieve instant ticket
                  resolution and action execution[cite: 5]
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Improve total internal support team productivity by up to 50%
                  via smart triaging[cite: 5]
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
        SECTION 3: Lead Generation & Conversions (Dark Theme)
        ========================================================= */}
      <section className="w-full min-h-[750px] h-screen max-h-[850px] bg-gradient-to-tr from-[#090d16] via-[#111c38] to-[#04060b] flex flex-col justify-center px-6 lg:px-12 text-white rounded-3xl relative shadow-2xl">
        <div className="mx-auto w-[90%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-md">
              <Target size={14} style={{ color: ACCENT_COLOR }} />
              <span>Lead Generation & Smart Qualification</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Turn Conversations <br />
              <span style={{ color: ACCENT_COLOR }}>
                Into High-Value Conversions.
              </span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our custom conversational funnels do more than answer
              questions—they actively engage casual visitors, uncover buying
              intent, and collect qualifying metrics before passing warm
              prospects directly to your sales staff.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Capture potential leads automatically through dynamic,
                  engaging chat workflows
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Qualify prospects based on custom budget, timeline, and
                  requirement parameters
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Collect valuable user data and intent insights in real time
                  for targeted nurturing
                </span>
              </li>
            </ul>
            <a
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase text-black shadow-lg"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Generate Leads Faster
            </a>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-indigo-950/80 border border-indigo-700/50 rounded-3xl p-5 w-[90%] max-w-[420px] h-[210px] space-y-2 shadow-2xl flex flex-col justify-center">
              <div className="bg-emerald-700 text-white p-2.5 rounded-xl text-xs max-w-[85%] shadow-md">
                I'd like to schedule a session tomorrow. Can you check
                availability?
              </div>
              <div className="bg-white text-gray-900 p-2.5 rounded-xl text-xs space-y-1.5 max-w-[90%] ml-auto shadow-md">
                <p className="font-semibold text-gray-800">
                  Select your preferred time slot:
                </p>
                <div className="p-1.5 bg-emerald-600 text-white font-bold rounded-lg text-[11px]">
                  08:00 AM - 09:00 AM (Recommended)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
        SECTION 4: Simplify Every Customer Purchase & eCommerce
        ========================================================= */}
      <section
        className="w-full min-h-[750px] h-screen max-h-[850px] flex flex-col justify-center px-6 lg:px-12 rounded-3xl"
        style={{
          background:
            "linear-gradient(220deg, rgba(236, 72, 153, 0.08) 0%, rgba(254, 189, 4, 0.12) 100%)",
        }}
      >
        <div className="mx-auto w-[90%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[90%] max-w-[270px] h-[190px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden select-none flex flex-col justify-between">
              <div className="bg-purple-900 px-3 py-2 text-white">
                <p className="text-xs font-bold">eCommerce Assistant</p>
              </div>
              <div className="p-2 space-y-1.5 bg-gray-50 text-[11px] flex-1 overflow-hidden">
                <div className="bg-purple-100 text-purple-900 p-2 rounded-lg">
                  Package tracking code: A518P3.
                </div>
                <div className="bg-white border p-2 rounded-lg text-gray-800">
                  Shipped yesterday via express courier. Track status here!
                </div>
              </div>
              <div className="p-1.5 bg-white border-t border-gray-100 text-[10px] text-gray-400">
                Secure transaction verified
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200">
              <ShoppingBag size={14} style={{ color: ACCENT_COLOR }} />
              <span>Seamless Checkout & Retail Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Simplify Every Customer Purchase Journey.
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empower shoppers to find products, compare specifications, and
              complete transactions directly inside the chat interface,
              minimizing friction and optimizing your store conversion rates.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Guide shoppers effortlessly through product selection and
                  checkout via chat widgets
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Resolve localized payment, billing, or fulfillment issues
                  instantly without human intervention
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Significantly reduce online cart abandonment rates with
                  targeted reminders
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
        SECTION 5: Omnichannel Deployment & Unified Voice (Dark Theme)
        ========================================================= */}
      <section className="w-full min-h-[750px] h-screen max-h-[850px] bg-gradient-to-br from-[#04060b] via-[#10192e] to-[#080d1a] flex flex-col justify-center px-6 lg:px-12 text-white rounded-3xl relative shadow-2xl">
        <div className="mx-auto w-[90%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-md">
              <Share2 size={14} style={{ color: ACCENT_COLOR }} />
              <span>Omnichannel Connectivity</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Stay Connected <br />
              <span style={{ color: ACCENT_COLOR }}>
                Everywhere Your Customers Are.
              </span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Deploy your custom AI bot across all major customer touchpoints.
              Our development frameworks ensure synchronized data persistence so
              users can switch channels without losing conversation history.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Deliver consistent, high-grade support across web browsers,
                  mobile apps, and social networks
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Integrate natively with WhatsApp Business, Facebook Messenger,
                  Instagram, and SMS gateways
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Maintain a strictly unified brand voice, tone, and policy
                  guideline across all channels
                </span>
              </li>
            </ul>
            <a
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase text-black shadow-lg"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Streamline User Support
            </a>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[90%] max-w-[300px] h-[190px] bg-gray-900 border border-gray-700 rounded-3xl p-4 text-xs text-gray-200 shadow-2xl space-y-2 flex flex-col justify-center">
              <div className="bg-gray-800 p-2 rounded-xl">
                London flagship branch hours today?
              </div>
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                We operate three stores. Which location?
              </div>
              <div className="bg-gray-800 p-2 rounded-xl">
                Hackney district please!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
        SECTION 6: Seamless CRM & Enterprise Integrations
        ========================================================= */}
      <section
        className="w-full min-h-[750px] h-screen max-h-[850px] flex flex-col justify-center px-6 lg:px-12 rounded-3xl"
        style={{
          background:
            "linear-gradient(60deg, rgba(59, 130, 246, 0.1) 0%, rgba(254, 189, 4, 0.15) 100%)",
        }}
      >
        <div className="mx-auto w-[90%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[90%] max-w-[280px] h-[180px] bg-white rounded-2xl shadow-xl border border-gray-200 p-3 text-xs text-gray-800 space-y-2 select-none flex flex-col justify-center">
              <div className="font-bold text-gray-500 uppercase text-[10px]">
                Enterprise CRM Data Flow
              </div>
              <div className="bg-gray-100 p-2 rounded-lg">
                Michael Bennett | michael@microsoft.com
              </div>
              <div className="bg-indigo-50 border border-indigo-200 p-2 rounded-lg text-indigo-900 font-semibold flex items-center justify-between">
                <span>Active Bot Session Linked</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
              <Layers size={14} style={{ color: ACCENT_COLOR }} />
              <span>Frictionless Enterprise Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Automate Without Technical Complexity.
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We build robust middleware connectors that bridge your custom
              chatbot with existing enterprise architectures, ensuring secure
              data synchronization across databases, customer service
              dashboards, and ERP software.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Connect effortlessly with leading CRM platforms (Salesforce,
                  HubSpot), ERPs, and CMS systems
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Enable automated cross-platform data syncing, user profile
                  updating, and event logging
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 p-0.5 rounded-full text-black flex-shrink-0"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>
                  Maintain strictly secure, compliant, and enterprise-grade
                  encryption for all user interactions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
