"use client";
// import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";

import MissionVision from "@/components/mission-and_vision";
import ContactForm from "@/components/contact-form";
import InitiativesSlider from "@/components/initiatives-slider";
import AIForAllPromoPopup from "@/components/ai-for-all-promo-popup";

// "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// import { motion } from "framer-motion";

// import MissionVision from "@/components/mission-and_vision";
// import ContactForm from "@/components/contact-form";
// import InitiativesSlider from "@/components/initiatives-slider";

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
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/80 via-[#003366]/70 to-[#003366]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Leading the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/80">
                Ethical and Responsible AI
              </span>{" "}
              in Ottawa
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
            >
              Creating a community dedicated to ethical AI governance, education, advocacy, and innovation.
            </motion.p>

            {/* CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4"
            >
              <Link target="_blank" href="https://join.slack.com/t/ottawarespons-ocm1166/shared_invite/zt-3dq79ru0n-9DVA_wJVCxNT74zC9NgG4g">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-[#00C4A7] text-white font-semibold text-lg rounded-lg hover:bg-[#00C4A7]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our Community
                <motion.div
                  className="ml-2 cursor-pointer"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.div>
                
              </motion.button>
              </Link>
            </motion.div> */}

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex justify-center pt-8"
            >
              <div className="w-24 h-1 bg-[#00C4A7] rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2 text-gray-300">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2" />
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

      <MissionVision />
      <InitiativesSlider />
      <ContactForm />
      
      {/* Promotional Popup */}
      <AIForAllPromoPopup />
    </>
  );
}
