import { useRevealOnScroll } from '@/shared/hooks/useRevealOnScroll.js'

/**
 * SplitHeading
 * Splits a heading into individual words. Each word slides up from behind a
 * mask when the heading enters the viewport (handled by the `.word > span`
 * rules in src/styles/home/base.css). The optional `accent` words are coloured
 * with `accentClassName` (Tailwind colour utility).
 *
 * Screen readers get a single clean label via aria-label; the visual spans are
 * marked aria-hidden so the words are not announced one by one.
 */
export default function SplitHeading(props) {
  const {
    text,
    accent = '',
    as: Tag = 'h2',
    className = '',
    size = 'text-[clamp(1.75rem,5vw,4.4rem)]',
    accentClassName = 'text-royal',
  } = props
  const [ref, inView] = useRevealOnScroll(0.3)

  const baseWords = text.trim().split(' ')
  const accentWords = accent ? accent.trim().split(' ') : []
  const words = [...baseWords, ...accentWords]
  const accentFrom = baseWords.length
  const label = [text, accent].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      data-w=""
      aria-label={label}
      className={`${size} ${className}${inView ? ' in' : ''}`.trim()}
    >
      {words.map((word, index) => (
        <span className="word" aria-hidden="true" key={`${word}-${index}`}>
          <span
            style={{ '--i': index }}
            className={accent && index >= accentFrom ? accentClassName : undefined}
          >
            {word}
          </span>
        </span>
      )).reduce((nodes, node, index) => {
        // Keep a real space between words so the text reads naturally.
        if (index === 0) return [node]
        return [...nodes, ' ', node]
      }, [])}
    </Tag>
  )
}
