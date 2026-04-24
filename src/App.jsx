import { useEffect, useState } from 'react';
import './App.css';

function CogWheel({
  x,
  y,
  size = 'small',
  duration = '8s',
  reverse = false,
  opacity = 1,
}) {
  const radius = size === 'big' ? 40 : 24;
  const wheelTeeth = size === 'big' ? 10 : 8;
  const toothAngles = Array.from({ length: wheelTeeth }, (_, index) => (360 / wheelTeeth) * index);
  const toothWidth = Math.max(13, radius * 0.36);
  const toothHeight = Math.max(12, radius * 0.3);
  const socketSize = Math.max(13, radius * 0.44);

  return (
    <g transform={`translate(${x} ${y})`} opacity={opacity}>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to={reverse ? '-360' : '360'}
          dur={duration}
          repeatCount="indefinite"
        />
        {toothAngles.map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <rect
              x={-toothWidth / 2}
              y={-radius - toothHeight * 0.42}
              width={toothWidth}
              height={toothHeight}
              rx="1"
              className="create-cog-tooth"
            />
            <rect
              x={-toothWidth / 2 + 2}
              y={-radius - toothHeight * 0.42}
              width={Math.max(3, toothWidth * 0.28)}
              height={toothHeight * 0.72}
              rx="1"
              className="create-cog-tooth-highlight"
            />
          </g>
        ))}
        <circle r={radius * 0.9} className="create-cog-body" />
        <circle r={radius * 0.68} className="create-cog-inner-ring" />
        <path
          d={`M${-radius * 0.52} ${-radius * 0.16} H${radius * 0.5} M${-radius * 0.45} ${radius * 0.16} H${radius * 0.56} M${-radius * 0.16} ${-radius * 0.52} V${radius * 0.5} M${radius * 0.16} ${-radius * 0.45} V${radius * 0.56}`}
          className="create-cog-grain"
        />
        <path
          d={`M${-radius * 0.66} ${-radius * 0.28} L${-radius * 0.28} ${-radius * 0.66} M${radius * 0.28} ${radius * 0.66} L${radius * 0.66} ${radius * 0.28}`}
          className="create-cog-edge-shade"
        />
        <rect
          x={-socketSize / 2}
          y={-socketSize / 2}
          width={socketSize}
          height={socketSize}
          rx="2"
          transform="rotate(45)"
          className="create-cog-socket-shadow"
        />
        <rect
          x={-socketSize / 2 + 2}
          y={-socketSize / 2 + 2}
          width={socketSize - 4}
          height={socketSize - 4}
          rx="1"
          transform="rotate(45)"
          className="create-cog-socket"
        />
      </g>
    </g>
  );
}

function ShaftRoller({ x, y, width = 46, height = 74, vertical = false }) {
  return (
    <g transform={`translate(${x} ${y}) ${vertical ? 'rotate(90)' : ''}`} className="workshop-shaft-roller">
      <rect x={-width / 2} y={-height / 2} width={width} height={height} rx="4" className="workshop-roller-housing" />
      <rect x={-width / 2 + 8} y={-height / 2 + 5} width={width - 16} height={height - 10} rx="3" className="workshop-roller-belt-wrap" />
      <rect x={-width / 2 + 14} y={-height / 2 - 5} width={width - 28} height="10" rx="2" className="workshop-roller-cap" />
      <rect x={-width / 2 + 14} y={height / 2 - 5} width={width - 28} height="10" rx="2" className="workshop-roller-cap" />
      <rect x="-5" y={-height / 2 - 10} width="10" height={height + 20} rx="2" className="workshop-roller-shaft" />
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to="360"
          dur="3s"
          repeatCount="indefinite"
        />
        <rect x="-9" y="-9" width="18" height="18" rx="2" transform="rotate(45)" className="workshop-roller-socket-shadow" />
        <rect x="-6" y="-6" width="12" height="12" rx="1" transform="rotate(45)" className="workshop-roller-socket" />
      </g>
    </g>
  );
}

