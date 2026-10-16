import { site } from '@/shared/config/site.js'

const officeLocation = site.address[1]
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(officeLocation)}&z=12&output=embed`

/**
 * OfficeLocationCard
 * Office location map for the contact page. The location comes from the shared
 * `site` config so it stays in sync with the rest of the site.
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
          {officeLocation}
        </span>
      </div>

      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-line">
        <iframe
          title={`${site.name} Office Location - ${officeLocation}`}
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}