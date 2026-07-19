"use client"

import { motion } from "framer-motion"
import { Linkedin, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

interface AdvisoryMember {
  id: number
  name: string
  title: string
  organization: string
  bio: string
  image: string
  linkedin: string
  expertise: string[]
}

const advisoryMembers: AdvisoryMember[] = [
  {
    id: 1,
    name: "Somto Mbelu, PhD, PMP",
    title: "Founder & Program Lead",
    organization: "Ottawa Responsible AI Hub (ORAH)",
    bio: "Somto works at the intersection of AI ethics, policy, digital health, governance, compliance, risk, finance, and business, bridging research and practice to shape technology that serves society.",
    image: "/somto.jpeg",
    linkedin: "https://www.linkedin.com/in/somto-mbelu/",
    expertise: ["AI Ethics", "Algorithmic Fairness", "Healthcare AI", "Research"],
  },
  {
    id: 2,
    name: "Jake Effoduh, PhD",
    title: "Advisory Board Member",
    organization: "Lincoln Alexander School of Law",
    bio: "Experienced lawyer with expertise in human rights, tech, and artificial intelligence. Demonstrated history of working across various national, regional, and international institutions.",
    image: "jake.jpeg",
    linkedin: "https://www.linkedin.com/in/effoduh/",
    expertise: ["AI Policy", "Digital Rights", "Governance", "Advocacy"],
  },
  {
    id: 3,
    name: "Kendra Cooke",
    title: "Advisory Board Member",
    organization: "SYPartners",
    bio: "Kendra is passionate about ensuring AI development includes diverse community voices. She has worked with marginalized communities to center their perspectives in technology, policy and innovation.",
    image: "/kendra.jpeg",
    linkedin: "https://www.linkedin.com/in/kendra-cooke-0bba581/",
    expertise: ["Community Engagement", "Equity", "Accessibility", "Civic Tech"],
  },
  {
    id: 4,
    name: "Oluwadara Adekunle",
    title: "Advisory Board Member",
    organization: "Farmties Capital Limited",
    bio: "An entrepreneur and development professional with over 10 years of experience. Founder of Farmties Capital Limited, an innovative investment firm dedicated to empowering high-growth SMEs.",
    image: "/dara.jpeg",
    linkedin: "https://www.linkedin.com/in/darakunle/",
    expertise: ["AI Transparency", "Entrepreneurship", "Enterprise AI"],
  },
  {
    id: 5,
    name: "Luc Lalande",
    title: "Innovator-in-Residence",
    organization: "Rideau-Rockcliffe Community Resource Centre",
    bio: "An educator, mentor, community innovation practitioner and civic entrepreneur with extensive experience across academic-industry-government sectors, specializing in place-based programs that build innovation capacity.",
    image: "/luc-lalande.jpeg",
    linkedin: "https://www.linkedin.com/in/luclalande/",
    expertise: ["Community Innovation", "Civic Entrepreneurship", "Education"],
  },
  {
    id: 6,
    name: "Ruth Bankey",
    title: "Senior Advisor, AI & Business Intelligence",
    organization: "Canada Revenue Agency (CRA)",
    bio: "Board member and chair of a variety of Boards of Directors for Civil Society Organizations, nonprofits, and environmental NGOs since 2004. Currently serves as an Advisory Board Member of ORAH.",
    image: "/ruth.png",
    linkedin: "https://www.linkedin.com/in/ruth-bankey-3b552220",
    expertise: ["AI Governance", "Business Intelligence", "Board Leadership"],
  },
  {
    id: 7,
    name: "Prof. Adegboyega Ojo",
    title: "Professor & Canada Research Chair",
    organization: "Carleton University",
    bio: "Full Professor and Canada Research Chair in the Governance and AI at the School of Public Policy and Administration, Faculty of Public Affairs, Carleton University, Ottawa.",
    image: "/ojo.jpeg",
    linkedin: "https://linkedin.com/in/adegboyegaojo",
    expertise: ["AI Governance", "Public Policy", "Research"],
  },
  {
    id: 8,
    name: "Lori Stanley",
    title: "Advisory Board Member",
    organization: "Lori Stanley Nonprofit Consulting",
    bio: "Founder of Lori Stanley Nonprofit Consulting, working with global, national, and local nonprofit organizations across the public and private sectors. Deep experience in strategic planning and ethical leadership.",
    image: "/lori.jpg",
    linkedin: "https://www.linkedin.com/in/loristanleynonprofitconsulting/",
    expertise: ["Nonprofit Strategy", "Community Engagement", "AI"],
  },
]

function MemberCard({ member, index }: { member: AdvisoryMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/25 transition-all duration-300 overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#00C4A7]/10 to-[#003366]/10">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* LinkedIn badge on photo */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-[#003366] leading-snug">{member.name}</h3>
          <p className="text-sm font-semibold text-[#00C4A7]">{member.title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{member.organization}</p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#00C4A7]/8 text-[#00C4A7] border border-[#00C4A7]/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] to-[#004e99]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
              <Award className="w-4 h-4 text-[#00C4A7]" />
              <span className="text-sm font-medium text-white/90">Leadership</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Advisory Board
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              Meet the leaders, researchers, and practitioners guiding ORAH&apos;s mission to advance responsible AI in Ottawa and beyond. Our board brings together expertise from academia, industry, government, and civil society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Member Grid ──────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">The Team</p>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="text-4xl font-bold text-[#003366]">
                {advisoryMembers.length} Members
              </h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {advisoryMembers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#003366] to-[#004e99] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00C4A7_0%,_transparent_55%)] opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">Get Involved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Join Our Community
            </h2>
            <p className="text-xl text-white/65 leading-relaxed">
              Interested in becoming part of ORAH&apos;s mission? Whether you want to volunteer, sponsor an event, or collaborate on research, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link href="/#contact">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 transition-all duration-300">
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a
                href="https://www.linkedin.com/company/ottawa-responsible-ai-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
