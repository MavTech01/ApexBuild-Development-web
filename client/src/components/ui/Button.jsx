import { Link } from 'react-router-dom'
import useRipple from '../../hooks/useRipple.js'

const sheenSolid = 'bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.22),transparent)]'
const sheenOutline = 'bg-[linear-gradient(90deg,transparent,rgb(37_99_235/0.14),transparent)]'
const sheenOnDark = 'bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.16),transparent)]'

const variants = {
  primary: {
    className: 'bg-blue-600 text-white hover:bg-blue-700',
    ripple: 'bg-white/30',
    sheen: sheenSolid,
  },
  outline: {
    className: 'border border-blue-600 text-ink-950 hover:bg-blue-600 hover:text-white',
    ripple: 'bg-blue-600/25',
    sheen: sheenOutline,
  },
  onDark: {
    className: 'bg-blue-600 text-white hover:bg-blue-700',
    ripple: 'bg-white/30',
    sheen: sheenSolid,
  },
  outlineOnDark: {
    className: 'border border-blue-400/70 text-paper hover:border-blue-500 hover:bg-blue-600 hover:text-white',
    ripple: 'bg-white/25',
    sheen: sheenOnDark,
  },
}

const base =
  'group relative inline-flex select-none items-center justify-center overflow-hidden rounded-[4px] px-6 py-3.5 font-display text-sm font-semibold tracking-[0.06em] uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-out-premium hover:-translate-y-0.5 hover:shadow-blue active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100'

export default function Button({ to, variant = 'primary', className = '', children }) {
  const { ripples, spawn } = useRipple()
  const { className: variantClass, ripple: rippleClass, sheen } = variants[variant] ?? variants.primary

  // Keyboard activation reports clientX/clientY of 0 and click detail of 0.
  const handleClick = (event) => {
    if (event.detail === 0) spawn(event)
  }

  const decoration = (
    <>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={`animate-ripple absolute rounded-full ${rippleClass}`}
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </span>

      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[4px]">
        <span
          className={`absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full skew-x-[-12deg] transition-transform duration-700 ease-out-premium group-hover:translate-x-[320%] motion-reduce:hidden ${sheen}`}
        />
      </span>

      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  const classes = `${base} ${variantClass} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onPointerDown={spawn} onClick={handleClick}>
        {decoration}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} onPointerDown={spawn} onClick={handleClick}>
      {decoration}
    </button>
  )
}
