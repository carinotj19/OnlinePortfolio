import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DARK_GOLD = 0x8f6f22;
const COPPER = 0xd4763e;
const LIGHT_BRASS = 0xf0c85a;
const GROUND_BRASS = 0x6f5320;

function disposeScene(scene) {
  scene.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        if (material.map) material.map.dispose();
        material.dispose();
      });
    }
  });
}

function makeBeamParticles(count, planeY, cubeBaseY) {
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);

  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.38;
    const progress = Math.random();

    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = planeY + (cubeBaseY - planeY) * progress;
    positions[index * 3 + 2] = Math.sin(angle) * radius;
    seeds[index] = progress;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return {
    seeds,
    points: new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: COPPER,
        size: 0.035,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    ),
  };
}

function makeGroundGrid(width, depth, divisions, y) {
  const vertices = [];
  const halfWidth = width / 2;
  const halfDepth = depth / 2;

  for (let index = 0; index <= divisions; index += 1) {
    const x = -halfWidth + (width / divisions) * index;
    const z = -halfDepth + (depth / divisions) * index;

    vertices.push(x, y, -halfDepth, x, y, halfDepth);
    vertices.push(-halfWidth, y, z, halfWidth, y, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  return new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({
      color: GROUND_BRASS,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    })
  );
}

function makeGroundGlow() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(212,168,32,0.32)');
  gradient.addColorStop(0.46, 'rgba(212,168,32,0.12)');
  gradient.addColorStop(1, 'rgba(212,168,32,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.8, 2.8),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  glow.rotation.x = -Math.PI / 2;

  return glow;
}

function resizeRenderer(renderer, camera, container) {
  const rect = container.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

const focusCubeIndices = [8, 17, 26, 2, 11, 20];

export default function ProjectsHologram() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.autoClear = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    const defaultCameraPosition = new THREE.Vector3(4.2, 3.7, 6.3);
    const focusedCameraPosition = new THREE.Vector3(3.2, 2.9, 4.85);
    const targetLookAt = new THREE.Vector3(0, 0, 0);
    const currentLookAt = new THREE.Vector3(0, 0, 0);
    const focusWorldPosition = new THREE.Vector3();
    camera.position.copy(defaultCameraPosition);
    camera.lookAt(currentLookAt);

    const cubeGroup = new THREE.Group();
    cubeGroup.rotation.x = 0.4;
    cubeGroup.position.y = 0.45;
    scene.add(cubeGroup);

    const cubes = [];
    const focusedCubeIndexRef = { current: null };
    const cubeSize = 0.62;
    const spacing = 0.68;

    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        for (let z = -1; z <= 1; z += 1) {
          const isCorner = Math.abs(x) === 1 && Math.abs(y) === 1 && Math.abs(z) === 1;
          const color = isCorner ? LIGHT_BRASS : DARK_GOLD;
          const fillOpacity = isCorner ? 0.18 : 0.105;

          const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const edgeGeometry = new THREE.EdgesGeometry(geometry);
          const fillMaterial = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: fillOpacity,
            depthWrite: false,
          });
          const edgeMaterial = new THREE.LineBasicMaterial({
            color,
            transparent: true,
            opacity: isCorner ? 0.82 : 0.52,
          });

          const fill = new THREE.Mesh(geometry, fillMaterial);
          fill.position.set(x * spacing, y * spacing, z * spacing);
          cubeGroup.add(fill);

          const edge = new THREE.LineSegments(edgeGeometry, edgeMaterial);
          edge.position.copy(fill.position);
          cubeGroup.add(edge);

          cubes.push({
            fill,
            edge,
            fillMaterial,
            edgeMaterial,
            fillBase: fillOpacity,
            edgeBase: isCorner ? 0.82 : 0.52,
          });
        }
      }
    }

    const planeY = -1.28;
    const cubeBaseY = -0.58;
    const groundGrid = makeGroundGrid(3.2, 2.6, 8, planeY + 0.01);
    scene.add(groundGrid);

    const groundGlow = makeGroundGlow();
    groundGlow.position.y = planeY + 0.02;
    scene.add(groundGlow);

    const beam = makeBeamParticles(130, planeY + 0.04, cubeBaseY);
    scene.add(beam.points);

    const overlayScene = new THREE.Scene();
    const overlayCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scanlineMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.18 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uOpacity;

        void main() {
          float scan = smoothstep(0.45, 0.5, abs(fract(vUv.y * 96.0) - 0.5));
          float alpha = scan * uOpacity * 0.42;
          vec3 brass = vec3(0.83, 0.66, 0.13);
          vec3 copper = vec3(0.83, 0.46, 0.24);
          gl_FragColor = vec4(mix(brass, copper, 0.18), alpha);
        }
      `,
    });
    overlayScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), scanlineMaterial));

    resizeRenderer(renderer, camera, wrap);
    const observer = new ResizeObserver(() => resizeRenderer(renderer, camera, wrap));
    observer.observe(wrap);

    const clock = new THREE.Clock();
    let frameId = 0;
    let nextPulseAt = 0.7;
    let pulseUntil = 0;
    let pulseStrength = 1;
    let hoverStrength = 0;

    const handleFocus = (event) => {
      const requestedIndex = event.detail?.cubeIndex;
      focusedCubeIndexRef.current = Number.isInteger(requestedIndex)
        ? focusCubeIndices[requestedIndex % focusCubeIndices.length]
        : null;
    };

    window.addEventListener('projects-hologram-focus', handleFocus);

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const focusedIndex = focusedCubeIndexRef.current;
      hoverStrength += ((focusedIndex === null ? 0 : 1) - hoverStrength) * 0.08;

      if (focusedIndex === null) {
        targetLookAt.set(0, 0, 0);
      } else {
        const focusCube = cubes[focusedIndex]?.fill;
        if (focusCube) {
          focusCube.getWorldPosition(focusWorldPosition);
          targetLookAt.copy(focusWorldPosition);
        }
      }

      currentLookAt.lerp(targetLookAt, 0.08);
      camera.position.lerpVectors(defaultCameraPosition, focusedCameraPosition, hoverStrength);
      camera.lookAt(currentLookAt);

      cubeGroup.rotation.x = 0.4;
      cubeGroup.rotation.y += THREE.MathUtils.lerp(0.0015, 0.00055, hoverStrength);

      if (elapsed > nextPulseAt) {
        pulseUntil = elapsed + 0.12 + Math.random() * 0.12;
        pulseStrength = 0.45 + Math.random() * 0.35;
        nextPulseAt = elapsed + 1.1 + Math.random() * 2.6;
      }

      const pulse = elapsed < pulseUntil ? pulseStrength + Math.random() * 0.18 : 1;
      cubes.forEach(({ fill, edge, fillMaterial, edgeMaterial, fillBase, edgeBase }, index) => {
        const isFocused = focusedIndex !== null && index === focusedIndex;
        const dimMultiplier = focusedIndex === null || isFocused ? 1 : 0.42;
        const focusBoost = isFocused ? 1 + hoverStrength * 0.65 : 1;

        fillMaterial.opacity = fillBase * pulse * dimMultiplier * focusBoost;
        edgeMaterial.opacity = edgeBase * pulse * dimMultiplier * focusBoost;

        const targetScale = isFocused ? 1.34 : 1;
        const scale = THREE.MathUtils.lerp(fill.scale.x, targetScale, 0.1);
        fill.scale.setScalar(scale);
        edge.scale.setScalar(scale);
      });

      const beamProgress = Math.min(1, elapsed / 1.8);
      const beamFade = Math.max(0, 1 - Math.max(0, elapsed - 1.3) / 1.25);
      const positions = beam.points.geometry.attributes.position.array;
      for (let index = 0; index < beam.seeds.length; index += 1) {
        const seededProgress = (beam.seeds[index] + beamProgress) % 1;
        positions[index * 3 + 1] = planeY + 0.04 + (cubeBaseY - planeY) * seededProgress;
      }
      beam.points.geometry.attributes.position.needsUpdate = true;
      beam.points.material.opacity = 0.72 * beamFade;

      scanlineMaterial.uniforms.uOpacity.value = 0.105 + Math.sin(elapsed * 2.2) * 0.018;

      renderer.clear();
      renderer.render(scene, camera);
      renderer.clearDepth();
      renderer.render(overlayScene, overlayCamera);

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('projects-hologram-focus', handleFocus);
      disposeScene(scene);
      disposeScene(overlayScene);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className="projects-hologram" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
