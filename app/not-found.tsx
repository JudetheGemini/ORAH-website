"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft, HelpCircle, Mail, Compass } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  const quickLinks = [
    {
      title: "Home",
      description: "Return to our homepage",
      href: "/",
      icon: Home,
    },
    {
      title: "About Us",
      description: "Learn about ORAH's mission",
      href: "/about",
      icon: HelpCircle,
    },
    {
      title: "Events",
      description: "View upcoming events",
      href: "/events",
      icon: Compass,
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      href: "/#contact",
      icon: Mail,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              initial={{
                width: Math.random() * 10 + 2 + "px",
                height: Math.random() * 10 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block"
            >
              <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-white">
                404
              </h1>
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed">
              Oops! It seems this page got lost in the AI ethics matrix.
            </p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </motion.button>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-all duration-300 shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Maybe you&apos;re looking for...</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#00C4A7] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{link.title}</h4>
                  <p className="text-sm text-gray-300">{link.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center my-16 pt-12 border-t border-white/20"
        >
          <p className="text-gray-300 mb-4">Still can&apos;t find what you&apos;re looking for?</p>
          <a
            href="mailto:hello@responsibleaiottawa.ca"
            className="inline-flex items-center text-[#00C4A7] hover:text-[#00C4A7]/80 font-medium transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact our team for help
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#00C4A7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#00C4A7]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  )
}
