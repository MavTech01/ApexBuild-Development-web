import { useEffect, useState } from 'react'
import { getHealth } from '../lib/api.js'

export default function HealthCheck() {
  const [state, setState] = useState({ status: 'loading', message: '' })

  useEffect(() => {
    let active = true

    getHealth()
      .then((data) => active && setState({ status: 'success', message: data.message }))
      .catch((error) => active && setState({ status: 'error', message: error.message }))

    return () => {
      active = false
    }
  }, [])

  return (
    <div className="rounded-sm border border-line bg-surface p-6 shadow-lift">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">
          Backend status
        </p>
        <span
          className={`h-2 w-2 rounded-full ${
            state.status === 'success'
              ? 'bg-emerald-600'
              : state.status === 'error'
                ? 'bg-red-700'
                : 'bg-bronze-500 animate-pulse'
          }`}
        />
      </div>

      <p className="mt-3 font-display text-lg text-ink-950">
        {state.status === 'loading' && 'Checking API…'}
        {state.status === 'success' && state.message}
        {state.status === 'error' && state.message}
      </p>
      {state.status === 'error' && (
        <p className="mt-1 text-sm text-ink-500">Start the API with `npm run dev` in the server folder.</p>
      )}
    </div>
  )
}
