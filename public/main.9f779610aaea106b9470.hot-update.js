"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Cursor/index.js":
/*!***********************************************!*\
  !*** ./app/components/Canvas/Cursor/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/cursor-vertex.glsl */ "./app/shaders/cursor-vertex.glsl");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    scene,
    sizes,
    renderer,
    camera
  }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.camera = camera;
    this.spring = 0.06;
    this.friction = 0.85;
    this.count = 20;
    this.points = [];
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.tmp = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
    this.createPolyline();
  }
  createPolyline() {
    for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3());
    this.polyline = new ogl__WEBPACK_IMPORTED_MODULE_4__.Polyline(this.gl, {
      points: this.points,
      vertex: _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_5__.Color("#1b1b1b")
        },
        uThickness: {
          value: 40
        }
      }
    });
    this.polyline.mesh.setParent(this.scene);
    this.polyline.resize();
  }
  onMouseMove(e) {
    console.log(e, "event");
    this.mouse.set(e.x.end / this.renderer.width * 2 - 1, e.y.end / this.renderer.height * -2 + 1, 0);
  }
  onResize() {
    if (this.polyline) this.polyline.resize();
  }
  update() {
    for (let i = this.points.length - 1; i >= 0; i--) {
      if (!i) {
        this.tmp.copy(this.mouse).sub(this.points[i]).multiply(this.spring);
        this.mouseVelocity.add(this.tmp).multiply(this.friction);
        this.points[i].add(this.mouseVelocity);
      } else {
        (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.points[i], this.points[i - 1], 0.9);
      }
    }
  }
});

/***/ }),

/***/ "./app/shaders/cursor-vertex.glsl":
/*!****************************************!*\
  !*** ./app/shaders/cursor-vertex.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\n\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\n\nvec4 getPosition() {\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);\n    vec2 nextScreen = next.xy * aspect;\n    vec2 prevScreen = prev.xy * aspect;\n\n    vec2 tangent = normalize(nextScreen - prevScreen);\n    vec2 normal = vec2(-tangent.y, tangent.x);\n    normal /= aspect;\n    normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);\n\n    float pixelWidth = 1.0 / (uResolution.y / uDPR);\n    normal *= pixelWidth * uThickness;\n\n    // When the points are on top of each other, shrink the line to avoid artifacts.\n    float dist = length(nextScreen - prevScreen);\n    normal *= smoothstep(0.0, 0.02, dist);\n\n    vec4 current = vec4(position, 1);\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    gl_Position = getPosition();\n}\n");

/***/ }),

/***/ "./node_modules/ogl/src/extras/Polyline.js":
/*!*************************************************!*\
  !*** ./node_modules/ogl/src/extras/Polyline.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polyline: () => (/* binding */ Polyline)
/* harmony export */ });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Geometry.js */ "./node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Program.js */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Mesh.js */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vec2.js */ "./node_modules/ogl/src/math/Vec2.js");
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Color.js */ "./node_modules/ogl/src/math/Color.js");






