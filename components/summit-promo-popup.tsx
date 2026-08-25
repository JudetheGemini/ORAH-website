"use client"

import EventPromoPopup from "@/components/event-promo-popup"
import { Calendar, MapPin, Users } from "lucide-react"
import { useTranslations } from "next-intl"

export default function SummitPromoPopup() {
    const t = useTranslations("summitPopup")

    return (
        <EventPromoPopup
            eventId="orais-2026"
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            details={[
                { icon: Calendar, text: t("detailDates") },
                { icon: MapPin, text: t("detailDay1") },
                { icon: MapPin, text: t("detailDay2") },
                { icon: Users, text: t("detailAttendees") },
            ]}
            benefitsTitle={t("benefitsTitle")}
            benefits={[t("benefit1"), t("benefit2"), t("benefit3")]}
            primaryAction={{
                text: t("primary"),
                url: "https://luma.com/96vw00ll",
                external: true,
            }}
            secondaryAction={{
                text: t("secondary"),
                url: "https://summitv2.responsibleaiottawa.ca",
                external: true,
            }}
        />
    )
}
