"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Target,
  Users,
  Lightbulb,
  Globe,
  Shield,
  Eye,
  Heart,
  Zap,
  CheckCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function TheoryCard({
  title,
  subtitle,
  items,
  icon: Icon,
  color,
  hasImage = false,
  image = "",
}: {
  title: string
  subtitle: string
  items: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
  hasImage?: boolean
  image?: string
}) {
  return (
    <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-[#003366]">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>

      {hasImage && (
        <div className="mb-6">
          <img
            src={`${image}`}
            alt={`${title} illustration`}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      )}

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-[#00C4A7] rounded-full mt-2 mr-3 flex-shrink-0" />
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function CommitmentCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-lg font-bold text-[#003366] mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  )
}

export default function TheoryOfChangePage() {
  const inputs = [
    "Skilled facilitators, mentors, and conference speakers (academia, tech industry, policymakers)",
    "Funding for hackathons, innovation mini-grants, and the annual conference",
    "Partnerships with universities, civic tech groups, nonprofits, and tech hubs",
    "Open-source tools, ethical AI resources, and innovation toolkits",
    "Accessible community spaces for hackathons, workshops, and the conference",
  ]

  const activities = [
    "Organize regular Responsible AI Hackathons across Ottawa",
    "Host training workshops on AI ethics, design thinking, and tech for good",
    "Facilitate cross-sector research collaborations between academia, startups, and civic organizations",
    "Launch an open innovation platform for responsible AI projects",
    "Provide seed funding, mentorship, and visibility to promising innovators",
    "Advocate for policy frameworks supporting responsible AI development",
    'Host an annual flagship conference ("AI With Intent: Governing Intelligence for Public Good")',
  ]

  const outputs = [
    "10+ hackathons held annually",
    "500+ responsible tech projects and prototypes developed over 10 years",
    "100+ responsible AI practitioners trained per year",
    "50+ collaborations formed between researchers, developers, and civic groups",
    "1 high-impact annual conference uniting 300+ participants yearly across sectors",
    "A publicly accessible Responsible AI Innovation Directory to showcase Ottawa-grown projects",
  ]

  const outcomes = [
    "Growth of a vibrant community of responsible AI innovators",
    "Increase in AI solutions aligned with fairness, transparency, inclusivity",
    "Strengthened partnerships between tech developers, civic groups, academia, and government",
    "Elevated public dialogue and trust around responsible AI through the yearly conference",
    "Increased access to ethical AI resources and networks for Ottawa-based innovators",
  ]

  const impacts = [
    "Ottawa becomes internationally recognized as a hub for ethical and responsible AI innovation",
    "AI technologies developed locally serve as models for public good globally",
    "Communities experience increased protection, empowerment, and benefits from AI systems designed with integrity and public interest",
  ]

  const commitments = [
    {
      title: "Collaboration",
      subtitle: "Bringing together diverse voices",
      description:
        "We foster partnerships across Ottawa's vibrant research institutions, government bodies, technology companies, and civil society, ensuring that a broad range of perspectives — especially those often underrepresented — shape the future of AI.",
      icon: Users,
    },
    {
      title: "Transparency",
      subtitle: "Open practices",
      description:
        "We champion openness in AI development and governance, promoting clear communication, accessible decision-making, and visibility into how AI systems are built, deployed, and evaluated.",
      icon: Eye,
    },
    {
      title: "Inclusivity",
      subtitle: "Serving all communities, not just elites",
      description:
        "We are committed to ensuring that the benefits of AI reach everyone — including Indigenous peoples, newcomers, youth, and marginalized groups — leaving no one behind in the digital transformation.",
      icon: Heart,
    },
    {
      title: "Accountability",
      subtitle: "Responsibility for impacts",
      description:
        "We believe that organizations and developers must take full responsibility for the social, ethical, and environmental impacts of the AI systems they create and must address unintended harms with integrity and urgency.",
      icon: Shield,
    },
    {
      title: "Focus on Public Good",
      subtitle: "Aligning with Ottawa's civic values",
      description:
        "We prioritize initiatives that strengthen public trust, protect human rights, and contribute to a safer, more just, and more equitable society — reflecting Ottawa's tradition of civic leadership and service to the community.",
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-[80vh] bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#003366] via-[#003366]/95 to-[#003366]/90 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C4A7]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C4A7]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00C4A7]/20 rounded-full animate-spin"
            style={{ animationDuration: "60s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/20 rounded-full border border-[#00C4A7]/30 mb-8">
              <Target className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Our Framework</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Theory of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C4A7] to-[#00C4A7]/80">
                Change
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We believe that by fostering inclusive collaboration, ethical innovation practices, high-visibility
              platforms, and community engagement, we can accelerate the development of responsible AI solutions that
              advance public good in Ottawa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Theory Framework */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">Our Framework</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive approach to building responsible AI solutions through strategic inputs, activities, and
                measurable outcomes
              </p>
            </motion.div>

            {/* Framework Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <TheoryCard
                title="Inputs"
                subtitle="What we invest"
                items={inputs}
                icon={Zap}
                color="bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80"
                hasImage={true}
                image="/Input.jpg" // Placeholder for an illustrative image
              />
              <TheoryCard
                title="Activities"
                subtitle="What we will do"
                items={activities}
                icon={Lightbulb}
                color="bg-gradient-to-br from-[#003366] to-[#003366]/80"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <TheoryCard
                title="Outputs"
                subtitle="What we produce"
                items={outputs}
                icon={CheckCircle}
                color="bg-gradient-to-br from-[#00C4A7] to-[#003366]"
                hasImage={true}
                image="/Outputs.jpg"  
              />
              <TheoryCard
                title="Outcomes"
                subtitle="Short to Medium-Term Change"
                items={outcomes}
                icon={TrendingUp}
                color="bg-gradient-to-br from-[#003366] to-[#00C4A7]"
              />
            </div>

            {/* Impact Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#003366] to-[#003366]/90 rounded-3xl p-8 lg:p-12 text-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Impact</h3>
                  <p className="text-gray-200">Long-Term Change</p>
                </div>
              </div>
              <ul className="space-y-4">
                {impacts.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#00C4A7] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-100 leading-relaxed text-lg">{impact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Guiding Principle */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-8">Our Guiding Principle</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  At the Ottawa Responsible AI Hub, we are grounded in the belief that artificial intelligence must be
                  developed and governed in ways that uphold the rights, values, and wellbeing of all people in our
                  city, our country, and our world. As Canada&apos;s capital and a growing global technology center, Ottawa
                  has a unique role to play in leading the responsible advancement of AI.
                </p>
                <p>
                  We are committed to fostering a future where AI systems are transparent, inclusive, equitable, and
                  trustworthy — reflecting the democratic principles, diversity, and spirit of innovation that define
                  both Ottawa and Canada as a whole.
                </p>
                <p>
                  Through collaboration, education, research, and advocacy, the Ottawa Responsible AI Hub seeks to
                  ensure that AI technologies serve the public good, enhance social trust, and strengthen the
                  communities we call home.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-6">Our Core Commitments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our work is guided by five key commitments that form the foundation of all our initiatives
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <CommitmentCard
                  key={index}
                  title={`${commitment.title} (${commitment.subtitle})`}
                  description={commitment.description}
                  icon={commitment.icon}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">In Everything We Do</h2>
              <p className="text-2xl lg:text-3xl font-light text-[#00C4A7] leading-relaxed">
                AI must be governed with intention, built with care, and deployed for the benefit of all.
              </p>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                This principle guides our every action, conversation, and collaboration, ensuring that Ottawa leads by
                example in building a future where technology empowers all people.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
