'use client'

import { usePathname } from 'next/navigation'
import { StructuredData } from './structured-data'

type StructuredDataWrapperProps = {
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

export function StructuredDataWrapper({ breadcrumbs, article }: StructuredDataWrapperProps = {}) {
  const pathname = usePathname()
  
  return <StructuredData pathname={pathname} breadcrumbs={breadcrumbs} article={article} />
}

