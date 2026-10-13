import {
  Hero,
  MarqueeStrip,
  AboutSection,
  ServicesSection,
  ProcessSection,
  WhySection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/home/sections/index.js'

export default function HomePage() {
  return (
    <div className="apex-home">
      <Hero />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}