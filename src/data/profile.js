// Core identity + contact. Single source of truth for the hero, nav, and footer.
export const profile = {
  name: 'Austin J. Hunt',
  handle: 'austinjhunt',
  // Short role line shown in the hero status bar.
  role: 'Software Engineer',
  company: { name: 'Splunk', url: 'https://splunk.com' },
  location: 'Greenville, SC',

  // One-liner tagline (hero).
  tagline: 'T1D SWE(etie) with an artsy heart.',

  // Longer positioning paragraph (about section).
  bio: ``,

  // Availability flag for the freelance / hire-me callout.
  openToFreelance: true,

  resume: {
    url: '/docs/ajh2025resume.pdf',
    label: 'Résumé',
  },

  // Extra downloadable credentials (grad school portfolio, degree, etc.).
  documents: [
    { label: 'M.S. C.S. Portfolio', url: '/docs/vanderbilt/ms-portfolio.pdf' },
    { label: 'M.S. C.S. Degree', url: '/docs/vanderbilt/ms-cs-degree.pdf' },
  ],
};

// Ordered for the nav / contact rail. `primary: true` surfaces in the hero.
export const socials = [
  {
    label: 'GitHub',
    handle: '@austinjhunt',
    href: 'https://github.com/austinjhunt',
    icon: 'github',
    primary: true,
  },
  {
    label: 'LinkedIn',
    handle: 'in/huntaj',
    href: 'https://www.linkedin.com/in/huntaj',
    icon: 'linkedin',
    primary: true,
  },
  {
    label: 'Email',
    handle: 'austincodescleanly@gmail.com',
    href: 'mailto:austincodescleanly@gmail.com',
    icon: 'email',
    primary: true,
  },
  {
    label: 'Art Portfolio',
    handle: 'sketchyactivity.com',
    href: 'https://sketchyactivity.com',
    icon: 'palette',
    primary: false,
  },
  {
    label: 'Upwork',
    handle: 'Freelance profile',
    href: 'https://www.upwork.com/freelancers/~0140398129a6bb7f8d',
    icon: 'upwork',
    primary: false,
  },
  {
    label: 'Blog',
    handle: 'medium/@austinjhunt',
    href: 'https://medium.com/@austinjhunt',
    icon: 'medium',
    primary: false,
  },
  {
    label: 'Instagram',
    handle: '@talkingtechwithaustin',
    href: 'https://instagram.com/talkingtechwithaustin',
    icon: 'instagram',
    primary: false,
  },
];
