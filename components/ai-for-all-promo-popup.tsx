"use client"

import EventPromoPopup from "@/components/event-promo-popup"
import { Calendar, MapPin, Users } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export default function AIForAllPromoPopup() {
    const t = useTranslations("popup")
    const locale = useLocale()

    return (
        <EventPromoPopup
            eventId="ai-for-all-2026"
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            details={[
                { icon: Calendar, text: t("detailDates") },
                { icon: MapPin,   text: t("detailLocation") },
                { icon: Users,    text: t("detailLanguage") },
            ]}
            benefitsTitle={t("benefitsTitle")}
            benefits={[t("benefit1"), t("benefit2"), t("benefit3")]}
            primaryAction={{
                text: t("primary"),
                url: "https://forms.gle/SWcJv1hNVARLAN5K6",
                external: true,
            }}
            secondaryAction={{
                text: t("secondary"),
                url: `/${locale}/programs/ai-for-all-seniors`,
                external: false,
            }}
        />
    )
}
