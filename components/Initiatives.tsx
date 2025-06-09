"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, Users, Lightbulb, GraduationCap, BookOpen } from "lucide-react"

const initiatives = [
  {
    id: "ai-for-all",
    title: "AI for All: Empowering Seniors",
    description:
      "A digital literacy and inclusion program that helps older adults (60+) confidently engage with everyday AI—from smart health apps to voice assistants. Through hands-on workshops, hybrid learning, and trusted community partnerships, we're ensuring no one is left behind in Canada's digital future.",
    icon: Users,
    image: "/placeholder.svg?height=400&width=600",
    status: "Active",
  },
  {
    id: "ai-with-intent",
    title: "AI With Intent Conference",
    description:
      "Our annual anchor event convening policymakers, developers, academics, civic leaders, and community voices to explore the future of ethical AI. Held in Ottawa, this conference is a space to share, question, and co-create a more accountable AI ecosystem in Canada and beyond.",
    icon: Calendar,
    image: "/placeholder.svg?height=400&width=600",
    status: "Annual Event",
  },
  {
    id: "orat",
    title: "Ottawa Responsible AI Talks (ORAT)",
    description:
      "Our quarterly meetups bring together researchers, developers, policymakers, students, and community members to share ideas, present ongoing work, and discuss the latest developments in responsible AI. From algorithmic transparency to inclusive design, ORAT creates a welcoming space for cross-sector dialogue.",
    icon: Lightbulb,
    image: "/placeholder.svg?height=400&width=600",
    status: "Quarterly",
  },
  {
    id: "youth-changemakers",
    title: "Youth AI Changemakers",
    description:
      "A civic innovation fellowship for students and young adults passionate about using AI for public good. Participants work in teams to explore responsible AI principles, design local solutions, and pitch to real-world mentors.",
    icon: GraduationCap,
    image: "/placeholder.svg?height=400&width=600",
    status: "Launching Spring 2026",
  },
  {
    id: "research-collective",
    title: "Responsible AI Research & Governance Collective",
    description:
      "A collaborative platform for researchers, students, and practitioners to publish, co-design, and pilot responsible AI frameworks with real-world impact. This initiative fosters open science, interdisciplinary dialogue, and community-informed governance.",
    icon: BookOpen,
    image: "/placeholder.svg?height=400&width=600",
    status: "Coming Soon",
  },
]

function InitiativeCard({ initiative, index }: { initiative: (typeof initiatives)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`min-h-screen flex items-center justify-center px-4 py-12 md:py-0 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"}`}
        >
          {/* Content */}
          <motion.div
            className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-[#00C4A7] text-white">
                <initiative.icon className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 text-sm font-medium text-[#003366] bg-[#00C4A7]/10 rounded-full">
                {initiative.status}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] leading-tight">{initiative.title}</h2>

            <p className="text-lg text-gray-600 leading-relaxed">{initiative.description}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C4A7]/20 to-[#003366]/20 rounded-2xl transform rotate-3"></div>
              <img
                src={initiative.image || "/placeholder.svg"}
                alt={initiative.title}
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#00C4A7] origin-left z-50" style={{ scaleX }} />
}

export default function ORAHInitiatives() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setActiveSection(Math.min(section, initiatives.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative font-inter">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#003366]/80 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-inter font-bold"
          >
            Our Initiatives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg lg:text-2xl font-inter
             text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            At the Ottawa Responsible AI Hub (ORAH), we believe ethical AI should be inclusive, transparent, and
            accessible to all. Our flagship initiatives reflect that mission—turning responsible AI from theory into
            real, community-driven action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-16 h-1 bg-[#00C4A7] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      {initiatives.map((initiative, index) => (
        <InitiativeCard key={initiative.id} initiative={initiative} index={index} />
      ))}

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3 z-40">
        {initiatives.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              window.scrollTo({
                top: (index + 1) * window.innerHeight,
                behavior: "smooth",
              })
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index ? "bg-[#00C4A7] scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
