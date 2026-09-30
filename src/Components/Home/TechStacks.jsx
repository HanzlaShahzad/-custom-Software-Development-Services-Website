import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ACCENT = "#fcbc02";

const categories = [
  {
    id: "aiml",
    label: "AI/ML",
    logos: [
      {
        name: "Gemini",
        slug: "googlegemini",
        url: "https://deepmind.google/technologies/gemini/",
      },
      { name: "Llama 3", slug: "meta", url: "https://www.llama.com/" },
      { name: "Mistral AI", slug: "mistralai", url: "https://mistral.ai/" },
      { name: "DeepSeek", slug: "deepseek", url: "https://www.deepseek.com/" },
      {
        name: "LangChain",
        slug: "langchain",
        url: "https://www.langchain.com/",
      },
      { name: "OpenAI", slug: "openai", url: "https://openai.com/" },
      {
        name: "Hugging Face",
        slug: "huggingface",
        url: "https://huggingface.co/",
      },
      { name: "PyTorch", slug: "pytorch", url: "https://pytorch.org/" },
    ],
  },
  {
    id: "automation",
    label: "AI Automation",
    logos: [
      { name: "n8n", slug: "n8n", url: "https://n8n.io/" },
      { name: "Make", slug: "make", url: "https://www.make.com/" },
      { name: "Zapier", slug: "zapier", url: "https://zapier.com/" },
      { name: "UiPath", slug: "uipath", url: "https://www.uipath.com/" },
      {
        name: "Power Automate",
        slug: "microsoftpowerautomate",
        url: "https://powerautomate.microsoft.com/",
      },
      {
        name: "Activepieces",
        slug: "activepieces",
        url: "https://www.activepieces.com/",
      },
    ],
  },
  {
    id: "chatbots",
    label: "Chatbots & AI Agents",
    logos: [
      { name: "OpenAI", slug: "openai", url: "https://openai.com/" },
      {
        name: "Anthropic",
        slug: "anthropic",
        url: "https://www.anthropic.com/",
      },
      {
        name: "LangChain",
        slug: "langchain",
        url: "https://www.langchain.com/",
      },
      { name: "Rasa", slug: "rasa", url: "https://rasa.com/" },
      { name: "Botpress", slug: "botpress", url: "https://botpress.com/" },
      {
        name: "Voiceflow",
        slug: "voiceflow",
        url: "https://www.voiceflow.com/",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom Software Solutions",
    logos: [
      { name: "React", slug: "react", url: "https://react.dev/" },
      { name: "Next.js", slug: "nextdotjs", url: "https://nextjs.org/" },
      { name: "Node.js", slug: "nodedotjs", url: "https://nodejs.org/" },
      { name: "Python", slug: "python", url: "https://www.python.org/" },
      {
        name: "PostgreSQL",
        slug: "postgresql",
        url: "https://www.postgresql.org/",
      },
      { name: "Docker", slug: "docker", url: "https://www.docker.com/" },
    ],
  },
  {
    id: "mobile",
    label: "GTM Mobile",
    logos: [
      { name: "React Native", slug: "react", url: "https://reactnative.dev/" },
      { name: "Flutter", slug: "flutter", url: "https://flutter.dev/" },
      {
        name: "Swift",
        slug: "swift",
        url: "https://developer.apple.com/swift/",
      },
      { name: "Kotlin", slug: "kotlin", url: "https://kotlinlang.org/" },
      {
        name: "Firebase",
        slug: "firebase",
        url: "https://firebase.google.com/",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce Solutions",
    logos: [
      { name: "Shopify", slug: "shopify", url: "https://www.shopify.com/" },
      { name: "WooCommerce", slug: "woo", url: "https://woocommerce.com/" },
      { name: "Stripe", slug: "stripe", url: "https://stripe.com/" },
      {
        name: "Magento",
        slug: "magento",
        url: "https://business.adobe.com/products/magento/magento-commerce.html",
      },
      {
        name: "BigCommerce",
        slug: "bigcommerce",
        url: "https://www.bigcommerce.com/",
      },
    ],
  },
];

// Fallback component when image fails
function LogoFallback({ name }) {
  const letter = name.charAt(0).toUpperCase();
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
      style={{ backgroundColor: ACCENT }}
    >
      {letter}
    </div>
  );
}

function LogoItem({ logo }) {
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-[150px] shrink-0 flex-col items-center gap-3 group cursor-pointer py-2"
    >
      {/* Hover effects moved here so the card floats safely inside padding */}
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:ring-2 group-hover:ring-[#fcbc02]/50">
        {hasError ? (
          <LogoFallback name={logo.name} />
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${logo.slug}`}
            alt={logo.name}
            className="h-9 w-9 object-contain"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <span className="text-[13px] font-medium text-gray-700 transition group-hover:text-black">
        {logo.name}
      </span>
    </a>
  );
}

export default function TechStacksSection() {
  const [activeTab, setActiveTab] = useState("aiml");
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCategory = categories.find((cat) => cat.id === activeTab);
  const logos = activeCategory?.logos || [];

  // How many logos are visible at once
  const visibleCount = 5;

  // Maximum index so we never show blank space
  const maxIndex = Math.max(0, logos.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTabChange = (id) => {
    setActiveTab(id);
    setCurrentIndex(0);
  };

  // Safety: if logos change and currentIndex is out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [logos.length, maxIndex, currentIndex]);

  return (
    <section className="w-full bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-bold leading-tight text-[#0f172a] sm:text-[36px] lg:text-[42px]">
          Don&apos;t worry! We&apos;ve got the tech stacks
          <br />
          you&apos;re looking for!
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-gray-200 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`
                relative pb-3 text-[14px] font-medium transition
                ${
                  activeTab === cat.id
                    ? "text-[#0f172a]"
                    : "text-gray-500 hover:text-gray-800"
                }
              `}
            >
              {cat.label}
              {activeTab === cat.id && (
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative mt-16 flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition
              ${
                currentIndex === 0
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-white hover:shadow"
              }
            `}
            style={{ color: currentIndex === 0 ? undefined : ACCENT }}
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          {/* Logos Container */}
          <div className="w-full max-w-[780px] overflow-hidden py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 150}px)`,
              }}
            >
              {logos.map((logo, index) => (
                <LogoItem key={`${logo.slug}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`
              flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition
              ${
                currentIndex >= maxIndex
                  ? "cursor-not-allowed text-gray-300"
                  : "hover:bg-white hover:shadow"
              }
            `}
            style={{
              color: currentIndex >= maxIndex ? undefined : ACCENT,
            }}
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
