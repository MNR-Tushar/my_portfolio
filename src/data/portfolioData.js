import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaJava,
  FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaCode,
  FaGraduationCap, FaTerminal, FaServer, FaDatabase, FaExchangeAlt,
  FaPhoneAlt, FaTrophy, FaAward
} from 'react-icons/fa'
import {
  SiJavascript, SiDjango, SiPostgresql,
  SiRedis, SiCelery, SiFastapi,
  SiMysql, SiSqlite, SiFlask,
  SiHtml5, SiCss, SiGithubactions,
  SiPostman, SiSwagger, SiCloudinary,
  SiLeetcode, SiCodeforces, SiCplusplus,
  SiBootstrap, SiJsonwebtokens
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
  bio: `I am a backend-focused software developer and Computer Science & Engineering undergraduate at Daffodil International University (DIU), Dhaka, with a Diploma in Engineering from Magura Polytechnic Institute. My core focus lies in crafting scalable backend architectures with Django & Django REST Framework, building asynchronous task processing pipelines with Celery and Redis, and deploying multi-container services with Docker. 

Passionate about problem-solving and algorithmic thinking, I have solved 600+ problems across Codeforces, LeetCode, AtCoder, VJudge, HackerRank, and Toph. I have achieved multiple podium and top-rank finishes in competitive programming contests, including 3rd Place at DCC Programming Fest 2021 and 6th Place at DIU Unlock the Algorithm. My journey began in 2020 on a smartphone, and since then I have developed full-scale production applications with payment integrations, WebSockets, and automated CI/CD pipelines.`,
  email: 'rahman23105101275@diu.edu.bd',
  phone: '+8801790848236',
  location: 'Dhaka, Bangladesh',
  resumeUrl: '/resume.pdf',
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
  { number: 7, suffix: '+', label: 'Core Projects Built', icon: FaServer },
  { number: 100, suffix: '%', label: 'Backend Focused', icon: FaTerminal },
]

// ============================================
// EDUCATION
// ============================================
export const education = {
  degree: 'B.Sc. in Computer Science & Engineering (CSE)',
  institution: 'Daffodil International University (DIU), Savar',
  period: 'Jan 2023 – Present',
  status: 'Undergraduate Program',
  secondaryDegree: 'Diploma in Engineering',
  secondaryInstitution: 'Magura Polytechnic Institute, Magura',
  secondaryPeriod: 'Aug 2017 – Jun 2021',
  highlights: [
    'B.Sc. in CSE (2023 – Present) @ Daffodil International University, Savar',
    'Diploma in Engineering (2017 – 2021) @ Magura Polytechnic Institute, Magura',
    'Core Focus: Data Structures & Algorithms, DBMS, Systems Architecture, Computer Networks',
  ],
}

