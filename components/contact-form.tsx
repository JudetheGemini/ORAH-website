"use client"

import { useActionState } from "react"
import { motion } from "framer-motion"
import { Send, User, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"


export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <div className="relative z-10 px-4 my-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#003366] to-[#003366]/90 px-8 py-6 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-200">Ready to join the responsible AI movement? We&apos;d love to hear from you.</p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {state?.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-[#00C4A7] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Message Sent!</h3>
                <p className="text-gray-600">{state.message}</p>
              </motion.div>
            ) : (
              <form action={action} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-semibold text-[#003366]">
                    <User className="w-4 h-4 mr-2 text-[#00C4A7]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4A7] focus:outline-none transition-colors duration-300 text-gray-800 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-semibold text-[#003366]">
                    <Mail className="w-4 h-4 mr-2 text-[#00C4A7]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4A7] focus:outline-none transition-colors duration-300 text-gray-800 placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center text-sm font-semibold text-[#003366]">
                    <MessageSquare className="w-4 h-4 mr-2 text-[#00C4A7]" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00C4A7] focus:outline-none transition-colors duration-300 text-gray-800 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your interest in responsible AI, questions, or how you'd like to get involved..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: isPending ? 1 : 1.02 }}
                  whileTap={{ scale: isPending ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/90 text-white font-semibold py-4 px-6 rounded-lg hover:from-[#00C4A7]/90 hover:to-[#00C4A7] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Additional Info */}
                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    We typically respond within 24 hours. For urgent inquiries, reach out directly at{" "}
                    <a href="mailto:hello@responsibleaiottawa.ca" className="text-[#00C4A7] hover:underline font-medium">
                      hello@responsibleaiottawa.ca
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute hidden md:block -top-4 -right-4 w-24 h-24 bg-[#00C4A7]/10 rounded-full -z-10" />
        <div className="absolute hidden md:block -bottom-6 -left-6 w-32 h-32 bg-[#003366]/5 rounded-full -z-10" />
      </motion.div>
    </div>
  )
}
