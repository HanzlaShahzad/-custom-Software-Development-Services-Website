import React, { useState } from "react";
import { Play, Star } from "lucide-react";

const ACCENT = "#fcbc02";

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-500">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-[#0f172a] sm:text-[34px] lg:text-[40px]">
              Hear It Straight From the
              <br />
              <span style={{ color: ACCENT }}>Teams We Build For</span>
            </h2>
          </div>

          <p className="max-w-md text-[14px] leading-relaxed text-gray-600 lg:text-right">
            Founders and product leaders on what it is actually like to work
            with us — how the work landed, how fast it moved, and what shipped
            at the end of it.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Quote */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div>
                {/* Quote mark + stars */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="text-[28px] leading-none text-gray-300">
                    “
                  </span>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-[19px] font-medium leading-[1.45] text-[#0f172a] sm:text-[21px]">
                  They have just nailed it bringing my ideas and designs to life
                  to such a high standard.
                </p>

                {/* Author */}
                <div className="mt-8">
                  <p className="text-[15px] font-semibold text-[#0f172a]">
                    Lauren Senituli
                  </p>
                  <p className="mt-1 text-[13px] text-gray-500">
                    CTO & Co-Founder · Prompterly
                  </p>
                </div>
              </div>

              {/* Reviewed on - with divider line */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-5">
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  REVIEWED ON
                </span>

                {/* Clutch */}
                <a
                  href="https://clutch.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition hover:opacity-80"
                >
                  <span className="text-[15px] font-bold text-[#0f172a]">
                    Clutch
                  </span>
                  <span className="text-[12px] text-gray-600">4.9/5</span>
                  <span className="flex items-center gap-0.5 text-[12px] text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </a>

                {/* Vertical Divider Line */}
                <div className="h-4 w-px bg-gray-300" />

                {/* Trustpilot */}
                <a
                  href="https://www.trustpilot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition hover:opacity-80"
                >
                  <span className="text-[13px] font-semibold text-[#00b67a]">
                    Trustpilot
                  </span>
                  <span className="flex items-center gap-0.5 text-[12px] text-[#00b67a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </a>
              </div>
            </div>

            {/* Right - Video / Embed Container */}
            <div className="relative h-[280px] bg-gray-900 lg:h-[340px]">
              {!isPlaying ? (
                /* Poster & Play Button Overlay */
                <div
                  className="group relative h-full w-full cursor-pointer overflow-hidden"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                    alt="Software Development Preview"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Overlay Content */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5">
                    <div className="mt-2">
                      <h3 className="text-[28px] font-black leading-none text-white sm:text-[36px]">
                        LAUREN
                        <br />
                        SENITULI
                      </h3>
                    </div>

                    <div className="flex items-end justify-between">
                      <div
                        className="rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white"
                        style={{ backgroundColor: "#166534" }}
                      >
                        PROMPTERLY
                      </div>
                      <div className="rounded bg-black/60 px-2 py-0.5 text-[11px] text-white">
                        0:52
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="
                        flex h-14 w-14 items-center justify-center rounded-full
                        bg-white shadow-lg transition duration-300
                        group-hover:bg-[#fcbc02]
                      "
                    >
                      <Play
                        size={22}
                        className="ml-0.5 fill-current text-gray-800 transition group-hover:text-white"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Embedded YouTube Software Intro Video Player */
                <iframe
                  className="h-full w-full border-0"
                  src="https://www.youtube-nocookie.com/embed/CZkt56jU3io?autoplay=1&rel=0&modestbranding=1"
                  title="Software introduction Video | Software Company Video Ad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
