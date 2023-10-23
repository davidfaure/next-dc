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
/* harmony export */   random: () => (/* binding */ random)
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f89e470c82ec348c67bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOGE0N2M3MmViOGU2YzJlZGVhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRWhCLFNBQVNDLElBQUlBLENBQUNDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxDQUFDLEVBQUU7RUFDOUIsT0FBT0osNENBQUksQ0FBQ0ssS0FBSyxDQUFDQyxXQUFXLENBQUNKLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxDQUFDLENBQUM7QUFDMUM7QUFFTyxTQUFTRyxLQUFLQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFO0VBQ3RDLE9BQU9WLDRDQUFJLENBQUNLLEtBQUssQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxDQUFDO0FBQzNDO0FBRU8sU0FBU0MsTUFBTUEsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDL0IsT0FBT1QsNENBQUksQ0FBQ0ssS0FBSyxDQUFDTSxNQUFNLENBQUNILEdBQUcsRUFBRUMsR0FBRyxDQUFDO0FBQ3BDO0FBRU8sU0FBU0csR0FBR0EsQ0FBQ0MsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7RUFDNUQsT0FBT2pCLDRDQUFJLENBQUNLLEtBQUssQ0FBQ2EsUUFBUSxDQUFDSixLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVKLFVBQVUsQ0FBQztBQUN0RTs7Ozs7Ozs7VUNoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChwMSwgcDIsIHQpIHtcbiAgcmV0dXJuIEdTQVAudXRpbHMuaW50ZXJwb2xhdGUocDEsIHAyLCB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIG51bWJlcikge1xuICByZXR1cm4gR1NBUC51dGlscy5jbGFtcChtaW4sIG1heCwgbnVtYmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLnJhbmRvbShtaW4sIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZVRvTWFwLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLm1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlVG9NYXApXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmODllNDcwYzgyZWMzNDhjNjdiYlwiKSJdLCJuYW1lcyI6WyJHU0FQIiwibGVycCIsInAxIiwicDIiLCJ0IiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwibWluIiwibWF4IiwibnVtYmVyIiwicmFuZG9tIiwibWFwIiwidmFsdWVUb01hcCIsImluTWluIiwiaW5NYXgiLCJvdXRNaW4iLCJvdXRNYXgiLCJtYXBSYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=