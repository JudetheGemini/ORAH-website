'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Calendar, Users, ArrowRight, Handshake } from 'lucide-react'
import Link from 'next/link'

interface Report {
  id: string
  title: string
  eventTitle: string
  date: string
  description: string
  attendees: number
  downloadUrl: string
  fileSize: string
  reportType: 'summary' | 'detailed' | 'insights'
  tags: string[]
}

const reportsData: Report[] = [
  {
    id: 'gfrai-march-2026',
    title: 'Global Forum for Responsible AI 2026 - Report',
    eventTitle: 'Global Forum for Responsible AI 2026',
    date: 'March 2026',
    description: 'Report from the Global Forum for Responsible AI held in Den Haag, Netherlands. Covers international dialogue on designing adaptable responsible AI frameworks grounded in data justice, knowledge exchange, and collaborative action.',
    attendees: 150,
    downloadUrl: '/reports/GFRAI REPORT.pdf',
    fileSize: '24 MB',
    reportType: 'detailed',
    tags: ['Global Forum', 'Data Justice', 'Governance', 'International'],
  },
  {
    id: 'inaugural-ai-summit-2025',
    title: 'Inaugural Responsible AI Summit 2025 - Report',
    eventTitle: 'Inaugural Responsible AI Summit 2025',
    date: 'November 19, 2025',
    description: 'Comprehensive report from Ottawa\'s first flagship conference on ethical AI governance. Includes keynote summaries, panel discussions on AI ethics, policy recommendations, and key takeaways from the "Governing Data and AI for Equity and Public Good" summit.',
    attendees: 250,
    downloadUrl: 'https://orahai-my.sharepoint.com/:b:/g/personal/j_okorie_responsibleaiottawa_ca/IQBOY3UES4B1RaLlzfQKj7VOAZeJndXolW1n5NC0WmK24-k?e=sqdkfM&download=1',
    fileSize: '15 MB',
    reportType: 'detailed',
    tags: ['AI Governance', 'Policy', 'Ethics', 'Community Insights'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const getReportTypeColor = (type: string) => {
  switch (type) {
    case 'summary':
      return 'bg-blue-100 text-blue-800'
    case 'detailed':
      return 'bg-emerald-100 text-emerald-800'
    case 'insights':
      return 'bg-amber-100 text-amber-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getReportTypeLabel = (type: string) => {
  switch (type) {
    case 'summary':
      return 'Summary'
    case 'detailed':
      return 'Detailed Report'
    case 'insights':
      return 'Key Insights'
    default:
      return 'Report'
  }
}

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#003366] to-[#00C4A7] py-20 md:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00C4A7] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00C4A7] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#00C4A7]" />
              <span className="text-[#00C4A7] font-semibold text-sm uppercase tracking-wider">
                Event Reports
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              ORAH Reports & <span className="text-[#00C4A7]">Insights</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto text-balance">
              Explore comprehensive reports from our community events. Access detailed findings, policy recommendations, and key insights from ORAH initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#003366]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-gradient-to-r from-[#002244] to-[#003d80] border border-white/10 rounded-2xl px-8 py-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#00C4A7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Handshake className="w-6 h-6 text-[#00C4A7]" />
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-[#00C4A7]/20 rounded-full mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00C4A7]">Sponsorship · ORAIS 2026</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Partner with the Ottawa Responsible AI Summit (ORAIS 2026)
                </h2>
                <p className="text-white/70 text-sm md:text-base max-w-2xl">
                  Position your organization at the forefront of Canada&apos;s responsible AI ecosystem. Explore our sponsorship opportunities to learn how your organization can engage with us.
                </p>
              </div>
            </div>
            <a
              href="/reports/ORAiS 2026 Sponsorship Packages.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C4A7] text-white font-semibold rounded-xl hover:bg-[#00a892] transition-colors duration-200 flex-shrink-0 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download Package
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reports Grid Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Available Reports
            </h2>
            {/* <p className="text-gray-600 text-lg">
              {reportsData.length === 1
                ? `We currently have ${reportsData.length} report available. More reports from upcoming events will be added soon.`
                : `Browse ${reportsData.length} reports from our community events.`}
            </p> */}
          </motion.div>

          {/* Reports Grid */}
          {reportsData.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {reportsData.map((report) => (
                <motion.div
                  key={report.id}
                  variants={itemVariants}
                  className="group h-full"
                >
                  <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#00C4A7] transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4A7]/10 flex flex-col">
                    {/* Card Header */}
                    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#003366]/5 to-[#00C4A7]/5">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <FileText className="w-8 h-8 text-[#00C4A7] flex-shrink-0" />
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getReportTypeColor(
                            report.reportType
                          )}`}
                        >
                          {getReportTypeLabel(report.reportType)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#003366] group-hover:text-[#00C4A7] transition-colors line-clamp-2">
                        {report.title}
                      </h3>
                    </div>

                    {/* Card Body */}
                    <div className="flex-1 p-6 space-y-4">
                      {/* Event Info */}
                      <div>
                        <h4 className="font-semibold text-[#003366] mb-2">
                          {report.eventTitle}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {report.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {report.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-[#00C4A7]/10 hover:text-[#00C4A7] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metadata */}
                      <div className="space-y-2 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#00C4A7]" />
                          <span>{report.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-[#00C4A7]" />
                          <span>{report.attendees}+ attendees</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-3">
                      <a
                        href={report.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#00C4A7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00A892] transition-colors duration-200 group/btn"
                      >
                        <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
                        Download
                      </a>
                      {/* <button className="px-4 py-2 border border-[#003366] text-[#003366] rounded-lg font-semibold hover:bg-[#003366] hover:text-white transition-colors duration-200">
                        <ArrowRight className="w-4 h-4" />
                      </button> */}
                    </div>

                    {/* File Size Info */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-center">
                      <p className="text-xs text-gray-500">
                        File size: <span className="font-semibold text-gray-700">{report.fileSize}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No reports available yet
              </h3>
              <p className="text-gray-600">
                Reports from upcoming ORAH events will be published here soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#003366] to-[#00C4A7] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Future Reports
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Subscribe to our newsletter to get notified when new event reports are published.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Join Our Community
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
