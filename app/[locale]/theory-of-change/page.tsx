"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Target, Users, Lightbulb, Globe, Shield,
  Eye, Heart, Zap, CheckCircle, TrendingUp, Sparkles, ArrowDown,
} from "lucide-react"


const steps = [
  {
    number: "01",
    label: "Inputs",
    sublabel: "What we invest",
    icon: Zap,
    accent: "text-[#00C4A7]",
    image: "/Input.jpg",
    items: [
      "Skilled facilitators, mentors, and conference speakers (academia, tech industry, policymakers)",
      "Funding for hackathons, innovation mini-grants, and the annual conference",
      "Partnerships with universities, civic tech groups, nonprofits, and tech hubs",
      "Open-source tools, ethical AI resources, and innovation toolkits",
      "Accessible community spaces for hackathons, workshops, and the conference",
    ],
  },
  {
    number: "02",
    label: "Activities",
    sublabel: "What we do",
    icon: Lightbulb,
    accent: "text-[#003366]",
    image: null,
    items: [
      "Organize regular Responsible AI Hackathons across Ottawa",
      "Host training workshops on AI ethics, design thinking, and tech for good",
      "Facilitate cross-sector research collaborations between academia, startups, and civic organizations",
      "Launch an open innovation platform for responsible AI projects",
      "Provide seed funding, mentorship, and visibility to promising innovators",
      "Advocate for policy frameworks supporting responsible AI development",
      "Host our annual flagship conference to showcase innovations, promote dialogue, and strengthen partnerships",
    ],
  },
  {
    number: "03",
    label: "Outputs",
    sublabel: "What we produce",
    icon: CheckCircle,
    accent: "text-[#00C4A7]",
    image: "/Outputs.jpg",
    items: [
      "10+ hackathons held annually",
      "500+ responsible tech projects and prototypes developed over 10 years",
      "100+ responsible AI practitioners trained per year",
      "50+ collaborations formed between researchers, developers, and civic groups",
      "1 high-impact annual conference uniting 300+ participants yearly across sectors",
      "A publicly accessible Responsible AI Innovation Directory to showcase Ottawa-grown projects",
    ],
  },
  {
    number: "04",
    label: "Outcomes",
    sublabel: "Short to medium-term change",
    icon: TrendingUp,
    accent: "text-[#003366]",
    image: null,
    items: [
      "Growth of a vibrant community of responsible AI innovators",
      "Increase in AI solutions aligned with fairness, transparency, and inclusivity",
      "Strengthened partnerships between tech developers, civic groups, academia, and government",
      "Elevated public dialogue and trust around responsible AI through the yearly conference",
      "Increased access to ethical AI resources and networks for Ottawa-based innovators",
    ],
  },
]

const commitments = [
  {
    title: "Collaboration",
    description: "We foster partnerships across research institutions, government bodies, technology companies, and civil society, ensuring a broad range of perspectives shape the future of AI.",
    icon: Users,
  },
  {
    title: "Transparency",
    description: "We champion openness in AI development and governance, promoting clear communication, accessible decision-making, and visibility into how AI systems are built and evaluated.",
    icon: Eye,
  },
  {
    title: "Inclusivity",
    description: "We are committed to ensuring that the benefits of AI reach everyone, including Indigenous peoples, newcomers, youth, and marginalized groups, leaving no one behind.",
    icon: Heart,
  },
  {
    title: "Accountability",
    description: "We believe that organizations and developers must take full responsibility for the social, ethical, and environmental impacts of the AI systems they create.",
    icon: Shield,
  },
  {
    title: "Public Good",
    description: "We prioritize initiatives that strengthen public trust, protect human rights, and contribute to a safer, more just, and more equitable society.",
    icon: Globe,
  },
]

