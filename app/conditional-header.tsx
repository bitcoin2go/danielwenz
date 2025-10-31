'use client'
import { usePathname } from 'next/navigation'
import { Header } from './header'

export function ConditionalHeader() {
  const pathname = usePathname()
  
  // Hide header on presse, impressum, and datenschutz pages
  if (pathname === '/presse' || pathname === '/impressum' || pathname === '/datenschutz') {
    return null
  }
  
  return <Header />
}
