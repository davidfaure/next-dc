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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// #define PI 3.1415926535897932384626433832795\n\n// attribute vec3 position;\n// attribute vec2 uv;\n\n// uniform mat4 modelViewMatrix;\n// uniform mat4 projectionMatrix;\n// uniform vec2 uOffset;\n\n// varying vec2 vUv;\n\n// vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){\n//     position.x = position.x + (sin(uv.y * PI) * offset.x);\n//     position.y = position.y + (sin(uv.x * PI) * offset.y);\n//     return position;\n// }\n\n// void main(){\n//     vUv = uv;\n//     vec3 newPosition = deformationCurve(position, uv, uOffset);\n//     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n// }\n\nprecision highp float;\n#define GLSLIFY 1\n\n// Attributes\nattribute vec3 position;\nattribute vec2 uv;\n\n// Uniforms\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\n// Varying to pass UV to the fragment shader\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac8c8512aeec63fdd28b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZjc2ZDE0OGRjOTFlYTJiZmEwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSwrRUFBK0UsdUJBQXVCLG9DQUFvQyxtQ0FBbUMsMEJBQTBCLHdCQUF3QixrRUFBa0UsK0RBQStELCtEQUErRCx5QkFBeUIsTUFBTSxtQkFBbUIsa0JBQWtCLG9FQUFvRSxtRkFBbUYsTUFBTSwwQkFBMEIsOERBQThELG9CQUFvQiw4Q0FBOEMsZ0NBQWdDLG1FQUFtRSxpQkFBaUIsZUFBZSw2RUFBNkUsR0FBRyxHQUFHOzs7Ozs7OztVQ0EvL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3NoYWRlcnMvZ2FsbGVyeS12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi8vICNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuLy8gYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuLy8gYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxuLy8gdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG4vLyB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG4vLyB1bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG4vLyB2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vIHZlYzMgZGVmb3JtYXRpb25DdXJ2ZSh2ZWMzIHBvc2l0aW9uLCB2ZWMyIHV2LCB2ZWMyIG9mZnNldCl7XFxuLy8gICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54ICsgKHNpbih1di55ICogUEkpICogb2Zmc2V0LngpO1xcbi8vICAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSArIChzaW4odXYueCAqIFBJKSAqIG9mZnNldC55KTtcXG4vLyAgICAgcmV0dXJuIHBvc2l0aW9uO1xcbi8vIH1cXG5cXG4vLyB2b2lkIG1haW4oKXtcXG4vLyAgICAgdlV2ID0gdXY7XFxuLy8gICAgIHZlYzMgbmV3UG9zaXRpb24gPSBkZWZvcm1hdGlvbkN1cnZlKHBvc2l0aW9uLCB1diwgdU9mZnNldCk7XFxuLy8gICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XFxuLy8gfVxcblxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbi8vIEF0dHJpYnV0ZXNcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG4vLyBVbmlmb3Jtc1xcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxuLy8gVmFyeWluZyB0byBwYXNzIFVWIHRvIHRoZSBmcmFnbWVudCBzaGFkZXJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVxcblwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFjOGM4NTEyYWVlYzYzZmRkMjhiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9