function ModuleBlock({ x, y, label, color = 'var(--create-package)', delay = '0s' }) {
  return (
    <g className="workshop-module">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="-132 0;292 0;-132 0"
        dur="8s"
        begin={delay}
        repeatCount="indefinite"
      />
      <rect x={x} y={y} width="54" height="28" rx="3" fill={color} stroke="var(--create-andesite-dark)" strokeWidth="1.6" />
      <path d={`M${x + 8} ${y + 8} H${x + 46} M${x + 8} ${y + 20} H${x + 46} M${x + 27} ${y + 3} V${y + 25}`} className="workshop-module-cuts" />
      <rect x={x + 7} y={y - 6} width="40" height="8" rx="2" className="workshop-brass-cap" />
      <text x={x + 27} y={y + 18} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--text)">
        {label}
      </text>
    </g>
  );
}

function Gearbox({ x, y, width, height, label, cogSize = 'big', reverse = false, duration = '7s' }) {
  return (
    <g className="workshop-gearbox">
      <rect x={x - 7} y={y + 8} width={width + 14} height={height + 10} rx="4" className="workshop-wood-shadow" />
      <rect x={x} y={y} width={width} height={height} rx="6" className="workshop-andesite-case" />
      <path d={`M${x + 12} ${y + 16} H${x + width - 12} M${x + 16} ${y + height - 10} V${y + 12}`} className="workshop-case-highlight" />
      <rect x={x + 14} y={y + 14} width={width - 28} height={height - 28} rx="4" className="workshop-brass-plate" />
      <CogWheel x={x + width / 2} y={y + height / 2} size={cogSize} duration={duration} reverse={reverse} />
      <text x={x + width / 2} y={y + height + 20} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--brass)" opacity="0.72">
        {label}
      </text>
    </g>
  );
}

function HeroMachineExtras() {
  const beltSlats = Array.from({ length: 15 }, (_, index) => index);
  const verticalSlats = Array.from({ length: 9 }, (_, index) => index);

  return (
    <g className="create-contraption workshop-contraption">
      <defs>
        <clipPath id="workshop-belt-clip">
          <polygon points="88,438 524,438 492,486 54,486" />
        </clipPath>
        <clipPath id="workshop-lift-clip">
          <rect x="486" y="112" width="46" height="246" rx="5" />
        </clipPath>
      </defs>

      <rect x="74" y="86" width="462" height="382" rx="6" className="workshop-backplate" />
      <path d="M92 450 H544 M104 112 V548 M534 108 V548" className="workshop-wood-beam" />
      <path d="M126 180 H484 M126 324 H508 M158 236 H428" className="workshop-shaft-line" />

      <g className="workshop-modular-stack">
        <rect x="116" y="96" width="94" height="56" rx="4" className="workshop-wood-block" />
        <rect x="128" y="108" width="70" height="32" rx="3" className="workshop-brass-plate small" />
        <text x="163" y="129" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--text)">LAYOUT</text>
        <rect x="392" y="86" width="96" height="62" rx="4" className="workshop-wood-block" />
        <rect x="406" y="100" width="68" height="34" rx="3" className="workshop-andesite-face" />
        <text x="440" y="122" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--text)">STATE</text>
      </g>

      <g className="workshop-powertrain">
        <Gearbox x={128} y={162} width={126} height={116} label="COMPONENTS" cogSize="big" duration="8s" />
        <Gearbox x={318} y={162} width={118} height={108} label="ROUTING" cogSize="big" reverse duration="6.4s" />
        <CogWheel x={278} y={221} size="small" duration="4.5s" reverse opacity="0.9" />
        <CogWheel x={462} y={324} size="small" duration="5.3s" opacity="0.88" />
        <CogWheel x={306} y={330} size="small" duration="4s" reverse opacity="0.82" />
      </g>

      <g className="workshop-lift">
        <rect x="474" y="96" width="70" height="286" rx="5" className="workshop-brass-casing" />
        <rect x="486" y="112" width="46" height="246" rx="5" className="workshop-vertical-belt" />
        <g clipPath="url(#workshop-lift-clip)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -32;0 0"
              dur="1.45s"
              repeatCount="indefinite"
            />
            {verticalSlats.map((index) => (
              <rect key={index} x="490" y={112 + index * 32} width="38" height="12" rx="1" className="workshop-belt-slat-vertical" />
            ))}
          </g>
        </g>
        <ShaftRoller x={509} y={112} width={38} height={62} />
        <ShaftRoller x={509} y={358} width={38} height={62} />
        <path d="M456 378 H562 L538 424 H482 Z" className="workshop-output-funnel" />
      </g>

      <path
        d="M190 280 C160 342 118 398 92 502"
        className="workshop-drive-belt"
        strokeDasharray="16 10"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.35s" repeatCount="indefinite" />
      </path>
      <path
        d="M376 270 C420 354 474 438 520 502"
        className="workshop-drive-belt brass"
        strokeDasharray="16 10"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.2s" repeatCount="indefinite" />
      </path>

      <g className="workshop-conveyor">
        <polygon points="88,438 524,438 492,486 54,486" className="workshop-belt-top" />
        <polygon points="54,486 492,486 492,534 54,534" className="workshop-brass-casing-side" />
        <polygon points="492,486 524,438 524,486 492,534" className="workshop-brass-casing-end" />
        <path d="M58 498 H488 M58 520 H488" className="workshop-casing-groove" />
        <g clipPath="url(#workshop-belt-clip)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-44 0;0 0"
              dur="1.15s"
              repeatCount="indefinite"
            />
            {beltSlats.map((index) => (
              <path key={index} d={`M${72 + index * 44} 442 L${112 + index * 44} 486`} className="workshop-belt-slat" />
            ))}
          </g>
        </g>
        <rect x="118" y="446" width="22" height="8" rx="2" className="workshop-belt-brass-pad" />
        <rect x="274" y="446" width="22" height="8" rx="2" className="workshop-belt-brass-pad" />
        <rect x="432" y="446" width="22" height="8" rx="2" className="workshop-belt-brass-pad" />
        <ModuleBlock x={146} y={416} label="UI" delay="0s" />
        <ModuleBlock x={260} y={416} label="API" color="var(--create-item-blue)" delay="2.5s" />
        <ModuleBlock x={374} y={416} label="BUILD" color="var(--create-item-green)" delay="5s" />
        <ShaftRoller x={66} y={492} width={34} height={70} />
        <ShaftRoller x={508} y={480} width={34} height={70} />
      </g>

      <rect x="88" y="570" width="170" height="17" rx="2" fill="var(--brass)" opacity="0.12" />
      <text x="173" y="582" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--brass)" opacity="0.72">
        MODULAR FRONTEND
      </text>
      <rect x="358" y="570" width="166" height="17" rx="2" fill="var(--copper)" opacity="0.12" />
      <text x="441" y="582" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--copper)" opacity="0.7">
        ASSEMBLED SYSTEMS
      </text>
    </g>
  );
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
<div className="schematic-bg"></div>


