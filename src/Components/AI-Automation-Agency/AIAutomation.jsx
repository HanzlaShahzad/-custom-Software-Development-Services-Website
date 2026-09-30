import React from "react";
import {
  Bot,
  Workflow,
  MessageSquareCode,
  DatabaseZap,
  LineChart,
  Smartphone,
  Cpu,
  FileSearch,
  ArrowUpRight,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const cards = [
  {
    icon: <Bot size={28} strokeWidth={1.5} />,
    title: "Autonomous AI Support Agents",
    description:
      "Deploy custom AI agents trained on your documentation to handle 24/7 customer support, troubleshoot technical issues, and resolve tickets instantly.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "Slack", slug: "slack" },
      { name: "Zapier", slug: "zapier" },
    ],
  },
  {
    icon: <Workflow size={28} strokeWidth={1.5} />,
    title: "Cross-Platform Workflow Automation",
    description:
      "Eliminate repetitive copy-pasting by connecting your CRM, billing, and project management tools into seamless, automated multi-step pipelines.",
    bottomIcons: [
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
      { name: "Zapier", slug: "zapier" },
      { name: "Airtable", slug: "airtable" },
    ],
  },
  {
    icon: <DatabaseZap size={28} strokeWidth={1.5} />,
    title: "Real-Time Data Sync & ETL",
    description:
      "Keep your inventory, billing, and customer databases synchronized automatically in real time across all active sales and operations channels.",
    bottomIcons: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    icon: <MessageSquareCode size={28} strokeWidth={1.5} />,
    title: "Intelligent Lead Qualification",
    description:
      "Capture inbound prospects instantly, qualify their budgets, answer technical specs, and book calendar meetings while they are still warm.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Notion", slug: "notion" },
      { name: "Google", slug: "google" },
      { name: "Slack", slug: "slack" },
    ],
  },
  {
    icon: <LineChart size={28} strokeWidth={1.5} />,
    title: "AI Sentiment & Review Analytics",
    description:
      "Automatically aggregate and analyze customer feedback streams, support tickets, and app store ratings to uncover critical business action items.",
    bottomIcons: [
      { name: "Anthropic", slug: "anthropic" },
      { name: "Google", slug: "google" },
      { name: "Linear", slug: "linear" },
      { name: "Microsoft", slug: "microsoft" },
    ],
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: "Custom AI Web & App Interfaces",
    description:
      "Build tailored client portals and mobile extensions embedded with specialized AI reasoning engines built specifically for your team's workflows.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Make", slug: "make" },
      { name: "GitHub", slug: "github" },
      { name: "AWS", slug: "amazonaws" },
    ],
  },
  {
    icon: <FileSearch size={28} strokeWidth={1.5} />,
    title: "Internal Knowledge Companions",
    description:
      "Transform your messy company wikis, Notion pages, and employee handbooks into an instant queryable assistant for new hires and staff.",
    bottomIcons: [
      { name: "Notion", slug: "notion" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "Slack", slug: "slack" },
      { name: "Google", slug: "google" },
    ],
  },
];

export default function AIAutomations() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
            AI AUTOMATION AGENCY
          </p>

          <h2 className="text-[30px] font-bold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[45px]">
            Eliminating Manual Busywork With
            <br />
            Autonomous AI & Workflows
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            We diagnose your operational bottlenecks, replace $8/hr manual tasks
            with lightning-fast automation agents, and scale your team's output
            without adding headcount.
          </p>
        </div>

        {/* Cards Grid (7 Feature Cards + 1 CTA Card = 8 Total Items) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <a
              key={index}
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                cursor-pointer
                relative
                flex
                h-full
                min-h-[340px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_-12px_rgba(252,188,2,0.25)]
              "
            >
              {/* Yellow corner */}
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-28
                  w-28
                  rounded-full
                  transition-all
                  duration-500
                  ease-out
                  group-hover:scale-0
                  group-hover:opacity-0
                "
                style={{ backgroundColor: ACCENT }}
              />

              {/* Arrow on hover */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  opacity-0
                  transition-all
                  duration-500
                  ease-out
                  translate-x-3
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
                style={{ color: ACCENT }}
              >
                <ArrowUpRight size={22} strokeWidth={2.2} />
              </div>

              {/* Top Icon */}
              <div className="mb-5 text-gray-800">{card.icon}</div>

              {/* Title */}
              <h3 className="mb-3 text-[18px] font-bold leading-snug text-[#0f172a]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-6 flex-1 text-[14px] leading-relaxed text-gray-600">
                {card.description}
              </p>

              {/* Bottom real icons */}
              <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-gray-100 pt-5">
                {card.bottomIcons.map((tech, i) => (
                  <img
                    key={i}
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={tech.name}
                    title={tech.name}
                    className="h-5 w-5 object-contain opacity-70 transition group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ))}
              </div>
            </a>
          ))}

          {/* ========== LAST SPECIAL CTA CARD ========== */}
          <div
            className="
              relative
              flex
              min-h-[340px]
              flex-col
              justify-between
              overflow-hidden
              rounded-2xl
              p-8
              text-white
            "
            style={{ backgroundColor: ACCENT }}
          >
            {/* Decorative circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20" />

            <div>
              <h3 className="text-[24px] font-bold leading-snug">
                Not sure where to automate first?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                We&apos;ll audit your workflows and show you exactly which
                manual processes can be eliminated in the next 14 days.
              </p>
            </div>

            <a
              href="/contact-us"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-[15px]
                font-semibold
                transition
                hover:gap-3
              "
            >
              Book Your Workflow Audit
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
