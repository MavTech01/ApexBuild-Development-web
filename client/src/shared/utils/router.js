/**
 * Stops the browser from restoring scroll position on back/forward.
 * Must be called before the router is created.
 */
export function takeOverScrollRestoration() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}
