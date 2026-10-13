import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

/**
 * FadeUp
 * Fades and lifts its children into view once (styles in
 * src/styles/home/base.css). Used for the stats card and the "Why ApexBuild"
 * rows. `delay` accepts any CSS time value (e.g. '120ms').
 */
export default function FadeUp(props) {
  const { className = '', delay, children, as: Tag = 'div' } = props
  const [ref, inView] = useRevealOnScroll(0.15)

  return (
    <Tag
      ref={ref}
      style={delay ? { '--d': delay } : undefined}
      className={`fade-up${inView ? ' in' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
