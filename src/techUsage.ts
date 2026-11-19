export interface TechLink {
  label: string
  url: string
  kind: 'project' | 'tool'
  isPrivate?: boolean
}

export interface TechUsage {
  context: string
  description: string
  links: TechLink[]
  note?: string
}

const project = (label: string, repo: string, path = ''): TechLink => ({
  label, url: `https://github.com/DKon109/${repo}${path}`, kind: 'project',
})
const tool = (label: string, repo: string): TechLink => ({
  label, url: `https://github.com/${repo}`, kind: 'tool',
})
const quiz = project('MERN Quiz', 'MERN-Online-Quiz-Platform')
const medai = project('MedAI Pro', 'AI-chatbot')
const tixora = project('Tixora', 'Tixora')
const haven = project('Haven', 'Enterprise-Scale-Online-Store-System')
const mimikopi = project('Mimikopi', 'mimikopi')
const albion = project('Albion Place Hotel', 'Albion-Website')
const omiya = project('OMIYAcappella', 'omiyacappella-site')
const portfolio = project('This portfolio', 'dkon109.github.io')
const sqe = project('Game quality coursework', 'SQE-ShatteredPixelDungeon')
const reversi = project('Python Reversi', 'COMP9001', '/blob/main/reversi_ai.py')
const scam: TechLink = { ...project('Scam-call Detection', 'scam-call-detection'), isPrivate: true }
const allProjects = [portfolio, albion, omiya, tixora, quiz, haven, medai, mimikopi, sqe, reversi, scam]
const ciProjects = [portfolio, albion, omiya, tixora, quiz, haven, medai, sqe]
const npmProjects = [portfolio, albion, omiya, tixora, quiz, medai, mimikopi]
const training = project('Training experiments', 'AI-chatbot', '/blob/main/medical-ai-enhanced/backend/train_ai_agents.py')
const mininet = tool('Mininet', 'mininet/mininet')
const courseworkNote = 'The assignment implementation is not in a public repository. The link below is the tool’s official source.'