<nav>
  <a className="nav-logo" href="#">
    <svg className="nav-gear-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
    TJ Cariño
  </a>
  <ul className="nav-links">
    <li><a href="#about">about</a></li>
    <li><a href="#experience">experience</a></li>
    <li><a href="#projects">projects</a></li>
    <li><a href="#skills">skills</a></li>
    <li><a href="#contact">contact</a></li>
  </ul>
  <div className="nav-right">
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span id="theme-icon">{theme === 'dark' ? 'moon' : 'sun'}</span><span id="theme-label">{theme}</span>
    </button>
    <a className="btn-hire" href="mailto:carinotj19@gmail.com">Hire Me</a>
  </div>
</nav>


<section id="hero">
  <div className="hero-machinery">
    <svg viewBox="0 0 600 700" width="100%" height="100%" style={{ position: "absolute", top: "0", right: "0" }} fill="none" xmlns="http://www.w3.org/2000/svg">

      
      <rect x="380" y="80" width="18" height="360" rx="3" fill="var(--water)" stroke="var(--border2)" strokeWidth="1"/>
      <line x1="389" y1="100" x2="389" y2="420" stroke="var(--water-flow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1s" repeatCount="indefinite"/>
      </line>
      
      <circle cx="389" cy="430" r="3" fill="var(--water-flow)" opacity="0.5">
        <animate attributeName="cy" values="430;460" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0" dur="1.2s" repeatCount="indefinite"/>
      </circle>

      
      <g transform="translate(340,260)">
        <rect x="-4" y="-4" width="8" height="8" rx="1" fill="var(--brass)" opacity="0.9"/>
        <circle cx="0" cy="0" r="60" stroke="var(--brass)" strokeWidth="2.5" fill="var(--gear-fill)" className="spinning-ccw" style={{ '--dur': "12s" }}/>
        <g className="spinning-ccw" style={{ '--dur': "12s" }}>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(45)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(90)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(135)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(180)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(225)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(270)"/>
          <rect x="-6" y="-66" width="12" height="16" rx="2" fill="var(--brass)" opacity="0.8" transform="rotate(315)"/>
          <line x1="0" y1="0" x2="0" y2="-55" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="0" y2="55" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="-55" y2="0" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="55" y2="0" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="-39" y2="-39" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="39" y2="-39" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="39" y2="39" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="-39" y2="39" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
        </g>
        <circle cx="0" cy="0" r="10" fill="var(--bg2)" stroke="var(--brass)" strokeWidth="2"/>
        <circle cx="0" cy="0" r="4" fill="var(--brass)"/>
      </g>

      
      <line x1="340" y1="260" x2="238" y2="260" stroke="var(--andesite)" strokeWidth="4" opacity="0.35"/>

      
      <g transform="translate(170,260)">
        <g className="spinning-cw" style={{ '--dur': "9s" }}>
          <circle r="68" fill="var(--gear-fill)" stroke="var(--brass)" strokeWidth="2.5"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(30)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(60)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(90)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(120)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(150)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(180)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(210)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(240)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(270)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(300)"/>
          <rect x="-6" y="-74" width="12" height="14" rx="2" fill="var(--brass)" opacity="0.9" transform="rotate(330)"/>
          <line x1="0" y1="0" x2="0" y2="-58" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="50" y2="29" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="-50" y2="29" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="50" y2="-29" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="-50" y2="-29" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
          <line x1="0" y1="0" x2="0" y2="58" stroke="var(--brass)" strokeWidth="2" opacity="0.4"/>
        </g>
        <circle r="12" fill="var(--bg2)" stroke="var(--brass)" strokeWidth="2.5"/>
        <circle r="5" fill="var(--brass)"/>
      </g>

      
      <g transform="translate(170,154)">
        <g className="spinning-ccw" style={{ '--dur': "5s" }}>
          <circle r="38" fill="var(--gear-fill)" stroke="var(--copper)" strokeWidth="2"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(45)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(90)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(135)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(180)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(225)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(270)"/>
          <rect x="-4" y="-44" width="8" height="9" rx="1" fill="var(--copper)" opacity="0.9" transform="rotate(315)"/>
          <line x1="0" y1="0" x2="0" y2="-32" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="28" y2="16" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="-28" y2="16" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="28" y2="-16" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="-28" y2="-16" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="0" y2="32" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
        </g>
        <circle r="7" fill="var(--bg2)" stroke="var(--copper)" strokeWidth="2"/>
        <circle r="3" fill="var(--copper)"/>
      </g>

      
      <g transform="translate(238,370)">
        <g className="spinning-ccw" style={{ '--dur': "6s" }}>
          <circle r="30" fill="var(--gear-fill)" stroke="var(--copper)" strokeWidth="1.5"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(45)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(90)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(135)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(180)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(225)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(270)"/>
          <rect x="-4" y="-35" width="8" height="8" rx="1" fill="var(--copper)" opacity="0.8" transform="rotate(315)"/>
          <line x1="0" y1="0" x2="0" y2="-26" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="23" y2="13" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="0" y1="0" x2="-23" y2="13" stroke="var(--copper)" strokeWidth="1.5" opacity="0.4"/>
        </g>
        <circle r="6" fill="var(--bg2)" stroke="var(--copper)" strokeWidth="1.5"/>
        <circle r="2.5" fill="var(--copper)"/>
      </g>

      
      <rect x="120" y="60" width="10" height="70" rx="3" fill="none" stroke="var(--andesite)" strokeWidth="2" opacity="0.3"/>
      <rect x="145" y="80" width="10" height="50" rx="3" fill="none" stroke="var(--andesite)" strokeWidth="2" opacity="0.3"/>
      <ellipse cx="125" cy="55" rx="8" ry="5" fill="var(--andesite)" opacity="0.18">
        <animate attributeName="cy" values="55;30" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.18;0" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="8;14" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="150" cy="75" rx="6" ry="4" fill="var(--andesite)" opacity="0.18">
        <animate attributeName="cy" values="75;50" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.18;0" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="6;11" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
      </ellipse>

      
      <rect x="90" y="155" width="305" height="210" rx="4" fill="none" stroke="var(--andesite)" strokeWidth="1" opacity="0.13" strokeDasharray="4 4"/>
      <circle cx="93" cy="158" r="3" fill="var(--andesite)" opacity="0.25"/>
      <circle cx="392" cy="158" r="3" fill="var(--andesite)" opacity="0.25"/>
      <circle cx="93" cy="362" r="3" fill="var(--andesite)" opacity="0.25"/>
      <circle cx="392" cy="362" r="3" fill="var(--andesite)" opacity="0.25"/>

      
      <rect x="55" y="240" width="76" height="16" rx="2" fill="var(--brass)" opacity="0.13"/>
      <text x="93" y="252" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--brass)" opacity="0.65">MAIN SHAFT</text>
      <rect x="350" y="240" width="66" height="16" rx="2" fill="var(--water-flow)" opacity="0.1"/>
      <text x="383" y="252" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--water-flow)" opacity="0.65">H2O FLOW</text>
      <HeroMachineExtras />
    </svg>
  </div>

  <p className="hero-eyebrow"><span className="eyebrow-line"></span>available for opportunities</p>
  <h1 className="hero-name">TJ<br /><span className="hero-name-accent">Cariño</span></h1>
  <p className="hero-title">⚙ Frontend Developer · Full-Stack Builder</p>
  <p className="hero-sub">Crafting fast, responsive web experiences from pixel-perfect UI to full-stack platforms. Baguio City, Philippines.</p>
  <div className="hero-actions">
    <a className="btn-primary" href="#projects">View My Work ↓</a>
    <a className="btn-ghost" href="https://github.com/carinotj19" target="_blank">github →</a>
  </div>
  <div className="hero-stats">
    <div className="stat"><div className="stat-val">4+</div><div className="stat-label">yrs experience</div></div>
    <div className="stat"><div className="stat-val">300+</div><div className="stat-label">sites managed</div></div>
    <div className="stat"><div className="stat-val">1K+</div><div className="stat-label">tickets / month</div></div>
    <div className="stat"><div className="stat-val">30</div><div className="stat-label">public repos</div></div>
  </div>
