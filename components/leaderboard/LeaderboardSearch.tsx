'use client'

import { memo, useCallback } from 'react'
import { Search } from 'lucide-react'

interface LeaderboardSearchProps {
  value: string
  onChange: (value: string) => void
}

function LeaderboardSearchComponent({ value, onChange }: LeaderboardSearchProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <div className="relative" style={{ imageRendering: 'pixelated' }}>
      <Search
        size={14}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a88f61] pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Buscar jugador..."
        className="w-full bg-[#1c1812] border-[3px] border-[#6f6145] py-2.5 pl-10 pr-3.5 text-[#f0e0b8] placeholder-[#8e7f61] text-xs uppercase tracking-[0.18em] transition-colors duration-150 focus:outline-none focus:border-[#cdb98a] hover:border-[#8b7d5d]"
        aria-label="Search players by name"
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: 'pixelated',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
          textShadow: '1px 1px 0 #0b0907',
        }}
      />
    </div>
  )
}

export const LeaderboardSearch = memo(LeaderboardSearchComponent)
