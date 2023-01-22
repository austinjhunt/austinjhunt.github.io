// gitprofile.config.js

const config = {
  github: {
    username: 'austinjhunt', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['austinjhunt.github.io', 'austinjhunt'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  sketchyactivity: {
    token: '52cdcc726dabfbe7356dc273f2f5a238f6d40c10',
    limit: 6,
  },
  social: {
    linkedin: 'huntaj',
    twitter: 'austinsketches',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: 'austinjhunt',
    devto: '',
    website: 'https://austinjhunt.com',
    art: 'https://www.sketchyactivity.com',
    phone: '',
    email: 'austinsketches@gmail.com',
  },

  techStack: [
    'React.js',
    'Tailwind CSS',
    'Node.js',
    'NPM',
    'JavaScript',
    'Django',
    'Flask',
    'Python',
    'Bash',
    'PowerShell',
    'Microsoft Graph API',
    'SharePoint',
    'Microsoft Power Platform',
    'MySQL',
    'PHP',
    'HTML 5',
    'CSS, SASS, SCSS',
    'Bootstrap',
    'Git, GitHub',
    'GitHub Actions',
    'Linux',
    'Windows',
    'MacOS',
    'Docker, DockerHub',
    'Kubernetes',
    'Ansible',
    'AWS EC2',
    'Nagios/NCPA',
    'Icinga 2',
    'nuXmv',
    'Google Colaboratory',
  ],

  skills: {
    'Currently Learning': [
      'React',
      'Ellucian Ethos Integration API',
      'GraphQL',
      'Insomnia',
      'Qualtrics SSO Config',
    ],

    Soft: [
      'Training/Demos',
      'Resourcefulness',
      'Problem solving',
      'Multitasking',
      'Time management',
      'Customer service',
      'Written communication',
      'Verbal communication',
      'Organization',
    ],
    Hard: [
      'Machine learning',
      'Metaprogramming',
      'Metamodeling',
      'Domain-specific modeling languages (DSMLs)',
      'Software architecture modeling',
      'Universal Modeling Language',
      'Software documentation',
      'Front-end web development',
      'Back-end web development',
      'Full stack web development',
      'Systems integration',
      'Troubleshooting/problem-solving',
      'Quantum programming (qiskit)',
      'Automated verification / Formal verification / symbolic model checking (nuXmv)',
    ],
  },
  web_portfolio: {
    title:
      'Personal Web Portfolio (excluding many web projects for College of Charleston)',
    limit: 5,
    items: [
      {
        name: 'Greenville County SC Sortable & Searchable Tax Sale List',
        url: 'https://greenville-sc-tax-sales.herokuapp.com/',
        description:
          "This lightweight app makes the Greenville County Tax Sale list found at http://www.greenvillecounty.org/appsas400/taxsale/ searchable and sortable to help you find the sales that match your preferences. It's the same data, scraped from that webpage, but presented with more options. The original list unfortunately does not offer the ability to sort by the amount due, for example; with this app, you can quickly find the sales that are cheapest.",
        github_repo_url:
          'https://github.com/austinjhunt/greenville-sc-tax-sales',
        tech: [
          'React',
          'Fetch API',
          'Flask',
          'Heroku',
          'Git/GitHub',
          'Tailwind CSS',
        ],
        image: '/img/web_portfolio/gvl-tax-sales.png',
      },
      {
        name: 'arXiva',
        url: 'https://arxiva.org',
        description:
          'A free research tool turning arXiv into something much more social, interactive, searchable, and personalized, leveraging multiple cloud resources for high performance and scalability. Built in collaboration with John D. Cobb (https://johndcobb.github.io/)',
        github_repo_url: 'https://github.com/johndcobb/arxiva',
        tech: [
          'ElasticSearch',
          'AWS Lightsail',
          'Django',
          'cron',
          'Git/GitHub',
          'Docker',
          'AWS Lambda',
          'AWS Eventbridge',
          'Jenkins',
        ],
        image: '/img/web_portfolio/arxiva.png',
      },
      {
        name: 'sketchyactivity',
        url: 'https://www.sketchyactivity.com',
        description:
          'Personal portraiture portfolio, built with Django, deployed on Heroku, integrated with Slack for pageview notifications and with AWS S3 for image file storage',
        github_repo_url: 'https://github.com/austinjhunt/sketchyactivity',
        tech: [
          'Django',
          'Git/Github',
          'Heroku',
          'AWS S3',
          'Slack webhooks',
          'Google Analytics',
          'JS',
          'HTML',
          'Bootstrap',
          'CSS',
        ],
        image: '/img/web_portfolio/sketchyactivity.png',
      },
      {
        name: 'PolyDoc - simultaneously manage many documents',
        url: 'https://polydoc.herokuapp.com',
        description:
          'Web app built for Vanderbilt Univ. CS 5279 project for simultaneously viewing and managing many documents at one time; includes a Google Drive integration; designed primarily for teachers who use Google for assignments',
        github_repo_url: 'https://github.com/austinjhunt/polydoc',
        tech: [
          'Django',
          'Git/Github',
          'GitHub Actions (with Django test framework)',
          'Heroku',
          'Google Cloud Platform',
          'JS',
          'HTML',
          'Bootstrap',
          'CSS, SASS, SCSS',
          'Google Drive API',
          'PDF2Image',
        ],
        image: '/img/web_portfolio/polydoc.png',
      },
    ],
  },

  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },

  experiences: [
    {
      company: 'College of Charleston',
      position: 'Digital Communications Developer',
      from: 'February 2022',
      to: 'Present',
      companyLink: 'https://cofc.edu',
    },
    {
      company: 'College of Charleston',
      position: 'Webmaster',
      from: 'December 2019',
      to: 'February 2022',
      companyLink: 'https://cofc.edu',
    },
    {
      company: 'College of Charleston',
      position: 'Temporary Employee - Web Team',
      from: 'May 2019',
      to: 'December 2019',
      companyLink: 'https://cofc.edu',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Vanderbilt University',
      degree: 'Master of Science, Computer Science',
      from: 'May 2021',
      to: 'December 2022',
      gpa: '4.0',
    },
    {
      institution: 'College of Charleston Honors College',
      degree: 'Bachelor of Science, Computer Science, Summa Cum Laude',
      from: 'Aug 2015',
      to: 'May 2019',
      gpa: '3.96',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Go365 Migrator',
      description:
        'A free research tool turning arXiv into something much more social, interactive, searchable, and personalized, leveraging multiple cloud resources for high performance and scalability. Built in collaboration with John D. Cobb (https://johndcobb.github.io/)',
      imageUrl: '/img/web_portfolio/go365.png',
      link: 'https://www.youtube.com/watch?v=-CzWWTQKGDY',
      tech: [
        'Django',
        'Python',
        'Microsoft Authentication Library (MSAL)',
        'Azure AD',
        'Google OAuth',
        'OpenID Connect',
        'AWS',
        'Git/GitHub',
        'GitHub Actions',
        'Linode',
        'Multithreading (concurrent.futures)',
        'Google Drive API v3',
        'SharePoint App-Only Authentication',
        'MS Graph API',
      ],
    },

    {
      title: 'arXiva',
      description:
        'A free research tool turning arXiv into something much more social, interactive, searchable, and personalized, leveraging multiple cloud resources for high performance and scalability. Built in collaboration with John D. Cobb (https://johndcobb.github.io/)',
      imageUrl: '/img/web_portfolio/arxiva.png',
      link: 'https://arxiva.org',
      tech: [
        'ElasticSearch',
        'AWS Lightsail',
        'Django',
        'cron',
        'Git/GitHub',
        'Docker',
        'AWS Lambda',
        'AWS Eventbridge',
        'Jenkins',
      ],
    },
    {
      title: 'sketchyactivity.com',
      description:
        'Personal portraiture portfolio, built with Django, deployed with Docker, GitHub Actions, and Linode, and integrated with Slack and AWS S3 for pageview notifications and image file storage',
      imageUrl: '/img/web_portfolio/sketchyactivity.png',
      link: 'https://sketchyactivity.com',
      tech: [
        'Django',
        'Git/Github',
        'Heroku',
        'AWS S3',
        'Slack webhooks',
        'Google Analytics',
        'JS',
        'HTML',
        'Bootstrap',
        'CSS',
      ],
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: 'medium', // medium | dev.to
    username: 'austinjhunt',
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-J174D8T54K', // Please remove this and use your own tag id or keep it empty
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with pure, unadulterated rage against the machine ❤️`,
};

export default config;
