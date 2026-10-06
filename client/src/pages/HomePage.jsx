import Hero from '../components/home/Hero.jsx'
import MarqueeStrip from '../components/home/MarqueeStrip.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import ServicesSection from '../components/home/services/ServicesSection.jsx'
import ProjectsSection from '../components/home/projects/ProjectsSection.jsx'
import WhyChooseUsSection from '../components/home/whyChooseUs/WhyChooseUsSection.jsx'
import TestimonialsSection from '../components/home/testimonials/TestimonialsSection.jsx'
import ContactInfoSection from '../components/home/contact/ContactInfoSection.jsx'
import ProjectFormSection from '../components/home/contact/ProjectFormSection.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactInfoSection />
      <ProjectFormSection />
    </>
  )
}
