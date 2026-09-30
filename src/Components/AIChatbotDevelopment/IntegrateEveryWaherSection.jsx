import React from "react";
import {
  MessageSquareCode,
  Bot,
  Database,
  Globe,
  BarChart3,
  CheckCircle2,
  Share2,
  Cpu,
  Layers,
  MessageSquare,
  Shield,
  Zap,
  Terminal,
  Server,
} from "lucide-react";

const ACCENT_YELLOW = "#fcbc02";

const INTEGRATION_CATEGORIES = [
  {
    title: "Messaging & Communication Channels",
    description:
      "Connect your AI chatbot seamlessly across all major communication channels including Telegram, WhatsApp, Facebook Messenger, Slack, Instagram, Microsoft Teams, Discord, Viber, LINE, and WeChat.",
    icon: MessageSquareCode,
    tags: ["WhatsApp", "Telegram", "Slack", "Messenger", "Teams"],
  },
  {
    title: "Business, CRM & Automation Tools",
    description:
      "Integrate with top CRM and automation platforms to streamline workflows and enhance business efficiency: Salesforce, HubSpot, Zendesk, Zoho CRM, Zapier, Pipedrive, Intercom, and Monday.com.",
    icon: Bot,
    tags: ["Salesforce", "HubSpot", "Zendesk", "Zapier"],
  },
  {
    title: "Storage & Knowledge Base Platforms",
    description:
      "Easily access and manage data from cloud storage and knowledge base tools such as Google Drive, Dropbox, OneDrive, Notion, Confluence, SharePoint, PDF, and custom document uploads.",
    icon: Database,
    tags: ["Google Drive", "Notion", "SharePoint", "Dropbox"],
  },
  {
    title: "Web & API Integrations",
    description:
      "Connect your conversational AI directly with custom web backends, RESTful APIs, e-commerce stores (Shopify, WooCommerce), and enterprise databases for real-time transactional updates.",
    icon: Globe,
    tags: ["Shopify", "REST APIs", "WooCommerce", "Custom Webhooks"],
  },
  {
    title: "Analytics & Support",
    description:
      "Monitor chatbot performance, track user sentiment, review conversation logs, and generate actionable insights using advanced analytics dashboards and customer feedback pipelines.",
    icon: BarChart3,
    tags: ["Mixpanel", "Google Analytics", "Custom Dashboards"],
  },
];

export default function IntegrateEverywhereSection() {
  return (
    <section className="w-full bg-[#faf9f5] py-20 px-6 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1450px]">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0f172a] tracking-tight leading-tight">
            Integrate Once.{" "}
            <span
              style={{ color: ACCENT_YELLOW }}
              className="underline decoration-black/10 underline-offset-8"
            >
              Connect Everywhere
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Reach customers seamlessly through your website & every major
            communication channel.
          </p>
        </div>

        {/* Top Open Floating Ecosystem Graphic (Narrowed Width with max-w-4xl) */}
        <div className="relative w-full max-w-4xl mx-auto h-[420px] rounded-3xl bg-[#071525] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden mb-16">
          {/* Radial Background Glow */}
          <div
            className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: ACCENT_YELLOW }}
          />

          {/* Concentric Decorative Rings */}
          <div className="absolute inset-8 rounded-full border border-blue-500/20 border-dashed animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-16 rounded-full border border-[#fcbc02]/20 border-dotted" />

          {/* Center Core Bot Node */}
          <div className="relative z-20 w-24 h-24 rounded-2xl bg-[#0f1f33] border-2 border-[#fcbc02] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(252,188,2,0.4)]">
            <Bot size={32} style={{ color: ACCENT_YELLOW }} />
            <span className="text-[10px] font-mono text-[#fcbc02] tracking-widest uppercase mt-1">
              AI Core
            </span>
          </div>

          {/* Open Floating / Bouncing Icons (Expanded icon set floating freely) */}
          <div className="absolute top-6 left-[10%] animate-[bounce_4s_infinite] [animation-delay:_0s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <MessageSquareCode size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-12 left-[28%] animate-[bounce_5s_infinite] [animation-delay:_1s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Share2 size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-6 right-[12%] animate-[bounce_4.5s_infinite] [animation-delay:_1.5s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Database size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-12 right-[28%] animate-[bounce_5.5s_infinite] [animation-delay:_0.5s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Cpu size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute bottom-8 left-[14%] animate-[bounce_4.8s_infinite] [animation-delay:_2s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Globe size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute bottom-6 right-[16%] animate-[bounce_4.2s_infinite] [animation-delay:_0.8s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <BarChart3 size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute bottom-10 left-[35%] animate-[bounce_5.2s_infinite] [animation-delay:_1.2s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Layers size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute bottom-10 right-[35%] animate-[bounce_4.6s_infinite] [animation-delay:_0.3s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <MessageSquare size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-[42%] left-[4%] animate-[bounce_5.1s_infinite] [animation-delay:_0.7s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Shield size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-[42%] right-[4%] animate-[bounce_4.3s_infinite] [animation-delay:_1.8s]">
            <div className="w-11 h-11 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Zap size={20} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute top-4 left-[45%] animate-[bounce_4.9s_infinite] [animation-delay:_1.1s]">
            <div className="w-10 h-10 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Terminal size={18} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>

          <div className="absolute bottom-4 right-[45%] animate-[bounce_5.3s_infinite] [animation-delay:_0.4s]">
            <div className="w-10 h-10 rounded-xl bg-[#0f1f33] border border-white/20 flex items-center justify-center shadow-lg hover:border-[#fcbc02] transition-colors">
              <Server size={18} style={{ color: ACCENT_YELLOW }} />
            </div>
          </div>
        </div>

        {/* Bottom 5 Wider Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTEGRATION_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  index >= 3 ? "lg:col-span-1.5" : ""
                }`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-black shadow-sm"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  {category.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md flex items-center gap-1"
                    >
                      <CheckCircle2
                        size={12}
                        style={{ color: ACCENT_YELLOW }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
