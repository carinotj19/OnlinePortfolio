import { useEffect, useState } from 'react';
import './App.css';
import ProjectsHologram from './ProjectsHologram.jsx';

function CogWheel({
  x,
  y,
  size = 'small',
  duration = '8s',
  reverse = false,
  opacity = 1,
  rotationOffset = 0,
}) {
  const radius = size === 'big' ? 40 : 24;
  const wheelTeeth = size === 'big' ? 10 : 8;
  const toothAngles = Array.from({ length: wheelTeeth }, (_, index) => (360 / wheelTeeth) * index);
  const toothWidth = Math.max(13, radius * 0.36);
  const toothHeight = Math.max(12, radius * 0.3);
  const socketSize = Math.max(13, radius * 0.44);
  const rotationEnd = reverse ? rotationOffset - 360 : rotationOffset + 360;

  return (
    <g transform={`translate(${x} ${y})`} opacity={opacity}>
      <g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={rotationOffset}
            to={rotationEnd}
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
    </g>
  );
}

function AndesiteCasingFace({ x = 0, y = 0, scale = 1 }) {
  return (
    <g className="andesite-casing-face" transform={`translate(${x} ${y})`} aria-hidden="true">
      <g transform={`scale(${scale})`}>
        <rect x="-20" y="-20" width="40" height="40" rx="2" className="andesite-casing-shadow" />
        <rect x="-20" y="-20" width="40" height="40" rx="2" className="andesite-casing-frame" />
        <rect x="-15" y="-15" width="30" height="30" rx="1" className="andesite-casing-inner-frame" />
        <rect x="-11" y="-11" width="22" height="22" rx="1" className="andesite-casing-wood-base" />
        <rect x="-9" y="-9" width="5" height="18" className="andesite-casing-plank dark" />
        <rect x="-3" y="-9" width="6" height="18" className="andesite-casing-plank mid" />
        <rect x="4" y="-9" width="5" height="18" className="andesite-casing-plank light" />
        <path d="M-4 -9 V9 M4 -9 V9 M-11 -11 H11 M-11 11 H11" className="andesite-casing-cuts" />
      </g>
    </g>
  );
}

function BeltShaft({ x, y, reverse = false }) {
  return (
    <g transform={`translate(${x} ${y})`} className="belt-shaft">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to={reverse ? '-360' : '360'}
          dur="2.2s"
          repeatCount="indefinite"
        />
        <rect x="-10" y="-10" width="20" height="20" rx="1" className="shaft-socket-shadow" />
        <rect x="-6" y="-6" width="12" height="12" rx="1" className="shaft-socket" />
      </g>
    </g>
  );
}

function VerticalDriveShaft({ x, y1, y2 }) {
  const height = y2 - y1;

  return (
    <g className="vertical-drive-shaft" transform={`translate(${x} ${y1})`} aria-hidden="true">
      <defs>
        <linearGradient id="vertical-shaft-left-to-right-face" x1="-18" y1="0" x2="18" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#30342f" />
          <stop offset="0.45" stopColor="#7f8378" />
          <stop offset="1" stopColor="#30342f" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="-18 0;18 0"
            dur="1.1s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <rect x="-10" y="-2" width="20" height={height + 4} rx="2" className="vertical-shaft-shadow" />
      <g>
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;0.42 1;1 1;0.42 1;1 1"
          keyTimes="0;0.25;0.5;0.75;1"
          dur="1.1s"
          repeatCount="indefinite"
        />
        <rect x="-9" y="0" width="18" height={height} rx="2" className="vertical-shaft-body" />
        <rect x="-9" y="0" width="18" height={height} rx="2" className="vertical-shaft-rotating-face" fill="url(#vertical-shaft-left-to-right-face)" />
        <path d={`M0 3 V${height - 3}`} className="vertical-shaft-core-lines" />
        <rect x="-9" y="0" width="18" height={height} rx="2" className="vertical-shaft-edge" />
      </g>
    </g>
  );
}

