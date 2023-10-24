#define PI 3.1415926535897932384626433832795

attribute vec2 uv;
attribute vec3 position;

uniform float uTime;
uniform vec2 uViewportSizes;
uniform float uStrength;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 p = position;

  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);

  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI * PI * 1.1 / 2.0) * abs(uStrength);

  gl_Position = projectionMatrix * newPosition;
}
