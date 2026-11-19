import {
  siJavascript,
  siTypescript,
  siReact,
  siHtml5,
  siCss,
  siNodedotjs,
  siExpress,
  siPython,
  siFastapi,
  siOpenjdk,
  siKotlin,
  siAndroid,
  siSpringboot,
  siNextdotjs,
  siCloudflareworkers,
  siJunit5,
  siPostgresql,
  siMongodb,
  siMysql,
  siDocker,
  siLinux,
  siUbuntu,
  siVirtualbox,
  siWireshark,
  siReactrouter,
  siReacthookform,
  siZod,
  siVite,
  siFlask,
  siSpringsecurity,
  siHibernate,
  siMongoose,
  siH2database,
  siJsonwebtokens,
  siGradle,
  siVitest,
  siTestinglibrary,
  siJest,
  siAndroidstudio,
  siDiagramsdotnet,
  siUml,
  siJira,
  siGithubactions,
  siGnubash,
  siCurl,
  siPandas,
  siNumpy,
  siScikitlearn,
  siGooglegemini,
  siClaudecode,
  siCursor,
  siGit,
  siGithub,
  siNpm,
  siRabbitmq,
  type SimpleIcon,
} from 'simple-icons'

export interface Tech {
  name: string
  path?: string
  image?: string
  imageViewBox?: string
  color: string
}

// Icons whose brand color is near-black get a light fill on the dark theme
const tech = (icon: SimpleIcon, name?: string, colorOverride?: string): Tech => ({
  name: name ?? icon.title,
  path: icon.path,
  color: colorOverride ?? `#${icon.hex}`,
})

// Shared network symbol for technologies without a bundled brand icon.
const networkTech = (name: string): Tech => ({
  name,
  path: 'M9 2h6v6H9V2Zm2 6h2v3h7v5h3v6h-6v-6h1v-3h-5v3h2v6H9v-6h2v-3H6v3h1v6H1v-6h3v-5h7V8Z',
  color: '#2563eb',
})

// Neutral symbols distinguish practices from product logos.
const practice = (name: string, kind: 'code' | 'test' | 'security' | 'design' | 'data' = 'code'): Tech => ({
  name,
  path: {
    code: 'm8 5-7 7 7 7 1.5-1.5L4 12l5.5-5.5L8 5Zm8 0-1.5 1.5L20 12l-5.5 5.5L16 19l7-7-7-7ZM13 3l-4 18h2l4-18h-2Z',
    test: 'M12 1 2 5v7c0 5 6 9 10 11 4-2 10-6 10-11V5L12 1Zm-2 15-5-5 2-2 3 3 7-7 2 2-9 9Z',
    security: 'M12 1a6 6 0 0 0-6 6v3H3v13h18V10h-3V7a6 6 0 0 0-6-6Zm-4 9V7a4 4 0 0 1 8 0v3H8Zm3 5h2v4h-2v-4Z',
    design: 'M1 2h9v6H7v3h12V8h-3V2h7v6h-2v5h-8v3h4v6H7v-6h4v-3H5V8H1V2Z',
    data: 'M12 1C6 1 2 3 2 6v12c0 3 4 5 10 5s10-2 10-5V6c0-3-4-5-10-5ZM4 6c0-1 3-3 8-3s8 2 8 3-3 3-8 3-8-2-8-3Zm0 4c2 1 5 1 8 1s6 0 8-1v3c0 1-3 3-8 3s-8-2-8-3v-3Zm0 7c2 1 5 1 8 1s6 0 8-1v1c0 1-3 3-8 3s-8-2-8-3v-1Z',
  }[kind],
  color: { code: '#6366f1', test: '#15803d', security: '#b45309', design: '#7c3aed', data: '#2563eb' }[kind],
})

