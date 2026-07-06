'use client'

import { memo } from 'react'
import type { LeaderboardPlayer } from '@/types/leaderboard'
import { LeaderboardRow } from '@/components/leaderboard/LeaderboardRow'

interface LeaderboardTableProps {
  players: LeaderboardPlayer[]
}

function LeaderboardTableComponent({ players }: LeaderboardTableProps) {
  return (
    <div
      className="overflow-x-auto border-[3px] border-[#6f6145] bg-[#18140f]"
      style={{
        imageRendering: 'pixelated',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px), repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px)',
      }}
    >
      <table
        className="w-full border-collapse"
        role="table"
        aria-label="Leaderboard scores"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0 #0b0907',
        }}
      >
        <thead>
          <tr className="bg-[#2a2319]">
            <th className="py-3 px-4 text-[#f2e4c1] font-bold tracking-[0.22em] uppercase text-[10px] border-b-[3px] border-b-[#786544] border-r-[3px] border-r-[#4a3f2c] w-14">
              #
            </th>
            <th className="py-3 px-4 text-[#f2e4c1] font-bold tracking-[0.22em] uppercase text-[10px] border-b-[3px] border-b-[#786544] border-r-[3px] border-r-[#4a3f2c]">
              Jugador
            </th>
            <th className="py-3 px-4 text-[#f2e4c1] font-bold tracking-[0.22em] uppercase text-[10px] border-b-[3px] border-b-[#786544] border-r-[3px] border-r-[#4a3f2c] w-32 text-right">
              Puntos
            </th>
            <th className="py-3 px-4 text-[#f2e4c1] font-bold tracking-[0.22em] uppercase text-[10px] border-b-[3px] border-b-[#786544] w-20 text-right">
              Nivel
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <LeaderboardRow
              key={player.id}
              player={player}
              rank={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const LeaderboardTable = memo(LeaderboardTableComponent)
