import Container from '@/shared/ui/Container.jsx'
import ContactMethods from '@/features/home/sections/Contact/ContactMethods.jsx'
import ProjectEnquiryForm from '@/features/home/sections/Contact/ProjectEnquiryForm.jsx'
import '@/features/home/sections/Contact/contact.css'

/**
 * ContactSection
 * Four amber-accented contact cards on the left and a white project enquiry
 * form on the right, both sitting on the light paper background.
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section bg-[linear-gradient(180deg,var(--color-canvas),color-mix(in_srgb,var(--color-ink)_7%,var(--color-canvas)))]"
    >
      <span className="orb" style={{ '--orb-x': '70%', '--orb-y': '-20%', '--orb-size': '520px', '--orb-color': 'rgba(37,99,235,.16)' }} />

      <Container size="wide" className="grid items-start gap-[clamp(40px,7vw,120px)] min-[900px]:grid-cols-[5fr_6fr]">
        <ContactMethods />
        <ProjectEnquiryForm />
      </Container>
    </section>
  )
}