export const stack: { category: string; items: Tech[] }[] = [
  {
    category: 'Frontend',
    items: [
      tech(siJavascript),
      tech(siTypescript),
      tech(siReact),
      tech(siNextdotjs, 'Next.js', '#0a0a0c'),
      tech(siHtml5, 'HTML'),
      tech(siCss, 'CSS'),
      tech(siReactrouter),
      tech(siReacthookform),
      tech(siZod),
      tech(siVite),
    ],
  },
  {
    category: 'Backend',
    items: [
      tech(siNodedotjs, 'Node.js'),
      tech(siExpress, 'Express.js', '#0a0a0c'),
      tech(siPython),
      tech(siFastapi, 'FastAPI'),
      tech(siOpenjdk, 'Java', '#0a0a0c'),
      tech(siSpringboot, 'Spring Boot'),
      tech(siFlask, 'Flask', '#0a0a0c'),
      tech(siSpringsecurity),
      tech(siHibernate),
      practice('REST APIs'),
    ],
  },
  {
    category: 'Mobile',
    items: [tech(siKotlin), tech(siAndroid), tech(siAndroidstudio)],
  },
  {
    category: 'Networking',
    items: [
      {
        name: 'P4',
        image: '/icons/p4.svg',
        color: '#7c3aed',
      },
      { name: 'Mininet', image: '/icons/mininet.png', color: '#333333' },
      { name: 'Open vSwitch', image: '/icons/open-vswitch.png', color: '#5b9b3f' },
      { name: 'OpenFlow', image: '/icons/openflow.png', imageViewBox: '68 18 158 120', color: '#00a4c7' },
      tech(siWireshark),
      { name: 'GNS3', image: '/icons/gns3.png', color: '#0086c9' },
      networkTech('SDN'),
      { name: 'ONOS', image: '/icons/onos.png', color: '#007db7' },
      { name: 'iperf3', image: '/icons/iperf3.png', color: '#30333a' },
      { name: 'tcpdump', image: '/icons/tcpdump.png', color: '#ad0000' },
    ],
  },
  {
    category: 'Database',
    items: [
      tech(siPostgresql), tech(siMongodb), tech(siMysql),
      tech(siMongoose), tech(siH2database),
      { name: 'psycopg2', image: '/icons/psycopg.png', color: '#336791' },
    ],
  },
  {
    category: 'AI & Data',
    items: [
      tech(siPandas), tech(siNumpy), tech(siScikitlearn),
      { name: 'Matplotlib', image: '/icons/matplotlib.svg', color: '#11557c' },
      { name: 'Seaborn', image: '/icons/seaborn.svg', color: '#4c72b0' },
      tech(siGooglegemini, 'Gemini API'),
    ],
  },
  {
    category: 'Security',
    items: [
      tech(siJsonwebtokens, 'JWT'),
      { name: 'JADX', image: '/icons/jadx.png', color: '#8e1c68' },
      practice('Vulnerability Reporting', 'security'),
    ],
  },
  {
    category: 'Testing & Quality',
    items: [
      tech(siJunit5, 'JUnit'), tech(siVitest), tech(siTestinglibrary), tech(siJest),
      { name: 'Mockito', image: '/icons/mockito.png', color: '#83a342' },
    ],
  },
  {
    category: 'Design & Delivery',
    items: [
      tech(siUml), tech(siDiagramsdotnet), tech(siJira),
      practice('Data Structures & Algorithms', 'code'),
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Codex', image: '/icons/codex.png', color: '#6366f1' },
      tech(siClaudecode),
      tech(siCursor, 'Cursor', '#14120b'),
      tech(siGit),
      tech(siGithub, 'GitHub', '#181717'),
      tech(siDocker),
      tech(siCloudflareworkers, 'Cloudflare Workers'),
      tech(siRabbitmq),
      tech(siLinux),
      tech(siUbuntu),
      tech(siVirtualbox),
      tech(siNpm, 'npm'),
      tech(siGradle), tech(siGithubactions),
      tech(siGnubash, 'Bash'), tech(siCurl),
      { name: 'Docker Compose', image: '/icons/docker-compose.png', color: '#2496ed' },
    ],
  },
]

