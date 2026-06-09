"use client"

import { motion } from "framer-motion"
import { Scale, GraduationCap, Megaphone, Lightbulb } from "lucide-react"
import { useTranslations } from "next-intl"

export default function MissionVision() {
  const t = useTranslations("mission")

  const pillars = [
    { icon: Scale,        key: "governance" },
    { icon: GraduationCap, key: "education" },
    { icon: Megaphone,    key: "advocacy" },
    { icon: Lightbulb,    key: "innovation" },
  ] as const

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t("eyebrow")}</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            {t.rich("body", {
              count: (chunks) => <span className="text-[#003366] font-bold">{chunks}</span>,
              values: (chunks) => <span className="text-[#00C4A7] font-semibold">{chunks}</span>,
            })}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map(({ icon: Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00C4A7]/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center mb-4 group-hover:from-[#00C4A7]/25 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#003366]" />
              </div>
              <h3 className="font-bold text-[#003366] mb-2">{t(`pillars.${key}.title`)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t(`pillars.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl px-10 py-12 text-center text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00C4A7_0%,_transparent_60%)] opacity-15" />
          <div className="relative z-10">
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-4">{t("visionEyebrow")}</p>
            <p className="text-2xl lg:text-3xl font-bold leading-snug max-w-3xl mx-auto">{t("vision")}</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
