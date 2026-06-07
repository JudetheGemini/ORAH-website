'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Globe2, ShieldCheck, ExternalLink, CheckCircle2, Users } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const programDetails = [
    { icon: Calendar, label: 'Dates', value: 'July 6 – August 14, 2026' },
    { icon: MapPin, label: 'Location', value: 'Rideau-Rockcliffe Community Resource Centre (RRCRC)', sub: '815 St-Laurent Blvd, Ottawa, ON K1K 3A7' },
    { icon: Clock, label: 'Format', value: 'Weekly sessions · 2 hours each' },
    { icon: Globe2, label: 'Language', value: 'Bilingual (EN/FR)' },
    { icon: ShieldCheck, label: 'Accessibility', value: 'Fully Accessible · No prior experience needed' },
]

const whyItMatters = [
    'Seniors are among the fastest-growing demographic groups in Canada and among the most underserved when it comes to AI education.',
    'AI-enabled scams, misinformation, and fraud disproportionately affect older adults who have not had access to practical digital literacy support.',
    'Many seniors are being asked to engage with AI-assisted healthcare portals, government services, and communication tools without any preparation.',
    'This program is designed to close that gap, one community and one conversation at a time.',
]

const sessions = [
    {
        number: 1,
        date: 'Thursday, July 16',
        time: '10:30 AM – 12:30 PM',
        title: 'What is AI?',
        description: 'An accessible, plain-language introduction to artificial intelligence, covering what it is, how it works, and where participants already encounter it in their daily lives.',
        highlights: [
            'Icebreaker: "AI in my day?" Share a technology you used this week',
            'Plain-language overview: what AI is and isn\'t, with everyday examples',
            'Paired activity with your Youth Volunteer: spot AI in your home',
            'Group discussion and pre-programme confidence survey',
        ],
    },
    {
        number: 2,
        date: 'Thursday, July 23',
        time: '10:30 AM – 12:30 PM',
        title: 'Staying Safe with AI',
        description: 'Practical guidance on protecting yourself online: recognising scams, understanding deepfakes, and knowing how your personal information is used by AI-powered tools.',
        highlights: [
            'Real-world scenarios: AI phone scams and fake voice messages',
            'Hands-on privacy settings walk-through with your Youth Volunteer',
            'Safe habits: no personal data in AI chats, verify before you trust',
            'Take-home laminated "AI Safety Tips" card',
        ],
    },
    {
        number: 3,
        date: 'Thursday, July 30',
        time: '10:30 AM – 12:30 PM',
        title: 'AI for Everyday Life & Health',
        description: 'Explore AI in daily activities and learn how it is used in healthcare and wellness. Understand what to watch for and how to make informed decisions on your own terms.',
        highlights: [
            'Try an everyday AI tool (maps, voice assistant, weather app) with support',
            'AI for health: medication reminders, symptom checkers, and telehealth',
            'Discussion: "Would you trust AI with your health?"',
            'Key message: AI supports your health. It does not replace your doctor',
        ],
    },
    {
        number: 4,
        date: 'Thursday, August 6',
        time: '10:30 AM – 12:30 PM',
        title: 'AI for Staying Connected',
        description: 'Discover how AI-powered tools can help you stay in touch with family, friends, and your community, safely and with confidence.',
        highlights: [
            'Video calls, translation tools, and AI writing assistants',
            'Hands-on: draft a message to a friend or family member using AI',
            'Discussion: can AI help reduce loneliness? What does it miss?',
            'Preview of the closing celebration session',
        ],
    },
    {
        number: 5,
        date: 'Friday, August 14',
        time: '4:30 PM – 6:30 PM',
        title: 'Open Lab, Closing Panel & Celebration',
        description: 'A hands-on practice session, an intergenerational panel discussion, and a closing celebration. You leave with tools, confidence, and a community to keep exploring.',
        highlights: [
            'Open Lab: explore any AI tool you\'ve discovered, at your own pace',
            'Community Showcase: pairs share their highlights from the programme',
            'Intergenerational Panel: "AI, Work, and Us", moderated by Ugo Okoye',
            'Youth Volunteer recognition and programme closing by Somto Mbelu',
        ],
        isClosing: true,
    },
]

