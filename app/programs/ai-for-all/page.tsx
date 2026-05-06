'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Sprout, Calendar, ExternalLink } from 'lucide-react'

// export const metadata = {
//     title: 'AI for All: Seniors AI Literacy Program | ORAH',
//     description: 'Join our youth volunteer program to help seniors learn about AI and stay safe online. 8-week commitment, Fridays in Ottawa.',
// }

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function AIForAllPage() {
    const whatYouWillDo = [
        { icon: '🎓', title: 'Mentor in interactive workshops', percentage: '100%' },
        { icon: '📱', title: 'Teach digital tools & tablets', percentage: '90%' },
        { icon: '🎭', title: 'Lead online-safety role plays', percentage: '85%' },
        { icon: '🤖', title: 'Share AI & tech knowledge', percentage: '95%' },
        { icon: '🤝', title: 'Connect across generations', percentage: '100%' },
    ]

    const requirements = [
        {
            icon: GraduationCap,
            title: 'Student Status',
            description: 'Currently enrolled in high school or a post-secondary institution in the Ottawa area.',
        },
        {
            icon: Heart,
            title: 'Patient & Enthusiastic',
            description: 'Comfortable working at a relaxed pace and genuinely excited about helping others learn.',
        },
        {
            icon: Sprout,
            title: 'Learner Mindset',
            description: 'Willing to grow alongside participants — you don\'t need to know everything, just be curious.',
        },
        {
            icon: Calendar,
            title: 'Availability',
            description: 'Available for orientation (hybrid) and all 8 Friday sessions from May 8 to June 26, 2026.',
        },
    ]

    const activities = [
        {
            emoji: '🤖',
            title: 'AI Demonstrations',
            description: 'Show seniors how modern AI tools work in everyday life, demystifying the technology.',
        },
        {
            emoji: '🛡️',
            title: 'Scam Detection',
            description: 'Interactive exercises to recognize phishing, fraud, and online deception tactics.',
        },
        {
            emoji: '📲',
            title: 'Device Navigation',
            description: 'Hands-on help with tablets, smartphones, apps, and accessibility features.',
        },
        {
            emoji: '💬',
            title: 'Open Discussions',
            description: 'Facilitated conversations about AI ethics, digital privacy, and staying safe online.',
        },
    ]

    const timeline = [
        {
            label: 'Location',
            content: 'Abbotsford / The Glebe Centre',
            sub: 'Ottawa, Ontario',
        },
        {
            label: 'Dates',
            content: 'May 8 – June 26, 2026',
            sub: '8 consecutive weeks',
        },
        {
            label: 'Schedule',
            content: 'Every Friday · 2 hrs / week',
            sub: 'Total commitment: ~16 hours',
        },
        {
            label: 'Orientation',
            content: 'Hybrid before program starts',
            sub: 'Virtual + in-person onboarding',
        },
        {
            label: 'Organization',
            content: 'Ottawa Responsible AI Hub',
            sub: 'responsibleaiottawa.ca',
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-8 overflow-hidden bg-gradient-to-br from-white via-white to-[#00C4A7]/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/8 via-transparent to-[#00C4A7]/8" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/10 w-fit">
                                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                                <span className="text-sm font-medium text-[#00C4A7]">AI FOR ALL · SENIORS AI LITERACY 2026</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                <span className="text-[#003366]">Be Part of</span>
                                <span className="block bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Something Important</span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Help <span className="text-gray-800 font-medium">seniors learn about AI</span> and stay safe online. Join our community of youth volunteers in <span className="text-gray-800 font-medium">Ottawa</span> making real generational impact.
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                    target="_blank"
                                    className="px-8 py-3 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C4A7]/50 transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    Join the Program
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="#about"
                                    className="px-8 py-3 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-lg hover:bg-[#00C4A7]/10 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative space-y-6">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/volunteer.jpg"
                                    alt="Youth volunteer helping senior with tablet during AI literacy session"
                                    className="w-full h-[300px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-2">
                                        Real Impact
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">Bridging Generations Through Technology</h3>
                                    <p className="text-white/90 text-sm">Join volunteers making a difference</p>
                                </div>
                            </div>

                            {/* Program Stats */}
                            <div className="bg-white border-2 border-[#00C4A7] rounded-2xl p-6 shadow-lg">
                                <div className="text-sm font-semibold text-[#003366] mb-4 uppercase tracking-wider">Program at a Glance</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#00C4A7]">8</div>
                                        <div className="text-xs text-gray-600">Weeks · Fridays</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#003366]">2hrs</div>
                                        <div className="text-xs text-gray-600">Per session</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-[#00C4A7]">May–Jun</div>
                                        <div className="text-xs text-gray-600">2026</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-[#003366]">The Glebe</div>
                                        <div className="text-xs text-gray-600">Ottawa</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-4">Your Role</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Skills You&apos;ll <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Build & Share</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            As a youth volunteer, you&apos;ll guide seniors through AI literacy, digital tools, and online safety — while building your own leadership skills.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* What You'll Do */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full bg-[#00C4A7]" />
                                <h3 className="text-xl font-bold text-gray-900">What You&apos;ll Do</h3>
                            </div>

                            <div className="space-y-5">
                                {whatYouWillDo.map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 flex items-center gap-2">
                                                <span>{item.icon}</span>
                                                {item.title}
                                            </span>
                                            <span className="text-xs font-bold text-[#00C4A7]">{item.percentage}</span>
                                        </div>
                                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#00C4A7] to-[#003366] rounded-full"
                                                style={{ width: item.percentage }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {['AI Literacy', 'Digital Safety', 'Mentoring', 'Scam Awareness', 'Leadership'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#00C4A7]/10 text-[#00C4A7] border border-[#00C4A7]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Looking For */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full bg-[#003366]" />
                                <h3 className="text-xl font-bold text-gray-900">What We&apos;re Looking For</h3>
                            </div>

                            <div className="space-y-5">
                                {[
                                    { icon: '🎓', title: 'HS or University Student', percentage: 'Must' },
                                    { icon: '💡', title: 'Curious about Technology', percentage: '90%' },
                                    { icon: '🌱', title: 'Willing to Learn Together', percentage: '85%' },
                                    { icon: '😊', title: 'Patient & Enthusiastic', percentage: '95%' },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 flex items-center gap-2">
                                                <span>{item.icon}</span>
                                                {item.title}
                                            </span>
                                            <span className="text-xs font-bold text-[#003366]">{item.percentage}</span>
                                        </div>
                                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#003366] to-[#00C4A7] rounded-full"
                                                style={{ width: item.percentage === 'Must' ? '100%' : item.percentage }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {['Empathy', 'Communication', 'Reliability', 'Initiative', 'Team Player'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#003366]/10 text-[#003366] border border-[#003366]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline & Activities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-4">Details</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Program <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Timeline</span>
                            </h2>
                            <p className="text-gray-600 mb-8">Everything you need to know about this 8-week commitment.</p>

                            <div className="space-y-6 relative pl-8">
                                {timeline.map((item, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#00C4A7] border-4 border-white" />
                                        <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">{item.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{item.content}</div>
                                        <div className="text-sm text-gray-600 mt-1">{item.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-4">Activities</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                What <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Happens</span> in Sessions
                            </h2>

                            <div className="grid gap-4">
                                {activities.map((activity, i) => (
                                    <div
                                        key={i}
                                        className="p-5 rounded-lg border border-[#00C4A7] bg-white hover:shadow-lg hover:border-[#003366] transition-all duration-300"
                                    >
                                        <div className="text-3xl mb-3">{activity.emoji}</div>
                                        <h3 className="font-bold text-gray-900 mb-2">{activity.title}</h3>
                                        <p className="text-sm text-gray-600">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-[#003366] font-semibold uppercase tracking-widest text-sm mb-4">Eligibility</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            We&apos;re Looking <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">for You</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            No prior teaching experience needed — just enthusiasm, patience, and a desire to make a difference.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {requirements.map((req, i) => {
                            const Icon = req.icon
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-lg border-2 border-[#00C4A7] bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <Icon className="w-8 h-8 text-[#003366] mb-4" />
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#003366] font-semibold uppercase tracking-widest text-sm mb-4 text-center">Get Involved</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                            Ready to <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Join Us?</span>
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            Reach out and take the first step toward making a real difference in your community.
                        </p>

                        <div className="bg-gradient-to-br from-[#00C4A7]/10 to-white border-2 border-[#00C4A7] rounded-2xl p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Interested? <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Get Involved!</span>
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Complete our online registration form to sign up as a volunteer. Spaces are limited — register today.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#00C4A7] flex-shrink-0 mt-2" />
                                    <span className="text-gray-700">
                                        📍 <strong>Location:</strong> Abbotsford / The Glebe Centre, Ottawa
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#00C4A7] flex-shrink-0 mt-2" />
                                    <span className="text-gray-700">
                                        📅 <strong>Dates:</strong> May 8 – June 26, 2026
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#00C4A7] flex-shrink-0 mt-2" />
                                    <span className="text-gray-700">
                                        ⏱ <strong>Time:</strong> Fridays, 2 hours weekly (8 weeks)
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#00C4A7] flex-shrink-0 mt-2" />
                                    <span className="text-gray-700">
                                        🎯 <strong>Orientation:</strong> Hybrid before program starts
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                    target="_blank"
                                    className="px-8 py-3 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C4A7]/50 transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    Register as a Volunteer
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.responsibleaiottawa.ca/programs"
                                    target="_blank"
                                    className="px-8 py-3 border-2 border-[#00C4A7] text-gray-900 font-semibold rounded-lg hover:bg-[#00C4A7]/10 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
