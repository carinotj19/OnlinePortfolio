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
  { src: cabkit3D, title: 'CabKit3D', repo: "https://github.com/carinotj19/CabKit3D",demo: 'https://carinotj19.github.io/CabKit3D/' },
  { src: shelterSync, title: 'Shelter Sync', repo: "https://github.com/carinotj19/ShelterSync", demo: 'https://carinotj19.github.io/ShelterSync/' },
  { src: smartJobTracker, title: 'Smart Job Tracker', repo: 'https://github.com/carinotj19/job-tracker', demo: 'https://carinotj19.github.io/job-tracker/' },
  { src: brainyBox, title: 'Brainy Box', repo: 'https://github.com/carinotj19/BrainyBox', demo: 'https://carinotj19.github.io/BrainyBox/' },
  { src: catholicSchool, title: 'Catholic School Website', demo: 'https://olmcm-website.vercel.app/' },
  { src: jeepney, title: 'Jeepney Streamlit Application', demo: 'https://jeepney-routing-system.streamlit.app/' },
  { src: fineAds, title: 'Fine Ads Mockup', repo: 'https://github.com/carinotj19/Fine-Ads', demo: '' },
  { src: jsDrumkit, title: 'Javascript Drumkit', repo: 'https://github.com/carinotj19/Javascript_Drumkit', demo: "https://carinotj19.github.io/Javascript_Drumkit/" },
  { src: analogClock, title: 'Analog Clock', repo: 'https://github.com/carinotj19/CSS_JS_Clock', demo: 'https://carinotj19.github.io/CSS_JS_Clock/' },
  { src: blackjack, title: 'Black Jack', repo: 'https://github.com/carinotj19/Blackjack', demo: 'https://carinotj19.github.io/Blackjack/' },
  { src: basketballScoreboard, title: 'Basketball Scoreboard', repo: 'https://github.com/carinotj19/Basketball-scoreboard', demo: 'https://carinotj19.github.io/Basketball-scoreboard/' },
];

export default projects;
