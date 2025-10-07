uniform float uTime;
uniform float uWindStrength;
uniform vec3 uWindDirection;
attribute vec3 position;
attribute vec3 normal;
varying vec3 vNormal;
varying vec2 vUv;

// Simple 3D noise function (e.g., simplex noise)
// For production, consider a more robust noise implementation
vec3 mod289(vec3 x) { return x - floor(x / 289.0) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x / 289.0) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy + C.zzz;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 )) +
             i.y + vec4(0.0, i1.y, i2.y, 1.0 )) +
             i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 o0 = permute(p + ns.x);
  vec4 o1 = permute(p + ns.y);
  vec4 o2 = permute(p + ns.z);
  vec4 o3 = permute(p + ns.w);

  vec4 h = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  vec4 r = taylorInvSqrt(h);
  vec4 d0 = r * x0;
  vec4 d1 = r * x1;
  vec4 d2 = r * x2;
  vec4 d3 = r * x3;

  vec4 C0 = permute(o0 + o1 + o2 + o3);
  vec4 C1 = permute(o0 + o1 + o2 + o3 + 1.0);

  vec4 N0 = taylorInvSqrt(dot(C0, C0));
  vec4 N1 = taylorInvSqrt(dot(C1, C1));

  vec4 N = mix(N0, N1, step(0.5, C0));

  vec4 s = N * (C0 + C1);

  vec4 A = permute(p + ns.x);
  vec4 B = permute(p + ns.y);
  vec4 C = permute(p + ns.z);
  vec4 D_ = permute(p + ns.w);

  vec4 v0 = vec4(x0.x, x0.y, x0.z, 0.0);
  vec4 v1 = vec4(x1.x, x1.y, x1.z, 0.0);
  vec4 v2 = vec4(x2.x, x2.y, x2.z, 0.0);
  vec4 v3 = vec4(x3.x, x3.y, x3.z, 0.0);

  vec4 P = vec4(dot(v0, A), dot(v1, B), dot(v2, C), dot(v3, D_));

  return dot(h, P);
}

void main() {
  vNormal = normal;
  vUv = uv;

  // Apply wind displacement
  vec3 displacedPosition = position;
  float noise = snoise(position * 2.0 + uTime * 0.5); // Adjust frequency and speed
  displacedPosition += normal * noise * uWindStrength;
  displacedPosition += uWindDirection * noise * uWindStrength * 0.5; // Push in wind direction

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
}
