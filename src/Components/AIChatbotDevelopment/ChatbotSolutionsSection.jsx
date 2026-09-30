import React from "react";
import {
  MessageSquareCode,
  Bot,
  Cpu,
  Workflow,
  Mic,
  ShieldCheck,
  GitBranch,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import {
  getContextualContactUsPath,
} from "../../utils/navigation";

const ACCENT = "#fcbc02";

const cards = [
  {
    icon: <MessageSquareCode size={28} strokeWidth={1.5} />,
    title: "Custom LLM & Generative AI Chatbots",
    description:
      "Build context-aware conversational agents powered by state-of-the-art Large Language Models (LLMs) tailored to your brand voice, domain data, and customer service goals.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "OpenAI", slug: "openai" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    icon: <Bot size={28} strokeWidth={1.5} />,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Connect your chatbots securely to enterprise databases, internal documentation, and knowledge bases to provide real-time, accurate, and hallucination-free answers.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "Pinecone", slug: "pinecone" },
      { name: "LangChain", slug: "langchain" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Docker", slug: "docker" },
    ],
  },
  {
    icon: <Workflow size={28} strokeWidth={1.5} />,
    title: "Multi-Agent AI Systems & Workflows",
    description:
      "Deploy complex multi-agent architectures where specialized AI bots collaborate, delegate tasks, execute code, and automate end-to-end business workflows autonomously.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "OpenAI", slug: "openai" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "LLM Fine-Tuning & Model Alignment",
    description:
      "Fine-tune open-source models (Llama, Mistral, Gemma) on your proprietary datasets using parameter-efficient techniques like LoRA/QLoRA for unmatched domain performance.",
    bottomIcons: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Python", slug: "python" },
      { name: "CUDA", slug: "nvidia" },
    ],
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Voice Bots & Conversational Audio",
    description:
      "Create ultra-low latency voice-enabled virtual assistants with real-time speech-to-text, natural text-to-speech synthesis, and fluid conversational turn-taking.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Python", slug: "python" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
    ],
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "AI Guardrails & Security Compliance",
    description:
      "Implement robust security layers, PII redacting, prompt injection defenses, and content moderation guardrails to ensure safe and enterprise-compliant AI interactions.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "LangChain", slug: "langchain" },
      { name: "Docker", slug: "docker" },
      { name: "Microsoft Azure", slug: "microsoftazure" },
    ],
  },
  {
    icon: <GitBranch size={28} strokeWidth={1.5} />,
    title: "Omnichannel & CRM Integrations",
    description:
      "Seamlessly embed your AI chatbots across web widgets, WhatsApp, Slack, Microsoft Teams, Zendesk, and custom enterprise mobile or web applications.",
    bottomIcons: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Python", slug: "python" },
      { name: "AWS", slug: "amazonaws" },
    ],
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: "Chatbot MLOps & Evaluation Pipelines",
    description:
      "Monitor chatbot performance, track token usage, evaluate response quality with automated LLM-as-a-judge pipelines, and continuously optimize model prompts.",
    bottomIcons: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Python", slug: "python" },
      { name: "AWS", slug: "amazonaws" },
    ],
  },
];

export default function AIChatbotServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
            AI CHATBOT & CONVERSATIONAL AI DEVELOPMENT
          </p>

          <h2 className="text-[32px] font-bold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[48px]">
            Transforming Customer Engagement With
            <br />
            Intelligent Conversational Agents
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            Whether you need custom LLM fine-tuning, secure enterprise RAG
            pipelines, multi-agent automated workflows, or real-time voice bots,
            we build enterprise-grade conversational AI solutions tailored to
            your business needs.
          </p>
        </div>

        {/* Cards Grid (8 Regular Cards + 1 Special CTA Card = Total 9 Boxes) */}
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
                cursor-pointer
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

          {/* ========== 9TH BOX: SPECIAL CTA CARD ========== */}
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
                Got a custom AI chatbot project?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                Let&apos;s talk about your conversational use case and evaluate
                the right LLM architecture for your AI roadmap.
              </p>
            </div>

            <a
              href={getContextualContactUsPath()}
              target="_blank"
              rel="noopener noreferrer"
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
              Build the Future With Us
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
