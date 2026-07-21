// ─── Shared Data ─────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  image: string;
  accent: string;
  live: boolean;
  role: string;
  timeline: string;
  stack: string[];
  // Article content
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'chema',
    title: 'chema.co.zw',
    tagline: 'A digital platform serving Zimbabwean communities',
    description: 'A platform built to serve Zimbabwean communities — connecting people, services, and opportunities through a clean, accessible web experience designed for local context.',
    tags: ['Web App', 'Full Stack', 'Zimbabwe'],
    url: 'https://chema.co.zw',
    image: 'https://images.pexels.com/photos/35752214/pexels-photo-35752214.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#00b4d8',
    live: true,
    role: 'Full-Stack Developer',
    timeline: '2024',
    stack: ['Python', 'Flask', 'JavaScript', 'MySQL', 'Jinja2'],
    overview: 'chema.co.zw is a community-driven digital platform built specifically for the Zimbabwean market. It was designed to bridge the gap between people, services, and opportunities by providing a centralized, accessible web experience that speaks to local needs and local context.',
    challenge: 'Zimbabwean internet users often struggle with fragmented online services — information is scattered across social media, WhatsApp groups, and outdated websites. The challenge was to build a single platform that could consolidate community-relevant services while remaining fast, accessible on low-bandwidth connections, and easy to navigate for non-technical users.',
    approach: 'We adopted a Flask-based backend with a server-rendered frontend using Jinja2 templates, prioritizing quick page loads and SEO-friendly structure. MySQL was chosen for relational data integrity. The UI was designed mobile-first, given that the vast majority of Zimbabwean users access the web through smartphones. Special attention was paid to keeping bundle sizes small and leveraging progressive enhancement so the site remained usable even on slower connections.',
    outcome: 'The platform launched and is now live at chema.co.zw, serving as a digital hub for community interaction. The architecture has proven stable under real traffic, and the modular codebase allows for rapid iteration based on user feedback.',
    features: [
      'Mobile-first responsive design optimized for low-bandwidth access',
      'Server-rendered pages for fast initial load and SEO visibility',
      'Modular Flask backend with clean separation of concerns',
      'MySQL relational schema supporting community data models',
      'Accessible UI following WCAG principles for inclusive use',
    ],
  },
  {
    slug: 'livestreaming',
    title: 'livestreaming.co.zw',
    tagline: 'Real-time media delivery for the Zimbabwean market',
    description: 'A live streaming platform tailored for Zimbabwe, enabling real-time content delivery and audience engagement at scale across low-bandwidth conditions.',
    tags: ['Streaming', 'Real-time', 'Media'],
    url: 'https://livestreaming.co.zw',
    image: 'https://images.pexels.com/photos/7865064/pexels-photo-7865064.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#e63946',
    live: true,
    role: 'Backend & Streaming Developer',
    timeline: '2024',
    stack: ['Python', 'Flask', 'JavaScript', 'WebSockets', 'MySQL'],
    overview: 'livestreaming.co.zw is a real-time media platform engineered to bring live streaming capability to the Zimbabwean market. It enables broadcasters and content creators to reach audiences with minimal latency, even in network-constrained environments.',
    challenge: 'Live streaming in Zimbabwe presents a unique set of technical hurdles. Mobile data is expensive, connections are often unstable, and users switch between Wi-Fi and cellular frequently. The platform needed to deliver smooth real-time video while gracefully degrading on poor connections, without forcing users to install native apps.',
    approach: 'The system uses a Flask backend with WebSocket support for real-time signaling and chat, paired with adaptive bitrate streaming to adjust quality dynamically based on the viewer\'s available bandwidth. We implemented reconnection logic so streams automatically resume after network drops. The frontend was built as a lightweight web application, avoiding heavy frameworks to keep the client footprint small — critical for users on metered data plans.',
    outcome: 'livestreaming.co.zw is live and operational, supporting real-time broadcasts with interactive audience features. The adaptive streaming approach has been key to maintaining a usable experience across Zimbabwe\'s varied network conditions.',
    features: [
      'Adaptive bitrate streaming for graceful quality adjustment',
      'WebSocket-based real-time chat and audience interaction',
      'Automatic reconnection after network interruptions',
      'Lightweight web client — no app install required',
      'Broadcaster dashboard for stream management and monitoring',
    ],
  },
  {
    slug: 'muzukuru',
    title: 'Muzukuru',
    tagline: 'Bridging technology and Zimbabwean heritage',
    description: 'A culturally grounded digital product built with local context in mind — bridging technology and heritage to create meaningful digital experiences for Zimbabwean users.',
    tags: ['Web App', 'Culture', 'Community'],
    image: 'https://images.pexels.com/photos/36585992/pexels-photo-36585992.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#f4a261',
    live: true,
    role: 'Full-Stack Developer',
    timeline: '2023–2024',
    stack: ['Python', 'Flask', 'JavaScript', 'MySQL', 'Jinja2'],
    overview: 'Muzukuru is a digital product that sits at the intersection of technology and Zimbabwean cultural heritage. It was built to prove that locally relevant, culturally grounded software can be just as polished and capable as anything built for a global audience.',
    challenge: 'Too often, software built for African markets is a retrofit of solutions designed elsewhere. Muzukuru\'s challenge was the opposite — to start from Zimbabwean context and build outward, ensuring every design decision respected cultural nuance while still delivering a modern, performant web experience.',
    approach: 'The project was built with a Flask backend and Jinja2 templating, with content structures designed around how Zimbabwean communities actually organize and share information — not imposed structures from Western social platforms. The frontend emphasizes warmth and accessibility, with a color palette and typography that feel culturally resonant. We kept the codebase intentionally lean, focusing on the features that mattered most to real users rather than chasing feature parity with global platforms.',
    outcome: 'Muzukuru is live and serves as a demonstration that culturally grounded software can be technically excellent. The project reinforced a core principle: building for local context is not a limitation — it is an advantage.',
    features: [
      'Culturally resonant UI designed from Zimbabwean context outward',
      'Content structures modeled on real community information flow',
      'Lean Flask + Jinja2 architecture for fast iteration',
      'Mobile-first design for smartphone-dominant user base',
      'Community-driven feature prioritization based on real feedback',
    ],
  },
  {
    slug: 'mypowervision',
    title: 'myPowervision',
    tagline: 'Company operations management web application',
    description: 'A company operations web app enabling efficient management of daily jobs and schedules. Built with Flask Python, focused on a clean and intuitive UX for operational staff.',
    tags: ['Flask', 'Python', 'Operations'],
    image: 'https://images.pexels.com/photos/34803983/pexels-photo-34803983.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#2ec4b6',
    live: false,
    role: 'Full-Stack Developer',
    timeline: '2023',
    stack: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'Jinja2'],
    overview: 'myPowervision is an internal operations web application built for a company that needed a better way to manage daily jobs and staff schedules. It replaced a mix of spreadsheets and paper-based tracking with a centralized, purpose-built system.',
    challenge: 'The company\'s existing workflow relied on spreadsheets and manual coordination, which led to scheduling conflicts, lost job records, and time wasted on repetitive data entry. Staff were not highly technical, so the replacement system had to be immediately intuitive — no training manual required.',
    approach: 'I built the application with Flask and SQLAlchemy on top of a MySQL database, designing a normalized schema that cleanly modeled jobs, staff, schedules, and status transitions. The UI was designed around the actual daily workflow of operational staff — the first screen they see is today\'s jobs, with one-click status updates. I used Jinja2 for server-rendered templates to keep the application fast and avoid the overhead of a client-side framework for what was fundamentally an internal tool.',
    outcome: 'myPowervision eliminated the spreadsheet chaos and gave staff a single source of truth for daily operations. Job status updates that previously required phone calls and manual sync now happen with a single click, and scheduling conflicts are caught before they happen.',
    features: [
      'Daily job dashboard with one-click status updates',
      'Staff scheduling with conflict detection',
      'SQLAlchemy ORM with a normalized MySQL schema',
      'Role-based access for operational staff and administrators',
      'Job history and audit trail for accountability',
    ],
  },
  {
    slug: 'pricepick',
    title: 'PricePick',
    tagline: 'Collaborative deal aggregator with web scraping',
    description: 'A collaborative web scraping deal aggregator built with Python, helping users automatically find the best prices across multiple online retailers.',
    tags: ['Python', 'Web Scraping', 'E-commerce'],
    image: 'https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#8338ec',
    live: false,
    role: 'Backend Developer',
    timeline: '2023',
    stack: ['Python', 'BeautifulSoup', 'Requests', 'Flask'],
    overview: 'PricePick is a collaborative project that aggregates product prices from multiple online retailers using automated web scraping, then presents the best deals to users in a single, searchable interface.',
    challenge: 'Online shoppers routinely waste time checking multiple retailers to find the best price. PricePick was built to automate that comparison — but web scraping at scale introduces real challenges: inconsistent HTML structures across sites, rate limiting, and data that goes stale quickly.',
    approach: 'We built modular Python scrapers using BeautifulSoup and Requests, with each retailer getting a dedicated parser adapter that handled that site\'s specific DOM structure. A Flask API served the aggregated data, and a scheduled refresh pipeline kept prices current. We designed the scraper layer to be easily extensible — adding a new retailer meant writing one new adapter, not reworking the pipeline.',
    outcome: 'PricePick successfully aggregated pricing across multiple retailers and proved out the modular scraper architecture. The project was a strong learning exercise in resilient web scraping, API design, and handling inconsistent real-world data.',
    features: [
      'Modular scraper architecture — one adapter per retailer',
      'Scheduled price refresh pipeline for current data',
      'Flask API serving aggregated pricing data',
      'Searchable interface for deal discovery',
      'Extensible design for rapid onboarding of new retailers',
    ],
  },
];

