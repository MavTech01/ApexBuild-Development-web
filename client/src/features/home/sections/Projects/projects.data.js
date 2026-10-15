import {
  projectOakviewImg,
  projectCommercialImg,
  projectVillasImg,
} from '@/shared/assets/images'

// The three featured projects shown in the homepage track.
// Detail links are built from `id`, so no href field is needed here.
export const homeProjects = [
  {
    id: 'oakview-residences',
    title: 'Oakview Residences',
    location: 'Lagos, Nigeria',
    category: 'Residential development',
    image: projectOakviewImg,
    imageAlt: 'Oakview Residences, a modern residential tower',
  },
  {
    id: 'apex-business-centre',
    title: 'Apex Business Centre',
    location: 'Abuja, Nigeria',
    category: 'Commercial construction',
    image: projectCommercialImg,
    imageAlt: 'Apex Business Centre, a glazed commercial block under construction',
  },
  {
    id: 'greenfield-villas',
    title: 'Greenfield Villas',
    location: 'Lagos, Nigeria',
    category: 'Property development',
    image: projectVillasImg,
    imageAlt: 'Greenfield Villas, a multi-building residential estate',
  },
]
