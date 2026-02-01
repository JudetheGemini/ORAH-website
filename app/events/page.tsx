"use client"

import { motion } from "framer-motion"
import { Calendar, Filter, Search } from "lucide-react"
import { useState } from "react"
import EventCard, { type EventData } from "@/components/event-card"
// import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Events - Ottawa Responsible AI Hub",
//   description: "Join ORAH's workshops, conferences, and community gatherings focused on responsible AI practices and education in Ottawa.",
//   openGraph: {
//     title: "Events - Ottawa Responsible AI Hub",
//     description: "Join ORAH's workshops, conferences, and community gatherings focused on responsible AI practices and education in Ottawa.",
//   },
// }

// Sample events data - this would typically come from a CMS or API
const eventsData: EventData[] = [
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
    image: "/gfr.jpg", // Placeholder - replace with actual event image
    status: "upcoming",
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
    image: "/summit.jpg", // Placeholder - replace with actual event image
    status: "past",
    featured: true,
    tags: ["ORAS", "Governance", "AI", "Impact", "Discussion"],
  },
  {
    id: "orat-sept-2025",
    title: "Ottawa Responsible AI Talks",
    subtitle: "Responsible AI in Practice: Community Voices, Meaningful Impact",
    description:
      "Join us for an engaging discussion on how responsible AI practices are being implemented in real-world scenarios, featuring community voices and exploring meaningful impact across various sectors.",
    date: "Thursday, September 4th, 2025",
    time: "5:00 PM - 7:30 PM EST",
    location: "Ottawa, Canada",
    venue: "Rideau-Rockcliffe Community Resource Centre (815 St. Laurent Blvd)",
    host: "Oluwadara Adekunle, Board Member Ottawa Responsible AI Hub/CEO Farmties",
    website: "https://talks.responsibleaiottawa.ca",
    registrationUrl: "https://www.eventbrite.com/e/ottawa-responsible-ai-talks-tickets-1519890125279?aff=oddtdtcreator",
    image: "/oratposter.jpg",
    status: "past",
    featured: true,
    tags: ["ORAT", "Community", "Practice", "Impact", "Discussion"],
  }
]

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = eventsData.filter((event) => {
    const matchesFilter = filter === "all" || event.status === filter
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const featuredEvents = filteredEvents.filter((event) => event.featured)
  const regularEvents = filteredEvents.filter((event) => !event.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white overflow-hidden">
        {/* Background Pattern */}
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

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4A7]/20 rounded-full border border-[#00C4A7]/30 mb-8">
              <Calendar className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Events & Programs</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, conferences, and community gatherings as we build the future of responsible AI
              together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00C4A7] focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              {["all", "upcoming", "past"].map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption as "all" | "upcoming" | "past")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === filterOption ? "bg-[#00C4A7] text-white" : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[#003366] mb-12 text-center"
            >
              Featured Events
            </motion.h2>
            <div className="grid gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Events */}
      {regularEvents.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[#003366] mb-12 text-center"
            >
              All Events
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Events Message */}
      {filteredEvents.length === 0 && (
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">
              {searchTerm ? "Try adjusting your search terms" : "Check back soon for upcoming events"}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
