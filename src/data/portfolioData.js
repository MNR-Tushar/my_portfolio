import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaJava,
  FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaCode,
  FaGraduationCap, FaTerminal, FaServer, FaDatabase, FaExchangeAlt
} from 'react-icons/fa'
import {
  SiJavascript, SiDjango, SiPostgresql,
  SiRedis, SiCelery, SiFastapi,
  SiMysql, SiSqlite, SiFlask,
  SiHtml5, SiCss, SiGithubactions,
  SiPostman, SiSwagger, SiCloudinary,
  SiLeetcode, SiCodeforces, SiCplusplus
} from 'react-icons/si'

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: 'Md Naimur Rahman',
  nickname: 'Tushar',
  firstName: 'Naimur',
  lastName: 'Rahman',
  roles: [
    'Backend Engineer',
    'Django & DRF Specialist',
    'Competitive Programmer (600+ Solved)',
    'Python & Systems Developer',
  ],
  tagline:
    'I architect and build production-grade backend systems, robust REST APIs, real-time WebSocket applications, and containerized cloud deployments.',
  bio: `I am a backend-focused software developer and Computer Science & Engineering undergraduate at Daffodil International University (DIU), Dhaka. My core focus lies in crafting scalable backend architectures with Django & Django REST Framework, building asynchronous task processing pipelines with Celery and Redis, and deploying multi-container services with Docker. 

Passionate about problem-solving and algorithmic thinking, I have solved 600+ problems across LeetCode, Codeforces, AtCoder, VJudge, HackerRank, and Toph. My journey began in 2020 on a smartphone, and since then I have developed full-scale production applications with payment integrations, WebSockets, and CI/CD automation.`,
  email: 'rahman23105101275@diu.edu.bd',
  phone: '',
  location: 'DSC, Savar, Dhaka, Bangladesh',
  resumeUrl: '#contact',
  avatarUrl: 'https://avatars.githubusercontent.com/u/69746759?v=4',
  githubUrl: 'https://github.com/MNR-Tushar',
  linkedinUrl: 'https://www.linkedin.com/in/mdnaimurrahman36/',
  status: 'Open for Internships & Backend Roles',
}

// ============================================
// STATS
// ============================================
export const stats = [
  { number: 600, suffix: '+', label: 'Problems Solved', icon: FaCode },
  { number: 27, suffix: '+', label: 'GitHub Repositories', icon: FaGithub },
  { number: 6, suffix: '+', label: 'Core Projects Built', icon: FaServer },
  { number: 100, suffix: '%', label: 'Backend Focused', icon: FaTerminal },
]

// ============================================
// EDUCATION
// ============================================
export const education = {
  degree: 'B.Sc. in Computer Science & Engineering (CSE)',
  institution: 'Daffodil International University (DIU)',
  location: 'DSC, Savar, Dhaka, Bangladesh',
  status: 'Undergraduate',
  highlights: [
    'Core Courses: Data Structures & Algorithms, Database Management Systems, Compiler Design, Software Engineering, Computer Networks',
    'Applied CS theory into real-world tools such as the Compiler Learning Hub with 9 interactive parsers & generators',
  ],
}

// ============================================
// COMPETITIVE PROGRAMMING / PROBLEM SOLVING
// ============================================
export const problemSolving = {
  totalSolved: '600+',
  platforms: [
    { name: 'LeetCode', icon: SiLeetcode, color: '#FFA116' },
    { name: 'Codeforces', icon: SiCodeforces, color: '#1F8ACB' },
    { name: 'AtCoder', icon: FaCode, color: '#333333' },
    { name: 'VJudge', icon: FaCode, color: '#5C6BC0' },
    { name: 'HackerRank', icon: FaCode, color: '#2EC866' },
    { name: 'Toph', icon: FaCode, color: '#E91E63' },
  ],
  topics: [
    'Graph Theory',
    'Dynamic Programming',
    'Binary Search',
    'Greedy Algorithms',
    'Trees & Heaps',
    'Two Pointers',
    'Bit Manipulation',
    'Number Theory',
  ],
}

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/MNR-Tushar',
    label: 'MNR-Tushar',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/mdnaimurrahman36/',
    label: 'mdnaimurrahman36',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:rahman23105101275@diu.edu.bd',
    label: 'rahman23105101275@diu.edu.bd',
  },
]

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

