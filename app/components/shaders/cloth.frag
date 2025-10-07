uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
uniform sampler2D uNormalMap;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 lightDirection = normalize(vec3(0.5, 1.0, 0.5)); // Example light direction
  float diffuse = max(dot(normal, lightDirection), 0.0);

  // Simple gradient color
  vec3 color = mix(uColorStart, uColorEnd, vUv.y); // Gradient along Y-axis

  // Add subtle normal map detail (if uNormalMap is provided)
  // vec3 normalMap = texture2D(uNormalMap, vUv).rgb * 2.0 - 1.0;
  // normal = normalize(normal + normalMap * 0.5); // Blend with original normal

  gl_FragColor = vec4(color * (0.5 + diffuse * 0.5), 1.0);
}
