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

function StatusBadge({ status }: { status: EventData["status"] }) {
  const styles =
    status === "upcoming"
      ? "bg-[#00C4A7]/90 text-white"
      : status === "ongoing"
      ? "bg-green-500/90 text-white"
      : "bg-gray-500/80 text-white"
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${styles}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default function EventCard({ event, variant = "default" }: EventCardProps) {
  const isFeatured = variant === "featured"
  const isCompact = variant === "compact"

  /* ── Compact card ─────────────────────────────────────── */
  if (isCompact) {
    return (
      <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/25 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {event.image && (
          <div className="relative h-36 overflow-hidden flex-shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <StatusBadge status={event.status} />
            </div>
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-[#003366] leading-snug mb-1">{event.title}</h3>
          {event.subtitle && (
            <p className="text-xs font-semibold text-[#00C4A7] mb-2 leading-snug">{event.subtitle}</p>
          )}
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{event.description}</p>

          <div className="space-y-1.5 text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#00C4A7] flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#00C4A7] flex-shrink-0" />
              <span>{event.venue || event.location}</span>
            </div>
          </div>

          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {event.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-[#00C4A7]/8 text-[#00C4A7] border border-[#00C4A7]/15">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-3 border-t border-gray-100">
            {event.website ? (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003366] hover:text-[#00C4A7] transition-colors"
              >
                View Event <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-sm text-gray-400">Details coming soon</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ── Default / Featured card ──────────────────────────── */
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {event.image && (
        <div className={`relative overflow-hidden ${isFeatured ? "h-64 lg:h-80" : "h-48"}`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <StatusBadge status={event.status} />
          </div>
          {isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-[#00C4A7]/90 text-white backdrop-blur-sm rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 lg:p-8">
        <div className="mb-4">
          <h3 className={`font-bold text-[#003366] leading-tight mb-2 ${isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}`}>
            {event.title}
          </h3>
          {event.subtitle && (
            <p className={`text-[#00C4A7] font-medium ${isFeatured ? "text-lg" : "text-base"}`}>{event.subtitle}</p>
          )}
        </div>

        <p className={`text-gray-700 leading-relaxed mb-6 ${isFeatured ? "text-lg" : "text-base"}`}>
          {event.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
            <span className="font-medium">{event.date}</span>
            {event.time && <span className="ml-2 text-gray-500">· {event.time}</span>}
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
              <span>{event.host}</span>
            </div>
          )}
          {event.website && (
            <div className="flex items-center text-gray-700">
              <Globe className="w-5 h-5 text-[#00C4A7] mr-3 flex-shrink-0" />
              <a href={event.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C4A7] transition-colors underline text-sm">
                {event.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}
        </div>

        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#00C4A7]/10 text-[#00C4A7] text-xs font-medium rounded-full border border-[#00C4A7]/20">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          {event.registrationUrl && event.status !== "past" && (
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-xl hover:bg-[#00a88e] transition-colors"
            >
              Register Now <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          )}
          {event.website && (
            <a href={event.website} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-[#003366] font-semibold rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
