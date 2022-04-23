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
  social: {
    linkedin: 'huntaj',
    twitter: 'austinsketches',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: 'austinjhunt',
    dev: 'austinjhunt',
    website: 'https://austinjhunt.com',
    phone: '',
    email: 'austinsketches@gmail.com',
  },
  skills: [
    'React.js',
    'Tailwind CSS',
    'Node.js',
    'NPM',
    'JavaScript',
    'Django',
    'Python',
    'Bash',
    'PowerShell',
    'MySQL',
    'PHP',
    'HTML 5',
    'CSS, SASS, SCSS',
    'Bootstrap (2-5)',
    'Git, GitHub',
    'GitHub Actions',
    'Docker, DockerHub',
    'Kubernetes',
    'Ansible',
    'AWS EC2',
    'Nagios/NCPA',
    'Icinga 2',
    'nuXmv',
  ],
  artPortfolio: {
    title: 'Recent Portraiture Work',
    limit: 6,
    api: 'https://www.sketchyactivity.com/api/portfolio',
    website: 'https://www.sketchyactivity.com',
    token: '52cdcc726dabfbe7356dc273f2f5a238f6d40c10',
  },
  webPortfolio: {
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
  experiences: [
    {
      company: 'College of Charleston',
      position: 'Digital Communications Developer',
      from: 'February 2022',
      to: 'Present',
    },
    {
      company: 'College of Charleston',
      position: 'Webmaster',
      from: 'December 2019',
      to: 'February 2022',
    },
    {
      company: 'College of Charleston',
      position: 'Temporary Employee - Web Team',
      from: 'May 2019',
      to: 'December 2019',
    },
  ],
  education: [
    {
      institution: 'Vanderbilt University',
      degree: 'Master of Science, Computer Science',
      from: 'May 2021',
      to: 'Present',
    },
    {
      institution: 'College of Charleston Honors College',
      degree: 'Bachelor of Science, Computer Science, Summa Cum Laude',
      from: 'Aug 2015',
      to: 'May 2019',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'austinjhunt',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-J174D8T54K', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
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
};

export default config;
