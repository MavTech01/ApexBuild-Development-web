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
      src: '/images/project-oakview.jpg',
      alt: 'Modern residential apartment building with balconies',
      width: 960,
      height: 1440,
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
      src: '/images/project-business.jpg',
      alt: 'Glass office building facade under a clear sky',
      width: 960,
      height: 1282,
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
      src: '/images/project-villas.jpg',
      alt: 'Modern house with clean roofline and facade',
      width: 960,
      height: 720,
    },
  },
]
