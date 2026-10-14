import { site } from '@/shared/config/site.js'
import Brand from '@/shared/ui/Brand.jsx'

/**
 * FooterBrandColumn
 * Brand logo, description and tagline.
 */
export default function FooterBrandColumn() {
  return (
    <div className="min-[900px]:col-span-1">
      <Brand />
      <p className="mt-5 max-w-[34em] text-[0.95rem] leading-[1.55]">{site.description}</p>
      <em className="mt-[18px] block font-display text-[0.95rem] font-semibold not-italic text-gold">{site.tagline}</em>
    </div>
  )
}
