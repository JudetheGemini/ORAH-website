import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Ottawa Responsible AI Hub",
  description: "ORAH is a community-driven initiative to promote responsible AI practices in Ottawa.",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ecfeff" />
      </head>
      <body
        className={`antialiased bg-gradient-to-b from-cyan-50 via-cyan-50 to-white min-h-screen`}
      >
        <NavBar />
        {children}
        {/* Load Flowbite JS asynchronously using Next.js Script component */}
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="afterInteractive"
        />
      </body>
      <Footer />
    </html>
  );
}
