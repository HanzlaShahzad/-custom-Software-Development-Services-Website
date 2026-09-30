import React from "react";
import { Users, Handshake, Lightbulb } from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const models = [
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "AI Staff Augmentation",
    description:
      "Easily scale your engineering capacity by embedding expert conversational AI developers, LLM engineers, and NLP specialists directly into your existing team to fast-track chatbot deployment.",
    bestFor: [
      "Existing Tech Teams",
      "Prompt Engineers Needed",
      "Fast Feature Scaling",
      "Custom LLM Tuning",
    ],
  },
  {
    icon: <Handshake size={22} strokeWidth={1.5} />,
    title: "Dedicated AI Teams",
    description:
      "A full-time dedicated squad of chatbot architects, UI/UX designers, and backend developers delivering secure, scalable, and tailored cognitive conversational systems aligned with your business goals.",
    bestFor: [
      "Enterprise AI Bots",
      "Omnichannel Assistants",
      "Long-Term Maintenance",
      "Sustained Optimization",
    ],
  },
  {
    icon: <Lightbulb size={22} strokeWidth={1.5} />,
    title: "End-to-End Chatbot Delivery",
    description:
      "Our project-based model handles everything from requirement analysis and AI model training to CRM integrations and deployment, ensuring a predictable timeline and fixed budget.",
    bestFor: [
      "Chatbot MVPs",
      "Fixed-Scope Projects",
      "Quick Market Launch",
      "Predictable Budget",
    ],
  },
];

export default function EngagementModelsSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header - compact */}
        <div className="max-w-4xl">
          <h2 className="text-[24px] font-bold leading-tight text-[#0f172a] sm:text-[28px] lg:text-[32px]">
            Flexible Collaboration Models for AI Chatbot Success
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-gray-600">
            Choosing the right engagement model is crucial for conversational AI
            projects. We offer flexible options, from dedicated AI development
            squads to turn-key chatbot delivery partnerships, ensuring
            transparency, seamless integration with your existing tools, and
            maximum ROI.
          </p>
        </div>

        {/* Models Card - compact */}
        <div className="mt-8 rounded-2xl bg-[#f4f5f7] p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* 3 Models */}
            {models.map((model, index) => (
              <div key={index}>
                <div className="mb-3 text-gray-800">{model.icon}</div>

                <h3 className="text-[16px] font-bold text-[#0f172a]">
                  {model.title}
                </h3>

                <p className="mt-2 text-[12px] leading-relaxed text-gray-600">
                  {model.description}
                </p>

                {/* Best for */}
                <div className="mt-4">
                  <p className="text-[12px] font-semibold text-[#0f172a]">
                    Best for
                  </p>
                  <div
                    className="mt-1 h-[2px] w-7 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {model.bestFor.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          bg-[#0f172a]
                          px-2.5
                          py-1
                          text-[10px]
                          font-medium
                          text-white
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Right CTA */}
            <div className="flex flex-col items-start justify-center lg:items-end">
              <p className="text-[13px] font-medium text-[#0f172a]">
                Get Your Customized AI Solution
              </p>

              <a
                href={getContextualContactUsPath()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  inline-block
                  rounded-md
                  border-2
                  px-5
                  py-2.5
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transition
                  duration-300
                  hover:bg-white
                  hover:text-[#0f172a]
                "
                style={{
                  backgroundColor: ACCENT,
                  borderColor: ACCENT,
                }}
              >
                FIND THE RIGHT MODEL →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
