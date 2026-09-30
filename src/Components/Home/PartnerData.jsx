import React from "react";

// Partners & Awards Dataset with official links, descriptions, and categories
const partnersData = [
  {
    name: "Vercel",
    category: "Deployment",
    url: "https://vercel.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 110 35" fill="currentColor">
        <path d="M14 4L26 25H2L14 4Z" className="fill-yellow-400" />
        <text
          x="32"
          y="21"
          className="font-bold text-[19px] fill-current text-white tracking-tight"
        >
          Vercel
        </text>
      </svg>
    ),
  },
  {
    name: "GitLab",
    category: "DevOps",
    url: "https://about.gitlab.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 110 35" fill="currentColor">
        <path
          fill="#FC6D26"
          d="M13.5 25.5l5.1-15.7h4.8l-9.9 30.5L3.6 9.8h4.8l5.1 15.7z"
        />
        <path fill="#E24329" d="M13.5 25.5L8.4 9.8H3.6l9.9 20.2z" />
        <path
          fill="#FCA326"
          d="M3.6 9.8L.5 19.3c-.2.6 0 1.3.5 1.7l12.5 9.1L3.6 9.8z"
        />
        <text
          x="30"
          y="21"
          className="font-bold text-[18px] fill-current text-white tracking-tight"
        >
          GitLab
        </text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "AI Partner",
    url: "https://openai.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 150 35" fill="currentColor">
        <path
          fill="currentColor"
          className="text-yellow-400"
          d="M18.8 11.2c-.4-1.2-1.3-2.1-2.5-2.5-1.9-.6-3.9.4-4.5 2.3-.2.6-.2 1.3 0 1.9.3.9.9 1.6 1.8 2 1.9.8 4.2-.1 5-2 .2-.5.3-1.1.2-1.7zm-6.6 9.5c.4 1.2 1.3 2.1 2.5 2.5 1.9.6 3.9-.4 4.5-2.3.2-.6.2-1.3 0-1.9-.3-.9-.9-1.6-1.8-2-1.9-.8-4.2.1-5 2-.2.6-.3 1.1-.2 1.7z"
        />
        <circle
          cx="14"
          cy="15"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-yellow-400"
        />
        <text
          x="30"
          y="20"
          className="font-medium text-[16px] fill-current text-white tracking-tight"
        >
          OpenAI <tspan className="text-[12px] fill-slate-400">language</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "HighLevel",
    category: "CRM & Automation",
    url: "https://www.gohighlevel.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 130 35" fill="currentColor">
        <g fill="#2A75D3">
          <path d="M4 22V8l5-3v17H4z" />
          <path d="M12 22V3l5 3v16h-5z" fill="#4B90E2" />
          <path d="M20 22V9l5-3v16h-5z" fill="#2A75D3" />
        </g>
        <text
          x="29"
          y="20"
          className="font-bold text-[17px] fill-current text-white tracking-tight"
        >
          HighLevel
        </text>
      </svg>
    ),
  },
  {
    name: "Hostinger",
    category: "Web Infrastructure",
    url: "https://www.hostinger.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 140 35" fill="currentColor">
        <path
          fill="#673DE6"
          d="M4 6h5v20H4V6zm11 0h5v8.5h-5V6zm0 11.5h5V26h-5v-8.5z"
        />
        <text
          x="26"
          y="20"
          className="font-black text-[17px] fill-current text-white tracking-wider"
        >
          HOSTINGER
        </text>
      </svg>
    ),
  },
  {
    name: "Payoneer",
    category: "Payment Solutions",
    url: "https://www.payoneer.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 130 35" fill="currentColor">
        <circle
          cx="14"
          cy="15"
          r="8"
          fill="none"
          stroke="#FF4800"
          strokeWidth="3.5"
        />
        <text
          x="28"
          y="20"
          className="font-semibold text-[16px] fill-current text-white tracking-tight"
        >
          Payoneer
        </text>
      </svg>
    ),
  },
  {
    name: "ISO 27001",
    category: "Security Certified",
    url: "https://www.iso.org",
    svg: (
      <svg className="h-7 sm:h-8" viewBox="0 0 120 40" fill="currentColor">
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          className="text-yellow-400"
        />
        <circle
          cx="18"
          cy="18"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white"
        />
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold text-[8px] fill-current text-yellow-400"
        >
          ISO
        </text>
        <text
          x="18"
          y="24"
          textAnchor="middle"
          className="font-semibold text-[6px] fill-current text-slate-300"
        >
          27001
        </text>
        <text
          x="38"
          y="21"
          className="font-bold text-[13px] fill-current text-white tracking-tight"
        >
          ISO 27001
        </text>
      </svg>
    ),
  },
  {
    name: "ISO 9001",
    category: "Quality Management",
    url: "https://www.iso.org",
    svg: (
      <svg className="h-7 sm:h-8" viewBox="0 0 120 40" fill="currentColor">
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          className="text-yellow-400"
        />
        <circle
          cx="18"
          cy="18"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white"
        />
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold text-[8px] fill-current text-yellow-400"
        >
          ISO
        </text>
        <text
          x="18"
          y="24"
          textAnchor="middle"
          className="font-semibold text-[6px] fill-current text-slate-300"
        >
          9001
        </text>
        <text
          x="38"
          y="21"
          className="font-bold text-[13px] fill-current text-white tracking-tight"
        >
          ISO 9001
        </text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Code Enterprise",
    url: "https://github.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 110 35" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          className="fill-white"
        />
        <text
          x="28"
          y="20"
          className="font-bold text-[17px] fill-current text-white tracking-tight"
        >
          GitHub
        </text>
      </svg>
    ),
  },
  {
    name: "Clutch",
    category: "4.9/5 Star Rating",
    url: "https://clutch.co",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 120 35" fill="currentColor">
        <text
          x="2"
          y="21"
          className="font-black text-[20px] fill-current text-white tracking-tight"
        >
          Clutch
        </text>
        <text
          x="68"
          y="14"
          className="font-bold text-[9px] fill-current text-yellow-400"
        >
          4.9/5
        </text>
        <g transform="translate(104 6) scale(0.8)">
          <path d="M7 0l1.7 4.3L13 4.5l-3.4 2.7 1.3 4.3-3.9-2.8-3.9 2.8 1.3-4.3L1 4.5l4.3-.2L7 0z" fill="currentColor" className="text-yellow-400"/>
          <path d="M19 0l1.7 4.3L25 4.5l-3.4 2.7 1.3 4.3-3.9-2.8-3.9 2.8 1.3-4.3L13 4.5l4.3-.2L19 0z" fill="currentColor" className="text-yellow-400"/>
          <path d="M31 0l1.7 4.3L37 4.5l-3.4 2.7 1.3 4.3-3.9-2.8-3.9 2.8 1.3-4.3L25 4.5l4.3-.2L31 0z" fill="currentColor" className="text-yellow-400"/>
          <path d="M43 0l1.7 4.3L49 4.5l-3.4 2.7 1.3 4.3-3.9-2.8-3.9 2.8 1.3-4.3L37 4.5l4.3-.2L43 0z" fill="currentColor" className="text-yellow-400"/>
          <path d="M55 0l1.7 4.3L61 4.5l-3.4 2.7 1.3 4.3-3.9-2.8-3.9 2.8 1.3-4.3L49 4.5l4.3-.2L55 0z" fill="currentColor" className="text-yellow-400"/>
        </g>
        <text
          x="68"
          y="22"
          className="font-normal text-[8px] fill-current text-slate-400"
        >
          REVIEWS
        </text>
      </svg>
    ),
  },
  {
    name: "Trustpilot",
    category: "5 Star Verified",
    url: "https://www.trustpilot.com",
    svg: (
      <svg className="h-6 sm:h-7" viewBox="0 0 130 35" fill="currentColor">
        <path
          fill="#00B67A"
          d="M11 2l2.8 8.5H23l-7 5.2 2.7 8.4-7.2-5.3-7.2 5.3 2.7-8.4-7-5.2h9.2z"
        />
        <text
          x="28"
          y="20"
          className="font-bold text-[17px] fill-current text-white tracking-tight"
        >
          Trustpilot
        </text>
      </svg>
    ),
  },
];

