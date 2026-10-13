import { MapPin } from 'lucide-react'

/**
 * OfficeLocationCard
 * Stylised office location map placeholder for the contact page.
 */
export default function OfficeLocationCard() {
  return (
    <div
      style={{ animationDelay: '270ms' }}
      className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] sm:p-8 animate-rise"
    >
      <div className="flex items-center justify-between border-b border-line/70 pb-4">
        <h4 className="font-display text-base font-bold text-ink-950">Office Location Map</h4>
        <span className="font-display text-xs font-semibold tracking-wider text-blue-600 uppercase">
          Lagos, NG
        </span>
      </div>

      <div className="relative mt-4 flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-xl border border-line bg-gradient-to-br from-ink-900 via-ink-950 to-blue-950 p-6 text-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgb(255_255_255/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.1)_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/20 blur-2xl"
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-2.5 py-1 font-display text-[11px] font-semibold tracking-wider text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Regional Headquarters
          </span>
          <MapPin className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>

        <div className="relative z-10">
          <p className="font-display text-lg font-bold text-paper">ApexBuild Developments</p>
          <p className="text-xs text-ink-300">Lagos Metro Area &bull; Nigeria</p>
          <p className="mt-2 text-[11px] text-ink-400">
            Site visits and architectural consultations by prior appointment.
          </p>
        </div>
      </div>
    </div>
  )
}
