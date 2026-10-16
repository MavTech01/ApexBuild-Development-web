import {
  heroImg,
  ctaImg,
  aboutImg,
  projectOakviewImg,
  projectCommercialImg,
  projectVillasImg,
  projectHighriseImg,
  projectTownhousesImg,
  projectResidentialComplexImg,
  siteMachineryImg,
} from '@/shared/assets/images'

// Demo data for projects. Replace with an API response later: the cards and
// details pages depend on the shape below, so the field names should match
// what the projects endpoint will return.
export const projects = [
  {
    id: 'oakview-residences',
    title: 'Oakview Residences',
    category: 'Residential Development',
    categorySlug: 'residential',
    location: 'Lagos, Nigeria',
    featured: true,
    href: '/projects/oakview-residences',
    scope: 'Full Architectural Design & Turnkey Construction',
    client: 'Oakview Living Consortium',
    area: '14,200 sq.m',
    description:
      'Oakview Residences is a modern multi-unit residential development designed for upscale urban living. Built with precision engineering and high-performance materials, the project features open-plan apartment layouts, generous private balconies, energy-efficient ventilation systems, and beautifully landscaped community spaces.',
    highlights: [
      'Reinforced concrete structure with precision acoustic insulation',
      'Panoramic glass balconies with low-emissivity coating',
      'Integrated solar-assisted power generation and smart metering',
      'Secure multi-tier access control and dedicated resident parking',
    ],
    image: {
      src: projectOakviewImg,
      alt: '5-storey residential building with bamboo scaffolding, street view',
      width: 960,
      height: 1440,
    },
    gallery: [
      {
        src: heroImg,
        alt: 'Wide construction site with blue cranes and cement mixer',
        width: 960,
        height: 640,
      },
      {
        src: aboutImg,
        alt: 'Three construction workers reviewing blueprint on-site',
        width: 960,
        height: 640,
      },
    ],
  },
  {
    id: 'apex-business-centre',
    title: 'Apex Business Centre',
    category: 'Commercial Construction',
    categorySlug: 'commercial',
    location: 'Abuja, Nigeria',
    featured: false,
    href: '/projects/apex-business-centre',
    scope: 'Commercial Engineering, Facade & Interior Fitout',
    client: 'Apex Commercial Ventures',
    area: '22,500 sq.m',
    description:
      'Apex Business Centre is a Grade-A commercial complex located in the heart of Abuja. Engineered to accommodate dynamic corporate workspaces, the building combines high-efficiency curtain wall glazing, flexible open-floor office plates, intelligent climate control systems, and centralized conference facilities.',
    highlights: [
      'High-performance double-glazed structural curtain wall system',
      'Flexible floor plans accommodating up to 450 corporate occupants per level',
      'Advanced building management system (BMS) with automated lighting and HVAC',
      'Triple-redundant power backup and high-speed fiber connectivity infrastructure',
    ],
    image: {
      src: projectCommercialImg,
      alt: 'Large high-rise commercial building with yellow cranes under construction',
      width: 960,
      height: 1282,
    },
    gallery: [
      {
        src: ctaImg,
        alt: 'Upward view of scaffolding and concrete structure',
        width: 960,
        height: 640,
      },
      {
        src: aboutImg,
        alt: 'Three construction workers reviewing blueprint on-site',
        width: 960,
        height: 640,
      },
    ],
  },
  {
    id: 'greenfield-villas',
    title: 'Greenfield Villas',
    category: 'Property Development',
    categorySlug: 'property-development',
    location: 'Ibadan, Nigeria',
    featured: false,
    href: '/projects/greenfield-villas',
    scope: 'Master Planning, Civil Infrastructure & Villa Construction',
    client: 'Greenfield Estates Ltd',
    area: '38,000 sq.m',
    description:
      'Greenfield Villas represents an exclusive gated residential community focused on sustainable luxury and serene family living. Each villa embodies contemporary tropical architecture with deep overhangs, natural cross-ventilation, expansive private gardens, and locally sourced stone finishes.',
    highlights: [
      'Gated residential enclave with private perimeter fencing and perimeter sensing',
      'Custom architectural detailing with natural timber and stonework accents',
      'Rainwater harvesting and on-site sustainable drainage retention ponds',
      'Dedicated recreation pavilion, swimming pool, and central green park',
    ],
    image: {
      src: projectVillasImg,
      alt: 'Aerial view of multi-building residential estate under construction',
      width: 960,
      height: 720,
    },
    gallery: [
      {
        src: projectTownhousesImg,
        alt: 'Modern townhouse development under construction',
        width: 960,
        height: 1440,
      },
      {
        src: heroImg,
        alt: 'Wide construction site with blue cranes and cement mixer',
        width: 960,
        height: 640,
      },
    ],
  },
  {
    id: 'marina-towers',
    title: 'Marina Towers',
    category: 'Commercial Construction',
    categorySlug: 'commercial',
    location: 'Lagos, Nigeria',
    featured: false,
    href: '/projects/marina-towers',
    scope: 'High-Rise Structural Construction & MEP Engineering',
    client: 'Marina Bay Investments',
    area: '28,000 sq.m',
    description:
      'Rising along the waterfront, Marina Towers is a signature commercial landmark offering premium executive suites and retail spaces. Designed to withstand coastal climate demands, the structure utilizes corrosion-resistant marine-grade alloys, reinforced post-tensioned slabs, and wind-dampening architectural geometry.',
    highlights: [
      'Marine-grade reinforced concrete structure and coastal-rated coatings',
      'Vibration and wind-resistant structural core engineering',
      'Waterfront promenade access with ground-level retail and dining arcades',
      'High-speed destination-dispatch elevator systems',
    ],
    image: {
      src: projectHighriseImg,
      alt: 'Yellow cranes against blue sky, high-rise scaffolding',
      width: 960,
      height: 1440,
    },
    gallery: [
      {
        src: projectCommercialImg,
        alt: 'Large commercial high-rise with yellow cranes under construction',
        width: 960,
        height: 1282,
      },
      {
        src: ctaImg,
        alt: 'Upward view of scaffolding and concrete structure',
        width: 960,
        height: 640,
      },
    ],
  },
  {
    id: 'parkview-estate',
    title: 'Parkview Estate',
    category: 'Residential Development',
    categorySlug: 'residential',
    location: 'Port Harcourt, Nigeria',
    featured: false,
    href: '/projects/parkview-estate',
    scope: 'Subdivision Infrastructure & Residential Construction',
    client: 'Riverside Housing Trust',
    area: '45,000 sq.m',
    description:
      'Parkview Estate is a master-planned community developed to provide serene, secure family living in a rapidly developing urban corridor. The project encompasses 64 residential units, paved internal road networks, integrated underground storm drainage, and lush botanical buffer zones.',
    highlights: [
      'Master-planned 64-unit residential community with underground utility ducts',
      'Paved asphalt road networks with solar street lighting throughout',
      'Community sports grounds, children playground, and resident clubhouse',
      'Central water purification plant and dedicated pressure delivery network',
    ],
    image: {
      src: projectResidentialComplexImg,
      alt: 'Wide residential complex with crane under construction',
      width: 960,
      height: 720,
    },
    gallery: [
      {
        src: heroImg,
        alt: 'Wide construction site with blue cranes and cement mixer',
        width: 960,
        height: 640,
      },
      {
        src: aboutImg,
        alt: 'Three construction workers reviewing blueprint on-site',
        width: 960,
        height: 640,
      },
    ],
  },
  {
    id: 'central-plaza',
    title: 'Central Plaza',
    category: 'Property Development',
    categorySlug: 'property-development',
    location: 'Abuja, Nigeria',
    featured: false,
    href: '/projects/central-plaza',
    scope: 'Mixed-Use Development & Construction Management',
    client: 'Capital Asset Development',
    area: '18,500 sq.m',
    description:
      'Central Plaza is a vibrant mixed-use development combining high-traffic retail spaces on ground levels with flexible business suites above. Centered around a sheltered open-air atrium, the project promotes pedestrian flow while maximizing natural illumination and cross ventilation.',
    highlights: [
      'Dual-function retail and commercial floors with pedestrian promenade',
      'Central glass atrium bringing natural daylight to lower level concourses',
      'Multi-level subterranean parking with digital space-guidance systems',
      'Bespoke architectural lighting enhancing nocturnal visibility and aesthetic appeal',
    ],
    image: {
      src: siteMachineryImg,
      alt: 'Excavator and construction machinery on site',
      width: 960,
      height: 1282,
    },
    gallery: [
      {
        src: projectVillasImg,
        alt: 'Aerial view of multi-building residential estate under construction',
        width: 960,
        height: 720,
      },
      {
        src: ctaImg,
        alt: 'Upward view of scaffolding and concrete structure',
        width: 960,
        height: 640,
      },
    ],
  },
]

export const projectCategories = [
  { label: 'All', slug: 'all' },
  { label: 'Residential', slug: 'residential' },
  { label: 'Commercial', slug: 'commercial' },
  { label: 'Property Development', slug: 'property-development' },
]

/**
 * Finds a project by its unique slug/id.
 * Matches what an API / MongoDB query would return (e.g. `GET /api/projects/:id`).
 */
export function getProjectById(id) {
  if (!id) return null
  return projects.find((project) => project.id === id) ?? null
}

/**
 * Returns other projects excluding the current one, prioritizing the same category.
 */
export function getRelatedProjects(currentId, limit = 3) {
  const current = getProjectById(currentId)
  const remaining = projects.filter((project) => project.id !== currentId)

  if (!current) return remaining.slice(0, limit)

  // Prioritize same category first, then fill with others
  const sameCategory = remaining.filter((p) => p.categorySlug === current.categorySlug)
  const otherCategory = remaining.filter((p) => p.categorySlug !== current.categorySlug)

  return [...sameCategory, ...otherCategory].slice(0, limit)
}
