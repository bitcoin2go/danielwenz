'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'
import { usePathname } from 'next/navigation'

export function Breadcrumbs() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }

  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6"
    >
      <ol className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={crumb.url} className="flex items-center gap-2">
              {index === 0 ? (
                <Link
                  href={crumb.url}
                  className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>{crumb.name}</span>
                </Link>
              ) : isLast ? (
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.url}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                >
                  <span>{crumb.name}</span>
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

