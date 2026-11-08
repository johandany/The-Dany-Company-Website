import { CrmProject, TrustGrant } from '../types';

export const ASSETS = {
  danyCrest: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_12.34.39_PM_ffb36700.jpeg',
  riceTrustLogo: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_12.27.26_PM_ca5d49ad.jpeg',
  founderPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_12.07.31_PM_1b364a55.jpeg',
  johanNccPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_12.34.38_PM__2__38529cd2.jpeg',
  parliamentSpeechPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_22.18.44_c56de9b9.jpeg',
  parliamentDelegatesPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_22.18.44__1__a2f0aa28.jpeg',
};

export const INITIAL_CRM_PROJECTS: CrmProject[] = [
  {
    id: 'PRJ-1092',
    clientName: 'Vanguard Capital Partners',
    projectName: 'Sovereign Wealth Portfolio Management Engine',
    category: 'Custom CRM',
    leadArchitect: 'CSM Johan K',
    contractValue: 480000,
    status: 'Live in Production',
    progress: 100,
    uptimeSla: '99.99%',
    startDate: '2025-08-15',
    targetLaunch: '2026-02-10',
    techStack: ['PostgreSQL', 'Node.js', 'React', 'TimescaleDB', 'Redis'],
    description: 'Ultra-low latency institutional asset tracker with automated compliance audits and real-time ledger synchronization.'
  },
  {
    id: 'PRJ-1093',
    clientName: 'Aegis Aerospace Technologies',
    projectName: 'Telemetry Core & Ground Station Console',
    category: 'Enterprise Cloud',
    leadArchitect: 'Senior Systems Architect',
    contractValue: 620000,
    status: 'Security Audit',
    progress: 92,
    uptimeSla: '99.995%',
    startDate: '2025-11-01',
    targetLaunch: '2026-04-15',
    techStack: ['Rust', 'TypeScript', 'Kubernetes', 'gRPC', 'WebSockets'],
    description: 'Mission-critical distributed telemetry pipeline handling 250,000 real-time events per second with ISO 27001 validation.'
  },
  {
    id: 'PRJ-1094',
    clientName: 'Kallisto Private Wealth',
    projectName: 'Executive Mobile Concierge Suite',
    category: 'Mobile Suite',
    leadArchitect: 'CSM Johan K',
    contractValue: 290000,
    status: 'Active Sprint',
    progress: 68,
    uptimeSla: '99.95%',
    startDate: '2026-01-10',
    targetLaunch: '2026-06-30',
    techStack: ['React Native', 'Swift', 'GraphQL', 'Enclave Auth'],
    description: 'Biometrically secured executive client portal with encrypted messaging, capital calls, and bespoke asset reporting.'
  },
  {
    id: 'PRJ-1095',
    clientName: 'Helios Grid Infrastructure',
    projectName: 'Smart Grid Distribution & Billing CRM',
    category: 'Custom CRM',
    leadArchitect: 'Senior Systems Architect',
    contractValue: 540000,
    status: 'Active Sprint',
    progress: 54,
    uptimeSla: '99.98%',
    startDate: '2026-02-01',
    targetLaunch: '2026-08-20',
    techStack: ['Golang', 'Next.js', 'PostgreSQL', 'Apache Kafka'],
    description: 'Automated smart-meter telemetry ingestion, dynamic tariff calculations, and enterprise customer service ticketing.'
  },
  {
    id: 'PRJ-1096',
    clientName: 'Solon Luxury Hospitality',
    projectName: 'Global Reservation & Guest Identity Engine',
    category: 'Enterprise Cloud',
    leadArchitect: 'Lead Frontend Engineer',
    contractValue: 340000,
    status: 'In Architecture',
    progress: 25,
    uptimeSla: '99.99%',
    startDate: '2026-03-01',
    targetLaunch: '2026-10-15',
    techStack: ['TypeScript', 'Tailwind CSS', 'Vite', 'Cloudflare Workers'],
    description: 'Bespoke booking architecture with sub-100ms global response times and zero-friction international multi-currency processing.'
  },
  {
    id: 'PRJ-1097',
    clientName: 'Chronos Horology Group',
    projectName: 'Cinematic Brand Archive & Private Salons',
    category: 'Media & Brand',
    leadArchitect: 'Creative Director',
    contractValue: 180000,
    status: 'Live in Production',
    progress: 100,
    uptimeSla: '99.95%',
    startDate: '2025-09-12',
    targetLaunch: '2026-01-20',
    techStack: ['Three.js', 'WebGL', 'Tailwind CSS', 'CDN Streaming'],
    description: 'High-conviction digital flagship showcasing hand-finished timepieces with interactive 3D exploded calibers and private concierge.'
  }
];

