import React from "react";

export default function EcommercePlatformsSection() {
  const platforms = [
    { name: "shopify", label: "shopify" },
    { name: "woocommerce", label: "WOO COMMERCE" },
    { name: "bigcommerce", label: "BIGCOMMERCE" },
    { name: "salesforce", label: "salesforce" },
    { name: "magento", label: "Magento" },
    { name: "adobe-commerce", label: "Adobe Commerce" },
    { name: "opencart", label: "opencart." },
    { name: "nextjs", label: "NEXT.JS" },
    { name: "vuejs", label: "Vue.js" },
  ];

  return (
    <section className="w-full bg-[#030b14] py-20 px-4 sm:px-6 lg:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Mini Badge */}
        <div className="inline-block mb-4">
          <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
            POWERING ECOMMERCE INNOVATION
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] max-w-4xl mx-auto text-white mb-5">
          Leading Brands Trust Codewire for{" "}
          <span className="text-[#22c55e] block sm:inline mt-1 sm:mt-0">
            Digital Commerce Growth
          </span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed font-normal">
          We build scalable, high-performing eCommerce solutions using modern
          technologies to deliver seamless digital shopping experiences.
        </p>

        {/* Platforms Grid (Responsive: 2 cols on mobile, up to 5 cols on lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-[#091422] hover:bg-[#0e1d30] border border-gray-800/80 hover:border-gray-700 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span className="text-gray-300 group-hover:text-white font-bold tracking-wide text-sm sm:text-base text-center transition-colors">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
