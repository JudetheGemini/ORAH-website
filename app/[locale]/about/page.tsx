"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Users, Lightbulb, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("about")
  const locale = useLocale()

  const pillars = [
    { icon: Shield,    label: t("pillarEthics") },
    { icon: Users,     label: t("pillarCommunity") },
    { icon: Lightbulb, label: t("pillarEducation") },
    { icon: Globe,     label: t("pillarCrossSector") },
  ]

  const ottawaStats = [
    { value: "1,700+", label: t("ottawaStat1Label") },
    { value: "#1",     label: t("ottawaStat2Label") },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">{t("eyebrow")}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{t("heroTitle")}</h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-lg">{t("heroSubtitle")}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {pillars.map((p) => {
                  const Icon = p.icon
                  return (
                    <div key={p.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm">
                      <Icon className="w-3.5 h-3.5 text-[#00C4A7]" />
                      {p.label}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
                <img src="/newHero.jpg" alt="ORAH community gathering" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">{t("est")}</div>
                  <p className="text-white font-semibold">{t("orgName")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">{t("missionEyebrow")}</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">{t("missionTitle")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t("missionBody1")}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.rich("missionBody2", {
                  count: (chunks) => <span className="font-semibold text-[#003366]">{chunks}</span>,
                  values: (chunks) => <span className="text-[#00C4A7] font-semibold">{chunks}</span>,
                })}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {pillars.map((p) => {
                  const Icon = p.icon
                  return (
                    <div key={p.label} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#003366]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{p.label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-[#003366]/10">
                <Image src="/newInitiative.jpg" alt="ORAH initiative in action" width={1000} height={800} className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About the Initiative ─────────────────────────────── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t("storyEyebrow")}</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">{t("storyTitle")}</h2>
          </motion.div>

          <div className="space-y-6">
            {[t("storyBody1"), t("storyBody2")].map((body, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {body}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#003366] to-[#004e99] rounded-2xl p-8 text-white mt-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00C4A7_0%,_transparent_60%)] opacity-15 rounded-2xl" />
              <p className="relative text-lg font-medium leading-relaxed text-white/90 italic">{t("quoteText")}</p>
              <p className="relative mt-4 text-sm text-white/60 font-semibold uppercase tracking-widest">{t("quoteAuthor")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Ottawa ───────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-[#003366]/10">
                <img src="/ottawa-skyline2.jpg" alt="Ottawa skyline" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-white font-bold text-lg">Ottawa, Canada</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">{t("ottawaEyebrow")}</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">{t("ottawaTitle")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{t("ottawaBody")}</p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {ottawaStats.map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="text-4xl font-bold text-[#00C4A7] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#003366] to-[#004e99] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00C4A7_0%,_transparent_55%)] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">{t("ctaEyebrow")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("ctaTitle")}</h2>
            <p className="text-xl text-white/65 leading-relaxed">{t("ctaBody")}</p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link href={`/${locale}/programs`}>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 transition-all duration-300">
                  {t("ctaPrimary")}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href={`/${locale}/#contact`}>
                <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  {t("ctaSecondary")}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
