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

const projects = [
  { src: smartJobTracker, title: 'Smart Job Tracker', url: 'https://github.com/carinotj19/job-tracker' },
  { src: brainyBox, title: 'Brainy Box', url: 'https://github.com/carinotj19/BrainyBox' },
  { src: catholicSchool, title: 'Catholic School Website', url: 'https://olmcm-website.vercel.app/' },
  { src: fineAds, title: 'Fine Ads Mockup', url: 'https://github.com/carinotj19/Fine-Ads' },
  { src: jsDrumkit, title: 'Javascript Drumkit', url: 'https://github.com/carinotj19/Javascript_Drumkit' },
  { src: simpleClock, title: 'Simple Clock', url: 'https://github.com/carinotj19/CSS_JS_Clock' },
  { src: simpleBlackjack, title: 'Simple Black Jack', url: 'https://github.com/carinotj19/Blackjack' },
  { src: jeepney, title: 'Jeepney Streamlit Application', url: 'https://jeepney-routing-system.streamlit.app/' },
  { src: responsiveWeb, title: 'Responsive Web Design', url: 'https://github.com/carinotj19/Bootstrap-Responsive-Website' },
  { src: cabkit3D, title: 'CabKit3D', url: 'https://carinotj19.github.io/CabKit3D/' },
];

export default projects;

