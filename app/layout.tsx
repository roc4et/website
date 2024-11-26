import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'roc4et Services',
  description: 'roc4et.de - made by @roc4et',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'roc4et Services',
    description: 'Explore roc4et\'s exclusive services and community.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'roc4et Services',
    description: 'Discover unique services provided by roc4et.',
  },
  themeColor: '#f54269',
  }

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}