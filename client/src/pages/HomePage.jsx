import Hero from '../components/home/Hero.jsx'
import MarqueeStrip from '../components/home/MarqueeStrip.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import ServicesSection from '../components/home/services/ServicesSection.jsx'
import ProjectsSection from '../components/home/projects/ProjectsSection.jsx'
import WhyChooseUsSection from '../components/home/whyChooseUs/WhyChooseUsSection.jsx'
import CTASection from '../components/home/cta/CTASection.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  )
}
