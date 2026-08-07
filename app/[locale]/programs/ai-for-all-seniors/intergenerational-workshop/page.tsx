'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowLeft, ArrowRight, ExternalLink, Calendar, Clock, MapPin,
    Users, Sparkles, Mic, Coffee, Palette, Award, PartyPopper, UserRound,
} from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const agenda = [
    { time: '4:30 PM', title: 'Arrival & Welcome', icon: Users },
    { time: '4:40 PM', title: 'Opening & Framing', icon: Sparkles },
    {
        time: '4:45 PM',
        title: 'Panel: Beyond the Digital Divide: Advancing AI Literacy for All',
        desc: 'Moderated by Tina Crouse, with panellists Temi George, Saurabh Tyagi, Ifeoma Okonji, and Luc Lalande.',
        icon: Mic,
        highlight: true,
    },
    { time: '5:15 PM', title: 'Refreshment Break', icon: Coffee },
    { time: '5:20 PM', title: 'Art Capstone Project', icon: Palette },
    { time: '6:20 PM', title: 'Presentation of Certificates', icon: Award },
    { time: '6:25 PM', title: 'Closing & Networking', icon: PartyPopper },
]

const moderator = {
    name: 'Tina Crouse',
    title: 'Moderator · Responsible AI Practitioner',
    image: '/tina.jpeg',
    bio: 'Tina is a Responsible AI practitioner and advocate for Diversity, Equity and Inclusion in AI education and training for women, seniors and under-represented groups. She has been speaking in-person and online about AI and its impact since 2022. She is a member of Women in AI Canada, Women Defining AI, Global Council for Responsible AI, and The AI Collective.',
}

const panelists = [
    {
        name: 'Temi George',
        title: 'Founder, Social Fits (Canada)',
        image: '/temi-george.jpeg',
        bio: 'Temi George is a community leader, fitness coach, and nonprofit founder dedicated to creating spaces where newcomers and underrepresented communities find their sense of belonging. Through the Social Fit Project, she has used fitness and sports as tools to reduce isolation, build confidence, and strengthen social connections for immigrants and newcomers to Canada.',
    },
    {
        name: 'Saurabh Tyagi',
        title: "AI Governance Lead, Queen's University, Kingston (Canada)",
        image: '/saurabh-tyagi.jpeg',
        bio: "Saurabh Tyagi is an AI Strategy and Governance leader with over two decades of experience in enterprise strategy, governance, operations, and digital transformation across higher education, healthcare, and government. He also serves as COO for the Global Council for Responsible AI – Canada Chapter. His credentials include AIGP®, PMP®, and ITIL Expert®.",
    },
    {
        name: 'Ifeoma Okonji',
        title: 'Founder & Executive Director, Emerging Lives Initiative (ELI), Canada',
        image: '/ifeoma-okonji.jpeg',
        bio: 'Ifeoma Okonji is the Founder and Executive Director of Emerging Lives Initiative (ELI), a Canadian registered charity dedicated to empowering youth, women, and seniors through leadership development, mental resilience, entrepreneurship, technology, and intergenerational learning. She has more than a decade of experience in nonprofit leadership and community development.',
    },
    {
        name: 'Luc Lalande',
        title: 'Innovator-in-Residence, Rideau-Rockcliffe Community Resource Centre & Carlington Community Health Centre',
        image: '/luc-lalande.jpg',
        bio: 'Luc Lalande is an educator, mentor, community innovation practitioner and civic entrepreneur with extensive experience across academic, industry, and government sectors. As Innovator-in-Residence at the Rideau-Rockcliffe Community Resource Centre, he has introduced award-winning use cases for creatively applying generative AI tools in the centre’s programs for seniors.',
    },
]

