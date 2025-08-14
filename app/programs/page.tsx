import ORAHInitiatives from "@/components/Initiatives";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs - Ottawa Responsible AI Hub",
  description: "Explore ORAH's programs and initiatives focused on responsible AI education, advocacy, and community building in Ottawa.",
  openGraph: {
    title: "Programs - Ottawa Responsible AI Hub",
    description: "Explore ORAH's programs and initiatives focused on responsible AI education, advocacy, and community building in Ottawa.",
  },
}

export default function ProgramsPage() {
    return (

        <ORAHInitiatives />
       
    );
    }