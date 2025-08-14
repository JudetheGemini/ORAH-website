import { Metadata } from 'next'

export const siteConfig = {
  name: 'Ottawa Responsible AI Hub',
  description: 'ORAH is a community-driven initiative to promote responsible AI practices in Ottawa.',
  url: 'https://orah.ca',
  ogImage: '/logo.svg',
  links: {
    twitter: 'https://twitter.com/orah',
    linkedin: 'https://linkedin.com/company/orah',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI ethics',
    'responsible AI',
    'Ottawa',
    'artificial intelligence',
    'AI governance',
    'AI education',
    'AI community',
    'ethical AI',
    'AI advocacy',
    'AI innovation',
  ],
  authors: [
    {
      name: 'Ottawa Responsible AI Hub',
      url: siteConfig.url,
    },
  ],
  creator: 'Ottawa Responsible AI Hub',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@orah',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/manifest.json',
}