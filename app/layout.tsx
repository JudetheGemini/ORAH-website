"use client";

import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Ottawa Responsible AI Hub",
//   description: "ORAH is a community-driven initiative to promote responsible AI practices in Ottawa.",
//   icons: {
//     icon: '/logo.svg',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Initialize Cookie Consent
      useEffect(() => {
        CookieConsent.run({
            // root: 'body',
            // autoShow: true,
            // disablePageInteraction: true,
            // hideFromBots: true,
            // mode: 'opt-in',
            // revision: 0,

            cookie: {
              name: "cc_cookie",
              // domain: location.hostname,
              // path: '/',
              // sameSite: "Lax",
              expiresAfterDays: 7,
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
            guiOptions: {
              consentModal: {
                layout: "cloud inline",
                position: "bottom center",
                equalWeightButtons: true,
                flipButtons: false,
              },
              preferencesModal: {
                layout: "box",
                equalWeightButtons: true,
                flipButtons: false,
              },
            },

            onFirstConsent: ({ cookie }) => {
              console.log("onFirstConsent fired", cookie);
            },

            onConsent: ({ cookie }) => {
              console.log("onConsent fired!", cookie);
            },

            onChange: ({ changedCategories, changedServices }) => {
              console.log(
                "onChange fired!",
                changedCategories,
                changedServices
              );
            },

            onModalReady: ({ modalName }) => {
              console.log("ready:", modalName);
            },

            onModalShow: ({ modalName }) => {
              console.log("visible:", modalName);
            },

            onModalHide: ({ modalName }) => {
              console.log("hidden:", modalName);
            },

            categories: {
              necessary: {
                enabled: true, // this category is enabled by default
                readOnly: true, // this category cannot be disabled
              },
              analytics: {
                autoClear: {
                  cookies: [
                    {
                      name: /^_ga/, // regex: match all cookies starting with '_ga'
                    },
                    {
                      name: "_gid", // string: exact cookie name
                    },
                  ],
                },

                // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
                services: {
                  ga: {
                    label: "Google Analytics",
                    onAccept: () => {},
                    onReject: () => {},
                  },
                  youtube: {
                    label: "Youtube Embed",
                    onAccept: () => {},
                    onReject: () => {},
                  },
                },
              },
              ads: {},
            },

            language: {
              default: "en",
              translations: {
                en: {
                  consentModal: {
                    title: "We use cookies",
                    description:
                      "We use cookies to improve your experience and gather simple analytics. By continuing, you agree to our use of cookies.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage Individual preferences",
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                        <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                    `,
                  },
                  preferencesModal: {
                    title: "Manage cookie preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Accept current selection",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                      {
                        title: "Your Privacy Choices",
                        description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                      },
                      {
                        title: "Strictly Necessary",
                        description:
                          "These cookies are essential for the proper functioning of the website and cannot be disabled.",

                        //this field will generate a toggle linked to the 'necessary' category
                        linkedCategory: "necessary",
                      },
                      {
                        title: "Performance and Analytics",
                        description:
                          "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                        linkedCategory: "analytics",
                        cookieTable: {
                          caption: "Cookie table",
                          headers: {
                            name: "Cookie",
                            domain: "Domain",
                            desc: "Description",
                          },
                          body: [
                            {
                              name: "_ga",
                              domain: location.hostname,
                              desc: "Description 1",
                            },
                            {
                              name: "_gid",
                              domain: location.hostname,
                              desc: "Description 2",
                            },
                          ],
                        },
                      },
                      {
                        title: "Targeting and Advertising",
                        description:
                          "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
                        linkedCategory: "ads",
                      },
                      {
                        title: "More information",
                        description:
                          'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                      },
                    ],
                  },
                },
              },
            },
          });
    }, []);
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ecfeff" />
         <title>Ottawa Responsible AI Hub</title>
 <meta name="description" content="ORAH is a community-driven initiative to promote responsible AI practices in Ottawa."/>
 <link rel="icon" href="/logo.svg"></link>
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
          <Footer />
      </body>
    
    </html>
  );
}
