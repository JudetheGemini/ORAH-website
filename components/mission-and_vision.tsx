"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00C4A7]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#003366]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[#003366] mb-6">We are Ottawa Responsible AI</h2>
          <div className="w-24 h-1 bg-[#00C4A7] mx-auto" />
        </motion.div>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
              {/* Icon Header */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-[#003366]">Our Mission</h3>
                  <div className="w-12 h-0.5 bg-[#00C4A7] mt-2" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                ORAH is committed to fostering responsible AI practices through education, dialogue, advocacy, and
                recognition of best practices across sectors. The initiative seeks to drive discussions on AI ethics,
                data governance, and privacy while influencing policy and creating a network of stakeholders dedicated
                to responsible AI.
              </p>

          
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-[#003366] to-[#003366]/90 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4A7] rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00C4A7] rounded-full translate-y-12 -translate-x-12" />
              </div>

              {/* Icon Header */}
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                  <div className="w-12 h-0.5 bg-[#00C4A7] mt-2" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-100 leading-relaxed text-lg mb-6 relative z-10">
                To make Ottawa a global leader in responsible AI development, governance, and advocacy.
              </p>

          

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C4A7] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#00C4A7]/10 text-[#00C4A7] rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-[#00C4A7] rounded-full mr-3 animate-pulse" />
            Building the future of responsible AI together
          </div>
        </motion.div>
      </div>
    </section>
  )
}
