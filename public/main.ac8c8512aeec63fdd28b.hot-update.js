"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/shaders/gallery-fragment.glsl":
/*!*******************************************!*\
  !*** ./app/shaders/gallery-fragment.glsl ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// precision highp float;\n\n// uniform sampler2D tMap;\n// uniform vec2 uOffset;\n\n// varying vec2 vUv;\n\n// vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset){\n//     float r = texture2D(textureImage, uv + offset * 0.3).r;\n//     vec2 gb = texture2D(textureImage, uv).gb;\n//     return vec3(r, gb);\n// }\n\n// void main() {\n//     vec3 colorShifted = rgbShift(tMap, vUv, uOffset);\n//     // gl_FragColor = vec4(colorShifted, 1.0);\n//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Solid red color\n// }\n\nprecision highp float;\n#define GLSLIFY 1\n\n// Uniform for the texture\nuniform sampler2D tMap;\n\n// Varying for the UV coordinates\nvarying vec2 vUv;\n\nvoid main() {\n    vec3 textureColor = texture2D(tMap, vUv).rgb;\n    gl_FragColor = vec4(textureColor, 1.0);\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4993b9963a75496003bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzhjODUxMmFlZWM2M2ZkZDI4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsbUVBQW1FLGdFQUFnRSxrREFBa0QsNEJBQTRCLE1BQU0sb0JBQW9CLDBEQUEwRCxtREFBbUQsa0RBQWtELHdCQUF3QiwwQkFBMEIsMEVBQTBFLHdEQUF3RCxpQkFBaUIsbURBQW1ELDZDQUE2QyxHQUFHLEdBQUc7Ozs7Ozs7O1VDQTl5QiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIvLyBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuXFxuLy8gdW5pZm9ybSBzYW1wbGVyMkQgdE1hcDtcXG4vLyB1bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG4vLyB2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vIHZlYzMgcmdiU2hpZnQoc2FtcGxlcjJEIHRleHR1cmVJbWFnZSwgdmVjMiB1diwgdmVjMiBvZmZzZXQpe1xcbi8vICAgICBmbG9hdCByID0gdGV4dHVyZTJEKHRleHR1cmVJbWFnZSwgdXYgKyBvZmZzZXQgKiAwLjMpLnI7XFxuLy8gICAgIHZlYzIgZ2IgPSB0ZXh0dXJlMkQodGV4dHVyZUltYWdlLCB1dikuZ2I7XFxuLy8gICAgIHJldHVybiB2ZWMzKHIsIGdiKTtcXG4vLyB9XFxuXFxuLy8gdm9pZCBtYWluKCkge1xcbi8vICAgICB2ZWMzIGNvbG9yU2hpZnRlZCA9IHJnYlNoaWZ0KHRNYXAsIHZVdiwgdU9mZnNldCk7XFxuLy8gICAgIC8vIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3JTaGlmdGVkLCAxLjApO1xcbi8vICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7IC8vIFNvbGlkIHJlZCBjb2xvclxcbi8vIH1cXG5cXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4vLyBVbmlmb3JtIGZvciB0aGUgdGV4dHVyZVxcbnVuaWZvcm0gc2FtcGxlcjJEIHRNYXA7XFxuXFxuLy8gVmFyeWluZyBmb3IgdGhlIFVWIGNvb3JkaW5hdGVzXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzMgdGV4dHVyZUNvbG9yID0gdGV4dHVyZTJEKHRNYXAsIHZVdikucmdiO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleHR1cmVDb2xvciwgMS4wKTtcXG59XFxuXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDk5M2I5OTYzYTc1NDk2MDAzYmNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=