// Each visible technology has its own example. Project links and upstream tool
// links are labelled separately so coursework is not misrepresented as public code.
export const techUsage: Record<string, TechUsage> = {
  JavaScript: {
    context: 'Albion Place Hotel · Website',
    description: 'Built the original venue website prototype with responsive navigation, photo carousels and mobile menu interactions, before implementing the redesign in WordPress.',
    links: [albion],
  },
  TypeScript: {
    context: 'MedAI Pro & Mimikopi',
    description: 'Used typed React components for the healthcare portal and shared score/job models for Mimikopi’s editable music-transcription workflow.',
    links: [medai, mimikopi],
  },
  React: {
    context: 'MERN Quiz · Authentication & UI',
    description: 'Built the login and registration screens, authentication context, route guards and shared navigation for a timed online quiz platform.',
    links: [quiz, medai],
  },
  'Next.js': {
    context: 'Mimikopi · Research prototype',
    description: 'Built the web workflow for uploading recordings, following transcription jobs and editing draft notes before exporting MIDI and MusicXML.',
    links: [mimikopi],
  },
  HTML: {
    context: 'OMIYAcappella · Community website',
    description: 'Created bilingual pages for the group’s activities, recordings and membership enquiries, with semantic HTML and shared page templates.',
    links: [omiya, albion],
  },
  CSS: {
    context: 'Albion & this portfolio',
    description: 'Built responsive layouts, mobile navigation and carousels for Albion, plus the gradients, cards and interactive skill chips on this portfolio.',
    links: [albion, portfolio],
  },
  'React Router': {
    context: 'MERN Quiz · Protected navigation',
    description: 'Implemented player, admin and guest-only route guards, including session hydration so refreshing a protected page does not briefly show the wrong screen.',
    links: [quiz],
  },
  'React Hook Form': {
    context: 'MERN Quiz · Account forms',
    description: 'Built login and registration forms with controlled validation, clear field errors and submission states, integrated with the authentication API.',
    links: [quiz],
  },
  Zod: {
    context: 'MERN Quiz · Validation',
    description: 'Used schemas to validate authentication form data and keep the client’s inputs aligned with the Express API’s validation rules.',
    links: [quiz],
  },
  Vite: {
    context: 'This portfolio & MERN Quiz',
    description: 'Configured the React development and production-build workflow used to develop this portfolio and ship the quiz frontend.',
    links: [portfolio, quiz],
  },
  'Node.js': {
    context: 'MERN Quiz · Backend foundation',
    description: 'Built the authentication API, token verification and shared backend response handling for the quiz platform.',
    links: [quiz, medai],
  },
  'Express.js': {
    context: 'MERN Quiz · Authentication API',
    description: 'Implemented register, login and current-user endpoints, along with authentication and admin middleware used by protected application routes.',
    links: [quiz],
  },
  Python: {
    context: 'Mimikopi · Audio processing',
    description: 'Built an experimental pipeline that ingests audio, combines pitch and timing analysis, and exports editable MIDI and MusicXML drafts.',
    links: [mimikopi],
  },
  FastAPI: {
    context: 'Mimikopi · Transcription API',
    description: 'Exposed audio upload, transcription jobs, cancellation and score exports through a Python API connected to the Next.js interface.',
    links: [mimikopi],
  },
  Java: {
    context: 'Tixora · Event lifecycle',
    description: 'Implemented event ownership checks, publication rules and venue-template services, and verified persistence and checkout/closure transaction behaviour.',
    links: [tixora, sqe],
  },
  'Spring Boot': {
    context: 'Tixora · Backend services',
    description: 'Built event and venue services behind the organiser workflow, with server-side validation and REST endpoints connected to the React application.',
    links: [tixora, haven],
  },
  Flask: {
    context: 'COMP9120 · Car-sales application',
    description: 'Connected user login and validated car-sale entry to PostgreSQL in a coursework Flask application.',
    links: [tool('Flask', 'pallets/flask')], note: courseworkNote,
  },
  'Spring Security': {
    context: 'Haven · Secured store API',
    description: 'Used the Spring Security authentication layer to protect the online-store API and support JWT-authenticated customer operations.',
    links: [haven],
  },
  Hibernate: {
    context: 'Haven · Database persistence',
    description: 'Used JPA/Hibernate entities and repositories to persist store, inventory and order data instead of embedding database access in the UI.',
    links: [haven, tixora],
  },
  'REST APIs': {
    context: 'Tixora & MERN Quiz',
    description: 'Built authenticated endpoints for account and event workflows, including input validation, ownership rules and predictable error responses.',
    links: [tixora, quiz],
  },
  Kotlin: {
    context: 'Android capstone · Team project',
    description: 'Worked on the Android side of a scam-call detection prototype, exploring on-device signal capture and rule-based checks without rooting the phone.',
    links: [tool('Kotlin', 'JetBrains/kotlin')],
    note: 'The capstone source is private. The link below is the language’s official repository.',
  },
  Android: {
    context: 'Android development & security coursework',
    description: 'Worked with Android app flows, emulator testing and APK inspection, alongside a team prototype for scam-call detection.',
    links: [tool('JADX analysis tool', 'skylot/jadx')],
    note: 'The capstone and APK assignment implementations are not public. This link opens the analysis tool’s source.',
  },
  'Android Studio': {
    context: 'INFO5995 · Emulator testing',
    description: 'Used Android Studio’s emulator and debugging workflow to reproduce app behaviour and collect evidence for Android security assignments.',
    links: [tool('JADX analysis tool', 'skylot/jadx')], note: courseworkNote,
  },
  P4: {
    context: 'ELEC5517 · Smart-office network',
    description: 'Implemented a custom service-class header, match-action forwarding rules, per-class counters and guest access restrictions in a programmable data plane.',
    links: [tool('P4 tutorials', 'p4lang/tutorials')], note: courseworkNote,
  },
  Mininet: {
    context: 'ELEC5517 · Network emulation',
    description: 'Built repeatable tree and spine-leaf topologies, configured links and checked connectivity, service isolation and link-failure behaviour.',
    links: [mininet], note: courseworkNote,
  },
  'Open vSwitch': {
    context: 'ELEC5517 · Software switching',
    description: 'Installed and inspected flow rules for ARP and UDP traffic, then checked packet counters to verify forwarding between emulated hosts.',
    links: [tool('Open vSwitch', 'openvswitch/ovs')], note: courseworkNote,
  },
  OpenFlow: {
    context: 'ELEC5517 · Flow control',
    description: 'Used match/action rules to forward selected traffic, isolate hosts and inspect the control-plane and forwarding behaviour of the lab network.',
    links: [tool('Open vSwitch implementation', 'openvswitch/ovs')], note: courseworkNote,
  },
  Wireshark: {
    context: 'ELEC5517 · Packet inspection',
    description: 'Captured lab traffic to inspect OpenFlow control messages and host communication, connecting packet traces to the configured network behaviour.',
    links: [tool('Wireshark', 'wireshark/wireshark')], note: courseworkNote,
  },
  GNS3: {
    context: 'Networking study · Virtual labs',
    description: 'Used GNS3 to build and explore virtual network topologies as part of my networking study and lab practice.',
    links: [tool('GNS3', 'GNS3/gns3-gui')], note: courseworkNote,
  },
  SDN: {
    context: 'ELEC5517 · Smart-office network',
    description: 'Designed a software-defined lab network with guest-service isolation, service-aware path selection and measured responses to a failed link.',
    links: [tool('ONOS controller', 'opennetworkinglab/onos'), mininet], note: courseworkNote,
  },
  ONOS: {
    context: 'ELEC5517 · Controller policies',
    description: 'Used the ONOS REST API to install guest-isolation flows and host-to-host intents that send video and business traffic along different spine paths.',
    links: [tool('ONOS', 'opennetworkinglab/onos')], note: courseworkNote,
  },
  iperf3: {
    context: 'ELEC5517 · Failure evaluation',
    description: 'Generated TCP and UDP traffic to measure throughput and loss while taking a network link down and bringing it back up.',
    links: [tool('iperf3', 'esnet/iperf')], note: courseworkNote,
  },
  tcpdump: {
    context: 'ELEC5517 · P4 verification',
    description: 'Inspected packets on the core link to verify that the P4 pipeline inserted the custom EtherType and service-class header.',
    links: [tool('tcpdump', 'the-tcpdump-group/tcpdump')], note: courseworkNote,
  },
  PostgreSQL: {
    context: 'MedAI Pro · Application data',
    description: 'Stored users, patient records and clinician-review state using parameterised SQL, repeatable migrations and demo seed data.',
    links: [medai, haven],
  },
  MongoDB: {
    context: 'MERN Quiz · Account data',
    description: 'Built the user model and authentication data layer, including role fields and a question time-limit schema used by the quiz team.',
    links: [quiz],
  },
  MySQL: {
    context: 'Tixora · University stack',
    description: 'Worked with MySQL-backed event and venue persistence and verified that saved maps and bookings survive transaction boundaries. The public demo uses compatible TiDB hosting.',
    links: [tixora],
  },
  Mongoose: {
    context: 'MERN Quiz · Schema design',
    description: 'Defined the User model and added a bounded question timeLimit field so timed questions could be shared consistently across backend and frontend work.',
    links: [quiz],
  },
  'H2 Database': {
    context: 'Haven · Portfolio deployment',
    description: 'Used the lightweight in-memory database for the hosted store demo, keeping the full PostgreSQL/RabbitMQ stack available separately through Docker.',
    links: [haven],
  },
  psycopg2: {
    context: 'COMP9120 · PostgreSQL integration',
    description: 'Implemented login queries and validated car-sale inserts in Python, then integrated and tested them with the team’s SQL-backed application.',
    links: [tool('Psycopg 2', 'psycopg/psycopg2')], note: courseworkNote,
  },
  pandas: {
    context: 'MedAI Pro · Training experiments',
    description: 'Used DataFrames to load symptom datasets, prepare features and organise results in the project’s experimental training scripts.',
    links: [training], note: 'These are research experiments, not a clinically validated diagnostic model.',
  },
  NumPy: {
    context: 'Mimikopi · Audio analysis',
    description: 'Worked with numerical audio and note data in the transcription pipeline, including pitch evidence and quantitative evaluation.',
    links: [mimikopi, training],
  },
  'scikit-learn': {
    context: 'MedAI Pro · Training experiments',
    description: 'Explored random-forest and gradient-boosting classifiers, train/test splits and classification metrics in the project’s prototype training workflow.',
    links: [training], note: 'These experiments are separate from the deployed clinician-review workflow.',
  },
  Matplotlib: {
    context: 'Network evaluation & model experiments',
    description: 'Plotted throughput and packet-loss measurements from the SDN link-failure experiment, and model-evaluation results in MedAI’s training scripts.',
    links: [training],
  },
  Seaborn: {
    context: 'MedAI Pro · Evaluation plots',
    description: 'Used statistical visualisation in the experimental training script to present model results, including confusion-matrix plots.',
    links: [training],
  },
  'Gemini API': {
    context: 'MedAI Pro · Structured intake',
    description: 'Integrated structured extraction of symptoms and missing information, with deterministic safety checks and mandatory clinician review around the AI draft.',
    links: [medai],
  },
  JWT: {
    context: 'MERN Quiz · Authentication',
    description: 'Implemented token issuing and verification, protected API middleware and client session hydration for player/admin access.',
    links: [quiz, medai],
  },
  JADX: {
    context: 'INFO5995 · Android security',
    description: 'Inspected decompiled Java and Android manifests to trace insecure token generation, cleartext traffic and certificate-validation weaknesses in assignment APKs.',
    links: [tool('JADX', 'skylot/jadx')], note: courseworkNote,
  },
  'Vulnerability Reporting': {
    context: 'INFO5995 · Security assignments',
    description: 'Helped document Android findings with code evidence, reproduction steps, impact analysis and mitigations in team security reports.',
    links: [tool('JADX analysis tool', 'skylot/jadx')], note: courseworkNote,
  },
  JUnit: {
    context: 'Shattered Pixel Dungeon · Coursework fork',
    description: 'Added 12 screenshot-filename tests covering format, collisions, determinism, locale independence and null arguments for my screenshot feature.',
    links: [sqe, tixora],
  },
  Vitest: {
    context: 'Tixora & MedAI Pro · Frontend checks',
    description: 'Used the projects’ frontend test workflows to check authentication, routing, forms and user journeys as part of integration and regression verification.',
    links: [tixora, medai],
  },
  'Testing Library': {
    context: 'React application tests',
    description: 'Used rendered-component tests and simulated user interactions to check the behaviour of healthcare and event-booking screens.',
    links: [medai, tixora],
  },
  Jest: {
    context: 'MedAI Pro · Earlier test setup',
    description: 'Worked with the project’s earlier Jest-based React test setup. The current frontend has since migrated to Vitest and retains Testing Library assertions.',
    links: [project('MedAI Pro history', 'AI-chatbot', '/commits/main/')],
  },
  Mockito: {
    context: 'Haven · Backend tests',
    description: 'Used the Java test stack’s mock dependencies to exercise service behaviour without relying on every external service being available.',
    links: [haven],
  },
  UML: {
    context: 'Tixora & healthcare coursework',
    description: 'Modelled actors, entities and service interactions to explain application structure, along with activity and state diagrams for healthcare workflows.',
    links: [tixora, medai],
  },
  'diagrams.net': {
    context: 'Database & application modelling',
    description: 'Drew the car-sales ER model for COMP9120 and healthcare activity/state diagrams for ELEC5620 to communicate data relationships and user flows.',
    links: [medai, tool('diagrams.net', 'jgraph/drawio')],
    note: 'The linked healthcare app is related implementation work; the original assignment diagrams are not published here.',
  },
  Jira: {
    context: 'Tixora · Team delivery',
    description: 'Used sprint issues, acceptance criteria and implementation evidence to coordinate event/venue backend work and team handoffs.',
    links: [tixora],
  },
  'Data Structures & Algorithms': {
    context: 'COMP9001 · Python Reversi',
    description: 'Implemented an 8×8 board game with legal-move detection, directional disc flipping and turn handling, alongside written algorithm-design coursework.',
    links: [reversi],
  },
  Codex: {
    context: 'Websites, full-stack apps & coursework',
    description: 'Used Codex for implementation, debugging, review and verification across this portfolio, Albion’s website, healthcare and store applications, Tixora, Mimikopi, game-quality coursework and the Android capstone.',
    links: [portfolio, albion, medai, haven, tixora, mimikopi, sqe, scam],
  },
  'Claude Code': {
    context: 'Web projects, prototypes & team coursework',
    description: 'Used Claude Code to iterate on Mimikopi’s audio prototype, build and refine website interfaces, work through Java coursework and improve project documentation, tests and development workflows. Generated changes were reviewed alongside my own implementation.',
    links: [mimikopi, portfolio, albion, omiya, quiz, haven, sqe, scam],
  },
  Cursor: {
    context: 'Haven & Mimikopi · Editor workflow',
    description: 'Used Cursor to navigate and edit Haven’s Spring Boot services, data models and tests, and to work through the audio-transcription prototype in Mimikopi.',
    links: [haven, mimikopi],
  },
  Git: {
    context: 'All projects · Version control',
    description: 'Used Git to track code and content across my websites, applications, prototypes and coursework. Team projects used feature branches and reviewed merges; independent projects kept incremental commits for changes and fixes.',
    links: allProjects,
  },
  GitHub: {
    context: 'Projects · Collaboration & delivery',
    description: 'Hosted and maintained these project repositories, collaborated through commits and pull requests, and documented setup, contributions and verification. Public source is linked directly; the private capstone requires repository access.',
    links: allProjects,
  },
  Docker: {
    context: 'Haven, Tixora & MedAI Pro',
    description: 'Used container builds for the store, event-management and healthcare applications. Haven and Tixora also provide local application/database stacks; MedAI has a production Docker build checked in CI.',
    links: [haven, tixora, medai],
  },
  'Cloudflare Workers': {
    context: 'OMIYAcappella · Production website',
    description: 'Deployed the bilingual community website on Workers with static assets, generated pages and a custom domain. The contact form submits from the browser.',
    links: [omiya],
  },
  RabbitMQ: {
    context: 'Haven · Distributed store',
    description: 'Worked with durable queues and asynchronous events for payment, delivery and notifications in the full distributed stack, including retry and dead-letter handling.',
    links: [haven], note: 'The lightweight public demo disables RabbitMQ; the full Docker stack includes it.',
  },
  Linux: {
    context: 'SDN labs, application builds & CI',
    description: 'Used Linux CLI tools for Mininet flow-table and connectivity checks, and Linux-based CI runners to validate websites, build applications and run Java and JavaScript tests across the linked projects.',
    links: [...ciProjects, mininet],
    note: 'Project links show Linux-based build and test workflows. The SDN assignment implementation is not public.',
  },
  Ubuntu: {
    context: 'Ubuntu VM & GitHub Actions runners',
    description: 'Set up Ubuntu for Mininet and Open vSwitch labs, and used Ubuntu-based GitHub Actions jobs for HTML validation, React builds, Java tests, Docker builds and the community website’s scheduled updates.',
    links: [...ciProjects, mininet],
    note: 'The project repositories contain the Ubuntu CI workflows; the original network-lab implementation is not public.',
  },
  VirtualBox: {
    context: 'ELEC5517 · Virtual lab setup',
    description: 'Created an Ubuntu virtual machine on macOS to run the networking labs and keep the Linux tooling separate from the host system.',
    links: [tool('VirtualBox', 'VirtualBox/virtualbox')], note: courseworkNote,
  },
  npm: {
    context: 'Web applications, sites & automation',
    description: 'Used npm scripts and dependencies for React frontends, Express services and Mimikopi’s workspace. Also used npx for Albion’s HTML checks and npm-installed Playwright for OMIYAcappella’s scheduled content updates.',
    links: npmProjects,
  },
  Gradle: {
    context: 'Java coursework & Android capstone',
    description: 'Used Gradle to build and test the Shattered Pixel Dungeon coursework fork and Haven’s Spring Boot application, and to build the Android module of the scam-call detection capstone.',
    links: [sqe, haven, scam],
  },
  'GitHub Actions': {
    context: 'Builds, regression checks & publishing',
    description: 'Used workflows for portfolio publishing, quiz and healthcare tests, Java coursework checks, Tixora verification, Haven builds and Pages delivery, Albion HTML validation, and OMIYAcappella’s scheduled X-post updates.',
    links: ciProjects,
  },
  Bash: {
    context: 'Local setup scripts & Linux CI steps',
    description: 'Used Bash scripts to prepare MedAI’s database and start Mimikopi’s API, plus shell steps in Linux CI workflows to run validation, tests, builds and scheduled site updates.',
    links: [medai, mimikopi, ...ciProjects.filter((link) => link !== medai)],
  },
  curl: {
    context: 'Healthcare, event & store APIs',
    description: 'Used HTTP requests to check MedAI service health and exercise authenticated backend operations, including Tixora’s registration-closure/allocation endpoints and Spring Boot store workflows.',
    links: [medai, tixora, haven],
  },
  'Docker Compose': {
    context: 'Haven & Tixora · Local stacks',
    description: 'Ran the application and supporting databases together, with the full Haven environment also wiring in RabbitMQ for asynchronous messaging.',
    links: [haven, tixora],
  },
}
