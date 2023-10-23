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
  return startPoints.map((point, index) => {
    const dx = endPoints[index][0] - point[0];
    const dy = endPoints[index][1] - point[1];
    return [point[0] + dx * progress, point[1] + dy * progress];
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2688b6e51141abd3a59e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMDNhOGEwMDY2M2FmYTBkNTk1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUVoQixTQUFTQyxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxFQUFFO0VBQzlCLE9BQU9KLDRDQUFJLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxDQUFDO0FBQzFDO0FBRU8sU0FBU0csS0FBS0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtFQUN0QyxPQUFPViw0Q0FBSSxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQztBQUMzQztBQUVPLFNBQVNDLE1BQU1BLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQy9CLE9BQU9ULDRDQUFJLENBQUNLLEtBQUssQ0FBQ00sTUFBTSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztBQUNwQztBQUVPLFNBQVNHLEdBQUdBLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0VBQzVELE9BQU9qQiw0Q0FBSSxDQUFDSyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0osS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixVQUFVLENBQUM7QUFDdEU7QUFFTyxTQUFTTSxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7RUFDbEUsT0FBT0YsV0FBVyxDQUFDUixHQUFHLENBQUMsQ0FBQ1csS0FBSyxFQUFFQyxLQUFLLEtBQUs7SUFDdkMsTUFBTUMsRUFBRSxHQUFHSixTQUFTLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRCxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU1HLEVBQUUsR0FBR0wsU0FBUyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0QsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUNBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0UsRUFBRSxHQUFHSCxRQUFRLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0csRUFBRSxHQUFHSixRQUFRLENBQUM7RUFDN0QsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC91dGlscy9tYXRoLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAocDEsIHAyLCB0KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLmludGVycG9sYXRlKHAxLCBwMiwgdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCBudW1iZXIpIHtcbiAgcmV0dXJuIEdTQVAudXRpbHMuY2xhbXAobWluLCBtYXgsIG51bWJlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICByZXR1cm4gR1NBUC51dGlscy5yYW5kb20obWluLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWVUb01hcCwgaW5NaW4sIGluTWF4LCBvdXRNaW4sIG91dE1heCkge1xuICByZXR1cm4gR1NBUC51dGlscy5tYXBSYW5nZShpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4LCB2YWx1ZVRvTWFwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVQb2ludHMoc3RhcnRQb2ludHMsIGVuZFBvaW50cywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIHN0YXJ0UG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZHggPSBlbmRQb2ludHNbaW5kZXhdWzBdIC0gcG9pbnRbMF1cbiAgICBjb25zdCBkeSA9IGVuZFBvaW50c1tpbmRleF1bMV0gLSBwb2ludFsxXVxuICAgIHJldHVybiBbcG9pbnRbMF0gKyBkeCAqIHByb2dyZXNzLCBwb2ludFsxXSArIGR5ICogcHJvZ3Jlc3NdXG4gIH0pXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNjg4YjZlNTExNDFhYmQzYTU5ZVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwibGVycCIsInAxIiwicDIiLCJ0IiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwibWluIiwibWF4IiwibnVtYmVyIiwicmFuZG9tIiwibWFwIiwidmFsdWVUb01hcCIsImluTWluIiwiaW5NYXgiLCJvdXRNaW4iLCJvdXRNYXgiLCJtYXBSYW5nZSIsImludGVycG9sYXRlUG9pbnRzIiwic3RhcnRQb2ludHMiLCJlbmRQb2ludHMiLCJwcm9ncmVzcyIsInBvaW50IiwiaW5kZXgiLCJkeCIsImR5Il0sInNvdXJjZVJvb3QiOiIifQ==