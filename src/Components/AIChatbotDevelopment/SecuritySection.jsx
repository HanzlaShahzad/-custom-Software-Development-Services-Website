import React from "react";
import {
  ShieldCheck,
  Lock,
  Server,
  FileText,
  KeyRound,
  Database,
  Cpu,
  Eye,
  Network,
  CheckCircle2,
} from "lucide-react";

const ACCENT_YELLOW = "rgb(254 189 4)";

// =====================================================
// SECURITY & DATA SAFEGUARDS DATA (9 BOXES)
// =====================================================

const securityBoxes = [
  {
    title: "Data Encryption with AES-256, TLS 1.3 & DigiCert Certification",
    description:
      "All chatbot training data and user interactions are encrypted at rest using AES-256 and in transit with TLS 1.3, secured through DigiCert-issued SSL certificates and strict FIPS 140-2 compliance.",
    icon: Lock,
    tags: ["AES-256", "DigiCert", "FIPS 140-2", "TLS 1.3"],
  },
  {
    title: "Data Segregation via AWS, PostgreSQL & RBAC Access Control",
    description:
      "Each chatbot client workspace operates in isolated cloud environments, leveraging PostgreSQL for secure data storage and Role-Based Access Control for granular permission management.",
    icon: Server,
    tags: ["AWS", "RBAC", "PostgreSQL", "SOC 2"],
  },
  {
    title: "Audit Logs Powered by Elastic Stack, Azure Monitor & Splunk",
    description:
      "Every chatbot intent and system event is tracked through ELK dashboards integrated with Azure Monitor and Splunk analytics to provide full visibility and audit readiness.",
    icon: FileText,
    tags: ["Elastic Stack", "Azure", "Splunk", "ISO 27001"],
  },
  {
    title: "Zero Data Retention & Private LLM Training Isolation",
    description:
      "Your proprietary conversation logs and enterprise documents are never used to train public foundation models, ensuring complete intellectual property privacy.",
    icon: ShieldCheck,
    tags: ["Zero Retention", "Private LLM", "IP Protection"],
  },
  {
    title: "End-to-End API Token Security & OAuth 2.0 Protocols",
    description:
      "All external integrations and internal database connectors are secured via encrypted OAuth 2.0 protocols and token-based authentication mechanisms.",
    icon: KeyRound,
    tags: ["OAuth 2.0", "Token Auth", "API Security"],
  },
  {
    title: "Secure Vector Database Architecture for RAG Pipelines",
    description:
      "Vector embeddings used in Retrieval-Augmented Generation (RAG) are stored in secure, encrypted vector stores with tenant isolation to prevent cross-contamination.",
    icon: Database,
    tags: ["Vector DB", "RAG Security", "Tenant Isolation"],
  },
  {
    title: "AI Guardrails & Automated Prompt Injection Defense",
    description:
      "Built-in security guardrails filter incoming user prompts in real time to block malicious prompt injections, jailbreak attempts, and toxic output generation.",
    icon: Cpu,
    tags: ["Guardrails", "Anti-Injection", "Toxicity Filter"],
  },
  {
    title: "Real-Time Threat Monitoring & Behavioral Analytics",
    description:
      "Advanced anomaly detection systems monitor conversational traffic patterns continuously to identify and neutralize automated scraping or bot attacks instantly.",
    icon: Eye,
    tags: ["Threat Detection", "Analytics", "Real-Time Alert"],
  },
  {
    title: "Compliance-Ready Frameworks for Enterprise Deployments",
    description:
      "Engineered from the ground up to meet strict global regulatory standards including GDPR, HIPAA, and CCPA requirements for enterprise AI chatbots.",
    icon: Network,
    tags: ["GDPR Ready", "HIPAA", "CCPA"],
  },
];

// =====================================================
// SECURITY & DATA SAFEGUARDS SECTION
// =====================================================

export default function AiChatbotSecuritySection() {
  return (
    <section className="bg-white text-black py-20 px-5 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
            Security First, No Training on{" "}
            <span style={{ color: ACCENT_YELLOW }}>Your Chatbot Data</span>
            [cite: 7]
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Security is at the core of our AI chatbot development architecture.
            Our platform uses robust safeguards to protect your enterprise data
            and preserve confidentiality[cite: 7].
          </p>
        </div>

        {/* 3x3 GRID (9 BOXES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityBoxes.map((box, index) => {
            const IconComponent = box.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xs p-8 border-2 border-gray-200 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div>
                  {/* TOP ICON BOX */}
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center text-black mb-6 shadow-sm transition-transform group-hover:scale-110"
                    style={{ backgroundColor: ACCENT_YELLOW }}
                  >
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 leading-snug">
                    {box.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 ">
                    {box.description}
                  </p>
                </div>

                {/* BOTTOM TAGS / BADGES */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {box.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-gray-100 text-gray-700 border border-gray-200 flex items-center gap-1"
                    >
                      <CheckCircle2
                        size={10}
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
