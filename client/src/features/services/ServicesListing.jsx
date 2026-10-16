import React from 'react'
import Container from '@/shared/ui/Container.jsx'
import SectionHeading from '@/shared/ui/SectionHeading.jsx'
import ServiceShowcaseCard from '@/features/services/ServiceShowcaseCard.jsx'
import { detailedServices } from '@/features/services/servicesDetailed.data.js'

/**
 * ServicesListing
 * The "What We Deliver" section: a full-width accordion list where each service
 * row expands independently, so opening one never resizes another.
 */
export default function ServicesListing() {
  return (
    <section
      aria-labelledby="services-listing-heading"
      className="relative isolate bg-paper py-16 sm:py-20 lg:py-28"
    >
      {/* Background Subtle Gradient & Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgb(37_99_235/0.05),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgb(0_0_0/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.02)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <Container size="wide">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center animate-rise">
          <SectionHeading
            id="services-listing-heading"
            align="center"
            eyebrow="What We Deliver"
            title="Comprehensive Services for Every Phase"
            description="Explore our primary disciplines through built execution. Expand each service to review its technical deliverables, standards, and scope."
          />
        </div>

        {/* Full-width accordion list — each row expands independently */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:mt-20 lg:gap-7">
          {detailedServices.map((service, index) => (
            <ServiceShowcaseCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