// ============================================
// SKILLS
// ============================================
export const skillCategories = [
  {
    name: 'Backend & Frameworks',
    skills: [
      { name: 'Python', icon: FaPython, level: 95, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, level: 94, color: '#092E20' },
      { name: 'Django REST Framework', icon: SiDjango, level: 92, color: '#A30000' },
      { name: 'Django Channels', icon: SiDjango, level: 85, color: '#0C4B33' },
      { name: 'FastAPI', icon: SiFastapi, level: 80, color: '#009688' },
      { name: 'Flask', icon: SiFlask, level: 78, color: '#a1a1aa' },
      { name: 'Celery & Celery Beat', icon: SiCelery, level: 85, color: '#37814A' },
      { name: 'WebSockets', icon: FaExchangeAlt, level: 86, color: '#4A90D9' },
    ],
  },
  {
    name: 'Databases, Cache & DevOps',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#4169E1' },
      { name: 'Redis (Cache & Broker)', icon: SiRedis, level: 86, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, level: 82, color: '#4479A1' },
      { name: 'SQLite', icon: SiSqlite, level: 88, color: '#003B57' },
      { name: 'Docker & Docker Compose', icon: FaDocker, level: 88, color: '#2496ED' },
      { name: 'GitHub Actions (CI/CD)', icon: SiGithubactions, level: 82, color: '#2088FF' },
      { name: 'Git & Version Control', icon: FaGitAlt, level: 92, color: '#F05032' },
    ],
  },
  {
    name: 'Languages & Developer Tools',
    skills: [
      { name: 'C / C++', icon: SiCplusplus, level: 84, color: '#00599C' },
      { name: 'Java', icon: FaJava, level: 78, color: '#ED8B00' },
      { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
      { name: 'Postman & API Testing', icon: SiPostman, level: 88, color: '#FF6C37' },
      { name: 'Swagger / OpenAPI', icon: SiSwagger, level: 85, color: '#85EA2D' },
      { name: 'Cloudinary', icon: SiCloudinary, level: 84, color: '#3448C5' },
      { name: 'HTML5 & CSS3', icon: SiHtml5, level: 85, color: '#E34F26' },
    ],
  },
]

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: 1,
    title: 'UrbanThread',
    tagline: 'Production-Grade E-Commerce Backend & Pipeline',
    description:
      'A full-featured e-commerce backend built with Django REST Framework for a fashion & clothing store. Includes product inventory, cart & order management, coupon system, SSLCommerz payment gateway integration, Celery/Redis asynchronous task queue for email pipelines via SendGrid, a multi-container Docker Compose setup, and automated CI/CD via GitHub Actions.',
    badge: 'Production Backend',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    accentColor: '#6366f1',
    endpoint: 'POST /api/v1/orders/checkout/',
    statusText: '200 OK • SSLCommerz • Celery Broker',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker Compose', 'GitHub Actions', 'SSLCommerz'],
    category: 'backend',
    githubUrl: 'https://github.com/MNR-Tushar/UrbanThread',
    liveUrl: '',
    featured: true,
  },
  {
    id: 2,
    title: 'CR Reviews',
    tagline: 'University Class Representative Review Platform',
    description:
      'A comprehensive web platform enabling university students to discover, rate, and review Class Representatives (CRs). Features custom authentication, role-based dashboards, student moderation, Cloudinary media storage, and PostgreSQL relational database design.',
    badge: 'Full Stack Django',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%)',
    accentColor: '#38bdf8',
    endpoint: 'GET /api/v1/crs/reviews/',
    statusText: '200 OK • Auth • Cloudinary CDN',
    tags: ['Django', 'Python', 'PostgreSQL', 'Cloudinary', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MNR-Tushar/crreviews',
    liveUrl: '',
    featured: true,
  },
  {
    id: 3,
    title: 'Django Realtime Chat',
    tagline: 'Asynchronous WebSockets Chat Application',
    description:
      'A full-featured real-time chat application powered by Django Channels and WebSockets. Supports public rooms, private groups, direct 1-on-1 messaging, real-time typing indicators, user online/offline status, and secure file sharing with Redis channel layers.',
    badge: 'WebSockets & ASGI',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    accentColor: '#34d399',
    endpoint: 'ws://api/ws/chat/room_id/',
    statusText: '101 Switching Protocols • Redis ASGI',
    tags: ['Django Channels', 'WebSockets', 'Redis', 'Python', 'Asyncio', 'Real-time'],
    category: 'backend',
    githubUrl: 'https://github.com/MNR-Tushar/django-realtime-chat',
    liveUrl: '',
    featured: true,
  },
  {
    id: 4,
    title: 'Compiler Learning Hub',
    tagline: 'Interactive Compiler Theory & Parsing Suite',
    description:
      'An educational platform implementing 9 core compiler design algorithms and interactive tools. Includes FIRST/FOLLOW set calculators, LL(1) and LR(0) predictive parsers, grammar ambiguity checkers, Three-Address Code (TAC) generators, and regular expression converters.',
    badge: 'CS Theory & Tooling',
    gradient: 'linear-gradient(135deg, #311042 0%, #4a044e 50%, #701a75 100%)',
    accentColor: '#f472b6',
    endpoint: 'POST /api/grammar/parse/ll1',
    statusText: '200 OK • AST Generated • TAC Ready',
    tags: ['Flask', 'Python', 'Algorithms', 'JavaScript', 'HTML5', 'CSS3', 'Compiler Theory'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MNR-Tushar/Compiler-Learning-Hub',
    liveUrl: '',
    featured: false,
  },
  {
    id: 5,
    title: 'LearnLog (Blogs)',
    tagline: 'Tech Blogging & Knowledge Sharing Platform',
    description:
      'A modern blogging platform built with Django combining structured technical content management with interactive community features. Features custom user models, profile management, CKEditor rich-text editing, nested discussion comments, and secure authentication.',
    badge: 'Full Stack Django',
    gradient: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
    accentColor: '#a1a1aa',
    endpoint: 'GET /api/blogs/articles/?tag=backend',
    statusText: '200 OK • CKEditor • Custom Auth',
    tags: ['Django', 'Python', 'CKEditor', 'PostgreSQL', 'PythonAnywhere'],
    category: 'fullstack',
    githubUrl: 'https://github.com/MNR-Tushar/Blogs',
    liveUrl: '',
    featured: false,
  },
  {
    id: 6,
    title: 'Personal Dashboard',
    tagline: 'Zero-Dependency Vanilla JavaScript Dashboard',
    description:
      'A minimalist browser dashboard developed with pure vanilla JavaScript without external frameworks. Features a real-time digital clock, dynamic weather updates via OpenWeather API, interactive task to-do list, quick notes, and dark/light mode toggle.',
    badge: 'Frontend Fundamentals',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%)',
    accentColor: '#818cf8',
    endpoint: 'client://local/storage/dashboard',
    statusText: '100% Vanilla JS • Zero Dependencies',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Vanilla JS'],
    category: 'frontend',
    githubUrl: 'https://github.com/MNR-Tushar/Personal-Dashboard',
    liveUrl: '',
    featured: false,
  },
]

