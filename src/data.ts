// ─── Shared Data ─────────────────────────────────────────────────────────────
// All copy here is derived from PORTFOLIO_CONTENT.md, which in turn comes from
// Byron's CVs. Where a CV fact is still unknown, the field is LEFT EMPTY and the
// templates skip it, rather than guessing. Search for "TOFILL" for the full list.

// ─── Profile ─────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Byron Matsikembare',
  /** Used once on /about and in structured data. */
  fullName: 'Byron Tashinga Matsikembare',
  shortName: 'Byron',
  initials: 'BM',
  title: 'Python Full-Stack Developer',
  eyebrow: 'Python full-stack developer · HIT Computer Science',
  location: 'Harare, Zimbabwe',
  email: 'matsikembareb@gmail.com',
  /** Byron, 11 Nov 2026: show it (contact page, footer, CV, schema). International format so it
   *  dials from abroad; set showPhone to false to hide it everywhere. */
  phone: '+263 78 081 2222',
  showPhone: true,
  bio: "I'm an IT systems developer at Die Deutsche Schule Harare, where I built and run DDSops360, the school's operations platform. I work in Flask, Django, FastAPI and React, and I'm studying Computer Science at HIT.",
  /** Cropped from the LinkedIn profile photo, 415x533, EXIF stripped. */
  portrait: '/images/byron-matsikembare-python-developer.webp',
  portraitAlt: 'Byron Matsikembare, Python full-stack developer in Harare',
  openTo: 'graduate developer roles from 2027, internships, freelance projects and business partnerships',
  social: {
    github: 'https://github.com/Matsikembareb',
    linkedin: 'https://www.linkedin.com/in/byronmatsikembare',
    email: 'mailto:matsikembareb@gmail.com',
  },
};

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  /** H1 on the case-study page. */
  h1: string;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Tile colour on the homepage (Figma palette; same in both themes). */
  accent: string;
  /** Use dark text on this tile (light tile colours fail WCAG AA with white). */
  tileDarkText?: boolean;
  /** Shorter title for homepage tiles, when the full name is too long. */
  tileTitle?: string;
  /** One or two words under the tile title in the homepage strip. */
  tileKind?: string;
  /** Small meta line under a selected-work tile. */
  tileMeta?: string;
  status: string;
  /** Human-readable date range, omitted when empty. */
  period: string;
  featured: boolean;
  /** false = short card on /projects only, no page of its own. */
  caseStudy: boolean;
  role: string;
  stack: string[];
  /** TOFILL: live URL or repo. Nothing renders while these are empty. */
  url?: string;
  repo?: string;
  /** Button text for `repo`, when it isn't Byron's own ("View the team's code"). */
  repoLabel?: string;
  /** Screenshot (1200×750 WebP, plus a -600 copy) shown on tiles and as the case-study hero. */
  image?: string;
  imageAlt?: string;
  /** Square logo shown on the case-study page and tile. */
  logo?: string;
  /** More screenshots, shown under the write-up. */
  gallery?: { src: string; alt: string; caption: string }[];
  /** Illustrated before/after panel (art in src/assets/<slug>/without.svg and with.svg). */
  beforeAfter?: { without: string[]; with: string[] };
  /** Show the "support this project" band (needs DONATE_URL in src/config.ts). */
  donate?: boolean;
  /** Show the "star it / contributions welcome" band (needs `repo`). */
  contribute?: boolean;
  /** One line for the printed CV (src/pages/cv.astro). */
  cvLine?: string;
  blocks: { h: string; body: string }[];
  relatedPost?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'flask-setup',
    title: 'Flask-Setup',
    h1: 'Flask-Setup: a reusable Flask starter, open sourced',
    tagline: 'Skip the boilerplate, start with the structure',
    summary:
      'An open-source Flask app-factory starter: blueprints, config, migrations, health checks, logging, tests and Docker, wired up and ready.',
    metaTitle: 'Flask-Setup: Open-Source Flask Starter – Case Study',
    metaDescription:
      'My open-source Flask app-factory starter: blueprints, config, migrations, health checks, logging, tests and Docker, with no circular imports.',
    accent: '#0f766e',
    tileKind: 'Open-source starter',
    tileMeta: 'Flask · Docker · Open source',
    status: 'Open source',
    period: 'Jun – Sept 2026',
    featured: true,
    caseStudy: true,
    role: 'Sole author and maintainer',
    stack: ['Python', 'Flask', 'Docker'],
    repo: 'https://github.com/Matsikembareb/flask-setup',
    logo: '/images/projects/flask-setup/logo.svg',
    beforeAfter: {
      without: [
        'Wiring the app factory and config again, by hand',
        'Untangling circular imports',
        'Adding migrations, logging and tests later, if ever',
      ],
      with: [
        'App factory, blueprints and config ready from the start',
        'Migrations, health checks, logging and error handling wired up',
        'Tests and Docker from the first commit',
      ],
    },
    donate: true,
    // Byron, 11 Nov 2026: while donations can't pay out to Zimbabwe, ask for stars and contributors.
    contribute: true,
    cvLine: 'Open-source Flask starter: app factory, blueprints, migrations, logging, tests and Docker, ready to build on.',
    relatedPost: 'flask-vs-django-vs-fastapi',
    blocks: [
      {
        h: 'The problem',
        body: 'Every new Flask project starts the same way: wire up the app factory, settle the config, add migrations, work out why the imports have gone circular. I had written that same scaffolding enough times to want it once, properly.',
      },
      {
        h: 'What it gives you',
        body: 'An app-factory layout with blueprints, config management across environments, database setup with migrations, health-check endpoints, structured error handling and logging, a test suite, and a Dockerfile. The structure is arranged so the circular-import problem does not arise in the first place.',
      },
      {
        h: 'Why open source it',
        body: 'The setup is not specific to anything I am building, so there was no reason to keep it private. It is on GitHub and open to contributors.',
      },
    ],
  },
  {
    slug: 'mypowervision',
    title: 'myPowervision',
    h1: 'myPowervision: a Flask app for daily jobs and schedules',
    tagline: 'Daily jobs and schedules, in one place',
    summary:
      'A web app built to help a team manage daily jobs and schedules. Built in Python and Flask during my IT internship at Powervision; not deployed.',
    metaTitle: 'myPowervision: Flask Job Scheduling Web App – Case Study',
    metaDescription:
      'How I built myPowervision, a Python Flask web app for planning a team’s daily jobs and schedules, with a clean, simple interface.',
    accent: '#1e5eff',
    tileKind: 'Flask web app',
    tileMeta: 'Flask · Powervision internship',
    // Byron, 10 Nov 2026: never deployed. Don't describe it as used by staff.
    status: 'Internship build, not deployed',
    period: 'Sept – Oct 2025',
    // Byron, 11 Nov 2026: a "More builds" row, not a big tile. The case study page stays.
    featured: false,
    caseStudy: true,
    role: 'Developer, during my IT internship at Powervision',
    stack: ['Python', 'Flask', 'Jinja', 'Bootstrap'],
    // No url/repo: Powervision's internal tool (Byron, 10 Nov 2026). Screenshots are the proof here.
    relatedPost: 'flask-vs-django-vs-fastapi',
    blocks: [
      {
        h: 'What I built',
        body: 'myPowervision is a Flask job scheduling app: a web app for managing a team’s daily jobs and schedules, designed to be clean and simple to use, so staff could see the day at a glance instead of piecing it together.',
      },
      {
        h: 'Why Flask',
        body: 'Flask was the framework I knew best at the time. With Jinja templates the whole app is server-rendered, with no front-end build step. If I started again today, I’d split it into a FastAPI back end and a React front end.',
      },
      {
        h: 'My role',
        body: 'I built the application during my IT internship at Powervision. It was not deployed.',
      },
    ],
  },
  {
    slug: 'pricepick',
    title: 'PricePick',
    h1: 'PricePick: a Python web scraping deal aggregator',
    tagline: 'A deal aggregator, and the business plan behind it',
    summary:
      'A group Flask project that scrapes deals from online shops into one place. I wrote its business model and plan, the documentation and the demo site.',
    metaTitle: 'PricePick: Python Web Scraping Deal Aggregator – Case Study',
    metaDescription:
      'PricePick is a group Python web scraping project. I wrote its business model and plan and the documentation, and built the demo site.',
    accent: '#f97316',
    tileKind: 'Deal aggregator',
    tileMeta: 'Business plan · Group project',
    tileDarkText: true,
    status: 'Group project',
    period: 'Sept 2024 – May 2025',
    featured: true,
    caseStudy: true,
    // Byron, 10 Nov 2026: most of the code was his teammates'. His part was the business side.
    role: 'Team member with Percy and John: business model and plan, documentation, presenting and the demo site',
    stack: ['Python', 'Flask'],
    // Byron, 11 Nov 2026: the team's code is on Percy's GitHub. Logo from that repo; screenshots
    // rendered from its templates with the scraped data it ships with (it isn't deployed).
    repo: 'https://github.com/PMagombedze/HIT200API',
    repoLabel: 'View the team’s code',
    cvLine: 'Group deal aggregator that scrapes Zimbabwean online shops. I wrote the business model and plan, the docs and the demo site.',
    logo: '/images/projects/pricepick/logo.webp',
    image: '/images/projects/pricepick/home.webp',
    imageAlt: 'PricePick home page: a product search bar, category links, shop and price filters, and a grid of headphones and other electronics scraped from Zimbabwean online shops',
    gallery: [
      {
        src: '/images/projects/pricepick/sign-in.webp',
        alt: 'PricePick sign-in form with email and password fields and a Google sign-in button',
        caption: 'Sign-in, with email and password or a Google account.',
      },
    ],
    blocks: [
      {
        h: 'What it is',
        body: 'PricePick is a Python web scraping project: a Flask web app that scrapes deals from online shops and gathers them in one place, so shoppers can compare prices without opening a dozen tabs. It was a group project at HIT with Percy and John.',
      },
      {
        h: 'My part',
        body: 'Most of the code was my teammates’ work. My side was the business: I used PricePick as the basis for the business model and business plan in our Technopreneurship course, wrote the project documentation and presented it. I also built a sample website for the scraping demo.',
      },
      {
        h: 'What I learned',
        body: 'Turning an idea and working code into money is not easy. The plan meant simulating how PricePick would perform in the real world, both financially and in demand.',
      },
    ],
  },
  {
    slug: 'cogniadapt',
    title: 'CogniAdapt',
    h1: 'CogniAdapt: an adaptive learning platform on FastAPI',
    tagline: 'AI lessons that adapt to how each student learns',
    summary:
      'An AI learning platform that breaks a topic into a graph of concepts and adapts lessons for students with dyslexia, ADHD or a language barrier.',
    metaTitle: 'CogniAdapt: AI Learning Platform on FastAPI – Case Study',
    metaDescription:
      'CogniAdapt maps a topic into a graph of concepts and adapts lessons for learners with dyslexia, ADHD or language barriers. I worked on its FastAPI backend.',
    accent: '#6b21a8',
    tileKind: 'Learning platform',
    tileMeta: 'FastAPI · Microsoft competition',
    status: 'Team project',
    // Repos created Dec 2025; Byron's backend commits are from Jan 2026 (github.com/CogniAdapt).
    period: 'Dec 2025 – Jan 2026',
    featured: true,
    caseStudy: true,
    role: 'Backend developer, with Brendon on the backend and Vicky on the front end',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Groq', 'Azure OpenAI', 'React'],
    // Byron, 11 Nov 2026: the code is in the CogniAdapt org. Logo from the frontend repo; the
    // screenshot is its landing page, rendered from that repo.
    repo: 'https://github.com/CogniAdapt',
    cvLine: 'AI learning platform for a Microsoft competition. On its FastAPI backend I added Groq and MongoDB, falling back to Azure.',
    logo: '/images/projects/cogniadapt/logo.webp',
    image: '/images/projects/cogniadapt/home.webp',
    imageAlt: 'CogniAdapt landing page: a brain mascot on a trampoline under a graduation cap, the headline "Learn Smarter, Not Harder" and buttons to start learning or watch a demo',
    relatedPost: 'flask-vs-django-vs-fastapi',
    blocks: [
      {
        h: 'What it is',
        body: 'CogniAdapt is an AI learning platform for students with learning differences, such as dyslexia or ADHD, or a language barrier. It breaks a topic into a graph of concepts, each building on the ones before it, and adapts the lessons to the learner. When a student struggles, it steps back to repair the concept they are missing instead of repeating the same lesson. It tracks progress through the graph and can read lessons aloud. We built it for a Microsoft competition.',
      },
      {
        h: 'My part',
        body: 'I worked on the FastAPI backend. I added a second stack alongside the original Azure services: Groq for generating the concept graphs, and MongoDB for storage. Each falls back in turn, Groq to Azure OpenAI and MongoDB to Azure Cosmos DB, then to a mock mode, so the app still starts when a service or key is missing. I also did a security pass, moving secrets out of the code and writing security and deployment guides for the team.',
      },
      {
        h: 'Why FastAPI',
        body: 'The backend is mostly AI calls and database reads, so FastAPI’s async support and automatic API docs fitted well. The front end is React with Tailwind, built by Vicky.',
      },
    ],
  },
  {
    slug: 'scheduleflow',
    title: 'ScheduleFlow',
    h1: 'ScheduleFlow',
    tagline: 'A task management mobile app, built in Java as a course assignment',
    summary: 'A task management mobile app, built in Java as a course assignment.',
    metaTitle: 'ScheduleFlow',
    metaDescription: 'ScheduleFlow, a task management mobile app built in Java by Byron Matsikembare.',
    accent: '#7c3aed',
    tileKind: 'Mobile app',
    tileMeta: 'Java · Course assignment',
    status: 'Course assignment',
    period: '',
    featured: false,
    caseStudy: false,
    role: '',
    stack: ['Java'],
    repo: 'https://github.com/Matsikembareb/Schedule-Flow',
    blocks: [],
  },
  {
    slug: 'word-evangelism-ministries',
    title: 'Word Evangelism Ministries',
    h1: 'Word Evangelism Ministries',
    tagline: 'A publicity website for a ministry',
    summary: 'A publicity website for Word Evangelism Ministries.',
    metaTitle: 'Word Evangelism Ministries',
    metaDescription: 'A publicity website built by Byron Matsikembare.',
    accent: '#7c3aed',
    tileTitle: 'Word Evangelism',
    // No url: no public link exists (Byron, 10 Nov 2026).
    tileKind: 'Website',
    tileMeta: 'Website',
    status: 'Website',
    featured: false,
    caseStudy: false,
    role: '',
    stack: [],
    blocks: [],
  },
];