export default function AIForAllSeniorsPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#00C4A7]/5 pt-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#003366_0%,_transparent_65%)] opacity-[0.05]" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Left — copy */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/8 w-fit">
                                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                                <span className="text-sm font-medium text-[#00C4A7] tracking-wide">For Adults · Ottawa 2026</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                                    <span className="text-[#003366]">AI for All:</span>
                                    <span className="block bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Empowering Seniors</span>
                                </h1>
                                <p className="text-2xl font-medium text-gray-500 leading-snug">
                                    Learn AI. Build confidence. Stay in control.
                                </p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Imagine being told the world has changed, but no one stops to show you how. For many older adults, AI is not a tool yet. It is a source of anxiety. And that is not their fault.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                This July, ORAH is delivering <span className="font-semibold text-gray-800">AI for All: Empowering Seniors</span> in Ottawa: a six-week community program helping adults build confidence with AI in a practical, supportive, and fully accessible environment.
                            </p>

                            <p className="text-base text-[#003366] font-medium">
                                No tech background required. Just curiosity and conversation.
                            </p>

                            <div className="flex gap-4 flex-wrap pt-2">
                                <a
                                    href="https://forms.gle/SWcJv1hNVARLAN5K6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3.5 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00C4A7]/25 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    Register Now
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="#about"
                                    className="px-8 py-3.5 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-xl hover:bg-[#00C4A7]/8 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>

                        {/* Right — hero image + details card */}
                        <motion.div variants={itemVariants} className="space-y-5">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#003366]/15">
                                <img
                                    src="/ai_for_all_empowering_seniors.jpg"
                                    alt="Senior participant in the AI for All program at RRCRC Ottawa"
                                    className="w-full h-[420px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit mb-3 uppercase tracking-wider">
                                        Cohort 1 · Pilot Program
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">Community-Led AI Literacy in Ottawa</h3>
                                    <p className="text-white/80 text-sm">Funded by the Government of Canada 🇨🇦</p>
                                </div>
                            </div>

                            {/* Details snapshot */}
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-50">
                                {programDetails.map((detail, i) => {
                                    const Icon = detail.icon
                                    return (
                                        <div key={i} className="flex items-start gap-4 p-4">
                                            <div className="w-9 h-9 rounded-xl bg-[#00C4A7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Icon className="w-4 h-4 text-[#00C4A7]" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{detail.label}</div>
                                                <div className="text-sm font-semibold text-gray-900">{detail.value}</div>
                                                {detail.sub && <div className="text-xs text-gray-500 mt-0.5">{detail.sub}</div>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── About ────────────────────────────────────────────────── */}
            <section id="about" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left — body copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Background</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    About the <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Programme</span>
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                <span className="font-semibold text-gray-800">AI for All: Empowering Seniors</span> is a funded community initiative led by the Ottawa Responsible AI Hub (ORAH). The program delivers a six-session AI literacy workshop series for adults, using an intergenerational co-facilitation model in which trained Youth Partners support seniors through hands-on, personalized learning.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                It operates as a pilot (<span className="font-medium text-gray-800">Cohort 1</span>) from July to August 2026, with documentation and evaluation designed to inform a potential Year 2 national scale-up.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Digital inclusion is no longer only about internet access. It is about helping people feel confident participating in a world that is changing fast. That is exactly what this program is built to do.
                            </p>
                        </motion.div>

                        {/* Right — why it matters */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Why This Programme Matters</h3>
                                <ul className="space-y-5">
                                    {whyItMatters.map((point, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-[#00C4A7] flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-600 leading-relaxed text-sm">{point}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <div className="w-8 h-8 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-xs font-bold text-[#003366]">CA</span>
                                        </div>
                                        <span>Funded by the <span className="font-medium text-gray-700">Government of Canada</span> 🇨🇦, New Horizons for Seniors Program (NHSP)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Sessions ─────────────────────────────────────────────── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Curriculum</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                            What to <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Expect</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Across five sessions running July 16 to August 14, you will explore AI and its role in everyday life: from staying safe online to how AI is used in healthcare, communication, and daily routines. Every session is welcoming, practical, and paced for participants with no prior technology experience.
                        </p>
                    </motion.div>

                    <div className="space-y-5">
                        {sessions.map((session, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                viewport={{ once: true }}
                                className={`flex gap-6 items-start rounded-2xl border p-6 transition-all duration-300 group ${
                                    session.isClosing
                                        ? 'bg-gradient-to-br from-[#003366] to-[#004e99] border-transparent shadow-lg shadow-[#003366]/20 text-white'
                                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/25'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                    session.isClosing
                                        ? 'bg-white/15'
                                        : 'bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 group-hover:from-[#00C4A7]/25'
                                }`}>
                                    <span className={`text-2xl font-bold ${session.isClosing ? 'text-white' : 'text-[#003366]'}`}>
                                        {session.number}
                                    </span>
                                </div>
                                <div className="pt-1 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className={`text-xs font-semibold uppercase tracking-widest ${session.isClosing ? 'text-[#00C4A7]' : 'text-[#00C4A7]'}`}>
                                            Session {session.number}
                                        </span>
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                                            session.isClosing
                                                ? 'bg-white/15 text-white/80'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            <Calendar className="w-3 h-3" />
                                            {session.date}
                                        </span>
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                                            session.isClosing
                                                ? 'bg-white/15 text-white/80'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            <Clock className="w-3 h-3" />
                                            {session.time}
                                        </span>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                                        session.isClosing ? 'text-white' : 'text-gray-900 group-hover:text-[#003366]'
                                    }`}>
                                        {session.title}
                                    </h3>
                                    <p className={`leading-relaxed mb-4 ${session.isClosing ? 'text-white/70' : 'text-gray-500'}`}>
                                        {session.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {session.highlights.map((h, j) => (
                                            <li key={j} className={`flex items-start gap-2.5 text-sm ${session.isClosing ? 'text-white/75' : 'text-gray-600'}`}>
                                                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${session.isClosing ? 'text-[#00C4A7]' : 'text-[#00C4A7]'}`} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-gray-400 mt-8"
                    >
                        Sessions 1–4 run weekly on Thursdays · 2 hours each · Sessions 1–4 at RRCRC · Closing celebration on Friday, August 14
                    </motion.p>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Facilitators</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                            Meet the <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">Team</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Our sessions are led by experienced AI educators and supported by trained Youth Partners who bring both knowledge and energy to every workshop. Every facilitator is committed to making AI education accessible, welcoming, and grounded in responsible AI principles.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {/* Lead Facilitator — placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-dashed border-[#00C4A7]/40 p-7 flex gap-5 items-start"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    Coming Soon
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Lead Facilitator</h3>
                                <p className="text-sm text-[#003366] font-medium">To be confirmed</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Our lead facilitator brings expertise in AI education and community engagement. Details will be shared once confirmed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Somto Mbelu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex gap-5 items-start hover:shadow-md hover:border-[#00C4A7]/30 transition-all duration-300"
                        >
                            <img
                                src="/somto.jpeg"
                                alt="Somto Mbelu"
                                className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                            />
                            <div className="space-y-2">
                                <div className="text-xs font-semibold uppercase tracking-widest text-[#00C4A7]">Programme Lead</div>
                                <h3 className="text-lg font-bold text-gray-900">Somto Mbelu, PhD</h3>
                                <p className="text-sm text-[#003366] font-medium">Founder & Program Lead · Ottawa Responsible AI Hub (ORAH)</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    AI ethics doctoral researcher at Erasmus University Rotterdam, with over eight years of experience leading digital health, data governance, and public policy projects across nonprofits, academia, and international development.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Panel moderator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex gap-5 items-start hover:shadow-md hover:border-[#00C4A7]/30 transition-all duration-300 mb-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-3xl">🎙️</span>
                        </div>
                        <div className="space-y-2">
                            <div className="text-xs font-semibold uppercase tracking-widest text-[#00C4A7]">Closing Panel Moderator · Session 5</div>
                            <h3 className="text-lg font-bold text-gray-900">Ugo Okoye</h3>
                            <p className="text-sm text-[#003366] font-medium">Ottawa Responsible AI Hub (ORAH)</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Ugo moderates the closing intergenerational panel on August 14, <span className="italic">&ldquo;AI, Work, and Us&rdquo;</span>, facilitating a community dialogue between seniors and Youth Volunteers on AI&apos;s impact on work, society, and the future.
                            </p>
                        </div>
                    </motion.div>

                    {/* Youth Partners block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-2xl p-8 text-white"
                    >
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Youth Partners</h3>
                                <p className="text-white/75 leading-relaxed max-w-2xl">
                                    Each workshop session is co-facilitated by trained Youth Partners: young people who bring technical knowledge, patience, and a genuine enthusiasm for helping older adults feel at ease with new technology. Youth Partners provide one-on-one support throughout every session, creating an intergenerational learning environment built on mutual respect.
                                </p>
                                <a
                                    href="#volunteer"
                                    className="mt-5 inline-flex items-center gap-2 text-[#00C4A7] font-semibold text-sm hover:underline"
                                >
                                    Become a Youth Partner
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTAs ─────────────────────────────────────────────────── */}
            <section id="register" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Primary — Senior registration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl p-10 text-white relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />
                            <div className="relative z-10 space-y-5">
                                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Ready to join us?</h3>
                                    <p className="text-white/70 leading-relaxed">
                                        Registration is open for adults in Ottawa. Spaces are limited, so secure your spot today.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                                    {['July 6 – Aug 14', 'Fridays · Ottawa', 'Free to attend'].map((d) => (
                                        <div key={d} className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#00C4A7]" />
                                            <span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://forms.gle/SWcJv1hNVARLAN5K6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                                >
                                    Register Now
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Secondary — Youth volunteer */}
                        <motion.div
                            id="volunteer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl border-2 border-[#00C4A7]/25 p-10 space-y-5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#00C4A7]/15 flex items-center justify-center">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Know a young person who wants to make a difference?</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We are looking for enthusiastic high school and university students to join our team as Youth Partner volunteers. No prior tech experience needed. Just bring curiosity and a willingness to learn alongside our participants.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                                {['HS & University students', 'Ottawa area', '~16 hours total'].map((d) => (
                                    <div key={d} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#003366]" />
                                        <span>{d}</span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#003366] text-[#003366] font-bold rounded-xl hover:bg-[#003366] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Volunteer with Us
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Closing & Footer Credits ──────────────────────────────── */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                            &ldquo;Digital inclusion is no longer only about internet access. It is about helping people feel confident participating in a world that is changing fast. That is exactly what this program is built to do.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-500"
                    >
                        {[
                            { label: 'Delivered by', value: 'Ottawa Responsible AI Hub (ORAH)' },
                            { label: 'Hosted at', value: 'Rideau-Rockcliffe Community Resource Centre (RRCRC)' },
                            { label: 'Funded by', value: '🇨🇦 Government of Canada, New Horizons for Seniors Program (NHSP)' },
                        ].map((credit) => (
                            <div key={credit.label} className="text-center">
                                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{credit.label}</div>
                                <div className="font-medium text-gray-700">{credit.value}</div>
                            </div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-8">
                        <a
                            href="https://www.responsibleaiottawa.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#00C4A7] font-medium hover:underline"
                        >
                            www.responsibleaiottawa.ca
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
