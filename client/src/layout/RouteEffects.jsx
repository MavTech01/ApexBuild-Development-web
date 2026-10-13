import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Scroll offsets keyed by URL for back/forward navigation
 */
const scrollPositions = new Map()

let restingKey = null
let restingScrollY = 0
let trackingRestingOffset = false

function trackRestingOffset() {
  if (trackingRestingOffset) return
  trackingRestingOffset = true
  window.addEventListener(
    'scroll',
    () => {
      restingScrollY = window.scrollY
    },
    { passive: true },
  )
}

/**
 * Instant scroll - overrides smooth scroll behavior
 */
function jumpTo(top) {
  window.scrollTo({ top, behavior: 'instant' })
}

/**
 * Scrolls to in-page anchor with retry
 */
function scrollToHash(hash) {
  const id = decodeURIComponent(hash.slice(1))
  let attempts = 0

  const tryScroll = () => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    attempts += 1
    if (attempts < 10) window.requestAnimationFrame(tryScroll)
  }

  tryScroll()
}

/**
 * RouteScrollReset
 * Handles scroll position for route changes BEFORE paint.
 * - PUSH: scroll to top
 * - REPLACE: stay put (filters/sort)
 * - POP: restore saved position (back/forward)
 * - hash: scroll to anchor
 */
export function RouteScrollReset() {
  const { pathname, search, hash } = useLocation()
  const navigationType = useNavigationType()
  const key = `${pathname}${search}`

  useLayoutEffect(() => {
    trackRestingOffset()

    // Save the outgoing page's position
    if (restingKey !== null && restingKey !== key) {
      scrollPositions.set(restingKey, restingScrollY)
    }

    if (hash) scrollToHash(hash)
    else if (navigationType === 'REPLACE') {
      scrollPositions.set(key, restingScrollY)
    } else if (navigationType === 'POP') jumpTo(scrollPositions.get(key) ?? 0)
    else jumpTo(0)

    restingKey = key
    restingScrollY = window.scrollY
  }, [key, hash, navigationType])

  return null
}

/**
 * RouteFocus
 * Moves focus into the new page for accessibility
 */
export function RouteFocus() {
  const { pathname, search, hash } = useLocation()
  const navigationType = useNavigationType()
  const key = `${pathname}${search}`

  useLayoutEffect(() => {
    if (hash || navigationType === 'REPLACE') return

    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [key, hash, navigationType])

  return null
}
