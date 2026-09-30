import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What do your AI chatbot development services include?",
      answer: (
        <>
          We architect and build full-scale conversational AI products:{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            custom LLM-powered virtual assistants
          </span>{" "}
          tailored to your business logic,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            RAG pipelines & secure vector databases
          </span>{" "}
          for accurate data retrieval,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            omnichannel API integrations
          </span>{" "}
          (WhatsApp, Web, Slack), and{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            advanced NLP intent routing
          </span>{" "}
          to automate complex support and sales workflows.
        </>
      ),
    },
    {
      question:
        "We are not sure which LLM or architecture to use for our chatbot. Where do we start?",
      answer:
        "We recommend starting with our AI Architecture Discovery Audit. We review your conversation use cases, analyze security requirements, evaluate model costs versus performance, and provide a clear engineering roadmap before writing any code.",
    },
    {
      question:
        "What is the AI Discovery phase and what deliverables do we walk away with?",
      answer:
        "The discovery phase is a 1-2 week deep dive into your workflow and dataset. You walk away with a complete system architecture blueprint, RAG data ingestion strategy, LLM provider evaluation (OpenAI, Claude, Llama), prompt engineering specs, and a fixed-price development estimate.",
    },
    {
      question:
        "Do you build custom RAG pipelines to connect chatbots with our internal company data?",
      answer:
        "Yes. We specialize in Retrieval-Augmented Generation (RAG) pipelines that securely connect AI chatbots to your internal databases, PDFs, CRMs, and knowledge bases, ensuring accurate, hallucination-free answers grounded strictly in your verified company data.",
    },
    {
      question:
        "Will the AI chatbot integrate smoothly with our existing CRM and helpdesk tools?",
      answer:
        "Yes. We build secure custom APIs and webhooks to connect your AI chatbots seamlessly with third-party software like Zendesk, Salesforce, HubSpot, Intercom, Shopify, and proprietary databases, including automated human agent handoff protocols.",
    },
    {
      question:
        "How do we engage — can we hire dedicated AI engineers for our team?",
      answer:
        "Absolutely. We offer flexible engagement models including dedicated AI engineering team augmentation (where developers embed directly into your sprints) and full end-to-end turnkey chatbot development managed completely by our team.",
    },
    {
      question: "How long does it take to build and deploy an AI chatbot MVP?",
      answer:
        "For most custom AI chatbots and automated support agents, we deliver the first functional MVP or prototype within 3 to 6 weeks, allowing you to test real user interactions and refine intent handling quickly.",
    },
    {
      question:
        "Is our data secure and will it be used to train public AI models?",
      answer:
        "We maintain a strict 'Security First' approach. Your data is encrypted at rest and in transit, and your proprietary chat logs or documents are never used to train public foundation models, ensuring complete privacy compliance (GDPR, HIPAA ready).",
    },
    {
      question:
        "What technologies and frameworks make up your AI chatbot stack?",
      answer:
        "Our engineering stack spans Python, LangChain, LlamaIndex, OpenAI, Anthropic Claude, Hugging Face, Pinecone, Qdrant, Next.js, FastAPI, PostgreSQL, and enterprise-grade Docker/AWS cloud deployments.",
    },
    {
      question:
        "How do you handle response accuracy, guardrails, and post-launch maintenance?",
      answer:
        "We implement strict guardrails to prevent prompt injections and toxic outputs. We also monitor conversational logs continuously, evaluate model drift, and offer ongoing post-launch fine-tuning, maintenance, and scaling support SLAs.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column - Sticky Section Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-12 flex flex-col items-start gap-4 pr-0 lg:pr-6">
          <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
            FREQUENTLY ASKED
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
            The Questions We Hear{" "}
            <span className="text-yellow-500 block mt-1">
              Before Every AI Chatbot Project
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mt-1">
            Straight answers on our AI chatbot development process, RAG data
            pipelines, LLM model choices, security safeguards, and integration
            capabilities.
          </p>
        </div>

        {/* Right Column - Top Divider Accordion List */}
        <div className="lg:col-span-7 w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-t border-slate-200 transition-colors ${
                  index === faqs.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                {/* Question Row Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left group transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Small Help Icon */}
                    <div className="w-5 h-5 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0 group-hover:border-yellow-500 group-hover:text-yellow-600 transition-colors">
                      ?
                    </div>

                    {/* Question Title */}
                    <span
                      className={`text-base md:text-lg leading-snug transition-colors ${
                        isOpen
                          ? "text-yellow-600 font-semibold"
                          : "text-slate-800 group-hover:text-slate-950"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <span
                    className={`text-xl font-light leading-none shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "text-yellow-600 rotate-45"
                        : "text-slate-400 group-hover:text-slate-900"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-8 pr-4">
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
