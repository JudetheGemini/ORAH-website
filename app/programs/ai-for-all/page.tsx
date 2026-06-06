'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Sprout, Calendar, ExternalLink, MapPin, Clock, Users, CheckCircle2 } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
}

export default function AIForAllPage() {
    const whatYouWillDo = [
        { icon: '🎓', title: 'Mentor in interactive workshops', description: 'Lead hands-on AI literacy sessions with seniors in a supportive environment.' },
        { icon: '📱', title: 'Teach digital tools & tablets', description: 'Help participants navigate smartphones, apps, and accessibility features.' },
        { icon: '🎭', title: 'Lead online-safety role plays', description: 'Run engaging exercises to spot phishing attempts and online fraud.' },
        { icon: '🤖', title: 'Share AI & tech knowledge', description: 'Break down how modern AI tools work in plain, accessible language.' },
        { icon: '🤝', title: 'Connect across generations', description: 'Build meaningful relationships through shared learning and patience.' },
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
            description: "Willing to grow alongside participants — you don't need to know everything, just be curious.",
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
            bg: 'bg-[#00C4A7]/5 border-[#00C4A7]/15',
        },
        {
            emoji: '🛡️',
            title: 'Scam Detection',
            description: 'Interactive exercises to recognize phishing, fraud, and online deception tactics.',
            bg: 'bg-[#003366]/5 border-[#003366]/15',
        },
        {
            emoji: '📲',
            title: 'Device Navigation',
            description: 'Hands-on help with tablets, smartphones, apps, and accessibility features.',
            bg: 'bg-[#00C4A7]/5 border-[#00C4A7]/15',
        },
        {
            emoji: '💬',
            title: 'Open Discussions',
            description: 'Facilitated conversations about AI ethics, digital privacy, and staying safe online.',
            bg: 'bg-[#003366]/5 border-[#003366]/15',
        },
    ]

    const timeline = [
        {
            icon: MapPin,
            label: 'Location',
            content: 'Abbotsford / The Glebe Centre',
            sub: 'Ottawa, Ontario',
        },
        {
            icon: Calendar,
            label: 'Dates',
            content: 'May 8 – June 26, 2026',
            sub: '8 consecutive weeks',
        },
        {
            icon: Clock,
            label: 'Schedule',
            content: 'Every Friday · 2 hrs / week',
            sub: 'Total commitment: ~16 hours',
        },
        {
            icon: Users,
            label: 'Orientation',
            content: 'Hybrid before program starts',
            sub: 'Virtual + in-person onboarding',
        },
    ]

    const skills = ['AI Literacy', 'Digital Safety', 'Mentoring', 'Scam Awareness', 'Leadership']

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-8 overflow-hidden bg-gradient-to-br from-white via-white to-[#00C4A7]/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00C4A7_0%,_transparent_60%)] opacity-[0.06]" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/8 w-fit">
                                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                                <span className="text-sm font-medium text-[#00C4A7] tracking-wide">AI FOR ALL · SENIORS AI LITERACY 2026</span>
                            </div>

                            <div className="space-y-5">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                                    <span className="text-[#003366]">Be Part of</span>
                                    <span className="block bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Something Important</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                    Help <span className="text-gray-800 font-semibold">seniors learn about AI</span> and stay safe online. Join our community of youth volunteers in <span className="text-gray-800 font-semibold">Ottawa</span> making real generational impact.
                                </p>
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3.5 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00C4A7]/25 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    Join the Program
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="#about"
                                    className="px-8 py-3.5 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-xl hover:bg-[#00C4A7]/8 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[#00C4A7]/10 text-[#00C4A7] border border-[#00C4A7]/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-5">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#003366]/15">
                                <img
                                    src="/volunteer.jpg"
                                    alt="Youth volunteer helping senior with tablet during AI literacy session"
                                    className="w-full h-[420px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit mb-3 uppercase tracking-wider">
                                        Real Impact
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">Bridging Generations Through Technology</h3>
                                    <p className="text-white/80 text-sm">Join volunteers making a real difference</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { value: '8', label: 'Weeks', sublabel: 'Fridays' },
                                    { value: '2hrs', label: 'Per session', sublabel: 'Weekly' },
                                    { value: 'May', label: 'Start date', sublabel: '2026' },
                                    { value: '16h', label: 'Total hours', sublabel: 'Commitment' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm">
                                        <div className="text-xl font-bold text-[#003366]">{stat.value}</div>
                                        <div className="text-xs font-medium text-gray-700 leading-tight">{stat.label}</div>
                                        <div className="text-[10px] text-gray-400">{stat.sublabel}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What You'll Do Section */}
            <section id="about" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Your Role</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5">
                            What You&apos;ll <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Do & Build</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            As a youth volunteer, you&apos;ll guide seniors through AI literacy, digital tools, and online safety — while building your own leadership skills.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whatYouWillDo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/30 transition-all duration-300 group"
                            >
                                <span className="text-3xl block mb-4">{item.icon}</span>
                                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#003366] transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: whatYouWillDo.length * 0.08 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-2xl p-6 text-white shadow-sm"
                        >
                            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Skills You&apos;ll Earn</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {skills.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/15 text-white border border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-white/65 text-sm leading-relaxed">
                                Real-world skills that stand out on any resume or university application.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline & Activities Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Details</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                                Program <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Timeline</span>
                            </h2>
                            <p className="text-gray-500 mb-10">Everything you need to know about this 8-week commitment.</p>

                            <div className="relative">
                                <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#00C4A7] via-[#00C4A7]/50 to-[#003366]/20" />

                                <div className="space-y-8 pl-14">
                                    {timeline.map((item, i) => {
                                        const Icon = item.icon
                                        return (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-14 top-0 w-10 h-10 rounded-xl bg-white border-2 border-[#00C4A7]/60 flex items-center justify-center shadow-sm">
                                                    <Icon className="w-4 h-4 text-[#00C4A7]" />
                                                </div>
                                                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-0.5">{item.label}</div>
                                                <div className="text-lg font-bold text-gray-900">{item.content}</div>
                                                <div className="text-sm text-gray-500">{item.sub}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Activities</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                                What <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Happens</span> in Sessions
                            </h2>
                            <p className="text-gray-500 mb-10">Each week explores a different dimension of digital literacy.</p>

                            <div className="grid gap-4">
                                {activities.map((activity, i) => (
                                    <div
                                        key={i}
                                        className={`p-5 rounded-2xl border ${activity.bg} hover:shadow-md transition-all duration-300 flex gap-4 items-start`}
                                    >
                                        <span className="text-2xl flex-shrink-0 mt-0.5">{activity.emoji}</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{activity.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[#003366] font-semibold uppercase tracking-widest text-sm mb-3">Eligibility</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
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
                                    transition={{ duration: 0.7, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center mb-5 group-hover:from-[#00C4A7]/25 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-[#003366]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{req.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#003366] to-[#004e99] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00C4A7_0%,_transparent_55%)] opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm">Get Involved</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                Ready to Join Us?
                            </h2>
                            <p className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
                                Spaces are limited. Register today to secure your spot in this year&apos;s AI for All program.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center">
                            {[
                                'May 8 – June 26, 2026',
                                'Fridays · Ottawa',
                                '~16 hours total',
                            ].map((detail) => (
                                <div key={detail} className="flex items-center gap-2 text-white/60 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-[#00C4A7] flex-shrink-0" />
                                    <span>{detail}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 flex-wrap justify-center">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 text-lg"
                            >
                                Register as a Volunteer
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.responsibleaiottawa.ca/programs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
