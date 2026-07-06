'use client'

import { memo } from 'react'
import type { LeaderboardPlayer } from '@/types/leaderboard'

interface LeaderboardRowProps {
  player: LeaderboardPlayer
  rank: number
}

function LeaderboardRowComponent({ player, rank }: LeaderboardRowProps) {
  const rankColors = ['text-[#f2d36b]', 'text-[#c7c7c7]', 'text-[#d49b5d]']
  const rankColor = rank <= 3 ? rankColors[rank - 1] : 'text-[#efe0b3]'

  const bgClass = rank % 2 === 0 ? 'bg-[#1f1a14]' : 'bg-[#17130e]'

  return (
    <tr
      className={`${bgClass} transition-colors hover:bg-[#2d261c]`}
      style={{
        fontFamily: '"Courier New", monospace',
        imageRendering: 'pixelated',
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.015), transparent 18%)',
      }}
    >
      <td className="py-2.5 px-4 border-b-[2px] border-b-[#4d4230] border-r-[3px] border-r-[#4a3f2c]">
        <span className={`font-bold text-sm ${rankColor}`}>#{rank}</span>
      </td>
      <td className="py-2.5 px-4 border-b-[2px] border-b-[#4d4230] border-r-[3px] border-r-[#4a3f2c]">
        <span className="text-[#f0e0b8] font-medium truncate block max-w-45 text-sm">
          {player.playerName}
        </span>
      </td>
      <td className="py-2.5 px-4 border-b-[2px] border-b-[#4d4230] border-r-[3px] border-r-[#4a3f2c] text-right">
        <span className="text-[#f2d36b] font-bold tabular-nums text-sm tracking-[0.12em]">
          {player.score.toLocaleString()}
        </span>
      </td>
      <td className="py-2.5 px-4 border-b-[2px] border-b-[#4d4230] text-right">
        <span className="text-[#d7c39a] text-sm">{player.level}</span>
      </td>
    </tr>
  )
}

export const LeaderboardRow = memo(LeaderboardRowComponent)
