import { headers } from 'next/headers'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/breadcrumbs'

export async function HeadBreadcrumbs() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  // Only generate breadcrumbs for subpages
  if (pathname === '/' || pathname === '') {
    return null
  }

  const breadcrumbs = generateBreadcrumbs(pathname)
  const schema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

