"use client"

import { motion } from "framer-motion"
import { FileText, Globe, Users, LinkIcon, AlertCircle, Scale, ChevronRight, Mail } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    id: "use-of-website",
    title: "Use of Website",
    icon: Globe,
    items: [
      "You may browse and use the website for lawful, non-commercial purposes.",
      "You agree not to misuse the site by attempting to gain unauthorized access, disrupting functionality, or posting harmful content.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: FileText,
    items: [
      "All website content, including logos, designs, event materials, and publications, are property of ORAH unless otherwise stated.",
      "Content may not be reproduced, distributed, or used for commercial purposes without prior written consent.",
    ],
  },
  {
    id: "event-participation",
    title: "Event Participation",
    icon: Users,
    items: [
      "Registration may be required for ORAH events. You agree to provide accurate information.",
      "ORAH reserves the right to modify, postpone, or cancel events.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: LinkIcon,
    text: "Our site may contain links to third-party websites. ORAH is not responsible for their content, policies, or practices.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: AlertCircle,
    items: [
      "ORAH provides website content 'as is' without warranties of any kind.",
      "We are not liable for damages resulting from use of our website, reliance on content, or participation in programs/events.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: Scale,
    text: "These terms are governed by the laws of Ontario, Canada.",
  },
]

export default function TermsAndConditionsPage() {
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
              <Scale className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-200">Last Updated: September 2025</p>
            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-200 leading-relaxed">
                These Terms & Conditions govern your use of the Ottawa Responsible AI Hub (ORAH) website and
                participation in our programs and events. By accessing our site, you agree to these terms.
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-[#00C4A7]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-[#00C4A7]/20"
          >
            <div className="flex items-start mb-6">
              <AlertCircle className="w-8 h-8 text-[#00C4A7] mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Important Notice</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By using the ORAH website or participating in our events and programs, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these
                  terms, please do not use our website or participate in our activities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#003366] to-[#003366]/90 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-[#00C4A7]" />
            <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              If you have any questions about our Terms & Conditions, please feel free to contact us.
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
            <Link href="/privacy-policy" className="text-[#003366] hover:text-[#00C4A7] font-medium transition-colors">
              Privacy Policy
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
