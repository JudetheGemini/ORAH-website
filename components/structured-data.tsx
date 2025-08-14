import Script from 'next/script'

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ottawa Responsible AI Hub',
  alternateName: 'ORAH',
  url: 'https://orah.ca',
  logo: 'https://orah.ca/logo.svg',
  description: 'ORAH is a community-driven initiative to promote responsible AI practices in Ottawa.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://twitter.com/orah',
    'https://linkedin.com/company/orah',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ottawa Responsible AI Hub',
  url: 'https://orah.ca',
  description: 'ORAH is a community-driven initiative to promote responsible AI practices in Ottawa.',
  publisher: {
    '@type': 'Organization',
    name: 'Ottawa Responsible AI Hub',
  },
}