import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What does Codewire actually do?",
      answer: (
        <>
          We architect and build full-stack digital products:{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            custom web and mobile apps
          </span>{" "}
          tailored to your business logic,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            cloud architecture & DevOps
          </span>{" "}
          for scalable deployment,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            API integrations
          </span>{" "}
          connecting your software stack, and{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            legacy system modernization
          </span>{" "}
          to keep your systems future-proof.
        </>
      ),
    },
    {
      question:
        "We are not sure whether we need web development, mobile apps, or cloud scaling. Where do we start?",
      answer:
        "We recommend starting with our Technical Discovery & Architecture Audit. We review your product goals, analyze technical constraints, design system architecture, and provide a clear engineering roadmap before writing code.",
    },
    {
      question:
        "What is the Technical Discovery phase and what do we walk away with?",
      answer:
        "The discovery phase is a 1-2 week deep dive into your product requirements. You walk away with a complete system architecture blueprint, database schema designs, tech stack recommendations, wireframes or technical specs, and a fixed-price development estimate.",
    },
    {
      question: "Do you build native mobile apps or cross-platform solutions?",
      answer:
        "We specialize in both high-performance cross-platform development (using React Native and Flutter) for faster time-to-market, as well as fully native iOS (Swift) and Android (Kotlin) applications when maximum hardware integration is required.",
    },
    {
      question:
        "Will the new software integrate smoothly with our existing tools?",
      answer:
        "Yes. We specialize in building secure, custom REST/GraphQL APIs, webhooks, and microservices middleware to connect your apps with third-party platforms like Stripe, AWS, Salesforce, Firebase, and proprietary databases.",
    },
    {
      question:
        "How do we engage — can we hire dedicated developers for our team?",
      answer:
        "Absolutely. We offer flexible engagement models including dedicated engineering team augmentation (where developers embed directly into your sprints) and full end-to-end turnkey project delivery managed completely by our team.",
    },
    {
      question: "How long does it take to build a software product or MVP?",
      answer:
        "For most MVPs and custom software applications, we deliver the first functional milestone or prototype within 3 to 6 weeks, allowing you to test core features and gather user feedback quickly.",
    },
    {
      question:
        "Do you work with early-stage startups or only established enterprises?",
      answer:
        "We partner with both fast-moving tech startups looking to build and launch their MVPs rapidly, and established enterprises modernizing legacy software or scaling high-throughput cloud infrastructure.",
    },
    {
      question: "What technologies and frameworks make up your core stack?",
      answer:
        "Our engineering stack spans React, Next.js, TypeScript, Node.js, Python, React Native, Flutter, PostgreSQL, Docker, Kubernetes, AWS, Google Cloud, and modern CI/CD DevOps pipelines.",
    },
    {
      question:
        "How do you handle code quality, security, and maintenance after launch?",
      answer:
        "We maintain strict engineering standards through automated unit testing, code reviews, CI/CD pipelines, and zero-trust security practices. We also offer ongoing post-launch maintenance, monitoring, and scaling support SLAs.",
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
              Before Every Project
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mt-1">
            Straight answers on our software engineering process, mobile app
            capabilities, tech stacks, and how we collaborate with your team.
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
                          ? "text-yellow-600"
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
