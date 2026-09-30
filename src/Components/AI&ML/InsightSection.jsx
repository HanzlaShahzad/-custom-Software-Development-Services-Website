import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { getContextualPath } from "../../utils/navigation";

const ACCENT_YELLOW = "#eab308";

// =====================================================
// INSIGHTS SECTION COMPONENT
// =====================================================

export default function InsightsSection() {
  return (
    <section className="bg-white text-black h-screen max-h-[850px] flex flex-col justify-center px-5 sm:px-7 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN: TITLE & DESCRIPTION (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-2">
              INSIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black mb-4 leading-tight">
              Insights & Perspectives on{" "}
              <span style={{ color: ACCENT_YELLOW }}>
                Emerging Technologies
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light mb-6">
              Learn the latest Tools & Tech. Get practical insights, expert
              opinions, & strategies to stay ahead in the tech landscape.
            </p>
            <div>
              <Link
                to={getContextualPath("blogs")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:opacity-70 transition-opacity cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: EMPTY STATE CARD (7 Cols) */}
          <div className="lg:col-span-7 bg-[#f8fafc] border border-black/10 rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-sm">
            {/* Icon Circle */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-black mb-4 shadow-sm"
              style={{ backgroundColor: "#fef08a" }}
            >
              <FileText size={26} strokeWidth={2} />
            </div>

            {/* Empty State Title */}
            <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight mb-2">
              No articles here yet
            </h3>

            {/* Empty State Description */}
            <p className="text-xs sm:text-sm text-black/60 max-w-md mb-6 font-light leading-relaxed">
              We haven't published anything under AI Development yet. New pieces
              go up regularly browse the full library in the meantime.
            </p>

            {/* Explore Button */}
            <Link
              to={getContextualPath("blogs")}
              className="px-6 py-3 rounded-xl text-xs font-bold text-black shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              <span>Explore all articles</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
