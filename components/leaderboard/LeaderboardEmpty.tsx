'use client'

import { memo } from 'react'

function LeaderboardEmptyComponent() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full py-16 gap-5 border-[3px] border-[#6f6145] bg-[#18140f]"
      style={{
        fontFamily: '"Courier New", monospace',
        imageRendering: 'pixelated',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px)',
      }}
    >
      <div
        className="w-20 h-20 opacity-30"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(242, 228, 193, 0.08) 3px, rgba(242, 228, 193, 0.08) 6px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(242, 228, 193, 0.08) 3px, rgba(242, 228, 193, 0.08) 6px)',
          imageRendering: 'pixelated',
          border: '2px solid rgba(242, 228, 193, 0.12)',
        }}
        aria-hidden="true"
      >
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-3xl text-[#e2c886]/60">?</span>
        </div>
      </div>
      <p className="text-[#e2c886] text-xs uppercase tracking-[0.2em]">No hay puntuaciones registradas.</p>
      <p className="text-[#8f7d5d] text-[10px] uppercase tracking-[0.2em]">S&eacute; el primero en aparecer.</p>
    </div>
  )
}

export const LeaderboardEmpty = memo(LeaderboardEmptyComponent)
