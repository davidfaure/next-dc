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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/gallery-vertex.glsl */ "./app/shaders/gallery-vertex.glsl");
/* harmony import */ var _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shaders/gallery-fragment.glsl */ "./app/shaders/gallery-fragment.glsl");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    gl,
    geometry,
    scene,
    sizes
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.time = 0;
    this.extra = {
      x: 0,
      y: 0
    };
    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({
      sizes: this.sizes
    });
  }
  createTexture() {
    const image = this.element.querySelector(".home__gallery__media__image");
    this.texture = window.TEXTURES[image.getAttribute("src")];
  }
  createProgram() {
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_2__.Program(this.gl, {
      fragment: _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
      vertex: _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        tMap: {
          value: this.texture
        },
        uOffset: {
          value: 0
        }
      }
    });
  }
  createMesh() {
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.mesh.setParent(this.scene);
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
  updateScale() {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;
    this.mesh.scale.x = this.sizes.width * this.width;
    this.mesh.scale.y = this.sizes.height * this.height;
  }
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;
    this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra.x;
  }
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height + this.extra.y;
  }
  update(scroll, speed) {
    if (!this.bounds) return;
    this.updateX(scroll);
    this.updateY(0);
    const OFFSET_SCALE = 0.1;
    const offset = [speed * OFFSET_SCALE, speed * OFFSET_SCALE];
    this.program.uniforms.uOffset.value = offset;
  }
  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0
    };
    this.createBounds(sizes);
    this.updateX(scroll);
    this.updateY(0);
  }
});

/***/ }),

/***/ "./app/components/Canvas/Home/index.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");



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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
    this.gallery = document.querySelector(".home__gallery");
    this.galleryElement = document.querySelector(".home__gallery__wrapper");
    this.mediasElements = document.querySelectorAll(".home__gallery__media__image");
    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1
    };
    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.createGeometry();
    this.createGallery();
    this.show();
    this.onResize({
      sizes: this.sizes
    });
  }
  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_3__.Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    });
  }
  createGallery() {
    this.medias = map(this.mediasElements, (element, index) => {
      return new _Media__WEBPACK_IMPORTED_MODULE_1__["default"]({
        element,
        geometry: this.geometry,
        gl: this.gl,
        index,
        scene: this.group,
        sizes: this.sizes,
        renderer: this.renderer,
        camera: this.camera
      });
    });
  }

  /**
   * Animations.
   */
  show() {
    this.group.setParent(this.scene);
  }
  hide() {
    this.group.setParent(null);
  }
  onResize(event) {
    this.bounds = this.galleryElement.getBoundingClientRect();
    this.sizes = event.sizes;
    this.gallerySizes = {
      height: this.bounds.height / window.innerHeight * this.sizes.height,
      width: this.bounds.width / window.innerWidth * this.sizes.width
    };
    this.scroll.last = this.scene.target = 0;
    map(this.medias, media => media.onResize(event, this.scroll));
    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth;
  }
  onTouchDown({
    x,
    y
  }) {
    this.scroll.last = this.scroll.current;
  }
  onTouchMove({
    x,
    y
  }) {
    const distance = x.start - x.end;
    this.scroll.target = this.scroll.last - distance; // *0.8 pour ralentir
  }

  onTouchUp({
    x,
    y
  }) {}
  onWheel({
    pixelY
  }) {}
  update() {
    if (!this.bounds) return;
    this.speed.current = lerp(this.speed.current, this.speed.target, this.speed.lerp);
    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target);
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0018; // ou 0.001

    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    if (this.scroll.last < this.scroll.current) {
      this.x.direction = "right";
    } else if (this.scroll.last > this.scroll.current) {
      this.x.direction = "left";
    }
    this.scroll.last = this.scroll.current;
    map(this.medias, media => {
      media.update(this.scroll.current, this.speed.current);
    });
  }

  /**
   * Destroy.
   */
  destroy() {
    this.scene.removeChild(this.group);
  }
});

/***/ }),

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./app/components/Canvas/Home/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    url
  }) {
    this.url = url;
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_1__.Renderer({
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
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_2__.Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
  }
  createHome() {
    this.home = new _Home__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport
    });
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
  onTouchDown(event) {
    this.isDown = true;
    this.x.start = event.touches ? event.touches[0].clientX : event.clientX;
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY;
    const values = {
      x: this.x.start,
      y: this.y.start
    };
    if (this.home) {
      this.home.onTouchDown(values);
    }
  }
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

/***/ "./app/shaders/gallery-fragment.glsl":
/*!*******************************************!*\
  !*** ./app/shaders/gallery-fragment.glsl ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\nuniform vec2 uOffset;\n\nvarying vec2 vUv;\n\nvec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset){\n    float r = texture2D(textureImage, uv + offset * 0.3).r;\n    vec2 gb = texture2D(textureImage, uv).gb;\n    return vec3(r, gb);\n}\n\nvoid main() {\n    vec3 colorShifted = rgbShift(tMap, vUv, uOffset);\n    gl_FragColor = vec4(colorShifted, 1.0);\n}\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uOffset;\n\nvarying vec2 vUv;\n\nvec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){\n    position.x = position.x + (sin(uv.y * PI) * offset.x);\n    position.y = position.y + (sin(uv.x * PI) * offset.y);\n    return position;\n}\n\nvoid main(){\n    vUv = uv;\n    vec3 newPosition = deformationCurve(position, uv, uOffset);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n");

/***/ }),

/***/ "./node_modules/ogl/src/core/Geometry.js":
/*!***********************************************!*\
  !*** ./node_modules/ogl/src/core/Geometry.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geometry: () => (/* binding */ Geometry)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");
// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false

//     buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }

// TODO: fit in transform feedback


const tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
let ID = 1;
let ATTR_ID = 1;

// To stop inifinite warnings
let isBoundsWarned = false;
class Geometry {
  constructor(gl, attributes = {}) {
    if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++;

    // Store one VAO per program attribute locations order
    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0;

    // Unbind current VAO so that new buffers don't get added to active mesh
    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null;

    // Alias for state store to avoid redundant calls for global state
    this.glState = this.gl.renderer.state;

    // create the buffers
    for (let key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }
  addAttribute(key, attr) {
    this.attributes[key] = attr;

    // Set options
    attr.id = ATTR_ID++; // TODO: currently unused, remove?
    attr.size = attr.size || 1;
    attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array
    attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attr.normalized = attr.normalized || false;
    attr.stride = attr.stride || 0;
    attr.offset = attr.offset || 0;
    attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
    attr.divisor = attr.instanced || 0;
    attr.needsUpdate = false;
    attr.usage = attr.usage || this.gl.STATIC_DRAW;
    if (!attr.buffer) {
      // Push data to buffer
      this.updateAttribute(attr);
    }

    // Update geometry counts. If indexed, ignore regular attributes
    if (attr.divisor) {
      this.isInstanced = true;
      if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
        console.warn('geometry has multiple instanced buffers of different length');
        return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
      }
      this.instancedCount = attr.count * attr.divisor;
    } else if (key === 'index') {
      this.drawRange.count = attr.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
  }
  updateAttribute(attr) {
    const isNewBuffer = !attr.buffer;
    if (isNewBuffer) attr.buffer = this.gl.createBuffer();
    if (this.glState.boundBuffer !== attr.buffer) {
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
    }
    if (isNewBuffer) {
      this.gl.bufferData(attr.target, attr.data, attr.usage);
    } else {
      this.gl.bufferSubData(attr.target, 0, attr.data);
    }
    attr.needsUpdate = false;
  }
  setIndex(value) {
    this.addAttribute('index', value);
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  setInstancedCount(value) {
    this.instancedCount = value;
  }
  createVAO(program) {
    this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
    this.bindAttributes(program);
  }
  bindAttributes(program) {
    // Link all attributes to program using gl.vertexAttribPointer
    program.attributeLocations.forEach((location, {
      name,
      type
    }) => {
      // If geometry missing a required shader attribute
      if (!this.attributes[name]) {
        console.warn(`active attribute ${name} not being supplied`);
        return;
      }
      const attr = this.attributes[name];
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;

      // For matrix attributes, buffer needs to be defined per column
      let numLoc = 1;
      if (type === 35674) numLoc = 2; // mat2
      if (type === 35675) numLoc = 3; // mat3
      if (type === 35676) numLoc = 4; // mat4

      const size = attr.size / numLoc;
      const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
      const offset = numLoc === 1 ? 0 : numLoc * 4;
      for (let i = 0; i < numLoc; i++) {
        this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
        this.gl.enableVertexAttribArray(location + i);

        // For instanced attributes, divisor needs to be set.
        // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
        this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
      }
    });

    // Bind indices if geometry indexed
    if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({
    program,
    mode = this.gl.TRIANGLES
  }) {
    if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
      if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
    }

    // Check if any attributes need updating
    program.attributeLocations.forEach((location, {
      name
    }) => {
      const attr = this.attributes[name];
      if (attr.needsUpdate) this.updateAttribute(attr);
    });

    // For drawElements, offset needs to be multiple of type size
    let indexBytesPerElement = 2;
    if (this.attributes.index?.type === this.gl.UNSIGNED_INT) indexBytesPerElement = 4;
    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement, this.instancedCount);
      } else {
        this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else {
      if (this.attributes.index) {
        this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement);
      } else {
        this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
      }
    }
  }
  getPosition() {
    // Use position buffer, or min/max if available
    const attr = this.attributes.position;
    // if (attr.min) return [...attr.min, ...attr.max];
    if (attr.data) return attr;
    if (isBoundsWarned) return;
    console.warn('No position buffer data found to compute bounds');
    return isBoundsWarned = true;
  }
  computeBoundingBox(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    // Data loaded shouldn't haave stride, only buffers
    // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
    const stride = attr.size;
    if (!this.bounds) {
      this.bounds = {
        min: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        max: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        center: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        scale: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        radius: Infinity
      };
    }
    const min = this.bounds.min;
    const max = this.bounds.max;
    const center = this.bounds.center;
    const scale = this.bounds.scale;
    min.set(+Infinity);
    max.set(-Infinity);

    // TODO: check size of position (eg triangle with Vec2)
    for (let i = 0, l = array.length; i < l; i += stride) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      min.x = Math.min(x, min.x);
      min.y = Math.min(y, min.y);
      min.z = Math.min(z, min.z);
      max.x = Math.max(x, max.x);
      max.y = Math.max(y, max.y);
      max.z = Math.max(z, max.z);
    }
    scale.sub(max, min);
    center.add(min, max).divide(2);
  }
  computeBoundingSphere(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    // Data loaded shouldn't haave stride, only buffers
    // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
    const stride = attr.size;
    if (!this.bounds) this.computeBoundingBox(attr);
    let maxRadiusSq = 0;
    for (let i = 0, l = array.length; i < l; i += stride) {
      tempVec3.fromArray(array, i);
      maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
    }
    this.bounds.radius = Math.sqrt(maxRadiusSq);
  }
  remove() {
    for (let key in this.VAOs) {
      this.gl.renderer.deleteVertexArray(this.VAOs[key]);
      delete this.VAOs[key];
    }
    for (let key in this.attributes) {
      this.gl.deleteBuffer(this.attributes[key].buffer);
      delete this.attributes[key];
    }
  }
}

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

/***/ "./node_modules/ogl/src/extras/Plane.js":
/*!**********************************************!*\
  !*** ./node_modules/ogl/src/extras/Plane.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plane: () => (/* binding */ Plane)
/* harmony export */ });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Geometry.js */ "./node_modules/ogl/src/core/Geometry.js");

