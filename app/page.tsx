'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Instagram, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Custom Discord icon to match official design
const DiscordIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
  </svg>
)

// Enhanced TikTok icon with thicker strokes
const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function Page() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <meta name="description" content="roc4et.de - made by @roc4et" />
        <meta property="og:title" content="roc4et Services" />
        <meta property="og:description" content="Explore roc4et's exclusive services and community." />
        <meta property="og:image" content="/img/banner.png" />
        <meta property="og:url" content="." />
        <meta property="og:type" content="website" />
        <meta property="og:image:secure_url" content="/img/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="roc4et Services" />
        <meta name="twitter:description" content="Discover unique services provided by roc4et." />
        <meta name="twitter:image" content="/img/banner.png" />
        <meta name="theme-color" content="#f54269" />
      </Head>

      {/* Page Content */}
      <main className="min-h-screen w-full relative overflow-hidden select-none">
        {/* Background Video with Overlay */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/img/1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
          <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl max-w-md w-full border border-white/10">
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/img/favicon.png"
                  alt="roc4et profile"
                  fill
                  className="rounded-full object-cover ring-2 ring-purple-500/50"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white glow">roc4et</h1>
                <p className="text-purple-300/80 text-sm">Verified Creator</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-white/90 mb-2">1.5 million Network</h2>
              <p className="text-white/70">smoke some, drink some, pop one</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 sm:gap-8 mb-8">
              <a
                href="https://discord.com/users/1186342290323677215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#5865F2] transition-all duration-200 glow-hover"
              >
                <DiscordIcon />
                <span className="sr-only">Discord</span>
              </a>
              <a
                href="https://instagram.com/roc4et"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-all duration-200 glow-hover"
              >
                <Instagram className="w-7 h-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@252476609017040896"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-all duration-200 glow-hover"
              >
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </a>
              <a
                href="https://t.me/roc4et"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-purple-400 transition-all duration-200 glow-hover"
              >
                <Send className="w-7 h-7" />
                <span className="sr-only">Telegram</span>
              </a>
            </div>

            {/* Join Button */}
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-4 sm:py-6 text-base sm:text-lg tracking-wide shadow-lg shadow-purple-500/20 border border-white/10 transition-all duration-300 hover:scale-[1.02] glow-hover"
              onClick={() => window.open('https://discord.gg/QTbwJ9g7CP', '_blank')}
            >
              Join Community
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