export default function TheoryOfChangePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <Target className="w-4 h-4 text-[#00C4A7]" />
              <span className="text-sm font-medium text-white/90">Our Framework</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Theory of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/70">
                Change
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              We believe that by fostering inclusive collaboration, ethical innovation practices, and community engagement, we can accelerate the development of responsible AI solutions that advance public good in Ottawa and beyond.
            </p>

            {/* Flow preview */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {["Inputs", "Activities", "Outputs", "Outcomes", "Impact"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${i === 4 ? "bg-[#00C4A7] text-white" : "bg-white/10 text-white/80"}`}>
                    {step}
                  </span>
                  {i < 4 && <span className="text-white/30 text-xs">→</span>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Framework Steps ───────────────────────────────────── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">The Model</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">Our Framework</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A strategic logic model connecting what we invest to the long-term change we seek.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 1
              return (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <div className={`grid ${step.image ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-0`}>

                      {/* Content */}
                      <div className={`p-8 lg:p-10 ${step.image && isEven ? "lg:order-2" : ""}`}>
                        <div className="flex items-start gap-5 mb-6">
                          <span className="text-5xl font-black text-gray-100 leading-none select-none flex-shrink-0">
                            {step.number}
                          </span>
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-[#003366]" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-[#003366]">{step.label}</h3>
                                <p className="text-sm text-gray-400 font-medium">{step.sublabel}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-3 ml-2">
                          {step.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] mt-2.5 flex-shrink-0" />
                              <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Image */}
                      {step.image && (
                        <div className={`relative min-h-[260px] lg:min-h-0 ${isEven ? "lg:order-1" : ""}`}>
                          <img
                            src={step.image}
                            alt={step.label}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-[#003366]/30" />
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="flex justify-center py-3">
                      <ArrowDown className="w-5 h-5 text-[#00C4A7]/60" />
                    </div>
                  )}
                </div>
              )
            })}

            {/* Arrow before Impact */}
            <div className="flex justify-center py-3">
              <ArrowDown className="w-5 h-5 text-[#00C4A7]/60" />
            </div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl p-8 lg:p-12 text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <span className="text-5xl font-black text-white/15 leading-none select-none">05</span>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00C4A7]/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#00C4A7]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Impact</h3>
                      <p className="text-sm text-white/50 font-medium">Long-term change</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 ml-2">
                  {[
                    "Ottawa becomes internationally recognized as a hub for ethical and responsible AI innovation",
                    "AI technologies developed locally serve as models for public good globally",
                    "Communities experience increased protection, empowerment, and benefits from AI systems designed with integrity and public interest",
                  ].map((impact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] mt-2.5 flex-shrink-0" />
                      <span className="text-white/80 leading-relaxed">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Guiding Principle ────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Foundation</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">Our Guiding Principle</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "At the Ottawa Responsible AI Hub, we are grounded in the belief that artificial intelligence must be developed and governed in ways that uphold the rights, values, and wellbeing of all people in our city, our country, and our world. As Canada's capital and a growing global technology center, Ottawa has a unique role to play in leading the responsible advancement of AI.",
              "We are committed to fostering a future where AI systems are transparent, inclusive, equitable, and trustworthy, reflecting the democratic principles, diversity, and spirit of innovation that define both Ottawa and Canada as a whole.",
              "Through collaboration, education, research, and advocacy, the Ottawa Responsible AI Hub seeks to ensure that AI technologies serve the public good, enhance social trust, and strengthen the communities we call home.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#00C4A7] pl-6 py-2 mt-8"
            >
              <p className="text-xl font-semibold text-[#003366] leading-relaxed italic">
                &ldquo;AI must be governed with intention, built with care, and deployed for the benefit of all.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Commitments ─────────────────────────────────── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">How We Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">Our Core Commitments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five principles that guide every initiative, partnership, and conversation at ORAH.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commitments.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center mb-5 group-hover:from-[#00C4A7]/25 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#003366]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#003366] mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Final Statement ───────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#003366] to-[#004e99] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00C4A7_0%,_transparent_55%)] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">In Everything We Do</p>
            <p className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              AI must be governed with intention, built with care, and deployed for the benefit of all.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              This principle guides our every action, conversation, and collaboration, ensuring that Ottawa leads by example in building a future where technology empowers all people.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
