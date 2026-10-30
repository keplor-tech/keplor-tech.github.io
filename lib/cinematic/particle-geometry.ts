/**
 * Deterministic seeded particle target generation for the Keplor five-stage
 * cinematic particle system.
 *
 * All targets are generated once from a fixed integer seed. Particle identity
 * is stable across stages — the same particle index always maps to the same
 * logical identity, only its target position changes.
 */

type Vec3 = [number, number, number];

// Simple deterministic pseudo-random generator (mulberry32)
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom(seed: number, index: number): number {
  return mulberry32(seed + index * 2654435761)();
}

function signedNoise(seed: number, index: number): number {
  return seededRandom(seed, index) * 2 - 1;
}

function mix(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export interface ParticleTarget {
  portal: Vec3;
  helix: Vec3;
  wave: Vec3;
  vortex: Vec3;
  orbit: Vec3;
  seed: number;
  band: number;
}

export interface GeometryParams {
  particleCount: number;
  seed: number;
  // Portal
  portalHeight: number;
  portalAperture: number;
  portalDepth: number;
  // Helix
  helixHeight: number;
  helixRadius: number;
  helixTurns: number;
  // Wave
  waveWidth: number;
  waveDepth: number;
  waveBase: number;
  // Vortex
  vortexRadius: number;
  vortexDepth: number;
  singularityRadius: number;
  // Orbit
  orbitRadii: number[];
  orbitTilts: number[];
  orbitEccentricities: number[];
}

export const DEFAULT_GEOMETRY_PARAMS: GeometryParams = {
  particleCount: 20000,
  seed: 0x5e312b,
  portalHeight: 4.5,
  portalAperture: 1.6,
  portalDepth: 0.9,
  helixHeight: 5.0,
  helixRadius: 1.1,
  helixTurns: 3.5,
  waveWidth: 6.0,
  waveDepth: 4.0,
  waveBase: 0.0,
  vortexRadius: 2.5,
  vortexDepth: 1.5,
  singularityRadius: 0.15,
  orbitRadii: [1.2, 2.0, 3.0, 4.2],
  orbitTilts: [0.15, 0.35, 0.55, 0.75],
  orbitEccentricities: [0.85, 0.75, 0.65, 0.55],
};

export function generateParticleTargets(
  params: GeometryParams,
): ParticleTarget[] {
  const {
    particleCount,
    seed,
    portalHeight,
    portalAperture,
    portalDepth,
    helixHeight,
    helixRadius,
    helixTurns,
    waveWidth,
    waveDepth,
    waveBase,
    vortexRadius,
    vortexDepth,
    singularityRadius,
    orbitRadii,
    orbitTilts,
    orbitEccentricities,
  } = params;

  const targets: ParticleTarget[] = [];

  for (let i = 0; i < particleCount; i++) {
    const s0 = seededRandom(seed, i * 4 + 0);
    const s1 = seededRandom(seed, i * 4 + 1);
    const s2 = seededRandom(seed, i * 4 + 2);
    const s3 = seededRandom(seed, i * 4 + 3);

    const band = i % orbitRadii.length;

    // --- Portal: vertical elliptical arc / aperture ---
    const arc = mix(-0.88 * Math.PI, 0.88 * Math.PI, s1);
    const portalRadius = portalAperture * (1 + 0.16 * signedNoise(seed, i * 7 + 1));
    const portalX = portalRadius * Math.sin(arc) + signedNoise(seed, i * 7 + 2) * 0.06;
    const portalY = portalHeight * Math.cos(arc) + signedNoise(seed, i * 7 + 3) * 0.08;
    const portalZ = portalDepth * signedNoise(seed, i * 7 + 4);

    // Bias toward silhouette core: denser near center
    const coreBias = 1 - Math.pow(Math.abs(s1 - 0.5) * 2, 2.5);

    // --- Helix: two parametric strands ---
    const helixBand = i % 2;
    const helixT = s0 * 2 * Math.PI * helixTurns;
    const helixY = mix(-helixHeight / 2, helixHeight / 2, s1);
    const helixPhase = helixBand * Math.PI + helixT + signedNoise(seed, i * 11 + 1) * 0.2;
    const helixX = helixRadius * Math.cos(helixPhase);
    const helixZ = helixRadius * Math.sin(helixPhase);

    // --- Wave: particle terrain over X/Z ---
    const waveX = mix(-waveWidth / 2, waveWidth / 2, s0);
    const waveZ = mix(-waveDepth / 2, waveDepth / 2, s1);
    const waveY =
      waveBase +
      0.35 * Math.sin(1.8 * waveX + s2) +
      0.25 * Math.cos(1.4 * waveZ + s3) +
      0.15 * Math.sin(2.2 * (waveX + waveZ)) +
      edgeFalloff(waveX, waveZ, waveWidth, waveDepth) * signedNoise(seed, i * 13 + 1) * 0.12;

    // --- Vortex: radial + angular around singularity ---
    const vortexR = singularityRadius + Math.pow(s0, 0.62) * (vortexRadius - singularityRadius);
    const vortexTheta = s1 * 2 * Math.PI + 3.0 * (1 - vortexR / vortexRadius);
    const vortexX = vortexR * Math.cos(vortexTheta);
    const vortexZ = vortexR * Math.sin(vortexTheta);
    const vortexY = vortexDepth * signedNoise(seed, i * 17 + 1) * (0.25 + 0.75 * (vortexR / vortexRadius));

    // --- Orbit: multiple inclined elliptical rings ---
    const orbitRadius = orbitRadii[band] + signedNoise(seed, i * 19 + 1) * 0.05;
    const orbitTheta = s0 * 2 * Math.PI;
    const orbitX0 = orbitRadius * Math.cos(orbitTheta);
    const orbitZ0 = orbitRadius * Math.sin(orbitTheta) * orbitEccentricities[band];
    const orbitY0 = 0.08 * signedNoise(seed, i * 19 + 2);
    // Apply tilt around X axis
    const tilt = orbitTilts[band];
    const orbitX = orbitX0;
    const orbitY = orbitY0 * Math.cos(tilt) - orbitZ0 * Math.sin(tilt);
    const orbitZ = orbitY0 * Math.sin(tilt) + orbitZ0 * Math.cos(tilt);

    targets.push({
      portal: [portalX, portalY, portalZ],
      helix: [helixX, helixY, helixZ],
      wave: [waveX, waveY, waveZ],
      vortex: [vortexX, vortexY, vortexZ],
      orbit: [orbitX, orbitY, orbitZ],
      seed: coreBias,
      band,
    });
  }

  return targets;
}

function edgeFalloff(x: number, z: number, width: number, depth: number): number {
  const nx = Math.abs(x) / (width / 2);
  const nz = Math.abs(z) / (depth / 2);
  const d = Math.sqrt(nx * nx + nz * nz);
  return Math.max(0, 1 - d);
}
