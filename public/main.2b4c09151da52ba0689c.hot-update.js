"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/shaders/text-vertex.glsl":
/*!**************************************!*\
  !*** ./app/shaders/text-vertex.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n// attribute vec2 uv;\n// attribute vec3 position;\n\n// uniform mat4 modelViewMatrix;\n// uniform mat4 projectionMatrix;\n\n// varying vec2 vUv;\n\n// void main() {\n//   vUv = uv;\n\n//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n// }\n\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform vec2 uViewportSizes;\nuniform float uStrength;\n\n// uMobile to play with breakpoints on mobile\n// uniform float uMobile;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);\n\n  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI * PI * 1.1 / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e566d9db6e478f20c877")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYjRjMDkxNTFkYTUyYmEwNjg5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSx5Q0FBeUMsNkJBQTZCLG9DQUFvQyxtQ0FBbUMsd0JBQXdCLG9CQUFvQixnQkFBZ0IsZ0ZBQWdGLE1BQU0sc0VBQXNFLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLDRFQUE0RSxpQ0FBaUMsZ0NBQWdDLHFCQUFxQixpQkFBaUIsYUFBYSx3QkFBd0Isd0RBQXdELG9HQUFvRyxtREFBbUQsR0FBRyxHQUFHOzs7Ozs7OztVQ0FyM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxuLy8gYXR0cmlidXRlIHZlYzIgdXY7XFxuLy8gYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxuLy8gdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG4vLyB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG4vLyB2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vIHZvaWQgbWFpbigpIHtcXG4vLyAgIHZVdiA9IHV2O1xcblxcbi8vICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4vLyB9XFxuXFxuI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTVcXG5cXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG51bmlmb3JtIHZlYzIgdVZpZXdwb3J0U2l6ZXM7XFxudW5pZm9ybSBmbG9hdCB1U3RyZW5ndGg7XFxuXFxuLy8gdU1vYmlsZSB0byBwbGF5IHdpdGggYnJlYWtwb2ludHMgb24gbW9iaWxlXFxuLy8gdW5pZm9ybSBmbG9hdCB1TW9iaWxlO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG5cXG4gIHZlYzMgcCA9IHBvc2l0aW9uO1xcblxcbiAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocCwgMS4wKTtcXG5cXG4gIG5ld1Bvc2l0aW9uLnogKz0gc2luKG5ld1Bvc2l0aW9uLnggLyB1Vmlld3BvcnRTaXplcy54ICogUEkgKiBQSSAqIDEuMSAvIDIuMCkgKiBhYnModVN0cmVuZ3RoKTtcXG5cXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cXG5cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNTY2ZDlkYjZlNDc4ZjIwYzg3N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==