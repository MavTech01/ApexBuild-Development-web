import heroImg from '@/assets/images/hero.png'
import ctaImg from '@/assets/images/cta.png'
import aboutImg from '@/assets/images/about.png'
import projectVillasImg from '@/assets/images/project-villas.png'

export const detailedServices = [
  {
    id: 'construction',
    anchorId: 'residential',
    title: 'Building Construction',
    category: 'Structural & Architectural Construction',
    description:
      'Construction of residential and commercial spaces with a focus on quality, functionality and durability.',
    summary:
      'From foundational groundwork to final architectural handover, ApexBuild executes complete new builds with rigorous engineering standards, strict adherence to site safety, and exacting craftsmanship.',
    capabilities: [
      'Residential estates, multi-unit developments and custom luxury residences',
      'Commercial office spaces, retail destinations and institutional facilities',
      'Reinforced concrete, structural steel and modern composite assemblies',
      'Comprehensive building regulation adherence and structural inspections',
    ],
    features: [
      { label: 'Standard', value: 'High-Durability Spec' },
      { label: 'Scope', value: 'Ground-Up & Fit-Out' },
      { label: 'Assurance', value: 'Multi-Phase Quality Audits' },
    ],
    icon: 'construction',
    image: {
      src: heroImg,
      alt: 'Wide construction site with blue cranes and cement mixer',
    },
  },
  {
    id: 'development',
    anchorId: 'development',
    title: 'Property Development',
    category: 'End-to-End Asset Creation',
    description:
      'From concept and planning through development and delivery, creating properties designed for long-term value.',
    summary:
      'We identify strategic opportunities and transform raw land or underutilized sites into modern, high-yielding built environments. Our development process bridges financial viability with architectural distinction.',
    capabilities: [
      'Site acquisition, zoning appraisals and master-planning analysis',
      'Feasibility modeling, development appraisals and capital optimization',
      'Coordination with planning authorities and municipal approvals',
      'Full delivery from design conception to commissioning and sales handover',
    ],
    features: [
      { label: 'Lifecycle', value: 'Inception to Handover' },
      { label: 'Focus', value: 'Long-Term Asset Value' },
      { label: 'Strategy', value: 'Sustainable Urban Growth' },
    ],
    icon: 'development',
    image: {
      src: ctaImg,
      alt: 'Upward view of scaffolding and concrete structure',
    },
  },
  {
    id: 'renovation',
    anchorId: 'renovation',
    title: 'Renovation & Remodeling',
    category: 'Spatial Modernization & Structural Refurbishment',
    description:
      'Transforming existing spaces through thoughtful renovation, upgrades and remodeling.',
    summary:
      'We breathe new life into existing structures, upgrading thermal performance, layout flow, and interior aesthetics while preserving architectural integrity and expanding functional utility.',
    capabilities: [
      'Full-scale interior and exterior structural remodeling',
      'Energy efficiency retrofits, insulation upgrades and envelope sealing',
      'Adaptive reuse of commercial assets and residential modernization',
      'Heritage preservation alongside modern mechanical and electrical integrations',
    ],
    features: [
      { label: 'Turnaround', value: 'Phased Scheduling' },
      { label: 'Impact', value: 'Enhanced Functional Utility' },
      { label: 'Execution', value: 'Minimal Operational Disruption' },
    ],
    icon: 'renovation',
    image: {
      src: projectVillasImg,
      alt: 'Aerial view of multi-building residential estate under construction',
    },
  },
  {
    id: 'management',
    anchorId: 'commercial',
    title: 'Project Management',
    category: 'Timeline, Budget & Team Governance',
    description:
      'Coordinating project planning, professionals, timelines and resources to help projects move efficiently from start to completion.',
    summary:
      'Complex builds demand precision coordination. Our project management team brings disciplined procurement, milestone forecasting, contractor alignment, and proactive risk management to every phase.',
    capabilities: [
      'Integrated master scheduling and critical path management',
      'Procurement strategy, transparent contractor tenders and vendor oversight',
      'Budget governance, cost tracking and detailed contingency control',
      'On-site health & safety management, risk reduction and compliance reporting',
    ],
    features: [
      { label: 'Control', value: 'Milestone-Based Governance' },
      { label: 'Transparency', value: 'Real-Time Cost Reporting' },
      { label: 'Safety', value: 'Zero-Harm Site Protocol' },
    ],
    icon: 'management',
    image: {
      src: aboutImg,
      alt: 'Three construction workers reviewing blueprint on-site',
    },
  },
]

export const deliveryProcess = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    description:
      'We engage with you to understand project vision, functional demands, spatial needs, and budgetary parameters.',
  },
  {
    step: '02',
    title: 'Planning & Feasibility',
    description:
      'Thorough technical evaluations, site surveys, regulatory reviews, and realistic milestone projections before site work begins.',
  },
  {
    step: '03',
    title: 'Precision Execution',
    description:
      'Active on-site construction directed by experienced managers, multi-stage quality checks, and clear milestone progress updates.',
  },
  {
    step: '04',
    title: 'Handover & Commissioning',
    description:
      'Rigorous final snagging, compliance certification, complete documentation packages, and seamless asset handover.',
  },
]
