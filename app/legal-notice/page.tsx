"use client"

import { motion } from "framer-motion"
import { Building2, Mail, MapPin, FileCheck, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"

export default function LegalNoticePage() {
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
              <FileCheck className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Legal Notice</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Official registration and contact information for the Ottawa Responsible AI Hub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center mr-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#003366]">Organization Details</h2>
                <p className="text-gray-600">Federal Nonprofit Corporation</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Legal Name</h3>
                <p className="text-gray-700 text-lg">Ottawa Responsible AI Hub (ORAH)</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Organization Type</h3>
                <p className="text-gray-700 text-lg">Community-driven federally registered nonprofit organization</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#00C4A7] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-3">Registered Office</h3>
                    <p className="text-gray-700 text-lg">Ottawa, ON, Canada</p>
                  </div>
                </div>
              </div>

              {/* <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Federal Nonprofit Registration Number</h3>
                <p className="text-gray-700 text-lg">[Insert Registration Number]</p>
                <p className="text-sm text-gray-500 mt-2">
                  This field will be updated once the federal registration is complete
                </p>
              </div> */}

              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#00C4A7] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-3">Contact Email</h3>
                    <a
                      href="mailto:hello@responsibleaiottawa.ca"
                      className="text-[#00C4A7] text-lg hover:underline font-medium"
                    >
                      hello@responsibleaiottawa.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-[#00C4A7]/20">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-[#00C4A7]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[#00C4A7]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#003366] mb-4">Important Disclaimer</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nothing on this website constitutes legal, financial, or professional advice. All content is
                    provided for educational and informational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">About Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Ottawa Responsible AI Hub (ORAH) is dedicated to advancing ethical AI practices through
                  community-driven initiatives. We bring together researchers, policymakers, developers, and citizens to
                  shape the future of responsible artificial intelligence in Ottawa and beyond.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our work focuses on education, advocacy, research, and collaboration to ensure that AI technologies
                  are developed and deployed in ways that benefit all members of society while respecting fundamental
                  rights and values.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-[#00C4A7]" />
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              For inquiries about our organization, partnerships, or legal matters, please contact us directly.
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
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-[#003366] hover:text-[#00C4A7] font-medium transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/terms"
              className="text-[#003366] hover:text-[#00C4A7] font-medium transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
