import { site, socialLinks } from '@/config/site.js'
import { footerColumnClass, footerLinkClass, socialIcons } from './footer.data.js'

/**
 * FooterContactColumn
 * Contact address / email / phone plus the social follow icons.
 */
export default function FooterContactColumn({ delay, revealed }) {
  return (
    <div className={`${footerColumnClass}${revealed ? ' in' : ''}`} style={{ '--d': delay }}>
      <h4 className="mb-5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
      <address className="mb-7 grid gap-2.5 not-italic">
        <p>{site.address[0]}</p>
        <p>{site.address[1]}</p>
        <p>
          <a href={`mailto:${site.email}`} className={footerLinkClass}>{site.email}</a>
        </p>
        <p>
          <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className={footerLinkClass}>{site.phone}</a>
        </p>
      </address>

      <h4 className="mb-5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white">Follow</h4>
      <ul className="flex list-none gap-3 p-0">
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.label]
          return (
            <li key={social.label}>
              <a
                href="#"
                title={social.label}
                aria-label={social.label}
                className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-white/[0.18] text-fog transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
