"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  PerspectiveCamera,
  Points,
  BufferGeometry,
  ShaderMaterial,
  AdditiveBlending,
  BufferAttribute,
} from "three";
import { generateParticleTargets, DEFAULT_GEOMETRY_PARAMS, type ParticleTarget } from "@/lib/cinematic/particle-geometry";
import { QUALITY_TIERS, type QualityTier } from "@/lib/cinematic/quality-tiers";

const VERTEX_SHADER = `
attribute vec3 aPortal;
attribute vec3 aHelix;
attribute vec3 aWave;
attribute vec3 aVortex;
attribute vec3 aOrbit;
attribute float aSeed;
attribute float aBand;

uniform float uScrollProgress;
uniform float uTime;
uniform float uStage;
uniform float uLocalProgress;
uniform float uPixelRatio;
uniform float uFormationScale;

varying float vAlpha;
varying float vDepth;
varying vec3 vColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

vec3 lowAmplitudeFlow(float seed, float time, float stage) {
  float t = time * 0.5;
  vec2 p = vec2(seed * 7.3 + t, seed * 4.1 + t * 0.7);
  float n = noise(p);
  float amp = 0.015 + 0.01 * n;
  return vec3(
    sin(t + seed * 3.0) * amp * 0.5,
    cos(t * 0.7 + seed * 5.0) * amp,
    sin(t * 0.9 + seed * 2.0) * amp * 0.5
  );
}

void main() {
  float stageCount = 5.0;
  float currentStage = floor(uStage);
  float nextStage = min(currentStage + 1.0, stageCount - 1.0);

  vec3 fromPos = vec3(0.0);
  vec3 toPos = vec3(0.0);

  if (currentStage == 0.0) {
    fromPos = aPortal;
    toPos = aHelix;
  } else if (currentStage == 1.0) {
    fromPos = aHelix;
    toPos = aWave;
  } else if (currentStage == 2.0) {
    fromPos = aWave;
    toPos = aVortex;
  } else if (currentStage == 3.0) {
    fromPos = aVortex;
    toPos = aOrbit;
  } else {
    fromPos = aOrbit;
    toPos = aOrbit;
  }

  float eased = smoothstep(0.0, 1.0, uLocalProgress);
  vec3 position = mix(fromPos, toPos, eased);
  position += lowAmplitudeFlow(aSeed, uTime, currentStage);
  position *= uFormationScale;

  vDepth = -position.z;
  vAlpha = 1.0 - smoothstep(-3.0, 3.0, vDepth) * 0.6;

  float isSignal = aSeed > 0.75 ? 1.0 : 0.0;
  vColor = mix(vec3(0.21, 0.0, 0.43), vec3(0.29, 0.87, 0.94), isSignal);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = (6.0 * (1.0 - smoothstep(-3.0, 3.0, vDepth) * 0.4)) / (length(position) + 1.0) * uPixelRatio;
}
`;

const FRAGMENT_SHADER = `
varying float vAlpha;
varying float vDepth;
varying vec3 vColor;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  float alpha = 1.0 - smoothstep(0.0, 0.6, dist);
  alpha *= vAlpha;

  float glow = exp(-dist * dist * 4.0);
  vec3 color = vColor * (0.6 + 0.4 * glow);

  gl_FragColor = vec4(color, alpha);
}
`;

