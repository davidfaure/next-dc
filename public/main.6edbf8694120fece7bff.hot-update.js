"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    url
  }) {
    this.url = url;
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_0__.Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    document.body.appendChild(this.gl.canvas);
    this.createCamera();
    this.createScene();
    this.createGeometries();
    this.onResize();
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_1__.Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
  }

  /**
   * Change.
   */
  onChange(url) {}

  /**
   * Resize.
   */
  onResize() {
    this.screen = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    });
    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = {
      height,
      width
    };
    const values = {
      screen: this.screen,
      viewport: this.viewport
    };
  }
  onTouchDown(event) {}
  onTouchMove(event) {}
  onTouchUp(event) {}

  /**
   * Update.
   */
  update(application) {
    if (!application) return;
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    });
  }
});

/***/ }),

/***/ "./node_modules/ogl/src/core/Camera.js":
/*!*********************************************!*\
  !*** ./node_modules/ogl/src/core/Camera.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transform.js */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");



const tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
const tempVec3a = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
const tempVec3b = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
class Camera extends _Transform_js__WEBPACK_IMPORTED_MODULE_2__.Transform {
  constructor(gl, {
    near = 0.1,
    far = 100,
    fov = 45,
    aspect = 1,
    left,
    right,
    bottom,
    top,
    zoom = 1
  } = {}) {
    super();
    Object.assign(this, {
      near,
      far,
      fov,
      aspect,
      left,
      right,
      bottom,
      top,
      zoom
    });
    this.projectionMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.viewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.projectionViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.worldPosition = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();

    // Use orthographic if left/right set, else default to perspective camera
    this.type = left || right ? 'orthographic' : 'perspective';
    if (this.type === 'orthographic') this.orthographic();else this.perspective();
  }
  perspective({
    near = this.near,
    far = this.far,
    fov = this.fov,
    aspect = this.aspect
  } = {}) {
    Object.assign(this, {
      near,
      far,
      fov,
      aspect
    });
    this.projectionMatrix.fromPerspective({
      fov: fov * (Math.PI / 180),
      aspect,
      near,
      far
    });
    this.type = 'perspective';
    return this;
  }
  orthographic({
    near = this.near,
    far = this.far,
    left = this.left || -1,
    right = this.right || 1,
    bottom = this.bottom || -1,
    top = this.top || 1,
    zoom = this.zoom
  } = {}) {
    Object.assign(this, {
      near,
      far,
      left,
      right,
      bottom,
      top,
      zoom
    });
    left /= zoom;
    right /= zoom;
    bottom /= zoom;
    top /= zoom;
    this.projectionMatrix.fromOrthogonal({
      left,
      right,
      bottom,
      top,
      near,
      far
    });
    this.type = 'orthographic';
    return this;
  }
  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);

    // used for sorting
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }
  lookAt(target) {
    super.lookAt(target, true);
    return this;
  }

  // Project 3D coordinate to 2D point
  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  }

  // Unproject 2D point to 3D coordinate
  unproject(v) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }
  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3()];
    }
    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

    for (let i = 0; i < 6; i++) {
      const invLen = 1.0 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }
  frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
    // If no position attribute, treat as frustumCulled false
    if (!node.geometry.attributes.position) return true;
    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
    if (!node.geometry.bounds) return true;
    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(worldMatrix);
    const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(center, radius);
  }
  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;
    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }
    return true;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Renderer.js":
/*!***********************************************!*\
  !*** ./node_modules/ogl/src/core/Renderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");


// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

const tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
let ID = 1;
class Renderer {
  constructor({
    canvas = document.createElement('canvas'),
    width = 300,
    height = 150,
    dpr = 1,
    alpha = false,
    depth = true,
    stencil = false,
    antialias = false,
    premultipliedAlpha = false,
    preserveDrawingBuffer = false,
    powerPreference = 'default',
    autoClear = true,
    webgl = 2
  } = {}) {
    const attributes = {
      alpha,
      depth,
      stencil,
      antialias,
      premultipliedAlpha,
      preserveDrawingBuffer,
      powerPreference
    };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear;
    this.id = ID++;

    // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;
    if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
    if (!this.gl) console.error('unable to create webgl context');

    // Attach renderer to gl so that all classes have access to internal state functions
    this.gl.renderer = this;

    // initialise size values
    this.setSize(width, height);

    // gl state stores to avoid redundant calls on methods used internally
    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = null;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      x: 0,
      y: 0,
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map();
    this.state.currentProgram = null;

    // store requested extensions
    this.extensions = {};

    // Initialise extra format types
    if (this.isWebgl2) {
      this.getExtension('EXT_color_buffer_float');
      this.getExtension('OES_texture_float_linear');
    } else {
      this.getExtension('OES_texture_float');
      this.getExtension('OES_texture_float_linear');
      this.getExtension('OES_texture_half_float');
      this.getExtension('OES_texture_half_float_linear');
      this.getExtension('OES_element_index_uint');
      this.getExtension('OES_standard_derivatives');
      this.getExtension('EXT_sRGB');
      this.getExtension('WEBGL_depth_texture');
      this.getExtension('WEBGL_draw_buffers');
    }
    this.getExtension('WEBGL_compressed_texture_astc');
    this.getExtension('EXT_texture_compression_bptc');
    this.getExtension('WEBGL_compressed_texture_s3tc');
    this.getExtension('WEBGL_compressed_texture_etc1');
    this.getExtension('WEBGL_compressed_texture_pvrtc');
    this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

    // Create method aliases using extension (WebGL1) or native if available (WebGL2)
    this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
    this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
    this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
    this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
    this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
    this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
    this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

    // Store device parameters
    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.canvas.width = width * this.dpr;
    this.gl.canvas.height = height * this.dpr;
    if (!this.gl.canvas.style) return;
    Object.assign(this.gl.canvas.style, {
      width: width + 'px',
      height: height + 'px'
    });
  }
  setViewport(width, height, x = 0, y = 0) {
    if (this.state.viewport.width === width && this.state.viewport.height === height) return;
    this.state.viewport.width = width;
    this.state.viewport.height = height;
    this.state.viewport.x = x;
    this.state.viewport.y = y;
    this.gl.viewport(x, y, width, height);
  }
  setScissor(width, height, x = 0, y = 0) {
    this.gl.scissor(x, y, width, height);
  }
  enable(id) {
    if (this.state[id] === true) return;
    this.gl.enable(id);
    this.state[id] = true;
  }
  disable(id) {
    if (this.state[id] === false) return;
    this.gl.disable(id);
    this.state[id] = false;
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
    this.state.blendFunc.src = src;
    this.state.blendFunc.dst = dst;
    this.state.blendFunc.srcAlpha = srcAlpha;
    this.state.blendFunc.dstAlpha = dstAlpha;
    if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
  }
  setBlendEquation(modeRGB, modeAlpha) {
    modeRGB = modeRGB || this.gl.FUNC_ADD;
    if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
    this.state.blendEquation.modeRGB = modeRGB;
    this.state.blendEquation.modeAlpha = modeAlpha;
    if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
  }
  setCullFace(value) {
    if (this.state.cullFace === value) return;
    this.state.cullFace = value;
    this.gl.cullFace(value);
  }
  setFrontFace(value) {
    if (this.state.frontFace === value) return;
    this.state.frontFace = value;
    this.gl.frontFace(value);
  }
  setDepthMask(value) {
    if (this.state.depthMask === value) return;
    this.state.depthMask = value;
    this.gl.depthMask(value);
  }
  setDepthFunc(value) {
    if (this.state.depthFunc === value) return;
    this.state.depthFunc = value;
    this.gl.depthFunc(value);
  }
  activeTexture(value) {
    if (this.state.activeTextureUnit === value) return;
    this.state.activeTextureUnit = value;
    this.gl.activeTexture(this.gl.TEXTURE0 + value);
  }
  bindFramebuffer({
    target = this.gl.FRAMEBUFFER,
    buffer = null
  } = {}) {
    if (this.state.framebuffer === buffer) return;
    this.state.framebuffer = buffer;
    this.gl.bindFramebuffer(target, buffer);
  }
  getExtension(extension, webgl2Func, extFunc) {
    // if webgl2 function supported, return func bound to gl context
    if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

    // fetch extension once only
    if (!this.extensions[extension]) {
      this.extensions[extension] = this.gl.getExtension(extension);
    }

    // return extension if no function requested
    if (!webgl2Func) return this.extensions[extension];

    // Return null if extension not supported
    if (!this.extensions[extension]) return null;

    // return extension function, bound to extension
    return this.extensions[extension][extFunc].bind(this.extensions[extension]);
  }
  sortOpaque(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else if (a.zDepth !== b.zDepth) {
      return a.zDepth - b.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortTransparent(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    }
    if (a.zDepth !== b.zDepth) {
      return b.zDepth - a.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortUI(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else {
      return b.id - a.id;
    }
  }
  getRenderList({
    scene,
    camera,
    frustumCull,
    sort
  }) {
    let renderList = [];
    if (camera && frustumCull) camera.updateFrustum();

    // Get visible
    scene.traverse(node => {
      if (!node.visible) return true;
      if (!node.draw) return;
      if (frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node)) return;
      }
      renderList.push(node);
    });
    if (sort) {
      const opaque = [];
      const transparent = []; // depthTest true
      const ui = []; // depthTest false

      renderList.forEach(node => {
        // Split into the 3 render groups
        if (!node.program.transparent) {
          opaque.push(node);
        } else if (node.program.depthTest) {
          transparent.push(node);
        } else {
          ui.push(node);
        }
        node.zDepth = 0;

        // Only calculate z-depth if renderOrder unset and depthTest is true
        if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

        // update z-depth
        node.worldMatrix.getTranslation(tempVec3);
        tempVec3.applyMatrix4(camera.projectionViewMatrix);
        node.zDepth = tempVec3.z;
      });
      opaque.sort(this.sortOpaque);
      transparent.sort(this.sortTransparent);
      ui.sort(this.sortUI);
      renderList = opaque.concat(transparent, ui);
    }
    return renderList;
  }
  render({
    scene,
    camera,
    target = null,
    update = true,
    sort = true,
    frustumCull = true,
    clear
  }) {
    if (target === null) {
      // make sure no render target bound so draws to canvas
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      // bind supplied render target and update viewport
      this.bindFramebuffer(target);
      this.setViewport(target.width, target.height);
    }
    if (clear || this.autoClear && clear !== false) {
      // Ensure depth buffer writing is enabled so it can be cleared
      if (this.depth && (!target || target.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }
      this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
    }

    // updates all scene graph matrices
    if (update) scene.updateMatrixWorld();

    // Update camera separately, in case not in scene graph
    if (camera) camera.updateMatrixWorld();

    // Get render list - entails culling and sorting
    const renderList = this.getRenderList({
      scene,
      camera,
      frustumCull,
      sort
    });
    renderList.forEach(node => {
      node.draw({
        camera
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Transform.js":
/*!************************************************!*\
  !*** ./node_modules/ogl/src/core/Transform.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Quat.js */ "./node_modules/ogl/src/math/Quat.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");
/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Euler.js */ "./node_modules/ogl/src/math/Euler.js");




class Transform {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.worldMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.matrixAutoUpdate = true;
    this.position = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.quaternion = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__.Quat();
    this.scale = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(1);
    this.rotation = new _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__.Euler();
    this.up = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(0, 1, 0);
    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }
  setParent(parent, notifyParent = true) {
    if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent) parent.addChild(this, false);
  }
  addChild(child, notifyChild = true) {
    if (!~this.children.indexOf(child)) this.children.push(child);
    if (notifyChild) child.setParent(this, false);
  }
  removeChild(child, notifyChild = true) {
    if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild) child.setParent(null, false);
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }
  traverse(callback) {
    // Return true in callback to stop traversing children
    if (callback(this)) return;
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }
  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(target, invert = false) {
    if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Euler.js":
/*!********************************************!*\
  !*** ./node_modules/ogl/src/math/Euler.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/EulerFunc.js */ "./node_modules/ogl/src/math/functions/EulerFunc.js");
/* harmony import */ var _Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");


const tmpMat4 = new _Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
class Euler extends Array {
  constructor(x = 0, y = x, z = x, order = 'YXZ') {
    super(x, y, z);
    this.order = order;
    this.onChange = () => {};
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this.onChange();
    return this;
  }
  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }
  reorder(order) {
    this.order = order;
    this.onChange();
    return this;
  }
  fromRotationMatrix(m, order = this.order) {
    _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__.fromRotationMatrix(this, m, order);
    this.onChange();
    return this;
  }
  fromQuaternion(q, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Mat4.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Mat4.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat4: () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat4Func.js */ "./node_modules/ogl/src/math/functions/Mat4Func.js");

class Mat4 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(v) {
    this[12] = v;
  }
  set y(v) {
    this[13] = v;
  }
  set z(v) {
    this[14] = v;
  }
  set w(v) {
    this[15] = v;
  }
  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m00.length) return this.copy(m00);
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  translate(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
    return this;
  }
  rotate(v, axis, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v, axis);
    return this;
  }
  scale(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, typeof v === 'number' ? [v, v, v] : v);
    return this;
  }
  add(ma, mb) {
    if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, ma, mb);else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, ma);
    return this;
  }
  sub(ma, mb) {
    if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, ma, mb);else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, ma);
    return this;
  }
  multiply(ma, mb) {
    if (!ma.length) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiplyScalar(this, this, ma);
    } else if (mb) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
    } else {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
    }
    return this;
  }
  identity() {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    return this;
  }
  copy(m) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
    return this;
  }
  fromPerspective({
    fov,
    aspect,
    near,
    far
  } = {}) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.perspective(this, fov, aspect, near, far);
    return this;
  }
  fromOrthogonal({
    left,
    right,
    bottom,
    top,
    near,
    far
  }) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.ortho(this, left, right, bottom, top, near, far);
    return this;
  }
  fromQuaternion(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
    return this;
  }
  setPosition(v) {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }
  inverse(m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
    return this;
  }
  compose(q, pos, scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.fromRotationTranslationScale(this, q, pos, scale);
    return this;
  }
  getRotation(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getRotation(q, this);
    return this;
  }
  getTranslation(pos) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getTranslation(pos, this);
    return this;
  }
  getScaling(scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getScaling(scale, this);
    return this;
  }
  getMaxScaleOnAxis() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getMaxScaleOnAxis(this);
  }
  lookAt(eye, target, up) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.targetTo(this, eye, target, up);
    return this;
  }
  determinant() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.determinant(this);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this[4] = a[o + 4];
    this[5] = a[o + 5];
    this[6] = a[o + 6];
    this[7] = a[o + 7];
    this[8] = a[o + 8];
    this[9] = a[o + 9];
    this[10] = a[o + 10];
    this[11] = a[o + 11];
    this[12] = a[o + 12];
    this[13] = a[o + 13];
    this[14] = a[o + 14];
    this[15] = a[o + 15];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    a[o + 4] = this[4];
    a[o + 5] = this[5];
    a[o + 6] = this[6];
    a[o + 7] = this[7];
    a[o + 8] = this[8];
    a[o + 9] = this[9];
    a[o + 10] = this[10];
    a[o + 11] = this[11];
    a[o + 12] = this[12];
    a[o + 13] = this[13];
    a[o + 14] = this[14];
    a[o + 15] = this[15];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Quat.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Quat.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quat: () => (/* binding */ Quat)
