'use client'

import { memo } from 'react'

function SkeletonCell({ className = '' }: { className?: string }) {
  return (
    <div className={`h-5 bg-[#3a2f22] animate-pulse ${className}`} style={{ imageRendering: 'pixelated' }} />
  )
}

function LeaderboardSkeletonComponent() {
  return (
    <div
      className="border-[3px] border-[#6f6145] bg-[#18140f]"
      role="status"
      aria-label="Loading leaderboard"
      style={{
        fontFamily: '"Courier New", monospace',
        imageRendering: 'pixelated',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px)',
      }}
    >
      <div className="flex items-center gap-0 bg-[#2a2319] border-b-[3px] border-[#786544]">
        <SkeletonCell className="w-14 m-3" />
        <SkeletonCell className="flex-1 m-3" />
        <SkeletonCell className="w-32 m-3" />
        <SkeletonCell className="w-20 m-3" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`flex items-center gap-0 ${i % 2 === 0 ? 'bg-[#1f1a14]' : 'bg-[#17130e]'} border-b-[2px] border-[#4d4230]`}>
          <SkeletonCell className="w-14 m-3" />
          <SkeletonCell className="flex-1 m-3 max-w-[180px]" />
          <SkeletonCell className="w-32 m-3" />
          <SkeletonCell className="w-20 m-3" />
        </div>
      ))}
      <span className="sr-only">Loading leaderboard data...</span>
    </div>
  )
}

export const LeaderboardSkeleton = memo(LeaderboardSkeletonComponent)
