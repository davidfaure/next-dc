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
/* harmony export */   interpolatePoints: () => (/* binding */ interpolatePoints),
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
function interpolatePoints(startPoints, endPoints, progress) {
  let result = [];
  for (let i = 0; i < startPoints.length; i++) {
    const startX = startPoints[i][0];
    const startY = startPoints[i][1];
    const endX = endPoints[i][0];
    const endY = endPoints[i][1];
    const interpolatedX = startX + (endX - startX) * progress;
    const interpolatedY = startY + (endY - startY) * progress;
    result.push([interpolatedX, interpolatedY]);
  }

  // Converting it back to a string representation for SVG 'points' attribute
  return result.map(point => point.join(" ")).join(" ");
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1406879e16e62890d47b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZGI2OGMxYTU0ZGM3MTgwYzhlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUVoQixTQUFTQyxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxFQUFFO0VBQzlCLE9BQU9KLDRDQUFJLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxDQUFDO0FBQzFDO0FBRU8sU0FBU0csS0FBS0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtFQUN0QyxPQUFPViw0Q0FBSSxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQztBQUMzQztBQUVPLFNBQVNDLE1BQU1BLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQy9CLE9BQU9ULDRDQUFJLENBQUNLLEtBQUssQ0FBQ00sTUFBTSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztBQUNwQztBQUVPLFNBQVNHLEdBQUdBLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0VBQzVELE9BQU9qQiw0Q0FBSSxDQUFDSyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0osS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixVQUFVLENBQUM7QUFDdEU7QUFFTyxTQUFTTSxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7RUFDbEUsSUFBSUMsTUFBTSxHQUFHLEVBQUU7RUFFZixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0osV0FBVyxDQUFDSyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzNDLE1BQU1FLE1BQU0sR0FBR04sV0FBVyxDQUFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsTUFBTUcsTUFBTSxHQUFHUCxXQUFXLENBQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxNQUFNSSxJQUFJLEdBQUdQLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU1LLElBQUksR0FBR1IsU0FBUyxDQUFDRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUIsTUFBTU0sYUFBYSxHQUFHSixNQUFNLEdBQUcsQ0FBQ0UsSUFBSSxHQUFHRixNQUFNLElBQUlKLFFBQVE7SUFDekQsTUFBTVMsYUFBYSxHQUFHSixNQUFNLEdBQUcsQ0FBQ0UsSUFBSSxHQUFHRixNQUFNLElBQUlMLFFBQVE7SUFFekRDLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQUNGLGFBQWEsRUFBRUMsYUFBYSxDQUFDLENBQUM7RUFDN0M7O0VBRUE7RUFDQSxPQUFPUixNQUFNLENBQUNYLEdBQUcsQ0FBQ3FCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN2RDs7Ozs7Ozs7VUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChwMSwgcDIsIHQpIHtcbiAgcmV0dXJuIEdTQVAudXRpbHMuaW50ZXJwb2xhdGUocDEsIHAyLCB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIG51bWJlcikge1xuICByZXR1cm4gR1NBUC51dGlscy5jbGFtcChtaW4sIG1heCwgbnVtYmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLnJhbmRvbShtaW4sIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZVRvTWFwLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLm1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlVG9NYXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZVBvaW50cyhzdGFydFBvaW50cywgZW5kUG9pbnRzLCBwcm9ncmVzcykge1xuICBsZXQgcmVzdWx0ID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRYID0gc3RhcnRQb2ludHNbaV1bMF1cbiAgICBjb25zdCBzdGFydFkgPSBzdGFydFBvaW50c1tpXVsxXVxuICAgIGNvbnN0IGVuZFggPSBlbmRQb2ludHNbaV1bMF1cbiAgICBjb25zdCBlbmRZID0gZW5kUG9pbnRzW2ldWzFdXG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRYID0gc3RhcnRYICsgKGVuZFggLSBzdGFydFgpICogcHJvZ3Jlc3NcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRZID0gc3RhcnRZICsgKGVuZFkgLSBzdGFydFkpICogcHJvZ3Jlc3NcblxuICAgIHJlc3VsdC5wdXNoKFtpbnRlcnBvbGF0ZWRYLCBpbnRlcnBvbGF0ZWRZXSlcbiAgfVxuXG4gIC8vIENvbnZlcnRpbmcgaXQgYmFjayB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgU1ZHICdwb2ludHMnIGF0dHJpYnV0ZVxuICByZXR1cm4gcmVzdWx0Lm1hcChwb2ludCA9PiBwb2ludC5qb2luKFwiIFwiKSkuam9pbihcIiBcIilcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0MDY4NzllMTZlNjI4OTBkNDdiXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJsZXJwIiwicDEiLCJwMiIsInQiLCJ1dGlscyIsImludGVycG9sYXRlIiwiY2xhbXAiLCJtaW4iLCJtYXgiLCJudW1iZXIiLCJyYW5kb20iLCJtYXAiLCJ2YWx1ZVRvTWFwIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsIm1hcFJhbmdlIiwiaW50ZXJwb2xhdGVQb2ludHMiLCJzdGFydFBvaW50cyIsImVuZFBvaW50cyIsInByb2dyZXNzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiaW50ZXJwb2xhdGVkWCIsImludGVycG9sYXRlZFkiLCJwdXNoIiwicG9pbnQiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==