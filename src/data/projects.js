/**
 * CURATED PROJECTS — the single source of truth for the Work section.
 *
 * Unlike the old site, this does NOT read from the public GitHub API. That means
 * you control exactly what shows, in what order, and you can showcase PRIVATE /
 * closed-source work (client apps, employer projects, products) that never
 * appears on your GitHub profile.
 *
 * Schema:
 *   name        (string)   Display name.
 *   tagline     (string)   One-line hook shown under the title.
 *   description (string)   1–3 sentences of detail.
 *   category    (string)   Used for the filter chips. Keep to the set in CATEGORIES below.
 *   year        (string)   Year or range, e.g. "2024" or "2023 – present".
 *   status      (string)   e.g. "Live", "In production", "Research", "Archived".
 *   visibility  ('public' | 'private')
 *                          'private' → hides source link, shows a lock badge.
 *   featured    (boolean)  Featured projects render first, larger.
 *   tech        (string[]) Stack chips (a curated few reads better than 30).
 *   highlights  (string[]) Optional impact bullets.
 *   links       (object)   Any of: live, github, video, caseStudy, doc. Omit what you lack.
 *   image       (string)   Optional path under /public.
 *   stars       (number)   Optional GitHub stars, for public repos worth flexing.
 *
 * TO ADD A PRIVATE PROJECT: copy an entry, set visibility: 'private', drop the
 * github link (keep `live` only if there's a public product URL), and you're done.
 */

export const CATEGORIES = [
  'All',
  'AI / ML',
  'Product',
  'Automation',
  'Cloud / Infra',
  'Web',
  'Research',
];

