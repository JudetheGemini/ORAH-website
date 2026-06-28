"use client"

import { motion } from "framer-motion"
import { Calendar, Bell, Linkedin } from "lucide-react"
import { useState } from "react"
import EventCard, { type EventData } from "@/components/event-card"

const eventsData: EventData[] = [
  {
    id: "ai-for-all-seniors-2026",
    title: "AI for All: Seniors AI Literacy Program",
    subtitle: "Bridging Generations Through Digital Inclusion",
    description:
      "ORAH partnered with The Glebe Centre – Abbotsford Community Programs to deliver AI literacy workshops for Ottawa seniors, covering digital tools, scam detection, and online safety through intergenerational learning.",
    date: "May – June 2026",
    time: "",
    location: "Ottawa, Canada",
    venue: "The Glebe Centre – Abbotsford Community Programs, Ottawa",
    host: "",
    website: "",
    registrationUrl: "",
    image: "/ai_youth_changer.jpg",
    status: "past",
    featured: false,
    tags: ["SeniorsAI", "CommunityAI", "DigitalInclusion"],
  },
  {
    id: "gfr-march-2026",
    title: "Global Forum for Responsible AI",
    subtitle: "Designing Adaptable Responsible AI Frameworks Grounded in Data Justice",
    description:
      "The event strengthens international cooperation through dialogue, knowledge exchange, and collaborative action to ensure AI technologies support societal well-being, uphold human rights, and serve the public interest.",
    date: "March, 2026",
    time: "TBA",
    location: "Den Haag, Netherlands",
    venue: "The Hague",
    host: "TBA",
    website: "https://forum.responsibleaiottawa.ca",
    registrationUrl: "https://luma.com/event/evt-7MCoAs4d57jmGFu",
    image: "/gfr.jpg",
    status: "past",
    featured: true,
    tags: ["GFR", "Governance", "AI", "Impact", "Discussion"],
  },
  {
    id: "orat-november-2025",
    title: "Ottawa Responsible AI Summit",
    subtitle: "Governing Data and AI for Equity and Public Good",
    description:
      "Our goal is to connect global expertise with local action, ensuring that the future of AI reflects fairness, transparency, and community impact.",
    date: "Wednesday, November 19th, 2025",
    time: "8:30 AM",
    location: "Ottawa, Canada",
    venue: "BayView Yards, Ottawa",
    host: "Gina Soparlo, Senior Advisor for International Relations, Mitacs",
    website: "https://summit.responsibleaiottawa.ca",
    registrationUrl: "https://luma.com/bu421tiw",
    image: "/summit.jpg",
    status: "past",
    featured: false,
    tags: ["ORAS", "Governance", "AI", "Impact", "Discussion"],
  },
  {
    id: "orat-sept-2025",
    title: "Ottawa Responsible AI Talks",
    subtitle: "Responsible AI in Practice: Community Voices, Meaningful Impact",
    description:
      "An engaging discussion on how responsible AI practices are being implemented in real-world scenarios, featuring community voices and exploring meaningful impact across various sectors.",
    date: "Thursday, September 4th, 2025",
    time: "5:00 PM - 7:30 PM EST",
    location: "Ottawa, Canada",
    venue: "Rideau-Rockcliffe Community Resource Centre (815 St. Laurent Blvd)",
    host: "Oluwadara Adekunle, Board Member Ottawa Responsible AI Hub / CEO Farmties",
    website: "https://talks.responsibleaiottawa.ca",
    registrationUrl: "https://www.eventbrite.com/e/ottawa-responsible-ai-talks-tickets-1519890125279?aff=oddtdtcreator",
    image: "/oratposter.jpg",
    status: "past",
    featured: false,
    tags: ["ORAT", "Community", "Practice", "Impact", "Discussion"],
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = eventsData.filter(
    (e) =>
      e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              <Calendar className="w-4 h-4 text-[#00C4A7]" />
              <span className="text-sm font-medium text-white/90">Events</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Our Events
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              From community workshops to international forums, ORAH brings together voices shaping the future of responsible AI. Browse our past events below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Coming Soon notice ───────────────────────────────── */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white border border-[#00C4A7]/25 rounded-2xl px-6 py-5"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00C4A7]/10 flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-[#00C4A7]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#003366] mb-0.5">New events coming soon</p>
              <p className="text-sm text-gray-500">Follow us on LinkedIn to be the first to know when our next event is announced.</p>
            </div>
            <a
              href="https://www.linkedin.com/company/ottawa-responsible-ai-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003366] text-white text-sm font-semibold rounded-xl hover:bg-[#00C4A7] transition-colors duration-300 flex-shrink-0"
            >
              <Linkedin className="w-4 h-4" />
              Follow Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Past Events ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Archive</p>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="text-4xl font-bold text-[#003366]">Past Events</h2>
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-[#00C4A7] focus:ring-2 focus:ring-[#00C4A7]/15 focus:outline-none w-full sm:w-64"
              />
            </div>
          </motion.div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <EventCard event={event} variant="compact" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-500">No events match your search</p>
              <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
