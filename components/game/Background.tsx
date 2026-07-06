'use client'

import { useEffect, useRef } from 'react'

interface Firefly {
  x: number
  y: number
  size: number
  baseSpeed: number
  angle: number
  angleSpeed: number
  hue: number
  brightness: number
  blinkPhase: number
  blinkSpeed: number
  life: number
  maxLife: number
}

interface DustParticle {
  x: number
  y: number
  size: number
  speedY: number
  offsetX: number
  opacity: number
  life: number
  maxLife: number
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const FIREFLY_COUNT = 20
    const DUST_COUNT = 60

    const fireflies: Firefly[] = []
    const dustParticles: DustParticle[] = []

    function createFirefly(w: number, h: number): Firefly {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 1.5,
        baseSpeed: Math.random() * 0.3 + 0.15,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.02,
        hue: Math.random() * 30 + 50,
        brightness: Math.random() * 0.3 + 0.7,
        blinkPhase: Math.random() * Math.PI * 2,
        blinkSpeed: Math.random() * 0.02 + 0.01,
        life: 0,
        maxLife: Math.random() * 600 + 400,
      }
    }

    function createDust(w: number, h: number): DustParticle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.15 + 0.05),
        offsetX: Math.random() * 200,
        opacity: Math.random() * 0.15 + 0.03,
        life: 0,
        maxLife: Math.random() * 500 + 300,
      }
    }

    for (let i = 0; i < FIREFLY_COUNT; i++) {
      fireflies.push(createFirefly(canvas.width, canvas.height))
    }
    for (let i = 0; i < DUST_COUNT; i++) {
      dustParticles.push(createDust(canvas.width, canvas.height))
    }

    const canvasEl = canvas
    let time = 0
    let wind = 0
    let animId: number

    function animate() {
      time++
      const c = ctx!
      c.clearRect(0, 0, canvasEl.width, canvasEl.height)

      // Wind: gentle breeze with occasional gusts
      wind = Math.sin(time * 0.003) * 0.15
        + Math.sin(time * 0.007) * 0.1
        + Math.sin(time * 0.001) * 0.2

      // ── Dust particles ──
      for (const p of dustParticles) {
        p.x += wind * 0.4
        p.y += p.speedY
        p.life++
        const progress = p.life / p.maxLife
        const fade = Math.max(0, 1 - progress)

        const driftX = Math.sin(time * 0.005 + p.offsetX) * 0.5
        c.beginPath()
        c.arc(p.x + driftX, p.y, p.size, 0, Math.PI * 2)
        c.fillStyle = `rgba(180, 220, 180, ${p.opacity * fade})`
        c.fill()

        if (p.life >= p.maxLife || p.y < -20) {
          Object.assign(p, createDust(canvasEl.width, canvasEl.height))
          p.y = canvasEl.height + 5
          p.x = Math.random() * canvasEl.width
        }
      }

      // ── Fireflies ──
      for (const f of fireflies) {
        f.angle += f.angleSpeed + Math.sin(time * 0.01 + f.blinkPhase) * 0.005
        f.x += Math.cos(f.angle) * f.baseSpeed * 0.5 + wind * 0.6
        f.y += Math.sin(f.angle) * f.baseSpeed * 0.3 - f.baseSpeed * 0.2
        f.life++

        // Blink
        const blink = Math.sin(time * f.blinkSpeed + f.blinkPhase) * 0.5 + 0.5
        const blinkSharp = blink * blink * blink * 4
        const clampedBlink = Math.min(1, blinkSharp)
        const glow = clampedBlink * f.brightness

        const progress = f.life / f.maxLife
        const fade = Math.max(0, 1 - progress * progress)
        const alpha = glow * fade

        if (alpha < 0.01) {
          // Still update position but skip expensive drawing
          if (f.life >= f.maxLife || f.y < -30 || f.x < -30 || f.x > canvasEl.width + 30) {
            Object.assign(f, createFirefly(canvasEl.width, canvasEl.height))
            f.y = canvasEl.height - Math.random() * 100
          }
          continue
        }

        const size = f.size * (1 + blink * 0.5)

        // Outer glow (large, faint)
        c.beginPath()
        c.arc(f.x, f.y, size * 10, 0, Math.PI * 2)
        c.fillStyle = `hsla(${f.hue}, 100%, 70%, ${alpha * 0.04})`
        c.fill()

        // Mid glow
        c.beginPath()
        c.arc(f.x, f.y, size * 4, 0, Math.PI * 2)
        c.fillStyle = `hsla(${f.hue}, 100%, 75%, ${alpha * 0.12})`
        c.fill()

        // Core
        c.beginPath()
        c.arc(f.x, f.y, size, 0, Math.PI * 2)
        c.fillStyle = `hsla(${f.hue}, 100%, 85%, ${alpha * 0.9})`
        c.fill()

        // Bright center
        c.beginPath()
        c.arc(f.x, f.y, size * 0.4, 0, Math.PI * 2)
        c.fillStyle = `hsla(50, 100%, 95%, ${alpha})`
        c.fill()

        if (f.life >= f.maxLife || f.y < -30 || f.x < -30 || f.x > canvasEl.width + 30) {
          Object.assign(f, createFirefly(canvasEl.width, canvasEl.height))
          f.y = canvasEl.height - Math.random() * 100
        }
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <img
        src="/backgrounds/start.png"
        alt=""
        className="w-full h-full object-cover pointer-events-none select-none"
        style={{
          imageRendering: 'pixelated',
          objectPosition: 'center center',
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -inset-x-[10%] top-0 bottom-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16, 185, 129, 0.06) 0%, transparent 30%, transparent 70%, rgba(16, 185, 129, 0.04) 100%)',
            animation: 'drift-fog 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -inset-x-[10%] top-0 bottom-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(6, 78, 59, 0.08) 0%, transparent 30%, transparent 70%, rgba(6, 78, 59, 0.05) 100%)',
            animation: 'drift-fog 18s ease-in-out infinite',
            animationDelay: '-7s',
            animationDirection: 'reverse',
          }}
        />
        <div
          className="absolute -inset-x-[10%] top-0 bottom-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(16, 185, 129, 0.03) 0%, transparent 50%, rgba(16, 185, 129, 0.03) 100%)',
            animation: 'drift-fog 22s ease-in-out infinite',
            animationDelay: '-3s',
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  )
}
