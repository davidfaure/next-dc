"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/shaders/cursor-vertex.glsl":
/*!****************************************!*\
  !*** ./app/shaders/cursor-vertex.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\n\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\n\nvec4 getPosition() {\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);\n    vec2 nextScreen = next.xy * aspect;\n    vec2 prevScreen = prev.xy * aspect;\n\n    vec2 tangent = normalize(nextScreen - prevScreen);\n    vec2 normal = vec2(-tangent.y, tangent.x);\n    normal /= aspect;\n    normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);\n\n    float pixelWidth = 1.0 / (uResolution.y / uDPR);\n    normal *= pixelWidth * uThickness;\n\n    float dist = length(nextScreen - prevScreen);\n    normal *= smoothstep(0.0, 0.02, dist);\n\n    vec4 current = vec4(position, 1);\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    gl_Position = getPosition();\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b9a181f72d3d217b7ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOGM4MmE0ZDQ0YmUzYWJhMzBhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSw0Q0FBNEMsc0JBQXNCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDZCQUE2QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwyREFBMkQseUNBQXlDLHlDQUF5QywwREFBMEQsZ0RBQWdELHVCQUF1QixzREFBc0Qsd0RBQXdELHdDQUF3QyxxREFBcUQsNENBQTRDLHlDQUF5QyxrQ0FBa0MscUJBQXFCLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLEdBQUc7Ozs7Ozs7O1VDQXg1QiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5leHQ7XFxuYXR0cmlidXRlIHZlYzMgcHJldjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgZmxvYXQgc2lkZTtcXG5cXG51bmlmb3JtIHZlYzIgdVJlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB1RFBSO1xcbnVuaWZvcm0gZmxvYXQgdVRoaWNrbmVzcztcXG5cXG52ZWM0IGdldFBvc2l0aW9uKCkge1xcbiAgICB2ZWMyIGFzcGVjdCA9IHZlYzIodVJlc29sdXRpb24ueCAvIHVSZXNvbHV0aW9uLnksIDEpO1xcbiAgICB2ZWMyIG5leHRTY3JlZW4gPSBuZXh0Lnh5ICogYXNwZWN0O1xcbiAgICB2ZWMyIHByZXZTY3JlZW4gPSBwcmV2Lnh5ICogYXNwZWN0O1xcblxcbiAgICB2ZWMyIHRhbmdlbnQgPSBub3JtYWxpemUobmV4dFNjcmVlbiAtIHByZXZTY3JlZW4pO1xcbiAgICB2ZWMyIG5vcm1hbCA9IHZlYzIoLXRhbmdlbnQueSwgdGFuZ2VudC54KTtcXG4gICAgbm9ybWFsIC89IGFzcGVjdDtcXG4gICAgbm9ybWFsICo9IDEuMCAtIHBvdyhhYnModXYueSAtIDAuNSkgKiAyLjAsIDIuMCk7XFxuXFxuICAgIGZsb2F0IHBpeGVsV2lkdGggPSAxLjAgLyAodVJlc29sdXRpb24ueSAvIHVEUFIpO1xcbiAgICBub3JtYWwgKj0gcGl4ZWxXaWR0aCAqIHVUaGlja25lc3M7XFxuXFxuICAgIGZsb2F0IGRpc3QgPSBsZW5ndGgobmV4dFNjcmVlbiAtIHByZXZTY3JlZW4pO1xcbiAgICBub3JtYWwgKj0gc21vb3Roc3RlcCgwLjAsIDAuMDIsIGRpc3QpO1xcblxcbiAgICB2ZWM0IGN1cnJlbnQgPSB2ZWM0KHBvc2l0aW9uLCAxKTtcXG4gICAgY3VycmVudC54eSAtPSBub3JtYWwgKiBzaWRlO1xcbiAgICByZXR1cm4gY3VycmVudDtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XFxufVxcblwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRiOWExODFmNzJkM2QyMTdiN2VlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9