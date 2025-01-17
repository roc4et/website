'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Instagram, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()


  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])
  return (
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
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload"
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl max-w-md w-full border border-[rgba(76,209,228,0.2)]">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src="/favicon.png"
                alt="roc4et profile"
                width={96}
                height={96}
                className="rounded-full object-cover ring-2 ring-[rgba(76,209,228,0.5)]"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white glow">roc4et</h1>
              <p className="text-[rgba(76,209,228,0.8)] text-sm">Verified Creator</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white/90 mb-2">1.5 million Network</h2>
            <p className="text-[rgba(76,209,228,0.7)]">smoke some, drink some, pop one</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 sm:gap-8 mb-8">
            <a
              href="https://discord.com/users/1186342290323677215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[rgba(76,209,228,1)] transition-all duration-200 glow-hover"
            >
              <DiscordIcon />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="https://instagram.com/roc4et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[rgba(76,209,228,1)] transition-all duration-200 glow-hover"
            >
              <Instagram className="w-7 h-7" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@252476609017040896"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[rgba(76,209,228,1)] transition-all duration-200 glow-hover"
            >
              <TikTokIcon />
              <span className="sr-only">TikTok</span>
            </a>
            <a
              href="https://t.me/roc4et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[rgba(76,209,228,1)] transition-all duration-200 glow-hover"
            >
              <Send className="w-7 h-7" />
              <span className="sr-only">Telegram</span>
            </a>
          </div>

          {/* Join Button */}
          <Button
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-4 sm:py-6 text-base sm:text-lg tracking-wide shadow-lg shadow-violet-500/20 border border-white/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
            onClick={() => window.open('https://t.me/+i_ckLS-SfwBlZTRi', '_blank')}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join Community
              <svg
                className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/40 to-indigo-600/40 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </Button>

          {/* Deutschrap Leaks Gruppe Button */}
          <Button
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-4 sm:py-6 text-base sm:text-lg tracking-wide shadow-lg shadow-green-500/20 border border-white/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group mt-4"
            onClick={() => window.open('https://t.me/+m5tfWlQ5EQJkMzQy', '_blank')}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Free Deutschrap Leaks Gruppe
              <svg
                className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-teal-600/40 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </Button>
        </div>
      </div>
    </main>
  )
}