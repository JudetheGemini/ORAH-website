'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Globe2, ShieldCheck, ExternalLink, CheckCircle2, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function AIForAllSeniorsPage() {
    const t = useTranslations('seniors')

    const programDetails = [
        { icon: Calendar, label: t('detailDatesLabel'), value: t('detailDatesValue') },
        { icon: MapPin, label: t('detailLocationLabel'), value: t('detailLocationValue'), sub: t('detailLocationSub') },
        { icon: Clock, label: t('detailFormatLabel'), value: t('detailFormatValue') },
        { icon: Globe2, label: t('detailLanguageLabel'), value: t('detailLanguageValue') },
        { icon: ShieldCheck, label: t('detailAccessLabel'), value: t('detailAccessValue') },
    ]

    const whyItMatters = [t('why1'), t('why2'), t('why3'), t('why4')]

    const sessions = [
        {
            number: 1,
            date: t('s1Date'), time: t('s1Time'), title: t('s1Title'), description: t('s1Desc'),
            highlights: [t('s1h1'), t('s1h2'), t('s1h3'), t('s1h4')],
        },
        {
            number: 2,
            date: t('s2Date'), time: t('s2Time'), title: t('s2Title'), description: t('s2Desc'),
            highlights: [t('s2h1'), t('s2h2'), t('s2h3'), t('s2h4')],
        },
        {
            number: 3,
            date: t('s3Date'), time: t('s3Time'), title: t('s3Title'), description: t('s3Desc'),
            highlights: [t('s3h1'), t('s3h2'), t('s3h3'), t('s3h4')],
        },
        {
            number: 4,
            date: t('s4Date'), time: t('s4Time'), title: t('s4Title'), description: t('s4Desc'),
            highlights: [t('s4h1'), t('s4h2'), t('s4h3'), t('s4h4')],
        },
        {
            number: 5,
            date: t('s5Date'), time: t('s5Time'), title: t('s5Title'), description: t('s5Desc'),
            highlights: [t('s5h1'), t('s5h2'), t('s5h3'), t('s5h4')],
            isClosing: true,
        },
    ]

    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#00C4A7]/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#003366_0%,_transparent_65%)] opacity-[0.05]" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-16">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible"
                        className="grid lg:grid-cols-2 gap-16 items-center">

                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/8 w-fit">
                                <div className="w-2 h-2 rounded-full bg-[#00C4A7] animate-pulse" />
                                <span className="text-sm font-medium text-[#00C4A7] tracking-wide">{t('eyebrow')}</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                                    <span className="text-[#003366]">{t('heroTitle1')}</span>
                                    <span className="block bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">{t('heroTitle2')}</span>
                                </h1>
                                <p className="text-2xl font-medium text-gray-500 leading-snug">{t('tagline')}</p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">{t('hero1')}</p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">{t('hero2')}</p>
                            <p className="text-base text-[#003366] font-medium">{t('noTechRequired')}</p>

                            <div className="flex gap-4 flex-wrap pt-2">
                                <a href="https://forms.gle/SWcJv1hNVARLAN5K6" target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-3.5 bg-gradient-to-r from-[#00C4A7] to-[#003366] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#00C4A7]/25 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                                    {t('registerNow')} <ExternalLink className="w-4 h-4" />
                                </a>
                                <a href="#about"
                                    className="px-8 py-3.5 border-2 border-[#00C4A7] text-[#003366] font-semibold rounded-xl hover:bg-[#00C4A7]/8 transition-all duration-300">
                                    {t('learnMore')}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-5">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#003366]/15">
                                <img src="/ai_for_all_empowering_seniors.jpg" alt="Senior participant in the AI for All program at RRCRC Ottawa"
                                    className="w-full h-[420px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-xl font-bold mb-1">{t('heroImageCaption')}</h3>
                                    <p className="text-white/80 text-sm">{t('heroImageFunded')}</p>
                                </div>
                            </div>

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
                                                {'sub' in detail && <div className="text-xs text-gray-500 mt-0.5">{detail.sub}</div>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 py-4">
                                <img src="/nhsp.jpeg" alt="New Horizons for Seniors Program" className="h-10 w-auto object-contain flex-shrink-0" />
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{t('fundedByLabel')}</div>
                                    <div className="text-sm font-semibold text-gray-800">{t('fundedByName')}</div>
                                    <div className="text-xs text-gray-500">{t('fundedByProgram')}</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── About ────────────────────────────────────────────────── */}
            <section id="about" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
                            <div>
                                <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t('aboutEyebrow')}</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    {t('aboutTitle')}{' '}
                                    <span className="bg-gradient-to-r from-[#00C4A7] to-[#003366] bg-clip-text text-transparent">{t('aboutTitleAccent')}</span>
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">{t('aboutBody1')}</p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t.rich('aboutBody2', {
                                    cohort: () => <span className="font-medium text-gray-800">{t('aboutCohort')}</span>,
                                })}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">{t('aboutBody3')}</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }} viewport={{ once: true }}>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('whyTitle')}</h3>
                                <ul className="space-y-5">
                                    {whyItMatters.map((point, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-[#00C4A7] flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-600 leading-relaxed text-sm">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <img src="/nhsp.jpeg" alt="NHSP" className="h-8 w-auto object-contain flex-shrink-0" />
                                        <span className="text-sm text-gray-500">{t('fundedFull')}</span>
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
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t('sessionsEyebrow')}</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{t('sessionsTitle')}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">{t('sessionsSubtitle')}</p>
                    </motion.div>

                    <div className="space-y-5">
                        {sessions.map((session, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.07 }} viewport={{ once: true }}
                                className={`flex gap-6 items-start rounded-2xl border p-6 transition-all duration-300 group ${session.isClosing
                                    ? 'bg-gradient-to-br from-[#003366] to-[#004e99] border-transparent shadow-lg shadow-[#003366]/20 text-white'
                                    : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-[#00C4A7]/25'}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${session.isClosing ? 'bg-white/15' : 'bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 group-hover:from-[#00C4A7]/25'}`}>
                                    <span className={`text-2xl font-bold ${session.isClosing ? 'text-white' : 'text-[#003366]'}`}>{session.number}</span>
                                </div>
                                <div className="pt-1 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00C4A7]">
                                            {t('sessionLabel')} {session.number}
                                        </span>
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${session.isClosing ? 'bg-white/15 text-white/80' : 'bg-gray-100 text-gray-500'}`}>
                                            <Calendar className="w-3 h-3" />{session.date}
                                        </span>
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${session.isClosing ? 'bg-white/15 text-white/80' : 'bg-gray-100 text-gray-500'}`}>
                                            <Clock className="w-3 h-3" />{session.time}
                                        </span>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 transition-colors ${session.isClosing ? 'text-white' : 'text-gray-900 group-hover:text-[#003366]'}`}>
                                        {session.title}
                                    </h3>
                                    <p className={`leading-relaxed mb-4 ${session.isClosing ? 'text-white/70' : 'text-gray-500'}`}>{session.description}</p>
                                    <ul className="space-y-2">
                                        {session.highlights.map((h, j) => (
                                            <li key={j} className={`flex items-start gap-2.5 text-sm ${session.isClosing ? 'text-white/75' : 'text-gray-600'}`}>
                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#00C4A7]" />{h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
                        className="text-center text-sm text-gray-400 mt-8">
                        {t('sessionFooter')}
                    </motion.p>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[#00C4A7] font-semibold uppercase tracking-widest text-sm mb-3">{t('teamEyebrow')}</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{t('teamTitle')}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">{t('teamSubtitle')}</p>
                    </motion.div>

                    {/* Coming soon cards */}
                    {[
                        { emoji: '🎓', titleKey: 'leadFacilitatorTitle', descKey: 'leadFacilitatorDesc' },
                        { emoji: '👤', titleKey: 'programmeLeadTitle', descKey: 'detailsConfirmed' },
                    ].map((card, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }} viewport={{ once: true }}
                            className={`bg-white rounded-2xl border border-dashed border-[#00C4A7]/40 p-7 flex gap-5 items-start ${i === 0 ? 'mb-6' : 'mb-6'}`}>
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl">{card.emoji}</span>
                            </div>
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{t('comingSoon')}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{t(card.titleKey as Parameters<typeof t>[0])}</h3>
                                <p className="text-sm text-[#003366] font-medium">{t('toBeConfirmed')}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{t(card.descKey as Parameters<typeof t>[0])}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Panel moderator */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-dashed border-[#00C4A7]/40 p-7 flex gap-5 items-start mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4A7]/15 to-[#003366]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-3xl">🎙️</span>
                        </div>
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{t('comingSoon')}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{t('panelModeratorTitle')}</h3>
                            <p className="text-sm text-[#003366] font-medium">{t('toBeConfirmed')}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{t('detailsConfirmed')}</p>
                        </div>
                    </motion.div>

                    {/* Youth Partners */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-2xl p-8 text-white">
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{t('youthPartnersTitle')}</h3>
                                <p className="text-white/75 leading-relaxed max-w-2xl">{t('youthPartnersBody')}</p>
                                <a href="#volunteer" className="mt-5 inline-flex items-center gap-2 text-[#00C4A7] font-semibold text-sm hover:underline">
                                    {t('becomePartner')} <ExternalLink className="w-4 h-4" />
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

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }} viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#003366] to-[#004e99] rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#00C4A7_0%,_transparent_60%)] opacity-20" />
                            <div className="relative z-10 space-y-5">
                                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{t('ctaTitle')}</h3>
                                    <p className="text-white/70 leading-relaxed">{t('ctaBody')}</p>
                                </div>
                                <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                                    {[t('ctaDetail1'), t('ctaDetail2'), t('ctaDetail3')].map((d) => (
                                        <div key={d} className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#00C4A7]" /><span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="https://forms.gle/SWcJv1hNVARLAN5K6" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C4A7] text-white font-bold rounded-xl hover:bg-[#00a88e] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                                    {t('registerNow')} <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div id="volunteer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl border-2 border-[#00C4A7]/25 p-10 space-y-5">
                            <div className="w-12 h-12 rounded-xl bg-[#00C4A7]/15 flex items-center justify-center">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('volunteerTitle')}</h3>
                                <p className="text-gray-600 leading-relaxed">{t('volunteerBody')}</p>
                            </div>
                            <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                                {[t('volunteerDetail1'), t('volunteerDetail2'), t('volunteerDetail3')].map((d) => (
                                    <div key={d} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#003366]" /><span>{d}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYU_-Q9OY0jlQ0W2d1gbv3COnecnaCp7nJrdCnAER8vU0zyg/viewform"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#003366] text-[#003366] font-bold rounded-xl hover:bg-[#003366] hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                                {t('volunteerBtn')} <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Closing ──────────────────────────────────────────────── */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                            &ldquo;{t('closingQuote')}&rdquo;
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-500">
                        {[
                            { label: t('creditDeliveredBy'), value: t('creditDeliveredByValue') },
                            { label: t('creditHostedAt'), value: t('creditHostedAtValue') },
                            { label: t('creditFundedBy'), value: t('creditFundedByValue') },
                        ].map((credit) => (
                            <div key={credit.label} className="text-center">
                                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{credit.label}</div>
                                <div className="font-medium text-gray-700">{credit.value}</div>
                            </div>
                        ))}
                        <div className="w-full flex justify-center mt-4">
                            <img src="/nhsp.jpeg" alt="New Horizons for Seniors Program" className="h-12 w-auto object-contain opacity-80" />
                        </div>
                    </motion.div>

                    <div className="text-center mt-8">
                        <a href="https://www.responsibleaiottawa.ca" target="_blank" rel="noopener noreferrer"
                            className="text-sm text-[#00C4A7] font-medium hover:underline">
                            www.responsibleaiottawa.ca
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