</section>


<div className="cog-divider">
  <div className="cog-divider-line"></div>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="1.5" className="cog-icon">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
  <div className="cog-divider-line"></div>
</div>


<section id="about">
  <div className="about-grid">
    <div className="about-text">
      <p className="section-label">about me</p>
      <h2 className="section-title">The Contraption<br />Behind the Code</h2>
      <p>I'm a frontend-focused developer with a strong eye for UI and a knack for solving production problems at scale. I thrive in ticket-driven environments and love making complex systems feel simple.</p>
      <p>Currently working remotely as a <strong>Frontend Developer at Pixel Motion</strong>, managing 300+ WordPress sites and resolving up to 1,100 support tickets per month. Previously built full-stack platforms at <strong>Atis Software</strong> in Amsterdam.</p>
      <p>Finishing my <strong>B.S. in Computer Science</strong> at the University of the Cordilleras (August 2025) and open to new opportunities — full-time or freelance.</p>
      <div className="badge-list">
        <span className="badge">React</span><span className="badge">WordPress</span><span className="badge">JavaScript</span>
        <span className="badge">PHP</span><span className="badge">Docker</span><span className="badge">AWS</span>
        <span className="badge">Three.js</span><span className="badge">MongoDB</span>
      </div>
    </div>
    <div>
      <div className="about-plate">
        <div className="plate-header">⚙ OPERATOR MANIFEST</div>
        <div className="plate-row"><div className="plate-key">Location</div><div className="plate-val">Baguio City, Philippines</div></div>
        <div className="plate-row"><div className="plate-key">Degree</div><div className="plate-val">B.S. Computer Science — Univ. of the Cordilleras</div></div>
        <div className="plate-row"><div className="plate-key">Email</div><div className="plate-val"><a href="mailto:carinotj19@gmail.com">carinotj19@gmail.com</a></div></div>
        <div className="plate-row"><div className="plate-key">GitHub</div><div className="plate-val"><a href="https://github.com/carinotj19" target="_blank">carinotj19</a></div></div>
        <div className="plate-row"><div className="plate-key">Status</div><div className="plate-val"><span className="status-dot"></span>Open to opportunities</div></div>
        <div className="plate-row"><div className="plate-key">Phone</div><div className="plate-val">(+63) 968-758-3783</div></div>
      </div>
    </div>
  </div>
