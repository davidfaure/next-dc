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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform vec2 uViewportSizes;\nuniform float uStrength;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);\n\n  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI * PI * 1.1 / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd881ea4c03d1b4c9627")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYWFhY2M2MmQ4ZTViNGU2ZjMyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxzRkFBc0YsMEJBQTBCLGdDQUFnQywwQkFBMEIsaUNBQWlDLGdDQUFnQyxxQkFBcUIsaUJBQWlCLGFBQWEsd0JBQXdCLHdEQUF3RCxvR0FBb0csbURBQW1ELEdBQUcsR0FBRzs7Ozs7Ozs7VUNBMWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9zaGFkZXJzL3RleHQtdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbiNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcbnVuaWZvcm0gZmxvYXQgdVN0cmVuZ3RoO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG5cXG4gIHZlYzMgcCA9IHBvc2l0aW9uO1xcblxcbiAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocCwgMS4wKTtcXG5cXG4gIG5ld1Bvc2l0aW9uLnogKz0gc2luKG5ld1Bvc2l0aW9uLnggLyB1Vmlld3BvcnRTaXplcy54ICogUEkgKiBQSSAqIDEuMSAvIDIuMCkgKiBhYnModVN0cmVuZ3RoKTtcXG5cXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cXG5cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZDg4MWVhNGMwM2QxYjRjOTYyN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==