"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Mail, Cookie, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: FileText,
    content: [
      {
        subtitle: "Personal Information",
        text: "Name, email address, phone number, organization, or other details you voluntarily provide (e.g., through event registration forms or newsletter sign-ups).",
      },
      {
        subtitle: "Non-Personal Information",
        text: "Browser type, operating system, IP address, and website usage data collected via cookies or analytics tools.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Eye,
    items: [
      "To provide information about ORAH programs, events, and initiatives.",
      "To communicate with you regarding updates, opportunities, or partnerships.",
      "To improve our website, outreach, and community engagement.",
      "To comply with legal or regulatory requirements.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    icon: Shield,
    intro: "We do not sell, rent, or trade your personal information. We may share information with:",
    items: [
      "Service Providers assisting in website hosting, email communication, or event management.",
      "Funding or Regulatory Bodies when reporting program participation, as required.",
      "Legal Authorities if disclosure is required by law.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    text: "We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the Internet is completely secure.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Shield,
    intro: "You have the right to:",
    items: [
      "Request access to your personal data.",
      "Correct or update inaccurate information.",
      "Withdraw consent for communications.",
      "Request deletion of your personal information (subject to legal and funding requirements).",
    ],
    contact: "To exercise these rights, contact us at: hello@responsibleaiottawa.ca",
  },
  {
    id: "cookies",
    title: "Cookies",
    icon: Cookie,
    text: "Our website may use cookies to enhance user experience. You may choose to disable cookies in your browser settings.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 10 + 2 + "px",
                  height: Math.random() * 10 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/20 rounded-full border border-[#00C4A7]/30 mb-8">
              <Shield className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Last Updated: September 2025</p>
            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-200 leading-relaxed">
                Ottawa Responsible AI Hub (ORAH) respects your privacy and is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or participate in our programs, events, or initiatives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-[#00C4A7]/5 transition-colors border border-gray-200"
                >
                  <section.icon className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
                  <span className="text-[#003366] font-medium">{section.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#003366]">{section.title}</h2>
              </div>

              <div className="pl-16 space-y-4">
                {section.text && <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>}

                {section.intro && <p className="text-lg text-gray-700 leading-relaxed">{section.intro}</p>}

                {section.content && (
                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl font-semibold text-[#003366] mb-2">{item.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#00C4A7] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.contact && (
                  <div className="mt-4 p-4 bg-[#00C4A7]/5 border border-[#00C4A7]/20 rounded-lg">
                    <p className="text-gray-700">
                      {section.contact.split("hello@responsibleaiottawa.ca")[0]}
                      <a
                        href="mailto:hello@responsibleaiottawa.ca"
                        className="text-[#00C4A7] hover:underline font-medium"
                      >
                        hello@responsibleaiottawa.ca
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#003366] to-[#003366]/90 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-[#00C4A7]" />
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our privacy practices, please don&apos;t hesitate to reach out to
              us.
            </p>
            <a
              href="mailto:hello@responsibleaiottawa.ca"
              className="inline-flex items-center px-8 py-4 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-colors"
            >
              Contact Us
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/terms"
              className="text-[#003366] hover:text-[#00C4A7] font-medium transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal-notice" className="text-[#003366] hover:text-[#00C4A7] font-medium transition-colors">
              Legal Notice
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