/* harmony export */ });
/* harmony import */ var _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/QuatFunc.js */ "./node_modules/ogl/src/math/functions/QuatFunc.js");

class Quat extends Array {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);
    this.onChange = () => {};
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set w(v) {
    this[3] = v;
    this.onChange();
  }
  identity() {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    this.onChange();
    return this;
  }
  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y, z, w);
    this.onChange();
    return this;
  }
  rotateX(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateX(this, this, a);
    this.onChange();
    return this;
  }
  rotateY(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateY(this, this, a);
    this.onChange();
    return this;
  }
  rotateZ(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateZ(this, this, a);
    this.onChange();
    return this;
  }
  inverse(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, q);
    this.onChange();
    return this;
  }
  conjugate(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.conjugate(this, q);
    this.onChange();
    return this;
  }
  copy(q) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, q);
    this.onChange();
    return this;
  }
  normalize(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, q);
    this.onChange();
    return this;
  }
  multiply(qA, qB) {
    if (qB) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, qA, qB);
    } else {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, qA);
    }
    this.onChange();
    return this;
  }
  dot(v) {
    return _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
  }
  fromMatrix3(matrix3) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromMat3(this, matrix3);
    this.onChange();
    return this;
  }
  fromEuler(euler) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromEuler(this, euler, euler.order);
    return this;
  }
  fromAxisAngle(axis, a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle(this, axis, a);
    this.onChange();
    return this;
  }
  slerp(q, t) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.slerp(this, this, q, t);
    this.onChange();
    return this;
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this.onChange();
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Vec3.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Vec3.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vec3: () => (/* binding */ Vec3)
/* harmony export */ });
/* harmony import */ var _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Vec3Func.js */ "./node_modules/ogl/src/math/functions/Vec3Func.js");

class Vec3 extends Array {
  constructor(x = 0, y = x, z = x) {
    super(x, y, z);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set z(v) {
    this[2] = v;
  }
  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y, z);
    return this;
  }
  copy(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, v);
    return this;
  }
  add(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, va);
    return this;
  }
  sub(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, va);
    return this;
  }
  multiply(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  divide(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.divide(this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, 1 / v);
    return this;
  }
  inverse(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.inverse(this, v);
    return this;
  }

  // Can't use 'length' as Array.prototype uses it
  len() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  distance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.distance(this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  squaredLen() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
  }
  squaredDistance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance(this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
  }
  negate(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.negate(this, v);
    return this;
  }
  cross(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, this, va);
    return this;
  }
  scale(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  normalize() {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, this);
    return this;
  }
  dot(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
  }
  equals(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.exactEquals(this, v);
  }
  applyMatrix3(mat3) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat3(this, this, mat3);
    return this;
  }
  applyMatrix4(mat4) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat4(this, this, mat4);
    return this;
  }
  scaleRotateMatrix4(mat4) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scaleRotateMat4(this, this, mat4);
    return this;
  }
  applyQuaternion(q) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformQuat(this, this, q);
    return this;
  }
  angle(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.angle(this, v);
  }
  lerp(v, t) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this, this, v, t);
    return this;
  }
  clone() {
    return new Vec3(this[0], this[1], this[2]);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
  transformDirection(mat4) {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
    return this.normalize();
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/EulerFunc.js":
/*!**********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/EulerFunc.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromRotationMatrix: () => (/* binding */ fromRotationMatrix)
/* harmony export */ });
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m, order = 'YXZ') {
  if (order === 'XYZ') {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === 'YXZ') {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === 'ZXY') {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === 'ZYX') {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === 'YZX') {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === 'XZY') {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }
  return out;
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Mat4Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Mat4Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   getMaxScaleOnAxis: () => (/* binding */ getMaxScaleOnAxis),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
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
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    let a12 = a[6],
      a13 = a[7];
    let a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
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
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
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
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
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

  // Cache only the current line of the second matrix
  let b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0],
    y = v[1],
    z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0],
    y = v[1],
    z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0],
    y = axis[1],
    z = axis[2];
  let len = Math.hypot(x, y, z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;
  if (Math.abs(len) < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getMaxScaleOnAxis(mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  const x = m11 * m11 + m12 * m12 + m13 * m13;
  const y = m21 * m21 + m22 * m22 + m23 * m23;
  const z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
const getRotation = function () {
  const temp = [1, 1, 1];
  return function (out, mat) {
    let scaling = temp;
    getScaling(scaling, mat);
    let is1 = 1 / scaling[0];
    let is2 = 1 / scaling[1];
    let is3 = 1 / scaling[2];
    let sm11 = mat[0] * is1;
    let sm12 = mat[1] * is2;
    let sm13 = mat[2] * is3;
    let sm21 = mat[4] * is1;
    let sm22 = mat[5] * is2;
    let sm23 = mat[6] * is3;
    let sm31 = mat[8] * is1;
    let sm32 = mat[9] * is2;
    let sm33 = mat[10] * is3;
    let trace = sm11 + sm22 + sm33;
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1.0) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  };
}();

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
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
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
    eyey = eye[1],
    eyez = eye[2],
    upx = up[0],
    upy = up[1],
    upz = up[2];
  let z0 = eyex - target[0],
    z1 = eyey - target[1],
    z2 = eyez - target[2];
  let len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len === 0) {
    // eye and target are in the same position
    z2 = 1;
  } else {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  let x0 = upy * z2 - upz * z1,
    x1 = upz * z0 - upx * z2,
    x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len === 0) {
    // up and z are parallel
    if (upz) {
      upx += 1e-6;
    } else if (upy) {
      upz += 1e-6;
    } else {
      upy += 1e-6;
    }
    x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }
  len = 1 / Math.sqrt(len);
  x0 *= len;
  x1 *= len;
  x2 *= len;
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
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
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
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
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
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
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/QuatFunc.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/QuatFunc.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp)
/* harmony export */ });
/* harmony import */ var _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec4Func.js */ "./node_modules/ogl/src/math/functions/Vec4Func.js");


/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let by = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bz = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;
  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, euler, order = 'YXZ') {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);
  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }
  return out;
}

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.add;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.length;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize;

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Vec3Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Vec3Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
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
/* harmony export */   scaleRotateMat4: () => (/* binding */ scaleRotateMat4),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0],
    ay = a[1],
    az = a[2];
  let bx = b[0],
    by = b[1],
    bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */
