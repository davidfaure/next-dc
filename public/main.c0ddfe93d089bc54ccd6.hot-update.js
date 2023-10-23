"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/utils/math.js":
/*!***************************!*\
  !*** ./app/utils/math.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   randomize: () => (/* binding */ randomize)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

function lerp(p1, p2, t) {
  return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.interpolate(p1, p2, t);
}
function clamp(min, max, number) {
  return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.clamp(min, max, number);
}
function random(min, max) {
  return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.random(min, max);
}
function map(valueToMap, inMin, inMax, outMin, outMax) {
  return gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.mapRange(inMin, inMax, outMin, outMax, valueToMap);
}
function randomize(a, b) {
  const alpha = Math.random();
  return a * (1.0 - alpha) + b * alpha;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae3e108192519e0d790d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMGRkZmU5M2QwODliYzU0Y2NkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUVoQixTQUFTQyxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxFQUFFO0VBQzlCLE9BQU9KLDRDQUFJLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxDQUFDO0FBQzFDO0FBRU8sU0FBU0csS0FBS0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtFQUN0QyxPQUFPViw0Q0FBSSxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQztBQUMzQztBQUVPLFNBQVNDLE1BQU1BLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQy9CLE9BQU9ULDRDQUFJLENBQUNLLEtBQUssQ0FBQ00sTUFBTSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztBQUNwQztBQUVPLFNBQVNHLEdBQUdBLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0VBQzVELE9BQU9qQiw0Q0FBSSxDQUFDSyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0osS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixVQUFVLENBQUM7QUFDdEU7QUFFTyxTQUFTTSxTQUFTQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUM5QixNQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ1osTUFBTSxDQUFDLENBQUM7RUFDM0IsT0FBT1MsQ0FBQyxJQUFJLEdBQUcsR0FBR0UsS0FBSyxDQUFDLEdBQUdELENBQUMsR0FBR0MsS0FBSztBQUN0Qzs7Ozs7Ozs7VUNyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChwMSwgcDIsIHQpIHtcbiAgcmV0dXJuIEdTQVAudXRpbHMuaW50ZXJwb2xhdGUocDEsIHAyLCB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIG51bWJlcikge1xuICByZXR1cm4gR1NBUC51dGlscy5jbGFtcChtaW4sIG1heCwgbnVtYmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLnJhbmRvbShtaW4sIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZVRvTWFwLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLm1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlVG9NYXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemUoYSwgYikge1xuICBjb25zdCBhbHBoYSA9IE1hdGgucmFuZG9tKClcbiAgcmV0dXJuIGEgKiAoMS4wIC0gYWxwaGEpICsgYiAqIGFscGhhXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZTNlMTA4MTkyNTE5ZTBkNzkwZFwiKSJdLCJuYW1lcyI6WyJHU0FQIiwibGVycCIsInAxIiwicDIiLCJ0IiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwibWluIiwibWF4IiwibnVtYmVyIiwicmFuZG9tIiwibWFwIiwidmFsdWVUb01hcCIsImluTWluIiwiaW5NYXgiLCJvdXRNaW4iLCJvdXRNYXgiLCJtYXBSYW5nZSIsInJhbmRvbWl6ZSIsImEiLCJiIiwiYWxwaGEiLCJNYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==