import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mount Auburn Cemetery — Cambridge, Massachusetts',
    template: '%s | Mount Auburn Cemetery',
  },
  description:
    "America's first garden cemetery — 175 acres of designed landscape, botanical garden, and active memorial destination in Cambridge, Massachusetts. Founded 1831. National Historic Landmark.",
  keywords: [
    'Mount Auburn Cemetery',
    'Cambridge',
    'Massachusetts',
    'garden cemetery',
    'arboretum',
    'historic landmark',
    'burial',
    'memorial',
  ],
  openGraph: {
    siteName: 'Mount Auburn Cemetery',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
