'use client'

import { memo } from 'react'
import { RefreshCw } from 'lucide-react'

interface LeaderboardErrorProps {
  message: string
  onRetry: () => void
}

function LeaderboardErrorComponent({ message, onRetry }: LeaderboardErrorProps) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full py-16 gap-5 border-[3px] border-[#7a4f42] bg-[#1a1210]"
      style={{
        fontFamily: '"Courier New", monospace',
        imageRendering: 'pixelated',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px)',
      }}
    >
      <div className="border-[3px] border-[#7a4f42] bg-[#2a1714] px-4 py-2">
        <span className="text-[#f0b7a4] text-lg font-bold">!</span>
      </div>
      <p className="text-[#f0b7a4] text-xs uppercase tracking-[0.2em] text-center max-w-xs leading-relaxed">
        {message}
      </p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-[#f0e0b8] border-[3px] border-[#6f6145] bg-[#1c1812] hover:bg-[#2a2319] hover:border-[#cdb98a] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c08b]"
        aria-label="Retry loading leaderboard"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0 #0b0907',
        }}
      >
        <RefreshCw size={14} />
        Reintentar
      </button>
    </div>
  )
}

export const LeaderboardError = memo(LeaderboardErrorComponent)
