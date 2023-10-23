"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/Media.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/Media.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/gallery-vertex.glsl */ "./app/shaders/gallery-vertex.glsl");
/* harmony import */ var _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shaders/gallery-fragment.glsl */ "./app/shaders/gallery-fragment.glsl");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./app/components/Canvas/Home/Title.js");
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTitle */ "./app/components/Canvas/Home/SubTitle.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    gl,
    geometry,
    scene,
    sizes,
    title,
    subTitle,
    renderer
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.title = title;
    this.subTitle = subTitle;
    this.renderer = renderer;
    this.time = 0;
    this.extra = 0;
    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createTitle();
  }
  createTexture() {
    // this.texture = window.TEXTURES[this.element.getAttribute("src")]
    const image = this.element.querySelector("img");
    this.texture = window.TEXTURES[image.getAttribute("src")];
  }
  createProgram() {
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_4__.Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
      vertex: _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        tMap: {
          value: this.texture
        },
        // uOffset: {
        //   value: 0
        // }
        uStrength: {
          value: 0
        },
        uViewportSizes: {
          value: [this.sizes.width, this.sizes.height]
        },
        uSpeed: {
          value: 0
        },
        uTime: {
          value: 0
        }
      }
    });
  }
  createMesh() {
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_5__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.mesh.setParent(this.scene);
  }
  createTitle() {
    this.titleText = new _Title__WEBPACK_IMPORTED_MODULE_2__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.title
    });
    this.subTitleText = new _SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.subTitle
    });
  }
  createBounds({
    sizes
  }) {
    this.sizes = sizes;
    this.bounds = this.element.getBoundingClientRect();
    this.updateScale();
    this.updateX();
    this.updateY();
  }
  show() {
    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1
    });
  }
  hide() {
    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(this.program.uniforms.uAlpha, {
      value: 1
    });
  }
  updateScale() {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;
    this.mesh.scale.x = this.sizes.width * this.width;
    this.mesh.scale.y = this.sizes.height * this.height;
  }
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;
    this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra;
  }
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height;
  }
  update(scroll, speed) {
    if (!this.bounds) return;
    this.updateX(scroll);
    this.updateY(0);

    // const OFFSET_SCALE = 0.1
    // const offset = [speed * OFFSET_SCALE, speed * OFFSET_SCALE]
    // this.program.uniforms.uOffset.value = offset
  }

  onResize(sizes, scroll) {
    this.extra = 0;
    this.createBounds(sizes);
    this.updateX(scroll);
    this.updateY(0);
  }
});

/***/ }),

/***/ "./app/components/Canvas/Home/SubTitle.js":
/*!************************************************!*\
  !*** ./app/components/Canvas/Home/SubTitle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Text.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.json */ "./fonts/ppneueMontreal-medium.json");
/* harmony import */ var _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.png */ "./fonts/ppneueMontreal-medium.png");
/* harmony import */ var _shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shaders/text-fragment.glsl */ "./app/shaders/text-fragment.glsl");
/* harmony import */ var _shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shaders/text-vertex.glsl */ "./app/shaders/text-vertex.glsl");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    plane,
    renderer,
    text
  }) {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.createShader();
    this.createMesh();
  }
  createShader() {
    const texture = new ogl__WEBPACK_IMPORTED_MODULE_5__.Texture(this.gl, {
      generateMipmaps: false
    });
    const textureImage = new Image();
    textureImage.src = _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    textureImage.onload = _ => texture.image = textureImage;
    const vertex100 = `${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}`;
    const fragment100 = `
      #extension GL_OES_standard_derivatives : enable

      precision highp float;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    const vertex300 = `#version 300 es

      #define attribute in
      #define varying out

      ${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}
    `;
    const fragment300 = `#version 300 es

      precision highp float;

      #define varying in
      #define texture2D texture
      #define gl_FragColor FragColor

      out vec4 FragColor;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    let fragmentShader = fragment100;
    let vertexShader = vertex100;
    if (this.renderer.isWebgl2) {
      fragmentShader = fragment300;
      vertexShader = vertex300;
    }
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_6__.Program(this.gl, {
      cullFace: null,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_7__.Color("#000")
        },
        tMap: {
          value: texture
        }
      }
    });
  }
  createMesh() {
    const text = new ogl__WEBPACK_IMPORTED_MODULE_8__.Text({
      font: _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__,
      letterSpacing: -0.05,
      size: 0.03,
      text: this.text,
      wordSpacing: 0
    });
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_9__.Geometry(this.gl, {
      position: {
        size: 3,
        data: text.buffers.position
      },
      uv: {
        size: 2,
        data: text.buffers.uv
      },
      id: {
        size: 1,
        data: text.buffers.id
      },
      index: {
        data: text.buffers.index
      }
    });
    geometry.computeBoundingBox();
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_10__.Mesh(this.gl, {
      geometry,
      program: this.program
    });
    this.mesh.position.y = -this.plane.scale.y * 0.5 - 0.03;
    this.mesh.position.x = -this.plane.scale.x * 0.5;
    this.mesh.setParent(this.plane);
  }
});

/***/ }),

/***/ "./app/components/Canvas/Home/Title.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/Title.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Text.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.json */ "./fonts/ppneueMontreal-medium.json");
/* harmony import */ var _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.png */ "./fonts/ppneueMontreal-medium.png");
/* harmony import */ var _shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shaders/text-fragment.glsl */ "./app/shaders/text-fragment.glsl");
/* harmony import */ var _shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shaders/text-vertex.glsl */ "./app/shaders/text-vertex.glsl");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    plane,
    renderer,
    text
  }) {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.createShader();
    this.createMesh();
    console.log(this.text, "text");
  }
  createShader() {
    const texture = new ogl__WEBPACK_IMPORTED_MODULE_5__.Texture(this.gl, {
      generateMipmaps: false
    });
    const textureImage = new Image();
    textureImage.src = _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    textureImage.onload = _ => texture.image = textureImage;
    const vertex100 = `${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}`;
    const fragment100 = `
      #extension GL_OES_standard_derivatives : enable

      precision highp float;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    const vertex300 = `#version 300 es

      #define attribute in
      #define varying out

      ${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}
    `;
    const fragment300 = `#version 300 es

      precision highp float;

      #define varying in
      #define texture2D texture
      #define gl_FragColor FragColor

      out vec4 FragColor;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    let fragmentShader = fragment100;
    let vertexShader = vertex100;
    if (this.renderer.isWebgl2) {
      fragmentShader = fragment300;
      vertexShader = vertex300;
    }
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_6__.Program(this.gl, {
      cullFace: null,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_7__.Color("#000")
        },
        tMap: {
          value: texture
        }
      }
    });
  }
  createMesh() {
    const text = new ogl__WEBPACK_IMPORTED_MODULE_8__.Text({
      font: _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__,
      letterSpacing: -0.05,
      size: 0.08,
      text: this.text,
      wordSpacing: 0
    });
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_9__.Geometry(this.gl, {
      position: {
        size: 3,
        data: text.buffers.position
      },
      uv: {
        size: 2,
        data: text.buffers.uv
      },
      id: {
        size: 1,
        data: text.buffers.id
      },
      index: {
        data: text.buffers.index
      }
    });
    geometry.computeBoundingBox();
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_10__.Mesh(this.gl, {
      geometry,
      program: this.program
    });
    this.mesh.position.y = -this.plane.scale.y * 0.5 - 0.085;
    this.mesh.position.x = -this.plane.scale.x * 0.5;
    this.mesh.setParent(this.plane);
  }
});

/***/ }),

/***/ "./fonts/ppneueMontreal-medium.png":
/*!*****************************************!*\
  !*** ./fonts/ppneueMontreal-medium.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7c41013c90e8a2b9bb909220c2ff34d6.png");

/***/ }),

/***/ "./app/shaders/gallery-fragment.glsl":
/*!*******************************************!*\
  !*** ./app/shaders/gallery-fragment.glsl ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// precision highp float;\n\n// uniform sampler2D tMap;\n// uniform vec2 uOffset;\n\n// varying vec2 vUv;\n\n// vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset){\n//     float r = texture2D(textureImage, uv + offset * 0.3).r;\n//     vec2 gb = texture2D(textureImage, uv).gb;\n//     return vec3(r, gb);\n// }\n\n// void main() {\n//     vec3 colorShifted = rgbShift(tMap, vUv, uOffset);\n//     // gl_FragColor = vec4(colorShifted, 1.0);\n//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Solid red color\n// }\n\nprecision highp float;\n#define GLSLIFY 1\n\n// Uniform for the texture\nuniform sampler2D tMap;\n\n// Varying for the UV coordinates\nvarying vec2 vUv;\n\nvoid main() {\n    vec3 textureColor = texture2D(tMap, vUv).rgb;\n    gl_FragColor = vec4(textureColor, 1.0);\n}\n");

/***/ }),

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

/***/ }),

/***/ "./app/shaders/text-fragment.glsl":
/*!****************************************!*\
  !*** ./app/shaders/text-fragment.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nuniform vec3 uColor;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 color = texture2D(tMap, vUv).rgb;\n\n  float signed = max(min(color.r, color.g), min(max(color.r, color.g), color.b)) - 0.5;\n  float d = fwidth(signed);\n  float alpha = smoothstep(-d, d, signed);\n\n  if (alpha < 0.02) discard;\n\n  gl_FragColor = vec4(uColor, alpha);\n}\n");

/***/ }),

/***/ "./app/shaders/text-vertex.glsl":
/*!**************************************!*\
  !*** ./app/shaders/text-vertex.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n");

/***/ }),

/***/ "./node_modules/ogl/src/core/Mesh.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/core/Mesh.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform.js */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Mat3.js */ "./node_modules/ogl/src/math/Mat3.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");



let ID = 0;
class Mesh extends _Transform_js__WEBPACK_IMPORTED_MODULE_0__.Transform {
  constructor(gl, {
    geometry,
    program,
    mode = gl.TRIANGLES,
    frustumCulled = true,
    renderOrder = 0
  } = {}) {
    super();
    if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
    this.gl = gl;
    this.id = ID++;
    this.geometry = geometry;
    this.program = program;
    this.mode = mode;

    // Used to skip frustum culling
    this.frustumCulled = frustumCulled;

    // Override sorting to force an order
    this.renderOrder = renderOrder;
    this.modelViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__.Mat4();
    this.normalMatrix = new _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__.Mat3();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }
  onBeforeRender(f) {
    this.beforeRenderCallbacks.push(f);
    return this;
  }
  onAfterRender(f) {
    this.afterRenderCallbacks.push(f);
    return this;
  }
  draw({
    camera
  } = {}) {
    if (camera) {
      // Add empty matrix uniforms to program if unset
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: {
            value: null
          },
          viewMatrix: {
            value: null
          },
          modelViewMatrix: {
            value: null
          },
          normalMatrix: {
            value: null
          },
          projectionMatrix: {
            value: null
          },
          cameraPosition: {
            value: null
          }
        });
      }

      // Set the matrix uniforms
      this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
      this.program.uniforms.cameraPosition.value = camera.worldPosition;
      this.program.uniforms.viewMatrix.value = camera.viewMatrix;
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    }
    this.beforeRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));

    // determine if faces need to be flipped - when mesh scaled negatively
    let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces
    });
    this.geometry.draw({
      mode: this.mode,
      program: this.program
    });
    this.afterRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Program.js":
/*!**********************************************!*\
  !*** ./node_modules/ogl/src/core/Program.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Program: () => (/* binding */ Program)
/* harmony export */ });
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

let ID = 1;

// cache of typed arrays used to flatten uniform arrays
const arrayCacheF32 = {};
class Program {
  constructor(gl, {
    vertex,
    fragment,
    uniforms = {},
    transparent = false,
    cullFace = gl.BACK,
    frontFace = gl.CCW,
    depthTest = true,
    depthWrite = true,
    depthFunc = gl.LESS
  } = {}) {
    if (!gl.canvas) console.error('gl not passed as first argument to Program');
    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID++;
    if (!vertex) console.warn('vertex shader not supplied');
    if (!fragment) console.warn('fragment shader not supplied');

    // Store program state
    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {};

    // set default blendFunc if transparent flagged
    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    // compile vertex shader and log errors
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);
    if (gl.getShaderInfoLog(vertexShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
    }

    // compile fragment shader and log errors
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);
    if (gl.getShaderInfoLog(fragmentShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
    }

    // compile program and log errors
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    }