// ─── Live systems ────────────────────────────────────────────────────────────
// Byron, 11 Nov 2026: live sites he contributed to, shown first on the homepage and /projects.
// Summaries describe each site from its own pages; nothing here claims more than "contributed".
// Screenshots: public/images/live/<slug>.webp (1200×750) and <slug>-600.webp, taken 11 Nov 2026.

export interface LiveSystem {
  slug: string;
  name: string;
  /** One or two words for the tile. */
  kind: string;
  url: string;
  summary: string;
  contribution: string;
  /** EXPERIENCE org it was done under; the CV lists it on that role. */
  org: string;
}

export const LIVE_SYSTEMS: LiveSystem[] = [
  {
    slug: 'deutsche-schule',
    name: 'Die Deutsche Schule',
    kind: 'School website',
    url: 'https://deutscheschule.co.zw',
    summary:
      'The school’s public website: German courses and ÖSD exams, plus routes to university, apprenticeships, voluntary service and au-pair placements in Germany.',
    contribution: 'Contributed as the school’s IT systems developer.',
    org: 'Die Deutsche Schule Harare',
  },
  {
    slug: 'muzukuru',
    name: 'Muzukuru',
    kind: 'Funeral streaming',
    url: 'https://muzukuru.com',
    summary:
      'Funeral and memorial livestreaming, so family who can’t travel can still be present. Streams, venues, pricing and quotes, all online.',
    contribution: 'Contributed as a developer at Muzukuru Streaming.',
    org: 'Muzukuru Streaming',
  },
  {
    slug: 'live-streaming-company',
    name: 'The Live Streaming Company',
    kind: 'Event livestreaming',
    url: 'https://livestreaming.co.zw',
    summary:
      'Professional livestreaming for conferences, church services and public events across Zimbabwe, to watch live or on demand.',
    contribution: 'Contributed as a developer.',
    org: 'Muzukuru Streaming',
  },
  {
    slug: 'chema',
    name: 'Chema',
    kind: 'Crowdfunding',
    url: 'https://chema.co.zw',
    summary:
      'Zimbabwe’s community crowdfunding platform, from Muzukuru Streaming: raise money for funerals, medical bills, school fees and community projects.',
    contribution: 'Contributed as a developer at Muzukuru Streaming.',
    org: 'Muzukuru Streaming',
  },
];

