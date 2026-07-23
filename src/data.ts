import {
  siJavascript,
  siTypescript,
  siReact,
  siHtml5,
  siCss,
  siNodedotjs,
  siExpress,
  siPython,
  siOpenjdk,
  siPostgresql,
  siMongodb,
  siMysql,
  siDocker,
  siLinux,
  siGit,
  siGithub,
  siNpm,
  siRabbitmq,
  type SimpleIcon,
} from 'simple-icons'

export interface Tech {
  name: string
  path: string
  color: string
}

// Icons whose brand color is near-black get a light fill on the dark theme
const tech = (icon: SimpleIcon, name?: string, colorOverride?: string): Tech => ({
  name: name ?? icon.title,
  path: icon.path,
  color: colorOverride ?? `#${icon.hex}`,
})

export const stack: { category: string; items: Tech[] }[] = [
  {
    category: 'Frontend',
    items: [
      tech(siJavascript),
      tech(siTypescript),
      tech(siReact),
      tech(siHtml5, 'HTML'),
      tech(siCss, 'CSS'),
    ],
  },
  {
    category: 'Backend',
    items: [
      tech(siNodedotjs, 'Node.js'),
      tech(siExpress, 'Express.js', '#0a0a0c'),
      tech(siPython),
      tech(siOpenjdk, 'Java', '#0a0a0c'),
    ],
  },
  {
    category: 'Database',
    items: [tech(siPostgresql), tech(siMongodb), tech(siMysql)],
  },
  {
    category: 'Tools',
    items: [
      tech(siGit),
      tech(siGithub, 'GitHub', '#181717'),
      tech(siDocker),
      tech(siLinux),
      tech(siNpm, 'npm'),
      tech(siRabbitmq),
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
    liveUrl: 'https://cheery-raindrop-388ad0.netlify.app',
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
    title: 'Haven — E-Commerce Web App',
    year: '2025',
    description:
      'An enterprise-scale e-commerce web app with a product landing page — searchable catalog, demo checkout, and login with order history — wired to a real distributed backend with multi-warehouse stock, idempotent payments, and self-healing services.',
    tags: ['Microservices', 'SAGA', 'RabbitMQ', 'Docker'],
    liveUrl: 'https://dkon109.github.io/Enterprise-Scale-Online-Store-System/',
    githubUrl: 'https://github.com/DKon109/Enterprise-Scale-Online-Store-System',
    preview: true,
    availabilityNote: 'Storefront opens instantly · free ordering API may take up to 60s to wake',
    accent: 'var(--pink)',
  },
  {
    title: 'MERN Online Quiz Platform',
    year: '2026',
    description:
      'Full-stack quiz application with REST APIs, JWT auth, role-based access control, CRUD administration, and responsive UIs — built in a collaborative team.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://mern-online-quiz-platform-1.onrender.com',
    accent: 'var(--lime)',
  },
  {
    title: 'Software Quality Improvement',
    year: '2026',
    description:
      'Enhanced an existing Java game codebase through refactoring, unit and integration testing, and structured QA practices to improve reliability and maintainability.',
    tags: ['Java', 'Unit Testing', 'Integration Testing', 'Refactoring'],
    githubUrl: 'https://github.com/DKon109/SQE-ShatteredPixelDungeon',
    accent: 'var(--sky)',
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
      'Develop, test, deploy, and maintain the venue’s official website — both customer-facing features and internal staff systems.',
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
