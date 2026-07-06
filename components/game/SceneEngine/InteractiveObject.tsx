'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { InteractiveObjectConfig } from '@/types/level'

interface InteractiveObjectProps {
  config: InteractiveObjectConfig
  unlocked: boolean
  completed: boolean
  lockedBy: string | null
  onClick: () => void
}

export function InteractiveObject({ config, unlocked, completed, lockedBy, onClick }: InteractiveObjectProps) {
  if (completed) return null

  const visual = config.visual
  const hasResource = Boolean(visual?.resource)

  return (
    <motion.button
      onClick={unlocked ? onClick : undefined}
      disabled={!unlocked}
      className={`absolute cursor-pointer transition-all duration-300 ${hasResource ? 'border-0 bg-transparent' : 'border-2'}`}
      style={{
        left: `${config.area.x}%`,
        top: `${config.area.y}%`,
        width: `${config.area.width}%`,
        height: `${config.area.height}%`,
        borderColor: hasResource
          ? 'transparent'
          : unlocked
            ? 'rgba(74, 222, 128, 0.3)'
            : 'rgba(74, 222, 128, 0.06)',
        backgroundColor: hasResource
          ? 'transparent'
          : unlocked
            ? 'rgba(74, 222, 128, 0.04)'
            : 'rgba(0, 0, 0, 0.3)',
        boxShadow: hasResource
          ? 'none'
          : unlocked
            ? '0 0 15px rgba(74, 222, 128, 0.08), inset 0 0 15px rgba(74, 222, 128, 0.03)'
            : 'none',
        overflow: 'visible',
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: unlocked ? 1 : 0.3,
        scale: unlocked ? 1 : 0.95,
      }}
      whileHover={
        unlocked
          ? {
              borderColor: hasResource ? 'transparent' : 'rgba(74, 222, 128, 0.6)',
              boxShadow: hasResource ? 'none' : '0 0 25px rgba(74, 222, 128, 0.15), inset 0 0 20px rgba(74, 222, 128, 0.05)',
            }
          : {}
      }
      whileTap={unlocked ? { scale: 0.97 } : {}}
    >
      <div className="relative h-full w-full overflow-visible">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            inset: visual?.inset ?? '0',
            transform: visual?.transform ?? 'none',
            transformOrigin: visual?.transformOrigin ?? 'center center',
          }}
        >
          {hasResource ? (
            <Image
              src={visual?.resource ?? ''}
              alt={config.title}
              aria-hidden="true"
              fill
              unoptimized
              priority
              className="pointer-events-none select-none object-contain"
              style={{
                objectFit: visual?.fit ?? 'contain',
                opacity: visual?.opacity ?? 1,
                filter: unlocked ? 'saturate(0.92) contrast(1.05) brightness(0.96)' : 'saturate(0.75) contrast(0.95) brightness(0.55)',
              }}
            />
          ) : (
            <div
              className="absolute inset-0 rounded-sm border border-[#5d6840]/40 bg-[#0f120d]/45"
              style={{ boxShadow: unlocked ? 'inset 0 0 18px rgba(183, 209, 103, 0.05)' : 'inset 0 0 12px rgba(0,0,0,0.35)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.02), transparent 22%), repeating-linear-gradient(90deg, rgba(183, 209, 103, 0.035) 0 1px, transparent 1px 8px)',
                  opacity: unlocked ? 1 : 0.5,
                }}
              />
            </div>
          )}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.02), transparent 24%), linear-gradient(90deg, rgba(255,255,255,0.02), transparent 28%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      {/* Label */}
      {!hasResource && (
        <div className="absolute -top-6 left-0 right-0 text-center">
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{
              color: unlocked ? 'rgba(74, 222, 128, 0.5)' : 'rgba(74, 222, 128, 0.15)',
            }}
          >
            {config.title}
          </span>
        </div>
      )}

      {/* Lock indicator */}
      {!unlocked && lockedBy && !hasResource && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[10px] tracking-wider text-center px-2"
            style={{ color: 'rgba(74, 222, 128, 0.2)' }}
          >
            Completa &quot;{lockedBy}&quot; primero
          </span>
        </div>
      )}
    </motion.button>
  )
}
