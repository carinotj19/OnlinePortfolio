import catholicSchool from "./Catholic School Website.png";
import fineAds from "./Fine Ads Mockup.png";
import shelterSync from "./shelter_sync.png";
import smartJobTracker from "./Smart Job Tracker.png";

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const uniqueItems = (items) => Array.from(new Set(items.filter(Boolean)));

const formatStack = (technologies) => {
  if (!technologies.length) return "Documented source code";
  if (technologies.length === 1) return technologies[0];
  return `${technologies.slice(0, -1).join(", ")} and ${technologies[technologies.length - 1]}`;
};

const detailTemplates = {
  portfolio: {
    context: "Portfolio source",
    tags: ["Frontend", "React", "UI Cleanup"],
    workedOn: () => [
      "Built the portfolio source around project proof, filtering, and expandable detail sections.",
      "Organized project content so case studies and GitHub repositories can live in one system.",
      "Kept the layout responsive across the sticky navigation, project grid, and contact areas."
    ],
    problemsSolved: [
      "The portfolio needed to show more than a short selected-work list.",
      "Project content needed room for screenshots, tags, stack details, and repository links.",
      "The layout needed to stay readable as the project archive grew."
    ],
    result: "Project proof, filtering, and expandable details"
  },
  dashboard: {
    context: "Status-heavy UI",
    tags: ["Frontend", "Dashboard", "UI Cleanup"],
    workedOn: () => [
      "Designed a status-heavy interface with scannable records, actions, and chart summaries.",
      "Structured the front end around reusable dashboard patterns instead of isolated UI blocks.",
      "Organized data states so users can move from overview to action without losing context."
    ],
    problemsSolved: [
      "Dense records needed clearer visual priority between status, actions, and supporting data.",
      "The interface needed to show operational progress without burying users in equal-weight details.",
      "Dashboard sections needed consistent spacing and labels for faster repeated use."
    ],
    result: "Status, actions, metrics, and context separated cleanly"
  },
  unity: {
    context: "Unity prototype",
    tags: ["Games"],
    workedOn: () => [
      "Built a story-driven Unity prototype around dialogue, artifact collection, and puzzle interactions.",
      "Structured gameplay moments so story progress and item discovery stay connected.",
      "Used Unity and C# to test interaction flow inside a playable scene."
    ],
    problemsSolved: [
      "Narrative interaction needed simple systems for dialogue and object discovery.",
      "Puzzle moments needed enough structure to feel connected to the story.",
      "Prototype scope needed to stay manageable while still showing gameplay intent."
    ],
    result: "Dialogue, collection, and puzzle loops in one Unity prototype"
  },
  fullstack: {
    context: "Full-stack app",
    tags: ["Full Stack", "Frontend", "React"],
    workedOn: () => [
      "Built a MERN-stack pet adoption platform for shelter listings and adopter workflows.",
      "Structured the interface around searchable pets, listing management, and adoption actions.",
      "Connected frontend screens to the application data model for a complete product flow."
    ],
    problemsSolved: [
      "Shelters needed a clearer way to manage pet listings.",
      "Adopters needed a searchable path from browsing to adoption interest.",
      "The app needed separate workflows without making the interface feel split apart."
    ],
    result: "Shelter and adopter workflows connected in one app"
  },
  "three-app": {
    context: "3D configurator",
    tags: ["Frontend", "React", "3D"],
    workedOn: () => [
      "Built a parametric cabinet configurator with 3D views, validation, pricing, and exports.",
      "Connected configuration state to SKU JSON, BOM CSV, GLB output, and shareable links.",
      "Used React, Vite, and React Three Fiber to keep the model interactive in the browser."
    ],
    problemsSolved: [
      "Cabinet configuration needed live validation so invalid dimensions could be corrected quickly.",
      "The 3D scene needed exploded and turntable views without losing product context.",
      "Generated exports needed to be deterministic so outputs could be reviewed and reused."
    ],
    result: "Interactive cabinet model with validation, pricing, and exports"
  },
  game: {
    context: "Interactive game",
    tags: ["Frontend", "Games"],
    workedOn: (title, stack) => [
      `Built ${title} as a browser-based interactive project.`,
      `Used ${formatStack(stack)} to handle layout, state, and user feedback.`,
      "Kept the interaction loop simple enough to understand quickly."
    ],
    problemsSolved: [
      "The interface needed immediate feedback after each user action.",
      "Game state needed to stay clear without adding heavy framework code.",
      "The experience needed to work in a straightforward browser environment."
    ],
    result: "Hands-on browser interaction"
  },
  mobile: {
    context: "Android application",
    tags: ["Mobile"],
    workedOn: (title, stack) => [
      `Built ${title} as an Android app with ${formatStack(stack)}.`,
      "Structured screens around mobile tasks, navigation, and transactional flows.",
      "Kept core user actions clear for repeated use on smaller screens."
    ],
    problemsSolved: [
      "Mobile users needed focused screens instead of desktop-style page density.",
      "The app needed a clear path between browsing, selection, and next action.",
      "Feature scope needed to stay organized across multiple app flows."
    ],
    result: "Kotlin-based Android application work"
  },
  data: {
    context: "Data app",
    tags: ["Python", "Data"],
    workedOn: (title, stack) => [
      `Built ${title} with ${formatStack(stack)}.`,
      "Connected data processing or model output to a usable app interface.",
      "Kept the project focused on turning data into something a user can inspect."
    ],
    problemsSolved: [
      "Raw data or model output needed a clearer interaction layer.",
      "Users needed a simple way to inspect the result without running low-level scripts.",
      "The app needed to make technical output more approachable."
    ],
    result: "Python data workflow presented through an app layer"
  },
  php: {
    context: "PHP application",
    tags: ["PHP", "Backend"],
    workedOn: (title, stack) => [
      `Built ${title} with ${formatStack(stack)}.`,
      "Practiced server-side request handling, form logic, or CRUD-style workflows.",
      "Kept the source readable for backend fundamentals review."
    ],
    problemsSolved: [
      "Server-side logic needed to handle user input and page state.",
      "The project needed a direct path from browser action to backend behavior.",
      "The implementation needed to stay clear enough to inspect and extend."
    ],
    result: "PHP fundamentals through a reviewable project"
  },
  component: {
    context: "Frontend component",
    tags: ["Frontend", "UI Cleanup"],
    workedOn: (title, stack) => [
      `Built ${title} as a focused UI component exercise.`,
      `Used ${formatStack(stack)} to practice layout, spacing, and accessible page structure.`,
      "Kept the scope tight around a single visual pattern."
    ],
    problemsSolved: [
      "The component needed clean spacing and predictable alignment.",
      "Small-screen behavior needed to preserve readability.",
      "The source needed to stay simple enough for fast review."
    ],
    result: "Focused component layout practice"
  },
  frontend: {
    context: "Frontend build",
    tags: ["Frontend", "UI Cleanup"],
    workedOn: (title, stack) => [
      `Built ${title} with ${formatStack(stack)}.`,
      "Focused on responsive structure, visual hierarchy, and browser-friendly interactions.",
      "Kept the implementation small enough to review from the source."
    ],
    problemsSolved: [
      "The page needed clear structure without relying on heavy tooling.",
      "Responsive behavior needed to stay predictable across common screen sizes.",
      "Visual elements needed to support the content instead of overpowering it."
    ],
    result: "Responsive frontend structure and interaction"
  },
  learning: {
    context: "Learning repository",
    tags: ["Learning"],
    workedOn: (title, stack) => [
      `Used ${title} to practice ${formatStack(stack)} concepts.`,
      "Kept course or crash-course exercises available as public learning work.",
      "Built small examples that make the underlying language or framework easier to review."
    ],
    problemsSolved: [
      "Practice work needed to stay organized enough to revisit later.",
      "Examples needed to focus on one concept at a time.",
      "Learning notes and code needed a public place for review."
    ],
    result: "Focused technical practice"
  },
  fork: {
    context: "Forked reference",
    tags: ["Python", "Fork"],
    workedOn: () => [
      "Kept a forked reference for a persona memory extension workflow.",
      "Reviewed the source as part of learning from an existing Python project.",
      "Preserved the repository link for future inspection."
    ],
    problemsSolved: [
      "A reference implementation needed to stay easy to find.",
      "The extension pattern needed a source trail for later review.",
      "The project needed to be separated from original portfolio builds."
    ],
    result: "Forked project marked clearly as reference material"
  }
};