const tmp = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
class Polyline {
  constructor(gl, {
    points,
    // Array of Vec3s
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    attributes = {} // For passing in custom attribs
  }) {
    this.gl = gl;
    this.points = points;
    this.count = points.length;

    // Create buffers
    this.position = new Float32Array(this.count * 3 * 2);
    this.prev = new Float32Array(this.count * 3 * 2);
    this.next = new Float32Array(this.count * 3 * 2);
    const side = new Float32Array(this.count * 1 * 2);
    const uv = new Float32Array(this.count * 2 * 2);
    const index = new Uint16Array((this.count - 1) * 3 * 2);

    // Set static buffers
    for (let i = 0; i < this.count; i++) {
      side.set([-1, 1], i * 2);
      const v = i / (this.count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === this.count - 1) continue;
      const ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }
    const geometry = this.geometry = new _core_Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Geometry(gl, Object.assign(attributes, {
      position: {
        size: 3,
        data: this.position
      },
      prev: {
        size: 3,
        data: this.prev
      },
      next: {
        size: 3,
        data: this.next
      },
      side: {
        size: 1,
        data: side
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        size: 1,
        data: index
      }
    }));

    // Populate dynamic buffers
    this.updateGeometry();
    if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
      value: new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_2__.Vec2()
    };
    if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
      value: 1
    };
    if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
      value: 1
    };
    if (!uniforms.uColor) this.color = uniforms.uColor = {
      value: new _math_Color_js__WEBPACK_IMPORTED_MODULE_3__.Color('#000')
    };
    if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
      value: 1
    };

    // Set size uniforms' values
    this.resize();
    const program = this.program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_4__.Program(gl, {
      vertex,
      fragment,
      uniforms
    });
    this.mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__.Mesh(gl, {
      geometry,
      program
    });
  }
  updateGeometry() {
    this.points.forEach((p, i) => {
      p.toArray(this.position, i * 3 * 2);
      p.toArray(this.position, i * 3 * 2 + 3);
      if (!i) {
        // If first point, calculate prev using the distance to 2nd point
        tmp.copy(p).sub(this.points[i + 1]).add(p);
        tmp.toArray(this.prev, i * 3 * 2);
        tmp.toArray(this.prev, i * 3 * 2 + 3);
      } else {
        p.toArray(this.next, (i - 1) * 3 * 2);
        p.toArray(this.next, (i - 1) * 3 * 2 + 3);
      }
      if (i === this.points.length - 1) {
        // If last point, calculate next using distance to 2nd last point
        tmp.copy(p).sub(this.points[i - 1]).add(p);
        tmp.toArray(this.next, i * 3 * 2);
        tmp.toArray(this.next, i * 3 * 2 + 3);
      } else {
        p.toArray(this.prev, (i + 1) * 3 * 2);
        p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
      }
    });
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;
  }

  // Only need to call if not handling resolution uniforms manually
  resize() {
    // Update automatic uniforms if not overridden
    if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
    if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
  }
}
const defaultVertex = /* glsl */`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;
const defaultFragment = /* glsl */`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;

/***/ }),

/***/ "./node_modules/ogl/src/math/Vec2.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Vec2.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vec2: () => (/* binding */ Vec2)
/* harmony export */ });
/* harmony import */ var _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Vec2Func.js */ "./node_modules/ogl/src/math/functions/Vec2Func.js");

