import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Ottawa Responsible AI Hub",
  description: "Read the latest insights, research, and perspectives on responsible AI from the Ottawa Responsible AI Hub community.",
  openGraph: {
    title: "Blog - Ottawa Responsible AI Hub",
    description: "Read the latest insights, research, and perspectives on responsible AI from the Ottawa Responsible AI Hub community.",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}