import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { defaultMetadata } from "@/lib/metadata";
import {
  StructuredData,
  organizationSchema,
  websiteSchema,
} from "@/components/structured-data";
import CookieConsentWrapper from "@/components/cookie-consent-wrapper";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MWVJD7L2');
    `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VLLMV7P8BZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VLLMV7P8BZ');
  `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`antialiased bg-gradient-to-b from-cyan-50 via-cyan-50 to-white min-h-screen scroll-smooth overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWVJD7L2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <GoogleAnalytics />
        <NavBar />
        {children}
        <Footer />
        <CookieConsentWrapper />
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
