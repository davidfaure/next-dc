// #define PI 3.1415926535897932384626433832795

// attribute vec3 position;
// attribute vec2 uv;

// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// uniform vec2 uOffset;

// varying vec2 vUv;

// vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
//     position.x = position.x + (sin(uv.y * PI) * offset.x);
//     position.y = position.y + (sin(uv.x * PI) * offset.y);
//     return position;
// }

// void main(){
//     vUv = uv;
//     vec3 newPosition = deformationCurve(position, uv, uOffset);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
// }

// precision highp float;

// // Attributes
// attribute vec3 position;
// attribute vec2 uv;

// // Uniforms
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;

// // Varying to pass UV to the fragment shader
// varying vec2 vUv;

// void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }


#define PI 3.1415926535897932384626433832795

attribute vec2 uv;
attribute vec3 position;

uniform float uTime;
uniform vec2 uViewportSizes;
uniform float uStrength;

// uMobile to play with breakpoints on mobile
// uniform float uMobile;

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
