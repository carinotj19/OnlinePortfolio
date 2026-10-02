import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { workshopState } from './workshopState';

const COLORS = {
  brass: 0xb8860b,
  brassLight: 0xd6ac34,
  copper: 0xb85f34,
  andesite: 0x77766f,
  andesiteDark: 0x444741,
  belt: 0x25211d,
  wood: 0x8c6332,
};

function createGear(materials, scale = 1) {
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.65, 0.65, 0.22, 32),
    materials.brass
  );
  body.rotation.x = Math.PI / 2;
  group.add(body);

  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.3, 16),
    materials.andesiteDark
  );
  hub.rotation.x = Math.PI / 2;
  group.add(hub);

  for (let index = 0; index < 12; index += 1) {
    const angle = (index / 12) * Math.PI * 2;
    const tooth = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.22, 0.24),
      materials.brassLight
    );
    tooth.position.set(Math.cos(angle) * 0.76, Math.sin(angle) * 0.76, 0);
    tooth.rotation.z = angle;
    group.add(tooth);
  }

  group.scale.setScalar(scale);
  group.userData.isGear = true;
  return group;
}

function createGearbox(materials, scale = 1) {
  const group = new THREE.Group();

  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(1.35, 1.2, 0.65),
    materials.andesite
  );
  group.add(shell);

  const face = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.9, 0.08),
    materials.andesiteDark
  );
  face.position.z = 0.36;
  group.add(face);

  const gear = createGear(materials, 0.48);
  gear.position.z = 0.47;
  group.add(gear);

  group.scale.setScalar(scale);
  return group;
}

function createShaft(materials, length = 2.4, vertical = false) {
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.09, length, 16),
    materials.andesiteDark
  );
  if (!vertical) shaft.rotation.z = Math.PI / 2;
  return shaft;
}

function createFunnel(materials) {
  const group = new THREE.Group();

  const cone = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.62, 0.7, 4, 1, true),
    materials.andesite
  );
  cone.rotation.y = Math.PI / 4;
  group.add(cone);

  const neck = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.35, 0.28),
    materials.andesiteDark
  );
  neck.position.y = -0.48;
  group.add(neck);

  return group;
}

function createBelt(materials, length = 5.1) {
  const group = new THREE.Group();

  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(length, 0.18, 0.9),
    materials.belt
  );
  group.add(bed);

  const slats = [];
  for (let index = 0; index < 12; index += 1) {
    const slat = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.08, 0.86),
      materials.andesite
    );
    slat.position.set(-length / 2 + index * 0.42, 0.11, 0);
    slat.userData.offset = index * 0.42;
    group.add(slat);
    slats.push(slat);
  }

  const crates = [];
  for (let index = 0; index < 3; index += 1) {
    const crate = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.44, 0.5),
      materials.wood.clone()
    );
    crate.position.set(-length / 2 + index * 1.9, 0.28, 0);
    crate.userData.offset = index * 1.9;
    group.add(crate);
    crates.push(crate);
  }

  group.userData.length = length;
  group.userData.slats = slats;
  group.userData.crates = crates;
  return group;
}

function disposeObject(root) {
  root.traverse((object) => {
    object.geometry?.dispose?.();
    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose?.());
    }
  });
}

