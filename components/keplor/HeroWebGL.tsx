'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VERT = `
varying vec2 vUv;
varying vec3 vPosition;
void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAG = `
precision highp float;

varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_pointer;
uniform float u_intensity;
uniform float u_scrollProgress;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123); }

mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1,0,0, 0,c,-s, 0,s,c); }
mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c,0,s, 0,1,0, -s,0,c); }
mat3 rotZ(float a) { float c = cos(a), s = sin(a); return mat3(c,-s,0, s,c,0, 0,0,1); }

float sdSphere(vec3 p, float r) { return length(p) - r; }

void main() {
  vec2 uv = vUv;
  vec3 pos = vPosition;
  
  float t = u_time * 0.3;
  float scroll = u_scrollProgress;
  
  // Rotate the sphere based on scroll and time
  pos = rotY(t * 0.15 + scroll * 3.14159) * pos;
  pos = rotX(t * 0.08 + u_pointer.y * 0.5) * pos;
  pos = rotZ(t * 0.05 + u_pointer.x * 0.3) * pos;
  
  // Dithering pattern
  vec2 ditherUV = uv * u_res.y / 4.0;
  vec2 cell = floor(ditherUV);
  float dither = step(0.5, hash(cell + floor(t * 3.0)));
  
  // Line field - geometric lines across sphere
  float lines = 0.0;
  for (int i = 0; i < 6; i++) {
    float angle = float(i) * 1.0472; // PI/3
    vec3 axis = normalize(vec3(cos(angle), sin(angle), 0.5));
    float proj = dot(pos, axis);
    lines += smoothstep(0.02, 0.0, abs(proj) - 0.01);
  }
  
  // Latitude/longitude lines
  float latLines = 0.0;
  for (int i = 1; i < 5; i++) {
    float lat = (float(i) - 2.5) * 0.4;
    latLines += smoothstep(0.015, 0.0, abs(pos.y - lat) - 0.005);
  }
  
  float lonLines = 0.0;
  for (int i = 0; i < 8; i++) {
    float lon = float(i) * 0.7854; // PI/4
    float proj = atan(pos.z, pos.x) - lon;
    proj = mod(proj + 3.14159, 6.28318) - 3.14159;
    lonLines += smoothstep(0.015, 0.0, abs(proj) - 0.005);
  }
  
  // Particle field - points on sphere surface
  float particles = 0.0;
  vec3 particlePos = normalize(pos) * 1.02;
  for (int i = 0; i < 20; i++) {
    vec3 seed = vec3(float(i) * 17.3, float(i) * 23.7, float(i) * 31.1);
    vec3 pPos = normalize(vec3(
      sin(t + seed.x) * cos(t * 0.7 + seed.y),
      sin(t * 0.5 + seed.z),
      cos(t + seed.x) * cos(t * 0.7 + seed.y)
    )) * 1.02;
    float dist = length(particlePos - pPos);
    particles += smoothstep(0.08, 0.0, dist) * hash3(seed + t * 0.1);
  }
  
  // Core glow
  float core = exp(-length(pos) * 8.0) * (1.0 + sin(t * 2.0) * 0.3);
  
  // Color palette - Keplor vermilion theme
  vec3 deepInk = vec3(0.067, 0.067, 0.067);      // #111111
  vec3 warmPaper = vec3(0.965, 0.961, 0.941);    // #F6F5F0
  vec3 vermilion = vec3(0.886, 0.333, 0.157);    // #E25528
  vec3 vermilionLight = vec3(1.0, 0.55, 0.35);   // Lighter vermilion
  vec3 obsidian = vec3(0.043, 0.047, 0.063);     // #0B0C10
  
  vec3 col = vec3(0.0);
  
  // Base sphere - subtle wireframe
  col += lines * vermilion * 0.6 * u_intensity;
  col += latLines * vermilion * 0.4 * u_intensity;
  col += lonLines * vermilion * 0.3 * u_intensity;
  
  // Dithering overlay
  col += dither * vermilion * 0.15 * u_intensity * (1.0 - scroll * 0.5);
  
  // Particles
  col += particles * vermilionLight * 1.2 * u_intensity;
  
  // Core
  col += core * vermilionLight * 2.0 * u_intensity;
  
  // Scroll-based color shift
  col = mix(col, col * vec3(1.0, 0.8, 0.6), scroll * 0.3);
  
  // Vignette
  float vignette = 1.0 - length(uv - 0.5) * 1.2;
  col *= vignette;
  
  float alpha = clamp(length(col) * 2.0, 0.0, 0.85);
  gl_FragColor = vec4(col, alpha);
}
`;

export function HeroWebGL({ 
  intensityRef, 
  scrollProgressRef 
}: { 
  intensityRef?: React.MutableRefObject<number>;
  scrollProgressRef?: React.MutableRefObject<number>;
}) {
  const reduced = useReducedMotion();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true, 
        powerPreference: 'high-performance' 
      });
    } catch {
      mount.dataset.mode = 'fallback';
      return;
    }

    const DPR_CAP = 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 2.5;

    const uniforms = {
      u_res: { value: new THREE.Vector2(1, 1) },
      u_time: { value: 0 },
      u_pointer: { value: new THREE.Vector2(0.5, 0.5) },
      u_intensity: { value: 0 },
      u_scrollProgress: { value: 0 },
    };

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add subtle ambient particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.0 + Math.random() * 0.3;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      sizes[i] = Math.random() * 2 + 0.5;
      alphas[i] = Math.random() * 0.5 + 0.1;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particleGeometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xE25528,
      size: 1.5,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      uniforms.u_res.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();

    // Shared pointer state, spring-damped
    const px = { cur: 0.5, tgt: 0.5 };
    const py = { cur: 0.5, tgt: 0.5 };

    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      if (rect.width === 0) return;
      px.tgt = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      py.tgt = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    };
    const onLeave = () => { px.tgt = 0.5; py.tgt = 0.5; };

    // Pause when offscreen or tab hidden
    let visible = true;
    let inTab = !document.hidden;
    const io = new IntersectionObserver((entries) => { visible = entries[0]?.isIntersecting ?? true; }, { threshold: 0 });
    io.observe(mount);
    const onVis = () => { inTab = !document.hidden; };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);

    mount.dataset.mode = 'webgl';

    let raf = 0;
    let fade = 0;
    const clock = new THREE.Clock();

    // GSAP ScrollTrigger for scroll progress
    let scrollTrigger: ScrollTrigger | null = null;
    if (typeof ScrollTrigger !== 'undefined') {
      scrollTrigger = ScrollTrigger.create({
        trigger: mount,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
          if (scrollProgressRef) scrollProgressRef.current = self.progress;
        },
      });
    }

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible || !inTab) return;

      px.cur += (px.tgt - px.cur) * 0.055;
      py.cur += (py.tgt - py.cur) * 0.055;
      fade = Math.min(1, fade + 0.012);

      const targetIntensity = intensityRef ? intensityRef.current : 1;
      uniforms.u_intensity.value += (fade * targetIntensity - uniforms.u_intensity.value) * 0.08;
      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_pointer.value.set(px.cur, 1 - py.cur);
      uniforms.u_scrollProgress.value = scrollProgress.current;

      // Rotate particles
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      if (scrollTrigger) scrollTrigger.kill();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [reduced, intensityRef, scrollProgressRef]);

  if (reduced) {
    return (
      <div className="hero-webgl-fallback" aria-hidden="true">
        <div className="fallback-gradient" />
        <div className="fallback-grid" />
      </div>
    );
  }

  return <div ref={mountRef} className="hero-webgl-canvas" aria-hidden="true" data-mode="pending" />;
}