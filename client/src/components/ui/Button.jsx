import { Link } from 'react-router-dom'

/**
 * Button
 * Single source of truth for CTA buttons across the whole site. Renders the
 * exact `.btn` / `.btn-outline` styles the homepage uses (see
 * src/styles/home/base.css) so every route matches and there is no second,
 * competing button look.
 *
 * Renders a router <Link> when given `to`, an <a> when given `href`, and a
 * native <button> otherwise.
 */
const variants = {
  primary: 'btn',
  outline: 'btn-outline',
}

export default function Button({
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
  children,
  ...props
}) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