// ============================================
// EXPERIENCE / JOURNEY
// ============================================
export const experiences = [
  {
    id: 1,
    role: 'Backend Engineering & System Architecture',
    company: 'Independent & Academic Projects',
    companyUrl: 'https://github.com/MNR-Tushar',
    duration: '2022 - Present',
    description: [
      'Architected UrbanThread — a production-ready Django REST Framework backend with SSLCommerz payment integration, Celery background tasks, and Docker Compose.',
      'Built a real-time chat service using Django Channels, Redis channel layers, and WebSockets supporting dynamic rooms, DMs, and typing indicators.',
      'Designed and deployed CR Reviews platform with relational database schemas, custom authentication, and Cloudinary media pipelines.',
      'Integrated automated CI/CD workflows using GitHub Actions for automated linting, test suites, and Docker image builds.',
    ],
    technologies: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'WebSockets', 'GitHub Actions'],
  },
  {
    id: 2,
    role: 'Competitive Programmer & Algorithmic Problem Solver',
    company: 'LeetCode, Codeforces, AtCoder, VJudge & Toph',
    companyUrl: 'https://github.com/MNR-Tushar',
    duration: '2020 - Present',
    description: [
      'Solved 600+ algorithmic challenges across leading competitive programming platforms.',
      'Developed deep proficiency in Data Structures and Algorithms (Graphs, Dynamic Programming, Trees, Binary Search).',
      'Regularly participate in algorithmic contests to sharpen speed, edge-case analysis, and time/space complexity optimization.',
      'Applied algorithmic principles directly to optimize database queries, caching strategies, and backend request latency.',
    ],
    technologies: ['Python', 'C++', 'Java', 'Data Structures', 'Algorithms', 'Complexity Analysis'],
  },
  {
    id: 3,
    role: 'B.Sc. in Computer Science & Engineering',
    company: 'Daffodil International University (DIU)',
    companyUrl: 'https://daffodilvarsity.edu.bd/',
    duration: 'Undergraduate Program',
    description: [
      'Pursuing B.Sc. in CSE with focused interest in Backend Engineering, Systems Design, and Distributed Architectures.',
      'Designed and built the Compiler Learning Hub featuring 9 interactive compiler tools including LL(1)/LR(0) parsers and TAC generators.',
      'Collaborated with peers on university-wide technical initiatives, academic software projects, and peer code reviews.',
    ],
    technologies: ['CS Fundamentals', 'Compiler Design', 'Relational Databases', 'System Architecture'],
  },
  {
    id: 4,
    role: 'Self-Taught Developer — The Beginning',
    company: 'Self-Driven Learning Journey',
    companyUrl: 'https://github.com/MNR-Tushar',
    duration: '2020 - 2021',
    description: [
      'Began programming during the COVID-19 pandemic on an Android smartphone, learning Java fundamentals without a computer.',
      'Acquired first laptop in December 2021 and immediately accelerated into Python, Django, database systems, and web architecture.',
      'Demonstrated high self-discipline, resilience, and rapid capability to learn complex production stacks independently.',
    ],
    technologies: ['Java', 'Python', 'Object-Oriented Programming', 'Web Basics'],
  },
]

// ============================================
// CONTACT INFO
// ============================================
export const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rahman23105101275@diu.edu.bd',
    href: 'mailto:rahman23105101275@diu.edu.bd',
    copyable: true,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'mdnaimurrahman36',
    href: 'https://www.linkedin.com/in/mdnaimurrahman36/',
    copyable: false,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'MNR-Tushar (27+ Repos)',
    href: 'https://github.com/MNR-Tushar',
    copyable: false,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'DSC, Savar, Dhaka, Bangladesh',
    href: '#',
    copyable: false,
  },
]
