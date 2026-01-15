// Explicit project manifest to control order, titles, and URLs
// Images imported so bundler includes them deterministically
import fineAds from './Fine Ads Mockup.png';
import catholicSchool from './Catholic School Website.png';
import brainyBox from './Brainy Box.png';
import jeepney from './Jeepney Streamlit Application.png';
import jsDrumkit from './Javascript Drumkit.png';
import analogClock from './Analog Clock.png';
import basketballScoreboard from './Basketball Scoreboard.png';
import blackjack from './Black Jack.png';
import smartJobTracker from './Smart Job Tracker.png';
import cabkit3D from './CabKit3D.png';
import shelterSync from './shelter_sync.png';

const projects = [
  {
    src: cabkit3D,
    title: 'CabKit3D',
    description: 'Vite + React + @react-three/fiber configurator for parametric cabinets with millimeter tweaks, pricing/validation, and SKU/BOM/GLB exports.',
    repo: "https://github.com/carinotj19/CabKit3D",
    demo: 'https://carinotj19.github.io/CabKit3D/'
  },
  {
    src: shelterSync,
    title: 'Shelter Sync',
    description: 'MERN pet adoption platform with JWT auth, pet CRUD + GridFS uploads, search/filter, and email adoption workflows with admin tools.',
    repo: "https://github.com/carinotj19/ShelterSync",
    demo: 'https://carinotj19.github.io/ShelterSync/'
  },
  {
    src: smartJobTracker,
    title: 'Smart Job Tracker',
    description: 'Vue 3 + Supabase job-search tracker with applications, contacts, interviews, analytics, and offline support.',
    repo: 'https://github.com/carinotj19/job-tracker',
    demo: 'https://carinotj19.github.io/job-tracker/'
  },
  {
    src: brainyBox,
    title: 'Brainy Box',
    description: 'Full stack trivia app with Open Trivia DB quizzes, JWT accounts, saved progress, history, and leaderboard.',
    repo: 'https://github.com/carinotj19/BrainyBox',
    demo: 'https://carinotj19.github.io/BrainyBox/'
  },
  {
    src: catholicSchool,
    title: 'Catholic School Website',
    description: 'Responsive React school website demo deployed on Vercel.',
    demo: 'https://olmcm-website.vercel.app/'
  },
  {
    src: jeepney,
    title: 'Jeepney Streamlit Application',
    description: 'Route planner interface for Baguio City jeepney lines.',
    demo: 'https://jeepney-routing-system.streamlit.app/'
  },
  {
    src: fineAds,
    title: 'Fine Ads Mockup',
    description: 'Landing page mockup for a signage and print shop.',
    repo: 'https://github.com/carinotj19/Fine-Ads',
    demo: ''
  },
  {
    src: jsDrumkit,
    title: 'Javascript Drumkit',
    description: 'Interactive drum machine triggered by keyboard hits.',
    repo: 'https://github.com/carinotj19/Javascript_Drumkit',
    demo: "https://carinotj19.github.io/Javascript_Drumkit/"
  },
  {
    src: analogClock,
    title: 'Analog Clock',
    description: 'CSS and JS analog clock with smooth ticking hands.',
    repo: 'https://github.com/carinotj19/CSS_JS_Clock',
    demo: 'https://carinotj19.github.io/CSS_JS_Clock/'
  },
  {
    src: blackjack,
    title: 'Black Jack',
    description: 'Browser blackjack game with simple betting flow.',
    repo: 'https://github.com/carinotj19/Blackjack',
    demo: 'https://carinotj19.github.io/Blackjack/'
  },
  {
    src: basketballScoreboard,
    title: 'Basketball Scoreboard',
    description: 'Scoreboard app with timers and score controls.',
    repo: 'https://github.com/carinotj19/Basketball-scoreboard',
    demo: 'https://carinotj19.github.io/Basketball-scoreboard/'
  },
];

export default projects;