// ============================================
// ACHIEVEMENTS / CONTEST AWARDS
// ============================================
export const achievements = [
  {
    rank: '3rd',
    contest: 'DCC Programming Fest 2021',
    note: 'Apr 2021 • Podium',
  },
  {
    rank: '6th',
    contest: 'DIU Unlock the Algorithm Prelim',
    note: 'May 2024 • Solved 5',
  },
  {
    rank: '11th',
    contest: 'DIU Code Trap Contest Fall 2023',
    note: 'Feb 2024 • Solved 7',
  },
  {
    rank: '13th',
    contest: 'DIU Take-Off Contest Final 2023',
    note: 'Jun 2023 • Solved 6',
  },
  {
    rank: '25th',
    contest: 'DIU Unlock the Algorithm Final 2024',
    note: 'Jun 2024 • Solved 3',
  },
]

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
    name: 'Languages, Tools & Frontend',
    skills: [
      { name: 'C / C++', icon: SiCplusplus, level: 84, color: '#00599C' },
      { name: 'Java', icon: FaJava, level: 78, color: '#ED8B00' },
      { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
      { name: 'JWT (SimpleJWT)', icon: SiJsonwebtokens, level: 90, color: '#D63AFF' },
      { name: 'Postman & Swagger', icon: SiPostman, level: 88, color: '#FF6C37' },
      { name: 'Bootstrap & HTML/CSS', icon: SiBootstrap, level: 84, color: '#7952B3' },
      { name: 'Cloudinary & SendGrid', icon: SiCloudinary, level: 84, color: '#3448C5' },
    ],
  },
  {
    name: 'AI, ML & Engineering Interests',
    skills: [
      { name: 'Machine Learning', icon: FaCode, level: 76, color: '#10B981' },
      { name: 'NLP (Natural Language Processing)', icon: FaCode, level: 74, color: '#8B5CF6' },
      { name: 'RAG (Retrieval-Augmented Gen)', icon: FaServer, level: 75, color: '#EC4899' },
      { name: 'AI API Integration & Prompting', icon: FaTerminal, level: 82, color: '#3B82F6' },
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
    tagline: 'Scalable E-Commerce Backend & Pipeline',
    description:
      'Production-grade REST API built with Django REST Framework & JWT auth. Features SSLCommerz payments, async email/order pipelines using Celery + Redis with Celery Beat, Docker Compose, and GitHub Actions CI/CD.',
    pills: ['Python & DRF', 'SSLCommerz', 'Docker & Celery'],
    badge: 'Featured',
    theme: 'blue-featured',
    githubUrl: 'https://github.com/MNR-Tushar/UrbanThread',
    liveUrl: 'https://urbanthread-6nok.onrender.com/api/docs/',
    image: '', // Place image in /public/projects/urbanthread.png (or any URL)
    category: 'backend',
  },
  {
    id: 2,
    title: 'CR Reviews',
    tagline: 'University Class Representative Review Platform',
    description:
      'Comprehensive university student platform for reviewing and discovering Class Representatives (CRs). Features user authentication, Google OAuth2, SendGrid email verification, admin dashboard, and Cloudinary.',
    pills: ['Django', 'PostgreSQL', 'Google OAuth2'],
    badge: 'Platform',
    theme: 'navy-portal',
    githubUrl: 'https://github.com/MNR-Tushar/crreviews',
    liveUrl: 'https://crreviews.onrender.com',
    image: '', // Place image in /public/projects/crreviews.png (or any URL)
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Student Management System API',
    tagline: 'JWT-Secured RESTful API with Pattern-Based Redis Caching',
    description:
      'Production-grade RESTful API across 5 modules (Students, Teachers, Courses, Departments, Enrollments). Features 15-min TTL Redis caching with automatic pattern invalidation, 5-service Docker Compose, and CI/CD.',
    pills: ['Django & DRF', 'Redis Caching', 'Docker Compose'],
    badge: 'Enterprise API',
    theme: 'dark-code',
    githubUrl: 'https://github.com/MNR-Tushar/student_management_system_api',
    liveUrl: '',
    image: '', // Place image in /public/projects/sms.png (or any URL)
    category: 'backend',
  },
  {
    id: 4,
    title: 'Django Realtime Chat',
    tagline: 'Asynchronous WebSockets Chat Application',
    description:
      'Full-featured asynchronous real-time chat app powered by Django Channels & WebSockets with rooms, DMs, typing indicators, and Redis channel layer.',
    pills: ['WebSockets', 'Django Channels', 'Redis'],
    badge: 'Realtime',
    theme: 'dark-code',
    githubUrl: 'https://github.com/MNR-Tushar/django-realtime-chat',
    liveUrl: '',
    image: '', // Place image in /public/projects/chat.png (or any URL)
    category: 'backend',
  },
  {
    id: 5,
    title: 'Compiler Learning Hub',
    tagline: 'Interactive Compiler Theory & Parsing Suite',
    description:
      'Interactive educational suite implementing 9 core compiler tools — FIRST/FOLLOW calculators, LL(1)/LR(0) parsers, and TAC generators with Flask.',
    pills: ['CS Theory', 'Flask', 'Algorithms'],
    badge: 'Analyzer',
    theme: 'purple-analyzer',
    githubUrl: 'https://github.com/MNR-Tushar/Compiler-Learning-Hub',
    liveUrl: '',
    image: '', // Place image in /public/projects/compiler.png (or any URL)
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'LearnLog (Blogs)',
    tagline: 'Tech Blogging & Knowledge Sharing Platform',
    description:
      'Feature-rich developer blogging platform combining structured technical content publishing with social interactions, CKEditor, and custom auth.',
    pills: ['Full-Stack', 'CKEditor', 'Django'],
    badge: 'CMS',
    theme: 'dark-editorial',
    githubUrl: 'https://github.com/MNR-Tushar/Blogs',
    liveUrl: '',
    image: '', // Place image in /public/projects/blogs.png (or any URL)
    category: 'fullstack',
  },
  {
    id: 7,
    title: 'Personal Dashboard',
    tagline: 'Zero-Dependency Vanilla JavaScript Dashboard',
    description:
      'Minimalist browser dashboard developed with pure vanilla JavaScript — real-time clock, live weather API, task to-do list, and dark mode.',
    pills: ['Vanilla JS', 'Web App', 'Dev Tools'],
    badge: 'Dashboard',
    theme: 'cyan-minimal',
    githubUrl: 'https://github.com/MNR-Tushar/Personal-Dashboard',
    liveUrl: '',
    image: '', // Place image in /public/projects/dashboard.png (or any URL)
    category: 'frontend',
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
      'Engineered Student Management System REST API featuring 15-min Redis caching with pattern-based invalidation and a 5-service Docker Compose deployment.',
      'Built a real-time chat service using Django Channels, Redis channel layers, and WebSockets supporting dynamic rooms, DMs, and typing indicators.',
      'Designed and deployed CR Reviews platform with relational database schemas, custom authentication, and Cloudinary media pipelines.',
      'Integrated automated CI/CD workflows using GitHub Actions for automated linting, test suites, and Docker image builds.',
    ],
    technologies: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'Celery', 'Redis', 'WebSockets', 'GitHub Actions'],
  },
  {
    id: 2,
    role: 'AI-Based Software Development with Python',
    company: 'Innovative Skills BD (Batch 8)',
    companyUrl: 'https://innovativeskillsbd.com/course-single/ai-based-software-development-with-python#',
    duration: 'Batch 8 • Certified Track',
    description: [
      'Completed an intensive professional engineering program focused on architecting modern, scalable Python backend systems.',
      'Engineered AI-integrated software solutions, developing robust REST APIs and automated business logic.',
      'Applied software design patterns, clean code principles, database modeling, and secure API practices.',
      'Built and deployed end-to-end backend workflows with Git version control, Postman testing, and production guidelines.',
    ],
    technologies: ['Python', 'AI Integration', 'REST APIs', 'Backend Architecture', 'Prompt Engineering', 'Git'],
  },
  {
    id: 3,
    role: 'Phase 1 Remastered: Deep Dive into Competitive Programming',
    company: 'YouKn0wWho Academy',
    companyUrl: 'https://youkn0wwho.academy/p/phase-1-remastered-a-deeeep-dive-into-competitive-programming',
    duration: 'Advanced Algorithmic Training',
    description: [
      'Completed the premier competitive programming academy course designed and mentored by Shahjalal Shohag (Candidate Master, YouKn0wWho).',
      'Mastered core and advanced algorithmic paradigms: Number Theory, Combinatorics, Graph Theory, and Dynamic Programming.',
      'Honed rigorous problem-solving techniques, time/space complexity analysis, and edge-case handling across 600+ problems.',
      'Utilized C++ Standard Template Library (STL) to write high-performance, contest-level algorithmic solutions.',
    ],
    technologies: ['C++', 'Competitive Programming', 'Data Structures', 'Dynamic Programming', 'Number Theory', 'Graph Theory', 'Algorithms'],
  },
  {
    id: 4,
    role: 'Competitive Programmer & Contest Problem Solver',
    company: 'Codeforces, LeetCode, AtCoder, HackerRank & Toph',
    companyUrl: 'https://github.com/MNR-Tushar',
    duration: '2020 - Present',
    description: [
      '3rd Place — DCC Programming Fest 2021 (Apr 2021).',
      '6th Place — DIU Unlock the Algorithm Preliminary (C Slot, May 2024 | Solved 5 problems).',
      '11th Place — DIU Code Trap Programming Contest Fall 2023 (Feb 2024 | Solved 7 problems).',
      '13th Place — DIU Take-Off Programming Contest Spring 2023 Final (Jun 2023 | Solved 6 problems).',
      '25th Place — DIU Unlock the Algorithm Spring 2024 Final (Jun 2024 | Solved 3 problems in final round).',
      'Solved 600+ algorithmic challenges across leading competitive programming platforms with deep mastery in DP, Graphs, and Number Theory.',
    ],
    technologies: ['C++', 'Python', 'Competitive Programming', 'Data Structures', 'Algorithms', 'Contest Ranking'],
  },
  {
    id: 5,
    role: 'B.Sc. in Computer Science & Engineering',
    company: 'Daffodil International University (DIU), Savar',
    companyUrl: 'https://daffodilvarsity.edu.bd/',
    duration: 'Jan 2023 – Present',
    description: [
      'Pursuing B.Sc. in CSE with focused specialization in Backend Systems, Relational Database Modeling, and Distributed Architectures.',
      'Core Coursework: Data Structures & Algorithms, DBMS, Compiler Design, Software Engineering, Computer Networks.',
    ],
    technologies: ['CS Fundamentals', 'Software Engineering', 'Relational Databases', 'System Architecture'],
  },
  {
    id: 6,
    role: 'Diploma in Engineering',
    company: 'Magura Polytechnic Institute, Magura',
    companyUrl: 'https://github.com/MNR-Tushar',
    duration: 'Aug 2017 – Jun 2021',
    description: [
      'Graduated with a Diploma in Engineering, building a core technical foundation in computing basics, mathematics, and electronics.',
      'Transitioned technical curiosity into software development, initiating a dedicated self-taught coding journey.',
    ],
    technologies: ['Engineering Fundamentals', 'Computing Basics', 'Electronics', 'Logic Design'],
  },
  {
    id: 7,
    role: 'Self-Taught Developer — The Smartphone Journey',
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
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+8801790848236',
    href: 'tel:+8801790848236',
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
    value: 'MNR-Tushar',
    href: 'https://github.com/MNR-Tushar',
    copyable: false,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    copyable: false,
  },
]
