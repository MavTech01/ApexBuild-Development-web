import { useState, useEffect } from 'react'

/**
 * The visual phases of a route transition.
 */
export function useRoutePhase(isPageChange) {
  const [isFading, setIsFading] = useState(false)
  const [wasChanging, setWasChanging] = useState(isPageChange)

  const EXIT_MS = 220

  // Detect when page change ends to start fade
  if (wasChanging !== isPageChange) {
    setWasChanging(isPageChange)
    if (!isPageChange) setIsFading(true)
  }

  useEffect(() => {
    if (isPageChange || !isFading) return

    const done = setTimeout(() => setIsFading(false), EXIT_MS)
    return () => clearTimeout(done)
  }, [isPageChange, isFading])

  if (isPageChange) return 'active'
  return isFading ? 'exiting' : 'idle'
}
