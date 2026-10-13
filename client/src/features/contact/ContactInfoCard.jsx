import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

/**
 * ContactInfoCard
 * Office information card for the contact page: location, phone, email, hours.
 */
export default function ContactInfoCard() {
  return (
    <div
      style={{ animationDelay: '180ms' }}
      className="rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] sm:p-8 animate-rise"
    >
      <h3 className="font-display text-xl font-bold tracking-tight text-ink-950 sm:text-2xl">
        Office Information
      </h3>
      <p className="mt-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase">
        ApexBuild Developments Headquarters
      </p>

      <div className="mt-6 space-y-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-ink-400 uppercase">Office Location</p>
            <p className="mt-0.5 text-base font-bold text-ink-950">ApexBuild Developments</p>
            <p className="text-sm text-ink-600">Lagos, Nigeria</p>
          </div>
        </div>

        <a
          href="tel:+10000000000"
          className="group flex items-start gap-4 transition-colors hover:text-blue-600 active:text-blue-600"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-ink-400 uppercase">Direct Line</p>
            <p className="mt-0.5 text-base font-bold text-ink-950 transition-colors group-hover:text-blue-600">
              +1 (000) 000-0000
            </p>
            <p className="text-xs text-ink-500">Mon &ndash; Fri, 8:00 AM &ndash; 6:00 PM</p>
          </div>
        </a>

        <a
          href="mailto:info@apexbuilddevelopments.com"
          className="group flex items-start gap-4 transition-colors hover:text-blue-600 active:text-blue-600"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-ink-400 uppercase">Enquiry Email</p>
            <p className="mt-0.5 text-base font-bold text-ink-950 transition-colors group-hover:text-blue-600">
              info@apexbuilddevelopments.com
            </p>
            <p className="text-xs text-ink-500">Responses within 24 business hours</p>
          </div>
        </a>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Clock className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-ink-400 uppercase">Business Hours</p>
            <p className="mt-0.5 text-sm font-semibold text-ink-900">
              Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM
            </p>
            <p className="text-xs text-ink-500">Saturday: 9:00 AM &ndash; 3:00 PM (By Appointment)</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-line/70 pt-5">
        <div className="flex items-center gap-2 text-xs text-ink-500">
          <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          <span>Licensed, bonded and insured development contractor.</span>
        </div>
      </div>
    </div>
  )
}
