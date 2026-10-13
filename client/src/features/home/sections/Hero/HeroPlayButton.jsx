import { Play } from 'lucide-react'

/**
 * HeroPlayButton
 * Showreel play trigger — gold circle plus caption, with press feedback.
 */
export default function HeroPlayButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center gap-4"
      aria-label="Play ApexBuild showreel video"
    >
      <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-gold text-ink ring-8 ring-gold/15 transition-transform duration-300 ease-out-premium group-hover:scale-105 group-active:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-active:scale-100">
        <Play className="h-7 w-7 translate-x-[2px] fill-current" />
      </span>
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-soft transition-colors duration-300 group-hover:text-gold group-active:text-gold">
        Watch showreel
      </span>
    </button>
  )
}
