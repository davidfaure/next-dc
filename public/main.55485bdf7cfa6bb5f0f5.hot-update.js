"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    canvas
  }) {
    super({
      classes: {},
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text"
      }
    });
    this.canvas = canvas;
    this.counter = 0;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    window.TEXTURES = {};
    this.elements.spans = (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, element => {
      (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        append: false,
        element,
        expression: "<br>"
      });
    });
    this.createLoader();
  }
  createLoader() {
    this.animateIn = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline();
    this.animateIn.set(this.elements.title, {
      autoAlpha: 1
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, (line, index) => {
      const letters = document.querySelectorAll("span");
      const onStart = _ => {
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(letters, {
          autoAlpha: 0,
          display: "inline-block",
          y: "100%"
        }, {
          autoAlpha: 1,
          delay: 0.2,
          display: "inline-block",
          duration: 1,
          ease: "back.inOut",
          stagger: 0.015,
          y: "0%"
        });
      };
      this.animateIn.fromTo(line, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        delay: 0.2 * index,
        duration: 1.5,
        onStart,
        ease: "expo.inOut",
        y: "0%"
      }, "start");
    });
    this.animateIn.call(_ => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(window.ASSETS, image => {
        const texture = new ogl__WEBPACK_IMPORTED_MODULE_6__.Texture(this.canvas.gl, {
          generateMipmaps: false
        });
        const media = new Image();
        media.crossOrigin = "anonymous";
        media.src = image;
        media.onload = _ => {
          texture.image = media;
          this.onAssetLoaded();
        };
        window.TEXTURES[image] = texture;
      });
    });
  }
  onAssetLoaded() {
    this.counter += 1;
    const percent = this.counter / window.ASSETS.length;
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
    if (percent === 1) {
      this.onComplete();
    }
  }
  onComplete() {
    return new Promise(() => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
        delay: 1
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.titleSpans, (line, index) => {
        const letters = line.querySelectorAll("span");
        const onStart = _ => {
          gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(letters, {
            autoAlpha: 0,
            delay: 0.2,
            display: "inline-block",
            duration: 1,
            ease: "back.inOut",
            stagger: 0.015,
            y: "-100%"
          });
        };
        this.animateOut.to(line, {
          autoAlpha: 0,
          delay: 0.2 * index,
          duration: 1.5,
          onStart,
          ease: "expo.inOut",
          y: "-100%"
        }, "start");
      });
      this.animateOut.to(this.elements.numberText, {
        autoAlpha: 0,
        duration: 1,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_4__.SMOOTH
      }, "start");
      this.animateOut.to(this.element, {
        autoAlpha: 0,
        duration: 1
      });
      this.animateOut.call(() => {
        this.emit("completed");
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
});

/***/ }),

/***/ "./app/utils/easings.js":
/*!******************************!*\
  !*** ./app/utils/easings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSS: () => (/* binding */ CSS),
/* harmony export */   DEFAULT: () => (/* binding */ DEFAULT),
/* harmony export */   SMOOTH: () => (/* binding */ SMOOTH),
/* harmony export */   SMOOTHER: () => (/* binding */ SMOOTHER)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_CustomEase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/CustomEase */ "./node_modules/gsap/CustomEase.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_CustomEase__WEBPACK_IMPORTED_MODULE_1__["default"]);
const SMOOTH = gsap_CustomEase__WEBPACK_IMPORTED_MODULE_1__["default"].create("bezier", "0.6, 0.01, -0.05, 0.9");
const SMOOTHER = gsap_CustomEase__WEBPACK_IMPORTED_MODULE_1__["default"].create("bezier", "0.4, 0.01, -0.05, 0.9");
const DEFAULT = gsap_CustomEase__WEBPACK_IMPORTED_MODULE_1__["default"].create("default", "0.77, 0, 0.175, 1");
const CSS = "cubic-bezier(0.77, 0, 0.175, 1)";

/***/ }),

/***/ "./node_modules/gsap/CustomEase.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/CustomEase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomEase: () => (/* binding */ CustomEase),
/* harmony export */   "default": () => (/* binding */ CustomEase)
/* harmony export */ });
/* harmony import */ var _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/paths.js */ "./node_modules/gsap/utils/paths.js");
/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */

var gsap,
  _coreInitted,
  _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
  _initCore = function _initCore() {
    gsap = _getGSAP();
    if (gsap) {
      gsap.registerEase("_CE", CustomEase.create);
      _coreInitted = 1;
    } else {
      console.warn("Please gsap.registerPlugin(CustomEase)");
    }
  },
  _bigNum = 1e20,
  _round = function _round(value) {
    return ~~(value * 1000 + (value < 0 ? -.5 : .5)) / 1000;
  },
  _bonusValidated = 1,
  //<name>CustomEase</name>
  _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
  _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g,
  _findMinimum = function _findMinimum(values) {
    var l = values.length,
      min = _bigNum,
      i;
    for (i = 1; i < l; i += 6) {
      +values[i] < min && (min = +values[i]);
    }
    return min;
  },
  //takes all the points and translates/scales them so that the x starts at 0 and ends at 1.
  _normalize = function _normalize(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }
    var tx = +values[0] * -1,
      ty = -originY,
      l = values.length,
      sx = 1 / (+values[l - 2] + tx),
      sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty),
      i;
    if (sy) {
      //typically y ends at 1 (so that the end values are reached)
      sy = 1 / sy;
    } else {
      //in case the ease returns to its beginning value, scale everything proportionally
      sy = -sx;
    }
    for (i = 0; i < l; i += 2) {
      values[i] = (+values[i] + tx) * sx;
      values[i + 1] = (+values[i + 1] + ty) * sy;
    }
  },
  //note that this function returns point objects like {x, y} rather than working with segments which are arrays with alternating x, y values as in the similar function in paths.js
  _bezierToPoints = function _bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
    var x12 = (x1 + x2) / 2,
      y12 = (y1 + y2) / 2,
      x23 = (x2 + x3) / 2,
      y23 = (y2 + y3) / 2,
      x34 = (x3 + x4) / 2,
      y34 = (y3 + y4) / 2,
      x123 = (x12 + x23) / 2,
      y123 = (y12 + y23) / 2,
      x234 = (x23 + x34) / 2,
      y234 = (y23 + y34) / 2,
      x1234 = (x123 + x234) / 2,
      y1234 = (y123 + y234) / 2,
      dx = x4 - x1,
      dy = y4 - y1,
      d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx),
      d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx),
      length;
    if (!points) {
      points = [{
        x: x1,
        y: y1
      }, {
        x: x4,
        y: y4
      }];
      index = 1;
    }
    points.splice(index || points.length - 1, 0, {
      x: x1234,
      y: y1234
    });
    if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
      length = points.length;
      _bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
      _bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
    }
    return points;
  };
var CustomEase = /*#__PURE__*/function () {
  function CustomEase(id, data, config) {
    _coreInitted || _initCore();
    this.id = id;
    _bonusValidated && this.setData(data, config);
  }
  var _proto = CustomEase.prototype;
  _proto.setData = function setData(data, config) {
    config = config || {};
    data = data || "0,0,1,1";
    var values = data.match(_numExp),
      closest = 1,
      points = [],
      lookup = [],
      precision = config.precision || 1,
      fast = precision <= 1,
      l,
      a1,
      a2,
      i,
      inc,
      j,
      point,
      prevPoint,
      p;
    this.data = data;
    if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
      values = (0,_utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.stringToRawPath)(data)[0];
    }
    l = values.length;
    if (l === 4) {
      values.unshift(0, 0);
      values.push(1, 1);
      l = 8;
    } else if ((l - 2) % 6) {
      throw "Invalid CustomEase";
    }
    if (+values[0] !== 0 || +values[l - 2] !== 1) {
      _normalize(values, config.height, config.originY);
    }
    this.segment = values;
    for (i = 2; i < l; i += 6) {
      a1 = {
        x: +values[i - 2],
        y: +values[i - 1]
      };
      a2 = {
        x: +values[i + 4],
        y: +values[i + 5]
      };
      points.push(a1, a2);
      _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 200000), points, points.length - 1);
    }
    l = points.length;
    for (i = 0; i < l; i++) {
      point = points[i];
      prevPoint = points[i - 1] || point;
      if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
        //if a point goes BACKWARD in time or is a duplicate, just drop it. Also it shouldn't go past 1 on the x axis, as could happen in a string like "M0,0 C0,0 0.12,0.68 0.18,0.788 0.195,0.845 0.308,1 0.32,1 0.403,1.005 0.398,1 0.5,1 0.602,1 0.816,1.005 0.9,1 0.91,1 0.948,0.69 0.962,0.615 1.003,0.376 1,0 1,0".
        prevPoint.cx = point.x - prevPoint.x; //change in x between this point and the next point (performance optimization)

        prevPoint.cy = point.y - prevPoint.y;
        prevPoint.n = point;
        prevPoint.nx = point.x; //next point's x value (performance optimization, making lookups faster in getRatio()). Remember, the lookup will always land on a spot where it's either this point or the very next one (never beyond that)

        if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
          //if there's a sudden change in direction, prioritize accuracy over speed. Like a bounce ease - you don't want to risk the sampling chunks landing on each side of the bounce anchor and having it clipped off.
          fast = 0;
        }
        if (prevPoint.cx < closest) {
          if (!prevPoint.cx) {
            prevPoint.cx = 0.001; //avoids math problems in getRatio() (dividing by zero)

            if (i === l - 1) {
              //in case the final segment goes vertical RIGHT at the end, make sure we end at the end.
              prevPoint.x -= 0.001;
              closest = Math.min(closest, 0.001);
              fast = 0;
            }
          } else {
            closest = prevPoint.cx;
          }
        }
      } else {
        points.splice(i--, 1);
        l--;
      }
    }
    l = 1 / closest + 1 | 0;
    inc = 1 / l;
    j = 0;
    point = points[0];
    if (fast) {
      for (i = 0; i < l; i++) {
        //for fastest lookups, we just sample along the path at equal x (time) distance. Uses more memory and is slightly less accurate for anchors that don't land on the sampling points, but for the vast majority of eases it's excellent (and fast).
        p = i * inc;
        if (point.nx < p) {
          point = points[++j];
        }
        a1 = point.y + (p - point.x) / point.cx * point.cy;
        lookup[i] = {
          x: p,
          cx: inc,
          y: a1,
          cy: 0,
          nx: 9
        };
        if (i) {
          lookup[i - 1].cy = a1 - lookup[i - 1].y;
        }
      }
      lookup[l - 1].cy = points[points.length - 1].y - a1;
    } else {
      //this option is more accurate, ensuring that EVERY anchor is hit perfectly. Clipping across a bounce, for example, would never happen.
      for (i = 0; i < l; i++) {
        //build a lookup table based on the smallest distance so that we can instantly find the appropriate point (well, it'll either be that point or the very next one). We'll look up based on the linear progress. So it's it's 0.5 and the lookup table has 100 elements, it'd be like lookup[Math.floor(0.5 * 100)]
        if (point.nx < i * inc) {
          point = points[++j];
        }
        lookup[i] = point;
      }
      if (j < points.length - 1) {
        lookup[i - 1] = points[points.length - 2];
      }
    } //this._calcEnd = (points[points.length-1].y !== 1 || points[0].y !== 0); //ensures that we don't run into floating point errors. As long as we're starting at 0 and ending at 1, tell GSAP to skip the final calculation and use 0/1 as the factor.

    this.ease = function (p) {
      var point = lookup[p * l | 0] || lookup[l - 1];
      if (point.nx < p) {
        point = point.n;
      }
      return point.y + (p - point.x) / point.cx * point.cy;
    };
    this.ease.custom = this;
    this.id && gsap && gsap.registerEase(this.id, this.ease);
    return this;
  };
  _proto.getSVGData = function getSVGData(config) {
    return CustomEase.getSVGData(this, config);
  };
  CustomEase.create = function create(id, data, config) {
    return new CustomEase(id, data, config).ease;
  };
  CustomEase.register = function register(core) {
    gsap = core;
    _initCore();
  };
  CustomEase.get = function get(id) {
    return gsap.parseEase(id);
  };
  CustomEase.getSVGData = function getSVGData(ease, config) {
    config = config || {};
    var width = config.width || 100,
      height = config.height || 100,
      x = config.x || 0,
      y = (config.y || 0) + height,
      e = gsap.utils.toArray(config.path)[0],
      a,
      slope,
      i,
      inc,
      tx,
      ty,
      precision,
      threshold,
      prevX,
      prevY;
    if (config.invert) {
      height = -height;
      y = 0;
    }
    if (typeof ease === "string") {
      ease = gsap.parseEase(ease);
    }
    if (ease.custom) {
      ease = ease.custom;
    }
    if (ease instanceof CustomEase) {
      a = (0,_utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.rawPathToString)((0,_utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath)([ease.segment], width, 0, 0, -height, x, y));
    } else {
      a = [x, y];
      precision = Math.max(5, (config.precision || 1) * 200);
      inc = 1 / precision;
      precision += 2;
      threshold = 5 / precision;
      prevX = _round(x + inc * width);
      prevY = _round(y + ease(inc) * -height);
      slope = (prevY - y) / (prevX - x);
      for (i = 2; i < precision; i++) {
        tx = _round(x + i * inc * width);
        ty = _round(y + ease(i * inc) * -height);
        if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
          //only add points when the slope changes beyond the threshold
          a.push(prevX, prevY);
          slope = (ty - prevY) / (tx - prevX);
        }
        prevX = tx;
        prevY = ty;
      }
      a = "M" + a.join(",");
    }
    e && e.setAttribute("d", a);
    return a;
  };
  return CustomEase;
}();
_getGSAP() && gsap.registerPlugin(CustomEase);
CustomEase.version = "3.12.2";


/***/ }),

/***/ "./node_modules/gsap/utils/paths.js":
/*!******************************************!*\
  !*** ./node_modules/gsap/utils/paths.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bezierToPoints: () => (/* binding */ bezierToPoints),
/* harmony export */   cacheRawPathMeasurements: () => (/* binding */ cacheRawPathMeasurements),
/* harmony export */   convertToPath: () => (/* binding */ convertToPath),
/* harmony export */   copyRawPath: () => (/* binding */ copyRawPath),
/* harmony export */   flatPointsToSegment: () => (/* binding */ flatPointsToSegment),
/* harmony export */   getClosestData: () => (/* binding */ getClosestData),
/* harmony export */   getPositionOnPath: () => (/* binding */ getPositionOnPath),
/* harmony export */   getRawPath: () => (/* binding */ getRawPath),
/* harmony export */   getRotationAtProgress: () => (/* binding */ getRotationAtProgress),
/* harmony export */   pointsToSegment: () => (/* binding */ pointsToSegment),
/* harmony export */   rawPathToString: () => (/* binding */ rawPathToString),
/* harmony export */   reverseSegment: () => (/* binding */ reverseSegment),
/* harmony export */   simplifyPoints: () => (/* binding */ simplifyPoints),
/* harmony export */   sliceRawPath: () => (/* binding */ sliceRawPath),
/* harmony export */   stringToRawPath: () => (/* binding */ stringToRawPath),
/* harmony export */   subdivideSegment: () => (/* binding */ subdivideSegment),
/* harmony export */   subdivideSegmentNear: () => (/* binding */ subdivideSegmentNear),
/* harmony export */   transformRawPath: () => (/* binding */ transformRawPath)
/* harmony export */ });
/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
  _DEG2RAD = Math.PI / 180,
  _RAD2DEG = 180 / Math.PI,
  _sin = Math.sin,
  _cos = Math.cos,
  _abs = Math.abs,
  _sqrt = Math.sqrt,
  _atan2 = Math.atan2,
  _largeNum = 1e8,
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
  _temp = {},
  _temp2 = {},
  _roundingNum = 1e5,
  _wrapProgress = function _wrapProgress(progress) {
    return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
  },
  //if progress lands on 1, the % will make it 0 which is why we || 1, but not if it's negative because it makes more sense for motion to end at 0 in that case.
  _round = function _round(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  },
  _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 1e10) / 1e10 || 0;
  },
  _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
    var segment = rawPath[segIndex],
      shift = t === 1 ? 6 : subdivideSegment(segment, i, t);
    if (shift && shift + i + 2 < segment.length) {
      rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
      segment.splice(0, i + shift);
      return 1;
    }
  },
  _getSampleIndex = function _getSampleIndex(samples, length, progress) {
    // slightly slower way than doing this (when there's no lookup): segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
    var l = samples.length,
      i = ~~(progress * l);
    if (samples[i] > length) {
      while (--i && samples[i] > length) {}
      i < 0 && (i = 0);
    } else {
      while (samples[++i] < length && i < l) {}
    }
    return i < l ? i : l - 1;
  },
  _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
    var i = rawPath.length;
    skipOuter || rawPath.reverse();
    while (i--) {
      rawPath[i].reversed || reverseSegment(rawPath[i]);
    }
  },
  _copyMetaData = function _copyMetaData(source, copy) {
    copy.totalLength = source.totalLength;
    if (source.samples) {
      //segment
      copy.samples = source.samples.slice(0);
      copy.lookup = source.lookup.slice(0);
      copy.minLength = source.minLength;
      copy.resolution = source.resolution;
    } else if (source.totalPoints) {
      //rawPath
      copy.totalPoints = source.totalPoints;
    }
    return copy;
  },
  //pushes a new segment into a rawPath, but if its starting values match the ending values of the last segment, it'll merge it into that same segment (to reduce the number of segments)
  _appendOrMerge = function _appendOrMerge(rawPath, segment) {
    var index = rawPath.length,
      prevSeg = rawPath[index - 1] || [],
      l = prevSeg.length;
    if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
      segment = prevSeg.concat(segment.slice(2));
      index--;
    }
    rawPath[index] = segment;
  },
  _bestDistance;
/* TERMINOLOGY
 - RawPath - an array of arrays, one for each Segment. A single RawPath could have multiple "M" commands, defining Segments (paths aren't always connected).
 - Segment - an array containing a sequence of Cubic Bezier coordinates in alternating x, y, x, y format. Starting anchor, then control point 1, control point 2, and ending anchor, then the next control point 1, control point 2, anchor, etc. Uses less memory than an array with a bunch of {x, y} points.
 - Bezier - a single cubic Bezier with a starting anchor, two control points, and an ending anchor.
 - the variable "t" is typically the position along an individual Bezier path (time) and it's NOT linear, meaning it could accelerate/decelerate based on the control points whereas the "p" or "progress" value is linearly mapped to the whole path, so it shouldn't really accelerate/decelerate based on control points. So a progress of 0.2 would be almost exactly 20% along the path. "t" is ONLY in an individual Bezier piece.
 */
//accepts basic selector text, a path instance, a RawPath instance, or a Segment and returns a RawPath (makes it easy to homogenize things). If an element or selector text is passed in, it'll also cache the value so that if it's queried again, it'll just take the path data from there instead of parsing it all over again (as long as the path data itself hasn't changed - it'll check).

function getRawPath(value) {
  value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
  var e = value.getAttribute ? value : 0,
    rawPath;
  if (e && (value = value.getAttribute("d"))) {
    //implements caching
    if (!e._gsPath) {
      e._gsPath = {};
    }
    rawPath = e._gsPath[value];
    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
  }
  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
} //copies a RawPath WITHOUT the length meta data (for speed)

function copyRawPath(rawPath) {
  var a = [],
    i = 0;
  for (; i < rawPath.length; i++) {
    a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
  }
  return _copyMetaData(rawPath, a);
}
function reverseSegment(segment) {
  var i = 0,
    y;
  segment.reverse(); //this will invert the order y, x, y, x so we must flip it back.

  for (; i < segment.length; i += 2) {
    y = segment[i];
    segment[i] = segment[i + 1];
    segment[i + 1] = y;
  }
  segment.reversed = !segment.reversed;
}
var _createPath = function _createPath(e, ignore) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      attr = [].slice.call(e.attributes),
      i = attr.length,
      name;
    ignore = "," + ignore + ",";
    while (--i > -1) {
      name = attr[i].nodeName.toLowerCase(); //in Microsoft Edge, if you don't set the attribute with a lowercase name, it doesn't render correctly! Super weird.

      if (ignore.indexOf("," + name + ",") < 0) {
        path.setAttributeNS(null, name, attr[i].nodeValue);
      }
    }
    return path;
  },
  _typeAttrs = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  },
  _attrToObj = function _attrToObj(e, attrs) {
    var props = attrs ? attrs.split(",") : [],
      obj = {},
      i = props.length;
    while (--i > -1) {
      obj[props[i]] = +e.getAttribute(props[i]) || 0;
    }
    return obj;
  }; //converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.

function convertToPath(element, swap) {
  var type = element.tagName.toLowerCase(),
    circ = 0.552284749831,
    data,
    x,
    y,
    r,
    ry,
    path,
    rcirc,
    rycirc,
    points,
    w,
    h,
    x2,
    x3,
    x4,
    x5,
    x6,
    y2,
    y3,
    y4,
    y5,
    y6,
    attr;
  if (type === "path" || !element.getBBox) {
    return element;
  }
  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
  attr = _attrToObj(element, _typeAttrs[type]);
  if (type === "rect") {
    r = attr.rx;
    ry = attr.ry || r;
    x = attr.x;
    y = attr.y;
    w = attr.width - r * 2;
    h = attr.height - ry * 2;
    if (r || ry) {
      //if there are rounded corners, render cubic beziers
      x2 = x + r * (1 - circ);
      x3 = x + r;
      x4 = x3 + w;
      x5 = x4 + r * circ;
      x6 = x4 + r;
      y2 = y + ry * (1 - circ);
      y3 = y + ry;
      y4 = y3 + h;
      y5 = y4 + ry * circ;
      y6 = y4 + ry;
      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
    } else {
      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
    }
  } else if (type === "circle" || type === "ellipse") {
    if (type === "circle") {
      r = ry = attr.r;
      rycirc = r * circ;
    } else {
      r = attr.rx;
      ry = attr.ry;
      rycirc = ry * circ;
    }
    x = attr.cx;
    y = attr.cy;
    rcirc = r * circ;
    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
  } else if (type === "line") {
    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2; //previously, we just converted to "Mx,y Lx,y" but Safari has bugs that cause that not to render properly when using a stroke-dasharray that's not fully visible! Using a cubic bezier fixes that issue.
  } else if (type === "polyline" || type === "polygon") {
    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
    x = points.shift();
    y = points.shift();
    data = "M" + x + "," + y + " L" + points.join(",");
    if (type === "polygon") {
      data += "," + x + "," + y + "z";
    }
  }
  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
  if (swap && element.parentNode) {
    element.parentNode.insertBefore(path, element);
    element.parentNode.removeChild(element);
  }
  return path;
} //returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)

function getRotationAtProgress(rawPath, progress) {
  var d = getProgressData(rawPath, progress >= 1 ? 1 - 1e-9 : progress ? progress : 1e-9);
  return getRotationAtBezierT(d.segment, d.i, d.t);
}
function getRotationAtBezierT(segment, i, t) {
  var a = segment[i],
    b = segment[i + 2],
    c = segment[i + 4],
    x;
  a += (b - a) * t;
  b += (c - b) * t;
  a += (b - a) * t;
  x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
  a = segment[i + 1];
  b = segment[i + 3];
  c = segment[i + 5];
  a += (b - a) * t;
  b += (c - b) * t;
  a += (b - a) * t;
  return _round(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
}
function sliceRawPath(rawPath, start, end) {
  end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0; // we must round to avoid issues like 4.15 / 8 = 0.8300000000000001 instead of 0.83 or 2.8 / 5 = 0.5599999999999999 instead of 0.56 and if someone is doing a loop like start: 2.8 / 0.5, end: 2.8 / 0.5 + 1.

  start = _roundPrecise(start) || 0;
  var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)),
    path = copyRawPath(rawPath);
  if (start > end) {
    start = 1 - start;
    end = 1 - end;
    _reverseRawPath(path);
    path.totalLength = 0;
  }
  if (start < 0 || end < 0) {
    var offset = Math.abs(~~Math.min(start, end)) + 1;
    start += offset;
    end += offset;
  }
  path.totalLength || cacheRawPathMeasurements(path);
  var wrap = end > 1,
    s = getProgressData(path, start, _temp, true),
    e = getProgressData(path, end, _temp2),
    eSeg = e.segment,
    sSeg = s.segment,
    eSegIndex = e.segIndex,
    sSegIndex = s.segIndex,
    ei = e.i,
    si = s.i,
    sameSegment = sSegIndex === eSegIndex,
    sameBezier = ei === si && sameSegment,
    wrapsBehind,
    sShift,
    eShift,
    i,
    copy,
    totalSegments,
    l,
    j;
  if (wrap || loops) {
    wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;
    if (_splitSegment(path, sSegIndex, si, s.t)) {
      sSegIndex++;
      if (!wrapsBehind) {
        eSegIndex++;
        if (sameBezier) {
          e.t = (e.t - s.t) / (1 - s.t);
          ei = 0;
        } else if (sameSegment) {
          ei -= si;
        }
      }
    }
    if (Math.abs(1 - (end - start)) < 1e-5) {
      eSegIndex = sSegIndex - 1;
    } else if (!e.t && eSegIndex) {
      eSegIndex--;
    } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
      sSegIndex++;
    }
    if (s.t === 1) {
      sSegIndex = (sSegIndex + 1) % path.length;
    }
    copy = [];
    totalSegments = path.length;
    l = 1 + totalSegments * loops;
    j = sSegIndex;
    l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;
    for (i = 0; i < l; i++) {
      _appendOrMerge(copy, path[j++ % totalSegments]);
    }
    path = copy;
  } else {
    eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);
    if (start !== end) {
      sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
      sameSegment && (eShift += sShift);
      eSeg.splice(ei + eShift + 2);
      (sShift || si) && sSeg.splice(0, si + sShift);
      i = path.length;
      while (i--) {
        //chop off any extra segments
        (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
      }
    } else {
      eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0); //record the value before we chop because it'll be impossible to determine the angle after its length is 0!

      ei += eShift;
      s = eSeg[ei];
      e = eSeg[ei + 1];
      eSeg.length = eSeg.totalLength = 0;
      eSeg.totalPoints = path.totalPoints = 8;
      eSeg.push(s, e, s, e, s, e, s, e);
    }
  }
  path.totalLength = 0;
  return path;
} //measures a Segment according to its resolution (so if segment.resolution is 6, for example, it'll take 6 samples equally across each Bezier) and create/populate a "samples" Array that has the length up to each of those sample points (always increasing from the start) as well as a "lookup" array that's broken up according to the smallest distance between 2 samples. This gives us a very fast way of looking up a progress position rather than looping through all the points/Beziers. You can optionally have it only measure a subset, starting at startIndex and going for a specific number of beziers (remember, there are 3 x/y pairs each, for a total of 6 elements for each Bezier). It will also populate a "totalLength" property, but that's not generally super accurate because by default it'll only take 6 samples per Bezier. But for performance reasons, it's perfectly adequate for measuring progress values along the path. If you need a more accurate totalLength, either increase the resolution or use the more advanced bezierToPoints() method which keeps adding points until they don't deviate by more than a certain precision value.

function measureSegment(segment, startIndex, bezierQty) {
  startIndex = startIndex || 0;
  if (!segment.samples) {
    segment.samples = [];
    segment.lookup = [];
  }
  var resolution = ~~segment.resolution || 12,
    inc = 1 / resolution,
    endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length,
    x1 = segment[startIndex],
    y1 = segment[startIndex + 1],
    samplesIndex = startIndex ? startIndex / 6 * resolution : 0,
    samples = segment.samples,
    lookup = segment.lookup,
    min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
    prevLength = samples[samplesIndex + bezierQty * resolution - 1],
    length = startIndex ? samples[samplesIndex - 1] : 0,
    i,
    j,
    x4,
    x3,
    x2,
    xd,
    xd1,
    y4,
    y3,
    y2,
    yd,
    yd1,
    inv,
    t,
    lengthIndex,
    l,
    segLength;
  samples.length = lookup.length = 0;
  for (j = startIndex + 2; j < endIndex; j += 6) {
    x4 = segment[j + 4] - x1;
    x3 = segment[j + 2] - x1;
    x2 = segment[j] - x1;
    y4 = segment[j + 5] - y1;
    y3 = segment[j + 3] - y1;
    y2 = segment[j + 1] - y1;
    xd = xd1 = yd = yd1 = 0;
    if (_abs(x4) < .01 && _abs(y4) < .01 && _abs(x2) + _abs(y2) < .01) {
      //dump points that are sufficiently close (basically right on top of each other, making a bezier super tiny or 0 length)
      if (segment.length > 8) {
        segment.splice(j, 6);
        j -= 6;
        endIndex -= 6;
      }
    } else {
      for (i = 1; i <= resolution; i++) {
        t = inc * i;
        inv = 1 - t;
        xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
        yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
        l = _sqrt(yd * yd + xd * xd);
        if (l < min) {
          min = l;
        }
        length += l;
        samples[samplesIndex++] = length;
      }
    }
    x1 += x4;
    y1 += y4;
  }
  if (prevLength) {
    prevLength -= length;
    for (; samplesIndex < samples.length; samplesIndex++) {
      samples[samplesIndex] += prevLength;
    }
  }
  if (samples.length && min) {
    segment.totalLength = segLength = samples[samples.length - 1] || 0;
    segment.minLength = min;
    if (segLength / min < 9999) {
      // if the lookup would require too many values (memory problem), we skip this and instead we use a loop to lookup values directly in the samples Array
      l = lengthIndex = 0;
      for (i = 0; i < segLength; i += min) {
        lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
      }
    }
  } else {
    segment.totalLength = samples[0] = 0;
  }
  return startIndex ? length - samples[startIndex / 2 - 1] : length;
}
function cacheRawPathMeasurements(rawPath, resolution) {
  var pathLength, points, i;
  for (i = pathLength = points = 0; i < rawPath.length; i++) {
    rawPath[i].resolution = ~~resolution || 12; //steps per Bezier curve (anchor, 2 control points, to anchor)

    points += rawPath[i].length;
    pathLength += measureSegment(rawPath[i]);
  }
  rawPath.totalPoints = points;
  rawPath.totalLength = pathLength;
  return rawPath;
} //divide segment[i] at position t (value between 0 and 1, progress along that particular cubic bezier segment that starts at segment[i]). Returns how many elements were spliced into the segment array (either 0 or 6)

