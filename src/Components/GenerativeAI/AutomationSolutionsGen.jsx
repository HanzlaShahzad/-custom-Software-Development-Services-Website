import React from "react";
import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
  Sparkles,
  Layers,
  Network,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  CpuIcon,
  LayersIcon,
  WorkflowIcon,
  Globe2,
} from "lucide-react";
import {
  getContextualContactUsPath,
} from "../../utils/navigation";

const ACCENT = "#fcbc02";

const cards = [
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    badgeIcon: <CpuIcon size={16} />,
    badgeText: "LLM Core",
    title: "Generative AI & LLM Integration",
    description:
      "We seamlessly integrate advanced Large Language Models (GPT-4, Claude, Llama) into your core architecture to automate complex content generation, intelligent summarization, and human-like context processing.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "Python", slug: "python" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    icon: <Bot size={28} strokeWidth={1.5} />,
    badgeIcon: <Zap size={16} />,
    badgeText: "Autonomous",
    title: "Custom AI Agents & Chatbots",
    description:
      "We design autonomous multi-agent systems and intelligent conversational interfaces equipped with tool-calling capabilities to resolve customer tickets, execute tasks, and streamline internal operations.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Slack", slug: "slack" },
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
    ],
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    badgeIcon: <ShieldCheck size={16} />,
    badgeText: "Secure RAG",
    title: "RAG & Knowledge Retrieval Systems",
    description:
      "We build secure Retrieval-Augmented Generation (RAG) pipelines connected to your internal databases and documents, allowing your team to query enterprise knowledge bases with pinpoint accuracy.",
    bottomIcons: [
      { name: "Pinecone", slug: "pinecone" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Google Cloud", slug: "googlecloud" },
    ],
  },
  {
    icon: <Workflow size={28} strokeWidth={1.5} />,
    badgeIcon: <WorkflowIcon size={16} />,
    badgeText: "No-Code/API",
    title: "Enterprise Workflow Automation",
    description:
      "We connect your disparate business tools and SaaS stacks into unified automated workflows, cutting out repetitive manual tasks and eliminating data silos across your organization.",
    bottomIcons: [
      { name: "Make", slug: "make" },
      { name: "Zapier", slug: "zapier" },
      { name: "Airtable", slug: "airtable" },
      { name: "Notion", slug: "notion" },
    ],
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    badgeIcon: <BrainCircuit size={16} />,
    badgeText: "Custom Weights",
    title: "AI-Powered Fine-Tuning & Training",
    description:
      "We customize open-source foundation models using your proprietary domain data and fine-tuning pipelines to build high-performance models tailored specifically to your industry vertical.",
    bottomIcons: [
      { name: "Hugging Face", slug: "huggingface" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    badgeIcon: <LayersIcon size={16} />,
    badgeText: "Native AI",
    title: "AI-Driven Full-Stack Apps",
    description:
      "We engineer robust, scalable web and mobile applications from the ground up with native AI features embedded directly into user workflows for unmatched competitive advantage.",
    bottomIcons: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    icon: <Network size={28} strokeWidth={1.5} />,
    badgeIcon: <Globe2 size={16} />,
    badgeText: "Strategy",
    title: "AI Strategy & Enterprise Consulting",
    description:
      "We evaluate your current business processes, identify high-ROI AI integration points, and formulate a clear, step-by-step roadmap for successful enterprise digital transformation.",
    bottomIcons: [
      { name: "Linear", slug: "linear" },
      { name: "Notion", slug: "notion" },
      { name: "Microsoft", slug: "microsoft" },
      { name: "Google", slug: "google" },
    ],
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    badgeIcon: <CheckCircle2 size={16} />,
    badgeText: "Low Latency",
    title: "Cloud Infrastructure & MLOps",
    description:
      "We set up secure, scalable cloud architectures and deployment pipelines optimized for low-latency AI model inference, continuous monitoring, and enterprise-grade security compliance.",
    bottomIcons: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Docker", slug: "docker" },
      { name: "Terraform", slug: "terraform" },
    ],
  },
];

export default function AIAutomationSection() {
  return (
    <section className="w-full bg-[#faf9f5] py-24 relative overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-gradient-to-b from-[#fcbc02]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1450px] px-6 lg:px-12 relative z-10">
        {/* Improved Header Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071525]/5 border border-[#071525]/10 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fcbc02]" />
            <span className="text-[11px] font-mono tracking-widest text-[#071525] uppercase font-bold">
              GENERATIVE AI & AUTOMATION SOLUTIONS
            </span>
          </div>

          <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] font-black leading-[1.12] text-[#0f172a] tracking-tight">
            Engineering Enterprise Growth With{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] to-gray-700 underline decoration-[#fcbc02] decoration-4 underline-offset-8">
              Generative AI
            </span>{" "}
            & Custom Software
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 font-normal">
            Whether you need custom generative AI integration, intelligent
            multi-agent automation, or robust enterprise cloud infrastructure,
            we build intelligent solutions designed to scale your business.
          </p>
        </div>

        {/* Cards Grid (8 Cards + 1 Special CTA Card = Total 9) */}
        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
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
                min-h-[360px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-gray-200/80
                bg-white
                p-8
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
                  right-6
                  top-6
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
              <div className="mb-5 text-[#0f172a]">{card.icon}</div>

              {/* Title */}
              <h3 className="mb-3 text-[19px] font-bold leading-snug text-[#0f172a]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-6 flex-1 text-[14px] leading-relaxed text-gray-600">
                {card.description}
              </p>

              {/* Bottom Row with Tech Stack Icons & End Badge Icon */}
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                <div className="flex flex-wrap items-center gap-3">
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

                {/* End Icon Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#faf9f5] border border-gray-200 text-gray-700 text-[11px] font-mono font-medium">
                  <span style={{ color: ACCENT }}>{card.badgeIcon}</span>
                  <span className="hidden sm:inline">{card.badgeText}</span>
                </div>
              </div>
            </a>
          ))}

          {/* ========== LAST SPECIAL CTA CARD (Box 9) ========== */}
          <div
            className="
              relative
              flex
              min-h-[360px]
              flex-col
              justify-between
              overflow-hidden
              rounded-3xl
              p-8
              text-white
              shadow-lg
            "
            style={{ backgroundColor: ACCENT }}
          >
            {/* Decorative circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20" />

            <div>
              <h3 className="text-[26px] font-bold leading-snug text-black">
                Not sure where to start?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-black/80 font-medium">
                We&apos;ll map your process and tell you honestly whether
                generative AI automation, custom software, or both is the right
                first move.
              </p>
            </div>

            <a
              href={getContextualContactUsPath()}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-[15px]
                font-bold
                text-black
                transition
                hover:gap-3
              "
            >
              <span>Build the Future With Us</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
