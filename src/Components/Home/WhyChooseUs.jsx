import React from "react";
import { Star } from "lucide-react";

const ACCENT = "#fcbc02";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#f8f9fc] py-20">
      <div className="mx-auto max-w-[1350px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center  lg:grid-cols-2 ">
          {/* ===================== LEFT CONTENT ===================== */}
          <div className="max-w-[480px] relative left-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500">
              WHY CHOOSE US
            </p>

            <h2 className="text-[26px] font-bold leading-tight text-[#0f172a] sm:text-[30px] lg:text-[34px]">
              <span style={{ color: ACCENT }}>The Strategic</span> Advantage
              <br />
              of Partnering With Us
            </h2>

            <p className="mt-3 text-[13px] leading-relaxed text-gray-600">
              Organizations trust us for delivering AI-powered chatbots,
              intelligent automation, & advanced web & mobile app solutions. By
              blending innovation with proven IT strategies, we turn business
              challenges into scalable opportunities for long-term growth.
            </p>

            {/* Stats */}
            <div className="mt-7 flex flex-wrap gap-8">
              <div>
                <p className="text-[26px] font-bold text-[#0f172a]">120+</p>
                <p className="mt-0.5 text-[12px] leading-snug text-gray-600">
                  Successful Projects
                  <br />
                  Delivered
                </p>
              </div>

              <div>
                <p className="text-[26px] font-bold text-[#0f172a]">100+</p>
                <p className="mt-0.5 text-[12px] leading-snug text-gray-600">
                  Associated
                  <br />
                  Professionals
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-7 flex flex-wrap items-center gap-6">
              {/* Payoneer */}
              <a
                href="https://www.payoneer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:opacity-80"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-[11px] font-bold text-white">
                  P
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-gray-800">
                    Best Development
                  </p>
                  <p className="text-gray-500">Company Payoneer</p>
                </div>
              </a>

              {/* Clutch */}
              <a
                href="https://clutch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col transition hover:opacity-80"
              >
                <span className="text-[16px] font-bold leading-none text-[#0f172a]">
                  Clutch
                </span>
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="text-[11px] font-medium text-gray-700">
                    4.9/5
                  </span>
                    <span className="flex items-center gap-0.5 text-[11px] text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                      ))}
                    </span>
                  </div>
              </a>

              {/* Trustpilot */}
              <a
                href="https://www.trustpilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:opacity-80"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded bg-[#00b67a] text-white">
                  <Star size={12} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-gray-800">Trustpilot</p>
                  <p className="flex items-center gap-0.5 text-[#00b67a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                    ))}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ===================== RIGHT IMAGE ===================== */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Team collaborating"
                loading="lazy"
                decoding="async"
                className="h-[460px] w-full object-cover lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
