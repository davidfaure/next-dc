precision highp float;

uniform sampler2D tMap;

varying vec2 vUv;

void main() {
    vec3 textureColor = texture2D(tMap, vUv).rgb;
    gl_FragColor = vec4(textureColor, 1.0);
}