function subdivideSegment(segment, i, t) {
  if (t <= 0 || t >= 1) {
    return 0;
  }
  var ax = segment[i],
    ay = segment[i + 1],
    cp1x = segment[i + 2],
    cp1y = segment[i + 3],
    cp2x = segment[i + 4],
    cp2y = segment[i + 5],
    bx = segment[i + 6],
    by = segment[i + 7],
    x1a = ax + (cp1x - ax) * t,
    x2 = cp1x + (cp2x - cp1x) * t,
    y1a = ay + (cp1y - ay) * t,
    y2 = cp1y + (cp2y - cp1y) * t,
    x1 = x1a + (x2 - x1a) * t,
    y1 = y1a + (y2 - y1a) * t,
    x2a = cp2x + (bx - cp2x) * t,
    y2a = cp2y + (by - cp2y) * t;
  x2 += (x2a - x2) * t;
  y2 += (y2a - y2) * t;
  segment.splice(i + 2, 4, _round(x1a),
  //first control point
  _round(y1a), _round(x1),
  //second control point
  _round(y1), _round(x1 + (x2 - x1) * t),
  //new fabricated anchor on line
  _round(y1 + (y2 - y1) * t), _round(x2),
  //third control point
  _round(y2), _round(x2a),
  //fourth control point
  _round(y2a));
  segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
  return 6;
} // returns an object {path, segment, segIndex, i, t}

function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
  decoratee = decoratee || {};
  rawPath.totalLength || cacheRawPathMeasurements(rawPath);
  if (progress < 0 || progress > 1) {
    progress = _wrapProgress(progress);
  }
  var segIndex = 0,
    segment = rawPath[0],
    samples,
    resolution,
    length,
    min,
    max,
    i,
    t;
  if (!progress) {
    t = i = segIndex = 0;
    segment = rawPath[0];
  } else if (progress === 1) {
    t = 1;
    segIndex = rawPath.length - 1;
    segment = rawPath[segIndex];
    i = segment.length - 8;
  } else {
    if (rawPath.length > 1) {
      //speed optimization: most of the time, there's only one segment so skip the recursion.
      length = rawPath.totalLength * progress;
      max = i = 0;
      while ((max += rawPath[i++].totalLength) < length) {
        segIndex = i;
      }
      segment = rawPath[segIndex];
      min = max - segment.totalLength;
      progress = (length - min) / (max - min) || 0;
    }
    samples = segment.samples;
    resolution = segment.resolution; //how many samples per cubic bezier chunk

    length = segment.totalLength * progress;
    i = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
    min = i ? samples[i - 1] : 0;
    max = samples[i];
    if (max < length) {
      min = max;
      max = samples[++i];
    }
    t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
    i = ~~(i / resolution) * 6;
    if (pushToNextIfAtEnd && t === 1) {
      if (i + 6 < segment.length) {
        i += 6;
        t = 0;
      } else if (segIndex + 1 < rawPath.length) {
        i = t = 0;
        segment = rawPath[++segIndex];
      }
    }
  }
  decoratee.t = t;
  decoratee.i = i;
  decoratee.path = rawPath;
  decoratee.segment = segment;
  decoratee.segIndex = segIndex;
  return decoratee;
}
function getPositionOnPath(rawPath, progress, includeAngle, point) {
  var segment = rawPath[0],
    result = point || {},
    samples,
    resolution,
    length,
    min,
    max,
    i,
    t,
    a,
    inv;
  if (progress < 0 || progress > 1) {
    progress = _wrapProgress(progress);
  }
  segment.lookup || cacheRawPathMeasurements(rawPath);
  if (rawPath.length > 1) {
    //speed optimization: most of the time, there's only one segment so skip the recursion.
    length = rawPath.totalLength * progress;
    max = i = 0;
    while ((max += rawPath[i++].totalLength) < length) {
      segment = rawPath[i];
    }
    min = max - segment.totalLength;
    progress = (length - min) / (max - min) || 0;
  }
  samples = segment.samples;
  resolution = segment.resolution;
  length = segment.totalLength * progress;
  i = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
  min = i ? samples[i - 1] : 0;
  max = samples[i];
  if (max < length) {
    min = max;
    max = samples[++i];
  }
  t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
  inv = 1 - t;
  i = ~~(i / resolution) * 6;
  a = segment[i];
  result.x = _round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
  result.y = _round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);
  if (includeAngle) {
    result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
  }
  return result;
} //applies a matrix transform to RawPath (or a segment in a RawPath) and returns whatever was passed in (it transforms the values in the array(s), not a copy).

function transformRawPath(rawPath, a, b, c, d, tx, ty) {
  var j = rawPath.length,
    segment,
    l,
    i,
    x,
    y;
  while (--j > -1) {
    segment = rawPath[j];
    l = segment.length;
    for (i = 0; i < l; i += 2) {
      x = segment[i];
      y = segment[i + 1];
      segment[i] = x * a + y * c + tx;
      segment[i + 1] = x * b + y * d + ty;
    }
  }
  rawPath._dirty = 1;
  return rawPath;
} // translates SVG arc data into a segment (cubic beziers). Angle is in degrees.

function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
  if (lastX === x && lastY === y) {
    return;
  }
  rx = _abs(rx);
  ry = _abs(ry);
  var angleRad = angle % 360 * _DEG2RAD,
    cosAngle = _cos(angleRad),
    sinAngle = _sin(angleRad),
    PI = Math.PI,
    TWOPI = PI * 2,
    dx2 = (lastX - x) / 2,
    dy2 = (lastY - y) / 2,
    x1 = cosAngle * dx2 + sinAngle * dy2,
    y1 = -sinAngle * dx2 + cosAngle * dy2,
    x1_sq = x1 * x1,
    y1_sq = y1 * y1,
    radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
  if (radiiCheck > 1) {
    rx = _sqrt(radiiCheck) * rx;
    ry = _sqrt(radiiCheck) * ry;
  }
  var rx_sq = rx * rx,
    ry_sq = ry * ry,
    sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
  if (sq < 0) {
    sq = 0;
  }
  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
    cx1 = coef * (rx * y1 / ry),
    cy1 = coef * -(ry * x1 / rx),
    sx2 = (lastX + x) / 2,
    sy2 = (lastY + y) / 2,
    cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
    cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
    ux = (x1 - cx1) / rx,
    uy = (y1 - cy1) / ry,
    vx = (-x1 - cx1) / rx,
    vy = (-y1 - cy1) / ry,
    temp = ux * ux + uy * uy,
    angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
    angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));
  isNaN(angleExtent) && (angleExtent = PI); //rare edge case. Math.cos(-1) is NaN.

  if (!sweepFlag && angleExtent > 0) {
    angleExtent -= TWOPI;
  } else if (sweepFlag && angleExtent < 0) {
    angleExtent += TWOPI;
  }
  angleStart %= TWOPI;
  angleExtent %= TWOPI;
  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
    rawPath = [],
    angleIncrement = angleExtent / segments,
    controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
    ma = cosAngle * rx,
    mb = sinAngle * rx,
    mc = sinAngle * -ry,
    md = cosAngle * ry,
    i;
  for (i = 0; i < segments; i++) {
    angle = angleStart + i * angleIncrement;
    x1 = _cos(angle);
    y1 = _sin(angle);
    ux = _cos(angle += angleIncrement);
    uy = _sin(angle);
    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
  } //now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).

  for (i = 0; i < rawPath.length; i += 2) {
    x1 = rawPath[i];
    y1 = rawPath[i + 1];
    rawPath[i] = x1 * ma + y1 * mc + cx;
    rawPath[i + 1] = x1 * mb + y1 * md + cy;
  }
  rawPath[i - 2] = x; //always set the end to exactly where it's supposed to be

  rawPath[i - 1] = y;
  return rawPath;
} //Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.

function stringToRawPath(d) {
  var a = (d + "").replace(_scientific, function (m) {
      var n = +m;
      return n < 0.0001 && n > -0.0001 ? 0 : n;
    }).match(_svgPathExp) || [],
    //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
    path = [],
    relativeX = 0,
    relativeY = 0,
    twoThirds = 2 / 3,
    elements = a.length,
    points = 0,
    errorMessage = "ERROR: malformed path: " + d,
    i,
    j,
    x,
    y,
    command,
    isRelative,
    segment,
    startX,
    startY,
    difX,
    difY,
    beziers,
    prevCommand,
    flag1,
    flag2,
    line = function line(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
    console.log(errorMessage);
    return path;
  }
  for (i = 0; i < elements; i++) {
    prevCommand = command;
    if (isNaN(a[i])) {
      command = a[i].toUpperCase();
      isRelative = command !== a[i]; //lower case means relative
    } else {
      //commands like "C" can be strung together without any new command characters between.
      i--;
    }
    x = +a[i + 1];
    y = +a[i + 2];
    if (isRelative) {
      x += relativeX;
      y += relativeY;
    }
    if (!i) {
      startX = x;
      startY = y;
    } // "M" (move)

    if (command === "M") {
      if (segment) {
        if (segment.length < 8) {
          //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
          path.length -= 1;
        } else {
          points += segment.length;
        }
      }
      relativeX = startX = x;
      relativeY = startY = y;
      segment = [x, y];
      path.push(segment);
      i += 2;
      command = "L"; //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").
      // "C" (cubic bezier)
    } else if (command === "C") {
      if (!segment) {
        segment = [0, 0];
      }
      if (!isRelative) {
        relativeX = relativeY = 0;
      } //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.

      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
      i += 6; // "S" (continuation of cubic bezier)
    } else if (command === "S") {
      difX = relativeX;
      difY = relativeY;
      if (prevCommand === "C" || prevCommand === "S") {
        difX += relativeX - segment[segment.length - 4];
        difY += relativeY - segment[segment.length - 3];
      }
      if (!isRelative) {
        relativeX = relativeY = 0;
      }
      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
      i += 4; // "Q" (quadratic bezier)
    } else if (command === "Q") {
      difX = relativeX + (x - relativeX) * twoThirds;
      difY = relativeY + (y - relativeY) * twoThirds;
      if (!isRelative) {
        relativeX = relativeY = 0;
      }
      relativeX += a[i + 3] * 1;
      relativeY += a[i + 4] * 1;
      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
      i += 4; // "T" (continuation of quadratic bezier)
    } else if (command === "T") {
      difX = relativeX - segment[segment.length - 4];
      difY = relativeY - segment[segment.length - 3];
      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
      i += 2; // "H" (horizontal line)
    } else if (command === "H") {
      line(relativeX, relativeY, relativeX = x, relativeY);
      i += 1; // "V" (vertical line)
    } else if (command === "V") {
      //adjust values because the first (and only one) isn't x in this case, it's y.
      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
      i += 1; // "L" (line) or "Z" (close)
    } else if (command === "L" || command === "Z") {
      if (command === "Z") {
        x = startX;
        y = startY;
        segment.closed = true;
      }
      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
        line(relativeX, relativeY, x, y);
        if (command === "L") {
          i += 2;
        }
      }
      relativeX = x;
      relativeY = y; // "A" (arc)
    } else if (command === "A") {
      flag1 = a[i + 4];
      flag2 = a[i + 5];
      difX = a[i + 6];
      difY = a[i + 7];
      j = 7;
      if (flag1.length > 1) {
        // for cases when the flags are merged, like "a8 8 0 018 8" (the 0 and 1 flags are WITH the x value of 8, but it could also be "a8 8 0 01-8 8" so it may include x or not)
        if (flag1.length < 3) {
          difY = difX;
          difX = flag2;
          j--;
        } else {
          difY = flag2;
          difX = flag1.substr(2);
          j -= 2;
        }
        flag2 = flag1.charAt(1);
        flag1 = flag1.charAt(0);
      }
      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
      i += j;
      if (beziers) {
        for (j = 0; j < beziers.length; j++) {
          segment.push(beziers[j]);
        }
      }
      relativeX = segment[segment.length - 2];
      relativeY = segment[segment.length - 1];
    } else {
      console.log(errorMessage);
    }
  }
  i = segment.length;
  if (i < 6) {
    //in case there's odd SVG like a M0,0 command at the very end.
    path.pop();
    i = 0;
  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
    segment.closed = true;
  }
  path.totalPoints = points + i;
  return path;
} //populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays

function bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
  var x12 = (x1 + x2) / 2,
    y12 = (y1 + y2) / 2,
    x23 = (x2 + x3) / 2,
    y23 = (y2 + y3) / 2,
    x34 = (x3 + x4) / 2,
    y34 = (y3 + y4) / 2,
    x123 = (x12 + x23) / 2,
    y123 = (y12 + y23) / 2,
    x234 = (x23 + x34) / 2,
    y234 = (y23 + y34) / 2,
    x1234 = (x123 + x234) / 2,
    y1234 = (y123 + y234) / 2,
    dx = x4 - x1,
    dy = y4 - y1,
    d2 = _abs((x2 - x4) * dy - (y2 - y4) * dx),
    d3 = _abs((x3 - x4) * dy - (y3 - y4) * dx),
    length;
  if (!points) {
    points = [x1, y1, x4, y4];
    index = 2;
  }
  points.splice(index || points.length - 2, 0, x1234, y1234);
  if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
    length = points.length;
    bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
    bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 2 + (points.length - length));
  }
  return points;
}
/*
function getAngleBetweenPoints(x0, y0, x1, y1, x2, y2) { //angle between 3 points in radians
	var dx1 = x1 - x0,
		dy1 = y1 - y0,
		dx2 = x2 - x1,
		dy2 = y2 - y1,
		dx3 = x2 - x0,
		dy3 = y2 - y0,
		a = dx1 * dx1 + dy1 * dy1,
		b = dx2 * dx2 + dy2 * dy2,
		c = dx3 * dx3 + dy3 * dy3;
	return Math.acos( (a + b - c) / _sqrt(4 * a * b) );
},
*/
//pointsToSegment() doesn't handle flat coordinates (where y is always 0) the way we need (the resulting control points are always right on top of the anchors), so this function basically makes the control points go directly up and down, varying in length based on the curviness (more curvy, further control points)

function flatPointsToSegment(points, curviness) {
  if (curviness === void 0) {
    curviness = 1;
  }
  var x = points[0],
    y = 0,
    segment = [x, y],
    i = 2;
  for (; i < points.length; i += 2) {
    segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
  }
  return segment;
} //points is an array of x/y points, like [x, y, x, y, x, y]

