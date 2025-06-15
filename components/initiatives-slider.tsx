"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Calendar,
  MessageSquare,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

const initiatives = [
  {
    id: 1,
    title: "AI for All: Empowering Seniors",
    description:
      "A digital literacy and inclusion program helping older adults (60+) confidently engage with everyday AI through hands-on workshops and community partnerships.",
    icon: Users,
    image: "/ai_for_all_empowering_seniors.jpg",
    color: "from-[#00C4A7] to-[#00C4A7]/80",
  },
  {
    id: 2,
    title: "Ottawa Responsible AI Summit",
    description:
      "Our flagship annual event bringing together policymakers, developers, academics, and community voices to explore the future of ethical AI in Canada.",
    icon: Calendar,
    image: "/ai_with_intent_conference.jpg",
    color: "from-[#003366] to-[#003366]/80",
  },
  {
    id: 3,
    title: "Ottawa Responsible AI Talks (ORAT)",
    description:
      "Quarterly meetups fostering cross-sector dialogue between researchers, developers, policymakers, and community members on responsible AI developments.",
    icon: MessageSquare,
    image: "/orat.jpg",
    color: "from-[#00C4A7] to-[#003366]",
  },
  {
    id: 4,
    title: "Youth AI Changemakers",
    description:
      "A civic innovation fellowship for students and young adults passionate about using AI for public good, launching Spring 2026.",
    icon: GraduationCap,
    image: "/ai_youth_changer.jpg",
    color: "from-[#003366] to-[#00C4A7]",
  },
  {
    id: 5,
    title: "Responsible AI Research & Governance Collective",
    description:
      "A collaborative platform for researchers and practitioners to publish, co-design, and pilot responsible AI frameworks with real-world impact.",
    icon: BookOpen,
    image: "/research.jpg",
    color: "from-[#00C4A7]/80 to-[#003366]",
  },
]

export default function InitiativesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % initiatives.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % initiatives.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#003366]/20 to-[#00C4A7]/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/10 text-[#00C4A7] rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Our Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">Our Initiatives</h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship programs driving responsible AI innovation across Ottawa and beyond
          </p>
        </motion.div>

        {/* Main Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Content */}
          <div className="relative h-[600px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={initiatives[currentSlide].image || "/placeholder.svg"}
                    alt={initiatives[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${initiatives[currentSlide].color} opacity-90`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row">
                  {/* Left Side - Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center text-white">
                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-2xl font-bold mb-6"
                    >
                      {initiatives[currentSlide].id}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                    >
                      {initiatives[currentSlide].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                    >
                      {initiatives[currentSlide].description}
                    </motion.p>

                    {/* Read More Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Link href="/programs">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right Side - Icon */}
                  <div className="hidden lg:flex flex-1 items-center justify-center p-12">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                      className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      {React.createElement(initiatives[currentSlide].icon, { className: "w-24 h-24 text-white" })}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1/2 top-4 transform -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20 rotate-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20 rotate-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {initiatives.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#00C4A7] text-white scale-110"
                  : "bg-white text-[#003366] hover:bg-gray-100 border-2 border-gray-200"
              }`}
            >
              <span className="font-bold">{index + 1}</span>
              {index === currentSlide && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full border-2 border-white/50"
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="mt-6 max-w-md mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#00C4A7] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / initiatives.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Initiative {currentSlide + 1}</span>
            <span>{initiatives.length} Total</span>
          </div>
        </div> */}
      </div>
    </section>
  )
}
