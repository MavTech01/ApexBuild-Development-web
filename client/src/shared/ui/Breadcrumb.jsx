import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const itemClass = 'font-display text-xs font-semibold tracking-[0.14em] uppercase'

const tones = {
  dark: {
    link: 'text-ink-500 hover:text-blue-600',
    current: 'text-ink-950',
    separator: 'text-ink-300',
  },
  light: {
    link: 'text-ink-300 hover:text-white',
    current: 'text-paper',
    separator: 'text-ink-500',
  },
}

/**
 * Breadcrumb
 * Reusable breadcrumb navigation. Pass `items` as an array of `{ label, to }`;
 * the final item is treated as the current page and is never a link. Use
 * `tone="light"` on dark backgrounds and `tone="dark"` on light ones.
 */
export default function Breadcrumb({ items = [], tone = 'dark', className = '' }) {
  if (items.length === 0) return null

  const t = tones[tone] ?? tones.dark

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex min-w-0 list-none flex-nowrap items-center gap-2 p-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isLink = !isLast && item.to

          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {isLink ? (
                <Link
                  to={item.to}
                  className={`${itemClass} ${t.link} min-w-0 truncate transition-colors duration-200 focus-visible:outline-none`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={`${itemClass} ${t.current} min-w-0 truncate`}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${t.separator}`} aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}