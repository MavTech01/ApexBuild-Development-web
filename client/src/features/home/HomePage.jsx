import {
  Hero,
  AboutSection,
  ServicesSection,
  ProcessSection,
  WhySection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
} from '@/features/home/sections'

export default function HomePage() {
  return (
    <div className="apex-home">
      <Hero />
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