/**
 * RouteProgressBar
 * Slim progress bar for route transitions.
 */
export function RouteProgressBar({ phase }) {
  if (phase === 'idle') return null

  const isExiting = phase === 'exiting'

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-blue-100"
      >
        <div
          className={`h-full w-full origin-left bg-gradient-to-r from-blue-500 to-blue-600 ${
            isExiting ? 'route-progress-complete' : 'route-progress-enter'
          }`}
        />
      </div>

      <span role="status" aria-live="polite" className="sr-only">
        Loading page
      </span>
    </>
  )
}