export const projects = [
  // ——— Private / closed-source work (your most impressive, least public) ———
  {
    name: 'Enterprise Cloud Infrastructure',
    tagline: 'Reliability & tooling for Splunk Cloud at scale',
    description:
      'Software engineering on Splunk’s enterprise cloud infrastructure team — building and operating the systems that keep large-scale customer environments healthy. Details are internal; the impact is production-grade reliability.',
    category: 'Cloud / Infra',
    year: '2025 – present',
    status: 'In production',
    visibility: 'private',
    featured: true,
    tech: ['Cloud', 'Distributed Systems', 'Automation', 'Observability'],
    highlights: [
      'Enterprise-scale, customer-facing cloud infrastructure',
      'Focus on reliability, automation, and least-privilege security',
    ],
    links: { live: 'https://splunk.com' },
  },
  {
    name: 'Snap-n-Sell',
    tagline: 'Snap a photo → an AI-written marketplace listing',
    description:
      'Subscription mobile app that turns a product photo into a ready-to-post resale listing using AI. Includes Stripe subscriptions, account lifecycle (deletion, data controls), and a privacy-first data model.',
    category: 'Product',
    year: '2025',
    status: 'Live',
    visibility: 'private',
    featured: true,
    tech: ['AI / Vision', 'Mobile', 'Stripe', 'Subscriptions'],
    highlights: [
      'Photo-to-listing generation with a defined JSON schema',
      'Full subscription + privacy/account-deletion flows',
    ],
    links: { live: '/snap-n-sell/' },
  },
  {
    name: 'NovaBrains',
    tagline: 'AI-native digital textbook platform, live at UNCC',
    description:
      'Digital textbook platform in active use by students and instructors at UNC Charlotte. AI-assisted authoring for instructors (quiz + content generation) and AI-driven learning tools for students (chat, personalized feedback, code analysis). Built with Dr. Ayman Hajja.',
    category: 'AI / ML',
    year: '2023 – present',
    status: 'Live',
    visibility: 'private',
    featured: true,
    tech: ['Django', 'React', 'AWS', 'Postgres', 'OpenAI API'],
    highlights: [
      'In production with real students & instructors at UNCC',
      'RAG + LLM tooling across authoring and learning',
    ],
    links: { live: 'https://novabrains.ai' },
    image: '/img/projects/novabrains.png',
  },
  {
    name: 'StudyRocket',
    tagline: 'Generate an AI quiz about anything, instantly',
    description:
      'Stripe-integrated web service that generates on-the-fly, AI-backed quizzes from uploaded files, Wikipedia articles, or any topic — built to help people truly understand what interests them, beyond memorization.',
    category: 'AI / ML',
    year: '2024',
    status: 'Live',
    visibility: 'private',
    featured: true,
    tech: ['Django', 'React', 'AWS', 'Stripe', 'OpenAI API'],
    links: { live: 'https://studyrocket.ai' },
    image: '/img/projects/studyrocket.png',
  },

  // ——— Public / open-source ———
  {
    name: 'msci_esg',
    tagline: 'Python package for scraping MSCI ESG ratings',
    description:
      'A Selenium-powered Python package that extracts data from the MSCI.com ESG Ratings Corporate Search Tool. My most-starred open-source project.',
    category: 'Automation',
    year: '2024',
    status: 'Maintained',
    visibility: 'public',
    featured: true,
    stars: 29,
    tech: ['Python', 'Selenium', 'PyPI'],
    links: { github: 'https://github.com/austinjhunt/msci_esg' },
  },
  {
    name: 'Petri Net WebGME Design Studio',
    tagline: 'Model & simulate distributed systems as Petri nets',
    description:
      'A custom WebGME design studio for modeling and simulating distributed systems as Petri (place/transition) nets, built with JointJS and Node.js.',
    category: 'Research',
    year: '2024',
    status: 'Open source',
    visibility: 'public',
    featured: false,
    stars: 5,
    tech: ['JavaScript', 'WebGME', 'JointJS', 'Node.js'],
    links: { github: 'https://github.com/austinjhunt/petrinet-webgme-designstudio' },
  },
  {
    name: 'arXiva',
    tagline: 'A social, searchable, personalized layer over arXiv',
    description:
      'A free research tool that turns arXiv into something social, interactive, and personalized — leveraging ElasticSearch and multiple cloud resources for scale. Built with John D. Cobb.',
    category: 'AI / ML',
    year: '2023',
    status: 'Archived',
    visibility: 'public',
    featured: false,
    tech: ['Django', 'ElasticSearch', 'AWS Lightsail', 'Docker'],
    links: { live: 'https://arxiva.org', github: 'https://github.com/johndcobb/arxiva' },
    image: '/img/projects/arxiva.png',
  },
  {
    name: 'py-cascade-cms',
    tagline: 'Python driver for the Cascade CMS 8 REST API',
    description:
      'A Python module for enterprise-scale content management against the Cascade CMS 8 REST API (Hannon Hill) — used to automate content operations across a large higher-ed web presence.',
    category: 'Automation',
    year: '2024',
    status: 'Maintained',
    visibility: 'public',
    featured: false,
    stars: 3,
    tech: ['Python', 'REST'],
    links: { github: 'https://github.com/austinjhunt/py-cascade-cms' },
  },
  {
    name: 'Go365 Migrator',
    tagline: 'Enterprise Google Drive → SharePoint migration',
    description:
      'A multithreaded, configurable migration assistant that moves files out of Google Drive into SharePoint. Built for College of Charleston’s enterprise migration after Google enforced new storage quotas.',
    category: 'Automation',
    year: '2022',
    status: 'Delivered',
    visibility: 'public',
    featured: false,
    tech: ['Django', 'MS Graph API', 'Azure AD', 'Google Drive API'],
    links: {
      github: 'https://github.com/austinjhunt/go365-migrator',
      video: 'https://www.youtube.com/watch?v=-CzWWTQKGDY',
    },
    image: '/img/projects/go365.png',
  },
  {
    name: 'Spring Boot × Ellucian Ethos',
    tagline: 'Modernizing ERP integration off legacy ASP.NET',
    description:
      'A Java Spring Boot application using the Ellucian Ethos Java SDK to read from and write to the Banner ERP system — a migration away from a legacy, out-of-support ASP.NET integration.',
    category: 'Cloud / Infra',
    year: '2025',
    status: 'Open source',
    visibility: 'public',
    featured: false,
    tech: ['Java', 'Spring Boot', 'Ellucian Ethos', 'Banner ERP'],
    links: { github: 'https://github.com/austinjhunt/spring-boot-ellucian-ethos' },
  },
  {
    name: 'jerrywestonmize.com',
    tagline: 'Git-managed WordPress for a freelance client',
    description:
      'A highly customized WordPress site for a freelance musician & music teacher, with custom plugins and content managed through Git for safe, reviewable deploys.',
    category: 'Web',
    year: '2023 – present',
    status: 'Live',
    visibility: 'public',
    featured: false,
    tech: ['WordPress', 'PHP', 'Git'],
    links: { live: 'https://jerrywestonmize.com', github: 'https://github.com/austinjhunt/jerrywestonmize' },
  },
];

// Selected academic / research writing worth surfacing separately from software.
export const research = [
  {
    name: 'Analyzing CRYSTALS-Dilithium',
    tagline: 'A quantum-resistant, lattice-based signature scheme',
    description:
      'A contextual analysis of CRYSTALS-Dilithium, one of NIST’s first selected post-quantum digital-signature algorithms — covering its lattice-based security, key compression, and design tradeoffs.',
    link: '/docs/vanderbilt/crystals-dilithium.pdf',
  },
  {
    name: 'Couchbase Tail-Latency Analysis',
    tagline: 'Multi-phase benchmarking with automation + YCSB',
    description:
      'A two-phase tail-latency analysis of Couchbase Server using a custom automated testing framework and the Yahoo! Cloud Serving Benchmark, across dataset sizes, request distributions, and cluster architectures.',
    link: '/docs/vanderbilt/couchbase-5287.pdf',
  },
  {
    name: 'Threat Modeling My Online Identity',
    tagline: 'A CIA-triad model of a personal attack surface',
    description:
      'Using the confidentiality/integrity/availability methodology to model threats across personal sites, e-commerce, social, email, and payment-linked accounts — and the controls that mitigate them.',
    link: '/docs/vanderbilt/threatmodel-online-identity.pdf',
  },
];
