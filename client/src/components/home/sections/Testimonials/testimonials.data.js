// Six client testimonials for the homepage marquee.
// Michael Thompson is a real entry carried over from the existing project;
// the rest are placeholder quotes in the same voice.
export const testimonials = [
  {
    id: 'heritage-trust',
    quote:
      'The renovation of our historic building required specialized expertise, and ApexBuild delivered brilliantly. They preserved the architectural integrity while modernizing the infrastructure.',
    name: 'Michael Thompson',
    role: 'Facilities Director, Heritage Trust',
  },
  {
    id: 'apex-business-centre',
    quote:
      'ApexBuild delivered our commercial property on schedule, kept us informed at every stage, and the quality speaks for itself.',
    name: 'Daniel Mitchell',
    role: 'Commercial client, Apex Business Centre',
  },
  {
    id: 'greenfield-villas',
    quote:
      'They treated our home like their own. Every finish was checked before handover, and there were no surprise costs.',
    name: 'Adaeze Okonkwo',
    role: 'Homeowner, Greenfield Villas',
  },
  {
    id: 'oakview-residences',
    quote:
      'Clear scope, honest updates and a site team that knew exactly what they were doing. We would build with them again.',
    name: 'Tunde Bakare',
    role: 'Property investor, Oakview Residences',
  },
  {
    id: 'office-remodel',
    quote:
      'Our old building was completely transformed without the usual chaos. The project manager was always one call away.',
    name: 'Ngozi Eze',
    role: 'Renovation client, Office remodel',
  },
  {
    id: 'abuja-developer',
    quote:
      'Budgets, schedules and quality were managed tightly from day one. It is rare to find a contractor this dependable.',
    name: 'Ibrahim Sule',
    role: 'Developer, Abuja',
  },
]

export function initials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
}
