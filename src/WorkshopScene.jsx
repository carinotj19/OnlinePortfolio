import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { workshopState } from './workshopState';

const BRASS = '#b8860b';
const BRASS_LIGHT = '#d7ad36';
const COPPER = '#b85f34';
const ANDESITE = '#77766f';
const ANDESITE_DARK = '#444741';
const BELT = '#25211d';
const WOOD = '#8c6332';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  return reduced;
}

function Gear({ position, scale = 1, reverse = false, speed = 0.7 }) {
  const ref = useRef();
  const teeth = useMemo(() => Array.from({ length: 12 }, (_, index) => index), []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const motion = Math.min(2.2, 1 + Math.abs(workshopState.velocity) * 0.025);
    ref.current.rotation.z += delta * speed * motion * (reverse ? -1 : 1);
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.22, 32]} />
        <meshStandardMaterial color={BRASS} metalness={0.62} roughness={0.38} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.3, 16]} />
        <meshStandardMaterial color={ANDESITE_DARK} metalness={0.72} roughness={0.42} />
      </mesh>

      {teeth.map((index) => {
        const angle = (index / teeth.length) * Math.PI * 2;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.76, Math.sin(angle) * 0.76, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.28, 0.22, 0.24]} />
            <meshStandardMaterial color={BRASS_LIGHT} metalness={0.55} roughness={0.42} />
          </mesh>
        );
      })}
    </group>
  );
}

function Gearbox({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[1.35, 1.2, 0.65]} />
        <meshStandardMaterial color={ANDESITE} metalness={0.38} roughness={0.68} />
      </mesh>
      <mesh position={[0, 0, 0.34]}>
        <boxGeometry args={[1.05, 0.9, 0.08]} />
        <meshStandardMaterial color={ANDESITE_DARK} metalness={0.45} roughness={0.6} />
      </mesh>
      <Gear position={[0, 0, 0.43]} scale={0.48} speed={0.95} />
    </group>
  );
}

function Shaft({ position, length = 2.4, vertical = false }) {
  return (
    <mesh position={position} rotation={vertical ? [0, 0, 0] : [0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.09, 0.09, length, 16]} />
      <meshStandardMaterial color={ANDESITE_DARK} metalness={0.78} roughness={0.32} />
    </mesh>
  );
}

function Funnel({ position }) {
  return (
    <group position={position}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.32, 0.62, 0.7, 4, 1, true]} />
        <meshStandardMaterial color={ANDESITE} metalness={0.45} roughness={0.56} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.48, 0]}>
        <boxGeometry args={[0.28, 0.35, 0.28]} />
        <meshStandardMaterial color={ANDESITE_DARK} metalness={0.5} roughness={0.52} />
      </mesh>
    </group>
  );
}

