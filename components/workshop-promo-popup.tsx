"use client"

import EventPromoPopup from "@/components/event-promo-popup"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export default function WorkshopPromoPopup() {
    const t = useTranslations("workshopPopup")

    return (
        <EventPromoPopup
            eventId="intergenerational-workshop-2026"
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            details={[
                { icon: Calendar, text: t("detailDate") },
                { icon: Clock, text: t("detailTime") },
                { icon: MapPin, text: t("detailLocation") },
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
                url: "/programs/ai-for-all-seniors/intergenerational-workshop",
                external: false,
            }}
        />
    )
}
