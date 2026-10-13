import {
  projectOakviewImg,
  projectCommercialImg,
  projectVillasImg,
} from '@/shared/assets/images'

// The three featured projects shown in the homepage track.
// Hrefs point at the existing project detail routes.
export const homeProjects = [
  {
    id: 'oakview-residences',
    title: 'Oakview Residences',
    location: 'Lagos, Nigeria',
    category: 'Residential development',
    image: projectOakviewImg,
    imageAlt: 'Oakview Residences, a modern residential tower',
    href: '/projects/oakview-residences',
  },
  {
    id: 'apex-business-centre',
    title: 'Apex Business Centre',
    location: 'Abuja, Nigeria',
    category: 'Commercial construction',
    image: projectCommercialImg,
    imageAlt: 'Apex Business Centre, a glazed commercial block under construction',
    href: '/projects/apex-business-centre',
  },
  {
    id: 'greenfield-villas',
    title: 'Greenfield Villas',
    location: 'Lagos, Nigeria',
    category: 'Property development',
    image: projectVillasImg,
    imageAlt: 'Greenfield Villas, a multi-building residential estate',
    href: '/projects/greenfield-villas',
  },
]
