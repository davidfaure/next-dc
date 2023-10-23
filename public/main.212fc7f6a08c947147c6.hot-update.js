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
  const startPointsArray = startPoints.split(" ").map(point => {
    const parsed = parseFloat(point);
    if (isNaN(parsed)) {
      console.error("Invalid start point value:", point);
    }
    return parsed;
  });
  const endPointsArray = endPoints.split(" ").map(point => {
    const parsed = parseFloat(point);
    if (isNaN(parsed)) {
      console.error("Invalid end point value:", point);
    }
    return parsed;
  });
  if (startPointsArray.length !== endPointsArray.length) {
    console.error("Start and end points do not have the same length:", startPoints, endPoints);
    return "";
  }
  return startPointsArray.map((start, index) => {
    const end = endPointsArray[index];
    return start + (end - start) * progress;
  }).join(" ");
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1db68c1a54dc7180c8ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMTJmYzdmNmEwOGM5NDcxNDdjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUVoQixTQUFTQyxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxFQUFFO0VBQzlCLE9BQU9KLDRDQUFJLENBQUNLLEtBQUssQ0FBQ0MsV0FBVyxDQUFDSixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsQ0FBQyxDQUFDO0FBQzFDO0FBRU8sU0FBU0csS0FBS0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtFQUN0QyxPQUFPViw0Q0FBSSxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQztBQUMzQztBQUVPLFNBQVNDLE1BQU1BLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQy9CLE9BQU9ULDRDQUFJLENBQUNLLEtBQUssQ0FBQ00sTUFBTSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztBQUNwQztBQUVPLFNBQVNHLEdBQUdBLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0VBQzVELE9BQU9qQiw0Q0FBSSxDQUFDSyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0osS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixVQUFVLENBQUM7QUFDdEU7QUFFTyxTQUFTTSxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7RUFDbEUsTUFBTUMsZ0JBQWdCLEdBQUdILFdBQVcsQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDWixHQUFHLENBQUNhLEtBQUssSUFBSTtJQUMzRCxNQUFNQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDO0lBQ2hDLElBQUlHLEtBQUssQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7TUFDakJHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDRCQUE0QixFQUFFTCxLQUFLLENBQUM7SUFDcEQ7SUFDQSxPQUFPQyxNQUFNO0VBQ2YsQ0FBQyxDQUFDO0VBRUYsTUFBTUssY0FBYyxHQUFHVixTQUFTLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ1osR0FBRyxDQUFDYSxLQUFLLElBQUk7SUFDdkQsTUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNGLEtBQUssQ0FBQztJQUNoQyxJQUFJRyxLQUFLLENBQUNGLE1BQU0sQ0FBQyxFQUFFO01BQ2pCRyxPQUFPLENBQUNDLEtBQUssQ0FBQywwQkFBMEIsRUFBRUwsS0FBSyxDQUFDO0lBQ2xEO0lBQ0EsT0FBT0MsTUFBTTtFQUNmLENBQUMsQ0FBQztFQUVGLElBQUlILGdCQUFnQixDQUFDUyxNQUFNLEtBQUtELGNBQWMsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JESCxPQUFPLENBQUNDLEtBQUssQ0FBQyxtREFBbUQsRUFBRVYsV0FBVyxFQUFFQyxTQUFTLENBQUM7SUFDMUYsT0FBTyxFQUFFO0VBQ1g7RUFFQSxPQUFPRSxnQkFBZ0IsQ0FDcEJYLEdBQUcsQ0FBQyxDQUFDcUIsS0FBSyxFQUFFQyxLQUFLLEtBQUs7SUFDckIsTUFBTUMsR0FBRyxHQUFHSixjQUFjLENBQUNHLEtBQUssQ0FBQztJQUNqQyxPQUFPRCxLQUFLLEdBQUcsQ0FBQ0UsR0FBRyxHQUFHRixLQUFLLElBQUlYLFFBQVE7RUFDekMsQ0FBQyxDQUFDLENBQ0RjLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDZDs7Ozs7Ozs7VUM5Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChwMSwgcDIsIHQpIHtcbiAgcmV0dXJuIEdTQVAudXRpbHMuaW50ZXJwb2xhdGUocDEsIHAyLCB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIG51bWJlcikge1xuICByZXR1cm4gR1NBUC51dGlscy5jbGFtcChtaW4sIG1heCwgbnVtYmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLnJhbmRvbShtaW4sIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZVRvTWFwLCBpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4KSB7XG4gIHJldHVybiBHU0FQLnV0aWxzLm1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlVG9NYXApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZVBvaW50cyhzdGFydFBvaW50cywgZW5kUG9pbnRzLCBwcm9ncmVzcykge1xuICBjb25zdCBzdGFydFBvaW50c0FycmF5ID0gc3RhcnRQb2ludHMuc3BsaXQoXCIgXCIpLm1hcChwb2ludCA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdChwb2ludClcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgc3RhcnQgcG9pbnQgdmFsdWU6XCIsIHBvaW50KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkXG4gIH0pXG5cbiAgY29uc3QgZW5kUG9pbnRzQXJyYXkgPSBlbmRQb2ludHMuc3BsaXQoXCIgXCIpLm1hcChwb2ludCA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdChwb2ludClcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgZW5kIHBvaW50IHZhbHVlOlwiLCBwb2ludClcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFxuICB9KVxuXG4gIGlmIChzdGFydFBvaW50c0FycmF5Lmxlbmd0aCAhPT0gZW5kUG9pbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlN0YXJ0IGFuZCBlbmQgcG9pbnRzIGRvIG5vdCBoYXZlIHRoZSBzYW1lIGxlbmd0aDpcIiwgc3RhcnRQb2ludHMsIGVuZFBvaW50cylcbiAgICByZXR1cm4gXCJcIlxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0UG9pbnRzQXJyYXlcbiAgICAubWFwKChzdGFydCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IGVuZFBvaW50c0FycmF5W2luZGV4XVxuICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHByb2dyZXNzXG4gICAgfSlcbiAgICAuam9pbihcIiBcIilcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFkYjY4YzFhNTRkYzcxODBjOGVjXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJsZXJwIiwicDEiLCJwMiIsInQiLCJ1dGlscyIsImludGVycG9sYXRlIiwiY2xhbXAiLCJtaW4iLCJtYXgiLCJudW1iZXIiLCJyYW5kb20iLCJtYXAiLCJ2YWx1ZVRvTWFwIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsIm1hcFJhbmdlIiwiaW50ZXJwb2xhdGVQb2ludHMiLCJzdGFydFBvaW50cyIsImVuZFBvaW50cyIsInByb2dyZXNzIiwic3RhcnRQb2ludHNBcnJheSIsInNwbGl0IiwicG9pbnQiLCJwYXJzZWQiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJjb25zb2xlIiwiZXJyb3IiLCJlbmRQb2ludHNBcnJheSIsImxlbmd0aCIsInN0YXJ0IiwiaW5kZXgiLCJlbmQiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==