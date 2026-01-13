// Explicit project manifest to control order, titles, and URLs
// Images imported so bundler includes them deterministically
import fineAds from './Fine Ads Mockup.png';
import catholicSchool from './Catholic School Website.png';
import brainyBox from './Brainy Box.png';
import responsiveWeb from './Responsive web design.png';
import jeepney from './Jeepney Streamlit Application.png';
import jsDrumkit from './Javascript Drumkit.png';
import simpleClock from './Simple Clock.png';
import simpleBlackjack from './Simple Black Jack.png';
import smartJobTracker from './Smart Job Tracker.png';
import cabkit3D from './CabKit3D.png';
import shelterSync from './shelter_sync.png';

const projects = [
  { src: smartJobTracker, title: 'Smart Job Tracker', repo: 'https://github.com/carinotj19/job-tracker' },
  { src: brainyBox, title: 'Brainy Box', repo: 'https://carinotj19.github.io/BrainyBox/' },
  { src: catholicSchool, title: 'Catholic School Website', demo: 'https://olmcm-website.vercel.app/' },
  { src: fineAds, title: 'Fine Ads Mockup', repo: 'https://github.com/carinotj19/Fine-Ads' },
  { src: jsDrumkit, title: 'Javascript Drumkit', repo: 'https://github.com/carinotj19/Javascript_Drumkit' },
  { src: simpleClock, title: 'Simple Clock', repo: 'https://github.com/carinotj19/CSS_JS_Clock' },
  { src: simpleBlackjack, title: 'Simple Black Jack', repo: 'https://github.com/carinotj19/Blackjack' },
  { src: jeepney, title: 'Jeepney Streamlit Application', demo: 'https://jeepney-routing-system.streamlit.app/' },
  { src: responsiveWeb, title: 'Responsive Web Design', repo: 'https://github.com/carinotj19/Bootstrap-Responsive-Website' },
  { src: cabkit3D, title: 'CabKit3D', repo: "",demo: 'https://carinotj19.github.io/CabKit3D/' },
  { src: shelterSync, title: 'Shelter Sync', repo:"https://github.com/carinotj19/ShelterSync", demo: 'https://carinotj19.github.io/ShelterSync/' },
];

export default projects;