class Vec2 extends Array {
  constructor(x = 0, y = x) {
    super(x, y);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set(x, y = x) {
    if (x.length) return this.copy(x);
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y);
    return this;
  }
  copy(v) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, v);
    return this;
  }
  add(va, vb) {
    if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, va);
    return this;
  }
  sub(va, vb) {
    if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, va);
    return this;
  }
  multiply(v) {
    if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  divide(v) {
    if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.divide(this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, 1 / v);
    return this;
  }
  inverse(v = this) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.inverse(this, v);
    return this;
  }

  // Can't use 'length' as Array.prototype uses it
  len() {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  distance(v) {
    if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.distance(this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(v) {
    if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance(this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
  }
  negate(v = this) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.negate(this, v);
    return this;
  }
  cross(va, vb) {
    if (vb) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(va, vb);
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, va);
  }
  scale(v) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  normalize() {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, this);
    return this;
  }
  dot(v) {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
  }
  equals(v) {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.exactEquals(this, v);
  }
  applyMatrix3(mat3) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat3(this, this, mat3);
    return this;
  }
  applyMatrix4(mat4) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat4(this, this, mat4);
    return this;
  }
  lerp(v, a) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this, this, v, a);
    return this;
  }
  clone() {
    return new Vec2(this[0], this[1]);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Vec2Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Vec2Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat2: () => (/* binding */ transformMat2),
/* harmony export */   transformMat2d: () => (/* binding */ transformMat2d),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
    y = a[1];
  return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */
function cross(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc4c87380b201e10f65f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9DYW52YXMvQ3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2V4dHJhcy9Qb2x5bGluZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9WZWMyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9WZWMyRnVuYy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIHRoaXMubW91c2VWZWxvY2l0eSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlYzMoKVxuICAgIHRoaXMudG1wID0gbmV3IFZlYzMoKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZSgpXG4gIH1cblxuICBjcmVhdGVQb2x5bGluZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgIHRoaXMucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKFwiIzFiMWIxYlwiKSB9LFxuICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiA0MCB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucG9seWxpbmUubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgY29uc29sZS5sb2coZSwgXCJldmVudFwiKVxuICAgIHRoaXMubW91c2Uuc2V0KFxuICAgICAgKGUueC5lbmQgLyB0aGlzLnJlbmRlcmVyLndpZHRoKSAqIDIgLSAxLFxuICAgICAgKGUueS5lbmQgLyB0aGlzLnJlbmRlcmVyLmhlaWdodCkgKiAtMiArIDEsXG4gICAgICAwXG4gICAgKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMucG9seWxpbmUpIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghaSkge1xuICAgICAgICB0aGlzLnRtcC5jb3B5KHRoaXMubW91c2UpLnN1Yih0aGlzLnBvaW50c1tpXSkubXVsdGlwbHkodGhpcy5zcHJpbmcpXG4gICAgICAgIHRoaXMubW91c2VWZWxvY2l0eS5hZGQodGhpcy50bXApLm11bHRpcGx5KHRoaXMuZnJpY3Rpb24pXG4gICAgICAgIHRoaXMucG9pbnRzW2ldLmFkZCh0aGlzLm1vdXNlVmVsb2NpdHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXJwKHRoaXMucG9pbnRzW2ldLCB0aGlzLnBvaW50c1tpIC0gMV0sIDAuOSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMyBuZXh0O1xcbmF0dHJpYnV0ZSB2ZWMzIHByZXY7XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIGZsb2F0IHNpZGU7XFxuXFxudW5pZm9ybSB2ZWMyIHVSZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdURQUjtcXG51bmlmb3JtIGZsb2F0IHVUaGlja25lc3M7XFxuXFxudmVjNCBnZXRQb3NpdGlvbigpIHtcXG4gICAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVSZXNvbHV0aW9uLnggLyB1UmVzb2x1dGlvbi55LCAxKTtcXG4gICAgdmVjMiBuZXh0U2NyZWVuID0gbmV4dC54eSAqIGFzcGVjdDtcXG4gICAgdmVjMiBwcmV2U2NyZWVuID0gcHJldi54eSAqIGFzcGVjdDtcXG5cXG4gICAgdmVjMiB0YW5nZW50ID0gbm9ybWFsaXplKG5leHRTY3JlZW4gLSBwcmV2U2NyZWVuKTtcXG4gICAgdmVjMiBub3JtYWwgPSB2ZWMyKC10YW5nZW50LnksIHRhbmdlbnQueCk7XFxuICAgIG5vcm1hbCAvPSBhc3BlY3Q7XFxuICAgIG5vcm1hbCAqPSAxLjAgLSBwb3coYWJzKHV2LnkgLSAwLjUpICogMi4wLCAyLjApO1xcblxcbiAgICBmbG9hdCBwaXhlbFdpZHRoID0gMS4wIC8gKHVSZXNvbHV0aW9uLnkgLyB1RFBSKTtcXG4gICAgbm9ybWFsICo9IHBpeGVsV2lkdGggKiB1VGhpY2tuZXNzO1xcblxcbiAgICAvLyBXaGVuIHRoZSBwb2ludHMgYXJlIG9uIHRvcCBvZiBlYWNoIG90aGVyLCBzaHJpbmsgdGhlIGxpbmUgdG8gYXZvaWQgYXJ0aWZhY3RzLlxcbiAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKG5leHRTY3JlZW4gLSBwcmV2U2NyZWVuKTtcXG4gICAgbm9ybWFsICo9IHNtb290aHN0ZXAoMC4wLCAwLjAyLCBkaXN0KTtcXG5cXG4gICAgdmVjNCBjdXJyZW50ID0gdmVjNChwb3NpdGlvbiwgMSk7XFxuICAgIGN1cnJlbnQueHkgLT0gbm9ybWFsICogc2lkZTtcXG4gICAgcmV0dXJuIGN1cnJlbnQ7XFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xcbn1cXG5cIjsiLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uL2NvcmUvR2VvbWV0cnkuanMnO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gJy4uL2NvcmUvUHJvZ3JhbS5qcyc7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi4vY29yZS9NZXNoLmpzJztcbmltcG9ydCB7IFZlYzIgfSBmcm9tICcuLi9tYXRoL1ZlYzIuanMnO1xuaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4uL21hdGgvVmVjMy5qcyc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL21hdGgvQ29sb3IuanMnO1xuXG5jb25zdCB0bXAgPSBuZXcgVmVjMygpO1xuXG5leHBvcnQgY2xhc3MgUG9seWxpbmUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbCxcbiAgICAgICAge1xuICAgICAgICAgICAgcG9pbnRzLCAvLyBBcnJheSBvZiBWZWMzc1xuICAgICAgICAgICAgdmVydGV4ID0gZGVmYXVsdFZlcnRleCxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZGVmYXVsdEZyYWdtZW50LFxuICAgICAgICAgICAgdW5pZm9ybXMgPSB7fSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7fSwgLy8gRm9yIHBhc3NpbmcgaW4gY3VzdG9tIGF0dHJpYnNcbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgICAgICB0aGlzLmNvdW50ID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGUgYnVmZmVyc1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyAqIDIpO1xuICAgICAgICB0aGlzLnByZXYgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzICogMik7XG4gICAgICAgIHRoaXMubmV4dCA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMgKiAyKTtcbiAgICAgICAgY29uc3Qgc2lkZSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDEgKiAyKTtcbiAgICAgICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAyICogMik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3IFVpbnQxNkFycmF5KCh0aGlzLmNvdW50IC0gMSkgKiAzICogMik7XG5cbiAgICAgICAgLy8gU2V0IHN0YXRpYyBidWZmZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBzaWRlLnNldChbLTEsIDFdLCBpICogMik7XG4gICAgICAgICAgICBjb25zdCB2ID0gaSAvICh0aGlzLmNvdW50IC0gMSk7XG4gICAgICAgICAgICB1di5zZXQoWzAsIHYsIDEsIHZdLCBpICogNCk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmNvdW50IC0gMSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBpICogMjtcbiAgICAgICAgICAgIGluZGV4LnNldChbaW5kICsgMCwgaW5kICsgMSwgaW5kICsgMl0sIChpbmQgKyAwKSAqIDMpO1xuICAgICAgICAgICAgaW5kZXguc2V0KFtpbmQgKyAyLCBpbmQgKyAxLCBpbmQgKyAzXSwgKGluZCArIDEpICogMyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZW9tZXRyeSA9ICh0aGlzLmdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KFxuICAgICAgICAgICAgZ2wsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0aGlzLnBvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgcHJldjogeyBzaXplOiAzLCBkYXRhOiB0aGlzLnByZXYgfSxcbiAgICAgICAgICAgICAgICBuZXh0OiB7IHNpemU6IDMsIGRhdGE6IHRoaXMubmV4dCB9LFxuICAgICAgICAgICAgICAgIHNpZGU6IHsgc2l6ZTogMSwgZGF0YTogc2lkZSB9LFxuICAgICAgICAgICAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHV2IH0sXG4gICAgICAgICAgICAgICAgaW5kZXg6IHsgc2l6ZTogMSwgZGF0YTogaW5kZXggfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIGR5bmFtaWMgYnVmZmVyc1xuICAgICAgICB0aGlzLnVwZGF0ZUdlb21ldHJ5KCk7XG5cbiAgICAgICAgaWYgKCF1bmlmb3Jtcy51UmVzb2x1dGlvbikgdGhpcy5yZXNvbHV0aW9uID0gdW5pZm9ybXMudVJlc29sdXRpb24gPSB7IHZhbHVlOiBuZXcgVmVjMigpIH07XG4gICAgICAgIGlmICghdW5pZm9ybXMudURQUikgdGhpcy5kcHIgPSB1bmlmb3Jtcy51RFBSID0geyB2YWx1ZTogMSB9O1xuICAgICAgICBpZiAoIXVuaWZvcm1zLnVUaGlja25lc3MpIHRoaXMudGhpY2tuZXNzID0gdW5pZm9ybXMudVRoaWNrbmVzcyA9IHsgdmFsdWU6IDEgfTtcbiAgICAgICAgaWYgKCF1bmlmb3Jtcy51Q29sb3IpIHRoaXMuY29sb3IgPSB1bmlmb3Jtcy51Q29sb3IgPSB7IHZhbHVlOiBuZXcgQ29sb3IoJyMwMDAnKSB9O1xuICAgICAgICBpZiAoIXVuaWZvcm1zLnVNaXRlcikgdGhpcy5taXRlciA9IHVuaWZvcm1zLnVNaXRlciA9IHsgdmFsdWU6IDEgfTtcblxuICAgICAgICAvLyBTZXQgc2l6ZSB1bmlmb3JtcycgdmFsdWVzXG4gICAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9ICh0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICB1bmlmb3JtcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKGdsLCB7IGdlb21ldHJ5LCBwcm9ncmFtIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgICAgICAgICBwLnRvQXJyYXkodGhpcy5wb3NpdGlvbiwgaSAqIDMgKiAyKTtcbiAgICAgICAgICAgIHAudG9BcnJheSh0aGlzLnBvc2l0aW9uLCBpICogMyAqIDIgKyAzKTtcblxuICAgICAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZmlyc3QgcG9pbnQsIGNhbGN1bGF0ZSBwcmV2IHVzaW5nIHRoZSBkaXN0YW5jZSB0byAybmQgcG9pbnRcbiAgICAgICAgICAgICAgICB0bXAuY29weShwKVxuICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucG9pbnRzW2kgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZChwKTtcbiAgICAgICAgICAgICAgICB0bXAudG9BcnJheSh0aGlzLnByZXYsIGkgKiAzICogMik7XG4gICAgICAgICAgICAgICAgdG1wLnRvQXJyYXkodGhpcy5wcmV2LCBpICogMyAqIDIgKyAzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC50b0FycmF5KHRoaXMubmV4dCwgKGkgLSAxKSAqIDMgKiAyKTtcbiAgICAgICAgICAgICAgICBwLnRvQXJyYXkodGhpcy5uZXh0LCAoaSAtIDEpICogMyAqIDIgKyAzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBsYXN0IHBvaW50LCBjYWxjdWxhdGUgbmV4dCB1c2luZyBkaXN0YW5jZSB0byAybmQgbGFzdCBwb2ludFxuICAgICAgICAgICAgICAgIHRtcC5jb3B5KHApXG4gICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wb2ludHNbaSAtIDFdKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKHApO1xuICAgICAgICAgICAgICAgIHRtcC50b0FycmF5KHRoaXMubmV4dCwgaSAqIDMgKiAyKTtcbiAgICAgICAgICAgICAgICB0bXAudG9BcnJheSh0aGlzLm5leHQsIGkgKiAzICogMiArIDMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwLnRvQXJyYXkodGhpcy5wcmV2LCAoaSArIDEpICogMyAqIDIpO1xuICAgICAgICAgICAgICAgIHAudG9BcnJheSh0aGlzLnByZXYsIChpICsgMSkgKiAzICogMiArIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucHJldi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5uZXh0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IG5lZWQgdG8gY2FsbCBpZiBub3QgaGFuZGxpbmcgcmVzb2x1dGlvbiB1bmlmb3JtcyBtYW51YWxseVxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgLy8gVXBkYXRlIGF1dG9tYXRpYyB1bmlmb3JtcyBpZiBub3Qgb3ZlcnJpZGRlblxuICAgICAgICBpZiAodGhpcy5yZXNvbHV0aW9uKSB0aGlzLnJlc29sdXRpb24udmFsdWUuc2V0KHRoaXMuZ2wuY2FudmFzLndpZHRoLCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5kcHIpIHRoaXMuZHByLnZhbHVlID0gdGhpcy5nbC5yZW5kZXJlci5kcHI7XG4gICAgfVxufVxuXG5jb25zdCBkZWZhdWx0VmVydGV4ID0gLyogZ2xzbCAqLyBgXG4gICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG4gICAgYXR0cmlidXRlIHZlYzMgbmV4dDtcbiAgICBhdHRyaWJ1dGUgdmVjMyBwcmV2O1xuICAgIGF0dHJpYnV0ZSB2ZWMyIHV2O1xuICAgIGF0dHJpYnV0ZSBmbG9hdCBzaWRlO1xuXG4gICAgdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcbiAgICB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcbiAgICB1bmlmb3JtIHZlYzIgdVJlc29sdXRpb247XG4gICAgdW5pZm9ybSBmbG9hdCB1RFBSO1xuICAgIHVuaWZvcm0gZmxvYXQgdVRoaWNrbmVzcztcbiAgICB1bmlmb3JtIGZsb2F0IHVNaXRlcjtcblxuICAgIHZhcnlpbmcgdmVjMiB2VXY7XG5cbiAgICB2ZWM0IGdldFBvc2l0aW9uKCkge1xuICAgICAgICBtYXQ0IG12cCA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgIHZlYzQgY3VycmVudCA9IG12cCAqIHZlYzQocG9zaXRpb24sIDEpO1xuICAgICAgICB2ZWM0IG5leHRQb3MgPSBtdnAgKiB2ZWM0KG5leHQsIDEpO1xuICAgICAgICB2ZWM0IHByZXZQb3MgPSBtdnAgKiB2ZWM0KHByZXYsIDEpO1xuXG4gICAgICAgIHZlYzIgYXNwZWN0ID0gdmVjMih1UmVzb2x1dGlvbi54IC8gdVJlc29sdXRpb24ueSwgMSk7ICAgIFxuICAgICAgICB2ZWMyIGN1cnJlbnRTY3JlZW4gPSBjdXJyZW50Lnh5IC8gY3VycmVudC53ICogYXNwZWN0O1xuICAgICAgICB2ZWMyIG5leHRTY3JlZW4gPSBuZXh0UG9zLnh5IC8gbmV4dFBvcy53ICogYXNwZWN0O1xuICAgICAgICB2ZWMyIHByZXZTY3JlZW4gPSBwcmV2UG9zLnh5IC8gcHJldlBvcy53ICogYXNwZWN0O1xuICAgIFxuICAgICAgICB2ZWMyIGRpcjEgPSBub3JtYWxpemUoY3VycmVudFNjcmVlbiAtIHByZXZTY3JlZW4pO1xuICAgICAgICB2ZWMyIGRpcjIgPSBub3JtYWxpemUobmV4dFNjcmVlbiAtIGN1cnJlbnRTY3JlZW4pO1xuICAgICAgICB2ZWMyIGRpciA9IG5vcm1hbGl6ZShkaXIxICsgZGlyMik7XG4gICAgXG4gICAgICAgIHZlYzIgbm9ybWFsID0gdmVjMigtZGlyLnksIGRpci54KTtcbiAgICAgICAgbm9ybWFsIC89IG1peCgxLjAsIG1heCgwLjMsIGRvdChub3JtYWwsIHZlYzIoLWRpcjEueSwgZGlyMS54KSkpLCB1TWl0ZXIpO1xuICAgICAgICBub3JtYWwgLz0gYXNwZWN0O1xuXG4gICAgICAgIGZsb2F0IHBpeGVsV2lkdGhSYXRpbyA9IDEuMCAvICh1UmVzb2x1dGlvbi55IC8gdURQUik7XG4gICAgICAgIGZsb2F0IHBpeGVsV2lkdGggPSBjdXJyZW50LncgKiBwaXhlbFdpZHRoUmF0aW87XG4gICAgICAgIG5vcm1hbCAqPSBwaXhlbFdpZHRoICogdVRoaWNrbmVzcztcbiAgICAgICAgY3VycmVudC54eSAtPSBub3JtYWwgKiBzaWRlO1xuICAgIFxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgIHZVdiA9IHV2O1xuICAgICAgICBnbF9Qb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG4gICAgfVxuYDtcblxuY29uc3QgZGVmYXVsdEZyYWdtZW50ID0gLyogZ2xzbCAqLyBgXG4gICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjtcbiAgICBcbiAgICB2YXJ5aW5nIHZlYzIgdlV2O1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgICBnbF9GcmFnQ29sb3IucmdiID0gdUNvbG9yO1xuICAgICAgICBnbF9GcmFnQ29sb3IuYSA9IDEuMDtcbiAgICB9XG5gO1xuIiwiaW1wb3J0ICogYXMgVmVjMkZ1bmMgZnJvbSAnLi9mdW5jdGlvbnMvVmVjMkZ1bmMuanMnO1xuXG5leHBvcnQgY2xhc3MgVmVjMiBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IHgpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9XG5cbiAgICBnZXQgeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMV07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzBdID0gdjtcbiAgICB9XG5cbiAgICBzZXQgeSh2KSB7XG4gICAgICAgIHRoaXNbMV0gPSB2O1xuICAgIH1cblxuICAgIHNldCh4LCB5ID0geCkge1xuICAgICAgICBpZiAoeC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkoeCk7XG4gICAgICAgIFZlYzJGdW5jLnNldCh0aGlzLCB4LCB5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSh2KSB7XG4gICAgICAgIFZlYzJGdW5jLmNvcHkodGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZCh2YSwgdmIpIHtcbiAgICAgICAgaWYgKHZiKSBWZWMyRnVuYy5hZGQodGhpcywgdmEsIHZiKTtcbiAgICAgICAgZWxzZSBWZWMyRnVuYy5hZGQodGhpcywgdGhpcywgdmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWIodmEsIHZiKSB7XG4gICAgICAgIGlmICh2YikgVmVjMkZ1bmMuc3VidHJhY3QodGhpcywgdmEsIHZiKTtcbiAgICAgICAgZWxzZSBWZWMyRnVuYy5zdWJ0cmFjdCh0aGlzLCB0aGlzLCB2YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KHYpIHtcbiAgICAgICAgaWYgKHYubGVuZ3RoKSBWZWMyRnVuYy5tdWx0aXBseSh0aGlzLCB0aGlzLCB2KTtcbiAgICAgICAgZWxzZSBWZWMyRnVuYy5zY2FsZSh0aGlzLCB0aGlzLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGl2aWRlKHYpIHtcbiAgICAgICAgaWYgKHYubGVuZ3RoKSBWZWMyRnVuYy5kaXZpZGUodGhpcywgdGhpcywgdik7XG4gICAgICAgIGVsc2UgVmVjMkZ1bmMuc2NhbGUodGhpcywgdGhpcywgMSAvIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbnZlcnNlKHYgPSB0aGlzKSB7XG4gICAgICAgIFZlYzJGdW5jLmludmVyc2UodGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbid0IHVzZSAnbGVuZ3RoJyBhcyBBcnJheS5wcm90b3R5cGUgdXNlcyBpdFxuICAgIGxlbigpIHtcbiAgICAgICAgcmV0dXJuIFZlYzJGdW5jLmxlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZSh2KSB7XG4gICAgICAgIGlmICh2KSByZXR1cm4gVmVjMkZ1bmMuZGlzdGFuY2UodGhpcywgdik7XG4gICAgICAgIGVsc2UgcmV0dXJuIFZlYzJGdW5jLmxlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBzcXVhcmVkTGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVkRGlzdGFuY2UoKTtcbiAgICB9XG5cbiAgICBzcXVhcmVkRGlzdGFuY2Uodikge1xuICAgICAgICBpZiAodikgcmV0dXJuIFZlYzJGdW5jLnNxdWFyZWREaXN0YW5jZSh0aGlzLCB2KTtcbiAgICAgICAgZWxzZSByZXR1cm4gVmVjMkZ1bmMuc3F1YXJlZExlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBuZWdhdGUodiA9IHRoaXMpIHtcbiAgICAgICAgVmVjMkZ1bmMubmVnYXRlKHRoaXMsIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjcm9zcyh2YSwgdmIpIHtcbiAgICAgICAgaWYgKHZiKSByZXR1cm4gVmVjMkZ1bmMuY3Jvc3ModmEsIHZiKTtcbiAgICAgICAgcmV0dXJuIFZlYzJGdW5jLmNyb3NzKHRoaXMsIHZhKTtcbiAgICB9XG5cbiAgICBzY2FsZSh2KSB7XG4gICAgICAgIFZlYzJGdW5jLnNjYWxlKHRoaXMsIHRoaXMsIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIFZlYzJGdW5jLm5vcm1hbGl6ZSh0aGlzLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZG90KHYpIHtcbiAgICAgICAgcmV0dXJuIFZlYzJGdW5jLmRvdCh0aGlzLCB2KTtcbiAgICB9XG5cbiAgICBlcXVhbHModikge1xuICAgICAgICByZXR1cm4gVmVjMkZ1bmMuZXhhY3RFcXVhbHModGhpcywgdik7XG4gICAgfVxuXG4gICAgYXBwbHlNYXRyaXgzKG1hdDMpIHtcbiAgICAgICAgVmVjMkZ1bmMudHJhbnNmb3JtTWF0Myh0aGlzLCB0aGlzLCBtYXQzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXBwbHlNYXRyaXg0KG1hdDQpIHtcbiAgICAgICAgVmVjMkZ1bmMudHJhbnNmb3JtTWF0NCh0aGlzLCB0aGlzLCBtYXQ0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGVycCh2LCBhKSB7XG4gICAgICAgIFZlYzJGdW5jLmxlcnAodGhpcywgdGhpcywgdiwgYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlYzIodGhpc1swXSwgdGhpc1sxXSk7XG4gICAgfVxuXG4gICAgZnJvbUFycmF5KGEsIG8gPSAwKSB7XG4gICAgICAgIHRoaXNbMF0gPSBhW29dO1xuICAgICAgICB0aGlzWzFdID0gYVtvICsgMV07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvQXJyYXkoYSA9IFtdLCBvID0gMCkge1xuICAgICAgICBhW29dID0gdGhpc1swXTtcbiAgICAgICAgYVtvICsgMV0gPSB0aGlzWzFdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzIgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSkge1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzIgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV07XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG59XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXTtcbiAgICBvdXRbMV0gPSAtYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICAgIG91dFswXSA9IDEuMCAvIGFbMF07XG4gICAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIHZhciBsZW4gPSB4ICogeCArIHkgKiB5O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB9XG4gICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKiBOb3RlIHRoYXQgdGhlIGNyb3NzIHByb2R1Y3QgcmV0dXJucyBhIHNjYWxhclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gY3Jvc3MgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXTtcbiAgICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJkfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGV4YWN0bHkgaGF2ZSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYzRjODczODBiMjAxZTEwZjY1ZlwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic3ByaW5nIiwiZnJpY3Rpb24iLCJjb3VudCIsInBvaW50cyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImdyb3VwIiwiY3JlYXRlUG9seWxpbmUiLCJpIiwicHVzaCIsInBvbHlsaW5lIiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInVUaGlja25lc3MiLCJtZXNoIiwic2V0UGFyZW50IiwicmVzaXplIiwib25Nb3VzZU1vdmUiLCJlIiwiY29uc29sZSIsImxvZyIsInNldCIsIngiLCJlbmQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvblJlc2l6ZSIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJzdWIiLCJtdWx0aXBseSIsImFkZCIsIkdlb21ldHJ5IiwiUHJvZ3JhbSIsIk1lc2giLCJWZWMyIiwiZGVmYXVsdFZlcnRleCIsImZyYWdtZW50IiwiZGVmYXVsdEZyYWdtZW50IiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwiRmxvYXQzMkFycmF5IiwicHJldiIsIm5leHQiLCJzaWRlIiwidXYiLCJpbmRleCIsIlVpbnQxNkFycmF5IiwidiIsImluZCIsImdlb21ldHJ5IiwiT2JqZWN0IiwiYXNzaWduIiwic2l6ZSIsImRhdGEiLCJ1cGRhdGVHZW9tZXRyeSIsInVSZXNvbHV0aW9uIiwicmVzb2x1dGlvbiIsInVEUFIiLCJkcHIiLCJ0aGlja25lc3MiLCJjb2xvciIsInVNaXRlciIsIm1pdGVyIiwicHJvZ3JhbSIsImZvckVhY2giLCJwIiwidG9BcnJheSIsIm5lZWRzVXBkYXRlIiwiY2FudmFzIiwiVmVjMkZ1bmMiLCJBcnJheSIsInZhIiwidmIiLCJzdWJ0cmFjdCIsInNjYWxlIiwiZGl2aWRlIiwiaW52ZXJzZSIsImxlbiIsImRpc3RhbmNlIiwic3F1YXJlZExlbiIsInNxdWFyZWREaXN0YW5jZSIsInNxdWFyZWRMZW5ndGgiLCJuZWdhdGUiLCJjcm9zcyIsIm5vcm1hbGl6ZSIsImRvdCIsImVxdWFscyIsImV4YWN0RXF1YWxzIiwiYXBwbHlNYXRyaXgzIiwibWF0MyIsInRyYW5zZm9ybU1hdDMiLCJhcHBseU1hdHJpeDQiLCJtYXQ0IiwidHJhbnNmb3JtTWF0NCIsImEiLCJjbG9uZSIsImZyb21BcnJheSIsIm8iLCJFUFNJTE9OIiwib3V0IiwiYiIsIk1hdGgiLCJzcXJ0IiwidCIsImF4IiwiYXkiLCJ0cmFuc2Zvcm1NYXQyIiwibSIsInRyYW5zZm9ybU1hdDJkIl0sInNvdXJjZVJvb3QiOiIifQ==