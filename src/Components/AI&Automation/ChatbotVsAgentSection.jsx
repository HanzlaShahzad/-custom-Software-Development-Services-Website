import React from "react";
import { MessageSquare, Zap, Check, X, Minus } from "lucide-react";

const ACCENT_YELLOW = "#eab308";

export default function ChatbotVsAgentSection() {
  return (
    <section className="bg-[#071525] text-white min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] w-full flex flex-col justify-center h-full">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            A chatbot answers. An agent acts.
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-white/70 font-light leading-relaxed">
            Most "AI chatbots" follow a script and hand off the moment a task
            gets real. An AI agent reasons over your data, calls your tools and
            APIs, and completes the task without a human closing the loop.
          </p>
        </div>

        {/* TWO COMPARISON COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT CARD: SCRIPTED CHATBOT */}
          <div className="bg-[#0b1d32] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-white/10 flex items-center justify-center text-white/70 shrink-0">
                  <MessageSquare size={18} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Scripted Chatbot
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                  <Check size={16} className="text-white/50 shrink-0 mt-0.5" />
                  <span>Answers FAQs from a fixed script</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Can't take real actions in your systems</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                  <Minus size={16} className="text-white/50 shrink-0 mt-0.5" />
                  <span>Limited CRM / ERP / helpdesk connection</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>No multi-step reasoning</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                  <Minus size={16} className="text-white/50 shrink-0 mt-0.5" />
                  <span>Rarely escalates with full context</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Codewire AI AGENT */}
          <div
            className="border rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
            style={{ backgroundColor: "#0c233c", borderColor: ACCENT_YELLOW }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center text-black shadow-md shrink-0"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  <Zap size={18} fill="currentColor" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Codewire AI Agent
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: ACCENT_YELLOW }}
                  />
                  <span>Answers FAQs using live, current data</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: ACCENT_YELLOW }}
                  />
                  <span>Takes real actions in your systems</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: ACCENT_YELLOW }}
                  />
                  <span>Full CRM / ERP / helpdesk integration</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: ACCENT_YELLOW }}
                  />
                  <span>Multi-step reasoning across tasks</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white">
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: ACCENT_YELLOW }}
                  />
                  <span>Escalates to humans with full context</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