// ─── Skills (no percentages, categorized) ────────────────────────────────────

export const SKILLS = {
  strong: [
    { name: 'Python', note: 'Primary language — Flask apps, scraping, automation' },
    { name: 'Flask', note: 'Server-rendered full-stack applications' },
    { name: 'Jinja2', note: 'Templating for server-rendered pages' },
    { name: 'JavaScript', note: 'Frontend interactivity and client logic' },
    { name: 'HTML & CSS', note: 'Responsive, accessible markup' },
    { name: 'MySQL', note: 'Relational database design and queries' },
  ],
  other: [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'MongoDB' },
    { name: 'SQLAlchemy' },
    { name: 'Tailwind CSS' },
    { name: 'Git & GitHub' },
    { name: 'Postman' },
    { name: 'Anaconda' },
    { name: 'VS Code' },
  ],
  soft: [
    { name: 'Problem Solving', note: 'Breaking complex requirements into shippable steps' },
    { name: 'Communication', note: 'Translating technical concepts for non-technical stakeholders' },
    { name: 'Teamwork', note: 'Collaborative development across multi-person projects' },
    { name: 'Adaptability', note: 'Learning new tools and frameworks as projects demand' },
    { name: 'Time Management', note: 'Balancing studies with real-world project delivery' },
    { name: 'Mentorship', note: 'Supporting peers and community through counselling roles' },
  ],
};

