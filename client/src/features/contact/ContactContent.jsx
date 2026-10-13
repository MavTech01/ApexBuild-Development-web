import Container from '@/shared/ui/Container.jsx'
import SectionHeading from '@/shared/ui/SectionHeading.jsx'
import ContactForm from '@/features/contact/form/ContactForm.jsx'
import ContactInfoCard from '@/features/contact/ContactInfoCard.jsx'
import OfficeLocationCard from '@/features/contact/OfficeLocationCard.jsx'
import ExploreLinksCard from '@/features/contact/ExploreLinksCard.jsx'

/**
 * ContactContent
 * Contact page body: enquiry form on the left, office information and quick
 * links on the right.
 */
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
              <div className="mb-8 border-b border-line/70 pb-5">
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

          {/* Right Column: Contact Info, Location Graphic & Navigation Shortcuts */}
          <div className="space-y-8 lg:col-span-5">
            <ContactInfoCard />
            <OfficeLocationCard />
            <ExploreLinksCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