const createRepositoryProject = ({
  name,
  title = name,
  description,
  language,
  technologies = [],
  tags = [],
  kind = "frontend",
  href,
  homepage,
  updatedLabel,
  isFork = false,
  image,
  imageAlt,
  browserLabel,
  detailViews = [],
  detailSummary
}) => {
  const template = detailTemplates[kind] || detailTemplates.frontend;
  const stack = uniqueItems([...technologies, language]);
  const projectTags = uniqueItems([...template.tags, ...tags]);
  const projectDescription =
    description || `Public GitHub repository for ${title}.`;

  return {
    title,
    slug: toSlug(name),
    context: template.context,
    description: projectDescription,
    detailSummary:
      detailSummary ||
      `${projectDescription} The public repository is included here so the curated project archive can show range without turning every entry into a full case study.`,
    technologies: stack,
    tags: projectTags,
    workedOn: template.workedOn(title, stack),
    problemsSolved: template.problemsSolved,
    results: [
      { label: "Project type", value: template.result },
      { label: "Stack used", value: formatStack(stack) },
      { label: "Source", value: isFork ? "Forked public repository" : "Public GitHub repository" }
    ],
    detailViews,
    image,
    imageAlt,
    browserLabel,
    href: homepage || href,
    linkLabel: "View GitHub",
    repositoryHref: href,
    repositoryName: name,
    primaryLanguage: language,
    updatedLabel,
    isFork
  };
};