// ─── Education (academic only) ───────────────────────────────────────────────

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology (Honours) in Computer Science',
    institution: 'Harare Institute of Technology',
    location: 'Harare, Zimbabwe',
    period: 'Aug 2023 – Present',
    current: true,
  },
  {
    degree: 'Advanced Level — 21 Points in 5 Subjects',
    institution: "St Faith's High School",
    location: 'Zimbabwe',
    period: 'Jan 2021 – Dec 2022',
    current: false,
  },
  {
    degree: 'Ordinary Level — 8 As, 7 Bs',
    institution: 'Kriste Mambo High School',
    location: 'Zimbabwe',
    period: 'Jan 2017 – Dec 2020',
    current: false,
  },
];

// ─── Qualifications & Certifications (separate from education) ───────────────

export const CERTIFICATIONS = [
  {
    title: 'Frontend Masters Bootcamp',
    issuer: 'Frontend Masters',
    description: 'Intensive bootcamp covering modern frontend development — React, JavaScript fundamentals, and production UI patterns.',
  },
  {
    title: 'Basic Computer Appreciation',
    issuer: 'POTRAZ',
    description: 'Postal and Telecommunications Regulatory Authority of Zimbabwe certification in foundational computer skills and digital literacy.',
  },
  {
    title: 'ICT Fundamentals & Computer Operation Packages',
    issuer: 'HEXCO',
    description: 'Higher Education Examinations Council certification covering ICT fundamentals and standard computer operation packages.',
  },
];

// ─── Clubs & Societies (separate from education) ─────────────────────────────

export const CLUBS = [
  {
    name: 'Enactus HIT',
    role: 'Member',
    description: 'Business innovation through entrepreneurship — applying technology and business skills to create community impact projects.',
  },
  {
    name: 'Friendship Bench',
    role: 'Counsellor',
    description: 'Mental health support and community counselling — providing a listening ear and bridge to professional help for those in need.',
  },
];

// ─── Profile ─────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Byron Tashinga Matsikembare',
  shortName: 'Byron',
  initials: 'BM',
  title: 'Full-Stack Developer',
  location: 'Harare, Zimbabwe',
  email: 'matsikembareb@gmail.com',
  phone: '+263 780 812 222',
  bio: 'Computer Science student at Harare Institute of Technology, passionate about building full-stack systems that make a real difference. I ship fast, I ship clean.',
  portrait: 'https://images.pexels.com/photos/32071842/pexels-photo-32071842.jpeg?auto=compress&cs=tinysrgb&w=1200',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    email: 'mailto:matsikembareb@gmail.com',
  },
};

export const NAV_ITEMS = [
  { label: 'Home', page: 'home' as Page },
  { label: 'About', page: 'about' as Page },
  { label: 'Skills', page: 'skills' as Page },
  { label: 'Projects', page: 'projects' as Page },
  { label: 'Education', page: 'education' as Page },
  { label: 'Qualifications', page: 'qualifications' as Page },
  { label: 'Contact', page: 'contact' as Page },
];

export type Page = 'home' | 'about' | 'skills' | 'projects' | 'project-detail' | 'education' | 'qualifications' | 'contact';
