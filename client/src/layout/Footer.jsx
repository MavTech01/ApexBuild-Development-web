import { navLinks, serviceLinks, site } from '@/shared/config/site.js'
import { useRevealOnScroll } from '@/shared/hooks/useRevealOnScroll.js'
import { useScrollProgress } from '@/shared/hooks/useScrollProgress.js'
import FooterWatermark from '@/layout/FooterWatermark.jsx'
import FooterBrandColumn from '@/layout/FooterBrandColumn.jsx'
import FooterLinkColumn from '@/layout/FooterLinkColumn.jsx'
import FooterContactColumn from '@/layout/FooterContactColumn.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  const [ref, revealed] = useRevealOnScroll(0.1)

  // The oversized brand watermark only rises into place as the footer reaches
  // the end of the page: 0 when the footer first enters the viewport, 1 once
  // its bottom edge meets the viewport bottom (the very end of the scroll).
  const brandProgress = useScrollProgress(ref, (rect, viewportHeight) => {
    return 1 - (rect.bottom - viewportHeight) / rect.height
  })

  return (
    <footer
      ref={ref}
      className="hazard-stripes relative isolate overflow-hidden bg-brand-deep px-[var(--gut)] pt-[clamp(64px,9vw,110px)] text-fog"
    >
      <span className="orb" style={{ '--x': '75%', '--y': '-20%', '--s': '520px', '--c': 'rgba(242,169,0,.16)' }} />
      <span className="orb" style={{ '--x': '-10%', '--y': '30%', '--s': '480px', '--c': 'rgba(37,99,235,.4)', '--d': '19s' }} />

      <FooterWatermark progress={brandProgress} />

      <div className="grid gap-[clamp(32px,4vw,64px)] pb-[clamp(48px,6vw,72px)] min-[900px]:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <FooterBrandColumn />
        <FooterLinkColumn title="Company" links={navLinks} delay="120ms" revealed={revealed} />
        <FooterLinkColumn title="Services" links={serviceLinks} delay="180ms" revealed={revealed} />
        <FooterContactColumn delay="240ms" revealed={revealed} />
      </div>

      <p className="py-6 text-[0.82rem] text-[#8ea0bd]">&copy; {year} {site.name}. All rights reserved.</p>
    </footer>
  )
}