function VerticalShaftWindOverlay({ x, y1, y2 }) {
  const fanCycleDuration = '10s';
  const height = y2 - y1;
  const windWisps = [
    { x: -6, y: height - 18, length: 58, bend: 5, delay: '0s', opacity: 0.54 },
    { x: 3, y: height - 54, length: 48, bend: -4, delay: '0.18s', opacity: 0.66 },
    { x: -2, y: height - 94, length: 54, bend: 4, delay: '0.36s', opacity: 0.5 },
    { x: 6, y: height - 138, length: 46, bend: -5, delay: '0.54s', opacity: 0.46 },
  ];

  return (
    <g className="vertical-shaft-wind-overlay" transform={`translate(${x} ${y1})`} opacity="0" aria-hidden="true">
      <animate
        attributeName="opacity"
        values="0;0;1;0.85;0;0"
        keyTimes="0;0.2;0.24;0.66;0.7;1"
        dur={fanCycleDuration}
        repeatCount="indefinite"
      />
      <defs>
        <clipPath id="vertical-shaft-wind-clip">
          <rect x="-18" y="-28" width="36" height={height + 56} rx="5" />
        </clipPath>
      </defs>
      <g className="vertical-shaft-wind" clipPath="url(#vertical-shaft-wind-clip)">
        {windWisps.map((wisp) => (
          <path
            key={`${wisp.x}-${wisp.y}`}
            d={`M${wisp.x} ${wisp.y + wisp.length} C${wisp.x + wisp.bend} ${wisp.y + wisp.length * 0.7} ${wisp.x - wisp.bend} ${wisp.y + wisp.length * 0.34} ${wisp.x} ${wisp.y}`}
            className="vertical-shaft-wind-stream"
            opacity={wisp.opacity}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 26;0 -46"
              dur="1.15s"
              begin={wisp.delay}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.85;0.55;0"
              keyTimes="0;0.22;0.58;1"
              dur="1.15s"
              begin={wisp.delay}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </g>
    </g>
  );
}

function MechanicalFan({ x, y }) {
  const burstDuration = '10s';

  return (
    <g className="mechanical-fan" transform={`translate(${x} ${y})`} aria-hidden="true">
      <g className="mechanical-fan-rotor">
        <animate
          attributeName="opacity"
          values="0;0;0.82;0.68;0;0"
          keyTimes="0;0.17;0.2;0.66;0.7;1"
          dur={burstDuration}
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 12;0 12;0 0;0 -2;0 8;0 8"
          keyTimes="0;0.17;0.2;0.66;0.7;1"
          dur={burstDuration}
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.54;0.54;1;1;0.72;0.72"
          keyTimes="0;0.17;0.2;0.66;0.7;1"
          dur={burstDuration}
          repeatCount="indefinite"
          additive="sum"
        />
        <g transform="translate(0 2)">
          <ellipse cx="0" cy="0" rx="34" ry="9" className="mechanical-fan-rim-shadow" />
          <g transform="scale(1 0.3)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="-1440"
                dur="0.72s"
                repeatCount="indefinite"
              />
              <ellipse cx="0" cy="-15" rx="5" ry="20" className="mechanical-fan-blade" />
              <ellipse cx="0" cy="15" rx="5" ry="20" className="mechanical-fan-blade" />
              <ellipse cx="-15" cy="0" rx="20" ry="5" className="mechanical-fan-blade" />
              <ellipse cx="15" cy="0" rx="20" ry="5" className="mechanical-fan-blade" />
              <circle r="8" className="mechanical-fan-hub" />
            </g>
          </g>
          <ellipse cx="0" cy="0" rx="34" ry="9" className="mechanical-fan-rim" />
          <ellipse cx="0" cy="0" rx="8" ry="3.2" className="mechanical-fan-hub-cap" />
        </g>
      </g>
    </g>
  );
}

function MechanicalBeltSide() {
  const beltRibs = Array.from({ length: 16 }, (_, index) => index);
  const outerBeltPath = `
    M86 462
    L476 462
    C490 462 504 473 504 486
    C504 499 490 510 476 510
    L86 510
    C72 510 58 499 58 486
    C58 473 72 462 86 462
    Z
  `;
  const innerBeltPath = `
    M90 478
    L472 478
    C480 478 486 482 486 486
    C486 490 480 494 472 494
    L90 494
    C82 494 76 490 76 486
    C76 482 82 478 90 478
    Z
  `;
  const topBeltMaskPath = `
    M86 462
    L476 462
    C490 462 504 473 504 486
    L486 486
    C486 482 480 478 472 478
    L90 478
    C82 478 76 482 76 486
    L58 486
    C58 473 72 462 86 462
    Z
  `;
  const bottomBeltMaskPath = `
    M76 486
    C76 490 82 494 90 494
    L472 494
    C480 494 486 490 486 486
    L504 486
    C504 499 490 510 476 510
    L86 510
    C72 510 58 499 58 486
    Z
  `;

  return (
    <g className="mechanical-belt-side">
      <defs>
        <mask id="mechanical-belt-top-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="430" width="580" height="110" fill="black" />
          <path d={topBeltMaskPath} fill="white" />
        </mask>
        <mask id="mechanical-belt-bottom-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="430" width="580" height="110" fill="black" />
          <path d={bottomBeltMaskPath} fill="white" />
        </mask>
      </defs>
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-shadow" />
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-body" />
      <path d={outerBeltPath} className="mechanical-belt-side-outer-edge" />
      <path d={innerBeltPath} className="mechanical-belt-side-inner-edge" />
      <path d="M88 466 H474" className="mechanical-belt-side-highlight" />
      <g mask="url(#mechanical-belt-top-mask)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-36 0;0 0"
            dur="1.1s"
            repeatCount="indefinite"
          />
          {beltRibs.map((index) => (
            <path key={index} d={`M${50 + index * 36} 456 L${74 + index * 36} 516`} className="mechanical-belt-side-rib" />
          ))}
        </g>
      </g>
      <g mask="url(#mechanical-belt-bottom-mask)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;-36 0"
            dur="1.1s"
            repeatCount="indefinite"
          />
          {beltRibs.map((index) => (
            <path key={index} d={`M${50 + index * 36} 456 L${74 + index * 36} 516`} className="mechanical-belt-side-rib" />
          ))}
        </g>
      </g>
    </g>
  );
}

function MechanicalTopReturnBelt() {
  const beltRibs = Array.from({ length: 16 }, (_, index) => index);
  const outerBeltPath = `
    M118 248
    L492 248
    C506 248 520 259 520 272
    C520 285 506 296 492 296
    L118 296
    C104 296 90 285 90 272
    C90 259 104 248 118 248
    Z
  `;
  const innerBeltPath = `
    M122 264
    L488 264
    C496 264 502 268 502 272
    C502 276 496 280 488 280
    L122 280
    C114 280 108 276 108 272
    C108 268 114 264 122 264
    Z
  `;
  const topBeltMaskPath = `
    M118 248
    L492 248
    C506 248 520 259 520 272
    L502 272
    C502 268 496 264 488 264
    L122 264
    C114 264 108 268 108 272
    L90 272
    C90 259 104 248 118 248
    Z
  `;
  const bottomBeltMaskPath = `
    M108 272
    C108 276 114 280 122 280
    L488 280
    C496 280 502 276 502 272
    L520 272
    C520 285 506 296 492 296
    L118 296
    C104 296 90 285 90 272
    Z
  `;

  return (
    <g className="mechanical-belt-side top-return-belt">
      <defs>
        <mask id="top-return-belt-top-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="214" width="580" height="110" fill="black" />
          <path d={topBeltMaskPath} fill="white" />
        </mask>
        <mask id="top-return-belt-bottom-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="214" width="580" height="110" fill="black" />
          <path d={bottomBeltMaskPath} fill="white" />
        </mask>
      </defs>
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-shadow" />
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-body" />
      <path d={outerBeltPath} className="mechanical-belt-side-outer-edge" />
      <path d={innerBeltPath} className="mechanical-belt-side-inner-edge" />
      <path d="M120 252 H490" className="mechanical-belt-side-highlight" />
      <g mask="url(#top-return-belt-top-mask)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;-36 0"
            dur="1.1s"
            repeatCount="indefinite"
          />
          {beltRibs.map((index) => (
            <path key={index} d={`M${50 + index * 36} 242 L${74 + index * 36} 302`} className="mechanical-belt-side-rib" />
          ))}
        </g>
      </g>
      <g mask="url(#top-return-belt-bottom-mask)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-36 0;0 0"
            dur="1.1s"
            repeatCount="indefinite"
          />
          {beltRibs.map((index) => (
            <path key={index} d={`M${50 + index * 36} 242 L${74 + index * 36} 302`} className="mechanical-belt-side-rib" />
          ))}
        </g>
      </g>
    </g>
  );
}

function CasingTopTransferBelt() {
  const beltRibs = Array.from({ length: 7 }, (_, index) => index);
  const outerBeltPath = `
    M486 462
    L522 462
    C536 462 550 473 550 486
    C550 499 536 510 522 510
    L486 510
    C472 510 458 499 458 486
    C458 473 472 462 486 462
    Z
  `;
  const innerBeltPath = `
    M490 478
    L518 478
    C526 478 532 482 532 486
    C532 490 526 494 518 494
    L490 494
    C482 494 476 490 476 486
    C476 482 482 478 490 478
    Z
  `;
  const topBeltMaskPath = `
    M486 462
    L522 462
    C536 462 550 473 550 486
    L532 486
    C532 482 526 478 518 478
    L490 478
    C482 478 476 482 476 486
    L458 486
    C458 473 472 462 486 462
    Z
  `;
  const bottomBeltMaskPath = `
    M476 486
    C476 490 482 494 490 494
    L518 494
    C526 494 532 490 532 486
    L550 486
    C550 499 536 510 522 510
    L486 510
    C472 510 458 499 458 486
    Z
  `;

  return (
    <g className="mechanical-belt-side casing-top-transfer-belt" aria-hidden="true">
      <defs>
        <mask id="casing-top-belt-top-mask" maskUnits="userSpaceOnUse">
          <rect x="448" y="450" width="152" height="74" fill="black" />
          <path d={topBeltMaskPath} fill="white" />
        </mask>
        <mask id="casing-top-belt-bottom-mask" maskUnits="userSpaceOnUse">
          <rect x="448" y="450" width="152" height="74" fill="black" />
          <path d={bottomBeltMaskPath} fill="white" />
        </mask>
      </defs>
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-shadow" />
      <path d={`${outerBeltPath} ${innerBeltPath}`} fillRule="evenodd" className="mechanical-belt-side-body" />
      <path d={outerBeltPath} className="mechanical-belt-side-outer-edge" />
      <path d={innerBeltPath} className="mechanical-belt-side-inner-edge" />
      <path d="M488 470 H520" className="mechanical-belt-side-highlight" />
      <g mask="url(#casing-top-belt-top-mask)">
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-20 0;0 0"
            dur="0.8s"
            repeatCount="indefinite"
          />
          {beltRibs.map((index) => (
            <path key={index} d={`M${450 + index * 20} 456 L${466 + index * 20} 516`} className="mechanical-belt-side-rib" />
          ))}
        </g>
      </g>
      <g mask="url(#casing-top-belt-bottom-mask)">
        <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;-20 0"
          dur="0.8s"
          repeatCount="indefinite"
        />
        {beltRibs.map((index) => (
          <path key={index} d={`M${450 + index * 20} 456 L${466 + index * 20} 516`} className="mechanical-belt-side-rib" />
        ))}
        </g>
      </g>
      <BeltShaft x={522} y={486} />
    </g>
  );
}

function CirculatingModuleBlock() {
  const motionPath = 'M58 388 C58 408 58 424 58 430 L430 430 C468 430 497 408 497 376 L497 220 L140 220';

  return (
    <g className="workshop-module circulating-module" aria-hidden="true">
      <animateMotion
        path={motionPath}
        keyPoints="0;0.041;0.408;0.494;0.648;1;1"
        keyTimes="0;0.033;0.326;0.395;0.518;0.8;1"
        calcMode="linear"
        dur="10s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;1;0;0"
        keyTimes="0;0.8;0.801;1"
        dur="10s"
        repeatCount="indefinite"
      />
      <rect x="3" y="4" width="54" height="28" rx="3" className="circulating-module-shadow" />
      <rect x="0" y="0" width="54" height="28" rx="3" className="circulating-module-body" />
      <path d="M8 8 H46 M8 20 H46 M27 3 V25" className="workshop-module-cuts" />
      <rect x="7" y="-6" width="40" height="8" rx="2" className="workshop-brass-cap" />
      <text x="27" y="18" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--text)">
        UI
      </text>
    </g>
  );
}

function CreateChute({ x, y }) {
  return (
    <g className="workshop-chute" transform={`translate(${x} ${y})`} aria-hidden="true">
      <rect x="0" y="0" width="60" height="48" className="workshop-chute-body" />
      <rect x="11" y="48" width="38" height="22" className="workshop-chute-neck" />
      <path d="M8 15 H52 M8 31 H52" className="workshop-chute-cuts" />
      <path d="M0 0 V48 H60 V0 M11 48 H49" className="workshop-chute-edges" />
    </g>
  );
}

function LeftChuteStack() {
  return (
    <g className="workshop-chute-stack">
      <CreateChute x={51} y={252} />
      <CreateChute x={51} y={322} />
    </g>
  );
}

function MinecraftBarrelFront({ x, y, scale = 1 }) {
  return (
    <g className="wooden-barrel" transform={`translate(${x} ${y}) scale(${scale})`} aria-hidden="true">
      <rect x="0" y="0" width="44" height="44" className="wooden-barrel-frame" />
      <rect x="4" y="4" width="36" height="36" className="wooden-barrel-face" />
      <path d="M12 8 H32 V12 H36 V32 H32 V36 H12 V32 H8 V12 H12 Z" className="wooden-barrel-head" />
      <rect x="12" y="8" width="8" height="4" className="wooden-barrel-pixel light" />
      <rect x="28" y="12" width="4" height="20" className="wooden-barrel-pixel shade" />
      <rect x="12" y="32" width="20" height="4" className="wooden-barrel-pixel shade" />
      <rect x="18" y="14" width="4" height="16" className="wooden-barrel-seam" />
      <path d="M12 8 H32 M8 12 V32 M32 36 H12 M36 12 V32" className="wooden-barrel-cuts" />
      <rect x="10" y="18" width="7" height="8" className="wooden-barrel-latch" />
      <rect x="12" y="19" width="3" height="6" className="wooden-barrel-latch-highlight" />
    </g>
  );
}

function AndesiteFunnel({ x, y, scale = 1 }) {
  return (
    <g className="andesite-funnel" transform={`translate(${x} ${y}) scale(${scale})`} aria-hidden="true">
      <rect x="0" y="0" width="18" height="8" className="andesite-funnel-top" />
      <g transform="translate(0 8)">
        <rect x="0" y="0" width="18" height="44" className="andesite-funnel-body" />
        <rect x="3" y="10" width="3" height="30" className="andesite-funnel-stripe dark" />
        <rect x="8" y="10" width="3" height="30" className="andesite-funnel-stripe mid" />
        <rect x="13" y="10" width="3" height="30" className="andesite-funnel-stripe light" />
        <path d="M0 0 H18 M0 0 V44 M18 0 V44 M0 44 H18" className="andesite-funnel-edges" />
      </g>
    </g>
  );
}

function Gearbox({ x, y, width, height, label, cogSize = 'big', reverse = false, duration = '7s', rotationOffset = 0 }) {
  return (
    <g className="cogwheel">
      <CogWheel x={x + width / 2} y={y + height / 2} size={cogSize} duration={duration} reverse={reverse} rotationOffset={rotationOffset} />
      <text x={x + width / 2} y={y + height + 20} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="var(--brass)" opacity="0.72">
        {label}
      </text>
    </g>
  );
}

function HeroMachineExtras() {
  return (
    <g className="create-contraption workshop-contraption">
      <rect x="74" y="86" width="462" height="382" rx="6" className="workshop-backplate" />
      <path d="M85 272 V430 H505 V272 H85" className="workshop-loop-guide" />

      <g className="workshop-powertrain" transform="translate(21 0)">
        <Gearbox x={128} y={162} width={126} height={116} label="COMPONENTS" cogSize="big" reverse duration="8s" rotationOffset={9} />
        <CogWheel x={243} y={168} size="small" duration="6.4s" rotationOffset={22.5} opacity="0.9" />
        <CogWheel x={295} y={168} size="small" duration="6.4s" reverse opacity="0.9" />
        <CogWheel x={347} y={168} size="small" duration="6.4s" rotationOffset={22.5} opacity="0.9" />
        <Gearbox x={340} y={166} width={118} height={108} label="ROUTING" cogSize="big" reverse duration="8s" rotationOffset={27} />
        <CogWheel x={451} y={272} size="small" duration="6.4s" rotationOffset={22.5} opacity="0.88" />
        <CogWheel x={503} y={272} size="small" duration="6.4s" reverse opacity="0.86" />
      </g>

      <VerticalDriveShaft x={524} y1={272} y2={486} />

      <g className="workshop-conveyor">
        <AndesiteCasingFace x={524} y={486} scale={1.45} />
        <CasingTopTransferBelt />
        <MechanicalBeltSide />
        <BeltShaft x={86} y={486} />
        <BeltShaft x={476} y={486} />
      </g>

      <g className="workshop-top-return" transform="translate(32 0)">
        <MechanicalTopReturnBelt />
        <BeltShaft x={118} y={272} reverse />
        <BeltShaft x={492} y={272} reverse />
        <MinecraftBarrelFront x={13.8} y={178} scale={1.595} />
        <AndesiteFunnel x={84} y={178} scale={1.35} />
      </g>

      <VerticalShaftWindOverlay x={524} y1={272} y2={486} />

      <CirculatingModuleBlock />
      <LeftChuteStack />
      <MechanicalFan x={524} y={538} />

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

function Icon({ name, size = 16, className = '', strokeWidth = 1.8, title, style }) {
  const icons = {
    gear: (
      <>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.82-.33 1.7 1.7 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.68 15a1.7 1.7 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.68a1.7 1.7 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.51 1.7 1.7 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
    moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />,
    arrowDown: (
      <>
        <path d="M12 5v14" />
        <path d="m6 13 6 6 6-6" />
      </>
    ),
    externalLink: (
      <>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    github: (
      <path d="M9 19c-4 1.2-4-2-5.6-2.4M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 18.7 7a4.3 4.3 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12.2 12.2 0 0 0-6 0C6.5 3.2 5.4 3.5 5.4 3.5A4.3 4.3 0 0 0 5.3 7 4.6 4.6 0 0 0 4 10.5c0 4.7 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a5 5 0 0 1 5 5v6h-4v-6a1 1 0 0 0-2 0v6h-4V8h4v1.3A4 4 0 0 1 16 8Z" />
        <rect x="3" y="8" width="4" height="11" rx="1" />
        <circle cx="5" cy="4.5" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    package: (
      <>
        <path d="m21 8-9-5-9 5 9 5 9-5Z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
    paw: (
      <>
        <circle cx="7" cy="8" r="1.8" />
        <circle cx="12" cy="6" r="1.8" />
        <circle cx="17" cy="8" r="1.8" />
        <circle cx="8.5" cy="13" r="1.6" />
        <circle cx="15.5" cy="13" r="1.6" />
        <path d="M8 18c0-2.4 1.8-4 4-4s4 1.6 4 4c0 1.3-.9 2-2 2h-4c-1.1 0-2-.7-2-2Z" />
      </>
    ),
    cart: (
      <>
        <path d="M3 4h2l2.3 10.5A2 2 0 0 0 9.3 16H18a2 2 0 0 0 1.9-1.4L21 8H6" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </>
    ),
    brain: (
      <>
        <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.2A3.5 3.5 0 0 0 7.5 18H9V4Z" />
        <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.2A3.5 3.5 0 0 1 16.5 18H15V4Z" />
        <path d="M9 8H7.5M15 8h1.5M9 12H7M15 12h2M9 16H7.5M15 16h1.5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    cloud: <path d="M17.5 19H8a5 5 0 1 1 .9-9.9A6.5 6.5 0 0 1 21 12.4 3.8 3.8 0 0 1 17.5 19Z" />,
    tool: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0 3 5.3l-8.5 8.5a2 2 0 0 1-2.8-2.8l8.5-8.5a4 4 0 0 0 5.3-3l-2.5 2.5-2.5-2.5 2.5-2.5a4 4 0 0 0-3 3Z" />
        <path d="M6.5 17.5 4 20" />
      </>
    ),
  };

  return (
    <svg
      className={`ui-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      style={style}
    >
      {title && <title>{title}</title>}
      {icons[name] || icons.tool}
    </svg>
  );
}

function CogDivider({ className = '', reverse = false, color = 'var(--brass)' }) {
  return (
    <div className={`cog-divider ${className}`.trim()}>
      <div className="cog-divider-line"></div>
      <Icon name="gear" size={22} className={reverse ? 'cog-icon-r' : 'cog-icon'} style={{ color }} />
      <div className="cog-divider-line"></div>
    </div>
  );
}

function ProjectIconRow({ icon }) {
  return (
    <div className="project-icon-row">
      <div className="project-glyph"><Icon name={icon} /></div>
      <span className="proj-link"><Icon name="externalLink" size={17} /></span>
    </div>
  );
}

function SkillGroupHead({ icon, reverse = false, duration = '8s', children }) {
  return (
    <div className="skill-group-head">
      <Icon
        name={icon}
        size={14}
        className={reverse ? 'spinning-ccw' : 'spinning-cw'}
        style={{ '--dur': duration }}
      />
      <span>{children}</span>
    </div>
  );
}

function SkillItem({ icon = 'tool', level = 70, children }) {
  const filledDots = Math.max(1, Math.min(5, Math.round(level / 20)));

  return (
    <div className="skill-item">
      <div className="skill-item-main">
        <Icon name={icon} className="skill-cog" />
        <span>{children}</span>
        <span className="skill-rating" aria-label={`${filledDots} out of 5 proficiency`}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < filledDots ? 'filled' : ''}></span>
          ))}
        </span>
      </div>
    </div>
  );
}

function emitProjectHologramFocus(cubeIndex) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('projects-hologram-focus', {
      detail: { cubeIndex },
    })
  );
}

function projectHologramHoverProps(cubeIndex) {
  return {
    onMouseEnter: () => emitProjectHologramFocus(cubeIndex),
    onFocus: () => emitProjectHologramFocus(cubeIndex),
    onMouseLeave: () => emitProjectHologramFocus(null),
    onBlur: () => emitProjectHologramFocus(null),
  };
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
    <Icon name="gear" className="nav-gear-sm" />
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
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={15} />
    </button>
    <a className="btn-hire" href="mailto:carinotj19@gmail.com">Hire Me</a>
  </div>
</nav>


<section id="hero">
  <div className="hero-machinery">
    <svg viewBox="0 0 600 700" width="100%" height="100%" style={{ position: "absolute", top: "0", right: "0" }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <HeroMachineExtras />
    </svg>
  </div>

  <p className="hero-eyebrow"><span className="eyebrow-line"></span>available for opportunities</p>
  <h1 className="hero-name">TJ<br /><span className="hero-name-accent">Cariño</span></h1>
  <p className="hero-title"><Icon name="gear" size={14} className="hero-title-icon" />Frontend Developer · Full-Stack Builder</p>
  <p className="hero-sub">Crafting fast, responsive web experiences from pixel-perfect UI to full-stack platforms. Baguio City, Philippines.</p>
  <div className="hero-actions">
    <a className="btn-primary" href="#projects">View My Work <Icon name="arrowDown" size={15} className="btn-icon" /></a>
    <a className="btn-ghost" href="https://github.com/carinotj19" target="_blank" rel="noreferrer"><Icon name="github" size={15} className="btn-icon" />GitHub</a>
  </div>
  <div className="hero-stats">
    <div className="stat"><div className="stat-val">4+</div><div className="stat-label">yrs experience</div></div>
    <div className="stat"><div className="stat-val">300+</div><div className="stat-label">sites managed</div></div>
    <div className="stat"><div className="stat-val">1K+</div><div className="stat-label">tickets / month</div></div>
    <div className="stat"><div className="stat-val">30</div><div className="stat-label">public repos</div></div>
  </div>
</section>


<CogDivider className="hero-divider" />


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
    <div className="about-stack">
      <div className="about-plate">
        <div className="plate-header"><Icon name="gear" size={13} />OPERATOR MANIFEST</div>
        <div className="plate-row"><div className="plate-key">Location</div><div className="plate-val">Baguio City, Philippines</div></div>
        <div className="plate-row"><div className="plate-key">Degree</div><div className="plate-val">B.S. Computer Science — Univ. of the Cordilleras</div></div>
        <div className="plate-row"><div className="plate-key">Email</div><div className="plate-val"><a href="mailto:carinotj19@gmail.com">carinotj19@gmail.com</a></div></div>
        <div className="plate-row"><div className="plate-key">GitHub</div><div className="plate-val"><a href="https://github.com/carinotj19" target="_blank" rel="noreferrer">carinotj19</a></div></div>
        <div className="plate-row"><div className="plate-key">Status</div><div className="plate-val"><span className="status-dot"></span>Open to opportunities</div></div>
        <div className="plate-row"><div className="plate-key">Phone</div><div className="plate-val">(+63) 968-758-3783</div></div>
      </div>
      <div className="parameters-panel">
        <div className="plate-header"><Icon name="tool" size={13} />WORKING PARAMETERS</div>
        <div className="parameter-grid">
          <div className="parameter-item"><Icon name="globe" size={15} /><span>Remote-ready</span></div>
          <div className="parameter-item"><Icon name="code" size={15} /><span>Frontend-focused</span></div>
          <div className="parameter-item"><Icon name="mail" size={15} /><span>Full-time / freelance</span></div>
        </div>
        <div className="parameter-actions">
          <a className="cv-download" href={`${import.meta.env.BASE_URL}TJ-Carino-CV.pdf`} download>
            <Icon name="download" size={15} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<CogDivider className="experience-divider" reverse color="var(--copper)" />


<section id="experience" style={{ maxWidth: "1100px", margin: "0 auto" }}>
  <p className="section-label">experience</p>
  <h2 className="section-title">The Workshop Log</h2>

  <div className="exp-item">
    <div className="exp-date"><span>Apr 2024</span><span>Present</span><small>Remote</small></div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div className="exp-card">
      <div className="exp-company">Pixel Motion · Costa Mesa, CA — Remote</div>
      <div className="exp-role">Frontend Developer</div>
      <div className="exp-type">Production Support</div>
      <div className="exp-metrics"><span>300+ sites</span><span>900-1,100 tickets / month</span><span>ACF layouts</span></div>
      <ul className="exp-impact">
        <li>Maintained a high-volume WordPress portfolio across multiple client sites.</li>
        <li>Built responsive pages from Figma designs with flexible ACF layouts.</li>
        <li>Resolved production support and development tickets while keeping deployments moving.</li>
      </ul>
      <div className="exp-tags"><span className="tag">WordPress</span><span className="tag">HTML/CSS</span><span className="tag">JavaScript</span><span className="tag">jQuery</span><span className="tag">ACF</span><span className="tag">Figma</span></div>
    </div>
  </div>

  <div className="exp-item">
    <div className="exp-date"><span>Dec 2022</span><span>Dec 2023</span><small>Remote</small></div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div className="exp-card">
      <div className="exp-company">Atis Software · Amsterdam, Netherlands — Remote</div>
      <div className="exp-role">Junior Software Developer</div>
      <div className="exp-type">Full-stack Build</div>
      <div className="exp-metrics"><span>React platform</span><span>REST APIs</span><span>VPS deployment</span></div>
      <ul className="exp-impact">
        <li>Designed and deployed a full-stack web platform using React and Strapi.</li>
        <li>Built API flows and managed server deployment with CapRover and Docker.</li>
        <li>Integrated AWS S3 storage and SES transactional email.</li>
      </ul>
      <div className="exp-tags"><span className="tag">React</span><span className="tag">Strapi</span><span className="tag">Docker</span><span className="tag">AWS S3</span><span className="tag">AWS SES</span><span className="tag">REST API</span></div>
    </div>
  </div>

  <div className="exp-item">
    <div className="exp-date"><span>Mar 2020</span><span>Nov 2021</span><small>On-site</small></div>
    <div className="exp-pipe"><div className="exp-pip"></div></div>
    <div className="exp-card">
      <div className="exp-company">CriminTech · Baguio City, Philippines — On-site</div>
      <div className="exp-role">WordPress Developer</div>
      <div className="exp-type">Learning Platform</div>
      <div className="exp-metrics"><span>LMS workflows</span><span>Course modules</span><span>Plugin work</span></div>
      <ul className="exp-impact">
        <li>Developed and maintained a WordPress e-learning platform for criminology students.</li>
        <li>Supported course modules, quizzes, progress tracking, and grading workflows.</li>
        <li>Integrated third-party services for video delivery and learning operations.</li>
      </ul>
      <div className="exp-tags"><span className="tag">WordPress</span><span className="tag">PHP</span><span className="tag">LMS</span><span className="tag">Plugin Dev</span></div>
    </div>
  </div>
</section>


<CogDivider className="projects-divider" />


<section id="projects">
  <ProjectsHologram />
  <p className="section-label">projects</p>
  <h2 className="section-title">The Assembly Floor</h2>
  <div className="projects-grid">
    <a className="project-card" href="https://github.com/carinotj19/CabKit3D" target="_blank" rel="noreferrer" {...projectHologramHoverProps(0)}>
      <ProjectIconRow icon="package" />
      <div className="project-title">CabKit3D</div>
      <div className="project-desc">Web-based 3D cabinet configurator with real-time customization, exploded/turntable views, live pricing, and deterministic SKU JSON &amp; BOM CSV export.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Three.js</span><span className="tag">Vite</span><span className="tag">3D</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/ShelterSync" target="_blank" rel="noreferrer" {...projectHologramHoverProps(1)}>
      <ProjectIconRow icon="paw" />
      <div className="project-title">ShelterSync</div>
      <div className="project-desc">Full-stack MERN pet adoption platform enabling shelters and adopters to manage listings, adoption requests, and workflows via RESTful APIs.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Node.js</span><span className="tag">MongoDB</span><span className="tag">Express</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/BMart" target="_blank" rel="noreferrer" {...projectHologramHoverProps(2)}>
      <ProjectIconRow icon="cart" />
      <div className="project-title">BMart</div>
      <div className="project-desc">Android grocery ordering app built in Kotlin with multi-vendor support, in-app messaging, and payment integration.</div>
      <div className="project-tags"><span className="tag">Kotlin</span><span className="tag">Android</span><span className="tag">Mobile</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/BrainyBox" target="_blank" rel="noreferrer" {...projectHologramHoverProps(3)}>
      <ProjectIconRow icon="brain" />
      <div className="project-title">BrainyBox</div>
      <div className="project-desc">React + Tailwind trivia app pulling live questions from Open Trivia DB. Customizable categories, difficulty, and real-time scoring.</div>
      <div className="project-tags"><span className="tag">React</span><span className="tag">Tailwind</span><span className="tag">Open Trivia API</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19/OnlinePortfolio" target="_blank" rel="noreferrer" {...projectHologramHoverProps(4)}>
      <ProjectIconRow icon="globe" />
      <div className="project-title">Online Portfolio</div>
      <div className="project-desc">Previous portfolio iteration — source code open on GitHub for reference and inspiration.</div>
      <div className="project-tags"><span className="tag">JavaScript</span><span className="tag">HTML/CSS</span></div>
    </a>
    <a className="project-card" href="https://github.com/carinotj19?tab=repositories" target="_blank" rel="noreferrer" style={{ borderStyle: "dashed" }} {...projectHologramHoverProps(5)}>
      <ProjectIconRow icon="plus" />
      <div className="project-title">More on GitHub</div>
      <div className="project-desc">30+ public repositories covering experiments, coursework, and side projects.</div>
      <div className="project-tags"><span className="tag">30+ repos</span></div>
    </a>
  </div>
</section>


<section id="skills" style={{ maxWidth: "1100px", margin: "0 auto" }}>
  <Icon name="gear" className="skills-bg-gear" />
  <p className="section-label">skills</p>
  <h2 className="section-title">Components &amp; Alloys</h2>
  <div className="skills-grid">
    <div className="skill-group">
      <SkillGroupHead icon="code" duration="8s">Languages</SkillGroupHead>
      <div className="skill-body">
        <SkillItem icon="code" level={92}>JavaScript (ES6+)</SkillItem>
        <SkillItem icon="code" level={62}>PHP</SkillItem>
        <SkillItem icon="code" level={90}>HTML5 &amp; CSS3</SkillItem>
        <SkillItem icon="database" level={62}>SQL</SkillItem>
      </div>
    </div>
    <div className="skill-group skill-group-featured">
      <SkillGroupHead icon="layers" reverse duration="10s">Frameworks</SkillGroupHead>
      <div className="skill-body">
        <SkillItem icon="layers" level={88}>React</SkillItem>
        <SkillItem icon="layers" level={62}>Three.js / R3F</SkillItem>
        <SkillItem icon="layers" level={82}>jQuery</SkillItem>
        <SkillItem icon="layers" level={64}>Tailwind CSS</SkillItem>
      </div>
    </div>
    <div className="skill-group">
      <SkillGroupHead icon="database" duration="14s">Backend &amp; CMS</SkillGroupHead>
      <div className="skill-body">
        <SkillItem icon="database" level={64}>Node.js / Express</SkillItem>
        <SkillItem icon="database" level={74}>Strapi CMS</SkillItem>
        <SkillItem icon="database" level={94}>WordPress / ACF</SkillItem>
        <SkillItem icon="database" level={64}>MySQL &amp; Mongo</SkillItem>
      </div>
    </div>
    <div className="skill-group">
      <SkillGroupHead icon="cloud" reverse duration="7s">DevOps &amp; Cloud</SkillGroupHead>
      <div className="skill-body">
        <SkillItem icon="github" level={88}>Git &amp; GitHub</SkillItem>
        <SkillItem icon="tool" level={64}>Docker</SkillItem>
        <SkillItem icon="cloud" level={44}>AWS S3 &amp; SES</SkillItem>
        <SkillItem icon="tool" level={44}>CapRover CI/CD</SkillItem>
      </div>
    </div>
  </div>
</section>


<section id="contact" style={{ background: "var(--surface)", borderTop: "2px solid var(--border)" }}>
  <div className="contact-inner">
    <span className="contact-crosshair" aria-hidden="true"></span>
    <p className="section-label" style={{ justifyContent: "center" }}>contact</p>
    <h2 className="contact-title">Let's Build<br /><span>Something.</span></h2>
    <p className="contact-sub">Open to full-time roles, contract work, and interesting freelance projects. All messages welcome — the gears are always turning.</p>
    <div className="contact-links">
      <a className="contact-link contact-link-primary" href="mailto:carinotj19@gmail.com"><Icon name="mail" size={16} />Email Me</a>
      <a className="contact-link contact-link-secondary" href="https://github.com/carinotj19" target="_blank" rel="noreferrer"><Icon name="github" size={14} />GitHub</a>
      <a className="contact-link contact-link-secondary" href="https://www.linkedin.com/in/tj-carino" target="_blank" rel="noreferrer"><Icon name="linkedin" size={14} />LinkedIn</a>
    </div>
  </div>
</section>

<footer>
  <span>© 2025 TJ Cariño — Baguio City, Philippines</span>
  <span className="footer-status">
    <Icon name="gear" size={12} className="footer-gear" />
    Still spinning
  </span>
</footer>
    </>
  );
}
