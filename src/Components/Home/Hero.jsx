import React, { useState, useEffect, useRef } from "react";
import { Globe, Hotel, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const rotatingWords = [
  "AI Systems",
  "Consistency",
  "Automation",
  "Intelligence",
  "Innovation",
];

const logos = [
  {
    name: "Central PRO",
    svg: (
      <div className="flex items-center gap-1.5 font-bold tracking-wider text-slate-800">
        <span className="bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded">
          PRO
        </span>
        <span className="text-sm">Central</span>
      </div>
    ),
  },
  {
    name: "ESi Software",
    svg: (
      <div className="flex items-center gap-1 font-extrabold tracking-tighter text-blue-900">
        <span className="text-lg">ES</span>
        <span className="text-amber-500 text-xs">i</span>
      </div>
    ),
  },
  {
    name: "Fritz Global",
    svg: (
      <div className="flex items-center gap-1 text-slate-700 font-semibold text-sm">
        <div className="w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center">
          <Globe size={12} />
        </div>
        <span>FRITZ</span>
      </div>
    ),
  },
  {
    name: "Hotel Items",
    svg: (
      <div className="flex items-center gap-1 text-slate-600 italic font-serif text-sm">
        <Hotel size={14} />
        <span>Hotel Items</span>
      </div>
    ),
  },
  {
    name: "AirDrop Tech",
    svg: (
      <div className="flex items-center gap-1 font-black tracking-widest text-indigo-900 text-sm">
        <span>AIRDROP</span>
      </div>
    ),
  },
  {
    name: "Cabber AI",
    svg: (
      <div className="flex items-center gap-1 font-bold text-slate-800 text-sm">
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        <span>Cabber</span>
      </div>
    ),
  },
  {
    name: "TechFlow",
    svg: (
      <div className="flex items-center gap-1 font-bold text-cyan-700 text-sm">
        <Zap size={14} />
        <span>TechFlow</span>
      </div>
    ),
  },
  {
    name: "NovaSoft",
    svg: (
      <div className="flex items-center gap-1 font-extrabold text-purple-900 text-sm">
        <Sparkles size={12} />
        <span>NovaSoft</span>
      </div>
    ),
  },
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");

  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeoutId;

    const tick = () => {
      const currentWord = rotatingWords[wordIndexRef.current];

      if (!isDeletingRef.current) {
        charIndexRef.current += 1;
        setCurrentText(currentWord.substring(0, charIndexRef.current));

        if (charIndexRef.current === currentWord.length) {
          isDeletingRef.current = true;
          timeoutId = setTimeout(tick, 1500);
          return;
        }
        timeoutId = setTimeout(tick, 120);
      } else {
        charIndexRef.current -= 1;
        setCurrentText(currentWord.substring(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          isDeletingRef.current = false;
          wordIndexRef.current =
            (wordIndexRef.current + 1) % rotatingWords.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 70);
      }
    };

    timeoutId = setTimeout(tick, 120);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ========== HERO BACKGROUND ========== */}
      <div className="relative min-h-[580px] w-full py-16 lg:py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />

        {/* Soft white gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

        {/* Content - Bigger text */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1450px] items-center px-6 lg:px-12">
          <div className="max-w-[620px]">
            {/* Bigger Heading */}
            <h1 className="text-[36px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[44px] lg:text-[52px]">
              Run Your Business on
              <br />
              Consistent, Always On
              <br />
              <span
                className="inline-block min-w-[260px]"
                style={{ color: ACCENT }}
              >
                {currentText}
                <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.9em] bg-current align-middle" />
              </span>
            </h1>

            {/* Bigger Paragraph */}
            <p className="mt-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 sm:text-[17px]">
              Automate the repetitive work quietly draining your team&apos;s
              time, with AI workflows that run accurately and reliably, every
              single time.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:brightness-95"
                style={{ backgroundColor: ACCENT }}
              >
                Connect With Us
                <span className="text-base">→</span>
              </a>

              <Link
                to="/quote"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#0f172a] bg-transparent px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#0f172a] transition hover:bg-[#0f172a] hover:text-white"
              >
                GET A Quote
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== LOGO SLIDER SECTION ========== */}
      <div className="relative z-20 border-t border-gray-100 bg-white pb-16 pt-10">
        <div className="mx-auto max-w-[1450px] px-6 text-center lg:px-12">
          <p className="text-[16px] font-medium text-[#0f172a] sm:text-[18px]">
            Endorsed by teams. Trusted by{" "}
            <span className="font-semibold" style={{ color: ACCENT }}>
              CTOs.
            </span>
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex animate-scroll items-center">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="mx-10 flex h-14 min-w-[150px] shrink-0 items-center justify-center grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                {logo.svg}
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="mx-10 flex h-14 min-w-[150px] shrink-0 items-center justify-center grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