function scaleRotateMat4(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed

  let x = a[0],
    y = a[1],
    z = a[2];
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  let uvx = qy * z - qz * y;
  let uvy = qz * x - qx * z;
  let uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy;
  let uuvy = qz * uvx - qx * uvz;
  let uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
const angle = function () {
  const tempA = [0, 0, 0];
  const tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    let cosine = dot(tempA, tempB);
    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Vec4Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Vec4Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5a22426d486fe1549a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUFFdkYsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN4QixNQUFNQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDL0MsSUFBSSxDQUFDTixPQUFPLENBQUNJLENBQUMsQ0FBQyxDQUFDWixRQUFRLENBQUNhLE1BQU0sQ0FBQztNQUNoQyxJ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Q0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDZGxFLENBQUMsQ0FBQ2tFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCbEUsQ0FBQyxDQUFDa0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJsRSxDQUFDLENBQUNrRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQmxFLENBQUMsQ0FBQ2tFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCbEUsQ0FBQyxDQUFDa0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJsRSxDQUFDLENBQUNrRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQmxFLENBQUMsQ0FBQ2tFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCbEUsQ0FBQyxDQUFDa0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJsRSxDQUFDLENBQUNrRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQmxFLENBQUMsQ0FBQ2tFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BCbEUsQ0FBQyxDQUFDa0UsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDcEJsRSxDQUFDLENBQUNrRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQmxFLENBQUMsQ0FBQ2tFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BCbEUsQ0FBQyxDQUFDa0UsQ0FBQyxH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RyxDQUFDLENBQUMsQ0FBQyxHQUFHdEUsR0FBRztFQUNac0UsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHckUsR0FBRztFQUNacUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEUsR0FBRztFQUNab0UsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbkUsR0FBRztFQUNabUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHbEUsR0FBRztFQUNia0UsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakUsR0FBRztFQUNiaUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHaEUsR0FBRztFQUNiZ0UsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0QsR0FBRztFQUNiK0QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHOUQsR0FBRztFQUNiOEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHN0QsR0FBRztFQUNiLE9BQU82RCxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2xELFFBQVFBLENBQUNrRCxHQUFHLEVBQUU7RUFDMUJBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0VBQ1hBLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFD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QUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQmdKLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQmdKLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQmdKLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQmdKLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QmdKLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR2pKLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QixPQUFPZ0osR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTcEQsUUFBUUEsQ0FBQ29ELEdBQUcsRUFBRWpKLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQ2hDZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCZ0osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHakosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3ZCLE9BQU9nSixHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNuRCxjQUFjQSxDQUFDbUQsR0FBRyxFQUFFakosQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFDdENnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7RUFDakJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkJnSixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdqSixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdDLENBQUM7RUFDbkIsT0FBT2dKLEdBQUc7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeDZCc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNsRCxRQUFRQSxDQUFDa0QsR0FBRyxFQUFFO0VBQzFCQSxHQUFHLENBQUMsQ0FB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LEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3VHLEVBQUUsR0FBR2pJLENBQUMsSUFBSXRILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3VQLEVBQUUsQ0FBQztFQUM3QnZHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3dHLEVBQUUsR0FBR2xJLENBQUMsSUFBSXRILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3dQLEVBQUUsQ0FBQztFQUM3QnhHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3lHLEVBQUUsR0FBR25JLENBQUMsSUFBSXRILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3lQLEVBQUUsQ0FBQztFQUM3QixPQUFPekcsR0FBRztBQUNkOzs7Ozs7OztVQ3RJQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvQ2FtZXJhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1JlbmRlcmVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9FdWxlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9NYXQ0LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL1F1YXQuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9mdW5jdGlvbnMvRXVsZXJGdW5jLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQ0RnVuYy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9mdW5jdGlvbnMvUXVhdEZ1bmMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvZnVuY3Rpb25zL1ZlYzNGdW5jLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9WZWM0RnVuYy5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhbWVyYSwgUGxhbmUsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tIFwib2dsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICBkcHI6IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKVxuICAgIH0pXG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJpZXMoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEuZm92ID0gNDVcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIHRoaXMudmlld3BvcnQgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7fVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7fVxuXG4gIG9uVG91Y2hVcChldmVudCkge31cblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuL1RyYW5zZm9ybS5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi4vbWF0aC9NYXQ0LmpzJztcbmltcG9ydCB7IFZlYzMgfSBmcm9tICcuLi9tYXRoL1ZlYzMuanMnO1xuXG5jb25zdCB0ZW1wTWF0NCA9IG5ldyBNYXQ0KCk7XG5jb25zdCB0ZW1wVmVjM2EgPSBuZXcgVmVjMygpO1xuY29uc3QgdGVtcFZlYzNiID0gbmV3IFZlYzMoKTtcblxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoZ2wsIHsgbmVhciA9IDAuMSwgZmFyID0gMTAwLCBmb3YgPSA0NSwgYXNwZWN0ID0gMSwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCB6b29tID0gMSB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgbmVhciwgZmFyLCBmb3YsIGFzcGVjdCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCB6b29tIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMudmlld01hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMucHJvamVjdGlvblZpZXdNYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLndvcmxkUG9zaXRpb24gPSBuZXcgVmVjMygpO1xuXG4gICAgICAgIC8vIFVzZSBvcnRob2dyYXBoaWMgaWYgbGVmdC9yaWdodCBzZXQsIGVsc2UgZGVmYXVsdCB0byBwZXJzcGVjdGl2ZSBjYW1lcmFcbiAgICAgICAgdGhpcy50eXBlID0gbGVmdCB8fCByaWdodCA/ICdvcnRob2dyYXBoaWMnIDogJ3BlcnNwZWN0aXZlJztcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnb3J0aG9ncmFwaGljJykgdGhpcy5vcnRob2dyYXBoaWMoKTtcbiAgICAgICAgZWxzZSB0aGlzLnBlcnNwZWN0aXZlKCk7XG4gICAgfVxuXG4gICAgcGVyc3BlY3RpdmUoeyBuZWFyID0gdGhpcy5uZWFyLCBmYXIgPSB0aGlzLmZhciwgZm92ID0gdGhpcy5mb3YsIGFzcGVjdCA9IHRoaXMuYXNwZWN0IH0gPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgbmVhciwgZmFyLCBmb3YsIGFzcGVjdCB9KTtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LmZyb21QZXJzcGVjdGl2ZSh7IGZvdjogZm92ICogKE1hdGguUEkgLyAxODApLCBhc3BlY3QsIG5lYXIsIGZhciB9KTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3BlcnNwZWN0aXZlJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb3J0aG9ncmFwaGljKHtcbiAgICAgICAgbmVhciA9IHRoaXMubmVhcixcbiAgICAgICAgZmFyID0gdGhpcy5mYXIsXG4gICAgICAgIGxlZnQgPSB0aGlzLmxlZnQgfHwgLTEsXG4gICAgICAgIHJpZ2h0ID0gdGhpcy5yaWdodCB8fCAxLFxuICAgICAgICBib3R0b20gPSB0aGlzLmJvdHRvbSB8fCAtMSxcbiAgICAgICAgdG9wID0gdGhpcy50b3AgfHwgMSxcbiAgICAgICAgem9vbSA9IHRoaXMuem9vbSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG5lYXIsIGZhciwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCB6b29tIH0pO1xuICAgICAgICBsZWZ0IC89IHpvb207XG4gICAgICAgIHJpZ2h0IC89IHpvb207XG4gICAgICAgIGJvdHRvbSAvPSB6b29tO1xuICAgICAgICB0b3AgLz0gem9vbTtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LmZyb21PcnRob2dvbmFsKHsgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIgfSk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvcnRob2dyYXBoaWMnO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGVNYXRyaXhXb3JsZCgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlTWF0cml4V29ybGQoKTtcbiAgICAgICAgdGhpcy52aWV3TWF0cml4LmludmVyc2UodGhpcy53b3JsZE1hdHJpeCk7XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXguZ2V0VHJhbnNsYXRpb24odGhpcy53b3JsZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyB1c2VkIGZvciBzb3J0aW5nXG4gICAgICAgIHRoaXMucHJvamVjdGlvblZpZXdNYXRyaXgubXVsdGlwbHkodGhpcy5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLnZpZXdNYXRyaXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsb29rQXQodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyLmxvb2tBdCh0YXJnZXQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0IDNEIGNvb3JkaW5hdGUgdG8gMkQgcG9pbnRcbiAgICBwcm9qZWN0KHYpIHtcbiAgICAgICAgdi5hcHBseU1hdHJpeDQodGhpcy52aWV3TWF0cml4KTtcbiAgICAgICAgdi5hcHBseU1hdHJpeDQodGhpcy5wcm9qZWN0aW9uTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVW5wcm9qZWN0IDJEIHBvaW50IHRvIDNEIGNvb3JkaW5hdGVcbiAgICB1bnByb2plY3Qodikge1xuICAgICAgICB2LmFwcGx5TWF0cml4NCh0ZW1wTWF0NC5pbnZlcnNlKHRoaXMucHJvamVjdGlvbk1hdHJpeCkpO1xuICAgICAgICB2LmFwcGx5TWF0cml4NCh0aGlzLndvcmxkTWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJ1c3R1bSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZydXN0dW0pIHtcbiAgICAgICAgICAgIHRoaXMuZnJ1c3R1bSA9IFtuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLnByb2plY3Rpb25WaWV3TWF0cml4O1xuICAgICAgICB0aGlzLmZydXN0dW1bMF0uc2V0KG1bM10gLSBtWzBdLCBtWzddIC0gbVs0XSwgbVsxMV0gLSBtWzhdKS5jb25zdGFudCA9IG1bMTVdIC0gbVsxMl07IC8vIC14XG4gICAgICAgIHRoaXMuZnJ1c3R1bVsxXS5zZXQobVszXSArIG1bMF0sIG1bN10gKyBtWzRdLCBtWzExXSArIG1bOF0pLmNvbnN0YW50ID0gbVsxNV0gKyBtWzEyXTsgLy8gK3hcbiAgICAgICAgdGhpcy5mcnVzdHVtWzJdLnNldChtWzNdICsgbVsxXSwgbVs3XSArIG1bNV0sIG1bMTFdICsgbVs5XSkuY29uc3RhbnQgPSBtWzE1XSArIG1bMTNdOyAvLyAreVxuICAgICAgICB0aGlzLmZydXN0dW1bM10uc2V0KG1bM10gLSBtWzFdLCBtWzddIC0gbVs1XSwgbVsxMV0gLSBtWzldKS5jb25zdGFudCA9IG1bMTVdIC0gbVsxM107IC8vIC15XG4gICAgICAgIHRoaXMuZnJ1c3R1bVs0XS5zZXQobVszXSAtIG1bMl0sIG1bN10gLSBtWzZdLCBtWzExXSAtIG1bMTBdKS5jb25zdGFudCA9IG1bMTVdIC0gbVsxNF07IC8vICt6IChmYXIpXG4gICAgICAgIHRoaXMuZnJ1c3R1bVs1XS5zZXQobVszXSArIG1bMl0sIG1bN10gKyBtWzZdLCBtWzExXSArIG1bMTBdKS5jb25zdGFudCA9IG1bMTVdICsgbVsxNF07IC8vIC16IChuZWFyKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbnZMZW4gPSAxLjAgLyB0aGlzLmZydXN0dW1baV0uZGlzdGFuY2UoKTtcbiAgICAgICAgICAgIHRoaXMuZnJ1c3R1bVtpXS5tdWx0aXBseShpbnZMZW4pO1xuICAgICAgICAgICAgdGhpcy5mcnVzdHVtW2ldLmNvbnN0YW50ICo9IGludkxlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZydXN0dW1JbnRlcnNlY3RzTWVzaChub2RlLCB3b3JsZE1hdHJpeCA9IG5vZGUud29ybGRNYXRyaXgpIHtcbiAgICAgICAgLy8gSWYgbm8gcG9zaXRpb24gYXR0cmlidXRlLCB0cmVhdCBhcyBmcnVzdHVtQ3VsbGVkIGZhbHNlXG4gICAgICAgIGlmICghbm9kZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoIW5vZGUuZ2VvbWV0cnkuYm91bmRzIHx8IG5vZGUuZ2VvbWV0cnkuYm91bmRzLnJhZGl1cyA9PT0gSW5maW5pdHkpIG5vZGUuZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG5cbiAgICAgICAgaWYgKCFub2RlLmdlb21ldHJ5LmJvdW5kcykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY29uc3QgY2VudGVyID0gdGVtcFZlYzNhO1xuICAgICAgICBjZW50ZXIuY29weShub2RlLmdlb21ldHJ5LmJvdW5kcy5jZW50ZXIpO1xuICAgICAgICBjZW50ZXIuYXBwbHlNYXRyaXg0KHdvcmxkTWF0cml4KTtcblxuICAgICAgICBjb25zdCByYWRpdXMgPSBub2RlLmdlb21ldHJ5LmJvdW5kcy5yYWRpdXMgKiB3b3JsZE1hdHJpeC5nZXRNYXhTY2FsZU9uQXhpcygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZydXN0dW1JbnRlcnNlY3RzU3BoZXJlKGNlbnRlciwgcmFkaXVzKTtcbiAgICB9XG5cbiAgICBmcnVzdHVtSW50ZXJzZWN0c1NwaGVyZShjZW50ZXIsIHJhZGl1cykge1xuICAgICAgICBjb25zdCBub3JtYWwgPSB0ZW1wVmVjM2I7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gdGhpcy5mcnVzdHVtW2ldO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBub3JtYWwuY29weShwbGFuZSkuZG90KGNlbnRlcikgKyBwbGFuZS5jb25zdGFudDtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IC1yYWRpdXMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi4vbWF0aC9WZWMzLmpzJztcblxuLy8gVE9ETzogSGFuZGxlIGNvbnRleHQgbG9zcyBodHRwczovL3d3dy5raHJvbm9zLm9yZy93ZWJnbC93aWtpL0hhbmRsaW5nQ29udGV4dExvc3RcblxuLy8gTm90IGF1dG9tYXRpYyAtIGRldnMgdG8gdXNlIHRoZXNlIG1ldGhvZHMgbWFudWFsbHlcbi8vIGdsLmNvbG9yTWFzayggY29sb3JNYXNrLCBjb2xvck1hc2ssIGNvbG9yTWFzaywgY29sb3JNYXNrICk7XG4vLyBnbC5jbGVhckNvbG9yKCByLCBnLCBiLCBhICk7XG4vLyBnbC5zdGVuY2lsTWFzayggc3RlbmNpbE1hc2sgKTtcbi8vIGdsLnN0ZW5jaWxGdW5jKCBzdGVuY2lsRnVuYywgc3RlbmNpbFJlZiwgc3RlbmNpbE1hc2sgKTtcbi8vIGdsLnN0ZW5jaWxPcCggc3RlbmNpbEZhaWwsIHN0ZW5jaWxaRmFpbCwgc3RlbmNpbFpQYXNzICk7XG4vLyBnbC5jbGVhclN0ZW5jaWwoIHN0ZW5jaWwgKTtcblxuY29uc3QgdGVtcFZlYzMgPSBuZXcgVmVjMygpO1xubGV0IElEID0gMTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgICAgICB3aWR0aCA9IDMwMCxcbiAgICAgICAgaGVpZ2h0ID0gMTUwLFxuICAgICAgICBkcHIgPSAxLFxuICAgICAgICBhbHBoYSA9IGZhbHNlLFxuICAgICAgICBkZXB0aCA9IHRydWUsXG4gICAgICAgIHN0ZW5jaWwgPSBmYWxzZSxcbiAgICAgICAgYW50aWFsaWFzID0gZmFsc2UsXG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXIgPSBmYWxzZSxcbiAgICAgICAgcG93ZXJQcmVmZXJlbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgICBhdXRvQ2xlYXIgPSB0cnVlLFxuICAgICAgICB3ZWJnbCA9IDIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7IGFscGhhLCBkZXB0aCwgc3RlbmNpbCwgYW50aWFsaWFzLCBwcmVtdWx0aXBsaWVkQWxwaGEsIHByZXNlcnZlRHJhd2luZ0J1ZmZlciwgcG93ZXJQcmVmZXJlbmNlIH07XG4gICAgICAgIHRoaXMuZHByID0gZHByO1xuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgICAgIHRoaXMuc3RlbmNpbCA9IHN0ZW5jaWw7XG4gICAgICAgIHRoaXMucHJlbXVsdGlwbGllZEFscGhhID0gcHJlbXVsdGlwbGllZEFscGhhO1xuICAgICAgICB0aGlzLmF1dG9DbGVhciA9IGF1dG9DbGVhcjtcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG5cbiAgICAgICAgLy8gQXR0ZW1wdCBXZWJHTDIgdW5sZXNzIGZvcmNlZCB0byAxLCBpZiBub3Qgc3VwcG9ydGVkIGZhbGxiYWNrIHRvIFdlYkdMMVxuICAgICAgICBpZiAod2ViZ2wgPT09IDIpIHRoaXMuZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywgYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMuaXNXZWJnbDIgPSAhIXRoaXMuZ2w7XG4gICAgICAgIGlmICghdGhpcy5nbCkgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBpZiAoIXRoaXMuZ2wpIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgd2ViZ2wgY29udGV4dCcpO1xuXG4gICAgICAgIC8vIEF0dGFjaCByZW5kZXJlciB0byBnbCBzbyB0aGF0IGFsbCBjbGFzc2VzIGhhdmUgYWNjZXNzIHRvIGludGVybmFsIHN0YXRlIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyID0gdGhpcztcblxuICAgICAgICAvLyBpbml0aWFsaXNlIHNpemUgdmFsdWVzXG4gICAgICAgIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBnbCBzdGF0ZSBzdG9yZXMgdG8gYXZvaWQgcmVkdW5kYW50IGNhbGxzIG9uIG1ldGhvZHMgdXNlZCBpbnRlcm5hbGx5XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEZ1bmMgPSB7IHNyYzogdGhpcy5nbC5PTkUsIGRzdDogdGhpcy5nbC5aRVJPIH07XG4gICAgICAgIHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbiA9IHsgbW9kZVJHQjogdGhpcy5nbC5GVU5DX0FERCB9O1xuICAgICAgICB0aGlzLnN0YXRlLmN1bGxGYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9udEZhY2UgPSB0aGlzLmdsLkNDVztcbiAgICAgICAgdGhpcy5zdGF0ZS5kZXB0aE1hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLmRlcHRoRnVuYyA9IHRoaXMuZ2wuTEVTUztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVtdWx0aXBseUFscGhhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuZmxpcFkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS51bnBhY2tBbGlnbm1lbnQgPSA0O1xuICAgICAgICB0aGlzLnN0YXRlLmZyYW1lYnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZS52aWV3cG9ydCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IG51bGwsIGhlaWdodDogbnVsbCB9O1xuICAgICAgICB0aGlzLnN0YXRlLnRleHR1cmVVbml0cyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVRleHR1cmVVbml0ID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5ib3VuZEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUudW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9IG51bGw7XG5cbiAgICAgICAgLy8gc3RvcmUgcmVxdWVzdGVkIGV4dGVuc2lvbnNcbiAgICAgICAgdGhpcy5leHRlbnNpb25zID0ge307XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBleHRyYSBmb3JtYXQgdHlwZXNcbiAgICAgICAgaWYgKHRoaXMuaXNXZWJnbDIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXQnKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXInKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXInKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfZWxlbWVudF9pbmRleF91aW50Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzJyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignRVhUX3NSR0InKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZXB0aF90ZXh0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCR0xfZHJhd19idWZmZXJzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hc3RjJyk7XG4gICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9jb21wcmVzc2lvbl9icHRjJyk7XG4gICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xuICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEnKTtcbiAgICAgICAgdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpO1xuICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCS0lUX1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBtZXRob2QgYWxpYXNlcyB1c2luZyBleHRlbnNpb24gKFdlYkdMMSkgb3IgbmF0aXZlIGlmIGF2YWlsYWJsZSAoV2ViR0wyKVxuICAgICAgICB0aGlzLnZlcnRleEF0dHJpYkRpdmlzb3IgPSB0aGlzLmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycsICd2ZXJ0ZXhBdHRyaWJEaXZpc29yJywgJ3ZlcnRleEF0dHJpYkRpdmlzb3JBTkdMRScpO1xuICAgICAgICB0aGlzLmRyYXdBcnJheXNJbnN0YW5jZWQgPSB0aGlzLmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycsICdkcmF3QXJyYXlzSW5zdGFuY2VkJywgJ2RyYXdBcnJheXNJbnN0YW5jZWRBTkdMRScpO1xuICAgICAgICB0aGlzLmRyYXdFbGVtZW50c0luc3RhbmNlZCA9IHRoaXMuZ2V0RXh0ZW5zaW9uKCdBTkdMRV9pbnN0YW5jZWRfYXJyYXlzJywgJ2RyYXdFbGVtZW50c0luc3RhbmNlZCcsICdkcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRScpO1xuICAgICAgICB0aGlzLmNyZWF0ZVZlcnRleEFycmF5ID0gdGhpcy5nZXRFeHRlbnNpb24oJ09FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0JywgJ2NyZWF0ZVZlcnRleEFycmF5JywgJ2NyZWF0ZVZlcnRleEFycmF5T0VTJyk7XG4gICAgICAgIHRoaXMuYmluZFZlcnRleEFycmF5ID0gdGhpcy5nZXRFeHRlbnNpb24oJ09FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0JywgJ2JpbmRWZXJ0ZXhBcnJheScsICdiaW5kVmVydGV4QXJyYXlPRVMnKTtcbiAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhBcnJheSA9IHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdmVydGV4X2FycmF5X29iamVjdCcsICdkZWxldGVWZXJ0ZXhBcnJheScsICdkZWxldGVWZXJ0ZXhBcnJheU9FUycpO1xuICAgICAgICB0aGlzLmRyYXdCdWZmZXJzID0gdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2RyYXdfYnVmZmVycycsICdkcmF3QnVmZmVycycsICdkcmF3QnVmZmVyc1dFQkdMJyk7XG5cbiAgICAgICAgLy8gU3RvcmUgZGV2aWNlIHBhcmFtZXRlcnNcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5tYXhUZXh0dXJlVW5pdHMgPSB0aGlzLmdsLmdldFBhcmFtZXRlcih0aGlzLmdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1heEFuaXNvdHJvcHkgPSB0aGlzLmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJylcbiAgICAgICAgICAgID8gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpLk1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVClcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cbiAgICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLmdsLmNhbnZhcy53aWR0aCA9IHdpZHRoICogdGhpcy5kcHI7XG4gICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuZHByO1xuXG4gICAgICAgIGlmICghdGhpcy5nbC5jYW52YXMuc3R5bGUpIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmdsLmNhbnZhcy5zdHlsZSwge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Vmlld3BvcnQod2lkdGgsIGhlaWdodCwgeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpZXdwb3J0LndpZHRoID09PSB3aWR0aCAmJiB0aGlzLnN0YXRlLnZpZXdwb3J0LmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5zdGF0ZS52aWV3cG9ydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQueCA9IHg7XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQueSA9IHk7XG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgc2V0U2Npc3Nvcih3aWR0aCwgaGVpZ2h0LCB4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy5nbC5zY2lzc29yKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIGVuYWJsZShpZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtpZF0gPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUoaWQpO1xuICAgICAgICB0aGlzLnN0YXRlW2lkXSA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZShpZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtpZF0gPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZShpZCk7XG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRGdW5jKHNyYywgZHN0LCBzcmNBbHBoYSwgZHN0QWxwaGEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEZ1bmMuc3JjID09PSBzcmMgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLmRzdCA9PT0gZHN0ICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5zcmNBbHBoYSA9PT0gc3JjQWxwaGEgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLmRzdEFscGhhID09PSBkc3RBbHBoYVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEZ1bmMuZHN0ID0gZHN0O1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5zcmNBbHBoYSA9IHNyY0FscGhhO1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5kc3RBbHBoYSA9IGRzdEFscGhhO1xuICAgICAgICBpZiAoc3JjQWxwaGEgIT09IHVuZGVmaW5lZCkgdGhpcy5nbC5ibGVuZEZ1bmNTZXBhcmF0ZShzcmMsIGRzdCwgc3JjQWxwaGEsIGRzdEFscGhhKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLmJsZW5kRnVuYyhzcmMsIGRzdCk7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRFcXVhdGlvbihtb2RlUkdCLCBtb2RlQWxwaGEpIHtcbiAgICAgICAgbW9kZVJHQiA9IG1vZGVSR0IgfHwgdGhpcy5nbC5GVU5DX0FERDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlUkdCID09PSBtb2RlUkdCICYmIHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPT09IG1vZGVBbHBoYSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRXF1YXRpb24ubW9kZVJHQiA9IG1vZGVSR0I7XG4gICAgICAgIHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPSBtb2RlQWxwaGE7XG4gICAgICAgIGlmIChtb2RlQWxwaGEgIT09IHVuZGVmaW5lZCkgdGhpcy5nbC5ibGVuZEVxdWF0aW9uU2VwYXJhdGUobW9kZVJHQiwgbW9kZUFscGhhKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLmJsZW5kRXF1YXRpb24obW9kZVJHQik7XG4gICAgfVxuXG4gICAgc2V0Q3VsbEZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VsbEZhY2UgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuY3VsbEZhY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5nbC5jdWxsRmFjZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0RnJvbnRGYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZyb250RmFjZSA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9udEZhY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5nbC5mcm9udEZhY2UodmFsdWUpO1xuICAgIH1cblxuICAgIHNldERlcHRoTWFzayh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXB0aE1hc2sgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuZGVwdGhNYXNrID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhNYXNrKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXREZXB0aEZ1bmModmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGVwdGhGdW5jID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlLmRlcHRoRnVuYyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmdsLmRlcHRoRnVuYyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgYWN0aXZlVGV4dHVyZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdCA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHZhbHVlKTtcbiAgICB9XG5cbiAgICBiaW5kRnJhbWVidWZmZXIoeyB0YXJnZXQgPSB0aGlzLmdsLkZSQU1FQlVGRkVSLCBidWZmZXIgPSBudWxsIH0gPSB7fSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mcmFtZWJ1ZmZlciA9PT0gYnVmZmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuZnJhbWVidWZmZXIgPSBidWZmZXI7XG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcbiAgICB9XG5cbiAgICBnZXRFeHRlbnNpb24oZXh0ZW5zaW9uLCB3ZWJnbDJGdW5jLCBleHRGdW5jKSB7XG4gICAgICAgIC8vIGlmIHdlYmdsMiBmdW5jdGlvbiBzdXBwb3J0ZWQsIHJldHVybiBmdW5jIGJvdW5kIHRvIGdsIGNvbnRleHRcbiAgICAgICAgaWYgKHdlYmdsMkZ1bmMgJiYgdGhpcy5nbFt3ZWJnbDJGdW5jXSkgcmV0dXJuIHRoaXMuZ2xbd2ViZ2wyRnVuY10uYmluZCh0aGlzLmdsKTtcblxuICAgICAgICAvLyBmZXRjaCBleHRlbnNpb24gb25jZSBvbmx5XG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl0pIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb25dID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oZXh0ZW5zaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiBleHRlbnNpb24gaWYgbm8gZnVuY3Rpb24gcmVxdWVzdGVkXG4gICAgICAgIGlmICghd2ViZ2wyRnVuYykgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb25dO1xuXG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIGV4dGVuc2lvbiBub3Qgc3VwcG9ydGVkXG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIHJldHVybiBleHRlbnNpb24gZnVuY3Rpb24sIGJvdW5kIHRvIGV4dGVuc2lvblxuICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl1bZXh0RnVuY10uYmluZCh0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uXSk7XG4gICAgfVxuXG4gICAgc29ydE9wYXF1ZShhLCBiKSB7XG4gICAgICAgIGlmIChhLnJlbmRlck9yZGVyICE9PSBiLnJlbmRlck9yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5yZW5kZXJPcmRlciAtIGIucmVuZGVyT3JkZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5wcm9ncmFtLmlkICE9PSBiLnByb2dyYW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnByb2dyYW0uaWQgLSBiLnByb2dyYW0uaWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYS56RGVwdGggIT09IGIuekRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gYS56RGVwdGggLSBiLnpEZXB0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiLmlkIC0gYS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRUcmFuc3BhcmVudChhLCBiKSB7XG4gICAgICAgIGlmIChhLnJlbmRlck9yZGVyICE9PSBiLnJlbmRlck9yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5yZW5kZXJPcmRlciAtIGIucmVuZGVyT3JkZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEuekRlcHRoICE9PSBiLnpEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGIuekRlcHRoIC0gYS56RGVwdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0VUkoYSwgYikge1xuICAgICAgICBpZiAoYS5yZW5kZXJPcmRlciAhPT0gYi5yZW5kZXJPcmRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGEucmVuZGVyT3JkZXIgLSBiLnJlbmRlck9yZGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGEucHJvZ3JhbS5pZCAhPT0gYi5wcm9ncmFtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5wcm9ncmFtLmlkIC0gYi5wcm9ncmFtLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGIuaWQgLSBhLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVuZGVyTGlzdCh7IHNjZW5lLCBjYW1lcmEsIGZydXN0dW1DdWxsLCBzb3J0IH0pIHtcbiAgICAgICAgbGV0IHJlbmRlckxpc3QgPSBbXTtcblxuICAgICAgICBpZiAoY2FtZXJhICYmIGZydXN0dW1DdWxsKSBjYW1lcmEudXBkYXRlRnJ1c3R1bSgpO1xuXG4gICAgICAgIC8vIEdldCB2aXNpYmxlXG4gICAgICAgIHNjZW5lLnRyYXZlcnNlKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoIW5vZGUuZHJhdykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoZnJ1c3R1bUN1bGwgJiYgbm9kZS5mcnVzdHVtQ3VsbGVkICYmIGNhbWVyYSkge1xuICAgICAgICAgICAgICAgIGlmICghY2FtZXJhLmZydXN0dW1JbnRlcnNlY3RzTWVzaChub2RlKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICBjb25zdCBvcGFxdWUgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50ID0gW107IC8vIGRlcHRoVGVzdCB0cnVlXG4gICAgICAgICAgICBjb25zdCB1aSA9IFtdOyAvLyBkZXB0aFRlc3QgZmFsc2VcblxuICAgICAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3BsaXQgaW50byB0aGUgMyByZW5kZXIgZ3JvdXBzXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnByb2dyYW0udHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhcXVlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnByb2dyYW0uZGVwdGhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50LnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdWkucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlLnpEZXB0aCA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IGNhbGN1bGF0ZSB6LWRlcHRoIGlmIHJlbmRlck9yZGVyIHVuc2V0IGFuZCBkZXB0aFRlc3QgaXMgdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnJlbmRlck9yZGVyICE9PSAwIHx8ICFub2RlLnByb2dyYW0uZGVwdGhUZXN0IHx8ICFjYW1lcmEpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB6LWRlcHRoXG4gICAgICAgICAgICAgICAgbm9kZS53b3JsZE1hdHJpeC5nZXRUcmFuc2xhdGlvbih0ZW1wVmVjMyk7XG4gICAgICAgICAgICAgICAgdGVtcFZlYzMuYXBwbHlNYXRyaXg0KGNhbWVyYS5wcm9qZWN0aW9uVmlld01hdHJpeCk7XG4gICAgICAgICAgICAgICAgbm9kZS56RGVwdGggPSB0ZW1wVmVjMy56O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG9wYXF1ZS5zb3J0KHRoaXMuc29ydE9wYXF1ZSk7XG4gICAgICAgICAgICB0cmFuc3BhcmVudC5zb3J0KHRoaXMuc29ydFRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIHVpLnNvcnQodGhpcy5zb3J0VUkpO1xuXG4gICAgICAgICAgICByZW5kZXJMaXN0ID0gb3BhcXVlLmNvbmNhdCh0cmFuc3BhcmVudCwgdWkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKHsgc2NlbmUsIGNhbWVyYSwgdGFyZ2V0ID0gbnVsbCwgdXBkYXRlID0gdHJ1ZSwgc29ydCA9IHRydWUsIGZydXN0dW1DdWxsID0gdHJ1ZSwgY2xlYXIgfSkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgbm8gcmVuZGVyIHRhcmdldCBib3VuZCBzbyBkcmF3cyB0byBjYW52YXNcbiAgICAgICAgICAgIHRoaXMuYmluZEZyYW1lYnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFZpZXdwb3J0KHRoaXMud2lkdGggKiB0aGlzLmRwciwgdGhpcy5oZWlnaHQgKiB0aGlzLmRwcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBiaW5kIHN1cHBsaWVkIHJlbmRlciB0YXJnZXQgYW5kIHVwZGF0ZSB2aWV3cG9ydFxuICAgICAgICAgICAgdGhpcy5iaW5kRnJhbWVidWZmZXIodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld3BvcnQodGFyZ2V0LndpZHRoLCB0YXJnZXQuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhciB8fCAodGhpcy5hdXRvQ2xlYXIgJiYgY2xlYXIgIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGRlcHRoIGJ1ZmZlciB3cml0aW5nIGlzIGVuYWJsZWQgc28gaXQgY2FuIGJlIGNsZWFyZWRcbiAgICAgICAgICAgIGlmICh0aGlzLmRlcHRoICYmICghdGFyZ2V0IHx8IHRhcmdldC5kZXB0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhNYXNrKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcihcbiAgICAgICAgICAgICAgICAodGhpcy5jb2xvciA/IHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCA6IDApIHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGVwdGggPyB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQgOiAwKSB8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0ZW5jaWwgPyB0aGlzLmdsLlNURU5DSUxfQlVGRkVSX0JJVCA6IDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlcyBhbGwgc2NlbmUgZ3JhcGggbWF0cmljZXNcbiAgICAgICAgaWYgKHVwZGF0ZSkgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICAvLyBVcGRhdGUgY2FtZXJhIHNlcGFyYXRlbHksIGluIGNhc2Ugbm90IGluIHNjZW5lIGdyYXBoXG4gICAgICAgIGlmIChjYW1lcmEpIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIC8vIEdldCByZW5kZXIgbGlzdCAtIGVudGFpbHMgY3VsbGluZyBhbmQgc29ydGluZ1xuICAgICAgICBjb25zdCByZW5kZXJMaXN0ID0gdGhpcy5nZXRSZW5kZXJMaXN0KHsgc2NlbmUsIGNhbWVyYSwgZnJ1c3R1bUN1bGwsIHNvcnQgfSk7XG5cbiAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmRyYXcoeyBjYW1lcmEgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlYzMgfSBmcm9tICcuLi9tYXRoL1ZlYzMuanMnO1xuaW1wb3J0IHsgUXVhdCB9IGZyb20gJy4uL21hdGgvUXVhdC5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi4vbWF0aC9NYXQ0LmpzJztcbmltcG9ydCB7IEV1bGVyIH0gZnJvbSAnLi4vbWF0aC9FdWxlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjMygpO1xuICAgICAgICB0aGlzLnF1YXRlcm5pb24gPSBuZXcgUXVhdCgpO1xuICAgICAgICB0aGlzLnNjYWxlID0gbmV3IFZlYzMoMSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSBuZXcgRXVsZXIoKTtcbiAgICAgICAgdGhpcy51cCA9IG5ldyBWZWMzKDAsIDEsIDApO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24ub25DaGFuZ2UgPSAoKSA9PiB0aGlzLnF1YXRlcm5pb24uZnJvbUV1bGVyKHRoaXMucm90YXRpb24pO1xuICAgICAgICB0aGlzLnF1YXRlcm5pb24ub25DaGFuZ2UgPSAoKSA9PiB0aGlzLnJvdGF0aW9uLmZyb21RdWF0ZXJuaW9uKHRoaXMucXVhdGVybmlvbik7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KHBhcmVudCwgbm90aWZ5UGFyZW50ID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgcGFyZW50ICE9PSB0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKG5vdGlmeVBhcmVudCAmJiBwYXJlbnQpIHBhcmVudC5hZGRDaGlsZCh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoY2hpbGQsIG5vdGlmeUNoaWxkID0gdHJ1ZSkge1xuICAgICAgICBpZiAoIX50aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpKSB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBpZiAobm90aWZ5Q2hpbGQpIGNoaWxkLnNldFBhcmVudCh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQsIG5vdGlmeUNoaWxkID0gdHJ1ZSkge1xuICAgICAgICBpZiAoISF+dGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSkgdGhpcy5jaGlsZHJlbi5zcGxpY2UodGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSwgMSk7XG4gICAgICAgIGlmIChub3RpZnlDaGlsZCkgY2hpbGQuc2V0UGFyZW50KG51bGwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXRyaXhXb3JsZChmb3JjZSkge1xuICAgICAgICBpZiAodGhpcy5tYXRyaXhBdXRvVXBkYXRlKSB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgICAgICBpZiAodGhpcy53b3JsZE1hdHJpeE5lZWRzVXBkYXRlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgPT09IG51bGwpIHRoaXMud29ybGRNYXRyaXguY29weSh0aGlzLm1hdHJpeCk7XG4gICAgICAgICAgICBlbHNlIHRoaXMud29ybGRNYXRyaXgubXVsdGlwbHkodGhpcy5wYXJlbnQud29ybGRNYXRyaXgsIHRoaXMubWF0cml4KTtcbiAgICAgICAgICAgIHRoaXMud29ybGRNYXRyaXhOZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS51cGRhdGVNYXRyaXhXb3JsZChmb3JjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVNYXRyaXgoKSB7XG4gICAgICAgIHRoaXMubWF0cml4LmNvbXBvc2UodGhpcy5xdWF0ZXJuaW9uLCB0aGlzLnBvc2l0aW9uLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeE5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0cmF2ZXJzZShjYWxsYmFjaykge1xuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpbiBjYWxsYmFjayB0byBzdG9wIHRyYXZlcnNpbmcgY2hpbGRyZW5cbiAgICAgICAgaWYgKGNhbGxiYWNrKHRoaXMpKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0udHJhdmVyc2UoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb21wb3NlKCkge1xuICAgICAgICB0aGlzLm1hdHJpeC5nZXRUcmFuc2xhdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5tYXRyaXguZ2V0Um90YXRpb24odGhpcy5xdWF0ZXJuaW9uKTtcbiAgICAgICAgdGhpcy5tYXRyaXguZ2V0U2NhbGluZyh0aGlzLnNjYWxlKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5mcm9tUXVhdGVybmlvbih0aGlzLnF1YXRlcm5pb24pO1xuICAgIH1cblxuICAgIGxvb2tBdCh0YXJnZXQsIGludmVydCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChpbnZlcnQpIHRoaXMubWF0cml4Lmxvb2tBdCh0aGlzLnBvc2l0aW9uLCB0YXJnZXQsIHRoaXMudXApO1xuICAgICAgICBlbHNlIHRoaXMubWF0cml4Lmxvb2tBdCh0YXJnZXQsIHRoaXMucG9zaXRpb24sIHRoaXMudXApO1xuICAgICAgICB0aGlzLm1hdHJpeC5nZXRSb3RhdGlvbih0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLnJvdGF0aW9uLmZyb21RdWF0ZXJuaW9uKHRoaXMucXVhdGVybmlvbik7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgRXVsZXJGdW5jIGZyb20gJy4vZnVuY3Rpb25zL0V1bGVyRnVuYy5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi9NYXQ0LmpzJztcblxuY29uc3QgdG1wTWF0NCA9IG5ldyBNYXQ0KCk7XG5cbmV4cG9ydCBjbGFzcyBFdWxlciBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IHgsIHogPSB4LCBvcmRlciA9ICdZWFonKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIHopO1xuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSAoKSA9PiB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH1cblxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxXTtcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMl07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzBdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB5KHYpIHtcbiAgICAgICAgdGhpc1sxXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQgeih2KSB7XG4gICAgICAgIHRoaXNbMl0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkgPSB4LCB6ID0geCkge1xuICAgICAgICBpZiAoeC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkoeCk7XG4gICAgICAgIHRoaXNbMF0gPSB4O1xuICAgICAgICB0aGlzWzFdID0geTtcbiAgICAgICAgdGhpc1syXSA9IHo7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSh2KSB7XG4gICAgICAgIHRoaXNbMF0gPSB2WzBdO1xuICAgICAgICB0aGlzWzFdID0gdlsxXTtcbiAgICAgICAgdGhpc1syXSA9IHZbMl07XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVvcmRlcihvcmRlcikge1xuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyID0gdGhpcy5vcmRlcikge1xuICAgICAgICBFdWxlckZ1bmMuZnJvbVJvdGF0aW9uTWF0cml4KHRoaXMsIG0sIG9yZGVyKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxLCBvcmRlciA9IHRoaXMub3JkZXIpIHtcbiAgICAgICAgdG1wTWF0NC5mcm9tUXVhdGVybmlvbihxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVJvdGF0aW9uTWF0cml4KHRtcE1hdDQsIG9yZGVyKTtcbiAgICB9XG5cbiAgICBmcm9tQXJyYXkoYSwgbyA9IDApIHtcbiAgICAgICAgdGhpc1swXSA9IGFbb107XG4gICAgICAgIHRoaXNbMV0gPSBhW28gKyAxXTtcbiAgICAgICAgdGhpc1syXSA9IGFbbyArIDJdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b0FycmF5KGEgPSBbXSwgbyA9IDApIHtcbiAgICAgICAgYVtvXSA9IHRoaXNbMF07XG4gICAgICAgIGFbbyArIDFdID0gdGhpc1sxXTtcbiAgICAgICAgYVtvICsgMl0gPSB0aGlzWzJdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBNYXQ0RnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9NYXQ0RnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXQ0IGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtMDAgPSAxLFxuICAgICAgICBtMDEgPSAwLFxuICAgICAgICBtMDIgPSAwLFxuICAgICAgICBtMDMgPSAwLFxuICAgICAgICBtMTAgPSAwLFxuICAgICAgICBtMTEgPSAxLFxuICAgICAgICBtMTIgPSAwLFxuICAgICAgICBtMTMgPSAwLFxuICAgICAgICBtMjAgPSAwLFxuICAgICAgICBtMjEgPSAwLFxuICAgICAgICBtMjIgPSAxLFxuICAgICAgICBtMjMgPSAwLFxuICAgICAgICBtMzAgPSAwLFxuICAgICAgICBtMzEgPSAwLFxuICAgICAgICBtMzIgPSAwLFxuICAgICAgICBtMzMgPSAxXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxMl07XG4gICAgfVxuXG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzEzXTtcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMTRdO1xuICAgIH1cblxuICAgIGdldCB3KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxNV07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzEyXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzEzXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHoodikge1xuICAgICAgICB0aGlzWzE0XSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHcodikge1xuICAgICAgICB0aGlzWzE1XSA9IHY7XG4gICAgfVxuXG4gICAgc2V0KG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgICAgICBpZiAobTAwLmxlbmd0aCkgcmV0dXJuIHRoaXMuY29weShtMDApO1xuICAgICAgICBNYXQ0RnVuYy5zZXQodGhpcywgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLnRyYW5zbGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKHYsIGF4aXMsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLnJvdGF0ZSh0aGlzLCBtLCB2LCBheGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0NEZ1bmMuc2NhbGUodGhpcywgbSwgdHlwZW9mIHYgPT09ICdudW1iZXInID8gW3YsIHYsIHZdIDogdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZChtYSwgbWIpIHtcbiAgICAgICAgaWYgKG1iKSBNYXQ0RnVuYy5hZGQodGhpcywgbWEsIG1iKTtcbiAgICAgICAgZWxzZSBNYXQ0RnVuYy5hZGQodGhpcywgdGhpcywgbWEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWIobWEsIG1iKSB7XG4gICAgICAgIGlmIChtYikgTWF0NEZ1bmMuc3VidHJhY3QodGhpcywgbWEsIG1iKTtcbiAgICAgICAgZWxzZSBNYXQ0RnVuYy5zdWJ0cmFjdCh0aGlzLCB0aGlzLCBtYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG1hLCBtYikge1xuICAgICAgICBpZiAoIW1hLmxlbmd0aCkge1xuICAgICAgICAgICAgTWF0NEZ1bmMubXVsdGlwbHlTY2FsYXIodGhpcywgdGhpcywgbWEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1iKSB7XG4gICAgICAgICAgICBNYXQ0RnVuYy5tdWx0aXBseSh0aGlzLCBtYSwgbWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTWF0NEZ1bmMubXVsdGlwbHkodGhpcywgdGhpcywgbWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlkZW50aXR5KCkge1xuICAgICAgICBNYXQ0RnVuYy5pZGVudGl0eSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weShtKSB7XG4gICAgICAgIE1hdDRGdW5jLmNvcHkodGhpcywgbSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21QZXJzcGVjdGl2ZSh7IGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIgfSA9IHt9KSB7XG4gICAgICAgIE1hdDRGdW5jLnBlcnNwZWN0aXZlKHRoaXMsIGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tT3J0aG9nb25hbCh7IGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyIH0pIHtcbiAgICAgICAgTWF0NEZ1bmMub3J0aG8odGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgICAgIE1hdDRGdW5jLmZyb21RdWF0KHRoaXMsIHEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbih2KSB7XG4gICAgICAgIHRoaXMueCA9IHZbMF07XG4gICAgICAgIHRoaXMueSA9IHZbMV07XG4gICAgICAgIHRoaXMueiA9IHZbMl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UobSA9IHRoaXMpIHtcbiAgICAgICAgTWF0NEZ1bmMuaW52ZXJ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wb3NlKHEsIHBvcywgc2NhbGUpIHtcbiAgICAgICAgTWF0NEZ1bmMuZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZSh0aGlzLCBxLCBwb3MsIHNjYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0Um90YXRpb24ocSkge1xuICAgICAgICBNYXQ0RnVuYy5nZXRSb3RhdGlvbihxLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRpb24ocG9zKSB7XG4gICAgICAgIE1hdDRGdW5jLmdldFRyYW5zbGF0aW9uKHBvcywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFNjYWxpbmcoc2NhbGUpIHtcbiAgICAgICAgTWF0NEZ1bmMuZ2V0U2NhbGluZyhzY2FsZSwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldE1heFNjYWxlT25BeGlzKCkge1xuICAgICAgICByZXR1cm4gTWF0NEZ1bmMuZ2V0TWF4U2NhbGVPbkF4aXModGhpcyk7XG4gICAgfVxuXG4gICAgbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCkge1xuICAgICAgICBNYXQ0RnVuYy50YXJnZXRUbyh0aGlzLCBleWUsIHRhcmdldCwgdXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdDRGdW5jLmRldGVybWluYW50KHRoaXMpO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHRoaXNbM10gPSBhW28gKyAzXTtcbiAgICAgICAgdGhpc1s0XSA9IGFbbyArIDRdO1xuICAgICAgICB0aGlzWzVdID0gYVtvICsgNV07XG4gICAgICAgIHRoaXNbNl0gPSBhW28gKyA2XTtcbiAgICAgICAgdGhpc1s3XSA9IGFbbyArIDddO1xuICAgICAgICB0aGlzWzhdID0gYVtvICsgOF07XG4gICAgICAgIHRoaXNbOV0gPSBhW28gKyA5XTtcbiAgICAgICAgdGhpc1sxMF0gPSBhW28gKyAxMF07XG4gICAgICAgIHRoaXNbMTFdID0gYVtvICsgMTFdO1xuICAgICAgICB0aGlzWzEyXSA9IGFbbyArIDEyXTtcbiAgICAgICAgdGhpc1sxM10gPSBhW28gKyAxM107XG4gICAgICAgIHRoaXNbMTRdID0gYVtvICsgMTRdO1xuICAgICAgICB0aGlzWzE1XSA9IGFbbyArIDE1XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9BcnJheShhID0gW10sIG8gPSAwKSB7XG4gICAgICAgIGFbb10gPSB0aGlzWzBdO1xuICAgICAgICBhW28gKyAxXSA9IHRoaXNbMV07XG4gICAgICAgIGFbbyArIDJdID0gdGhpc1syXTtcbiAgICAgICAgYVtvICsgM10gPSB0aGlzWzNdO1xuICAgICAgICBhW28gKyA0XSA9IHRoaXNbNF07XG4gICAgICAgIGFbbyArIDVdID0gdGhpc1s1XTtcbiAgICAgICAgYVtvICsgNl0gPSB0aGlzWzZdO1xuICAgICAgICBhW28gKyA3XSA9IHRoaXNbN107XG4gICAgICAgIGFbbyArIDhdID0gdGhpc1s4XTtcbiAgICAgICAgYVtvICsgOV0gPSB0aGlzWzldO1xuICAgICAgICBhW28gKyAxMF0gPSB0aGlzWzEwXTtcbiAgICAgICAgYVtvICsgMTFdID0gdGhpc1sxMV07XG4gICAgICAgIGFbbyArIDEyXSA9IHRoaXNbMTJdO1xuICAgICAgICBhW28gKyAxM10gPSB0aGlzWzEzXTtcbiAgICAgICAgYVtvICsgMTRdID0gdGhpc1sxNF07XG4gICAgICAgIGFbbyArIDE1XSA9IHRoaXNbMTVdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBRdWF0RnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9RdWF0RnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBRdWF0IGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIHosIHcpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gKCkgPT4ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9XG5cbiAgICBnZXQgeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMV07XG4gICAgfVxuXG4gICAgZ2V0IHooKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzJdO1xuICAgIH1cblxuICAgIGdldCB3KCkge1xuICAgICAgICByZXR1cm4gdGhpc1szXTtcbiAgICB9XG5cbiAgICBzZXQgeCh2KSB7XG4gICAgICAgIHRoaXNbMF0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzFdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB6KHYpIHtcbiAgICAgICAgdGhpc1syXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQgdyh2KSB7XG4gICAgICAgIHRoaXNbM10gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIFF1YXRGdW5jLmlkZW50aXR5KHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldCh4LCB5LCB6LCB3KSB7XG4gICAgICAgIGlmICh4Lmxlbmd0aCkgcmV0dXJuIHRoaXMuY29weSh4KTtcbiAgICAgICAgUXVhdEZ1bmMuc2V0KHRoaXMsIHgsIHksIHosIHcpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVgoYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVYKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVkoYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVZKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVooYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVaKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UocSA9IHRoaXMpIHtcbiAgICAgICAgUXVhdEZ1bmMuaW52ZXJ0KHRoaXMsIHEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbmp1Z2F0ZShxID0gdGhpcykge1xuICAgICAgICBRdWF0RnVuYy5jb25qdWdhdGUodGhpcywgcSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weShxKSB7XG4gICAgICAgIFF1YXRGdW5jLmNvcHkodGhpcywgcSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKHEgPSB0aGlzKSB7XG4gICAgICAgIFF1YXRGdW5jLm5vcm1hbGl6ZSh0aGlzLCBxKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShxQSwgcUIpIHtcbiAgICAgICAgaWYgKHFCKSB7XG4gICAgICAgICAgICBRdWF0RnVuYy5tdWx0aXBseSh0aGlzLCBxQSwgcUIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUXVhdEZ1bmMubXVsdGlwbHkodGhpcywgdGhpcywgcUEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZG90KHYpIHtcbiAgICAgICAgcmV0dXJuIFF1YXRGdW5jLmRvdCh0aGlzLCB2KTtcbiAgICB9XG5cbiAgICBmcm9tTWF0cml4MyhtYXRyaXgzKSB7XG4gICAgICAgIFF1YXRGdW5jLmZyb21NYXQzKHRoaXMsIG1hdHJpeDMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21FdWxlcihldWxlcikge1xuICAgICAgICBRdWF0RnVuYy5mcm9tRXVsZXIodGhpcywgZXVsZXIsIGV1bGVyLm9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbUF4aXNBbmdsZShheGlzLCBhKSB7XG4gICAgICAgIFF1YXRGdW5jLnNldEF4aXNBbmdsZSh0aGlzLCBheGlzLCBhKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGVycChxLCB0KSB7XG4gICAgICAgIFF1YXRGdW5jLnNsZXJwKHRoaXMsIHRoaXMsIHEsIHQpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHRoaXNbM10gPSBhW28gKyAzXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b0FycmF5KGEgPSBbXSwgbyA9IDApIHtcbiAgICAgICAgYVtvXSA9IHRoaXNbMF07XG4gICAgICAgIGFbbyArIDFdID0gdGhpc1sxXTtcbiAgICAgICAgYVtvICsgMl0gPSB0aGlzWzJdO1xuICAgICAgICBhW28gKyAzXSA9IHRoaXNbM107XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFZlYzNGdW5jIGZyb20gJy4vZnVuY3Rpb25zL1ZlYzNGdW5jLmpzJztcblxuZXhwb3J0IGNsYXNzIFZlYzMgZXh0ZW5kcyBBcnJheSB7XG4gICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSB4LCB6ID0geCkge1xuICAgICAgICBzdXBlcih4LCB5LCB6KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH1cblxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxXTtcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMl07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzBdID0gdjtcbiAgICB9XG5cbiAgICBzZXQgeSh2KSB7XG4gICAgICAgIHRoaXNbMV0gPSB2O1xuICAgIH1cblxuICAgIHNldCB6KHYpIHtcbiAgICAgICAgdGhpc1syXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkgPSB4LCB6ID0geCkge1xuICAgICAgICBpZiAoeC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkoeCk7XG4gICAgICAgIFZlYzNGdW5jLnNldCh0aGlzLCB4LCB5LCB6KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSh2KSB7XG4gICAgICAgIFZlYzNGdW5jLmNvcHkodGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZCh2YSwgdmIpIHtcbiAgICAgICAgaWYgKHZiKSBWZWMzRnVuYy5hZGQodGhpcywgdmEsIHZiKTtcbiAgICAgICAgZWxzZSBWZWMzRnVuYy5hZGQodGhpcywgdGhpcywgdmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWIodmEsIHZiKSB7XG4gICAgICAgIGlmICh2YikgVmVjM0Z1bmMuc3VidHJhY3QodGhpcywgdmEsIHZiKTtcbiAgICAgICAgZWxzZSBWZWMzRnVuYy5zdWJ0cmFjdCh0aGlzLCB0aGlzLCB2YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KHYpIHtcbiAgICAgICAgaWYgKHYubGVuZ3RoKSBWZWMzRnVuYy5tdWx0aXBseSh0aGlzLCB0aGlzLCB2KTtcbiAgICAgICAgZWxzZSBWZWMzRnVuYy5zY2FsZSh0aGlzLCB0aGlzLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGl2aWRlKHYpIHtcbiAgICAgICAgaWYgKHYubGVuZ3RoKSBWZWMzRnVuYy5kaXZpZGUodGhpcywgdGhpcywgdik7XG4gICAgICAgIGVsc2UgVmVjM0Z1bmMuc2NhbGUodGhpcywgdGhpcywgMSAvIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbnZlcnNlKHYgPSB0aGlzKSB7XG4gICAgICAgIFZlYzNGdW5jLmludmVyc2UodGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbid0IHVzZSAnbGVuZ3RoJyBhcyBBcnJheS5wcm90b3R5cGUgdXNlcyBpdFxuICAgIGxlbigpIHtcbiAgICAgICAgcmV0dXJuIFZlYzNGdW5jLmxlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZSh2KSB7XG4gICAgICAgIGlmICh2KSByZXR1cm4gVmVjM0Z1bmMuZGlzdGFuY2UodGhpcywgdik7XG4gICAgICAgIGVsc2UgcmV0dXJuIFZlYzNGdW5jLmxlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBzcXVhcmVkTGVuKCkge1xuICAgICAgICByZXR1cm4gVmVjM0Z1bmMuc3F1YXJlZExlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBzcXVhcmVkRGlzdGFuY2Uodikge1xuICAgICAgICBpZiAodikgcmV0dXJuIFZlYzNGdW5jLnNxdWFyZWREaXN0YW5jZSh0aGlzLCB2KTtcbiAgICAgICAgZWxzZSByZXR1cm4gVmVjM0Z1bmMuc3F1YXJlZExlbmd0aCh0aGlzKTtcbiAgICB9XG5cbiAgICBuZWdhdGUodiA9IHRoaXMpIHtcbiAgICAgICAgVmVjM0Z1bmMubmVnYXRlKHRoaXMsIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjcm9zcyh2YSwgdmIpIHtcbiAgICAgICAgaWYgKHZiKSBWZWMzRnVuYy5jcm9zcyh0aGlzLCB2YSwgdmIpO1xuICAgICAgICBlbHNlIFZlYzNGdW5jLmNyb3NzKHRoaXMsIHRoaXMsIHZhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodikge1xuICAgICAgICBWZWMzRnVuYy5zY2FsZSh0aGlzLCB0aGlzLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICBWZWMzRnVuYy5ub3JtYWxpemUodGhpcywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRvdCh2KSB7XG4gICAgICAgIHJldHVybiBWZWMzRnVuYy5kb3QodGhpcywgdik7XG4gICAgfVxuXG4gICAgZXF1YWxzKHYpIHtcbiAgICAgICAgcmV0dXJuIFZlYzNGdW5jLmV4YWN0RXF1YWxzKHRoaXMsIHYpO1xuICAgIH1cblxuICAgIGFwcGx5TWF0cml4MyhtYXQzKSB7XG4gICAgICAgIFZlYzNGdW5jLnRyYW5zZm9ybU1hdDModGhpcywgdGhpcywgbWF0Myk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFwcGx5TWF0cml4NChtYXQ0KSB7XG4gICAgICAgIFZlYzNGdW5jLnRyYW5zZm9ybU1hdDQodGhpcywgdGhpcywgbWF0NCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlUm90YXRlTWF0cml4NChtYXQ0KSB7XG4gICAgICAgIFZlYzNGdW5jLnNjYWxlUm90YXRlTWF0NCh0aGlzLCB0aGlzLCBtYXQ0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXBwbHlRdWF0ZXJuaW9uKHEpIHtcbiAgICAgICAgVmVjM0Z1bmMudHJhbnNmb3JtUXVhdCh0aGlzLCB0aGlzLCBxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYW5nbGUodikge1xuICAgICAgICByZXR1cm4gVmVjM0Z1bmMuYW5nbGUodGhpcywgdik7XG4gICAgfVxuXG4gICAgbGVycCh2LCB0KSB7XG4gICAgICAgIFZlYzNGdW5jLmxlcnAodGhpcywgdGhpcywgdiwgdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlYzModGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgfVxuXG4gICAgZnJvbUFycmF5KGEsIG8gPSAwKSB7XG4gICAgICAgIHRoaXNbMF0gPSBhW29dO1xuICAgICAgICB0aGlzWzFdID0gYVtvICsgMV07XG4gICAgICAgIHRoaXNbMl0gPSBhW28gKyAyXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9BcnJheShhID0gW10sIG8gPSAwKSB7XG4gICAgICAgIGFbb10gPSB0aGlzWzBdO1xuICAgICAgICBhW28gKyAxXSA9IHRoaXNbMV07XG4gICAgICAgIGFbbyArIDJdID0gdGhpc1syXTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtRGlyZWN0aW9uKG1hdDQpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXNbMF07XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzWzFdO1xuICAgICAgICBjb25zdCB6ID0gdGhpc1syXTtcblxuICAgICAgICB0aGlzWzBdID0gbWF0NFswXSAqIHggKyBtYXQ0WzRdICogeSArIG1hdDRbOF0gKiB6O1xuICAgICAgICB0aGlzWzFdID0gbWF0NFsxXSAqIHggKyBtYXQ0WzVdICogeSArIG1hdDRbOV0gKiB6O1xuICAgICAgICB0aGlzWzJdID0gbWF0NFsyXSAqIHggKyBtYXQ0WzZdICogeSArIG1hdDRbMTBdICogejtcblxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG59XG4iLCIvLyBhc3N1bWVzIHRoZSB1cHBlciAzeDMgb2YgbSBpcyBhIHB1cmUgcm90YXRpb24gbWF0cml4IChpLmUsIHVuc2NhbGVkKVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbk1hdHJpeChvdXQsIG0sIG9yZGVyID0gJ1lYWicpIHtcbiAgICBpZiAob3JkZXIgPT09ICdYWVonKSB7XG4gICAgICAgIG91dFsxXSA9IE1hdGguYXNpbihNYXRoLm1pbihNYXRoLm1heChtWzhdLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bOF0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMigtbVs5XSwgbVsxMF0pO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMigtbVs0XSwgbVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKG1bNl0sIG1bNV0pO1xuICAgICAgICAgICAgb3V0WzJdID0gMDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWFonKSB7XG4gICAgICAgIG91dFswXSA9IE1hdGguYXNpbigtTWF0aC5taW4oTWF0aC5tYXgobVs5XSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzldKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIobVs4XSwgbVsxMF0pO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMihtWzFdLCBtWzVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIoLW1bMl0sIG1bMF0pO1xuICAgICAgICAgICAgb3V0WzJdID0gMDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdaWFknKSB7XG4gICAgICAgIG91dFswXSA9IE1hdGguYXNpbihNYXRoLm1pbihNYXRoLm1heChtWzZdLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bNl0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMigtbVsyXSwgbVsxMF0pO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMigtbVs0XSwgbVs1XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMihtWzFdLCBtWzBdKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdaWVgnKSB7XG4gICAgICAgIG91dFsxXSA9IE1hdGguYXNpbigtTWF0aC5taW4oTWF0aC5tYXgobVsyXSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzJdKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIobVs2XSwgbVsxMF0pO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMihtWzFdLCBtWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFswXSA9IDA7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKC1tWzRdLCBtWzVdKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWlgnKSB7XG4gICAgICAgIG91dFsyXSA9IE1hdGguYXNpbihNYXRoLm1pbihNYXRoLm1heChtWzFdLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bMV0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMigtbVs5XSwgbVs1XSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKC1tWzJdLCBtWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFswXSA9IDA7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKG1bOF0sIG1bMTBdKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdYWlknKSB7XG4gICAgICAgIG91dFsyXSA9IE1hdGguYXNpbigtTWF0aC5taW4oTWF0aC5tYXgobVs0XSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzRdKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIobVs2XSwgbVs1XSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKG1bOF0sIG1bMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMigtbVs5XSwgbVsxMF0pO1xuICAgICAgICAgICAgb3V0WzFdID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgICBvdXRbMF0gPSBtMDA7XG4gICAgb3V0WzFdID0gbTAxO1xuICAgIG91dFsyXSA9IG0wMjtcbiAgICBvdXRbM10gPSBtMDM7XG4gICAgb3V0WzRdID0gbTEwO1xuICAgIG91dFs1XSA9IG0xMTtcbiAgICBvdXRbNl0gPSBtMTI7XG4gICAgb3V0WzddID0gbTEzO1xuICAgIG91dFs4XSA9IG0yMDtcbiAgICBvdXRbOV0gPSBtMjE7XG4gICAgb3V0WzEwXSA9IG0yMjtcbiAgICBvdXRbMTFdID0gbTIzO1xuICAgIG91dFsxMl0gPSBtMzA7XG4gICAgb3V0WzEzXSA9IG0zMTtcbiAgICBvdXRbMTRdID0gbTMyO1xuICAgIG91dFsxNV0gPSBtMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICBsZXQgYTAxID0gYVsxXSxcbiAgICAgICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgICAgICBhMDMgPSBhWzNdO1xuICAgICAgICBsZXQgYTEyID0gYVs2XSxcbiAgICAgICAgICAgIGExMyA9IGFbN107XG4gICAgICAgIGxldCBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM107XG4gICAgbGV0IGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG4gICAgbGV0IGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcbiAgICBsZXQgYTMwID0gYVsxMl0sXG4gICAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgICBhMzIgPSBhWzE0XSxcbiAgICAgICAgYTMzID0gYVsxNV07XG5cbiAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICAgIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICAgIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICAgIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICAgIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIGxldCBiMCA9IGJbMF0sXG4gICAgICAgIGIxID0gYlsxXSxcbiAgICAgICAgYjIgPSBiWzJdLFxuICAgICAgICBiMyA9IGJbM107XG4gICAgb3V0WzBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzJdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzNdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG5cbiAgICBiMCA9IGJbNF07XG4gICAgYjEgPSBiWzVdO1xuICAgIGIyID0gYls2XTtcbiAgICBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzZdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzddID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG5cbiAgICBiMCA9IGJbOF07XG4gICAgYjEgPSBiWzldO1xuICAgIGIyID0gYlsxMF07XG4gICAgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbMTBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzExXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzEyXTtcbiAgICBiMSA9IGJbMTNdO1xuICAgIGIyID0gYlsxNF07XG4gICAgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFsxNF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgICBvdXRbMTVdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIGxldCB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV0sXG4gICAgICAgIHogPSB2WzJdO1xuICAgIGxldCBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gICAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgICBsZXQgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdO1xuICAgICAgICBhMDEgPSBhWzFdO1xuICAgICAgICBhMDIgPSBhWzJdO1xuICAgICAgICBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdO1xuICAgICAgICBhMTEgPSBhWzVdO1xuICAgICAgICBhMTIgPSBhWzZdO1xuICAgICAgICBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdO1xuICAgICAgICBhMjEgPSBhWzldO1xuICAgICAgICBhMjIgPSBhWzEwXTtcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwO1xuICAgICAgICBvdXRbMV0gPSBhMDE7XG4gICAgICAgIG91dFsyXSA9IGEwMjtcbiAgICAgICAgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7XG4gICAgICAgIG91dFs1XSA9IGExMTtcbiAgICAgICAgb3V0WzZdID0gYTEyO1xuICAgICAgICBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDtcbiAgICAgICAgb3V0WzldID0gYTIxO1xuICAgICAgICBvdXRbMTBdID0gYTIyO1xuICAgICAgICBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICBsZXQgeCA9IHZbMF0sXG4gICAgICAgIHkgPSB2WzFdLFxuICAgICAgICB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICBsZXQgeCA9IGF4aXNbMF0sXG4gICAgICAgIHkgPSBheGlzWzFdLFxuICAgICAgICB6ID0gYXhpc1syXTtcbiAgICBsZXQgbGVuID0gTWF0aC5oeXBvdCh4LCB5LCB6KTtcbiAgICBsZXQgcywgYywgdDtcbiAgICBsZXQgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICAgIGxldCBhMTAsIGExMSwgYTEyLCBhMTM7XG4gICAgbGV0IGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgICBsZXQgYjAwLCBiMDEsIGIwMjtcbiAgICBsZXQgYjEwLCBiMTEsIGIxMjtcbiAgICBsZXQgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgRVBTSUxPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTtcbiAgICBhMDEgPSBhWzFdO1xuICAgIGEwMiA9IGFbMl07XG4gICAgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdO1xuICAgIGExMSA9IGFbNV07XG4gICAgYTEyID0gYVs2XTtcbiAgICBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07XG4gICAgYTIxID0gYVs5XTtcbiAgICBhMjIgPSBhWzEwXTtcbiAgICBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7XG4gICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7XG4gICAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7XG4gICAgYjExID0geSAqIHkgKiB0ICsgYztcbiAgICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcztcbiAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcztcbiAgICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkge1xuICAgICAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxuICogIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSAge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG91dCwgbWF0KSB7XG4gICAgb3V0WzBdID0gbWF0WzEyXTtcbiAgICBvdXRbMV0gPSBtYXRbMTNdO1xuICAgIG91dFsyXSA9IG1hdFsxNF07XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtdGVyLCB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmVcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICAgIGxldCBtMTEgPSBtYXRbMF07XG4gICAgbGV0IG0xMiA9IG1hdFsxXTtcbiAgICBsZXQgbTEzID0gbWF0WzJdO1xuICAgIGxldCBtMjEgPSBtYXRbNF07XG4gICAgbGV0IG0yMiA9IG1hdFs1XTtcbiAgICBsZXQgbTIzID0gbWF0WzZdO1xuICAgIGxldCBtMzEgPSBtYXRbOF07XG4gICAgbGV0IG0zMiA9IG1hdFs5XTtcbiAgICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICAgIG91dFswXSA9IE1hdGguaHlwb3QobTExLCBtMTIsIG0xMyk7XG4gICAgb3V0WzFdID0gTWF0aC5oeXBvdChtMjEsIG0yMiwgbTIzKTtcbiAgICBvdXRbMl0gPSBNYXRoLmh5cG90KG0zMSwgbTMyLCBtMzMpO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFNjYWxlT25BeGlzKG1hdCkge1xuICAgIGxldCBtMTEgPSBtYXRbMF07XG4gICAgbGV0IG0xMiA9IG1hdFsxXTtcbiAgICBsZXQgbTEzID0gbWF0WzJdO1xuICAgIGxldCBtMjEgPSBtYXRbNF07XG4gICAgbGV0IG0yMiA9IG1hdFs1XTtcbiAgICBsZXQgbTIzID0gbWF0WzZdO1xuICAgIGxldCBtMzEgPSBtYXRbOF07XG4gICAgbGV0IG0zMiA9IG1hdFs5XTtcbiAgICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICAgIGNvbnN0IHggPSBtMTEgKiBtMTEgKyBtMTIgKiBtMTIgKyBtMTMgKiBtMTM7XG4gICAgY29uc3QgeSA9IG0yMSAqIG0yMSArIG0yMiAqIG0yMiArIG0yMyAqIG0yMztcbiAgICBjb25zdCB6ID0gbTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLm1heCh4LCB5LCB6KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgY29uc3QgZ2V0Um90YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlbXAgPSBbMSwgMSwgMV07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG91dCwgbWF0KSB7XG4gICAgICAgIGxldCBzY2FsaW5nID0gdGVtcDtcbiAgICAgICAgZ2V0U2NhbGluZyhzY2FsaW5nLCBtYXQpO1xuXG4gICAgICAgIGxldCBpczEgPSAxIC8gc2NhbGluZ1swXTtcbiAgICAgICAgbGV0IGlzMiA9IDEgLyBzY2FsaW5nWzFdO1xuICAgICAgICBsZXQgaXMzID0gMSAvIHNjYWxpbmdbMl07XG5cbiAgICAgICAgbGV0IHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gICAgICAgIGxldCBzbTEyID0gbWF0WzFdICogaXMyO1xuICAgICAgICBsZXQgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgICAgICAgbGV0IHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gICAgICAgIGxldCBzbTIyID0gbWF0WzVdICogaXMyO1xuICAgICAgICBsZXQgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgICAgICAgbGV0IHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gICAgICAgIGxldCBzbTMyID0gbWF0WzldICogaXMyO1xuICAgICAgICBsZXQgc20zMyA9IG1hdFsxMF0gKiBpczM7XG5cbiAgICAgICAgbGV0IHRyYWNlID0gc20xMSArIHNtMjIgKyBzbTMzO1xuICAgICAgICBsZXQgUyA9IDA7XG5cbiAgICAgICAgaWYgKHRyYWNlID4gMCkge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgICAgICAgICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgICAgICAgICBvdXRbMF0gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgICAgICAgICAgb3V0WzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gICAgICAgIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICAgICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20xMSAtIHNtMjIgLSBzbTMzKSAqIDI7XG4gICAgICAgICAgICBvdXRbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgICAgICAgICAgb3V0WzFdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgICAgICAgICBvdXRbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICAgICAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTIyIC0gc20xMSAtIHNtMzMpICogMjtcbiAgICAgICAgICAgIG91dFszXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgICAgICAgICAgb3V0WzBdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgICAgICAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICAgICAgICAgIG91dFsyXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICAgICAgICAgIG91dFszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgICAgICAgICAgb3V0WzBdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gICAgICAgICAgICBvdXRbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xufSkoKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHh5ID0geCAqIHkyO1xuICAgIGxldCB4eiA9IHggKiB6MjtcbiAgICBsZXQgeXkgPSB5ICogeTI7XG4gICAgbGV0IHl6ID0geSAqIHoyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcbiAgICBsZXQgc3ggPSBzWzBdO1xuICAgIGxldCBzeSA9IHNbMV07XG4gICAgbGV0IHN6ID0gc1syXTtcblxuICAgIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHl4ID0geSAqIHgyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgenggPSB6ICogeDI7XG4gICAgbGV0IHp5ID0geiAqIHkyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgbGV0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gICAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDIgKiBmYXIgKiBuZWFyICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIGxldCBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcbiAgICBsZXQgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCk7XG4gICAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbWF0cml4IHRoYXQgbWFrZXMgc29tZXRoaW5nIGxvb2sgYXQgc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSB0YXJnZXQgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRvKG91dCwgZXllLCB0YXJnZXQsIHVwKSB7XG4gICAgbGV0IGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl07XG5cbiAgICBsZXQgejAgPSBleWV4IC0gdGFyZ2V0WzBdLFxuICAgICAgICB6MSA9IGV5ZXkgLSB0YXJnZXRbMV0sXG4gICAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcblxuICAgIGxldCBsZW4gPSB6MCAqIHowICsgejEgKiB6MSArIHoyICogejI7XG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAvLyBleWUgYW5kIHRhcmdldCBhcmUgaW4gdGhlIHNhbWUgcG9zaXRpb25cbiAgICAgICAgejIgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgejAgKj0gbGVuO1xuICAgICAgICB6MSAqPSBsZW47XG4gICAgICAgIHoyICo9IGxlbjtcbiAgICB9XG5cbiAgICBsZXQgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxLFxuICAgICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcblxuICAgIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIC8vIHVwIGFuZCB6IGFyZSBwYXJhbGxlbFxuICAgICAgICBpZiAodXB6KSB7XG4gICAgICAgICAgICB1cHggKz0gMWUtNjtcbiAgICAgICAgfSBlbHNlIGlmICh1cHkpIHtcbiAgICAgICAgICAgIHVweiArPSAxZS02O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXB5ICs9IDFlLTY7XG4gICAgICAgIH1cbiAgICAgICAgKHgwID0gdXB5ICogejIgLSB1cHogKiB6MSksICh4MSA9IHVweiAqIHowIC0gdXB4ICogejIpLCAoeDIgPSB1cHggKiB6MSAtIHVweSAqIHowKTtcblxuICAgICAgICBsZW4gPSB4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDI7XG4gICAgfVxuXG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geDE7XG4gICAgb3V0WzJdID0geDI7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgICBvdXRbNl0gPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHowO1xuICAgIG91dFs5XSA9IHoxO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gZXlleDtcbiAgICBvdXRbMTNdID0gZXlleTtcbiAgICBvdXRbMTRdID0gZXllejtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gICAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdIC0gYlsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdIC0gYlsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIG91dFs0XSA9IGFbNF0gKiBiO1xuICAgIG91dFs1XSA9IGFbNV0gKiBiO1xuICAgIG91dFs2XSA9IGFbNl0gKiBiO1xuICAgIG91dFs3XSA9IGFbN10gKiBiO1xuICAgIG91dFs4XSA9IGFbOF0gKiBiO1xuICAgIG91dFs5XSA9IGFbOV0gKiBiO1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gICAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICAgIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gICAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJpbXBvcnQgKiBhcyB2ZWM0IGZyb20gJy4vVmVjNEZ1bmMuanMnO1xuXG4vKipcbiAqIFNldCBhIHF1YXQgdG8gdGhlIGlkZW50aXR5IHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gICAgcmFkID0gcmFkICogMC41O1xuICAgIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgICBvdXRbMV0gPSBzICogYXhpc1sxXTtcbiAgICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcXVhdHNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnggPSBiWzBdLFxuICAgICAgICBieSA9IGJbMV0sXG4gICAgICAgIGJ6ID0gYlsyXSxcbiAgICAgICAgYncgPSBiWzNdO1xuXG4gICAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gICAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieDtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXogKiBieDtcbiAgICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnkgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieTtcbiAgICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXkgKiBieTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnogPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBiejtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgLy8gYmVuY2htYXJrczpcbiAgICAvLyAgICBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXNsZXJwLWltcGxlbWVudGF0aW9uc1xuICAgIGxldCBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXSxcbiAgICAgICAgYXogPSBhWzJdLFxuICAgICAgICBhdyA9IGFbM107XG4gICAgbGV0IGJ4ID0gYlswXSxcbiAgICAgICAgYnkgPSBiWzFdLFxuICAgICAgICBieiA9IGJbMl0sXG4gICAgICAgIGJ3ID0gYlszXTtcblxuICAgIGxldCBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTtcblxuICAgIC8vIGNhbGMgY29zaW5lXG4gICAgY29zb20gPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3O1xuICAgIC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuICAgIGlmIChjb3NvbSA8IDAuMCkge1xuICAgICAgICBjb3NvbSA9IC1jb3NvbTtcbiAgICAgICAgYnggPSAtYng7XG4gICAgICAgIGJ5ID0gLWJ5O1xuICAgICAgICBieiA9IC1iejtcbiAgICAgICAgYncgPSAtYnc7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcbiAgICBpZiAoMS4wIC0gY29zb20gPiAwLjAwMDAwMSkge1xuICAgICAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICAgICAgb21lZ2EgPSBNYXRoLmFjb3MoY29zb20pO1xuICAgICAgICBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTtcbiAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXG4gICAgICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICAgICAgc2NhbGUxID0gdDtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICAgIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gICAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICAgIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgaW52ZXJzZSBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIGxldCBhMCA9IGFbMF0sXG4gICAgICAgIGExID0gYVsxXSxcbiAgICAgICAgYTIgPSBhWzJdLFxuICAgICAgICBhMyA9IGFbM107XG4gICAgbGV0IGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gICAgbGV0IGludkRvdCA9IGRvdCA/IDEuMCAvIGRvdCA6IDA7XG5cbiAgICAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gICAgb3V0WzBdID0gLWEwICogaW52RG90O1xuICAgIG91dFsxXSA9IC1hMSAqIGludkRvdDtcbiAgICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gICAgb3V0WzNdID0gYTMgKiBpbnZEb3Q7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XG4gKiBJZiB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkLCB0aGlzIGZ1bmN0aW9uIGlzIGZhc3RlciB0aGFuIHF1YXQuaW52ZXJzZSBhbmQgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGNvbmp1Z2F0ZSBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uanVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdO1xuICAgIG91dFsxXSA9IC1hWzFdO1xuICAgIG91dFsyXSA9IC1hWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxuICpcbiAqIE5PVEU6IFRoZSByZXN1bHRhbnQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28geW91IHNob3VsZCBiZSBzdXJlXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge21hdDN9IG0gcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkge1xuICAgIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzXG4gICAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gICAgbGV0IGZUcmFjZSA9IG1bMF0gKyBtWzRdICsgbVs4XTtcbiAgICBsZXQgZlJvb3Q7XG5cbiAgICBpZiAoZlRyYWNlID4gMC4wKSB7XG4gICAgICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICAgICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgLy8gMndcbiAgICAgICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgICAgIGZSb290ID0gMC41IC8gZlJvb3Q7IC8vIDEvKDR3KVxuICAgICAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHx3fCA8PSAxLzJcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBpZiAobVs0XSA+IG1bMF0pIGkgPSAxO1xuICAgICAgICBpZiAobVs4XSA+IG1baSAqIDMgKyBpXSkgaSA9IDI7XG4gICAgICAgIGxldCBqID0gKGkgKyAxKSAlIDM7XG4gICAgICAgIGxldCBrID0gKGkgKyAyKSAlIDM7XG5cbiAgICAgICAgZlJvb3QgPSBNYXRoLnNxcnQobVtpICogMyArIGldIC0gbVtqICogMyArIGpdIC0gbVtrICogMyArIGtdICsgMS4wKTtcbiAgICAgICAgb3V0W2ldID0gMC41ICogZlJvb3Q7XG4gICAgICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgICAgIG91dFszXSA9IChtW2ogKiAzICsga10gLSBtW2sgKiAzICsgal0pICogZlJvb3Q7XG4gICAgICAgIG91dFtqXSA9IChtW2ogKiAzICsgaV0gKyBtW2kgKiAzICsgal0pICogZlJvb3Q7XG4gICAgICAgIG91dFtrXSA9IChtW2sgKiAzICsgaV0gKyBtW2kgKiAzICsga10pICogZlJvb3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBldWxlciBBbmdsZXMgdG8gcm90YXRlIGFyb3VuZCBlYWNoIGF4aXMgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcmRlciBkZXRhaWxpbmcgb3JkZXIgb2Ygb3BlcmF0aW9ucy4gRGVmYXVsdCAnWFlaJy5cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV1bGVyKG91dCwgZXVsZXIsIG9yZGVyID0gJ1lYWicpIHtcbiAgICBsZXQgc3ggPSBNYXRoLnNpbihldWxlclswXSAqIDAuNSk7XG4gICAgbGV0IGN4ID0gTWF0aC5jb3MoZXVsZXJbMF0gKiAwLjUpO1xuICAgIGxldCBzeSA9IE1hdGguc2luKGV1bGVyWzFdICogMC41KTtcbiAgICBsZXQgY3kgPSBNYXRoLmNvcyhldWxlclsxXSAqIDAuNSk7XG4gICAgbGV0IHN6ID0gTWF0aC5zaW4oZXVsZXJbMl0gKiAwLjUpO1xuICAgIGxldCBjeiA9IE1hdGguY29zKGV1bGVyWzJdICogMC41KTtcblxuICAgIGlmIChvcmRlciA9PT0gJ1hZWicpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6IC0gc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWFonKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6IC0gc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWlhZJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1pZWCcpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWlgnKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWFpZJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgcXVhdCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHNvdXJjZSBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGNvcHkgPSB2ZWM0LmNvcHk7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXQgPSB2ZWM0LnNldDtcblxuLyoqXG4gKiBBZGRzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBhZGQgPSB2ZWM0LmFkZDtcblxuLyoqXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB2ZWM0LnNjYWxlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZG90ID0gdmVjNC5kb3Q7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZXJwID0gdmVjNC5sZXJwO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBjb25zdCBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgbGV0IHggPSBhWzBdO1xuICAgIGxldCB5ID0gYVsxXTtcbiAgICBsZXQgeiA9IGFbMl07XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgICBvdXRbMF0gPSB4O1xuICAgIG91dFsxXSA9IHk7XG4gICAgb3V0WzJdID0gejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICAgIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gICAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICAgIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gICAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICAgIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gICAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICBsZXQgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB9XG4gICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICAgIG91dFsyXSA9IGFbMl0gKiBsZW47XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIGxldCBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXSxcbiAgICAgICAgYXogPSBhWzJdO1xuICAgIGxldCBieCA9IGJbMF0sXG4gICAgICAgIGJ5ID0gYlsxXSxcbiAgICAgICAgYnogPSBiWzJdO1xuXG4gICAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgbGV0IGF4ID0gYVswXTtcbiAgICBsZXQgYXkgPSBhWzFdO1xuICAgIGxldCBheiA9IGFbMl07XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIGxldCB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdO1xuICAgIGxldCB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICAgIHcgPSB3IHx8IDEuMDtcbiAgICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gdztcbiAgICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGFib3ZlIGJ1dCBkb2Vzbid0IGFwcGx5IHRyYW5zbGF0aW9uLlxuICogVXNlZnVsIGZvciByYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVSb3RhdGVNYXQ0KG91dCwgYSwgbSkge1xuICAgIGxldCB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdO1xuICAgIGxldCB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICAgIHcgPSB3IHx8IDEuMDtcbiAgICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6KSAvIHc7XG4gICAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeikgLyB3O1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6KSAvIHc7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0M30gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICBsZXQgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICBvdXRbMF0gPSB4ICogbVswXSArIHkgKiBtWzNdICsgeiAqIG1bNl07XG4gICAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICAgIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgICAvLyBiZW5jaG1hcmtzOiBodHRwczovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnMtZml4ZWRcblxuICAgIGxldCB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdO1xuICAgIGxldCBxeCA9IHFbMF0sXG4gICAgICAgIHF5ID0gcVsxXSxcbiAgICAgICAgcXogPSBxWzJdLFxuICAgICAgICBxdyA9IHFbM107XG5cbiAgICBsZXQgdXZ4ID0gcXkgKiB6IC0gcXogKiB5O1xuICAgIGxldCB1dnkgPSBxeiAqIHggLSBxeCAqIHo7XG4gICAgbGV0IHV2eiA9IHF4ICogeSAtIHF5ICogeDtcblxuICAgIGxldCB1dXZ4ID0gcXkgKiB1dnogLSBxeiAqIHV2eTtcbiAgICBsZXQgdXV2eSA9IHF6ICogdXZ4IC0gcXggKiB1dno7XG4gICAgbGV0IHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4O1xuXG4gICAgbGV0IHcyID0gcXcgKiAyO1xuICAgIHV2eCAqPSB3MjtcbiAgICB1dnkgKj0gdzI7XG4gICAgdXZ6ICo9IHcyO1xuXG4gICAgdXV2eCAqPSAyO1xuICAgIHV1dnkgKj0gMjtcbiAgICB1dXZ6ICo9IDI7XG5cbiAgICBvdXRbMF0gPSB4ICsgdXZ4ICsgdXV2eDtcbiAgICBvdXRbMV0gPSB5ICsgdXZ5ICsgdXV2eTtcbiAgICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlbXBBID0gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHRlbXBCID0gWzAsIDAsIDBdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGNvcHkodGVtcEEsIGEpO1xuICAgICAgICBjb3B5KHRlbXBCLCBiKTtcblxuICAgICAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKTtcbiAgICAgICAgbm9ybWFsaXplKHRlbXBCLCB0ZW1wQik7XG5cbiAgICAgICAgbGV0IGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpO1xuXG4gICAgICAgIGlmIChjb3NpbmUgPiAxLjApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYgKGNvc2luZSA8IC0xLjApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLlBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl07XG59XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICBvdXRbMl0gPSB6O1xuICAgIG91dFszXSA9IHc7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSArIGJbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgbGV0IHggPSBhWzBdO1xuICAgIGxldCB5ID0gYVsxXTtcbiAgICBsZXQgeiA9IGFbMl07XG4gICAgbGV0IHcgPSBhWzNdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICBsZXQgdyA9IGFbM107XG4gICAgbGV0IGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB9XG4gICAgb3V0WzBdID0geCAqIGxlbjtcbiAgICBvdXRbMV0gPSB5ICogbGVuO1xuICAgIG91dFsyXSA9IHogKiBsZW47XG4gICAgb3V0WzNdID0gdyAqIGxlbjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICBsZXQgYXggPSBhWzBdO1xuICAgIGxldCBheSA9IGFbMV07XG4gICAgbGV0IGF6ID0gYVsyXTtcbiAgICBsZXQgYXcgPSBhWzNdO1xuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICAgIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNWEyMjQyNmQ0ODZmZTE1NDlhOVwiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJQbGFuZSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJyZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZHByIiwiTWF0aCIsIm1pbiIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJnbCIsImNsZWFyQ29sb3IiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlR2VvbWV0cmllcyIsIm9uUmVzaXplIiwiY2FtZXJhIiwiZm92IiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJvbkNoYW5nZSIsInNjcmVlbiIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2V0U2l6ZSIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiUEkiLCJ0YW4iLCJ2aWV3cG9ydCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImFwcGxpY2F0aW9uIiwicmVuZGVyIiwiTWF0NCIsIlZlYzMiLCJ0ZW1wTWF0NCIsInRlbXBWZWMzYSIsInRlbXBWZWMzYiIsIm5lYXIiLCJmYXIiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJ6b29tIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvamVjdGlvbk1hdHJpeCIsInZpZXdNYXRyaXgiLCJwcm9qZWN0aW9uVmlld01hdHJpeCIsIndvcmxkUG9zaXRpb24iLCJ0eXBlIiwib3J0aG9ncmFwaGljIiwiZnJvbVBlcnNwZWN0aXZlIiwiZnJvbU9ydGhvZ29uYWwiLCJ1cGRhdGVNYXRyaXhXb3JsZCIsImludmVyc2UiLCJ3b3JsZE1hdHJpeCIsImdldFRyYW5zbGF0aW9uIiwibXVsdGlwbHkiLCJsb29rQXQiLCJ0YXJnZXQiLCJwcm9qZWN0IiwidiIsImFwcGx5TWF0cml4NCIsInVucHJvamVjdCIsInVwZGF0ZUZydXN0dW0iLCJmcnVzdHVtIiwibSIsInNldCIsImNvbnN0YW50IiwiaSIsImludkxlbiIsImRpc3RhbmNlIiwiZnJ1c3R1bUludGVyc2VjdHNNZXNoIiwibm9kZSIsImdlb21ldHJ5IiwiYXR0cmlidXRlcyIsImJvdW5kcyIsInJhZGl1cyIsIkluZmluaXR5IiwiY29tcHV0ZUJvdW5kaW5nU3BoZXJlIiwiY2VudGVyIiwiY29weSIsImdldE1heFNjYWxlT25BeGlzIiwiZnJ1c3R1bUludGVyc2VjdHNTcGhlcmUiLCJub3JtYWwiLCJwbGFuZSIsImRvdCIsInRlbXBWZWMzIiwiSUQiLCJjcmVhdGVFbGVtZW50IiwiZGVwdGgiLCJzdGVuY2lsIiwicHJlbXVsdGlwbGllZEFscGhhIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwicG93ZXJQcmVmZXJlbmNlIiwiYXV0b0NsZWFyIiwid2ViZ2wiLCJjb2xvciIsImlkIiwiZ2V0Q29udGV4dCIsImlzV2ViZ2wyIiwiY29uc29sZSIsImVycm9yIiwic3RhdGUiLCJibGVuZEZ1bmMiLCJzcmMiLCJPTkUiLCJkc3QiLCJaRVJPIiwiYmxlbmRFcXVhdGlvbiIsIm1vZGVSR0IiLCJGVU5DX0FERCIsImN1bGxGYWNlIiwiZnJvbnRGYWNlIiwiQ0NXIiwiZGVwdGhNYXNrIiwiZGVwdGhGdW5jIiwiTEVTUyIsInByZW11bHRpcGx5QWxwaGEiLCJmbGlwWSIsInVucGFja0FsaWdubWVudCIsImZyYW1lYnVmZmVyIiwieCIsInkiLCJ0ZXh0dXJlVW5pdHMiLCJhY3RpdmVUZXh0dXJlVW5pdCIsImJvdW5kQnVmZmVyIiwidW5pZm9ybUxvY2F0aW9ucyIsIk1hcCIsImN1cnJlbnRQcm9ncmFtIiwiZXh0ZW5zaW9ucyIsImdldEV4dGVuc2lvbiIsInZlcnRleEF0dHJpYkRpdmlzb3IiLCJkcmF3QXJyYXlzSW5zdGFuY2VkIiwiZHJhd0VsZW1lbnRzSW5zdGFuY2VkIiwiY3JlYXRlVmVydGV4QXJyYXkiLCJiaW5kVmVydGV4QXJyYXkiLCJkZWxldGVWZXJ0ZXhBcnJheSIsImRyYXdCdWZmZXJzIiwicGFyYW1ldGVycyIsIm1heFRleHR1cmVVbml0cyIsImdldFBhcmFtZXRlciIsIk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTIiwibWF4QW5pc290cm9weSIsIk1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCIsInN0eWxlIiwic2V0Vmlld3BvcnQiLCJzZXRTY2lzc29yIiwic2Npc3NvciIsImVuYWJsZSIsImRpc2FibGUiLCJzZXRCbGVuZEZ1bmMiLCJzcmNBbHBoYSIsImRzdEFscGhhIiwidW5kZWZpbmVkIiwiYmxlbmRGdW5jU2VwYXJhdGUiLCJzZXRCbGVuZEVxdWF0aW9uIiwibW9kZUFscGhhIiwiYmxlbmRFcXVhdGlvblNlcGFyYXRlIiwic2V0Q3VsbEZhY2UiLCJ2YWx1ZSIsInNldEZyb250RmFjZSIsInNldERlcHRoTWFzayIsInNldERlcHRoRnVuYyIsImFjdGl2ZVRleHR1cmUiLCJURVhUVVJFMCIsImJpbmRGcmFtZWJ1ZmZlciIsIkZSQU1FQlVGRkVSIiwiYnVmZmVyIiwiZXh0ZW5zaW9uIiwid2ViZ2wyRnVuYyIsImV4dEZ1bmMiLCJiaW5kIiwic29ydE9wYXF1ZSIsImEiLCJiIiwicmVuZGVyT3JkZXIiLCJwcm9ncmFtIiwiekRlcHRoIiwic29ydFRyYW5zcGFyZW50Iiwic29ydFVJIiwiZ2V0UmVuZGVyTGlzdCIsImZydXN0dW1DdWxsIiwic29ydCIsInJlbmRlckxpc3QiLCJ0cmF2ZXJzZSIsInZpc2libGUiLCJkcmF3IiwiZnJ1c3R1bUN1bGxlZCIsInB1c2giLCJvcGFxdWUiLCJ0cmFuc3BhcmVudCIsInVpIiwiZm9yRWFjaCIsImRlcHRoVGVzdCIsImNvbmNhdCIsImNsZWFyIiwiREVQVEhfVEVTVCIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwiU1RFTkNJTF9CVUZGRVJfQklUIiwiUXVhdCIsIkV1bGVyIiwicGFyZW50IiwiY2hpbGRyZW4iLCJtYXRyaXgiLCJtYXRyaXhBdXRvVXBkYXRlIiwicXVhdGVybmlvbiIsInNjYWxlIiwicm90YXRpb24iLCJ1cCIsImZyb21FdWxlciIsImZyb21RdWF0ZXJuaW9uIiwic2V0UGFyZW50Iiwibm90aWZ5UGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJhZGRDaGlsZCIsImNoaWxkIiwibm90aWZ5Q2hpbGQiLCJpbmRleE9mIiwic3BsaWNlIiwiZm9yY2UiLCJ1cGRhdGVNYXRyaXgiLCJ3b3JsZE1hdHJpeE5lZWRzVXBkYXRlIiwibCIsImxlbmd0aCIsImNvbXBvc2UiLCJjYWxsYmFjayIsImRlY29tcG9zZSIsImdldFJvdGF0aW9uIiwiZ2V0U2NhbGluZyIsImludmVydCIsIkV1bGVyRnVuYyIsInRtcE1hdDQiLCJBcnJheSIsIm9yZGVyIiwicmVvcmRlciIsImZyb21Sb3RhdGlvbk1hdHJpeCIsInEiLCJmcm9tQXJyYXkiLCJvIiwidG9BcnJheSIsIk1hdDRGdW5jIiwibTAwIiwibTAxIiwibTAyIiwibTAzIiwibTEwIiwibTExIiwibTEyIiwibTEzIiwibTIwIiwibTIxIiwibTIyIiwibTIzIiwibTMwIiwibTMxIiwibTMyIiwibTMzIiwidyIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImF4aXMiLCJhZGQiLCJtYSIsIm1iIiwic3ViIiwic3VidHJhY3QiLCJtdWx0aXBseVNjYWxhciIsImlkZW50aXR5Iiwib3J0aG8iLCJmcm9tUXVhdCIsInNldFBvc2l0aW9uIiwicG9zIiwiZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZSIsImV5ZSIsInRhcmdldFRvIiwiZGV0ZXJtaW5hbnQiLCJRdWF0RnVuYyIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsImNvbmp1Z2F0ZSIsIm5vcm1hbGl6ZSIsInFBIiwicUIiLCJmcm9tTWF0cml4MyIsIm1hdHJpeDMiLCJmcm9tTWF0MyIsImV1bGVyIiwiZnJvbUF4aXNBbmdsZSIsInNldEF4aXNBbmdsZSIsInNsZXJwIiwidCIsIlZlYzNGdW5jIiwidmEiLCJ2YiIsImRpdmlkZSIsImxlbiIsInNxdWFyZWRMZW4iLCJzcXVhcmVkTGVuZ3RoIiwic3F1YXJlZERpc3RhbmNlIiwibmVnYXRlIiwiY3Jvc3MiLCJlcXVhbHMiLCJleGFjdEVxdWFscyIsImFwcGx5TWF0cml4MyIsIm1hdDMiLCJ0cmFuc2Zvcm1NYXQzIiwibWF0NCIsInRyYW5zZm9ybU1hdDQiLCJzY2FsZVJvdGF0ZU1hdHJpeDQiLCJzY2FsZVJvdGF0ZU1hdDQiLCJhcHBseVF1YXRlcm5pb24iLCJ0cmFuc2Zvcm1RdWF0IiwiYW5nbGUiLCJsZXJwIiwiY2xvbmUiLCJ0cmFuc2Zvcm1EaXJlY3Rpb24iLCJvdXQiLCJhc2luIiwibWF4IiwiYWJzIiwiYXRhbjIiLCJFUFNJTE9OIiwidHJhbnNwb3NlIiwiYTAxIiwiYTAyIiwiYTAzIiwiYTEyIiwiYTEzIiwiYTIzIiwiYTAwIiwiYTEwIiwiYTExIiwiYTIwIiwiYTIxIiwiYTIyIiwiYTMwIiwiYTMxIiwiYTMyIiwiYTMzIiwiYjAwIiwiYjAxIiwiYjAyIiwiYjAzIiwiYjA0IiwiYjA1IiwiYjA2IiwiYjA3IiwiYjA4IiwiYjA5IiwiYjEwIiwiYjExIiwiZGV0IiwiYjAiLCJiMSIsImIyIiwiYjMiLCJyYWQiLCJoeXBvdCIsInMiLCJjIiwiYjEyIiwiYjIwIiwiYjIxIiwiYjIyIiwic2luIiwiY29zIiwibWF0Iiwic3FydCIsInRlbXAiLCJzY2FsaW5nIiwiaXMxIiwiaXMyIiwiaXMzIiwic20xMSIsInNtMTIiLCJzbTEzIiwic20yMSIsInNtMjIiLCJzbTIzIiwic20zMSIsInNtMzIiLCJzbTMzIiwidHJhY2UiLCJTIiwieDIiLCJ5MiIsInoyIiwieHgiLCJ4eSIsInh6IiwieXkiLCJ5eiIsInp6Iiwid3giLCJ3eSIsInd6Iiwic3giLCJzeSIsInN6IiwieXgiLCJ6eCIsInp5IiwiZm92eSIsImYiLCJuZiIsImxyIiwiYnQiLCJleWV4IiwiZXlleSIsImV5ZXoiLCJ1cHgiLCJ1cHkiLCJ1cHoiLCJ6MCIsInoxIiwieDAiLCJ4MSIsInZlYzQiLCJheCIsImF5IiwiYXoiLCJhdyIsImJ4IiwiYnkiLCJieiIsImJ3Iiwib21lZ2EiLCJjb3NvbSIsInNpbm9tIiwic2NhbGUwIiwic2NhbGUxIiwiYWNvcyIsImEwIiwiYTEiLCJhMiIsImEzIiwiaW52RG90IiwiZlRyYWNlIiwiZlJvb3QiLCJqIiwiayIsImN4IiwiY3kiLCJjeiIsInF4IiwicXkiLCJxeiIsInF3IiwidXZ4IiwidXZ5IiwidXZ6IiwidXV2eCIsInV1dnkiLCJ1dXZ6IiwidzIiLCJ0ZW1wQSIsInRlbXBCIiwiY29zaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==