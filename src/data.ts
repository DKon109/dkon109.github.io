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
      tech(siExpress, 'Express.js', '#f5f5f7'),
      tech(siPython),
      tech(siOpenjdk, 'Java', '#f5f5f7'),
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
      tech(siGithub, 'GitHub', '#f5f5f7'),
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
  link: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Medical AI Enhanced Chatbot',
    year: '2025',
    description:
      'Full-stack healthcare application with secure REST APIs, JWT authentication, role-based access control, input validation, and structured error handling.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/DKon109/AI-chatbot',
    accent: 'var(--sky)',
  },
  {
    title: 'Enterprise-Scale Online Store',
    year: '2025',
    description:
      'Distributed e-commerce platform integrating Store, Bank, Delivery, and Email services with resilient messaging patterns for reliability and scalability.',
    tags: ['RabbitMQ', 'SAGA', 'Docker', 'Microservices'],
    link: 'https://github.com/DKon109/Enterprise-Scale-Online-Store-System',
    accent: 'var(--purple)',
  },
  {
    title: 'MERN Online Quiz Platform',
    year: '2026',
    description:
      'Full-stack quiz application with REST APIs, JWT auth, role-based access control, CRUD administration, and responsive UIs — built in a collaborative team.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/DKon109/MERN-Online-Quiz-Platform',
    accent: 'var(--pink)',
  },
  {
    title: 'Software Quality Improvement',
    year: '2026',
    description:
      'Enhanced an existing Java game codebase through refactoring, unit and integration testing, and structured QA practices to improve reliability and maintainability.',
    tags: ['Java', 'Unit Testing', 'Integration Testing', 'Refactoring'],
    link: 'https://github.com/DKon109/SQE-ShatteredPixelDungeon',
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
  badge: string
  badgeColor: string
  badgeBg: string
}

export const education: Education[] = [
  {
    school: 'The University of Sydney',
    degree: 'Master of Computer Science',
    period: '2025 — Present',
    location: 'Sydney, Australia',
    logo: '/sydney.png',
    badge: 'Current',
    badgeColor: 'var(--sky)',
    badgeBg: 'rgba(43, 182, 246, 0.12)',
  },
  {
    school: 'Tsuru University',
    degree: 'Bachelor of Arts in School Education',
    period: '2011 — 2015',
    location: 'Yamanashi, Japan',
    logo: '/tsuru.png',
    badge: 'Completed',
    badgeColor: 'var(--purple)',
    badgeBg: 'rgba(124, 92, 255, 0.12)',
  },
]

export const links = {
  github: 'https://github.com/DKon109',
  linkedin: 'https://www.linkedin.com/in/ryoji-kondo-05654233a',
  email: 'ryoji3348@icloud.com',
}

// Free Web3Forms access key tied to ryoji3348@icloud.com.
// Get one at https://web3forms.com (enter the email, they send the key),
// then paste it here. Until it's a real key, the contact form falls back to
// opening the visitor's email client addressed to the email above.
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'
