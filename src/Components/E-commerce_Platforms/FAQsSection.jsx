import React, { useState } from "react";

const ACCENT_YELLOW = "#fdbe04";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What e-commerce platform development services do you offer?",
      answer: (
        <>
          We architect and build full-stack digital retail platforms:{" "}
          <span
            className="text-slate-900 font-semibold px-1 rounded"
            style={{ backgroundColor: `${ACCENT_YELLOW}cc` }}
          >
            custom e-commerce stores
          </span>{" "}
          tailored to your exact inventory and checkout workflows,{" "}
          <span
            className="text-slate-900 font-semibold px-1 rounded"
            style={{ backgroundColor: `${ACCENT_YELLOW}cc` }}
          >
            headless & omnichannel commerce
          </span>{" "}
          using Next.js and Shopify Plus,{" "}
          <span
            className="text-slate-900 font-semibold px-1 rounded"
            style={{ backgroundColor: `${ACCENT_YELLOW}cc` }}
          >
            multi-vendor marketplaces
          </span>{" "}
          with complex commission structures, and{" "}
          <span
            className="text-slate-900 font-semibold px-1 rounded"
            style={{ backgroundColor: `${ACCENT_YELLOW}cc` }}
          >
            payment & ERP integrations
          </span>{" "}
          to streamline your operations.
        </>
      ),
    },
    {
      question:
        "We are not sure whether we need Shopify, WooCommerce, Magento, or headless development. Where do we start?",
      answer:
        "We recommend starting with our E-Commerce Technical & Architecture Audit. We review your catalog size, traffic volume, budget, and business goals to recommend the ideal platform stack before writing code.",
    },
    {
      question:
        "What is the E-Commerce Discovery phase and what do we walk away with?",
      answer:
        "The discovery phase is a 1-2 week deep dive into your product requirements. You walk away with a complete store architecture blueprint, database schema designs, payment gateway strategies, UX wireframes, and a fixed-price development estimate.",
    },
    {
      question: "Do you build custom web apps or integrate pre-built themes?",
      answer:
        "We specialize in both high-performance custom storefront development for unique brand experiences, as well as deeply customized enterprise themes on Shopify Plus, WooCommerce, and BigCommerce for faster time-to-market.",
    },
    {
      question:
        "Will the new e-commerce store integrate smoothly with our existing inventory and CRM tools?",
      answer:
        "Yes. We specialize in building secure, custom REST/GraphQL APIs, webhooks, and middleware to connect your online store with third-party ERPs, CRM tools, and shipping providers like Salesforce, NetSuite, Stripe, and ShipStation.",
    },
    {
      question:
        "How do we engage — can we hire dedicated developers for our team?",
      answer:
        "Absolutely. We offer flexible engagement models including dedicated engineering & virtual assistant team augmentation (where specialists embed directly into your sprint cycles) and full end-to-end turnkey project delivery.",
    },
    {
      question:
        "How long does it take to build and launch an e-commerce platform?",
      answer:
        "For standard custom storefronts and migrations, we deliver the first functional milestone or store launch within 4 to 6 weeks, allowing you to start driving online revenue quickly.",
    },
    {
      question:
        "Do you work with early-stage D2C startups or only established retail enterprises?",
      answer:
        "We partner with both fast-moving D2C startups looking to launch their first high-converting online shop, and established global retailers modernizing legacy platforms or scaling multi-currency marketplaces.",
    },
    {
      question: "What technologies and frameworks make up your core stack?",
      answer:
        "Our e-commerce engineering stack spans Shopify Plus, WooCommerce, Magento, BigCommerce, OpenCart, Next.js, React, Node.js, Python, PostgreSQL, AWS, and modern cloud DevOps pipelines.",
    },
    {
      question:
        "How do you handle code quality, security, and maintenance after launch?",
      answer:
        "We maintain strict engineering standards through automated testing, secure checkout compliance (PCI-DSS), and zero-trust security practices. We also offer ongoing monthly and quarterly growth support plans for store updates and management.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 py-12 px-4 md:px-12 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column - Sticky Section Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-12 flex flex-col items-start gap-4 pr-0 lg:pr-6">
          <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
            FREQUENTLY ASKED
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
            The Questions We Hear{" "}
            <span style={{ color: ACCENT_YELLOW }} className="block mt-1">
              Before Every Store Launch
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mt-1">
            Straight answers on our e-commerce development process, platform
            capabilities, migration strategies, and ongoing support plans.
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
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left group transition-all cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Small Help Icon */}
                    <div
                      className={`w-5 h-5 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0 transition-colors ${
                        isOpen
                          ? "border-slate-900 text-slate-900 font-black"
                          : "group-hover:text-slate-900"
                      }`}
                      style={{
                        borderColor: isOpen ? ACCENT_YELLOW : undefined,
                        color: isOpen ? "#000" : undefined,
                        backgroundColor: isOpen ? ACCENT_YELLOW : undefined,
                      }}
                    >
                      ?
                    </div>

                    {/* Question Title */}
                    <span
                      className={`text-base md:text-lg leading-snug transition-colors  ${
                        isOpen
                          ? "text-slate-900 font-semibold"
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
                        ? "rotate-45"
                        : "text-slate-400 group-hover:text-slate-900"
                    }`}
                    style={{
                      color: isOpen ? ACCENT_YELLOW : undefined,
                    }}
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
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
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
