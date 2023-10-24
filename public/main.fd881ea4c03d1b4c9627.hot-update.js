"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/shaders/gallery-vertex.glsl":
/*!*****************************************!*\
  !*** ./app/shaders/gallery-vertex.glsl ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform float uTime;\nuniform vec2 uViewportSizes;\nuniform float uStrength;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);\n\n  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI * PI * 1.1 / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8abbe3e8a33377aa5e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mZDg4MWVhNGMwM2QxYjRjOTYyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxzRkFBc0YsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLGlDQUFpQyxnQ0FBZ0MscUJBQXFCLGlCQUFpQixhQUFhLHdCQUF3Qix3REFBd0Qsb0dBQW9HLG1EQUFtRCxHQUFHLEdBQUc7Ozs7Ozs7O1VDQWhqQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9nYWxsZXJ5LXZlcnRleC5nbHNsIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcbnVuaWZvcm0gZmxvYXQgdVN0cmVuZ3RoO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG5cXG4gIHZlYzMgcCA9IHBvc2l0aW9uO1xcblxcbiAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocCwgMS4wKTtcXG5cXG4gIG5ld1Bvc2l0aW9uLnogKz0gc2luKG5ld1Bvc2l0aW9uLnggLyB1Vmlld3BvcnRTaXplcy54ICogUEkgKiBQSSAqIDEuMSAvIDIuMCkgKiBhYnModVN0cmVuZ3RoKTtcXG5cXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cXG5cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOGFiYmUzZThhMzMzNzdhYTVlMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==