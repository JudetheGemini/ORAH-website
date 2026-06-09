import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ORAH - Ottawa Responsible AI Hub",
  description: "Learn about ORAH's mission to make Ottawa a global leader in responsible AI development, governance, and advocacy through education and collaboration.",
  openGraph: {
    title: "About ORAH - Ottawa Responsible AI Hub",
    description: "Learn about ORAH's mission to make Ottawa a global leader in responsible AI development, governance, and advocacy through education and collaboration.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}