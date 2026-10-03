// Demo data for the homepage Featured Projects section.
// These are fictional demonstration projects for this portfolio site, not real
// ApexBuild commissions. Replace this module with an API response later: the
// cards only depend on the shape below, so the field names should match what
// the projects endpoint will return.
export const projects = [
  {
    id: 'oakview-residences',
    title: 'Oakview Residences',
    category: 'Residential Development',
    location: 'Lagos, Nigeria',
    year: '2026',
    featured: true,
    href: '/projects',
    image: {
      src: '/images/project-oakview-placeholder.svg',
      alt: 'Architectural elevation drawing of the Oakview Residences tower, showing stacked balconies across each residential floor',
      width: 1600,
      height: 1200,
    },
  },
  {
    id: 'apex-business-centre',
    title: 'Apex Business Centre',
    category: 'Commercial Construction',
    location: 'Abuja, Nigeria',
    year: '2025',
    featured: false,
    href: '/projects',
    image: {
      src: '/images/project-apex-business-centre-placeholder.svg',
      alt: 'Architectural massing drawing of the Apex Business Centre, showing two glazed office volumes above a wide ground-floor podium',
      width: 1600,
      height: 1200,
    },
  },
  {
    id: 'greenfield-villas',
    title: 'Greenfield Villas',
    category: 'Property Development',
    location: 'Ibadan, Nigeria',
    year: '2025',
    featured: false,
    href: '/projects',
    image: {
      src: '/images/project-greenfield-villas-placeholder.svg',
      alt: 'Architectural site drawing of the Greenfield Villas estate, showing a row of pitched-roof villa units with landscaped grounds',
      width: 1600,
      height: 1200,
    },
  },
]