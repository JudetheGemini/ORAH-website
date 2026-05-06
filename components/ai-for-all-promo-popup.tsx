import EventPromoPopup from "@/components/event-promo-popup";
import { aiForAllPopupConfig } from "@/lib/popup-configs";

export default function AIForAllPromoPopup() {
    return (
        <EventPromoPopup {...aiForAllPopupConfig} />
    )
}