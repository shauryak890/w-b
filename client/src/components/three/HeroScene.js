import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

/**
 * HeroScene — the site's signature 3D moment: soap bubbles.
 *
 * A drift of glassy, faintly iridescent bubbles rising up the right side of
 * the hero. Each bubble is a sphere with a custom fresnel shader (no textures,
 * no environment maps), so the whole scene is light and loads as one small
 * lazy chunk. Mouse moves the cluster gently (parallax); scrolling drifts it
 * upward and away.
 */

const VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uTintA;   // brand cyan
  uniform vec3 uTintB;   // periwinkle accent
  uniform float uSeed;   // per-bubble variation
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(vViewDir);
    float ndv = abs(dot(n, v));

    // Thin-film feel: bright rim + a soft iridescent band that shifts per bubble
    float fresnel = pow(1.0 - ndv, 2.2);
    float band = sin((1.0 - ndv) * 12.0 + uSeed * 6.2831);
    vec3 irid = mix(uTintA, uTintB, band * 0.5 + 0.5);

    vec3 lightDir = normalize(vec3(0.6, 0.9, 0.8));
    float spec = pow(max(dot(reflect(-lightDir, n), v), 0.0), 60.0);

    vec3 col = irid * fresnel + vec3(1.0) * (spec * 0.9 + fresnel * 0.35);
    float alpha = 0.05 + fresnel * 0.5 + spec * 0.4;
    gl_FragColor = vec4(col, alpha);
  }
`;

const FIELD_TOP = 3.2;
const FIELD_BOTTOM = -3.2;

function Bubble({ cfg, reducedMotion }) {
  const ref = useRef();

  const uniforms = useMemo(
    () => ({
      uTintA: { value: new THREE.Color('#4DD0E1') },
      uTintB: { value: new THREE.Color('#99ACFF') },
      uSeed: { value: cfg.seed },
    }),
    [cfg.seed]
  );

  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    let y = cfg.y + t * cfg.speed;
    // loop back to the bottom once a bubble floats out the top
    const span = FIELD_TOP - FIELD_BOTTOM;
    y = FIELD_BOTTOM + ((y - FIELD_BOTTOM) % span);
    ref.current.position.y = y;
    ref.current.position.x = cfg.x + Math.sin(t * 0.5 + cfg.phase) * cfg.sway;
    const s = cfg.r * (1 + Math.sin(t * 0.9 + cfg.phase) * 0.04);
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref} position={[cfg.x, cfg.y, cfg.z]} scale={cfg.r}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function Bubbles({ reducedMotion, isMobile }) {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  const bubbles = useMemo(() => {
    const count = isMobile ? 12 : 26;
    // Deterministic pseudo-random so reduced-motion renders a stable frame
    let s = 42;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    return Array.from({ length: count }, () => ({
      seed: rnd(),
      x: 0.4 + rnd() * 3.6,
      y: FIELD_BOTTOM + rnd() * (FIELD_TOP - FIELD_BOTTOM),
      z: -1.4 + rnd() * 2.2,
      r: 0.1 + Math.pow(rnd(), 1.7) * 0.8,
      speed: 0.1 + rnd() * 0.28,
      sway: 0.12 + rnd() * 0.3,
      phase: rnd() * Math.PI * 2,
    }));
  }, [isMobile]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const h = window.innerHeight || 800;
      scroll.current = Math.min(1, window.scrollY / h);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [reducedMotion]);

  useFrame(() => {
    if (!group.current || reducedMotion) return;
    // Gentle parallax toward the cursor + upward drift as the page scrolls
    const g = group.current;
    g.rotation.y += (mouse.current.x * 0.12 - g.rotation.y) * 0.04;
    g.rotation.x += (-mouse.current.y * 0.06 - g.rotation.x) * 0.04;
    g.position.y += (scroll.current * 1.6 - g.position.y) * 0.06;
  });

  return (
    <group ref={group}>
      {bubbles.map((cfg, i) => (
        <Bubble key={i} cfg={cfg} reducedMotion={reducedMotion} />
      ))}
    </group>
  );
}

export default function HeroScene({ reducedMotion = false }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Stop rendering entirely while the hero is off-screen
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const frameloop = reducedMotion ? 'demand' : inView ? 'always' : 'never';

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        frameloop={frameloop}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Bubbles reducedMotion={reducedMotion} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