</section>


<div className="cog-divider">
  <div className="cog-divider-line"></div>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="1.5" className="cog-icon-r">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
  <div className="cog-divider-line"></div>
</div>


<section id="experience" style={{ maxWidth: "1100px", margin: "0 auto" }}>
  <p className="section-label">experience</p>
  <h2 className="section-title">The Workshop Log</h2>

  <div className="exp-item">
    <div className="exp-date">Apr 2024<br />→ Present</div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div>
      <div className="exp-company">Pixel Motion · Costa Mesa, CA — Remote</div>
      <div className="exp-role">Frontend Developer</div>
      <div className="exp-desc">Managed and optimized 300+ WordPress websites, resolving 900–1,100 support and development tickets per month. Implemented responsive pages from Figma designs, built flexible layouts using Advanced Custom Fields, and deployed updates across multiple client sites.</div>
      <div className="exp-tags"><span className="tag">WordPress</span><span className="tag">HTML/CSS</span><span className="tag">JavaScript</span><span className="tag">jQuery</span><span className="tag">ACF</span><span className="tag">Figma</span></div>
    </div>
  </div>

  <div className="exp-item">
    <div className="exp-date">Dec 2022<br />→ Dec 2023</div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div>
      <div className="exp-company">Atis Software · Amsterdam, Netherlands — Remote</div>
      <div className="exp-role">Junior Software Developer</div>
      <div className="exp-desc">Designed and deployed a full-stack web platform using React and Strapi. Built REST APIs, managed VPS deployment with CapRover and Docker, and integrated AWS S3 for storage and SES for transactional email.</div>
      <div className="exp-tags"><span className="tag">React</span><span className="tag">Strapi</span><span className="tag">Docker</span><span className="tag">AWS S3</span><span className="tag">AWS SES</span><span className="tag">REST API</span></div>
    </div>
  </div>

  <div className="exp-item">
    <div className="exp-date">Mar 2020<br />→ Nov 2021</div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div>
      <div className="exp-company">CriminTech · Baguio City, Philippines — On-site</div>
      <div className="exp-role">WordPress Developer</div>
      <div className="exp-desc">Developed and maintained a WordPress-based e-learning platform for criminology students, supporting course modules, quizzes, and progress tracking. Integrated third-party services for video delivery and grading workflows.</div>
      <div className="exp-tags"><span className="tag">WordPress</span><span className="tag">PHP</span><span className="tag">LMS</span><span className="tag">Plugin Dev</span></div>
    </div>
  </div>
