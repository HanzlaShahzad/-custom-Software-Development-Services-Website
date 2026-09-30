import React from "react";

const ACCENT_YELLOW = "#fdbe04";

const ROADMAP_STEPS = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "Every great web app starts with a solid foundation. In this phase, we work closely with you to understand your goals, define the scope, & create a strategic plan. Our web app developers ensure that your custom web apps are designed to align seamlessly with your vision & market needs.",
    topPos: "top-[40px]",
    alignLeft: true,
  },
  {
    num: "02",
    title: "Design & Proof of Concept",
    desc: "We bring your ideas to life with intuitive designs & a robust proof of concept. This step validates feasibility & ensures the scalability of your web applications, focusing on user-centric experiences & future-ready solutions.",
    topPos: "top-[260px]",
    alignLeft: false,
  },
  {
    num: "03",
    title: "Implementation & Support",
    desc: "We don’t just deliver—we ensure your app succeeds. From smooth deployment to continuous support, we help you optimize your scalable web applications over time, adapting to evolving business needs & keeping your solutions ahead of the curve.",
    topPos: "top-[480px]",
    alignLeft: true,
  },
  {
    num: "04",
    title: "Development & Testing",
    desc: "Using modern frameworks, our expert team develops high-performance web applications optimized for speed, security, & functionality. Rigorous testing ensures your custom web apps are free from errors & ready to perform under real-world conditions.",
    topPos: "top-[700px]",
    alignLeft: false,
  },
];

export default function WebAppRoadmap() {
  return (
    <section className="w-full bg-[#f8fbfa] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Title & Description */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-slate-900 leading-[1.15]">
            Our Proven Roadmap to Ensure Your Success
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            As a trusted web app development partner, we have crafted a
            structured roadmap to guarantee your project&apos;s success. From
            discovery to deployment, we align every phase with your business
            objectives, delivering scalable web applications, modern web apps, &
            tailored web application solutions. Here&apos;s how we do it:
          </p>
        </div>

        {/* Roadmap Layout Wrapper */}
        {/* Mobile View: Stacked */}
        <div className="flex flex-col space-y-8 md:hidden">
          {ROADMAP_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 font-bold text-sm shadow-sm"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View: Alternating Zigzag Roadmap Track */}
        <div className="relative max-w-5xl mx-auto h-[920px] hidden md:block">
          {/* Centered Zigzag S-Curve SVG Track */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 920"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 400 20 C 400 20, 220 50, 220 140 C 220 230, 580 270, 580 360 C 580 450, 220 490, 220 580 C 220 670, 580 710, 580 800 C 580 850, 400 880, 400 890"
                stroke={ACCENT_YELLOW}
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Steps Cards Containers perfectly locked to the alternating zigzag curve */}
          {ROADMAP_STEPS.map((step, idx) => {
            return (
              <div
                key={idx}
                className={`absolute w-[42%] ${step.topPos} ${
                  step.alignLeft ? "left-0 pr-10" : "right-0 pl-10"
                } z-10`}
              >
                <div className="relative group">
                  {/* Circle Badge Node touching the track exactly */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full text-slate-900 font-black text-lg shadow-md border-4 border-white z-20 ${
                      step.alignLeft ? "-right-8" : "-left-8"
                    }`}
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    {step.num}
                  </div>

                  {/* Content Card Box */}
                  <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
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
}