class Plane extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__.Geometry {
  constructor(gl, {
    width = 1,
    height = 1,
    widthSegments = 1,
    heightSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;

    // Determine length of arrays
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;

    // Generate empty arrays once
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }
  static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
    const io = i;
    const segW = width / wSegs;
    const segH = height / hSegs;
    for (let iy = 0; iy <= hSegs; iy++) {
      let y = iy * segH - height / 2;
      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let x = ix * segW - width / 2;
        position[i * 3 + u] = x * uDir;
        position[i * 3 + v] = y * vDir;
        position[i * 3 + w] = depth / 2;
        normal[i * 3 + u] = 0;
        normal[i * 3 + v] = 0;
        normal[i * 3 + w] = depth >= 0 ? 1 : -1;
        uv[i * 2] = ix / wSegs;
        uv[i * 2 + 1] = 1 - iy / hSegs;
        if (iy === hSegs || ix === wSegs) continue;
        let a = io + ix + iy * (wSegs + 1);
        let b = io + ix + (iy + 1) * (wSegs + 1);
        let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
        let d = io + ix + iy * (wSegs + 1) + 1;
        index[ii * 6] = a;
        index[ii * 6 + 1] = b;
        index[ii * 6 + 2] = d;
        index[ii * 6 + 3] = b;
        index[ii * 6 + 4] = c;
        index[ii * 6 + 5] = d;
        ii++;
      }
    }
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08bcf8d19535977a2ae7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MmE4ZTMwNWM3NmYzY2EzM2NjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBRWE7QUFDSTtBQUU3RCxpRUFBZSxNQUFNO0VBQ25CSyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsRUFBRTtJQUFFQyxRQUFRO0lBQUVDLEtBQUs7SUFBRUM7RUFBTSxDQUFDLEVBQUU7SUFDbkQsSUFBSSxDQUFDSixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUVsQixJQUFJLENBQUNDLElBQUksR0FBRyxDQUFDO0lBRWIsSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDWEMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQ0MsWUFBWSxDQUFDO01BQ2hCUixLQUFLLEVBQUUsSUFBSSxDQUFDQTtJQUNkLENBQUMsQ0FBQztFQUNKO0VBRUFLLGFBQWFBLENBQUEsRUFBRztJQUNkLE1BQU1JLEtBQUssR0FBRyxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsYUFBYSxDQUFDLDhCQUE4QixDQUFDO0lBQ3hFLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDSyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDM0Q7RUFFQVIsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDUyxPQUFPLEdBQUcsSUFBSXhCLHdDQUFPLENBQUMsSUFBSSxDQUFDTSxFQUFFLEVBQUU7TUFDbENILFFBQVE7TUFDUkQsTUFBTTtNQUNOdUIsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRTtVQUFFQyxLQUFLLEVBQUUsSUFBSSxDQUFDUDtRQUFRLENBQUM7UUFDN0JRLE9BQU8sRUFBRTtVQUNQRCxLQUFLLEVBQUU7UUFDVDtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQVgsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDYSxJQUFJLEdBQUcsSUFBSTlCLHFDQUFJLENBQUMsSUFBSSxDQUFDTyxFQUFFLEVBQUU7TUFDNUJDLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkJpQixPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3RCLEtBQUssQ0FBQztFQUNqQztFQUVBUyxZQUFZQSxDQUFDO0lBQUVSO0VBQU0sQ0FBQyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ3NCLE1BQU0sR0FBRyxJQUFJLENBQUMxQixPQUFPLENBQUMyQixxQkFBcUIsQ0FBQyxDQUFDO0lBRWxELElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7RUFDaEI7RUFFQUYsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDTCxNQUFNLENBQUNLLE1BQU0sR0FBR2YsTUFBTSxDQUFDZ0IsV0FBVztJQUNyRCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNQLE1BQU0sQ0FBQ08sS0FBSyxHQUFHakIsTUFBTSxDQUFDa0IsVUFBVTtJQUVsRCxJQUFJLENBQUNWLElBQUksQ0FBQ1csS0FBSyxDQUFDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDNkIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUNqRCxJQUFJLENBQUNULElBQUksQ0FBQ1csS0FBSyxDQUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQ0osS0FBSyxDQUFDMkIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtFQUNyRDtFQUVBRixPQUFPQSxDQUFDdEIsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNiLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDbUIsTUFBTSxDQUFDVSxJQUFJLEdBQUc3QixDQUFDLElBQUlTLE1BQU0sQ0FBQ2tCLFVBQVU7SUFFbkQsSUFBSSxDQUFDVixJQUFJLENBQUNhLFFBQVEsQ0FBQzlCLENBQUMsR0FDbEIsQ0FBQyxJQUFJLENBQUNILEtBQUssQ0FBQzZCLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDVCxJQUFJLENBQUNXLEtBQUssQ0FBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDSCxLQUFLLENBQUM2QixLQUFLLEdBQUcsSUFBSSxDQUFDM0IsS0FBSyxDQUFDQyxDQUFDO0VBQzVGO0VBRUF1QixPQUFPQSxDQUFDdEIsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNiLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDa0IsTUFBTSxDQUFDWSxHQUFHLEdBQUc5QixDQUFDLElBQUlRLE1BQU0sQ0FBQ2dCLFdBQVc7SUFDbkQsSUFBSSxDQUFDUixJQUFJLENBQUNhLFFBQVEsQ0FBQzdCLENBQUMsR0FDbEIsSUFBSSxDQUFDSixLQUFLLENBQUMyQixNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsSUFBSSxDQUFDVyxLQUFLLENBQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0osS0FBSyxDQUFDMkIsTUFBTSxHQUFHLElBQUksQ0FBQ3pCLEtBQUssQ0FBQ0UsQ0FBQztFQUM3RjtFQUVBK0IsTUFBTUEsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ2YsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0csT0FBTyxDQUFDVyxNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDVixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTVksWUFBWSxHQUFHLEdBQUc7SUFDeEIsTUFBTUMsTUFBTSxHQUFHLENBQUNGLEtBQUssR0FBR0MsWUFBWSxFQUFFRCxLQUFLLEdBQUdDLFlBQVksQ0FBQztJQUMzRCxJQUFJLENBQUN2QixPQUFPLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDRCxLQUFLLEdBQUdxQixNQUFNO0VBQzlDO0VBRUFDLFFBQVFBLENBQUN4QyxLQUFLLEVBQUVvQyxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDbEMsS0FBSyxHQUFHO01BQ1hDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFFRCxJQUFJLENBQUNJLFlBQVksQ0FBQ1IsS0FBSyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ1csTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqQjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdzQztBQUNYO0FBQ0E7QUFFM0IsaUVBQWUsTUFBTTtFQUNuQi9CLFdBQVdBLENBQUM7SUFBRUUsRUFBRTtJQUFFRSxLQUFLO0lBQUVDLEtBQUs7SUFBRTZDLFFBQVE7SUFBRUM7RUFBTyxDQUFDLEVBQUU7SUFDbEQsSUFBSSxDQUFDakQsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDRSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDNkMsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsZUFBZSxHQUFHSiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNLLEtBQUssR0FBRyxJQUFJUCwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDUSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ3hDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2RCxJQUFJLENBQUN5QyxjQUFjLEdBQUdELFFBQVEsQ0FBQ3hDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxJQUFJLENBQUMwQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsOEJBQThCLENBQUM7SUFFL0UsSUFBSSxDQUFDbEQsQ0FBQyxHQUFHO01BQ1BtRCxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDcEIsTUFBTSxHQUFHO01BQ1prQixPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNURSxLQUFLLEVBQUUsQ0FBQztNQUNSRCxJQUFJLEVBQUUsR0FBRztNQUNURSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRUQsSUFBSSxDQUFDckIsS0FBSyxHQUFHO01BQ1hpQixPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFFWCxJQUFJLENBQUNyQixRQUFRLENBQUM7TUFDWnhDLEtBQUssRUFBRSxJQUFJLENBQUNBO0lBQ2QsQ0FBQyxDQUFDO0VBQ0o7RUFFQTJELGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQzdELFFBQVEsR0FBRyxJQUFJNEMsc0NBQUssQ0FBQyxJQUFJLENBQUM3QyxFQUFFLEVBQUU7TUFDakNpRSxjQUFjLEVBQUUsRUFBRTtNQUNsQkMsYUFBYSxFQUFFO0lBQ2pCLENBQUMsQ0FBQztFQUNKO0VBRUFILGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUMsSUFBSSxDQUFDYixjQUFjLEVBQUUsQ0FBQ3hELE9BQU8sRUFBRXNFLEtBQUssS0FBSztNQUN6RCxPQUFPLElBQUl0Qiw4Q0FBSyxDQUFDO1FBQ2ZoRCxPQUFPO1FBQ1BFLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7UUFDdkJELEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7UUFDWHFFLEtBQUs7UUFDTG5FLEtBQUssRUFBRSxJQUFJLENBQUNpRCxLQUFLO1FBQ2pCaEQsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztRQUNqQjZDLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7UUFDdkJDLE1BQU0sRUFBRSxJQUFJLENBQUNBO01BQ2YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7QUFDRjtBQUNBO0VBQ0VlLElBQUlBLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ2IsS0FBSyxDQUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQ3RCLEtBQUssQ0FBQztFQUNsQztFQUVBb0UsSUFBSUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDbkIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQztFQUM1QjtFQUVBbUIsUUFBUUEsQ0FBQzRCLEtBQUssRUFBRTtJQUNkLElBQUksQ0FBQzlDLE1BQU0sR0FBRyxJQUFJLENBQUM2QixjQUFjLENBQUM1QixxQkFBcUIsQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQ3ZCLEtBQUssR0FBR29FLEtBQUssQ0FBQ3BFLEtBQUs7SUFFeEIsSUFBSSxDQUFDcUUsWUFBWSxHQUFHO01BQ2xCMUMsTUFBTSxFQUFHLElBQUksQ0FBQ0wsTUFBTSxDQUFDSyxNQUFNLEdBQUdmLE1BQU0sQ0FBQ2dCLFdBQVcsR0FBSSxJQUFJLENBQUM1QixLQUFLLENBQUMyQixNQUFNO01BQ3JFRSxLQUFLLEVBQUcsSUFBSSxDQUFDUCxNQUFNLENBQUNPLEtBQUssR0FBR2pCLE1BQU0sQ0FBQ2tCLFVBQVUsR0FBSSxJQUFJLENBQUM5QixLQUFLLENBQUM2QjtJQUM5RCxDQUFDO0lBRUQsSUFBSSxDQUFDTyxNQUFNLENBQUNrQyxJQUFJLEdBQUcsSUFBSSxDQUFDdkUsS0FBSyxDQUFDd0QsTUFBTSxHQUFHLENBQUM7SUFDeENVLEdBQUcsQ0FBQyxJQUFJLENBQUNELE1BQU0sRUFBRU8sS0FBSyxJQUFJQSxLQUFLLENBQUMvQixRQUFRLENBQUM0QixLQUFLLEVBQUUsSUFBSSxDQUFDaEMsTUFBTSxDQUFDLENBQUM7SUFFN0QsSUFBSSxDQUFDQSxNQUFNLENBQUNvQyxLQUFLLEdBQUcsSUFBSSxDQUFDbEQsTUFBTSxDQUFDTyxLQUFLLEdBQUcsSUFBSSxDQUFDbUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDcEUsT0FBTyxDQUFDNkUsV0FBVztFQUM1RTtFQUVBQyxXQUFXQSxDQUFDO0lBQUV2RSxDQUFDO0lBQUVDO0VBQUUsQ0FBQyxFQUFFO0lBQ3BCLElBQUksQ0FBQ2dDLE1BQU0sQ0FBQ2tDLElBQUksR0FBRyxJQUFJLENBQUNsQyxNQUFNLENBQUNrQixPQUFPO0VBQ3hDO0VBRUFxQixXQUFXQSxDQUFDO0lBQUV4RSxDQUFDO0lBQUVDO0VBQUUsQ0FBQyxFQUFFO0lBQ3BCLE1BQU13RSxRQUFRLEdBQUd6RSxDQUFDLENBQUNzRCxLQUFLLEdBQUd0RCxDQUFDLENBQUMwRSxHQUFHO0lBRWhDLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQ21CLE1BQU0sR0FBRyxJQUFJLENBQUNuQixNQUFNLENBQUNrQyxJQUFJLEdBQUdNLFFBQVEsRUFBQztFQUNuRDs7RUFFQUUsU0FBU0EsQ0FBQztJQUFFM0UsQ0FBQztJQUFFQztFQUFFLENBQUMsRUFBRSxDQUFDO0VBRXJCMkUsT0FBT0EsQ0FBQztJQUFFQztFQUFPLENBQUMsRUFBRSxDQUFDO0VBRXJCN0MsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ2IsTUFBTSxFQUFFO0lBRWxCLElBQUksQ0FBQ2UsS0FBSyxDQUFDaUIsT0FBTyxHQUFHRSxJQUFJLENBQUMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDaUIsT0FBTyxFQUFFLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2tCLE1BQU0sRUFBRSxJQUFJLENBQUNsQixLQUFLLENBQUNtQixJQUFJLENBQUM7SUFDakYsSUFBSSxDQUFDcEIsTUFBTSxDQUFDbUIsTUFBTSxHQUFHMEIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQy9DLE1BQU0sQ0FBQ29DLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDcEMsTUFBTSxDQUFDbUIsTUFBTSxDQUFDO0lBQ2hGLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ2tCLE9BQU8sR0FBR0UsSUFBSSxDQUFDLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQ2tCLE9BQU8sRUFBRSxJQUFJLENBQUNsQixNQUFNLENBQUNtQixNQUFNLEVBQUUsSUFBSSxDQUFDbkIsTUFBTSxDQUFDb0IsSUFBSSxDQUFDO0lBRXJGLElBQUksQ0FBQ25CLEtBQUssQ0FBQ2tCLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ21CLE1BQU0sR0FBRyxJQUFJLENBQUNuQixNQUFNLENBQUNrQixPQUFPLElBQUksTUFBTSxFQUFDOztJQUV4RSxJQUFJLENBQUNMLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQyxJQUFJLENBQUNyQyxlQUFlLENBQUMsR0FBSSxjQUMxQyxJQUFJLENBQUNYLE1BQU0sQ0FBQ2tCLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsTUFBTSxDQUFDa0IsT0FDL0MsS0FBSSxDQUFDLENBQUM7O0lBRVAsSUFBSSxJQUFJLENBQUNsQixNQUFNLENBQUNrQyxJQUFJLEdBQUcsSUFBSSxDQUFDbEMsTUFBTSxDQUFDa0IsT0FBTyxFQUFFO01BQzFDLElBQUksQ0FBQ25ELENBQUMsQ0FBQ2tGLFNBQVMsR0FBRyxPQUFPO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2pELE1BQU0sQ0FBQ2tDLElBQUksR0FBRyxJQUFJLENBQUNsQyxNQUFNLENBQUNrQixPQUFPLEVBQUU7TUFDakQsSUFBSSxDQUFDbkQsQ0FBQyxDQUFDa0YsU0FBUyxHQUFHLE1BQU07SUFDM0I7SUFFQSxJQUFJLENBQUNqRCxNQUFNLENBQUNrQyxJQUFJLEdBQUcsSUFBSSxDQUFDbEMsTUFBTSxDQUFDa0IsT0FBTztJQUV0Q1csR0FBRyxDQUFDLElBQUksQ0FBQ0QsTUFBTSxFQUFFTyxLQUFLLElBQUk7TUFDeEJBLEtBQUssQ0FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ2tCLE9BQU8sRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNpQixPQUFPLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7QUFDRjtBQUNBO0VBQ0VnQyxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUN2RixLQUFLLENBQUN3RixXQUFXLENBQUMsSUFBSSxDQUFDdkMsS0FBSyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKNkQ7QUFDcEM7QUFFekIsaUVBQWUsTUFBTTtFQUNuQnJELFdBQVdBLENBQUM7SUFBRWlHO0VBQUksQ0FBQyxFQUFFO0lBQ25CLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBRWQsSUFBSSxDQUFDL0MsUUFBUSxHQUFHLElBQUk2Qyx5Q0FBUSxDQUFDO01BQzNCRyxLQUFLLEVBQUUsSUFBSTtNQUNYQyxTQUFTLEVBQUUsSUFBSTtNQUNmQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDckYsTUFBTSxDQUFDc0YsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNyRyxFQUFFLEdBQUcsSUFBSSxDQUFDZ0QsUUFBUSxDQUFDaEQsRUFBRTtJQUMxQixJQUFJLENBQUNBLEVBQUUsQ0FBQ3NHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFOUJqRCxRQUFRLENBQUNrRCxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUN4RyxFQUFFLENBQUN5RyxNQUFNLENBQUM7SUFFekMsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QixJQUFJLENBQUNqRSxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBK0QsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDekQsTUFBTSxHQUFHLElBQUkyQyx1Q0FBTSxDQUFDLElBQUksQ0FBQzVGLEVBQUUsQ0FBQztJQUNqQyxJQUFJLENBQUNpRCxNQUFNLENBQUM0RCxHQUFHLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUM1RCxNQUFNLENBQUNiLFFBQVEsQ0FBQzBFLENBQUMsR0FBRyxDQUFDO0VBQzVCO0VBRUFILFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ3pHLEtBQUssR0FBRyxJQUFJMEMsMENBQVMsQ0FBQyxDQUFDO0VBQzlCO0VBRUFtRSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJbEIsNkNBQUksQ0FBQztNQUFFOUYsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtNQUFFRSxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQUVDLEtBQUssRUFBRSxJQUFJLENBQUM4RztJQUFTLENBQUMsQ0FBQztFQUNoRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRUMsUUFBUUEsQ0FBQ25CLEdBQUcsRUFBRSxDQUFDOztFQUVmO0FBQ0Y7QUFDQTtFQUNFcEQsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDd0UsTUFBTSxHQUFHO01BQ1pyRixNQUFNLEVBQUVmLE1BQU0sQ0FBQ2dCLFdBQVc7TUFDMUJDLEtBQUssRUFBRWpCLE1BQU0sQ0FBQ2tCO0lBQ2hCLENBQUM7SUFFRCxJQUFJLENBQUNlLFFBQVEsQ0FBQ29FLE9BQU8sQ0FBQyxJQUFJLENBQUNELE1BQU0sQ0FBQ25GLEtBQUssRUFBRSxJQUFJLENBQUNtRixNQUFNLENBQUNyRixNQUFNLENBQUM7SUFFNUQsSUFBSSxDQUFDbUIsTUFBTSxDQUFDb0UsV0FBVyxDQUFDO01BQ3RCQyxNQUFNLEVBQUUsSUFBSSxDQUFDdEgsRUFBRSxDQUFDeUcsTUFBTSxDQUFDekUsS0FBSyxHQUFHLElBQUksQ0FBQ2hDLEVBQUUsQ0FBQ3lHLE1BQU0sQ0FBQzNFO0lBQ2hELENBQUMsQ0FBQztJQUVGLE1BQU0rRSxHQUFHLEdBQUcsSUFBSSxDQUFDNUQsTUFBTSxDQUFDNEQsR0FBRyxJQUFJVixJQUFJLENBQUNvQixFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQzdDLE1BQU16RixNQUFNLEdBQUcsQ0FBQyxHQUFHcUUsSUFBSSxDQUFDcUIsR0FBRyxDQUFDWCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDNUQsTUFBTSxDQUFDYixRQUFRLENBQUMwRSxDQUFDO0lBQzdELE1BQU05RSxLQUFLLEdBQUdGLE1BQU0sR0FBRyxJQUFJLENBQUNtQixNQUFNLENBQUNxRSxNQUFNO0lBRXpDLElBQUksQ0FBQ0wsUUFBUSxHQUFHO01BQ2RuRixNQUFNO01BQ05FO0lBQ0YsQ0FBQztJQUVELE1BQU15RixNQUFNLEdBQUc7TUFDYk4sTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtNQUNuQkYsUUFBUSxFQUFFLElBQUksQ0FBQ0E7SUFDakIsQ0FBQztFQUNIO0VBRUFwQyxXQUFXQSxDQUFDTixLQUFLLEVBQUU7SUFDakIsSUFBSSxDQUFDbUQsTUFBTSxHQUFHLElBQUk7SUFFbEIsSUFBSSxDQUFDcEgsQ0FBQyxDQUFDc0QsS0FBSyxHQUFHVyxLQUFLLENBQUNvRCxPQUFPLEdBQUdwRCxLQUFLLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sR0FBR3JELEtBQUssQ0FBQ3FELE9BQU87SUFDdkUsSUFBSSxDQUFDckgsQ0FBQyxDQUFDcUQsS0FBSyxHQUFHVyxLQUFLLENBQUNvRCxPQUFPLEdBQUdwRCxLQUFLLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLE9BQU8sR0FBR3RELEtBQUssQ0FBQ3NELE9BQU87SUFFdkUsTUFBTUosTUFBTSxHQUFHO01BQ2JuSCxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDLENBQUNzRCxLQUFLO01BQ2ZyRCxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDLENBQUNxRDtJQUNaLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ29ELElBQUksRUFBRTtNQUNiLElBQUksQ0FBQ0EsSUFBSSxDQUFDbkMsV0FBVyxDQUFDNEMsTUFBTSxDQUFDO0lBQy9CO0VBQ0Y7RUFFQTNDLFdBQVdBLENBQUNQLEtBQUssRUFBRSxDQUFDO0VBRXBCVSxTQUFTQSxDQUFDVixLQUFLLEVBQUUsQ0FBQzs7RUFFbEI7QUFDRjtBQUNBO0VBQ0VqQyxNQUFNQSxDQUFDd0YsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBRWxCLElBQUksQ0FBQzlFLFFBQVEsQ0FBQytFLE1BQU0sQ0FBQztNQUNuQjdILEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakIrQyxNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDekdBLGlFQUFlLHVCQUF1Qiw4Q0FBOEMsdUJBQXVCLHFCQUFxQixnRUFBZ0UsNkRBQTZELCtDQUErQyx5QkFBeUIsR0FBRyxpQkFBaUIsdURBQXVELDZDQUE2QyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDQW5jLGlFQUFlLDRGQUE0RixvQkFBb0IsaUNBQWlDLGdDQUFnQyx1QkFBdUIscUJBQXFCLCtEQUErRCw0REFBNEQsNERBQTRELHNCQUFzQixHQUFHLGdCQUFnQixlQUFlLGlFQUFpRSxnRkFBZ0YsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNBbG5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV1QztBQUV2QyxNQUFNZ0YsUUFBUSxHQUFHLElBQUlELCtDQUFJLENBQUMsQ0FBQztBQUUzQixJQUFJRSxFQUFFLEdBQUcsQ0FBQztBQUNWLElBQUlDLE9BQU8sR0FBRyxDQUFDOztBQUVmO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEtBQUs7QUFFbkIsTUFBTUMsUUFBUSxDQUFDO0VBQ2xCdkksV0FBV0EsQ0FBQ0UsRUFBRSxFQUFFc0ksVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQzdCLElBQUksQ0FBQ3RJLEVBQUUsQ0FBQ3lHLE1BQU0sRUFBRThCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0lBQzVFLElBQUksQ0FBQ3hJLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ3NJLFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNHLEVBQUUsR0FBR1AsRUFBRSxFQUFFOztJQUVkO0lBQ0EsSUFBSSxDQUFDUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxTQUFTLEdBQUc7TUFBRS9FLEtBQUssRUFBRSxDQUFDO01BQUVnRixLQUFLLEVBQUU7SUFBRSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ0MsY0FBYyxHQUFHLENBQUM7O0lBRXZCO0lBQ0EsSUFBSSxDQUFDN0ksRUFBRSxDQUFDZ0QsUUFBUSxDQUFDOEYsZUFBZSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFJLENBQUM5SSxFQUFFLENBQUNnRCxRQUFRLENBQUMrRixlQUFlLEdBQUcsSUFBSTs7SUFFdkM7SUFDQSxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNoSixFQUFFLENBQUNnRCxRQUFRLENBQUNpRyxLQUFLOztJQUVyQztJQUNBLEtBQUssSUFBSUMsR0FBRyxJQUFJWixVQUFVLEVBQUU7TUFDeEIsSUFBSSxDQUFDYSxZQUFZLENBQUNELEdBQUcsRUFBRVosVUFBVSxDQUFDWSxHQUFHLENBQUMsQ0FBQztJQUMzQztFQUNKO0VBRUFDLFlBQVlBLENBQUNELEdBQUcsRUFBRUUsSUFBSSxFQUFFO0lBQ3BCLElBQUksQ0FBQ2QsVUFBVSxDQUFDWSxHQUFHLENBQUMsR0FBR0UsSUFBSTs7SUFFM0I7SUFDQUEsSUFBSSxDQUFDWCxFQUFFLEdBQUdOLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckJpQixJQUFJLENBQUNDLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFJLElBQUksQ0FBQztJQUMxQkQsSUFBSSxDQUFDRSxJQUFJLEdBQ0xGLElBQUksQ0FBQ0UsSUFBSSxLQUNSRixJQUFJLENBQUNHLElBQUksQ0FBQ3pKLFdBQVcsS0FBSzBKLFlBQVksR0FDakMsSUFBSSxDQUFDeEosRUFBRSxDQUFDeUosS0FBSyxHQUNiTCxJQUFJLENBQUNHLElBQUksQ0FBQ3pKLFdBQVcsS0FBSzRKLFdBQVcsR0FDckMsSUFBSSxDQUFDMUosRUFBRSxDQUFDMkosY0FBYyxHQUN0QixJQUFJLENBQUMzSixFQUFFLENBQUM0SixZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pDUixJQUFJLENBQUMxRixNQUFNLEdBQUd3RixHQUFHLEtBQUssT0FBTyxHQUFHLElBQUksQ0FBQ2xKLEVBQUUsQ0FBQzZKLG9CQUFvQixHQUFHLElBQUksQ0FBQzdKLEVBQUUsQ0FBQzhKLFlBQVk7SUFDbkZWLElBQUksQ0FBQ1csVUFBVSxHQUFHWCxJQUFJLENBQUNXLFVBQVUsSUFBSSxLQUFLO0lBQzFDWCxJQUFJLENBQUNZLE1BQU0sR0FBR1osSUFBSSxDQUFDWSxNQUFNLElBQUksQ0FBQztJQUM5QlosSUFBSSxDQUFDMUcsTUFBTSxHQUFHMEcsSUFBSSxDQUFDMUcsTUFBTSxJQUFJLENBQUM7SUFDOUIwRyxJQUFJLENBQUNSLEtBQUssR0FBR1EsSUFBSSxDQUFDUixLQUFLLEtBQUtRLElBQUksQ0FBQ1ksTUFBTSxHQUFHWixJQUFJLENBQUNHLElBQUksQ0FBQ1UsVUFBVSxHQUFHYixJQUFJLENBQUNZLE1BQU0sR0FBR1osSUFBSSxDQUFDRyxJQUFJLENBQUNXLE1BQU0sR0FBR2QsSUFBSSxDQUFDQyxJQUFJLENBQUM7SUFDNUdELElBQUksQ0FBQ2UsT0FBTyxHQUFHZixJQUFJLENBQUNnQixTQUFTLElBQUksQ0FBQztJQUNsQ2hCLElBQUksQ0FBQ2lCLFdBQVcsR0FBRyxLQUFLO0lBQ3hCakIsSUFBSSxDQUFDa0IsS0FBSyxHQUFHbEIsSUFBSSxDQUFDa0IsS0FBSyxJQUFJLElBQUksQ0FBQ3RLLEVBQUUsQ0FBQ3VLLFdBQVc7SUFFOUMsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsTUFBTSxFQUFFO01BQ2Q7TUFDQSxJQUFJLENBQUNDLGVBQWUsQ0FBQ3JCLElBQUksQ0FBQztJQUM5Qjs7SUFFQTtJQUNBLElBQUlBLElBQUksQ0FBQ2UsT0FBTyxFQUFFO01BQ2QsSUFBSSxDQUFDTyxXQUFXLEdBQUcsSUFBSTtNQUN2QixJQUFJLElBQUksQ0FBQzdCLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsS0FBS08sSUFBSSxDQUFDUixLQUFLLEdBQUdRLElBQUksQ0FBQ2UsT0FBTyxFQUFFO1FBQzFFNUIsT0FBTyxDQUFDb0MsSUFBSSxDQUFDLDZEQUE2RCxDQUFDO1FBQzNFLE9BQVEsSUFBSSxDQUFDOUIsY0FBYyxHQUFHMUMsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDeUMsY0FBYyxFQUFFTyxJQUFJLENBQUNSLEtBQUssR0FBR1EsSUFBSSxDQUFDZSxPQUFPLENBQUM7TUFDMUY7TUFDQSxJQUFJLENBQUN0QixjQUFjLEdBQUdPLElBQUksQ0FBQ1IsS0FBSyxHQUFHUSxJQUFJLENBQUNlLE9BQU87SUFDbkQsQ0FBQyxNQUFNLElBQUlqQixHQUFHLEtBQUssT0FBTyxFQUFFO01BQ3hCLElBQUksQ0FBQ1AsU0FBUyxDQUFDQyxLQUFLLEdBQUdRLElBQUksQ0FBQ1IsS0FBSztJQUNyQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ04sVUFBVSxDQUFDakUsS0FBSyxFQUFFO01BQy9CLElBQUksQ0FBQ3NFLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHekMsSUFBSSxDQUFDeUUsR0FBRyxDQUFDLElBQUksQ0FBQ2pDLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFUSxJQUFJLENBQUNSLEtBQUssQ0FBQztJQUNyRTtFQUNKO0VBRUE2QixlQUFlQSxDQUFDckIsSUFBSSxFQUFFO0lBQ2xCLE1BQU15QixXQUFXLEdBQUcsQ0FBQ3pCLElBQUksQ0FBQ29CLE1BQU07SUFDaEMsSUFBSUssV0FBVyxFQUFFekIsSUFBSSxDQUFDb0IsTUFBTSxHQUFHLElBQUksQ0FBQ3hLLEVBQUUsQ0FBQzhLLFlBQVksQ0FBQyxDQUFDO0lBQ3JELElBQUksSUFBSSxDQUFDOUIsT0FBTyxDQUFDK0IsV0FBVyxLQUFLM0IsSUFBSSxDQUFDb0IsTUFBTSxFQUFFO01BQzFDLElBQUksQ0FBQ3hLLEVBQUUsQ0FBQ2dMLFVBQVUsQ0FBQzVCLElBQUksQ0FBQzFGLE1BQU0sRUFBRTBGLElBQUksQ0FBQ29CLE1BQU0sQ0FBQztNQUM1QyxJQUFJLENBQUN4QixPQUFPLENBQUMrQixXQUFXLEdBQUczQixJQUFJLENBQUNvQixNQUFNO0lBQzFDO0lBQ0EsSUFBSUssV0FBVyxFQUFFO01BQ2IsSUFBSSxDQUFDN0ssRUFBRSxDQUFDaUwsVUFBVSxDQUFDN0IsSUFBSSxDQUFDMUYsTUFBTSxFQUFFMEYsSUFBSSxDQUFDRyxJQUFJLEVBQUVILElBQUksQ0FBQ2tCLEtBQUssQ0FBQztJQUMxRCxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUN0SyxFQUFFLENBQUNrTCxhQUFhLENBQUM5QixJQUFJLENBQUMxRixNQUFNLEVBQUUsQ0FBQyxFQUFFMEYsSUFBSSxDQUFDRyxJQUFJLENBQUM7SUFDcEQ7SUFDQUgsSUFBSSxDQUFDaUIsV0FBVyxHQUFHLEtBQUs7RUFDNUI7RUFFQWMsUUFBUUEsQ0FBQzlKLEtBQUssRUFBRTtJQUNaLElBQUksQ0FBQzhILFlBQVksQ0FBQyxPQUFPLEVBQUU5SCxLQUFLLENBQUM7RUFDckM7RUFFQStKLFlBQVlBLENBQUN4SCxLQUFLLEVBQUVnRixLQUFLLEVBQUU7SUFDdkIsSUFBSSxDQUFDRCxTQUFTLENBQUMvRSxLQUFLLEdBQUdBLEtBQUs7SUFDNUIsSUFBSSxDQUFDK0UsU0FBUyxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDaEM7RUFFQXlDLGlCQUFpQkEsQ0FBQ2hLLEtBQUssRUFBRTtJQUNyQixJQUFJLENBQUN3SCxjQUFjLEdBQUd4SCxLQUFLO0VBQy9CO0VBRUFpSyxTQUFTQSxDQUFDcEssT0FBTyxFQUFFO0lBQ2YsSUFBSSxDQUFDd0gsSUFBSSxDQUFDeEgsT0FBTyxDQUFDcUssY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDdkwsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDd0ksaUJBQWlCLENBQUMsQ0FBQztJQUN4RSxJQUFJLENBQUN4TCxFQUFFLENBQUNnRCxRQUFRLENBQUM4RixlQUFlLENBQUMsSUFBSSxDQUFDSixJQUFJLENBQUN4SCxPQUFPLENBQUNxSyxjQUFjLENBQUMsQ0FBQztJQUNuRSxJQUFJLENBQUNFLGNBQWMsQ0FBQ3ZLLE9BQU8sQ0FBQztFQUNoQztFQUVBdUssY0FBY0EsQ0FBQ3ZLLE9BQU8sRUFBRTtJQUNwQjtJQUNBQSxPQUFPLENBQUN3SyxrQkFBa0IsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLFFBQVEsRUFBRTtNQUFFQyxJQUFJO01BQUV2QztJQUFLLENBQUMsS0FBSztNQUM3RDtNQUNBLElBQUksQ0FBQyxJQUFJLENBQUNoQixVQUFVLENBQUN1RCxJQUFJLENBQUMsRUFBRTtRQUN4QnRELE9BQU8sQ0FBQ29DLElBQUksQ0FBRSxvQkFBbUJrQixJQUFLLHFCQUFvQixDQUFDO1FBQzNEO01BQ0o7TUFFQSxNQUFNekMsSUFBSSxHQUFHLElBQUksQ0FBQ2QsVUFBVSxDQUFDdUQsSUFBSSxDQUFDO01BRWxDLElBQUksQ0FBQzdMLEVBQUUsQ0FBQ2dMLFVBQVUsQ0FBQzVCLElBQUksQ0FBQzFGLE1BQU0sRUFBRTBGLElBQUksQ0FBQ29CLE1BQU0sQ0FBQztNQUM1QyxJQUFJLENBQUN4QixPQUFPLENBQUMrQixXQUFXLEdBQUczQixJQUFJLENBQUNvQixNQUFNOztNQUV0QztNQUNBLElBQUlzQixNQUFNLEdBQUcsQ0FBQztNQUNkLElBQUl4QyxJQUFJLEtBQUssS0FBSyxFQUFFd0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2hDLElBQUl4QyxJQUFJLEtBQUssS0FBSyxFQUFFd0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2hDLElBQUl4QyxJQUFJLEtBQUssS0FBSyxFQUFFd0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztNQUVoQyxNQUFNekMsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQUksR0FBR3lDLE1BQU07TUFDL0IsTUFBTTlCLE1BQU0sR0FBRzhCLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxNQUFNLEdBQUdBLE1BQU0sR0FBRyxDQUFDO01BQ3JELE1BQU1wSixNQUFNLEdBQUdvSixNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0EsTUFBTSxHQUFHLENBQUM7TUFFNUMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxDQUFDL0wsRUFBRSxDQUFDZ00sbUJBQW1CLENBQUNKLFFBQVEsR0FBR0csQ0FBQyxFQUFFMUMsSUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQUksRUFBRUYsSUFBSSxDQUFDVyxVQUFVLEVBQUVYLElBQUksQ0FBQ1ksTUFBTSxHQUFHQSxNQUFNLEVBQUVaLElBQUksQ0FBQzFHLE1BQU0sR0FBR3FKLENBQUMsR0FBR3JKLE1BQU0sQ0FBQztRQUMzSCxJQUFJLENBQUMxQyxFQUFFLENBQUNpTSx1QkFBdUIsQ0FBQ0wsUUFBUSxHQUFHRyxDQUFDLENBQUM7O1FBRTdDO1FBQ0E7UUFDQSxJQUFJLENBQUMvTCxFQUFFLENBQUNnRCxRQUFRLENBQUNrSixtQkFBbUIsQ0FBQ04sUUFBUSxHQUFHRyxDQUFDLEVBQUUzQyxJQUFJLENBQUNlLE9BQU8sQ0FBQztNQUNwRTtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksSUFBSSxDQUFDN0IsVUFBVSxDQUFDakUsS0FBSyxFQUFFLElBQUksQ0FBQ3JFLEVBQUUsQ0FBQ2dMLFVBQVUsQ0FBQyxJQUFJLENBQUNoTCxFQUFFLENBQUM2SixvQkFBb0IsRUFBRSxJQUFJLENBQUN2QixVQUFVLENBQUNqRSxLQUFLLENBQUNtRyxNQUFNLENBQUM7RUFDN0c7RUFFQTJCLElBQUlBLENBQUM7SUFBRWpMLE9BQU87SUFBRWtMLElBQUksR0FBRyxJQUFJLENBQUNwTSxFQUFFLENBQUNxTTtFQUFVLENBQUMsRUFBRTtJQUN4QyxJQUFJLElBQUksQ0FBQ3JNLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQytGLGVBQWUsS0FBTSxHQUFFLElBQUksQ0FBQ04sRUFBRyxJQUFHdkgsT0FBTyxDQUFDcUssY0FBZSxFQUFDLEVBQUU7TUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQzdDLElBQUksQ0FBQ3hILE9BQU8sQ0FBQ3FLLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0QsU0FBUyxDQUFDcEssT0FBTyxDQUFDO01BQy9ELElBQUksQ0FBQ2xCLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQzhGLGVBQWUsQ0FBQyxJQUFJLENBQUNKLElBQUksQ0FBQ3hILE9BQU8sQ0FBQ3FLLGNBQWMsQ0FBQyxDQUFDO01BQ25FLElBQUksQ0FBQ3ZMLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQytGLGVBQWUsR0FBSSxHQUFFLElBQUksQ0FBQ04sRUFBRyxJQUFHdkgsT0FBTyxDQUFDcUssY0FBZSxFQUFDO0lBQzdFOztJQUVBO0lBQ0FySyxPQUFPLENBQUN3SyxrQkFBa0IsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLFFBQVEsRUFBRTtNQUFFQztJQUFLLENBQUMsS0FBSztNQUN2RCxNQUFNekMsSUFBSSxHQUFHLElBQUksQ0FBQ2QsVUFBVSxDQUFDdUQsSUFBSSxDQUFDO01BQ2xDLElBQUl6QyxJQUFJLENBQUNpQixXQUFXLEVBQUUsSUFBSSxDQUFDSSxlQUFlLENBQUNyQixJQUFJLENBQUM7SUFDcEQsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSWtELG9CQUFvQixHQUFHLENBQUM7SUFDNUIsSUFBSSxJQUFJLENBQUNoRSxVQUFVLENBQUNqRSxLQUFLLEVBQUVpRixJQUFJLEtBQUssSUFBSSxDQUFDdEosRUFBRSxDQUFDNEosWUFBWSxFQUFFMEMsb0JBQW9CLEdBQUcsQ0FBQztJQUVsRixJQUFJLElBQUksQ0FBQzVCLFdBQVcsRUFBRTtNQUNsQixJQUFJLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ2pFLEtBQUssRUFBRTtRQUN2QixJQUFJLENBQUNyRSxFQUFFLENBQUNnRCxRQUFRLENBQUN1SixxQkFBcUIsQ0FDbENILElBQUksRUFDSixJQUFJLENBQUN6RCxTQUFTLENBQUNDLEtBQUssRUFDcEIsSUFBSSxDQUFDTixVQUFVLENBQUNqRSxLQUFLLENBQUNpRixJQUFJLEVBQzFCLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2pFLEtBQUssQ0FBQzNCLE1BQU0sR0FBRyxJQUFJLENBQUNpRyxTQUFTLENBQUMvRSxLQUFLLEdBQUcwSSxvQkFBb0IsRUFDMUUsSUFBSSxDQUFDekQsY0FDVCxDQUFDO01BQ0wsQ0FBQyxNQUFNO1FBQ0gsSUFBSSxDQUFDN0ksRUFBRSxDQUFDZ0QsUUFBUSxDQUFDd0osbUJBQW1CLENBQUNKLElBQUksRUFBRSxJQUFJLENBQUN6RCxTQUFTLENBQUMvRSxLQUFLLEVBQUUsSUFBSSxDQUFDK0UsU0FBUyxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUM7TUFDL0c7SUFDSixDQUFDLE1BQU07TUFDSCxJQUFJLElBQUksQ0FBQ1AsVUFBVSxDQUFDakUsS0FBSyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ3JFLEVBQUUsQ0FBQ3lNLFlBQVksQ0FDaEJMLElBQUksRUFDSixJQUFJLENBQUN6RCxTQUFTLENBQUNDLEtBQUssRUFDcEIsSUFBSSxDQUFDTixVQUFVLENBQUNqRSxLQUFLLENBQUNpRixJQUFJLEVBQzFCLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2pFLEtBQUssQ0FBQzNCLE1BQU0sR0FBRyxJQUFJLENBQUNpRyxTQUFTLENBQUMvRSxLQUFLLEdBQUcwSSxvQkFDMUQsQ0FBQztNQUNMLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQ3RNLEVBQUUsQ0FBQzBNLFVBQVUsQ0FBQ04sSUFBSSxFQUFFLElBQUksQ0FBQ3pELFNBQVMsQ0FBQy9FLEtBQUssRUFBRSxJQUFJLENBQUMrRSxTQUFTLENBQUNDLEtBQUssQ0FBQztNQUN4RTtJQUNKO0VBQ0o7RUFFQStELFdBQVdBLENBQUEsRUFBRztJQUNWO0lBQ0EsTUFBTXZELElBQUksR0FBRyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2xHLFFBQVE7SUFDckM7SUFDQSxJQUFJZ0gsSUFBSSxDQUFDRyxJQUFJLEVBQUUsT0FBT0gsSUFBSTtJQUMxQixJQUFJaEIsY0FBYyxFQUFFO0lBQ3BCRyxPQUFPLENBQUNvQyxJQUFJLENBQUMsaURBQWlELENBQUM7SUFDL0QsT0FBUXZDLGNBQWMsR0FBRyxJQUFJO0VBQ2pDO0VBRUF3RSxrQkFBa0JBLENBQUN4RCxJQUFJLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxJQUFJLEVBQUVBLElBQUksR0FBRyxJQUFJLENBQUN1RCxXQUFXLENBQUMsQ0FBQztJQUNwQyxNQUFNRSxLQUFLLEdBQUd6RCxJQUFJLENBQUNHLElBQUk7SUFDdkI7SUFDQTtJQUNBLE1BQU1TLE1BQU0sR0FBR1osSUFBSSxDQUFDQyxJQUFJO0lBRXhCLElBQUksQ0FBQyxJQUFJLENBQUM1SCxNQUFNLEVBQUU7TUFDZCxJQUFJLENBQUNBLE1BQU0sR0FBRztRQUNWMkUsR0FBRyxFQUFFLElBQUk0QiwrQ0FBSSxDQUFDLENBQUM7UUFDZjRDLEdBQUcsRUFBRSxJQUFJNUMsK0NBQUksQ0FBQyxDQUFDO1FBQ2Y4RSxNQUFNLEVBQUUsSUFBSTlFLCtDQUFJLENBQUMsQ0FBQztRQUNsQjlGLEtBQUssRUFBRSxJQUFJOEYsK0NBQUksQ0FBQyxDQUFDO1FBQ2pCK0UsTUFBTSxFQUFFQztNQUNaLENBQUM7SUFDTDtJQUVBLE1BQU01RyxHQUFHLEdBQUcsSUFBSSxDQUFDM0UsTUFBTSxDQUFDMkUsR0FBRztJQUMzQixNQUFNd0UsR0FBRyxHQUFHLElBQUksQ0FBQ25KLE1BQU0sQ0FBQ21KLEdBQUc7SUFDM0IsTUFBTWtDLE1BQU0sR0FBRyxJQUFJLENBQUNyTCxNQUFNLENBQUNxTCxNQUFNO0lBQ2pDLE1BQU01SyxLQUFLLEdBQUcsSUFBSSxDQUFDVCxNQUFNLENBQUNTLEtBQUs7SUFFL0JrRSxHQUFHLENBQUM2RyxHQUFHLENBQUMsQ0FBQ0QsUUFBUSxDQUFDO0lBQ2xCcEMsR0FBRyxDQUFDcUMsR0FBRyxDQUFDLENBQUNELFFBQVEsQ0FBQzs7SUFFbEI7SUFDQSxLQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBQyxFQUFFbUIsQ0FBQyxHQUFHTCxLQUFLLENBQUMzQyxNQUFNLEVBQUU2QixDQUFDLEdBQUdtQixDQUFDLEVBQUVuQixDQUFDLElBQUkvQixNQUFNLEVBQUU7TUFDbEQsTUFBTTFKLENBQUMsR0FBR3VNLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDO01BQ2xCLE1BQU14TCxDQUFDLEdBQUdzTSxLQUFLLENBQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDdEIsTUFBTWpGLENBQUMsR0FBRytGLEtBQUssQ0FBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUV0QjNGLEdBQUcsQ0FBQzlGLENBQUMsR0FBRzZGLElBQUksQ0FBQ0MsR0FBRyxDQUFDOUYsQ0FBQyxFQUFFOEYsR0FBRyxDQUFDOUYsQ0FBQyxDQUFDO01BQzFCOEYsR0FBRyxDQUFDN0YsQ0FBQyxHQUFHNEYsSUFBSSxDQUFDQyxHQUFHLENBQUM3RixDQUFDLEVBQUU2RixHQUFHLENBQUM3RixDQUFDLENBQUM7TUFDMUI2RixHQUFHLENBQUNVLENBQUMsR0FBR1gsSUFBSSxDQUFDQyxHQUFHLENBQUNVLENBQUMsRUFBRVYsR0FBRyxDQUFDVSxDQUFDLENBQUM7TUFFMUI4RCxHQUFHLENBQUN0SyxDQUFDLEdBQUc2RixJQUFJLENBQUN5RSxHQUFHLENBQUN0SyxDQUFDLEVBQUVzSyxHQUFHLENBQUN0SyxDQUFDLENBQUM7TUFDMUJzSyxHQUFHLENBQUNySyxDQUFDLEdBQUc0RixJQUFJLENBQUN5RSxHQUFHLENBQUNySyxDQUFDLEVBQUVxSyxHQUFHLENBQUNySyxDQUFDLENBQUM7TUFDMUJxSyxHQUFHLENBQUM5RCxDQUFDLEdBQUdYLElBQUksQ0FBQ3lFLEdBQUcsQ0FBQzlELENBQUMsRUFBRThELEdBQUcsQ0FBQzlELENBQUMsQ0FBQztJQUM5QjtJQUVBNUUsS0FBSyxDQUFDaUwsR0FBRyxDQUFDdkMsR0FBRyxFQUFFeEUsR0FBRyxDQUFDO0lBQ25CMEcsTUFBTSxDQUFDTSxHQUFHLENBQUNoSCxHQUFHLEVBQUV3RSxHQUFHLENBQUMsQ0FBQ3lDLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDbEM7RUFFQUMscUJBQXFCQSxDQUFDbEUsSUFBSSxFQUFFO0lBQ3hCLElBQUksQ0FBQ0EsSUFBSSxFQUFFQSxJQUFJLEdBQUcsSUFBSSxDQUFDdUQsV0FBVyxDQUFDLENBQUM7SUFDcEMsTUFBTUUsS0FBSyxHQUFHekQsSUFBSSxDQUFDRyxJQUFJO0lBQ3ZCO0lBQ0E7SUFDQSxNQUFNUyxNQUFNLEdBQUdaLElBQUksQ0FBQ0MsSUFBSTtJQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDNUgsTUFBTSxFQUFFLElBQUksQ0FBQ21MLGtCQUFrQixDQUFDeEQsSUFBSSxDQUFDO0lBRS9DLElBQUltRSxXQUFXLEdBQUcsQ0FBQztJQUNuQixLQUFLLElBQUl4QixDQUFDLEdBQUcsQ0FBQyxFQUFFbUIsQ0FBQyxHQUFHTCxLQUFLLENBQUMzQyxNQUFNLEVBQUU2QixDQUFDLEdBQUdtQixDQUFDLEVBQUVuQixDQUFDLElBQUkvQixNQUFNLEVBQUU7TUFDbEQvQixRQUFRLENBQUN1RixTQUFTLENBQUNYLEtBQUssRUFBRWQsQ0FBQyxDQUFDO01BQzVCd0IsV0FBVyxHQUFHcEgsSUFBSSxDQUFDeUUsR0FBRyxDQUFDMkMsV0FBVyxFQUFFLElBQUksQ0FBQzlMLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQ1csZUFBZSxDQUFDeEYsUUFBUSxDQUFDLENBQUM7SUFDckY7SUFFQSxJQUFJLENBQUN4RyxNQUFNLENBQUNzTCxNQUFNLEdBQUc1RyxJQUFJLENBQUN1SCxJQUFJLENBQUNILFdBQVcsQ0FBQztFQUMvQztFQUVBSSxNQUFNQSxDQUFBLEVBQUc7SUFDTCxLQUFLLElBQUl6RSxHQUFHLElBQUksSUFBSSxDQUFDUixJQUFJLEVBQUU7TUFDdkIsSUFBSSxDQUFDMUksRUFBRSxDQUFDZ0QsUUFBUSxDQUFDNEssaUJBQWlCLENBQUMsSUFBSSxDQUFDbEYsSUFBSSxDQUFDUSxHQUFHLENBQUMsQ0FBQztNQUNsRCxPQUFPLElBQUksQ0FBQ1IsSUFBSSxDQUFDUSxHQUFHLENBQUM7SUFDekI7SUFDQSxLQUFLLElBQUlBLEdBQUcsSUFBSSxJQUFJLENBQUNaLFVBQVUsRUFBRTtNQUM3QixJQUFJLENBQUN0SSxFQUFFLENBQUM2TixZQUFZLENBQUMsSUFBSSxDQUFDdkYsVUFBVSxDQUFDWSxHQUFHLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNqRCxPQUFPLElBQUksQ0FBQ2xDLFVBQVUsQ0FBQ1ksR0FBRyxDQUFDO0lBQy9CO0VBQ0o7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUzJDO0FBQ0o7QUFDQTtBQUV2QyxJQUFJaEIsRUFBRSxHQUFHLENBQUM7QUFFSCxNQUFNekksSUFBSSxTQUFTbUQsb0RBQVMsQ0FBQztFQUNoQzlDLFdBQVdBLENBQUNFLEVBQUUsRUFBRTtJQUFFQyxRQUFRO0lBQUVpQixPQUFPO0lBQUVrTCxJQUFJLEdBQUdwTSxFQUFFLENBQUNxTSxTQUFTO0lBQUUyQixhQUFhLEdBQUcsSUFBSTtJQUFFQyxXQUFXLEdBQUc7RUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDcEcsS0FBSyxDQUFDLENBQUM7SUFDUCxJQUFJLENBQUNqTyxFQUFFLENBQUN5RyxNQUFNLEVBQUU4QixPQUFPLENBQUNDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztJQUN4RSxJQUFJLENBQUN4SSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUN5SSxFQUFFLEdBQUdQLEVBQUUsRUFBRTtJQUNkLElBQUksQ0FBQ2pJLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNpQixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDa0wsSUFBSSxHQUFHQSxJQUFJOztJQUVoQjtJQUNBLElBQUksQ0FBQzRCLGFBQWEsR0FBR0EsYUFBYTs7SUFFbEM7SUFDQSxJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLGVBQWUsR0FBRyxJQUFJSCwrQ0FBSSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDSSxZQUFZLEdBQUcsSUFBSUwsK0NBQUksQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQ00scUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUNDLG9CQUFvQixHQUFHLEVBQUU7RUFDbEM7RUFFQUMsY0FBY0EsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2QsSUFBSSxDQUFDSCxxQkFBcUIsQ0FBQ0ksSUFBSSxDQUFDRCxDQUFDLENBQUM7SUFDbEMsT0FBTyxJQUFJO0VBQ2Y7RUFFQUUsYUFBYUEsQ0FBQ0YsQ0FBQyxFQUFFO0lBQ2IsSUFBSSxDQUFDRixvQkFBb0IsQ0FBQ0csSUFBSSxDQUFDRCxDQUFDLENBQUM7SUFDakMsT0FBTyxJQUFJO0VBQ2Y7RUFFQXBDLElBQUlBLENBQUM7SUFBRWxKO0VBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ2xCLElBQUlBLE1BQU0sRUFBRTtNQUNSO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQy9CLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDdU4sV0FBVyxFQUFFO1FBQ3BDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMxTixPQUFPLENBQUNDLFFBQVEsRUFBRTtVQUNqQ3VOLFdBQVcsRUFBRTtZQUFFck4sS0FBSyxFQUFFO1VBQUssQ0FBQztVQUM1QndOLFVBQVUsRUFBRTtZQUFFeE4sS0FBSyxFQUFFO1VBQUssQ0FBQztVQUMzQjZNLGVBQWUsRUFBRTtZQUFFN00sS0FBSyxFQUFFO1VBQUssQ0FBQztVQUNoQzhNLFlBQVksRUFBRTtZQUFFOU0sS0FBSyxFQUFFO1VBQUssQ0FBQztVQUM3QnlOLGdCQUFnQixFQUFFO1lBQUV6TixLQUFLLEVBQUU7VUFBSyxDQUFDO1VBQ2pDME4sY0FBYyxFQUFFO1lBQUUxTixLQUFLLEVBQUU7VUFBSztRQUNsQyxDQUFDLENBQUM7TUFDTjs7TUFFQTtNQUNBLElBQUksQ0FBQ0gsT0FBTyxDQUFDQyxRQUFRLENBQUMyTixnQkFBZ0IsQ0FBQ3pOLEtBQUssR0FBRzRCLE1BQU0sQ0FBQzZMLGdCQUFnQjtNQUN0RSxJQUFJLENBQUM1TixPQUFPLENBQUNDLFFBQVEsQ0FBQzROLGNBQWMsQ0FBQzFOLEtBQUssR0FBRzRCLE1BQU0sQ0FBQytMLGFBQWE7TUFDakUsSUFBSSxDQUFDOU4sT0FBTyxDQUFDQyxRQUFRLENBQUMwTixVQUFVLENBQUN4TixLQUFLLEdBQUc0QixNQUFNLENBQUM0TCxVQUFVO01BQzFELElBQUksQ0FBQ1gsZUFBZSxDQUFDZSxRQUFRLENBQUNoTSxNQUFNLENBQUM0TCxVQUFVLEVBQUUsSUFBSSxDQUFDSyxXQUFXLENBQUM7TUFDbEUsSUFBSSxDQUFDZixZQUFZLENBQUNnQixlQUFlLENBQUMsSUFBSSxDQUFDakIsZUFBZSxDQUFDO01BQ3ZELElBQUksQ0FBQ2hOLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDdU4sV0FBVyxDQUFDck4sS0FBSyxHQUFHLElBQUksQ0FBQzZOLFdBQVc7TUFDMUQsSUFBSSxDQUFDaE8sT0FBTyxDQUFDQyxRQUFRLENBQUMrTSxlQUFlLENBQUM3TSxLQUFLLEdBQUcsSUFBSSxDQUFDNk0sZUFBZTtNQUNsRSxJQUFJLENBQUNoTixPQUFPLENBQUNDLFFBQVEsQ0FBQ2dOLFlBQVksQ0FBQzlNLEtBQUssR0FBRyxJQUFJLENBQUM4TSxZQUFZO0lBQ2hFO0lBQ0EsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ3pDLE9BQU8sQ0FBRTRDLENBQUMsSUFBS0EsQ0FBQyxJQUFJQSxDQUFDLENBQUM7TUFBRWhOLElBQUksRUFBRSxJQUFJO01BQUUwQjtJQUFPLENBQUMsQ0FBQyxDQUFDOztJQUV6RTtJQUNBLElBQUltTSxTQUFTLEdBQUcsSUFBSSxDQUFDbE8sT0FBTyxDQUFDbU8sUUFBUSxJQUFJLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0UsSUFBSSxDQUFDcE8sT0FBTyxDQUFDcU8sR0FBRyxDQUFDO01BQUVIO0lBQVUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ25QLFFBQVEsQ0FBQ2tNLElBQUksQ0FBQztNQUFFQyxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO01BQUVsTCxPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUFRLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUNtTixvQkFBb0IsQ0FBQzFDLE9BQU8sQ0FBRTRDLENBQUMsSUFBS0EsQ0FBQyxJQUFJQSxDQUFDLENBQUM7TUFBRWhOLElBQUksRUFBRSxJQUFJO01BQUUwQjtJQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzVFO0FBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJaUYsRUFBRSxHQUFHLENBQUM7O0FBRVY7QUFDQSxNQUFNc0gsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUVqQixNQUFNOVAsT0FBTyxDQUFDO0VBQ2pCSSxXQUFXQSxDQUNQRSxFQUFFLEVBQ0Y7SUFDSUosTUFBTTtJQUNOQyxRQUFRO0lBQ1JzQixRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWJzTyxXQUFXLEdBQUcsS0FBSztJQUNuQkosUUFBUSxHQUFHclAsRUFBRSxDQUFDMFAsSUFBSTtJQUNsQkMsU0FBUyxHQUFHM1AsRUFBRSxDQUFDNFAsR0FBRztJQUNsQkMsU0FBUyxHQUFHLElBQUk7SUFDaEJDLFVBQVUsR0FBRyxJQUFJO0lBQ2pCQyxTQUFTLEdBQUcvUCxFQUFFLENBQUNnUTtFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1I7SUFDRSxJQUFJLENBQUNoUSxFQUFFLENBQUN5RyxNQUFNLEVBQUU4QixPQUFPLENBQUNDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUMzRSxJQUFJLENBQUN4SSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNtQixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDc0gsRUFBRSxHQUFHUCxFQUFFLEVBQUU7SUFFZCxJQUFJLENBQUN0SSxNQUFNLEVBQUUySSxPQUFPLENBQUNvQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDdkQsSUFBSSxDQUFDOUssUUFBUSxFQUFFMEksT0FBTyxDQUFDb0MsSUFBSSxDQUFDLDhCQUE4QixDQUFDOztJQUUzRDtJQUNBLElBQUksQ0FBQzhFLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNKLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNNLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNFLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNFLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztJQUV2QjtJQUNBLElBQUksSUFBSSxDQUFDVCxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUNRLFNBQVMsQ0FBQ0UsR0FBRyxFQUFFO01BQ3pDLElBQUksSUFBSSxDQUFDblEsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDb04sa0JBQWtCLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDclEsRUFBRSxDQUFDc1EsR0FBRyxFQUFFLElBQUksQ0FBQ3RRLEVBQUUsQ0FBQ3VRLG1CQUFtQixDQUFDLENBQUMsS0FDaEcsSUFBSSxDQUFDRixZQUFZLENBQUMsSUFBSSxDQUFDclEsRUFBRSxDQUFDd1EsU0FBUyxFQUFFLElBQUksQ0FBQ3hRLEVBQUUsQ0FBQ3VRLG1CQUFtQixDQUFDO0lBQzFFOztJQUVBO0lBQ0EsTUFBTUUsWUFBWSxHQUFHelEsRUFBRSxDQUFDMFEsWUFBWSxDQUFDMVEsRUFBRSxDQUFDMlEsYUFBYSxDQUFDO0lBQ3REM1EsRUFBRSxDQUFDNFEsWUFBWSxDQUFDSCxZQUFZLEVBQUU3USxNQUFNLENBQUM7SUFDckNJLEVBQUUsQ0FBQzZRLGFBQWEsQ0FBQ0osWUFBWSxDQUFDO0lBQzlCLElBQUl6USxFQUFFLENBQUM4USxnQkFBZ0IsQ0FBQ0wsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFO01BQzFDbEksT0FBTyxDQUFDb0MsSUFBSSxDQUFFLEdBQUUzSyxFQUFFLENBQUM4USxnQkFBZ0IsQ0FBQ0wsWUFBWSxDQUFFLG9CQUFtQk0sY0FBYyxDQUFDblIsTUFBTSxDQUFFLEVBQUMsQ0FBQztJQUNsRzs7SUFFQTtJQUNBLE1BQU1vUixjQUFjLEdBQUdoUixFQUFFLENBQUMwUSxZQUFZLENBQUMxUSxFQUFFLENBQUNpUixlQUFlLENBQUM7SUFDMURqUixFQUFFLENBQUM0USxZQUFZLENBQUNJLGNBQWMsRUFBRW5SLFFBQVEsQ0FBQztJQUN6Q0csRUFBRSxDQUFDNlEsYUFBYSxDQUFDRyxjQUFjLENBQUM7SUFDaEMsSUFBSWhSLEVBQUUsQ0FBQzhRLGdCQUFnQixDQUFDRSxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUU7TUFDNUN6SSxPQUFPLENBQUNvQyxJQUFJLENBQUUsR0FBRTNLLEVBQUUsQ0FBQzhRLGdCQUFnQixDQUFDRSxjQUFjLENBQUUsc0JBQXFCRCxjQUFjLENBQUNsUixRQUFRLENBQUUsRUFBQyxDQUFDO0lBQ3hHOztJQUVBO0lBQ0EsSUFBSSxDQUFDcUIsT0FBTyxHQUFHbEIsRUFBRSxDQUFDUyxhQUFhLENBQUMsQ0FBQztJQUNqQ1QsRUFBRSxDQUFDa1IsWUFBWSxDQUFDLElBQUksQ0FBQ2hRLE9BQU8sRUFBRXVQLFlBQVksQ0FBQztJQUMzQ3pRLEVBQUUsQ0FBQ2tSLFlBQVksQ0FBQyxJQUFJLENBQUNoUSxPQUFPLEVBQUU4UCxjQUFjLENBQUM7SUFDN0NoUixFQUFFLENBQUNtUixXQUFXLENBQUMsSUFBSSxDQUFDalEsT0FBTyxDQUFDO0lBQzVCLElBQUksQ0FBQ2xCLEVBQUUsQ0FBQ29SLG1CQUFtQixDQUFDLElBQUksQ0FBQ2xRLE9BQU8sRUFBRWxCLEVBQUUsQ0FBQ3FSLFdBQVcsQ0FBQyxFQUFFO01BQ3ZELE9BQU85SSxPQUFPLENBQUNvQyxJQUFJLENBQUMzSyxFQUFFLENBQUNzUixpQkFBaUIsQ0FBQyxJQUFJLENBQUNwUSxPQUFPLENBQUMsQ0FBQztJQUMzRDs7SUFFQTtJQUNBbEIsRUFBRSxDQUFDdVIsWUFBWSxDQUFDZCxZQUFZLENBQUM7SUFDN0J6USxFQUFFLENBQUN1UixZQUFZLENBQUNQLGNBQWMsQ0FBQzs7SUFFL0I7SUFDQSxJQUFJLENBQUNRLGdCQUFnQixHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQUlDLFdBQVcsR0FBRzFSLEVBQUUsQ0FBQ29SLG1CQUFtQixDQUFDLElBQUksQ0FBQ2xRLE9BQU8sRUFBRWxCLEVBQUUsQ0FBQzJSLGVBQWUsQ0FBQztJQUMxRSxLQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sR0FBR0YsV0FBVyxFQUFFRSxNQUFNLEVBQUUsRUFBRTtNQUNqRCxJQUFJQyxPQUFPLEdBQUc3UixFQUFFLENBQUM4UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM1USxPQUFPLEVBQUUwUSxNQUFNLENBQUM7TUFDdkQsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQ3ZFLEdBQUcsQ0FBQzRFLE9BQU8sRUFBRTdSLEVBQUUsQ0FBQytSLGtCQUFrQixDQUFDLElBQUksQ0FBQzdRLE9BQU8sRUFBRTJRLE9BQU8sQ0FBQ2hHLElBQUksQ0FBQyxDQUFDOztNQUVyRjtNQUNBLE1BQU1tRyxLQUFLLEdBQUdILE9BQU8sQ0FBQ2hHLElBQUksQ0FBQ29HLEtBQUssQ0FBQyxRQUFRLENBQUM7TUFFMUNKLE9BQU8sQ0FBQ0ssV0FBVyxHQUFHRixLQUFLLENBQUMsQ0FBQyxDQUFDO01BQzlCSCxPQUFPLENBQUNNLGNBQWMsR0FBR0gsS0FBSyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDOztJQUVBO0lBQ0EsSUFBSSxDQUFDMUcsa0JBQWtCLEdBQUcsSUFBSStGLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU1ZLFNBQVMsR0FBRyxFQUFFO0lBQ3BCLE1BQU1DLFVBQVUsR0FBR3RTLEVBQUUsQ0FBQ29SLG1CQUFtQixDQUFDLElBQUksQ0FBQ2xRLE9BQU8sRUFBRWxCLEVBQUUsQ0FBQ3VTLGlCQUFpQixDQUFDO0lBQzdFLEtBQUssSUFBSUMsTUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxHQUFHRixVQUFVLEVBQUVFLE1BQU0sRUFBRSxFQUFFO01BQ2hELE1BQU1DLFNBQVMsR0FBR3pTLEVBQUUsQ0FBQzBTLGVBQWUsQ0FBQyxJQUFJLENBQUN4UixPQUFPLEVBQUVzUixNQUFNLENBQUM7TUFDMUQsTUFBTTVHLFFBQVEsR0FBRzVMLEVBQUUsQ0FBQzJTLGlCQUFpQixDQUFDLElBQUksQ0FBQ3pSLE9BQU8sRUFBRXVSLFNBQVMsQ0FBQzVHLElBQUksQ0FBQztNQUNuRTtNQUNBLElBQUlELFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUNyQnlHLFNBQVMsQ0FBQ3pHLFFBQVEsQ0FBQyxHQUFHNkcsU0FBUyxDQUFDNUcsSUFBSTtNQUNwQyxJQUFJLENBQUNILGtCQUFrQixDQUFDdUIsR0FBRyxDQUFDd0YsU0FBUyxFQUFFN0csUUFBUSxDQUFDO0lBQ3BEO0lBQ0EsSUFBSSxDQUFDTCxjQUFjLEdBQUc4RyxTQUFTLENBQUNPLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDNUM7RUFFQXZDLFlBQVlBLENBQUNGLEdBQUcsRUFBRTBDLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsSUFBSSxDQUFDOUMsU0FBUyxDQUFDRSxHQUFHLEdBQUdBLEdBQUc7SUFDeEIsSUFBSSxDQUFDRixTQUFTLENBQUM0QyxHQUFHLEdBQUdBLEdBQUc7SUFDeEIsSUFBSSxDQUFDNUMsU0FBUyxDQUFDNkMsUUFBUSxHQUFHQSxRQUFRO0lBQ2xDLElBQUksQ0FBQzdDLFNBQVMsQ0FBQzhDLFFBQVEsR0FBR0EsUUFBUTtJQUNsQyxJQUFJNUMsR0FBRyxFQUFFLElBQUksQ0FBQ1YsV0FBVyxHQUFHLElBQUk7RUFDcEM7RUFFQXVELGdCQUFnQkEsQ0FBQ0MsT0FBTyxFQUFFQyxTQUFTLEVBQUU7SUFDakMsSUFBSSxDQUFDaEQsYUFBYSxDQUFDK0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3BDLElBQUksQ0FBQy9DLGFBQWEsQ0FBQ2dELFNBQVMsR0FBR0EsU0FBUztFQUM1QztFQUVBQyxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLElBQUksQ0FBQ3RELFNBQVMsRUFBRSxJQUFJLENBQUM3UCxFQUFFLENBQUNnRCxRQUFRLENBQUNvUSxNQUFNLENBQUMsSUFBSSxDQUFDcFQsRUFBRSxDQUFDcVQsVUFBVSxDQUFDLENBQUMsS0FDM0QsSUFBSSxDQUFDclQsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDc1EsT0FBTyxDQUFDLElBQUksQ0FBQ3RULEVBQUUsQ0FBQ3FULFVBQVUsQ0FBQztJQUVqRCxJQUFJLElBQUksQ0FBQ2hFLFFBQVEsRUFBRSxJQUFJLENBQUNyUCxFQUFFLENBQUNnRCxRQUFRLENBQUNvUSxNQUFNLENBQUMsSUFBSSxDQUFDcFQsRUFBRSxDQUFDdVQsU0FBUyxDQUFDLENBQUMsS0FDekQsSUFBSSxDQUFDdlQsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDc1EsT0FBTyxDQUFDLElBQUksQ0FBQ3RULEVBQUUsQ0FBQ3VULFNBQVMsQ0FBQztJQUVoRCxJQUFJLElBQUksQ0FBQ3RELFNBQVMsQ0FBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQ25RLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQ29RLE1BQU0sQ0FBQyxJQUFJLENBQUNwVCxFQUFFLENBQUN3VCxLQUFLLENBQUMsQ0FBQyxLQUMxRCxJQUFJLENBQUN4VCxFQUFFLENBQUNnRCxRQUFRLENBQUNzUSxPQUFPLENBQUMsSUFBSSxDQUFDdFQsRUFBRSxDQUFDd1QsS0FBSyxDQUFDO0lBRTVDLElBQUksSUFBSSxDQUFDbkUsUUFBUSxFQUFFLElBQUksQ0FBQ3JQLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQ3lRLFdBQVcsQ0FBQyxJQUFJLENBQUNwRSxRQUFRLENBQUM7SUFDOUQsSUFBSSxDQUFDclAsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDMFEsWUFBWSxDQUFDLElBQUksQ0FBQy9ELFNBQVMsQ0FBQztJQUM3QyxJQUFJLENBQUMzUCxFQUFFLENBQUNnRCxRQUFRLENBQUMyUSxZQUFZLENBQUMsSUFBSSxDQUFDN0QsVUFBVSxDQUFDO0lBQzlDLElBQUksQ0FBQzlQLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQzRRLFlBQVksQ0FBQyxJQUFJLENBQUM3RCxTQUFTLENBQUM7SUFDN0MsSUFBSSxJQUFJLENBQUNFLFNBQVMsQ0FBQ0UsR0FBRyxFQUNsQixJQUFJLENBQUNuUSxFQUFFLENBQUNnRCxRQUFRLENBQUNxTixZQUFZLENBQUMsSUFBSSxDQUFDSixTQUFTLENBQUNFLEdBQUcsRUFBRSxJQUFJLENBQUNGLFNBQVMsQ0FBQzRDLEdBQUcsRUFBRSxJQUFJLENBQUM1QyxTQUFTLENBQUM2QyxRQUFRLEVBQUUsSUFBSSxDQUFDN0MsU0FBUyxDQUFDOEMsUUFBUSxDQUFDO0lBQzNILElBQUksQ0FBQy9TLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQ2dRLGdCQUFnQixDQUFDLElBQUksQ0FBQzlDLGFBQWEsQ0FBQytDLE9BQU8sRUFBRSxJQUFJLENBQUMvQyxhQUFhLENBQUNnRCxTQUFTLENBQUM7RUFDL0Y7RUFFQTNELEdBQUdBLENBQUM7SUFBRUgsU0FBUyxHQUFHO0VBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQzVCLElBQUl5RSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLE1BQU1DLGFBQWEsR0FBRyxJQUFJLENBQUM5VCxFQUFFLENBQUNnRCxRQUFRLENBQUNpRyxLQUFLLENBQUM4SyxjQUFjLEtBQUssSUFBSSxDQUFDdEwsRUFBRTs7SUFFdkU7SUFDQSxJQUFJLENBQUNxTCxhQUFhLEVBQUU7TUFDaEIsSUFBSSxDQUFDOVQsRUFBRSxDQUFDZ1UsVUFBVSxDQUFDLElBQUksQ0FBQzlTLE9BQU8sQ0FBQztNQUNoQyxJQUFJLENBQUNsQixFQUFFLENBQUNnRCxRQUFRLENBQUNpRyxLQUFLLENBQUM4SyxjQUFjLEdBQUcsSUFBSSxDQUFDdEwsRUFBRTtJQUNuRDs7SUFFQTtJQUNBLElBQUksQ0FBQytJLGdCQUFnQixDQUFDN0YsT0FBTyxDQUFDLENBQUNDLFFBQVEsRUFBRXFJLGFBQWEsS0FBSztNQUN2RCxJQUFJcEMsT0FBTyxHQUFHLElBQUksQ0FBQzFRLFFBQVEsQ0FBQzhTLGFBQWEsQ0FBQy9CLFdBQVcsQ0FBQztNQUV0RCxLQUFLLE1BQU1nQyxTQUFTLElBQUlELGFBQWEsQ0FBQzlCLGNBQWMsRUFBRTtRQUNsRCxJQUFJLENBQUNOLE9BQU8sRUFBRTtRQUVkLElBQUlxQyxTQUFTLElBQUlyQyxPQUFPLEVBQUU7VUFDdEJBLE9BQU8sR0FBR0EsT0FBTyxDQUFDcUMsU0FBUyxDQUFDO1FBQ2hDLENBQUMsTUFBTSxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZDLE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQyxFQUFFO1VBQ3JDO1FBQ0osQ0FBQyxNQUFNO1VBQ0h3USxPQUFPLEdBQUd3QyxTQUFTO1VBQ25CO1FBQ0o7TUFDSjtNQUVBLElBQUksQ0FBQ3hDLE9BQU8sRUFBRTtRQUNWLE9BQU9sSCxJQUFJLENBQUUsa0JBQWlCc0osYUFBYSxDQUFDcEksSUFBSyx3QkFBdUIsQ0FBQztNQUM3RTtNQUVBLElBQUlnRyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3hRLEtBQUssS0FBS2dULFNBQVMsRUFBRTtRQUN4QyxPQUFPMUosSUFBSSxDQUFFLEdBQUVzSixhQUFhLENBQUNwSSxJQUFLLHVDQUFzQyxDQUFDO01BQzdFO01BRUEsSUFBSWdHLE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQ1AsT0FBTyxFQUFFO1FBQ3ZCK1MsV0FBVyxHQUFHQSxXQUFXLEdBQUcsQ0FBQzs7UUFFN0I7UUFDQWhDLE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQ3VSLFdBQVcsQ0FBQztRQUNqQyxPQUFPUyxVQUFVLENBQUMsSUFBSSxDQUFDdFUsRUFBRSxFQUFFaVUsYUFBYSxDQUFDM0ssSUFBSSxFQUFFc0MsUUFBUSxFQUFFaUksV0FBVyxDQUFDO01BQ3pFOztNQUVBO01BQ0EsSUFBSWhDLE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQzZJLE1BQU0sSUFBSTJILE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ1AsT0FBTyxFQUFFO1FBQ2xELE1BQU15VCxZQUFZLEdBQUcsRUFBRTtRQUN2QjFDLE9BQU8sQ0FBQ3hRLEtBQUssQ0FBQ3NLLE9BQU8sQ0FBRXRLLEtBQUssSUFBSztVQUM3QndTLFdBQVcsR0FBR0EsV0FBVyxHQUFHLENBQUM7VUFDN0J4UyxLQUFLLENBQUNpQixNQUFNLENBQUN1UixXQUFXLENBQUM7VUFDekJVLFlBQVksQ0FBQy9GLElBQUksQ0FBQ3FGLFdBQVcsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFRixPQUFPUyxVQUFVLENBQUMsSUFBSSxDQUFDdFUsRUFBRSxFQUFFaVUsYUFBYSxDQUFDM0ssSUFBSSxFQUFFc0MsUUFBUSxFQUFFMkksWUFBWSxDQUFDO01BQzFFO01BRUFELFVBQVUsQ0FBQyxJQUFJLENBQUN0VSxFQUFFLEVBQUVpVSxhQUFhLENBQUMzSyxJQUFJLEVBQUVzQyxRQUFRLEVBQUVpRyxPQUFPLENBQUN4USxLQUFLLENBQUM7SUFDcEUsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDOFIsVUFBVSxDQUFDLENBQUM7SUFDakIsSUFBSS9ELFNBQVMsRUFBRSxJQUFJLENBQUNwUCxFQUFFLENBQUNnRCxRQUFRLENBQUMwUSxZQUFZLENBQUMsSUFBSSxDQUFDL0QsU0FBUyxLQUFLLElBQUksQ0FBQzNQLEVBQUUsQ0FBQzRQLEdBQUcsR0FBRyxJQUFJLENBQUM1UCxFQUFFLENBQUN3VSxFQUFFLEdBQUcsSUFBSSxDQUFDeFUsRUFBRSxDQUFDNFAsR0FBRyxDQUFDO0VBQzNHO0VBRUFqQyxNQUFNQSxDQUFBLEVBQUc7SUFDTCxJQUFJLENBQUMzTixFQUFFLENBQUN5VSxhQUFhLENBQUMsSUFBSSxDQUFDdlQsT0FBTyxDQUFDO0VBQ3ZDO0FBQ0o7QUFFQSxTQUFTb1QsVUFBVUEsQ0FBQ3RVLEVBQUUsRUFBRXNKLElBQUksRUFBRXNDLFFBQVEsRUFBRXZLLEtBQUssRUFBRTtFQUMzQ0EsS0FBSyxHQUFHQSxLQUFLLENBQUM2SSxNQUFNLEdBQUd3SyxPQUFPLENBQUNyVCxLQUFLLENBQUMsR0FBR0EsS0FBSztFQUM3QyxNQUFNc1QsUUFBUSxHQUFHM1UsRUFBRSxDQUFDZ0QsUUFBUSxDQUFDaUcsS0FBSyxDQUFDdUksZ0JBQWdCLENBQUNvRCxHQUFHLENBQUNoSixRQUFRLENBQUM7O0VBRWpFO0VBQ0EsSUFBSXZLLEtBQUssQ0FBQzZJLE1BQU0sRUFBRTtJQUNkLElBQUl5SyxRQUFRLEtBQUtOLFNBQVMsSUFBSU0sUUFBUSxDQUFDekssTUFBTSxLQUFLN0ksS0FBSyxDQUFDNkksTUFBTSxFQUFFO01BQzVEO01BQ0FsSyxFQUFFLENBQUNnRCxRQUFRLENBQUNpRyxLQUFLLENBQUN1SSxnQkFBZ0IsQ0FBQ3ZFLEdBQUcsQ0FBQ3JCLFFBQVEsRUFBRXZLLEtBQUssQ0FBQytRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLE1BQU07TUFDSCxJQUFJeUMsV0FBVyxDQUFDRixRQUFRLEVBQUV0VCxLQUFLLENBQUMsRUFBRTs7TUFFbEM7TUFDQXNULFFBQVEsQ0FBQzFILEdBQUcsR0FBRzBILFFBQVEsQ0FBQzFILEdBQUcsQ0FBQzVMLEtBQUssQ0FBQyxHQUFHeVQsUUFBUSxDQUFDSCxRQUFRLEVBQUV0VCxLQUFLLENBQUM7TUFDOURyQixFQUFFLENBQUNnRCxRQUFRLENBQUNpRyxLQUFLLENBQUN1SSxnQkFBZ0IsQ0FBQ3ZFLEdBQUcsQ0FBQ3JCLFFBQVEsRUFBRStJLFFBQVEsQ0FBQztJQUM5RDtFQUNKLENBQUMsTUFBTTtJQUNILElBQUlBLFFBQVEsS0FBS3RULEtBQUssRUFBRTtJQUN4QnJCLEVBQUUsQ0FBQ2dELFFBQVEsQ0FBQ2lHLEtBQUssQ0FBQ3VJLGdCQUFnQixDQUFDdkUsR0FBRyxDQUFDckIsUUFBUSxFQUFFdkssS0FBSyxDQUFDO0VBQzNEO0VBRUEsUUFBUWlJLElBQUk7SUFDUixLQUFLLElBQUk7TUFDTCxPQUFPakksS0FBSyxDQUFDNkksTUFBTSxHQUFHbEssRUFBRSxDQUFDK1UsVUFBVSxDQUFDbkosUUFBUSxFQUFFdkssS0FBSyxDQUFDLEdBQUdyQixFQUFFLENBQUNnVixTQUFTLENBQUNwSixRQUFRLEVBQUV2SyxLQUFLLENBQUM7SUFBRTtJQUMxRixLQUFLLEtBQUs7TUFDTixPQUFPckIsRUFBRSxDQUFDaVYsVUFBVSxDQUFDckosUUFBUSxFQUFFdkssS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLO01BQ04sT0FBT3JCLEVBQUUsQ0FBQ2tWLFVBQVUsQ0FBQ3RKLFFBQVEsRUFBRXZLLEtBQUssQ0FBQztJQUFFO0lBQzNDLEtBQUssS0FBSztNQUNOLE9BQU9yQixFQUFFLENBQUNtVixVQUFVLENBQUN2SixRQUFRLEVBQUV2SyxLQUFLLENBQUM7SUFBRTtJQUMzQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNYLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDWixLQUFLLEtBQUs7TUFDTixPQUFPQSxLQUFLLENBQUM2SSxNQUFNLEdBQUdsSyxFQUFFLENBQUNvVixVQUFVLENBQUN4SixRQUFRLEVBQUV2SyxLQUFLLENBQUMsR0FBR3JCLEVBQUUsQ0FBQ3FWLFNBQVMsQ0FBQ3pKLFFBQVEsRUFBRXZLLEtBQUssQ0FBQztJQUFFO0lBQzFGLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDWixLQUFLLEtBQUs7TUFDTixPQUFPckIsRUFBRSxDQUFDc1YsVUFBVSxDQUFDMUosUUFBUSxFQUFFdkssS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNaLEtBQUssS0FBSztNQUNOLE9BQU9yQixFQUFFLENBQUN1VixVQUFVLENBQUMzSixRQUFRLEVBQUV2SyxLQUFLLENBQUM7SUFBRTtJQUMzQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ1osS0FBSyxLQUFLO01BQ04sT0FBT3JCLEVBQUUsQ0FBQ3dWLFVBQVUsQ0FBQzVKLFFBQVEsRUFBRXZLLEtBQUssQ0FBQztJQUFFO0lBQzNDLEtBQUssS0FBSztNQUNOLE9BQU9yQixFQUFFLENBQUN5VixnQkFBZ0IsQ0FBQzdKLFFBQVEsRUFBRSxLQUFLLEVBQUV2SyxLQUFLLENBQUM7SUFBRTtJQUN4RCxLQUFLLEtBQUs7TUFDTixPQUFPckIsRUFBRSxDQUFDMFYsZ0JBQWdCLENBQUM5SixRQUFRLEVBQUUsS0FBSyxFQUFFdkssS0FBSyxDQUFDO0lBQUU7SUFDeEQsS0FBSyxLQUFLO01BQ04sT0FBT3JCLEVBQUUsQ0FBQzJWLGdCQUFnQixDQUFDL0osUUFBUSxFQUFFLEtBQUssRUFBRXZLLEtBQUssQ0FBQztJQUFFO0VBQzVEO0FBQ0o7O0FBRUEsU0FBUzBQLGNBQWNBLENBQUM2RSxNQUFNLEVBQUU7RUFDNUIsSUFBSUMsS0FBSyxHQUFHRCxNQUFNLENBQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDO0VBQzlCLEtBQUssSUFBSWpHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzhKLEtBQUssQ0FBQzNMLE1BQU0sRUFBRTZCLENBQUMsRUFBRSxFQUFFO0lBQ25DOEosS0FBSyxDQUFDOUosQ0FBQyxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHOEosS0FBSyxDQUFDOUosQ0FBQyxDQUFDO0VBQ3RDO0VBQ0EsT0FBTzhKLEtBQUssQ0FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDM0I7QUFFQSxTQUFTOEIsT0FBT0EsQ0FBQ29CLENBQUMsRUFBRTtFQUNoQixNQUFNQyxRQUFRLEdBQUdELENBQUMsQ0FBQzVMLE1BQU07RUFDekIsTUFBTThMLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUwsTUFBTTtFQUM1QixJQUFJOEwsUUFBUSxLQUFLM0IsU0FBUyxFQUFFLE9BQU95QixDQUFDO0VBQ3BDLE1BQU01TCxNQUFNLEdBQUc2TCxRQUFRLEdBQUdDLFFBQVE7RUFDbEMsSUFBSTNVLEtBQUssR0FBR21PLGFBQWEsQ0FBQ3RGLE1BQU0sQ0FBQztFQUNqQyxJQUFJLENBQUM3SSxLQUFLLEVBQUVtTyxhQUFhLENBQUN0RixNQUFNLENBQUMsR0FBRzdJLEtBQUssR0FBRyxJQUFJbUksWUFBWSxDQUFDVSxNQUFNLENBQUM7RUFDcEUsS0FBSyxJQUFJNkIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZ0ssUUFBUSxFQUFFaEssQ0FBQyxFQUFFLEVBQUUxSyxLQUFLLENBQUM0TCxHQUFHLENBQUM2SSxDQUFDLENBQUMvSixDQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFHaUssUUFBUSxDQUFDO0VBQ2hFLE9BQU8zVSxLQUFLO0FBQ2hCO0FBRUEsU0FBU3dULFdBQVdBLENBQUNpQixDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUN2QixJQUFJSCxDQUFDLENBQUM1TCxNQUFNLEtBQUsrTCxDQUFDLENBQUMvTCxNQUFNLEVBQUUsT0FBTyxLQUFLO0VBQ3ZDLEtBQUssSUFBSTZCLENBQUMsR0FBRyxDQUFDLEVBQUVtQixDQUFDLEdBQUc0SSxDQUFDLENBQUM1TCxNQUFNLEVBQUU2QixDQUFDLEdBQUdtQixDQUFDLEVBQUVuQixDQUFDLEVBQUUsRUFBRTtJQUN0QyxJQUFJK0osQ0FBQyxDQUFDL0osQ0FBQyxDQUFDLEtBQUtrSyxDQUFDLENBQUNsSyxDQUFDLENBQUMsRUFBRSxPQUFPLEtBQUs7RUFDbkM7RUFDQSxPQUFPLElBQUk7QUFDZjtBQUVBLFNBQVMrSSxRQUFRQSxDQUFDZ0IsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDcEIsS0FBSyxJQUFJbEssQ0FBQyxHQUFHLENBQUMsRUFBRW1CLENBQUMsR0FBRzRJLENBQUMsQ0FBQzVMLE1BQU0sRUFBRTZCLENBQUMsR0FBR21CLENBQUMsRUFBRW5CLENBQUMsRUFBRSxFQUFFO0lBQ3RDK0osQ0FBQyxDQUFDL0osQ0FBQyxDQUFDLEdBQUdrSyxDQUFDLENBQUNsSyxDQUFDLENBQUM7RUFDZjtBQUNKO0FBRUEsSUFBSW1LLFNBQVMsR0FBRyxDQUFDO0FBQ2pCLFNBQVN2TCxJQUFJQSxDQUFDd0wsT0FBTyxFQUFFO0VBQ25CLElBQUlELFNBQVMsR0FBRyxHQUFHLEVBQUU7RUFDckIzTixPQUFPLENBQUNvQyxJQUFJLENBQUN3TCxPQUFPLENBQUM7RUFDckJELFNBQVMsRUFBRTtFQUNYLElBQUlBLFNBQVMsR0FBRyxHQUFHLEVBQUUzTixPQUFPLENBQUNvQyxJQUFJLENBQUMsaURBQWlELENBQUM7QUFDeEY7Ozs7Ozs7Ozs7Ozs7OztBQzFTK0M7QUFFeEMsTUFBTTlILEtBQUssU0FBU3dGLHVEQUFRLENBQUM7RUFDaEN2SSxXQUFXQSxDQUFDRSxFQUFFLEVBQUU7SUFBRWdDLEtBQUssR0FBRyxDQUFDO0lBQUVGLE1BQU0sR0FBRyxDQUFDO0lBQUVvQyxhQUFhLEdBQUcsQ0FBQztJQUFFRCxjQUFjLEdBQUcsQ0FBQztJQUFFcUUsVUFBVSxHQUFHLENBQUM7RUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDcEcsTUFBTThOLEtBQUssR0FBR2xTLGFBQWE7SUFDM0IsTUFBTW1TLEtBQUssR0FBR3BTLGNBQWM7O0lBRTVCO0lBQ0EsTUFBTXFTLEdBQUcsR0FBRyxDQUFDRixLQUFLLEdBQUcsQ0FBQyxLQUFLQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE1BQU1FLFVBQVUsR0FBR0gsS0FBSyxHQUFHQyxLQUFLLEdBQUcsQ0FBQzs7SUFFcEM7SUFDQSxNQUFNalUsUUFBUSxHQUFHLElBQUlvSCxZQUFZLENBQUM4TSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE1BQU1FLE1BQU0sR0FBRyxJQUFJaE4sWUFBWSxDQUFDOE0sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxNQUFNRyxFQUFFLEdBQUcsSUFBSWpOLFlBQVksQ0FBQzhNLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEMsTUFBTWpTLEtBQUssR0FBR2tTLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSUcsV0FBVyxDQUFDSCxVQUFVLENBQUMsR0FBRyxJQUFJN00sV0FBVyxDQUFDNk0sVUFBVSxDQUFDO0lBRTVGMVQsS0FBSyxDQUFDOFQsVUFBVSxDQUFDdlUsUUFBUSxFQUFFb1UsTUFBTSxFQUFFQyxFQUFFLEVBQUVwUyxLQUFLLEVBQUVyQyxLQUFLLEVBQUVGLE1BQU0sRUFBRSxDQUFDLEVBQUVzVSxLQUFLLEVBQUVDLEtBQUssQ0FBQztJQUU3RTFILE1BQU0sQ0FBQ0MsTUFBTSxDQUFDdEcsVUFBVSxFQUFFO01BQ3RCbEcsUUFBUSxFQUFFO1FBQUVpSCxJQUFJLEVBQUUsQ0FBQztRQUFFRSxJQUFJLEVBQUVuSDtNQUFTLENBQUM7TUFDckNvVSxNQUFNLEVBQUU7UUFBRW5OLElBQUksRUFBRSxDQUFDO1FBQUVFLElBQUksRUFBRWlOO01BQU8sQ0FBQztNQUNqQ0MsRUFBRSxFQUFFO1FBQUVwTixJQUFJLEVBQUUsQ0FBQztRQUFFRSxJQUFJLEVBQUVrTjtNQUFHLENBQUM7TUFDekJwUyxLQUFLLEVBQUU7UUFBRWtGLElBQUksRUFBRWxGO01BQU07SUFDekIsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDckUsRUFBRSxFQUFFc0ksVUFBVSxDQUFDO0VBQ3pCO0VBRUEsT0FBT3FPLFVBQVVBLENBQUN2VSxRQUFRLEVBQUVvVSxNQUFNLEVBQUVDLEVBQUUsRUFBRXBTLEtBQUssRUFBRXJDLEtBQUssRUFBRUYsTUFBTSxFQUFFOFUsS0FBSyxFQUFFUixLQUFLLEVBQUVDLEtBQUssRUFBRVEsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFbEwsQ0FBQyxHQUFHLENBQUMsRUFBRW1MLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFDeEksTUFBTUMsRUFBRSxHQUFHcEwsQ0FBQztJQUNaLE1BQU1xTCxJQUFJLEdBQUdwVixLQUFLLEdBQUdvVSxLQUFLO0lBQzFCLE1BQU1pQixJQUFJLEdBQUd2VixNQUFNLEdBQUd1VSxLQUFLO0lBRTNCLEtBQUssSUFBSWlCLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsSUFBSWpCLEtBQUssRUFBRWlCLEVBQUUsRUFBRSxFQUFFO01BQ2hDLElBQUkvVyxDQUFDLEdBQUcrVyxFQUFFLEdBQUdELElBQUksR0FBR3ZWLE1BQU0sR0FBRyxDQUFDO01BQzlCLEtBQUssSUFBSXlWLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsSUFBSW5CLEtBQUssRUFBRW1CLEVBQUUsRUFBRSxFQUFFeEwsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSXpMLENBQUMsR0FBR2lYLEVBQUUsR0FBR0gsSUFBSSxHQUFHcFYsS0FBSyxHQUFHLENBQUM7UUFFN0JJLFFBQVEsQ0FBQzJKLENBQUMsR0FBRyxDQUFDLEdBQUc4SyxDQUFDLENBQUMsR0FBR3ZXLENBQUMsR0FBRzBXLElBQUk7UUFDOUI1VSxRQUFRLENBQUMySixDQUFDLEdBQUcsQ0FBQyxHQUFHK0ssQ0FBQyxDQUFDLEdBQUd2VyxDQUFDLEdBQUcwVyxJQUFJO1FBQzlCN1UsUUFBUSxDQUFDMkosQ0FBQyxHQUFHLENBQUMsR0FBR2dMLENBQUMsQ0FBQyxHQUFHSCxLQUFLLEdBQUcsQ0FBQztRQUUvQkosTUFBTSxDQUFDekssQ0FBQyxHQUFHLENBQUMsR0FBRzhLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckJMLE1BQU0sQ0FBQ3pLLENBQUMsR0FBRyxDQUFDLEdBQUcrSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JCTixNQUFNLENBQUN6SyxDQUFDLEdBQUcsQ0FBQyxHQUFHZ0wsQ0FBQyxDQUFDLEdBQUdILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2Q0gsRUFBRSxDQUFDMUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHd0wsRUFBRSxHQUFHbkIsS0FBSztRQUN0QkssRUFBRSxDQUFDMUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUd1TCxFQUFFLEdBQUdqQixLQUFLO1FBRTlCLElBQUlpQixFQUFFLEtBQUtqQixLQUFLLElBQUlrQixFQUFFLEtBQUtuQixLQUFLLEVBQUU7UUFDbEMsSUFBSU4sQ0FBQyxHQUFHcUIsRUFBRSxHQUFHSSxFQUFFLEdBQUdELEVBQUUsSUFBSWxCLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSUgsQ0FBQyxHQUFHa0IsRUFBRSxHQUFHSSxFQUFFLEdBQUcsQ0FBQ0QsRUFBRSxHQUFHLENBQUMsS0FBS2xCLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSW9CLENBQUMsR0FBR0wsRUFBRSxHQUFHSSxFQUFFLEdBQUcsQ0FBQ0QsRUFBRSxHQUFHLENBQUMsS0FBS2xCLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVDLElBQUlxQixDQUFDLEdBQUdOLEVBQUUsR0FBR0ksRUFBRSxHQUFHRCxFQUFFLElBQUlsQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUV0Qy9SLEtBQUssQ0FBQzZTLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBR3BCLENBQUM7UUFDakJ6UixLQUFLLENBQUM2UyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHakIsQ0FBQztRQUNyQjVSLEtBQUssQ0FBQzZTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdPLENBQUM7UUFDckJwVCxLQUFLLENBQUM2UyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHakIsQ0FBQztRQUNyQjVSLEtBQUssQ0FBQzZTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdNLENBQUM7UUFDckJuVCxLQUFLLENBQUM2UyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHTyxDQUFDO1FBQ3JCUCxFQUFFLEVBQUU7TUFDUjtJQUNKO0VBQ0o7QUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDbEVvRDtBQUU3QyxNQUFNcEosSUFBSSxTQUFTcUcsS0FBSyxDQUFDO0VBQzVCclUsV0FBV0EsQ0FBQzZYLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRyxDQUFDLEVBQUU7SUFDekYsS0FBSyxDQUFDUixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ2xELE9BQU8sSUFBSTtFQUNmO0VBRUFsTCxHQUFHQSxDQUFDMEssR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxJQUFJUixHQUFHLENBQUN6TixNQUFNLEVBQUUsT0FBTyxJQUFJLENBQUNrTyxJQUFJLENBQUNULEdBQUcsQ0FBQztJQUNyQ0QsdURBQVksQ0FBQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDL0QsT0FBTyxJQUFJO0VBQ2Y7RUFFQUUsU0FBU0EsQ0FBQ3ZCLENBQUMsRUFBRXdCLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDbkJaLDZEQUFrQixDQUFDLElBQUksRUFBRVksQ0FBQyxFQUFFeEIsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sSUFBSTtFQUNmO0VBRUF5QixNQUFNQSxDQUFDekIsQ0FBQyxFQUFFd0IsQ0FBQyxHQUFHLElBQUksRUFBRTtJQUNoQlosMERBQWUsQ0FBQyxJQUFJLEVBQUVZLENBQUMsRUFBRXhCLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUk7RUFDZjtFQUVBNVUsS0FBS0EsQ0FBQzRVLENBQUMsRUFBRXdCLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDZloseURBQWMsQ0FBQyxJQUFJLEVBQUVZLENBQUMsRUFBRXhCLENBQUMsQ0FBQztJQUMxQixPQUFPLElBQUk7RUFDZjtFQUVBN0gsUUFBUUEsQ0FBQ3VKLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQ2IsSUFBSUEsRUFBRSxFQUFFO01BQ0pmLDREQUFpQixDQUFDLElBQUksRUFBRWMsRUFBRSxFQUFFQyxFQUFFLENBQUM7SUFDbkMsQ0FBQyxNQUFNO01BQ0hmLDREQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUVjLEVBQUUsQ0FBQztJQUNyQztJQUNBLE9BQU8sSUFBSTtFQUNmO0VBRUFFLFFBQVFBLENBQUEsRUFBRztJQUNQaEIsNERBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLE9BQU8sSUFBSTtFQUNmO0VBRUFVLElBQUlBLENBQUNFLENBQUMsRUFBRTtJQUNKWix3REFBYSxDQUFDLElBQUksRUFBRVksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sSUFBSTtFQUNmO0VBRUFLLFdBQVdBLENBQUNMLENBQUMsRUFBRTtJQUNYWiw0REFBaUIsQ0FBQyxJQUFJLEVBQUVZLENBQUMsQ0FBQztJQUMxQixPQUFPLElBQUk7RUFDZjtFQUVBTyxjQUFjQSxDQUFDQyxDQUFDLEVBQUU7SUFDZHBCLDREQUFpQixDQUFDLElBQUksRUFBRW9CLENBQUMsQ0FBQztJQUMxQixPQUFPLElBQUk7RUFDZjtFQUVBRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQzNCLElBQUksQ0FBQ2xNLEdBQUcsQ0FBQ2dNLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsT0FBTyxJQUFJO0VBQ2Y7RUFFQUMsT0FBT0EsQ0FBQ2QsQ0FBQyxHQUFHLElBQUksRUFBRTtJQUNkWiwwREFBZSxDQUFDLElBQUksRUFBRVksQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNmO0VBRUFuSixlQUFlQSxDQUFDbUosQ0FBQyxFQUFFO0lBQ2ZaLGtFQUF1QixDQUFDLElBQUksRUFBRVksQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSTtFQUNmO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQSxNQUFNaUIsT0FBTyxHQUFHLFFBQVE7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU1gsUUFBUUEsQ0FBQ1ksR0FBRyxFQUFFMUQsQ0FBQyxFQUFFO0VBQzdCMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNkLE9BQU8wRCxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNULFFBQVFBLENBQUNTLEdBQUcsRUFBRVYsQ0FBQyxFQUFFO0VBQzdCLElBQUl4WSxDQUFDLEdBQUd3WSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1J2WSxDQUFDLEdBQUd1WSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1JoUyxDQUFDLEdBQUdnUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IvQixDQUFDLEdBQUcrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ1osSUFBSVcsRUFBRSxHQUFHblosQ0FBQyxHQUFHQSxDQUFDO0VBQ2QsSUFBSW9aLEVBQUUsR0FBR25aLENBQUMsR0FBR0EsQ0FBQztFQUNkLElBQUlvWixFQUFFLEdBQUc3UyxDQUFDLEdBQUdBLENBQUM7RUFFZCxJQUFJOFMsRUFBRSxHQUFHdFosQ0FBQyxHQUFHbVosRUFBRTtFQUNmLElBQUlJLEVBQUUsR0FBR3RaLENBQUMsR0FBR2taLEVBQUU7RUFDZixJQUFJSyxFQUFFLEdBQUd2WixDQUFDLEdBQUdtWixFQUFFO0VBQ2YsSUFBSUssRUFBRSxHQUFHalQsQ0FBQyxHQUFHMlMsRUFBRTtFQUNmLElBQUlPLEVBQUUsR0FBR2xULENBQUMsR0FBRzRTLEVBQUU7RUFDZixJQUFJTyxFQUFFLEdBQUduVCxDQUFDLEdBQUc2UyxFQUFFO0VBQ2YsSUFBSU8sRUFBRSxHQUFHbkQsQ0FBQyxHQUFHMEMsRUFBRTtFQUNmLElBQUlVLEVBQUUsR0FBR3BELENBQUMsR0FBRzJDLEVBQUU7RUFDZixJQUFJVSxFQUFFLEdBQUdyRCxDQUFDLEdBQUc0QyxFQUFFO0VBRWZILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUdNLEVBQUUsR0FBR0csRUFBRTtFQUNwQlQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSyxFQUFFLEdBQUdPLEVBQUU7RUFDaEJaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR08sRUFBRSxHQUFHSSxFQUFFO0VBRWhCWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdLLEVBQUUsR0FBR08sRUFBRTtFQUNoQlosR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR0ksRUFBRSxHQUFHSyxFQUFFO0VBQ3BCVCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdRLEVBQUUsR0FBR0UsRUFBRTtFQUVoQlYsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHTyxFQUFFLEdBQUdJLEVBQUU7RUFDaEJYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR1EsRUFBRSxHQUFHRSxFQUFFO0VBQ2hCVixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHSSxFQUFFLEdBQUdFLEVBQUU7RUFFcEIsT0FBT04sR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3BCLElBQUlBLENBQUNvQixHQUFHLEVBQUUxRCxDQUFDLEVBQUU7RUFDekIwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IsT0FBTzBELEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTdk0sR0FBR0EsQ0FBQ3VNLEdBQUcsRUFBRTdCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDbEVxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc3QixHQUFHO0VBQ1o2QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc1QixHQUFHO0VBQ1o0QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUczQixHQUFHO0VBQ1oyQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxQixHQUFHO0VBQ1owQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd6QixHQUFHO0VBQ1p5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd4QixHQUFHO0VBQ1p3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2QixHQUFHO0VBQ1p1QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd0QixHQUFHO0VBQ1pzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdyQixHQUFHO0VBQ1osT0FBT3FCLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTZCxRQUFRQSxDQUFDYyxHQUFHLEVBQUU7RUFDMUJBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1YsT0FBT0EsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2EsU0FBU0EsQ0FBQ2IsR0FBRyxFQUFFMUQsQ0FBQyxFQUFFO0VBQzlCO0VBQ0EsSUFBSTBELEdBQUcsS0FBSzFELENBQUMsRUFBRTtJQUNYLElBQUl3RSxHQUFHLEdBQUd4RSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1Z5RSxHQUFHLEdBQUd6RSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1YwRSxHQUFHLEdBQUcxRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdjLEdBQUc7SUFDWmQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHZSxHQUFHO0lBQ1pmLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2dCLEdBQUc7RUFDaEIsQ0FBQyxNQUFNO0lBQ0hoQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCO0VBRUEsT0FBTzBELEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNILE1BQU1BLENBQUNHLEdBQUcsRUFBRTFELENBQUMsRUFBRTtFQUMzQixJQUFJMkUsR0FBRyxHQUFHM0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWd0UsR0FBRyxHQUFHeEUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWeUUsR0FBRyxHQUFHekUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUk0RSxHQUFHLEdBQUc1RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Y2RSxHQUFHLEdBQUc3RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YwRSxHQUFHLEdBQUcxRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2QsSUFBSThFLEdBQUcsR0FBRzlFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVitFLEdBQUcsR0FBRy9FLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVmdGLEdBQUcsR0FBR2hGLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFZCxJQUFJaUYsR0FBRyxHQUFHRCxHQUFHLEdBQUdILEdBQUcsR0FBR0gsR0FBRyxHQUFHSyxHQUFHO0VBQy9CLElBQUlHLEdBQUcsR0FBRyxDQUFDRixHQUFHLEdBQUdKLEdBQUcsR0FBR0YsR0FBRyxHQUFHSSxHQUFHO0VBQ2hDLElBQUlLLEdBQUcsR0FBR0osR0FBRyxHQUFHSCxHQUFHLEdBQUdDLEdBQUcsR0FBR0MsR0FBRzs7RUFFL0I7RUFDQSxJQUFJTSxHQUFHLEdBQUdULEdBQUcsR0FBR00sR0FBRyxHQUFHVCxHQUFHLEdBQUdVLEdBQUcsR0FBR1QsR0FBRyxHQUFHVSxHQUFHO0VBRTNDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ04sT0FBTyxJQUFJO0VBQ2Y7RUFDQUEsR0FBRyxHQUFHLEdBQUcsR0FBR0EsR0FBRztFQUVmMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdUIsR0FBRyxHQUFHRyxHQUFHO0VBQ2xCMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQ3NCLEdBQUcsR0FBR1IsR0FBRyxHQUFHQyxHQUFHLEdBQUdNLEdBQUcsSUFBSUssR0FBRztFQUN2QzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDZ0IsR0FBRyxHQUFHRixHQUFHLEdBQUdDLEdBQUcsR0FBR0ksR0FBRyxJQUFJTyxHQUFHO0VBQ3RDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHd0IsR0FBRyxHQUFHRSxHQUFHO0VBQ2xCMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNzQixHQUFHLEdBQUdMLEdBQUcsR0FBR0YsR0FBRyxHQUFHSyxHQUFHLElBQUlNLEdBQUc7RUFDdEMxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDZ0IsR0FBRyxHQUFHQyxHQUFHLEdBQUdGLEdBQUcsR0FBR0csR0FBRyxJQUFJUSxHQUFHO0VBQ3ZDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHeUIsR0FBRyxHQUFHQyxHQUFHO0VBQ2xCMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQ3FCLEdBQUcsR0FBR0osR0FBRyxHQUFHSCxHQUFHLEdBQUdNLEdBQUcsSUFBSU0sR0FBRztFQUN2QzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDbUIsR0FBRyxHQUFHRixHQUFHLEdBQUdILEdBQUcsR0FBR0ksR0FBRyxJQUFJUSxHQUFHO0VBQ3RDLE9BQU8xQixHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2xLLFdBQVdBLENBQUN3RyxDQUFDLEVBQUU7RUFDM0IsSUFBSTJFLEdBQUcsR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVndFLEdBQUcsR0FBR3hFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVnlFLEdBQUcsR0FBR3pFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZCxJQUFJNEUsR0FBRyxHQUFHNUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWNkUsR0FBRyxHQUFHN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWMEUsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUk4RSxHQUFHLEdBQUc5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YrRSxHQUFHLEdBQUcvRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1ZnRixHQUFHLEdBQUdoRixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRWQsT0FBTzJFLEdBQUcsSUFBSUssR0FBRyxHQUFHSCxHQUFHLEdBQUdILEdBQUcsR0FBR0ssR0FBRyxDQUFDLEdBQUdQLEdBQUcsSUFBSSxDQUFDUSxHQUFHLEdBQUdKLEdBQUcsR0FBR0YsR0FBRyxHQUFHSSxHQUFHLENBQUMsR0FBR0wsR0FBRyxJQUFJTSxHQUFHLEdBQUdILEdBQUcsR0FBR0MsR0FBRyxHQUFHQyxHQUFHLENBQUM7QUFDekc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMzTCxRQUFRQSxDQUFDdUssR0FBRyxFQUFFMUQsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDaEMsSUFBSXdFLEdBQUcsR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVndFLEdBQUcsR0FBR3hFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVnlFLEdBQUcsR0FBR3pFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZCxJQUFJNEUsR0FBRyxHQUFHNUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWNkUsR0FBRyxHQUFHN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWMEUsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUk4RSxHQUFHLEdBQUc5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YrRSxHQUFHLEdBQUcvRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1ZnRixHQUFHLEdBQUdoRixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRWQsSUFBSXFGLEdBQUcsR0FBR2xGLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVjhFLEdBQUcsR0FBRzlFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVm1GLEdBQUcsR0FBR25GLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZCxJQUFJb0YsR0FBRyxHQUFHcEYsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWK0UsR0FBRyxHQUFHL0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWcUYsR0FBRyxHQUFHckYsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUlzRixHQUFHLEdBQUd0RixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1ZnRixHQUFHLEdBQUdoRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Z1RixHQUFHLEdBQUd2RixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRWR1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcyQixHQUFHLEdBQUdWLEdBQUcsR0FBR00sR0FBRyxHQUFHTCxHQUFHLEdBQUdVLEdBQUcsR0FBR1IsR0FBRztFQUMxQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzJCLEdBQUcsR0FBR2IsR0FBRyxHQUFHUyxHQUFHLEdBQUdKLEdBQUcsR0FBR1MsR0FBRyxHQUFHUCxHQUFHO0VBQzFDckIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMkIsR0FBRyxHQUFHWixHQUFHLEdBQUdRLEdBQUcsR0FBR1AsR0FBRyxHQUFHWSxHQUFHLEdBQUdOLEdBQUc7RUFFMUN0QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc2QixHQUFHLEdBQUdaLEdBQUcsR0FBR08sR0FBRyxHQUFHTixHQUFHLEdBQUdZLEdBQUcsR0FBR1YsR0FBRztFQUMxQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzZCLEdBQUcsR0FBR2YsR0FBRyxHQUFHVSxHQUFHLEdBQUdMLEdBQUcsR0FBR1csR0FBRyxHQUFHVCxHQUFHO0VBQzFDckIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHNkIsR0FBRyxHQUFHZCxHQUFHLEdBQUdTLEdBQUcsR0FBR1IsR0FBRyxHQUFHYyxHQUFHLEdBQUdSLEdBQUc7RUFFMUN0QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcrQixHQUFHLEdBQUdkLEdBQUcsR0FBR1EsR0FBRyxHQUFHUCxHQUFHLEdBQUdjLEdBQUcsR0FBR1osR0FBRztFQUMxQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRytCLEdBQUcsR0FBR2pCLEdBQUcsR0FBR1csR0FBRyxHQUFHTixHQUFHLEdBQUdhLEdBQUcsR0FBR1gsR0FBRztFQUMxQ3JCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRytCLEdBQUcsR0FBR2hCLEdBQUcsR0FBR1UsR0FBRyxHQUFHVCxHQUFHLEdBQUdnQixHQUFHLEdBQUdWLEdBQUc7RUFDMUMsT0FBT3RCLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU25CLFNBQVNBLENBQUNtQixHQUFHLEVBQUUxRCxDQUFDLEVBQUVnQixDQUFDLEVBQUU7RUFDakMsSUFBSTJELEdBQUcsR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVndFLEdBQUcsR0FBR3hFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVnlFLEdBQUcsR0FBR3pFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVjRFLEdBQUcsR0FBRzVFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVjZFLEdBQUcsR0FBRzdFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVjBFLEdBQUcsR0FBRzFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVjhFLEdBQUcsR0FBRzlFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVitFLEdBQUcsR0FBRy9FLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVmdGLEdBQUcsR0FBR2hGLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVnhWLENBQUMsR0FBR3dXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUnZXLENBQUMsR0FBR3VXLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFWjBDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2lCLEdBQUc7RUFDWmpCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2MsR0FBRztFQUNaZCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdlLEdBQUc7RUFFWmYsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHa0IsR0FBRztFQUNabEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbUIsR0FBRztFQUNabkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHZ0IsR0FBRztFQUVaaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbFosQ0FBQyxHQUFHbWEsR0FBRyxHQUFHbGEsQ0FBQyxHQUFHbWEsR0FBRyxHQUFHRSxHQUFHO0VBQ2hDcEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbFosQ0FBQyxHQUFHZ2EsR0FBRyxHQUFHL1osQ0FBQyxHQUFHb2EsR0FBRyxHQUFHRSxHQUFHO0VBQ2hDckIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbFosQ0FBQyxHQUFHaWEsR0FBRyxHQUFHaGEsQ0FBQyxHQUFHaWEsR0FBRyxHQUFHTSxHQUFHO0VBQ2hDLE9BQU90QixHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNqQixNQUFNQSxDQUFDaUIsR0FBRyxFQUFFMUQsQ0FBQyxFQUFFMkYsR0FBRyxFQUFFO0VBQ2hDLElBQUloQixHQUFHLEdBQUczRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Z3RSxHQUFHLEdBQUd4RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Z5RSxHQUFHLEdBQUd6RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Y0RSxHQUFHLEdBQUc1RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Y2RSxHQUFHLEdBQUc3RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YwRSxHQUFHLEdBQUcxRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Y4RSxHQUFHLEdBQUc5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YrRSxHQUFHLEdBQUcvRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1ZnRixHQUFHLEdBQUdoRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Y0RixDQUFDLEdBQUd2VixJQUFJLENBQUN3VixHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUNqQmpFLENBQUMsR0FBR3JSLElBQUksQ0FBQ3lWLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO0VBRXJCakMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHaEMsQ0FBQyxHQUFHaUQsR0FBRyxHQUFHaUIsQ0FBQyxHQUFHaEIsR0FBRztFQUMxQmxCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2hDLENBQUMsR0FBRzhDLEdBQUcsR0FBR29CLENBQUMsR0FBR2YsR0FBRztFQUMxQm5CLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2hDLENBQUMsR0FBRytDLEdBQUcsR0FBR21CLENBQUMsR0FBR2xCLEdBQUc7RUFFMUJoQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdoQyxDQUFDLEdBQUdrRCxHQUFHLEdBQUdnQixDQUFDLEdBQUdqQixHQUFHO0VBQzFCakIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHaEMsQ0FBQyxHQUFHbUQsR0FBRyxHQUFHZSxDQUFDLEdBQUdwQixHQUFHO0VBQzFCZCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdoQyxDQUFDLEdBQUdnRCxHQUFHLEdBQUdrQixDQUFDLEdBQUduQixHQUFHO0VBRTFCZixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdvQixHQUFHO0VBQ1pwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdxQixHQUFHO0VBQ1pyQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdzQixHQUFHO0VBQ1osT0FBT3RCLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3RYLEtBQUtBLENBQUNzWCxHQUFHLEVBQUUxRCxDQUFDLEVBQUVnQixDQUFDLEVBQUU7RUFDN0IsSUFBSXhXLENBQUMsR0FBR3dXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUnZXLENBQUMsR0FBR3VXLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFWjBDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2xaLENBQUMsR0FBR3dWLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakIwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdsWixDQUFDLEdBQUd3VixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbFosQ0FBQyxHQUFHd1YsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVqQjBELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR2paLENBQUMsR0FBR3VWLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakIwRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdqWixDQUFDLEdBQUd1VixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCMEQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHalosQ0FBQyxHQUFHdVYsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUVqQjBELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYjBELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYjBELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYixPQUFPMEQsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRixjQUFjQSxDQUFDRSxHQUFHLEVBQUUxRCxDQUFDLEVBQUU7RUFDbkMsSUFBSTJFLEdBQUcsR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVndFLEdBQUcsR0FBR3hFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVnlFLEdBQUcsR0FBR3pFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVitGLEdBQUcsR0FBRy9GLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZCxJQUFJNEUsR0FBRyxHQUFHNUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWNkUsR0FBRyxHQUFHN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWMEUsR0FBRyxHQUFHMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWZ0csR0FBRyxHQUFHaEcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLElBQUk4RSxHQUFHLEdBQUc5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YrRSxHQUFHLEdBQUcvRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1ZnRixHQUFHLEdBQUdoRixDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1hpRyxHQUFHLEdBQUdqRyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ2YsSUFBSWtHLEdBQUcsR0FBR2xHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWG1HLEdBQUcsR0FBR25HLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWG9HLEdBQUcsR0FBR3BHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWHFHLEdBQUcsR0FBR3JHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFFZixJQUFJcUYsR0FBRyxHQUFHVixHQUFHLEdBQUdFLEdBQUcsR0FBR0wsR0FBRyxHQUFHSSxHQUFHO0VBQy9CLElBQUlLLEdBQUcsR0FBR04sR0FBRyxHQUFHRCxHQUFHLEdBQUdELEdBQUcsR0FBR0csR0FBRztFQUMvQixJQUFJVSxHQUFHLEdBQUdYLEdBQUcsR0FBR3FCLEdBQUcsR0FBR0QsR0FBRyxHQUFHbkIsR0FBRztFQUMvQixJQUFJMEIsR0FBRyxHQUFHOUIsR0FBRyxHQUFHRSxHQUFHLEdBQUdELEdBQUcsR0FBR0ksR0FBRztFQUMvQixJQUFJMEIsR0FBRyxHQUFHL0IsR0FBRyxHQUFHd0IsR0FBRyxHQUFHRCxHQUFHLEdBQUdsQixHQUFHO0VBQy9CLElBQUkyQixHQUFHLEdBQUcvQixHQUFHLEdBQUd1QixHQUFHLEdBQUdELEdBQUcsR0FBR3JCLEdBQUc7RUFDL0IsSUFBSStCLEdBQUcsR0FBRzNCLEdBQUcsR0FBR3FCLEdBQUcsR0FBR3BCLEdBQUcsR0FBR21CLEdBQUc7RUFDL0IsSUFBSVEsR0FBRyxHQUFHNUIsR0FBRyxHQUFHc0IsR0FBRyxHQUFHcEIsR0FBRyxHQUFHa0IsR0FBRztFQUMvQixJQUFJUyxHQUFHLEdBQUc3QixHQUFHLEdBQUd1QixHQUFHLEdBQUdKLEdBQUcsR0FBR0MsR0FBRztFQUMvQixJQUFJVSxHQUFHLEdBQUc3QixHQUFHLEdBQUdxQixHQUFHLEdBQUdwQixHQUFHLEdBQUdtQixHQUFHO0VBQy9CLElBQUlaLEdBQUcsR0FBR1IsR0FBRyxHQUFHc0IsR0FBRyxHQUFHSixHQUFHLEdBQUdFLEdBQUc7RUFDL0IsSUFBSWpCLEdBQUcsR0FBR0YsR0FBRyxHQUFHcUIsR0FBRyxHQUFHSixHQUFHLEdBQUdHLEdBQUc7O0VBRS9CO0VBQ0EsSUFBSWhCLEdBQUcsR0FBR0MsR0FBRyxHQUFHSCxHQUFHLEdBQUdELEdBQUcsR0FBR00sR0FBRyxHQUFHRCxHQUFHLEdBQUdzQixHQUFHLEdBQUdOLEdBQUcsR0FBR0ssR0FBRyxHQUFHSixHQUFHLEdBQUdHLEdBQUcsR0FBR0YsR0FBRyxHQUFHQyxHQUFHO0VBRS9FLElBQUksQ0FBQ3JCLEdBQUcsRUFBRTtJQUNOLE9BQU8sSUFBSTtFQUNmO0VBQ0FBLEdBQUcsR0FBRyxHQUFHLEdBQUdBLEdBQUc7RUFFZjFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDbUIsR0FBRyxHQUFHSyxHQUFHLEdBQUdSLEdBQUcsR0FBR2EsR0FBRyxHQUFHUyxHQUFHLEdBQUdZLEdBQUcsSUFBSXhCLEdBQUc7RUFDbEQxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ2dCLEdBQUcsR0FBR2lDLEdBQUcsR0FBRy9CLEdBQUcsR0FBR00sR0FBRyxHQUFHYyxHQUFHLEdBQUdVLEdBQUcsSUFBSXRCLEdBQUc7RUFDbEQxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ2tCLEdBQUcsR0FBR1csR0FBRyxHQUFHVixHQUFHLEdBQUc4QixHQUFHLEdBQUdYLEdBQUcsR0FBR1MsR0FBRyxJQUFJckIsR0FBRztFQUVsRDFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDZSxHQUFHLEdBQUdjLEdBQUcsR0FBR2YsR0FBRyxHQUFHVSxHQUFHLEdBQUdhLEdBQUcsR0FBR2EsR0FBRyxJQUFJeEIsR0FBRztFQUNsRDFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDaUIsR0FBRyxHQUFHTyxHQUFHLEdBQUdULEdBQUcsR0FBR2tDLEdBQUcsR0FBR1osR0FBRyxHQUFHVyxHQUFHLElBQUl0QixHQUFHO0VBQ2xEMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNjLEdBQUcsR0FBR21DLEdBQUcsR0FBR2hDLEdBQUcsR0FBR1ksR0FBRyxHQUFHUSxHQUFHLEdBQUdVLEdBQUcsSUFBSXJCLEdBQUc7RUFFbEQxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ3lDLEdBQUcsR0FBR0ssR0FBRyxHQUFHSixHQUFHLEdBQUdHLEdBQUcsR0FBR0YsR0FBRyxHQUFHQyxHQUFHLElBQUlsQixHQUFHO0VBQ2xEMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMwQyxHQUFHLEdBQUdkLEdBQUcsR0FBR1ksR0FBRyxHQUFHTSxHQUFHLEdBQUdILEdBQUcsR0FBR3BCLEdBQUcsSUFBSUcsR0FBRztFQUNsRDFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDd0MsR0FBRyxHQUFHSyxHQUFHLEdBQUdKLEdBQUcsR0FBR2IsR0FBRyxHQUFHZSxHQUFHLEdBQUdoQixHQUFHLElBQUlELEdBQUc7RUFFbEQsT0FBTzFCLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU21ELFVBQVVBLENBQUNuRCxHQUFHLEVBQUV4WCxLQUFLLEVBQUVGLE1BQU0sRUFBRTtFQUMzQzBYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUd4WCxLQUFLO0VBQ2xCd1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHMVgsTUFBTTtFQUNwQjBYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDWEEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVixPQUFPQSxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNwTSxHQUFHQSxDQUFDb00sR0FBRyxFQUFFMUQsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDM0J1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJ1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEIsT0FBT3VELEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU29ELFFBQVFBLENBQUNwRCxHQUFHLEVBQUUxRCxDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUNoQ3VELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQnVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzFELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQixPQUFPdUQsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTcUQsY0FBY0EsQ0FBQ3JELEdBQUcsRUFBRTFELENBQUMsRUFBRUcsQ0FBQyxFQUFFO0VBQ3RDdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCdUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCLE9BQU91RCxHQUFHO0FBQ2Q7Ozs7Ozs7O1VDcmZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvR2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvTWVzaC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9Qcm9ncmFtLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9leHRyYXMvUGxhbmUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvTWF0My5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9mdW5jdGlvbnMvTWF0M0Z1bmMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVPZmZzZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgdmVsb2NpdHk6IDFcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXG4gICAgdGhpcy5zaG93KClcblxuICAgIHRoaXMub25SZXNpemUoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChudWxsKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gICAgICBoZWlnaHQ6ICh0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG4gICAgICB3aWR0aDogKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjZW5lLnRhcmdldCA9IDBcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cbiAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlIC8vICowLjggcG91ciByYWxlbnRpclxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIG9uV2hlZWwoeyBwaXhlbFkgfSkge31cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBsZXJwKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDE4IC8vIG91IDAuMDAxXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm94LCBDYW1lcmEsIFBsYW5lLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICBkcHI6IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKVxuICAgIH0pXG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJpZXMoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEuZm92ID0gNDVcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgY3JlYXRlSG9tZSgpIHtcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7IGdsOiB0aGlzLmdsLCBzY2VuZTogdGhpcy5zY2VuZSwgc2l6ZXM6IHRoaXMudmlld3BvcnQgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UuXG4gICAqL1xuICBvbkNoYW5nZSh1cmwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZS5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2NyZWVuID0ge1xuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5zY3JlZW4ud2lkdGgsIHRoaXMuc2NyZWVuLmhlaWdodClcblxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogdGhpcy5nbC5jYW52YXMud2lkdGggLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcbiAgICB9KVxuXG4gICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICB0aGlzLnZpZXdwb3J0ID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LnN0YXJ0LFxuICAgICAgeTogdGhpcy55LnN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge31cblxuICBvblRvdWNoVXAoZXZlbnQpIHt9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShhcHBsaWNhdGlvbikge1xuICAgIGlmICghYXBwbGljYXRpb24pIHJldHVyblxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcbnVuaWZvcm0gdmVjMiB1T2Zmc2V0O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudmVjMyByZ2JTaGlmdChzYW1wbGVyMkQgdGV4dHVyZUltYWdlLCB2ZWMyIHV2LCB2ZWMyIG9mZnNldCl7XFxuICAgIGZsb2F0IHIgPSB0ZXh0dXJlMkQodGV4dHVyZUltYWdlLCB1diArIG9mZnNldCAqIDAuMykucjtcXG4gICAgdmVjMiBnYiA9IHRleHR1cmUyRCh0ZXh0dXJlSW1hZ2UsIHV2KS5nYjtcXG4gICAgcmV0dXJuIHZlYzMociwgZ2IpO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzMgY29sb3JTaGlmdGVkID0gcmdiU2hpZnQodE1hcCwgdlV2LCB1T2Zmc2V0KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvclNoaWZ0ZWQsIDEuMCk7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSB2ZWMyIHVPZmZzZXQ7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52ZWMzIGRlZm9ybWF0aW9uQ3VydmUodmVjMyBwb3NpdGlvbiwgdmVjMiB1diwgdmVjMiBvZmZzZXQpe1xcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCArIChzaW4odXYueSAqIFBJKSAqIG9mZnNldC54KTtcXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgKyAoc2luKHV2LnggKiBQSSkgKiBvZmZzZXQueSk7XFxuICAgIHJldHVybiBwb3NpdGlvbjtcXG59XFxuXFxudm9pZCBtYWluKCl7XFxuICAgIHZVdiA9IHV2O1xcbiAgICB2ZWMzIG5ld1Bvc2l0aW9uID0gZGVmb3JtYXRpb25DdXJ2ZShwb3NpdGlvbiwgdXYsIHVPZmZzZXQpO1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5ld1Bvc2l0aW9uLCAxLjApO1xcbn1cXG5cIjsiLCIvLyBhdHRyaWJ1dGUgcGFyYW1zXG4vLyB7XG4vLyAgICAgZGF0YSAtIHR5cGVkIGFycmF5IGVnIFVJbnQxNkFycmF5IGZvciBpbmRpY2VzLCBGbG9hdDMyQXJyYXlcbi8vICAgICBzaXplIC0gaW50IGRlZmF1bHQgMVxuLy8gICAgIGluc3RhbmNlZCAtIGRlZmF1bHQgbnVsbC4gUGFzcyBkaXZpc29yIGFtb3VudFxuLy8gICAgIHR5cGUgLSBnbCBlbnVtIGRlZmF1bHQgZ2wuVU5TSUdORURfU0hPUlQgZm9yICdpbmRleCcsIGdsLkZMT0FUIGZvciBvdGhlcnNcbi8vICAgICBub3JtYWxpemVkIC0gYm9vbGVhbiBkZWZhdWx0IGZhbHNlXG5cbi8vICAgICBidWZmZXIgLSBnbCBidWZmZXIsIGlmIGJ1ZmZlciBleGlzdHMsIGRvbid0IG5lZWQgdG8gcHJvdmlkZSBkYXRhIC0gYWx0aG91Z2ggbmVlZHMgcG9zaXRpb24gZGF0YSBmb3IgYm91bmRzIGNhbGN1bGF0aW9uXG4vLyAgICAgc3RyaWRlIC0gZGVmYXVsdCAwIC0gZm9yIHdoZW4gcGFzc2luZyBpbiBidWZmZXJcbi8vICAgICBvZmZzZXQgLSBkZWZhdWx0IDAgLSBmb3Igd2hlbiBwYXNzaW5nIGluIGJ1ZmZlclxuLy8gICAgIGNvdW50IC0gZGVmYXVsdCBudWxsIC0gZm9yIHdoZW4gcGFzc2luZyBpbiBidWZmZXJcbi8vICAgICBtaW4gLSBhcnJheSAtIGZvciB3aGVuIHBhc3NpbmcgaW4gYnVmZmVyXG4vLyAgICAgbWF4IC0gYXJyYXkgLSBmb3Igd2hlbiBwYXNzaW5nIGluIGJ1ZmZlclxuLy8gfVxuXG4vLyBUT0RPOiBmaXQgaW4gdHJhbnNmb3JtIGZlZWRiYWNrXG5cbmltcG9ydCB7IFZlYzMgfSBmcm9tICcuLi9tYXRoL1ZlYzMuanMnO1xuXG5jb25zdCB0ZW1wVmVjMyA9IG5ldyBWZWMzKCk7XG5cbmxldCBJRCA9IDE7XG5sZXQgQVRUUl9JRCA9IDE7XG5cbi8vIFRvIHN0b3AgaW5pZmluaXRlIHdhcm5pbmdzXG5sZXQgaXNCb3VuZHNXYXJuZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgICAgIGlmICghZ2wuY2FudmFzKSBjb25zb2xlLmVycm9yKCdnbCBub3QgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50IHRvIEdlb21ldHJ5Jyk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG5cbiAgICAgICAgLy8gU3RvcmUgb25lIFZBTyBwZXIgcHJvZ3JhbSBhdHRyaWJ1dGUgbG9jYXRpb25zIG9yZGVyXG4gICAgICAgIHRoaXMuVkFPcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuZHJhd1JhbmdlID0geyBzdGFydDogMCwgY291bnQ6IDAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVW5iaW5kIGN1cnJlbnQgVkFPIHNvIHRoYXQgbmV3IGJ1ZmZlcnMgZG9uJ3QgZ2V0IGFkZGVkIHRvIGFjdGl2ZSBtZXNoXG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmN1cnJlbnRHZW9tZXRyeSA9IG51bGw7XG5cbiAgICAgICAgLy8gQWxpYXMgZm9yIHN0YXRlIHN0b3JlIHRvIGF2b2lkIHJlZHVuZGFudCBjYWxscyBmb3IgZ2xvYmFsIHN0YXRlXG4gICAgICAgIHRoaXMuZ2xTdGF0ZSA9IHRoaXMuZ2wucmVuZGVyZXIuc3RhdGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBidWZmZXJzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRBdHRyaWJ1dGUoa2V5LCBhdHRyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gYXR0cjtcblxuICAgICAgICAvLyBTZXQgb3B0aW9uc1xuICAgICAgICBhdHRyLmlkID0gQVRUUl9JRCsrOyAvLyBUT0RPOiBjdXJyZW50bHkgdW51c2VkLCByZW1vdmU/XG4gICAgICAgIGF0dHIuc2l6ZSA9IGF0dHIuc2l6ZSB8fCAxO1xuICAgICAgICBhdHRyLnR5cGUgPVxuICAgICAgICAgICAgYXR0ci50eXBlIHx8XG4gICAgICAgICAgICAoYXR0ci5kYXRhLmNvbnN0cnVjdG9yID09PSBGbG9hdDMyQXJyYXlcbiAgICAgICAgICAgICAgICA/IHRoaXMuZ2wuRkxPQVRcbiAgICAgICAgICAgICAgICA6IGF0dHIuZGF0YS5jb25zdHJ1Y3RvciA9PT0gVWludDE2QXJyYXlcbiAgICAgICAgICAgICAgICA/IHRoaXMuZ2wuVU5TSUdORURfU0hPUlRcbiAgICAgICAgICAgICAgICA6IHRoaXMuZ2wuVU5TSUdORURfSU5UKTsgLy8gVWludDMyQXJyYXlcbiAgICAgICAgYXR0ci50YXJnZXQgPSBrZXkgPT09ICdpbmRleCcgPyB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSIDogdGhpcy5nbC5BUlJBWV9CVUZGRVI7XG4gICAgICAgIGF0dHIubm9ybWFsaXplZCA9IGF0dHIubm9ybWFsaXplZCB8fCBmYWxzZTtcbiAgICAgICAgYXR0ci5zdHJpZGUgPSBhdHRyLnN0cmlkZSB8fCAwO1xuICAgICAgICBhdHRyLm9mZnNldCA9IGF0dHIub2Zmc2V0IHx8IDA7XG4gICAgICAgIGF0dHIuY291bnQgPSBhdHRyLmNvdW50IHx8IChhdHRyLnN0cmlkZSA/IGF0dHIuZGF0YS5ieXRlTGVuZ3RoIC8gYXR0ci5zdHJpZGUgOiBhdHRyLmRhdGEubGVuZ3RoIC8gYXR0ci5zaXplKTtcbiAgICAgICAgYXR0ci5kaXZpc29yID0gYXR0ci5pbnN0YW5jZWQgfHwgMDtcbiAgICAgICAgYXR0ci5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBhdHRyLnVzYWdlID0gYXR0ci51c2FnZSB8fCB0aGlzLmdsLlNUQVRJQ19EUkFXO1xuXG4gICAgICAgIGlmICghYXR0ci5idWZmZXIpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZGF0YSB0byBidWZmZXJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdlb21ldHJ5IGNvdW50cy4gSWYgaW5kZXhlZCwgaWdub3JlIHJlZ3VsYXIgYXR0cmlidXRlc1xuICAgICAgICBpZiAoYXR0ci5kaXZpc29yKSB7XG4gICAgICAgICAgICB0aGlzLmlzSW5zdGFuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlZENvdW50ICYmIHRoaXMuaW5zdGFuY2VkQ291bnQgIT09IGF0dHIuY291bnQgKiBhdHRyLmRpdmlzb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dlb21ldHJ5IGhhcyBtdWx0aXBsZSBpbnN0YW5jZWQgYnVmZmVycyBvZiBkaWZmZXJlbnQgbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluc3RhbmNlZENvdW50ID0gTWF0aC5taW4odGhpcy5pbnN0YW5jZWRDb3VudCwgYXR0ci5jb3VudCAqIGF0dHIuZGl2aXNvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudCA9IGF0dHIuY291bnQgKiBhdHRyLmRpdmlzb3I7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW5kZXgnKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCA9IGF0dHIuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXR0cmlidXRlcy5pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3UmFuZ2UuY291bnQgPSBNYXRoLm1heCh0aGlzLmRyYXdSYW5nZS5jb3VudCwgYXR0ci5jb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBjb25zdCBpc05ld0J1ZmZlciA9ICFhdHRyLmJ1ZmZlcjtcbiAgICAgICAgaWYgKGlzTmV3QnVmZmVyKSBhdHRyLmJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIGlmICh0aGlzLmdsU3RhdGUuYm91bmRCdWZmZXIgIT09IGF0dHIuYnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoYXR0ci50YXJnZXQsIGF0dHIuYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS5ib3VuZEJ1ZmZlciA9IGF0dHIuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ld0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGF0dHIudGFyZ2V0LCBhdHRyLmRhdGEsIGF0dHIudXNhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKGF0dHIudGFyZ2V0LCAwLCBhdHRyLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHIubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJbmRleCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZSgnaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0RHJhd1JhbmdlKHN0YXJ0LCBjb3VudCkge1xuICAgICAgICB0aGlzLmRyYXdSYW5nZS5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCA9IGNvdW50O1xuICAgIH1cblxuICAgIHNldEluc3RhbmNlZENvdW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VkQ291bnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVWQU8ocHJvZ3JhbSkge1xuICAgICAgICB0aGlzLlZBT3NbcHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcl0gPSB0aGlzLmdsLnJlbmRlcmVyLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuYmluZFZlcnRleEFycmF5KHRoaXMuVkFPc1twcm9ncmFtLmF0dHJpYnV0ZU9yZGVyXSk7XG4gICAgICAgIHRoaXMuYmluZEF0dHJpYnV0ZXMocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgYmluZEF0dHJpYnV0ZXMocHJvZ3JhbSkge1xuICAgICAgICAvLyBMaW5rIGFsbCBhdHRyaWJ1dGVzIHRvIHByb2dyYW0gdXNpbmcgZ2wudmVydGV4QXR0cmliUG9pbnRlclxuICAgICAgICBwcm9ncmFtLmF0dHJpYnV0ZUxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbiwgeyBuYW1lLCB0eXBlIH0pID0+IHtcbiAgICAgICAgICAgIC8vIElmIGdlb21ldHJ5IG1pc3NpbmcgYSByZXF1aXJlZCBzaGFkZXIgYXR0cmlidXRlXG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgYWN0aXZlIGF0dHJpYnV0ZSAke25hbWV9IG5vdCBiZWluZyBzdXBwbGllZGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKGF0dHIudGFyZ2V0LCBhdHRyLmJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmdsU3RhdGUuYm91bmRCdWZmZXIgPSBhdHRyLmJ1ZmZlcjtcblxuICAgICAgICAgICAgLy8gRm9yIG1hdHJpeCBhdHRyaWJ1dGVzLCBidWZmZXIgbmVlZHMgdG8gYmUgZGVmaW5lZCBwZXIgY29sdW1uXG4gICAgICAgICAgICBsZXQgbnVtTG9jID0gMTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAzNTY3NCkgbnVtTG9jID0gMjsgLy8gbWF0MlxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDM1Njc1KSBudW1Mb2MgPSAzOyAvLyBtYXQzXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMzU2NzYpIG51bUxvYyA9IDQ7IC8vIG1hdDRcblxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGF0dHIuc2l6ZSAvIG51bUxvYztcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IG51bUxvYyA9PT0gMSA/IDAgOiBudW1Mb2MgKiBudW1Mb2MgKiA0O1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbnVtTG9jID09PSAxID8gMCA6IG51bUxvYyAqIDQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTG9jOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jYXRpb24gKyBpLCBzaXplLCBhdHRyLnR5cGUsIGF0dHIubm9ybWFsaXplZCwgYXR0ci5zdHJpZGUgKyBzdHJpZGUsIGF0dHIub2Zmc2V0ICsgaSAqIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGluc3RhbmNlZCBhdHRyaWJ1dGVzLCBkaXZpc29yIG5lZWRzIHRvIGJlIHNldC5cbiAgICAgICAgICAgICAgICAvLyBGb3IgZmlyZWZveCwgbmVlZCB0byBzZXQgYmFjayB0byAwIGlmIG5vbi1pbnN0YW5jZWQgZHJhd24gYWZ0ZXIgaW5zdGFuY2VkLiBFbHNlIHdvbid0IHJlbmRlclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGF0dHIuZGl2aXNvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgaW5kaWNlcyBpZiBnZW9tZXRyeSBpbmRleGVkXG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXgpIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmF0dHJpYnV0ZXMuaW5kZXguYnVmZmVyKTtcbiAgICB9XG5cbiAgICBkcmF3KHsgcHJvZ3JhbSwgbW9kZSA9IHRoaXMuZ2wuVFJJQU5HTEVTIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2wucmVuZGVyZXIuY3VycmVudEdlb21ldHJ5ICE9PSBgJHt0aGlzLmlkfV8ke3Byb2dyYW0uYXR0cmlidXRlT3JkZXJ9YCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLlZBT3NbcHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcl0pIHRoaXMuY3JlYXRlVkFPKHByb2dyYW0pO1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5iaW5kVmVydGV4QXJyYXkodGhpcy5WQU9zW3Byb2dyYW0uYXR0cmlidXRlT3JkZXJdKTtcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuY3VycmVudEdlb21ldHJ5ID0gYCR7dGhpcy5pZH1fJHtwcm9ncmFtLmF0dHJpYnV0ZU9yZGVyfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYXR0cmlidXRlcyBuZWVkIHVwZGF0aW5nXG4gICAgICAgIHByb2dyYW0uYXR0cmlidXRlTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uLCB7IG5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChhdHRyLm5lZWRzVXBkYXRlKSB0aGlzLnVwZGF0ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRm9yIGRyYXdFbGVtZW50cywgb2Zmc2V0IG5lZWRzIHRvIGJlIG11bHRpcGxlIG9mIHR5cGUgc2l6ZVxuICAgICAgICBsZXQgaW5kZXhCeXRlc1BlckVsZW1lbnQgPSAyO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzLmluZGV4Py50eXBlID09PSB0aGlzLmdsLlVOU0lHTkVEX0lOVCkgaW5kZXhCeXRlc1BlckVsZW1lbnQgPSA0O1xuXG4gICAgICAgIGlmICh0aGlzLmlzSW5zdGFuY2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5kcmF3RWxlbWVudHNJbnN0YW5jZWQoXG4gICAgICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JhbmdlLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuaW5kZXgudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmluZGV4Lm9mZnNldCArIHRoaXMuZHJhd1JhbmdlLnN0YXJ0ICogaW5kZXhCeXRlc1BlckVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VkQ291bnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmRyYXdBcnJheXNJbnN0YW5jZWQobW9kZSwgdGhpcy5kcmF3UmFuZ2Uuc3RhcnQsIHRoaXMuZHJhd1JhbmdlLmNvdW50LCB0aGlzLmluc3RhbmNlZENvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyhcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmFuZ2UuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5pbmRleC50eXBlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuaW5kZXgub2Zmc2V0ICsgdGhpcy5kcmF3UmFuZ2Uuc3RhcnQgKiBpbmRleEJ5dGVzUGVyRWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyhtb2RlLCB0aGlzLmRyYXdSYW5nZS5zdGFydCwgdGhpcy5kcmF3UmFuZ2UuY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vIFVzZSBwb3NpdGlvbiBidWZmZXIsIG9yIG1pbi9tYXggaWYgYXZhaWxhYmxlXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgICAgIC8vIGlmIChhdHRyLm1pbikgcmV0dXJuIFsuLi5hdHRyLm1pbiwgLi4uYXR0ci5tYXhdO1xuICAgICAgICBpZiAoYXR0ci5kYXRhKSByZXR1cm4gYXR0cjtcbiAgICAgICAgaWYgKGlzQm91bmRzV2FybmVkKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUud2FybignTm8gcG9zaXRpb24gYnVmZmVyIGRhdGEgZm91bmQgdG8gY29tcHV0ZSBib3VuZHMnKTtcbiAgICAgICAgcmV0dXJuIChpc0JvdW5kc1dhcm5lZCA9IHRydWUpO1xuICAgIH1cblxuICAgIGNvbXB1dGVCb3VuZGluZ0JveChhdHRyKSB7XG4gICAgICAgIGlmICghYXR0cikgYXR0ciA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBhdHRyLmRhdGE7XG4gICAgICAgIC8vIERhdGEgbG9hZGVkIHNob3VsZG4ndCBoYWF2ZSBzdHJpZGUsIG9ubHkgYnVmZmVyc1xuICAgICAgICAvLyBjb25zdCBzdHJpZGUgPSBhdHRyLnN0cmlkZSA/IGF0dHIuc3RyaWRlIC8gYXJyYXkuQllURVNfUEVSX0VMRU1FTlQgOiBhdHRyLnNpemU7XG4gICAgICAgIGNvbnN0IHN0cmlkZSA9IGF0dHIuc2l6ZTtcblxuICAgICAgICBpZiAoIXRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgICBtaW46IG5ldyBWZWMzKCksXG4gICAgICAgICAgICAgICAgbWF4OiBuZXcgVmVjMygpLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogbmV3IFZlYzMoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlYzMoKSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IEluZmluaXR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuYm91bmRzLm1pbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5ib3VuZHMubWF4O1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmJvdW5kcy5jZW50ZXI7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5ib3VuZHMuc2NhbGU7XG5cbiAgICAgICAgbWluLnNldCgrSW5maW5pdHkpO1xuICAgICAgICBtYXguc2V0KC1JbmZpbml0eSk7XG5cbiAgICAgICAgLy8gVE9ETzogY2hlY2sgc2l6ZSBvZiBwb3NpdGlvbiAoZWcgdHJpYW5nbGUgd2l0aCBWZWMyKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gYXJyYXlbaV07XG4gICAgICAgICAgICBjb25zdCB5ID0gYXJyYXlbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgeiA9IGFycmF5W2kgKyAyXTtcblxuICAgICAgICAgICAgbWluLnggPSBNYXRoLm1pbih4LCBtaW4ueCk7XG4gICAgICAgICAgICBtaW4ueSA9IE1hdGgubWluKHksIG1pbi55KTtcbiAgICAgICAgICAgIG1pbi56ID0gTWF0aC5taW4oeiwgbWluLnopO1xuXG4gICAgICAgICAgICBtYXgueCA9IE1hdGgubWF4KHgsIG1heC54KTtcbiAgICAgICAgICAgIG1heC55ID0gTWF0aC5tYXgoeSwgbWF4LnkpO1xuICAgICAgICAgICAgbWF4LnogPSBNYXRoLm1heCh6LCBtYXgueik7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZS5zdWIobWF4LCBtaW4pO1xuICAgICAgICBjZW50ZXIuYWRkKG1pbiwgbWF4KS5kaXZpZGUoMik7XG4gICAgfVxuXG4gICAgY29tcHV0ZUJvdW5kaW5nU3BoZXJlKGF0dHIpIHtcbiAgICAgICAgaWYgKCFhdHRyKSBhdHRyID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBhcnJheSA9IGF0dHIuZGF0YTtcbiAgICAgICAgLy8gRGF0YSBsb2FkZWQgc2hvdWxkbid0IGhhYXZlIHN0cmlkZSwgb25seSBidWZmZXJzXG4gICAgICAgIC8vIGNvbnN0IHN0cmlkZSA9IGF0dHIuc3RyaWRlID8gYXR0ci5zdHJpZGUgLyBhcnJheS5CWVRFU19QRVJfRUxFTUVOVCA6IGF0dHIuc2l6ZTtcbiAgICAgICAgY29uc3Qgc3RyaWRlID0gYXR0ci5zaXplO1xuXG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHRoaXMuY29tcHV0ZUJvdW5kaW5nQm94KGF0dHIpO1xuXG4gICAgICAgIGxldCBtYXhSYWRpdXNTcSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIHRlbXBWZWMzLmZyb21BcnJheShhcnJheSwgaSk7XG4gICAgICAgICAgICBtYXhSYWRpdXNTcSA9IE1hdGgubWF4KG1heFJhZGl1c1NxLCB0aGlzLmJvdW5kcy5jZW50ZXIuc3F1YXJlZERpc3RhbmNlKHRlbXBWZWMzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdW5kcy5yYWRpdXMgPSBNYXRoLnNxcnQobWF4UmFkaXVzU3EpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuVkFPcykge1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5kZWxldGVWZXJ0ZXhBcnJheSh0aGlzLlZBT3Nba2V5XSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5WQU9zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5hdHRyaWJ1dGVzW2tleV0uYnVmZmVyKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4vVHJhbnNmb3JtLmpzJztcbmltcG9ydCB7IE1hdDMgfSBmcm9tICcuLi9tYXRoL01hdDMuanMnO1xuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4uL21hdGgvTWF0NC5qcyc7XG5cbmxldCBJRCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZXNoIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbSwgbW9kZSA9IGdsLlRSSUFOR0xFUywgZnJ1c3R1bUN1bGxlZCA9IHRydWUsIHJlbmRlck9yZGVyID0gMCB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKCFnbC5jYW52YXMpIGNvbnNvbGUuZXJyb3IoJ2dsIG5vdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQgdG8gTWVzaCcpO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaWQgPSBJRCsrO1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG5cbiAgICAgICAgLy8gVXNlZCB0byBza2lwIGZydXN0dW0gY3VsbGluZ1xuICAgICAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmcnVzdHVtQ3VsbGVkO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIHNvcnRpbmcgdG8gZm9yY2UgYW4gb3JkZXJcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlciA9IHJlbmRlck9yZGVyO1xuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMubm9ybWFsTWF0cml4ID0gbmV3IE1hdDMoKTtcbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIG9uQmVmb3JlUmVuZGVyKGYpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25BZnRlclJlbmRlcihmKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJDYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHJhdyh7IGNhbWVyYSB9ID0ge30pIHtcbiAgICAgICAgaWYgKGNhbWVyYSkge1xuICAgICAgICAgICAgLy8gQWRkIGVtcHR5IG1hdHJpeCB1bmlmb3JtcyB0byBwcm9ncmFtIGlmIHVuc2V0XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbE1hdHJpeCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wcm9ncmFtLnVuaWZvcm1zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXdNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWaWV3TWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbE1hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgbWF0cml4IHVuaWZvcm1zXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC52YWx1ZSA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLmNhbWVyYVBvc2l0aW9uLnZhbHVlID0gY2FtZXJhLndvcmxkUG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudmlld01hdHJpeC52YWx1ZSA9IGNhbWVyYS52aWV3TWF0cml4O1xuICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXgubXVsdGlwbHkoY2FtZXJhLnZpZXdNYXRyaXgsIHRoaXMud29ybGRNYXRyaXgpO1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxNYXRyaXguZ2V0Tm9ybWFsTWF0cml4KHRoaXMubW9kZWxWaWV3TWF0cml4KTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbE1hdHJpeC52YWx1ZSA9IHRoaXMud29ybGRNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMubW9kZWxWaWV3TWF0cml4LnZhbHVlID0gdGhpcy5tb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMubm9ybWFsTWF0cml4LnZhbHVlID0gdGhpcy5ub3JtYWxNYXRyaXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MuZm9yRWFjaCgoZikgPT4gZiAmJiBmKHsgbWVzaDogdGhpcywgY2FtZXJhIH0pKTtcblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgZmFjZXMgbmVlZCB0byBiZSBmbGlwcGVkIC0gd2hlbiBtZXNoIHNjYWxlZCBuZWdhdGl2ZWx5XG4gICAgICAgIGxldCBmbGlwRmFjZXMgPSB0aGlzLnByb2dyYW0uY3VsbEZhY2UgJiYgdGhpcy53b3JsZE1hdHJpeC5kZXRlcm1pbmFudCgpIDwgMDtcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSh7IGZsaXBGYWNlcyB9KTtcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kcmF3KHsgbW9kZTogdGhpcy5tb2RlLCBwcm9ncmFtOiB0aGlzLnByb2dyYW0gfSk7XG4gICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJDYWxsYmFja3MuZm9yRWFjaCgoZikgPT4gZiAmJiBmKHsgbWVzaDogdGhpcywgY2FtZXJhIH0pKTtcbiAgICB9XG59XG4iLCIvLyBUT0RPOiB1cGxvYWQgZW1wdHkgdGV4dHVyZSBpZiBudWxsID8gbWF5YmUgbm90XG4vLyBUT0RPOiB1cGxvYWQgaWRlbnRpdHkgbWF0cml4IGlmIG51bGwgP1xuLy8gVE9ETzogc2FtcGxlciBDdWJlXG5cbmxldCBJRCA9IDE7XG5cbi8vIGNhY2hlIG9mIHR5cGVkIGFycmF5cyB1c2VkIHRvIGZsYXR0ZW4gdW5pZm9ybSBhcnJheXNcbmNvbnN0IGFycmF5Q2FjaGVGMzIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIFByb2dyYW0ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbCxcbiAgICAgICAge1xuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICB1bmlmb3JtcyA9IHt9LFxuXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VsbEZhY2UgPSBnbC5CQUNLLFxuICAgICAgICAgICAgZnJvbnRGYWNlID0gZ2wuQ0NXLFxuICAgICAgICAgICAgZGVwdGhUZXN0ID0gdHJ1ZSxcbiAgICAgICAgICAgIGRlcHRoV3JpdGUgPSB0cnVlLFxuICAgICAgICAgICAgZGVwdGhGdW5jID0gZ2wuTEVTUyxcbiAgICAgICAgfSA9IHt9XG4gICAgKSB7XG4gICAgICAgIGlmICghZ2wuY2FudmFzKSBjb25zb2xlLmVycm9yKCdnbCBub3QgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50IHRvIFByb2dyYW0nKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXM7XG4gICAgICAgIHRoaXMuaWQgPSBJRCsrO1xuXG4gICAgICAgIGlmICghdmVydGV4KSBjb25zb2xlLndhcm4oJ3ZlcnRleCBzaGFkZXIgbm90IHN1cHBsaWVkJyk7XG4gICAgICAgIGlmICghZnJhZ21lbnQpIGNvbnNvbGUud2FybignZnJhZ21lbnQgc2hhZGVyIG5vdCBzdXBwbGllZCcpO1xuXG4gICAgICAgIC8vIFN0b3JlIHByb2dyYW0gc3RhdGVcbiAgICAgICAgdGhpcy50cmFuc3BhcmVudCA9IHRyYW5zcGFyZW50O1xuICAgICAgICB0aGlzLmN1bGxGYWNlID0gY3VsbEZhY2U7XG4gICAgICAgIHRoaXMuZnJvbnRGYWNlID0gZnJvbnRGYWNlO1xuICAgICAgICB0aGlzLmRlcHRoVGVzdCA9IGRlcHRoVGVzdDtcbiAgICAgICAgdGhpcy5kZXB0aFdyaXRlID0gZGVwdGhXcml0ZTtcbiAgICAgICAgdGhpcy5kZXB0aEZ1bmMgPSBkZXB0aEZ1bmM7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jID0ge307XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbiA9IHt9O1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGJsZW5kRnVuYyBpZiB0cmFuc3BhcmVudCBmbGFnZ2VkXG4gICAgICAgIGlmICh0aGlzLnRyYW5zcGFyZW50ICYmICF0aGlzLmJsZW5kRnVuYy5zcmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsLnJlbmRlcmVyLnByZW11bHRpcGxpZWRBbHBoYSkgdGhpcy5zZXRCbGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgICAgICBlbHNlIHRoaXMuc2V0QmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGlsZSB2ZXJ0ZXggc2hhZGVyIGFuZCBsb2cgZXJyb3JzXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlciwgdmVydGV4KTtcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBpZiAoZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpICE9PSAnJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dsLmdldFNoYWRlckluZm9Mb2codmVydGV4U2hhZGVyKX1cXG5WZXJ0ZXggU2hhZGVyXFxuJHthZGRMaW5lTnVtYmVycyh2ZXJ0ZXgpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGlsZSBmcmFnbWVudCBzaGFkZXIgYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBmcmFnbWVudCk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBpZiAoZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcikgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcil9XFxuRnJhZ21lbnQgU2hhZGVyXFxuJHthZGRMaW5lTnVtYmVycyhmcmFnbWVudCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIHByb2dyYW0gYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBzaGFkZXIgb25jZSBsaW5rZWRcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgICAgLy8gR2V0IGFjdGl2ZSB1bmlmb3JtIGxvY2F0aW9uc1xuICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxldCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICAgICAgICBmb3IgKGxldCB1SW5kZXggPSAwOyB1SW5kZXggPCBudW1Vbmlmb3JtczsgdUluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybSh0aGlzLnByb2dyYW0sIHVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KHVuaWZvcm0sIGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIHVuaWZvcm0ubmFtZSkpO1xuXG4gICAgICAgICAgICAvLyBzcGxpdCB1bmlmb3JtcycgbmFtZXMgdG8gc2VwYXJhdGUgYXJyYXkgYW5kIHN0cnVjdCBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gdW5pZm9ybS5uYW1lLm1hdGNoKC8oXFx3KykvZyk7XG5cbiAgICAgICAgICAgIHVuaWZvcm0udW5pZm9ybU5hbWUgPSBzcGxpdFswXTtcbiAgICAgICAgICAgIHVuaWZvcm0ubmFtZUNvbXBvbmVudHMgPSBzcGxpdC5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhY3RpdmUgYXR0cmlidXRlIGxvY2F0aW9uc1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IG51bUF0dHJpYnMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuQUNUSVZFX0FUVFJJQlVURVMpO1xuICAgICAgICBmb3IgKGxldCBhSW5kZXggPSAwOyBhSW5kZXggPCBudW1BdHRyaWJzOyBhSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZ2wuZ2V0QWN0aXZlQXR0cmliKHRoaXMucHJvZ3JhbSwgYUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCBhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAvLyBJZ25vcmUgc3BlY2lhbCBidWlsdC1pbiBpbnB1dHMuIGVnIGdsX1ZlcnRleElELCBnbF9JbnN0YW5jZUlEXG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IC0xKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxvY2F0aW9uc1tsb2NhdGlvbl0gPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLnNldChhdHRyaWJ1dGUsIGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9yZGVyID0gbG9jYXRpb25zLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHNldEJsZW5kRnVuYyhzcmMsIGRzdCwgc3JjQWxwaGEsIGRzdEFscGhhKSB7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuZHN0ID0gZHN0O1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5zcmNBbHBoYSA9IHNyY0FscGhhO1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5kc3RBbHBoYSA9IGRzdEFscGhhO1xuICAgICAgICBpZiAoc3JjKSB0aGlzLnRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRCbGVuZEVxdWF0aW9uKG1vZGVSR0IsIG1vZGVBbHBoYSkge1xuICAgICAgICB0aGlzLmJsZW5kRXF1YXRpb24ubW9kZVJHQiA9IG1vZGVSR0I7XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPSBtb2RlQWxwaGE7XG4gICAgfVxuXG4gICAgYXBwbHlTdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGhUZXN0KSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuICAgICAgICBlbHNlIHRoaXMuZ2wucmVuZGVyZXIuZGlzYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1bGxGYWNlKSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG4gICAgICAgIGVsc2UgdGhpcy5nbC5yZW5kZXJlci5kaXNhYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcblxuICAgICAgICBpZiAodGhpcy5ibGVuZEZ1bmMuc3JjKSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLnJlbmRlcmVyLmRpc2FibGUodGhpcy5nbC5CTEVORCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VsbEZhY2UpIHRoaXMuZ2wucmVuZGVyZXIuc2V0Q3VsbEZhY2UodGhpcy5jdWxsRmFjZSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0RnJvbnRGYWNlKHRoaXMuZnJvbnRGYWNlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXREZXB0aE1hc2sodGhpcy5kZXB0aFdyaXRlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXREZXB0aEZ1bmModGhpcy5kZXB0aEZ1bmMpO1xuICAgICAgICBpZiAodGhpcy5ibGVuZEZ1bmMuc3JjKVxuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRCbGVuZEZ1bmModGhpcy5ibGVuZEZ1bmMuc3JjLCB0aGlzLmJsZW5kRnVuYy5kc3QsIHRoaXMuYmxlbmRGdW5jLnNyY0FscGhhLCB0aGlzLmJsZW5kRnVuYy5kc3RBbHBoYSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0QmxlbmRFcXVhdGlvbih0aGlzLmJsZW5kRXF1YXRpb24ubW9kZVJHQiwgdGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVBbHBoYSk7XG4gICAgfVxuXG4gICAgdXNlKHsgZmxpcEZhY2VzID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCB0ZXh0dXJlVW5pdCA9IC0xO1xuICAgICAgICBjb25zdCBwcm9ncmFtQWN0aXZlID0gdGhpcy5nbC5yZW5kZXJlci5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9PT0gdGhpcy5pZDtcblxuICAgICAgICAvLyBBdm9pZCBnbCBjYWxsIGlmIHByb2dyYW0gYWxyZWFkeSBpbiB1c2VcbiAgICAgICAgaWYgKCFwcm9ncmFtQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc3RhdGUuY3VycmVudFByb2dyYW0gPSB0aGlzLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IG9ubHkgdGhlIGFjdGl2ZSB1bmlmb3JtcyBmb3VuZCBpbiB0aGUgc2hhZGVyXG4gICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbiwgYWN0aXZlVW5pZm9ybSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW2FjdGl2ZVVuaWZvcm0udW5pZm9ybU5hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBhY3RpdmVVbmlmb3JtLm5hbWVDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bmlmb3JtKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgaW4gdW5pZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5pZm9ybVtjb21wb25lbnRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdW5pZm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3YXJuKGBBY3RpdmUgdW5pZm9ybSAke2FjdGl2ZVVuaWZvcm0ubmFtZX0gaGFzIG5vdCBiZWVuIHN1cHBsaWVkYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1bmlmb3JtICYmIHVuaWZvcm0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3YXJuKGAke2FjdGl2ZVVuaWZvcm0ubmFtZX0gdW5pZm9ybSBpcyBtaXNzaW5nIGEgdmFsdWUgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdCA9IHRleHR1cmVVbml0ICsgMTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRleHR1cmUgbmVlZHMgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgICAgICAgIHVuaWZvcm0udmFsdWUudXBkYXRlKHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciB0ZXh0dXJlIGFycmF5cywgc2V0IHVuaWZvcm0gYXMgYW4gYXJyYXkgb2YgdGV4dHVyZSB1bml0cyBpbnN0ZWFkIG9mIGp1c3Qgb25lXG4gICAgICAgICAgICBpZiAodW5pZm9ybS52YWx1ZS5sZW5ndGggJiYgdW5pZm9ybS52YWx1ZVswXS50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZVVuaXRzID0gW107XG4gICAgICAgICAgICAgICAgdW5pZm9ybS52YWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdCA9IHRleHR1cmVVbml0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudXBkYXRlKHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVuaXRzLnB1c2godGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFVuaWZvcm0odGhpcy5nbCwgYWN0aXZlVW5pZm9ybS50eXBlLCBsb2NhdGlvbiwgdGV4dHVyZVVuaXRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB1bmlmb3JtLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hcHBseVN0YXRlKCk7XG4gICAgICAgIGlmIChmbGlwRmFjZXMpIHRoaXMuZ2wucmVuZGVyZXIuc2V0RnJvbnRGYWNlKHRoaXMuZnJvbnRGYWNlID09PSB0aGlzLmdsLkNDVyA/IHRoaXMuZ2wuQ1cgOiB0aGlzLmdsLkNDVyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm0oZ2wsIHR5cGUsIGxvY2F0aW9uLCB2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoID8gZmxhdHRlbih2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0KGxvY2F0aW9uKTtcblxuICAgIC8vIEF2b2lkIHJlZHVuZGFudCB1bmlmb3JtIGNvbW1hbmRzXG4gICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAoc2V0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzZXRWYWx1ZS5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY2xvbmUgYXJyYXkgdG8gc3RvcmUgYXMgY2FjaGVcbiAgICAgICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCB2YWx1ZS5zbGljZSgwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlzRXF1YWwoc2V0VmFsdWUsIHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FjaGVkIGFycmF5IHZhbHVlc1xuICAgICAgICAgICAgc2V0VmFsdWUuc2V0ID8gc2V0VmFsdWUuc2V0KHZhbHVlKSA6IHNldEFycmF5KHNldFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLnNldChsb2NhdGlvbiwgc2V0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNldFZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLnNldChsb2NhdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIDUxMjY6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdmFsdWUpIDogZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUXG4gICAgICAgIGNhc2UgMzU2NjQ6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUMyXG4gICAgICAgIGNhc2UgMzU2NjU6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUMzXG4gICAgICAgIGNhc2UgMzU2NjY6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUM0XG4gICAgICAgIGNhc2UgMzU2NzA6IC8vIEJPT0xcbiAgICAgICAgY2FzZSA1MTI0OiAvLyBJTlRcbiAgICAgICAgY2FzZSAzNTY3ODogLy8gU0FNUExFUl8yRFxuICAgICAgICBjYXNlIDM1NjgwOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA/IGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHZhbHVlKSA6IGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdmFsdWUpOyAvLyBTQU1QTEVSX0NVQkVcbiAgICAgICAgY2FzZSAzNTY3MTogLy8gQk9PTF9WRUMyXG4gICAgICAgIGNhc2UgMzU2Njc6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBJTlRfVkVDMlxuICAgICAgICBjYXNlIDM1NjcyOiAvLyBCT09MX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY2ODpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIElOVF9WRUMzXG4gICAgICAgIGNhc2UgMzU2NzM6IC8vIEJPT0xfVkVDNFxuICAgICAgICBjYXNlIDM1NjY5OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHZhbHVlKTsgLy8gSU5UX1ZFQzRcbiAgICAgICAgY2FzZSAzNTY3NDpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpOyAvLyBGTE9BVF9NQVQyXG4gICAgICAgIGNhc2UgMzU2NzU6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTsgLy8gRkxPQVRfTUFUM1xuICAgICAgICBjYXNlIDM1Njc2OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZSk7IC8vIEZMT0FUX01BVDRcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZExpbmVOdW1iZXJzKHN0cmluZykge1xuICAgIGxldCBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaW5lc1tpXSA9IGkgKyAxICsgJzogJyArIGxpbmVzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYSkge1xuICAgIGNvbnN0IGFycmF5TGVuID0gYS5sZW5ndGg7XG4gICAgY29uc3QgdmFsdWVMZW4gPSBhWzBdLmxlbmd0aDtcbiAgICBpZiAodmFsdWVMZW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGE7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXlMZW4gKiB2YWx1ZUxlbjtcbiAgICBsZXQgdmFsdWUgPSBhcnJheUNhY2hlRjMyW2xlbmd0aF07XG4gICAgaWYgKCF2YWx1ZSkgYXJyYXlDYWNoZUYzMltsZW5ndGhdID0gdmFsdWUgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxlbjsgaSsrKSB2YWx1ZS5zZXQoYVtpXSwgaSAqIHZhbHVlTGVuKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0QXJyYXkoYSwgYikge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgfVxufVxuXG5sZXQgd2FybkNvdW50ID0gMDtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGlmICh3YXJuQ291bnQgPiAxMDApIHJldHVybjtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgd2FybkNvdW50Kys7XG4gICAgaWYgKHdhcm5Db3VudCA+IDEwMCkgY29uc29sZS53YXJuKCdNb3JlIHRoYW4gMTAwIHByb2dyYW0gd2FybmluZ3MgLSBzdG9wcGluZyBsb2dzLicpO1xufVxuIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi9jb3JlL0dlb21ldHJ5LmpzJztcblxuZXhwb3J0IGNsYXNzIFBsYW5lIGV4dGVuZHMgR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKGdsLCB7IHdpZHRoID0gMSwgaGVpZ2h0ID0gMSwgd2lkdGhTZWdtZW50cyA9IDEsIGhlaWdodFNlZ21lbnRzID0gMSwgYXR0cmlidXRlcyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCB3U2VncyA9IHdpZHRoU2VnbWVudHM7XG4gICAgICAgIGNvbnN0IGhTZWdzID0gaGVpZ2h0U2VnbWVudHM7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGxlbmd0aCBvZiBhcnJheXNcbiAgICAgICAgY29uc3QgbnVtID0gKHdTZWdzICsgMSkgKiAoaFNlZ3MgKyAxKTtcbiAgICAgICAgY29uc3QgbnVtSW5kaWNlcyA9IHdTZWdzICogaFNlZ3MgKiA2O1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGVtcHR5IGFycmF5cyBvbmNlXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KG51bSAqIDIpO1xuICAgICAgICBjb25zdCBpbmRleCA9IG51bUluZGljZXMgPiA2NTUzNiA/IG5ldyBVaW50MzJBcnJheShudW1JbmRpY2VzKSA6IG5ldyBVaW50MTZBcnJheShudW1JbmRpY2VzKTtcblxuICAgICAgICBQbGFuZS5idWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgd2lkdGgsIGhlaWdodCwgMCwgd1NlZ3MsIGhTZWdzKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHNpemU6IDMsIGRhdGE6IHBvc2l0aW9uIH0sXG4gICAgICAgICAgICBub3JtYWw6IHsgc2l6ZTogMywgZGF0YTogbm9ybWFsIH0sXG4gICAgICAgICAgICB1djogeyBzaXplOiAyLCBkYXRhOiB1diB9LFxuICAgICAgICAgICAgaW5kZXg6IHsgZGF0YTogaW5kZXggfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwZXIoZ2wsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBidWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHdTZWdzLCBoU2VncywgdSA9IDAsIHYgPSAxLCB3ID0gMiwgdURpciA9IDEsIHZEaXIgPSAtMSwgaSA9IDAsIGlpID0gMCkge1xuICAgICAgICBjb25zdCBpbyA9IGk7XG4gICAgICAgIGNvbnN0IHNlZ1cgPSB3aWR0aCAvIHdTZWdzO1xuICAgICAgICBjb25zdCBzZWdIID0gaGVpZ2h0IC8gaFNlZ3M7XG5cbiAgICAgICAgZm9yIChsZXQgaXkgPSAwOyBpeSA8PSBoU2VnczsgaXkrKykge1xuICAgICAgICAgICAgbGV0IHkgPSBpeSAqIHNlZ0ggLSBoZWlnaHQgLyAyO1xuICAgICAgICAgICAgZm9yIChsZXQgaXggPSAwOyBpeCA8PSB3U2VnczsgaXgrKywgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBpeCAqIHNlZ1cgLSB3aWR0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBwb3NpdGlvbltpICogMyArIHVdID0geCAqIHVEaXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25baSAqIDMgKyB2XSA9IHkgKiB2RGlyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW2kgKiAzICsgd10gPSBkZXB0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyB1XSA9IDA7XG4gICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgdl0gPSAwO1xuICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIHddID0gZGVwdGggPj0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgIHV2W2kgKiAyXSA9IGl4IC8gd1NlZ3M7XG4gICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IDEgLSBpeSAvIGhTZWdzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl5ID09PSBoU2VncyB8fCBpeCA9PT0gd1NlZ3MpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCBhID0gaW8gKyBpeCArIGl5ICogKHdTZWdzICsgMSk7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSBpbyArIGl4ICsgKGl5ICsgMSkgKiAod1NlZ3MgKyAxKTtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGlvICsgaXggKyAoaXkgKyAxKSAqICh3U2VncyArIDEpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgZCA9IGlvICsgaXggKyBpeSAqICh3U2VncyArIDEpICsgMTtcblxuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNl0gPSBhO1xuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNiArIDFdID0gYjtcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyAyXSA9IGQ7XG4gICAgICAgICAgICAgICAgaW5kZXhbaWkgKiA2ICsgM10gPSBiO1xuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNiArIDRdID0gYztcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyA1XSA9IGQ7XG4gICAgICAgICAgICAgICAgaWkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIE1hdDNGdW5jIGZyb20gJy4vZnVuY3Rpb25zL01hdDNGdW5jLmpzJztcblxuZXhwb3J0IGNsYXNzIE1hdDMgZXh0ZW5kcyBBcnJheSB7XG4gICAgY29uc3RydWN0b3IobTAwID0gMSwgbTAxID0gMCwgbTAyID0gMCwgbTEwID0gMCwgbTExID0gMSwgbTEyID0gMCwgbTIwID0gMCwgbTIxID0gMCwgbTIyID0gMSkge1xuICAgICAgICBzdXBlcihtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0KG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgICAgICAgaWYgKG0wMC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkobTAwKTtcbiAgICAgICAgTWF0M0Z1bmMuc2V0KHRoaXMsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMudHJhbnNsYXRlKHRoaXMsIG0sIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMucm90YXRlKHRoaXMsIG0sIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZSh2LCBtID0gdGhpcykge1xuICAgICAgICBNYXQzRnVuYy5zY2FsZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkobWEsIG1iKSB7XG4gICAgICAgIGlmIChtYikge1xuICAgICAgICAgICAgTWF0M0Z1bmMubXVsdGlwbHkodGhpcywgbWEsIG1iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1hdDNGdW5jLm11bHRpcGx5KHRoaXMsIHRoaXMsIG1hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZGVudGl0eSgpIHtcbiAgICAgICAgTWF0M0Z1bmMuaWRlbnRpdHkodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkobSkge1xuICAgICAgICBNYXQzRnVuYy5jb3B5KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tTWF0cml4NChtKSB7XG4gICAgICAgIE1hdDNGdW5jLmZyb21NYXQ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgICAgIE1hdDNGdW5jLmZyb21RdWF0KHRoaXMsIHEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tQmFzaXModmVjM2EsIHZlYzNiLCB2ZWMzYykge1xuICAgICAgICB0aGlzLnNldCh2ZWMzYVswXSwgdmVjM2FbMV0sIHZlYzNhWzJdLCB2ZWMzYlswXSwgdmVjM2JbMV0sIHZlYzNiWzJdLCB2ZWMzY1swXSwgdmVjM2NbMV0sIHZlYzNjWzJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52ZXJzZShtID0gdGhpcykge1xuICAgICAgICBNYXQzRnVuYy5pbnZlcnQodGhpcywgbSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldE5vcm1hbE1hdHJpeChtKSB7XG4gICAgICAgIE1hdDNGdW5jLm5vcm1hbEZyb21NYXQ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29waWVzIHRoZSB1cHBlci1sZWZ0IDN4MyB2YWx1ZXMgaW50byB0aGUgZ2l2ZW4gbWF0My5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIDN4MyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSAgIHRoZSBzb3VyY2UgNHg0IG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDQob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVs0XTtcbiAgICBvdXRbNF0gPSBhWzVdO1xuICAgIG91dFs1XSA9IGFbNl07XG4gICAgb3V0WzZdID0gYVs4XTtcbiAgICBvdXRbN10gPSBhWzldO1xuICAgIG91dFs4XSA9IGFbMTBdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIGxldCB4ID0gcVswXSxcbiAgICAgICAgeSA9IHFbMV0sXG4gICAgICAgIHogPSBxWzJdLFxuICAgICAgICB3ID0gcVszXTtcbiAgICBsZXQgeDIgPSB4ICsgeDtcbiAgICBsZXQgeTIgPSB5ICsgeTtcbiAgICBsZXQgejIgPSB6ICsgejtcblxuICAgIGxldCB4eCA9IHggKiB4MjtcbiAgICBsZXQgeXggPSB5ICogeDI7XG4gICAgbGV0IHl5ID0geSAqIHkyO1xuICAgIGxldCB6eCA9IHogKiB4MjtcbiAgICBsZXQgenkgPSB6ICogeTI7XG4gICAgbGV0IHp6ID0geiAqIHoyO1xuICAgIGxldCB3eCA9IHcgKiB4MjtcbiAgICBsZXQgd3kgPSB3ICogeTI7XG4gICAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzNdID0geXggLSB3ejtcbiAgICBvdXRbNl0gPSB6eCArIHd5O1xuXG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbNF0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbN10gPSB6eSAtIHd4O1xuXG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbNV0gPSB6eSArIHd4O1xuICAgIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgb3V0WzBdID0gbTAwO1xuICAgIG91dFsxXSA9IG0wMTtcbiAgICBvdXRbMl0gPSBtMDI7XG4gICAgb3V0WzNdID0gbTEwO1xuICAgIG91dFs0XSA9IG0xMTtcbiAgICBvdXRbNV0gPSBtMTI7XG4gICAgb3V0WzZdID0gbTIwO1xuICAgIG91dFs3XSA9IG0yMTtcbiAgICBvdXRbOF0gPSBtMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQzIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAxO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgbGV0IGEwMSA9IGFbMV0sXG4gICAgICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICAgICAgYTEyID0gYVs1XTtcbiAgICAgICAgb3V0WzFdID0gYVszXTtcbiAgICAgICAgb3V0WzJdID0gYVs2XTtcbiAgICAgICAgb3V0WzNdID0gYTAxO1xuICAgICAgICBvdXRbNV0gPSBhWzddO1xuICAgICAgICBvdXRbNl0gPSBhMDI7XG4gICAgICAgIG91dFs3XSA9IGExMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzNdO1xuICAgICAgICBvdXRbMl0gPSBhWzZdO1xuICAgICAgICBvdXRbM10gPSBhWzFdO1xuICAgICAgICBvdXRbNF0gPSBhWzRdO1xuICAgICAgICBvdXRbNV0gPSBhWzddO1xuICAgICAgICBvdXRbNl0gPSBhWzJdO1xuICAgICAgICBvdXRbN10gPSBhWzVdO1xuICAgICAgICBvdXRbOF0gPSBhWzhdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl07XG4gICAgbGV0IGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV07XG4gICAgbGV0IGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF07XG5cbiAgICBsZXQgYjAxID0gYTIyICogYTExIC0gYTEyICogYTIxO1xuICAgIGxldCBiMTEgPSAtYTIyICogYTEwICsgYTEyICogYTIwO1xuICAgIGxldCBiMjEgPSBhMjEgKiBhMTAgLSBhMTEgKiBhMjA7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgbGV0IGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gICAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICAgIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICAgIG91dFszXSA9IGIxMSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gICAgb3V0WzZdID0gYjIxICogZGV0O1xuICAgIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl07XG4gICAgbGV0IGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV07XG4gICAgbGV0IGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF07XG5cbiAgICBsZXQgYjAwID0gYlswXSxcbiAgICAgICAgYjAxID0gYlsxXSxcbiAgICAgICAgYjAyID0gYlsyXTtcbiAgICBsZXQgYjEwID0gYlszXSxcbiAgICAgICAgYjExID0gYls0XSxcbiAgICAgICAgYjEyID0gYls1XTtcbiAgICBsZXQgYjIwID0gYls2XSxcbiAgICAgICAgYjIxID0gYls3XSxcbiAgICAgICAgYjIyID0gYls4XTtcblxuICAgIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gICAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuXG4gICAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICAgIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG5cbiAgICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gICAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICAgIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDMgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF0sXG4gICAgICAgIHggPSB2WzBdLFxuICAgICAgICB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IGEwMDtcbiAgICBvdXRbMV0gPSBhMDE7XG4gICAgb3V0WzJdID0gYTAyO1xuXG4gICAgb3V0WzNdID0gYTEwO1xuICAgIG91dFs0XSA9IGExMTtcbiAgICBvdXRbNV0gPSBhMTI7XG5cbiAgICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMDtcbiAgICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMTtcbiAgICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQzIGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XSxcbiAgICAgICAgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gICAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTA7XG4gICAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTE7XG4gICAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTI7XG5cbiAgICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMDtcbiAgICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMTtcbiAgICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMjtcblxuICAgIG91dFs2XSA9IGEyMDtcbiAgICBvdXRbN10gPSBhMjE7XG4gICAgb3V0WzhdID0gYTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQzIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICBsZXQgeCA9IHZbMF0sXG4gICAgICAgIHkgPSB2WzFdO1xuXG4gICAgb3V0WzBdID0geCAqIGFbMF07XG4gICAgb3V0WzFdID0geCAqIGFbMV07XG4gICAgb3V0WzJdID0geCAqIGFbMl07XG5cbiAgICBvdXRbM10gPSB5ICogYVszXTtcbiAgICBvdXRbNF0gPSB5ICogYVs0XTtcbiAgICBvdXRbNV0gPSB5ICogYVs1XTtcblxuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDN4MyBub3JtYWwgbWF0cml4ICh0cmFuc3Bvc2UgaW52ZXJzZSkgZnJvbSB0aGUgNHg0IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7bWF0NH0gYSBNYXQ0IHRvIGRlcml2ZSB0aGUgbm9ybWFsIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM107XG4gICAgbGV0IGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG4gICAgbGV0IGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcbiAgICBsZXQgYTMwID0gYVsxMl0sXG4gICAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgICBhMzIgPSBhWzE0XSxcbiAgICAgICAgYTMzID0gYVsxNV07XG5cbiAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICAgIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICAgIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICAgIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICAgIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuXG4gICAgb3V0WzNdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG5cbiAgICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgMkQgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHlvdXIgZ2wgY29udGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgZ2wgY29udGV4dFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbihvdXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBvdXRbMF0gPSAyIC8gd2lkdGg7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gLTIgLyBoZWlnaHQ7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAtMTtcbiAgICBvdXRbN10gPSAxO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSArIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSArIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYjtcbiAgICBvdXRbMV0gPSBhWzFdICogYjtcbiAgICBvdXRbMl0gPSBhWzJdICogYjtcbiAgICBvdXRbM10gPSBhWzNdICogYjtcbiAgICBvdXRbNF0gPSBhWzRdICogYjtcbiAgICBvdXRbNV0gPSBhWzVdICogYjtcbiAgICBvdXRbNl0gPSBhWzZdICogYjtcbiAgICBvdXRbN10gPSBhWzddICogYjtcbiAgICBvdXRbOF0gPSBhWzhdICogYjtcbiAgICByZXR1cm4gb3V0O1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDhiY2Y4ZDE5NTM1OTc3YTJhZTdcIikiXSwibmFtZXMiOlsiTWVzaCIsIlByb2dyYW0iLCJUZXh0dXJlIiwidmVydGV4IiwiZnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpbWUiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwidU9mZnNldCIsIm1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNjcm9sbCIsInNwZWVkIiwiT0ZGU0VUX1NDQUxFIiwib2Zmc2V0Iiwib25SZXNpemUiLCJUcmFuc2Zvcm0iLCJQbGFuZSIsIlByZWZpeCIsIk1lZGlhIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJncm91cCIsImdhbGxlcnkiLCJkb2N1bWVudCIsImdhbGxlcnlFbGVtZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2hvdyIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImluZGV4IiwiaGlkZSIsImV2ZW50IiwiZ2FsbGVyeVNpemVzIiwibGFzdCIsIm1lZGlhIiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsInN0eWxlIiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiQm94IiwiQ2FtZXJhIiwiUmVuZGVyZXIiLCJIb21lIiwidXJsIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkcHIiLCJNYXRoIiwibWluIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNsZWFyQ29sb3IiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUdlb21ldHJpZXMiLCJmb3YiLCJ6IiwiY3JlYXRlSG9tZSIsImhvbWUiLCJ2aWV3cG9ydCIsIm9uQ2hhbmdlIiwic2NyZWVuIiwic2V0U2l6ZSIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiUEkiLCJ0YW4iLCJ2YWx1ZXMiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJhcHBsaWNhdGlvbiIsInJlbmRlciIsIlZlYzMiLCJ0ZW1wVmVjMyIsIklEIiwiQVRUUl9JRCIsImlzQm91bmRzV2FybmVkIiwiR2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwiY29uc29sZSIsImVycm9yIiwiaWQiLCJWQU9zIiwiZHJhd1JhbmdlIiwiY291bnQiLCJpbnN0YW5jZWRDb3VudCIsImJpbmRWZXJ0ZXhBcnJheSIsImN1cnJlbnRHZW9tZXRyeSIsImdsU3RhdGUiLCJzdGF0ZSIsImtleSIsImFkZEF0dHJpYnV0ZSIsImF0dHIiLCJzaXplIiwidHlwZSIsImRhdGEiLCJGbG9hdDMyQXJyYXkiLCJGTE9BVCIsIlVpbnQxNkFycmF5IiwiVU5TSUdORURfU0hPUlQiLCJVTlNJR05FRF9JTlQiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsIkFSUkFZX0JVRkZFUiIsIm5vcm1hbGl6ZWQiLCJzdHJpZGUiLCJieXRlTGVuZ3RoIiwibGVuZ3RoIiwiZGl2aXNvciIsImluc3RhbmNlZCIsIm5lZWRzVXBkYXRlIiwidXNhZ2UiLCJTVEFUSUNfRFJBVyIsImJ1ZmZlciIsInVwZGF0ZUF0dHJpYnV0ZSIsImlzSW5zdGFuY2VkIiwid2FybiIsIm1heCIsImlzTmV3QnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYm91bmRCdWZmZXIiLCJiaW5kQnVmZmVyIiwiYnVmZmVyRGF0YSIsImJ1ZmZlclN1YkRhdGEiLCJzZXRJbmRleCIsInNldERyYXdSYW5nZSIsInNldEluc3RhbmNlZENvdW50IiwiY3JlYXRlVkFPIiwiYXR0cmlidXRlT3JkZXIiLCJjcmVhdGVWZXJ0ZXhBcnJheSIsImJpbmRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZm9yRWFjaCIsImxvY2F0aW9uIiwibmFtZSIsIm51bUxvYyIsImkiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ2ZXJ0ZXhBdHRyaWJEaXZpc29yIiwiZHJhdyIsIm1vZGUiLCJUUklBTkdMRVMiLCJpbmRleEJ5dGVzUGVyRWxlbWVudCIsImRyYXdFbGVtZW50c0luc3RhbmNlZCIsImRyYXdBcnJheXNJbnN0YW5jZWQiLCJkcmF3RWxlbWVudHMiLCJkcmF3QXJyYXlzIiwiZ2V0UG9zaXRpb24iLCJjb21wdXRlQm91bmRpbmdCb3giLCJhcnJheSIsImNlbnRlciIsInJhZGl1cyIsIkluZmluaXR5Iiwic2V0IiwibCIsInN1YiIsImFkZCIsImRpdmlkZSIsImNvbXB1dGVCb3VuZGluZ1NwaGVyZSIsIm1heFJhZGl1c1NxIiwiZnJvbUFycmF5Iiwic3F1YXJlZERpc3RhbmNlIiwic3FydCIsInJlbW92ZSIsImRlbGV0ZVZlcnRleEFycmF5IiwiZGVsZXRlQnVmZmVyIiwiTWF0MyIsIk1hdDQiLCJmcnVzdHVtQ3VsbGVkIiwicmVuZGVyT3JkZXIiLCJtb2RlbFZpZXdNYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJiZWZvcmVSZW5kZXJDYWxsYmFja3MiLCJhZnRlclJlbmRlckNhbGxiYWNrcyIsIm9uQmVmb3JlUmVuZGVyIiwiZiIsInB1c2giLCJvbkFmdGVyUmVuZGVyIiwibW9kZWxNYXRyaXgiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWV3TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNhbWVyYVBvc2l0aW9uIiwid29ybGRQb3NpdGlvbiIsIm11bHRpcGx5Iiwid29ybGRNYXRyaXgiLCJnZXROb3JtYWxNYXRyaXgiLCJmbGlwRmFjZXMiLCJjdWxsRmFjZSIsImRldGVybWluYW50IiwidXNlIiwiYXJyYXlDYWNoZUYzMiIsInRyYW5zcGFyZW50IiwiQkFDSyIsImZyb250RmFjZSIsIkNDVyIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJkZXB0aEZ1bmMiLCJMRVNTIiwiYmxlbmRGdW5jIiwiYmxlbmRFcXVhdGlvbiIsInNyYyIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldEJsZW5kRnVuYyIsIk9ORSIsIk9ORV9NSU5VU19TUkNfQUxQSEEiLCJTUkNfQUxQSEEiLCJ2ZXJ0ZXhTaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlckluZm9Mb2ciLCJhZGRMaW5lTnVtYmVycyIsImZyYWdtZW50U2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsImRlbGV0ZVNoYWRlciIsInVuaWZvcm1Mb2NhdGlvbnMiLCJNYXAiLCJudW1Vbmlmb3JtcyIsIkFDVElWRV9VTklGT1JNUyIsInVJbmRleCIsInVuaWZvcm0iLCJnZXRBY3RpdmVVbmlmb3JtIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwic3BsaXQiLCJtYXRjaCIsInVuaWZvcm1OYW1lIiwibmFtZUNvbXBvbmVudHMiLCJzbGljZSIsImxvY2F0aW9ucyIsIm51bUF0dHJpYnMiLCJBQ1RJVkVfQVRUUklCVVRFUyIsImFJbmRleCIsImF0dHJpYnV0ZSIsImdldEFjdGl2ZUF0dHJpYiIsImdldEF0dHJpYkxvY2F0aW9uIiwiam9pbiIsImRzdCIsInNyY0FscGhhIiwiZHN0QWxwaGEiLCJzZXRCbGVuZEVxdWF0aW9uIiwibW9kZVJHQiIsIm1vZGVBbHBoYSIsImFwcGx5U3RhdGUiLCJlbmFibGUiLCJERVBUSF9URVNUIiwiZGlzYWJsZSIsIkNVTExfRkFDRSIsIkJMRU5EIiwic2V0Q3VsbEZhY2UiLCJzZXRGcm9udEZhY2UiLCJzZXREZXB0aE1hc2siLCJzZXREZXB0aEZ1bmMiLCJ0ZXh0dXJlVW5pdCIsInByb2dyYW1BY3RpdmUiLCJjdXJyZW50UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJhY3RpdmVVbmlmb3JtIiwiY29tcG9uZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwic2V0VW5pZm9ybSIsInRleHR1cmVVbml0cyIsIkNXIiwiZGVsZXRlUHJvZ3JhbSIsImZsYXR0ZW4iLCJzZXRWYWx1ZSIsImdldCIsImFycmF5c0VxdWFsIiwic2V0QXJyYXkiLCJ1bmlmb3JtMWZ2IiwidW5pZm9ybTFmIiwidW5pZm9ybTJmdiIsInVuaWZvcm0zZnYiLCJ1bmlmb3JtNGZ2IiwidW5pZm9ybTFpdiIsInVuaWZvcm0xaSIsInVuaWZvcm0yaXYiLCJ1bmlmb3JtM2l2IiwidW5pZm9ybTRpdiIsInVuaWZvcm1NYXRyaXgyZnYiLCJ1bmlmb3JtTWF0cml4M2Z2IiwidW5pZm9ybU1hdHJpeDRmdiIsInN0cmluZyIsImxpbmVzIiwiYSIsImFycmF5TGVuIiwidmFsdWVMZW4iLCJiIiwid2FybkNvdW50IiwibWVzc2FnZSIsIndTZWdzIiwiaFNlZ3MiLCJudW0iLCJudW1JbmRpY2VzIiwibm9ybWFsIiwidXYiLCJVaW50MzJBcnJheSIsImJ1aWxkUGxhbmUiLCJkZXB0aCIsInUiLCJ2IiwidyIsInVEaXIiLCJ2RGlyIiwiaWkiLCJpbyIsInNlZ1ciLCJzZWdIIiwiaXkiLCJpeCIsImMiLCJkIiwiTWF0M0Z1bmMiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJjb3B5IiwidHJhbnNsYXRlIiwibSIsInJvdGF0ZSIsIm1hIiwibWIiLCJpZGVudGl0eSIsImZyb21NYXRyaXg0IiwiZnJvbU1hdDQiLCJmcm9tUXVhdGVybmlvbiIsInEiLCJmcm9tUXVhdCIsImZyb21CYXNpcyIsInZlYzNhIiwidmVjM2IiLCJ2ZWMzYyIsImludmVyc2UiLCJpbnZlcnQiLCJub3JtYWxGcm9tTWF0NCIsIkVQU0lMT04iLCJvdXQiLCJ4MiIsInkyIiwiejIiLCJ4eCIsInl4IiwieXkiLCJ6eCIsInp5IiwienoiLCJ3eCIsInd5Iiwid3oiLCJ0cmFuc3Bvc2UiLCJhMDEiLCJhMDIiLCJhMTIiLCJhMDAiLCJhMTAiLCJhMTEiLCJhMjAiLCJhMjEiLCJhMjIiLCJiMDEiLCJiMTEiLCJiMjEiLCJkZXQiLCJiMDAiLCJiMDIiLCJiMTAiLCJiMTIiLCJiMjAiLCJiMjIiLCJyYWQiLCJzIiwic2luIiwiY29zIiwiYTAzIiwiYTEzIiwiYTIzIiwiYTMwIiwiYTMxIiwiYTMyIiwiYTMzIiwiYjAzIiwiYjA0IiwiYjA1IiwiYjA2IiwiYjA3IiwiYjA4IiwiYjA5IiwicHJvamVjdGlvbiIsInN1YnRyYWN0IiwibXVsdGlwbHlTY2FsYXIiXSwic291cmNlUm9vdCI6IiJ9