const schoolWebsiteProject = {
  title: "School Website Build",
  slug: "school-website-build",
  context: "Content architecture",
  description:
    "Responsive information site with clearer structure and easier page editing for staff.",
  detailSummary:
    "A school website needs to feel calm for parents and predictable for the people editing it. The work focused on clearer page structure, safer content blocks, and responsive cleanup.",
  technologies: ["WordPress", "Elementor", "CSS", "JavaScript"],
  tags: ["WordPress", "Frontend", "Performance", "UI Cleanup"],
  workedOn: [
    "Built responsive page sections around school information, programs, and clear calls to action.",
    "Adjusted Elementor and CSS structure so repeated content blocks stay manageable for staff updates.",
    "Cleaned spacing, image crops, and mobile reading order across the main page flow."
  ],
  problemsSolved: [
    "Important parent-facing information needed a clearer path through the page.",
    "Editable sections needed to be less fragile than one-off visual tweaks.",
    "Mobile layouts needed stronger hierarchy without squeezing every block into the same rhythm."
  ],
  results: [
    { label: "UX cleanup", value: "Clearer path to core school information" },
    { label: "Admin usability", value: "Reusable sections with fewer fragile overrides" },
    { label: "Responsive QA", value: "Simpler reading order across small screens" }
  ],
  detailViews: [
    {
      label: "Entry flow",
      caption: "Homepage structure, school identity, and primary user paths.",
      imagePosition: "center top"
    },
    {
      label: "Content rhythm",
      caption: "Repeated page sections designed to stay consistent as content changes.",
      imagePosition: "center 42%"
    }
  ],
  image: catholicSchool,
  imageAlt: "Screenshot of a school website homepage",
  browserLabel: "Responsive page system",
  href: "https://olmcm-website.vercel.app/",
  linkLabel: "Preview site"
};

