attribute vec3 aPortal;
attribute vec3 aHelix;
attribute vec3 aWave;
attribute vec3 aVortex;
attribute vec3 aOrbit;
attribute float aSeed;
attribute float aBand;

uniform float uScrollProgress;   // 0 -> 1 master progress
uniform float uTime;             // seconds, continuous
uniform float uStage;            // current stage index 0-4
uniform float uLocalProgress;    // progress within current stage 0-1
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

// Low-amplitude time-based movement independent of scroll progress
vec3 lowAmplitudeFlow(float seed, float time, float stage) {
  float t = time * 0.5;
  vec2 p = vec2(seed * 7.3 + t, seed * 4.1 + t * 0.7);
  float n = noise(p);
  // Amplitude scales down for tighter formations (portal, helix) and up for open ones
  float amp = 0.015 + 0.01 * n;
  return vec3(
    sin(t + seed * 3.0) * amp * 0.5,
    cos(t * 0.7 + seed * 5.0) * amp,
    sin(t * 0.9 + seed * 2.0) * amp * 0.5
  );
}

void main() {
  // Determine current and next stage
  float stageCount = 5.0;
  float currentStage = floor(uStage);
  float nextStage = min(currentStage + 1.0, stageCount - 1.0);

  // Select source and target positions based on current stage
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
    // Stage 4: orbit holds, slight continuous drift
    fromPos = aOrbit;
    toPos = aOrbit;
  }

  float eased = smoothstep(uLocalProgress);
  vec3 position = mix(fromPos, toPos, eased);

  // Add low-amplitude continuous movement
  position += lowAmplitudeFlow(aSeed, uTime, currentStage);

  // Apply formation scale for responsive camera
  position *= uFormationScale;

  // Depth for alpha fading (points further away are more transparent)
  vDepth = -position.z;
  vAlpha = 1.0 - smoothstep(-3.0, 3.0, vDepth) * 0.6;

  // Color: violet body, cyan signal
  float isSignal = aSeed > 0.75 ? 1.0 : 0.0;
  vColor = mix(vec3(0.21, 0.0, 0.43), vec3(0.29, 0.87, 0.94), isSignal);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = (6.0 * (1.0 - smoothstep(-3.0, 3.0, vDepth) * 0.4)) / (position.length + 1.0) * uPixelRatio;
}
