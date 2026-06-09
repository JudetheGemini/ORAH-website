"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import AIForAllModal from "./ai-for-all-modal"

const initiatives = [
  {
    id: 1,
    titleKey: "aiForAll",
    descKey: "aiForAllDesc",
    tagKey: "active",
    image: "/ai_for_all_empowering_seniors.jpg",
    path: "/programs/ai-for-all-seniors",
  },
  {
    id: 2,
    titleKey: "summit",
    descKey: "summitDesc",
    tagKey: "annual",
    image: "/ai_with_intent_conference.jpg",
    path: "/programs",
  },
  {
    id: 3,
    titleKey: "orat",
    descKey: "oratDesc",
    tagKey: "quarterly",
    image: "/orat.jpg",
    path: "/programs",
  },
  {
    id: 4,
    titleKey: "youth",
    descKey: "youthDesc",
    tagKey: "launching",
    image: "/ai_youth_changer.jpg",
    path: "/programs",
  },
  {
    id: 5,
    titleKey: "research",
    descKey: "researchDesc",
    tagKey: "comingSoon",
    image: "/research.jpg",
    path: "/programs",
  },
]

export default function InitiativesSlider() {
  const t = useTranslations("initiatives")
  const ti = useTranslations("initiativeItems")
  const locale = useLocale()

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (index: number, dir: number) => { setDirection(dir); setCurrent(index) }
  const next = () => go((current + 1) % initiatives.length, 1)
  const prev = () => go((current - 1 + initiatives.length) % initiatives.length, -1)

  useEffect(() => {
    if (!isAutoPlaying) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isAutoPlaying, current, next])

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  const item = initiatives[current]

  return (
    <section
      className="py-24 px-4 bg-gray-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t("eyebrow")}</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">{t("title")}</h2>
            <Link href={`/${locale}/programs`} className="text-sm font-semibold text-[#003366] hover:text-[#00C4A7] transition-colors flex items-center gap-1 pb-1">
              {t("viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px] lg:h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img src={item.image} alt={ti(item.titleKey)} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#003366]/85 lg:bg-transparent" />
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#003366]/95 via-[#003366]/65 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-14 max-w-full lg:max-w-[55%]">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#00C4A7] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] animate-pulse" />
                  {ti(item.tagKey)}
                </span>

                <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {ti(item.titleKey)}
                </h3>

                <p className="text-white/75 leading-relaxed mb-8 text-sm lg:text-base max-w-md hidden sm:block">
                  {ti(item.descKey)}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {item.id === 1 && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00C4A7] text-white text-sm font-semibold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {t("quickView")}
                    </button>
                  )}
                  <Link
                    href={`/${locale}${item.path}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/25 hover:bg-white/25 transition-all duration-300"
                  >
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 right-6 z-20 text-white/50 text-xs font-mono tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(initiatives.length).padStart(2, "0")}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {initiatives.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-[#003366]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>

      </div>

      <AIForAllModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
