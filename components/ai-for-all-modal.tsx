'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, GraduationCap, Heart, Sprout, Calendar, ExternalLink, Clock, MapPin } from 'lucide-react'

interface AIForAllModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function AIForAllModal({ isOpen, onClose }: AIForAllModalProps) {
    const requirements = [
        {
            icon: GraduationCap,
            title: 'Student Status',
            description: 'Currently enrolled in high school or post-secondary in Ottawa area',
        },
        {
            icon: Heart,
            title: 'Patient & Enthusiastic',
            description: 'Comfortable working at a relaxed pace with genuine excitement',
        },
        {
            icon: Sprout,
            title: 'Learner Mindset',
            description: 'Willing to grow alongside participants',
        },
        {
            icon: Calendar,
            title: 'Availability',
            description: '8 Friday sessions from May 8 to June 26, 2026',
        },
    ]

    const activities = [
        {
            emoji: '🤖',
            title: 'AI Demonstrations',
            description: 'Show seniors how modern AI tools work in everyday life',
        },
        {
            emoji: '🛡️',
            title: 'Scam Detection',
            description: 'Interactive exercises to recognize online deception tactics',
        },
        {
            emoji: '📲',
            title: 'Device Navigation',
            description: 'Hands-on help with tablets, smartphones, and apps',
        },
        {
            emoji: '💬',
            title: 'Open Discussions',
            description: 'Conversations about AI ethics and digital privacy',
        },
    ]

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white p-6 rounded-t-2xl">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <div className="pr-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                AI FOR ALL · SENIORS AI LITERACY 2026
                            </div>
                            <h2 className="text-3xl font-bold mb-2">AI for All: Empowering Seniors</h2>
                            <p className="text-white/90">Help seniors learn about AI and stay safe online through our youth volunteer program</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-8">
                        {/* Program Overview */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-[#00C4A7]/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-[#00C4A7]">8</div>
                                <div className="text-sm text-gray-600">Weeks · Fridays</div>
                            </div>
                            <div className="bg-[#003366]/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-[#003366]">2hrs</div>
                                <div className="text-sm text-gray-600">Per session</div>
                            </div>
                            <div className="bg-[#00C4A7]/10 rounded-lg p-4 text-center">
                                <div className="text-xl font-bold text-[#00C4A7]">May–Jun</div>
                                <div className="text-sm text-gray-600">2026</div>
                            </div>
                        </div>

                        {/* Program Details */}
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <MapPin className="w-5 h-5 text-[#00C4A7]" />
                            <div>
                                <div className="font-semibold text-[#003366]">Abbotsford / The Glebe Centre</div>
                                <div className="text-sm text-gray-600">Ottawa, Ontario</div>
                            </div>
                        </div>

                        {/* What You'll Do */}
                        <div>
                            <h3 className="text-xl font-bold text-[#003366] mb-4">What You'll Do</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {activities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                    >
                                        <div className="text-2xl">{activity.emoji}</div>
                                        <div>
                                            <h4 className="font-semibold text-[#003366] mb-1">{activity.title}</h4>
                                            <p className="text-sm text-gray-600">{activity.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h3 className="text-xl font-bold text-[#003366] mb-4">Requirements</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {requirements.map((req, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg"
                                    >
                                        <div className="w-8 h-8 bg-[#00C4A7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <req.icon className="w-4 h-4 text-[#00C4A7]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#003366] mb-1">{req.title}</h4>
                                            <p className="text-sm text-gray-600">{req.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-[#00C4A7]/10 to-[#003366]/10 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-bold text-[#003366] mb-2">Ready to Make a Difference?</h3>
                            <p className="text-gray-600 mb-4">Join our community of youth volunteers making real generational impact</p>
                            <div className="flex gap-3 justify-center flex-wrap">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                    Join the Program
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="/programs/ai-for-all"
                                    className="px-6 py-3 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-lg hover:bg-[#00C4A7]/10 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}