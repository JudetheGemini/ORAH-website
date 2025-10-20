"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Users, Lightbulb, Code } from "lucide-react"
import Image from "next/image"
// import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Vision */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 10 + 2 + "px",
                  height: Math.random() * 10 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={i + 100}
                className="absolute bg-white"
                style={{
                  width: Math.random() * 50 + 20 + "px",
                  height: "1px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.3 + 0.1,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ORAH</h1>
            <div className="w-24 h-1 bg-[#00C4A7] mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">Our Vision</h2>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              To make Ottawa a global leader in responsible AI development, governance, and advocacy.
            </p>
          </motion.div>
        </div>

        {/* Geometric Accent */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white transform -skew-y-3"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Mission Statement */}
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/10 text-[#00C4A7] rounded-full text-sm font-medium">
                  <Globe className="w-4 h-4 mr-2" />
                  Our Purpose
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Our Mission</h2>
                <div className="w-16 h-1 bg-[#00C4A7]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ORAH seeks to drive the future of ethical AI through education, advocacy, and cross-sector
                  collaboration to advance transparency, accountability, and policy while uniting a community committed
                  to responsible AI solutions and practices in the AI ecosystem.
                </p>
              </div>

              {/* Tech Graphic */}
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  {/* Animated Circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-[#00C4A7]/30"
                  ></motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      delay: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-8 rounded-full border-2 border-[#003366]/20"
                  ></motion.div>

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00C4A7] to-[#003366] flex items-center justify-center shadow-lg">
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  {[Users, Lightbulb, Code, Globe].map((Icon, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20 + index * 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{
                        transformOrigin: "center center",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        className="absolute bg-white p-3 rounded-full shadow-md"
                        style={{
                          transform: `translateX(${140}px) rotate(${-index * 90}deg)`,
                        }}
                      >
                        <Icon className="w-5 h-5 text-[#003366]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Initiative Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {[...Array(400)].map((_, i) => (
              <div
                key={i}
                className="border-[0.5px] border-[#003366]/10"
                style={{
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#003366]/10 text-[#003366] rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">About the Initiative</h2>
            <div className="w-16 h-1 bg-[#00C4A7] mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                AI is transforming innovation across sectors and everyday life but presents a pressing challenge in
                ethics, governance, privacy, and data protection. As adoption accelerates, embedding responsibility into
                AI development is no longer optional, it is essential to protect against potential harm while unlocking
                its full benefits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Ottawa Responsible AI Hub (ORAH), a non-profit initiative, provides a platform to advance dialogue,
                education, advocacy, and collaboration on responsible AI. By bringing together professionals,
                policymakers, researchers, civil society, and the public, ORAH is uniquely positioned to lead this
                movement by building a community committed to responsible AI.
              </p>
            </motion.div>

            {/* Tech Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative "
            >
              <div className="aspect-auto max-w-md mx-auto relative">
                <Image 
                  src="/newInitiative.jpg" 
                  alt="Tech visualization"
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover rounded-md"
                />
              
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Ottawa Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/10 text-[#00C4A7] rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Our Home
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">Why Ottawa?</h2>
            <div className="w-16 h-1 bg-[#00C4A7] mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00C4A7]/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#003366]/5 rounded-full -z-10"></div>

                {/* Image with overlay */}
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  {/* This is where the Ottawa image will go */}
                  <img
                    src="/ottawa-skyline2.jpg"
                    alt="Ottawa cityscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/40 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Ottawa is Canada&#39;s tech hub, home to over 1,700 technology companies, research institutions, and policy
                think tanks. The city&#39;s proximity to federal government bodies and institutions like the National
                Research Council (NRC), Shopify, and the University of Ottawa&#39;s AI + Society Initiative positions it
                uniquely to lead in responsible AI and digital ethics.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-4xl font-bold text-[#00C4A7]">1,700+</div>
                  <div className="text-sm text-gray-600 mt-2">Technology Companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-4xl font-bold text-[#00C4A7]">#1</div>
                  <div className="text-sm text-gray-600 mt-2">Policy Innovation Hub</div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white relative overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 10 + 2 + "px",
                  height: Math.random() * 10 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Join the Responsible AI Movement</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Be part of shaping the future of ethical AI in Ottawa and beyond. Connect with like-minded professionals,
              researchers, and advocates.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link target="_blank" href="https://join.slack.com/t/ottawarespons-ocm1166/shared_invite/zt-3dq79ru0n-9DVA_wJVCxNT74zC9NgG4g">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 mt-4 bg-white text-darkBlue font-semibold rounded-lg hover:bg-darkBlue/40 transition-colors"
              >
                Join Our Community
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