    // Remove shader once linked
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    // Get active uniform locations
    this.uniformLocations = new Map();
    let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
      let uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));

      // split uniforms' names to separate array and struct declarations
      const split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];
      uniform.nameComponents = split.slice(1);
    }

    // Get active attribute locations
    this.attributeLocations = new Map();
    const locations = [];
    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
      const attribute = gl.getActiveAttrib(this.program, aIndex);
      const location = gl.getAttribLocation(this.program, attribute.name);
      // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
      if (location === -1) continue;
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute, location);
    }
    this.attributeOrder = locations.join('');
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    this.blendFunc.src = src;
    this.blendFunc.dst = dst;
    this.blendFunc.srcAlpha = srcAlpha;
    this.blendFunc.dstAlpha = dstAlpha;
    if (src) this.transparent = true;
  }
  setBlendEquation(modeRGB, modeAlpha) {
    this.blendEquation.modeRGB = modeRGB;
    this.blendEquation.modeAlpha = modeAlpha;
  }
  applyState() {
    if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
    if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
    if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
    if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }
  use({
    flipFaces = false
  } = {}) {
    let textureUnit = -1;
    const programActive = this.gl.renderer.state.currentProgram === this.id;

    // Avoid gl call if program already in use
    if (!programActive) {
      this.gl.useProgram(this.program);
      this.gl.renderer.state.currentProgram = this.id;
    }

    // Set only the active uniforms found in the shader
    this.uniformLocations.forEach((location, activeUniform) => {
      let uniform = this.uniforms[activeUniform.uniformName];
      for (const component of activeUniform.nameComponents) {
        if (!uniform) break;
        if (component in uniform) {
          uniform = uniform[component];
        } else if (Array.isArray(uniform.value)) {
          break;
        } else {
          uniform = undefined;
          break;
        }
      }
      if (!uniform) {
        return warn(`Active uniform ${activeUniform.name} has not been supplied`);
      }
      if (uniform && uniform.value === undefined) {
        return warn(`${activeUniform.name} uniform is missing a value parameter`);
      }
      if (uniform.value.texture) {
        textureUnit = textureUnit + 1;

        // Check if texture needs to be updated
        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location, textureUnit);
      }

      // For texture arrays, set uniform as an array of texture units instead of just one
      if (uniform.value.length && uniform.value[0].texture) {
        const textureUnits = [];
        uniform.value.forEach(value => {
          textureUnit = textureUnit + 1;
          value.update(textureUnit);
          textureUnits.push(textureUnit);
        });
        return setUniform(this.gl, activeUniform.type, location, textureUnits);
      }
      setUniform(this.gl, activeUniform.type, location, uniform.value);
    });
    this.applyState();
    if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  const setValue = gl.renderer.state.uniformLocations.get(location);

  // Avoid redundant uniform commands
  if (value.length) {
    if (setValue === undefined || setValue.length !== value.length) {
      // clone array to store as cache
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value)) return;

      // Update cached array values
      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value) return;
    gl.renderer.state.uniformLocations.set(location, value);
  }
  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    // FLOAT
    case 35664:
      return gl.uniform2fv(location, value);
    // FLOAT_VEC2
    case 35665:
      return gl.uniform3fv(location, value);
    // FLOAT_VEC3
    case 35666:
      return gl.uniform4fv(location, value);
    // FLOAT_VEC4
    case 35670: // BOOL
    case 5124: // INT
    case 35678: // SAMPLER_2D
    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    // SAMPLER_CUBE
    case 35671: // BOOL_VEC2
    case 35667:
      return gl.uniform2iv(location, value);
    // INT_VEC2
    case 35672: // BOOL_VEC3
    case 35668:
      return gl.uniform3iv(location, value);
    // INT_VEC3
    case 35673: // BOOL_VEC4
    case 35669:
      return gl.uniform4iv(location, value);
    // INT_VEC4
    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    // FLOAT_MAT2
    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    // FLOAT_MAT3
    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
    // FLOAT_MAT4
  }
}

function addLineNumbers(string) {
  let lines = string.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }
  return lines.join('\n');
}
function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === undefined) return a;
  const length = arrayLen * valueLen;
  let value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);
  for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
  return value;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function setArray(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}
let warnCount = 0;
function warn(message) {
  if (warnCount > 100) return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}

/***/ }),

/***/ "./node_modules/ogl/src/extras/Text.js":
/*!*********************************************!*\
  !*** ./node_modules/ogl/src/extras/Text.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
function Text({
  font,
  text,
  width = Infinity,
  align = 'left',
  size = 1,
  letterSpacing = 0,
  lineHeight = 1.4,
  wordSpacing = 0,
  wordBreak = false
}) {
  const _this = this;
  let glyphs, buffers;
  let fontHeight, baseline, scale;
  const newline = /\n/;
  const whitespace = /\s/;
  {
    parseFont();
    createGeometry();
  }
  function parseFont() {
    glyphs = {};
    font.chars.forEach(d => glyphs[d.char] = d);
  }
  function createGeometry() {
    fontHeight = font.common.lineHeight;
    baseline = font.common.base;

    // Use baseline so that actual text height is as close to 'size' value as possible
    scale = size / baseline;

    // Strip spaces and newlines to get actual character length for buffers
    let chars = text.replace(/[ \n]/g, '');
    let numChars = chars.length;

    // Create output buffers
    buffers = {
      position: new Float32Array(numChars * 4 * 3),
      uv: new Float32Array(numChars * 4 * 2),
      id: new Float32Array(numChars * 4),
      index: new Uint16Array(numChars * 6)
    };

    // Set values for buffers that don't require calculation
    for (let i = 0; i < numChars; i++) {
      buffers.id.set([i, i, i, i], i * 4);
      buffers.index.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
    }
    layout();
  }
  function layout() {
    const lines = [];
    let cursor = 0;
    let wordCursor = 0;
    let wordWidth = 0;
    let line = newLine();
    function newLine() {
      const line = {
        width: 0,
        glyphs: []
      };
      lines.push(line);
      wordCursor = cursor;
      wordWidth = 0;
      return line;
    }
    let maxTimes = 100;
    let count = 0;
    while (cursor < text.length && count < maxTimes) {
      count++;
      const char = text[cursor];

      // Skip whitespace at start of line
      if (!line.width && whitespace.test(char)) {
        cursor++;
        wordCursor = cursor;
        wordWidth = 0;
        continue;
      }

      // If newline char, skip to next line
      if (newline.test(char)) {
        cursor++;
        line = newLine();
        continue;
      }
      const glyph = glyphs[char] || glyphs[' '];

      // Find any applicable kern pairs
      if (line.glyphs.length) {
        const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
        let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
        line.width += kern;
        wordWidth += kern;
      }

      // add char to line
      line.glyphs.push([glyph, line.width]);

      // calculate advance for next glyph
      let advance = 0;

      // If whitespace, update location of current word for line breaks
      if (whitespace.test(char)) {
        wordCursor = cursor;
        wordWidth = 0;

        // Add wordspacing
        advance += wordSpacing * size;
      } else {
        // Add letterspacing
        advance += letterSpacing * size;
      }
      advance += glyph.xadvance * scale;
      line.width += advance;
      wordWidth += advance;

      // If width defined
      if (line.width > width) {
        // If can break words, undo latest glyph if line not empty and create new line
        if (wordBreak && line.glyphs.length > 1) {
          line.width -= advance;
          line.glyphs.pop();
          line = newLine();
          continue;

          // If not first word, undo current word and cursor and create new line
        } else if (!wordBreak && wordWidth !== line.width) {
          let numGlyphs = cursor - wordCursor + 1;
          line.glyphs.splice(-numGlyphs, numGlyphs);
          cursor = wordCursor;
          line.width -= wordWidth;
          line = newLine();
          continue;
        }
      }
      cursor++;
      // Reset infinite loop catch
      count = 0;
    }

    // Remove last line if empty
    if (!line.width) lines.pop();
    populateBuffers(lines);
  }
  function populateBuffers(lines) {
    const texW = font.common.scaleW;
    const texH = font.common.scaleH;

    // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.
    let y = 0.07 * size;
    let j = 0;
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      let line = lines[lineIndex];
      for (let i = 0; i < line.glyphs.length; i++) {
        const glyph = line.glyphs[i][0];
        let x = line.glyphs[i][1];
        if (align === 'center') {
          x -= line.width * 0.5;
        } else if (align === 'right') {
          x -= line.width;
        }

        // If space, don't add to geometry
        if (whitespace.test(glyph.char)) continue;

        // Apply char sprite offsets
        x += glyph.xoffset * scale;
        y -= glyph.yoffset * scale;

        // each letter is a quad. axis bottom left
        let w = glyph.width * scale;
        let h = glyph.height * scale;
        buffers.position.set([x, y - h, 0, x, y, 0, x + w, y - h, 0, x + w, y, 0], j * 4 * 3);
        let u = glyph.x / texW;
        let uw = glyph.width / texW;
        let v = 1.0 - glyph.y / texH;
        let vh = glyph.height / texH;
        buffers.uv.set([u, v - vh, u, v, u + uw, v - vh, u + uw, v], j * 4 * 2);

        // Reset cursor to baseline
        y += glyph.yoffset * scale;
        j++;
      }
      y -= size * lineHeight;
    }
    _this.buffers = buffers;
    _this.numLines = lines.length;
    _this.height = _this.numLines * size * lineHeight;
    _this.width = Math.max(...lines.map(line => line.width));
  }
  function getKernPairOffset(id1, id2) {
    for (let i = 0; i < font.kernings.length; i++) {
      let k = font.kernings[i];
      if (k.first < id1) continue;
      if (k.second < id2) continue;
      if (k.first > id1) return 0;
      if (k.first === id1 && k.second > id2) return 0;
      return k.amount;
    }
    return 0;
  }

  // Update buffers to layout with new layout
  this.resize = function (options) {
    ({
      width
    } = options);
    layout();
  };

  // Completely change text (like creating new Text)
  this.update = function (options) {
    ({
      text
    } = options);
    createGeometry();
  };
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Color.js":
/*!********************************************!*\
  !*** ./node_modules/ogl/src/math/Color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/ColorFunc.js */ "./node_modules/ogl/src/math/functions/ColorFunc.js");


// Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)

class Color extends Array {
  constructor(color) {
    if (Array.isArray(color)) return super(...color);
    return super(..._functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__.parseColor(...arguments));
  }
  get r() {
    return this[0];
  }
  get g() {
    return this[1];
  }
  get b() {
    return this[2];
  }
  set r(v) {
    this[0] = v;
  }
  set g(v) {
    this[1] = v;
  }
  set b(v) {
    this[2] = v;
  }
  set(color) {
    if (Array.isArray(color)) return this.copy(color);
    return this.copy(_functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__.parseColor(...arguments));
  }
  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    return this;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Mat3.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Mat3.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat3: () => (/* binding */ Mat3)
/* harmony export */ });
/* harmony import */ var _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat3Func.js */ "./node_modules/ogl/src/math/functions/Mat3Func.js");

class Mat3 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m00.length) return this.copy(m00);
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  translate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
    return this;
  }
  rotate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v);
    return this;
  }
  scale(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, v);
    return this;
  }
  multiply(ma, mb) {
    if (mb) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
    } else {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
    }
    return this;
  }
  identity() {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    return this;
  }
  copy(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
    return this;
  }
  fromMatrix4(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromMat4(this, m);
    return this;
  }
  fromQuaternion(q) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
    return this;
  }
  fromBasis(vec3a, vec3b, vec3c) {
    this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
    return this;
  }
  inverse(m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
    return this;
  }
  getNormalMatrix(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalFromMat4(this, m);
    return this;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/ColorFunc.js":
/*!**********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/ColorFunc.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRGB: () => (/* binding */ hexToRGB),
/* harmony export */   numberToRGB: () => (/* binding */ numberToRGB),
/* harmony export */   parseColor: () => (/* binding */ parseColor)
/* harmony export */ });
const NAMES = {
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  fuchsia: '#ff00ff',
  cyan: '#00ffff',
  yellow: '#ffff00',
  orange: '#ff8000'
};
function hexToRGB(hex) {
  if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
  return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
}
function numberToRGB(num) {
  num = parseInt(num);
  return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
}
function parseColor(color) {
  // Empty
  if (color === undefined) return [0, 0, 0];

  // Decimal
  if (arguments.length === 3) return arguments;

  // Number
  if (!isNaN(color)) return numberToRGB(color);

  // Hex
  if (color[0] === '#') return hexToRGB(color);

  // Names
  if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
  console.warn('Color format not recognised');
  return [0, 0, 0];
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Mat3Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Mat3Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */
function fromQuat(out, q) {
  let x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
      a02 = a[2],
      a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }
  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  let b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  let b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  let b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    x = v[0],
    y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0],
    y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */
function normalFromMat4(out, a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/***/ }),