// ─── Home page proof strip ───────────────────────────────────────────────────
// Defined after PROJECTS so the count is derived, never hand-maintained.

export const PROOF = [
  { k: '21', v: 'A-Level points, 5 subjects' },
  // +1: DDSops360, the school's internal platform, which isn't listed publicly.
  { k: String(LIVE_SYSTEMS.length + 1), v: 'Live systems I’ve worked on' },
  { k: String(PROJECTS.length), v: 'Projects, web & mobile' },
  { k: '2', v: 'Languages: Shona & English' },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export interface Role {
  title: string;
  org: string;
  /** TOFILL for both internships: real start and end dates. Omitted while empty. */
  period: string;
  current: boolean;
  bullets: string[];
}

export const EXPERIENCE: Role[] = [
  {
    title: 'IT Systems Developer',
    org: 'Die Deutsche Schule Harare',
    period: 'Sept 2026 – present',
    current: true,
    bullets: [
      "Built and run DDSops360, the school's operations platform, live in production across its Harare and Bulawayo campuses.",
      'Designed a 14-module Flask and SQLAlchemy backend with a React, Vite and TanStack Query front end, covering enrolment, classes, library lending, staff, reporting and campus access.',
      'Implemented QR badge verification for event and gate scanning, with role-based accounts so security staff get scan-only access.',
      'Automated student ID and library card generation as print-ready PDFs, replacing a manual process.',
      'Set up continuous integration with GitHub Actions, containerised the stack with Docker and scheduled nightly off-site backups.',
    ],
  },
  {
    title: 'Developer',
    org: 'Muzukuru Streaming',
    period: 'June 2026 – Aug 2026',
    current: false,
    bullets: [
      'Engineered responsive image galleries, administrative moderation queues and interactive data tables across client and management portals.',
      'Implemented client-side WebP compression and resolved live-stream comment buffering bottlenecks, cutting storage use and speeding up page loads.',
      'Designed full-stack issue-tracking modules with priority tagging, automated status alerts, pagination and multi-state filtering.',
      'Integrated automated workflow agents and customer communication tooling with threshold-based escalation pathways.',
      'Hardened cross-platform media upload pipelines, patched cross-browser rendering bugs and built input validation for user onboarding flows.',
      'Led a team training session on integrating AI agents into the Tawk customer-communication platform.',
    ],
  },
  {
    title: 'Information Technology Intern',
    org: 'Powervision (Private) Limited',
    period: 'July 2025 – June 2026',
    current: false,
    bullets: [
      'Built myPowervision, a Python Flask prototype for managing daily jobs and schedules through a clean, simple interface.',
      'Engineered and maintained internal web applications, building responsive user interfaces and secure RESTful backend services.',
      'Developed automated scripts and data workflows to streamline daily operations and remove manual reporting bottlenecks.',
      'Implemented automated data tracking and formula-driven dashboard tools to improve operational visibility across teams.',
      'Normalised database schemas and implemented role-based access control in Flask and SQLAlchemy, with migrations and tests.',
      'Monitored server health, network systems and branch hardware to maximise uptime, and supported staff with day-to-day IT issues.',
    ],
  },
];

export const LEADERSHIP = [
  { role: 'Chairperson', org: 'CoDe Youth Advisory Committee', period: 'May 2026 – present', focus: 'A study of delivering sexual and reproductive health services through collection lockers: people submit tests, request and receive results, and collect pills and condoms, using a web app, WhatsApp chat and payments.' },
  { role: 'Secretary', org: 'SAYWHAT', period: '', focus: 'Student sexual and reproductive health advocacy' },
  { role: 'Counsellor', org: 'Friendship Bench', period: '', focus: 'Student mental health: active listening and strict confidentiality' },
  { role: 'Peer Educator', org: 'O3 Plus', period: '', focus: 'Student welfare: turning complex topics into plain language' },
  { role: 'Member', org: 'Enactus', period: 'April 2026 – present', focus: 'Entrepreneurship for community impact' },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const EDUCATION = [
  {
    qualification: 'BTech (Honours) Computer Science',
    institution: 'Harare Institute of Technology',
    location: 'Harare',
    dates: 'Aug 2023 – 2027 (expected)',
    result: 'In progress',
    current: true,
  },
  {
    qualification: 'ZIMSEC Advanced Level',
    institution: "St Faith's High School",
    location: 'Zimbabwe',
    dates: 'Jan 2021 – Dec 2022',
    result:
      '21 points: Computer Science A, Mechanical Mathematics A, Physics B, Chemistry B, Pure Mathematics C',
    current: false,
  },
  {
    qualification: 'ZIMSEC Ordinary Level',
    institution: 'Kriste Mambo High School',
    location: 'Zimbabwe',
    dates: 'Jan 2017 – Dec 2020',
    result:
      '15 subjects: 8 As and 7 Bs, including Mathematics, English, Computer Science, Physics and Shona',
    current: false,
  },
];

export interface Certification {
  title: string;
  issuer: string;
  focus: string;
  year: string;
  /** Individual course completions rolled up under one entry. */
  courses?: { name: string; date: string; id: string }[];
}

export const CERTIFICATIONS: Certification[] = [
  // Newest first. Dates and grades are from the certificates themselves (read 10 Nov 2026).
  { title: 'Data Science (GCI World)', issuer: 'Matsuo-Iwasawa Lab, University of Tokyo', focus: 'Fundamental theories and implementations of data science, final assessment passed', year: 'Aug 2026' },
  {
    title: 'Web development fundamentals (9 courses)',
    // Certificates (Jan–Mar 2026) are branded Frontend Masters; the company has since renamed itself Master.dev.
    issuer: 'Master.dev (formerly Frontend Masters)',
    focus: 'HTML, CSS and JavaScript, with build projects',
    year: 'Jan – Mar 2026',
    courses: [
      { name: 'Build a Game Project: Feed-A-Star-Mole', date: 'Mar 2026', id: '26afa05f21-QdGEMgizVR' },
      { name: 'Using JavaScript in Websites (AJAX, APIs, animations)', date: 'Mar 2026', id: '26afa05f21-WpPAlngdeI' },
      { name: 'Calculator Project: JavaScript', date: 'Feb 2026', id: '26afa05f21-iXeiSaMaxq' },
      { name: 'Introduction to JavaScript', date: 'Feb 2026', id: '26afa05f21-IASrfYRozE' },
      { name: 'Calculator Project: HTML & CSS', date: 'Feb 2026', id: '26afa05f21-yKhnCBodwR' },
      { name: 'Website Embeds & GitHub Pages', date: 'Feb 2026', id: '26afa05f21-hqghbEEeym' },
      { name: 'HTML Forms', date: 'Feb 2026', id: '26afa05f21-nAVlQwwJcH' },
      { name: 'Introduction to CSS', date: 'Feb 2026', id: '26afa05f21-keSvnKDtKC' },
      { name: 'Introduction to HTML', date: 'Jan 2026', id: '26afa05f21-XLRPmOEpIa' },
    ],
  },
  { title: 'Introduction to GitHub', issuer: 'GitHub Skills', focus: 'Version control and collaboration', year: '' },
  { title: 'Sexual and Reproductive Health course', issuer: 'SAYWHAT', focus: 'Peer health education', year: 'Feb 2024' },
  { title: 'National Foundation Certificate: Computer Operations Packages', issuer: 'HEXCO', focus: 'Office software and computer operation, graded Distinction', year: 'Apr 2021' },
  { title: 'National Foundation Certificate: ICT Fundamentals', issuer: 'HEXCO', focus: 'ICT foundations, graded Credit', year: 'Apr 2021' },
  { title: 'Basic Computer Appreciation Course', issuer: 'POTRAZ', focus: 'Digital literacy', year: 'Apr 2018' },
];

// ─── Skills (plain lists, never percentages) ─────────────────────────────────

export const SKILLS = [
  { area: 'Back end', items: ['Python', 'Flask', 'SQLAlchemy', 'Django', 'FastAPI', 'Jinja templating', 'REST APIs', 'RBAC'] },
  { area: 'Front end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'] },
  { area: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Alembic migrations', 'Schema design'] },
  { area: 'Tooling and ops', items: ['Git and GitHub', 'Docker', 'GitHub Actions', 'pytest', 'Postman', 'VS Code', 'Anaconda'] },
  { area: 'Also used', items: ['Node.js', 'Java', 'C#', 'Kotlin', 'XML'] },
  { area: 'Learning next', items: ['React Native', 'TypeScript', 'Vue', 'Angular', 'Web scraping'] },
];

export const PEOPLE_SKILLS = [
  'Shona: native. English: advanced professional.',
  'Active listening and empathy, from counselling with Friendship Bench.',
  'Explaining complex ideas simply, from peer education with O3 Plus and SAYWHAT.',
  'Handling confidential information with care.',
  'Working independently and meeting deadlines under pressure.',
];

// ─── Referees ────────────────────────────────────────────────────────────────
// Contact details are deliberately absent: publishing them exposes referees to
// spam and scams. TOFILL: `quote`, once each referee has given written permission.
// Never write a quote on a referee's behalf.

export const REFEREES = [
  {
    name: 'Eng. A. Ndlovu',
    role: 'Chairperson, Computer Science Department, Harare Institute of Technology',
    relationship: 'Academic',
    quote: '',
  },
  {
    name: 'Mr O. Rubabae',
    role: 'Business Development Manager, Powervision',
    relationship: 'Internship',
    quote: '',
  },
  {
    name: 'Mr Manzimani',
    role: 'Senior Developer, Muzukuru Streaming',
    relationship: 'Internship',
    quote: '',
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER = {
  blurb: 'Python full-stack developer and HIT Computer Science student, building practical web apps in Harare.',
  // The design lists Work, About, Experience, Blog. Qualifications is added so it isn't orphaned.
  pages: [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Qualifications', href: '/qualifications' },
    { label: 'Blog', href: '/blog' },
  ],
};

// ─── Homepage copy (Figma frames 9:77 / 9:351) ───────────────────────────────

export const HOME = {
  eyebrow: 'Byron Matsikembare · Python full-stack developer',
  headline: 'I build minimal, functional web apps with Python and React, for',
  headlineEmphasis: 'real problems in Zimbabwe',
  /** Not in the Figma frame: added because the current role must appear in the hero. */
  currentRole: "IT systems developer at Die Deutsche Schule Harare, where I built and run DDSops360.",
  availability: 'Open to roles, freelance work & business partners',
  /** Shown only when public/cv.pdf exists. */
  cvPath: '/cv.pdf',
  /** Above the services: the live systems (LIVE_SYSTEMS), each opening the real site. */
  live: { eyebrow: 'Live systems I’ve worked on' },
  // Byron, 11 Nov 2026: most relevant first; myPowervision moved to More builds on /projects.
  selected: ['flask-setup', 'pricepick', 'cogniadapt', 'word-evangelism-ministries'],
  // Byron, 10 Nov 2026: the services he offers, plus his goal of starting a company.
  services: {
    eyebrow: 'Services',
    heading: 'From a wedding invite to a school’s operations platform',
    items: [
      { icon: 'globe', h: 'Websites', body: 'Fast, mobile-friendly sites for businesses, ministries and individuals.' },
      { icon: 'blocks', h: 'Custom software', body: 'Web apps built around how you already work, like the platform I run for a school.' },
      { icon: 'calendar-heart', h: 'Invites & voting', body: 'Web-based wedding invitations, online voting and similar sites for events.' },
      { icon: 'lightbulb', h: 'Consulting', body: 'Advice on choosing a stack, planning a system or improving the one you have.' },
      { icon: 'life-buoy', h: 'Project assistance', body: 'An extra pair of hands to get a software project unstuck and shipped.' },
      { icon: 'graduation-cap', h: 'Learning support', body: 'Guidance for students learning to code, and collaboration on shared projects.' },
      { icon: 'share-2', h: 'Free sharing', body: 'Open-source code like Flask-Setup, and lessons shared freely on this blog.' },
      { icon: 'handshake', h: 'Partnerships', body: 'I’m working toward starting a software company, and I’m looking for business partners.' },
    ],
  },
  work: { eyebrow: 'Portfolio', heading: 'Selected work' },
  experience: { eyebrow: 'Experience', heading: 'Where I have shipped real work' },
  blog: { eyebrow: 'Recent blog', heading: 'Notes on Python, building and student life' },
  cta: {
    heading: "Let's build something useful together.",
    body: 'Have a role, a project or a business idea in mind? I\u2019d love to hear about it.',
  },
} as const;

/** "Sept 2026 – present" → "2026 – now"; "June 2026 – Aug 2026" → "2026". */
export function yearRange(period: string): string {
  const years = period.match(/\d{4}/g) ?? [];
  const open = /present|now/i.test(period);
  if (!years.length) return period;
  if (open) return `${years[0]} – now`;
  return years[0] === years[years.length - 1] ? years[0] : `${years[0]} – ${years[years.length - 1]}`;
}