function SpeakerCard({ name, title, image, bio, featured = false }: { name: string; title: string; image: string; bio: string; featured?: boolean }) {
    const [imgError, setImgError] = useState(false)

    return (
        <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex gap-5 items-start ${featured ? 'md:items-center' : ''}`}>
            {!imgError ? (
                <img
                    src={image}
                    alt={name}
                    onError={() => setImgError(true)}
                    className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                />
            ) : (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                    <UserRound className="w-9 h-9 text-[#003366]/40" />
                </div>
            )}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-[#003366] font-medium">{title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
            </div>
        </div>
    )
}

export default function IntergenerationalWorkshopPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#00C4A7]/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#003366_0%,_transparent_65%)] opacity-[0.05]" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-16">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">

                        <motion.div variants={itemVariants}>
                            <Link href="/programs/ai-for-all-seniors" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#003366] transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Back to AI for All: Empowering Seniors
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/8 w-fit">
                            <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                            <span className="text-sm font-medium text-[#00C4A7] tracking-wide">Closing Event · AI for All</span>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                                <span className="text-[#003366]">Intergenerational</span>
                                <span className="block bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">AI Literacy Workshop</span>
                            </h1>
                            <p className="text-2xl font-medium text-gray-500 leading-snug">Empowering Seniors with AI Literacy</p>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            Theme: <span className="font-semibold text-[#003366]">Beyond the Digital Divide: Advancing AI Literacy for All.</span> Join us for a hands-on practice session, an intergenerational panel discussion, and a closing celebration marking the finale of the AI for All: Empowering Seniors program.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4 pt-2">
                            {[
                                { icon: Calendar, label: 'Date', value: 'Friday, August 14, 2026' },
                                { icon: Clock, label: 'Time', value: '4:30 PM – 6:30 PM' },
                                { icon: MapPin, label: 'Location', value: 'Rideau-Rockcliffe Community Resource Centre', sub: '815 St. Laurent Blvd., Ottawa' },
                            ].map((d, i) => {
                                const Icon = d.icon
                                return (
                                    <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
                                        <div className="w-9 h-9 rounded-xl bg-[#00C4A7]/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-[#00C4A7]" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{d.label}</div>
                                            <div className="text-sm font-semibold text-gray-900">{d.value}</div>
                                            {d.sub && <div className="text-xs text-gray-500 mt-0.5">{d.sub}</div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap pt-2">
                            <a href="https://forms.gle/SWcJv1hNVARLAN5K6" target="_blank" rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00C4A7]/25 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                                Register Now <ExternalLink className="w-4 h-4" />
                            </a>
                            <a href="#speakers"
                                className="px-8 py-3.5 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-xl hover:bg-[#00C4A7]/8 transition-all duration-300">
                                Meet the Speakers
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── Agenda ───────────────────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Programme</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Agenda</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">Two hours of hands-on practice, dialogue across generations, and celebration.</p>
                    </motion.div>

                    <div className="space-y-4">
                        {agenda.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.06 }} viewport={{ once: true }}
                                    className={`flex gap-5 items-start rounded-2xl border p-6 transition-all duration-300 ${item.highlight
                                        ? 'bg-gradient-to-br from-[#003366] to-[#004e99] border-transparent shadow-lg shadow-[#003366]/20 text-white'
                                        : 'bg-white border-gray-100 shadow-sm'}`}>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-white/15' : 'bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10'}`}>
                                        <Icon className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-[#003366]'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                                            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${item.highlight ? 'bg-white/15 text-white/85' : 'bg-gray-100 text-gray-500'}`}>
                                                <Clock className="w-3 h-3" />{item.time}
                                            </span>
                                        </div>
                                        <h3 className={`text-lg font-bold ${item.highlight ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                                        {item.desc && <p className={`text-sm mt-1.5 leading-relaxed ${item.highlight ? 'text-white/75' : 'text-gray-500'}`}>{item.desc}</p>}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Speakers ─────────────────────────────────────────────── */}
            <section id="speakers" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">Meet Our Speakers</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Panel: Beyond the Digital Divide</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">A moderated conversation on advancing AI literacy for all, featuring voices from community, academia, and civic innovation.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-6">
                        <SpeakerCard {...moderator} featured />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {panelists.map((p, i) => (
                            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.08 }} viewport={{ once: true }}>
                                <SpeakerCard {...p} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }} viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="space-y-3 max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold">Join us for the closing celebration</h3>
                                <p className="text-white/70 leading-relaxed">Whether you’ve attended every session or you’re joining for the first time, everyone is welcome at this free, community event.</p>
                            </div>
                            <a href="https://forms.gle/SWcJv1hNVARLAN5K6" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex-shrink-0">
                                Register Now <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex items-center justify-center gap-4 mt-10">
                        <img src="/nhsp.png" alt="New Horizons for Seniors Program" className="h-10 w-auto object-contain opacity-80" />
                    </div>
                </div>
            </section>

        </main>
    )
}
