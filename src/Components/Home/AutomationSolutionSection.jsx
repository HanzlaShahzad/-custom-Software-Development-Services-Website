import {
  Smartphone,
  Cpu,
  FileSearch,
  Code2,
  Server,
  ArrowUpRight,
} from "lucide-react";

import { getContextualContactUsPath } from "../../utils/navigation";
const ACCENT = "#fcbc02";

const cards = [
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: "Web Application Development",
    description:
      "We design and build fast, scalable web applications that deliver seamless user experiences using modern technologies, responsive interfaces, secure backends, and integrations built for real-world performance.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
      { name: "Zapier", slug: "zapier" },
      { name: "Slack", slug: "slack" },
    ],
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Mobile App Development",
    description:
      "We design and build intuitive mobile apps that deliver smooth experiences across iOS and Android using modern technologies, scalable architecture, seamless integrations, and performance built for real-world use.",
    bottomIcons: [
      { name: "OpenAI", slug: "openai" },
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
      { name: "Airtable", slug: "airtable" },
      { name: "Slack", slug: "slack" },
    ],
  },
  {
    icon: <FileSearch size={28} strokeWidth={1.5} />,
    title: "UI/UX Design",
    description:
      "We design clean, intuitive interfaces that turn complex ideas into simple experiences through thoughtful user flows, modern visuals, responsive layouts, and user-focused design.",
    bottomIcons: [
      { name: "Notion", slug: "notion" },
      { name: "Anthropic", slug: "anthropic" },
      { name: "Google", slug: "google" },
      { name: "Linear", slug: "linear" },
    ],
  },
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    title: "DevOps & Cloud Solutions",
    description:
      "We streamline deployment and cloud infrastructure with reliable automation, scalable environments, secure configurations, and monitoring built for performance and production-ready applications.",
    bottomIcons: [
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Microsoft", slug: "microsoft" },
      { name: "PostgreSQL", slug: "postgresql" },
    ],
  },
  {
    icon: <Server size={28} strokeWidth={1.5} />,
    title: "Quality Assurance & Testing",
    description:
      "We test every layer of your application to catch bugs early and ensure reliable performance through functional testing, automation, cross-platform validation, and real-world quality checks.",
    bottomIcons: [
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Terraform", slug: "terraform" },
      { name: "RedHat", slug: "redhat" },
      { name: "Ansible", slug: "ansible" },
    ],
  },
];

export default function AIAutomationSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
            AI AUTOMATION SOLUTIONS
          </p>

          <h2 className="text-[32px] font-bold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[48px]">
            Engineering the Future With
            <br />
            AI & Custom Software
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            Whether you need custom software, strategic IT consulting, advanced
            AI, or solid cybersecurity right here in the United States,
            we&apos;ve got you covered.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Normal Cards */}
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
                Not sure where to start?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                We&apos;ll map your process and tell you honestly whether
                automation, consultancy, or both is the right first move.
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
