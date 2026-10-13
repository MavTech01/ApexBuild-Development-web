// Decorative effects (glow orbs, film grain, scroll parallax) are the most
// expensive things on weak GPUs. On low-end hardware we tag <html> with
// `perf-lite`, which flattens those effects via CSS while keeping the
// transform/opacity entrance animations.

export function enablePerfLite() {
  if (typeof window === 'undefined') return

  const { hardwareConcurrency, deviceMemory, connection } = window.navigator
  const lowEnd =
    (typeof hardwareConcurrency === 'number' && hardwareConcurrency > 0 && hardwareConcurrency <= 4) ||
    (typeof deviceMemory === 'number' && deviceMemory <= 4) ||
    connection?.saveData === true

  if (lowEnd) document.documentElement.classList.add('perf-lite')
}

// True when scroll-linked motion should be skipped: reduced-motion users,
// phones, or low-end hardware flagged by enablePerfLite().
export function motionDisabled() {
  if (typeof window === 'undefined') return true

  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(max-width: 899px)').matches ||
    document.documentElement.classList.contains('perf-lite')
  )
}
