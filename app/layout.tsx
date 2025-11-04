import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { StructuredData } from './structured-data'
import { ConditionalHeader } from './conditional-header'
import { HeadBreadcrumbs } from './head-breadcrumbs'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://danielwenz.de/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Daniel Wenz - Krypto-Experte & Fintech-Gründer',
    template: '%s | Daniel Wenz'
  },
  description:  'Co-Founder von Finanzwissen GmbH und Founder von Bitcoin2Go. Spezialist für Kryptowährungsmärkte, DeFi und Finanzbildung.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <StructuredData pathname="/" breadcrumbs={false} />
        <HeadBreadcrumbs />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <ConditionalHeader />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
