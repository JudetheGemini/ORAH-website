import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Theory of Change - Ottawa Responsible AI Hub",
  description: "Discover ORAH's comprehensive framework for building responsible AI solutions through strategic inputs, activities, and measurable outcomes.",
  openGraph: {
    title: "Theory of Change - Ottawa Responsible AI Hub",
    description: "Discover ORAH's comprehensive framework for building responsible AI solutions through strategic inputs, activities, and measurable outcomes.",
  },
}

export default function TheoryOfChangeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}