function pointsToSegment(points, curviness) {
  //points = simplifyPoints(points, tolerance);
  _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2)); // if the first two points are super close, dump the first one.

  var l = points.length - 2,
    x = +points[0],
    y = +points[1],
    nextX = +points[2],
    nextY = +points[3],
    segment = [x, y, x, y],
    dx2 = nextX - x,
    dy2 = nextY - y,
    closed = Math.abs(points[l] - x) < 0.001 && Math.abs(points[l + 1] - y) < 0.001,
    prevX,
    prevY,
    i,
    dx1,
    dy1,
    r1,
    r2,
    r3,
    tl,
    mx1,
    mx2,
    mxm,
    my1,
    my2,
    mym;
  if (closed) {
    // if the start and end points are basically on top of each other, close the segment by adding the 2nd point to the end, and the 2nd-to-last point to the beginning (we'll remove them at the end, but this allows the curvature to look perfect)
    points.push(nextX, nextY);
    nextX = x;
    nextY = y;
    x = points[l - 2];
    y = points[l - 1];
    points.unshift(x, y);
    l += 4;
  }
  curviness = curviness || curviness === 0 ? +curviness : 1;
  for (i = 2; i < l; i += 2) {
    prevX = x;
    prevY = y;
    x = nextX;
    y = nextY;
    nextX = +points[i + 2];
    nextY = +points[i + 3];
    if (x === nextX && y === nextY) {
      continue;
    }
    dx1 = dx2;
    dy1 = dy2;
    dx2 = nextX - x;
    dy2 = nextY - y;
    r1 = _sqrt(dx1 * dx1 + dy1 * dy1); // r1, r2, and r3 correlate x and y (and z in the future). Basically 2D or 3D hypotenuse

    r2 = _sqrt(dx2 * dx2 + dy2 * dy2);
    r3 = _sqrt(Math.pow(dx2 / r2 + dx1 / r1, 2) + Math.pow(dy2 / r2 + dy1 / r1, 2));
    tl = (r1 + r2) * curviness * 0.25 / r3;
    mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0);
    mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0);
    mxm = x - (mx1 + ((mx2 - mx1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
    my1 = y - (y - prevY) * (r1 ? tl / r1 : 0);
    my2 = y + (nextY - y) * (r2 ? tl / r2 : 0);
    mym = y - (my1 + ((my2 - my1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
    if (x !== prevX || y !== prevY) {
      segment.push(_round(mx1 + mxm),
      // first control point
      _round(my1 + mym), _round(x),
      // anchor
      _round(y), _round(mx2 + mxm),
      // second control point
      _round(my2 + mym));
    }
  }
  x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round(nextX), _round(nextY), _round(nextX), _round(nextY)) : segment.length -= 2;
  if (segment.length === 2) {
    // only one point!
    segment.push(x, y, x, y, x, y);
  } else if (closed) {
    segment.splice(0, 6);
    segment.length = segment.length - 6;
  }
  return segment;
} //returns the squared distance between an x/y coordinate and a segment between x1/y1 and x2/y2

function pointToSegDist(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1,
    dy = y2 - y1,
    t;
  if (dx || dy) {
    t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return Math.pow(x - x1, 2) + Math.pow(y - y1, 2);
}
function simplifyStep(points, first, last, tolerance, simplified) {
  var maxSqDist = tolerance,
    firstX = points[first],
    firstY = points[first + 1],
    lastX = points[last],
    lastY = points[last + 1],
    index,
    i,
    d;
  for (i = first + 2; i < last; i += 2) {
    d = pointToSegDist(points[i], points[i + 1], firstX, firstY, lastX, lastY);
    if (d > maxSqDist) {
      index = i;
      maxSqDist = d;
    }
  }
  if (maxSqDist > tolerance) {
    index - first > 2 && simplifyStep(points, first, index, tolerance, simplified);
    simplified.push(points[index], points[index + 1]);
    last - index > 2 && simplifyStep(points, index, last, tolerance, simplified);
  }
} //points is an array of x/y values like [x, y, x, y, x, y]

function simplifyPoints(points, tolerance) {
  var prevX = parseFloat(points[0]),
    prevY = parseFloat(points[1]),
    temp = [prevX, prevY],
    l = points.length - 2,
    i,
    x,
    y,
    dx,
    dy,
    result,
    last;
  tolerance = Math.pow(tolerance || 1, 2);
  for (i = 2; i < l; i += 2) {
    x = parseFloat(points[i]);
    y = parseFloat(points[i + 1]);
    dx = prevX - x;
    dy = prevY - y;
    if (dx * dx + dy * dy > tolerance) {
      temp.push(x, y);
      prevX = x;
      prevY = y;
    }
  }
  temp.push(parseFloat(points[l]), parseFloat(points[l + 1]));
  last = temp.length - 2;
  result = [temp[0], temp[1]];
  simplifyStep(temp, 0, last, tolerance, result);
  result.push(temp[last], temp[last + 1]);
  return result;
}
function getClosestProgressOnBezier(iterations, px, py, start, end, slices, x0, y0, x1, y1, x2, y2, x3, y3) {
  var inc = (end - start) / slices,
    best = 0,
    t = start,
    x,
    y,
    d,
    dx,
    dy,
    inv;
  _bestDistance = _largeNum;
  while (t <= end) {
    inv = 1 - t;
    x = inv * inv * inv * x0 + 3 * inv * inv * t * x1 + 3 * inv * t * t * x2 + t * t * t * x3;
    y = inv * inv * inv * y0 + 3 * inv * inv * t * y1 + 3 * inv * t * t * y2 + t * t * t * y3;
    dx = x - px;
    dy = y - py;
    d = dx * dx + dy * dy;
    if (d < _bestDistance) {
      _bestDistance = d;
      best = t;
    }
    t += inc;
  }
  return iterations > 1 ? getClosestProgressOnBezier(iterations - 1, px, py, Math.max(best - inc, 0), Math.min(best + inc, 1), slices, x0, y0, x1, y1, x2, y2, x3, y3) : best;
}
function getClosestData(rawPath, x, y, slices) {
  //returns an object with the closest j, i, and t (j is the segment index, i is the index of the point in that segment, and t is the time/progress along that bezier)
  var closest = {
      j: 0,
      i: 0,
      t: 0
    },
    bestDistance = _largeNum,
    i,
    j,
    t,
    segment;
  for (j = 0; j < rawPath.length; j++) {
    segment = rawPath[j];
    for (i = 0; i < segment.length; i += 6) {
      t = getClosestProgressOnBezier(1, x, y, 0, 1, slices || 20, segment[i], segment[i + 1], segment[i + 2], segment[i + 3], segment[i + 4], segment[i + 5], segment[i + 6], segment[i + 7]);
      if (bestDistance > _bestDistance) {
        bestDistance = _bestDistance;
        closest.j = j;
        closest.i = i;
        closest.t = t;
      }
    }
  }
  return closest;
} //subdivide a Segment closest to a specific x,y coordinate

function subdivideSegmentNear(x, y, segment, slices, iterations) {
  var l = segment.length,
    bestDistance = _largeNum,
    bestT = 0,
    bestSegmentIndex = 0,
    t,
    i;
  slices = slices || 20;
  iterations = iterations || 3;
  for (i = 0; i < l; i += 6) {
    t = getClosestProgressOnBezier(1, x, y, 0, 1, slices, segment[i], segment[i + 1], segment[i + 2], segment[i + 3], segment[i + 4], segment[i + 5], segment[i + 6], segment[i + 7]);
    if (bestDistance > _bestDistance) {
      bestDistance = _bestDistance;
      bestT = t;
      bestSegmentIndex = i;
    }
  }
  t = getClosestProgressOnBezier(iterations, x, y, bestT - 0.05, bestT + 0.05, slices, segment[bestSegmentIndex], segment[bestSegmentIndex + 1], segment[bestSegmentIndex + 2], segment[bestSegmentIndex + 3], segment[bestSegmentIndex + 4], segment[bestSegmentIndex + 5], segment[bestSegmentIndex + 6], segment[bestSegmentIndex + 7]);
  subdivideSegment(segment, bestSegmentIndex, t);
  return bestSegmentIndex + 6;
}
/*
Takes any of the following and converts it to an all Cubic Bezier SVG data string:
- A <path> data string like "M0,0 L2,4 v20,15 H100"
- A RawPath, like [[x, y, x, y, x, y, x, y][[x, y, x, y, x, y, x, y]]
- A Segment, like [x, y, x, y, x, y, x, y]

Note: all numbers are rounded down to the closest 0.001 to minimize memory, maximize speed, and avoid odd numbers like 1e-13
*/

function rawPathToString(rawPath) {
  if (_isNumber(rawPath[0])) {
    //in case a segment is passed in instead
    rawPath = [rawPath];
  }
  var result = "",
    l = rawPath.length,
    sl,
    s,
    i,
    segment;
  for (s = 0; s < l; s++) {
    segment = rawPath[s];
    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
    sl = segment.length;
    for (i = 2; i < sl; i++) {
      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
    }
    if (segment.closed) {
      result += "z";
    }
  }
  return result;
}
/*
// takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
export function cpCoordsToAngles(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		x, y, i;
	for (i = 0; i < segment.length; i+=6) {
		x = segment[i+2] - segment[i];
		y = segment[i+3] - segment[i+1];
		result[i+2] = Math.atan2(y, x);
		result[i+3] = Math.sqrt(x * x + y * y);
		x = segment[i+6] - segment[i+4];
		y = segment[i+7] - segment[i+5];
		result[i+4] = Math.atan2(y, x);
		result[i+5] = Math.sqrt(x * x + y * y);
	}
	return result;
}

// takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
export function cpAnglesToCoords(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		length = segment.length,
		rnd = 1000,
		angle, l, i, j;
	for (i = 0; i < length; i+=6) {
		angle = segment[i+2];
		l = segment[i+3]; //length
		result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
		angle = segment[i+4];
		l = segment[i+5]; //length
		result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
	}
	return result;
}

//adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
export function populateSmoothData(rawPath) {
	let j = rawPath.length,
		smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
	while (--j > -1) {
		segment = rawPath[j];
		isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
		smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
		isSmooth.length = 4;
		l = segment.length - 2;
		for (i = 6; i < l; i += 6) {
			x = segment[i] - segment[i - 2];
			y = segment[i + 1] - segment[i - 1];
			x2 = segment[i + 2] - segment[i];
			y2 = segment[i + 3] - segment[i + 1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			smooth = (Math.abs(a - a2) < 0.09);
			if (smooth) {
				smoothData[i - 2] = a;
				smoothData[i + 2] = a2;
				smoothData[i - 1] = _sqrt(x * x + y * y);
				smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
			}
			isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
		}
		//if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
		if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
			x = segment[0] - segment[l-2];
			y = segment[1] - segment[l-1];
			x2 = segment[2] - segment[0];
			y2 = segment[3] - segment[1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			if (Math.abs(a - a2) < 0.09) {
				smoothData[l-2] = a;
				smoothData[2] = a2;
				smoothData[l-1] = _sqrt(x * x + y * y);
				smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
				isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
			}
		}
	}
	return rawPath;
}
export function pointToScreen(svgElement, point) {
	if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
		let rawPath = getRawPath(svgElement);
		point = svgElement.ownerSVGElement.createSVGPoint();
		point.x = rawPath[0][0];
		point.y = rawPath[0][1];
	}
	return point.matrixTransform(svgElement.getScreenCTM());
}

*/

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b104f448ac7f924dbc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzk4Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvdXRpbHMvZWFzaW5ncy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ3VzdG9tRWFzZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2dzYXAvdXRpbHMvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcblxuICAgIHRoaXMuY291bnRlciA9IDBcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5zcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICB0aGlzLmFuaW1hdGVJbi5zZXQodGhpcy5lbGVtZW50cy50aXRsZSwge1xuICAgICAgYXV0b0FscGhhOiAxXG4gICAgfSlcblxuICAgIGVhY2godGhpcy5lbGVtZW50cy5zcGFucywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcblxuICAgICAgY29uc3Qgb25TdGFydCA9IF8gPT4ge1xuICAgICAgICBnc2FwLmZyb21UbyhcbiAgICAgICAgICBsZXR0ZXJzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB5OiBcIjEwMCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgICAgZGVsYXk6IDAuMixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIGVhc2U6IFwiYmFjay5pbk91dFwiLFxuICAgICAgICAgICAgc3RhZ2dlcjogMC4wMTUsXG4gICAgICAgICAgICB5OiBcIjAlXCJcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmltYXRlSW4uZnJvbVRvKFxuICAgICAgICBsaW5lLFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgIHk6IFwiMTAwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgZGVsYXk6IDAuMiAqIGluZGV4LFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgb25TdGFydCxcbiAgICAgICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgICAgICAgICB5OiBcIjAlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGFydFwiXG4gICAgICApXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0ZUluLmNhbGwoXyA9PiB7XG4gICAgICBlYWNoKHdpbmRvdy5BU1NFVFMsIGltYWdlID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG4gICAgICAgICAgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1lZGlhID0gbmV3IEltYWdlKClcblxuICAgICAgICBtZWRpYS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCJcbiAgICAgICAgbWVkaWEuc3JjID0gaW1hZ2VcbiAgICAgICAgbWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IG1lZGlhXG5cbiAgICAgICAgICB0aGlzLm9uQXNzZXRMb2FkZWQoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LlRFWFRVUkVTW2ltYWdlXSA9IHRleHR1cmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IDFcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmNvdW50ZXIgLyB3aW5kb3cuQVNTRVRTLmxlbmd0aFxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMVxuICAgICAgfSlcblxuICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsZXR0ZXJzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuXG4gICAgICAgIGNvbnN0IG9uU3RhcnQgPSBfID0+IHtcbiAgICAgICAgICBnc2FwLnRvKGxldHRlcnMsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICBlYXNlOiBcImJhY2suaW5PdXRcIixcbiAgICAgICAgICAgIHN0YWdnZXI6IDAuMDE1LFxuICAgICAgICAgICAgeTogXCItMTAwJVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgICBsaW5lLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjIgKiBpbmRleCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICBvblN0YXJ0LFxuICAgICAgICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgICAgICAgICB5OiBcIi0xMDAlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RhcnRcIlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGFydFwiXG4gICAgICApXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgQ3VzdG9tRWFzZSBmcm9tIFwiZ3NhcC9DdXN0b21FYXNlXCJcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihDdXN0b21FYXNlKVxuXG5leHBvcnQgY29uc3QgU01PT1RIID0gQ3VzdG9tRWFzZS5jcmVhdGUoXCJiZXppZXJcIiwgXCIwLjYsIDAuMDEsIC0wLjA1LCAwLjlcIilcbmV4cG9ydCBjb25zdCBTTU9PVEhFUiA9IEN1c3RvbUVhc2UuY3JlYXRlKFwiYmV6aWVyXCIsIFwiMC40LCAwLjAxLCAtMC4wNSwgMC45XCIpXG5leHBvcnQgY29uc3QgREVGQVVMVCA9IEN1c3RvbUVhc2UuY3JlYXRlKFwiZGVmYXVsdFwiLCBcIjAuNzcsIDAsIDAuMTc1LCAxXCIpXG5leHBvcnQgY29uc3QgQ1NTID0gXCJjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpXCJcbiIsIi8qIVxuICogQ3VzdG9tRWFzZSAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBzdHJpbmdUb1Jhd1BhdGgsIHJhd1BhdGhUb1N0cmluZywgdHJhbnNmb3JtUmF3UGF0aCB9IGZyb20gXCIuL3V0aWxzL3BhdGhzLmpzXCI7XG5cbnZhciBnc2FwLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIChnc2FwID0gd2luZG93LmdzYXApICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4gJiYgZ3NhcDtcbn0sXG4gICAgX2luaXRDb3JlID0gZnVuY3Rpb24gX2luaXRDb3JlKCkge1xuICBnc2FwID0gX2dldEdTQVAoKTtcblxuICBpZiAoZ3NhcCkge1xuICAgIGdzYXAucmVnaXN0ZXJFYXNlKFwiX0NFXCIsIEN1c3RvbUVhc2UuY3JlYXRlKTtcbiAgICBfY29yZUluaXR0ZWQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKEN1c3RvbUVhc2UpXCIpO1xuICB9XG59LFxuICAgIF9iaWdOdW0gPSAxZTIwLFxuICAgIF9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gfn4odmFsdWUgKiAxMDAwICsgKHZhbHVlIDwgMCA/IC0uNSA6IC41KSkgLyAxMDAwO1xufSxcbiAgICBfYm9udXNWYWxpZGF0ZWQgPSAxLFxuICAgIC8vPG5hbWU+Q3VzdG9tRWFzZTwvbmFtZT5cbl9udW1FeHAgPSAvWy0rPVxcLl0qXFxkK1tcXC5lXFwtXFwrXSpcXGQqW2VcXC1cXCtdKlxcZCovZ2ksXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9uZWVkc1BhcnNpbmdFeHAgPSAvW2NMbHNTYUFoSHZWdFRxUV0vZyxcbiAgICBfZmluZE1pbmltdW0gPSBmdW5jdGlvbiBfZmluZE1pbmltdW0odmFsdWVzKSB7XG4gIHZhciBsID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDE7IGkgPCBsOyBpICs9IDYpIHtcbiAgICArdmFsdWVzW2ldIDwgbWluICYmIChtaW4gPSArdmFsdWVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBtaW47XG59LFxuICAgIC8vdGFrZXMgYWxsIHRoZSBwb2ludHMgYW5kIHRyYW5zbGF0ZXMvc2NhbGVzIHRoZW0gc28gdGhhdCB0aGUgeCBzdGFydHMgYXQgMCBhbmQgZW5kcyBhdCAxLlxuX25vcm1hbGl6ZSA9IGZ1bmN0aW9uIF9ub3JtYWxpemUodmFsdWVzLCBoZWlnaHQsIG9yaWdpblkpIHtcbiAgaWYgKCFvcmlnaW5ZICYmIG9yaWdpblkgIT09IDApIHtcbiAgICBvcmlnaW5ZID0gTWF0aC5tYXgoK3ZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0sICt2YWx1ZXNbMV0pO1xuICB9XG5cbiAgdmFyIHR4ID0gK3ZhbHVlc1swXSAqIC0xLFxuICAgICAgdHkgPSAtb3JpZ2luWSxcbiAgICAgIGwgPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgc3ggPSAxIC8gKCt2YWx1ZXNbbCAtIDJdICsgdHgpLFxuICAgICAgc3kgPSAtaGVpZ2h0IHx8IChNYXRoLmFicygrdmFsdWVzW2wgLSAxXSAtICt2YWx1ZXNbMV0pIDwgMC4wMSAqICgrdmFsdWVzW2wgLSAyXSAtICt2YWx1ZXNbMF0pID8gX2ZpbmRNaW5pbXVtKHZhbHVlcykgKyB0eSA6ICt2YWx1ZXNbbCAtIDFdICsgdHkpLFxuICAgICAgaTtcblxuICBpZiAoc3kpIHtcbiAgICAvL3R5cGljYWxseSB5IGVuZHMgYXQgMSAoc28gdGhhdCB0aGUgZW5kIHZhbHVlcyBhcmUgcmVhY2hlZClcbiAgICBzeSA9IDEgLyBzeTtcbiAgfSBlbHNlIHtcbiAgICAvL2luIGNhc2UgdGhlIGVhc2UgcmV0dXJucyB0byBpdHMgYmVnaW5uaW5nIHZhbHVlLCBzY2FsZSBldmVyeXRoaW5nIHByb3BvcnRpb25hbGx5XG4gICAgc3kgPSAtc3g7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgdmFsdWVzW2ldID0gKCt2YWx1ZXNbaV0gKyB0eCkgKiBzeDtcbiAgICB2YWx1ZXNbaSArIDFdID0gKCt2YWx1ZXNbaSArIDFdICsgdHkpICogc3k7XG4gIH1cbn0sXG4gICAgLy9ub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHBvaW50IG9iamVjdHMgbGlrZSB7eCwgeX0gcmF0aGVyIHRoYW4gd29ya2luZyB3aXRoIHNlZ21lbnRzIHdoaWNoIGFyZSBhcnJheXMgd2l0aCBhbHRlcm5hdGluZyB4LCB5IHZhbHVlcyBhcyBpbiB0aGUgc2ltaWxhciBmdW5jdGlvbiBpbiBwYXRocy5qc1xuX2JlemllclRvUG9pbnRzID0gZnVuY3Rpb24gX2JlemllclRvUG9pbnRzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCwgdGhyZXNob2xkLCBwb2ludHMsIGluZGV4KSB7XG4gIHZhciB4MTIgPSAoeDEgKyB4MikgLyAyLFxuICAgICAgeTEyID0gKHkxICsgeTIpIC8gMixcbiAgICAgIHgyMyA9ICh4MiArIHgzKSAvIDIsXG4gICAgICB5MjMgPSAoeTIgKyB5MykgLyAyLFxuICAgICAgeDM0ID0gKHgzICsgeDQpIC8gMixcbiAgICAgIHkzNCA9ICh5MyArIHk0KSAvIDIsXG4gICAgICB4MTIzID0gKHgxMiArIHgyMykgLyAyLFxuICAgICAgeTEyMyA9ICh5MTIgKyB5MjMpIC8gMixcbiAgICAgIHgyMzQgPSAoeDIzICsgeDM0KSAvIDIsXG4gICAgICB5MjM0ID0gKHkyMyArIHkzNCkgLyAyLFxuICAgICAgeDEyMzQgPSAoeDEyMyArIHgyMzQpIC8gMixcbiAgICAgIHkxMjM0ID0gKHkxMjMgKyB5MjM0KSAvIDIsXG4gICAgICBkeCA9IHg0IC0geDEsXG4gICAgICBkeSA9IHk0IC0geTEsXG4gICAgICBkMiA9IE1hdGguYWJzKCh4MiAtIHg0KSAqIGR5IC0gKHkyIC0geTQpICogZHgpLFxuICAgICAgZDMgPSBNYXRoLmFicygoeDMgLSB4NCkgKiBkeSAtICh5MyAtIHk0KSAqIGR4KSxcbiAgICAgIGxlbmd0aDtcblxuICBpZiAoIXBvaW50cykge1xuICAgIHBvaW50cyA9IFt7XG4gICAgICB4OiB4MSxcbiAgICAgIHk6IHkxXG4gICAgfSwge1xuICAgICAgeDogeDQsXG4gICAgICB5OiB5NFxuICAgIH1dO1xuICAgIGluZGV4ID0gMTtcbiAgfVxuXG4gIHBvaW50cy5zcGxpY2UoaW5kZXggfHwgcG9pbnRzLmxlbmd0aCAtIDEsIDAsIHtcbiAgICB4OiB4MTIzNCxcbiAgICB5OiB5MTIzNFxuICB9KTtcblxuICBpZiAoKGQyICsgZDMpICogKGQyICsgZDMpID4gdGhyZXNob2xkICogKGR4ICogZHggKyBkeSAqIGR5KSkge1xuICAgIGxlbmd0aCA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICBfYmV6aWVyVG9Qb2ludHMoeDEsIHkxLCB4MTIsIHkxMiwgeDEyMywgeTEyMywgeDEyMzQsIHkxMjM0LCB0aHJlc2hvbGQsIHBvaW50cywgaW5kZXgpO1xuXG4gICAgX2JlemllclRvUG9pbnRzKHgxMjM0LCB5MTIzNCwgeDIzNCwgeTIzNCwgeDM0LCB5MzQsIHg0LCB5NCwgdGhyZXNob2xkLCBwb2ludHMsIGluZGV4ICsgMSArIChwb2ludHMubGVuZ3RoIC0gbGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxuZXhwb3J0IHZhciBDdXN0b21FYXNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ3VzdG9tRWFzZShpZCwgZGF0YSwgY29uZmlnKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICBfYm9udXNWYWxpZGF0ZWQgJiYgdGhpcy5zZXREYXRhKGRhdGEsIGNvbmZpZyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ3VzdG9tRWFzZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldERhdGEgPSBmdW5jdGlvbiBzZXREYXRhKGRhdGEsIGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBkYXRhID0gZGF0YSB8fCBcIjAsMCwxLDFcIjtcbiAgICB2YXIgdmFsdWVzID0gZGF0YS5tYXRjaChfbnVtRXhwKSxcbiAgICAgICAgY2xvc2VzdCA9IDEsXG4gICAgICAgIHBvaW50cyA9IFtdLFxuICAgICAgICBsb29rdXAgPSBbXSxcbiAgICAgICAgcHJlY2lzaW9uID0gY29uZmlnLnByZWNpc2lvbiB8fCAxLFxuICAgICAgICBmYXN0ID0gcHJlY2lzaW9uIDw9IDEsXG4gICAgICAgIGwsXG4gICAgICAgIGExLFxuICAgICAgICBhMixcbiAgICAgICAgaSxcbiAgICAgICAgaW5jLFxuICAgICAgICBqLFxuICAgICAgICBwb2ludCxcbiAgICAgICAgcHJldlBvaW50LFxuICAgICAgICBwO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICBpZiAoX25lZWRzUGFyc2luZ0V4cC50ZXN0KGRhdGEpIHx8IH5kYXRhLmluZGV4T2YoXCJNXCIpICYmIGRhdGEuaW5kZXhPZihcIkNcIikgPCAwKSB7XG4gICAgICB2YWx1ZXMgPSBzdHJpbmdUb1Jhd1BhdGgoZGF0YSlbMF07XG4gICAgfVxuXG4gICAgbCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgICBpZiAobCA9PT0gNCkge1xuICAgICAgdmFsdWVzLnVuc2hpZnQoMCwgMCk7XG4gICAgICB2YWx1ZXMucHVzaCgxLCAxKTtcbiAgICAgIGwgPSA4O1xuICAgIH0gZWxzZSBpZiAoKGwgLSAyKSAlIDYpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBDdXN0b21FYXNlXCI7XG4gICAgfVxuXG4gICAgaWYgKCt2YWx1ZXNbMF0gIT09IDAgfHwgK3ZhbHVlc1tsIC0gMl0gIT09IDEpIHtcbiAgICAgIF9ub3JtYWxpemUodmFsdWVzLCBjb25maWcuaGVpZ2h0LCBjb25maWcub3JpZ2luWSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWdtZW50ID0gdmFsdWVzO1xuXG4gICAgZm9yIChpID0gMjsgaSA8IGw7IGkgKz0gNikge1xuICAgICAgYTEgPSB7XG4gICAgICAgIHg6ICt2YWx1ZXNbaSAtIDJdLFxuICAgICAgICB5OiArdmFsdWVzW2kgLSAxXVxuICAgICAgfTtcbiAgICAgIGEyID0ge1xuICAgICAgICB4OiArdmFsdWVzW2kgKyA0XSxcbiAgICAgICAgeTogK3ZhbHVlc1tpICsgNV1cbiAgICAgIH07XG4gICAgICBwb2ludHMucHVzaChhMSwgYTIpO1xuXG4gICAgICBfYmV6aWVyVG9Qb2ludHMoYTEueCwgYTEueSwgK3ZhbHVlc1tpXSwgK3ZhbHVlc1tpICsgMV0sICt2YWx1ZXNbaSArIDJdLCArdmFsdWVzW2kgKyAzXSwgYTIueCwgYTIueSwgMSAvIChwcmVjaXNpb24gKiAyMDAwMDApLCBwb2ludHMsIHBvaW50cy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBsID0gcG9pbnRzLmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgcHJldlBvaW50ID0gcG9pbnRzW2kgLSAxXSB8fCBwb2ludDtcblxuICAgICAgaWYgKChwb2ludC54ID4gcHJldlBvaW50LnggfHwgcHJldlBvaW50LnkgIT09IHBvaW50LnkgJiYgcHJldlBvaW50LnggPT09IHBvaW50LnggfHwgcG9pbnQgPT09IHByZXZQb2ludCkgJiYgcG9pbnQueCA8PSAxKSB7XG4gICAgICAgIC8vaWYgYSBwb2ludCBnb2VzIEJBQ0tXQVJEIGluIHRpbWUgb3IgaXMgYSBkdXBsaWNhdGUsIGp1c3QgZHJvcCBpdC4gQWxzbyBpdCBzaG91bGRuJ3QgZ28gcGFzdCAxIG9uIHRoZSB4IGF4aXMsIGFzIGNvdWxkIGhhcHBlbiBpbiBhIHN0cmluZyBsaWtlIFwiTTAsMCBDMCwwIDAuMTIsMC42OCAwLjE4LDAuNzg4IDAuMTk1LDAuODQ1IDAuMzA4LDEgMC4zMiwxIDAuNDAzLDEuMDA1IDAuMzk4LDEgMC41LDEgMC42MDIsMSAwLjgxNiwxLjAwNSAwLjksMSAwLjkxLDEgMC45NDgsMC42OSAwLjk2MiwwLjYxNSAxLjAwMywwLjM3NiAxLDAgMSwwXCIuXG4gICAgICAgIHByZXZQb2ludC5jeCA9IHBvaW50LnggLSBwcmV2UG9pbnQueDsgLy9jaGFuZ2UgaW4geCBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIHRoZSBuZXh0IHBvaW50IChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG5cbiAgICAgICAgcHJldlBvaW50LmN5ID0gcG9pbnQueSAtIHByZXZQb2ludC55O1xuICAgICAgICBwcmV2UG9pbnQubiA9IHBvaW50O1xuICAgICAgICBwcmV2UG9pbnQubnggPSBwb2ludC54OyAvL25leHQgcG9pbnQncyB4IHZhbHVlIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIG1ha2luZyBsb29rdXBzIGZhc3RlciBpbiBnZXRSYXRpbygpKS4gUmVtZW1iZXIsIHRoZSBsb29rdXAgd2lsbCBhbHdheXMgbGFuZCBvbiBhIHNwb3Qgd2hlcmUgaXQncyBlaXRoZXIgdGhpcyBwb2ludCBvciB0aGUgdmVyeSBuZXh0IG9uZSAobmV2ZXIgYmV5b25kIHRoYXQpXG5cbiAgICAgICAgaWYgKGZhc3QgJiYgaSA+IDEgJiYgTWF0aC5hYnMocHJldlBvaW50LmN5IC8gcHJldlBvaW50LmN4IC0gcG9pbnRzW2kgLSAyXS5jeSAvIHBvaW50c1tpIC0gMl0uY3gpID4gMikge1xuICAgICAgICAgIC8vaWYgdGhlcmUncyBhIHN1ZGRlbiBjaGFuZ2UgaW4gZGlyZWN0aW9uLCBwcmlvcml0aXplIGFjY3VyYWN5IG92ZXIgc3BlZWQuIExpa2UgYSBib3VuY2UgZWFzZSAtIHlvdSBkb24ndCB3YW50IHRvIHJpc2sgdGhlIHNhbXBsaW5nIGNodW5rcyBsYW5kaW5nIG9uIGVhY2ggc2lkZSBvZiB0aGUgYm91bmNlIGFuY2hvciBhbmQgaGF2aW5nIGl0IGNsaXBwZWQgb2ZmLlxuICAgICAgICAgIGZhc3QgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZQb2ludC5jeCA8IGNsb3Nlc3QpIHtcbiAgICAgICAgICBpZiAoIXByZXZQb2ludC5jeCkge1xuICAgICAgICAgICAgcHJldlBvaW50LmN4ID0gMC4wMDE7IC8vYXZvaWRzIG1hdGggcHJvYmxlbXMgaW4gZ2V0UmF0aW8oKSAoZGl2aWRpbmcgYnkgemVybylcblxuICAgICAgICAgICAgaWYgKGkgPT09IGwgLSAxKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSB0aGUgZmluYWwgc2VnbWVudCBnb2VzIHZlcnRpY2FsIFJJR0hUIGF0IHRoZSBlbmQsIG1ha2Ugc3VyZSB3ZSBlbmQgYXQgdGhlIGVuZC5cbiAgICAgICAgICAgICAgcHJldlBvaW50LnggLT0gMC4wMDE7XG4gICAgICAgICAgICAgIGNsb3Nlc3QgPSBNYXRoLm1pbihjbG9zZXN0LCAwLjAwMSk7XG4gICAgICAgICAgICAgIGZhc3QgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZXN0ID0gcHJldlBvaW50LmN4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9pbnRzLnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbCA9IDEgLyBjbG9zZXN0ICsgMSB8IDA7XG4gICAgaW5jID0gMSAvIGw7XG4gICAgaiA9IDA7XG4gICAgcG9pbnQgPSBwb2ludHNbMF07XG5cbiAgICBpZiAoZmFzdCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvL2ZvciBmYXN0ZXN0IGxvb2t1cHMsIHdlIGp1c3Qgc2FtcGxlIGFsb25nIHRoZSBwYXRoIGF0IGVxdWFsIHggKHRpbWUpIGRpc3RhbmNlLiBVc2VzIG1vcmUgbWVtb3J5IGFuZCBpcyBzbGlnaHRseSBsZXNzIGFjY3VyYXRlIGZvciBhbmNob3JzIHRoYXQgZG9uJ3QgbGFuZCBvbiB0aGUgc2FtcGxpbmcgcG9pbnRzLCBidXQgZm9yIHRoZSB2YXN0IG1ham9yaXR5IG9mIGVhc2VzIGl0J3MgZXhjZWxsZW50IChhbmQgZmFzdCkuXG4gICAgICAgIHAgPSBpICogaW5jO1xuXG4gICAgICAgIGlmIChwb2ludC5ueCA8IHApIHtcbiAgICAgICAgICBwb2ludCA9IHBvaW50c1srK2pdO1xuICAgICAgICB9XG5cbiAgICAgICAgYTEgPSBwb2ludC55ICsgKHAgLSBwb2ludC54KSAvIHBvaW50LmN4ICogcG9pbnQuY3k7XG4gICAgICAgIGxvb2t1cFtpXSA9IHtcbiAgICAgICAgICB4OiBwLFxuICAgICAgICAgIGN4OiBpbmMsXG4gICAgICAgICAgeTogYTEsXG4gICAgICAgICAgY3k6IDAsXG4gICAgICAgICAgbng6IDlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIGxvb2t1cFtpIC0gMV0uY3kgPSBhMSAtIGxvb2t1cFtpIC0gMV0ueTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb29rdXBbbCAtIDFdLmN5ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXS55IC0gYTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcyBvcHRpb24gaXMgbW9yZSBhY2N1cmF0ZSwgZW5zdXJpbmcgdGhhdCBFVkVSWSBhbmNob3IgaXMgaGl0IHBlcmZlY3RseS4gQ2xpcHBpbmcgYWNyb3NzIGEgYm91bmNlLCBmb3IgZXhhbXBsZSwgd291bGQgbmV2ZXIgaGFwcGVuLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvL2J1aWxkIGEgbG9va3VwIHRhYmxlIGJhc2VkIG9uIHRoZSBzbWFsbGVzdCBkaXN0YW5jZSBzbyB0aGF0IHdlIGNhbiBpbnN0YW50bHkgZmluZCB0aGUgYXBwcm9wcmlhdGUgcG9pbnQgKHdlbGwsIGl0J2xsIGVpdGhlciBiZSB0aGF0IHBvaW50IG9yIHRoZSB2ZXJ5IG5leHQgb25lKS4gV2UnbGwgbG9vayB1cCBiYXNlZCBvbiB0aGUgbGluZWFyIHByb2dyZXNzLiBTbyBpdCdzIGl0J3MgMC41IGFuZCB0aGUgbG9va3VwIHRhYmxlIGhhcyAxMDAgZWxlbWVudHMsIGl0J2QgYmUgbGlrZSBsb29rdXBbTWF0aC5mbG9vcigwLjUgKiAxMDApXVxuICAgICAgICBpZiAocG9pbnQubnggPCBpICogaW5jKSB7XG4gICAgICAgICAgcG9pbnQgPSBwb2ludHNbKytqXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvb2t1cFtpXSA9IHBvaW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoaiA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGxvb2t1cFtpIC0gMV0gPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdO1xuICAgICAgfVxuICAgIH0gLy90aGlzLl9jYWxjRW5kID0gKHBvaW50c1twb2ludHMubGVuZ3RoLTFdLnkgIT09IDEgfHwgcG9pbnRzWzBdLnkgIT09IDApOyAvL2Vuc3VyZXMgdGhhdCB3ZSBkb24ndCBydW4gaW50byBmbG9hdGluZyBwb2ludCBlcnJvcnMuIEFzIGxvbmcgYXMgd2UncmUgc3RhcnRpbmcgYXQgMCBhbmQgZW5kaW5nIGF0IDEsIHRlbGwgR1NBUCB0byBza2lwIHRoZSBmaW5hbCBjYWxjdWxhdGlvbiBhbmQgdXNlIDAvMSBhcyB0aGUgZmFjdG9yLlxuXG5cbiAgICB0aGlzLmVhc2UgPSBmdW5jdGlvbiAocCkge1xuICAgICAgdmFyIHBvaW50ID0gbG9va3VwW3AgKiBsIHwgMF0gfHwgbG9va3VwW2wgLSAxXTtcblxuICAgICAgaWYgKHBvaW50Lm54IDwgcCkge1xuICAgICAgICBwb2ludCA9IHBvaW50Lm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb2ludC55ICsgKHAgLSBwb2ludC54KSAvIHBvaW50LmN4ICogcG9pbnQuY3k7XG4gICAgfTtcblxuICAgIHRoaXMuZWFzZS5jdXN0b20gPSB0aGlzO1xuICAgIHRoaXMuaWQgJiYgZ3NhcCAmJiBnc2FwLnJlZ2lzdGVyRWFzZSh0aGlzLmlkLCB0aGlzLmVhc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nZXRTVkdEYXRhID0gZnVuY3Rpb24gZ2V0U1ZHRGF0YShjb25maWcpIHtcbiAgICByZXR1cm4gQ3VzdG9tRWFzZS5nZXRTVkdEYXRhKHRoaXMsIGNvbmZpZyk7XG4gIH07XG5cbiAgQ3VzdG9tRWFzZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaWQsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tRWFzZShpZCwgZGF0YSwgY29uZmlnKS5lYXNlO1xuICB9O1xuXG4gIEN1c3RvbUVhc2UucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3Rlcihjb3JlKSB7XG4gICAgZ3NhcCA9IGNvcmU7XG5cbiAgICBfaW5pdENvcmUoKTtcbiAgfTtcblxuICBDdXN0b21FYXNlLmdldCA9IGZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBnc2FwLnBhcnNlRWFzZShpZCk7XG4gIH07XG5cbiAgQ3VzdG9tRWFzZS5nZXRTVkdEYXRhID0gZnVuY3Rpb24gZ2V0U1ZHRGF0YShlYXNlLCBjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgdmFyIHdpZHRoID0gY29uZmlnLndpZHRoIHx8IDEwMCxcbiAgICAgICAgaGVpZ2h0ID0gY29uZmlnLmhlaWdodCB8fCAxMDAsXG4gICAgICAgIHggPSBjb25maWcueCB8fCAwLFxuICAgICAgICB5ID0gKGNvbmZpZy55IHx8IDApICsgaGVpZ2h0LFxuICAgICAgICBlID0gZ3NhcC51dGlscy50b0FycmF5KGNvbmZpZy5wYXRoKVswXSxcbiAgICAgICAgYSxcbiAgICAgICAgc2xvcGUsXG4gICAgICAgIGksXG4gICAgICAgIGluYyxcbiAgICAgICAgdHgsXG4gICAgICAgIHR5LFxuICAgICAgICBwcmVjaXNpb24sXG4gICAgICAgIHRocmVzaG9sZCxcbiAgICAgICAgcHJldlgsXG4gICAgICAgIHByZXZZO1xuXG4gICAgaWYgKGNvbmZpZy5pbnZlcnQpIHtcbiAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICB5ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVhc2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGVhc2UgPSBnc2FwLnBhcnNlRWFzZShlYXNlKTtcbiAgICB9XG5cbiAgICBpZiAoZWFzZS5jdXN0b20pIHtcbiAgICAgIGVhc2UgPSBlYXNlLmN1c3RvbTtcbiAgICB9XG5cbiAgICBpZiAoZWFzZSBpbnN0YW5jZW9mIEN1c3RvbUVhc2UpIHtcbiAgICAgIGEgPSByYXdQYXRoVG9TdHJpbmcodHJhbnNmb3JtUmF3UGF0aChbZWFzZS5zZWdtZW50XSwgd2lkdGgsIDAsIDAsIC1oZWlnaHQsIHgsIHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IFt4LCB5XTtcbiAgICAgIHByZWNpc2lvbiA9IE1hdGgubWF4KDUsIChjb25maWcucHJlY2lzaW9uIHx8IDEpICogMjAwKTtcbiAgICAgIGluYyA9IDEgLyBwcmVjaXNpb247XG4gICAgICBwcmVjaXNpb24gKz0gMjtcbiAgICAgIHRocmVzaG9sZCA9IDUgLyBwcmVjaXNpb247XG4gICAgICBwcmV2WCA9IF9yb3VuZCh4ICsgaW5jICogd2lkdGgpO1xuICAgICAgcHJldlkgPSBfcm91bmQoeSArIGVhc2UoaW5jKSAqIC1oZWlnaHQpO1xuICAgICAgc2xvcGUgPSAocHJldlkgLSB5KSAvIChwcmV2WCAtIHgpO1xuXG4gICAgICBmb3IgKGkgPSAyOyBpIDwgcHJlY2lzaW9uOyBpKyspIHtcbiAgICAgICAgdHggPSBfcm91bmQoeCArIGkgKiBpbmMgKiB3aWR0aCk7XG4gICAgICAgIHR5ID0gX3JvdW5kKHkgKyBlYXNlKGkgKiBpbmMpICogLWhlaWdodCk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKCh0eSAtIHByZXZZKSAvICh0eCAtIHByZXZYKSAtIHNsb3BlKSA+IHRocmVzaG9sZCB8fCBpID09PSBwcmVjaXNpb24gLSAxKSB7XG4gICAgICAgICAgLy9vbmx5IGFkZCBwb2ludHMgd2hlbiB0aGUgc2xvcGUgY2hhbmdlcyBiZXlvbmQgdGhlIHRocmVzaG9sZFxuICAgICAgICAgIGEucHVzaChwcmV2WCwgcHJldlkpO1xuICAgICAgICAgIHNsb3BlID0gKHR5IC0gcHJldlkpIC8gKHR4IC0gcHJldlgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldlggPSB0eDtcbiAgICAgICAgcHJldlkgPSB0eTtcbiAgICAgIH1cblxuICAgICAgYSA9IFwiTVwiICsgYS5qb2luKFwiLFwiKTtcbiAgICB9XG5cbiAgICBlICYmIGUuc2V0QXR0cmlidXRlKFwiZFwiLCBhKTtcbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICByZXR1cm4gQ3VzdG9tRWFzZTtcbn0oKTtcbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihDdXN0b21FYXNlKTtcbkN1c3RvbUVhc2UudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5leHBvcnQgeyBDdXN0b21FYXNlIGFzIGRlZmF1bHQgfTsiLCIvKiFcbiAqIHBhdGhzIDMuMTIuMlxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMDgtMjAyMywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBfc3ZnUGF0aEV4cCA9IC9bYWNobG1xc3R2el18KC0/XFxkKlxcLj9cXGQqKD86ZVtcXC0rXT9cXGQrKT8pWzAtOV0vaWcsXG4gICAgX251bWJlcnNFeHAgPSAvKD86KC0pP1xcZCpcXC4/XFxkKig/OmVbXFwtK10/XFxkKyk/KVswLTldL2lnLFxuICAgIF9zY2llbnRpZmljID0gL1tcXCtcXC1dP1xcZCpcXC4/XFxkK2VbXFwrXFwtXT9cXGQrL2lnLFxuICAgIF9zZWxlY3RvckV4cCA9IC8oXlsjXFwuXVthLXpdfFthLXldW2Etel0pL2ksXG4gICAgX0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfc2luID0gTWF0aC5zaW4sXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9hYnMgPSBNYXRoLmFicyxcbiAgICBfc3FydCA9IE1hdGguc3FydCxcbiAgICBfYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgIF9sYXJnZU51bSA9IDFlOCxcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIF9pc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfdGVtcCA9IHt9LFxuICAgIF90ZW1wMiA9IHt9LFxuICAgIF9yb3VuZGluZ051bSA9IDFlNSxcbiAgICBfd3JhcFByb2dyZXNzID0gZnVuY3Rpb24gX3dyYXBQcm9ncmVzcyhwcm9ncmVzcykge1xuICByZXR1cm4gTWF0aC5yb3VuZCgocHJvZ3Jlc3MgKyBfbGFyZ2VOdW0pICUgMSAqIF9yb3VuZGluZ051bSkgLyBfcm91bmRpbmdOdW0gfHwgKHByb2dyZXNzIDwgMCA/IDAgOiAxKTtcbn0sXG4gICAgLy9pZiBwcm9ncmVzcyBsYW5kcyBvbiAxLCB0aGUgJSB3aWxsIG1ha2UgaXQgMCB3aGljaCBpcyB3aHkgd2UgfHwgMSwgYnV0IG5vdCBpZiBpdCdzIG5lZ2F0aXZlIGJlY2F1c2UgaXQgbWFrZXMgbW9yZSBzZW5zZSBmb3IgbW90aW9uIHRvIGVuZCBhdCAwIGluIHRoYXQgY2FzZS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIF9yb3VuZGluZ051bSkgLyBfcm91bmRpbmdOdW0gfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTEwKSAvIDFlMTAgfHwgMDtcbn0sXG4gICAgX3NwbGl0U2VnbWVudCA9IGZ1bmN0aW9uIF9zcGxpdFNlZ21lbnQocmF3UGF0aCwgc2VnSW5kZXgsIGksIHQpIHtcbiAgdmFyIHNlZ21lbnQgPSByYXdQYXRoW3NlZ0luZGV4XSxcbiAgICAgIHNoaWZ0ID0gdCA9PT0gMSA/IDYgOiBzdWJkaXZpZGVTZWdtZW50KHNlZ21lbnQsIGksIHQpO1xuXG4gIGlmIChzaGlmdCAmJiBzaGlmdCArIGkgKyAyIDwgc2VnbWVudC5sZW5ndGgpIHtcbiAgICByYXdQYXRoLnNwbGljZShzZWdJbmRleCwgMCwgc2VnbWVudC5zbGljZSgwLCBpICsgc2hpZnQgKyAyKSk7XG4gICAgc2VnbWVudC5zcGxpY2UoMCwgaSArIHNoaWZ0KTtcbiAgICByZXR1cm4gMTtcbiAgfVxufSxcbiAgICBfZ2V0U2FtcGxlSW5kZXggPSBmdW5jdGlvbiBfZ2V0U2FtcGxlSW5kZXgoc2FtcGxlcywgbGVuZ3RoLCBwcm9ncmVzcykge1xuICAvLyBzbGlnaHRseSBzbG93ZXIgd2F5IHRoYW4gZG9pbmcgdGhpcyAod2hlbiB0aGVyZSdzIG5vIGxvb2t1cCk6IHNlZ21lbnQubG9va3VwW3Byb2dyZXNzIDwgMSA/IH5+KGxlbmd0aCAvIHNlZ21lbnQubWluTGVuZ3RoKSA6IHNlZ21lbnQubG9va3VwLmxlbmd0aCAtIDFdIHx8IDA7XG4gIHZhciBsID0gc2FtcGxlcy5sZW5ndGgsXG4gICAgICBpID0gfn4ocHJvZ3Jlc3MgKiBsKTtcblxuICBpZiAoc2FtcGxlc1tpXSA+IGxlbmd0aCkge1xuICAgIHdoaWxlICgtLWkgJiYgc2FtcGxlc1tpXSA+IGxlbmd0aCkge31cblxuICAgIGkgPCAwICYmIChpID0gMCk7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHNhbXBsZXNbKytpXSA8IGxlbmd0aCAmJiBpIDwgbCkge31cbiAgfVxuXG4gIHJldHVybiBpIDwgbCA/IGkgOiBsIC0gMTtcbn0sXG4gICAgX3JldmVyc2VSYXdQYXRoID0gZnVuY3Rpb24gX3JldmVyc2VSYXdQYXRoKHJhd1BhdGgsIHNraXBPdXRlcikge1xuICB2YXIgaSA9IHJhd1BhdGgubGVuZ3RoO1xuICBza2lwT3V0ZXIgfHwgcmF3UGF0aC5yZXZlcnNlKCk7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHJhd1BhdGhbaV0ucmV2ZXJzZWQgfHwgcmV2ZXJzZVNlZ21lbnQocmF3UGF0aFtpXSk7XG4gIH1cbn0sXG4gICAgX2NvcHlNZXRhRGF0YSA9IGZ1bmN0aW9uIF9jb3B5TWV0YURhdGEoc291cmNlLCBjb3B5KSB7XG4gIGNvcHkudG90YWxMZW5ndGggPSBzb3VyY2UudG90YWxMZW5ndGg7XG5cbiAgaWYgKHNvdXJjZS5zYW1wbGVzKSB7XG4gICAgLy9zZWdtZW50XG4gICAgY29weS5zYW1wbGVzID0gc291cmNlLnNhbXBsZXMuc2xpY2UoMCk7XG4gICAgY29weS5sb29rdXAgPSBzb3VyY2UubG9va3VwLnNsaWNlKDApO1xuICAgIGNvcHkubWluTGVuZ3RoID0gc291cmNlLm1pbkxlbmd0aDtcbiAgICBjb3B5LnJlc29sdXRpb24gPSBzb3VyY2UucmVzb2x1dGlvbjtcbiAgfSBlbHNlIGlmIChzb3VyY2UudG90YWxQb2ludHMpIHtcbiAgICAvL3Jhd1BhdGhcbiAgICBjb3B5LnRvdGFsUG9pbnRzID0gc291cmNlLnRvdGFsUG9pbnRzO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIC8vcHVzaGVzIGEgbmV3IHNlZ21lbnQgaW50byBhIHJhd1BhdGgsIGJ1dCBpZiBpdHMgc3RhcnRpbmcgdmFsdWVzIG1hdGNoIHRoZSBlbmRpbmcgdmFsdWVzIG9mIHRoZSBsYXN0IHNlZ21lbnQsIGl0J2xsIG1lcmdlIGl0IGludG8gdGhhdCBzYW1lIHNlZ21lbnQgKHRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzKVxuX2FwcGVuZE9yTWVyZ2UgPSBmdW5jdGlvbiBfYXBwZW5kT3JNZXJnZShyYXdQYXRoLCBzZWdtZW50KSB7XG4gIHZhciBpbmRleCA9IHJhd1BhdGgubGVuZ3RoLFxuICAgICAgcHJldlNlZyA9IHJhd1BhdGhbaW5kZXggLSAxXSB8fCBbXSxcbiAgICAgIGwgPSBwcmV2U2VnLmxlbmd0aDtcblxuICBpZiAoaW5kZXggJiYgc2VnbWVudFswXSA9PT0gcHJldlNlZ1tsIC0gMl0gJiYgc2VnbWVudFsxXSA9PT0gcHJldlNlZ1tsIC0gMV0pIHtcbiAgICBzZWdtZW50ID0gcHJldlNlZy5jb25jYXQoc2VnbWVudC5zbGljZSgyKSk7XG4gICAgaW5kZXgtLTtcbiAgfVxuXG4gIHJhd1BhdGhbaW5kZXhdID0gc2VnbWVudDtcbn0sXG4gICAgX2Jlc3REaXN0YW5jZTtcbi8qIFRFUk1JTk9MT0dZXG4gLSBSYXdQYXRoIC0gYW4gYXJyYXkgb2YgYXJyYXlzLCBvbmUgZm9yIGVhY2ggU2VnbWVudC4gQSBzaW5nbGUgUmF3UGF0aCBjb3VsZCBoYXZlIG11bHRpcGxlIFwiTVwiIGNvbW1hbmRzLCBkZWZpbmluZyBTZWdtZW50cyAocGF0aHMgYXJlbid0IGFsd2F5cyBjb25uZWN0ZWQpLlxuIC0gU2VnbWVudCAtIGFuIGFycmF5IGNvbnRhaW5pbmcgYSBzZXF1ZW5jZSBvZiBDdWJpYyBCZXppZXIgY29vcmRpbmF0ZXMgaW4gYWx0ZXJuYXRpbmcgeCwgeSwgeCwgeSBmb3JtYXQuIFN0YXJ0aW5nIGFuY2hvciwgdGhlbiBjb250cm9sIHBvaW50IDEsIGNvbnRyb2wgcG9pbnQgMiwgYW5kIGVuZGluZyBhbmNob3IsIHRoZW4gdGhlIG5leHQgY29udHJvbCBwb2ludCAxLCBjb250cm9sIHBvaW50IDIsIGFuY2hvciwgZXRjLiBVc2VzIGxlc3MgbWVtb3J5IHRoYW4gYW4gYXJyYXkgd2l0aCBhIGJ1bmNoIG9mIHt4LCB5fSBwb2ludHMuXG4gLSBCZXppZXIgLSBhIHNpbmdsZSBjdWJpYyBCZXppZXIgd2l0aCBhIHN0YXJ0aW5nIGFuY2hvciwgdHdvIGNvbnRyb2wgcG9pbnRzLCBhbmQgYW4gZW5kaW5nIGFuY2hvci5cbiAtIHRoZSB2YXJpYWJsZSBcInRcIiBpcyB0eXBpY2FsbHkgdGhlIHBvc2l0aW9uIGFsb25nIGFuIGluZGl2aWR1YWwgQmV6aWVyIHBhdGggKHRpbWUpIGFuZCBpdCdzIE5PVCBsaW5lYXIsIG1lYW5pbmcgaXQgY291bGQgYWNjZWxlcmF0ZS9kZWNlbGVyYXRlIGJhc2VkIG9uIHRoZSBjb250cm9sIHBvaW50cyB3aGVyZWFzIHRoZSBcInBcIiBvciBcInByb2dyZXNzXCIgdmFsdWUgaXMgbGluZWFybHkgbWFwcGVkIHRvIHRoZSB3aG9sZSBwYXRoLCBzbyBpdCBzaG91bGRuJ3QgcmVhbGx5IGFjY2VsZXJhdGUvZGVjZWxlcmF0ZSBiYXNlZCBvbiBjb250cm9sIHBvaW50cy4gU28gYSBwcm9ncmVzcyBvZiAwLjIgd291bGQgYmUgYWxtb3N0IGV4YWN0bHkgMjAlIGFsb25nIHRoZSBwYXRoLiBcInRcIiBpcyBPTkxZIGluIGFuIGluZGl2aWR1YWwgQmV6aWVyIHBpZWNlLlxuICovXG4vL2FjY2VwdHMgYmFzaWMgc2VsZWN0b3IgdGV4dCwgYSBwYXRoIGluc3RhbmNlLCBhIFJhd1BhdGggaW5zdGFuY2UsIG9yIGEgU2VnbWVudCBhbmQgcmV0dXJucyBhIFJhd1BhdGggKG1ha2VzIGl0IGVhc3kgdG8gaG9tb2dlbml6ZSB0aGluZ3MpLiBJZiBhbiBlbGVtZW50IG9yIHNlbGVjdG9yIHRleHQgaXMgcGFzc2VkIGluLCBpdCdsbCBhbHNvIGNhY2hlIHRoZSB2YWx1ZSBzbyB0aGF0IGlmIGl0J3MgcXVlcmllZCBhZ2FpbiwgaXQnbGwganVzdCB0YWtlIHRoZSBwYXRoIGRhdGEgZnJvbSB0aGVyZSBpbnN0ZWFkIG9mIHBhcnNpbmcgaXQgYWxsIG92ZXIgYWdhaW4gKGFzIGxvbmcgYXMgdGhlIHBhdGggZGF0YSBpdHNlbGYgaGFzbid0IGNoYW5nZWQgLSBpdCdsbCBjaGVjaykuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhd1BhdGgodmFsdWUpIHtcbiAgdmFsdWUgPSBfaXNTdHJpbmcodmFsdWUpICYmIF9zZWxlY3RvckV4cC50ZXN0KHZhbHVlKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFsdWUpIHx8IHZhbHVlIDogdmFsdWU7XG4gIHZhciBlID0gdmFsdWUuZ2V0QXR0cmlidXRlID8gdmFsdWUgOiAwLFxuICAgICAgcmF3UGF0aDtcblxuICBpZiAoZSAmJiAodmFsdWUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoXCJkXCIpKSkge1xuICAgIC8vaW1wbGVtZW50cyBjYWNoaW5nXG4gICAgaWYgKCFlLl9nc1BhdGgpIHtcbiAgICAgIGUuX2dzUGF0aCA9IHt9O1xuICAgIH1cblxuICAgIHJhd1BhdGggPSBlLl9nc1BhdGhbdmFsdWVdO1xuICAgIHJldHVybiByYXdQYXRoICYmICFyYXdQYXRoLl9kaXJ0eSA/IHJhd1BhdGggOiBlLl9nc1BhdGhbdmFsdWVdID0gc3RyaW5nVG9SYXdQYXRoKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAhdmFsdWUgPyBjb25zb2xlLndhcm4oXCJFeHBlY3RpbmcgYSA8cGF0aD4gZWxlbWVudCBvciBhbiBTVkcgcGF0aCBkYXRhIHN0cmluZ1wiKSA6IF9pc1N0cmluZyh2YWx1ZSkgPyBzdHJpbmdUb1Jhd1BhdGgodmFsdWUpIDogX2lzTnVtYmVyKHZhbHVlWzBdKSA/IFt2YWx1ZV0gOiB2YWx1ZTtcbn0gLy9jb3BpZXMgYSBSYXdQYXRoIFdJVEhPVVQgdGhlIGxlbmd0aCBtZXRhIGRhdGEgKGZvciBzcGVlZClcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlSYXdQYXRoKHJhd1BhdGgpIHtcbiAgdmFyIGEgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyBpIDwgcmF3UGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGFbaV0gPSBfY29weU1ldGFEYXRhKHJhd1BhdGhbaV0sIHJhd1BhdGhbaV0uc2xpY2UoMCkpO1xuICB9XG5cbiAgcmV0dXJuIF9jb3B5TWV0YURhdGEocmF3UGF0aCwgYSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVNlZ21lbnQoc2VnbWVudCkge1xuICB2YXIgaSA9IDAsXG4gICAgICB5O1xuICBzZWdtZW50LnJldmVyc2UoKTsgLy90aGlzIHdpbGwgaW52ZXJ0IHRoZSBvcmRlciB5LCB4LCB5LCB4IHNvIHdlIG11c3QgZmxpcCBpdCBiYWNrLlxuXG4gIGZvciAoOyBpIDwgc2VnbWVudC5sZW5ndGg7IGkgKz0gMikge1xuICAgIHkgPSBzZWdtZW50W2ldO1xuICAgIHNlZ21lbnRbaV0gPSBzZWdtZW50W2kgKyAxXTtcbiAgICBzZWdtZW50W2kgKyAxXSA9IHk7XG4gIH1cblxuICBzZWdtZW50LnJldmVyc2VkID0gIXNlZ21lbnQucmV2ZXJzZWQ7XG59XG5cbnZhciBfY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIF9jcmVhdGVQYXRoKGUsIGlnbm9yZSkge1xuICB2YXIgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKSxcbiAgICAgIGF0dHIgPSBbXS5zbGljZS5jYWxsKGUuYXR0cmlidXRlcyksXG4gICAgICBpID0gYXR0ci5sZW5ndGgsXG4gICAgICBuYW1lO1xuICBpZ25vcmUgPSBcIixcIiArIGlnbm9yZSArIFwiLFwiO1xuXG4gIHdoaWxlICgtLWkgPiAtMSkge1xuICAgIG5hbWUgPSBhdHRyW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7IC8vaW4gTWljcm9zb2Z0IEVkZ2UsIGlmIHlvdSBkb24ndCBzZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIGEgbG93ZXJjYXNlIG5hbWUsIGl0IGRvZXNuJ3QgcmVuZGVyIGNvcnJlY3RseSEgU3VwZXIgd2VpcmQuXG5cbiAgICBpZiAoaWdub3JlLmluZGV4T2YoXCIsXCIgKyBuYW1lICsgXCIsXCIpIDwgMCkge1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBuYW1lLCBhdHRyW2ldLm5vZGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59LFxuICAgIF90eXBlQXR0cnMgPSB7XG4gIHJlY3Q6IFwicngscnkseCx5LHdpZHRoLGhlaWdodFwiLFxuICBjaXJjbGU6IFwicixjeCxjeVwiLFxuICBlbGxpcHNlOiBcInJ4LHJ5LGN4LGN5XCIsXG4gIGxpbmU6IFwieDEseDIseTEseTJcIlxufSxcbiAgICBfYXR0clRvT2JqID0gZnVuY3Rpb24gX2F0dHJUb09iaihlLCBhdHRycykge1xuICB2YXIgcHJvcHMgPSBhdHRycyA/IGF0dHJzLnNwbGl0KFwiLFwiKSA6IFtdLFxuICAgICAgb2JqID0ge30sXG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgtLWkgPiAtMSkge1xuICAgIG9ialtwcm9wc1tpXV0gPSArZS5nZXRBdHRyaWJ1dGUocHJvcHNbaV0pIHx8IDA7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTsgLy9jb252ZXJ0cyBhbiBTVkcgc2hhcGUgbGlrZSA8Y2lyY2xlPiwgPHJlY3Q+LCA8cG9seWdvbj4sIDxwb2x5bGluZT4sIDxlbGxpcHNlPiwgZXRjLiB0byBhIDxwYXRoPiwgc3dhcHBpbmcgaXQgaW4gYW5kIGNvcHlpbmcgdGhlIGF0dHJpYnV0ZXMgdG8gbWF0Y2guXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1BhdGgoZWxlbWVudCwgc3dhcCkge1xuICB2YXIgdHlwZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgY2lyYyA9IDAuNTUyMjg0NzQ5ODMxLFxuICAgICAgZGF0YSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgcixcbiAgICAgIHJ5LFxuICAgICAgcGF0aCxcbiAgICAgIHJjaXJjLFxuICAgICAgcnljaXJjLFxuICAgICAgcG9pbnRzLFxuICAgICAgdyxcbiAgICAgIGgsXG4gICAgICB4MixcbiAgICAgIHgzLFxuICAgICAgeDQsXG4gICAgICB4NSxcbiAgICAgIHg2LFxuICAgICAgeTIsXG4gICAgICB5MyxcbiAgICAgIHk0LFxuICAgICAgeTUsXG4gICAgICB5NixcbiAgICAgIGF0dHI7XG5cbiAgaWYgKHR5cGUgPT09IFwicGF0aFwiIHx8ICFlbGVtZW50LmdldEJCb3gpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHBhdGggPSBfY3JlYXRlUGF0aChlbGVtZW50LCBcIngseSx3aWR0aCxoZWlnaHQsY3gsY3kscngscnkscix4MSx4Mix5MSx5Mixwb2ludHNcIik7XG4gIGF0dHIgPSBfYXR0clRvT2JqKGVsZW1lbnQsIF90eXBlQXR0cnNbdHlwZV0pO1xuXG4gIGlmICh0eXBlID09PSBcInJlY3RcIikge1xuICAgIHIgPSBhdHRyLnJ4O1xuICAgIHJ5ID0gYXR0ci5yeSB8fCByO1xuICAgIHggPSBhdHRyLng7XG4gICAgeSA9IGF0dHIueTtcbiAgICB3ID0gYXR0ci53aWR0aCAtIHIgKiAyO1xuICAgIGggPSBhdHRyLmhlaWdodCAtIHJ5ICogMjtcblxuICAgIGlmIChyIHx8IHJ5KSB7XG4gICAgICAvL2lmIHRoZXJlIGFyZSByb3VuZGVkIGNvcm5lcnMsIHJlbmRlciBjdWJpYyBiZXppZXJzXG4gICAgICB4MiA9IHggKyByICogKDEgLSBjaXJjKTtcbiAgICAgIHgzID0geCArIHI7XG4gICAgICB4NCA9IHgzICsgdztcbiAgICAgIHg1ID0geDQgKyByICogY2lyYztcbiAgICAgIHg2ID0geDQgKyByO1xuICAgICAgeTIgPSB5ICsgcnkgKiAoMSAtIGNpcmMpO1xuICAgICAgeTMgPSB5ICsgcnk7XG4gICAgICB5NCA9IHkzICsgaDtcbiAgICAgIHk1ID0geTQgKyByeSAqIGNpcmM7XG4gICAgICB5NiA9IHk0ICsgcnk7XG4gICAgICBkYXRhID0gXCJNXCIgKyB4NiArIFwiLFwiICsgeTMgKyBcIiBWXCIgKyB5NCArIFwiIENcIiArIFt4NiwgeTUsIHg1LCB5NiwgeDQsIHk2LCB4NCAtICh4NCAtIHgzKSAvIDMsIHk2LCB4MyArICh4NCAtIHgzKSAvIDMsIHk2LCB4MywgeTYsIHgyLCB5NiwgeCwgeTUsIHgsIHk0LCB4LCB5NCAtICh5NCAtIHkzKSAvIDMsIHgsIHkzICsgKHk0IC0geTMpIC8gMywgeCwgeTMsIHgsIHkyLCB4MiwgeSwgeDMsIHksIHgzICsgKHg0IC0geDMpIC8gMywgeSwgeDQgLSAoeDQgLSB4MykgLyAzLCB5LCB4NCwgeSwgeDUsIHksIHg2LCB5MiwgeDYsIHkzXS5qb2luKFwiLFwiKSArIFwielwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gXCJNXCIgKyAoeCArIHcpICsgXCIsXCIgKyB5ICsgXCIgdlwiICsgaCArIFwiIGhcIiArIC13ICsgXCIgdlwiICsgLWggKyBcIiBoXCIgKyB3ICsgXCJ6XCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2lyY2xlXCIgfHwgdHlwZSA9PT0gXCJlbGxpcHNlXCIpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJjaXJjbGVcIikge1xuICAgICAgciA9IHJ5ID0gYXR0ci5yO1xuICAgICAgcnljaXJjID0gciAqIGNpcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBhdHRyLnJ4O1xuICAgICAgcnkgPSBhdHRyLnJ5O1xuICAgICAgcnljaXJjID0gcnkgKiBjaXJjO1xuICAgIH1cblxuICAgIHggPSBhdHRyLmN4O1xuICAgIHkgPSBhdHRyLmN5O1xuICAgIHJjaXJjID0gciAqIGNpcmM7XG4gICAgZGF0YSA9IFwiTVwiICsgKHggKyByKSArIFwiLFwiICsgeSArIFwiIENcIiArIFt4ICsgciwgeSArIHJ5Y2lyYywgeCArIHJjaXJjLCB5ICsgcnksIHgsIHkgKyByeSwgeCAtIHJjaXJjLCB5ICsgcnksIHggLSByLCB5ICsgcnljaXJjLCB4IC0gciwgeSwgeCAtIHIsIHkgLSByeWNpcmMsIHggLSByY2lyYywgeSAtIHJ5LCB4LCB5IC0gcnksIHggKyByY2lyYywgeSAtIHJ5LCB4ICsgciwgeSAtIHJ5Y2lyYywgeCArIHIsIHldLmpvaW4oXCIsXCIpICsgXCJ6XCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJsaW5lXCIpIHtcbiAgICBkYXRhID0gXCJNXCIgKyBhdHRyLngxICsgXCIsXCIgKyBhdHRyLnkxICsgXCIgTFwiICsgYXR0ci54MiArIFwiLFwiICsgYXR0ci55MjsgLy9wcmV2aW91c2x5LCB3ZSBqdXN0IGNvbnZlcnRlZCB0byBcIk14LHkgTHgseVwiIGJ1dCBTYWZhcmkgaGFzIGJ1Z3MgdGhhdCBjYXVzZSB0aGF0IG5vdCB0byByZW5kZXIgcHJvcGVybHkgd2hlbiB1c2luZyBhIHN0cm9rZS1kYXNoYXJyYXkgdGhhdCdzIG5vdCBmdWxseSB2aXNpYmxlISBVc2luZyBhIGN1YmljIGJlemllciBmaXhlcyB0aGF0IGlzc3VlLlxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicG9seWxpbmVcIiB8fCB0eXBlID09PSBcInBvbHlnb25cIikge1xuICAgIHBvaW50cyA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShcInBvaW50c1wiKSArIFwiXCIpLm1hdGNoKF9udW1iZXJzRXhwKSB8fCBbXTtcbiAgICB4ID0gcG9pbnRzLnNoaWZ0KCk7XG4gICAgeSA9IHBvaW50cy5zaGlmdCgpO1xuICAgIGRhdGEgPSBcIk1cIiArIHggKyBcIixcIiArIHkgKyBcIiBMXCIgKyBwb2ludHMuam9pbihcIixcIik7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJwb2x5Z29uXCIpIHtcbiAgICAgIGRhdGEgKz0gXCIsXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCJ6XCI7XG4gICAgfVxuICB9XG5cbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIHJhd1BhdGhUb1N0cmluZyhwYXRoLl9nc1Jhd1BhdGggPSBzdHJpbmdUb1Jhd1BhdGgoZGF0YSkpKTtcblxuICBpZiAoc3dhcCAmJiBlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhdGgsIGVsZW1lbnQpO1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufSAvL3JldHVybnMgdGhlIHJvdGF0aW9uIChpbiBkZWdyZWVzKSBhdCBhIHBhcnRpY3VsYXIgcHJvZ3Jlc3Mgb24gYSByYXdQYXRoICh0aGUgc2xvcGUgb2YgdGhlIHRhbmdlbnQpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbkF0UHJvZ3Jlc3MocmF3UGF0aCwgcHJvZ3Jlc3MpIHtcbiAgdmFyIGQgPSBnZXRQcm9ncmVzc0RhdGEocmF3UGF0aCwgcHJvZ3Jlc3MgPj0gMSA/IDEgLSAxZS05IDogcHJvZ3Jlc3MgPyBwcm9ncmVzcyA6IDFlLTkpO1xuICByZXR1cm4gZ2V0Um90YXRpb25BdEJlemllclQoZC5zZWdtZW50LCBkLmksIGQudCk7XG59XG5cbmZ1bmN0aW9uIGdldFJvdGF0aW9uQXRCZXppZXJUKHNlZ21lbnQsIGksIHQpIHtcbiAgdmFyIGEgPSBzZWdtZW50W2ldLFxuICAgICAgYiA9IHNlZ21lbnRbaSArIDJdLFxuICAgICAgYyA9IHNlZ21lbnRbaSArIDRdLFxuICAgICAgeDtcbiAgYSArPSAoYiAtIGEpICogdDtcbiAgYiArPSAoYyAtIGIpICogdDtcbiAgYSArPSAoYiAtIGEpICogdDtcbiAgeCA9IGIgKyAoYyArIChzZWdtZW50W2kgKyA2XSAtIGMpICogdCAtIGIpICogdCAtIGE7XG4gIGEgPSBzZWdtZW50W2kgKyAxXTtcbiAgYiA9IHNlZ21lbnRbaSArIDNdO1xuICBjID0gc2VnbWVudFtpICsgNV07XG4gIGEgKz0gKGIgLSBhKSAqIHQ7XG4gIGIgKz0gKGMgLSBiKSAqIHQ7XG4gIGEgKz0gKGIgLSBhKSAqIHQ7XG4gIHJldHVybiBfcm91bmQoX2F0YW4yKGIgKyAoYyArIChzZWdtZW50W2kgKyA3XSAtIGMpICogdCAtIGIpICogdCAtIGEsIHgpICogX1JBRDJERUcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VSYXdQYXRoKHJhd1BhdGgsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gX2lzVW5kZWZpbmVkKGVuZCkgPyAxIDogX3JvdW5kUHJlY2lzZShlbmQpIHx8IDA7IC8vIHdlIG11c3Qgcm91bmQgdG8gYXZvaWQgaXNzdWVzIGxpa2UgNC4xNSAvIDggPSAwLjgzMDAwMDAwMDAwMDAwMDEgaW5zdGVhZCBvZiAwLjgzIG9yIDIuOCAvIDUgPSAwLjU1OTk5OTk5OTk5OTk5OTkgaW5zdGVhZCBvZiAwLjU2IGFuZCBpZiBzb21lb25lIGlzIGRvaW5nIGEgbG9vcCBsaWtlIHN0YXJ0OiAyLjggLyAwLjUsIGVuZDogMi44IC8gMC41ICsgMS5cblxuICBzdGFydCA9IF9yb3VuZFByZWNpc2Uoc3RhcnQpIHx8IDA7XG4gIHZhciBsb29wcyA9IE1hdGgubWF4KDAsIH5+KF9hYnMoZW5kIC0gc3RhcnQpIC0gMWUtOCkpLFxuICAgICAgcGF0aCA9IGNvcHlSYXdQYXRoKHJhd1BhdGgpO1xuXG4gIGlmIChzdGFydCA+IGVuZCkge1xuICAgIHN0YXJ0ID0gMSAtIHN0YXJ0O1xuICAgIGVuZCA9IDEgLSBlbmQ7XG5cbiAgICBfcmV2ZXJzZVJhd1BhdGgocGF0aCk7XG5cbiAgICBwYXRoLnRvdGFsTGVuZ3RoID0gMDtcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kIDwgMCkge1xuICAgIHZhciBvZmZzZXQgPSBNYXRoLmFicyh+fk1hdGgubWluKHN0YXJ0LCBlbmQpKSArIDE7XG4gICAgc3RhcnQgKz0gb2Zmc2V0O1xuICAgIGVuZCArPSBvZmZzZXQ7XG4gIH1cblxuICBwYXRoLnRvdGFsTGVuZ3RoIHx8IGNhY2hlUmF3UGF0aE1lYXN1cmVtZW50cyhwYXRoKTtcbiAgdmFyIHdyYXAgPSBlbmQgPiAxLFxuICAgICAgcyA9IGdldFByb2dyZXNzRGF0YShwYXRoLCBzdGFydCwgX3RlbXAsIHRydWUpLFxuICAgICAgZSA9IGdldFByb2dyZXNzRGF0YShwYXRoLCBlbmQsIF90ZW1wMiksXG4gICAgICBlU2VnID0gZS5zZWdtZW50LFxuICAgICAgc1NlZyA9IHMuc2VnbWVudCxcbiAgICAgIGVTZWdJbmRleCA9IGUuc2VnSW5kZXgsXG4gICAgICBzU2VnSW5kZXggPSBzLnNlZ0luZGV4LFxuICAgICAgZWkgPSBlLmksXG4gICAgICBzaSA9IHMuaSxcbiAgICAgIHNhbWVTZWdtZW50ID0gc1NlZ0luZGV4ID09PSBlU2VnSW5kZXgsXG4gICAgICBzYW1lQmV6aWVyID0gZWkgPT09IHNpICYmIHNhbWVTZWdtZW50LFxuICAgICAgd3JhcHNCZWhpbmQsXG4gICAgICBzU2hpZnQsXG4gICAgICBlU2hpZnQsXG4gICAgICBpLFxuICAgICAgY29weSxcbiAgICAgIHRvdGFsU2VnbWVudHMsXG4gICAgICBsLFxuICAgICAgajtcblxuICBpZiAod3JhcCB8fCBsb29wcykge1xuICAgIHdyYXBzQmVoaW5kID0gZVNlZ0luZGV4IDwgc1NlZ0luZGV4IHx8IHNhbWVTZWdtZW50ICYmIGVpIDwgc2kgfHwgc2FtZUJlemllciAmJiBlLnQgPCBzLnQ7XG5cbiAgICBpZiAoX3NwbGl0U2VnbWVudChwYXRoLCBzU2VnSW5kZXgsIHNpLCBzLnQpKSB7XG4gICAgICBzU2VnSW5kZXgrKztcblxuICAgICAgaWYgKCF3cmFwc0JlaGluZCkge1xuICAgICAgICBlU2VnSW5kZXgrKztcblxuICAgICAgICBpZiAoc2FtZUJlemllcikge1xuICAgICAgICAgIGUudCA9IChlLnQgLSBzLnQpIC8gKDEgLSBzLnQpO1xuICAgICAgICAgIGVpID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChzYW1lU2VnbWVudCkge1xuICAgICAgICAgIGVpIC09IHNpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKDEgLSAoZW5kIC0gc3RhcnQpKSA8IDFlLTUpIHtcbiAgICAgIGVTZWdJbmRleCA9IHNTZWdJbmRleCAtIDE7XG4gICAgfSBlbHNlIGlmICghZS50ICYmIGVTZWdJbmRleCkge1xuICAgICAgZVNlZ0luZGV4LS07XG4gICAgfSBlbHNlIGlmIChfc3BsaXRTZWdtZW50KHBhdGgsIGVTZWdJbmRleCwgZWksIGUudCkgJiYgd3JhcHNCZWhpbmQpIHtcbiAgICAgIHNTZWdJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChzLnQgPT09IDEpIHtcbiAgICAgIHNTZWdJbmRleCA9IChzU2VnSW5kZXggKyAxKSAlIHBhdGgubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvcHkgPSBbXTtcbiAgICB0b3RhbFNlZ21lbnRzID0gcGF0aC5sZW5ndGg7XG4gICAgbCA9IDEgKyB0b3RhbFNlZ21lbnRzICogbG9vcHM7XG4gICAgaiA9IHNTZWdJbmRleDtcbiAgICBsICs9ICh0b3RhbFNlZ21lbnRzIC0gc1NlZ0luZGV4ICsgZVNlZ0luZGV4KSAlIHRvdGFsU2VnbWVudHM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBfYXBwZW5kT3JNZXJnZShjb3B5LCBwYXRoW2orKyAlIHRvdGFsU2VnbWVudHNdKTtcbiAgICB9XG5cbiAgICBwYXRoID0gY29weTtcbiAgfSBlbHNlIHtcbiAgICBlU2hpZnQgPSBlLnQgPT09IDEgPyA2IDogc3ViZGl2aWRlU2VnbWVudChlU2VnLCBlaSwgZS50KTtcblxuICAgIGlmIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICBzU2hpZnQgPSBzdWJkaXZpZGVTZWdtZW50KHNTZWcsIHNpLCBzYW1lQmV6aWVyID8gcy50IC8gZS50IDogcy50KTtcbiAgICAgIHNhbWVTZWdtZW50ICYmIChlU2hpZnQgKz0gc1NoaWZ0KTtcbiAgICAgIGVTZWcuc3BsaWNlKGVpICsgZVNoaWZ0ICsgMik7XG4gICAgICAoc1NoaWZ0IHx8IHNpKSAmJiBzU2VnLnNwbGljZSgwLCBzaSArIHNTaGlmdCk7XG4gICAgICBpID0gcGF0aC5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgLy9jaG9wIG9mZiBhbnkgZXh0cmEgc2VnbWVudHNcbiAgICAgICAgKGkgPCBzU2VnSW5kZXggfHwgaSA+IGVTZWdJbmRleCkgJiYgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVTZWcuYW5nbGUgPSBnZXRSb3RhdGlvbkF0QmV6aWVyVChlU2VnLCBlaSArIGVTaGlmdCwgMCk7IC8vcmVjb3JkIHRoZSB2YWx1ZSBiZWZvcmUgd2UgY2hvcCBiZWNhdXNlIGl0J2xsIGJlIGltcG9zc2libGUgdG8gZGV0ZXJtaW5lIHRoZSBhbmdsZSBhZnRlciBpdHMgbGVuZ3RoIGlzIDAhXG5cbiAgICAgIGVpICs9IGVTaGlmdDtcbiAgICAgIHMgPSBlU2VnW2VpXTtcbiAgICAgIGUgPSBlU2VnW2VpICsgMV07XG4gICAgICBlU2VnLmxlbmd0aCA9IGVTZWcudG90YWxMZW5ndGggPSAwO1xuICAgICAgZVNlZy50b3RhbFBvaW50cyA9IHBhdGgudG90YWxQb2ludHMgPSA4O1xuICAgICAgZVNlZy5wdXNoKHMsIGUsIHMsIGUsIHMsIGUsIHMsIGUpO1xuICAgIH1cbiAgfVxuXG4gIHBhdGgudG90YWxMZW5ndGggPSAwO1xuICByZXR1cm4gcGF0aDtcbn0gLy9tZWFzdXJlcyBhIFNlZ21lbnQgYWNjb3JkaW5nIHRvIGl0cyByZXNvbHV0aW9uIChzbyBpZiBzZWdtZW50LnJlc29sdXRpb24gaXMgNiwgZm9yIGV4YW1wbGUsIGl0J2xsIHRha2UgNiBzYW1wbGVzIGVxdWFsbHkgYWNyb3NzIGVhY2ggQmV6aWVyKSBhbmQgY3JlYXRlL3BvcHVsYXRlIGEgXCJzYW1wbGVzXCIgQXJyYXkgdGhhdCBoYXMgdGhlIGxlbmd0aCB1cCB0byBlYWNoIG9mIHRob3NlIHNhbXBsZSBwb2ludHMgKGFsd2F5cyBpbmNyZWFzaW5nIGZyb20gdGhlIHN0YXJ0KSBhcyB3ZWxsIGFzIGEgXCJsb29rdXBcIiBhcnJheSB0aGF0J3MgYnJva2VuIHVwIGFjY29yZGluZyB0byB0aGUgc21hbGxlc3QgZGlzdGFuY2UgYmV0d2VlbiAyIHNhbXBsZXMuIFRoaXMgZ2l2ZXMgdXMgYSB2ZXJ5IGZhc3Qgd2F5IG9mIGxvb2tpbmcgdXAgYSBwcm9ncmVzcyBwb3NpdGlvbiByYXRoZXIgdGhhbiBsb29waW5nIHRocm91Z2ggYWxsIHRoZSBwb2ludHMvQmV6aWVycy4gWW91IGNhbiBvcHRpb25hbGx5IGhhdmUgaXQgb25seSBtZWFzdXJlIGEgc3Vic2V0LCBzdGFydGluZyBhdCBzdGFydEluZGV4IGFuZCBnb2luZyBmb3IgYSBzcGVjaWZpYyBudW1iZXIgb2YgYmV6aWVycyAocmVtZW1iZXIsIHRoZXJlIGFyZSAzIHgveSBwYWlycyBlYWNoLCBmb3IgYSB0b3RhbCBvZiA2IGVsZW1lbnRzIGZvciBlYWNoIEJlemllcikuIEl0IHdpbGwgYWxzbyBwb3B1bGF0ZSBhIFwidG90YWxMZW5ndGhcIiBwcm9wZXJ0eSwgYnV0IHRoYXQncyBub3QgZ2VuZXJhbGx5IHN1cGVyIGFjY3VyYXRlIGJlY2F1c2UgYnkgZGVmYXVsdCBpdCdsbCBvbmx5IHRha2UgNiBzYW1wbGVzIHBlciBCZXppZXIuIEJ1dCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgaXQncyBwZXJmZWN0bHkgYWRlcXVhdGUgZm9yIG1lYXN1cmluZyBwcm9ncmVzcyB2YWx1ZXMgYWxvbmcgdGhlIHBhdGguIElmIHlvdSBuZWVkIGEgbW9yZSBhY2N1cmF0ZSB0b3RhbExlbmd0aCwgZWl0aGVyIGluY3JlYXNlIHRoZSByZXNvbHV0aW9uIG9yIHVzZSB0aGUgbW9yZSBhZHZhbmNlZCBiZXppZXJUb1BvaW50cygpIG1ldGhvZCB3aGljaCBrZWVwcyBhZGRpbmcgcG9pbnRzIHVudGlsIHRoZXkgZG9uJ3QgZGV2aWF0ZSBieSBtb3JlIHRoYW4gYSBjZXJ0YWluIHByZWNpc2lvbiB2YWx1ZS5cblxuZnVuY3Rpb24gbWVhc3VyZVNlZ21lbnQoc2VnbWVudCwgc3RhcnRJbmRleCwgYmV6aWVyUXR5KSB7XG4gIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4IHx8IDA7XG5cbiAgaWYgKCFzZWdtZW50LnNhbXBsZXMpIHtcbiAgICBzZWdtZW50LnNhbXBsZXMgPSBbXTtcbiAgICBzZWdtZW50Lmxvb2t1cCA9IFtdO1xuICB9XG5cbiAgdmFyIHJlc29sdXRpb24gPSB+fnNlZ21lbnQucmVzb2x1dGlvbiB8fCAxMixcbiAgICAgIGluYyA9IDEgLyByZXNvbHV0aW9uLFxuICAgICAgZW5kSW5kZXggPSBiZXppZXJRdHkgPyBzdGFydEluZGV4ICsgYmV6aWVyUXR5ICogNiArIDEgOiBzZWdtZW50Lmxlbmd0aCxcbiAgICAgIHgxID0gc2VnbWVudFtzdGFydEluZGV4XSxcbiAgICAgIHkxID0gc2VnbWVudFtzdGFydEluZGV4ICsgMV0sXG4gICAgICBzYW1wbGVzSW5kZXggPSBzdGFydEluZGV4ID8gc3RhcnRJbmRleCAvIDYgKiByZXNvbHV0aW9uIDogMCxcbiAgICAgIHNhbXBsZXMgPSBzZWdtZW50LnNhbXBsZXMsXG4gICAgICBsb29rdXAgPSBzZWdtZW50Lmxvb2t1cCxcbiAgICAgIG1pbiA9IChzdGFydEluZGV4ID8gc2VnbWVudC5taW5MZW5ndGggOiBfbGFyZ2VOdW0pIHx8IF9sYXJnZU51bSxcbiAgICAgIHByZXZMZW5ndGggPSBzYW1wbGVzW3NhbXBsZXNJbmRleCArIGJlemllclF0eSAqIHJlc29sdXRpb24gLSAxXSxcbiAgICAgIGxlbmd0aCA9IHN0YXJ0SW5kZXggPyBzYW1wbGVzW3NhbXBsZXNJbmRleCAtIDFdIDogMCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgeDQsXG4gICAgICB4MyxcbiAgICAgIHgyLFxuICAgICAgeGQsXG4gICAgICB4ZDEsXG4gICAgICB5NCxcbiAgICAgIHkzLFxuICAgICAgeTIsXG4gICAgICB5ZCxcbiAgICAgIHlkMSxcbiAgICAgIGludixcbiAgICAgIHQsXG4gICAgICBsZW5ndGhJbmRleCxcbiAgICAgIGwsXG4gICAgICBzZWdMZW5ndGg7XG4gIHNhbXBsZXMubGVuZ3RoID0gbG9va3VwLmxlbmd0aCA9IDA7XG5cbiAgZm9yIChqID0gc3RhcnRJbmRleCArIDI7IGogPCBlbmRJbmRleDsgaiArPSA2KSB7XG4gICAgeDQgPSBzZWdtZW50W2ogKyA0XSAtIHgxO1xuICAgIHgzID0gc2VnbWVudFtqICsgMl0gLSB4MTtcbiAgICB4MiA9IHNlZ21lbnRbal0gLSB4MTtcbiAgICB5NCA9IHNlZ21lbnRbaiArIDVdIC0geTE7XG4gICAgeTMgPSBzZWdtZW50W2ogKyAzXSAtIHkxO1xuICAgIHkyID0gc2VnbWVudFtqICsgMV0gLSB5MTtcbiAgICB4ZCA9IHhkMSA9IHlkID0geWQxID0gMDtcblxuICAgIGlmIChfYWJzKHg0KSA8IC4wMSAmJiBfYWJzKHk0KSA8IC4wMSAmJiBfYWJzKHgyKSArIF9hYnMoeTIpIDwgLjAxKSB7XG4gICAgICAvL2R1bXAgcG9pbnRzIHRoYXQgYXJlIHN1ZmZpY2llbnRseSBjbG9zZSAoYmFzaWNhbGx5IHJpZ2h0IG9uIHRvcCBvZiBlYWNoIG90aGVyLCBtYWtpbmcgYSBiZXppZXIgc3VwZXIgdGlueSBvciAwIGxlbmd0aClcbiAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDgpIHtcbiAgICAgICAgc2VnbWVudC5zcGxpY2UoaiwgNik7XG4gICAgICAgIGogLT0gNjtcbiAgICAgICAgZW5kSW5kZXggLT0gNjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMTsgaSA8PSByZXNvbHV0aW9uOyBpKyspIHtcbiAgICAgICAgdCA9IGluYyAqIGk7XG4gICAgICAgIGludiA9IDEgLSB0O1xuICAgICAgICB4ZCA9IHhkMSAtICh4ZDEgPSAodCAqIHQgKiB4NCArIDMgKiBpbnYgKiAodCAqIHgzICsgaW52ICogeDIpKSAqIHQpO1xuICAgICAgICB5ZCA9IHlkMSAtICh5ZDEgPSAodCAqIHQgKiB5NCArIDMgKiBpbnYgKiAodCAqIHkzICsgaW52ICogeTIpKSAqIHQpO1xuICAgICAgICBsID0gX3NxcnQoeWQgKiB5ZCArIHhkICogeGQpO1xuXG4gICAgICAgIGlmIChsIDwgbWluKSB7XG4gICAgICAgICAgbWluID0gbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxlbmd0aCArPSBsO1xuICAgICAgICBzYW1wbGVzW3NhbXBsZXNJbmRleCsrXSA9IGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4MSArPSB4NDtcbiAgICB5MSArPSB5NDtcbiAgfVxuXG4gIGlmIChwcmV2TGVuZ3RoKSB7XG4gICAgcHJldkxlbmd0aCAtPSBsZW5ndGg7XG5cbiAgICBmb3IgKDsgc2FtcGxlc0luZGV4IDwgc2FtcGxlcy5sZW5ndGg7IHNhbXBsZXNJbmRleCsrKSB7XG4gICAgICBzYW1wbGVzW3NhbXBsZXNJbmRleF0gKz0gcHJldkxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBpZiAoc2FtcGxlcy5sZW5ndGggJiYgbWluKSB7XG4gICAgc2VnbWVudC50b3RhbExlbmd0aCA9IHNlZ0xlbmd0aCA9IHNhbXBsZXNbc2FtcGxlcy5sZW5ndGggLSAxXSB8fCAwO1xuICAgIHNlZ21lbnQubWluTGVuZ3RoID0gbWluO1xuXG4gICAgaWYgKHNlZ0xlbmd0aCAvIG1pbiA8IDk5OTkpIHtcbiAgICAgIC8vIGlmIHRoZSBsb29rdXAgd291bGQgcmVxdWlyZSB0b28gbWFueSB2YWx1ZXMgKG1lbW9yeSBwcm9ibGVtKSwgd2Ugc2tpcCB0aGlzIGFuZCBpbnN0ZWFkIHdlIHVzZSBhIGxvb3AgdG8gbG9va3VwIHZhbHVlcyBkaXJlY3RseSBpbiB0aGUgc2FtcGxlcyBBcnJheVxuICAgICAgbCA9IGxlbmd0aEluZGV4ID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHNlZ0xlbmd0aDsgaSArPSBtaW4pIHtcbiAgICAgICAgbG9va3VwW2wrK10gPSBzYW1wbGVzW2xlbmd0aEluZGV4XSA8IGkgPyArK2xlbmd0aEluZGV4IDogbGVuZ3RoSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNlZ21lbnQudG90YWxMZW5ndGggPSBzYW1wbGVzWzBdID0gMDtcbiAgfVxuXG4gIHJldHVybiBzdGFydEluZGV4ID8gbGVuZ3RoIC0gc2FtcGxlc1tzdGFydEluZGV4IC8gMiAtIDFdIDogbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVSYXdQYXRoTWVhc3VyZW1lbnRzKHJhd1BhdGgsIHJlc29sdXRpb24pIHtcbiAgdmFyIHBhdGhMZW5ndGgsIHBvaW50cywgaTtcblxuICBmb3IgKGkgPSBwYXRoTGVuZ3RoID0gcG9pbnRzID0gMDsgaSA8IHJhd1BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICByYXdQYXRoW2ldLnJlc29sdXRpb24gPSB+fnJlc29sdXRpb24gfHwgMTI7IC8vc3RlcHMgcGVyIEJlemllciBjdXJ2ZSAoYW5jaG9yLCAyIGNvbnRyb2wgcG9pbnRzLCB0byBhbmNob3IpXG5cbiAgICBwb2ludHMgKz0gcmF3UGF0aFtpXS5sZW5ndGg7XG4gICAgcGF0aExlbmd0aCArPSBtZWFzdXJlU2VnbWVudChyYXdQYXRoW2ldKTtcbiAgfVxuXG4gIHJhd1BhdGgudG90YWxQb2ludHMgPSBwb2ludHM7XG4gIHJhd1BhdGgudG90YWxMZW5ndGggPSBwYXRoTGVuZ3RoO1xuICByZXR1cm4gcmF3UGF0aDtcbn0gLy9kaXZpZGUgc2VnbWVudFtpXSBhdCBwb3NpdGlvbiB0ICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIHByb2dyZXNzIGFsb25nIHRoYXQgcGFydGljdWxhciBjdWJpYyBiZXppZXIgc2VnbWVudCB0aGF0IHN0YXJ0cyBhdCBzZWdtZW50W2ldKS4gUmV0dXJucyBob3cgbWFueSBlbGVtZW50cyB3ZXJlIHNwbGljZWQgaW50byB0aGUgc2VnbWVudCBhcnJheSAoZWl0aGVyIDAgb3IgNilcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YmRpdmlkZVNlZ21lbnQoc2VnbWVudCwgaSwgdCkge1xuICBpZiAodCA8PSAwIHx8IHQgPj0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIGF4ID0gc2VnbWVudFtpXSxcbiAgICAgIGF5ID0gc2VnbWVudFtpICsgMV0sXG4gICAgICBjcDF4ID0gc2VnbWVudFtpICsgMl0sXG4gICAgICBjcDF5ID0gc2VnbWVudFtpICsgM10sXG4gICAgICBjcDJ4ID0gc2VnbWVudFtpICsgNF0sXG4gICAgICBjcDJ5ID0gc2VnbWVudFtpICsgNV0sXG4gICAgICBieCA9IHNlZ21lbnRbaSArIDZdLFxuICAgICAgYnkgPSBzZWdtZW50W2kgKyA3XSxcbiAgICAgIHgxYSA9IGF4ICsgKGNwMXggLSBheCkgKiB0LFxuICAgICAgeDIgPSBjcDF4ICsgKGNwMnggLSBjcDF4KSAqIHQsXG4gICAgICB5MWEgPSBheSArIChjcDF5IC0gYXkpICogdCxcbiAgICAgIHkyID0gY3AxeSArIChjcDJ5IC0gY3AxeSkgKiB0LFxuICAgICAgeDEgPSB4MWEgKyAoeDIgLSB4MWEpICogdCxcbiAgICAgIHkxID0geTFhICsgKHkyIC0geTFhKSAqIHQsXG4gICAgICB4MmEgPSBjcDJ4ICsgKGJ4IC0gY3AyeCkgKiB0LFxuICAgICAgeTJhID0gY3AyeSArIChieSAtIGNwMnkpICogdDtcbiAgeDIgKz0gKHgyYSAtIHgyKSAqIHQ7XG4gIHkyICs9ICh5MmEgLSB5MikgKiB0O1xuICBzZWdtZW50LnNwbGljZShpICsgMiwgNCwgX3JvdW5kKHgxYSksIC8vZmlyc3QgY29udHJvbCBwb2ludFxuICBfcm91bmQoeTFhKSwgX3JvdW5kKHgxKSwgLy9zZWNvbmQgY29udHJvbCBwb2ludFxuICBfcm91bmQoeTEpLCBfcm91bmQoeDEgKyAoeDIgLSB4MSkgKiB0KSwgLy9uZXcgZmFicmljYXRlZCBhbmNob3Igb24gbGluZVxuICBfcm91bmQoeTEgKyAoeTIgLSB5MSkgKiB0KSwgX3JvdW5kKHgyKSwgLy90aGlyZCBjb250cm9sIHBvaW50XG4gIF9yb3VuZCh5MiksIF9yb3VuZCh4MmEpLCAvL2ZvdXJ0aCBjb250cm9sIHBvaW50XG4gIF9yb3VuZCh5MmEpKTtcbiAgc2VnbWVudC5zYW1wbGVzICYmIHNlZ21lbnQuc2FtcGxlcy5zcGxpY2UoaSAvIDYgKiBzZWdtZW50LnJlc29sdXRpb24gfCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIDY7XG59IC8vIHJldHVybnMgYW4gb2JqZWN0IHtwYXRoLCBzZWdtZW50LCBzZWdJbmRleCwgaSwgdH1cblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NEYXRhKHJhd1BhdGgsIHByb2dyZXNzLCBkZWNvcmF0ZWUsIHB1c2hUb05leHRJZkF0RW5kKSB7XG4gIGRlY29yYXRlZSA9IGRlY29yYXRlZSB8fCB7fTtcbiAgcmF3UGF0aC50b3RhbExlbmd0aCB8fCBjYWNoZVJhd1BhdGhNZWFzdXJlbWVudHMocmF3UGF0aCk7XG5cbiAgaWYgKHByb2dyZXNzIDwgMCB8fCBwcm9ncmVzcyA+IDEpIHtcbiAgICBwcm9ncmVzcyA9IF93cmFwUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9XG5cbiAgdmFyIHNlZ0luZGV4ID0gMCxcbiAgICAgIHNlZ21lbnQgPSByYXdQYXRoWzBdLFxuICAgICAgc2FtcGxlcyxcbiAgICAgIHJlc29sdXRpb24sXG4gICAgICBsZW5ndGgsXG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBpLFxuICAgICAgdDtcblxuICBpZiAoIXByb2dyZXNzKSB7XG4gICAgdCA9IGkgPSBzZWdJbmRleCA9IDA7XG4gICAgc2VnbWVudCA9IHJhd1BhdGhbMF07XG4gIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPT09IDEpIHtcbiAgICB0ID0gMTtcbiAgICBzZWdJbmRleCA9IHJhd1BhdGgubGVuZ3RoIC0gMTtcbiAgICBzZWdtZW50ID0gcmF3UGF0aFtzZWdJbmRleF07XG4gICAgaSA9IHNlZ21lbnQubGVuZ3RoIC0gODtcbiAgfSBlbHNlIHtcbiAgICBpZiAocmF3UGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAvL3NwZWVkIG9wdGltaXphdGlvbjogbW9zdCBvZiB0aGUgdGltZSwgdGhlcmUncyBvbmx5IG9uZSBzZWdtZW50IHNvIHNraXAgdGhlIHJlY3Vyc2lvbi5cbiAgICAgIGxlbmd0aCA9IHJhd1BhdGgudG90YWxMZW5ndGggKiBwcm9ncmVzcztcbiAgICAgIG1heCA9IGkgPSAwO1xuXG4gICAgICB3aGlsZSAoKG1heCArPSByYXdQYXRoW2krK10udG90YWxMZW5ndGgpIDwgbGVuZ3RoKSB7XG4gICAgICAgIHNlZ0luZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHJhd1BhdGhbc2VnSW5kZXhdO1xuICAgICAgbWluID0gbWF4IC0gc2VnbWVudC50b3RhbExlbmd0aDtcbiAgICAgIHByb2dyZXNzID0gKGxlbmd0aCAtIG1pbikgLyAobWF4IC0gbWluKSB8fCAwO1xuICAgIH1cblxuICAgIHNhbXBsZXMgPSBzZWdtZW50LnNhbXBsZXM7XG4gICAgcmVzb2x1dGlvbiA9IHNlZ21lbnQucmVzb2x1dGlvbjsgLy9ob3cgbWFueSBzYW1wbGVzIHBlciBjdWJpYyBiZXppZXIgY2h1bmtcblxuICAgIGxlbmd0aCA9IHNlZ21lbnQudG90YWxMZW5ndGggKiBwcm9ncmVzcztcbiAgICBpID0gc2VnbWVudC5sb29rdXAubGVuZ3RoID8gc2VnbWVudC5sb29rdXBbfn4obGVuZ3RoIC8gc2VnbWVudC5taW5MZW5ndGgpXSB8fCAwIDogX2dldFNhbXBsZUluZGV4KHNhbXBsZXMsIGxlbmd0aCwgcHJvZ3Jlc3MpO1xuICAgIG1pbiA9IGkgPyBzYW1wbGVzW2kgLSAxXSA6IDA7XG4gICAgbWF4ID0gc2FtcGxlc1tpXTtcblxuICAgIGlmIChtYXggPCBsZW5ndGgpIHtcbiAgICAgIG1pbiA9IG1heDtcbiAgICAgIG1heCA9IHNhbXBsZXNbKytpXTtcbiAgICB9XG5cbiAgICB0ID0gMSAvIHJlc29sdXRpb24gKiAoKGxlbmd0aCAtIG1pbikgLyAobWF4IC0gbWluKSArIGkgJSByZXNvbHV0aW9uKTtcbiAgICBpID0gfn4oaSAvIHJlc29sdXRpb24pICogNjtcblxuICAgIGlmIChwdXNoVG9OZXh0SWZBdEVuZCAmJiB0ID09PSAxKSB7XG4gICAgICBpZiAoaSArIDYgPCBzZWdtZW50Lmxlbmd0aCkge1xuICAgICAgICBpICs9IDY7XG4gICAgICAgIHQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzZWdJbmRleCArIDEgPCByYXdQYXRoLmxlbmd0aCkge1xuICAgICAgICBpID0gdCA9IDA7XG4gICAgICAgIHNlZ21lbnQgPSByYXdQYXRoWysrc2VnSW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlY29yYXRlZS50ID0gdDtcbiAgZGVjb3JhdGVlLmkgPSBpO1xuICBkZWNvcmF0ZWUucGF0aCA9IHJhd1BhdGg7XG4gIGRlY29yYXRlZS5zZWdtZW50ID0gc2VnbWVudDtcbiAgZGVjb3JhdGVlLnNlZ0luZGV4ID0gc2VnSW5kZXg7XG4gIHJldHVybiBkZWNvcmF0ZWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbk9uUGF0aChyYXdQYXRoLCBwcm9ncmVzcywgaW5jbHVkZUFuZ2xlLCBwb2ludCkge1xuICB2YXIgc2VnbWVudCA9IHJhd1BhdGhbMF0sXG4gICAgICByZXN1bHQgPSBwb2ludCB8fCB7fSxcbiAgICAgIHNhbXBsZXMsXG4gICAgICByZXNvbHV0aW9uLFxuICAgICAgbGVuZ3RoLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgaSxcbiAgICAgIHQsXG4gICAgICBhLFxuICAgICAgaW52O1xuXG4gIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgcHJvZ3Jlc3MgPSBfd3JhcFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfVxuXG4gIHNlZ21lbnQubG9va3VwIHx8IGNhY2hlUmF3UGF0aE1lYXN1cmVtZW50cyhyYXdQYXRoKTtcblxuICBpZiAocmF3UGF0aC5sZW5ndGggPiAxKSB7XG4gICAgLy9zcGVlZCBvcHRpbWl6YXRpb246IG1vc3Qgb2YgdGhlIHRpbWUsIHRoZXJlJ3Mgb25seSBvbmUgc2VnbWVudCBzbyBza2lwIHRoZSByZWN1cnNpb24uXG4gICAgbGVuZ3RoID0gcmF3UGF0aC50b3RhbExlbmd0aCAqIHByb2dyZXNzO1xuICAgIG1heCA9IGkgPSAwO1xuXG4gICAgd2hpbGUgKChtYXggKz0gcmF3UGF0aFtpKytdLnRvdGFsTGVuZ3RoKSA8IGxlbmd0aCkge1xuICAgICAgc2VnbWVudCA9IHJhd1BhdGhbaV07XG4gICAgfVxuXG4gICAgbWluID0gbWF4IC0gc2VnbWVudC50b3RhbExlbmd0aDtcbiAgICBwcm9ncmVzcyA9IChsZW5ndGggLSBtaW4pIC8gKG1heCAtIG1pbikgfHwgMDtcbiAgfVxuXG4gIHNhbXBsZXMgPSBzZWdtZW50LnNhbXBsZXM7XG4gIHJlc29sdXRpb24gPSBzZWdtZW50LnJlc29sdXRpb247XG4gIGxlbmd0aCA9IHNlZ21lbnQudG90YWxMZW5ndGggKiBwcm9ncmVzcztcbiAgaSA9IHNlZ21lbnQubG9va3VwLmxlbmd0aCA/IHNlZ21lbnQubG9va3VwW3Byb2dyZXNzIDwgMSA/IH5+KGxlbmd0aCAvIHNlZ21lbnQubWluTGVuZ3RoKSA6IHNlZ21lbnQubG9va3VwLmxlbmd0aCAtIDFdIHx8IDAgOiBfZ2V0U2FtcGxlSW5kZXgoc2FtcGxlcywgbGVuZ3RoLCBwcm9ncmVzcyk7XG4gIG1pbiA9IGkgPyBzYW1wbGVzW2kgLSAxXSA6IDA7XG4gIG1heCA9IHNhbXBsZXNbaV07XG5cbiAgaWYgKG1heCA8IGxlbmd0aCkge1xuICAgIG1pbiA9IG1heDtcbiAgICBtYXggPSBzYW1wbGVzWysraV07XG4gIH1cblxuICB0ID0gMSAvIHJlc29sdXRpb24gKiAoKGxlbmd0aCAtIG1pbikgLyAobWF4IC0gbWluKSArIGkgJSByZXNvbHV0aW9uKSB8fCAwO1xuICBpbnYgPSAxIC0gdDtcbiAgaSA9IH5+KGkgLyByZXNvbHV0aW9uKSAqIDY7XG4gIGEgPSBzZWdtZW50W2ldO1xuICByZXN1bHQueCA9IF9yb3VuZCgodCAqIHQgKiAoc2VnbWVudFtpICsgNl0gLSBhKSArIDMgKiBpbnYgKiAodCAqIChzZWdtZW50W2kgKyA0XSAtIGEpICsgaW52ICogKHNlZ21lbnRbaSArIDJdIC0gYSkpKSAqIHQgKyBhKTtcbiAgcmVzdWx0LnkgPSBfcm91bmQoKHQgKiB0ICogKHNlZ21lbnRbaSArIDddIC0gKGEgPSBzZWdtZW50W2kgKyAxXSkpICsgMyAqIGludiAqICh0ICogKHNlZ21lbnRbaSArIDVdIC0gYSkgKyBpbnYgKiAoc2VnbWVudFtpICsgM10gLSBhKSkpICogdCArIGEpO1xuXG4gIGlmIChpbmNsdWRlQW5nbGUpIHtcbiAgICByZXN1bHQuYW5nbGUgPSBzZWdtZW50LnRvdGFsTGVuZ3RoID8gZ2V0Um90YXRpb25BdEJlemllclQoc2VnbWVudCwgaSwgdCA+PSAxID8gMSAtIDFlLTkgOiB0ID8gdCA6IDFlLTkpIDogc2VnbWVudC5hbmdsZSB8fCAwO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0gLy9hcHBsaWVzIGEgbWF0cml4IHRyYW5zZm9ybSB0byBSYXdQYXRoIChvciBhIHNlZ21lbnQgaW4gYSBSYXdQYXRoKSBhbmQgcmV0dXJucyB3aGF0ZXZlciB3YXMgcGFzc2VkIGluIChpdCB0cmFuc2Zvcm1zIHRoZSB2YWx1ZXMgaW4gdGhlIGFycmF5KHMpLCBub3QgYSBjb3B5KS5cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVJhd1BhdGgocmF3UGF0aCwgYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIHZhciBqID0gcmF3UGF0aC5sZW5ndGgsXG4gICAgICBzZWdtZW50LFxuICAgICAgbCxcbiAgICAgIGksXG4gICAgICB4LFxuICAgICAgeTtcblxuICB3aGlsZSAoLS1qID4gLTEpIHtcbiAgICBzZWdtZW50ID0gcmF3UGF0aFtqXTtcbiAgICBsID0gc2VnbWVudC5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgICB4ID0gc2VnbWVudFtpXTtcbiAgICAgIHkgPSBzZWdtZW50W2kgKyAxXTtcbiAgICAgIHNlZ21lbnRbaV0gPSB4ICogYSArIHkgKiBjICsgdHg7XG4gICAgICBzZWdtZW50W2kgKyAxXSA9IHggKiBiICsgeSAqIGQgKyB0eTtcbiAgICB9XG4gIH1cblxuICByYXdQYXRoLl9kaXJ0eSA9IDE7XG4gIHJldHVybiByYXdQYXRoO1xufSAvLyB0cmFuc2xhdGVzIFNWRyBhcmMgZGF0YSBpbnRvIGEgc2VnbWVudCAoY3ViaWMgYmV6aWVycykuIEFuZ2xlIGlzIGluIGRlZ3JlZXMuXG5cbmZ1bmN0aW9uIGFyY1RvU2VnbWVudChsYXN0WCwgbGFzdFksIHJ4LCByeSwgYW5nbGUsIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB4LCB5KSB7XG4gIGlmIChsYXN0WCA9PT0geCAmJiBsYXN0WSA9PT0geSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJ4ID0gX2FicyhyeCk7XG4gIHJ5ID0gX2FicyhyeSk7XG5cbiAgdmFyIGFuZ2xlUmFkID0gYW5nbGUgJSAzNjAgKiBfREVHMlJBRCxcbiAgICAgIGNvc0FuZ2xlID0gX2NvcyhhbmdsZVJhZCksXG4gICAgICBzaW5BbmdsZSA9IF9zaW4oYW5nbGVSYWQpLFxuICAgICAgUEkgPSBNYXRoLlBJLFxuICAgICAgVFdPUEkgPSBQSSAqIDIsXG4gICAgICBkeDIgPSAobGFzdFggLSB4KSAvIDIsXG4gICAgICBkeTIgPSAobGFzdFkgLSB5KSAvIDIsXG4gICAgICB4MSA9IGNvc0FuZ2xlICogZHgyICsgc2luQW5nbGUgKiBkeTIsXG4gICAgICB5MSA9IC1zaW5BbmdsZSAqIGR4MiArIGNvc0FuZ2xlICogZHkyLFxuICAgICAgeDFfc3EgPSB4MSAqIHgxLFxuICAgICAgeTFfc3EgPSB5MSAqIHkxLFxuICAgICAgcmFkaWlDaGVjayA9IHgxX3NxIC8gKHJ4ICogcngpICsgeTFfc3EgLyAocnkgKiByeSk7XG5cbiAgaWYgKHJhZGlpQ2hlY2sgPiAxKSB7XG4gICAgcnggPSBfc3FydChyYWRpaUNoZWNrKSAqIHJ4O1xuICAgIHJ5ID0gX3NxcnQocmFkaWlDaGVjaykgKiByeTtcbiAgfVxuXG4gIHZhciByeF9zcSA9IHJ4ICogcngsXG4gICAgICByeV9zcSA9IHJ5ICogcnksXG4gICAgICBzcSA9IChyeF9zcSAqIHJ5X3NxIC0gcnhfc3EgKiB5MV9zcSAtIHJ5X3NxICogeDFfc3EpIC8gKHJ4X3NxICogeTFfc3EgKyByeV9zcSAqIHgxX3NxKTtcblxuICBpZiAoc3EgPCAwKSB7XG4gICAgc3EgPSAwO1xuICB9XG5cbiAgdmFyIGNvZWYgPSAobGFyZ2VBcmNGbGFnID09PSBzd2VlcEZsYWcgPyAtMSA6IDEpICogX3NxcnQoc3EpLFxuICAgICAgY3gxID0gY29lZiAqIChyeCAqIHkxIC8gcnkpLFxuICAgICAgY3kxID0gY29lZiAqIC0ocnkgKiB4MSAvIHJ4KSxcbiAgICAgIHN4MiA9IChsYXN0WCArIHgpIC8gMixcbiAgICAgIHN5MiA9IChsYXN0WSArIHkpIC8gMixcbiAgICAgIGN4ID0gc3gyICsgKGNvc0FuZ2xlICogY3gxIC0gc2luQW5nbGUgKiBjeTEpLFxuICAgICAgY3kgPSBzeTIgKyAoc2luQW5nbGUgKiBjeDEgKyBjb3NBbmdsZSAqIGN5MSksXG4gICAgICB1eCA9ICh4MSAtIGN4MSkgLyByeCxcbiAgICAgIHV5ID0gKHkxIC0gY3kxKSAvIHJ5LFxuICAgICAgdnggPSAoLXgxIC0gY3gxKSAvIHJ4LFxuICAgICAgdnkgPSAoLXkxIC0gY3kxKSAvIHJ5LFxuICAgICAgdGVtcCA9IHV4ICogdXggKyB1eSAqIHV5LFxuICAgICAgYW5nbGVTdGFydCA9ICh1eSA8IDAgPyAtMSA6IDEpICogTWF0aC5hY29zKHV4IC8gX3NxcnQodGVtcCkpLFxuICAgICAgYW5nbGVFeHRlbnQgPSAodXggKiB2eSAtIHV5ICogdnggPCAwID8gLTEgOiAxKSAqIE1hdGguYWNvcygodXggKiB2eCArIHV5ICogdnkpIC8gX3NxcnQodGVtcCAqICh2eCAqIHZ4ICsgdnkgKiB2eSkpKTtcblxuICBpc05hTihhbmdsZUV4dGVudCkgJiYgKGFuZ2xlRXh0ZW50ID0gUEkpOyAvL3JhcmUgZWRnZSBjYXNlLiBNYXRoLmNvcygtMSkgaXMgTmFOLlxuXG4gIGlmICghc3dlZXBGbGFnICYmIGFuZ2xlRXh0ZW50ID4gMCkge1xuICAgIGFuZ2xlRXh0ZW50IC09IFRXT1BJO1xuICB9IGVsc2UgaWYgKHN3ZWVwRmxhZyAmJiBhbmdsZUV4dGVudCA8IDApIHtcbiAgICBhbmdsZUV4dGVudCArPSBUV09QSTtcbiAgfVxuXG4gIGFuZ2xlU3RhcnQgJT0gVFdPUEk7XG4gIGFuZ2xlRXh0ZW50ICU9IFRXT1BJO1xuXG4gIHZhciBzZWdtZW50cyA9IE1hdGguY2VpbChfYWJzKGFuZ2xlRXh0ZW50KSAvIChUV09QSSAvIDQpKSxcbiAgICAgIHJhd1BhdGggPSBbXSxcbiAgICAgIGFuZ2xlSW5jcmVtZW50ID0gYW5nbGVFeHRlbnQgLyBzZWdtZW50cyxcbiAgICAgIGNvbnRyb2xMZW5ndGggPSA0IC8gMyAqIF9zaW4oYW5nbGVJbmNyZW1lbnQgLyAyKSAvICgxICsgX2NvcyhhbmdsZUluY3JlbWVudCAvIDIpKSxcbiAgICAgIG1hID0gY29zQW5nbGUgKiByeCxcbiAgICAgIG1iID0gc2luQW5nbGUgKiByeCxcbiAgICAgIG1jID0gc2luQW5nbGUgKiAtcnksXG4gICAgICBtZCA9IGNvc0FuZ2xlICogcnksXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzZWdtZW50czsgaSsrKSB7XG4gICAgYW5nbGUgPSBhbmdsZVN0YXJ0ICsgaSAqIGFuZ2xlSW5jcmVtZW50O1xuICAgIHgxID0gX2NvcyhhbmdsZSk7XG4gICAgeTEgPSBfc2luKGFuZ2xlKTtcbiAgICB1eCA9IF9jb3MoYW5nbGUgKz0gYW5nbGVJbmNyZW1lbnQpO1xuICAgIHV5ID0gX3NpbihhbmdsZSk7XG4gICAgcmF3UGF0aC5wdXNoKHgxIC0gY29udHJvbExlbmd0aCAqIHkxLCB5MSArIGNvbnRyb2xMZW5ndGggKiB4MSwgdXggKyBjb250cm9sTGVuZ3RoICogdXksIHV5IC0gY29udHJvbExlbmd0aCAqIHV4LCB1eCwgdXkpO1xuICB9IC8vbm93IHRyYW5zZm9ybSBhY2NvcmRpbmcgdG8gdGhlIGFjdHVhbCBzaXplIG9mIHRoZSBlbGxpcHNlL2FyYyAodGhlIGJlemllcnMgd2VyZSBub3JhbWxpemVkLCBiZXR3ZWVuIDAgYW5kIDEgb24gYSBjaXJjbGUpLlxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHJhd1BhdGgubGVuZ3RoOyBpICs9IDIpIHtcbiAgICB4MSA9IHJhd1BhdGhbaV07XG4gICAgeTEgPSByYXdQYXRoW2kgKyAxXTtcbiAgICByYXdQYXRoW2ldID0geDEgKiBtYSArIHkxICogbWMgKyBjeDtcbiAgICByYXdQYXRoW2kgKyAxXSA9IHgxICogbWIgKyB5MSAqIG1kICsgY3k7XG4gIH1cblxuICByYXdQYXRoW2kgLSAyXSA9IHg7IC8vYWx3YXlzIHNldCB0aGUgZW5kIHRvIGV4YWN0bHkgd2hlcmUgaXQncyBzdXBwb3NlZCB0byBiZVxuXG4gIHJhd1BhdGhbaSAtIDFdID0geTtcbiAgcmV0dXJuIHJhd1BhdGg7XG59IC8vU3BpdHMgYmFjayBhIFJhd1BhdGggd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy4gRWFjaCBzZWdtZW50IHN0YXJ0cyB3aXRoIGEgXCJtb3ZlVG9cIiBjb21tYW5kICh4IGNvb3JkaW5hdGUsIHRoZW4geSkgYW5kIHRoZW4gMiBjb250cm9sIHBvaW50cyAoeCwgeSwgeCwgeSksIHRoZW4gYW5jaG9yLiBUaGUgZ29hbCBpcyB0byBtaW5pbWl6ZSBtZW1vcnkgYW5kIG1heGltaXplIHNwZWVkLlxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1Jhd1BhdGgoZCkge1xuICB2YXIgYSA9IChkICsgXCJcIikucmVwbGFjZShfc2NpZW50aWZpYywgZnVuY3Rpb24gKG0pIHtcbiAgICB2YXIgbiA9ICttO1xuICAgIHJldHVybiBuIDwgMC4wMDAxICYmIG4gPiAtMC4wMDAxID8gMCA6IG47XG4gIH0pLm1hdGNoKF9zdmdQYXRoRXhwKSB8fCBbXSxcbiAgICAgIC8vc29tZSBhdXRob3JpbmcgcHJvZ3JhbXMgc3BpdCBvdXQgdmVyeSBzbWFsbCBudW1iZXJzIGluIHNjaWVudGlmaWMgbm90YXRpb24gbGlrZSBcIjFlLTVcIiwgc28gbWFrZSBzdXJlIHdlIHJvdW5kIHRoYXQgZG93biB0byAwIGZpcnN0LlxuICBwYXRoID0gW10sXG4gICAgICByZWxhdGl2ZVggPSAwLFxuICAgICAgcmVsYXRpdmVZID0gMCxcbiAgICAgIHR3b1RoaXJkcyA9IDIgLyAzLFxuICAgICAgZWxlbWVudHMgPSBhLmxlbmd0aCxcbiAgICAgIHBvaW50cyA9IDAsXG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIkVSUk9SOiBtYWxmb3JtZWQgcGF0aDogXCIgKyBkLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGNvbW1hbmQsXG4gICAgICBpc1JlbGF0aXZlLFxuICAgICAgc2VnbWVudCxcbiAgICAgIHN0YXJ0WCxcbiAgICAgIHN0YXJ0WSxcbiAgICAgIGRpZlgsXG4gICAgICBkaWZZLFxuICAgICAgYmV6aWVycyxcbiAgICAgIHByZXZDb21tYW5kLFxuICAgICAgZmxhZzEsXG4gICAgICBmbGFnMixcbiAgICAgIGxpbmUgPSBmdW5jdGlvbiBsaW5lKHN4LCBzeSwgZXgsIGV5KSB7XG4gICAgZGlmWCA9IChleCAtIHN4KSAvIDM7XG4gICAgZGlmWSA9IChleSAtIHN5KSAvIDM7XG4gICAgc2VnbWVudC5wdXNoKHN4ICsgZGlmWCwgc3kgKyBkaWZZLCBleCAtIGRpZlgsIGV5IC0gZGlmWSwgZXgsIGV5KTtcbiAgfTtcblxuICBpZiAoIWQgfHwgIWlzTmFOKGFbMF0pIHx8IGlzTmFOKGFbMV0pKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50czsgaSsrKSB7XG4gICAgcHJldkNvbW1hbmQgPSBjb21tYW5kO1xuXG4gICAgaWYgKGlzTmFOKGFbaV0pKSB7XG4gICAgICBjb21tYW5kID0gYVtpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaXNSZWxhdGl2ZSA9IGNvbW1hbmQgIT09IGFbaV07IC8vbG93ZXIgY2FzZSBtZWFucyByZWxhdGl2ZVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbW1hbmRzIGxpa2UgXCJDXCIgY2FuIGJlIHN0cnVuZyB0b2dldGhlciB3aXRob3V0IGFueSBuZXcgY29tbWFuZCBjaGFyYWN0ZXJzIGJldHdlZW4uXG4gICAgICBpLS07XG4gICAgfVxuXG4gICAgeCA9ICthW2kgKyAxXTtcbiAgICB5ID0gK2FbaSArIDJdO1xuXG4gICAgaWYgKGlzUmVsYXRpdmUpIHtcbiAgICAgIHggKz0gcmVsYXRpdmVYO1xuICAgICAgeSArPSByZWxhdGl2ZVk7XG4gICAgfVxuXG4gICAgaWYgKCFpKSB7XG4gICAgICBzdGFydFggPSB4O1xuICAgICAgc3RhcnRZID0geTtcbiAgICB9IC8vIFwiTVwiIChtb3ZlKVxuXG5cbiAgICBpZiAoY29tbWFuZCA9PT0gXCJNXCIpIHtcbiAgICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICAvL2lmIHRoZSBwYXRoIGRhdGEgd2FzIGZ1bmt5IGFuZCBqdXN0IGhhZCBhIE0gd2l0aCBubyBhY3R1YWwgZHJhd2luZyBhbnl3aGVyZSwgc2tpcCBpdC5cbiAgICAgICAgICBwYXRoLmxlbmd0aCAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvaW50cyArPSBzZWdtZW50Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZWxhdGl2ZVggPSBzdGFydFggPSB4O1xuICAgICAgcmVsYXRpdmVZID0gc3RhcnRZID0geTtcbiAgICAgIHNlZ21lbnQgPSBbeCwgeV07XG4gICAgICBwYXRoLnB1c2goc2VnbWVudCk7XG4gICAgICBpICs9IDI7XG4gICAgICBjb21tYW5kID0gXCJMXCI7IC8vYW4gXCJNXCIgd2l0aCBtb3JlIHRoYW4gMiB2YWx1ZXMgZ2V0cyBpbnRlcnByZXRlZCBhcyBcImxpbmVUb1wiIGNvbW1hbmRzIChcIkxcIikuXG4gICAgICAvLyBcIkNcIiAoY3ViaWMgYmV6aWVyKVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJDXCIpIHtcbiAgICAgIGlmICghc2VnbWVudCkge1xuICAgICAgICBzZWdtZW50ID0gWzAsIDBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVsYXRpdmUpIHtcbiAgICAgICAgcmVsYXRpdmVYID0gcmVsYXRpdmVZID0gMDtcbiAgICAgIH0gLy9ub3RlOiBcIioxXCIgaXMganVzdCBhIGZhc3Qvc2hvcnQgd2F5IHRvIGNhc3QgdGhlIHZhbHVlIGFzIGEgTnVtYmVyLiBXQUFBWSBmYXN0ZXIgaW4gQ2hyb21lLCBzbGlnaHRseSBzbG93ZXIgaW4gRmlyZWZveC5cblxuXG4gICAgICBzZWdtZW50LnB1c2goeCwgeSwgcmVsYXRpdmVYICsgYVtpICsgM10gKiAxLCByZWxhdGl2ZVkgKyBhW2kgKyA0XSAqIDEsIHJlbGF0aXZlWCArPSBhW2kgKyA1XSAqIDEsIHJlbGF0aXZlWSArPSBhW2kgKyA2XSAqIDEpO1xuICAgICAgaSArPSA2OyAvLyBcIlNcIiAoY29udGludWF0aW9uIG9mIGN1YmljIGJlemllcilcbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiU1wiKSB7XG4gICAgICBkaWZYID0gcmVsYXRpdmVYO1xuICAgICAgZGlmWSA9IHJlbGF0aXZlWTtcblxuICAgICAgaWYgKHByZXZDb21tYW5kID09PSBcIkNcIiB8fCBwcmV2Q29tbWFuZCA9PT0gXCJTXCIpIHtcbiAgICAgICAgZGlmWCArPSByZWxhdGl2ZVggLSBzZWdtZW50W3NlZ21lbnQubGVuZ3RoIC0gNF07XG4gICAgICAgIGRpZlkgKz0gcmVsYXRpdmVZIC0gc2VnbWVudFtzZWdtZW50Lmxlbmd0aCAtIDNdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVsYXRpdmUpIHtcbiAgICAgICAgcmVsYXRpdmVYID0gcmVsYXRpdmVZID0gMDtcbiAgICAgIH1cblxuICAgICAgc2VnbWVudC5wdXNoKGRpZlgsIGRpZlksIHgsIHksIHJlbGF0aXZlWCArPSBhW2kgKyAzXSAqIDEsIHJlbGF0aXZlWSArPSBhW2kgKyA0XSAqIDEpO1xuICAgICAgaSArPSA0OyAvLyBcIlFcIiAocXVhZHJhdGljIGJlemllcilcbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiUVwiKSB7XG4gICAgICBkaWZYID0gcmVsYXRpdmVYICsgKHggLSByZWxhdGl2ZVgpICogdHdvVGhpcmRzO1xuICAgICAgZGlmWSA9IHJlbGF0aXZlWSArICh5IC0gcmVsYXRpdmVZKSAqIHR3b1RoaXJkcztcblxuICAgICAgaWYgKCFpc1JlbGF0aXZlKSB7XG4gICAgICAgIHJlbGF0aXZlWCA9IHJlbGF0aXZlWSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJlbGF0aXZlWCArPSBhW2kgKyAzXSAqIDE7XG4gICAgICByZWxhdGl2ZVkgKz0gYVtpICsgNF0gKiAxO1xuICAgICAgc2VnbWVudC5wdXNoKGRpZlgsIGRpZlksIHJlbGF0aXZlWCArICh4IC0gcmVsYXRpdmVYKSAqIHR3b1RoaXJkcywgcmVsYXRpdmVZICsgKHkgLSByZWxhdGl2ZVkpICogdHdvVGhpcmRzLCByZWxhdGl2ZVgsIHJlbGF0aXZlWSk7XG4gICAgICBpICs9IDQ7IC8vIFwiVFwiIChjb250aW51YXRpb24gb2YgcXVhZHJhdGljIGJlemllcilcbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiVFwiKSB7XG4gICAgICBkaWZYID0gcmVsYXRpdmVYIC0gc2VnbWVudFtzZWdtZW50Lmxlbmd0aCAtIDRdO1xuICAgICAgZGlmWSA9IHJlbGF0aXZlWSAtIHNlZ21lbnRbc2VnbWVudC5sZW5ndGggLSAzXTtcbiAgICAgIHNlZ21lbnQucHVzaChyZWxhdGl2ZVggKyBkaWZYLCByZWxhdGl2ZVkgKyBkaWZZLCB4ICsgKHJlbGF0aXZlWCArIGRpZlggKiAxLjUgLSB4KSAqIHR3b1RoaXJkcywgeSArIChyZWxhdGl2ZVkgKyBkaWZZICogMS41IC0geSkgKiB0d29UaGlyZHMsIHJlbGF0aXZlWCA9IHgsIHJlbGF0aXZlWSA9IHkpO1xuICAgICAgaSArPSAyOyAvLyBcIkhcIiAoaG9yaXpvbnRhbCBsaW5lKVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJIXCIpIHtcbiAgICAgIGxpbmUocmVsYXRpdmVYLCByZWxhdGl2ZVksIHJlbGF0aXZlWCA9IHgsIHJlbGF0aXZlWSk7XG4gICAgICBpICs9IDE7IC8vIFwiVlwiICh2ZXJ0aWNhbCBsaW5lKVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJWXCIpIHtcbiAgICAgIC8vYWRqdXN0IHZhbHVlcyBiZWNhdXNlIHRoZSBmaXJzdCAoYW5kIG9ubHkgb25lKSBpc24ndCB4IGluIHRoaXMgY2FzZSwgaXQncyB5LlxuICAgICAgbGluZShyZWxhdGl2ZVgsIHJlbGF0aXZlWSwgcmVsYXRpdmVYLCByZWxhdGl2ZVkgPSB4ICsgKGlzUmVsYXRpdmUgPyByZWxhdGl2ZVkgLSByZWxhdGl2ZVggOiAwKSk7XG4gICAgICBpICs9IDE7IC8vIFwiTFwiIChsaW5lKSBvciBcIlpcIiAoY2xvc2UpXG4gICAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcIkxcIiB8fCBjb21tYW5kID09PSBcIlpcIikge1xuICAgICAgaWYgKGNvbW1hbmQgPT09IFwiWlwiKSB7XG4gICAgICAgIHggPSBzdGFydFg7XG4gICAgICAgIHkgPSBzdGFydFk7XG4gICAgICAgIHNlZ21lbnQuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQgPT09IFwiTFwiIHx8IF9hYnMocmVsYXRpdmVYIC0geCkgPiAwLjUgfHwgX2FicyhyZWxhdGl2ZVkgLSB5KSA+IDAuNSkge1xuICAgICAgICBsaW5lKHJlbGF0aXZlWCwgcmVsYXRpdmVZLCB4LCB5KTtcblxuICAgICAgICBpZiAoY29tbWFuZCA9PT0gXCJMXCIpIHtcbiAgICAgICAgICBpICs9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVsYXRpdmVYID0geDtcbiAgICAgIHJlbGF0aXZlWSA9IHk7IC8vIFwiQVwiIChhcmMpXG4gICAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcIkFcIikge1xuICAgICAgZmxhZzEgPSBhW2kgKyA0XTtcbiAgICAgIGZsYWcyID0gYVtpICsgNV07XG4gICAgICBkaWZYID0gYVtpICsgNl07XG4gICAgICBkaWZZID0gYVtpICsgN107XG4gICAgICBqID0gNztcblxuICAgICAgaWYgKGZsYWcxLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gZm9yIGNhc2VzIHdoZW4gdGhlIGZsYWdzIGFyZSBtZXJnZWQsIGxpa2UgXCJhOCA4IDAgMDE4IDhcIiAodGhlIDAgYW5kIDEgZmxhZ3MgYXJlIFdJVEggdGhlIHggdmFsdWUgb2YgOCwgYnV0IGl0IGNvdWxkIGFsc28gYmUgXCJhOCA4IDAgMDEtOCA4XCIgc28gaXQgbWF5IGluY2x1ZGUgeCBvciBub3QpXG4gICAgICAgIGlmIChmbGFnMS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgZGlmWSA9IGRpZlg7XG4gICAgICAgICAgZGlmWCA9IGZsYWcyO1xuICAgICAgICAgIGotLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaWZZID0gZmxhZzI7XG4gICAgICAgICAgZGlmWCA9IGZsYWcxLnN1YnN0cigyKTtcbiAgICAgICAgICBqIC09IDI7XG4gICAgICAgIH1cblxuICAgICAgICBmbGFnMiA9IGZsYWcxLmNoYXJBdCgxKTtcbiAgICAgICAgZmxhZzEgPSBmbGFnMS5jaGFyQXQoMCk7XG4gICAgICB9XG5cbiAgICAgIGJlemllcnMgPSBhcmNUb1NlZ21lbnQocmVsYXRpdmVYLCByZWxhdGl2ZVksICthW2kgKyAxXSwgK2FbaSArIDJdLCArYVtpICsgM10sICtmbGFnMSwgK2ZsYWcyLCAoaXNSZWxhdGl2ZSA/IHJlbGF0aXZlWCA6IDApICsgZGlmWCAqIDEsIChpc1JlbGF0aXZlID8gcmVsYXRpdmVZIDogMCkgKyBkaWZZICogMSk7XG4gICAgICBpICs9IGo7XG5cbiAgICAgIGlmIChiZXppZXJzKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBiZXppZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudC5wdXNoKGJlemllcnNbal0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbGF0aXZlWCA9IHNlZ21lbnRbc2VnbWVudC5sZW5ndGggLSAyXTtcbiAgICAgIHJlbGF0aXZlWSA9IHNlZ21lbnRbc2VnbWVudC5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBpID0gc2VnbWVudC5sZW5ndGg7XG5cbiAgaWYgKGkgPCA2KSB7XG4gICAgLy9pbiBjYXNlIHRoZXJlJ3Mgb2RkIFNWRyBsaWtlIGEgTTAsMCBjb21tYW5kIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICBwYXRoLnBvcCgpO1xuICAgIGkgPSAwO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRbMF0gPT09IHNlZ21lbnRbaSAtIDJdICYmIHNlZ21lbnRbMV0gPT09IHNlZ21lbnRbaSAtIDFdKSB7XG4gICAgc2VnbWVudC5jbG9zZWQgPSB0cnVlO1xuICB9XG5cbiAgcGF0aC50b3RhbFBvaW50cyA9IHBvaW50cyArIGk7XG4gIHJldHVybiBwYXRoO1xufSAvL3BvcHVsYXRlcyB0aGUgcG9pbnRzIGFycmF5IGluIGFsdGVybmF0aW5nIHgveSB2YWx1ZXMgKGxpa2UgW3gsIHksIHgsIHkuLi5dIGluc3RlYWQgb2YgaW5kaXZpZHVhbCBwb2ludCBvYmplY3RzIFt7eCwgeX0sIHt4LCB5fS4uLl0gdG8gY29uc2VydmUgbWVtb3J5IGFuZCBzdGF5IGluIGxpbmUgd2l0aCBob3cgd2UncmUgaGFuZGxpbmcgc2VnbWVudCBhcnJheXNcblxuZXhwb3J0IGZ1bmN0aW9uIGJlemllclRvUG9pbnRzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCwgdGhyZXNob2xkLCBwb2ludHMsIGluZGV4KSB7XG4gIHZhciB4MTIgPSAoeDEgKyB4MikgLyAyLFxuICAgICAgeTEyID0gKHkxICsgeTIpIC8gMixcbiAgICAgIHgyMyA9ICh4MiArIHgzKSAvIDIsXG4gICAgICB5MjMgPSAoeTIgKyB5MykgLyAyLFxuICAgICAgeDM0ID0gKHgzICsgeDQpIC8gMixcbiAgICAgIHkzNCA9ICh5MyArIHk0KSAvIDIsXG4gICAgICB4MTIzID0gKHgxMiArIHgyMykgLyAyLFxuICAgICAgeTEyMyA9ICh5MTIgKyB5MjMpIC8gMixcbiAgICAgIHgyMzQgPSAoeDIzICsgeDM0KSAvIDIsXG4gICAgICB5MjM0ID0gKHkyMyArIHkzNCkgLyAyLFxuICAgICAgeDEyMzQgPSAoeDEyMyArIHgyMzQpIC8gMixcbiAgICAgIHkxMjM0ID0gKHkxMjMgKyB5MjM0KSAvIDIsXG4gICAgICBkeCA9IHg0IC0geDEsXG4gICAgICBkeSA9IHk0IC0geTEsXG4gICAgICBkMiA9IF9hYnMoKHgyIC0geDQpICogZHkgLSAoeTIgLSB5NCkgKiBkeCksXG4gICAgICBkMyA9IF9hYnMoKHgzIC0geDQpICogZHkgLSAoeTMgLSB5NCkgKiBkeCksXG4gICAgICBsZW5ndGg7XG5cbiAgaWYgKCFwb2ludHMpIHtcbiAgICBwb2ludHMgPSBbeDEsIHkxLCB4NCwgeTRdO1xuICAgIGluZGV4ID0gMjtcbiAgfVxuXG4gIHBvaW50cy5zcGxpY2UoaW5kZXggfHwgcG9pbnRzLmxlbmd0aCAtIDIsIDAsIHgxMjM0LCB5MTIzNCk7XG5cbiAgaWYgKChkMiArIGQzKSAqIChkMiArIGQzKSA+IHRocmVzaG9sZCAqIChkeCAqIGR4ICsgZHkgKiBkeSkpIHtcbiAgICBsZW5ndGggPSBwb2ludHMubGVuZ3RoO1xuICAgIGJlemllclRvUG9pbnRzKHgxLCB5MSwgeDEyLCB5MTIsIHgxMjMsIHkxMjMsIHgxMjM0LCB5MTIzNCwgdGhyZXNob2xkLCBwb2ludHMsIGluZGV4KTtcbiAgICBiZXppZXJUb1BvaW50cyh4MTIzNCwgeTEyMzQsIHgyMzQsIHkyMzQsIHgzNCwgeTM0LCB4NCwgeTQsIHRocmVzaG9sZCwgcG9pbnRzLCBpbmRleCArIDIgKyAocG9pbnRzLmxlbmd0aCAtIGxlbmd0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cbi8qXG5mdW5jdGlvbiBnZXRBbmdsZUJldHdlZW5Qb2ludHMoeDAsIHkwLCB4MSwgeTEsIHgyLCB5MikgeyAvL2FuZ2xlIGJldHdlZW4gMyBwb2ludHMgaW4gcmFkaWFuc1xuXHR2YXIgZHgxID0geDEgLSB4MCxcblx0XHRkeTEgPSB5MSAtIHkwLFxuXHRcdGR4MiA9IHgyIC0geDEsXG5cdFx0ZHkyID0geTIgLSB5MSxcblx0XHRkeDMgPSB4MiAtIHgwLFxuXHRcdGR5MyA9IHkyIC0geTAsXG5cdFx0YSA9IGR4MSAqIGR4MSArIGR5MSAqIGR5MSxcblx0XHRiID0gZHgyICogZHgyICsgZHkyICogZHkyLFxuXHRcdGMgPSBkeDMgKiBkeDMgKyBkeTMgKiBkeTM7XG5cdHJldHVybiBNYXRoLmFjb3MoIChhICsgYiAtIGMpIC8gX3NxcnQoNCAqIGEgKiBiKSApO1xufSxcbiovXG4vL3BvaW50c1RvU2VnbWVudCgpIGRvZXNuJ3QgaGFuZGxlIGZsYXQgY29vcmRpbmF0ZXMgKHdoZXJlIHkgaXMgYWx3YXlzIDApIHRoZSB3YXkgd2UgbmVlZCAodGhlIHJlc3VsdGluZyBjb250cm9sIHBvaW50cyBhcmUgYWx3YXlzIHJpZ2h0IG9uIHRvcCBvZiB0aGUgYW5jaG9ycyksIHNvIHRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IG1ha2VzIHRoZSBjb250cm9sIHBvaW50cyBnbyBkaXJlY3RseSB1cCBhbmQgZG93biwgdmFyeWluZyBpbiBsZW5ndGggYmFzZWQgb24gdGhlIGN1cnZpbmVzcyAobW9yZSBjdXJ2eSwgZnVydGhlciBjb250cm9sIHBvaW50cylcblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRQb2ludHNUb1NlZ21lbnQocG9pbnRzLCBjdXJ2aW5lc3MpIHtcbiAgaWYgKGN1cnZpbmVzcyA9PT0gdm9pZCAwKSB7XG4gICAgY3VydmluZXNzID0gMTtcbiAgfVxuXG4gIHZhciB4ID0gcG9pbnRzWzBdLFxuICAgICAgeSA9IDAsXG4gICAgICBzZWdtZW50ID0gW3gsIHldLFxuICAgICAgaSA9IDI7XG5cbiAgZm9yICg7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzZWdtZW50LnB1c2goeCwgeSwgcG9pbnRzW2ldLCB5ID0gKHBvaW50c1tpXSAtIHgpICogY3VydmluZXNzIC8gMiwgeCA9IHBvaW50c1tpXSwgLXkpO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnQ7XG59IC8vcG9pbnRzIGlzIGFuIGFycmF5IG9mIHgveSBwb2ludHMsIGxpa2UgW3gsIHksIHgsIHksIHgsIHldXG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludHNUb1NlZ21lbnQocG9pbnRzLCBjdXJ2aW5lc3MpIHtcbiAgLy9wb2ludHMgPSBzaW1wbGlmeVBvaW50cyhwb2ludHMsIHRvbGVyYW5jZSk7XG4gIF9hYnMocG9pbnRzWzBdIC0gcG9pbnRzWzJdKSA8IDFlLTQgJiYgX2Ficyhwb2ludHNbMV0gLSBwb2ludHNbM10pIDwgMWUtNCAmJiAocG9pbnRzID0gcG9pbnRzLnNsaWNlKDIpKTsgLy8gaWYgdGhlIGZpcnN0IHR3byBwb2ludHMgYXJlIHN1cGVyIGNsb3NlLCBkdW1wIHRoZSBmaXJzdCBvbmUuXG5cbiAgdmFyIGwgPSBwb2ludHMubGVuZ3RoIC0gMixcbiAgICAgIHggPSArcG9pbnRzWzBdLFxuICAgICAgeSA9ICtwb2ludHNbMV0sXG4gICAgICBuZXh0WCA9ICtwb2ludHNbMl0sXG4gICAgICBuZXh0WSA9ICtwb2ludHNbM10sXG4gICAgICBzZWdtZW50ID0gW3gsIHksIHgsIHldLFxuICAgICAgZHgyID0gbmV4dFggLSB4LFxuICAgICAgZHkyID0gbmV4dFkgLSB5LFxuICAgICAgY2xvc2VkID0gTWF0aC5hYnMocG9pbnRzW2xdIC0geCkgPCAwLjAwMSAmJiBNYXRoLmFicyhwb2ludHNbbCArIDFdIC0geSkgPCAwLjAwMSxcbiAgICAgIHByZXZYLFxuICAgICAgcHJldlksXG4gICAgICBpLFxuICAgICAgZHgxLFxuICAgICAgZHkxLFxuICAgICAgcjEsXG4gICAgICByMixcbiAgICAgIHIzLFxuICAgICAgdGwsXG4gICAgICBteDEsXG4gICAgICBteDIsXG4gICAgICBteG0sXG4gICAgICBteTEsXG4gICAgICBteTIsXG4gICAgICBteW07XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIC8vIGlmIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBhcmUgYmFzaWNhbGx5IG9uIHRvcCBvZiBlYWNoIG90aGVyLCBjbG9zZSB0aGUgc2VnbWVudCBieSBhZGRpbmcgdGhlIDJuZCBwb2ludCB0byB0aGUgZW5kLCBhbmQgdGhlIDJuZC10by1sYXN0IHBvaW50IHRvIHRoZSBiZWdpbm5pbmcgKHdlJ2xsIHJlbW92ZSB0aGVtIGF0IHRoZSBlbmQsIGJ1dCB0aGlzIGFsbG93cyB0aGUgY3VydmF0dXJlIHRvIGxvb2sgcGVyZmVjdClcbiAgICBwb2ludHMucHVzaChuZXh0WCwgbmV4dFkpO1xuICAgIG5leHRYID0geDtcbiAgICBuZXh0WSA9IHk7XG4gICAgeCA9IHBvaW50c1tsIC0gMl07XG4gICAgeSA9IHBvaW50c1tsIC0gMV07XG4gICAgcG9pbnRzLnVuc2hpZnQoeCwgeSk7XG4gICAgbCArPSA0O1xuICB9XG5cbiAgY3VydmluZXNzID0gY3VydmluZXNzIHx8IGN1cnZpbmVzcyA9PT0gMCA/ICtjdXJ2aW5lc3MgOiAxO1xuXG4gIGZvciAoaSA9IDI7IGkgPCBsOyBpICs9IDIpIHtcbiAgICBwcmV2WCA9IHg7XG4gICAgcHJldlkgPSB5O1xuICAgIHggPSBuZXh0WDtcbiAgICB5ID0gbmV4dFk7XG4gICAgbmV4dFggPSArcG9pbnRzW2kgKyAyXTtcbiAgICBuZXh0WSA9ICtwb2ludHNbaSArIDNdO1xuXG4gICAgaWYgKHggPT09IG5leHRYICYmIHkgPT09IG5leHRZKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkeDEgPSBkeDI7XG4gICAgZHkxID0gZHkyO1xuICAgIGR4MiA9IG5leHRYIC0geDtcbiAgICBkeTIgPSBuZXh0WSAtIHk7XG4gICAgcjEgPSBfc3FydChkeDEgKiBkeDEgKyBkeTEgKiBkeTEpOyAvLyByMSwgcjIsIGFuZCByMyBjb3JyZWxhdGUgeCBhbmQgeSAoYW5kIHogaW4gdGhlIGZ1dHVyZSkuIEJhc2ljYWxseSAyRCBvciAzRCBoeXBvdGVudXNlXG5cbiAgICByMiA9IF9zcXJ0KGR4MiAqIGR4MiArIGR5MiAqIGR5Mik7XG4gICAgcjMgPSBfc3FydChNYXRoLnBvdyhkeDIgLyByMiArIGR4MSAvIHIxLCAyKSArIE1hdGgucG93KGR5MiAvIHIyICsgZHkxIC8gcjEsIDIpKTtcbiAgICB0bCA9IChyMSArIHIyKSAqIGN1cnZpbmVzcyAqIDAuMjUgLyByMztcbiAgICBteDEgPSB4IC0gKHggLSBwcmV2WCkgKiAocjEgPyB0bCAvIHIxIDogMCk7XG4gICAgbXgyID0geCArIChuZXh0WCAtIHgpICogKHIyID8gdGwgLyByMiA6IDApO1xuICAgIG14bSA9IHggLSAobXgxICsgKChteDIgLSBteDEpICogKHIxICogMyAvIChyMSArIHIyKSArIDAuNSkgLyA0IHx8IDApKTtcbiAgICBteTEgPSB5IC0gKHkgLSBwcmV2WSkgKiAocjEgPyB0bCAvIHIxIDogMCk7XG4gICAgbXkyID0geSArIChuZXh0WSAtIHkpICogKHIyID8gdGwgLyByMiA6IDApO1xuICAgIG15bSA9IHkgLSAobXkxICsgKChteTIgLSBteTEpICogKHIxICogMyAvIChyMSArIHIyKSArIDAuNSkgLyA0IHx8IDApKTtcblxuICAgIGlmICh4ICE9PSBwcmV2WCB8fCB5ICE9PSBwcmV2WSkge1xuICAgICAgc2VnbWVudC5wdXNoKF9yb3VuZChteDEgKyBteG0pLCAvLyBmaXJzdCBjb250cm9sIHBvaW50XG4gICAgICBfcm91bmQobXkxICsgbXltKSwgX3JvdW5kKHgpLCAvLyBhbmNob3JcbiAgICAgIF9yb3VuZCh5KSwgX3JvdW5kKG14MiArIG14bSksIC8vIHNlY29uZCBjb250cm9sIHBvaW50XG4gICAgICBfcm91bmQobXkyICsgbXltKSk7XG4gICAgfVxuICB9XG5cbiAgeCAhPT0gbmV4dFggfHwgeSAhPT0gbmV4dFkgfHwgc2VnbWVudC5sZW5ndGggPCA0ID8gc2VnbWVudC5wdXNoKF9yb3VuZChuZXh0WCksIF9yb3VuZChuZXh0WSksIF9yb3VuZChuZXh0WCksIF9yb3VuZChuZXh0WSkpIDogc2VnbWVudC5sZW5ndGggLT0gMjtcblxuICBpZiAoc2VnbWVudC5sZW5ndGggPT09IDIpIHtcbiAgICAvLyBvbmx5IG9uZSBwb2ludCFcbiAgICBzZWdtZW50LnB1c2goeCwgeSwgeCwgeSwgeCwgeSk7XG4gIH0gZWxzZSBpZiAoY2xvc2VkKSB7XG4gICAgc2VnbWVudC5zcGxpY2UoMCwgNik7XG4gICAgc2VnbWVudC5sZW5ndGggPSBzZWdtZW50Lmxlbmd0aCAtIDY7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudDtcbn0gLy9yZXR1cm5zIHRoZSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYW4geC95IGNvb3JkaW5hdGUgYW5kIGEgc2VnbWVudCBiZXR3ZWVuIHgxL3kxIGFuZCB4Mi95MlxuXG5mdW5jdGlvbiBwb2ludFRvU2VnRGlzdCh4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICB2YXIgZHggPSB4MiAtIHgxLFxuICAgICAgZHkgPSB5MiAtIHkxLFxuICAgICAgdDtcblxuICBpZiAoZHggfHwgZHkpIHtcbiAgICB0ID0gKCh4IC0geDEpICogZHggKyAoeSAtIHkxKSAqIGR5KSAvIChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICBpZiAodCA+IDEpIHtcbiAgICAgIHgxID0geDI7XG4gICAgICB5MSA9IHkyO1xuICAgIH0gZWxzZSBpZiAodCA+IDApIHtcbiAgICAgIHgxICs9IGR4ICogdDtcbiAgICAgIHkxICs9IGR5ICogdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5wb3coeCAtIHgxLCAyKSArIE1hdGgucG93KHkgLSB5MSwgMik7XG59XG5cbmZ1bmN0aW9uIHNpbXBsaWZ5U3RlcChwb2ludHMsIGZpcnN0LCBsYXN0LCB0b2xlcmFuY2UsIHNpbXBsaWZpZWQpIHtcbiAgdmFyIG1heFNxRGlzdCA9IHRvbGVyYW5jZSxcbiAgICAgIGZpcnN0WCA9IHBvaW50c1tmaXJzdF0sXG4gICAgICBmaXJzdFkgPSBwb2ludHNbZmlyc3QgKyAxXSxcbiAgICAgIGxhc3RYID0gcG9pbnRzW2xhc3RdLFxuICAgICAgbGFzdFkgPSBwb2ludHNbbGFzdCArIDFdLFxuICAgICAgaW5kZXgsXG4gICAgICBpLFxuICAgICAgZDtcblxuICBmb3IgKGkgPSBmaXJzdCArIDI7IGkgPCBsYXN0OyBpICs9IDIpIHtcbiAgICBkID0gcG9pbnRUb1NlZ0Rpc3QocG9pbnRzW2ldLCBwb2ludHNbaSArIDFdLCBmaXJzdFgsIGZpcnN0WSwgbGFzdFgsIGxhc3RZKTtcblxuICAgIGlmIChkID4gbWF4U3FEaXN0KSB7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBtYXhTcURpc3QgPSBkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXhTcURpc3QgPiB0b2xlcmFuY2UpIHtcbiAgICBpbmRleCAtIGZpcnN0ID4gMiAmJiBzaW1wbGlmeVN0ZXAocG9pbnRzLCBmaXJzdCwgaW5kZXgsIHRvbGVyYW5jZSwgc2ltcGxpZmllZCk7XG4gICAgc2ltcGxpZmllZC5wdXNoKHBvaW50c1tpbmRleF0sIHBvaW50c1tpbmRleCArIDFdKTtcbiAgICBsYXN0IC0gaW5kZXggPiAyICYmIHNpbXBsaWZ5U3RlcChwb2ludHMsIGluZGV4LCBsYXN0LCB0b2xlcmFuY2UsIHNpbXBsaWZpZWQpO1xuICB9XG59IC8vcG9pbnRzIGlzIGFuIGFycmF5IG9mIHgveSB2YWx1ZXMgbGlrZSBbeCwgeSwgeCwgeSwgeCwgeV1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlQb2ludHMocG9pbnRzLCB0b2xlcmFuY2UpIHtcbiAgdmFyIHByZXZYID0gcGFyc2VGbG9hdChwb2ludHNbMF0pLFxuICAgICAgcHJldlkgPSBwYXJzZUZsb2F0KHBvaW50c1sxXSksXG4gICAgICB0ZW1wID0gW3ByZXZYLCBwcmV2WV0sXG4gICAgICBsID0gcG9pbnRzLmxlbmd0aCAtIDIsXG4gICAgICBpLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBkeCxcbiAgICAgIGR5LFxuICAgICAgcmVzdWx0LFxuICAgICAgbGFzdDtcbiAgdG9sZXJhbmNlID0gTWF0aC5wb3codG9sZXJhbmNlIHx8IDEsIDIpO1xuXG4gIGZvciAoaSA9IDI7IGkgPCBsOyBpICs9IDIpIHtcbiAgICB4ID0gcGFyc2VGbG9hdChwb2ludHNbaV0pO1xuICAgIHkgPSBwYXJzZUZsb2F0KHBvaW50c1tpICsgMV0pO1xuICAgIGR4ID0gcHJldlggLSB4O1xuICAgIGR5ID0gcHJldlkgLSB5O1xuXG4gICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gdG9sZXJhbmNlKSB7XG4gICAgICB0ZW1wLnB1c2goeCwgeSk7XG4gICAgICBwcmV2WCA9IHg7XG4gICAgICBwcmV2WSA9IHk7XG4gICAgfVxuICB9XG5cbiAgdGVtcC5wdXNoKHBhcnNlRmxvYXQocG9pbnRzW2xdKSwgcGFyc2VGbG9hdChwb2ludHNbbCArIDFdKSk7XG4gIGxhc3QgPSB0ZW1wLmxlbmd0aCAtIDI7XG4gIHJlc3VsdCA9IFt0ZW1wWzBdLCB0ZW1wWzFdXTtcbiAgc2ltcGxpZnlTdGVwKHRlbXAsIDAsIGxhc3QsIHRvbGVyYW5jZSwgcmVzdWx0KTtcbiAgcmVzdWx0LnB1c2godGVtcFtsYXN0XSwgdGVtcFtsYXN0ICsgMV0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRDbG9zZXN0UHJvZ3Jlc3NPbkJlemllcihpdGVyYXRpb25zLCBweCwgcHksIHN0YXJ0LCBlbmQsIHNsaWNlcywgeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG4gIHZhciBpbmMgPSAoZW5kIC0gc3RhcnQpIC8gc2xpY2VzLFxuICAgICAgYmVzdCA9IDAsXG4gICAgICB0ID0gc3RhcnQsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGQsXG4gICAgICBkeCxcbiAgICAgIGR5LFxuICAgICAgaW52O1xuICBfYmVzdERpc3RhbmNlID0gX2xhcmdlTnVtO1xuXG4gIHdoaWxlICh0IDw9IGVuZCkge1xuICAgIGludiA9IDEgLSB0O1xuICAgIHggPSBpbnYgKiBpbnYgKiBpbnYgKiB4MCArIDMgKiBpbnYgKiBpbnYgKiB0ICogeDEgKyAzICogaW52ICogdCAqIHQgKiB4MiArIHQgKiB0ICogdCAqIHgzO1xuICAgIHkgPSBpbnYgKiBpbnYgKiBpbnYgKiB5MCArIDMgKiBpbnYgKiBpbnYgKiB0ICogeTEgKyAzICogaW52ICogdCAqIHQgKiB5MiArIHQgKiB0ICogdCAqIHkzO1xuICAgIGR4ID0geCAtIHB4O1xuICAgIGR5ID0geSAtIHB5O1xuICAgIGQgPSBkeCAqIGR4ICsgZHkgKiBkeTtcblxuICAgIGlmIChkIDwgX2Jlc3REaXN0YW5jZSkge1xuICAgICAgX2Jlc3REaXN0YW5jZSA9IGQ7XG4gICAgICBiZXN0ID0gdDtcbiAgICB9XG5cbiAgICB0ICs9IGluYztcbiAgfVxuXG4gIHJldHVybiBpdGVyYXRpb25zID4gMSA/IGdldENsb3Nlc3RQcm9ncmVzc09uQmV6aWVyKGl0ZXJhdGlvbnMgLSAxLCBweCwgcHksIE1hdGgubWF4KGJlc3QgLSBpbmMsIDApLCBNYXRoLm1pbihiZXN0ICsgaW5jLCAxKSwgc2xpY2VzLCB4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIDogYmVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3REYXRhKHJhd1BhdGgsIHgsIHksIHNsaWNlcykge1xuICAvL3JldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGNsb3Nlc3QgaiwgaSwgYW5kIHQgKGogaXMgdGhlIHNlZ21lbnQgaW5kZXgsIGkgaXMgdGhlIGluZGV4IG9mIHRoZSBwb2ludCBpbiB0aGF0IHNlZ21lbnQsIGFuZCB0IGlzIHRoZSB0aW1lL3Byb2dyZXNzIGFsb25nIHRoYXQgYmV6aWVyKVxuICB2YXIgY2xvc2VzdCA9IHtcbiAgICBqOiAwLFxuICAgIGk6IDAsXG4gICAgdDogMFxuICB9LFxuICAgICAgYmVzdERpc3RhbmNlID0gX2xhcmdlTnVtLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICB0LFxuICAgICAgc2VnbWVudDtcblxuICBmb3IgKGogPSAwOyBqIDwgcmF3UGF0aC5sZW5ndGg7IGorKykge1xuICAgIHNlZ21lbnQgPSByYXdQYXRoW2pdO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNlZ21lbnQubGVuZ3RoOyBpICs9IDYpIHtcbiAgICAgIHQgPSBnZXRDbG9zZXN0UHJvZ3Jlc3NPbkJlemllcigxLCB4LCB5LCAwLCAxLCBzbGljZXMgfHwgMjAsIHNlZ21lbnRbaV0sIHNlZ21lbnRbaSArIDFdLCBzZWdtZW50W2kgKyAyXSwgc2VnbWVudFtpICsgM10sIHNlZ21lbnRbaSArIDRdLCBzZWdtZW50W2kgKyA1XSwgc2VnbWVudFtpICsgNl0sIHNlZ21lbnRbaSArIDddKTtcblxuICAgICAgaWYgKGJlc3REaXN0YW5jZSA+IF9iZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgYmVzdERpc3RhbmNlID0gX2Jlc3REaXN0YW5jZTtcbiAgICAgICAgY2xvc2VzdC5qID0gajtcbiAgICAgICAgY2xvc2VzdC5pID0gaTtcbiAgICAgICAgY2xvc2VzdC50ID0gdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn0gLy9zdWJkaXZpZGUgYSBTZWdtZW50IGNsb3Nlc3QgdG8gYSBzcGVjaWZpYyB4LHkgY29vcmRpbmF0ZVxuXG5leHBvcnQgZnVuY3Rpb24gc3ViZGl2aWRlU2VnbWVudE5lYXIoeCwgeSwgc2VnbWVudCwgc2xpY2VzLCBpdGVyYXRpb25zKSB7XG4gIHZhciBsID0gc2VnbWVudC5sZW5ndGgsXG4gICAgICBiZXN0RGlzdGFuY2UgPSBfbGFyZ2VOdW0sXG4gICAgICBiZXN0VCA9IDAsXG4gICAgICBiZXN0U2VnbWVudEluZGV4ID0gMCxcbiAgICAgIHQsXG4gICAgICBpO1xuICBzbGljZXMgPSBzbGljZXMgfHwgMjA7XG4gIGl0ZXJhdGlvbnMgPSBpdGVyYXRpb25zIHx8IDM7XG5cbiAgZm9yIChpID0gMDsgaSA8IGw7IGkgKz0gNikge1xuICAgIHQgPSBnZXRDbG9zZXN0UHJvZ3Jlc3NPbkJlemllcigxLCB4LCB5LCAwLCAxLCBzbGljZXMsIHNlZ21lbnRbaV0sIHNlZ21lbnRbaSArIDFdLCBzZWdtZW50W2kgKyAyXSwgc2VnbWVudFtpICsgM10sIHNlZ21lbnRbaSArIDRdLCBzZWdtZW50W2kgKyA1XSwgc2VnbWVudFtpICsgNl0sIHNlZ21lbnRbaSArIDddKTtcblxuICAgIGlmIChiZXN0RGlzdGFuY2UgPiBfYmVzdERpc3RhbmNlKSB7XG4gICAgICBiZXN0RGlzdGFuY2UgPSBfYmVzdERpc3RhbmNlO1xuICAgICAgYmVzdFQgPSB0O1xuICAgICAgYmVzdFNlZ21lbnRJbmRleCA9IGk7XG4gICAgfVxuICB9XG5cbiAgdCA9IGdldENsb3Nlc3RQcm9ncmVzc09uQmV6aWVyKGl0ZXJhdGlvbnMsIHgsIHksIGJlc3RUIC0gMC4wNSwgYmVzdFQgKyAwLjA1LCBzbGljZXMsIHNlZ21lbnRbYmVzdFNlZ21lbnRJbmRleF0sIHNlZ21lbnRbYmVzdFNlZ21lbnRJbmRleCArIDFdLCBzZWdtZW50W2Jlc3RTZWdtZW50SW5kZXggKyAyXSwgc2VnbWVudFtiZXN0U2VnbWVudEluZGV4ICsgM10sIHNlZ21lbnRbYmVzdFNlZ21lbnRJbmRleCArIDRdLCBzZWdtZW50W2Jlc3RTZWdtZW50SW5kZXggKyA1XSwgc2VnbWVudFtiZXN0U2VnbWVudEluZGV4ICsgNl0sIHNlZ21lbnRbYmVzdFNlZ21lbnRJbmRleCArIDddKTtcbiAgc3ViZGl2aWRlU2VnbWVudChzZWdtZW50LCBiZXN0U2VnbWVudEluZGV4LCB0KTtcbiAgcmV0dXJuIGJlc3RTZWdtZW50SW5kZXggKyA2O1xufVxuLypcblRha2VzIGFueSBvZiB0aGUgZm9sbG93aW5nIGFuZCBjb252ZXJ0cyBpdCB0byBhbiBhbGwgQ3ViaWMgQmV6aWVyIFNWRyBkYXRhIHN0cmluZzpcbi0gQSA8cGF0aD4gZGF0YSBzdHJpbmcgbGlrZSBcIk0wLDAgTDIsNCB2MjAsMTUgSDEwMFwiXG4tIEEgUmF3UGF0aCwgbGlrZSBbW3gsIHksIHgsIHksIHgsIHksIHgsIHldW1t4LCB5LCB4LCB5LCB4LCB5LCB4LCB5XV1cbi0gQSBTZWdtZW50LCBsaWtlIFt4LCB5LCB4LCB5LCB4LCB5LCB4LCB5XVxuXG5Ob3RlOiBhbGwgbnVtYmVycyBhcmUgcm91bmRlZCBkb3duIHRvIHRoZSBjbG9zZXN0IDAuMDAxIHRvIG1pbmltaXplIG1lbW9yeSwgbWF4aW1pemUgc3BlZWQsIGFuZCBhdm9pZCBvZGQgbnVtYmVycyBsaWtlIDFlLTEzXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gcmF3UGF0aFRvU3RyaW5nKHJhd1BhdGgpIHtcbiAgaWYgKF9pc051bWJlcihyYXdQYXRoWzBdKSkge1xuICAgIC8vaW4gY2FzZSBhIHNlZ21lbnQgaXMgcGFzc2VkIGluIGluc3RlYWRcbiAgICByYXdQYXRoID0gW3Jhd1BhdGhdO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBsID0gcmF3UGF0aC5sZW5ndGgsXG4gICAgICBzbCxcbiAgICAgIHMsXG4gICAgICBpLFxuICAgICAgc2VnbWVudDtcblxuICBmb3IgKHMgPSAwOyBzIDwgbDsgcysrKSB7XG4gICAgc2VnbWVudCA9IHJhd1BhdGhbc107XG4gICAgcmVzdWx0ICs9IFwiTVwiICsgX3JvdW5kKHNlZ21lbnRbMF0pICsgXCIsXCIgKyBfcm91bmQoc2VnbWVudFsxXSkgKyBcIiBDXCI7XG4gICAgc2wgPSBzZWdtZW50Lmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDI7IGkgPCBzbDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gX3JvdW5kKHNlZ21lbnRbaSsrXSkgKyBcIixcIiArIF9yb3VuZChzZWdtZW50W2krK10pICsgXCIgXCIgKyBfcm91bmQoc2VnbWVudFtpKytdKSArIFwiLFwiICsgX3JvdW5kKHNlZ21lbnRbaSsrXSkgKyBcIiBcIiArIF9yb3VuZChzZWdtZW50W2krK10pICsgXCIsXCIgKyBfcm91bmQoc2VnbWVudFtpXSkgKyBcIiBcIjtcbiAgICB9XG5cbiAgICBpZiAoc2VnbWVudC5jbG9zZWQpIHtcbiAgICAgIHJlc3VsdCArPSBcInpcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLypcbi8vIHRha2VzIGEgc2VnbWVudCB3aXRoIGNvb3JkaW5hdGVzIFt4LCB5LCB4LCB5LCAuLi5dIGFuZCBjb252ZXJ0cyB0aGUgY29udHJvbCBwb2ludHMgaW50byBhbmdsZXMgYW5kIGxlbmd0aHMgW3gsIHksIGFuZ2xlLCBsZW5ndGgsIGFuZ2xlLCBsZW5ndGgsIHgsIHksIGFuZ2xlLCBsZW5ndGgsIC4uLl0gc28gdGhhdCBpdCBhbmltYXRlcyBtb3JlIGNsZWFubHkgYW5kIGF2b2lkcyBvZGQgYnJlYWtzL2tpbmtzLiBGb3IgZXhhbXBsZSwgaWYgeW91IGFuaW1hdGUgZnJvbSAxIG8nY2xvY2sgdG8gNiBvJ2Nsb2NrLCBpdCdkIGp1c3QgZ28gZGlyZWN0bHkvbGluZWFybHkgcmF0aGVyIHRoYW4gYXJvdW5kLiBTbyB0aGUgbGVuZ3RoIHdvdWxkIGJlIHZlcnkgc2hvcnQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdHdlZW4uXG5leHBvcnQgZnVuY3Rpb24gY3BDb29yZHNUb0FuZ2xlcyhzZWdtZW50LCBjb3B5KSB7XG5cdHZhciByZXN1bHQgPSBjb3B5ID8gc2VnbWVudC5zbGljZSgwKSA6IHNlZ21lbnQsXG5cdFx0eCwgeSwgaTtcblx0Zm9yIChpID0gMDsgaSA8IHNlZ21lbnQubGVuZ3RoOyBpKz02KSB7XG5cdFx0eCA9IHNlZ21lbnRbaSsyXSAtIHNlZ21lbnRbaV07XG5cdFx0eSA9IHNlZ21lbnRbaSszXSAtIHNlZ21lbnRbaSsxXTtcblx0XHRyZXN1bHRbaSsyXSA9IE1hdGguYXRhbjIoeSwgeCk7XG5cdFx0cmVzdWx0W2krM10gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cdFx0eCA9IHNlZ21lbnRbaSs2XSAtIHNlZ21lbnRbaSs0XTtcblx0XHR5ID0gc2VnbWVudFtpKzddIC0gc2VnbWVudFtpKzVdO1xuXHRcdHJlc3VsdFtpKzRdID0gTWF0aC5hdGFuMih5LCB4KTtcblx0XHRyZXN1bHRbaSs1XSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0YWtlcyBhIHNlZ21lbnQgdGhhdCB3YXMgY29udmVydGVkIHdpdGggY3BDb29yZHNUb0FuZ2xlcygpIHRvIGhhdmUgYW5nbGVzIGFuZCBsZW5ndGhzIGluc3RlYWQgb2YgY29vcmRpbmF0ZXMgZm9yIHRoZSBjb250cm9sIHBvaW50cywgYW5kIGNvbnZlcnRzIGl0IEJBQ0sgaW50byBjb29yZGluYXRlcy5cbmV4cG9ydCBmdW5jdGlvbiBjcEFuZ2xlc1RvQ29vcmRzKHNlZ21lbnQsIGNvcHkpIHtcblx0dmFyIHJlc3VsdCA9IGNvcHkgPyBzZWdtZW50LnNsaWNlKDApIDogc2VnbWVudCxcblx0XHRsZW5ndGggPSBzZWdtZW50Lmxlbmd0aCxcblx0XHRybmQgPSAxMDAwLFxuXHRcdGFuZ2xlLCBsLCBpLCBqO1xuXHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKz02KSB7XG5cdFx0YW5nbGUgPSBzZWdtZW50W2krMl07XG5cdFx0bCA9IHNlZ21lbnRbaSszXTsgLy9sZW5ndGhcblx0XHRyZXN1bHRbaSsyXSA9ICgoKHNlZ21lbnRbaV0gKyBNYXRoLmNvcyhhbmdsZSkgKiBsKSAqIHJuZCkgfCAwKSAvIHJuZDtcblx0XHRyZXN1bHRbaSszXSA9ICgoKHNlZ21lbnRbaSsxXSArIE1hdGguc2luKGFuZ2xlKSAqIGwpICogcm5kKSB8IDApIC8gcm5kO1xuXHRcdGFuZ2xlID0gc2VnbWVudFtpKzRdO1xuXHRcdGwgPSBzZWdtZW50W2krNV07IC8vbGVuZ3RoXG5cdFx0cmVzdWx0W2krNF0gPSAoKChzZWdtZW50W2krNl0gLSBNYXRoLmNvcyhhbmdsZSkgKiBsKSAqIHJuZCkgfCAwKSAvIHJuZDtcblx0XHRyZXN1bHRbaSs1XSA9ICgoKHNlZ21lbnRbaSs3XSAtIE1hdGguc2luKGFuZ2xlKSAqIGwpICogcm5kKSB8IDApIC8gcm5kO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vYWRkcyBhbiBcImlzU21vb3RoXCIgYXJyYXkgdG8gZWFjaCBzZWdtZW50IGFuZCBwb3B1bGF0ZXMgaXQgd2l0aCBhIGJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCBpdCdzIHNtb290aCAodGhlIGNvbnRyb2wgcG9pbnRzIGhhdmUgYmFzaWNhbGx5IHRoZSBzYW1lIHNsb3BlKS4gRm9yIGFueSBzbW9vdGggY29udHJvbCBwb2ludHMsIGl0IGNvbnZlcnRzIHRoZSBjb29yZGluYXRlcyBpbnRvIGFuZ2xlICh4LCBpbiByYWRpYW5zKSBhbmQgbGVuZ3RoICh5KSBhbmQgcHV0cyB0aGVtIGludG8gdGhlIHNhbWUgaW5kZXggdmFsdWUgaW4gYSBzbW9vdGhEYXRhIGFycmF5LlxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlU21vb3RoRGF0YShyYXdQYXRoKSB7XG5cdGxldCBqID0gcmF3UGF0aC5sZW5ndGgsXG5cdFx0c21vb3RoLCBzZWdtZW50LCB4LCB5LCB4MiwgeTIsIGksIGwsIGEsIGEyLCBpc1Ntb290aCwgc21vb3RoRGF0YTtcblx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0c2VnbWVudCA9IHJhd1BhdGhbal07XG5cdFx0aXNTbW9vdGggPSBzZWdtZW50LmlzU21vb3RoID0gc2VnbWVudC5pc1Ntb290aCB8fCBbMCwgMCwgMCwgMF07XG5cdFx0c21vb3RoRGF0YSA9IHNlZ21lbnQuc21vb3RoRGF0YSA9IHNlZ21lbnQuc21vb3RoRGF0YSB8fCBbMCwgMCwgMCwgMF07XG5cdFx0aXNTbW9vdGgubGVuZ3RoID0gNDtcblx0XHRsID0gc2VnbWVudC5sZW5ndGggLSAyO1xuXHRcdGZvciAoaSA9IDY7IGkgPCBsOyBpICs9IDYpIHtcblx0XHRcdHggPSBzZWdtZW50W2ldIC0gc2VnbWVudFtpIC0gMl07XG5cdFx0XHR5ID0gc2VnbWVudFtpICsgMV0gLSBzZWdtZW50W2kgLSAxXTtcblx0XHRcdHgyID0gc2VnbWVudFtpICsgMl0gLSBzZWdtZW50W2ldO1xuXHRcdFx0eTIgPSBzZWdtZW50W2kgKyAzXSAtIHNlZ21lbnRbaSArIDFdO1xuXHRcdFx0YSA9IF9hdGFuMih5LCB4KTtcblx0XHRcdGEyID0gX2F0YW4yKHkyLCB4Mik7XG5cdFx0XHRzbW9vdGggPSAoTWF0aC5hYnMoYSAtIGEyKSA8IDAuMDkpO1xuXHRcdFx0aWYgKHNtb290aCkge1xuXHRcdFx0XHRzbW9vdGhEYXRhW2kgLSAyXSA9IGE7XG5cdFx0XHRcdHNtb290aERhdGFbaSArIDJdID0gYTI7XG5cdFx0XHRcdHNtb290aERhdGFbaSAtIDFdID0gX3NxcnQoeCAqIHggKyB5ICogeSk7XG5cdFx0XHRcdHNtb290aERhdGFbaSArIDNdID0gX3NxcnQoeDIgKiB4MiArIHkyICogeTIpO1xuXHRcdFx0fVxuXHRcdFx0aXNTbW9vdGgucHVzaChzbW9vdGgsIHNtb290aCwgMCwgMCwgc21vb3RoLCBzbW9vdGgpO1xuXHRcdH1cblx0XHQvL2lmIHRoZSBmaXJzdCBhbmQgbGFzdCBwb2ludHMgYXJlIGlkZW50aWNhbCwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBzbW9vdGggdHJhbnNpdGlvbi4gV2UgbXVzdCBoYW5kbGUgdGhpcyBhIGJpdCBkaWZmZXJlbnRseSBkdWUgdG8gdGhlaXIgcG9zaXRpb25zIGluIHRoZSBhcnJheS5cblx0XHRpZiAoc2VnbWVudFtsXSA9PT0gc2VnbWVudFswXSAmJiBzZWdtZW50W2wrMV0gPT09IHNlZ21lbnRbMV0pIHtcblx0XHRcdHggPSBzZWdtZW50WzBdIC0gc2VnbWVudFtsLTJdO1xuXHRcdFx0eSA9IHNlZ21lbnRbMV0gLSBzZWdtZW50W2wtMV07XG5cdFx0XHR4MiA9IHNlZ21lbnRbMl0gLSBzZWdtZW50WzBdO1xuXHRcdFx0eTIgPSBzZWdtZW50WzNdIC0gc2VnbWVudFsxXTtcblx0XHRcdGEgPSBfYXRhbjIoeSwgeCk7XG5cdFx0XHRhMiA9IF9hdGFuMih5MiwgeDIpO1xuXHRcdFx0aWYgKE1hdGguYWJzKGEgLSBhMikgPCAwLjA5KSB7XG5cdFx0XHRcdHNtb290aERhdGFbbC0yXSA9IGE7XG5cdFx0XHRcdHNtb290aERhdGFbMl0gPSBhMjtcblx0XHRcdFx0c21vb3RoRGF0YVtsLTFdID0gX3NxcnQoeCAqIHggKyB5ICogeSk7XG5cdFx0XHRcdHNtb290aERhdGFbM10gPSBfc3FydCh4MiAqIHgyICsgeTIgKiB5Mik7XG5cdFx0XHRcdGlzU21vb3RoW2wtMl0gPSBpc1Ntb290aFtsLTFdID0gdHJ1ZTsgLy9kb24ndCBjaGFuZ2UgaW5kZXhlcyAyIGFuZCAzIGJlY2F1c2Ugd2UnbGwgdHJpZ2dlciBldmVyeXRoaW5nIGZyb20gdGhlIEVORCwgYW5kIHRoaXMgd2lsbCBvcHRpbWl6ZSBmaWxlIHNpemUgYSBiaXQuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiByYXdQYXRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50VG9TY3JlZW4oc3ZnRWxlbWVudCwgcG9pbnQpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7IC8vYnkgZGVmYXVsdCwgdGFrZSB0aGUgZmlyc3Qgc2V0IG9mIGNvb3JkaW5hdGVzIGluIHRoZSBwYXRoIGFzIHRoZSBwb2ludFxuXHRcdGxldCByYXdQYXRoID0gZ2V0UmF3UGF0aChzdmdFbGVtZW50KTtcblx0XHRwb2ludCA9IHN2Z0VsZW1lbnQub3duZXJTVkdFbGVtZW50LmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0cG9pbnQueCA9IHJhd1BhdGhbMF1bMF07XG5cdFx0cG9pbnQueSA9IHJhd1BhdGhbMF1bMV07XG5cdH1cblx0cmV0dXJuIHBvaW50Lm1hdHJpeFRyYW5zZm9ybShzdmdFbGVtZW50LmdldFNjcmVlbkNUTSgpKTtcbn1cblxuKi8iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YjEwNGY0NDhhYzdmOTI0ZGJjNVwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiVGV4dHVyZSIsIlByZWZpeCIsIkNvbXBvbmVudCIsInNwbGl0IiwiZWFjaCIsIlNNT09USCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImNvdW50ZXIiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInNwYW5zIiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImNyZWF0ZUxvYWRlciIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwic2V0IiwiYXV0b0FscGhhIiwibGluZSIsImluZGV4IiwibGV0dGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9uU3RhcnQiLCJfIiwiZnJvbVRvIiwiZGlzcGxheSIsInkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJjYWxsIiwiQVNTRVRTIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwiZ2wiLCJnZW5lcmF0ZU1pcG1hcHMiLCJtZWRpYSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJvbmxvYWQiLCJvbkFzc2V0TG9hZGVkIiwicGVyY2VudCIsImxlbmd0aCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uQ29tcGxldGUiLCJQcm9taXNlIiwiYW5pbWF0ZU91dCIsInRpdGxlU3BhbnMiLCJ0byIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiQ3VzdG9tRWFzZSIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlIiwiU01PT1RIRVIiLCJERUZBVUxUIiwiQ1NTIiwic3RyaW5nVG9SYXdQYXRoIiwicmF3UGF0aFRvU3RyaW5nIiwidHJhbnNmb3JtUmF3UGF0aCIsIl9jb3JlSW5pdHRlZCIsIl9nZXRHU0FQIiwiX2luaXRDb3JlIiwicmVnaXN0ZXJFYXNlIiwiY29uc29sZSIsIndhcm4iLCJfYmlnTnVtIiwiX3JvdW5kIiwidmFsdWUiLCJfYm9udXNWYWxpZGF0ZWQiLCJfbnVtRXhwIiwiX25lZWRzUGFyc2luZ0V4cCIsIl9maW5kTWluaW11bSIsInZhbHVlcyIsImwiLCJtaW4iLCJpIiwiX25vcm1hbGl6ZSIsImhlaWdodCIsIm9yaWdpblkiLCJtYXgiLCJ0eCIsInR5Iiwic3giLCJzeSIsImFicyIsIl9iZXppZXJUb1BvaW50cyIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJ0aHJlc2hvbGQiLCJwb2ludHMiLCJ4MTIiLCJ5MTIiLCJ4MjMiLCJ5MjMiLCJ4MzQiLCJ5MzQiLCJ4MTIzIiwieTEyMyIsIngyMzQiLCJ5MjM0IiwieDEyMzQiLCJ5MTIzNCIsImR4IiwiZHkiLCJkMiIsImQzIiwieCIsInNwbGljZSIsImlkIiwiZGF0YSIsImNvbmZpZyIsInNldERhdGEiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJtYXRjaCIsImNsb3Nlc3QiLCJsb29rdXAiLCJwcmVjaXNpb24iLCJmYXN0IiwiYTEiLCJhMiIsImluYyIsImoiLCJwb2ludCIsInByZXZQb2ludCIsInAiLCJ0ZXN0IiwiaW5kZXhPZiIsInVuc2hpZnQiLCJwdXNoIiwic2VnbWVudCIsImN4IiwiY3kiLCJuIiwibngiLCJjdXN0b20iLCJnZXRTVkdEYXRhIiwicmVnaXN0ZXIiLCJjb3JlIiwiZ2V0IiwicGFyc2VFYXNlIiwid2lkdGgiLCJlIiwidXRpbHMiLCJ0b0FycmF5IiwicGF0aCIsImEiLCJzbG9wZSIsInByZXZYIiwicHJldlkiLCJpbnZlcnQiLCJqb2luIiwic2V0QXR0cmlidXRlIiwidmVyc2lvbiIsImRlZmF1bHQiLCJfc3ZnUGF0aEV4cCIsIl9udW1iZXJzRXhwIiwiX3NjaWVudGlmaWMiLCJfc2VsZWN0b3JFeHAiLCJfREVHMlJBRCIsIlBJIiwiX1JBRDJERUciLCJfc2luIiwic2luIiwiX2NvcyIsImNvcyIsIl9hYnMiLCJfc3FydCIsInNxcnQiLCJfYXRhbjIiLCJhdGFuMiIsIl9sYXJnZU51bSIsIl9pc1N0cmluZyIsIl9pc051bWJlciIsIl9pc1VuZGVmaW5lZCIsIl90ZW1wIiwiX3RlbXAyIiwiX3JvdW5kaW5nTnVtIiwiX3dyYXBQcm9ncmVzcyIsInByb2dyZXNzIiwiX3JvdW5kUHJlY2lzZSIsIl9zcGxpdFNlZ21lbnQiLCJyYXdQYXRoIiwic2VnSW5kZXgiLCJ0Iiwic2hpZnQiLCJzdWJkaXZpZGVTZWdtZW50Iiwic2xpY2UiLCJfZ2V0U2FtcGxlSW5kZXgiLCJzYW1wbGVzIiwiX3JldmVyc2VSYXdQYXRoIiwic2tpcE91dGVyIiwicmV2ZXJzZSIsInJldmVyc2VkIiwicmV2ZXJzZVNlZ21lbnQiLCJfY29weU1ldGFEYXRhIiwic291cmNlIiwiY29weSIsInRvdGFsTGVuZ3RoIiwibWluTGVuZ3RoIiwicmVzb2x1dGlvbiIsInRvdGFsUG9pbnRzIiwiX2FwcGVuZE9yTWVyZ2UiLCJwcmV2U2VnIiwiY29uY2F0IiwiX2Jlc3REaXN0YW5jZSIsImdldFJhd1BhdGgiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiX2dzUGF0aCIsIl9kaXJ0eSIsImNvcHlSYXdQYXRoIiwiX2NyZWF0ZVBhdGgiLCJpZ25vcmUiLCJjcmVhdGVFbGVtZW50TlMiLCJhdHRyIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwic2V0QXR0cmlidXRlTlMiLCJub2RlVmFsdWUiLCJfdHlwZUF0dHJzIiwicmVjdCIsImNpcmNsZSIsImVsbGlwc2UiLCJfYXR0clRvT2JqIiwiYXR0cnMiLCJwcm9wcyIsIm9iaiIsImNvbnZlcnRUb1BhdGgiLCJzd2FwIiwidHlwZSIsInRhZ05hbWUiLCJjaXJjIiwiciIsInJ5IiwicmNpcmMiLCJyeWNpcmMiLCJ3IiwiaCIsIng1IiwieDYiLCJ5NSIsInk2IiwiZ2V0QkJveCIsInJ4IiwiX2dzUmF3UGF0aCIsImluc2VydEJlZm9yZSIsImdldFJvdGF0aW9uQXRQcm9ncmVzcyIsImQiLCJnZXRQcm9ncmVzc0RhdGEiLCJnZXRSb3RhdGlvbkF0QmV6aWVyVCIsImIiLCJjIiwic2xpY2VSYXdQYXRoIiwic3RhcnQiLCJlbmQiLCJsb29wcyIsIm9mZnNldCIsImNhY2hlUmF3UGF0aE1lYXN1cmVtZW50cyIsIndyYXAiLCJzIiwiZVNlZyIsInNTZWciLCJlU2VnSW5kZXgiLCJzU2VnSW5kZXgiLCJlaSIsInNpIiwic2FtZVNlZ21lbnQiLCJzYW1lQmV6aWVyIiwid3JhcHNCZWhpbmQiLCJzU2hpZnQiLCJlU2hpZnQiLCJ0b3RhbFNlZ21lbnRzIiwiYW5nbGUiLCJtZWFzdXJlU2VnbWVudCIsInN0YXJ0SW5kZXgiLCJiZXppZXJRdHkiLCJlbmRJbmRleCIsInNhbXBsZXNJbmRleCIsInByZXZMZW5ndGgiLCJ4ZCIsInhkMSIsInlkIiwieWQxIiwiaW52IiwibGVuZ3RoSW5kZXgiLCJzZWdMZW5ndGgiLCJwYXRoTGVuZ3RoIiwiYXgiLCJheSIsImNwMXgiLCJjcDF5IiwiY3AyeCIsImNwMnkiLCJieCIsImJ5IiwieDFhIiwieTFhIiwieDJhIiwieTJhIiwiZGVjb3JhdGVlIiwicHVzaFRvTmV4dElmQXRFbmQiLCJnZXRQb3NpdGlvbk9uUGF0aCIsImluY2x1ZGVBbmdsZSIsInJlc3VsdCIsImFyY1RvU2VnbWVudCIsImxhc3RYIiwibGFzdFkiLCJsYXJnZUFyY0ZsYWciLCJzd2VlcEZsYWciLCJhbmdsZVJhZCIsImNvc0FuZ2xlIiwic2luQW5nbGUiLCJUV09QSSIsImR4MiIsImR5MiIsIngxX3NxIiwieTFfc3EiLCJyYWRpaUNoZWNrIiwicnhfc3EiLCJyeV9zcSIsInNxIiwiY29lZiIsImN4MSIsImN5MSIsInN4MiIsInN5MiIsInV4IiwidXkiLCJ2eCIsInZ5IiwidGVtcCIsImFuZ2xlU3RhcnQiLCJhY29zIiwiYW5nbGVFeHRlbnQiLCJpc05hTiIsInNlZ21lbnRzIiwiY2VpbCIsImFuZ2xlSW5jcmVtZW50IiwiY29udHJvbExlbmd0aCIsIm1hIiwibWIiLCJtYyIsIm1kIiwicmVwbGFjZSIsIm0iLCJyZWxhdGl2ZVgiLCJyZWxhdGl2ZVkiLCJ0d29UaGlyZHMiLCJlcnJvck1lc3NhZ2UiLCJjb21tYW5kIiwiaXNSZWxhdGl2ZSIsInN0YXJ0WCIsInN0YXJ0WSIsImRpZlgiLCJkaWZZIiwiYmV6aWVycyIsInByZXZDb21tYW5kIiwiZmxhZzEiLCJmbGFnMiIsImV4IiwiZXkiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsImNsb3NlZCIsInN1YnN0ciIsImNoYXJBdCIsInBvcCIsImJlemllclRvUG9pbnRzIiwiZmxhdFBvaW50c1RvU2VnbWVudCIsImN1cnZpbmVzcyIsInBvaW50c1RvU2VnbWVudCIsIm5leHRYIiwibmV4dFkiLCJkeDEiLCJkeTEiLCJyMSIsInIyIiwicjMiLCJ0bCIsIm14MSIsIm14MiIsIm14bSIsIm15MSIsIm15MiIsIm15bSIsInBvdyIsInBvaW50VG9TZWdEaXN0Iiwic2ltcGxpZnlTdGVwIiwiZmlyc3QiLCJsYXN0IiwidG9sZXJhbmNlIiwic2ltcGxpZmllZCIsIm1heFNxRGlzdCIsImZpcnN0WCIsImZpcnN0WSIsInNpbXBsaWZ5UG9pbnRzIiwicGFyc2VGbG9hdCIsImdldENsb3Nlc3RQcm9ncmVzc09uQmV6aWVyIiwiaXRlcmF0aW9ucyIsInB4IiwicHkiLCJzbGljZXMiLCJ4MCIsInkwIiwiYmVzdCIsImdldENsb3Nlc3REYXRhIiwiYmVzdERpc3RhbmNlIiwic3ViZGl2aWRlU2VnbWVudE5lYXIiLCJiZXN0VCIsImJlc3RTZWdtZW50SW5kZXgiLCJzbCJdLCJzb3VyY2VSb290IjoiIn0=