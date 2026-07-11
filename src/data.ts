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
    period: 'Feb 2025 — Present',
    location: 'Sydney, Australia',
    points: [
      'Develop, test, deploy, and maintain the pub’s official website — both customer-facing features and staff operational systems.',
      'Improve frontend UX and backend functionality for online reservations, customer enquiries, and online ordering.',
      'Designed the integration between the online ordering platform and the bar ticket printing workflow.',
      'Troubleshoot production issues and collaborate with stakeholders to deliver practical software solutions.',
    ],
    accent: 'var(--sky)',
  },
  {
    company: 'Saitama Prefecture Government Schools',
    role: 'High School English Teacher',
    period: 'Apr 2018 — Aug 2024',
    location: 'Saitama, Japan',
    points: [
      'Taught English at public high schools, building strong communication, planning, and stakeholder-management skills that now power my engineering collaboration.',
    ],
    accent: 'var(--purple)',
  },
  {
    company: 'Walt Disney World — EPCOT',
    role: 'Restaurant Server',
    period: 'Jan 2016 — Feb 2018',
    location: 'Florida, USA',
    points: [
      'Delivered world-class hospitality in a fast-paced, multicultural environment at one of the busiest theme parks on earth.',
    ],
    accent: 'var(--pink)',
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