const githubProjects = [
  createRepositoryProject({ name: "OnlinePortfolio", title: "OnlinePortfolio", description: "Personal portfolio source for presenting production experience, case studies, and public GitHub projects.", language: "JavaScript", technologies: ["React", "CSS"], tags: ["Frontend", "React", "UI Cleanup"], kind: "portfolio", href: "https://github.com/carinotj19/OnlinePortfolio", updatedLabel: "Updated Mar 16, 2026" }),
  createRepositoryProject({ name: "ibag-iw", title: "ibag-iw", description: "Story-driven Unity 6 prototype showcasing dialogue systems, artifact collection, and puzzle interactions.", language: "C#", technologies: ["Unity 6"], tags: ["Games"], kind: "unity", href: "https://github.com/carinotj19/ibag-iw", updatedLabel: "Updated Mar 16, 2026" }),
  createRepositoryProject({ name: "Basketball-scoreboard", title: "Basketball Scoreboard", description: "Responsive basketball scoreboard built with HTML, CSS, and JavaScript.", language: "CSS", technologies: ["HTML", "JavaScript"], tags: ["Frontend"], href: "https://github.com/carinotj19/Basketball-scoreboard", updatedLabel: "Updated Jan 14, 2026" }),
  createRepositoryProject({ name: "job-tracker", title: "Job Tracker Dashboard", description: "Structured dashboard UI for managing data, actions, and status changes without clutter.", language: "Vue", technologies: ["Vue 3", "Supabase", "CSS", "Charts"], tags: ["Dashboard", "Frontend", "UI Cleanup"], kind: "dashboard", href: "https://github.com/carinotj19/job-tracker", updatedLabel: "Updated Jan 13, 2026", image: smartJobTracker, imageAlt: "Screenshot of a job tracking dashboard interface", browserLabel: "Dashboard workflow", detailSummary: "The dashboard work centered on making dense operational data easier to scan, update, and trust without turning every record into visual noise.", detailViews: [{ label: "Status review", caption: "Dense records grouped around scan speed and next action.", imagePosition: "center top" }, { label: "Operational context", caption: "Charts and supporting data kept visible without overpowering tasks.", imagePosition: "center 48%" }] }),
  createRepositoryProject({ name: "Javascript_Drumkit", title: "JavaScript Drumkit", description: "Interactive drum kit built with HTML, CSS, and JavaScript.", language: "HTML", technologies: ["CSS", "JavaScript"], tags: ["Frontend", "Games"], kind: "game", href: "https://github.com/carinotj19/Javascript_Drumkit", updatedLabel: "Updated Jan 13, 2026" }),
  createRepositoryProject({ name: "CSS_JS_Clock", title: "CSS JS Clock", description: "Analog clock in HTML, CSS, and JavaScript with a dynamic background that shifts from morning to evening.", language: "CSS", technologies: ["HTML", "JavaScript"], tags: ["Frontend"], href: "https://github.com/carinotj19/CSS_JS_Clock", updatedLabel: "Updated Jan 13, 2026" }),
  createRepositoryProject({ name: "Blackjack", title: "Blackjack", description: "Interactive web-based Blackjack game built with HTML, CSS, and JavaScript.", language: "CSS", technologies: ["HTML", "JavaScript"], tags: ["Frontend", "Games"], kind: "game", href: "https://github.com/carinotj19/Blackjack", updatedLabel: "Updated Jan 13, 2026" }),
  createRepositoryProject({ name: "ShelterSync", title: "ShelterSync", description: "MERN-stack pet adoption platform enabling shelters and adopters to manage pet listings and adoption workflows.", language: "JavaScript", technologies: ["MongoDB", "Express", "React", "Node.js"], tags: ["Full Stack", "Frontend", "React"], kind: "fullstack", href: "https://github.com/carinotj19/ShelterSync", updatedLabel: "Updated Jan 13, 2026", image: shelterSync, imageAlt: "Screenshot of a searchable pet adoption platform", browserLabel: "Shelter adoption flow", detailViews: [{ label: "Search flow", caption: "Pet discovery screens organized around filtering and adoption interest.", imagePosition: "center top" }, { label: "Listing context", caption: "Shelter and adopter details kept close to the main decision path.", imagePosition: "center 46%" }] }),
  createRepositoryProject({ name: "BrainyBox", title: "BrainyBox", description: "React and Tailwind trivia app that fetches questions from Open Trivia DB, supports quiz customization, and tracks score.", language: "JavaScript", technologies: ["React", "Tailwind CSS", "Open Trivia DB"], tags: ["Frontend", "React", "Games"], kind: "game", href: "https://github.com/carinotj19/BrainyBox", updatedLabel: "Updated Dec 30, 2025" }),
  createRepositoryProject({ name: "CabKit3D", title: "CabKit3D", description: "Parametric cabinet configurator built with Vite, React, and React Three Fiber, including 3D views, live pricing, validation, exports, and shareable permalinks.", language: "JavaScript", technologies: ["Vite", "React", "React Three Fiber"], tags: ["Frontend", "React", "3D"], kind: "three-app", href: "https://github.com/carinotj19/CabKit3D", updatedLabel: "Updated Nov 17, 2025" }),
  createRepositoryProject({ name: "Results-Summary-Component", title: "Results Summary Component", description: "Frontend Mentor results summary component built as a focused HTML and CSS interface exercise.", language: "HTML", technologies: ["CSS"], tags: ["Frontend", "UI Cleanup"], kind: "component", href: "https://github.com/carinotj19/Results-Summary-Component", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "CSS_with_JS", title: "CSS with JS", description: "Demonstration of dynamic CSS styling using JavaScript.", language: "HTML", technologies: ["CSS", "JavaScript"], tags: ["Frontend"], href: "https://github.com/carinotj19/CSS_with_JS", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "HTML-Calculator", title: "HTML Calculator", description: "Basic calculator built with HTML, CSS, and JavaScript.", language: "JavaScript", technologies: ["HTML", "CSS"], tags: ["Frontend"], href: "https://github.com/carinotj19/HTML-Calculator", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "GDP_Prediction", title: "GDP Prediction", description: "Streamlit app for forecasting GDP using a pre-trained SimpleRNN model.", language: "Python", technologies: ["Streamlit", "SimpleRNN"], tags: ["Python", "Data"], kind: "data", href: "https://github.com/carinotj19/GDP_Prediction", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "Loading-Screen", title: "Loading Screen", description: "Simple HTML and CSS loading screen component for web projects.", language: "CSS", technologies: ["HTML"], tags: ["Frontend", "UI Cleanup"], kind: "component", href: "https://github.com/carinotj19/Loading-Screen", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "BMart", title: "BMart", description: "Android app built with Kotlin for ordering groceries from multiple vendors, featuring messaging and payment integration.", language: "Kotlin", technologies: ["Android"], tags: ["Mobile"], kind: "mobile", href: "https://github.com/carinotj19/BMart", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "PropertyFinder", title: "PropertyFinder", description: "Android app built with Kotlin for browsing and booking temporary accommodations in Baguio City and La Trinidad.", language: "Kotlin", technologies: ["Android"], tags: ["Mobile"], kind: "mobile", href: "https://github.com/carinotj19/PropertyFinder", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "Bootstrap-Responsive-Website", title: "Bootstrap Responsive Website", description: "Responsive website template built with Bootstrap 4, featuring a modern layout and design.", language: "HTML", technologies: ["Bootstrap 4", "CSS"], tags: ["Frontend", "UI Cleanup"], href: "https://github.com/carinotj19/Bootstrap-Responsive-Website", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "Subway-Counter", title: "Subway Counter", description: "Web-based Subway sandwich nutrition calculator built with HTML, CSS, and JavaScript.", language: "CSS", technologies: ["HTML", "JavaScript"], tags: ["Frontend"], href: "https://github.com/carinotj19/Subway-Counter", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "PHP-Contact-Form", title: "PHP Contact Form", description: "Simple PHP contact form with HTML/CSS frontend and basic server-side processing.", language: "PHP", technologies: ["HTML", "CSS"], tags: ["PHP", "Backend", "Frontend"], kind: "php", href: "https://github.com/carinotj19/PHP-Contact-Form", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "Jeepney-routing-strmlit", title: "Jeepney Routing Streamlit", description: "Streamlit application for visualizing and planning jeepney routes in the Philippines.", language: "Python", technologies: ["Streamlit"], tags: ["Python", "Data"], kind: "data", href: "https://github.com/carinotj19/Jeepney-routing-strmlit", updatedLabel: "Updated Apr 18, 2025" }),
  createRepositoryProject({ name: "To-Do-List-PHP", title: "To-Do List PHP", description: "Simple CRUD application in PHP.", language: "PHP", technologies: ["HTML", "CSS"], tags: ["PHP", "Backend"], kind: "php", href: "https://github.com/carinotj19/To-Do-List-PHP", updatedLabel: "Updated Feb 3, 2025" }),
  createRepositoryProject({ name: "Fine-Ads", title: "Fine Ads", description: "Website mockup for Fine ADS Arts and Design.", language: "HTML", technologies: ["CSS", "JavaScript"], tags: ["Frontend", "UI Cleanup"], href: "https://github.com/carinotj19/Fine-Ads", updatedLabel: "Updated Aug 12, 2024", image: fineAds, imageAlt: "Screenshot of a landing page for a signage and print shop", browserLabel: "Fine Ads landing page", detailViews: [{ label: "Hero layout", caption: "Landing page hierarchy focused on business identity and service clarity.", imagePosition: "center top" }, { label: "Service proof", caption: "Visual sections arranged so signage and design work are easy to scan.", imagePosition: "center 46%" }] }),
  createRepositoryProject({ name: "FAQAccordion", title: "FAQ Accordion", description: "Frontend Mentor FAQ Accordion challenge.", language: "HTML", technologies: ["CSS", "JavaScript"], tags: ["Frontend", "UI Cleanup"], kind: "component", href: "https://github.com/carinotj19/FAQAccordion", updatedLabel: "Updated Dec 23, 2023" }),
  createRepositoryProject({ name: "QRCodeComponent", title: "QR Code Component", description: "Frontend Mentor QR code component built as an HTML and CSS layout exercise.", language: "HTML", technologies: ["CSS"], tags: ["Frontend", "UI Cleanup"], kind: "component", href: "https://github.com/carinotj19/QRCodeComponent", updatedLabel: "Updated May 20, 2023" })
];

const projectShowcase = {
  featured: {
    title: "Production support work shaped by live frontend constraints",
    description:
      "Representative interfaces from the mix of client website work, landing page builds, and problem solving that supports day-to-day production delivery.",
    highlights: [
      "Support work has to read well, stay editable, and survive updates.",
      "Layout systems need to stay clean under real content changes.",
      "Visual polish matters only after stability and speed are covered."
    ],
    technologies: ["WordPress", "PHP", "CSS", "WP-CLI", "Cloudflare"],
    stats: [
      { value: "300+", label: "sites maintained" },
      { value: "Daily", label: "support and rollout work" },
      { value: "UI + Perf", label: "cleanup focus" }
    ],
    gallery: [
      {
        src: fineAds,
        alt: "Screenshot of a landing page for a signage and print shop",
        browserLabel: "Landing page build"
      },
      {
        src: shelterSync,
        alt: "Screenshot of a searchable pet adoption platform",
        browserLabel: "Interface system"
      }
    ]
  },
  projects: [schoolWebsiteProject, ...githubProjects]
};

export default projectShowcase;
