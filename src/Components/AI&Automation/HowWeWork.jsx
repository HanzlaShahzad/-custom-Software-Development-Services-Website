import React from "react";

const ACCENT_YELLOW = "#ca8a04"; // Darker dull yellow for text/accents
const SOFT_YELLOW_BG = "#fef08a"; // Soft dull yellow for badges & number boxes

const chatbotWorkflowSteps = [
  {
    stepNum: "01",
    title: "Workflow & Intent Discovery",
    description:
      "We map out your exact customer support or sales workflows, analyze common user intent patterns, and audit connected systems before any chatbot build starts.",
    duration: "Typically 3–5 days",
  },
  {
    stepNum: "02",
    title: "Conversational Architecture & Design",
    description:
      "We architect the chatbot's decision trees, LLM prompts, fallback protocols, and human agent escalation points, walking you through every interaction path.",
    duration: "Typically 1 week",
  },
  {
    stepNum: "03",
    title: "AI Chatbot Engineering & Testing",
    description:
      "Our engineers build and rigorously test the conversational agent against real-world scenarios, complex user queries, and edge cases from your business data.",
    duration: "2–4 weeks",
  },
  {
    stepNum: "04",
    title: "CRM & Helpdesk Integration",
    description:
      "We establish secure API integrations connecting your chatbot to your CRM, ticketing software, ERP, or internal database with encrypted tokens and live logging.",
    duration: "1 week",
  },
  {
    stepNum: "05",
    title: "Deployment & Continuous Tuning",
    description:
      "We launch your AI chatbot into production, monitor early customer conversations closely, and continuously fine-tune responses to maximize resolution rates.",
    duration: "Ongoing support",
  },
];

export default function AiChatbotWorkflowSection() {
  return (
    <section className="bg-white text-black py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 xl:px-16 overflow-visible">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* GRID LAYOUT: STICKY LEFT / SCROLLING RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* LEFT COLUMN: STICKY HEADING (Sticks during scroll, unlocks after last step) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-3">
              AI CHATBOT DEVELOPMENT WORKFLOW
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[1.15] mb-5">
              From Concept to a Live{" "}
              <span style={{ color: ACCENT_YELLOW }}>AI Chatbot</span> in Five
              Steps
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-black/70 font-light leading-relaxed max-w-md">
              No black box. Here is our transparent roadmap for engineering,
              integrating, and launching high-performing conversational AI
              solutions for your enterprise.
            </p>
          </div>

          {/* RIGHT COLUMN: SCROLLING STEPS */}
          <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-14">
            {chatbotWorkflowSteps.map((item, index) => (
              <div
                key={index}
                className="bg-transparent rounded-sm p-1 sm:p-2 flex flex-col sm:flex-row items-start gap-5 sm:gap-7 relative"
              >
                {/* VERTICAL DASHED CONNECTOR LINE BETWEEN STEPS */}
                {index !== chatbotWorkflowSteps.length - 1 && (
                  <div className="absolute left-[26px] sm:left-[30px] top-[72px] sm:top-[76px] bottom-[-40px] sm:bottom-[-56px] w-px border-l-2 border-dashed border-black/20 z-0 hidden sm:block" />
                )}

                {/* STEP CIRCLE NUMBER */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-black font-black text-lg sm:text-xl shrink-0 shadow-sm relative z-10"
                  style={{
                    backgroundColor: SOFT_YELLOW_BG,
                    border: `1px solid ${ACCENT_YELLOW}`,
                  }}
                >
                  {item.stepNum}
                </div>

                {/* STEP CONTENT CONTAINER */}
                <div className="flex-1 relative z-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                      {item.title}
                    </h3>

                    {/* DURATION PILL */}
                    <span
                      className="inline-block text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-sm w-fit"
                      style={{
                        backgroundColor: SOFT_YELLOW_BG,
                        color: ACCENT_YELLOW,
                      }}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
