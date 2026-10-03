import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-ink-950 text-paper hover:bg-ink-800',
  accent: 'bg-bronze-600 text-white hover:bg-bronze-700',
  outline: 'border border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-paper',
  onDark: 'bg-bronze-500 text-ink-950 hover:bg-bronze-300',
  outlineOnDark: 'border border-ink-500 text-paper hover:border-paper hover:bg-paper hover:text-ink-950',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-display text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ease-standard'

export default function Button({ to, variant = 'primary', className = '', children }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
