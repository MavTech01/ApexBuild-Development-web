import { marqueeItems } from '@/features/home/sections/Hero/marquee.data.js'

// The track holds two identical "halves" and shifts by -50% for a seamless
// loop. Each half therefore has to be at least one viewport wide, otherwise a
// blank gap flashes on wide screens between loops. Repeating the set enough
// times keeps every half (~6k px) wider than any realistic display. The cycle
// time in the class below is 32s x REPEATS so the scroll speed stays exactly as
// designed (~31 px/s — the original 4 items in 32s).
const REPEATS = 6
const half = Array.from({ length: REPEATS }, () => marqueeItems).flat()

const TRACK_CLASS =
  'inline-flex will-change-transform [transform:translate3d(0,0,0)] animate-[marquee-scroll_192s_linear_infinite]'

const ITEM_CLASS =
  "inline-flex items-center gap-[1.2em] pr-[1.2em] text-[clamp(0.95rem,1.6vw,1.25rem)] font-bold tracking-[-0.01em] after:h-[0.5em] after:w-[0.5em] after:rotate-45 after:bg-gold after:content-['']"

/**
 * MarqueeStrip
 * Full-bleed gradient strip of looping service words separated by yellow
 * diamonds. The list is duplicated so the CSS animation can loop seamlessly
 * (it translates the track by -50%). Marked aria-hidden as it is decorative.
 *
 * The track is promoted to its own compositor layer (translate3d + will-change)
 * so the transform runs on the GPU instead of repainting each frame.
 */
export default function MarqueeStrip() {
  const track = [...half, ...half]

  return (
    <div
      aria-hidden="true"
      className="flex h-14 items-center overflow-hidden whitespace-nowrap bg-[linear-gradient(100deg,#0b2a6b_0%,#2563eb_55%,#1b3fa8_100%)] text-white"
    >
      <div className={TRACK_CLASS}>
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className={ITEM_CLASS}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
