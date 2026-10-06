import ServicesHero from '@/components/services/ServicesHero.jsx'
import ServicesListing from '@/components/services/ServicesListing.jsx'
import DeliveryProcess from '@/components/services/DeliveryProcess.jsx'
import ProjectsCTA from '@/components/projects/ProjectsCTA.jsx'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesListing />
      <DeliveryProcess />
      <ProjectsCTA />
    </>
  )
}
