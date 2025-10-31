'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700">
          <Image
            src="/daniel-wenz.png"
            alt="Daniel Wenz - Fintech Entrepreneur und Krypto-Experte"
            width={64}
            height={64}
            className="rounded-full object-cover absolute inset-0"
            priority
          />
        </div>
        <div>
          <Link href="/" className="text-2xl font-medium text-black dark:text-white">
            <h1>Daniel Wenz</h1>
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Krypto-Experte & Fintech-Gründer
          </TextEffect>
        </div>
      </div>
      <nav className="hidden md:block">
        <Link 
          href="/presse" 
          className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
        >
          Presse
          <ChevronRight className="h-3 w-3" />
        </Link>
      </nav>
    </header>
  )
}
