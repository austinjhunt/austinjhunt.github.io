// gitprofile.config.js

const config = {
  github: {
    username: "austinjhunt", // Your GitHub org/user name. (Required)
    sortBy: "updated", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["austinjhunt.github.io", "austinjhunt"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  freelanceServices: [
    {
      title: "LLM integrations & RAG Pipelines",
      summary:
        "AI integrations for applications, and architecting Retrieval Augmented Generation (RAG) pipelines for AI-driven chat bots, search services, content summarization, etc.",
    },
    {
      title: "Frontend Web Development",
      summary:
        "Building, troubleshooting, or optimizing an existing frontend web app across React, Django, PHP, HTML/JS/CSS, TypeScript, Sass. I've learned from many mistakes and am familiar with common pitfalls in front end development. Priority on accessibility, performance, and responsiveness.",
    },
    {
      title: "Backend Web Development",
      summary:
        "Building, troubleshooting, or optimizing a backend application. Assistance with NodeJS, Express, Flask, PHP/LAMP, Django/DRF, relational and non-relational database integrations.",
    },
    {
      title: "Cloud Platform Support",
      summary:
        "Support for building services in or migrating services to your cloud environment (AWS, Azure, GCP) with a focus on least privilege access control, cost minimization, scalability, and CI/CD dev ops pipelines. ",
    },
    {
      title: "WordPress Plugin / Theme Development",
      summary:
        "Development of new WordPress plugins to meet business needs or WordPress themes that align your site with an existing design system.",
    },
  ],
  social: {
    art: "https://sketchyactivity.com",
    linkedin: "huntaj",
    twitter: "austinsketches",
    youtube: "",
    facebook: "",
    dribbble: "",
    behance: "",
    medium: "austinjhunt",
    instagram: "sketchyactivity",
    devto: "",
    upwork: "https://www.upwork.com/freelancers/~0140398129a6bb7f8d",
    website: "",
    phone: "",
    email: "austincodescleanly@gmail.com",
  },
  testimonials: [
    {
      date: "September 2024",
      client: "Luke, Freelance Client on Upwork",
      projectLink: "https://www.upwork.com/freelancers/~0140398129a6bb7f8d",
      category: "Technical troubleshooting and consulting",
      projectDescription:
        "Aiding in the troubleshooting and development of containerized hosting of a Vue & Laravel web application for a UK client",
      testimonial:
        "Austin was incredibly helpful and patient when working with me. He guided me through any issues I had and was very reliable to work with.",
    },,
    {
      date: "December 2023",
      client: "J. Weston Mize",
      projectLink: "https://jerrywestonmize.com",
      category: "Solving business problems with agile web dev",
      projectDescription:
        "Highly customized WordPress website for J. Weston Mize, a talented freelance musician and music teacher in Charlotte, NC.",
      testimonial:
        "Austin is incredibly knowledgeable, organized, and thorough. As a freelance musician, I don't have the time or bandwidth to fully dive into custom web development. Austin was there for me and provided all the technical support that I needed for building a website. He provided custom code including several plugins to serve the specific needs of my business. The site is changing my music lesson business from here on out for the better and I couldn't be happier with how it looks and functions. I can't recommend him enough!",
    },
    {
      date: "April 2023",
      client: "Anonymous (CofC Cistern Standard Employee Recognition)",
      projectLink: null,
      category: "Top notch technical support and training",
      projectDescription: null,
      testimonial:
        "When you ask Austin Hunt for help, he jumps right in. While he has created multiple tools for employees so they can easily maneuver through the various IT programs on campus, he is always willing to hop on a call to walk people through the process. I liken Austin to a famous rock star; he graciously and willingly plays the same song over and over again for his adoring audience.",
    },
    {
      date: "October 2022",
      client: "Anonymous (CofC Cistern Standard Employee Recognition)",
      projectLink: null,
      projectDescription: "Meeting with and assisting web content managers in building sites with Cascade CMS",
      category: "Solving technical problems with innovative solutions",
      testimonial:
        "Austin is an asset to the College! He should be recognized for our core value of innovation for the way he continuously problem solves with the college's many Cascade CMS users who have varying degrees of comfortability in a system that has many constraints. Cascade requires a lot of creative solutions and Austin is full of them and is super helpful.",
    },
    {
      date: "September 2022",
      client: "Ashley Pagnotta (CofC Cistern Standard Employee Recognition)",
      projectLink: "https://github.com/austinjhunt/go365-migrator",
      projectDescription:
        "Automated data migration from Google Drive to SharePoint following price changes for higher ed customers",
      category: "Automating time-consuming business processes",
      testimonial:
        "Because of some changes Google made to the pricing of their education offerings, we had to transition from having unlimited Google Drive storage to a fairly small, limited amount. I had a LOT of stuff in my Google Drive, both teaching and research related, and I tried a few different ways to move it over to OneDrive with very little success. After posting about my frustrations on Yammer, Austin jumped in and let me know he had built a migration tool that we could use. He got me all set up, and of course my ridiculously large amount of data broke the tool multiple times, but he kept working at it until he was able to get everything migrated from Google Drive to OneDrive. I'm sure it was a huge pain on his end, but I really appreciated it!",
    },
  ],
  technology: [
    {
      name: "AWS EC2",
      tags: ["web", "front end", "back end", "full stack", "virtual machine", "ansible", "automation", "cloud"],
    },
    {
      name: "Ansible",
      tags: [
        "automation",
        "distributed",
        "system",
        "infrastructure",
        "infrastructure as code",
        "iac",
        "playbook",
        "roles",
        "configuration",
      ],
    },
    {
      name: "Azure Active Directory",
      tags: [
        "identity and access",
        "iam",
        "app registrations",
        "single sign on",
        "Graph API",
        "cloud",
        "API",
        "security",
        "auditing",
      ],
    },
    {
      name: "Bash",
      tags: ["programming", "scripting", "automation"],
    },
    {
      name: "Bootstrap",
      tags: [
        "web",
        "front end",
        "accessibility",
        "mobile responsive",
        "UI/UX",
        "smashing conference",
        "front end framework",
        "scaffolding",
        "grid",
      ],
    },
    {
      name: "CSS, SASS, SCSS",
      tags: ["web", "front end", "accessibility", "mobile responsive", "UI/UX", "smashing conference"],
    },
    {
      name: "Django",
      tags: [
        "web",
        "front end",
        "back end",
        "full stack",
        "programming",
        "API",
        "REST",
        "Python",
        "docker",
        "application",
      ],
    },
    {
      name: "Docker, DockerHub, Docker Compose",
      tags: [
        "web",
        "front end",
        "back end",
        "full stack",
        "programming",
        "continuous",
        "integration",
        "deployment",
        "container",
        "fast",
        "ship",
        "microservices",
        "virtualization",
        "cloud",
        "security",
      ],
    },
    {
      name: "Ellucian Ethos Integration",
      tags: [
        "data",
        "erp",
        "enterprise resource planning",
        "graphql",
        "information flow",
        "api",
        "education",
        "uniform",
        "data model",
        "training",
        "integration",
        "simplify",
      ],
    },
    {
      name: "Flask",
      tags: ["web", "front end", "back end", "full stack", "programming", "API", "REST", "integration", "Python"],
    },
    {
      name: "GeoJSON",
      tags: ["map", "development", "locations", "json", "geography"],
    },
    {
      name: "Git, GitHub",
      tags: [
        "develop",
        "community",
        "open source",
        "FOSS",
        "contribute",
        "web",
        "software",
        "engineering",
        "commit",
        "automation",
        "workflow",
        "version control",
        "programming",
        "cloud",
      ],
    },
    {
      name: "GitHub Actions",
      tags: [
        "software",
        "engineering",
        "commit",
        "automation",
        "workflow",
        "version control",
        "programming",
        "develop",
        "open source",
        "cloud",
      ],
    },
    {
      name: "Google Analytics",
      tags: ["data", "analytics", "leads", "pipeline", "traffic", "audience", "bounce", "acquisition", "patterns"],
    },
    {
      name: "Google Colaboratory",
      tags: [
        "cloud",
        "notebook",
        "story",
        "documentation",
        "machine learning",
        "explain",
        "python",
        "deep learning",
        "model",
        "google",
        "ipynb",
      ],
    },
    {
      name: "GraphQL",
      tags: ["data", "query language", "efficiency", "speed", "performance"],
    },
    {
      name: "HTML 5",
      tags: ["web", "front end", "UI/UX", "semantic", "accessibility", "mobile responsive", "smashing conference"],
    },
    {
      name: "Icinga 2",
      tags: [
        "grafana",
        "time series",
        "network",
        "netbox",
        "api",
        "hierarchy",
        "zones",
        "influxdb",
        "mysql",
        "teams",
        "integration",
        "email",
        "slack",
        "infrastructure",
        "automation",
        "director",
        "monitoring",
        "alerting",
        "configuration",
        "rhel",
        "red hat enterprise linux",
        "windows",
        "ubuntu",
        "open source",
        "centos",
        "distributed systems",
      ],
    },
    {
      name: "Insomnia",
      tags: ["testing", "api", "rest", "monitoring", "graphql"],
    },
    {
      name: "JavaScript",
      tags: ["web", "front end", "back end", "full stack", "programming"],
    },
    {
      name: "Kubernetes",
      tags: ["web", "front end", "back end", "full stack", "programming"],
    },
    {
      name: "Leaflet.js",
      tags: [
        "map",
        "javascript",
        "development",
        "locations",
        "online",
        "application",
        "custom",
        "geography",
        "open source",
      ],
    },
    {
      name: "Linux",
      tags: [
        "command line",
        "patching",
        "OS",
        "operating system",
        "security",
        "SSH",
        "ubuntu",
        "jammy",
        "jelly fish",
        "linode",
        "aws",
        "ufw",
        "firewall",
      ],
    },
    {
      name: "MacOS",
      tags: ["apple", "operating system", "personal computer"],
    },
    {
      name: "MapBox",
      tags: ["map", "development", "locations", "online", "application", "custom", "cloud", "geography"],
    },
    {
      name: "Matomo",
      tags: [
        "data",
        "analytics",
        "leads",
        "pipeline",
        "traffic",
        "audience",
        "bounce",
        "acquisition",
        "patterns",
        "open source",
      ],
    },
    {
      name: "Microsoft Graph API",
      tags: [
        "web",
        "front end",
        "back end",
        "full stack",
        "programming",
        "API",
        "microsoft",
        "scripting",
        "automation",
        "personalization",
        "surfacing data",
        "cloud",
      ],
    },
    {
      name: "Microsoft Power Platform",
      tags: ["web", "automation", "surfacing data", "programming", "convenience", "business process", "cloud"],
    },
    {
      name: "MySQL",
      tags: [
        "web",
        "back end",
        "full stack",
        "programming",
        "database",
        "relational database",
        "django",
        "lamp",
        "application",
      ],
    },
    {
      name: "Nagios/NCPA",
      tags: [
        "infrastructure",
        "grafana",
        "time series",
        "network",
        "netbox",
        "api",
        "hierarchy",
        "zones",
        "influxdb",
        "mysql",
        "teams",
        "integration",
        "email",
        "slack",
        "automation",
        "director",
        "monitoring",
        "alerting",
        "configuration",
        "rhel",
        "red hat enterprise linux",
        "windows",
        "ubuntu",
        "open source",
        "centos",
      ],
    },
    {
      name: "Node.js, NPM",
      tags: ["web", "front end", "back end", "full stack", "programming"],
    },
    {
      name: "PHP",
      tags: ["web", "front end", "back end", "full stack", "programming", "lamp"],
    },
    {
      name: "PowerShell",
      tags: ["programming", "scripting", "automation", "windows"],
    },
    {
      name: "Postman",
      tags: ["testing", "api", "rest", "monitoring"],
    },
    {
      name: "Python",
      tags: [
        "web",
        "front end",
        "back end",
        "full stack",
        "programming",
        "API",
        "clean code",
        "scripting",
        "software engineering",
        "automation",
      ],
    },
    {
      name: "Qualtrics",
      tags: [
        "single sign on",
        "survey",
        "enterprise",
        "election",
        "system",
        "application",
        "xm",
        "experience management",
        "business process",
      ],
    },
    {
      name: "React.js",
      tags: ["web", "front end", "programming"],
    },
    {
      name: "SharePoint",
      tags: ["web", "powershell", "python", "automation", "intranet", "training", "teaching", "cloud"],
    },
    {
      name: "Tailwind CSS",
      tags: ["web", "design", "front end"],
    },
    {
      name: "Windows",
      tags: ["workplace", "enterprise", "OS", "operating system", "microsoft", "work computer"],
    },
    {
      name: "nuXmv",
      tags: [
        "formal verification",
        "symbolic model checking",
        "icinga 2",
        "automated verification",
        "pipeline",
        "vanderbilt",
      ],
    },
    {
      name: "webGME",
      tags: [
        "modeling",
        "software modeling",
        "metamodeling",
        "domain specific modeling language",
        "vanderbilt",
        "modeling environment",
      ],
    },
  ],
  skills: {
    "Currently Learning": [
      "Kubernetes",
      "AWS Certified Solutions Architect - Udemy",
      "Ellucian Ethos Integration API",
      "how to be cool",
    ],

    Soft: [
      "Training/Demos",
      "Resourcefulness",
      "Problem solving",
      "Multitasking",
      "Time management",
      "Customer service",
      "Written communication",
      "Verbal communication",
      "Organization",
    ],
    Hard: [
      "Machine learning",
      "Metaprogramming",
      "Metamodeling",
      "Domain-specific modeling languages (DSMLs)",
      "Software architecture modeling",
      "Universal Modeling Language",
      "Software documentation",
      "Front-end web development",
      "Back-end web development",
      "Full stack web development",
      "Systems integration",
      "Troubleshooting/problem-solving",
      "Quantum programming (qiskit)",
      "Automated verification / Formal verification / symbolic model checking (nuXmv)",
    ],
  },
  web_portfolio: {
    title: "Personal Web Portfolio (excluding many web projects for College of Charleston)",
    limit: 5,
    items: [
      {
        name: "Greenville County SC Sortable & Searchable Tax Sale List",
        url: "https://greenville-sc-tax-sales.herokuapp.com/",
        description:
          "This lightweight app makes the Greenville County Tax Sale list found at http://www.greenvillecounty.org/appsas400/taxsale/ searchable and sortable to help you find the sales that match your preferences. It's the same data, scraped from that webpage, but presented with more options. The original list unfortunately does not offer the ability to sort by the amount due, for example; with this app, you can quickly find the sales that are cheapest.",
        github_repo_url: "https://github.com/austinjhunt/greenville-sc-tax-sales",
        tech: ["React", "Fetch API", "Flask", "Heroku", "Git/GitHub", "Tailwind CSS"],
        image: "/img/projects/gvl-tax-sales.png",
      },
      {
        name: "arXiva",
        url: "https://arxiva.org",
        description:
          "A free research tool turning arXiv into something much more social, interactive, searchable, and personalized, leveraging multiple cloud resources for high performance and scalability. Built in collaboration with John D. Cobb (https://johndcobb.github.io/)",
        github_repo_url: "https://github.com/johndcobb/arxiva",
        tech: [
          "ElasticSearch",
          "AWS Lightsail",
          "Django",
          "cron",
          "Git/GitHub",
          "Docker",
          "AWS Lambda",
          "AWS Eventbridge",
          "Jenkins",
        ],
        image: "/img/projects/arxiva.png",
      },
      {
        name: "sketchyactivity",
        url: "https://www.sketchyactivity.com",
        description:
          "Personal portraiture portfolio, built with Django, deployed on Heroku, integrated with Slack for pageview notifications and with AWS S3 for image file storage",
        github_repo_url: "https://github.com/austinjhunt/sketchyactivity",
        tech: [
          "Django",
          "Git/Github",
          "Heroku",
          "AWS S3",
          "Slack webhooks",
          "Google Analytics",
          "JS",
          "HTML",
          "Bootstrap",
          "CSS",
        ],
        image: "/img/projects/sketchyactivity.png",
      },
      {
        name: "PolyDoc - simultaneously manage many documents",
        url: "https://polydoc.herokuapp.com",
        description:
          "Web app built for Vanderbilt Univ. CS 5279 project for simultaneously viewing and managing many documents at one time; includes a Google Drive integration; designed primarily for teachers who use Google for assignments",
        github_repo_url: "https://github.com/austinjhunt/polydoc",
        tech: [
          "Django",
          "Git/Github",
          "GitHub Actions (with Django test framework)",
          "Heroku",
          "Google Cloud Platform",
          "JS",
          "HTML",
          "Bootstrap",
          "CSS, SASS, SCSS",
          "Google Drive API",
          "PDF2Image",
        ],
        image: "/img/projects/polydoc.png",
      },
    ],
  },

  resume: {
    fileUrl: "/docs/ajh2025resume.pdf", // Empty fileUrl will hide the `Download Resume` button.
  },
  degree: {
    portfolioFileUrl: "/docs/vanderbilt/ms-portfolio.pdf",
    name: "M.S. C.S.",
    degreeFileUrl: "/docs/vanderbilt/ms-cs-degree.pdf",
    school: "",
  },
  experiences: [
      {
      company: "Splunk",
      position: "Software Engineer (Enterprise Cloud Infrastructure)",
      from: "June 2025",
      to: "Present",
      companyLink: "https://splunk.com",
    },
    {
      company: "College of Charleston",
      position: "Digital Communications Developer",
      from: "February 2022",
      to: "June 2025",
      companyLink: "https://charleston.edu",
    },
    {
      company: "College of Charleston",
      position: "Webmaster",
      from: "December 2019",
      to: "February 2022",
      companyLink: "https://charleston.edu",
    },
    {
      company: "College of Charleston",
      position: "Temporary Employee - Web Team",
      from: "May 2019",
      to: "December 2019",
      companyLink: "https://charleston.edu",
    },
    {
      company: "College of Charleston",
      position: "Student Network Engineer",
      from: "October 2017",
      to: "May 2019",
      companyLink: "https://charleston.edu",
    },
    {
      company: "Upwork",
      position: "Freelance Development",
      from: "June 2023",
      to: "Present",
      companyLink: "https://upwork.com",
    },
    {
      company: "Austin Hunt Portraiture",
      position: "Freelance Artist",
      from: "circa 2015",
      to: "Present",
      companyLink: "https://sketchyactivity.com",
    },
  ],
  certifications: [
    {
      name: "CKA - Certified Kubernetes Administrator",
      body: "",
      year: "Nov 2024",
      link: "/docs/certs/cka-nov-2024.pdf",
    },
    {
      name: "DCA - Docker Certified Associate",
      body: "",
      year: "January 2021",
      link: "/docs/certs/dca.pdf",
    },
    {
      name: "PCAP - Certified Associate in Python Programming",
      body: "",
      year: "May 2020",
      link: "/docs/certs/pcap.pdf",
    },
    {
      name: "PCEP - Certified Entry-Level Python Programmer",
      body: "",
      year: "May 2020",
      link: "/docs/certs/pcep.pdf",
    },
  ],
  education: [
    {
      institution: "Vanderbilt University School of Engineering",
      degree: "Master of Science, Computer Science",
      from: "May 2021",
      to: "December 2022",
      gpa: "4.0",
    },
    {
      institution: "College of Charleston Honors College",
      degree: "Bachelor of Science, Computer Science, Summa Cum Laude",
      from: "Aug 2015",
      to: "May 2019",
      gpa: "3.96",
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: "novabrains.ai (startup) - est. Sept 2023",
      description:
        "Digital textbook platform in active use by students and instructors at UNCC. Offers AI-assisted administrative tools for instructors (quiz generation, content generation) and AI-driven learning tools (chat, personalized feedback, code analysis) for students. Working in collaboration with Dr. Ayman Hajja.",
      imageUrl: "/img/projects/novabrains.png",
      link: "https://novabrains.ai",
      tech: [
        "Django",
        "Django REST Framework",
        "Python",
        "React",
        "AWS Elastic Beanstalk",
        "AWS RDS",
        "AWS R53",
        "AWS Lambda",
        "AWS S3",
        "AWS SAM",
        "AWS Cloudwatch + Watchtower",
        "AWS IAM (least priv)",
        "AWS Systems Manager Parameter Store (to bypass EBS limit)",
        "Django Testing with unittest",
        "Git/GitHub",
        "GitHub Actions",
        "Postgres",
        "Swagger",
        "ChatGPT Completions API",
        "ChatGPT Embeddings",
        "AWS Lambda",
        "AWS API Gateway",
        "Material UI",
        "Jira",
        "Slack with Webhooks for DevOps",
        "DevOps tooling, troubleshooting",
        "Network troubleshooting",
      ],
    },
    {
      title: "studyrocket.ai (startup) - est. June 2024",
      description:
        "Stripe-integrated web service allowing subscribers to easily, quickly generate on-the-fly AI-backed quizzes about anything they want (with GPT Completions API), from uploaded files, to Wikipedia Articles, to any random topic of their choice. Mission: help visitors master and understand what interests them, beyond simple memorization.",
      imageUrl: "/img/projects/studyrocket.png",
      link: "https://studyrocket.ai",
      tech: [
        "Django",
        "Django REST Framework",
        "Python",
        "React",
        "AWS Elastic Beanstalk",
        "AWS RDS",
        "AWS R53",
        "AWS Lambda",
        "AWS S3",
        "AWS SAM",
        "AWS Cloudwatch + Watchtower",
        "AWS IAM (least priv)",
        "AWS Systems Manager Parameter Store (to bypass EBS limit)",
        "Django Testing with unittest",
        "Git/GitHub",
        "GitHub Actions",
        "Postgres",
        "Swagger",
        "ChatGPT Completions API",
        "ChatGPT Embeddings",
        "AWS Lambda",
        "AWS API Gateway",
        "Material UI",
        "Jira",
        "Slack with Webhooks for DevOps",
        "DevOps tooling, troubleshooting",
        "Network troubleshooting",
      ],
    },
    {
      title: "Go365 Migrator",
      description:
        "Multithreaded, configurable migration assistant for migrating files out of Google Drive into SharePoint. Built for College of Charleston's enterprise level file migration in light of new Google-enforced storage quotas.",
      imageUrl: "/img/projects/go365.png",
      link: "https://www.youtube.com/watch?v=-CzWWTQKGDY",
      tech: [
        "Django",
        "Python",
        "Microsoft Authentication Library (MSAL)",
        "Azure AD",
        "Google OAuth",
        "OpenID Connect",
        "AWS",
        "Git/GitHub",
        "GitHub Actions",
        "Linode",
        "Multithreading (concurrent.futures)",
        "Google Drive API v3",
        "SharePoint App-Only Authentication",
        "MS Graph API",
      ],
    },
    {
      title: "A Contextual Analysis of CRYSTALS-Dilithium, a Quantum-Resistant, Lattice-Based Digital Signature Scheme",
      description:
        "ABSTRACT - This paper presents an analysis of CRYSTALS-Dilithium, a novel algorithm for generating digital signatures that can withstand future cyberattacks from quantum computers. As announced in July 2022, CRYSTALS-Dilithium was one of the first four winners in the post-quantum cryptography (PQC) standardization project managed by The National Institute of Standards and Technology (NIST). NIST started this competition to call upon cryptographers across the globe for the creation and vetting of quantum-resistant encryption methods and standards in preparation for an inevitable future of quantum-computing-based assaults. As a member of the Cryptographic Suite for Algebraic Lattices (CRYSTALS), Dilithium is a lattice-based algorithm providing not only security based on the hardness of lattice problems, but also competitive public key compression and multiple efficient implementations. This paper includes an overview of the Dilithium scheme for quantum-resistant digital signatures and aggregates contextual information around deeper topics supporting its principal design aspects.",
      imageUrl: "/img/projects/crystals-dilithium.png",
      link: "/docs/vanderbilt/crystals-dilithium.pdf",
      tech: [],
    },
    {
      title:
        "A Multi-Phase Tail Latency Analysis of Couchbase Server Using Automation and the Yahoo! Cloud Serving Benchmark",
      description:
        "ABSTRACT - As the production, storage, and analysis of data become increasingly integral to the success of modern businesses, and as data becomes increasingly kaleidoscopic due to the influx of new data sources, NoSQL (Not Only Structured Query Language) database systems are becoming a popular choice for data management because of their ability to quickly and scalably handle large volumes of structured, semi-structured, and unstructured data in a way that is friendly to developers, and more broadly, to change. One of the solutions in this arena is Couchbase Server, an open source database software package for building and managing distributed, document-oriented, multi-model NoSQL databases optimized for modern interactive applications. In this paper, we provide a detailed, two-phase tail latency analysis of Couchbase Server Community Edition v7.0 using a custom automated testing framework built with the Couchbase CLI and Couchbase Python 3 SDK in combination with the Yahoo! Cloud Serving Benchmark (YCSB), a robust and open source framework for analyzing the performance of different “key-value” and “cloud” serving stores like Couchbase. We analyze and report on relationships between tail latencies and dataset sizes, request distributions, ratios between various operation types (read/insert/update), and cluster architecture (homogeneous versus heterogeneous service layouts).",
      imageUrl: "/img/projects/couchbase-5287.png",
      link: "/docs/vanderbilt/couchbase-5287.pdf",
      tech: [],
    },
    {
      title: "Threat Modeling My Online Identity",
      description:
        "Using the CIA (confidentiality, integrity, availability) methodology to model threats to my online identity. I’ve broken the model into the key components of value that make up my online identity, ranging from personal websites and eCommerce websites to social media accounts, emails, and accounts linked to payment methods. For many online services, enabling MFA is an obvious preventative measure.",
      imageUrl: "/img/projects/threatmodel-online-identity.png",
      link: "/docs/vanderbilt/threatmodel-online-identity.pdf",
      tech: [],
    },

    {
      title: "arXiva",
      description:
        "A free research tool turning arXiv into something much more social, interactive, searchable, and personalized, leveraging multiple cloud resources for high performance and scalability. Built in collaboration with John D. Cobb (https://johndcobb.github.io/)",
      imageUrl: "/img/projects/arxiva.png",
      link: "https://arxiva.org",
      tech: [
        "ElasticSearch",
        "AWS Lightsail",
        "Django",
        "cron",
        "Git/GitHub",
        "Docker",
        "AWS Lambda",
        "AWS Eventbridge",
        "Jenkins",
      ],
    },
    {
      title: "sketchyactivity.com",
      description:
        "Personal portraiture portfolio, built with Django, deployed with Docker, GitHub Actions, and Linode, and integrated with Slack and AWS S3 for pageview notifications and image file storage",
      imageUrl: "/img/projects/sketchyactivity.png",
      link: "https://sketchyactivity.com",
      tech: [
        "Django",
        "Git/Github",
        "Heroku",
        "AWS S3",
        "Slack webhooks",
        "Google Analytics",
        "JS",
        "HTML",
        "Bootstrap",
        "CSS",
      ],
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: "medium", // medium | dev.to
    username: "austinjhunt",
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: "G-J174D8T54K", // Please remove this and use your own tag id or keep it empty
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "synthwave",

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
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
    ],

    // Custom theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with pure, unadulterated rage against the machine ❤️`,
};

export default config;
