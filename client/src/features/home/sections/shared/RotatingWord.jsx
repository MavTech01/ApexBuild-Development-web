import { useEffect, useState } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const INTERVAL_MS = 3000

/**
 * RotatingWord
 * Cycles through words inside the hero headline every 3 seconds. The active
 * word slides in from below, the previous one slides out above (see
 * `.rotating-word` in Hero/hero.css). Reduced-motion users just see the first
 * word.
 */
export default function RotatingWord({ words }) {
  const [index, setIndex] = useState(0)
  const [previous, setPrevious] = useState(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => {
      setIndex((current) => {
        setPrevious(current)
        return (current + 1) % words.length
      })
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <span className="rotating-word">
      {words.map((word, i) => {
        let state = ''
        if (i === index) state = 'on'
        else if (i === previous) state = 'off'
        return (
          <b key={word} className={state}>
            {word}
          </b>
        )
      })}
    </span>
  )
}
