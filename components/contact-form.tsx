"use client"

import { useActionState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Users, CheckCircle } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"

const contactOptions = [
  {
    icon: Mail,
    label: "General Inquiries",
    value: "hello@responsibleaiottawa.ca",
    href: "mailto:hello@responsibleaiottawa.ca",
  },
  {
    icon: Users,
    label: "Programs & Partnerships",
    value: "partnerships@responsibleaiottawa.ca",
    href: "mailto:partnerships@responsibleaiottawa.ca",
  },
]

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Contact</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-5">
                Let&apos;s Work<br />Together
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you want to get involved, explore a partnership, or just learn more about responsible AI in Ottawa, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3">
              {contactOptions.map((option, i) => {
                const Icon = option.icon
                return (
                  <motion.a
                    key={i}
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#00C4A7]/40 hover:bg-[#00C4A7]/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-[#00C4A7]/30 transition-colors">
                      <Icon className="w-4 h-4 text-[#003366]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{option.label}</div>
                      <div className="text-sm font-medium text-gray-700 group-hover:text-[#003366] truncate transition-colors">{option.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <p className="text-sm text-gray-400">
              We typically respond within 24 hours on business days.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              {state?.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00C4A7]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00C4A7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-2">Message Sent!</h3>
                  <p className="text-gray-500">{state.message}</p>
                </motion.div>
              ) : (
                <form action={action} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#00C4A7] focus:ring-2 focus:ring-[#00C4A7]/15 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#00C4A7] focus:ring-2 focus:ring-[#00C4A7]/15 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#00C4A7] focus:ring-2 focus:ring-[#00C4A7]/15 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none text-sm"
                      placeholder="Tell us about your interest, questions, or how you'd like to get involved..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#003366] text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-[#00C4A7] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
