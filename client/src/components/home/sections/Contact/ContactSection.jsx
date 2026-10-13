import Container from '@/components/ui/Container.jsx'
import ContactMethods from './ContactMethods.jsx'
import ProjectEnquiryForm from './ProjectEnquiryForm.jsx'
import './contact.css'

/**
 * ContactSection
 * Four amber-accented contact cards on the left and a white project enquiry
 * form on the right, both sitting on the light paper background.
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section bg-[linear-gradient(180deg,var(--bg),color-mix(in_srgb,var(--ink)_7%,var(--bg)))]"
    >
      <span className="orb" style={{ '--x': '70%', '--y': '-20%', '--s': '520px', '--c': 'rgba(37,99,235,.16)' }} />

      <Container size="wide" className="grid items-start gap-[clamp(40px,7vw,120px)] min-[900px]:grid-cols-[5fr_6fr]">
        <ContactMethods />
        <ProjectEnquiryForm />
      </Container>
    </section>
  )
}
