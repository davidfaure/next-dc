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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n// #define PI 3.1415926535897932384626433832795\n\n// attribute vec3 position;\n// attribute vec2 uv;\n\n// uniform mat4 modelViewMatrix;\n// uniform mat4 projectionMatrix;\n// uniform vec2 uOffset;\n\n// varying vec2 vUv;\n\n// vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){\n//     position.x = position.x + (sin(uv.y * PI) * offset.x);\n//     position.y = position.y + (sin(uv.x * PI) * offset.y);\n//     return position;\n// }\n\n// void main(){\n//     vUv = uv;\n//     vec3 newPosition = deformationCurve(position, uv, uOffset);\n//     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n// }\n\n// precision highp float;\n\n// // Attributes\n// attribute vec3 position;\n// attribute vec2 uv;\n\n// // Uniforms\n// uniform mat4 modelViewMatrix;\n// uniform mat4 projectionMatrix;\n\n// // Varying to pass UV to the fragment shader\n// varying vec2 vUv;\n\n// void main() {\n//     vUv = uv;\n//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n// }\n\n#define PI 3.1415926535897932384626433832795\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform float uTime;\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\nuniform float uStrength;\n\n// uMobile to play with breakpoints on mobile\n// uniform float uMobile;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  // p.z = (sin(p.x * 4.0 + uTime) * 0.5 + cos(p.y * 2.0 + uTime) * 0.5) * (0.1 + uSpeed * 0.5);\n\n  vec4 newPosition = modelViewMatrix * vec4(p, 1.0);\n\n  newPosition.z += sin(newPosition.x / uViewportSizes.x * PI * PI * 1.3 / 2.0) * abs(uStrength);\n\n  gl_Position = projectionMatrix * newPosition;\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7846c931137188b0627")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNGEwNGQ5YTU4NzU0YWY0MmQ0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxrR0FBa0csdUJBQXVCLG9DQUFvQyxtQ0FBbUMsMEJBQTBCLHdCQUF3QixrRUFBa0UsK0RBQStELCtEQUErRCx5QkFBeUIsTUFBTSxtQkFBbUIsa0JBQWtCLG9FQUFvRSxtRkFBbUYsTUFBTSw2QkFBNkIsaURBQWlELHVCQUF1QixvREFBb0QsbUNBQW1DLHlFQUF5RSxvQkFBb0Isa0JBQWtCLGdGQUFnRixNQUFNLHNFQUFzRSwwQkFBMEIsd0JBQXdCLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLDRFQUE0RSxpQ0FBaUMsZ0NBQWdDLHFCQUFxQixpQkFBaUIsYUFBYSx3QkFBd0Isb0dBQW9HLHdEQUF3RCxvR0FBb0csbURBQW1ELEdBQUcsR0FBRzs7Ozs7Ozs7VUNBM3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vICNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuLy8gYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuLy8gYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxuLy8gdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG4vLyB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG4vLyB1bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG4vLyB2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vIHZlYzMgZGVmb3JtYXRpb25DdXJ2ZSh2ZWMzIHBvc2l0aW9uLCB2ZWMyIHV2LCB2ZWMyIG9mZnNldCl7XFxuLy8gICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54ICsgKHNpbih1di55ICogUEkpICogb2Zmc2V0LngpO1xcbi8vICAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSArIChzaW4odXYueCAqIFBJKSAqIG9mZnNldC55KTtcXG4vLyAgICAgcmV0dXJuIHBvc2l0aW9uO1xcbi8vIH1cXG5cXG4vLyB2b2lkIG1haW4oKXtcXG4vLyAgICAgdlV2ID0gdXY7XFxuLy8gICAgIHZlYzMgbmV3UG9zaXRpb24gPSBkZWZvcm1hdGlvbkN1cnZlKHBvc2l0aW9uLCB1diwgdU9mZnNldCk7XFxuLy8gICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XFxuLy8gfVxcblxcbi8vIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG5cXG4vLyAvLyBBdHRyaWJ1dGVzXFxuLy8gYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuLy8gYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxuLy8gLy8gVW5pZm9ybXNcXG4vLyB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbi8vIHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbi8vIC8vIFZhcnlpbmcgdG8gcGFzcyBVViB0byB0aGUgZnJhZ21lbnQgc2hhZGVyXFxuLy8gdmFyeWluZyB2ZWMyIHZVdjtcXG5cXG4vLyB2b2lkIG1haW4oKSB7XFxuLy8gICAgIHZVdiA9IHV2O1xcbi8vICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbi8vIH1cXG5cXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSBmbG9hdCB1U3BlZWQ7XFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcbnVuaWZvcm0gZmxvYXQgdVN0cmVuZ3RoO1xcblxcbi8vIHVNb2JpbGUgdG8gcGxheSB3aXRoIGJyZWFrcG9pbnRzIG9uIG1vYmlsZVxcbi8vIHVuaWZvcm0gZmxvYXQgdU1vYmlsZTtcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuXFxuICB2ZWMzIHAgPSBwb3NpdGlvbjtcXG5cXG4gIC8vIHAueiA9IChzaW4ocC54ICogNC4wICsgdVRpbWUpICogMC41ICsgY29zKHAueSAqIDIuMCArIHVUaW1lKSAqIDAuNSkgKiAoMC4xICsgdVNwZWVkICogMC41KTtcXG5cXG4gIHZlYzQgbmV3UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHAsIDEuMCk7XFxuXFxuICBuZXdQb3NpdGlvbi56ICs9IHNpbihuZXdQb3NpdGlvbi54IC8gdVZpZXdwb3J0U2l6ZXMueCAqIFBJICogUEkgKiAxLjMgLyAyLjApICogYWJzKHVTdHJlbmd0aCk7XFxuXFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBuZXdQb3NpdGlvbjtcXG59XFxuXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTc4NDZjOTMxMTM3MTg4YjA2MjdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=