"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function StatsBlock() {
  const t = useTranslations("stats")

  const stats = [
    { value: "100+", label: t("members"),   color: "text-[#003366]" },
    { value: "4+",   label: t("workshops"), color: "text-[#00C4A7]" },
    { value: "5",    label: t("programs"),  color: "text-[#003366]" },
  ]

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
            >
              <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${stat.color}`}>
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-gray-500 leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
