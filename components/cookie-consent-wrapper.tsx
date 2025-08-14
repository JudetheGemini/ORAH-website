"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentWrapper() {
  useEffect(() => {
    CookieConsent.run({
      cookie: {
        name: "cc_cookie",
        expiresAfterDays: 7,
      },
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
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: "_gid" },
            ],
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {},
              onReject: () => {},
            },
          },
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description: "We use cookies to improve your experience and gather simple analytics.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              sections: [
                {
                  title: "Strictly Necessary",
                  description: "Essential cookies for website functionality.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description: "Help us understand how visitors use our website.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}