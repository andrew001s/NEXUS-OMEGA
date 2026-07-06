'use client'

import { memo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { LeaderboardPagination as PaginationType } from '@/types/leaderboard'

interface LeaderboardPaginationProps {
  pagination: PaginationType
  onNext: () => void
  onPrevious: () => void
}

function LeaderboardPaginationComponent({ pagination, onNext, onPrevious }: LeaderboardPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3 pt-3 border-t-[3px] border-[#6f6145]" style={{ imageRendering: 'pixelated' }}>
      <button
        onClick={onPrevious}
        disabled={!pagination.hasPrevious}
        className="flex items-center gap-1.5 px-4 py-2 text-xs tracking-[0.18em] uppercase transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed enabled:text-[#f0e0b8] enabled:hover:bg-[#2a2319] enabled:hover:border-[#cdb98a] border-[3px] border-[#6f6145] bg-[#1c1812] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c08b]"
        aria-label="Previous page"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0 #0b0907',
        }}
      >
        <ChevronLeft size={14} />
        Anterior
      </button>

      <span
        className="text-xs tracking-[0.18em] text-[#a8956e] min-w-[72px] text-center"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0 #0b0907',
        }}
      >
        {pagination.page}/{pagination.totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={!pagination.hasNext}
        className="flex items-center gap-1.5 px-4 py-2 text-xs tracking-[0.18em] uppercase transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed enabled:text-[#f0e0b8] enabled:hover:bg-[#2a2319] enabled:hover:border-[#cdb98a] border-[3px] border-[#6f6145] bg-[#1c1812] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c08b]"
        aria-label="Next page"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0 #0b0907',
        }}
      >
        Siguiente
        <ChevronRight size={14} />
      </button>
    </div>
  )
}

export const LeaderboardPagination = memo(LeaderboardPaginationComponent)
