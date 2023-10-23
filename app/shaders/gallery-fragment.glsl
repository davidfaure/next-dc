// precision highp float;

// uniform sampler2D tMap;
// uniform vec2 uOffset;

// varying vec2 vUv;

// vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset){
//     float r = texture2D(textureImage, uv + offset * 0.3).r;
//     vec2 gb = texture2D(textureImage, uv).gb;
//     return vec3(r, gb);
// }

// void main() {
//     vec3 colorShifted = rgbShift(tMap, vUv, uOffset);
//     // gl_FragColor = vec4(colorShifted, 1.0);
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Solid red color
// }

precision highp float;

// Uniform for the texture
uniform sampler2D tMap;

// Varying for the UV coordinates
varying vec2 vUv;

void main() {
    vec3 textureColor = texture2D(tMap, vUv).rgb;
    gl_FragColor = vec4(textureColor, 1.0);
}
