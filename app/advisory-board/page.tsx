"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Users, Award } from "lucide-react"
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
    name: "Somto Mbelu, PMP",
    title: "Founder and Program Lead",
    organization: "Ottawa Responsible AI Hub (ORAH)",
    bio: "Somto works at the intersection of AI ethics, policy, digital health, governance, compliance, risk, finance, and business—bridging research and practice to shape technology that serves society. His focus is making AI fair, accountable, and inclusive, translating these principles into governance frameworks, policy strategies, and responsible design.",
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
    bio: "Kendra is passionate about ensuring AI development includes diverse community voices. She has worked extensively with marginalized communities to center their perspectives in technology policy and innovation.",
    image: "/kendra.jpeg",
    linkedin: "https://www.linkedin.com/in/kendra-cooke-0bba581/",
    expertise: ["Community Engagement", "Equity", "Accessibility", "Civic Tech"],
  },
  {
    id: 4,
    name: "Oluwadara (Dara) Adekunle",
    title: "Advisory Board Member",
    organization: "Farmties Capital Limited",
    bio: "Oluwadara Adekunle (Dara) is an entrepreneur and development professional with over 10 years of experience. She is the founder of Farmties Capital Limited, an innovative investment firm dedicated to empowering high-growth Small and Medium Enterprises (SMEs) in the agricultural sector by providing innovative capital, market access, and tailored financial solutions that enable these SMEs to expand, innovate, and thrive in global markets.",
    image: "/dara.jpeg",
    linkedin: "https://www.linkedin.com/in/darakunle/",
    expertise: ["AI Transparency", "Entrepreneurship", "Technical Implementation", "Enterprise AI"],
  },
  {
    id: 5,
    name: "Luc Lalande",
    title: "Innovator-in-Residence",
    organization: "Rideau-Rockcliffe Community Resource Centre",
    bio: "Luc Lalande is an educator, mentor, community innovation practitioner and civic entrepreneur with extensive experience in academic-industry-government sectors. He specializes in the design of place-based programs that build innovation capacity for communities in both rural and urban regions. As Innovator-in-Residence at the Rideau-Rockcliffe Community Resource Centre he has introduced award-winning use cases for creatively applying generative AI tools in the centre's program for seniors.",
    image: "/luc-lalande.jpeg",
    linkedin: "https://www.linkedin.com/in/luclalande/",
    expertise: ["Privacy Preservation", "Federated Learning", "Data Security", "Research"],
  },
  {
    id: 6,
    name: "Ruth Bankey",
    title: "Senior Advisor Artificial Intelligence and Business Intelligence",
    organization: "Canada Revenue Agency (CRA)",
    bio: "Dr. Bankey has been a board member and chair of a variety of Boards of Directors for Civil Society Organizations (CSOs), nonprofits, and environmental NGOs since 2004. She currently serves as an Advisory Board Member of the Ottawa Responsible AI Hub (ORAH).",
    image: "/ruth.png",
    linkedin: "https://www.linkedin.com/in/ruth-bankey-3b552220",
    expertise: ["AI Governance", "Business Intelligence", "Board Leadership", "Environmental NGOs"],
  },
  {
    id: 7,
    name: "Prof. Adegboyega Ojo",
    title: "Professor",
    organization: "Carleton University",
    bio: "Adegboyega is a Full Professor and Canada Research Chair in the Governance and AI at the School of Public Policy and Administration, Faculty of Public Affairs, Carleton University, Ottawa ON, Canada",
    image: "/ojo.jpeg",
    linkedin: "https://linkedin.com/in/adegboyegaojo",
    expertise: ["Machine Learning", "Education", "Curriculum Design", "Technical Standards"],
  },
//   {
//     id: 7,
//     name: "Elena Rodriguez",
//     title: "Communications Strategist",
//     organization: "ORAH Communications",
//     bio: "Elena develops communication strategies that make complex AI ethics concepts accessible to broad audiences. She brings creative expertise in narrative-building and public engagement.",
//     image: "/placeholder.svg?height=400&width=400&text=Elena+Rodriguez",
//     linkedin: "https://linkedin.com",
//     expertise: ["Communications", "Public Engagement", "Narrative", "Storytelling"],
//   },
//   {
//     id: 8,
//     name: "Thomas Wright",
//     title: "Government Relations Lead",
//     organization: "Federal Innovation Office",
//     bio: "Thomas bridges government and civil society perspectives on responsible AI. His experience in federal policy and innovation programs brings crucial insights on institutional change.",
//     image: "/placeholder.svg?height=400&width=400&text=Thomas+Wright",
//     linkedin: "https://linkedin.com",
//     expertise: ["Government Policy", "Innovation", "Institutional Change", "Public Sector"],
//   },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// }

function AdvisoryCard({ member, index }: { member: AdvisoryMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#00C4A7]/10 to-[#003366]/10">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="p-6 lg:p-8">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-[#003366] mb-1">{member.name}</h3>
          <p className="text-[#00C4A7] font-semibold">{member.title}</p>
          <p className="text-sm text-gray-600">{member.organization}</p>
        </div>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">{member.bio}</p>

        {/* Expertise Tags */}
        {/* <div className="flex flex-wrap gap-2 mb-6">
          {member.expertise.map((exp, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#00C4A7]/10 text-[#00C4A7] text-xs font-medium rounded-full border border-[#00C4A7]/20"
            >
              {exp}
            </span>
          ))}
        </div> */}

        {/* LinkedIn Link */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#0A66C2]/90 transition-colors"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </motion.div>
  )
}

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
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

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/20 rounded-full border border-[#00C4A7]/30 mb-8">
              <Award className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Leadership</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Advisory Board</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet the leaders, researchers, and practitioners guiding ORAH&apos;s mission to advance responsible
              AI in Ottawa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-6">Diverse Expertise, Shared Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our advisory board brings together thought leaders from academia, industry, government, and civil society.
              With backgrounds spanning AI ethics, policy, community engagement, and technical innovation, they guide
              ORAH&apos;s strategic direction and ensure our work reflects the values of responsible AI development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advisoryMembers.map((member, index) => (
              <AdvisoryCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#003366]/5 to-[#00C4A7]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-8 text-center">
              Guiding Our Mission Forward
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Strategic Direction</h3>
                <p className="text-gray-700">
                  Advisory members shape ORAH&apos;s priorities, ensuring our initiatives address the most pressing
                  challenges in responsible AI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Community Bridge</h3>
                <p className="text-gray-700">
                  They connect ORAH to diverse networks across academia, industry, government, and civil society.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C4A7] to-[#00C4A7]/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">Expert Guidance</h3>
                <p className="text-gray-700">
                  Their knowledge and experience ensure ORAH&apos;s work is grounded in the latest research and best
                  practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#003366] to-[#003366]/90 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6 text-[#00C4A7]" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in becoming part of ORAH&apos;s mission? Whether you want to volunteer, sponsor an event, or
              collaborate on research, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-colors"
              >
                Get Involved
              </Link>
              <a
                href="https://www.linkedin.com/company/ottawa-responsible-ai-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Follow Our LinkedIn
                <Linkedin className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
