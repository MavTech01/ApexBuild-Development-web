import { useCallback, useEffect, useRef, useState } from 'react'

const RIPPLE_DURATION = 620
const MAX_VISIBLE = 4

/**
 * Cursor-positioned ripple for button-like elements.
 *
 * Ripples are plain absolutely-positioned spans driven by the `ripple`
 * keyframes, so no animation library is needed. Each one removes itself via
 * timeout after RIPPLE_DURATION, and the whole effect is skipped when the user
 * prefers reduced motion.
 */
export default function useRipple() {
  const [ripples, setRipples] = useState([])
  const nextId = useRef(0)
  const timers = useRef(new Set())
  const reducedMotion = useRef(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pendingTimers = timers.current
    reducedMotion.current = query.matches

    const onChange = (event) => {
      reducedMotion.current = event.matches
    }

    query.addEventListener('change', onChange)

    return () => {
      query.removeEventListener('change', onChange)
      pendingTimers.forEach((timer) => clearTimeout(timer))
      pendingTimers.clear()
    }
  }, [])

  const spawn = useCallback((event) => {
    if (reducedMotion.current) return

    const target = event.currentTarget
    if (!target) return

    const rect = target.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    // Keyboard activation reports 0,0 — fall back to the centre.
    const fromKeyboard = !event.clientX && !event.clientY
    const x = fromKeyboard ? rect.width / 2 : event.clientX - rect.left
    const y = fromKeyboard ? rect.height / 2 : event.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2.2

    const id = nextId.current++

    setRipples((current) => [...current, { id, x, y, size }].slice(-MAX_VISIBLE))

    const timer = setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id))
      timers.current.delete(timer)
    }, RIPPLE_DURATION)

    timers.current.add(timer)
  }, [])

  return { ripples, spawn }
}