export default function WorkshopScene() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(2.15, 0.45, 7.1);
    camera.lookAt(1.55, -0.15, 0);

    const materials = {
      brass: new THREE.MeshStandardMaterial({ color: COLORS.brass, metalness: 0.62, roughness: 0.38 }),
      brassLight: new THREE.MeshStandardMaterial({ color: COLORS.brassLight, metalness: 0.54, roughness: 0.42 }),
      copper: new THREE.MeshStandardMaterial({ color: COLORS.copper, metalness: 0.44, roughness: 0.5 }),
      andesite: new THREE.MeshStandardMaterial({ color: COLORS.andesite, metalness: 0.36, roughness: 0.66 }),
      andesiteDark: new THREE.MeshStandardMaterial({ color: COLORS.andesiteDark, metalness: 0.7, roughness: 0.4 }),
      belt: new THREE.MeshStandardMaterial({ color: COLORS.belt, metalness: 0.18, roughness: 0.84 }),
      wood: new THREE.MeshStandardMaterial({ color: COLORS.wood, metalness: 0.02, roughness: 0.78 }),
    };

    scene.add(new THREE.AmbientLight(0xfff1ce, 1.5));

    const key = new THREE.DirectionalLight(0xffe3a3, 3.2);
    key.position.set(4, 7, 7);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x8db3b0, 1.45);
    fill.position.set(-5, 2, 4);
    scene.add(fill);

    const copperGlow = new THREE.PointLight(COLORS.copper, 12, 10);
    copperGlow.position.set(2.5, -1, 3);
    scene.add(copperGlow);

    const machine = new THREE.Group();
    machine.position.set(0.8, 0.15, 0);
    machine.rotation.x = -0.08;
    scene.add(machine);

    const leftGearbox = createGearbox(materials, 0.88);
    leftGearbox.position.set(-1.55, 1.3, 0);
    machine.add(leftGearbox);

    const upperShaft = createShaft(materials, 1.8);
    upperShaft.position.set(-0.6, 1.3, 0);
    machine.add(upperShaft);

    const middleGear = createGear(materials, 0.72);
    middleGear.position.set(0.35, 1.3, 0.04);
    middleGear.userData.reverse = true;
    machine.add(middleGear);

    const rightShaft = createShaft(materials, 1.3);
    rightShaft.position.set(1.0, 1.3, 0);
    machine.add(rightShaft);

    const rightGearbox = createGearbox(materials, 0.78);
    rightGearbox.position.set(1.8, 1.3, 0);
    machine.add(rightGearbox);

    const belt = createBelt(materials);
    belt.position.set(0.25, -0.55, 0);
    machine.add(belt);

    const leftBeltGear = createGear(materials, 0.5);
    leftBeltGear.position.set(-2.28, -0.55, 0.12);
    machine.add(leftBeltGear);

    const rightBeltGear = createGear(materials, 0.5);
    rightBeltGear.position.set(2.78, -0.55, 0.12);
    rightBeltGear.userData.reverse = true;
    machine.add(rightBeltGear);

    const verticalShaft = createShaft(materials, 1.35, true);
    verticalShaft.position.set(2.78, 0.1, 0);
    machine.add(verticalShaft);

    const funnel = createFunnel(materials);
    funnel.position.set(-2.18, 0.38, 0);
    machine.add(funnel);

    const upperBase = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 0.16, 1.25),
      materials.andesiteDark
    );
    upperBase.position.set(0.25, -1.1, 0);
    machine.add(upperBase);

    const lowerBase = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 0.34, 1.5),
      materials.andesite
    );
    lowerBase.position.set(0.25, -1.35, 0);
    machine.add(lowerBase);

    const gears = [];
    machine.traverse((object) => {
      if (object.userData.isGear) gears.push(object);
    });

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    const onProjectFocus = (event) => {
      const index = event.detail?.cubeIndex;
      workshopState.projectFocus = Number.isInteger(index) ? index : -1;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('projects-hologram-focus', onProjectFocus);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    let frame = 0;
    let previous = performance.now();

    const render = (now) => {
      const delta = Math.min(0.05, Math.max(0, (now - previous) / 1000));
      previous = now;
      const time = now / 1000;
      const scroll = workshopState.scroll;
      const velocityBoost = Math.min(2.2, 1 + Math.abs(workshopState.velocity) * 0.025);

      if (!reduced) {
        gears.forEach((gear, index) => {
          const direction = gear.userData.reverse || index % 2 ? -1 : 1;
          gear.rotation.z += delta * 0.7 * velocityBoost * direction;
        });
      }

      const beltLength = belt.userData.length;
      belt.userData.slats.forEach((slat) => {
        const travel = ((time * 0.68 + slat.userData.offset) % beltLength + beltLength) % beltLength;
        slat.position.x = -beltLength / 2 + travel;
      });

      belt.userData.crates.forEach((crate, index) => {
        const travel = ((time * 0.34 + crate.userData.offset) % beltLength + beltLength) % beltLength;
        crate.position.x = -beltLength / 2 + travel;
        crate.position.y = 0.28 + (reduced ? 0 : Math.sin(time * 1.8 + index) * 0.025);
        crate.material.color.setHex(index === workshopState.projectFocus ? COLORS.copper : COLORS.wood);
      });

      const targetRotationY = -0.12 + scroll * 0.28 + (reduced ? 0 : pointer.x * 0.05);
      const targetRotationX = -0.08 + (reduced ? 0 : pointer.y * 0.025);
      machine.rotation.y = THREE.MathUtils.damp(machine.rotation.y, targetRotationY, 4, delta);
      machine.rotation.x = THREE.MathUtils.damp(machine.rotation.x, targetRotationX, 4, delta);
      machine.position.y = THREE.MathUtils.damp(machine.position.y, 0.15 - scroll * 0.7, 3, delta);

      const mobile = wrap.clientWidth < 760;
      const targetX = mobile ? 0.8 : 2.15 - scroll * 0.75;
      const targetY = mobile ? 0.2 : 0.45 - scroll * 0.35;
      const targetZ = mobile ? 8.3 : 7.1 - scroll * 0.45;

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 4, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4, delta);
      camera.lookAt(mobile ? 0.55 : 1.55, -0.15, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('projects-hologram-focus', onProjectFocus);
      disposeObject(scene);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="workshop-webgl-layer" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="workshop-webgl-vignette" />
    </div>
  );
}
