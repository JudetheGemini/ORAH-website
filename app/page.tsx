"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

import MissionVision from "@/components/mission-and_vision";
import ContactForm from "@/components/contact-form";
import InitiativesSlider from "@/components/initiatives-slider";
import StatsBlock from "@/components/stats-block";
import AIForAllPromoPopup from "@/components/ai-for-all-promo-popup";


export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/newHero.jpg"
            alt="ORAH community gathering"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay so the photo comes through */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/75 via-[#003366]/55 to-[#003366]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                <span className="text-sm font-medium text-white/90 tracking-wide">Ottawa · Canada · Since 2023</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              Leading the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/80">
                Ethical and Responsible AI
              </span>{" "}
              in Ottawa
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              A community dedicated to ethical AI governance, education, advocacy, and innovation, built in Ottawa for everyone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center pt-2"
            >
              <Link href="/programs">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C4A7] text-white font-semibold text-lg rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#00C4A7]/30 transition-all duration-300">
                  Explore Our Programs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="#contact">
                <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300">
                  <Users className="w-5 h-5" />
                  Get Involved
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
            <span className="text-xs tracking-widest uppercase text-white/50">Scroll</span>
            <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-10 gap-6 mt-6"
      >
        <div className="flex flex-col items-center gap-6 px-4">
          <span className="font-inter text-darkBlue text-2xl md:text-5xl font-black max-w-5xl text-center tracking-wide leading-8 md:leading-16">
            Leading the Future of Ethical and Responsible{" "}
            <span className="text-teal">AI in Ottawa</span>
          </span>
          <span className="font-inter text-darkBlue sm:text-xl text-center max-w-2xl">
            Creating a community dedicated to ethical AI governance, education,
            advocacy, and innovation.
          </span>
          <Link target="_blank" href="https://join.slack.com/t/ottawarespons-ocm1166/shared_invite/zt-3dq79ru0n-9DVA_wJVCxNT74zC9NgG4g">
              <button className="p-4 rounded-lg text-sm sm:text-base cursor-pointer bg-teal text-white hover:bg-darkBlue">
                Join our community
              </button>
          </Link>
        </div>
        <div className="rounded-md px-4 max-w-4xl ">
          <Image
            className="rounded-xl"
            src="/newHero.jpg"
            alt=""
            width={700}
            height={200}
          />
        </div>
      </motion.div> */}

      <StatsBlock />
      <MissionVision />
      <InitiativesSlider />
      <ContactForm />
      
      {/* Promotional Popup */}
      <AIForAllPromoPopup />
    </>
  );
}
