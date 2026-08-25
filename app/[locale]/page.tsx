"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

import MissionVision from "@/components/mission-and_vision"
import ContactForm from "@/components/contact-form"
import InitiativesSlider from "@/components/initiatives-slider"
import StatsBlock from "@/components/stats-block"
import SummitPromoPopup from "@/components/summit-promo-popup"

export default function Home() {
  const t = useTranslations("home")
  const locale = useLocale()

  return (
    <>
      <SummitPromoPopup />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/newHero.jpg" alt="ORAH community gathering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/75 via-[#003366]/55 to-[#003366]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                <span className="text-sm font-medium text-white/90 tracking-wide">{t("eyebrow")}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              {t("heading")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/80">
                {t("headingAccent")}
              </span>{" "}
              {t("headingEnd")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              {t("subheading")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center pt-2"
            >
              <Link href={`/${locale}/programs`}>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C4A7] text-white font-semibold text-lg rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#00C4A7]/30 transition-all duration-300">
                  {t("ctaPrimary")}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="#contact">
                <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300">
                  <Users className="w-5 h-5" />
                  {t("ctaSecondary")}
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase text-white/50">{t("scrollLabel")}</span>
            <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <StatsBlock />
      <MissionVision />
      <InitiativesSlider />
      <ContactForm />
    </>
  )
}
