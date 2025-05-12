'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Instagram, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'


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

          {/* Deutschrap Leaks Gruppe Button */}
          <Button
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-4 sm:py-6 text-base sm:text-lg tracking-wide shadow-lg shadow-green-500/20 border border-white/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group mt-4"
            onClick={() => window.open('#', '_blank')}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Cooming Soon...
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