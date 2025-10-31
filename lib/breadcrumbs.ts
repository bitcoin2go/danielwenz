export type BreadcrumbItem = {
  name: string
  url: string
}

/**
 * Generates breadcrumb list for a given path
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const baseUrl = 'https://daniel-wenz.vercel.app'
  const items: BreadcrumbItem[] = [
    {
      name: 'Startseite',
      url: `${baseUrl}/`,
    },
  ]

  // Remove leading and trailing slashes and split
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean)

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    
    // Convert URL segment to readable name
    let name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())

    // Special cases for known routes
    if (segment === 'presse') {
      name = 'Presse & Medien'
    } else if (segment === 'datenschutz') {
      name = 'Datenschutzerklärung'
    } else if (segment === 'impressum') {
      name = 'Impressum'
    } else if (segment === 'blog') {
      name = 'Blog'
    }

    items.push({
      name,
      url: `${baseUrl}${currentPath}`,
    })
  })

  return items
}

/**
 * Generates BreadcrumbList schema.org JSON-LD
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

