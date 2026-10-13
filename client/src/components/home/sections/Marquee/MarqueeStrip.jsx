const items = [
  'Project management',
  'Architectural consulting',
  'Construction',
  'Property development',
]

/**
 * MarqueeStrip
 * Full-bleed gradient strip of looping service words separated by yellow
 * diamonds. The list is duplicated so the CSS animation can loop seamlessly
 * (it translates the track by -50%). Marked aria-hidden as it is decorative.
 */
export default function MarqueeStrip() {
  const doubled = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className="flex h-14 items-center overflow-hidden whitespace-nowrap bg-[linear-gradient(100deg,#0b2a6b_0%,#2563eb_55%,#1b3fa8_100%)] text-white"
    >
      <div className="inline-flex animate-[marquee-scroll_32s_linear_infinite]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-[1.2em] pr-[1.2em] text-[clamp(0.95rem,1.6vw,1.25rem)] font-bold tracking-[-0.01em] after:h-[0.5em] after:w-[0.5em] after:rotate-45 after:bg-gold after:content-['']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
