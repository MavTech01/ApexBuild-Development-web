import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ContactForm from '@/components/home/contact/ContactForm.jsx'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactContent() {
  return (
    <section
      aria-labelledby="contact-main-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center animate-rise">
          <SectionHeading
            id="contact-main-heading"
            align="center"
            eyebrow="Direct Enquiries"
            title="Start Your Project With ApexBuild"
            description="Our project managers, structural engineers, and development leads are ready to review your project scope and guide you through the next steps."
          />
        </div>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Form */}
          <div style={{ animationDelay: '90ms' }} className="lg:col-span-7 animate-rise">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] sm:p-10">
              <div className="border-b border-line/70 pb-5 mb-8">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                  Project Enquiry Form
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  Please provide details about your proposed build or development. We will review your requirements and respond promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Right Column: Contact Info, Location Placeholder & Navigation Shortcuts */}
          <div className="space-y-8 lg:col-span-5">
            {/* Contact Details Card */}
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
                    <p className="mt-0.5 text-base font-bold text-ink-950">
                      ApexBuild Developments
                    </p>
                    <p className="text-sm text-ink-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <a
                  href="tel:+10000000000"
                  className="group flex items-start gap-4 transition-colors hover:text-blue-600"
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
                  className="group flex items-start gap-4 transition-colors hover:text-blue-600"
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
                    <p className="text-xs text-ink-500">
                      Saturday: 9:00 AM &ndash; 3:00 PM (By Appointment)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-line/70 pt-5">
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>Licensed, bonded and insured development contractor.</span>
                </div>
              </div>
            </div>

            {/* Map & Location Graphic Placeholder */}
            <div
              style={{ animationDelay: '270ms' }}
              className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_4px_20px_rgb(0_0_0/0.03)] sm:p-8 animate-rise"
            >
              <div className="flex items-center justify-between pb-4 border-b border-line/70">
                <h4 className="font-display text-base font-bold text-ink-950">
                  Office Location Map
                </h4>
                <span className="font-display text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Lagos, NG
                </span>
              </div>

              <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-line bg-gradient-to-br from-ink-900 via-ink-950 to-blue-950 p-6 flex flex-col justify-between text-paper">
                {/* Blueprint grid overlay */}
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
                  <p className="font-display text-lg font-bold text-paper">
                    ApexBuild Developments
                  </p>
                  <p className="text-xs text-ink-300">
                    Lagos Metro Area &bull; Nigeria
                  </p>
                  <p className="mt-2 text-[11px] text-ink-400">
                    Site visits and architectural consultations by prior appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation / Next Steps Card */}
            <div
              style={{ animationDelay: '360ms' }}
              className="rounded-2xl border border-line bg-paper/60 p-6 sm:p-7 animate-rise"
            >
              <h4 className="font-display text-sm font-bold tracking-wider text-ink-900 uppercase">
                Explore Before Inquiring
              </h4>
              <p className="mt-1 text-xs text-ink-600">
                Review our recent projects or full service capabilities:
              </p>

              <div className="mt-4 flex flex-col gap-2.5">
                <Link
                  to="/projects"
                  className="group flex items-center justify-between rounded-lg border border-line/80 bg-surface px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-blue-500/50 hover:text-blue-600"
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    View Featured Projects
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center justify-between rounded-lg border border-line/80 bg-surface px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-blue-500/50 hover:text-blue-600"
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    Explore Our Capabilities
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
