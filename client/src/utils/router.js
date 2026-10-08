/**
 * Stops the browser from restoring scroll position on back/forward.
 * Must be called before the router is created.
 */
export function takeOverScrollRestoration() {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}

/**
 * Resolves once the router has initialized and is ready to render.
 */
export function whenRouterReady(router) {
  return new Promise((resolve) => {
    if (router.state.initialized) {
      resolve()
      return
    }

    const unsubscribe = router.subscribe((state) => {
      if (!state.initialized) return
      unsubscribe()
      resolve()
    })
  })
}
