import Hero from '../components/home/Hero.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import ServicesSection from '../components/home/services/ServicesSection.jsx'
import ProjectsSection from '../components/home/projects/ProjectsSection.jsx'
import WhyChooseUsSection from '../components/home/whyChooseUs/WhyChooseUsSection.jsx'
import Container from '../components/ui/Container.jsx'
import HealthCheck from '../components/HealthCheck.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-bronze-700 uppercase">
            Next phase
          </p>
          <p className="mt-4 max-w-xl text-lg text-ink-500">
            The remaining homepage sections will be built in later phases.
          </p>

          <div className="mt-10 max-w-md">
            <HealthCheck />
          </div>
        </Container>
      </section>
    </>
  )
}
