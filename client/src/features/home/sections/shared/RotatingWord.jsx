import { useEffect, useState } from 'react'

const INTERVAL_MS = 3000

/**
 * RotatingWord
 * Cycles through words inside the hero headline every 3 seconds. The active
 * word slides in from below, the previous one slides out above (see
 * `.rotating-word` in Hero/hero.css). Only the entering/leaving words carry the
 * `.anim` class so the others reset off-screen instantly instead of sliding
 * back down through the headline.
 */
export default function RotatingWord({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length < 2) return
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [words.length])

  const previous = (index - 1 + words.length) % words.length

  return (
    <span className="rotating-word">
      {words.map((word, i) => {
        let state = ''
        if (i === index) state = 'on anim'
        else if (i === previous) state = 'off anim'
        return (
          <b key={word} className={state}>
            {word}
          </b>
        )
      })}
    </span>
  )
}