/***/ "./fonts/ppneueMontreal-medium.json":
/*!******************************************!*\
  !*** ./fonts/ppneueMontreal-medium.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"pages":["ppneueMontreal-medium.png"],"chars":[{"id":87,"index":58,"char":"W","width":42,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":38.934,"chnl":15,"x":0,"y":0,"page":0},{"id":36,"index":7,"char":"$","width":27,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":25.326,"chnl":15,"x":43,"y":0,"page":0},{"id":40,"index":11,"char":"(","width":13,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":11.508,"chnl":15,"x":71,"y":0,"page":0},{"id":41,"index":12,"char":")","width":13,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":11.508,"chnl":15,"x":85,"y":0,"page":0},{"id":91,"index":62,"char":"[","width":13,"height":41,"xoffset":1,"yoffset":10.236,"xadvance":12.684,"chnl":15,"x":99,"y":0,"page":0},{"id":93,"index":64,"char":"]","width":13,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":12.684,"chnl":15,"x":113,"y":0,"page":0},{"id":106,"index":77,"char":"j","width":12,"height":41,"xoffset":-3,"yoffset":12.236,"xadvance":8.736,"chnl":15,"x":0,"y":35,"page":0},{"id":123,"index":94,"char":"{","width":15,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":13.104,"chnl":15,"x":0,"y":77,"page":0},{"id":124,"index":95,"char":"|","width":7,"height":41,"xoffset":1,"yoffset":11.236,"xadvance":9.282,"chnl":15,"x":13,"y":35,"page":0},{"id":125,"index":96,"char":"}","width":15,"height":41,"xoffset":-1,"yoffset":10.236,"xadvance":13.104,"chnl":15,"x":21,"y":35,"page":0},{"id":64,"index":35,"char":"@","width":38,"height":38,"xoffset":-1,"yoffset":12.236,"xadvance":36.75,"chnl":15,"x":16,"y":77,"page":0},{"id":37,"index":8,"char":"%","width":37,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":35.112,"chnl":15,"x":37,"y":42,"page":0},{"id":81,"index":52,"char":"Q","width":34,"height":37,"xoffset":0,"yoffset":11.236,"xadvance":32.508,"chnl":15,"x":55,"y":77,"page":0},{"id":38,"index":9,"char":"&","width":29,"height":35,"xoffset":-1,"yoffset":11.236,"xadvance":26.124,"chnl":15,"x":90,"y":42,"page":0},{"id":63,"index":34,"char":"?","width":24,"height":35,"xoffset":-1,"yoffset":11.236,"xadvance":21.042,"chnl":15,"x":90,"y":78,"page":0},{"id":67,"index":38,"char":"C","width":31,"height":35,"xoffset":0,"yoffset":11.236,"xadvance":29.652,"chnl":15,"x":115,"y":78,"page":0},{"id":71,"index":42,"char":"G","width":31,"height":35,"xoffset":0,"yoffset":11.236,"xadvance":30.954,"chnl":15,"x":120,"y":42,"page":0},{"id":74,"index":45,"char":"J","width":22,"height":35,"xoffset":-1,"yoffset":12.236,"xadvance":21.756,"chnl":15,"x":127,"y":0,"page":0},{"id":79,"index":50,"char":"O","width":33,"height":35,"xoffset":0,"yoffset":11.236,"xadvance":32.508,"chnl":15,"x":150,"y":0,"page":0},{"id":83,"index":54,"char":"S","width":28,"height":35,"xoffset":-1,"yoffset":11.236,"xadvance":26.544,"chnl":15,"x":147,"y":78,"page":0},{"id":85,"index":56,"char":"U","width":27,"height":35,"xoffset":1,"yoffset":12.236,"xadvance":29.022,"chnl":15,"x":152,"y":36,"page":0},{"id":98,"index":69,"char":"b","width":24,"height":35,"xoffset":0,"yoffset":12.236,"xadvance":23.94,"chnl":15,"x":176,"y":72,"page":0},{"id":100,"index":71,"char":"d","width":24,"height":35,"xoffset":-1,"yoffset":12.236,"xadvance":23.94,"chnl":15,"x":180,"y":36,"page":0},{"id":119,"index":90,"char":"w","width":35,"height":25,"xoffset":-2,"yoffset":21.236,"xadvance":31.836,"chnl":15,"x":184,"y":0,"page":0},{"id":33,"index":4,"char":"!","width":9,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":9.408,"chnl":15,"x":75,"y":42,"page":0},{"id":47,"index":18,"char":"/","width":19,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":16.506,"chnl":15,"x":220,"y":0,"page":0},{"id":48,"index":19,"char":"0","width":27,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":26.67,"chnl":15,"x":201,"y":72,"page":0},{"id":50,"index":21,"char":"2","width":25,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":23.898,"chnl":15,"x":205,"y":35,"page":0},{"id":51,"index":22,"char":"3","width":26,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":25.284,"chnl":15,"x":229,"y":70,"page":0},{"id":53,"index":24,"char":"5","width":25,"height":34,"xoffset":-1,"yoffset":13.236,"xadvance":24.402,"chnl":15,"x":231,"y":35,"page":0},{"id":54,"index":25,"char":"6","width":26,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":25.158,"chnl":15,"x":229,"y":105,"page":0},{"id":56,"index":27,"char":"8","width":26,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":25.494,"chnl":15,"x":201,"y":107,"page":0},{"id":57,"index":28,"char":"9","width":26,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":25.242,"chnl":15,"x":228,"y":140,"page":0},{"id":65,"index":36,"char":"A","width":31,"height":34,"xoffset":-2,"yoffset":12.236,"xadvance":27.72,"chnl":15,"x":0,"y":175,"page":0},{"id":66,"index":37,"char":"B","width":28,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":28.014,"chnl":15,"x":0,"y":210,"page":0},{"id":68,"index":39,"char":"D","width":29,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":29.358,"chnl":15,"x":29,"y":210,"page":0},{"id":69,"index":40,"char":"E","width":26,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":25.998,"chnl":15,"x":32,"y":175,"page":0},{"id":70,"index":41,"char":"F","width":25,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":24.528,"chnl":15,"x":0,"y":119,"page":0},{"id":72,"index":43,"char":"H","width":28,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":29.946,"chnl":15,"x":26,"y":116,"page":0},{"id":73,"index":44,"char":"I","width":9,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":10.584,"chnl":15,"x":240,"y":0,"page":0},{"id":75,"index":46,"char":"K","width":29,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":27.342,"chnl":15,"x":55,"y":115,"page":0},{"id":76,"index":47,"char":"L","width":24,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":23.436,"chnl":15,"x":176,"y":108,"page":0},{"id":77,"index":48,"char":"M","width":34,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":35.574,"chnl":15,"x":59,"y":175,"page":0},{"id":78,"index":49,"char":"N","width":28,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":29.946,"chnl":15,"x":59,"y":210,"page":0},{"id":80,"index":51,"char":"P","width":26,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":26.208,"chnl":15,"x":201,"y":142,"page":0},{"id":82,"index":53,"char":"R","width":27,"height":34,"xoffset":1,"yoffset":12.236,"xadvance":27.552,"chnl":15,"x":228,"y":175,"page":0},{"id":84,"index":55,"char":"T","width":28,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":25.326,"chnl":15,"x":88,"y":210,"page":0},{"id":86,"index":57,"char":"V","width":30,"height":34,"xoffset":-2,"yoffset":12.236,"xadvance":26.628,"chnl":15,"x":117,"y":210,"page":0},{"id":88,"index":59,"char":"X","width":29,"height":34,"xoffset":-2,"yoffset":12.236,"xadvance":25.242,"chnl":15,"x":148,"y":210,"page":0},{"id":89,"index":60,"char":"Y","width":30,"height":34,"xoffset":-2,"yoffset":12.236,"xadvance":26.754,"chnl":15,"x":178,"y":210,"page":0},{"id":90,"index":61,"char":"Z","width":27,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":25.41,"chnl":15,"x":209,"y":210,"page":0},{"id":92,"index":63,"char":"\\\\","width":19,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":16.506,"chnl":15,"x":237,"y":210,"page":0},{"id":102,"index":73,"char":"f","width":15,"height":34,"xoffset":-1,"yoffset":12.236,"xadvance":12.264,"chnl":15,"x":85,"y":115,"page":0},{"id":103,"index":74,"char":"g","width":24,"height":34,"xoffset":-1,"yoffset":20.236,"xadvance":23.814,"chnl":15,"x":94,"y":150,"page":0},{"id":104,"index":75,"char":"h","width":22,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":22.848,"chnl":15,"x":101,"y":114,"page":0},{"id":105,"index":76,"char":"i","width":9,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":8.736,"chnl":15,"x":119,"y":149,"page":0},{"id":107,"index":78,"char":"k","width":23,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":20.79,"chnl":15,"x":124,"y":114,"page":0},{"id":108,"index":79,"char":"l","width":8,"height":34,"xoffset":0,"yoffset":12.236,"xadvance":8.736,"chnl":15,"x":148,"y":114,"page":0},{"id":109,"index":80,"char":"m","width":34,"height":26,"xoffset":0,"yoffset":20.236,"xadvance":34.314,"chnl":15,"x":129,"y":177,"page":0},{"id":35,"index":6,"char":"#","width":26,"height":33,"xoffset":-1,"yoffset":13.236,"xadvance":24.234,"chnl":15,"x":157,"y":143,"page":0},{"id":49,"index":20,"char":"1","width":15,"height":33,"xoffset":-1,"yoffset":13.236,"xadvance":14.322,"chnl":15,"x":184,"y":143,"page":0},{"id":52,"index":23,"char":"4","width":26,"height":33,"xoffset":-1,"yoffset":13.236,"xadvance":24.78,"chnl":15,"x":250,"y":0,"page":0},{"id":55,"index":26,"char":"7","width":24,"height":33,"xoffset":-2,"yoffset":13.236,"xadvance":21.756,"chnl":15,"x":255,"y":140,"page":0},{"id":112,"index":83,"char":"p","width":24,"height":33,"xoffset":0,"yoffset":20.236,"xadvance":23.94,"chnl":15,"x":256,"y":174,"page":0},{"id":113,"index":84,"char":"q","width":24,"height":33,"xoffset":-1,"yoffset":20.236,"xadvance":23.898,"chnl":15,"x":257,"y":208,"page":0},{"id":116,"index":87,"char":"t","width":15,"height":33,"xoffset":-1,"yoffset":14.236,"xadvance":13.062,"chnl":15,"x":256,"y":70,"page":0},{"id":121,"index":92,"char":"y","width":25,"height":33,"xoffset":-2,"yoffset":21.236,"xadvance":21.21,"chnl":15,"x":256,"y":104,"page":0},{"id":59,"index":30,"char":";","width":9,"height":27,"xoffset":0,"yoffset":25.236,"xadvance":8.778,"chnl":15,"x":129,"y":149,"page":0},{"id":97,"index":68,"char":"a","width":24,"height":27,"xoffset":-1,"yoffset":20.236,"xadvance":22.302,"chnl":15,"x":164,"y":177,"page":0},{"id":99,"index":70,"char":"c","width":24,"height":27,"xoffset":-1,"yoffset":20.236,"xadvance":22.302,"chnl":15,"x":189,"y":177,"page":0},{"id":101,"index":72,"char":"e","width":25,"height":27,"xoffset":-1,"yoffset":20.236,"xadvance":23.142,"chnl":15,"x":257,"y":34,"page":0},{"id":111,"index":82,"char":"o","width":25,"height":27,"xoffset":-1,"yoffset":20.236,"xadvance":23.772,"chnl":15,"x":277,"y":0,"page":0},{"id":115,"index":86,"char":"s","width":23,"height":27,"xoffset":-1,"yoffset":20.236,"xadvance":20.496,"chnl":15,"x":280,"y":138,"page":0},{"id":95,"index":66,"char":"_","width":26,"height":8,"xoffset":-1,"yoffset":44.236,"xadvance":23.982,"chnl":15,"x":184,"y":26,"page":0},{"id":110,"index":81,"char":"n","width":22,"height":26,"xoffset":0,"yoffset":20.236,"xadvance":22.848,"chnl":15,"x":272,"y":62,"page":0},{"id":114,"index":85,"char":"r","width":16,"height":26,"xoffset":0,"yoffset":20.236,"xadvance":14.616,"chnl":15,"x":139,"y":149,"page":0},{"id":117,"index":88,"char":"u","width":22,"height":26,"xoffset":0,"yoffset":21.236,"xadvance":22.848,"chnl":15,"x":283,"y":28,"page":0},{"id":118,"index":89,"char":"v","width":24,"height":25,"xoffset":-2,"yoffset":21.236,"xadvance":20.496,"chnl":15,"x":303,"y":0,"page":0},{"id":120,"index":91,"char":"x","width":25,"height":25,"xoffset":-2,"yoffset":21.236,"xadvance":20.454,"chnl":15,"x":281,"y":166,"page":0},{"id":122,"index":93,"char":"z","width":22,"height":25,"xoffset":-1,"yoffset":21.236,"xadvance":19.404,"chnl":15,"x":282,"y":89,"page":0},{"id":43,"index":14,"char":"+","width":23,"height":24,"xoffset":0,"yoffset":18.236,"xadvance":23.394,"chnl":15,"x":55,"y":150,"page":0},{"id":60,"index":31,"char":"<","width":21,"height":23,"xoffset":0,"yoffset":20.236,"xadvance":21.294,"chnl":15,"x":26,"y":151,"page":0},{"id":61,"index":32,"char":"=","width":23,"height":15,"xoffset":0,"yoffset":23.236,"xadvance":23.142,"chnl":15,"x":281,"y":192,"page":0},{"id":62,"index":33,"char":">","width":21,"height":23,"xoffset":0,"yoffset":20.236,"xadvance":21.294,"chnl":15,"x":94,"y":185,"page":0},{"id":94,"index":65,"char":"^","width":22,"height":16,"xoffset":-1,"yoffset":12.236,"xadvance":19.992,"chnl":15,"x":0,"y":154,"page":0},{"id":58,"index":29,"char":":","width":9,"height":21,"xoffset":0,"yoffset":25.236,"xadvance":8.778,"chnl":15,"x":119,"y":184,"page":0},{"id":42,"index":13,"char":"*","width":20,"height":18,"xoffset":0,"yoffset":12.236,"xadvance":18.858,"chnl":15,"x":282,"y":115,"page":0},{"id":126,"index":97,"char":"~","width":18,"height":10,"xoffset":0,"yoffset":25.236,"xadvance":18.564,"chnl":15,"x":157,"y":114,"page":0},{"id":34,"index":5,"char":"\\"","width":15,"height":15,"xoffset":0,"yoffset":12.236,"xadvance":14.028,"chnl":15,"x":157,"y":125,"page":0},{"id":39,"index":10,"char":"\'","width":8,"height":15,"xoffset":0,"yoffset":12.236,"xadvance":7.434,"chnl":15,"x":214,"y":177,"page":0},{"id":45,"index":16,"char":"-","width":15,"height":8,"xoffset":0,"yoffset":29.236,"xadvance":14.784,"chnl":15,"x":0,"y":245,"page":0},{"id":44,"index":15,"char":",","width":9,"height":14,"xoffset":0,"yoffset":37.236,"xadvance":8.526,"chnl":15,"x":257,"y":242,"page":0},{"id":96,"index":67,"char":"`","width":11,"height":10,"xoffset":0,"yoffset":12.236,"xadvance":9.954,"chnl":15,"x":16,"y":245,"page":0},{"id":46,"index":17,"char":".","width":9,"height":9,"xoffset":0,"yoffset":37.236,"xadvance":8.358,"chnl":15,"x":272,"y":89,"page":0},{"id":32,"index":3,"char":" ","width":0,"height":0,"xoffset":-2,"yoffset":42.236,"xadvance":8.778,"chnl":15,"x":228,"y":107,"page":0}],"info":{"face":"ppneueMontreal-medium","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[2,2,2,2],"spacing":[0,0],"outline":0},"common":{"lineHeight":50.4,"base":42.236,"scaleW":512,"scaleH":256,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":4},"kernings":[]}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a8d2ffd0a3d4330f00f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI2SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEIsT0FBTzZILEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3VELFFBQVFBLENBQUN2RCxHQUFHLEVBQUVqSSxDQUFDLEVBQUVJLENBQUMsRUFBRTtFQUNoQzZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQixPQUFPNkgsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTd0QsY0FBY0EsQ0FBQ3hELEdBQUcsRUFBRWpJLENBQUMsRUFBRUksQ0FBQyxFQUFFO0VBQ3RDNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCNkgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDO0VBQ2pCLE9BQU82SCxHQUFHO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JmQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvU3ViVGl0bGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL1RpdGxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9mb250cy9wcG5ldWVNb250cmVhbC1tZWRpdW0ucG5nIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9zaGFkZXJzL3RleHQtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9NZXNoLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2V4dHJhcy9UZXh0LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL0NvbG9yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL01hdDMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvZnVuY3Rpb25zL0NvbG9yRnVuYy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9mdW5jdGlvbnMvTWF0M0Z1bmMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcbmltcG9ydCBTdWJUaXRsZSBmcm9tIFwiLi9TdWJUaXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcywgdGl0bGUsIHN1YlRpdGxlLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJUaXRsZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlVGl0bGUoKVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICAvLyB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICAvLyB1T2Zmc2V0OiB7XG4gICAgICAgIC8vICAgdmFsdWU6IDBcbiAgICAgICAgLy8gfVxuICAgICAgICB1U3RyZW5ndGg6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdVZpZXdwb3J0U2l6ZXM6IHtcbiAgICAgICAgICB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XVxuICAgICAgICB9LFxuICAgICAgICB1U3BlZWQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gbmV3IFRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy50aXRsZVxuICAgIH0pXG5cbiAgICB0aGlzLnN1YlRpdGxlVGV4dCA9IG5ldyBTdWJUaXRsZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLm1lc2gsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIHRleHQ6IHRoaXMuc3ViVGl0bGVcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIC8vIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIC8vIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgLy8gdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcbiAgfVxufVxuIiwiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuXG5pbXBvcnQgeyBDb2xvciwgR2VvbWV0cnksIE1lc2gsIFByb2dyYW0sIFRleHQsIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5qc29uXCJcbmltcG9ydCBzcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5wbmdcIlxuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgcGxhbmUsIHJlbmRlcmVyLCB0ZXh0IH0pIHtcbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5wbGFuZSA9IHBsYW5lXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuXG4gICAgdGhpcy5jcmVhdGVTaGFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gIH1cblxuICBjcmVhdGVTaGFkZXIoKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHsgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSB9KVxuICAgIGNvbnN0IHRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0ZXh0dXJlSW1hZ2Uuc3JjID0gc3JjXG4gICAgdGV4dHVyZUltYWdlLm9ubG9hZCA9IF8gPT4gKHRleHR1cmUuaW1hZ2UgPSB0ZXh0dXJlSW1hZ2UpXG5cbiAgICBjb25zdCB2ZXJ0ZXgxMDAgPSBgJHt2ZXJ0ZXh9YFxuXG4gICAgY29uc3QgZnJhZ21lbnQxMDAgPSBgXG4gICAgICAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgY29uc3QgdmVydGV4MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICAjZGVmaW5lIGF0dHJpYnV0ZSBpblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIG91dFxuXG4gICAgICAke3ZlcnRleH1cbiAgICBgXG5cbiAgICBjb25zdCBmcmFnbWVudDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgaW5cbiAgICAgICNkZWZpbmUgdGV4dHVyZTJEIHRleHR1cmVcbiAgICAgICNkZWZpbmUgZ2xfRnJhZ0NvbG9yIEZyYWdDb2xvclxuXG4gICAgICBvdXQgdmVjNCBGcmFnQ29sb3I7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQxMDBcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdmVydGV4MTAwXG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5pc1dlYmdsMikge1xuICAgICAgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDMwMFxuICAgICAgdmVydGV4U2hhZGVyID0gdmVydGV4MzAwXG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgY3VsbEZhY2U6IG51bGwsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGZyYWdtZW50OiBmcmFnbWVudFNoYWRlcixcbiAgICAgIHZlcnRleDogdmVydGV4U2hhZGVyLFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjMDAwXCIpIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCh7XG4gICAgICBmb250LFxuICAgICAgbGV0dGVyU3BhY2luZzogLTAuMDUsXG4gICAgICBzaXplOiAwLjAzLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgd29yZFNwYWNpbmc6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkodGhpcy5nbCwge1xuICAgICAgcG9zaXRpb246IHsgc2l6ZTogMywgZGF0YTogdGV4dC5idWZmZXJzLnBvc2l0aW9uIH0sXG4gICAgICB1djogeyBzaXplOiAyLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMudXYgfSxcbiAgICAgIGlkOiB7IHNpemU6IDEsIGRhdGE6IHRleHQuYnVmZmVycy5pZCB9LFxuICAgICAgaW5kZXg6IHsgZGF0YTogdGV4dC5idWZmZXJzLmluZGV4IH1cbiAgICB9KVxuXG4gICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KClcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHsgZ2VvbWV0cnksIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9KVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gLXRoaXMucGxhbmUuc2NhbGUueSAqIDAuNSAtIDAuMDNcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IC10aGlzLnBsYW5lLnNjYWxlLnggKiAwLjVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cbn1cbiIsImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcblxuaW1wb3J0IHsgQ29sb3IsIEdlb21ldHJ5LCBNZXNoLCBQcm9ncmFtLCBUZXh0LCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCBmb250IGZyb20gXCIuLi8uLi8uLi8uLi9mb250cy9wcG5ldWVNb250cmVhbC1tZWRpdW0uanNvblwiXG5pbXBvcnQgc3JjIGZyb20gXCIuLi8uLi8uLi8uLi9mb250cy9wcG5ldWVNb250cmVhbC1tZWRpdW0ucG5nXCJcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL3RleHQtZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL3RleHQtdmVydGV4Lmdsc2xcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHBsYW5lLCByZW5kZXJlciwgdGV4dCB9KSB7XG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMucGxhbmUgPSBwbGFuZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMudGV4dCA9IHRleHRcblxuICAgIHRoaXMuY3JlYXRlU2hhZGVyKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuXG4gICAgY29uc29sZS5sb2codGhpcy50ZXh0LCBcInRleHRcIilcbiAgfVxuXG4gIGNyZWF0ZVNoYWRlcigpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCwgeyBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlIH0pXG4gICAgY29uc3QgdGV4dHVyZUltYWdlID0gbmV3IEltYWdlKClcblxuICAgIHRleHR1cmVJbWFnZS5zcmMgPSBzcmNcbiAgICB0ZXh0dXJlSW1hZ2Uub25sb2FkID0gXyA9PiAodGV4dHVyZS5pbWFnZSA9IHRleHR1cmVJbWFnZSlcblxuICAgIGNvbnN0IHZlcnRleDEwMCA9IGAke3ZlcnRleH1gXG5cbiAgICBjb25zdCBmcmFnbWVudDEwMCA9IGBcbiAgICAgICNleHRlbnNpb24gR0xfT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzIDogZW5hYmxlXG5cbiAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBjb25zdCB2ZXJ0ZXgzMDAgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbiAgICAgICNkZWZpbmUgYXR0cmlidXRlIGluXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgb3V0XG5cbiAgICAgICR7dmVydGV4fVxuICAgIGBcblxuICAgIGNvbnN0IGZyYWdtZW50MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICNkZWZpbmUgdmFyeWluZyBpblxuICAgICAgI2RlZmluZSB0ZXh0dXJlMkQgdGV4dHVyZVxuICAgICAgI2RlZmluZSBnbF9GcmFnQ29sb3IgRnJhZ0NvbG9yXG5cbiAgICAgIG91dCB2ZWM0IEZyYWdDb2xvcjtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDEwMFxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgxMDBcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyLmlzV2ViZ2wyKSB7XG4gICAgICBmcmFnbWVudFNoYWRlciA9IGZyYWdtZW50MzAwXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgzMDBcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBjdWxsRmFjZTogbnVsbCxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgZnJhZ21lbnQ6IGZyYWdtZW50U2hhZGVyLFxuICAgICAgdmVydGV4OiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihcIiMwMDBcIikgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KHtcbiAgICAgIGZvbnQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB3b3JkU3BhY2luZzogMFxuICAgIH0pXG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLmdsLCB7XG4gICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMucG9zaXRpb24gfSxcbiAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHRleHQuYnVmZmVycy51diB9LFxuICAgICAgaWQ6IHsgc2l6ZTogMSwgZGF0YTogdGV4dC5idWZmZXJzLmlkIH0sXG4gICAgICBpbmRleDogeyBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaW5kZXggfVxuICAgIH0pXG5cbiAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtdGhpcy5wbGFuZS5zY2FsZS55ICogMC41IC0gMC4wODVcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IC10aGlzLnBsYW5lLnNjYWxlLnggKiAwLjVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YzQxMDEzYzkwZThhMmI5YmI5MDkyMjBjMmZmMzRkNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi8vIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG5cXG4vLyB1bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcbi8vIHVuaWZvcm0gdmVjMiB1T2Zmc2V0O1xcblxcbi8vIHZhcnlpbmcgdmVjMiB2VXY7XFxuXFxuLy8gdmVjMyByZ2JTaGlmdChzYW1wbGVyMkQgdGV4dHVyZUltYWdlLCB2ZWMyIHV2LCB2ZWMyIG9mZnNldCl7XFxuLy8gICAgIGZsb2F0IHIgPSB0ZXh0dXJlMkQodGV4dHVyZUltYWdlLCB1diArIG9mZnNldCAqIDAuMykucjtcXG4vLyAgICAgdmVjMiBnYiA9IHRleHR1cmUyRCh0ZXh0dXJlSW1hZ2UsIHV2KS5nYjtcXG4vLyAgICAgcmV0dXJuIHZlYzMociwgZ2IpO1xcbi8vIH1cXG5cXG4vLyB2b2lkIG1haW4oKSB7XFxuLy8gICAgIHZlYzMgY29sb3JTaGlmdGVkID0gcmdiU2hpZnQodE1hcCwgdlV2LCB1T2Zmc2V0KTtcXG4vLyAgICAgLy8gZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvclNoaWZ0ZWQsIDEuMCk7XFxuLy8gICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTsgLy8gU29saWQgcmVkIGNvbG9yXFxuLy8gfVxcblxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbi8vIFVuaWZvcm0gZm9yIHRoZSB0ZXh0dXJlXFxudW5pZm9ybSBzYW1wbGVyMkQgdE1hcDtcXG5cXG4vLyBWYXJ5aW5nIGZvciB0aGUgVVYgY29vcmRpbmF0ZXNcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMyB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KS5yZ2I7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4dHVyZUNvbG9yLCAxLjApO1xcbn1cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIi8vICNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuLy8gYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuLy8gYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxuLy8gdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG4vLyB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG4vLyB1bmlmb3JtIHZlYzIgdU9mZnNldDtcXG5cXG4vLyB2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbi8vIHZlYzMgZGVmb3JtYXRpb25DdXJ2ZSh2ZWMzIHBvc2l0aW9uLCB2ZWMyIHV2LCB2ZWMyIG9mZnNldCl7XFxuLy8gICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54ICsgKHNpbih1di55ICogUEkpICogb2Zmc2V0LngpO1xcbi8vICAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSArIChzaW4odXYueCAqIFBJKSAqIG9mZnNldC55KTtcXG4vLyAgICAgcmV0dXJuIHBvc2l0aW9uO1xcbi8vIH1cXG5cXG4vLyB2b2lkIG1haW4oKXtcXG4vLyAgICAgdlV2ID0gdXY7XFxuLy8gICAgIHZlYzMgbmV3UG9zaXRpb24gPSBkZWZvcm1hdGlvbkN1cnZlKHBvc2l0aW9uLCB1diwgdU9mZnNldCk7XFxuLy8gICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XFxuLy8gfVxcblxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbi8vIEF0dHJpYnV0ZXNcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG4vLyBVbmlmb3Jtc1xcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxuLy8gVmFyeWluZyB0byBwYXNzIFVWIHRvIHRoZSBmcmFnbWVudCBzaGFkZXJcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgdUNvbG9yO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRNYXA7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMzIGNvbG9yID0gdGV4dHVyZTJEKHRNYXAsIHZVdikucmdiO1xcblxcbiAgZmxvYXQgc2lnbmVkID0gbWF4KG1pbihjb2xvci5yLCBjb2xvci5nKSwgbWluKG1heChjb2xvci5yLCBjb2xvci5nKSwgY29sb3IuYikpIC0gMC41O1xcbiAgZmxvYXQgZCA9IGZ3aWR0aChzaWduZWQpO1xcbiAgZmxvYXQgYWxwaGEgPSBzbW9vdGhzdGVwKC1kLCBkLCBzaWduZWQpO1xcblxcbiAgaWYgKGFscGhhIDwgMC4wMikgZGlzY2FyZDtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQodUNvbG9yLCBhbHBoYSk7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuXFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cXG5cIjsiLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybS5qcyc7XG5pbXBvcnQgeyBNYXQzIH0gZnJvbSAnLi4vbWF0aC9NYXQzLmpzJztcbmltcG9ydCB7IE1hdDQgfSBmcm9tICcuLi9tYXRoL01hdDQuanMnO1xuXG5sZXQgSUQgPSAwO1xuXG5leHBvcnQgY2xhc3MgTWVzaCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoZ2wsIHsgZ2VvbWV0cnksIHByb2dyYW0sIG1vZGUgPSBnbC5UUklBTkdMRVMsIGZydXN0dW1DdWxsZWQgPSB0cnVlLCByZW5kZXJPcmRlciA9IDAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICghZ2wuY2FudmFzKSBjb25zb2xlLmVycm9yKCdnbCBub3QgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50IHRvIE1lc2gnKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmlkID0gSUQrKztcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuXG4gICAgICAgIC8vIFVzZWQgdG8gc2tpcCBmcnVzdHVtIGN1bGxpbmdcbiAgICAgICAgdGhpcy5mcnVzdHVtQ3VsbGVkID0gZnJ1c3R1bUN1bGxlZDtcblxuICAgICAgICAvLyBPdmVycmlkZSBzb3J0aW5nIHRvIGZvcmNlIGFuIG9yZGVyXG4gICAgICAgIHRoaXMucmVuZGVyT3JkZXIgPSByZW5kZXJPcmRlcjtcbiAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLm5vcm1hbE1hdHJpeCA9IG5ldyBNYXQzKCk7XG4gICAgICAgIHRoaXMuYmVmb3JlUmVuZGVyQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJDYWxsYmFja3MgPSBbXTtcbiAgICB9XG5cbiAgICBvbkJlZm9yZVJlbmRlcihmKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlUmVuZGVyQ2FsbGJhY2tzLnB1c2goZik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uQWZ0ZXJSZW5kZXIoZikge1xuICAgICAgICB0aGlzLmFmdGVyUmVuZGVyQ2FsbGJhY2tzLnB1c2goZik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRyYXcoeyBjYW1lcmEgfSA9IHt9KSB7XG4gICAgICAgIGlmIChjYW1lcmEpIHtcbiAgICAgICAgICAgIC8vIEFkZCBlbXB0eSBtYXRyaXggdW5pZm9ybXMgdG8gcHJvZ3JhbSBpZiB1bnNldFxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyYW0udW5pZm9ybXMubW9kZWxNYXRyaXgpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucHJvZ3JhbS51bmlmb3Jtcywge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbE1hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3TWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmlld01hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvbjogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIG1hdHJpeCB1bmlmb3Jtc1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnByb2plY3Rpb25NYXRyaXgudmFsdWUgPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeDtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5jYW1lcmFQb3NpdGlvbi52YWx1ZSA9IGNhbWVyYS53b3JsZFBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnZpZXdNYXRyaXgudmFsdWUgPSBjYW1lcmEudmlld01hdHJpeDtcbiAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4Lm11bHRpcGx5KGNhbWVyYS52aWV3TWF0cml4LCB0aGlzLndvcmxkTWF0cml4KTtcbiAgICAgICAgICAgIHRoaXMubm9ybWFsTWF0cml4LmdldE5vcm1hbE1hdHJpeCh0aGlzLm1vZGVsVmlld01hdHJpeCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMubW9kZWxNYXRyaXgudmFsdWUgPSB0aGlzLndvcmxkTWF0cml4O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm1vZGVsVmlld01hdHJpeC52YWx1ZSA9IHRoaXMubW9kZWxWaWV3TWF0cml4O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm5vcm1hbE1hdHJpeC52YWx1ZSA9IHRoaXMubm9ybWFsTWF0cml4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVmb3JlUmVuZGVyQ2FsbGJhY2tzLmZvckVhY2goKGYpID0+IGYgJiYgZih7IG1lc2g6IHRoaXMsIGNhbWVyYSB9KSk7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGZhY2VzIG5lZWQgdG8gYmUgZmxpcHBlZCAtIHdoZW4gbWVzaCBzY2FsZWQgbmVnYXRpdmVseVxuICAgICAgICBsZXQgZmxpcEZhY2VzID0gdGhpcy5wcm9ncmFtLmN1bGxGYWNlICYmIHRoaXMud29ybGRNYXRyaXguZGV0ZXJtaW5hbnQoKSA8IDA7XG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoeyBmbGlwRmFjZXMgfSk7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuZHJhdyh7IG1vZGU6IHRoaXMubW9kZSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pO1xuICAgICAgICB0aGlzLmFmdGVyUmVuZGVyQ2FsbGJhY2tzLmZvckVhY2goKGYpID0+IGYgJiYgZih7IG1lc2g6IHRoaXMsIGNhbWVyYSB9KSk7XG4gICAgfVxufVxuIiwiLy8gVE9ETzogdXBsb2FkIGVtcHR5IHRleHR1cmUgaWYgbnVsbCA/IG1heWJlIG5vdFxuLy8gVE9ETzogdXBsb2FkIGlkZW50aXR5IG1hdHJpeCBpZiBudWxsID9cbi8vIFRPRE86IHNhbXBsZXIgQ3ViZVxuXG5sZXQgSUQgPSAxO1xuXG4vLyBjYWNoZSBvZiB0eXBlZCBhcnJheXMgdXNlZCB0byBmbGF0dGVuIHVuaWZvcm0gYXJyYXlzXG5jb25zdCBhcnJheUNhY2hlRjMyID0ge307XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZ2wsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgdW5pZm9ybXMgPSB7fSxcblxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1bGxGYWNlID0gZ2wuQkFDSyxcbiAgICAgICAgICAgIGZyb250RmFjZSA9IGdsLkNDVyxcbiAgICAgICAgICAgIGRlcHRoVGVzdCA9IHRydWUsXG4gICAgICAgICAgICBkZXB0aFdyaXRlID0gdHJ1ZSxcbiAgICAgICAgICAgIGRlcHRoRnVuYyA9IGdsLkxFU1MsXG4gICAgICAgIH0gPSB7fVxuICAgICkge1xuICAgICAgICBpZiAoIWdsLmNhbnZhcykgY29uc29sZS5lcnJvcignZ2wgbm90IHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudCB0byBQcm9ncmFtJyk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHVuaWZvcm1zO1xuICAgICAgICB0aGlzLmlkID0gSUQrKztcblxuICAgICAgICBpZiAoIXZlcnRleCkgY29uc29sZS53YXJuKCd2ZXJ0ZXggc2hhZGVyIG5vdCBzdXBwbGllZCcpO1xuICAgICAgICBpZiAoIWZyYWdtZW50KSBjb25zb2xlLndhcm4oJ2ZyYWdtZW50IHNoYWRlciBub3Qgc3VwcGxpZWQnKTtcblxuICAgICAgICAvLyBTdG9yZSBwcm9ncmFtIHN0YXRlXG4gICAgICAgIHRoaXMudHJhbnNwYXJlbnQgPSB0cmFuc3BhcmVudDtcbiAgICAgICAgdGhpcy5jdWxsRmFjZSA9IGN1bGxGYWNlO1xuICAgICAgICB0aGlzLmZyb250RmFjZSA9IGZyb250RmFjZTtcbiAgICAgICAgdGhpcy5kZXB0aFRlc3QgPSBkZXB0aFRlc3Q7XG4gICAgICAgIHRoaXMuZGVwdGhXcml0ZSA9IGRlcHRoV3JpdGU7XG4gICAgICAgIHRoaXMuZGVwdGhGdW5jID0gZGVwdGhGdW5jO1xuICAgICAgICB0aGlzLmJsZW5kRnVuYyA9IHt9O1xuICAgICAgICB0aGlzLmJsZW5kRXF1YXRpb24gPSB7fTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBibGVuZEZ1bmMgaWYgdHJhbnNwYXJlbnQgZmxhZ2dlZFxuICAgICAgICBpZiAodGhpcy50cmFuc3BhcmVudCAmJiAhdGhpcy5ibGVuZEZ1bmMuc3JjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nbC5yZW5kZXJlci5wcmVtdWx0aXBsaWVkQWxwaGEpIHRoaXMuc2V0QmxlbmRGdW5jKHRoaXMuZ2wuT05FLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnNldEJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBpbGUgdmVydGV4IHNoYWRlciBhbmQgbG9nIGVycm9yc1xuICAgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0ZXhTaGFkZXIsIHZlcnRleCk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgaWYgKGdsLmdldFNoYWRlckluZm9Mb2codmVydGV4U2hhZGVyKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRleFNoYWRlcil9XFxuVmVydGV4IFNoYWRlclxcbiR7YWRkTGluZU51bWJlcnModmVydGV4KX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBpbGUgZnJhZ21lbnQgc2hhZGVyIGFuZCBsb2cgZXJyb3JzXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgIGdsLnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlciwgZnJhZ21lbnQpO1xuICAgICAgICBnbC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgaWYgKGdsLmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpICE9PSAnJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dsLmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpfVxcbkZyYWdtZW50IFNoYWRlclxcbiR7YWRkTGluZU51bWJlcnMoZnJhZ21lbnQpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGlsZSBwcm9ncmFtIGFuZCBsb2cgZXJyb3JzXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgc2hhZGVyIG9uY2UgbGlua2VkXG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgICAgIC8vIEdldCBhY3RpdmUgdW5pZm9ybSBsb2NhdGlvbnNcbiAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBsZXQgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICAgICAgZm9yIChsZXQgdUluZGV4ID0gMDsgdUluZGV4IDwgbnVtVW5pZm9ybXM7IHVJbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgdW5pZm9ybSA9IGdsLmdldEFjdGl2ZVVuaWZvcm0odGhpcy5wcm9ncmFtLCB1SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zLnNldCh1bmlmb3JtLCBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCB1bmlmb3JtLm5hbWUpKTtcblxuICAgICAgICAgICAgLy8gc3BsaXQgdW5pZm9ybXMnIG5hbWVzIHRvIHNlcGFyYXRlIGFycmF5IGFuZCBzdHJ1Y3QgZGVjbGFyYXRpb25zXG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IHVuaWZvcm0ubmFtZS5tYXRjaCgvKFxcdyspL2cpO1xuXG4gICAgICAgICAgICB1bmlmb3JtLnVuaWZvcm1OYW1lID0gc3BsaXRbMF07XG4gICAgICAgICAgICB1bmlmb3JtLm5hbWVDb21wb25lbnRzID0gc3BsaXQuc2xpY2UoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgYWN0aXZlIGF0dHJpYnV0ZSBsb2NhdGlvbnNcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBudW1BdHRyaWJzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkFDVElWRV9BVFRSSUJVVEVTKTtcbiAgICAgICAgZm9yIChsZXQgYUluZGV4ID0gMDsgYUluZGV4IDwgbnVtQXR0cmliczsgYUluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGdsLmdldEFjdGl2ZUF0dHJpYih0aGlzLnByb2dyYW0sIGFJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgLy8gSWdub3JlIHNwZWNpYWwgYnVpbHQtaW4gaW5wdXRzLiBlZyBnbF9WZXJ0ZXhJRCwgZ2xfSW5zdGFuY2VJRFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAtMSkgY29udGludWU7XG4gICAgICAgICAgICBsb2NhdGlvbnNbbG9jYXRpb25dID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5zZXQoYXR0cmlidXRlLCBsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPcmRlciA9IGxvY2F0aW9ucy5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzZXRCbGVuZEZ1bmMoc3JjLCBkc3QsIHNyY0FscGhhLCBkc3RBbHBoYSkge1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLmRzdCA9IGRzdDtcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuc3JjQWxwaGEgPSBzcmNBbHBoYTtcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuZHN0QWxwaGEgPSBkc3RBbHBoYTtcbiAgICAgICAgaWYgKHNyYykgdGhpcy50cmFuc3BhcmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRFcXVhdGlvbihtb2RlUkdCLCBtb2RlQWxwaGEpIHtcbiAgICAgICAgdGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVSR0IgPSBtb2RlUkdCO1xuICAgICAgICB0aGlzLmJsZW5kRXF1YXRpb24ubW9kZUFscGhhID0gbW9kZUFscGhhO1xuICAgIH1cblxuICAgIGFwcGx5U3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoVGVzdCkgdGhpcy5nbC5yZW5kZXJlci5lbmFibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLnJlbmRlcmVyLmRpc2FibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcblxuICAgICAgICBpZiAodGhpcy5jdWxsRmFjZSkgdGhpcy5nbC5yZW5kZXJlci5lbmFibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xuICAgICAgICBlbHNlIHRoaXMuZ2wucmVuZGVyZXIuZGlzYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYmxlbmRGdW5jLnNyYykgdGhpcy5nbC5yZW5kZXJlci5lbmFibGUodGhpcy5nbC5CTEVORCk7XG4gICAgICAgIGVsc2UgdGhpcy5nbC5yZW5kZXJlci5kaXNhYmxlKHRoaXMuZ2wuQkxFTkQpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1bGxGYWNlKSB0aGlzLmdsLnJlbmRlcmVyLnNldEN1bGxGYWNlKHRoaXMuY3VsbEZhY2UpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldEZyb250RmFjZSh0aGlzLmZyb250RmFjZSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0RGVwdGhNYXNrKHRoaXMuZGVwdGhXcml0ZSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0RGVwdGhGdW5jKHRoaXMuZGVwdGhGdW5jKTtcbiAgICAgICAgaWYgKHRoaXMuYmxlbmRGdW5jLnNyYylcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0QmxlbmRGdW5jKHRoaXMuYmxlbmRGdW5jLnNyYywgdGhpcy5ibGVuZEZ1bmMuZHN0LCB0aGlzLmJsZW5kRnVuYy5zcmNBbHBoYSwgdGhpcy5ibGVuZEZ1bmMuZHN0QWxwaGEpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldEJsZW5kRXF1YXRpb24odGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVSR0IsIHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEpO1xuICAgIH1cblxuICAgIHVzZSh7IGZsaXBGYWNlcyA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgdGV4dHVyZVVuaXQgPSAtMTtcbiAgICAgICAgY29uc3QgcHJvZ3JhbUFjdGl2ZSA9IHRoaXMuZ2wucmVuZGVyZXIuc3RhdGUuY3VycmVudFByb2dyYW0gPT09IHRoaXMuaWQ7XG5cbiAgICAgICAgLy8gQXZvaWQgZ2wgY2FsbCBpZiBwcm9ncmFtIGFscmVhZHkgaW4gdXNlXG4gICAgICAgIGlmICghcHJvZ3JhbUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnN0YXRlLmN1cnJlbnRQcm9ncmFtID0gdGhpcy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBvbmx5IHRoZSBhY3RpdmUgdW5pZm9ybXMgZm91bmQgaW4gdGhlIHNoYWRlclxuICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24sIGFjdGl2ZVVuaWZvcm0pID0+IHtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtID0gdGhpcy51bmlmb3Jtc1thY3RpdmVVbmlmb3JtLnVuaWZvcm1OYW1lXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgYWN0aXZlVW5pZm9ybS5uYW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGlmICghdW5pZm9ybSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluIHVuaWZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSA9IHVuaWZvcm1bY29tcG9uZW50XTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXVuaWZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2FybihgQWN0aXZlIHVuaWZvcm0gJHthY3RpdmVVbmlmb3JtLm5hbWV9IGhhcyBub3QgYmVlbiBzdXBwbGllZGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW5pZm9ybSAmJiB1bmlmb3JtLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2FybihgJHthY3RpdmVVbmlmb3JtLm5hbWV9IHVuaWZvcm0gaXMgbWlzc2luZyBhIHZhbHVlIHBhcmFtZXRlcmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW5pZm9ybS52YWx1ZS50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZVVuaXQgPSB0ZXh0dXJlVW5pdCArIDE7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0ZXh0dXJlIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICB1bmlmb3JtLnZhbHVlLnVwZGF0ZSh0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFVuaWZvcm0odGhpcy5nbCwgYWN0aXZlVW5pZm9ybS50eXBlLCBsb2NhdGlvbiwgdGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGb3IgdGV4dHVyZSBhcnJheXMsIHNldCB1bmlmb3JtIGFzIGFuIGFycmF5IG9mIHRleHR1cmUgdW5pdHMgaW5zdGVhZCBvZiBqdXN0IG9uZVxuICAgICAgICAgICAgaWYgKHVuaWZvcm0udmFsdWUubGVuZ3RoICYmIHVuaWZvcm0udmFsdWVbMF0udGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVVbml0cyA9IFtdO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0udmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVuaXQgPSB0ZXh0dXJlVW5pdCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnVwZGF0ZSh0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVbml0cy5wdXNoKHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRVbmlmb3JtKHRoaXMuZ2wsIGFjdGl2ZVVuaWZvcm0udHlwZSwgbG9jYXRpb24sIHRleHR1cmVVbml0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFVuaWZvcm0odGhpcy5nbCwgYWN0aXZlVW5pZm9ybS50eXBlLCBsb2NhdGlvbiwgdW5pZm9ybS52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwbHlTdGF0ZSgpO1xuICAgICAgICBpZiAoZmxpcEZhY2VzKSB0aGlzLmdsLnJlbmRlcmVyLnNldEZyb250RmFjZSh0aGlzLmZyb250RmFjZSA9PT0gdGhpcy5nbC5DQ1cgPyB0aGlzLmdsLkNXIDogdGhpcy5nbC5DQ1cpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtKGdsLCB0eXBlLCBsb2NhdGlvbiwgdmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aCA/IGZsYXR0ZW4odmFsdWUpIDogdmFsdWU7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLmdldChsb2NhdGlvbik7XG5cbiAgICAvLyBBdm9pZCByZWR1bmRhbnQgdW5pZm9ybSBjb21tYW5kc1xuICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHNldFZhbHVlID09PSB1bmRlZmluZWQgfHwgc2V0VmFsdWUubGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNsb25lIGFycmF5IHRvIHN0b3JlIGFzIGNhY2hlXG4gICAgICAgICAgICBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLnNldChsb2NhdGlvbiwgdmFsdWUuc2xpY2UoMCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFycmF5c0VxdWFsKHNldFZhbHVlLCB2YWx1ZSkpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhY2hlZCBhcnJheSB2YWx1ZXNcbiAgICAgICAgICAgIHNldFZhbHVlLnNldCA/IHNldFZhbHVlLnNldCh2YWx1ZSkgOiBzZXRBcnJheShzZXRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5zZXQobG9jYXRpb24sIHNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzZXRWYWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5zZXQobG9jYXRpb24sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSA1MTI2OlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA/IGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHZhbHVlKSA6IGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVFxuICAgICAgICBjYXNlIDM1NjY0OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHZhbHVlKTsgLy8gRkxPQVRfVkVDMlxuICAgICAgICBjYXNlIDM1NjY1OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlKTsgLy8gRkxPQVRfVkVDM1xuICAgICAgICBjYXNlIDM1NjY2OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHZhbHVlKTsgLy8gRkxPQVRfVkVDNFxuICAgICAgICBjYXNlIDM1NjcwOiAvLyBCT09MXG4gICAgICAgIGNhc2UgNTEyNDogLy8gSU5UXG4gICAgICAgIGNhc2UgMzU2Nzg6IC8vIFNBTVBMRVJfMkRcbiAgICAgICAgY2FzZSAzNTY4MDpcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPyBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2YWx1ZSkgOiBnbC51bmlmb3JtMWkobG9jYXRpb24sIHZhbHVlKTsgLy8gU0FNUExFUl9DVUJFXG4gICAgICAgIGNhc2UgMzU2NzE6IC8vIEJPT0xfVkVDMlxuICAgICAgICBjYXNlIDM1NjY3OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHZhbHVlKTsgLy8gSU5UX1ZFQzJcbiAgICAgICAgY2FzZSAzNTY3MjogLy8gQk9PTF9WRUMzXG4gICAgICAgIGNhc2UgMzU2Njg6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBJTlRfVkVDM1xuICAgICAgICBjYXNlIDM1NjczOiAvLyBCT09MX1ZFQzRcbiAgICAgICAgY2FzZSAzNTY2OTpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIElOVF9WRUM0XG4gICAgICAgIGNhc2UgMzU2NzQ6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybU1hdHJpeDJmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTsgLy8gRkxPQVRfTUFUMlxuICAgICAgICBjYXNlIDM1Njc1OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZSk7IC8vIEZMT0FUX01BVDNcbiAgICAgICAgY2FzZSAzNTY3NjpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpOyAvLyBGTE9BVF9NQVQ0XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRMaW5lTnVtYmVycyhzdHJpbmcpIHtcbiAgICBsZXQgbGluZXMgPSBzdHJpbmcuc3BsaXQoJ1xcbicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGluZXNbaV0gPSBpICsgMSArICc6ICcgKyBsaW5lc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGEpIHtcbiAgICBjb25zdCBhcnJheUxlbiA9IGEubGVuZ3RoO1xuICAgIGNvbnN0IHZhbHVlTGVuID0gYVswXS5sZW5ndGg7XG4gICAgaWYgKHZhbHVlTGVuID09PSB1bmRlZmluZWQpIHJldHVybiBhO1xuICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5TGVuICogdmFsdWVMZW47XG4gICAgbGV0IHZhbHVlID0gYXJyYXlDYWNoZUYzMltsZW5ndGhdO1xuICAgIGlmICghdmFsdWUpIGFycmF5Q2FjaGVGMzJbbGVuZ3RoXSA9IHZhbHVlID0gbmV3IEZsb2F0MzJBcnJheShsZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW47IGkrKykgdmFsdWUuc2V0KGFbaV0sIGkgKiB2YWx1ZUxlbik7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldEFycmF5KGEsIGIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGFbaV0gPSBiW2ldO1xuICAgIH1cbn1cblxubGV0IHdhcm5Db3VudCA9IDA7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgICBpZiAod2FybkNvdW50ID4gMTAwKSByZXR1cm47XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIHdhcm5Db3VudCsrO1xuICAgIGlmICh3YXJuQ291bnQgPiAxMDApIGNvbnNvbGUud2FybignTW9yZSB0aGFuIDEwMCBwcm9ncmFtIHdhcm5pbmdzIC0gc3RvcHBpbmcgbG9ncy4nKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBUZXh0KHtcbiAgICBmb250LFxuICAgIHRleHQsXG4gICAgd2lkdGggPSBJbmZpbml0eSxcbiAgICBhbGlnbiA9ICdsZWZ0JyxcbiAgICBzaXplID0gMSxcbiAgICBsZXR0ZXJTcGFjaW5nID0gMCxcbiAgICBsaW5lSGVpZ2h0ID0gMS40LFxuICAgIHdvcmRTcGFjaW5nID0gMCxcbiAgICB3b3JkQnJlYWsgPSBmYWxzZSxcbn0pIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGdseXBocywgYnVmZmVycztcbiAgICBsZXQgZm9udEhlaWdodCwgYmFzZWxpbmUsIHNjYWxlO1xuXG4gICAgY29uc3QgbmV3bGluZSA9IC9cXG4vO1xuICAgIGNvbnN0IHdoaXRlc3BhY2UgPSAvXFxzLztcblxuICAgIHtcbiAgICAgICAgcGFyc2VGb250KCk7XG4gICAgICAgIGNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VGb250KCkge1xuICAgICAgICBnbHlwaHMgPSB7fTtcbiAgICAgICAgZm9udC5jaGFycy5mb3JFYWNoKChkKSA9PiAoZ2x5cGhzW2QuY2hhcl0gPSBkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgICAgIGZvbnRIZWlnaHQgPSBmb250LmNvbW1vbi5saW5lSGVpZ2h0O1xuICAgICAgICBiYXNlbGluZSA9IGZvbnQuY29tbW9uLmJhc2U7XG5cbiAgICAgICAgLy8gVXNlIGJhc2VsaW5lIHNvIHRoYXQgYWN0dWFsIHRleHQgaGVpZ2h0IGlzIGFzIGNsb3NlIHRvICdzaXplJyB2YWx1ZSBhcyBwb3NzaWJsZVxuICAgICAgICBzY2FsZSA9IHNpemUgLyBiYXNlbGluZTtcblxuICAgICAgICAvLyBTdHJpcCBzcGFjZXMgYW5kIG5ld2xpbmVzIHRvIGdldCBhY3R1YWwgY2hhcmFjdGVyIGxlbmd0aCBmb3IgYnVmZmVyc1xuICAgICAgICBsZXQgY2hhcnMgPSB0ZXh0LnJlcGxhY2UoL1sgXFxuXS9nLCAnJyk7XG4gICAgICAgIGxldCBudW1DaGFycyA9IGNoYXJzLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGUgb3V0cHV0IGJ1ZmZlcnNcbiAgICAgICAgYnVmZmVycyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KG51bUNoYXJzICogNCAqIDMpLFxuICAgICAgICAgICAgdXY6IG5ldyBGbG9hdDMyQXJyYXkobnVtQ2hhcnMgKiA0ICogMiksXG4gICAgICAgICAgICBpZDogbmV3IEZsb2F0MzJBcnJheShudW1DaGFycyAqIDQpLFxuICAgICAgICAgICAgaW5kZXg6IG5ldyBVaW50MTZBcnJheShudW1DaGFycyAqIDYpLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNldCB2YWx1ZXMgZm9yIGJ1ZmZlcnMgdGhhdCBkb24ndCByZXF1aXJlIGNhbGN1bGF0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2hhcnM7IGkrKykge1xuICAgICAgICAgICAgYnVmZmVycy5pZC5zZXQoW2ksIGksIGksIGldLCBpICogNCk7XG4gICAgICAgICAgICBidWZmZXJzLmluZGV4LnNldChbaSAqIDQsIGkgKiA0ICsgMiwgaSAqIDQgKyAxLCBpICogNCArIDEsIGkgKiA0ICsgMiwgaSAqIDQgKyAzXSwgaSAqIDYpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gICAgICAgIGxldCBjdXJzb3IgPSAwO1xuXG4gICAgICAgIGxldCB3b3JkQ3Vyc29yID0gMDtcbiAgICAgICAgbGV0IHdvcmRXaWR0aCA9IDA7XG4gICAgICAgIGxldCBsaW5lID0gbmV3TGluZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld0xpbmUoKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGdseXBoczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgIHdvcmRDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgICB3b3JkV2lkdGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4VGltZXMgPSAxMDA7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJzb3IgPCB0ZXh0Lmxlbmd0aCAmJiBjb3VudCA8IG1heFRpbWVzKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gdGV4dFtjdXJzb3JdO1xuXG4gICAgICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgYXQgc3RhcnQgb2YgbGluZVxuICAgICAgICAgICAgaWYgKCFsaW5lLndpZHRoICYmIHdoaXRlc3BhY2UudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIHdvcmRDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgd29yZFdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgbmV3bGluZSBjaGFyLCBza2lwIHRvIG5leHQgbGluZVxuICAgICAgICAgICAgaWYgKG5ld2xpbmUudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIGN1cnNvcisrO1xuICAgICAgICAgICAgICAgIGxpbmUgPSBuZXdMaW5lKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdseXBoID0gZ2x5cGhzW2NoYXJdIHx8IGdseXBoc1snICddO1xuXG4gICAgICAgICAgICAvLyBGaW5kIGFueSBhcHBsaWNhYmxlIGtlcm4gcGFpcnNcbiAgICAgICAgICAgIGlmIChsaW5lLmdseXBocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2R2x5cGggPSBsaW5lLmdseXBoc1tsaW5lLmdseXBocy5sZW5ndGggLSAxXVswXTtcbiAgICAgICAgICAgICAgICBsZXQga2VybiA9IGdldEtlcm5QYWlyT2Zmc2V0KGdseXBoLmlkLCBwcmV2R2x5cGguaWQpICogc2NhbGU7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCArPSBrZXJuO1xuICAgICAgICAgICAgICAgIHdvcmRXaWR0aCArPSBrZXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgY2hhciB0byBsaW5lXG4gICAgICAgICAgICBsaW5lLmdseXBocy5wdXNoKFtnbHlwaCwgbGluZS53aWR0aF0pO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgYWR2YW5jZSBmb3IgbmV4dCBnbHlwaFxuICAgICAgICAgICAgbGV0IGFkdmFuY2UgPSAwO1xuXG4gICAgICAgICAgICAvLyBJZiB3aGl0ZXNwYWNlLCB1cGRhdGUgbG9jYXRpb24gb2YgY3VycmVudCB3b3JkIGZvciBsaW5lIGJyZWFrc1xuICAgICAgICAgICAgaWYgKHdoaXRlc3BhY2UudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIHdvcmRDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgd29yZFdpZHRoID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB3b3Jkc3BhY2luZ1xuICAgICAgICAgICAgICAgIGFkdmFuY2UgKz0gd29yZFNwYWNpbmcgKiBzaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbGV0dGVyc3BhY2luZ1xuICAgICAgICAgICAgICAgIGFkdmFuY2UgKz0gbGV0dGVyU3BhY2luZyAqIHNpemU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkdmFuY2UgKz0gZ2x5cGgueGFkdmFuY2UgKiBzY2FsZTtcblxuICAgICAgICAgICAgbGluZS53aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgd29yZFdpZHRoICs9IGFkdmFuY2U7XG5cbiAgICAgICAgICAgIC8vIElmIHdpZHRoIGRlZmluZWRcbiAgICAgICAgICAgIGlmIChsaW5lLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjYW4gYnJlYWsgd29yZHMsIHVuZG8gbGF0ZXN0IGdseXBoIGlmIGxpbmUgbm90IGVtcHR5IGFuZCBjcmVhdGUgbmV3IGxpbmVcbiAgICAgICAgICAgICAgICBpZiAod29yZEJyZWFrICYmIGxpbmUuZ2x5cGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmdseXBocy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG5ld0xpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90IGZpcnN0IHdvcmQsIHVuZG8gY3VycmVudCB3b3JkIGFuZCBjdXJzb3IgYW5kIGNyZWF0ZSBuZXcgbGluZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXdvcmRCcmVhayAmJiB3b3JkV2lkdGggIT09IGxpbmUud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bUdseXBocyA9IGN1cnNvciAtIHdvcmRDdXJzb3IgKyAxO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmdseXBocy5zcGxpY2UoLW51bUdseXBocywgbnVtR2x5cGhzKTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gd29yZEN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSB3b3JkV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBuZXdMaW5lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3Vyc29yKys7XG4gICAgICAgICAgICAvLyBSZXNldCBpbmZpbml0ZSBsb29wIGNhdGNoXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgbGFzdCBsaW5lIGlmIGVtcHR5XG4gICAgICAgIGlmICghbGluZS53aWR0aCkgbGluZXMucG9wKCk7XG5cbiAgICAgICAgcG9wdWxhdGVCdWZmZXJzKGxpbmVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUJ1ZmZlcnMobGluZXMpIHtcbiAgICAgICAgY29uc3QgdGV4VyA9IGZvbnQuY29tbW9uLnNjYWxlVztcbiAgICAgICAgY29uc3QgdGV4SCA9IGZvbnQuY29tbW9uLnNjYWxlSDtcblxuICAgICAgICAvLyBGb3IgYWxsIGZvbnRzIHRlc3RlZCwgYSBsaXR0bGUgb2Zmc2V0IHdhcyBuZWVkZWQgdG8gYmUgcmlnaHQgb24gdGhlIGJhc2VsaW5lLCBoZW5jZSAwLjA3LlxuICAgICAgICBsZXQgeSA9IDAuMDcgKiBzaXplO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgbGluZUluZGV4ID0gMDsgbGluZUluZGV4IDwgbGluZXMubGVuZ3RoOyBsaW5lSW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2x5cGggPSBsaW5lLmdseXBoc1tpXVswXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGxpbmUuZ2x5cGhzW2ldWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICB4IC09IGxpbmUud2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB4IC09IGxpbmUud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2UsIGRvbid0IGFkZCB0byBnZW9tZXRyeVxuICAgICAgICAgICAgICAgIGlmICh3aGl0ZXNwYWNlLnRlc3QoZ2x5cGguY2hhcikpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgY2hhciBzcHJpdGUgb2Zmc2V0c1xuICAgICAgICAgICAgICAgIHggKz0gZ2x5cGgueG9mZnNldCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIHkgLT0gZ2x5cGgueW9mZnNldCAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgLy8gZWFjaCBsZXR0ZXIgaXMgYSBxdWFkLiBheGlzIGJvdHRvbSBsZWZ0XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBnbHlwaC53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgIGxldCBoID0gZ2x5cGguaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgYnVmZmVycy5wb3NpdGlvbi5zZXQoW3gsIHkgLSBoLCAwLCB4LCB5LCAwLCB4ICsgdywgeSAtIGgsIDAsIHggKyB3LCB5LCAwXSwgaiAqIDQgKiAzKTtcblxuICAgICAgICAgICAgICAgIGxldCB1ID0gZ2x5cGgueCAvIHRleFc7XG4gICAgICAgICAgICAgICAgbGV0IHV3ID0gZ2x5cGgud2lkdGggLyB0ZXhXO1xuICAgICAgICAgICAgICAgIGxldCB2ID0gMS4wIC0gZ2x5cGgueSAvIHRleEg7XG4gICAgICAgICAgICAgICAgbGV0IHZoID0gZ2x5cGguaGVpZ2h0IC8gdGV4SDtcbiAgICAgICAgICAgICAgICBidWZmZXJzLnV2LnNldChbdSwgdiAtIHZoLCB1LCB2LCB1ICsgdXcsIHYgLSB2aCwgdSArIHV3LCB2XSwgaiAqIDQgKiAyKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGN1cnNvciB0byBiYXNlbGluZVxuICAgICAgICAgICAgICAgIHkgKz0gZ2x5cGgueW9mZnNldCAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB5IC09IHNpemUgKiBsaW5lSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuYnVmZmVycyA9IGJ1ZmZlcnM7XG4gICAgICAgIF90aGlzLm51bUxpbmVzID0gbGluZXMubGVuZ3RoO1xuICAgICAgICBfdGhpcy5oZWlnaHQgPSBfdGhpcy5udW1MaW5lcyAqIHNpemUgKiBsaW5lSGVpZ2h0O1xuICAgICAgICBfdGhpcy53aWR0aCA9IE1hdGgubWF4KC4uLmxpbmVzLm1hcCgobGluZSkgPT4gbGluZS53aWR0aCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEtlcm5QYWlyT2Zmc2V0KGlkMSwgaWQyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9udC5rZXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGsgPSBmb250Lmtlcm5pbmdzW2ldO1xuICAgICAgICAgICAgaWYgKGsuZmlyc3QgPCBpZDEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGsuc2Vjb25kIDwgaWQyKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChrLmZpcnN0ID4gaWQxKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGlmIChrLmZpcnN0ID09PSBpZDEgJiYgay5zZWNvbmQgPiBpZDIpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIGsuYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBidWZmZXJzIHRvIGxheW91dCB3aXRoIG5ldyBsYXlvdXRcbiAgICB0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICh7IHdpZHRoIH0gPSBvcHRpb25zKTtcbiAgICAgICAgbGF5b3V0KCk7XG4gICAgfTtcblxuICAgIC8vIENvbXBsZXRlbHkgY2hhbmdlIHRleHQgKGxpa2UgY3JlYXRpbmcgbmV3IFRleHQpXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAoeyB0ZXh0IH0gPSBvcHRpb25zKTtcbiAgICAgICAgY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0ICogYXMgQ29sb3JGdW5jIGZyb20gJy4vZnVuY3Rpb25zL0NvbG9yRnVuYy5qcyc7XG5cbi8vIENvbG9yIHN0b3JlZCBhcyBhbiBhcnJheSBvZiBSR0IgZGVjaW1hbCB2YWx1ZXMgKGJldHdlZW4gMCA+IDEpXG4vLyBDb25zdHJ1Y3RvciBhbmQgc2V0IG1ldGhvZCBhY2NlcHQgZm9sbG93aW5nIGZvcm1hdHM6XG4vLyBuZXcgQ29sb3IoKSAtIEVtcHR5IChkZWZhdWx0cyB0byBibGFjaylcbi8vIG5ldyBDb2xvcihbMC4yLCAwLjQsIDEuMF0pIC0gRGVjaW1hbCBBcnJheSAob3IgYW5vdGhlciBDb2xvciBpbnN0YW5jZSlcbi8vIG5ldyBDb2xvcigwLjcsIDAuMCwgMC4xKSAtIERlY2ltYWwgUkdCIHZhbHVlc1xuLy8gbmV3IENvbG9yKCcjZmYwMDAwJykgLSBIZXggc3RyaW5nXG4vLyBuZXcgQ29sb3IoJyNjY2MnKSAtIFNob3J0LWhhbmQgSGV4IHN0cmluZ1xuLy8gbmV3IENvbG9yKDB4NGYyN2U4KSAtIE51bWJlclxuLy8gbmV3IENvbG9yKCdyZWQnKSAtIENvbG9yIG5hbWUgc3RyaW5nIChzaG9ydCBsaXN0IGluIENvbG9yRnVuYy5qcylcblxuZXhwb3J0IGNsYXNzIENvbG9yIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbG9yKSkgcmV0dXJuIHN1cGVyKC4uLmNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyKC4uLkNvbG9yRnVuYy5wYXJzZUNvbG9yKC4uLmFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGdldCByKCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9XG5cbiAgICBnZXQgZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMV07XG4gICAgfVxuXG4gICAgZ2V0IGIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzJdO1xuICAgIH1cblxuICAgIHNldCByKHYpIHtcbiAgICAgICAgdGhpc1swXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IGcodikge1xuICAgICAgICB0aGlzWzFdID0gdjtcbiAgICB9XG5cbiAgICBzZXQgYih2KSB7XG4gICAgICAgIHRoaXNbMl0gPSB2O1xuICAgIH1cblxuICAgIHNldChjb2xvcikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xvcikpIHJldHVybiB0aGlzLmNvcHkoY29sb3IpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KENvbG9yRnVuYy5wYXJzZUNvbG9yKC4uLmFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNvcHkodikge1xuICAgICAgICB0aGlzWzBdID0gdlswXTtcbiAgICAgICAgdGhpc1sxXSA9IHZbMV07XG4gICAgICAgIHRoaXNbMl0gPSB2WzJdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBNYXQzRnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXQzIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKG0wMCA9IDEsIG0wMSA9IDAsIG0wMiA9IDAsIG0xMCA9IDAsIG0xMSA9IDEsIG0xMiA9IDAsIG0yMCA9IDAsIG0yMSA9IDAsIG0yMiA9IDEpIHtcbiAgICAgICAgc3VwZXIobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldChtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgICAgIGlmIChtMDAubGVuZ3RoKSByZXR1cm4gdGhpcy5jb3B5KG0wMCk7XG4gICAgICAgIE1hdDNGdW5jLnNldCh0aGlzLCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnRyYW5zbGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnJvdGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuc2NhbGUodGhpcywgbSwgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG1hLCBtYikge1xuICAgICAgICBpZiAobWIpIHtcbiAgICAgICAgICAgIE1hdDNGdW5jLm11bHRpcGx5KHRoaXMsIG1hLCBtYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNYXQzRnVuYy5tdWx0aXBseSh0aGlzLCB0aGlzLCBtYSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIE1hdDNGdW5jLmlkZW50aXR5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KG0pIHtcbiAgICAgICAgTWF0M0Z1bmMuY29weSh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbU1hdHJpeDQobSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVF1YXRlcm5pb24ocSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbUJhc2lzKHZlYzNhLCB2ZWMzYiwgdmVjM2MpIHtcbiAgICAgICAgdGhpcy5zZXQodmVjM2FbMF0sIHZlYzNhWzFdLCB2ZWMzYVsyXSwgdmVjM2JbMF0sIHZlYzNiWzFdLCB2ZWMzYlsyXSwgdmVjM2NbMF0sIHZlYzNjWzFdLCB2ZWMzY1syXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UobSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuaW52ZXJ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXROb3JtYWxNYXRyaXgobSkge1xuICAgICAgICBNYXQzRnVuYy5ub3JtYWxGcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiY29uc3QgTkFNRVMgPSB7XG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIHJlZDogJyNmZjAwMDAnLFxuICAgIGdyZWVuOiAnIzAwZmYwMCcsXG4gICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgeWVsbG93OiAnI2ZmZmYwMCcsXG4gICAgb3JhbmdlOiAnI2ZmODAwMCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SR0IoaGV4KSB7XG4gICAgaWYgKGhleC5sZW5ndGggPT09IDQpIGhleCA9IGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXSArIGhleFszXSArIGhleFszXTtcbiAgICBjb25zdCByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICBpZiAoIXJnYikgY29uc29sZS53YXJuKGBVbmFibGUgdG8gY29udmVydCBoZXggc3RyaW5nICR7aGV4fSB0byByZ2IgdmFsdWVzYCk7XG4gICAgcmV0dXJuIFtwYXJzZUludChyZ2JbMV0sIDE2KSAvIDI1NSwgcGFyc2VJbnQocmdiWzJdLCAxNikgLyAyNTUsIHBhcnNlSW50KHJnYlszXSwgMTYpIC8gMjU1XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvUkdCKG51bSkge1xuICAgIG51bSA9IHBhcnNlSW50KG51bSk7XG4gICAgcmV0dXJuIFsoKG51bSA+PiAxNikgJiAyNTUpIC8gMjU1LCAoKG51bSA+PiA4KSAmIDI1NSkgLyAyNTUsIChudW0gJiAyNTUpIC8gMjU1XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3IpIHtcbiAgICAvLyBFbXB0eVxuICAgIGlmIChjb2xvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWzAsIDAsIDBdO1xuXG4gICAgLy8gRGVjaW1hbFxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSByZXR1cm4gYXJndW1lbnRzO1xuXG4gICAgLy8gTnVtYmVyXG4gICAgaWYgKCFpc05hTihjb2xvcikpIHJldHVybiBudW1iZXJUb1JHQihjb2xvcik7XG5cbiAgICAvLyBIZXhcbiAgICBpZiAoY29sb3JbMF0gPT09ICcjJykgcmV0dXJuIGhleFRvUkdCKGNvbG9yKTtcblxuICAgIC8vIE5hbWVzXG4gICAgaWYgKE5BTUVTW2NvbG9yLnRvTG93ZXJDYXNlKCldKSByZXR1cm4gaGV4VG9SR0IoTkFNRVNbY29sb3IudG9Mb3dlckNhc2UoKV0pO1xuXG4gICAgY29uc29sZS53YXJuKCdDb2xvciBmb3JtYXQgbm90IHJlY29nbmlzZWQnKTtcbiAgICByZXR1cm4gWzAsIDAsIDBdO1xufVxuIiwiY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyAzeDMgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbNF07XG4gICAgb3V0WzRdID0gYVs1XTtcbiAgICBvdXRbNV0gPSBhWzZdO1xuICAgIG91dFs2XSA9IGFbOF07XG4gICAgb3V0WzddID0gYVs5XTtcbiAgICBvdXRbOF0gPSBhWzEwXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHl4ID0geSAqIHgyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgenggPSB6ICogeDI7XG4gICAgbGV0IHp5ID0geiAqIHkyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFszXSA9IHl4IC0gd3o7XG4gICAgb3V0WzZdID0genggKyB3eTtcblxuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzddID0genkgLSB3eDtcblxuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzVdID0genkgKyB3eDtcbiAgICBvdXRbOF0gPSAxIC0geHggLSB5eTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0xMDtcbiAgICBvdXRbNF0gPSBtMTE7XG4gICAgb3V0WzVdID0gbTEyO1xuICAgIG91dFs2XSA9IG0yMDtcbiAgICBvdXRbN10gPSBtMjE7XG4gICAgb3V0WzhdID0gbTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMTtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIGxldCBhMDEgPSBhWzFdLFxuICAgICAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgICAgIGExMiA9IGFbNV07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGEwMTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYTAyO1xuICAgICAgICBvdXRbN10gPSBhMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVszXTtcbiAgICAgICAgb3V0WzJdID0gYVs2XTtcbiAgICAgICAgb3V0WzNdID0gYVsxXTtcbiAgICAgICAgb3V0WzRdID0gYVs0XTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYVsyXTtcbiAgICAgICAgb3V0WzddID0gYVs1XTtcbiAgICAgICAgb3V0WzhdID0gYVs4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgICBsZXQgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgICBsZXQgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIGxldCBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gYjAxICogZGV0O1xuICAgIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICAgIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXTtcbiAgICBsZXQgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBsZXQgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XTtcblxuICAgIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMCA9IGJbMF0sXG4gICAgICAgIGIwMSA9IGJbMV0sXG4gICAgICAgIGIwMiA9IGJbMl07XG4gICAgbGV0IGIxMCA9IGJbM10sXG4gICAgICAgIGIxMSA9IGJbNF0sXG4gICAgICAgIGIxMiA9IGJbNV07XG4gICAgbGV0IGIyMCA9IGJbNl0sXG4gICAgICAgIGIyMSA9IGJbN10sXG4gICAgICAgIGIyMiA9IGJbOF07XG5cbiAgICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gICAgb3V0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICAgIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcblxuICAgIG91dFszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gICAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuXG4gICAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICAgIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgICBvdXRbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdLFxuICAgICAgICB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV07XG5cbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcblxuICAgIG91dFszXSA9IGExMDtcbiAgICBvdXRbNF0gPSBhMTE7XG4gICAgb3V0WzVdID0gYTEyO1xuXG4gICAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gICAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gICAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MyBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF0sXG4gICAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICAgIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICAgIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gICAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gICAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gICAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgICBvdXRbNl0gPSBhMjA7XG4gICAgb3V0WzddID0gYTIxO1xuICAgIG91dFs4XSA9IGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgbGV0IHggPSB2WzBdLFxuICAgICAgICB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IHggKiBhWzBdO1xuICAgIG91dFsxXSA9IHggKiBhWzFdO1xuICAgIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gICAgb3V0WzNdID0geSAqIGFbM107XG4gICAgb3V0WzRdID0geSAqIGFbNF07XG4gICAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIGxldCBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG4gICAgbGV0IGEzMCA9IGFbMTJdLFxuICAgICAgICBhMzEgPSBhWzEzXSxcbiAgICAgICAgYTMyID0gYVsxNF0sXG4gICAgICAgIGEzMyA9IGFbMTVdO1xuXG4gICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcblxuICAgIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFs0XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuXG4gICAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IC0yIC8gaGVpZ2h0O1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gLTE7XG4gICAgb3V0WzddID0gMTtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgb3V0WzRdID0gYVs0XSAqIGI7XG4gICAgb3V0WzVdID0gYVs1XSAqIGI7XG4gICAgb3V0WzZdID0gYVs2XSAqIGI7XG4gICAgb3V0WzddID0gYVs3XSAqIGI7XG4gICAgb3V0WzhdID0gYVs4XSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhOGQyZmZkMGEzZDQzMzBmMDBmXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiU3ViVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpdGxlIiwic3ViVGl0bGUiLCJyZW5kZXJlciIsInRpbWUiLCJleHRyYSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZVRpdGxlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVTdHJlbmd0aCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ1U3BlZWQiLCJ1VGltZSIsIm1lc2giLCJzZXRQYXJlbnQiLCJ0aXRsZVRleHQiLCJwbGFuZSIsInRleHQiLCJzdWJUaXRsZVRleHQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImZyb21UbyIsInVBbHBoYSIsImhpZGUiLCJ0byIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIiwiQXV0b0JpbmQiLCJDb2xvciIsIkdlb21ldHJ5IiwiVGV4dCIsImZvbnQiLCJzcmMiLCJjcmVhdGVTaGFkZXIiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJ2ZXJ0ZXgxMDAiLCJmcmFnbWVudDEwMCIsInZlcnRleDMwMCIsImZyYWdtZW50MzAwIiwiZnJhZ21lbnRTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJpc1dlYmdsMiIsImN1bGxGYWNlIiwidHJhbnNwYXJlbnQiLCJ1Q29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwic2l6ZSIsIndvcmRTcGFjaW5nIiwiZGF0YSIsImJ1ZmZlcnMiLCJ1diIsImlkIiwiaW5kZXgiLCJjb21wdXRlQm91bmRpbmdCb3giLCJjb25zb2xlIiwibG9nIiwiVHJhbnNmb3JtIiwiTWF0MyIsIk1hdDQiLCJJRCIsIm1vZGUiLCJUUklBTkdMRVMiLCJmcnVzdHVtQ3VsbGVkIiwicmVuZGVyT3JkZXIiLCJjYW52YXMiLCJlcnJvciIsIm1vZGVsVmlld01hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImJlZm9yZVJlbmRlckNhbGxiYWNrcyIsImFmdGVyUmVuZGVyQ2FsbGJhY2tzIiwib25CZWZvcmVSZW5kZXIiLCJmIiwicHVzaCIsIm9uQWZ0ZXJSZW5kZXIiLCJkcmF3IiwiY2FtZXJhIiwibW9kZWxNYXRyaXgiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWV3TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNhbWVyYVBvc2l0aW9uIiwid29ybGRQb3NpdGlvbiIsIm11bHRpcGx5Iiwid29ybGRNYXRyaXgiLCJnZXROb3JtYWxNYXRyaXgiLCJmb3JFYWNoIiwiZmxpcEZhY2VzIiwiZGV0ZXJtaW5hbnQiLCJ1c2UiLCJhcnJheUNhY2hlRjMyIiwiQkFDSyIsImZyb250RmFjZSIsIkNDVyIsImRlcHRoRnVuYyIsIkxFU1MiLCJ3YXJuIiwiYmxlbmRGdW5jIiwiYmxlbmRFcXVhdGlvbiIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldEJsZW5kRnVuYyIsIk9ORSIsIk9ORV9NSU5VU19TUkNfQUxQSEEiLCJTUkNfQUxQSEEiLCJWRVJURVhfU0hBREVSIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlckluZm9Mb2ciLCJhZGRMaW5lTnVtYmVycyIsIkZSQUdNRU5UX1NIQURFUiIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVTaGFkZXIiLCJ1bmlmb3JtTG9jYXRpb25zIiwiTWFwIiwibnVtVW5pZm9ybXMiLCJBQ1RJVkVfVU5JRk9STVMiLCJ1SW5kZXgiLCJ1bmlmb3JtIiwiZ2V0QWN0aXZlVW5pZm9ybSIsInNldCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsIm5hbWUiLCJzcGxpdCIsIm1hdGNoIiwidW5pZm9ybU5hbWUiLCJuYW1lQ29tcG9uZW50cyIsInNsaWNlIiwiYXR0cmlidXRlTG9jYXRpb25zIiwibG9jYXRpb25zIiwibnVtQXR0cmlicyIsIkFDVElWRV9BVFRSSUJVVEVTIiwiYUluZGV4IiwiYXR0cmlidXRlIiwiZ2V0QWN0aXZlQXR0cmliIiwibG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsImF0dHJpYnV0ZU9yZGVyIiwiam9pbiIsImRzdCIsInNyY0FscGhhIiwiZHN0QWxwaGEiLCJzZXRCbGVuZEVxdWF0aW9uIiwibW9kZVJHQiIsIm1vZGVBbHBoYSIsImFwcGx5U3RhdGUiLCJlbmFibGUiLCJERVBUSF9URVNUIiwiZGlzYWJsZSIsIkNVTExfRkFDRSIsIkJMRU5EIiwic2V0Q3VsbEZhY2UiLCJzZXRGcm9udEZhY2UiLCJzZXREZXB0aE1hc2siLCJzZXREZXB0aEZ1bmMiLCJ0ZXh0dXJlVW5pdCIsInByb2dyYW1BY3RpdmUiLCJzdGF0ZSIsImN1cnJlbnRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImFjdGl2ZVVuaWZvcm0iLCJjb21wb25lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJzZXRVbmlmb3JtIiwidHlwZSIsImxlbmd0aCIsInRleHR1cmVVbml0cyIsIkNXIiwicmVtb3ZlIiwiZGVsZXRlUHJvZ3JhbSIsImZsYXR0ZW4iLCJzZXRWYWx1ZSIsImdldCIsImFycmF5c0VxdWFsIiwic2V0QXJyYXkiLCJ1bmlmb3JtMWZ2IiwidW5pZm9ybTFmIiwidW5pZm9ybTJmdiIsInVuaWZvcm0zZnYiLCJ1bmlmb3JtNGZ2IiwidW5pZm9ybTFpdiIsInVuaWZvcm0xaSIsInVuaWZvcm0yaXYiLCJ1bmlmb3JtM2l2IiwidW5pZm9ybTRpdiIsInVuaWZvcm1NYXRyaXgyZnYiLCJ1bmlmb3JtTWF0cml4M2Z2IiwidW5pZm9ybU1hdHJpeDRmdiIsInN0cmluZyIsImxpbmVzIiwiaSIsImEiLCJhcnJheUxlbiIsInZhbHVlTGVuIiwiRmxvYXQzMkFycmF5IiwiYiIsImwiLCJ3YXJuQ291bnQiLCJtZXNzYWdlIiwiSW5maW5pdHkiLCJhbGlnbiIsImxpbmVIZWlnaHQiLCJ3b3JkQnJlYWsiLCJfdGhpcyIsImdseXBocyIsImZvbnRIZWlnaHQiLCJiYXNlbGluZSIsIm5ld2xpbmUiLCJ3aGl0ZXNwYWNlIiwicGFyc2VGb250IiwiY3JlYXRlR2VvbWV0cnkiLCJjaGFycyIsImQiLCJjaGFyIiwiY29tbW9uIiwiYmFzZSIsInJlcGxhY2UiLCJudW1DaGFycyIsIlVpbnQxNkFycmF5IiwibGF5b3V0IiwiY3Vyc29yIiwid29yZEN1cnNvciIsIndvcmRXaWR0aCIsImxpbmUiLCJuZXdMaW5lIiwibWF4VGltZXMiLCJjb3VudCIsInRlc3QiLCJnbHlwaCIsInByZXZHbHlwaCIsImtlcm4iLCJnZXRLZXJuUGFpck9mZnNldCIsImFkdmFuY2UiLCJ4YWR2YW5jZSIsInBvcCIsIm51bUdseXBocyIsInNwbGljZSIsInBvcHVsYXRlQnVmZmVycyIsInRleFciLCJzY2FsZVciLCJ0ZXhIIiwic2NhbGVIIiwiaiIsImxpbmVJbmRleCIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwidyIsImgiLCJ1IiwidXciLCJ2IiwidmgiLCJudW1MaW5lcyIsIk1hdGgiLCJtYXgiLCJtYXAiLCJpZDEiLCJpZDIiLCJrZXJuaW5ncyIsImsiLCJmaXJzdCIsInNlY29uZCIsImFtb3VudCIsInJlc2l6ZSIsIm9wdGlvbnMiLCJDb2xvckZ1bmMiLCJjb2xvciIsInBhcnNlQ29sb3IiLCJhcmd1bWVudHMiLCJyIiwiZyIsImNvcHkiLCJNYXQzRnVuYyIsIm0wMCIsIm0wMSIsIm0wMiIsIm0xMCIsIm0xMSIsIm0xMiIsIm0yMCIsIm0yMSIsIm0yMiIsInRyYW5zbGF0ZSIsIm0iLCJyb3RhdGUiLCJtYSIsIm1iIiwiaWRlbnRpdHkiLCJmcm9tTWF0cml4NCIsImZyb21NYXQ0IiwiZnJvbVF1YXRlcm5pb24iLCJxIiwiZnJvbVF1YXQiLCJmcm9tQmFzaXMiLCJ2ZWMzYSIsInZlYzNiIiwidmVjM2MiLCJpbnZlcnNlIiwiaW52ZXJ0Iiwibm9ybWFsRnJvbU1hdDQiLCJOQU1FUyIsImJsYWNrIiwid2hpdGUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJmdWNoc2lhIiwiY3lhbiIsInllbGxvdyIsIm9yYW5nZSIsImhleFRvUkdCIiwiaGV4IiwicmdiIiwiZXhlYyIsInBhcnNlSW50IiwibnVtYmVyVG9SR0IiLCJudW0iLCJpc05hTiIsInRvTG93ZXJDYXNlIiwiRVBTSUxPTiIsIm91dCIsInoiLCJ4MiIsInkyIiwiejIiLCJ4eCIsInl4IiwieXkiLCJ6eCIsInp5IiwienoiLCJ3eCIsInd5Iiwid3oiLCJ0cmFuc3Bvc2UiLCJhMDEiLCJhMDIiLCJhMTIiLCJhMDAiLCJhMTAiLCJhMTEiLCJhMjAiLCJhMjEiLCJhMjIiLCJiMDEiLCJiMTEiLCJiMjEiLCJkZXQiLCJiMDAiLCJiMDIiLCJiMTAiLCJiMTIiLCJiMjAiLCJiMjIiLCJyYWQiLCJzIiwic2luIiwiYyIsImNvcyIsImEwMyIsImExMyIsImEyMyIsImEzMCIsImEzMSIsImEzMiIsImEzMyIsImIwMyIsImIwNCIsImIwNSIsImIwNiIsImIwNyIsImIwOCIsImIwOSIsInByb2plY3Rpb24iLCJhZGQiLCJzdWJ0cmFjdCIsIm11bHRpcGx5U2NhbGFyIl0sInNvdXJjZVJvb3QiOiIifQ==