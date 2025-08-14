import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events - Ottawa Responsible AI Hub",
  description: "Join ORAH's workshops, conferences, and community gatherings focused on responsible AI practices and education in Ottawa.",
  openGraph: {
    title: "Events - Ottawa Responsible AI Hub",
    description: "Join ORAH's workshops, conferences, and community gatherings focused on responsible AI practices and education in Ottawa.",
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}