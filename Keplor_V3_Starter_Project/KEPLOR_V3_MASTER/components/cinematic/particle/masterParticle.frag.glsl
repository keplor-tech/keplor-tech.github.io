varying float vAlpha;
varying float vDepth;
varying vec3 vColor;

void main() {
  // Soft circular point with tight core
  float dist = length(gl_PointCoord - vec2(0.5));
  float alpha = 1.0 - smoothstep(0.0, 0.6, dist);
  alpha *= vAlpha;

  // Soft glow falloff
  float glow = exp(-dist * dist * 4.0);
  vec3 color = vColor * (0.6 + 0.4 * glow);

  gl_FragColor = vec4(color, alpha);
}
