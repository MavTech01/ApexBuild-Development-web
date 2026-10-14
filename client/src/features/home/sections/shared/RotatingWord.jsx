import { useEffect, useState } from 'react'

const INTERVAL_MS = 3000

/**
 * RotatingWord
 * Cycles through words inside the hero headline every 3 seconds. The active
 * word slides in from below, the previous one slides out above (see
 * `.rotating-word` in Hero/hero.css). Only the entering/leaving words carry the
 * `.anim` class so the others reset off-screen instantly instead of sliding
 * back down through the headline.
 *
 * `startDelay` (ms) holds the first word back so it gets its own entrance slide
 * on load instead of appearing already in place with the headline line.
 */
export default function RotatingWord({ words, startDelay = 0 }) {
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    let intervalId
    const startId = setTimeout(() => {
      setIndex(0)
      if (words.length > 1) {
        intervalId = setInterval(() => {
          setIndex((current) => (current + 1) % words.length)
        }, INTERVAL_MS)
      }
    }, startDelay)
    return () => {
      clearTimeout(startId)
      clearInterval(intervalId)
    }
  }, [words.length, startDelay])

  const previous = index < 0 ? -1 : (index - 1 + words.length) % words.length

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
