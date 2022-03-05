// config.js
module.exports = {
  github: {
    username: "austinjhunt", // Your GitHub org/user name. (Required)
    sortBy: "updated", // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["austinjhunt.github.io", "austinjhunt", "cofcdigikit"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: "huntaj",
    twitter: "austinsketches",
    facebook: "",
    dribbble: "",
    behance: "",
    medium: "",
    devto: "",
    website: "https://austinjhunt.com",
    art: "https://www.sketchyactivity.com",
    phone: "",
    email: "austinsketches@gmail.com",
  },
  skills: [
    "React.js",
    "Django",
    "Python",
    "Bash",
    "PowerShell",
    "Node.js",
    "MySQL",
    "PHP",
    "HTML 5",
    "CSS",
    "SASS & SCSS",
    "Bootstrap",
    "JavaScript",
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Ansible",
    "AWS EC2",
    "Nagios/NCPA",
    "Icinga 2",
    "nuXmv",
    "Stateflow",
  ],
  experiences: [
    {
      company: "College of Charleston",
      position: "Digital Communications Developer",
      from: "February 2022",
      to: "Present",
    },
    {
      company: "College of Charleston",
      position: "Webmaster",
      from: "December 2019",
      to: "February 2022",
    },
    {
      company: "College of Charleston",
      position: "Temporary Employee - Web Team",
      from: "May 2019",
      to: "December 2019",
    },
  ],
  education: [
    {
      institution: "Vanderbilt University",
      degree: "Master of Science, Computer Science",
      from: "May 2021",
      to: "Present",
    },
    {
      institution: "College of Charleston Honors College",
      degree: "Bachelor of Science, Computer Science, Summa Cum Laude",
      from: "Aug 2015",
      to: "May 2019",
    },
  ],
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: "dev.to", // medium | dev.to
    username: "austinjhunt",
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: "G-J174D8T54K", // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: "", //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    default: "dark",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,

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
    ],
  },
};
