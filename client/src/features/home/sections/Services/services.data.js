import {
  servicePlanningImg,
  projectHighriseImg,
  projectTownhousesImg,
  projectResidentialComplexImg,
} from '@/shared/assets/images'

// The four services shown in the sticky "What we do" section.
// `caption` is the short line shown in the image panel overlay.
export const services = [
  {
    id: 'construction',
    title: 'Building construction',
    description:
      'From foundations to finishing, we manage construction projects with careful attention to quality, safety and detail.',
    caption: 'Foundations to finishes',
    image: servicePlanningImg,
    imageAlt: 'Engineers reviewing building plans on a construction site',
    href: '/services',
  },
  {
    id: 'development',
    title: 'Property development',
    description:
      'We develop residential and commercial properties with a focus on functionality, thoughtful design and lasting value.',
    caption: 'Residential and commercial properties',
    image: projectHighriseImg,
    imageAlt: 'High-rise development with cranes against a blue sky',
    href: '/services',
  },
  {
    id: 'renovation',
    title: 'Renovation and remodeling',
    description:
      'Existing spaces transformed through careful planning, structural upgrades and quality finishes.',
    caption: 'Planning, upgrades and new finishes',
    image: projectTownhousesImg,
    imageAlt: 'Townhouse development during a renovation',
    href: '/services',
  },
  {
    id: 'management',
    title: 'Project management',
    description:
      'People, schedules, budgets and quality control coordinated from first idea to final handover.',
    caption: 'Schedules, budgets and quality control',
    image: projectResidentialComplexImg,
    imageAlt: 'Wide residential complex under construction',
    href: '/services',
  },
]