export default function PartnerData() {
  return (
    <div className="min-h-screen lg:h-screen bg-[#070b14] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans select-none">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid subtle overlay pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(250,204,21,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            GLOBAL STANDARDS & RECOGNITION
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Awards &{" "}
            <span className="text-yellow-400 underline decoration-yellow-400/40 underline-offset-8">
              Partners
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Our awards & certifications highlight our commitment to excellence,
            innovation, & industry-leading standards.
          </p>
        </div>

        {/* Logos & Awards Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partnersData.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name} (${partner.category})`}
              className={`
                group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl
                bg-white/[0.03] backdrop-blur-md border border-white/10
                hover:border-yellow-400/60 hover:bg-white/[0.07]
                hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]
                transform-gpu transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-[1.03] cursor-pointer min-h-[76px] sm:min-h-[82px]
                ${index === partnersData.length - 1 ? "col-span-2 sm:col-span-1 md:col-span-1" : ""}
              `}
            >
              {/* Top-Right External Link Arrow Icon on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400">
                <svg
                  className="w-3 h-3 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Logo SVG Container */}
              <div className="flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 transform-gpu">
                {partner.svg}
              </div>

              {/* Category Subtext on Hover */}
              <span className="text-[10px] font-medium text-yellow-400/80 opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1 tracking-tight">
                {partner.category}
              </span>

              {/* Bottom Subtle Yellow Accent Glow Line on Hover */}
              <div className="absolute inset-x-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Footer Trust Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 border-t border-white/5 w-full">
          <span className="flex items-center gap-1.5 text-slate-300">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            100% Enterprise Security Guaranteed
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Audited & ISO Certified Platforms
          </span>
        </div>
      </div>
    </div>
  );
}
