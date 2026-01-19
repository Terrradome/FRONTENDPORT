import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cabin, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Iduwe Ekene Leonard | Frontend Engineer',
  description: 'Frontend Engineer building accessible, pixel-perfect digital experiences. View my portfolio showcasing real-world projects with React, Next.js, TypeScript, and modern frontend technologies.',
  keywords: ['Frontend Engineer', 'React Developer', 'Next.js', 'TypeScript', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Iduwe Ekene Leonard' }],
  openGraph: {
    title: 'Iduwe Ekene Leonard | Frontend Engineer',
    description: 'Frontend Engineer building accessible, pixel-perfect digital experiences for the web.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
