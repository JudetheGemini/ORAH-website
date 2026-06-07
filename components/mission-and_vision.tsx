"use client"

import { motion } from "framer-motion"
import { Scale, GraduationCap, Megaphone, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Scale,
    title: "Governance",
    description: "Advancing ethical AI policy frameworks and accountability standards that protect communities.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Building AI literacy across all demographics through workshops, programs, and accessible resources.",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description: "Championing inclusive and transparent AI development at the community, national, and global level.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fostering responsible tech innovation that serves the public good and reflects community values.",
  },
]

export default function MissionVision() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">Ottawa Responsible AI Hub</h2>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Our mission is to inspire and support the creation of{" "}
            <span className="text-[#003366] font-bold">500 responsible tech innovations</span>{" "}
            in Ottawa over the next 10 years, building a thriving ecosystem where AI serves humanity with{" "}
            <span className="text-[#00C4A7] font-semibold">transparency, fairness, and integrity</span>.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00C4A7]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center mb-4 group-hover:from-[#00C4A7]/25 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#003366]" />
                </div>
                <h3 className="font-bold text-[#003366] mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Vision — full-width accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl px-10 py-12 text-center text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00C4A7_0%,_transparent_60%)] opacity-15" />
          <div className="relative z-10">
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-4">Our Vision</p>
            <p className="text-2xl lg:text-3xl font-bold leading-snug max-w-3xl mx-auto">
              Ottawa as a global leader in responsible AI innovation, where technology advances the public good and empowers every community.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
