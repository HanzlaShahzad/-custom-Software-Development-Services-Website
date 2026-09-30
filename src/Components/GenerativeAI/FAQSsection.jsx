import React, { useState } from "react";
import { Plus, X, HelpCircle } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// GENAI FAQ DATA
// =====================================================

const faqData = [
  {
    question: "What is generative AI development?",
    answer:
      "Generative AI development is the process of building AI systems that can create original content such as text, images, code, audio, or designs. These systems learn patterns from large datasets and generate human-like outputs, helping businesses automate creative and data-driven tasks efficiently.",
  },
  {
    question: "How can generative AI help my business grow?",
    answer:
      "Generative AI boosts productivity by automating repetitive workflows, creating personalized customer experiences, accelerating software development cycles, and generating deep business insights from unstructured data.",
  },
  {
    question: "What are common use cases of generative AI?",
    answer:
      "Common enterprise use cases include intelligent customer support chatbots, automated document summarization, content creation, code generation, custom enterprise search (RAG), and data synthesis.",
  },
  {
    question: "Is generative AI suitable for small and medium businesses?",
    answer:
      "Yes! With pre-trained foundation models and API-driven architectures, small and medium businesses can implement powerful GenAI tools quickly and cost-effectively without needing massive in-house infrastructure.",
  },
  {
    question: "How long does it take to build a generative AI solution?",
    answer:
      "Depending on complexity, standard enterprise GenAI solutions like RAG pipelines or custom chatbots can be prototyped and deployed in as little as 2 to 4 weeks.",
  },
  {
    question: "Can generative AI integrate with existing software systems?",
    answer:
      "Absolutely. GenAI models can be seamlessly connected via APIs to your existing CRM, ERP, cloud storage, and communication channels to enhance workflows without disrupting current systems.",
  },
  {
    question: "Is generative AI secure for handling sensitive data?",
    answer:
      "Yes, when implemented with private cloud instances, secure fine-tuning, and strict data governance policies, GenAI solutions ensure your proprietary enterprise data remains confidential and secure.",
  },
  {
    question: "What is the return on investment of generative AI?",
    answer:
      "ROI is typically achieved through dramatic reductions in manual operational hours, faster time-to-market for content and software, and enhanced customer satisfaction and conversion rates.",
  },
  {
    question:
      "What is the difference between generative AI and machine learning?",
    answer:
      "Traditional machine learning focuses on analyzing data and making predictions or classifications (e.g., fraud detection), whereas generative AI focuses on creating new, original content based on learned patterns.",
  },
];

// =====================================================
// GENAI FAQ SECTION COMPONENT
// =====================================================

export default function GenAiFaqSection() {
  // Open the first FAQ by default like in the screenshot
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-24 px-5 sm:px-7 lg:px-12">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* MAIN LAYOUT WITH STICKY LEFT COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* LEFT STICKY COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold tracking-wide">
                <HelpCircle size={14} />
                <span>EXPERT INSIGHTS</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black leading-[1.1]">
                What Enterprises Need to Know About{" "}
                <span style={{ color: ACCENT_YELLOW }}>Generative AI</span>
              </h2>

              <p className="text-base text-black/70 leading-relaxed font-light">
                Explore answers to common questions regarding enterprise
                integration, security, deployment timelines, and the
                transformative potential of Generative AI.
              </p>
            </div>
          </div>

          {/* RIGHT SCROLLING ACCORDION COLUMN */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 transition-colors">
                  {/* FAQ Question Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none"
                  >
                    <span
                      className={`text-lg sm:text-xl transition-colors ${
                        isOpen
                          ? "text-black"
                          : "text-black/80 group-hover:text-black"
                      }`}
                      style={{ color: isOpen ? ACCENT_YELLOW : undefined }}
                    >
                      {faq.question}
                    </span>

                    {/* Toggle Icon Button */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-yellow-100 text-yellow-800 rotate-0"
                          : "bg-black/5 text-black/60 group-hover:bg-black/10"
                      }`}
                    >
                      {isOpen ? (
                        <X size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* FAQ Answer Content with Smooth Collapse Animation */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pt-4"
                        : "grid-rows-[0fr] opacity-0 pt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-black/70 leading-relaxed font-light pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