export const INITIAL_TRUST_GRANTS: TrustGrant[] = [
  {
    id: 'GRT-2026-01',
    initiative: 'Melamanjampatty High-Tech Digital Literacy Center',
    category: 'Education',
    beneficiariesCount: 420,
    amountInr: 1250000,
    location: 'Melamanjampatty Village, Tamil Nadu',
    status: 'Verified Impact',
    auditId: 'RICE-AUD-8821',
    date: '2026-01-15'
  },
  {
    id: 'GRT-2026-02',
    initiative: 'Youth Climate & Afforestation Green Corridor Phase II',
    category: 'Environmental Stewardship',
    beneficiariesCount: 1200,
    amountInr: 850000,
    location: 'Cauvery Basin Ecological Belt',
    status: 'In Execution',
    auditId: 'RICE-AUD-8829',
    date: '2026-02-18'
  },
  {
    id: 'GRT-2026-03',
    initiative: 'Rural Merit Scholarship & Engineering Fellowship 2026',
    category: 'Education',
    beneficiariesCount: 65,
    amountInr: 1800000,
    location: 'Statewide University Admissions',
    status: 'Disbursed',
    auditId: 'RICE-AUD-8834',
    date: '2026-03-05'
  },
  {
    id: 'GRT-2026-04',
    initiative: 'Mobile Preventive Healthcare & Senior Care Unit',
    category: 'Community Health',
    beneficiariesCount: 780,
    amountInr: 650000,
    location: 'Melamanjampatty & Adjacent Hamlets',
    status: 'Verified Impact',
    auditId: 'RICE-AUD-8840',
    date: '2026-03-22'
  },
  {
    id: 'GRT-2026-05',
    initiative: 'Village Rainwater Catchment & Groundwater Rejuvenation',
    category: 'Rural Infrastructure',
    beneficiariesCount: 1500,
    amountInr: 920000,
    location: 'Melamanjampatty Commons',
    status: 'In Execution',
    auditId: 'RICE-AUD-8847',
    date: '2026-04-10'
  }
];

export const CORE_CAPABILITIES = [
  {
    number: '01',
    title: 'Custom Enterprise Software & Cloud Infrastructure',
    subtitle: 'Zero-compromise architectural discipline designed for extreme throughput and institutional reliability.',
    features: [
      'Resilient microservices & event-driven distributed systems',
      'Bank-grade data encryption, enclaves, and strict role-based access',
      'Multi-cloud orchestration with failover guarantees (99.98%+ SLA)',
      'Legacy system migration without operational downtime'
    ]
  },
  {
    number: '02',
    title: 'High-Performance Mobile & Web Platforms',
    subtitle: 'Neo-editorial elegance coupled with fluid, instantaneous client interactions.',
    features: [
      'Native iOS & Android cross-platform frameworks',
      'Sub-50ms reactive state management and offline synchronization',
      'Tailored typographic hierarchy matching bespoke brand dignity',
      'Accessibility AA compliance and cross-device precision'
    ]
  },
  {
    number: '03',
    title: 'Custom CRMs & Automated Operational Engines',
    subtitle: 'High-density business intelligence consoles eliminating operational friction for leadership teams.',
    features: [
      'Tailored pipeline tracking, contract lifecycles, and revenue analytics',
      'Automated SLA monitoring and proactive anomaly alerting',
      'Unified data pipelines replacing fragmented SaaS subscriptions',
      'Cryptographically verified audit trails for regulatory compliance'
    ]
  },
  {
    number: '04',
    title: 'Media Production & Sovereign Brand Identity',
    subtitle: 'Classical heraldic gravitas synthesized into modern high-definition visual storytelling.',
    features: [
      'Art-directed visual branding, bespoke crests, and identity manuals',
      'Cinematic video production and institutional documentary archives',
      'Editorial copywriting communicating commanding authority',
      'Interactive 3D showpieces and bespoke executive collateral'
    ]
  }
];

export const LEADERSHIP_PROFILES = [
  {
    name: 'Founder & Senior Managing Trustee',
    title: 'Chairman & Principal Patron',
    image: ASSETS.founderPhoto,
    badge: 'Institutional Heritage',
    bio: 'Guided by decades of dedicated institutional leadership and community trusteeship. His vision establishes the foundational bedrock of both The Dany Company and RICE Trust Melamanjampatty: that technological mastery and economic enterprise must directly serve human dignity and generational community elevation.',
    quotes: [
      'A company that builds without purpose creates mere machinery. True stature is measured by the enduring welfare we cultivate in our homeland.'
    ],
    roles: [
      'Founder, The Dany Company',
      'Managing Trustee, RICE Trust Melamanjampatty',
      'Patron of Rural Education & Community Advancement'
    ]
  },
  {
    name: 'CSM Johan K',
    title: 'Director of Technology & Operations · National Youth Assembly Leader',
    image: ASSETS.johanNccPhoto,
    badge: 'Cadre Leadership & Governance',
    bio: 'Company Sergeant Major (CSM) in the National Cadet Corps (NCC) and active parliamentary delegate. He combines rigorous military discipline with architectural software engineering and national environmental governance.',
    quotes: [
      'Discipline is not the limitation of freedom, but the precise architecture through which purposeful vision becomes reality.',
      'Climate stewardship and digital infrastructure are the dual frontiers where the youth must lead with uncompromising resolve.'
    ],
    roles: [
      'Cadet Senior Under Officer / CSM, National Cadet Corps (NCC)',
      'Shadow Minister of Environment, Forest & Climate Change (National Youth Assembly)',
      'Executive Director of Technology, The Dany Company'
    ],
    parliamentGallery: [
      {
        image: ASSETS.parliamentSpeechPhoto,
        caption: 'CSM Johan K addressing the National Youth Parliament assembly as Shadow Minister of Environment, Forest & Climate Change.'
      },
      {
        image: ASSETS.parliamentDelegatesPhoto,
        caption: 'Leading deliberations on national ecological corridors, youth skill mandates, and rural technology hubs with fellow parliamentary delegates.'
      }
    ]
  }
];
