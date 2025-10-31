'use client'
import { useState } from 'react'

export function Navigation() {
  const [activeTab, setActiveTab] = useState('ueber-mich')

  const navItems = [
    { id: 'ueber-mich', label: 'Über mich', href: '#ueber-mich' },
    { id: 'unternehmen', label: 'Unternehmen', href: '#unternehmen' },
    { id: 'bildung', label: 'Bildung', href: '#bildung' },
    { id: 'medienauftritte', label: 'Medienauftritte', href: '#medienauftritte' },
    { id: 'kontakt', label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-900 rounded-lg py-4 px-4 sm:px-8 mb-8 -mx-4 md:-mx-8">
      <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
              activeTab === item.id
                ? 'text-zinc-900 dark:text-zinc-100 font-semibold'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
