import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/breadcrumbs'

type StructuredDataProps = {
  pathname?: string
  breadcrumbs?: boolean
  article?: {
    title: string
    description: string
    publishedTime?: string
    modifiedTime?: string
    image?: string
    author?: string
    url?: string
  }
}

export function StructuredData({ 
  pathname = '/', 
  breadcrumbs: includeBreadcrumbs = false, 
  article 
}: StructuredDataProps = {}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://danielwenz.de/#website",
    "name": "Daniel Wenz",
    "url": "https://danielwenz.de",
    "description": "Founder von Bitcoin2Go und Co-Founder der Finanzwissen GmbH, die 2026 mehrheitlich an die Börsenmedien AG verkauft wurde. Spezialist für Kryptowährungsmärkte, Finanzanalysen und -bildung. Master-Absolvent in Wirtschaftsingenieurwesen am KIT.",
    "publisher": {
      "@id": "https://danielwenz.de/#person"
    },
    "inLanguage": ["de", "en"]
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://danielwenz.de/#person",
    "name": "Daniel Wenz",
    "alternateName": "Daniel Wenz",
    "url": "https://danielwenz.de",
    "image": [
      "https://danielwenz.de/daniel-wenz.png",
      "https://danielwenz.de/daniel-wenz-und-mirco-recksiek.jpg"
    ],
    "description": "Daniel Wenz ist ein deutscher Unternehmer und Krypto-Experte, der sich auf die Bereiche Finanzbildung und Kryptowährungen spezialisiert hat. Als Founder der Bitcoin2Go GmbH und Co-Founder der Finanzwissen GmbH hat er zwei der führenden Plattformen im deutschsprachigen Fintech-Bereich aufgebaut. Die Finanzwissen GmbH wurde 2026 mehrheitlich an die Börsenmedien AG verkauft. Mit einem Master-Abschluss in Wirtschaftsingenieurwesen am KIT mit Note 1,0 bringt er sowohl akademische Exzellenz als auch praktische Unternehmererfahrung mit.",
    "sameAs": [
      "https://www.linkedin.com/in/daniel-wenz/",
      "https://www.linkedin.com/in/daniel-wenz/?originalSubdomain=de",
      "https://bitcoin-2go.de/author/daniel-wenz/",
      "https://finanzwissen.de/autor/daniel/"
    ],
    "jobTitle": ["Founder Bitcoin2Go GmbH", "Co-Founder Finanzwissen GmbH", "Fintech Entrepreneur", "Krypto-Experte"],
    "email": "daniel@bitcoin-2go.de",
    "nationality": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Graben-Neudorf",
      "addressRegion": "Baden-Württemberg",
      "postalCode": "76676",
      "addressCountry": "DE"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Karlsruher Institut für Technologie (KIT)",
      "sameAs": "https://www.kit.edu/"
    },
    "knowsAbout": [
      "Kryptowährungen",
      "Bitcoin",
      "DeFi",
      "Finanzanalyse",
      "Finanzbildung",
      "Wirtschaftsingenieurwesen",
      "Blockchain",
      "Distributed Ledger Technology",
      "Asset Pricing",
      "Cryptocurrency Markets",
      "Fintech",
      "Entrepreneurship",
      "Digital Finance",
      "Cryptocurrency Trading"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Founder",
        "occupationLocation": {
          "@type": "Place",
          "name": "Bitcoin2Go GmbH"
        },
        "description": "Das führende Kryptovergleichs- und Newsportal im DACH-Raum mit über 7 Mio. jährlichen Page Views und 300.000+ Social-Media-Abonnenten."
      },
      {
        "@type": "Occupation",
        "name": "Co-Founder",
        "occupationLocation": {
          "@type": "Place",
          "name": "Finanzwissen GmbH"
        },
        "description": "Finanzbildungs- und Vergleichsplattform. 2026 mehrheitlich an die Börsenmedien AG verkauft."
      }
    ],
    "award": [
      "Master of Science Wirtschaftsingenieurwesen mit Note 1,0",
      "Bachelor Wirtschaftsingenieurwesen mit Note 1,3"
    ],
    "givenName": "Daniel",
    "familyName": "Wenz",
    "mainEntityOfPage": {
      "@id": "https://danielwenz.de/#webpage"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Finanzwissen GmbH",
    "url": "https://finanzwissen.de",
    "description": "Finanzbildungs- und Vergleichsplattform. 2026 mehrheitlich an die Börsenmedien AG verkauft.",
    "founder": {
      "@type": "Person",
      "name": "Daniel Wenz"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    }
  }

  const bitcoin2GoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bitcoin2Go GmbH",
    "url": "https://bitcoin-2go.de",
    "description": "Das führende Kryptovergleichs- und Newsportal im DACH-Raum mit über 7 Mio. jährlichen Page Views und 300.000+ Social-Media-Abonnenten.",
    "founder": {
      "@type": "Person",
      "name": "Daniel Wenz"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    }
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://danielwenz.de/#webpage",
    "url": "https://danielwenz.de",
    "name": "Daniel Wenz - Offizielle Seite",
    "inLanguage": ["de", "en"],
    "mainEntity": {
      "@id": "https://danielwenz.de/#person"
    }
  }

  // Generate breadcrumb schema if requested
  const breadcrumbSchema = includeBreadcrumbs && pathname !== '/' 
    ? generateBreadcrumbSchema(generateBreadcrumbs(pathname))
    : null

  // Generate article schema if provided
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image ? [article.image] : undefined,
    "author": {
      "@type": "Person",
      "@id": "https://danielwenz.de/#person",
      "name": article.author || "Daniel Wenz"
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://danielwenz.de/#person",
      "name": "Daniel Wenz"
    },
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url || `https://danielwenz.de${pathname}`
    }
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bitcoin2GoSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema)
          }}
        />
      )}
    </>
  )
}
