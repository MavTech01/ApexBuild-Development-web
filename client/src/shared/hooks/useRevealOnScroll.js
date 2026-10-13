import { useEffect, useRef, useState } from 'react'

export function useRevealOnScroll(threshold = 0.2) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current

    if (!node || revealed) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [revealed, threshold])

  return [ref, revealed]
}
