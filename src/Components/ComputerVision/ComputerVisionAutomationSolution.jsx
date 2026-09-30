import React from "react";
import {
  Eye,
  Scan,
  Video,
  Layers,
  Cpu,
  ShieldCheck,
  Workflow,
  Glasses,
  ArrowUpRight,
} from "lucide-react";
import { getContextualContactUsPath } from "../../utils/navigation";

const ACCENT = "#fcbc02";

const cards = [
  {
    icon: <Eye size={28} strokeWidth={1.5} />,
    title: "Object Detection & Tracking",
    description:
      "We build robust computer vision models capable of real-time object detection, classification, and multi-object tracking across complex video and image streams with high accuracy.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "OpenCV", slug: "opencv" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "CUDA", slug: "nvidia" },
    ],
  },
  {
    icon: <Scan size={28} strokeWidth={1.5} />,
    title: "Image Recognition & Classification",
    description:
      "Transform visual inputs into structured data using advanced convolutional neural networks (CNNs) and deep learning models designed for automated tagging, quality control, and visual search.",
    bottomIcons: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Keras", slug: "keras" },
      { name: "Python", slug: "python" },
      { name: "Hugging Face", slug: "huggingface" },
    ],
  },
  {
    icon: <Video size={28} strokeWidth={1.5} />,
    title: "Real-Time Video Analytics",
    description:
      "Deploy intelligent video surveillance and monitoring systems that analyze live feeds for security compliance, anomaly detection, crowd behavior analysis, and automated insights.",
    bottomIcons: [
      { name: "OpenCV", slug: "opencv" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    icon: <Layers size={28} strokeWidth={1.5} />,
    title: "OCR & Document Processing",
    description:
      "Extract text, tables, and structured data effortlessly from scanned documents, invoices, IDs, and handwritten notes using state-of-the-art optical character recognition pipelines.",
    bottomIcons: [
      { name: "Python", slug: "python" },
      { name: "Tesseract", slug: "python" },
      { name: "OpenAI", slug: "openai" },
      { name: "Google Cloud", slug: "googlecloud" },
    ],
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Edge AI & Model Optimization",
    description:
      "Optimize and quantize heavy computer vision models for deployment on edge devices, IoT hardware, mobile chips, and embedded systems without sacrificing inference speed.",
    bottomIcons: [
      { name: "TensorRT", slug: "nvidia" },
      { name: "ONNX", slug: "onnx" },
      { name: "Docker", slug: "docker" },
      { name: "Raspberry Pi", slug: "raspberrypi" },
    ],
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Automated Visual Inspection",
    description:
      "Implement AI-powered quality inspection lines for manufacturing and production floors to detect microscopic surface defects, structural flaws, and assembly errors automatically.",
    bottomIcons: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Python", slug: "python" },
      { name: "Azure", slug: "microsoftazure" },
    ],
  },
  {
    icon: <Glasses size={28} strokeWidth={1.5} />,
    title: "AR & Spatial Computing",
    description:
      "Develop immersive augmented reality solutions leveraging spatial mapping, depth sensing, and real-time 3D object rendering for retail, medical, and industrial training.",
    bottomIcons: [
      { name: "Unity", slug: "unity" },
      { name: "Unreal Engine", slug: "unrealengine" },
      { name: "C++", slug: "cplusplus" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    icon: <Workflow size={28} strokeWidth={1.5} />,
    title: "Custom Data Annotation & MLOps",
    description:
      "Accelerate your computer vision training pipelines with expert data labeling workflows, automated dataset curation, and scalable MLOps model lifecycle monitoring.",
    bottomIcons: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Python", slug: "python" },
    ],
  },
];

export default function ComputerVisionServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-500">
            COMPUTER VISION DEVELOPMENT SERVICES
          </p>

          <h2 className="text-[32px] font-bold leading-tight text-[#0f172a] sm:text-[40px] lg:text-[48px]">
            Empowering Vision With
            <br />
            Advanced AI & Deep Learning
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            Whether you need custom image recognition, automated visual
            inspection, real-time video analytics, or complete edge-AI
            deployment, we build enterprise-grade computer vision solutions
            tailored to your goals.
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
                cursor-pointer
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
                Got a custom vision project?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                Let&apos;s talk about your data pipeline and evaluate the right
                model architecture for your computer vision roadmap.
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
