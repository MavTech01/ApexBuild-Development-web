import { contactMethods } from '@/features/home/sections/Contact/contactMethods.data.js'
import SplitHeading from '@/features/home/components/SplitHeading.jsx'
import Eyebrow from '@/features/home/components/Eyebrow.jsx'

const contactRowClass =
  'flex items-center gap-[18px] rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] px-5 py-[18px] text-ink shadow-[0_12px_30px_rgba(7,18,43,0.06)] transition'

const contactIconClass =
  'grid h-12 w-12 flex-none place-items-center rounded-xl bg-gold text-ink [&_svg]:h-[22px] [&_svg]:w-[22px]'

const rowSmallClass = 'block text-[0.8rem] tracking-[0.04em] text-muted'

/**
 * ContactMethods
 * The left column of the contact section: heading plus the four contact cards.
 */
export default function ContactMethods() {
  return (
    <div className="min-w-0">
      <Eyebrow>Get in touch</Eyebrow>
      <SplitHeading size="text-[clamp(1.8rem,5.4vw,5rem)]" text="Start Your Project" accent="Today." />
      <p className="mt-6 max-w-[36em] text-muted">
        Tell us about your vision and we&apos;ll help bring it to life with quality craftsmanship and
        dedicated service.
      </p>

      <ul className="mt-10 grid grid-cols-1 list-none gap-3.5 p-0">
        {contactMethods.map((method) => {
          const { icon: Icon, label, value, note, href } = method
          const body = (
            <>
              <span className={contactIconClass}>
                <Icon />
              </span>
              <span className="min-w-0">
                <small className={rowSmallClass}>{label}</small>
                <b className="block font-display text-[1.1rem] font-semibold leading-[1.4] [overflow-wrap:anywhere]">{value}</b>
                {note && <small className={rowSmallClass}>{note}</small>}
              </span>
            </>
          )

          return (
            <li key={label} className="min-w-0">
              {href ? (
                <a
                  href={href}
                  className={`${contactRowClass} hover:translate-x-2 hover:border-gold hover:bg-white active:translate-x-1 active:border-gold`}
                >
                  {body}
                </a>
              ) : (
                <div className={contactRowClass}>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
