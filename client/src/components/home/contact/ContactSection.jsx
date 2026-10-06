import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgb(37_99_235/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(37_99_235/0.02)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <Container size="wide">
        <div className={reveal}>
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in Touch"
            title="Start Your Project Today"
            description="Tell us about your vision and we'll help bring it to life with quality craftsmanship and dedicated service."
          />
        </div>

        <div className="mt-12 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div style={{ animationDelay: '90ms' }} className={reveal}>
            <ContactForm />
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div
              style={{ animationDelay: '180ms' }}
              className={`space-y-6 rounded-xl border border-line bg-surface p-6 shadow-[0_2px_8px_rgb(0_0_0/0.04)] sm:p-8 ${reveal}`}
            >
              <h3 className="font-display text-xl font-semibold text-ink-950">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-4 text-ink-700 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-600">Phone</p>
                    <p className="mt-1 text-base font-semibold">+1 (555) 123-4567</p>
                  </div>
                </a>

                <a
                  href="mailto:projects@apexbuild.com"
                  className="flex items-start gap-4 text-ink-700 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-600">Email</p>
                    <p className="mt-1 text-base font-semibold">projects@apexbuild.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-ink-700">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-600">Address</p>
                    <p className="mt-1 text-base font-semibold">
                      123 Construction Ave
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-ink-700">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-600">Business Hours</p>
                    <p className="mt-1 text-base font-semibold">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              style={{ animationDelay: '270ms' }}
              className={`relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_2px_8px_rgb(0_0_0/0.04)] ${reveal}`}
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-50 via-surface to-blue-50/50">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-blue-500/40" />
                  <p className="font-display text-lg font-semibold text-ink-700">
                    Map Integration
                  </p>
                  <p className="mt-1 text-sm text-ink-600">
                    Google Maps placeholder
                  </p>
                </div>
              </div>

              {/* Optional: Add decorative grid overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(255_255_255/0.3)_100%)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
