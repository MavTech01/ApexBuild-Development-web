import ServicesHero from '@/features/services/ServicesHero.jsx'
import ServicesListing from '@/features/services/ServicesListing.jsx'
import DeliveryProcess from '@/features/services/DeliveryProcess.jsx'
import ProjectsCTA from '@/features/projects/ProjectsCTA.jsx'

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