// Camera positions for each stage
const CAMERA_STAGES = [
  // Stage 0: Portal - Hero (slightly pulled back, looking at center)
  { position: new THREE.Vector3(0, 0, 7), rotation: new THREE.Euler(0, 0, 0), fov: 45 },
  // Stage 1: Neural Helix - Services (move closer, slight angle)
  { position: new THREE.Vector3(0.5, 0.3, 5.5), rotation: new THREE.Euler(-0.05, 0.1, 0), fov: 42 },
  // Stage 2: Wave Horizon - Industries (wider view, lower)
  { position: new THREE.Vector3(0, -0.5, 6), rotation: new THREE.Euler(0.1, 0, 0), fov: 48 },
  // Stage 3: Gravitational Vortex - Approach (closer, looking down into vortex)
  { position: new THREE.Vector3(0, 0.2, 4.5), rotation: new THREE.Euler(0.15, 0.05, 0), fov: 40 },
  // Stage 4: Orbital Formation - About/Contact (pulled back, orbital view)
  { position: new THREE.Vector3(0, 0.5, 7.5), rotation: new THREE.Euler(-0.05, -0.1, 0), fov: 50 },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpVec3(a: THREE.Vector3, b: THREE.Vector3, t: number, out: THREE.Vector3): THREE.Vector3 {
  out.x = lerp(a.x, b.x, t);
  out.y = lerp(a.y, b.y, t);
  out.z = lerp(a.z, b.z, t);
  return out;
}

function lerpEuler(a: THREE.Euler, b: THREE.Euler, t: number, out: THREE.Euler): THREE.Euler {
  out.x = lerp(a.x, b.x, t);
  out.y = lerp(a.y, b.y, t);
  out.z = lerp(a.z, b.z, t);
  return out;
}

function CameraController({
  scrollProgress,
  stage,
  localProgress,
}: {
  scrollProgress: number;
  stage: number;
  localProgress: number;
}) {
  const { camera } = useThree();
  const perspCamera = camera as THREE.PerspectiveCamera;
  const targetPosition = useRef(new THREE.Vector3());
  const targetRotation = useRef(new THREE.Euler());
  let targetFov = 45;

  useFrame(() => {
    // Determine current and next camera stage
    const currentStage = Math.floor(stage);
    const nextStage = Math.min(currentStage + 1, CAMERA_STAGES.length - 1);
    
    const currentCam = CAMERA_STAGES[currentStage];
    const nextCam = CAMERA_STAGES[nextStage];
    
    // Smooth interpolation between camera stages
    const eased = localProgress; // Already eased in shader, use linear here for camera
    
    lerpVec3(currentCam.position, nextCam.position, eased, targetPosition.current);
    lerpEuler(currentCam.rotation, nextCam.rotation, eased, targetRotation.current);
    targetFov = lerp(currentCam.fov, nextCam.fov, eased);
    
    // Apply camera transform
    perspCamera.position.lerp(targetPosition.current, 0.1); // Smooth follow
    perspCamera.rotation.x = THREE.MathUtils.lerp(perspCamera.rotation.x, targetRotation.current.x, 0.1);
    perspCamera.rotation.y = THREE.MathUtils.lerp(perspCamera.rotation.y, targetRotation.current.y, 0.1);
    perspCamera.rotation.z = THREE.MathUtils.lerp(perspCamera.rotation.z, targetRotation.current.z, 0.1);
    perspCamera.fov = THREE.MathUtils.lerp(perspCamera.fov, targetFov, 0.1);
    perspCamera.updateProjectionMatrix();
  });

  return null;
}

function FrameUpdater({
  scrollProgress,
  stage,
  localProgress,
  uniformsRef,
}: {
  scrollProgress: number;
  stage: number;
  localProgress: number;
  uniformsRef: { current: { [key: string]: { value: number } } | null };
}) {
  useFrame((_state, delta) => {
    if (!uniformsRef.current) return;
    uniformsRef.current.uTime.value += delta;
    uniformsRef.current.uScrollProgress.value = scrollProgress;
    uniformsRef.current.uStage.value = stage;
    uniformsRef.current.uLocalProgress.value = localProgress;
  });
  return null;
}

interface MasterParticleSceneProps {
  tier?: QualityTier;
  scrollProgress?: number;
  stage?: number;
  localProgress?: number;
  onWebGLError?: () => void;
}

export function MasterParticleScene({
  tier = "high",
  scrollProgress = 0,
  stage = 0,
  localProgress = 0,
  onWebGLError,
}: MasterParticleSceneProps) {
  const [webglAvailable, setWebglAvailable] = useState(true);
  const targetsRef = useRef<ParticleTarget[] | null>(null);
  const uniformsRef = useRef<{ [key: string]: { value: number } } | null>(null);

  if (!targetsRef.current) {
    targetsRef.current = generateParticleTargets({
      ...DEFAULT_GEOMETRY_PARAMS,
      particleCount: QUALITY_TIERS[tier].particles,
    });
  }

  const targets = targetsRef.current;
  const particleCount = targets.length;

  const portals = new Float32Array(particleCount * 3);
  const helixes = new Float32Array(particleCount * 3);
  const waves = new Float32Array(particleCount * 3);
  const vortices = new Float32Array(particleCount * 3);
  const orbits = new Float32Array(particleCount * 3);
  const seeds = new Float32Array(particleCount);
  const bands = new Float32Array(particleCount);
  const positions = new Float32Array(particleCount * 3);

  targets.forEach((t, i) => {
    const o = i * 3;
    portals[o] = t.portal[0];
    portals[o + 1] = t.portal[1];
    portals[o + 2] = t.portal[2];
    helixes[o] = t.helix[0];
    helixes[o + 1] = t.helix[1];
    helixes[o + 2] = t.helix[2];
    waves[o] = t.wave[0];
    waves[o + 1] = t.wave[1];
    waves[o + 2] = t.wave[2];
    vortices[o] = t.vortex[0];
    vortices[o + 1] = t.vortex[1];
    vortices[o + 2] = t.vortex[2];
    orbits[o] = t.orbit[0];
    orbits[o + 1] = t.orbit[1];
    orbits[o + 2] = t.orbit[2];
    seeds[i] = t.seed;
    bands[i] = t.band;
    positions[o] = t.portal[0];
    positions[o + 1] = t.portal[1];
    positions[o + 2] = t.portal[2];
  });

  const dpr =
    typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, QUALITY_TIERS[tier].dpr) : 1;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
        premultipliedAlpha: true,
      }}
      frameloop="always"
      style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "block" }}
      onCreated={(state) => {
        if (!state.gl) {
          setWebglAvailable(false);
          onWebGLError?.();
        }
      }}
    >
      <perspectiveCamera position={[0, 0, 7]} fov={45} near={0.1} far={100} />
      <points>
        <bufferGeometry
          attributes={{
            aPortal: new BufferAttribute(portals, 3),
            aHelix: new BufferAttribute(helixes, 3),
            aWave: new BufferAttribute(waves, 3),
            aVortex: new BufferAttribute(vortices, 3),
            aOrbit: new BufferAttribute(orbits, 3),
            aSeed: new BufferAttribute(seeds, 1),
            aBand: new BufferAttribute(bands, 1),
            position: new BufferAttribute(positions, 3),
          }}
        />
        <shaderMaterial
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          transparent={true}
          depthWrite={false}
          blending={AdditiveBlending}
          uniforms={{
            uScrollProgress: { value: 0 },
            uTime: { value: 0 },
            uStage: { value: 0 },
            uLocalProgress: { value: 0 },
            uPixelRatio: { value: dpr },
            uFormationScale: { value: 1 },
          }}
          ref={(material) => {
            if (material) uniformsRef.current = material.uniforms;
          }}
        />
      </points>
      <CameraController
        scrollProgress={scrollProgress}
        stage={stage}
        localProgress={localProgress}
      />
      <FrameUpdater
        scrollProgress={scrollProgress}
        stage={stage}
        localProgress={localProgress}
        uniformsRef={uniformsRef}
      />
    </Canvas>
  );
}
