'use client'

import { useCallback, useRef, useEffect } from 'react'

type SfxType = 'hover' | 'click' | 'confirm' | 'back'

export function useAudio() {
  const ctxRef = useRef<AudioContext | null>(null)
  const musicRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctxRef.current = new Ctor()
    }
    return ctxRef.current
  }, [])

  const playNote = useCallback(
    (freq: number, duration: number, type: OscillatorType = 'square', volume = 0.06) => {
      try {
        const ctx = getCtx()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = type
        osc.frequency.value = freq
        gain.gain.setValueAtTime(volume, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(ctx.currentTime)
        osc.stop(ctx.currentTime + duration)
      } catch {
        // Audio not available
      }
    },
    [getCtx],
  )

  const playSFX = useCallback(
    (type: SfxType) => {
      try {
        const ctx = getCtx()
        if (ctx.state === 'suspended') ctx.resume()

        switch (type) {
          case 'hover':
            playNote(880, 0.04, 'square', 0.02)
            break
          case 'click':
            playNote(660, 0.06, 'square', 0.05)
            setTimeout(() => playNote(990, 0.08, 'square', 0.05), 60)
            break
          case 'confirm':
            playNote(523, 0.1, 'square', 0.06)
            setTimeout(() => playNote(659, 0.1, 'square', 0.06), 100)
            setTimeout(() => playNote(784, 0.2, 'square', 0.06), 200)
            break
          case 'back':
            playNote(440, 0.06, 'square', 0.04)
            setTimeout(() => playNote(330, 0.1, 'square', 0.04), 60)
            break
        }
      } catch {
        // Audio not available
      }
    },
    [getCtx, playNote],
  )

  const startMusic = useCallback(() => {
    if (isPlayingRef.current) return
    isPlayingRef.current = true

    if (!musicRef.current) {
      musicRef.current = new Audio('/music/start.mp3')
      musicRef.current.loop = true
      musicRef.current.volume = 0.4
    }

    musicRef.current.currentTime = 0
    musicRef.current.play().catch(() => {
      isPlayingRef.current = false
    })
  }, [])

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false
    if (musicRef.current) {
      musicRef.current.pause()
      musicRef.current.currentTime = 0
    }
  }, [])

  const initAudio = useCallback(async () => {
    try {
      const ctx = getCtx()
      if (ctx.state === 'suspended') await ctx.resume()
    } catch {
      // AudioContext not available
    }
    startMusic()
  }, [getCtx, startMusic])

  // Try to play immediately
  // Fallback: some browsers need a user gesture to play audio
  useEffect(() => {
    initAudio()

    const retry = () => {
      const ctx = ctxRef.current
      if (ctx?.state === 'suspended') ctx.resume()
      startMusic()
    }
    window.addEventListener('click', retry, { once: true })
    window.addEventListener('keydown', retry, { once: true })
    return () => {
      window.removeEventListener('click', retry)
      window.removeEventListener('keydown', retry)
      stopMusic()
    }
  }, [initAudio, startMusic, stopMusic])

  return { playSFX, initAudio, startMusic, stopMusic }
}