</section>


<div className="cog-divider">
  <div className="cog-divider-line"></div>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="1.5" className="cog-icon">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
  <div className="cog-divider-line"></div>
</div>


<section id="projects">
  <p className="section-label">projects</p>
  <h2 className="section-title">The Assembly Floor</h2>
  <div className="projects-grid">
    <a className="project-card" href="https://github.com/carinotj19/CabKit3D" target="_blank">
      <div className="project-icon-row"><div className="project-glyph">📦</div><span className="proj-link">↗</span></div>
      <div className="project-title">CabKit3D</div>
      <div className="project-desc">Web-based 3D cabinet configurator with real-time customization, exploded/turntable views, live pricing, and deterministic SKU JSON &amp; BOM CSV export.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Three.js</span><span className="tag">Vite</span><span className="tag">3D</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/ShelterSync" target="_blank">
      <div className="project-icon-row"><div className="project-glyph">🐾</div><span className="proj-link">↗</span></div>
      <div className="project-title">ShelterSync</div>
      <div className="project-desc">Full-stack MERN pet adoption platform enabling shelters and adopters to manage listings, adoption requests, and workflows via RESTful APIs.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">MongoDB</span><span className="tag">Express</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/BMart" target="_blank">
      <div className="project-icon-row"><div className="project-glyph">🛒</div><span className="proj-link">↗</span></div>
      <div className="project-title">BMart</div>
      <div className="project-desc">Android grocery ordering app built in Kotlin with multi-vendor support, in-app messaging, and payment integration.</div>
      <div className="project-tags"><span className="tag">Kotlin</span><span className="tag">Android</span><span className="tag">Mobile</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/BrainyBox" target="_blank">
      <div className="project-icon-row"><div className="project-glyph">🧠</div><span className="proj-link">↗</span></div>
      <div className="project-title">BrainyBox</div>
      <div className="project-desc">React + Tailwind trivia app pulling live questions from Open Trivia DB. Customizable categories, difficulty, and real-time scoring.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Tailwind</span><span className="tag">Open Trivia API</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/OnlinePortfolio" target="_blank">
      <div className="project-icon-row"><div className="project-glyph">🌐</div><span className="proj-link">↗</span></div>
      <div className="project-title">Online Portfolio</div>
      <div className="project-desc">Previous portfolio iteration — source code open on GitHub for reference and inspiration.</div>
      <div className="project-tags"><span className="tag">JavaScript</span><span className="tag">HTML/CSS</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19?tab=repositories" target="_blank" style={{ borderStyle: "dashed" }}>
      <div className="project-icon-row"><div className="project-glyph" style={{ fontSize: "22px", fontWeight: "300" }}>+</div><span className="proj-link">↗</span></div>
      <div className="project-title">More on GitHub</div>
      <div className="project-desc">30+ public repositories covering experiments, coursework, and side projects.</div>
      <div className="project-tags"><span className="tag">30+ repos</span></div>
    </a>
  </div>
