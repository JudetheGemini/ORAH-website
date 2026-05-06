'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Sparkles, LucideIcon } from 'lucide-react'

interface EventDetail {
    icon: LucideIcon
    text: string
}

interface EventPromoPopupProps {
    // Event identification
    eventId: string // Unique ID for sessionStorage (e.g., 'ai-for-all-2026')
    
    // Header content
    badge?: string // e.g., 'NEW PROGRAM', 'EARLY BIRD', 'LAST CHANCE'
    title: string
    description: string
    
    // Event details
    details: EventDetail[]
    
    // Benefits/highlights
    benefitsTitle?: string
    benefits: string[]
    
    // Actions
    primaryAction: {
        text: string
        url: string
        external?: boolean
    }
    secondaryAction?: {
        text: string
        url: string
        external?: boolean
    }
    
    // Timing
    delayMs?: number // Default: 2000ms
    
    // Styling
    gradientFrom?: string // Default: '#00C4A7'
    gradientTo?: string   // Default: '#003366'
    
    // Control
    isEnabled?: boolean // Default: true
}

export default function EventPromoPopup({
    eventId,
    badge = 'NEW EVENT',
    title,
    description,
    details,
    benefitsTitle = 'What You\'ll Gain:',
    benefits,
    primaryAction,
    secondaryAction,
    delayMs = 2000,
    gradientFrom = '#00C4A7',
    gradientTo = '#003366',
    isEnabled = true
}: EventPromoPopupProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!isEnabled) return

        // Check if popup has been shown in this session
        const popupShown = sessionStorage.getItem(`eventPopup_${eventId}`)
        
        if (!popupShown) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, delayMs)

            return () => clearTimeout(timer)
        }
    }, [eventId, delayMs, isEnabled])

    const handleClose = () => {
        setIsVisible(false)
        sessionStorage.setItem(`eventPopup_${eventId}`, 'true')
    }

    const handlePrimaryAction = () => {
        if (primaryAction.external) {
            window.open(primaryAction.url, '_blank')
        } else {
            window.location.href = primaryAction.url
        }
        handleClose()
    }

    const handleSecondaryAction = () => {
        if (!secondaryAction) return
        
        if (secondaryAction.external) {
            window.open(secondaryAction.url, '_blank')
        } else {
            window.location.href = secondaryAction.url
        }
        handleClose()
    }

    if (!isEnabled) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />
                    
                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 sm:mx-6 max-h-[90vh] overflow-y-auto"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                            {/* Header with gradient */}
                            <div 
                                className="relative p-4 sm:p-6 text-white"
                                style={{
                                    background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                                }}
                            >
                                <button
                                    onClick={handleClose}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors touch-manipulation"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                
                                <div className="flex items-center gap-2 mb-3 pr-10">
                                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                                    <span className="text-xs sm:text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                                        {badge}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg sm:text-xl font-bold mb-2 pr-10 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed pr-10">
                                    {description}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6 space-y-4">
                                {/* Event details */}
                                {details.length > 0 && (
                                    <div className="space-y-3">
                                        {details.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-3 text-sm text-gray-600">
                                                <detail.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: gradientFrom }} />
                                                <span className="leading-relaxed">{detail.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Benefits highlight */}
                                {benefits.length > 0 && (
                                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: gradientTo }}>
                                            {benefitsTitle}
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {benefits.map((benefit, index) => (
                                                <li key={index} className="leading-relaxed">• {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <button
                                        onClick={handlePrimaryAction}
                                        className="w-full sm:flex-1 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm inline-flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
                                        style={{
                                            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                                        }}
                                    >
                                        {primaryAction.text}
                                        {primaryAction.external && <ExternalLink className="w-4 h-4" />}
                                    </button>
                                    
                                    {secondaryAction && (
                                        <button
                                            onClick={handleSecondaryAction}
                                            className="w-full sm:flex-1 border-2 font-semibold py-3 px-4 rounded-lg hover:bg-opacity-10 transition-all duration-300 text-sm touch-manipulation min-h-[44px] inline-flex items-center justify-center gap-1"
                                            style={{
                                                borderColor: gradientFrom,
                                                color: gradientTo,
                                                backgroundColor: 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = `${gradientFrom}1A` // 10% opacity
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent'
                                            }}
                                        >
                                            {secondaryAction.text}
                                            {secondaryAction.external && <ExternalLink className="w-4 h-4" />}
                                        </button>
                                    )}
                                </div>

                                {/* Small disclaimer */}
                                <p className="text-xs text-gray-500 text-center leading-relaxed">
                                    This popup won't show again during your visit
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}