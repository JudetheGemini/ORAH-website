"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Camera} from "lucide-react"

// Gallery data structure - easily extensible for multiple events
const galleryData = [
  {
    eventId: "orat-q3-2024",
    eventTitle: "Ottawa Responsible AI Talks - Q3 2025",
    eventSubtitle: "Responsible AI in Practice: Community Voices, Meaningful Impact",
    date: "September 4, 2025",
    location: "Community Resource Center",
    attendees: '100+',
    photographer: "ORAH Media Team",
    description:
      "Community leaders, researchers, and practitioners explored the critical intersection of AI ethics and healthcare.",
    images: [
      { id: 1, src: "/orat/orat-event-01.jpg", alt: "ORAH event", caption: "" },
      { id: 2, src: "/orat/orat-event-02.jpg", alt: "ORAH event", caption: "" },
      { id: 3, src: "/orat/orat-event-03.jpg", alt: "ORAH event", caption: "" },
      { id: 4, src: "/orat/orat-event-04.jpg", alt: "ORAH event", caption: "" },
      { id: 5, src: "/orat/orat-event-05.jpg", alt: "ORAH event", caption: "" },
      { id: 6, src: "/orat/orat-event-06.jpg", alt: "ORAH event", caption: "" },
      { id: 7, src: "/orat/orat-event-07.jpg", alt: "ORAH event", caption: "" },
      { id: 8, src: "/orat/orat-event-08.jpg", alt: "ORAH event", caption: "" },
      { id: 9, src: "/orat/orat-event-09.jpg", alt: "ORAH event", caption: "" },
      { id: 10, src: "/orat/orat-event-10.jpg", alt: "ORAH event", caption: "" },
      { id: 11, src: "/orat/orat-event-11.jpg", alt: "ORAH event", caption: "" },
      { id: 12, src: "/orat/orat-event-12.jpg", alt: "ORAH event", caption: "" },
      { id: 13, src: "/orat/orat-event-13.jpg", alt: "ORAH event", caption: "" },
      { id: 14, src: "/orat/orat-event-14.jpg", alt: "ORAH event", caption: "" },
      { id: 15, src: "/orat/orat-event-15.jpg", alt: "ORAH event", caption: "" },
      { id: 16, src: "/orat/orat-event-16.jpg", alt: "ORAH event", caption: "" },
      { id: 17, src: "/orat/orat-event-17.jpg", alt: "ORAH event", caption: "" },
      { id: 18, src: "/orat/orat-event-18.jpg", alt: "ORAH event", caption: "" },
      { id: 19, src: "/orat/orat-event-19.jpg", alt: "ORAH event", caption: "" },
      { id: 20, src: "/orat/orat-event-20.jpg", alt: "ORAH event", caption: "" }
    ],
  },
  {
    eventId: "gfrai-2024",
    eventTitle: "Global Forum on Responsible AI 2026",
    eventSubtitle: "Beyond Universal Models: Designing Adaptable Responsible AI Frameworks Grounded in Data Justice",
    date: "March 13, 2026",
    location: "The Hague University of Applied Sciences",
    attendees: '250+',
    photographer: "ORAH Media Team",
    description: "International experts and stakeholders gathered to discuss responsible AI frameworks and global governance strategies.",
    images: [
      { id: 1, src: "/gfrai/DSC08530.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 2, src: "/gfrai/DSC08548.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 3, src: "/gfrai/DSC08563.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 4, src: "/gfrai/DSC08578.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 5, src: "/gfrai/DSC08598.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 6, src: "/gfrai/DSC08606.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 7, src: "/gfrai/DSC08649.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 8, src: "/gfrai/DSC08700.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 9, src: "/gfrai/DSC08749.jpg", alt: "Global Forum on Responsible AI event", caption: "" },
      { id: 10, src: "/gfrai/DSC08787.jpg", alt: "Global Forum on Responsible AI event", caption: "" }
    ],
  },
  // Future events can be added here following the same structure
  {
    eventId: "summit-2025",
    eventTitle: "Ottawa Responsible AI Summit 2025",
    eventSubtitle: "Governing Data and AI for Equity and Public Good",
    date: "November 19, 2025",
    location: "BayView Yards, Invest Ottawa",
    attendees: 300,
    photographer: "ORAH Media Team",
    description: "Our flagship annual event bringing together policymakers, developers, and community voices.",
    images: [
      { id: 1, src: "/orasv1/summit-event-01.jpg", alt: "ORAH summit event", caption: "" },
      { id: 2, src: "/orasv1/summit-event-02.jpg", alt: "ORAH summit event", caption: "" },
      { id: 3, src: "/orasv1/summit-event-03.jpg", alt: "ORAH summit event", caption: "" },
      { id: 4, src: "/orasv1/summit-event-04.jpg", alt: "ORAH summit event", caption: "" },
      { id: 5, src: "/orasv1/summit-event-05.jpg", alt: "ORAH summit event", caption: "" },
      { id: 6, src: "/orasv1/summit-event-06.jpg", alt: "ORAH summit event", caption: "" },
      { id: 7, src: "/orasv1/summit-event-07.jpg", alt: "ORAH summit event", caption: "" },
      { id: 8, src: "/orasv1/summit-event-08.jpg", alt: "ORAH summit event", caption: "" },
      { id: 9, src: "/orasv1/summit-event-09.jpg", alt: "ORAH summit event", caption: "" },
      { id: 10, src: "/orasv1/summit-event-10.jpg", alt: "ORAH summit event", caption: "" },
      { id: 11, src: "/orasv1/summit-event-11.jpg", alt: "ORAH summit event", caption: "" },
      { id: 12, src: "/orasv1/summit-event-12.jpg", alt: "ORAH summit event", caption: "" },
      { id: 13, src: "/orasv1/summit-event-13.jpg", alt: "ORAH summit event", caption: "" },
      { id: 14, src: "/orasv1/summit-event-14.jpg", alt: "ORAH summit event", caption: "" },
      { id: 15, src: "/orasv1/summit-event-15.jpg", alt: "ORAH summit event", caption: "" },
      { id: 16, src: "/orasv1/summit-event-16.jpg", alt: "ORAH summit event", caption: "" },
      { id: 17, src: "/orasv1/summit-event-17.jpg", alt: "ORAH summit event", caption: "" },
      { id: 18, src: "/orasv1/summit-event-18.jpg", alt: "ORAH summit event", caption: "" },
      { id: 19, src: "/orasv1/summit-event-19.jpg", alt: "ORAH summit event", caption: "" },
      { id: 20, src: "/orasv1/summit-event-20.jpg", alt: "ORAH summit event", caption: "" }
    ],
  },
]

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | "all">("all")
  const [selectedImage, setSelectedImage] = useState<{ eventId: string; imageId: number } | null>(null)

  // Get all images from all events or filter by selected event
  const getFilteredData = () => {
    if (selectedEvent === "all") {
      return galleryData
    }
    return galleryData.filter((event) => event.eventId === selectedEvent)
  }

  const filteredData = getFilteredData()
  const totalImages = galleryData.reduce((total, event) => total + event.images.length, 0)

  const openLightbox = (eventId: string, imageId: number) => {
    setSelectedImage({ eventId, imageId })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    // Find current event and image
    const currentEvent = galleryData.find((event) => event.eventId === selectedImage.eventId)
    if (!currentEvent) return

    const currentImageIndex = currentEvent.images.findIndex((img) => img.id === selectedImage.imageId)

    if (direction === "prev") {
      if (currentImageIndex > 0) {
        // Previous image in same event
        setSelectedImage({
          eventId: selectedImage.eventId,
          imageId: currentEvent.images[currentImageIndex - 1].id,
        })
      } else {
        // Go to last image of previous event
        const currentEventIndex = galleryData.findIndex((event) => event.eventId === selectedImage.eventId)
        if (currentEventIndex > 0) {
          const prevEvent = galleryData[currentEventIndex - 1]
          setSelectedImage({
            eventId: prevEvent.eventId,
            imageId: prevEvent.images[prevEvent.images.length - 1].id,
          })
        }
      }
    } else {
      if (currentImageIndex < currentEvent.images.length - 1) {
        // Next image in same event
        setSelectedImage({
          eventId: selectedImage.eventId,
          imageId: currentEvent.images[currentImageIndex + 1].id,
        })
      } else {
        // Go to first image of next event
        const currentEventIndex = galleryData.findIndex((event) => event.eventId === selectedImage.eventId)
        if (currentEventIndex < galleryData.length - 1) {
          const nextEvent = galleryData[currentEventIndex + 1]
          setSelectedImage({
            eventId: nextEvent.eventId,
            imageId: nextEvent.images[0].id,
          })
        }
      }
    }
  }

  const getCurrentImage = () => {
    if (!selectedImage) return null
    const event = galleryData.find((e) => e.eventId === selectedImage.eventId)
    if (!event) return null
    return {
      image: event.images.find((img) => img.id === selectedImage.imageId),
      event,
    }
  }

  const currentImageData = getCurrentImage()

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
                  width: Math.random() * 8 + 2 + "px",
                  height: Math.random() * 8 + 2 + "px",
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
              <Camera className="w-5 h-5 text-[#00C4A7] mr-2" />
              <span className="text-[#00C4A7] font-medium">Event Gallery</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">ORAH Event Gallery</h1>
            <p className="text-xl lg:text-2xl text-[#00C4A7] font-medium mb-8">
              Capturing Moments from Our Community Events
            </p>

            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore photos from our Ottawa Responsible AI Hub events, where community leaders, researchers, and
              practitioners come together to shape the future of ethical AI. Each event brings new insights,
              connections, and collaborative energy to our growing community.
            </p>

            {/* Gallery Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-200">
              <div className="flex items-center">
                <Camera className="w-5 h-5 text-[#00C4A7] mr-2" />
                <span>{totalImages} Photos</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-[#00C4A7] mr-2" />
                <span>
                  {galleryData.length} Event{galleryData.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Filter */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Browse Events</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedEvent("all")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedEvent === "all"
                    ? "bg-[#00C4A7] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                All Events ({totalImages} photos)
              </button>
              {galleryData.map((event) => (
                <button
                  key={event.eventId}
                  onClick={() => setSelectedEvent(event.eventId)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedEvent === event.eventId
                      ? "bg-[#00C4A7] text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {event.eventTitle.split(" - ")[0]} ({event.images.length} photos)
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredData.map((event, eventIndex) => (
            <motion.div
              key={event.eventId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              {/* Event Header */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#003366] mb-2">{event.eventTitle}</h3>
                <p className="text-lg text-[#00C4A7] font-medium mb-4">{event.eventSubtitle}</p>

                <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-[#00C4A7] mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-[#00C4A7] mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-[#00C4A7] mr-2" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                <p className="text-gray-700 max-w-3xl">{event.description}</p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {event.images.map((image, imageIndex) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(event.eventId, image.id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && currentImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-[#00C4A7] transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#00C4A7] transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#00C4A7] transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              {currentImageData.image && (
                <img
                  src={currentImageData.image.src || "/placeholder.svg"}
                  alt={currentImageData.image.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}

              {/* Image Info */}
              {currentImageData.image && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <p className="text-lg font-medium mb-2">{currentImageData.image.caption}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-300">
                      <p>{currentImageData.event.eventTitle}</p>
                      <p>Photo by {currentImageData.event.photographer}</p>
                    </div>
                    {/* <div className="flex gap-2">
                      <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div> */}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#003366] to-[#003366]/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Next Event</h2>
            <p className="text-xl text-gray-200">
              Do&apos;nt miss out on future ORAH events. Stay connected with Ottawa&apos;s responsible AI community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link className="cursor-pointer" href="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#00C4A7] text-white font-semibold cursor-pointer rounded-lg hover:bg-[#00C4A7]/90 transition-colors"
              >
                View Upcoming Events
              </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#003366] cursor-pointer font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join Our Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