function Belt({ position = [0, 0, 0], length = 4.8, reverse = false }) {
  const slats = useRef([]);
  const crates = useRef([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const motion = reverse ? -1 : 1;

    slats.current.forEach((mesh, index) => {
      if (!mesh) return;
      const travel = ((time * 0.68 * motion + index * 0.42) % length + length) % length;
      mesh.position.x = -length / 2 + travel;
    });

    crates.current.forEach((mesh, index) => {
      if (!mesh) return;
      const travel = ((time * 0.34 * motion + index * 1.9) % length + length) % length;
      mesh.position.x = -length / 2 + travel;
      mesh.position.y = 0.26 + Math.sin(time * 1.8 + index) * 0.025;
    });
  });

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[length, 0.18, 0.9]} />
        <meshStandardMaterial color={BELT} metalness={0.2} roughness={0.82} />
      </mesh>

      {Array.from({ length: 12 }, (_, index) => (
        <mesh
          key={`slat-${index}`}
          ref={(node) => { slats.current[index] = node; }}
          position={[-length / 2 + index * 0.42, 0.11, 0]}
        >
          <boxGeometry args={[0.06, 0.08, 0.86]} />
          <meshStandardMaterial color={ANDESITE} metalness={0.38} roughness={0.64} />
        </mesh>
      ))}

      {Array.from({ length: 3 }, (_, index) => (
        <mesh
          key={`crate-${index}`}
          ref={(node) => { crates.current[index] = node; }}
          position={[-length / 2 + index * 1.9, 0.28, 0]}
        >
          <boxGeometry args={[0.5, 0.44, 0.5]} />
          <meshStandardMaterial color={index === workshopState.projectFocus ? COPPER : WOOD} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Machine() {
  const root = useRef();
  const { camera, pointer } = useThree();
  const reduced = useReducedMotion();
  const focusRef = useRef(-1);

  useEffect(() => {
    const onFocus = (event) => {
      const cubeIndex = event.detail?.cubeIndex;
      focusRef.current = Number.isInteger(cubeIndex) ? cubeIndex : -1;
      workshopState.projectFocus = focusRef.current;
    };

    window.addEventListener('projects-hologram-focus', onFocus);
    return () => window.removeEventListener('projects-hologram-focus', onFocus);
  }, []);

  useFrame((state, delta) => {
    const scroll = workshopState.scroll;

    if (root.current) {
      const targetRotation = -0.12 + scroll * 0.28;
      root.current.rotation.y = THREE.MathUtils.damp(
        root.current.rotation.y,
        targetRotation + (reduced ? 0 : pointer.x * 0.05),
        4,
        delta
      );
      root.current.rotation.x = THREE.MathUtils.damp(
        root.current.rotation.x,
        -0.08 + (reduced ? 0 : pointer.y * 0.025),
        4,
        delta
      );
      root.current.position.y = THREE.MathUtils.damp(root.current.position.y, 0.15 - scroll * 0.7, 3, delta);
    }

    const mobile = state.size.width < 760;
    const targetX = mobile ? 0.8 : 2.15 - scroll * 0.75;
    const targetY = mobile ? 0.2 : 0.45 - scroll * 0.35;
    const targetZ = mobile ? 8.3 : 7.1 - scroll * 0.45;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 4, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 4, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4, delta);
    camera.lookAt(mobile ? 0.55 : 1.55, -0.15, 0);
  });

  return (
    <group ref={root} position={[0.8, 0.15, 0]}>
      <group position={[0, 1.15, 0]}>
        <Gearbox position={[-1.55, 0.15, 0]} scale={0.88} />
        <Shaft position={[-0.6, 0.15, 0]} length={1.8} />
        <Gear position={[0.35, 0.15, 0.04]} scale={0.72} reverse speed={0.9} />
        <Shaft position={[1.0, 0.15, 0]} length={1.3} />
        <Gearbox position={[1.8, 0.15, 0]} scale={0.78} />
      </group>

      <Belt position={[0.25, -0.55, 0]} length={5.1} />
      <Gear position={[-2.28, -0.55, 0.12]} scale={0.5} speed={1.15} />
      <Gear position={[2.78, -0.55, 0.12]} scale={0.5} reverse speed={1.15} />

      <Shaft position={[2.78, 0.1, 0]} length={1.35} vertical />
      <Funnel position={[-2.18, 0.38, 0]} />

      <mesh position={[0.25, -1.1, 0]}>
        <boxGeometry args={[5.8, 0.16, 1.25]} />
        <meshStandardMaterial color={ANDESITE_DARK} metalness={0.45} roughness={0.62} />
      </mesh>

      <mesh position={[0.25, -1.35, 0]}>
        <boxGeometry args={[6.2, 0.34, 1.5]} />
        <meshStandardMaterial color={ANDESITE} metalness={0.28} roughness={0.76} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 7, 7]} intensity={2.4} color="#fff0c5" />
      <directionalLight position={[-5, 2, 4]} intensity={1.2} color="#8db3b0" />
      <pointLight position={[2.5, -1, 3]} intensity={8} distance={10} color={COPPER} />
      <Machine />
    </>
  );
}

export default function WorkshopScene() {
  return (
    <div className="workshop-webgl-layer" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.75]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          camera={{ fov: 42, near: 0.1, far: 100, position: [2.15, 0.45, 7.1] }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      <div className="workshop-webgl-vignette" />
    </div>
  );
}