export interface Project {
  title: string
  year: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  preview?: boolean
  availabilityNote?: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Albion Place Hotel Website',
    year: '2026',
    description:
      'Production website for a Sydney pub that I develop and maintain — customer-facing pages plus enhancements to online reservations, enquiries, and ordering workflows.',
    tags: ['HTML', 'JavaScript', 'CSS', 'Production'],
    liveUrl: 'https://albionplacehotel.com.au',
    githubUrl: 'https://github.com/DKon109/Albion-Website',
    preview: true,
    accent: 'var(--sky)',
  },
  {
    title: 'Medical AI Enhanced Chatbot',
    year: '2025',
    description:
      'Full-stack healthcare application with secure REST APIs, JWT authentication, role-based access control, input validation, and structured error handling.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://medai-pro-instant-demo.onrender.com/',
    githubUrl: 'https://github.com/DKon109/AI-chatbot',
    preview: true,
    availabilityNote: 'Frontend opens instantly · free API may take up to 60s to wake',
    accent: 'var(--purple)',
  },
  {
    title: 'Tixora — Event Management & Seating',
    year: '2026',
    description:
      'A University of Sydney team project connecting event discovery, organiser publishing, simulated checkout, and group seating. My work focused on event ownership and lifecycle rules, venue validation and templates, and transaction and concurrency verification.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    liveUrl: 'https://tixora-live.onrender.com/',
    githubUrl: 'https://github.com/DKon109/Lab04_Team10',
    preview: true,
    availabilityNote: 'Free server may take 1–2 minutes to wake on first visit',
    accent: 'var(--pink)',
  },
  {
    title: 'OMIYAcappella',
    year: '2026',
    description:
      'A bilingual community site I built and run for a 37-member a cappella group in Saitama, solving a real reach problem — they could only be found by already following one X account. Zero browser dependencies, generated by a Python build and served from Cloudflare Workers.',
    tags: ['Cloudflare Workers', 'JavaScript', 'Python', 'SEO', 'Production'],
    liveUrl: 'https://omiyacappella.com',
    githubUrl: 'https://github.com/DKon109/omiyacappella-site',
    preview: true,
    accent: 'var(--lime)',
  },
]

export interface Job {
  company: string
  role: string
  period: string
  location: string
  points: string[]
  accent: string
}

export const experience: Job[] = [
  {
    company: 'Albion Place Hotel',
    role: 'Software Development Contributor',
    period: 'Jul 2025 — Present',
    location: 'Sydney, Australia',
    points: [
      'Rebuilt the venue’s official website from the ground up and deployed it to production, working from access granted by the external web vendor. Gathered requirements from managers and floor staff, translated them into UI, UX, and workflow improvements, and shipped the result as the live site.',
      'Ship frontend and backend enhancements for online reservations, customer enquiry forms, and online ordering workflows.',
      'Designed and maintain the integration between online orders and the bar’s ticket-printing system to streamline operations.',
      'Diagnose production issues and work with stakeholders to translate business requirements into reliable software.',
    ],
    accent: 'var(--sky)',
  },
  {
    company: 'Albion Place Hotel & Burwood Hotel',
    role: 'Bartender',
    period: 'Feb 2025 — Present',
    location: 'Sydney, Australia',
    points: [
      'Deliver fast, friendly service across two busy Sydney venues while balancing hospitality shifts with software development.',
      'Work the floor that my software supports — gaining first-hand insight into how staff and customers use the systems I build.',
      'Bring real operational context to every feature, bridging the gap between the front line and the product.',
    ],
    accent: 'var(--purple)',
  },
  {
    company: 'Saitama Prefecture Government Schools',
    role: 'High School English Teacher',
    period: 'Apr 2018 — Aug 2024',
    location: 'Saitama, Japan',
    points: [
      'Planned and delivered English lessons for high-school classes at public schools across Saitama Prefecture.',
      'Built the communication, presentation, and stakeholder-management skills I now bring to engineering teams.',
    ],
    accent: 'var(--pink)',
  },
  {
    company: 'Walt Disney World — EPCOT',
    role: 'Restaurant Server',
    period: 'Jan 2016 — Feb 2018',
    location: 'Florida, USA',
    points: [
      'Delivered world-class hospitality in a fast-paced, multicultural environment at one of the busiest theme parks on earth.',
    ],
    accent: 'var(--lime)',
  },
  {
    company: 'Yamanashi Prefecture Government School',
    role: 'Junior High School Teacher',
    period: 'Apr 2015 — Mar 2016',
    location: 'Yamanashi, Japan',
    points: [
      'Taught English at a public junior high school, laying the foundation for my mentoring, communication, and classroom-management skills.',
    ],
    accent: 'var(--sky)',
  },
]

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  logo: string
  current: boolean
}

export const education: Education[] = [
  {
    school: 'The University of Sydney',
    degree: 'Master of Computer Science',
    period: '2025 — Present',
    location: 'Sydney, Australia',
    logo: '/sydney.png',
    current: true,
  },
  {
    school: 'Tsuru University',
    degree: 'Bachelor of Arts in School Education',
    period: '2011 — 2015',
    location: 'Yamanashi, Japan',
    logo: '/tsuru.png',
    current: false,
  },
]

export const links = {
  github: 'https://github.com/DKon109',
  linkedin: 'https://www.linkedin.com/in/ryoji-kondo-05654233a',
  email: 'ryoji3348@icloud.com',
}
