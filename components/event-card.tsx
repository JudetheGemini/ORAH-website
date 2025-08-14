"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Globe, ArrowRight, Users } from "lucide-react"
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
  host?: string
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
      className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Image Section */}
      {event.image && (
        <div className={`relative overflow-hidden ${isFeatured ? "h-64 lg:h-80" : "h-48"}`}>
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Status Badge on Image */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                event.status === "upcoming"
                  ? "bg-[#00C4A7]/90 text-white"
                  : event.status === "ongoing"
                    ? "bg-green-500/90 text-white"
                    : "bg-gray-500/90 text-white"
              }`}
            >
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </span>
          </div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-[#00C4A7]/90 text-white backdrop-blur-sm rounded-full text-xs font-medium">
                Featured Event
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={`p-6 lg:p-8 ${isCompact ? "min-h-[200px]" : ""}`}>
        {/* Status Badge (when no image) */}
        {!event.image && (
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === "upcoming"
                  ? "bg-[#00C4A7]/10 text-[#00C4A7] border border-[#00C4A7]/30"
                  : event.status === "ongoing"
                    ? "bg-green-500/10 text-green-600 border border-green-500/30"
                    : "bg-gray-500/10 text-gray-600 border border-gray-500/30"
              }`}
            >
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </span>
            {isFeatured && (
              <span className="px-3 py-1 bg-[#00C4A7]/10 text-[#00C4A7] border border-[#00C4A7]/30 rounded-full text-xs font-medium">
                Featured Event
              </span>
            )}
          </div>
        )}

        {/* Event Title */}
        <div className="mb-4">
          <h3
            className={`font-bold text-[#003366] leading-tight mb-2 ${
              isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
            }`}
          >
            {event.title}
          </h3>
          {event.subtitle && (
            <p className={`text-[#00C4A7] font-medium ${isFeatured ? "text-lg" : "text-base"}`}>{event.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className={`text-gray-700 leading-relaxed mb-6 ${isFeatured ? "text-lg" : "text-base"}`}>
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
            <span className="font-medium">{event.date}</span>
            {event.time && <span className="ml-2 text-gray-500">• {event.time}</span>}
          </div>

          <div className="flex items-start text-gray-700">
            <MapPin className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <span>{event.location}</span>
              {event.venue && <div className="text-gray-500 text-sm mt-1">{event.venue}</div>}
            </div>
          </div>

          {event.host && (
            <div className="flex items-start text-gray-700">
              <Users className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-[#00C4A7]">Host: </span>
                <span>{event.host}</span>
              </div>
            </div>
          )}

          {event.website && (
            <div className="flex items-center text-gray-700">
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
                className="px-3 py-1 bg-[#00C4A7]/10 text-[#00C4A7] text-xs font-medium rounded-full border border-[#00C4A7]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          {event.registrationUrl && (
            <Link href={event.registrationUrl}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-lg hover:bg-[#00C4A7]/90 transition-colors shadow-md"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200"
          >
            <Link href={`${event.website}`}>Learn More</Link>
  
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
