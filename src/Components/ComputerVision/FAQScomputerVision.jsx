import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What does Codewire actually do in Computer Vision?",
      answer: (
        <>
          We architect and build full-stack computer vision systems:{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            automated visual inspection
          </span>{" "}
          for industrial quality control,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            real-time object tracking & analytics
          </span>{" "}
          for video feeds,{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            Edge AI deployments
          </span>{" "}
          on hardware like NVIDIA Jetson, and{" "}
          <span className="bg-yellow-200/80 text-slate-900 font-semibold px-1 rounded">
            medical image processing pipelines
          </span>{" "}
          tailored to your exact business logic.
        </>
      ),
    },
    {
      question:
        "We have camera feeds or raw image datasets but aren't sure how to start. Where do we begin?",
      answer:
        "We recommend starting with our Computer Vision Technical Discovery & Feasibility Audit. We analyze your image/video data quality, evaluate lighting and hardware constraints, select the optimal deep learning model architecture, and provide a clear engineering roadmap before training or coding begins.",
    },
    {
      question:
        "What is the Computer Vision Discovery phase and what do we walk away with?",
      answer:
        "The discovery phase is a 1-2 week deep dive into your visual data and operational requirements. You walk away with a complete model architecture blueprint, annotation strategy, hardware/GPU deployment recommendations, performance benchmarks (FPS and accuracy metrics), and a fixed-price development estimate.",
    },
    {
      question:
        "Do you build models from scratch or fine-tune pre-trained models?",
      answer:
        "We do both depending on your latency and accuracy requirements. We frequently leverage state-of-the-art architectures (such as YOLOv8/v10, ResNet, EfficientNet, Segment Anything, and Vision Transformers) and fine-tune them on your proprietary data, or custom-train lightweight models optimized for edge devices.",
    },
    {
      question:
        "Will the computer vision system integrate smoothly with our existing infrastructure?",
      answer:
        "Yes. We specialize in building secure pipelines, RTSP/WebRTC stream handlers, custom REST/GraphQL APIs, and microservices middleware to connect your computer vision models with existing CCTV systems, PLCs on factory floors, cloud dashboards, and enterprise databases.",
    },
    {
      question:
        "How do we engage — can we hire dedicated vision engineers for our team?",
      answer:
        "Absolutely. We offer flexible engagement models including dedicated AI/ML engineer augmentation (where computer vision experts embed directly into your sprint teams) and full end-to-end turnkey project delivery managed completely by our team.",
    },
    {
      question:
        "How long does it take to build a computer vision prototype or MVP?",
      answer:
        "For most vision MVPs and custom proof-of-concepts, we deliver the first functional model iteration and detection prototype within 3 to 6 weeks, allowing you to validate accuracy rates and test on live video streams quickly.",
    },
    {
      question:
        "Do you work with hardware constraints like Edge devices and IoT cameras?",
      answer:
        "Yes. We specialize in Edge AI optimization, model quantization (TensorRT, ONNX, OpenVINO), and deployment on low-latency edge hardware including NVIDIA Jetson boards, Raspberry Pi, industrial PCs, and cloud-connected IP cameras.",
    },
    {
      question:
        "What technologies and frameworks make up your core vision stack?",
      answer:
        "Our engineering stack spans PyTorch, TensorFlow, OpenCV, YOLO, ONNX Runtime, TensorRT, Python, C++, FastAPI, Docker, Kubernetes, AWS, Google Cloud, and specialized data annotation pipelines.",
    },
    {
      question:
        "How do you handle model accuracy, drift, and post-launch maintenance?",
      answer:
        "We maintain high performance standards through rigorous dataset validation, automated data augmentation, and continuous monitoring for concept/data drift. We also offer ongoing post-launch model retraining, edge updates, and scaling support SLAs.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column - Sticky Section Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-12 flex flex-col items-start gap-4 pr-0 lg:pr-6">
          <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
            FREQUENTLY ASKED
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
            The Questions We Hear{" "}
            <span className="text-yellow-500 block mt-1">
              Before Every Vision Project
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mt-1">
            Straight answers on our computer vision engineering process, edge AI
            capabilities, model accuracy standards, and how we collaborate with
            your team.
          </p>
        </div>

        {/* Right Column - Top Divider Accordion List */}
        <div className="lg:col-span-7 w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-t border-slate-200 transition-colors ${
                  index === faqs.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                {/* Question Row Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left group transition-all cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Small Help Icon */}
                    <div className="w-5 h-5 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0 group-hover:border-yellow-500 group-hover:text-yellow-600 transition-colors">
                      ?
                    </div>

                    {/* Question Title */}
                    <span
                      className={`text-base md:text-lg leading-snug transition-colors ${
                        isOpen
                          ? "text-yellow-600 font-semibold"
                          : "text-slate-800 group-hover:text-slate-950 "
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <span
                    className={`text-xl font-light leading-none shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "text-yellow-600 rotate-45"
                        : "text-slate-400 group-hover:text-slate-900"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-8 pr-4">
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
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
};

export default FAQSection;
