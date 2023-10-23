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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform vec2 uOffset;\n\nvarying vec2 vUv;\n\nvec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset){\n    float r = texture2D(textureImage, uv + offset * 0.3).r;\n    vec2 gb = texture2D(textureImage, uv).gb;\n    return vec3(r, gb);\n}\n\nvoid main() {\n    vec3 colorShifted = rgbShift(tMap, vUv, uOffset);\n    gl_FragColor = vec4(colorShifted, 1.0);\n     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Solid red color\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("720db054dc39d2484da1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NWRjMDNmYzdjODNhMDhhM2FjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSx1QkFBdUIsOENBQThDLHVCQUF1QixxQkFBcUIsZ0VBQWdFLDZEQUE2RCwrQ0FBK0MseUJBQXlCLEdBQUcsaUJBQWlCLHVEQUF1RCw2Q0FBNkMsZ0RBQWdELHFCQUFxQixHQUFHOzs7Ozs7OztVQ0FyZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3NoYWRlcnMvZ2FsbGVyeS1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgdE1hcDtcXG51bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZlYzMgcmdiU2hpZnQoc2FtcGxlcjJEIHRleHR1cmVJbWFnZSwgdmVjMiB1diwgdmVjMiBvZmZzZXQpe1xcbiAgICBmbG9hdCByID0gdGV4dHVyZTJEKHRleHR1cmVJbWFnZSwgdXYgKyBvZmZzZXQgKiAwLjMpLnI7XFxuICAgIHZlYzIgZ2IgPSB0ZXh0dXJlMkQodGV4dHVyZUltYWdlLCB1dikuZ2I7XFxuICAgIHJldHVybiB2ZWMzKHIsIGdiKTtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMzIGNvbG9yU2hpZnRlZCA9IHJnYlNoaWZ0KHRNYXAsIHZVdiwgdU9mZnNldCk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3JTaGlmdGVkLCAxLjApO1xcbiAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApOyAvLyBTb2xpZCByZWQgY29sb3JcXG59XFxuXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzIwZGIwNTRkYzM5ZDI0ODRkYTFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=