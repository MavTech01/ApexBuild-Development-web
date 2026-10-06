import Container from '@/components/ui/Container.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'
import ProjectImage from './ProjectImage.jsx'
import ConstructionBackground from './ConstructionBackground.jsx'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

export default function ProjectFormSection() {
  const [ref, revealed] = useRevealOnScroll()
  const reveal = revealed ? 'animate-rise' : 'opacity-0 translate-y-4'

  return (
    <section
      ref={ref}
      aria-labelledby="project-form-heading"
      className="relative overflow-hidden bg-gradient-to-br from-ivory via-paper to-ivory py-16 sm:py-20 lg:py-24"
    >
      <ConstructionBackground />
      <Container size="wide">
        <div className={reveal}>
          <SectionHeading
            id="project-form-heading"
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

          {/* Right Column - Project Image */}
          <div style={{ animationDelay: '180ms' }} className={reveal}>
            <ProjectImage />
          </div>
        </div>
      </Container>
    </section>
  )
}