</section>


<section id="skills" style={{ maxWidth: "1100px", margin: "0 auto" }}>
  <p className="section-label">skills</p>
  <h2 className="section-title">Components &amp; Alloys</h2>
  <div className="skills-grid">
    <div className="skill-group">
      <div className="skill-group-head">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 8s linear infinite" }}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Languages
      </div>
      <div className="skill-body">
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>JavaScript (ES6+)</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>PHP</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>HTML5 &amp; CSS3</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>SQL &amp; Kotlin</div>
      </div>
    </div>
    <div className="skill-group">
      <div className="skill-group-head">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin-r 10s linear infinite" }}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Frameworks
      </div>
      <div className="skill-body">
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>React</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Three.js / R3F</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>jQuery</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Bootstrap &amp; Tailwind</div>
      </div>
    </div>
    <div className="skill-group">
      <div className="skill-group-head">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 14s linear infinite" }}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Backend &amp; CMS
      </div>
      <div className="skill-body">
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Node.js / Express</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Strapi (Headless CMS)</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>WordPress / ACF</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>MySQL &amp; MongoDB</div>
      </div>
    </div>
    <div className="skill-group">
      <div className="skill-group-head">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin-r 7s linear infinite" }}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        DevOps &amp; Cloud
      </div>
      <div className="skill-body">
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Git &amp; GitHub</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>Docker</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>AWS S3 &amp; SES</div>
        <div className="skill-item"><svg className="skill-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/></svg>CapRover / CI/CD</div>
      </div>
    </div>
  </div>
</section>


<section id="contact" style={{ background: "var(--surface)", borderTop: "2px solid var(--border)" }}>
  <div className="contact-inner">
    <p className="section-label" style={{ justifyContent: "center" }}>contact</p>
    <h2 className="contact-title">Let's Build<br /><span>Something.</span></h2>
    <p className="contact-sub">Open to full-time roles, contract work, and interesting freelance projects. All messages welcome — the gears are always turning.</p>
    <div className="contact-links">
      <a className="contact-link" href="mailto:carinotj19@gmail.com">✉ email</a>
      <a className="contact-link" href="https://github.com/carinotj19" target="_blank">⌥ github</a>
      <a className="contact-link" href="https://www.linkedin.com/in/tj-carino" target="_blank">in linkedin</a>
    </div>
  </div>
</section>

<footer>
  <span>© 2025 TJ Cariño — Baguio City, Philippines</span>
  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" style={{ animation: "spin 6s linear infinite" }}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
    Still spinning
  </span>
</footer>
    </>
  );
}
