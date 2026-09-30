import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#fdbe04";

const PLANS = [
  {
    name: "Growth",
    hours: "/ 25 hr",
    monthlyPrice: 300,
    quarterlyPrice: 675, // 25% discount applied for quarterly
    features: [
      "Bulk product uploads",
      "Inventory & pricing cycles",
      "Image optimization + banners",
      "SEO descriptions",
    ],
    perfectFor: "Shopify, Amazon, eBay, Etsy, Walmart",
  },
  {
    name: "Pro",
    hours: "/ 50 hr",
    monthlyPrice: 550,
    quarterlyPrice: 1237,
    isPopular: true,
    features: [
      "Unlimited product uploads",
      "Weekly inventory/price sync",
      "Advanced SEO optimization",
      "Store performance reporting",
      "Dedicated VA assigned",
    ],
    perfectFor: "Shopify, Amazon, eBay, Etsy, Walmart, WooCommerce",
  },
  {
    name: "Enterprise",
    hours: "/ 100+ hr",
    monthlyPrice: 1000,
    quarterlyPrice: 2250,
    features: [
      "Dedicated full-time VA/Developer",
      "Advanced analytics/reporting",
      "API integrations & automation",
      "Multi-channel management",
      "Private Slack channel",
    ],
    perfectFor:
      "Shopify Plus, Amazon, eBay, Etsy, Walmart, WooCommerce, Magento, BigCommerce",
  },
];

export default function EcommercePricingSection() {
  const [isQuarterly, setIsQuarterly] = useState(false);
  return (
    <section className="w-full bg-[#030b14] py-20 px-4 sm:px-6 lg:px-8 text-white font-sans relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none opacity-10"
        style={{ backgroundColor: ACCENT_YELLOW }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.18]">
          Empower Your Ecommerce Brand With Elite{" "}
          <span
            className="block sm:inline mt-1 sm:mt-0"
            style={{ color: ACCENT_YELLOW }}
          >
            Management & Growth Support
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
          Select the perfect subscription plan to match your project&apos;s
          scale, from small startups to large enterprises, & instantly access a
          dedicated developer & project management resources.
        </p>

        {/* Black Friday Sale Tag */}
        <div className="mb-8">
          <span
            className="text-lg sm:text-xl font-black tracking-widest uppercase font-mono animate-pulse"
            style={{ color: ACCENT_YELLOW }}
          >
            BLACK FRIDAY SALE!
          </span>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setIsQuarterly(false)}
            className={`transition-colors cursor-pointer ${
              !isQuarterly ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <div
            onClick={() => setIsQuarterly(!isQuarterly)}
            className="w-14 h-7 bg-gray-800 border border-gray-700 rounded-full p-1 cursor-pointer transition-colors relative flex items-center"
          >
            <div
              className={`w-5 h-5 rounded-full shadow-md transition-transform duration-300 ${
                isQuarterly ? "translate-x-7" : "translate-x-0"
              }`}
              style={{ backgroundColor: ACCENT_YELLOW }}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsQuarterly(true)}
            className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
              isQuarterly ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            <span>Quarterly / 3 Months</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-bold text-black"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              Save 25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {PLANS.map((plan, index) => {
            const currentPrice = isQuarterly
              ? plan.quarterlyPrice
              : plan.monthlyPrice;
            const billingPeriod = isQuarterly ? "/ quarterly" : "/ monthly";

            return (
              <div
                key={index}
                className="bg-[#071322] rounded-3xl p-8 border-2 shadow-xl flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1"
                style={{
                  borderColor: plan.isPopular
                    ? ACCENT_YELLOW
                    : "rgba(253, 190, 4, 0.3)",
                }}
              >
                <div>
                  {/* Plan Title & Hours */}
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-gray-400">
                      {plan.hours}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ${currentPrice}
                    </span>
                    <span className="text-sm text-gray-400 ml-2 font-medium">
                      {billingPeriod}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      Package Features:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: ACCENT_YELLOW }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Perfect For */}
                  <div className="mb-8 pt-4 border-t border-gray-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block mb-1">
                      Perfect For:
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {plan.perfectFor}
                    </p>
                  </div>

                  {/* Subscribe Button */}
                  <a
                    href={getContextualContactUsPath()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group/btn inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-black font-extrabold text-xs transition-all duration-300 shadow-md hover:opacity-90 active:scale-98 cursor-pointer"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    <span>I NEED THIS</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
