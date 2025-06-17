"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export interface EventData {
  id: string
  title: string
  subtitle?: string
  description: string
  date: string
  time?: string
  location: string
  venue?: string
  website?: string
  registrationUrl?: string
  image?: string
  status: "upcoming" | "ongoing" | "past"
  featured?: boolean
  tags?: string[]
}

interface EventCardProps {
  event: EventData
  variant?: "default" | "featured" | "compact"
}

export default function EventCard({ event, variant = "default" }: EventCardProps) {
  const isFeatured = variant === "featured" || event.featured
  const isCompact = variant === "compact"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Background Image or Gradient */}
      <div className="absolute inset-0">
        {event.image ? (
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#003366] via-[#003366]/95 to-[#00C4A7]/80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
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

      {/* Content */}
      <div
        className={`relative z-10 p-6 lg:p-8 text-white h-full flex flex-col ${isCompact ? "min-h-[300px]" : "min-h-[400px]"}`}
      >
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              event.status === "upcoming"
                ? "bg-[#00C4A7]/20 text-[#00C4A7] border border-[#00C4A7]/30"
                : event.status === "ongoing"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
            }`}
          >
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          {isFeatured && (
            <span className="px-3 py-1 bg-[#00C4A7]/20 text-[#00C4A7] border border-[#00C4A7]/30 rounded-full text-xs font-medium">
              Featured Event
            </span>
          )}
        </div>

        {/* Event Title */}
        <div className="mb-4">
          <h3
            className={`font-bold text-white leading-tight mb-2 ${isFeatured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"}`}
          >
            {event.title}
          </h3>
          {event.subtitle && (
            <p className={`text-[#00C4A7] font-medium ${isFeatured ? "text-lg" : "text-base"}`}>{event.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className={`text-gray-200 leading-relaxed mb-6 flex-grow ${isFeatured ? "text-lg" : "text-base"}`}>
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-200">
            <Calendar className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
            <span className="font-medium">{event.date}</span>
            {event.time && <span className="ml-2 text-gray-300">• {event.time}</span>}
          </div>
          <div className="flex items-center text-gray-200">
            <MapPin className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
            <span>{event.location}</span>
            {event.venue && <span className="ml-2 text-gray-300">• {event.venue}</span>}
          </div>
          {event.website && (
            <div className="flex items-center text-gray-200">
              <Globe className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00C4A7] transition-colors underline"
              >
                {event.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {event.registrationUrl && (
            <Link href={event.registrationUrl}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-colors"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
