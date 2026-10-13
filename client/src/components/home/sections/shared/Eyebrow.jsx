/**
 * Eyebrow
 * The small uppercase label that sits above a section heading, with a leading
 * dash drawn by a `before:` pseudo-element. `tone` picks the colour for light
 * vs dark sections.
 */
export default function Eyebrow({ children, tone = 'light', className = '' }) {
  return (
    <p
      className={`mb-[22px] flex items-center gap-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] before:h-0.5 before:w-10 before:bg-current before:content-[''] ${
        tone === 'dark' ? 'text-azure' : 'text-royal'
      } ${className}`.trim()}
    >
      {children}
    </p>
  )
}
