"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Scale.js":
/*!*********************************!*\
  !*** ./app/animations/Scale.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.images = [...element.querySelectorAll("img")];
    this.element = element;
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
    console.log(this.images, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN", this.element);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.images, {
      scale: 0.2,
      duration: 0.2,
      ease: "power2.out"
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.images, {
      scrollTrigger: {
        trigger: this.element,
        scrub: true,
        markers: true
      },
      scale: 0.2
    });
  }
  animateOut() {
    super.animateOut();
    console.log("animating OUT");
  }
});

/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ Observer),
/* harmony export */   _getProxyProp: () => (/* binding */ _getProxyProp),
/* harmony export */   _getScrollFunc: () => (/* binding */ _getScrollFunc),
/* harmony export */   _getTarget: () => (/* binding */ _getTarget),
/* harmony export */   _getVelocityProp: () => (/* binding */ _getVelocityProp),
/* harmony export */   _horizontal: () => (/* binding */ _horizontal),
/* harmony export */   _isViewport: () => (/* binding */ _isViewport),
/* harmony export */   _proxies: () => (/* binding */ _proxies),
/* harmony export */   _scrollers: () => (/* binding */ _scrollers),
/* harmony export */   _vertical: () => (/* binding */ _vertical),
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/*!
 * Observer 3.12.2
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
  _clamp,
  _win,
  _doc,
  _docEl,
  _body,
  _isTouch,
  _pointerType,
  ScrollTrigger,
  _root,
  _normalizer,
  _eventTypes,
  _context,
  _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
  _startup = 1,
  _observers = [],
  _scrollers = [],
  _proxies = [],
  _getTime = Date.now,
  _bridge = function _bridge(name, value) {
    return value;
  },
  _integrate = function _integrate() {
    var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge(name, value) {
      return data[name](value);
    };
  },
  _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  },
  _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
  },
  _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
  _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
  _scrollLeft = "scrollLeft",
  _scrollTop = "scrollTop",
  _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  },
  _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
      // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

        f(value);
        cachingFunc.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
      } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
        cachingFunc.cacheID = _scrollers.cache;
        cachingFunc.v = f();
      }
      return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  },
  _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  },
  _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  },
  _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  },
  _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s,
      sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

    var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
        return arguments.length ? element[s] = value : element[s];
      })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

    return func;
  },
  _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
          v2 = v1;
          v1 = value;
          t2 = t1;
          t1 = t;
        } else if (useDelta) {
          v1 += value;
        } else {
          // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
          v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
        }
      },
      reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
      },
      getVelocity = function getVelocity(latestValue) {
        var tOld = t2,
          vOld = v2,
          t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
      };
    return {
      update: update,
      reset: reset,
      getVelocity: getVelocity
    };
  },
  _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  },
  _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  },
  _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  },
  _initCore = function _initCore(core) {
    gsap = core || _getGSAP();
    if (gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || function () {};
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function () {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted = 1;
    }
    return _coreInitted;
  };
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }
  var _proto = Observer.prototype;
  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
      dragMinimum = vars.dragMinimum,
      type = vars.type,
      target = vars.target,
      lineHeight = vars.lineHeight,
      debounce = vars.debounce,
      preventDefault = vars.preventDefault,
      onStop = vars.onStop,
      onStopDelay = vars.onStopDelay,
      ignore = vars.ignore,
      wheelSpeed = vars.wheelSpeed,
      event = vars.event,
      onDragStart = vars.onDragStart,
      onDragEnd = vars.onDragEnd,
      onDrag = vars.onDrag,
      onPress = vars.onPress,
      onRelease = vars.onRelease,
      onRight = vars.onRight,
      onLeft = vars.onLeft,
      onUp = vars.onUp,
      onDown = vars.onDown,
      onChangeX = vars.onChangeX,
      onChangeY = vars.onChangeY,
      onChange = vars.onChange,
      onToggleX = vars.onToggleX,
      onToggleY = vars.onToggleY,
      onHover = vars.onHover,
      onHoverEnd = vars.onHoverEnd,
      onMove = vars.onMove,
      ignoreCheck = vars.ignoreCheck,
      isNormalizer = vars.isNormalizer,
      onGestureStart = vars.onGestureStart,
      onGestureEnd = vars.onGestureEnd,
      onWheel = vars.onWheel,
      onEnable = vars.onEnable,
      onDisable = vars.onDisable,
      onClick = vars.onClick,
      scrollSpeed = vars.scrollSpeed,
      capture = vars.capture,
      allowClicks = vars.allowClicks,
      lockAxis = vars.lockAxis,
      onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
      onStopDelayedCall,
      dragged,
      moved,
      wheeled,
      locked,
      axis,
      self = this,
      prevDeltaX = 0,
      prevDeltaY = 0,
      scrollFuncX = _getScrollFunc(target, _horizontal),
      scrollFuncY = _getScrollFunc(target, _vertical),
      scrollX = scrollFuncX(),
      scrollY = scrollFuncY(),
      limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
      // for devices that accommodate mouse events and touch events, we need to distinguish.
      isViewport = _isViewport(target),
      ownerDoc = target.ownerDocument || _doc,
      deltaX = [0, 0, 0],
      // wheel, scroll, pointer/touch
      deltaY = [0, 0, 0],
      onClickTime = 0,
      clickCapture = function clickCapture() {
        return onClickTime = _getTime();
      },
      _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      },
      onStopFunc = function onStopFunc() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      },
      update = function update() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      },
      onDelta = function onDelta(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
      onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
        }

        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
      _onDrag = function _onDrag(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      },
      _onPress = self.onPress = function (e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;
        self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.

        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      },
      _onRelease = self.onRelease = function (e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
          eventData = _getEvent(e);
        if (!wasDragging && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function () {
              // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  //some browsers (like mobile Safari) don't properly trigger the click event
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      },
      _onGestureStart = function _onGestureStart(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      },
      _onGestureEnd = function _onGestureEnd() {
        return (self.isGesturing = false) || onGestureEnd(self);
      },
      onScroll = function onScroll(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(),
          y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      },
      _onWheel = function _onWheel(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      },
      _onMove = function _onMove(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      },
      _onHover = function _onHover(e) {
        self.event = e;
        onHover(self);
      },
      _onHoverEnd = function _onHoverEnd(e) {
        self.event = e;
        onHoverEnd(self);
      },
      _onClick = function _onClick(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };
    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    _context(this);
    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
          _addListener(ownerDoc, _eventTypes[2], _onRelease);
          _addListener(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener(target, "click", clickCapture, false, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener(target, "wheel", _onWheel, capture);
        _removeListener(target, _eventTypes[0], _onPress, capture);
        _removeListener(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener(target, "click", clickCapture, true);
        _removeListener(target, "click", _onClick);
        _removeListener(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener(target, _pointerType + "enter", _onHover);
        _removeListener(target, _pointerType + "leave", _onHoverEnd);
        _removeListener(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = self.revert = function () {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };
  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer;
}();
Observer.version = "3.12.2";
Observer.create = function (vars) {
  return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function () {
  return _observers.slice();
};
Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTrigger: () => (/* binding */ ScrollTrigger),
/* harmony export */   "default": () => (/* binding */ ScrollTrigger)
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.12.2
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
  _win,
  _doc,
  _docEl,
  _body,
  _root,
  _resizeDelay,
  _toArray,
  _clamp,
  _time2,
  _syncInterval,
  _refreshing,
  _pointerIsDown,
  _transformProp,
  _i,
  _prevWidth,
  _prevHeight,
  _autoRefresh,
  _sort,
  _suppressOverwrites,
  _ignoreResize,
  _normalizer,
  _ignoreMobileResize,
  _baseScreenHeight,
  _baseScreenWidth,
  _fixIOSBug,
  _context,
  _scrollRestoration,
  _div100vh,
  _100vh,
  _limitCallbacks,
  // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
  _startup = 1,
  _getTime = Date.now,
  _time1 = _getTime(),
  _lastScrollTime = 0,
  _enabled = 0,
  _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
  },
  _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  },
  _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
  },
  // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
  _pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
  },
  _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
  },
  _passThrough = function _passThrough(v) {
    return v;
  },
  _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
  _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
  },
  _getViewportDimension = function _getViewportDimension(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
  },
  _getBoundsFunc = function _getBoundsFunc(element) {
    return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
      _winOffsets.width = _win.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function () {
      return _getBounds(element);
    });
  },
  _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
    return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  },
  _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  },
  _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  },
  _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  },
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isObject = function _isObject(value) {
    return typeof value === "object";
  },
  _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  },
  _callback = function _callback(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  },
  _abs = Math.abs,
  _left = "left",
  _top = "top",
  _right = "right",
  _bottom = "bottom",
  _width = "width",
  _height = "height",
  _Right = "Right",
  _Left = "Left",
  _Top = "Top",
  _Bottom = "Bottom",
  _padding = "padding",
  _margin = "margin",
  _Width = "Width",
  _Height = "Height",
  _px = "px",
  _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element);
  },
  _makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  },
  _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  },
  _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1),
      bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  },
  _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  },
  _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  },
  _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
  },
  _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
        return a - b;
      });
    return a ? function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap(value);
      }
      if (direction > 0) {
        value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  },
  _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
  },
  _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  },
  _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
  _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
  _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  },
  _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  },
  _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  },
  _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  },
  _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;
    var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  },
  _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
      },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
  },
  _triggers = [],
  _ids = {},
  _rafID,
  _sync = function _sync() {
    return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  },
  _onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
      // if the user is dragging the scrollbar, allow it.
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
      if (_normalizer) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
      }

      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    }
  },
  _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win.innerWidth;
    _baseScreenHeight = _win.innerHeight;
  },
  _onResize = function _onResize() {
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
  },
  // ignore resizes triggered by refresh()
  _listeners = {},
  _emptyArray = [],
  _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
  },
  _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function (f) {
      return f();
    }) || _emptyArray;
  },
  _savedStyles = [],
  // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
  _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  },
  _revertAll = function _revertAll(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    media && _revertRecorded(media);
    media || _dispatch("revert");
  },
  _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
    (force || !_refreshingAll) && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  },
  _refreshingAll,
  _refreshID = 0,
  _queueRefreshID,
  _queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function () {
        return id === _refreshID && _refreshAll(true);
      });
    }
  },
  _refresh100vh = function _refresh100vh() {
    _body.appendChild(_div100vh);
    _100vh = _div100vh.offsetHeight || _win.innerHeight;
    _body.removeChild(_div100vh);
  },
  _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger.isRefreshing = true;
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away

    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

        obj(0);
      }
    });
    _triggers.slice(0).forEach(function (t) {
      return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.

    _triggers.forEach(function (t, i) {
      // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _triggers.forEach(function (t) {
      // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
      var max = _maxScroll(t.scroller, t._dir);
      (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
    });
    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && requestAnimationFrame(function () {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function (t) {
      return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger.isRefreshing = false;
    _dispatch("refresh");
  },
  _lastScroll = 0,
  _direction = 1,
  _primary,
  _updateAll = function _updateAll(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger.isUpdating = true;
      _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

      var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger.isUpdating = false;
    }
    _rafID = 0;
  },
  _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
  _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  },
  _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  },
  _capsExp = /([A-Z])/g,
  _setState = function _setState(state) {
    if (state) {
      var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
      (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  },
  _getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  },
  _copyState = function _copyState(state, override, omitOffsets) {
    var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
      p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  },
  _winOffsets = {
    left: 0,
    top: 0
  },
  // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
  // _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
  // 	scroller = _getTarget(scroller || _win);
  // 	let direction = horizontal ? _horizontal : _vertical,
  // 		isViewport = _isViewport(scroller);
  // 	_getSizeFunc(scroller, isViewport, direction);
  // 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
  // },
  _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
      element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger, self) || _body;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        // if display is "none", it won't report getBoundingClientRect() properly
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
      containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -0.001;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize,
        isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  },
  _prefixExp = /(webkit|moz|length|cssText|inset)/i,
  _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style,
        p,
        cs;
      if (parent === _body) {
        element._stOrig = style.cssText; // record original inline styles so we can revert them later

        cs = _getComputedStyle(element);
        for (p in cs) {
          // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  },
  _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue,
      last2 = last1;
    return function (value) {
      var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  },
  _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap.set(marker, vars);
  },
  // _mergeAnimations = animations => {
  // 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
  // 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
  // 	tl.smoothChildTiming = false;
  // 	return tl;
  // },
  // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
  _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween,
          onComplete = vars.onComplete,
          modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
          tween.kill();
          getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.modifiers = modifiers;
        modifiers[prop] = function () {
          return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function () {
          _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
          _updateAll();
        };
        vars.onComplete = function () {
          getTween.tween = 0;
          onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = gsap.to(scroller, vars);
        return tween;
      };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.

    ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    _context(this);
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger.prototype;
  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars,
      onUpdate = _vars.onUpdate,
      toggleClass = _vars.toggleClass,
      id = _vars.id,
      onToggle = _vars.onToggle,
      onRefresh = _vars.onRefresh,
      scrub = _vars.scrub,
      trigger = _vars.trigger,
      pin = _vars.pin,
      pinSpacing = _vars.pinSpacing,
      invalidateOnRefresh = _vars.invalidateOnRefresh,
      anticipatePin = _vars.anticipatePin,
      onScrubComplete = _vars.onScrubComplete,
      onSnapComplete = _vars.onSnapComplete,
      once = _vars.once,
      snap = _vars.snap,
      pinReparent = _vars.pinReparent,
      pinSpacer = _vars.pinSpacer,
      containerAnimation = _vars.containerAnimation,
      fastScrollEnd = _vars.fastScrollEnd,
      preventOverlaps = _vars.preventOverlaps,
      direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
      isToggle = !scrub && scrub !== 0,
      scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
      scrollerCache = gsap.core.getCache(scroller),
      isViewport = _isViewport(scroller),
      useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
      callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
      toggleActions = isToggle && vars.toggleActions.split(" "),
      markers = "markers" in vars ? vars.markers : _defaults.markers,
      borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
      self = this,
      onRefreshInit = vars.onRefreshInit && function () {
        return vars.onRefreshInit(self);
      },
      getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
      getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
      lastSnap = 0,
      lastRefresh = 0,
      prevProgress = 0,
      scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      tweenTo,
      pinCache,
      snapFunc,
      scroll1,
      scroll2,
      start,
      end,
      markerStart,
      markerEnd,
      markerStartTrigger,
      markerEndTrigger,
      markerVars,
      executingOnRefresh,
      change,
      pinOriginalState,
      pinActiveState,
      pinState,
      spacer,
      offset,
      pinGetter,
      pinSetter,
      pinStart,
      pinChange,
      spacingStart,
      spacerState,
      markerStartSetter,
      pinMoves,
      markerEndSetter,
      cs,
      snap1,
      snap2,
      scrubTween,
      scrubSmooth,
      snapDurClamp,
      snapDelayedCall,
      prevScroll,
      prevAnimProgress,
      caMarkerSetter,
      customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.

    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://greensock.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
          refreshedRecently = _getTime() - lastRefresh < 500,
          tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
            totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
            velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
            change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
            naturalEnd = progress + (snap.inertia === false ? 0 : change1),
            endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
            endScroll = Math.round(start + endValue * change),
            _snap = snap,
            onStart = _snap.onStart,
            _onInterrupt = _snap.onInterrupt,
            _onComplete = _snap.onComplete;
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);
      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);
        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
        oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()

      var r = revert !== false || !self.enabled,
        prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }
        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };
    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;
      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
        scrollerBounds = getScrollerOffsets(),
        max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
        isFirstRefresh = change <= 0.01,
        offset = 0,
        otherPinOffset = pinOffset || 0,
        parsedEnd = _isObject(position) ? position.end : vars.end,
        parsedEndTrigger = vars.endTrigger || trigger,
        parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
        pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer, self),
        triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
        i = triggerIndex,
        cs,
        bounds,
        scroll,
        isVertical,
        override,
        curTrigger,
        curPin,
        oppositeScroll,
        initted,
        revertedPins,
        forcedOverflow,
        markerStartOffset,
        markerEndOffset;
      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }
      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }
        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }
      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }
      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs);
        }
      }
      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);
      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }
      change = end - start || (start -= 0.01) && 0.001;
      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }
      self._pinPush = otherPinOffset;
      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }
      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };
          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);
          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }
          useFixedPosition && scrollFunc(prevScroll);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }
        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false, true);
      lastRefresh = _getTime();
      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();
      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
        _shiftMarker(markerStartTrigger, direction, markerStartOffset);
        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
        _shiftMarker(markerEndTrigger, direction, markerEndOffset);
        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }
      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };
    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };
    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
        a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
        p = reset ? 0 : (scroll - start) / change,
        clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
        prevProgress = self.progress,
        isActive,
        wasActive,
        toggleState,
        action,
        stateChanged,
        toggled,
        isAtMax,
        isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).

      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);
      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                  _offset = scroll - start;
                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)

      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener(scroller, "resize", _onResize);
        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
          duration = containerAnimation.duration(),
          _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }
      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };
    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
        _setState(spacerState);
      }
    };
    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);
          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };
    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;
      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || _refreshingAll || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };
    _triggers.push(self);
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        start || end || self.refresh();
      };
      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }
    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }
    return _coreInitted;
  };
  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener(_win, "wheel", _onScroll);
    _removeListener(_doc, "scroll", _onScroll);
    clearInterval(_syncInterval);
    _removeListener(_doc, "touchcancel", _passThrough);
    _removeListener(_body, "touchstart", _passThrough);
    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener);
    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };
  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";
        _refresh100vh();
        _rafBugFix();
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.

        _root = [_win, _doc, _docEl, _body];
        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
              p;
            for (p in vars) {
              mm.add(p, vars[p]);
            }
            return mm;
          };
          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);
            _dispatch("matchMedia");
          });
          gsap.matchMedia("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();
            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }
        _setBaseDimensions();
        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!

        var bodyStyle = _body.style,
          border = bodyStyle.borderTopStyle,
          AnimationProto = gsap.core.Animation.prototype,
          bounds,
          i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });
        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.

        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/

        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
            h = _win.innerHeight;
          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];
        _iterateAutoRefresh(_addListener);
        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
      i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
      isViewport = _isViewport(t);
    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };
  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };
  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
      offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };
  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
      size = bounds[horizontal ? _width : _height],
      offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };
  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });
    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };
  return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.2";
ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};
ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function (force) {
  return ++_Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};
ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};
ScrollTrigger.getById = function (id) {
  return _ids[id];
};
ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
    i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function (targets, vars) {
  var result = [],
    varsCopy = {},
    interval = vars.interval || 0.016,
    batchMax = vars.batchMax || 1e9,
    proxyCallback = function proxyCallback(type, callback) {
      var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
          callback(elements, triggers);
          elements = [];
          triggers = [];
        }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    },
    p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction(batchMax)) {
    batchMax = batchMax();
    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }
  _toArray(targets).forEach(function (target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });
  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).

var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  },
  _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    }

    target === _docEl && _allowNativePanning(_body, direction);
  },
  _overflow = {
    auto: 1,
    scroll: 1
  },
  _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
      // cache for 2 seconds to improve performance.
      while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  },
  // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
  _inputObserver = function _inputObserver(target, type, inputs, nested) {
    return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
      target: target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type: type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
      }
    });
  },
  _inputExp = /(input|label|select|textarea)/i,
  _inputIsFocused,
  _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  },
  _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
        return momentum(self);
      } : function () {
        return momentum || 2.8;
      },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
      },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
        maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
        scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
        lastRefreshID = _refreshID;
      },
      removeContentOffset = function removeContentOffset() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
      },
      ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
          requestAnimationFrame(resumeTouchMove);
          var offset = _round(self.deltaY / 2),
            scroll = scrollClampY(scrollFuncY.v - offset);
          if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
            scrollFuncY.offset = scroll - scrollFuncY.v;
            var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
            scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;
            _updateAll();
          }
          return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
      },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
          scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
      };
    content && gsap.set(content, {
      y: "+=0"
    }); // to ensure there's a cache (element._gsap)

    vars.ignoreCheck = function (e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function () {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
        // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

        var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
          gsap.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self);
    };
    vars.onWheel = function () {
      tween._ts && tween.pause();
      if (_getTime() - wheelRefresh > 1000) {
        // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
        lastRefreshID = 0;
        wheelRefresh = _getTime();
      }
    };
    vars.onChange = function (self, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function () {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger.addEventListener("refresh", onResize);
      _addListener(_win, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function () {
      _allowNativePanning(target, true);
      _removeListener(_win, "resize", onResize);
      ScrollTrigger.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
    self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

    _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

    _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

    onStopDelayedCall = self._dc;
    tween = gsap.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

    return self;
  };
ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};
ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }
  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }
  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }
  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};
ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7bf730c949cd3c792d91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZDM5YWMwY2U1OTRkY2FjZDI2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUV0QixJQUFJLHNCQUFzQixJQUFJRyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDckM7RUFFQU0sU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUNqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ04sT0FBTyxDQUFDO0lBQ3pDSiw0Q0FBSSxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDUCxNQUFNLEVBQUU7TUFDckJRLEtBQUssRUFBRSxHQUFHO01BQ1ZDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztJQUNGZiw0Q0FBSSxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDUCxNQUFNLEVBQUU7TUFDckJXLGFBQWEsRUFBRTtRQUNiQyxPQUFPLEVBQUUsSUFBSSxDQUFDYixPQUFPO1FBQ3JCYyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUU7TUFDWCxDQUFDO01BQ0ROLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztFQUNKO0VBRUFMLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM5QjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0EsU0FBU1UsaUJBQWlCQSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtFQUFFLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFBRSxJQUFJRSxVQUFVLEdBQUdILEtBQUssQ0FBQ0MsQ0FBQyxDQUFDO0lBQUVFLFVBQVUsQ0FBQ0MsVUFBVSxHQUFHRCxVQUFVLENBQUNDLFVBQVUsSUFBSSxLQUFLO0lBQUVELFVBQVUsQ0FBQ0UsWUFBWSxHQUFHLElBQUk7SUFBRSxJQUFJLE9BQU8sSUFBSUYsVUFBVSxFQUFFQSxVQUFVLENBQUNHLFFBQVEsR0FBRyxJQUFJO0lBQUVDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDVCxNQUFNLEVBQUVJLFVBQVUsQ0FBQ00sR0FBRyxFQUFFTixVQUFVLENBQUM7RUFBRTtBQUFFO0FBRTVULFNBQVNPLFlBQVlBLENBQUNDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7RUFBRSxJQUFJRCxVQUFVLEVBQUVkLGlCQUFpQixDQUFDYSxXQUFXLENBQUNHLFNBQVMsRUFBRUYsVUFBVSxDQUFDO0VBQUUsSUFBSUMsV0FBVyxFQUFFZixpQkFBaUIsQ0FBQ2EsV0FBVyxFQUFFRSxXQUFXLENBQUM7RUFBRSxPQUFPRixXQUFXO0FBQUU7O0FBRXROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUlqQyxJQUFJO0VBQ0pxQyxZQUFZO0VBQ1pDLE1BQU07RUFDTkMsSUFBSTtFQUNKQyxJQUFJO0VBQ0pDLE1BQU07RUFDTkMsS0FBSztFQUNMQyxRQUFRO0VBQ1JDLFlBQVk7RUFDWjNDLGFBQWE7RUFDYjRDLEtBQUs7RUFDTEMsV0FBVztFQUNYQyxXQUFXO0VBQ1hDLFFBQVE7RUFDUkMsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUEsRUFBRztJQUNqQyxPQUFPakQsSUFBSSxJQUFJLE9BQU9PLE1BQU0sS0FBSyxXQUFXLEtBQUtQLElBQUksR0FBR08sTUFBTSxDQUFDUCxJQUFJLENBQUMsSUFBSUEsSUFBSSxDQUFDRSxjQUFjLElBQUlGLElBQUk7RUFDckcsQ0FBQztFQUNHa0QsUUFBUSxHQUFHLENBQUM7RUFDWkMsVUFBVSxHQUFHLEVBQUU7RUFDZkMsVUFBVSxHQUFHLEVBQUU7RUFDZkMsUUFBUSxHQUFHLEVBQUU7RUFDYkMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUc7RUFDbkJDLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtJQUMxQyxPQUFPQSxLQUFLO0VBQ2QsQ0FBQztFQUNHQyxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0lBQ3JDLElBQUlDLElBQUksR0FBRzVELGFBQWEsQ0FBQzRELElBQUk7TUFDekJDLElBQUksR0FBR0QsSUFBSSxDQUFDRSxNQUFNLElBQUksQ0FBQyxDQUFDO01BQ3hCQyxTQUFTLEdBQUdILElBQUksQ0FBQ1QsVUFBVTtNQUMzQmEsT0FBTyxHQUFHSixJQUFJLENBQUNSLFFBQVE7SUFDM0JXLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNILFNBQVMsRUFBRVosVUFBVSxDQUFDO0lBQzNDYSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixPQUFPLEVBQUVaLFFBQVEsQ0FBQztJQUNyQ0QsVUFBVSxHQUFHWSxTQUFTO0lBQ3RCWCxRQUFRLEdBQUdZLE9BQU87SUFFbEJSLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtNQUN0QyxPQUFPRyxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztFQUNILENBQUM7RUFDR1MsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUNoRSxPQUFPLEVBQUVpRSxRQUFRLEVBQUU7SUFDNUQsT0FBTyxDQUFDaEIsUUFBUSxDQUFDaUIsT0FBTyxDQUFDbEUsT0FBTyxDQUFDLElBQUlpRCxRQUFRLENBQUNBLFFBQVEsQ0FBQ2lCLE9BQU8sQ0FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDaUUsUUFBUSxDQUFDO0VBQ3hGLENBQUM7RUFDR0UsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUNDLEVBQUUsRUFBRTtJQUN6QyxPQUFPLENBQUMsQ0FBQyxDQUFDM0IsS0FBSyxDQUFDeUIsT0FBTyxDQUFDRSxFQUFFLENBQUM7RUFDN0IsQ0FBQztFQUNHQyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ3JFLE9BQU8sRUFBRXNFLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRTtJQUNqRixPQUFPekUsT0FBTyxDQUFDMEUsZ0JBQWdCLENBQUNKLElBQUksRUFBRUMsSUFBSSxFQUFFO01BQzFDSSxPQUFPLEVBQUUsQ0FBQ0gsVUFBVTtNQUNwQkMsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7SUFDYixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0dHLGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxDQUFDNUUsT0FBTyxFQUFFc0UsSUFBSSxFQUFFQyxJQUFJLEVBQUVFLE9BQU8sRUFBRTtJQUMzRSxPQUFPekUsT0FBTyxDQUFDNkUsbUJBQW1CLENBQUNQLElBQUksRUFBRUMsSUFBSSxFQUFFLENBQUMsQ0FBQ0UsT0FBTyxDQUFDO0VBQzNELENBQUM7RUFDR0ssV0FBVyxHQUFHLFlBQVk7RUFDMUJDLFVBQVUsR0FBRyxXQUFXO0VBQ3hCQyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQSxFQUFHO0lBQ25DLE9BQU90QyxXQUFXLElBQUlBLFdBQVcsQ0FBQ3VDLFNBQVMsSUFBSWpDLFVBQVUsQ0FBQ2tDLEtBQUssRUFBRTtFQUNuRSxDQUFDO0VBQ0dDLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ0MsQ0FBQyxFQUFFQyxVQUFVLEVBQUU7SUFDOUQsSUFBSUMsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUMvQixLQUFLLEVBQUU7TUFDNUM7TUFDQSxJQUFJQSxLQUFLLElBQUlBLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDeEJULFFBQVEsS0FBS1gsSUFBSSxDQUFDb0QsT0FBTyxDQUFDQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDOztRQUV6RCxJQUFJQyxhQUFhLEdBQUcvQyxXQUFXLElBQUlBLFdBQVcsQ0FBQ3VDLFNBQVM7UUFDeEQxQixLQUFLLEdBQUcrQixXQUFXLENBQUNJLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNyQyxLQUFLLENBQUMsS0FBS2IsV0FBVyxJQUFJQSxXQUFXLENBQUNtRCxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRXZGVCxDQUFDLENBQUM3QixLQUFLLENBQUM7UUFDUitCLFdBQVcsQ0FBQ1EsT0FBTyxHQUFHOUMsVUFBVSxDQUFDa0MsS0FBSztRQUN0Q08sYUFBYSxJQUFJcEMsT0FBTyxDQUFDLElBQUksRUFBRUUsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUN6QyxDQUFDLE1BQU0sSUFBSThCLFVBQVUsSUFBSXJDLFVBQVUsQ0FBQ2tDLEtBQUssS0FBS0ksV0FBVyxDQUFDUSxPQUFPLElBQUl6QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkZpQyxXQUFXLENBQUNRLE9BQU8sR0FBRzlDLFVBQVUsQ0FBQ2tDLEtBQUs7UUFDdENJLFdBQVcsQ0FBQ0ksQ0FBQyxHQUFHTixDQUFDLENBQUMsQ0FBQztNQUNyQjtNQUVBLE9BQU9FLFdBQVcsQ0FBQ0ksQ0FBQyxHQUFHSixXQUFXLENBQUNTLE1BQU07SUFDM0MsQ0FBQztJQUVEVCxXQUFXLENBQUNTLE1BQU0sR0FBRyxDQUFDO0lBQ3RCLE9BQU9YLENBQUMsSUFBSUUsV0FBVztFQUN6QixDQUFDO0VBQ0dVLFdBQVcsR0FBRztJQUNoQkMsQ0FBQyxFQUFFbkIsV0FBVztJQUNkb0IsQ0FBQyxFQUFFLE1BQU07SUFDVEMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE9BQU87SUFDWEMsR0FBRyxFQUFFLE9BQU87SUFDWkMsQ0FBQyxFQUFFLE9BQU87SUFDVkMsRUFBRSxFQUFFLE9BQU87SUFDWEMsQ0FBQyxFQUFFLEdBQUc7SUFDTkMsRUFBRSxFQUFFdEIsZ0JBQWdCLENBQUMsVUFBVTVCLEtBQUssRUFBRTtNQUNwQyxPQUFPbUQsU0FBUyxDQUFDdEYsTUFBTSxHQUFHZSxJQUFJLENBQUN3RSxRQUFRLENBQUNwRCxLQUFLLEVBQUVxRCxTQUFTLENBQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBR3RFLElBQUksQ0FBQzBFLFdBQVcsSUFBSXpFLElBQUksQ0FBQzBDLFdBQVcsQ0FBQyxJQUFJekMsTUFBTSxDQUFDeUMsV0FBVyxDQUFDLElBQUl4QyxLQUFLLENBQUN3QyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQzFKLENBQUM7RUFDSCxDQUFDO0VBQ0c4QixTQUFTLEdBQUc7SUFDZFgsQ0FBQyxFQUFFbEIsVUFBVTtJQUNibUIsQ0FBQyxFQUFFLEtBQUs7SUFDUkMsRUFBRSxFQUFFLEtBQUs7SUFDVEMsRUFBRSxFQUFFLFFBQVE7SUFDWkMsR0FBRyxFQUFFLFFBQVE7SUFDYkMsQ0FBQyxFQUFFLFFBQVE7SUFDWEMsRUFBRSxFQUFFLFFBQVE7SUFDWkMsQ0FBQyxFQUFFLEdBQUc7SUFDTk0sRUFBRSxFQUFFZCxXQUFXO0lBQ2ZTLEVBQUUsRUFBRXRCLGdCQUFnQixDQUFDLFVBQVU1QixLQUFLLEVBQUU7TUFDcEMsT0FBT21ELFNBQVMsQ0FBQ3RGLE1BQU0sR0FBR2UsSUFBSSxDQUFDd0UsUUFBUSxDQUFDWCxXQUFXLENBQUNTLEVBQUUsQ0FBQyxDQUFDLEVBQUVsRCxLQUFLLENBQUMsR0FBR3BCLElBQUksQ0FBQzRFLFdBQVcsSUFBSTNFLElBQUksQ0FBQzJDLFVBQVUsQ0FBQyxJQUFJMUMsTUFBTSxDQUFDMEMsVUFBVSxDQUFDLElBQUl6QyxLQUFLLENBQUN5QyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3pKLENBQUM7RUFDSCxDQUFDO0VBQ0dpQyxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUU7SUFDNUMsT0FBTyxDQUFDQSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxJQUFJRCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxJQUFJeEgsSUFBSSxDQUFDeUgsS0FBSyxDQUFDQyxPQUFPLEVBQUVMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU9BLENBQUMsS0FBSyxRQUFRLElBQUlySCxJQUFJLENBQUMySCxNQUFNLENBQUMsQ0FBQyxDQUFDQyxjQUFjLEtBQUssS0FBSyxHQUFHbkgsT0FBTyxDQUFDb0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFUixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDbE0sQ0FBQztFQUNHUyxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQzFILE9BQU8sRUFBRTJILElBQUksRUFBRTtJQUMxRCxJQUFJMUIsQ0FBQyxHQUFHMEIsSUFBSSxDQUFDMUIsQ0FBQztNQUNWUSxFQUFFLEdBQUdrQixJQUFJLENBQUNsQixFQUFFO0lBQ2hCO0lBQ0F0QyxXQUFXLENBQUNuRSxPQUFPLENBQUMsS0FBS0EsT0FBTyxHQUFHb0MsSUFBSSxDQUFDd0YsZ0JBQWdCLElBQUl2RixNQUFNLENBQUM7SUFFbkUsSUFBSWxCLENBQUMsR0FBRzZCLFVBQVUsQ0FBQ2tCLE9BQU8sQ0FBQ2xFLE9BQU8sQ0FBQztNQUMvQitGLE1BQU0sR0FBR1UsRUFBRSxLQUFLRyxTQUFTLENBQUNILEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUV4QyxDQUFDLENBQUN0RixDQUFDLEtBQUtBLENBQUMsR0FBRzZCLFVBQVUsQ0FBQ2MsSUFBSSxDQUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDZ0QsVUFBVSxDQUFDN0IsQ0FBQyxHQUFHNEUsTUFBTSxDQUFDLElBQUkxQixZQUFZLENBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFZ0YsU0FBUyxDQUFDLENBQUMsQ0FBQzs7SUFFdEUsSUFBSTZDLElBQUksR0FBRzdFLFVBQVUsQ0FBQzdCLENBQUMsR0FBRzRFLE1BQU0sQ0FBQztNQUM3QnhCLElBQUksR0FBR3NELElBQUksS0FBSzdFLFVBQVUsQ0FBQzdCLENBQUMsR0FBRzRFLE1BQU0sQ0FBQyxHQUFHWixnQkFBZ0IsQ0FBQ25CLGFBQWEsQ0FBQ2hFLE9BQU8sRUFBRWlHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLOUIsV0FBVyxDQUFDbkUsT0FBTyxDQUFDLEdBQUd5RyxFQUFFLEdBQUd0QixnQkFBZ0IsQ0FBQyxVQUFVNUIsS0FBSyxFQUFFO1FBQy9KLE9BQU9tRCxTQUFTLENBQUN0RixNQUFNLEdBQUdwQixPQUFPLENBQUNpRyxDQUFDLENBQUMsR0FBRzFDLEtBQUssR0FBR3ZELE9BQU8sQ0FBQ2lHLENBQUMsQ0FBQztNQUMzRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ0oxQixJQUFJLENBQUN0RCxNQUFNLEdBQUdqQixPQUFPO0lBQ3JCNkgsSUFBSSxLQUFLdEQsSUFBSSxDQUFDdUQsTUFBTSxHQUFHbEksSUFBSSxDQUFDbUksV0FBVyxDQUFDL0gsT0FBTyxFQUFFLGdCQUFnQixDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzs7SUFFbEYsT0FBT3VFLElBQUk7RUFDYixDQUFDO0VBQ0d5RCxnQkFBZ0IsR0FBRyxTQUFTQSxnQkFBZ0JBLENBQUN6RSxLQUFLLEVBQUUwRSxjQUFjLEVBQUVDLFFBQVEsRUFBRTtJQUNoRixJQUFJQyxFQUFFLEdBQUc1RSxLQUFLO01BQ1Y2RSxFQUFFLEdBQUc3RSxLQUFLO01BQ1Y4RSxFQUFFLEdBQUduRixRQUFRLENBQUMsQ0FBQztNQUNmb0YsRUFBRSxHQUFHRCxFQUFFO01BQ1BFLEdBQUcsR0FBR04sY0FBYyxJQUFJLEVBQUU7TUFDMUJPLGNBQWMsR0FBRzdDLElBQUksQ0FBQzhDLEdBQUcsQ0FBQyxHQUFHLEVBQUVGLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDdkNHLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDbkYsS0FBSyxFQUFFb0YsS0FBSyxFQUFFO1FBQ3pDLElBQUkxQixDQUFDLEdBQUcvRCxRQUFRLENBQUMsQ0FBQztRQUVsQixJQUFJeUYsS0FBSyxJQUFJMUIsQ0FBQyxHQUFHb0IsRUFBRSxHQUFHRSxHQUFHLEVBQUU7VUFDekJILEVBQUUsR0FBR0QsRUFBRTtVQUNQQSxFQUFFLEdBQUc1RSxLQUFLO1VBQ1YrRSxFQUFFLEdBQUdELEVBQUU7VUFDUEEsRUFBRSxHQUFHcEIsQ0FBQztRQUNSLENBQUMsTUFBTSxJQUFJaUIsUUFBUSxFQUFFO1VBQ25CQyxFQUFFLElBQUk1RSxLQUFLO1FBQ2IsQ0FBQyxNQUFNO1VBQ0w7VUFDQTRFLEVBQUUsR0FBR0MsRUFBRSxHQUFHLENBQUM3RSxLQUFLLEdBQUc2RSxFQUFFLEtBQUtuQixDQUFDLEdBQUdxQixFQUFFLENBQUMsSUFBSUQsRUFBRSxHQUFHQyxFQUFFLENBQUM7UUFDL0M7TUFDRixDQUFDO01BQ0dNLEtBQUssR0FBRyxTQUFTQSxLQUFLQSxDQUFBLEVBQUc7UUFDM0JSLEVBQUUsR0FBR0QsRUFBRSxHQUFHRCxRQUFRLEdBQUcsQ0FBQyxHQUFHQyxFQUFFO1FBQzNCRyxFQUFFLEdBQUdELEVBQUUsR0FBRyxDQUFDO01BQ2IsQ0FBQztNQUNHUSxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO1FBQ2xELElBQUlDLElBQUksR0FBR1QsRUFBRTtVQUNUVSxJQUFJLEdBQUdaLEVBQUU7VUFDVG5CLENBQUMsR0FBRy9ELFFBQVEsQ0FBQyxDQUFDO1FBRWxCLENBQUM0RixXQUFXLElBQUlBLFdBQVcsS0FBSyxDQUFDLEtBQUtBLFdBQVcsS0FBS1gsRUFBRSxJQUFJTyxNQUFNLENBQUNJLFdBQVcsQ0FBQztRQUMvRSxPQUFPVCxFQUFFLEtBQUtDLEVBQUUsSUFBSXJCLENBQUMsR0FBR3FCLEVBQUUsR0FBR0UsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDTCxFQUFFLElBQUlELFFBQVEsR0FBR2MsSUFBSSxHQUFHLENBQUNBLElBQUksQ0FBQyxLQUFLLENBQUNkLFFBQVEsR0FBR2pCLENBQUMsR0FBR29CLEVBQUUsSUFBSVUsSUFBSSxDQUFDLEdBQUcsSUFBSTtNQUMxSCxDQUFDO0lBRUQsT0FBTztNQUNMTCxNQUFNLEVBQUVBLE1BQU07TUFDZEUsS0FBSyxFQUFFQSxLQUFLO01BQ1pDLFdBQVcsRUFBRUE7SUFDZixDQUFDO0VBQ0gsQ0FBQztFQUNHSSxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ0MsQ0FBQyxFQUFFQyxjQUFjLEVBQUU7SUFDcERBLGNBQWMsSUFBSSxDQUFDRCxDQUFDLENBQUNFLFVBQVUsSUFBSUYsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxPQUFPRCxDQUFDLENBQUNHLGNBQWMsR0FBR0gsQ0FBQyxDQUFDRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUdILENBQUM7RUFDbkQsQ0FBQztFQUNHSSxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQzlDLENBQUMsRUFBRTtJQUNoRCxJQUFJaUMsR0FBRyxHQUFHOUMsSUFBSSxDQUFDOEMsR0FBRyxDQUFDMUUsS0FBSyxDQUFDNEIsSUFBSSxFQUFFYSxDQUFDLENBQUM7TUFDN0IrQixHQUFHLEdBQUc1QyxJQUFJLENBQUM0QyxHQUFHLENBQUN4RSxLQUFLLENBQUM0QixJQUFJLEVBQUVhLENBQUMsQ0FBQztJQUNqQyxPQUFPYixJQUFJLENBQUM0RCxHQUFHLENBQUNkLEdBQUcsQ0FBQyxJQUFJOUMsSUFBSSxDQUFDNEQsR0FBRyxDQUFDaEIsR0FBRyxDQUFDLEdBQUdFLEdBQUcsR0FBR0YsR0FBRztFQUNuRCxDQUFDO0VBQ0dpQixpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUEsRUFBRztJQUNuRDNKLGFBQWEsR0FBR0QsSUFBSSxDQUFDNkQsSUFBSSxDQUFDZ0csT0FBTyxDQUFDLENBQUMsQ0FBQzVKLGFBQWE7SUFDakRBLGFBQWEsSUFBSUEsYUFBYSxDQUFDNEQsSUFBSSxJQUFJRCxVQUFVLENBQUMsQ0FBQztFQUNyRCxDQUFDO0VBQ0drRyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ2pHLElBQUksRUFBRTtJQUN2QzdELElBQUksR0FBRzZELElBQUksSUFBSVosUUFBUSxDQUFDLENBQUM7SUFFekIsSUFBSWpELElBQUksSUFBSSxPQUFPK0osUUFBUSxLQUFLLFdBQVcsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7TUFDNUR6SCxJQUFJLEdBQUdoQyxNQUFNO01BQ2JpQyxJQUFJLEdBQUd1SCxRQUFRO01BQ2Z0SCxNQUFNLEdBQUdELElBQUksQ0FBQ3lILGVBQWU7TUFDN0J2SCxLQUFLLEdBQUdGLElBQUksQ0FBQ3dILElBQUk7TUFDakJuSCxLQUFLLEdBQUcsQ0FBQ04sSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxDQUFDO01BQ25DSixNQUFNLEdBQUd0QyxJQUFJLENBQUN5SCxLQUFLLENBQUN5QyxLQUFLO01BRXpCbEgsUUFBUSxHQUFHaEQsSUFBSSxDQUFDNkQsSUFBSSxDQUFDc0csT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDO01BRTlDdkgsWUFBWSxHQUFHLGdCQUFnQixJQUFJRixLQUFLLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDOztNQUVoRUMsUUFBUSxHQUFHeUgsUUFBUSxDQUFDQyxPQUFPLEdBQUc5SCxJQUFJLENBQUMrSCxVQUFVLElBQUkvSCxJQUFJLENBQUMrSCxVQUFVLENBQUMsa0NBQWtDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLENBQUMsR0FBRyxjQUFjLElBQUloSSxJQUFJLElBQUlpSSxTQUFTLENBQUNDLGNBQWMsR0FBRyxDQUFDLElBQUlELFNBQVMsQ0FBQ0UsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO01BQ25OM0gsV0FBVyxHQUFHcUgsUUFBUSxDQUFDTyxVQUFVLEdBQUcsQ0FBQyxjQUFjLElBQUlsSSxNQUFNLEdBQUcsMkNBQTJDLEdBQUcsRUFBRSxlQUFlLElBQUlBLE1BQU0sQ0FBQyxHQUFHLHFDQUFxQyxHQUFHLGlEQUFpRCxFQUFFbUksS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUNsUEMsVUFBVSxDQUFDLFlBQVk7UUFDckIsT0FBTzNILFFBQVEsR0FBRyxDQUFDO01BQ3JCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFUDBHLGlCQUFpQixDQUFDLENBQUM7TUFFbkJ2SCxZQUFZLEdBQUcsQ0FBQztJQUNsQjtJQUVBLE9BQU9BLFlBQVk7RUFDckIsQ0FBQztBQUVEK0QsV0FBVyxDQUFDYyxFQUFFLEdBQUdGLFNBQVM7QUFDMUI1RCxVQUFVLENBQUNrQyxLQUFLLEdBQUcsQ0FBQztBQUNiLElBQUk4RSxRQUFRLEdBQUcsYUFBYSxZQUFZO0VBQzdDLFNBQVNBLFFBQVFBLENBQUNVLElBQUksRUFBRTtJQUN0QixJQUFJLENBQUNDLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0VBQ2pCO0VBRUEsSUFBSUUsTUFBTSxHQUFHWixRQUFRLENBQUNoSSxTQUFTO0VBRS9CNEksTUFBTSxDQUFDRCxJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQ0QsSUFBSSxFQUFFO0lBQ2hDekksWUFBWSxJQUFJeUgsU0FBUyxDQUFDOUosSUFBSSxDQUFDLElBQUlTLE9BQU8sQ0FBQ29ILElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUN2RjVILGFBQWEsSUFBSTJKLGlCQUFpQixDQUFDLENBQUM7SUFDcEMsSUFBSXFCLFNBQVMsR0FBR0gsSUFBSSxDQUFDRyxTQUFTO01BQzFCQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ksV0FBVztNQUM5QnhHLElBQUksR0FBR29HLElBQUksQ0FBQ3BHLElBQUk7TUFDaEJyRCxNQUFNLEdBQUd5SixJQUFJLENBQUN6SixNQUFNO01BQ3BCOEosVUFBVSxHQUFHTCxJQUFJLENBQUNLLFVBQVU7TUFDNUJDLFFBQVEsR0FBR04sSUFBSSxDQUFDTSxRQUFRO01BQ3hCN0IsY0FBYyxHQUFHdUIsSUFBSSxDQUFDdkIsY0FBYztNQUNwQzhCLE1BQU0sR0FBR1AsSUFBSSxDQUFDTyxNQUFNO01BQ3BCQyxXQUFXLEdBQUdSLElBQUksQ0FBQ1EsV0FBVztNQUM5QkMsTUFBTSxHQUFHVCxJQUFJLENBQUNTLE1BQU07TUFDcEJDLFVBQVUsR0FBR1YsSUFBSSxDQUFDVSxVQUFVO01BQzVCQyxLQUFLLEdBQUdYLElBQUksQ0FBQ1csS0FBSztNQUNsQkMsV0FBVyxHQUFHWixJQUFJLENBQUNZLFdBQVc7TUFDOUJDLFNBQVMsR0FBR2IsSUFBSSxDQUFDYSxTQUFTO01BQzFCQyxNQUFNLEdBQUdkLElBQUksQ0FBQ2MsTUFBTTtNQUNwQkMsT0FBTyxHQUFHZixJQUFJLENBQUNlLE9BQU87TUFDdEJDLFNBQVMsR0FBR2hCLElBQUksQ0FBQ2dCLFNBQVM7TUFDMUJDLE9BQU8sR0FBR2pCLElBQUksQ0FBQ2lCLE9BQU87TUFDdEJDLE1BQU0sR0FBR2xCLElBQUksQ0FBQ2tCLE1BQU07TUFDcEJDLElBQUksR0FBR25CLElBQUksQ0FBQ21CLElBQUk7TUFDaEJDLE1BQU0sR0FBR3BCLElBQUksQ0FBQ29CLE1BQU07TUFDcEJDLFNBQVMsR0FBR3JCLElBQUksQ0FBQ3FCLFNBQVM7TUFDMUJDLFNBQVMsR0FBR3RCLElBQUksQ0FBQ3NCLFNBQVM7TUFDMUJDLFFBQVEsR0FBR3ZCLElBQUksQ0FBQ3VCLFFBQVE7TUFDeEJDLFNBQVMsR0FBR3hCLElBQUksQ0FBQ3dCLFNBQVM7TUFDMUJDLFNBQVMsR0FBR3pCLElBQUksQ0FBQ3lCLFNBQVM7TUFDMUJDLE9BQU8sR0FBRzFCLElBQUksQ0FBQzBCLE9BQU87TUFDdEJDLFVBQVUsR0FBRzNCLElBQUksQ0FBQzJCLFVBQVU7TUFDNUJDLE1BQU0sR0FBRzVCLElBQUksQ0FBQzRCLE1BQU07TUFDcEJDLFdBQVcsR0FBRzdCLElBQUksQ0FBQzZCLFdBQVc7TUFDOUJDLFlBQVksR0FBRzlCLElBQUksQ0FBQzhCLFlBQVk7TUFDaENDLGNBQWMsR0FBRy9CLElBQUksQ0FBQytCLGNBQWM7TUFDcENDLFlBQVksR0FBR2hDLElBQUksQ0FBQ2dDLFlBQVk7TUFDaENDLE9BQU8sR0FBR2pDLElBQUksQ0FBQ2lDLE9BQU87TUFDdEJDLFFBQVEsR0FBR2xDLElBQUksQ0FBQ2tDLFFBQVE7TUFDeEJDLFNBQVMsR0FBR25DLElBQUksQ0FBQ21DLFNBQVM7TUFDMUJDLE9BQU8sR0FBR3BDLElBQUksQ0FBQ29DLE9BQU87TUFDdEJDLFdBQVcsR0FBR3JDLElBQUksQ0FBQ3FDLFdBQVc7TUFDOUJ0SSxPQUFPLEdBQUdpRyxJQUFJLENBQUNqRyxPQUFPO01BQ3RCdUksV0FBVyxHQUFHdEMsSUFBSSxDQUFDc0MsV0FBVztNQUM5QkMsUUFBUSxHQUFHdkMsSUFBSSxDQUFDdUMsUUFBUTtNQUN4QkMsVUFBVSxHQUFHeEMsSUFBSSxDQUFDd0MsVUFBVTtJQUNoQyxJQUFJLENBQUNqTSxNQUFNLEdBQUdBLE1BQU0sR0FBRytGLFVBQVUsQ0FBQy9GLE1BQU0sQ0FBQyxJQUFJb0IsTUFBTTtJQUNuRCxJQUFJLENBQUNxSSxJQUFJLEdBQUdBLElBQUk7SUFDaEJTLE1BQU0sS0FBS0EsTUFBTSxHQUFHdkwsSUFBSSxDQUFDeUgsS0FBSyxDQUFDQyxPQUFPLENBQUM2RCxNQUFNLENBQUMsQ0FBQztJQUMvQ04sU0FBUyxHQUFHQSxTQUFTLElBQUksSUFBSTtJQUM3QkMsV0FBVyxHQUFHQSxXQUFXLElBQUksQ0FBQztJQUM5Qk0sVUFBVSxHQUFHQSxVQUFVLElBQUksQ0FBQztJQUM1QjJCLFdBQVcsR0FBR0EsV0FBVyxJQUFJLENBQUM7SUFDOUJ6SSxJQUFJLEdBQUdBLElBQUksSUFBSSxxQkFBcUI7SUFDcEMwRyxRQUFRLEdBQUdBLFFBQVEsS0FBSyxLQUFLO0lBQzdCRCxVQUFVLEtBQUtBLFVBQVUsR0FBR29DLFVBQVUsQ0FBQ2hMLElBQUksQ0FBQ2lMLGdCQUFnQixDQUFDOUssS0FBSyxDQUFDLENBQUN5SSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQUV4RixJQUFJc0MsRUFBRTtNQUNGQyxpQkFBaUI7TUFDakJDLE9BQU87TUFDUEMsS0FBSztNQUNMQyxPQUFPO01BQ1BDLE1BQU07TUFDTkMsSUFBSTtNQUNKekcsSUFBSSxHQUFHLElBQUk7TUFDWDBHLFVBQVUsR0FBRyxDQUFDO01BQ2RDLFVBQVUsR0FBRyxDQUFDO01BQ2RDLFdBQVcsR0FBR3BHLGNBQWMsQ0FBQ3pHLE1BQU0sRUFBRStFLFdBQVcsQ0FBQztNQUNqRCtILFdBQVcsR0FBR3JHLGNBQWMsQ0FBQ3pHLE1BQU0sRUFBRTJGLFNBQVMsQ0FBQztNQUMvQ29ILE9BQU8sR0FBR0YsV0FBVyxDQUFDLENBQUM7TUFDdkJHLE9BQU8sR0FBR0YsV0FBVyxDQUFDLENBQUM7TUFDdkJHLFlBQVksR0FBRyxDQUFDNUosSUFBSSxDQUFDSixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSXZCLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhO01BQ3RHO01BQ0p3TCxVQUFVLEdBQUdoSyxXQUFXLENBQUNsRCxNQUFNLENBQUM7TUFDNUJtTixRQUFRLEdBQUduTixNQUFNLENBQUNvTixhQUFhLElBQUlqTSxJQUFJO01BQ3ZDa00sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDbEI7TUFDSkMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDZEMsV0FBVyxHQUFHLENBQUM7TUFDZkMsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUEsRUFBRztRQUN6QyxPQUFPRCxXQUFXLEdBQUd0TCxRQUFRLENBQUMsQ0FBQztNQUNqQyxDQUFDO01BQ0d3TCxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ3hGLENBQUMsRUFBRXlGLGdCQUFnQixFQUFFO1FBQzVELE9BQU8sQ0FBQ3pILElBQUksQ0FBQ21FLEtBQUssR0FBR25DLENBQUMsS0FBS2lDLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNqSCxPQUFPLENBQUNnRixDQUFDLENBQUNqSSxNQUFNLENBQUMsSUFBSTBOLGdCQUFnQixJQUFJVCxZQUFZLElBQUloRixDQUFDLENBQUMwRixXQUFXLEtBQUssT0FBTyxJQUFJckMsV0FBVyxJQUFJQSxXQUFXLENBQUNyRCxDQUFDLEVBQUV5RixnQkFBZ0IsQ0FBQztNQUNwTCxDQUFDO01BQ0dFLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFBLEVBQUc7UUFDckMzSCxJQUFJLENBQUM0SCxHQUFHLENBQUNsRyxLQUFLLENBQUMsQ0FBQztRQUVoQjFCLElBQUksQ0FBQzZILEdBQUcsQ0FBQ25HLEtBQUssQ0FBQyxDQUFDO1FBRWhCMEUsaUJBQWlCLENBQUMwQixLQUFLLENBQUMsQ0FBQztRQUN6Qi9ELE1BQU0sSUFBSUEsTUFBTSxDQUFDL0QsSUFBSSxDQUFDO01BQ3hCLENBQUM7TUFDR3dCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7UUFDN0IsSUFBSXVHLEVBQUUsR0FBRy9ILElBQUksQ0FBQ29ILE1BQU0sR0FBR2hGLGVBQWUsQ0FBQ2dGLE1BQU0sQ0FBQztVQUMxQ1ksRUFBRSxHQUFHaEksSUFBSSxDQUFDcUgsTUFBTSxHQUFHakYsZUFBZSxDQUFDaUYsTUFBTSxDQUFDO1VBQzFDWSxRQUFRLEdBQUd4SixJQUFJLENBQUM0RCxHQUFHLENBQUMwRixFQUFFLENBQUMsSUFBSXBFLFNBQVM7VUFDcEN1RSxRQUFRLEdBQUd6SixJQUFJLENBQUM0RCxHQUFHLENBQUMyRixFQUFFLENBQUMsSUFBSXJFLFNBQVM7UUFFeENvQixRQUFRLEtBQUtrRCxRQUFRLElBQUlDLFFBQVEsQ0FBQyxJQUFJbkQsUUFBUSxDQUFDL0UsSUFBSSxFQUFFK0gsRUFBRSxFQUFFQyxFQUFFLEVBQUVaLE1BQU0sRUFBRUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFFOUUsSUFBSVksUUFBUSxFQUFFO1VBQ1p4RCxPQUFPLElBQUl6RSxJQUFJLENBQUNvSCxNQUFNLEdBQUcsQ0FBQyxJQUFJM0MsT0FBTyxDQUFDekUsSUFBSSxDQUFDO1VBQzNDMEUsTUFBTSxJQUFJMUUsSUFBSSxDQUFDb0gsTUFBTSxHQUFHLENBQUMsSUFBSTFDLE1BQU0sQ0FBQzFFLElBQUksQ0FBQztVQUN6QzZFLFNBQVMsSUFBSUEsU0FBUyxDQUFDN0UsSUFBSSxDQUFDO1VBQzVCZ0YsU0FBUyxJQUFJaEYsSUFBSSxDQUFDb0gsTUFBTSxHQUFHLENBQUMsS0FBS1YsVUFBVSxHQUFHLENBQUMsSUFBSTFCLFNBQVMsQ0FBQ2hGLElBQUksQ0FBQztVQUNsRTBHLFVBQVUsR0FBRzFHLElBQUksQ0FBQ29ILE1BQU07VUFDeEJBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBR0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QztRQUVBLElBQUljLFFBQVEsRUFBRTtVQUNadEQsTUFBTSxJQUFJNUUsSUFBSSxDQUFDcUgsTUFBTSxHQUFHLENBQUMsSUFBSXpDLE1BQU0sQ0FBQzVFLElBQUksQ0FBQztVQUN6QzJFLElBQUksSUFBSTNFLElBQUksQ0FBQ3FILE1BQU0sR0FBRyxDQUFDLElBQUkxQyxJQUFJLENBQUMzRSxJQUFJLENBQUM7VUFDckM4RSxTQUFTLElBQUlBLFNBQVMsQ0FBQzlFLElBQUksQ0FBQztVQUM1QmlGLFNBQVMsSUFBSWpGLElBQUksQ0FBQ3FILE1BQU0sR0FBRyxDQUFDLEtBQUtWLFVBQVUsR0FBRyxDQUFDLElBQUkxQixTQUFTLENBQUNqRixJQUFJLENBQUM7VUFDbEUyRyxVQUFVLEdBQUczRyxJQUFJLENBQUNxSCxNQUFNO1VBQ3hCQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBR0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdkM7UUFFQSxJQUFJZixLQUFLLElBQUlELE9BQU8sRUFBRTtVQUNwQmpCLE1BQU0sSUFBSUEsTUFBTSxDQUFDcEYsSUFBSSxDQUFDO1VBRXRCLElBQUlxRyxPQUFPLEVBQUU7WUFDWC9CLE1BQU0sQ0FBQ3RFLElBQUksQ0FBQztZQUNacUcsT0FBTyxHQUFHLEtBQUs7VUFDakI7VUFFQUMsS0FBSyxHQUFHLEtBQUs7UUFDZjtRQUVBRSxNQUFNLElBQUksRUFBRUEsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJUixVQUFVLElBQUlBLFVBQVUsQ0FBQ2hHLElBQUksQ0FBQztRQUU3RCxJQUFJdUcsT0FBTyxFQUFFO1VBQ1hkLE9BQU8sQ0FBQ3pGLElBQUksQ0FBQztVQUNidUcsT0FBTyxHQUFHLEtBQUs7UUFDakI7UUFFQUosRUFBRSxHQUFHLENBQUM7TUFDUixDQUFDO01BQ0dnQyxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEtBQUssRUFBRTtRQUMxQ2xCLE1BQU0sQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJRixDQUFDO1FBQ2xCZixNQUFNLENBQUNpQixLQUFLLENBQUMsSUFBSUQsQ0FBQztRQUVsQnJJLElBQUksQ0FBQzRILEdBQUcsQ0FBQ3BHLE1BQU0sQ0FBQzRHLENBQUMsQ0FBQztRQUVsQnBJLElBQUksQ0FBQzZILEdBQUcsQ0FBQ3JHLE1BQU0sQ0FBQzZHLENBQUMsQ0FBQztRQUVsQnZFLFFBQVEsR0FBR3FDLEVBQUUsS0FBS0EsRUFBRSxHQUFHb0MscUJBQXFCLENBQUMvRyxNQUFNLENBQUMsQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQztNQUNsRSxDQUFDO01BQ0dnSCxxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUNKLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQy9ELElBQUl0QyxRQUFRLElBQUksQ0FBQ1UsSUFBSSxFQUFFO1VBQ3JCekcsSUFBSSxDQUFDeUcsSUFBSSxHQUFHQSxJQUFJLEdBQUdoSSxJQUFJLENBQUM0RCxHQUFHLENBQUMrRixDQUFDLENBQUMsR0FBRzNKLElBQUksQ0FBQzRELEdBQUcsQ0FBQ2dHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHO1VBQ3hEN0IsTUFBTSxHQUFHLElBQUk7UUFDZjtRQUVBLElBQUlDLElBQUksS0FBSyxHQUFHLEVBQUU7VUFDaEJXLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSWdCLENBQUM7VUFFZHBJLElBQUksQ0FBQzRILEdBQUcsQ0FBQ3BHLE1BQU0sQ0FBQzRHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVCOztRQUVBLElBQUkzQixJQUFJLEtBQUssR0FBRyxFQUFFO1VBQ2hCWSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUlnQixDQUFDO1VBRWRySSxJQUFJLENBQUM2SCxHQUFHLENBQUNyRyxNQUFNLENBQUM2RyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzFCO1FBRUF2RSxRQUFRLEdBQUdxQyxFQUFFLEtBQUtBLEVBQUUsR0FBR29DLHFCQUFxQixDQUFDL0csTUFBTSxDQUFDLENBQUMsR0FBR0EsTUFBTSxDQUFDLENBQUM7TUFDbEUsQ0FBQztNQUNHaUgsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUN6RyxDQUFDLEVBQUU7UUFDaEMsSUFBSXdGLFlBQVksQ0FBQ3hGLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtVQUN0QjtRQUNGO1FBRUFBLENBQUMsR0FBR0QsU0FBUyxDQUFDQyxDQUFDLEVBQUVDLGNBQWMsQ0FBQztRQUNoQyxJQUFJbUcsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDMEcsT0FBTztVQUNiTCxDQUFDLEdBQUdyRyxDQUFDLENBQUMyRyxPQUFPO1VBQ2JaLEVBQUUsR0FBR0ssQ0FBQyxHQUFHcEksSUFBSSxDQUFDb0ksQ0FBQztVQUNmSixFQUFFLEdBQUdLLENBQUMsR0FBR3JJLElBQUksQ0FBQ3FJLENBQUM7VUFDZk8sVUFBVSxHQUFHNUksSUFBSSxDQUFDNEksVUFBVTtRQUNoQzVJLElBQUksQ0FBQ29JLENBQUMsR0FBR0EsQ0FBQztRQUNWcEksSUFBSSxDQUFDcUksQ0FBQyxHQUFHQSxDQUFDO1FBRVYsSUFBSU8sVUFBVSxJQUFJbkssSUFBSSxDQUFDNEQsR0FBRyxDQUFDckMsSUFBSSxDQUFDNkksTUFBTSxHQUFHVCxDQUFDLENBQUMsSUFBSXhFLFdBQVcsSUFBSW5GLElBQUksQ0FBQzRELEdBQUcsQ0FBQ3JDLElBQUksQ0FBQzhJLE1BQU0sR0FBR1QsQ0FBQyxDQUFDLElBQUl6RSxXQUFXLEVBQUU7VUFDdEdVLE1BQU0sS0FBSytCLE9BQU8sR0FBRyxJQUFJLENBQUM7VUFDMUJ1QyxVQUFVLEtBQUs1SSxJQUFJLENBQUM0SSxVQUFVLEdBQUcsSUFBSSxDQUFDO1VBQ3RDSixxQkFBcUIsQ0FBQ1QsRUFBRSxFQUFFQyxFQUFFLENBQUM7VUFDN0JZLFVBQVUsSUFBSXhFLFdBQVcsSUFBSUEsV0FBVyxDQUFDcEUsSUFBSSxDQUFDO1FBQ2hEO01BQ0YsQ0FBQztNQUNHK0ksUUFBUSxHQUFHL0ksSUFBSSxDQUFDdUUsT0FBTyxHQUFHLFVBQVV2QyxDQUFDLEVBQUU7UUFDekMsSUFBSXdGLFlBQVksQ0FBQ3hGLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNnSCxNQUFNLEVBQUU7VUFDdkM7UUFDRjtRQUVBaEosSUFBSSxDQUFDeUcsSUFBSSxHQUFHQSxJQUFJLEdBQUcsSUFBSTtRQUN2QkwsaUJBQWlCLENBQUMwQixLQUFLLENBQUMsQ0FBQztRQUN6QjlILElBQUksQ0FBQ2pDLFNBQVMsR0FBRyxJQUFJO1FBQ3JCaUUsQ0FBQyxHQUFHRCxTQUFTLENBQUNDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWxCMEUsVUFBVSxHQUFHQyxVQUFVLEdBQUcsQ0FBQztRQUMzQjNHLElBQUksQ0FBQzZJLE1BQU0sR0FBRzdJLElBQUksQ0FBQ29JLENBQUMsR0FBR3BHLENBQUMsQ0FBQzBHLE9BQU87UUFDaEMxSSxJQUFJLENBQUM4SSxNQUFNLEdBQUc5SSxJQUFJLENBQUNxSSxDQUFDLEdBQUdyRyxDQUFDLENBQUMyRyxPQUFPO1FBRWhDM0ksSUFBSSxDQUFDNEgsR0FBRyxDQUFDbEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUdsQjFCLElBQUksQ0FBQzZILEdBQUcsQ0FBQ25HLEtBQUssQ0FBQyxDQUFDO1FBRWhCdkUsWUFBWSxDQUFDbUksWUFBWSxHQUFHdkwsTUFBTSxHQUFHbU4sUUFBUSxFQUFFekwsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFZ04sT0FBTyxFQUFFeEcsY0FBYyxFQUFFLElBQUksQ0FBQztRQUU3RmpDLElBQUksQ0FBQ29ILE1BQU0sR0FBR3BILElBQUksQ0FBQ3FILE1BQU0sR0FBRyxDQUFDO1FBQzdCOUMsT0FBTyxJQUFJQSxPQUFPLENBQUN2RSxJQUFJLENBQUM7TUFDMUIsQ0FBQztNQUNHaUosVUFBVSxHQUFHakosSUFBSSxDQUFDd0UsU0FBUyxHQUFHLFVBQVV4QyxDQUFDLEVBQUU7UUFDN0MsSUFBSXdGLFlBQVksQ0FBQ3hGLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtVQUN0QjtRQUNGO1FBRUF0RSxlQUFlLENBQUM0SCxZQUFZLEdBQUd2TCxNQUFNLEdBQUdtTixRQUFRLEVBQUV6TCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUVnTixPQUFPLEVBQUUsSUFBSSxDQUFDO1FBRWhGLElBQUlTLGNBQWMsR0FBRyxDQUFDQyxLQUFLLENBQUNuSixJQUFJLENBQUNxSSxDQUFDLEdBQUdySSxJQUFJLENBQUM4SSxNQUFNLENBQUM7VUFDN0NNLFdBQVcsR0FBR3BKLElBQUksQ0FBQzRJLFVBQVUsS0FBS25LLElBQUksQ0FBQzRELEdBQUcsQ0FBQ3JDLElBQUksQ0FBQ29JLENBQUMsR0FBR3BJLElBQUksQ0FBQzZJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSXBLLElBQUksQ0FBQzRELEdBQUcsQ0FBQ3JDLElBQUksQ0FBQ3FJLENBQUMsR0FBR3JJLElBQUksQ0FBQzhJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUMzRztVQUNKTyxTQUFTLEdBQUd0SCxTQUFTLENBQUNDLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUNvSCxXQUFXLElBQUlGLGNBQWMsRUFBRTtVQUNsQ2xKLElBQUksQ0FBQzRILEdBQUcsQ0FBQ2xHLEtBQUssQ0FBQyxDQUFDO1VBRWhCMUIsSUFBSSxDQUFDNkgsR0FBRyxDQUFDbkcsS0FBSyxDQUFDLENBQUM7VUFFaEIsSUFBSU8sY0FBYyxJQUFJNkQsV0FBVyxFQUFFO1lBQ2pDcE4sSUFBSSxDQUFDNFEsV0FBVyxDQUFDLElBQUksRUFBRSxZQUFZO2NBQ2pDO2NBQ0EsSUFBSXROLFFBQVEsQ0FBQyxDQUFDLEdBQUdzTCxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUN0RixDQUFDLENBQUN1SCxnQkFBZ0IsRUFBRTtnQkFDekQsSUFBSXZILENBQUMsQ0FBQ2pJLE1BQU0sQ0FBQ3lQLEtBQUssRUFBRTtrQkFDbEI7a0JBQ0F4SCxDQUFDLENBQUNqSSxNQUFNLENBQUN5UCxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxNQUFNLElBQUl0QyxRQUFRLENBQUN1QyxXQUFXLEVBQUU7a0JBQy9CLElBQUlDLGNBQWMsR0FBR3hDLFFBQVEsQ0FBQ3VDLFdBQVcsQ0FBQyxhQUFhLENBQUM7a0JBQ3hEQyxjQUFjLENBQUNDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTFPLElBQUksRUFBRSxDQUFDLEVBQUVvTyxTQUFTLENBQUNPLE9BQU8sRUFBRVAsU0FBUyxDQUFDUSxPQUFPLEVBQUVSLFNBQVMsQ0FBQ1gsT0FBTyxFQUFFVyxTQUFTLENBQUNWLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFDNUszRyxDQUFDLENBQUNqSSxNQUFNLENBQUMrUCxhQUFhLENBQUNKLGNBQWMsQ0FBQztnQkFDeEM7Y0FDRjtZQUNGLENBQUMsQ0FBQztVQUNKO1FBQ0Y7UUFFQTFKLElBQUksQ0FBQzRJLFVBQVUsR0FBRzVJLElBQUksQ0FBQytKLFdBQVcsR0FBRy9KLElBQUksQ0FBQ2pDLFNBQVMsR0FBRyxLQUFLO1FBQzNEZ0csTUFBTSxJQUFJLENBQUN1QixZQUFZLElBQUljLGlCQUFpQixDQUFDNEQsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxRDNGLFNBQVMsSUFBSStFLFdBQVcsSUFBSS9FLFNBQVMsQ0FBQ3JFLElBQUksQ0FBQztRQUMzQ3dFLFNBQVMsSUFBSUEsU0FBUyxDQUFDeEUsSUFBSSxFQUFFb0osV0FBVyxDQUFDO01BQzNDLENBQUM7TUFDR2EsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUNqSSxDQUFDLEVBQUU7UUFDaEQsT0FBT0EsQ0FBQyxDQUFDa0ksT0FBTyxJQUFJbEksQ0FBQyxDQUFDa0ksT0FBTyxDQUFDaFEsTUFBTSxHQUFHLENBQUMsS0FBSzhGLElBQUksQ0FBQytKLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSXhFLGNBQWMsQ0FBQ3ZELENBQUMsRUFBRWhDLElBQUksQ0FBQzRJLFVBQVUsQ0FBQztNQUM3RyxDQUFDO01BQ0d1QixhQUFhLEdBQUcsU0FBU0EsYUFBYUEsQ0FBQSxFQUFHO1FBQzNDLE9BQU8sQ0FBQ25LLElBQUksQ0FBQytKLFdBQVcsR0FBRyxLQUFLLEtBQUt2RSxZQUFZLENBQUN4RixJQUFJLENBQUM7TUFDekQsQ0FBQztNQUNHb0ssUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUNwSSxDQUFDLEVBQUU7UUFDbEMsSUFBSXdGLFlBQVksQ0FBQ3hGLENBQUMsQ0FBQyxFQUFFO1VBQ25CO1FBQ0Y7UUFFQSxJQUFJb0csQ0FBQyxHQUFHeEIsV0FBVyxDQUFDLENBQUM7VUFDakJ5QixDQUFDLEdBQUd4QixXQUFXLENBQUMsQ0FBQztRQUNyQnNCLE9BQU8sQ0FBQyxDQUFDQyxDQUFDLEdBQUd0QixPQUFPLElBQUlqQixXQUFXLEVBQUUsQ0FBQ3dDLENBQUMsR0FBR3RCLE9BQU8sSUFBSWxCLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDcEVpQixPQUFPLEdBQUdzQixDQUFDO1FBQ1hyQixPQUFPLEdBQUdzQixDQUFDO1FBQ1h0RSxNQUFNLElBQUlxQyxpQkFBaUIsQ0FBQzRELE9BQU8sQ0FBQyxJQUFJLENBQUM7TUFDM0MsQ0FBQztNQUNHSyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ3JJLENBQUMsRUFBRTtRQUNsQyxJQUFJd0YsWUFBWSxDQUFDeEYsQ0FBQyxDQUFDLEVBQUU7VUFDbkI7UUFDRjtRQUVBQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ0MsQ0FBQyxFQUFFQyxjQUFjLENBQUM7UUFDaEN3RCxPQUFPLEtBQUtjLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSStELFVBQVUsR0FBRyxDQUFDdEksQ0FBQyxDQUFDdUksU0FBUyxLQUFLLENBQUMsR0FBRzFHLFVBQVUsR0FBRzdCLENBQUMsQ0FBQ3VJLFNBQVMsS0FBSyxDQUFDLEdBQUd0UCxJQUFJLENBQUN1UCxXQUFXLEdBQUcsQ0FBQyxJQUFJdEcsVUFBVTtRQUN6R2lFLE9BQU8sQ0FBQ25HLENBQUMsQ0FBQ29GLE1BQU0sR0FBR2tELFVBQVUsRUFBRXRJLENBQUMsQ0FBQ3FGLE1BQU0sR0FBR2lELFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeER2RyxNQUFNLElBQUksQ0FBQ3VCLFlBQVksSUFBSWMsaUJBQWlCLENBQUM0RCxPQUFPLENBQUMsSUFBSSxDQUFDO01BQzVELENBQUM7TUFDR1MsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUN6SSxDQUFDLEVBQUU7UUFDaEMsSUFBSXdGLFlBQVksQ0FBQ3hGLENBQUMsQ0FBQyxFQUFFO1VBQ25CO1FBQ0Y7UUFFQSxJQUFJb0csQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDMEcsT0FBTztVQUNiTCxDQUFDLEdBQUdyRyxDQUFDLENBQUMyRyxPQUFPO1VBQ2JaLEVBQUUsR0FBR0ssQ0FBQyxHQUFHcEksSUFBSSxDQUFDb0ksQ0FBQztVQUNmSixFQUFFLEdBQUdLLENBQUMsR0FBR3JJLElBQUksQ0FBQ3FJLENBQUM7UUFDbkJySSxJQUFJLENBQUNvSSxDQUFDLEdBQUdBLENBQUM7UUFDVnBJLElBQUksQ0FBQ3FJLENBQUMsR0FBR0EsQ0FBQztRQUNWL0IsS0FBSyxHQUFHLElBQUk7UUFDWixDQUFDeUIsRUFBRSxJQUFJQyxFQUFFLEtBQUtRLHFCQUFxQixDQUFDVCxFQUFFLEVBQUVDLEVBQUUsQ0FBQztNQUM3QyxDQUFDO01BQ0cwQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQzFJLENBQUMsRUFBRTtRQUNsQ2hDLElBQUksQ0FBQ21FLEtBQUssR0FBR25DLENBQUM7UUFDZGtELE9BQU8sQ0FBQ2xGLElBQUksQ0FBQztNQUNmLENBQUM7TUFDRzJLLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDM0ksQ0FBQyxFQUFFO1FBQ3hDaEMsSUFBSSxDQUFDbUUsS0FBSyxHQUFHbkMsQ0FBQztRQUNkbUQsVUFBVSxDQUFDbkYsSUFBSSxDQUFDO01BQ2xCLENBQUM7TUFDRzRLLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDNUksQ0FBQyxFQUFFO1FBQ2xDLE9BQU93RixZQUFZLENBQUN4RixDQUFDLENBQUMsSUFBSUQsU0FBUyxDQUFDQyxDQUFDLEVBQUVDLGNBQWMsQ0FBQyxJQUFJMkQsT0FBTyxDQUFDNUYsSUFBSSxDQUFDO01BQ3pFLENBQUM7SUFFRG9HLGlCQUFpQixHQUFHcEcsSUFBSSxDQUFDNkssR0FBRyxHQUFHblMsSUFBSSxDQUFDNFEsV0FBVyxDQUFDdEYsV0FBVyxJQUFJLElBQUksRUFBRTJELFVBQVUsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUN4RjlILElBQUksQ0FBQ29ILE1BQU0sR0FBR3BILElBQUksQ0FBQ3FILE1BQU0sR0FBRyxDQUFDO0lBQzdCckgsSUFBSSxDQUFDNEgsR0FBRyxHQUFHOUcsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDeENkLElBQUksQ0FBQzZILEdBQUcsR0FBRy9HLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3hDZCxJQUFJLENBQUM4RyxPQUFPLEdBQUdGLFdBQVc7SUFDMUI1RyxJQUFJLENBQUMrRyxPQUFPLEdBQUdGLFdBQVc7SUFDMUI3RyxJQUFJLENBQUM0SSxVQUFVLEdBQUc1SSxJQUFJLENBQUMrSixXQUFXLEdBQUcvSixJQUFJLENBQUNqQyxTQUFTLEdBQUcsS0FBSztJQUUzRHJDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFFZHNFLElBQUksQ0FBQzhLLE1BQU0sR0FBRyxVQUFVOUksQ0FBQyxFQUFFO01BQ3pCLElBQUksQ0FBQ2hDLElBQUksQ0FBQytLLFNBQVMsRUFBRTtRQUNuQjVOLFlBQVksQ0FBQzhKLFVBQVUsR0FBR0MsUUFBUSxHQUFHbk4sTUFBTSxFQUFFLFFBQVEsRUFBRStELFNBQVMsQ0FBQztRQUVqRVYsSUFBSSxDQUFDSixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJRyxZQUFZLENBQUM4SixVQUFVLEdBQUdDLFFBQVEsR0FBR25OLE1BQU0sRUFBRSxRQUFRLEVBQUVxUSxRQUFRLEVBQUVuSSxjQUFjLEVBQUUxRSxPQUFPLENBQUM7UUFDeEhILElBQUksQ0FBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSUcsWUFBWSxDQUFDcEQsTUFBTSxFQUFFLE9BQU8sRUFBRXNRLFFBQVEsRUFBRXBJLGNBQWMsRUFBRTFFLE9BQU8sQ0FBQztRQUU5RixJQUFJSCxJQUFJLENBQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkzQixRQUFRLElBQUkrQixJQUFJLENBQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDMUVHLFlBQVksQ0FBQ3BELE1BQU0sRUFBRTBCLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRXNOLFFBQVEsRUFBRTlHLGNBQWMsRUFBRTFFLE9BQU8sQ0FBQztVQUV2RUosWUFBWSxDQUFDK0osUUFBUSxFQUFFekwsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFd04sVUFBVSxDQUFDO1VBRWxEOUwsWUFBWSxDQUFDK0osUUFBUSxFQUFFekwsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFd04sVUFBVSxDQUFDO1VBRWxEbkQsV0FBVyxJQUFJM0ksWUFBWSxDQUFDcEQsTUFBTSxFQUFFLE9BQU8sRUFBRXdOLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1VBQ3ZFM0IsT0FBTyxJQUFJekksWUFBWSxDQUFDcEQsTUFBTSxFQUFFLE9BQU8sRUFBRTZRLFFBQVEsQ0FBQztVQUNsRHJGLGNBQWMsSUFBSXBJLFlBQVksQ0FBQytKLFFBQVEsRUFBRSxjQUFjLEVBQUUrQyxlQUFlLENBQUM7VUFDekV6RSxZQUFZLElBQUlySSxZQUFZLENBQUMrSixRQUFRLEVBQUUsWUFBWSxFQUFFaUQsYUFBYSxDQUFDO1VBQ25FakYsT0FBTyxJQUFJL0gsWUFBWSxDQUFDcEQsTUFBTSxFQUFFdUIsWUFBWSxHQUFHLE9BQU8sRUFBRW9QLFFBQVEsQ0FBQztVQUNqRXZGLFVBQVUsSUFBSWhJLFlBQVksQ0FBQ3BELE1BQU0sRUFBRXVCLFlBQVksR0FBRyxPQUFPLEVBQUVxUCxXQUFXLENBQUM7VUFDdkV2RixNQUFNLElBQUlqSSxZQUFZLENBQUNwRCxNQUFNLEVBQUV1QixZQUFZLEdBQUcsTUFBTSxFQUFFbVAsT0FBTyxDQUFDO1FBQ2hFO1FBRUF6SyxJQUFJLENBQUMrSyxTQUFTLEdBQUcsSUFBSTtRQUNyQi9JLENBQUMsSUFBSUEsQ0FBQyxDQUFDNUUsSUFBSSxJQUFJMkwsUUFBUSxDQUFDL0csQ0FBQyxDQUFDO1FBQzFCMEQsUUFBUSxJQUFJQSxRQUFRLENBQUMxRixJQUFJLENBQUM7TUFDNUI7TUFFQSxPQUFPQSxJQUFJO0lBQ2IsQ0FBQztJQUVEQSxJQUFJLENBQUNnTCxPQUFPLEdBQUcsWUFBWTtNQUN6QixJQUFJaEwsSUFBSSxDQUFDK0ssU0FBUyxFQUFFO1FBQ2xCO1FBQ0FsUCxVQUFVLENBQUNvUCxNQUFNLENBQUMsVUFBVUMsQ0FBQyxFQUFFO1VBQzdCLE9BQU9BLENBQUMsS0FBS2xMLElBQUksSUFBSS9DLFdBQVcsQ0FBQ2lPLENBQUMsQ0FBQ25SLE1BQU0sQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQ0csTUFBTSxJQUFJd0QsZUFBZSxDQUFDdUosVUFBVSxHQUFHQyxRQUFRLEdBQUduTixNQUFNLEVBQUUsUUFBUSxFQUFFK0QsU0FBUyxDQUFDO1FBRWpGLElBQUlrQyxJQUFJLENBQUNqQyxTQUFTLEVBQUU7VUFDbEJpQyxJQUFJLENBQUM0SCxHQUFHLENBQUNsRyxLQUFLLENBQUMsQ0FBQztVQUVoQjFCLElBQUksQ0FBQzZILEdBQUcsQ0FBQ25HLEtBQUssQ0FBQyxDQUFDO1VBRWhCaEUsZUFBZSxDQUFDNEgsWUFBWSxHQUFHdkwsTUFBTSxHQUFHbU4sUUFBUSxFQUFFekwsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFZ04sT0FBTyxFQUFFLElBQUksQ0FBQztRQUNsRjtRQUVBL0ssZUFBZSxDQUFDdUosVUFBVSxHQUFHQyxRQUFRLEdBQUduTixNQUFNLEVBQUUsUUFBUSxFQUFFcVEsUUFBUSxFQUFFN00sT0FBTyxDQUFDO1FBRTVFRyxlQUFlLENBQUMzRCxNQUFNLEVBQUUsT0FBTyxFQUFFc1EsUUFBUSxFQUFFOU0sT0FBTyxDQUFDO1FBRW5ERyxlQUFlLENBQUMzRCxNQUFNLEVBQUUwQixXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUVzTixRQUFRLEVBQUV4TCxPQUFPLENBQUM7UUFFMURHLGVBQWUsQ0FBQ3dKLFFBQVEsRUFBRXpMLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRXdOLFVBQVUsQ0FBQztRQUVyRHZMLGVBQWUsQ0FBQ3dKLFFBQVEsRUFBRXpMLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRXdOLFVBQVUsQ0FBQztRQUVyRHZMLGVBQWUsQ0FBQzNELE1BQU0sRUFBRSxPQUFPLEVBQUV3TixZQUFZLEVBQUUsSUFBSSxDQUFDO1FBRXBEN0osZUFBZSxDQUFDM0QsTUFBTSxFQUFFLE9BQU8sRUFBRTZRLFFBQVEsQ0FBQztRQUUxQ2xOLGVBQWUsQ0FBQ3dKLFFBQVEsRUFBRSxjQUFjLEVBQUUrQyxlQUFlLENBQUM7UUFFMUR2TSxlQUFlLENBQUN3SixRQUFRLEVBQUUsWUFBWSxFQUFFaUQsYUFBYSxDQUFDO1FBRXREek0sZUFBZSxDQUFDM0QsTUFBTSxFQUFFdUIsWUFBWSxHQUFHLE9BQU8sRUFBRW9QLFFBQVEsQ0FBQztRQUV6RGhOLGVBQWUsQ0FBQzNELE1BQU0sRUFBRXVCLFlBQVksR0FBRyxPQUFPLEVBQUVxUCxXQUFXLENBQUM7UUFFNURqTixlQUFlLENBQUMzRCxNQUFNLEVBQUV1QixZQUFZLEdBQUcsTUFBTSxFQUFFbVAsT0FBTyxDQUFDO1FBRXZEekssSUFBSSxDQUFDK0ssU0FBUyxHQUFHL0ssSUFBSSxDQUFDakMsU0FBUyxHQUFHaUMsSUFBSSxDQUFDNEksVUFBVSxHQUFHLEtBQUs7UUFDekRqRCxTQUFTLElBQUlBLFNBQVMsQ0FBQzNGLElBQUksQ0FBQztNQUM5QjtJQUNGLENBQUM7SUFFREEsSUFBSSxDQUFDbUwsSUFBSSxHQUFHbkwsSUFBSSxDQUFDb0wsTUFBTSxHQUFHLFlBQVk7TUFDcENwTCxJQUFJLENBQUNnTCxPQUFPLENBQUMsQ0FBQztNQUVkLElBQUkvUSxDQUFDLEdBQUc0QixVQUFVLENBQUNtQixPQUFPLENBQUNnRCxJQUFJLENBQUM7TUFFaEMvRixDQUFDLElBQUksQ0FBQyxJQUFJNEIsVUFBVSxDQUFDd1AsTUFBTSxDQUFDcFIsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNqQ3VCLFdBQVcsS0FBS3dFLElBQUksS0FBS3hFLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVESyxVQUFVLENBQUNlLElBQUksQ0FBQ29ELElBQUksQ0FBQztJQUVyQnNGLFlBQVksSUFBSXJJLFdBQVcsQ0FBQ2xELE1BQU0sQ0FBQyxLQUFLeUIsV0FBVyxHQUFHd0UsSUFBSSxDQUFDO0lBQzNEQSxJQUFJLENBQUM4SyxNQUFNLENBQUMzRyxLQUFLLENBQUM7RUFDcEIsQ0FBQztFQUVEekosWUFBWSxDQUFDb0ksUUFBUSxFQUFFLENBQUM7SUFDdEJySSxHQUFHLEVBQUUsV0FBVztJQUNoQjZRLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxDQUFBLEVBQUc7TUFDbEIsT0FBTyxJQUFJLENBQUMxRCxHQUFHLENBQUNqRyxXQUFXLENBQUMsQ0FBQztJQUMvQjtFQUNGLENBQUMsRUFBRTtJQUNEbEgsR0FBRyxFQUFFLFdBQVc7SUFDaEI2USxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsQ0FBQSxFQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDekQsR0FBRyxDQUFDbEcsV0FBVyxDQUFDLENBQUM7SUFDL0I7RUFDRixDQUFDLENBQUMsQ0FBQztFQUVILE9BQU9tQixRQUFRO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0hBLFFBQVEsQ0FBQ3lJLE9BQU8sR0FBRyxRQUFRO0FBRTNCekksUUFBUSxDQUFDMEksTUFBTSxHQUFHLFVBQVVoSSxJQUFJLEVBQUU7RUFDaEMsT0FBTyxJQUFJVixRQUFRLENBQUNVLElBQUksQ0FBQztBQUMzQixDQUFDO0FBRURWLFFBQVEsQ0FBQzJJLFFBQVEsR0FBR2pKLFNBQVM7QUFFN0JNLFFBQVEsQ0FBQzRJLE1BQU0sR0FBRyxZQUFZO0VBQzVCLE9BQU83UCxVQUFVLENBQUM4UCxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQ3SSxRQUFRLENBQUM4SSxPQUFPLEdBQUcsVUFBVXpGLEVBQUUsRUFBRTtFQUMvQixPQUFPdEssVUFBVSxDQUFDb1AsTUFBTSxDQUFDLFVBQVVDLENBQUMsRUFBRTtJQUNwQyxPQUFPQSxDQUFDLENBQUMxSCxJQUFJLENBQUMyQyxFQUFFLEtBQUtBLEVBQUU7RUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVEeEssUUFBUSxDQUFDLENBQUMsSUFBSWpELElBQUksQ0FBQ0UsY0FBYyxDQUFDa0ssUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hxQjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNvSjtBQUVwSixJQUFJcEssSUFBSTtFQUNKcUMsWUFBWTtFQUNaRSxJQUFJO0VBQ0pDLElBQUk7RUFDSkMsTUFBTTtFQUNOQyxLQUFLO0VBQ0xHLEtBQUs7RUFDTHVRLFlBQVk7RUFDWkMsUUFBUTtFQUNSL1EsTUFBTTtFQUNOZ1IsTUFBTTtFQUNOQyxhQUFhO0VBQ2JDLFdBQVc7RUFDWEMsY0FBYztFQUNkQyxjQUFjO0VBQ2RDLEVBQUU7RUFDRkMsVUFBVTtFQUNWQyxXQUFXO0VBQ1hDLFlBQVk7RUFDWkMsS0FBSztFQUNMQyxtQkFBbUI7RUFDbkJDLGFBQWE7RUFDYm5SLFdBQVc7RUFDWG9SLG1CQUFtQjtFQUNuQkMsaUJBQWlCO0VBQ2pCQyxnQkFBZ0I7RUFDaEJDLFVBQVU7RUFDVnJSLFFBQVE7RUFDUnNSLGtCQUFrQjtFQUNsQkMsU0FBUztFQUNUQyxNQUFNO0VBQ05DLGVBQWU7RUFDZjtFQUNKdlIsUUFBUSxHQUFHLENBQUM7RUFDUkksUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUc7RUFDbkJrUixNQUFNLEdBQUdwUixRQUFRLENBQUMsQ0FBQztFQUNuQnFSLGVBQWUsR0FBRyxDQUFDO0VBQ25CQyxRQUFRLEdBQUcsQ0FBQztFQUNaQyxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQ2xSLEtBQUssRUFBRWUsSUFBSSxFQUFFNEMsSUFBSSxFQUFFO0lBQ3hELElBQUk0QyxLQUFLLEdBQUc0SyxTQUFTLENBQUNuUixLQUFLLENBQUMsS0FBS0EsS0FBSyxDQUFDb1IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUlwUixLQUFLLENBQUNXLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RmdELElBQUksQ0FBQyxHQUFHLEdBQUc1QyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUd3RixLQUFLO0lBQ2xDLE9BQU9BLEtBQUssR0FBR3ZHLEtBQUssQ0FBQ29SLE1BQU0sQ0FBQyxDQUFDLEVBQUVwUixLQUFLLENBQUNuQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUdtQyxLQUFLO0VBQzFELENBQUM7RUFDR3FSLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDclIsS0FBSyxFQUFFdUcsS0FBSyxFQUFFO0lBQ2pELE9BQU9BLEtBQUssS0FBSyxDQUFDNEssU0FBUyxDQUFDblIsS0FBSyxDQUFDLElBQUlBLEtBQUssQ0FBQ29SLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHcFIsS0FBSyxHQUFHLEdBQUcsR0FBR0EsS0FBSztFQUN6RyxDQUFDO0VBQ0dzUixVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0lBQ3JDLE9BQU9MLFFBQVEsSUFBSS9FLHFCQUFxQixDQUFDb0YsVUFBVSxDQUFDO0VBQ3RELENBQUM7RUFDRztFQUNKQyxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBbUJBLENBQUEsRUFBRztJQUNuRCxPQUFPekIsY0FBYyxHQUFHLENBQUM7RUFDM0IsQ0FBQztFQUNHMEIsaUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbkQsT0FBTzFCLGNBQWMsR0FBRyxDQUFDO0VBQzNCLENBQUM7RUFDRzJCLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDdFAsQ0FBQyxFQUFFO0lBQzFDLE9BQU9BLENBQUM7RUFDVixDQUFDO0VBQ0d1UCxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQzFSLEtBQUssRUFBRTtJQUNsQyxPQUFPb0MsSUFBSSxDQUFDQyxLQUFLLENBQUNyQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUM7RUFDakQsQ0FBQztFQUNHMlIsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUEsRUFBRztJQUMzQyxPQUFPLE9BQU8vVSxNQUFNLEtBQUssV0FBVztFQUN0QyxDQUFDO0VBQ0cwQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQSxFQUFHO0lBQ2pDLE9BQU9qRCxJQUFJLElBQUlzVixhQUFhLENBQUMsQ0FBQyxLQUFLdFYsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQUksQ0FBQyxJQUFJQSxJQUFJLENBQUNFLGNBQWMsSUFBSUYsSUFBSTtFQUN2RixDQUFDO0VBQ0d1RSxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQytFLENBQUMsRUFBRTtJQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDekcsS0FBSyxDQUFDeUIsT0FBTyxDQUFDZ0YsQ0FBQyxDQUFDO0VBQzVCLENBQUM7RUFDR2lNLHFCQUFxQixHQUFHLFNBQVNBLHFCQUFxQkEsQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDNUUsT0FBTyxDQUFDQSxpQkFBaUIsS0FBSyxRQUFRLEdBQUdoQixNQUFNLEdBQUdqUyxJQUFJLENBQUMsT0FBTyxHQUFHaVQsaUJBQWlCLENBQUMsS0FBSy9TLE1BQU0sQ0FBQyxRQUFRLEdBQUcrUyxpQkFBaUIsQ0FBQyxJQUFJOVMsS0FBSyxDQUFDLFFBQVEsR0FBRzhTLGlCQUFpQixDQUFDO0VBQ3JLLENBQUM7RUFDR0MsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNyVixPQUFPLEVBQUU7SUFDcEQsT0FBT2dFLDJEQUFhLENBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLENBQUMsS0FBS21FLFdBQVcsQ0FBQ25FLE9BQU8sQ0FBQyxHQUFHLFlBQVk7TUFDNUZzVixXQUFXLENBQUNDLEtBQUssR0FBR3BULElBQUksQ0FBQ3FULFVBQVU7TUFDbkNGLFdBQVcsQ0FBQ0csTUFBTSxHQUFHckIsTUFBTTtNQUMzQixPQUFPa0IsV0FBVztJQUNwQixDQUFDLEdBQUcsWUFBWTtNQUNkLE9BQU9JLFVBQVUsQ0FBQzFWLE9BQU8sQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0cyVixZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ0MsUUFBUSxFQUFFekgsVUFBVSxFQUFFeEcsSUFBSSxFQUFFO0lBQ25FLElBQUlyQixDQUFDLEdBQUdxQixJQUFJLENBQUNyQixDQUFDO01BQ1ZDLEVBQUUsR0FBR29CLElBQUksQ0FBQ3BCLEVBQUU7TUFDWkMsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDbkIsQ0FBQztJQUNkLE9BQU8sQ0FBQ0EsQ0FBQyxHQUFHeEMsMkRBQWEsQ0FBQzRSLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJLFlBQVk7TUFDMUUsT0FBT3BQLENBQUMsQ0FBQyxDQUFDLENBQUNGLENBQUMsQ0FBQztJQUNmLENBQUMsR0FBRyxZQUFZO01BQ2QsT0FBTyxDQUFDNkgsVUFBVSxHQUFHZ0gscUJBQXFCLENBQUM1TyxFQUFFLENBQUMsR0FBR3FQLFFBQVEsQ0FBQyxRQUFRLEdBQUdyUCxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hGLENBQUM7RUFDSCxDQUFDO0VBQ0dzUCxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQzdWLE9BQU8sRUFBRW1PLFVBQVUsRUFBRTtJQUNsRSxPQUFPLENBQUNBLFVBQVUsSUFBSSxDQUFDbEwsa0RBQVEsQ0FBQ2lCLE9BQU8sQ0FBQ2xFLE9BQU8sQ0FBQyxHQUFHcVYsY0FBYyxDQUFDclYsT0FBTyxDQUFDLEdBQUcsWUFBWTtNQUN2RixPQUFPc1YsV0FBVztJQUNwQixDQUFDO0VBQ0gsQ0FBQztFQUNHUSxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQzlWLE9BQU8sRUFBRStWLEtBQUssRUFBRTtJQUNuRCxJQUFJOVAsQ0FBQyxHQUFHOFAsS0FBSyxDQUFDOVAsQ0FBQztNQUNYTSxFQUFFLEdBQUd3UCxLQUFLLENBQUN4UCxFQUFFO01BQ2JELENBQUMsR0FBR3lQLEtBQUssQ0FBQ3pQLENBQUM7TUFDWEUsQ0FBQyxHQUFHdVAsS0FBSyxDQUFDdlAsQ0FBQztJQUNmLE9BQU9iLElBQUksQ0FBQzhDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQ3hDLENBQUMsR0FBRyxRQUFRLEdBQUdNLEVBQUUsTUFBTUMsQ0FBQyxHQUFHeEMsMkRBQWEsQ0FBQ2hFLE9BQU8sRUFBRWlHLENBQUMsQ0FBQyxDQUFDLEdBQUdPLENBQUMsQ0FBQyxDQUFDLEdBQUc2TyxjQUFjLENBQUNyVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNzRyxDQUFDLENBQUMsR0FBR25DLFdBQVcsQ0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUNxQyxNQUFNLENBQUM0RCxDQUFDLENBQUMsSUFBSTNELEtBQUssQ0FBQzJELENBQUMsQ0FBQyxJQUFJa1AscUJBQXFCLENBQUM1TyxFQUFFLENBQUMsR0FBR3ZHLE9BQU8sQ0FBQ2lHLENBQUMsQ0FBQyxHQUFHakcsT0FBTyxDQUFDLFFBQVEsR0FBR3VHLEVBQUUsQ0FBQyxDQUFDO0VBQ3BPLENBQUM7RUFDR3lQLG1CQUFtQixHQUFHLFNBQVNBLG1CQUFtQkEsQ0FBQ3pSLElBQUksRUFBRTBSLE1BQU0sRUFBRTtJQUNuRSxLQUFLLElBQUk5VSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd1UyxZQUFZLENBQUN0UyxNQUFNLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDL0MsQ0FBQyxDQUFDOFUsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQy9SLE9BQU8sQ0FBQ3dQLFlBQVksQ0FBQ3ZTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLb0QsSUFBSSxDQUFDbVAsWUFBWSxDQUFDdlMsQ0FBQyxDQUFDLEVBQUV1UyxZQUFZLENBQUN2UyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUV1UyxZQUFZLENBQUN2UyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEg7RUFDRixDQUFDO0VBQ0d1VCxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ25SLEtBQUssRUFBRTtJQUN4QyxPQUFPLE9BQU9BLEtBQUssS0FBSyxRQUFRO0VBQ2xDLENBQUM7RUFDRzJTLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDM1MsS0FBSyxFQUFFO0lBQzVDLE9BQU8sT0FBT0EsS0FBSyxLQUFLLFVBQVU7RUFDcEMsQ0FBQztFQUNHNFMsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUM1UyxLQUFLLEVBQUU7SUFDeEMsT0FBTyxPQUFPQSxLQUFLLEtBQUssUUFBUTtFQUNsQyxDQUFDO0VBQ0c2UyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQzdTLEtBQUssRUFBRTtJQUN4QyxPQUFPLE9BQU9BLEtBQUssS0FBSyxRQUFRO0VBQ2xDLENBQUM7RUFDRzhTLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDQyxTQUFTLEVBQUVDLFFBQVEsRUFBRXZILEtBQUssRUFBRTtJQUNyRSxPQUFPc0gsU0FBUyxJQUFJQSxTQUFTLENBQUNFLFFBQVEsQ0FBQ0QsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSXZILEtBQUssSUFBSXNILFNBQVMsQ0FBQ3RILEtBQUssQ0FBQyxDQUFDO0VBQ3hGLENBQUM7RUFDR3lILFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDdlAsSUFBSSxFQUFFM0MsSUFBSSxFQUFFO0lBQzdDLElBQUkyQyxJQUFJLENBQUN3UCxPQUFPLEVBQUU7TUFDaEIsSUFBSUMsTUFBTSxHQUFHcFMsSUFBSSxDQUFDMkMsSUFBSSxDQUFDO01BQ3ZCeVAsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFNBQVMsS0FBSzFQLElBQUksQ0FBQzJQLGlCQUFpQixHQUFHRixNQUFNLENBQUM7SUFDakU7RUFDRixDQUFDO0VBQ0dHLElBQUksR0FBR25SLElBQUksQ0FBQzRELEdBQUc7RUFDZndOLEtBQUssR0FBRyxNQUFNO0VBQ2RDLElBQUksR0FBRyxLQUFLO0VBQ1pDLE1BQU0sR0FBRyxPQUFPO0VBQ2hCQyxPQUFPLEdBQUcsUUFBUTtFQUNsQkMsTUFBTSxHQUFHLE9BQU87RUFDaEJDLE9BQU8sR0FBRyxRQUFRO0VBQ2xCQyxNQUFNLEdBQUcsT0FBTztFQUNoQkMsS0FBSyxHQUFHLE1BQU07RUFDZEMsSUFBSSxHQUFHLEtBQUs7RUFDWkMsT0FBTyxHQUFHLFFBQVE7RUFDbEJDLFFBQVEsR0FBRyxTQUFTO0VBQ3BCQyxPQUFPLEdBQUcsUUFBUTtFQUNsQkMsTUFBTSxHQUFHLE9BQU87RUFDaEJDLE9BQU8sR0FBRyxRQUFRO0VBQ2xCQyxHQUFHLEdBQUcsSUFBSTtFQUNWQyxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUM5WCxPQUFPLEVBQUU7SUFDMUQsT0FBT21DLElBQUksQ0FBQ2lMLGdCQUFnQixDQUFDcE4sT0FBTyxDQUFDO0VBQ3ZDLENBQUM7RUFDRytYLGlCQUFpQixHQUFHLFNBQVNBLGlCQUFpQkEsQ0FBQy9YLE9BQU8sRUFBRTtJQUMxRDtJQUNBLElBQUlnWSxRQUFRLEdBQUdGLGlCQUFpQixDQUFDOVgsT0FBTyxDQUFDLENBQUNnWSxRQUFRO0lBRWxEaFksT0FBTyxDQUFDaVksS0FBSyxDQUFDRCxRQUFRLEdBQUdBLFFBQVEsS0FBSyxVQUFVLElBQUlBLFFBQVEsS0FBSyxPQUFPLEdBQUdBLFFBQVEsR0FBRyxVQUFVO0VBQ2xHLENBQUM7RUFDR0UsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUNDLEdBQUcsRUFBRUMsUUFBUSxFQUFFO0lBQ3RELEtBQUssSUFBSWxTLENBQUMsSUFBSWtTLFFBQVEsRUFBRTtNQUN0QmxTLENBQUMsSUFBSWlTLEdBQUcsS0FBS0EsR0FBRyxDQUFDalMsQ0FBQyxDQUFDLEdBQUdrUyxRQUFRLENBQUNsUyxDQUFDLENBQUMsQ0FBQztJQUNwQztJQUVBLE9BQU9pUyxHQUFHO0VBQ1osQ0FBQztFQUNHekMsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUMxVixPQUFPLEVBQUVxWSxpQkFBaUIsRUFBRTtJQUMvRCxJQUFJQyxLQUFLLEdBQUdELGlCQUFpQixJQUFJUCxpQkFBaUIsQ0FBQzlYLE9BQU8sQ0FBQyxDQUFDc1QsY0FBYyxDQUFDLEtBQUssMEJBQTBCLElBQUkxVCxJQUFJLENBQUMyWSxFQUFFLENBQUN2WSxPQUFPLEVBQUU7UUFDN0hzUCxDQUFDLEVBQUUsQ0FBQztRQUNKQyxDQUFDLEVBQUUsQ0FBQztRQUNKaUosUUFBUSxFQUFFLENBQUM7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsU0FBUyxFQUFFLENBQUM7UUFDWkMsU0FBUyxFQUFFLENBQUM7UUFDWm5ZLEtBQUssRUFBRSxDQUFDO1FBQ1JvWSxLQUFLLEVBQUUsQ0FBQztRQUNSQyxLQUFLLEVBQUU7TUFDVCxDQUFDLENBQUMsQ0FBQ3RDLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFDVnVDLE1BQU0sR0FBRy9ZLE9BQU8sQ0FBQ2daLHFCQUFxQixDQUFDLENBQUM7SUFDNUNWLEtBQUssSUFBSUEsS0FBSyxDQUFDOUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLENBQUM7SUFDakMsT0FBTzBHLE1BQU07RUFDZixDQUFDO0VBQ0dFLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDalosT0FBTyxFQUFFa1osS0FBSyxFQUFFO0lBQy9DLElBQUkzUyxFQUFFLEdBQUcyUyxLQUFLLENBQUMzUyxFQUFFO0lBQ2pCLE9BQU92RyxPQUFPLENBQUMsUUFBUSxHQUFHdUcsRUFBRSxDQUFDLElBQUl2RyxPQUFPLENBQUMsUUFBUSxHQUFHdUcsRUFBRSxDQUFDLElBQUksQ0FBQztFQUM5RCxDQUFDO0VBQ0c0UyxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBbUJBLENBQUNDLFFBQVEsRUFBRTtJQUMvRCxJQUFJNVMsQ0FBQyxHQUFHLEVBQUU7TUFDTjZTLE1BQU0sR0FBR0QsUUFBUSxDQUFDQyxNQUFNO01BQ3hCM1ksUUFBUSxHQUFHMFksUUFBUSxDQUFDMVksUUFBUSxDQUFDLENBQUM7TUFDOUJ3RixDQUFDO0lBRUwsS0FBS0EsQ0FBQyxJQUFJbVQsTUFBTSxFQUFFO01BQ2hCN1MsQ0FBQyxDQUFDMUMsSUFBSSxDQUFDdVYsTUFBTSxDQUFDblQsQ0FBQyxDQUFDLEdBQUd4RixRQUFRLENBQUM7SUFDOUI7SUFFQSxPQUFPOEYsQ0FBQztFQUNWLENBQUM7RUFDRzhTLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ2hELFNBQVMsRUFBRTtJQUMxRCxPQUFPLFVBQVUvUyxLQUFLLEVBQUU7TUFDdEIsT0FBTzNELElBQUksQ0FBQ3lILEtBQUssQ0FBQ2tTLElBQUksQ0FBQ0osbUJBQW1CLENBQUM3QyxTQUFTLENBQUMsRUFBRS9TLEtBQUssQ0FBQztJQUMvRCxDQUFDO0VBQ0gsQ0FBQztFQUNHaVcsZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQWdCQSxDQUFDQyxvQkFBb0IsRUFBRTtJQUNyRSxJQUFJRixJQUFJLEdBQUczWixJQUFJLENBQUN5SCxLQUFLLENBQUNrUyxJQUFJLENBQUNFLG9CQUFvQixDQUFDO01BQzVDalQsQ0FBQyxHQUFHa1QsS0FBSyxDQUFDQyxPQUFPLENBQUNGLG9CQUFvQixDQUFDLElBQUlBLG9CQUFvQixDQUFDNUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDK0csSUFBSSxDQUFDLFVBQVVwVCxDQUFDLEVBQUVxVCxDQUFDLEVBQUU7UUFDaEcsT0FBT3JULENBQUMsR0FBR3FULENBQUM7TUFDZCxDQUFDLENBQUM7SUFDRixPQUFPclQsQ0FBQyxHQUFHLFVBQVVqRCxLQUFLLEVBQUV1VyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtNQUNoRCxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDeEJBLFNBQVMsR0FBRyxJQUFJO01BQ2xCO01BRUEsSUFBSTVZLENBQUM7TUFFTCxJQUFJLENBQUMyWSxTQUFTLEVBQUU7UUFDZCxPQUFPUCxJQUFJLENBQUNoVyxLQUFLLENBQUM7TUFDcEI7TUFFQSxJQUFJdVcsU0FBUyxHQUFHLENBQUMsRUFBRTtRQUNqQnZXLEtBQUssSUFBSXdXLFNBQVMsQ0FBQyxDQUFDOztRQUVwQixLQUFLNVksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUYsQ0FBQyxDQUFDcEYsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtVQUM3QixJQUFJcUYsQ0FBQyxDQUFDckYsQ0FBQyxDQUFDLElBQUlvQyxLQUFLLEVBQUU7WUFDakIsT0FBT2lELENBQUMsQ0FBQ3JGLENBQUMsQ0FBQztVQUNiO1FBQ0Y7UUFFQSxPQUFPcUYsQ0FBQyxDQUFDckYsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNqQixDQUFDLE1BQU07UUFDTEEsQ0FBQyxHQUFHcUYsQ0FBQyxDQUFDcEYsTUFBTTtRQUNabUMsS0FBSyxJQUFJd1csU0FBUztRQUVsQixPQUFPNVksQ0FBQyxFQUFFLEVBQUU7VUFDVixJQUFJcUYsQ0FBQyxDQUFDckYsQ0FBQyxDQUFDLElBQUlvQyxLQUFLLEVBQUU7WUFDakIsT0FBT2lELENBQUMsQ0FBQ3JGLENBQUMsQ0FBQztVQUNiO1FBQ0Y7TUFDRjtNQUVBLE9BQU9xRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxHQUFHLFVBQVVqRCxLQUFLLEVBQUV1VyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtNQUN6QyxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDeEJBLFNBQVMsR0FBRyxJQUFJO01BQ2xCO01BRUEsSUFBSUMsT0FBTyxHQUFHVCxJQUFJLENBQUNoVyxLQUFLLENBQUM7TUFDekIsT0FBTyxDQUFDdVcsU0FBUyxJQUFJblUsSUFBSSxDQUFDNEQsR0FBRyxDQUFDeVEsT0FBTyxHQUFHelcsS0FBSyxDQUFDLEdBQUd3VyxTQUFTLElBQUlDLE9BQU8sR0FBR3pXLEtBQUssR0FBRyxDQUFDLEtBQUt1VyxTQUFTLEdBQUcsQ0FBQyxHQUFHRSxPQUFPLEdBQUdULElBQUksQ0FBQ08sU0FBUyxHQUFHLENBQUMsR0FBR3ZXLEtBQUssR0FBR2tXLG9CQUFvQixHQUFHbFcsS0FBSyxHQUFHa1csb0JBQW9CLENBQUM7SUFDbk0sQ0FBQztFQUNILENBQUM7RUFDR1Esb0JBQW9CLEdBQUcsU0FBU0Esb0JBQW9CQSxDQUFDYixRQUFRLEVBQUU7SUFDakUsT0FBTyxVQUFVN1YsS0FBSyxFQUFFMlcsRUFBRSxFQUFFO01BQzFCLE9BQU9WLGdCQUFnQixDQUFDTCxtQkFBbUIsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQzdWLEtBQUssRUFBRTJXLEVBQUUsQ0FBQ0osU0FBUyxDQUFDO0lBQzdFLENBQUM7RUFDSCxDQUFDO0VBQ0dLLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDNVYsSUFBSSxFQUFFdkUsT0FBTyxFQUFFb2EsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDM0UsT0FBT0QsS0FBSyxDQUFDNVAsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOFAsT0FBTyxDQUFDLFVBQVVoVyxJQUFJLEVBQUU7TUFDOUMsT0FBT0MsSUFBSSxDQUFDdkUsT0FBTyxFQUFFc0UsSUFBSSxFQUFFK1YsUUFBUSxDQUFDO0lBQ3RDLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDR2hXLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDckUsT0FBTyxFQUFFc0UsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO0lBQ2pGLE9BQU96RSxPQUFPLENBQUMwRSxnQkFBZ0IsQ0FBQ0osSUFBSSxFQUFFQyxJQUFJLEVBQUU7TUFDMUNJLE9BQU8sRUFBRSxDQUFDSCxVQUFVO01BQ3BCQyxPQUFPLEVBQUUsQ0FBQyxDQUFDQTtJQUNiLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDR0csZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUM1RSxPQUFPLEVBQUVzRSxJQUFJLEVBQUVDLElBQUksRUFBRUUsT0FBTyxFQUFFO0lBQzNFLE9BQU96RSxPQUFPLENBQUM2RSxtQkFBbUIsQ0FBQ1AsSUFBSSxFQUFFQyxJQUFJLEVBQUUsQ0FBQyxDQUFDRSxPQUFPLENBQUM7RUFDM0QsQ0FBQztFQUNHOFYsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNoVyxJQUFJLEVBQUVILEVBQUUsRUFBRW9XLFVBQVUsRUFBRTtJQUNqRUEsVUFBVSxHQUFHQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ0MsWUFBWTtJQUVsRCxJQUFJRCxVQUFVLEVBQUU7TUFDZGpXLElBQUksQ0FBQ0gsRUFBRSxFQUFFLE9BQU8sRUFBRW9XLFVBQVUsQ0FBQztNQUM3QmpXLElBQUksQ0FBQ0gsRUFBRSxFQUFFLFdBQVcsRUFBRW9XLFVBQVUsQ0FBQztJQUNuQztFQUNGLENBQUM7RUFDR0UsZUFBZSxHQUFHO0lBQ3BCQyxVQUFVLEVBQUUsT0FBTztJQUNuQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFVBQVUsRUFBRTtFQUNkLENBQUM7RUFDR0MsU0FBUyxHQUFHO0lBQ2RDLGFBQWEsRUFBRSxNQUFNO0lBQ3JCQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUNHQyxTQUFTLEdBQUc7SUFDZEMsR0FBRyxFQUFFLENBQUM7SUFDTkMsSUFBSSxFQUFFLENBQUM7SUFDUEMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsTUFBTSxFQUFFLENBQUM7SUFDVEMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNHQyxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQ2xZLEtBQUssRUFBRW1ZLElBQUksRUFBRTtJQUNsRCxJQUFJaEgsU0FBUyxDQUFDblIsS0FBSyxDQUFDLEVBQUU7TUFDcEIsSUFBSW9ZLE9BQU8sR0FBR3BZLEtBQUssQ0FBQ1csT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM1QjBYLFFBQVEsR0FBRyxDQUFDRCxPQUFPLEdBQUcsRUFBRXBZLEtBQUssQ0FBQ3NZLE1BQU0sQ0FBQ0YsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHeE8sVUFBVSxDQUFDNUosS0FBSyxDQUFDb1IsTUFBTSxDQUFDZ0gsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUV0RyxJQUFJLENBQUNBLE9BQU8sRUFBRTtRQUNacFksS0FBSyxDQUFDVyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUd5WCxPQUFPLEtBQUtDLFFBQVEsSUFBSUYsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN4RG5ZLEtBQUssR0FBR0EsS0FBSyxDQUFDb1IsTUFBTSxDQUFDLENBQUMsRUFBRWdILE9BQU8sR0FBRyxDQUFDLENBQUM7TUFDdEM7TUFFQXBZLEtBQUssR0FBR3FZLFFBQVEsSUFBSXJZLEtBQUssSUFBSTRYLFNBQVMsR0FBR0EsU0FBUyxDQUFDNVgsS0FBSyxDQUFDLEdBQUdtWSxJQUFJLEdBQUcsQ0FBQ25ZLEtBQUssQ0FBQ1csT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHaUosVUFBVSxDQUFDNUosS0FBSyxDQUFDLEdBQUdtWSxJQUFJLEdBQUcsR0FBRyxHQUFHdk8sVUFBVSxDQUFDNUosS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25KO0lBRUEsT0FBT0EsS0FBSztFQUNkLENBQUM7RUFDR3VZLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDeFgsSUFBSSxFQUFFaEIsSUFBSSxFQUFFeVksU0FBUyxFQUFFakMsU0FBUyxFQUFFa0MsS0FBSyxFQUFFalcsTUFBTSxFQUFFa1csWUFBWSxFQUFFQyxrQkFBa0IsRUFBRTtJQUM1SCxJQUFJdkIsVUFBVSxHQUFHcUIsS0FBSyxDQUFDckIsVUFBVTtNQUM3QkMsUUFBUSxHQUFHb0IsS0FBSyxDQUFDcEIsUUFBUTtNQUN6QkUsUUFBUSxHQUFHa0IsS0FBSyxDQUFDbEIsUUFBUTtNQUN6QkQsTUFBTSxHQUFHbUIsS0FBSyxDQUFDbkIsTUFBTTtNQUNyQkUsVUFBVSxHQUFHaUIsS0FBSyxDQUFDakIsVUFBVTtJQUVqQyxJQUFJN1IsQ0FBQyxHQUFHOUcsSUFBSSxDQUFDK1osYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3QkMsZ0JBQWdCLEdBQUdqWSxXQUFXLENBQUM0WCxTQUFTLENBQUMsSUFBSS9YLDJEQUFhLENBQUMrWCxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssT0FBTztNQUM1Rk0sVUFBVSxHQUFHL1gsSUFBSSxDQUFDSixPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQzVDb1ksTUFBTSxHQUFHRixnQkFBZ0IsR0FBRzlaLEtBQUssR0FBR3laLFNBQVM7TUFDN0NRLE9BQU8sR0FBR2pZLElBQUksQ0FBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUN0Q3NZLEtBQUssR0FBR0QsT0FBTyxHQUFHNUIsVUFBVSxHQUFHQyxRQUFRO01BQ3ZDNkIsR0FBRyxHQUFHLGVBQWUsR0FBR0QsS0FBSyxHQUFHLGFBQWEsR0FBRzFCLFFBQVEsR0FBRyxTQUFTLEdBQUcwQixLQUFLLEdBQUcsZUFBZSxHQUFHekIsVUFBVSxHQUFHLHNJQUFzSTtJQUV4UDBCLEdBQUcsSUFBSSxXQUFXLElBQUksQ0FBQ0osVUFBVSxJQUFJSCxrQkFBa0IsS0FBS0UsZ0JBQWdCLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUN0RyxDQUFDQyxVQUFVLElBQUlILGtCQUFrQixJQUFJLENBQUNFLGdCQUFnQixNQUFNSyxHQUFHLElBQUksQ0FBQzNDLFNBQVMsS0FBS2xULG1EQUFTLEdBQUdxUSxNQUFNLEdBQUdDLE9BQU8sSUFBSSxHQUFHLElBQUluUixNQUFNLEdBQUdvSCxVQUFVLENBQUMwTixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5Sm9CLFlBQVksS0FBS1EsR0FBRyxJQUFJLDhDQUE4QyxHQUFHUixZQUFZLENBQUNTLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUd4VCxDQUFDLENBQUN5VCxRQUFRLEdBQUdKLE9BQU87SUFDcEJyVCxDQUFDLENBQUMwVCxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsR0FBR3RZLElBQUksSUFBSWhCLElBQUksR0FBRyxVQUFVLEdBQUdBLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNoRjRGLENBQUMsQ0FBQytPLEtBQUssQ0FBQzRFLE9BQU8sR0FBR0osR0FBRztJQUNyQnZULENBQUMsQ0FBQzRULFNBQVMsR0FBR3haLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQUMsR0FBR2dCLElBQUksR0FBRyxHQUFHLEdBQUdoQixJQUFJLEdBQUdnQixJQUFJO0lBQzNEZ1ksTUFBTSxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdULE1BQU0sQ0FBQ1UsWUFBWSxDQUFDOVQsQ0FBQyxFQUFFb1QsTUFBTSxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR1QsTUFBTSxDQUFDVyxXQUFXLENBQUMvVCxDQUFDLENBQUM7SUFDdkZBLENBQUMsQ0FBQ2dVLE9BQU8sR0FBR2hVLENBQUMsQ0FBQyxRQUFRLEdBQUc0USxTQUFTLENBQUNoVCxFQUFFLENBQUNQLEVBQUUsQ0FBQztJQUV6QzRXLGVBQWUsQ0FBQ2pVLENBQUMsRUFBRSxDQUFDLEVBQUU0USxTQUFTLEVBQUV5QyxPQUFPLENBQUM7SUFFekMsT0FBT3JULENBQUM7RUFDVixDQUFDO0VBQ0dpVSxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUV2RCxTQUFTLEVBQUV3RCxPQUFPLEVBQUU7SUFDaEYsSUFBSTVTLElBQUksR0FBRztRQUNUNlMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNHQyxJQUFJLEdBQUcxRCxTQUFTLENBQUN3RCxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztNQUN4Q0csWUFBWSxHQUFHM0QsU0FBUyxDQUFDd0QsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcERGLE1BQU0sQ0FBQ00sVUFBVSxHQUFHSixPQUFPO0lBQzNCNVMsSUFBSSxDQUFDb1AsU0FBUyxDQUFDdFQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHOFcsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEQ1UyxJQUFJLENBQUNvUCxTQUFTLENBQUN0VCxDQUFDLENBQUMsR0FBRzhXLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQztJQUN2QzVTLElBQUksQ0FBQyxRQUFRLEdBQUc4UyxJQUFJLEdBQUc3RixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2xDak4sSUFBSSxDQUFDLFFBQVEsR0FBRytTLFlBQVksR0FBRzlGLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDMUNqTixJQUFJLENBQUNvUCxTQUFTLENBQUM1VCxDQUFDLENBQUMsR0FBR21YLEtBQUssR0FBRyxJQUFJO0lBQ2hDemQsSUFBSSxDQUFDK2QsR0FBRyxDQUFDUCxNQUFNLEVBQUUxUyxJQUFJLENBQUM7RUFDeEIsQ0FBQztFQUNHa1QsU0FBUyxHQUFHLEVBQUU7RUFDZEMsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNUQyxNQUFNO0VBQ05DLEtBQUssR0FBRyxTQUFTQSxLQUFLQSxDQUFBLEVBQUc7SUFDM0IsT0FBTzdhLFFBQVEsQ0FBQyxDQUFDLEdBQUdxUixlQUFlLEdBQUcsRUFBRSxLQUFLdUosTUFBTSxLQUFLQSxNQUFNLEdBQUdyTyxxQkFBcUIsQ0FBQ3VPLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDdEcsQ0FBQztFQUNHaFosU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUEsRUFBRztJQUNuQztJQUNBLElBQUksQ0FBQ3RDLFdBQVcsSUFBSSxDQUFDQSxXQUFXLENBQUN1QyxTQUFTLElBQUl2QyxXQUFXLENBQUNxTixNQUFNLEdBQUd6TixLQUFLLENBQUMyYixXQUFXLEVBQUU7TUFDcEY7TUFDQWpiLG9EQUFVLENBQUNrQyxLQUFLLEVBQUU7TUFFbEIsSUFBSXhDLFdBQVcsRUFBRTtRQUNmb2IsTUFBTSxLQUFLQSxNQUFNLEdBQUdyTyxxQkFBcUIsQ0FBQ3VPLFVBQVUsQ0FBQyxDQUFDO01BQ3hELENBQUMsTUFBTTtRQUNMQSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFFaEI7O01BRUF6SixlQUFlLElBQUkySixTQUFTLENBQUMsYUFBYSxDQUFDO01BQzNDM0osZUFBZSxHQUFHclIsUUFBUSxDQUFDLENBQUM7SUFDOUI7RUFDRixDQUFDO0VBQ0dpYixrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUEsRUFBRztJQUNyRG5LLGdCQUFnQixHQUFHN1IsSUFBSSxDQUFDcVQsVUFBVTtJQUNsQ3pCLGlCQUFpQixHQUFHNVIsSUFBSSxDQUFDdVAsV0FBVztFQUN0QyxDQUFDO0VBQ0cwTSxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQSxFQUFHO0lBQ25DcGIsb0RBQVUsQ0FBQ2tDLEtBQUssRUFBRTtJQUNsQixDQUFDa08sV0FBVyxJQUFJLENBQUNTLGFBQWEsSUFBSSxDQUFDelIsSUFBSSxDQUFDaWMsaUJBQWlCLElBQUksQ0FBQ2pjLElBQUksQ0FBQ2tjLHVCQUF1QixLQUFLLENBQUN4SyxtQkFBbUIsSUFBSUUsZ0JBQWdCLEtBQUs3UixJQUFJLENBQUNxVCxVQUFVLElBQUk3UCxJQUFJLENBQUM0RCxHQUFHLENBQUNwSCxJQUFJLENBQUN1UCxXQUFXLEdBQUdxQyxpQkFBaUIsQ0FBQyxHQUFHNVIsSUFBSSxDQUFDdVAsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJc0IsWUFBWSxDQUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQztFQUN4USxDQUFDO0VBQ0c7RUFDSnFOLFVBQVUsR0FBRyxDQUFDLENBQUM7RUFDWEMsV0FBVyxHQUFHLEVBQUU7RUFDaEJDLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFBLEVBQUc7SUFDekMsT0FBTzdaLGVBQWUsQ0FBQy9FLGFBQWEsRUFBRSxXQUFXLEVBQUU0ZSxZQUFZLENBQUMsSUFBSUMsV0FBVyxDQUFDLElBQUksQ0FBQztFQUN2RixDQUFDO0VBQ0dSLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDNVosSUFBSSxFQUFFO0lBQ3ZDLE9BQU9pYSxVQUFVLENBQUNqYSxJQUFJLENBQUMsSUFBSWlhLFVBQVUsQ0FBQ2phLElBQUksQ0FBQyxDQUFDcWEsR0FBRyxDQUFDLFVBQVV2WixDQUFDLEVBQUU7TUFDM0QsT0FBT0EsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsSUFBSW9aLFdBQVc7RUFDbkIsQ0FBQztFQUNHSSxZQUFZLEdBQUcsRUFBRTtFQUNqQjtFQUNKQyxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2hELEtBQUssSUFBSTNkLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3lkLFlBQVksQ0FBQ3hkLE1BQU0sRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUMvQyxJQUFJLENBQUMyZCxLQUFLLElBQUlGLFlBQVksQ0FBQ3pkLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSXlkLFlBQVksQ0FBQ3pkLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzRkLEtBQUssS0FBS0QsS0FBSyxFQUFFO1FBQ3hFRixZQUFZLENBQUN6ZCxDQUFDLENBQUMsQ0FBQzhXLEtBQUssQ0FBQzRFLE9BQU8sR0FBRytCLFlBQVksQ0FBQ3pkLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkR5ZCxZQUFZLENBQUN6ZCxDQUFDLENBQUMsQ0FBQzZkLE9BQU8sSUFBSUosWUFBWSxDQUFDemQsQ0FBQyxDQUFDLENBQUN5YixZQUFZLENBQUMsV0FBVyxFQUFFZ0MsWUFBWSxDQUFDemQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRnlkLFlBQVksQ0FBQ3pkLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzhkLE9BQU8sR0FBRyxDQUFDO01BQ2pDO0lBQ0Y7RUFDRixDQUFDO0VBQ0dDLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDN00sSUFBSSxFQUFFeU0sS0FBSyxFQUFFO0lBQ2hELElBQUlqZSxPQUFPO0lBRVgsS0FBSzBTLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBR3FLLFNBQVMsQ0FBQ3hjLE1BQU0sRUFBRW1TLEVBQUUsRUFBRSxFQUFFO01BQ3hDMVMsT0FBTyxHQUFHK2MsU0FBUyxDQUFDckssRUFBRSxDQUFDO01BRXZCLElBQUkxUyxPQUFPLEtBQUssQ0FBQ2llLEtBQUssSUFBSWplLE9BQU8sQ0FBQ3NHLElBQUksS0FBSzJYLEtBQUssQ0FBQyxFQUFFO1FBQ2pELElBQUl6TSxJQUFJLEVBQUU7VUFDUnhSLE9BQU8sQ0FBQ3dSLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxNQUFNO1VBQ0x4UixPQUFPLENBQUN5UixNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM1QjtNQUNGO0lBQ0Y7SUFFQXdNLEtBQUssSUFBSUQsZUFBZSxDQUFDQyxLQUFLLENBQUM7SUFDL0JBLEtBQUssSUFBSVosU0FBUyxDQUFDLFFBQVEsQ0FBQztFQUM5QixDQUFDO0VBQ0dpQixrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUMzWixpQkFBaUIsRUFBRW1ELEtBQUssRUFBRTtJQUM3RTtJQUNBM0Ysb0RBQVUsQ0FBQ2tDLEtBQUssRUFBRTtJQUNsQixDQUFDeUQsS0FBSyxJQUFJLENBQUN5VyxjQUFjLEtBQUtwYyxvREFBVSxDQUFDc1gsT0FBTyxDQUFDLFVBQVVuQyxHQUFHLEVBQUU7TUFDOUQsT0FBT2pDLFdBQVcsQ0FBQ2lDLEdBQUcsQ0FBQyxJQUFJQSxHQUFHLENBQUNyUyxPQUFPLEVBQUUsS0FBS3FTLEdBQUcsQ0FBQ2tILEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0lBQ0YzSyxTQUFTLENBQUNsUCxpQkFBaUIsQ0FBQyxLQUFLckQsSUFBSSxDQUFDb0QsT0FBTyxDQUFDQyxpQkFBaUIsR0FBRzBPLGtCQUFrQixHQUFHMU8saUJBQWlCLENBQUM7RUFDM0csQ0FBQztFQUNHNFosY0FBYztFQUNkRSxVQUFVLEdBQUcsQ0FBQztFQUNkQyxlQUFlO0VBQ2ZDLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pEO0lBQ0EsSUFBSUQsZUFBZSxLQUFLRCxVQUFVLEVBQUU7TUFDbEMsSUFBSWpTLEVBQUUsR0FBR2tTLGVBQWUsR0FBR0QsVUFBVTtNQUNyQzdQLHFCQUFxQixDQUFDLFlBQVk7UUFDaEMsT0FBT3BDLEVBQUUsS0FBS2lTLFVBQVUsSUFBSVosV0FBVyxDQUFDLElBQUksQ0FBQztNQUMvQyxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFDR2UsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUEsRUFBRztJQUMzQ25kLEtBQUssQ0FBQzJhLFdBQVcsQ0FBQzlJLFNBQVMsQ0FBQztJQUU1QkMsTUFBTSxHQUFHRCxTQUFTLENBQUN1TCxZQUFZLElBQUl2ZCxJQUFJLENBQUN1UCxXQUFXO0lBRW5EcFAsS0FBSyxDQUFDcWQsV0FBVyxDQUFDeEwsU0FBUyxDQUFDO0VBQzlCLENBQUM7RUFDR3VLLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDL1YsS0FBSyxFQUFFaVgsVUFBVSxFQUFFO0lBQ3hELElBQUlyTCxlQUFlLElBQUksQ0FBQzVMLEtBQUssRUFBRTtNQUM3QnRFLFlBQVksQ0FBQ3hFLGFBQWEsRUFBRSxXQUFXLEVBQUU0ZSxZQUFZLENBQUM7TUFFdEQ7SUFDRjtJQUVBZ0IsYUFBYSxDQUFDLENBQUM7SUFFZkwsY0FBYyxHQUFHdmYsYUFBYSxDQUFDZ2dCLFlBQVksR0FBRyxJQUFJO0lBRWxEN2Msb0RBQVUsQ0FBQ3NYLE9BQU8sQ0FBQyxVQUFVbkMsR0FBRyxFQUFFO01BQ2hDLE9BQU9qQyxXQUFXLENBQUNpQyxHQUFHLENBQUMsSUFBSSxFQUFFQSxHQUFHLENBQUNyUyxPQUFPLEtBQUtxUyxHQUFHLENBQUNrSCxHQUFHLEdBQUdsSCxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBR0osSUFBSTJILFlBQVksR0FBRzVCLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFFM0N2SyxLQUFLLElBQUk5VCxhQUFhLENBQUMrWixJQUFJLENBQUMsQ0FBQztJQUM3QmdHLFVBQVUsSUFBSVYsVUFBVSxDQUFDLENBQUM7SUFFMUJsYyxvREFBVSxDQUFDc1gsT0FBTyxDQUFDLFVBQVVuQyxHQUFHLEVBQUU7TUFDaEMsSUFBSWpDLFdBQVcsQ0FBQ2lDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCQSxHQUFHLENBQUNyUSxNQUFNLEtBQUtxUSxHQUFHLENBQUNsWCxNQUFNLENBQUNnWCxLQUFLLENBQUM4SCxjQUFjLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFFMUQ1SCxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ1I7SUFDRixDQUFDLENBQUM7SUFFRnlGLFNBQVMsQ0FBQy9LLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3lILE9BQU8sQ0FBQyxVQUFVclQsQ0FBQyxFQUFFO01BQ3RDLE9BQU9BLENBQUMsQ0FBQytZLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBR0pwQyxTQUFTLENBQUN0RCxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTlGLENBQUMsRUFBRTtNQUNoQztNQUNBLElBQUk4RixDQUFDLENBQUNnWixhQUFhLElBQUloWixDQUFDLENBQUNpWixHQUFHLEVBQUU7UUFDNUIsSUFBSUMsSUFBSSxHQUFHbFosQ0FBQyxDQUFDeUQsSUFBSSxDQUFDMFYsVUFBVSxHQUFHLGFBQWEsR0FBRyxjQUFjO1VBQ3pEQyxRQUFRLEdBQUdwWixDQUFDLENBQUNpWixHQUFHLENBQUNDLElBQUksQ0FBQztRQUMxQmxaLENBQUMsQ0FBQ3FMLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCckwsQ0FBQyxDQUFDcVosZ0JBQWdCLENBQUNyWixDQUFDLENBQUNpWixHQUFHLENBQUNDLElBQUksQ0FBQyxHQUFHRSxRQUFRLENBQUM7UUFDMUNwWixDQUFDLENBQUMrWSxPQUFPLENBQUMsQ0FBQztNQUNiO0lBQ0YsQ0FBQyxDQUFDO0lBRUZwQyxTQUFTLENBQUN0RCxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTtNQUM3QjtNQUNBLElBQUl3QixHQUFHLEdBQUdxTixVQUFVLENBQUM3TyxDQUFDLENBQUMyTyxRQUFRLEVBQUUzTyxDQUFDLENBQUNzWixJQUFJLENBQUM7TUFFeEMsQ0FBQ3RaLENBQUMsQ0FBQ3lELElBQUksQ0FBQzhWLEdBQUcsS0FBSyxLQUFLLElBQUl2WixDQUFDLENBQUN3WixTQUFTLElBQUl4WixDQUFDLENBQUN1WixHQUFHLEdBQUcvWCxHQUFHLEtBQUt4QixDQUFDLENBQUN5WixZQUFZLENBQUN6WixDQUFDLENBQUNvVyxLQUFLLEVBQUUxWCxJQUFJLENBQUM4QyxHQUFHLENBQUN4QixDQUFDLENBQUNvVyxLQUFLLEdBQUcsQ0FBQyxFQUFFNVUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ25ILENBQUMsQ0FBQztJQUVGcVgsWUFBWSxDQUFDeEYsT0FBTyxDQUFDLFVBQVUzRCxNQUFNLEVBQUU7TUFDckMsT0FBT0EsTUFBTSxJQUFJQSxNQUFNLENBQUNnSyxNQUFNLElBQUloSyxNQUFNLENBQUNnSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFSjNkLG9EQUFVLENBQUNzWCxPQUFPLENBQUMsVUFBVW5DLEdBQUcsRUFBRTtNQUNoQyxJQUFJakMsV0FBVyxDQUFDaUMsR0FBRyxDQUFDLEVBQUU7UUFDcEJBLEdBQUcsQ0FBQ3JRLE1BQU0sSUFBSTJILHFCQUFxQixDQUFDLFlBQVk7VUFDOUMsT0FBTzBJLEdBQUcsQ0FBQ2xYLE1BQU0sQ0FBQ2dYLEtBQUssQ0FBQzhILGNBQWMsR0FBRyxRQUFRO1FBQ25ELENBQUMsQ0FBQztRQUNGNUgsR0FBRyxDQUFDa0gsR0FBRyxJQUFJbEgsR0FBRyxDQUFDQSxHQUFHLENBQUNrSCxHQUFHLENBQUM7TUFDekI7SUFDRixDQUFDLENBQUM7SUFFRkYsa0JBQWtCLENBQUNqTCxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFFekNsQixZQUFZLENBQUNoRSxLQUFLLENBQUMsQ0FBQztJQUVwQnNRLFVBQVUsRUFBRTtJQUNaRixjQUFjLEdBQUcsQ0FBQztJQUVsQnBCLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFYkosU0FBUyxDQUFDdEQsT0FBTyxDQUFDLFVBQVVyVCxDQUFDLEVBQUU7TUFDN0IsT0FBT2lQLFdBQVcsQ0FBQ2pQLENBQUMsQ0FBQ3lELElBQUksQ0FBQ2tXLFNBQVMsQ0FBQyxJQUFJM1osQ0FBQyxDQUFDeUQsSUFBSSxDQUFDa1csU0FBUyxDQUFDM1osQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQztJQUVGbVksY0FBYyxHQUFHdmYsYUFBYSxDQUFDZ2dCLFlBQVksR0FBRyxLQUFLO0lBRW5EM0IsU0FBUyxDQUFDLFNBQVMsQ0FBQztFQUN0QixDQUFDO0VBQ0cyQyxXQUFXLEdBQUcsQ0FBQztFQUNmQyxVQUFVLEdBQUcsQ0FBQztFQUNkQyxRQUFRO0VBQ1IvQyxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ3JWLEtBQUssRUFBRTtJQUMxQyxJQUFJLENBQUN5VyxjQUFjLElBQUl6VyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ2xDOUksYUFBYSxDQUFDbWhCLFVBQVUsR0FBRyxJQUFJO01BQy9CRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ3JZLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVoQyxJQUFJdVksQ0FBQyxHQUFHckQsU0FBUyxDQUFDeGMsTUFBTTtRQUNwQjhmLElBQUksR0FBR2hlLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCaWUsY0FBYyxHQUFHRCxJQUFJLEdBQUc1TSxNQUFNLElBQUksRUFBRTtRQUNwQzhNLE1BQU0sR0FBR0gsQ0FBQyxJQUFJckQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDd0QsTUFBTSxDQUFDLENBQUM7TUFFdkNOLFVBQVUsR0FBR0QsV0FBVyxHQUFHTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQ2hDLGNBQWMsS0FBS3lCLFdBQVcsR0FBR08sTUFBTSxDQUFDO01BRXhDLElBQUlELGNBQWMsRUFBRTtRQUNsQixJQUFJNU0sZUFBZSxJQUFJLENBQUNsQixjQUFjLElBQUk2TixJQUFJLEdBQUczTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1VBQ3RFQSxlQUFlLEdBQUcsQ0FBQztVQUVuQjJKLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDeEI7UUFFQWhMLE1BQU0sR0FBR29CLE1BQU07UUFDZkEsTUFBTSxHQUFHNE0sSUFBSTtNQUNmO01BRUEsSUFBSUosVUFBVSxHQUFHLENBQUMsRUFBRTtRQUNsQnZOLEVBQUUsR0FBRzBOLENBQUM7UUFFTixPQUFPMU4sRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1VBQ2ZxSyxTQUFTLENBQUNySyxFQUFFLENBQUMsSUFBSXFLLFNBQVMsQ0FBQ3JLLEVBQUUsQ0FBQyxDQUFDN0ssTUFBTSxDQUFDLENBQUMsRUFBRXlZLGNBQWMsQ0FBQztRQUMxRDtRQUVBTCxVQUFVLEdBQUcsQ0FBQztNQUNoQixDQUFDLE1BQU07UUFDTCxLQUFLdk4sRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHME4sQ0FBQyxFQUFFMU4sRUFBRSxFQUFFLEVBQUU7VUFDekJxSyxTQUFTLENBQUNySyxFQUFFLENBQUMsSUFBSXFLLFNBQVMsQ0FBQ3JLLEVBQUUsQ0FBQyxDQUFDN0ssTUFBTSxDQUFDLENBQUMsRUFBRXlZLGNBQWMsQ0FBQztRQUMxRDtNQUNGO01BRUF0aEIsYUFBYSxDQUFDbWhCLFVBQVUsR0FBRyxLQUFLO0lBQ2xDO0lBRUFsRCxNQUFNLEdBQUcsQ0FBQztFQUNaLENBQUM7RUFDR3VELGdCQUFnQixHQUFHLENBQUN0SyxLQUFLLEVBQUVDLElBQUksRUFBRUUsT0FBTyxFQUFFRCxNQUFNLEVBQUVTLE9BQU8sR0FBR0YsT0FBTyxFQUFFRSxPQUFPLEdBQUdMLE1BQU0sRUFBRUssT0FBTyxHQUFHSCxJQUFJLEVBQUVHLE9BQU8sR0FBR0osS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDO0VBQ25TZ0ssV0FBVyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsTUFBTSxDQUFDLENBQUNwSyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxHQUFHTyxNQUFNLEVBQUUsS0FBSyxHQUFHQyxPQUFPLEVBQUUsVUFBVSxFQUFFRixPQUFPLEVBQUVELFFBQVEsRUFBRUEsUUFBUSxHQUFHRixJQUFJLEVBQUVFLFFBQVEsR0FBR0osTUFBTSxFQUFFSSxRQUFRLEdBQUdELE9BQU8sRUFBRUMsUUFBUSxHQUFHSCxLQUFLLENBQUMsQ0FBQztFQUMvTWtLLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDdEIsR0FBRyxFQUFFdUIsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDekRDLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDO0lBRWhCLElBQUl4YyxLQUFLLEdBQUdnYixHQUFHLENBQUMwQixLQUFLO0lBRXJCLElBQUkxYyxLQUFLLENBQUMyYyxjQUFjLEVBQUU7TUFDeEJGLFNBQVMsQ0FBQ3pjLEtBQUssQ0FBQzRjLFdBQVcsQ0FBQztJQUM5QixDQUFDLE1BQU0sSUFBSTVCLEdBQUcsQ0FBQzBCLEtBQUssQ0FBQ0csU0FBUyxFQUFFO01BQzlCLElBQUl6RixNQUFNLEdBQUdtRixNQUFNLENBQUNPLFVBQVU7TUFFOUIsSUFBSTFGLE1BQU0sRUFBRTtRQUNWQSxNQUFNLENBQUNVLFlBQVksQ0FBQ2tELEdBQUcsRUFBRXVCLE1BQU0sQ0FBQztRQUNoQ25GLE1BQU0sQ0FBQ3FELFdBQVcsQ0FBQzhCLE1BQU0sQ0FBQztNQUM1QjtJQUNGO0lBRUF2QixHQUFHLENBQUMwQixLQUFLLENBQUNHLFNBQVMsR0FBRyxLQUFLO0VBQzdCLENBQUM7RUFDR0UsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUMvQixHQUFHLEVBQUV1QixNQUFNLEVBQUVTLEVBQUUsRUFBRUosV0FBVyxFQUFFO0lBQ2pFLElBQUksQ0FBQzVCLEdBQUcsQ0FBQzBCLEtBQUssQ0FBQ0csU0FBUyxFQUFFO01BQ3hCLElBQUk1Z0IsQ0FBQyxHQUFHa2dCLGdCQUFnQixDQUFDamdCLE1BQU07UUFDM0IrZ0IsV0FBVyxHQUFHVixNQUFNLENBQUN4SixLQUFLO1FBQzFCbUssUUFBUSxHQUFHbEMsR0FBRyxDQUFDakksS0FBSztRQUNwQi9SLENBQUM7TUFFTCxPQUFPL0UsQ0FBQyxFQUFFLEVBQUU7UUFDVitFLENBQUMsR0FBR21iLGdCQUFnQixDQUFDbGdCLENBQUMsQ0FBQztRQUN2QmdoQixXQUFXLENBQUNqYyxDQUFDLENBQUMsR0FBR2djLEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQztNQUN4QjtNQUVBaWMsV0FBVyxDQUFDbkssUUFBUSxHQUFHa0ssRUFBRSxDQUFDbEssUUFBUSxLQUFLLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVTtNQUMzRWtLLEVBQUUsQ0FBQzNFLE9BQU8sS0FBSyxRQUFRLEtBQUs0RSxXQUFXLENBQUM1RSxPQUFPLEdBQUcsY0FBYyxDQUFDO01BQ2pFNkUsUUFBUSxDQUFDbEwsT0FBTyxDQUFDLEdBQUdrTCxRQUFRLENBQUNuTCxNQUFNLENBQUMsR0FBRyxNQUFNO01BQzdDa0wsV0FBVyxDQUFDRSxTQUFTLEdBQUdILEVBQUUsQ0FBQ0csU0FBUyxJQUFJLE1BQU07TUFDOUNGLFdBQVcsQ0FBQ0csUUFBUSxHQUFHLFNBQVM7TUFDaENILFdBQVcsQ0FBQ0ksU0FBUyxHQUFHLFlBQVk7TUFDcENKLFdBQVcsQ0FBQ2hMLE1BQU0sQ0FBQyxHQUFHOEIsUUFBUSxDQUFDaUgsR0FBRyxFQUFFbGEscURBQVcsQ0FBQyxHQUFHNlIsR0FBRztNQUN0RHNLLFdBQVcsQ0FBQy9LLE9BQU8sQ0FBQyxHQUFHNkIsUUFBUSxDQUFDaUgsR0FBRyxFQUFFdFosbURBQVMsQ0FBQyxHQUFHaVIsR0FBRztNQUNyRHNLLFdBQVcsQ0FBQzFLLFFBQVEsQ0FBQyxHQUFHMkssUUFBUSxDQUFDMUssT0FBTyxDQUFDLEdBQUcwSyxRQUFRLENBQUNwTCxJQUFJLENBQUMsR0FBR29MLFFBQVEsQ0FBQ3JMLEtBQUssQ0FBQyxHQUFHLEdBQUc7TUFFbEY0SyxTQUFTLENBQUNHLFdBQVcsQ0FBQztNQUV0Qk0sUUFBUSxDQUFDakwsTUFBTSxDQUFDLEdBQUdpTCxRQUFRLENBQUMsS0FBSyxHQUFHekssTUFBTSxDQUFDLEdBQUd1SyxFQUFFLENBQUMvSyxNQUFNLENBQUM7TUFDeERpTCxRQUFRLENBQUNoTCxPQUFPLENBQUMsR0FBR2dMLFFBQVEsQ0FBQyxLQUFLLEdBQUd4SyxPQUFPLENBQUMsR0FBR3NLLEVBQUUsQ0FBQzlLLE9BQU8sQ0FBQztNQUMzRGdMLFFBQVEsQ0FBQzNLLFFBQVEsQ0FBQyxHQUFHeUssRUFBRSxDQUFDekssUUFBUSxDQUFDO01BRWpDLElBQUl5SSxHQUFHLENBQUM4QixVQUFVLEtBQUtQLE1BQU0sRUFBRTtRQUM3QnZCLEdBQUcsQ0FBQzhCLFVBQVUsQ0FBQ2hGLFlBQVksQ0FBQ3lFLE1BQU0sRUFBRXZCLEdBQUcsQ0FBQztRQUN4Q3VCLE1BQU0sQ0FBQ3hFLFdBQVcsQ0FBQ2lELEdBQUcsQ0FBQztNQUN6QjtNQUVBQSxHQUFHLENBQUMwQixLQUFLLENBQUNHLFNBQVMsR0FBRyxJQUFJO0lBQzVCO0VBQ0YsQ0FBQztFQUNHUyxRQUFRLEdBQUcsVUFBVTtFQUNyQmIsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNELEtBQUssRUFBRTtJQUN4QyxJQUFJQSxLQUFLLEVBQUU7TUFDVCxJQUFJekosS0FBSyxHQUFHeUosS0FBSyxDQUFDemEsQ0FBQyxDQUFDZ1IsS0FBSztRQUNyQmdKLENBQUMsR0FBR1MsS0FBSyxDQUFDdGdCLE1BQU07UUFDaEJELENBQUMsR0FBRyxDQUFDO1FBQ0wrRSxDQUFDO1FBQ0QzQyxLQUFLO01BQ1QsQ0FBQ21lLEtBQUssQ0FBQ3phLENBQUMsQ0FBQzJhLEtBQUssSUFBSWhpQixJQUFJLENBQUM2RCxJQUFJLENBQUNnZixRQUFRLENBQUNmLEtBQUssQ0FBQ3phLENBQUMsQ0FBQyxFQUFFZ1ksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOztNQUU1RCxPQUFPOWQsQ0FBQyxHQUFHOGYsQ0FBQyxFQUFFOWYsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwQm9DLEtBQUssR0FBR21lLEtBQUssQ0FBQ3ZnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCK0UsQ0FBQyxHQUFHd2IsS0FBSyxDQUFDdmdCLENBQUMsQ0FBQztRQUVaLElBQUlvQyxLQUFLLEVBQUU7VUFDVDBVLEtBQUssQ0FBQy9SLENBQUMsQ0FBQyxHQUFHM0MsS0FBSztRQUNsQixDQUFDLE1BQU0sSUFBSTBVLEtBQUssQ0FBQy9SLENBQUMsQ0FBQyxFQUFFO1VBQ25CK1IsS0FBSyxDQUFDeUssY0FBYyxDQUFDeGMsQ0FBQyxDQUFDeWMsT0FBTyxDQUFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUNJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEU7TUFDRjtJQUNGO0VBQ0YsQ0FBQztFQUNHQyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQzdpQixPQUFPLEVBQUU7SUFDMUM7SUFDQSxJQUFJaWhCLENBQUMsR0FBR0ssV0FBVyxDQUFDbGdCLE1BQU07TUFDdEI2VyxLQUFLLEdBQUdqWSxPQUFPLENBQUNpWSxLQUFLO01BQ3JCeUosS0FBSyxHQUFHLEVBQUU7TUFDVnZnQixDQUFDLEdBQUcsQ0FBQztJQUVULE9BQU9BLENBQUMsR0FBRzhmLENBQUMsRUFBRTlmLENBQUMsRUFBRSxFQUFFO01BQ2pCdWdCLEtBQUssQ0FBQzVkLElBQUksQ0FBQ3dkLFdBQVcsQ0FBQ25nQixDQUFDLENBQUMsRUFBRThXLEtBQUssQ0FBQ3FKLFdBQVcsQ0FBQ25nQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25EO0lBRUF1Z0IsS0FBSyxDQUFDemEsQ0FBQyxHQUFHakgsT0FBTztJQUNqQixPQUFPMGhCLEtBQUs7RUFDZCxDQUFDO0VBQ0dvQixVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ3BCLEtBQUssRUFBRXFCLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQ2pFLElBQUlyTSxNQUFNLEdBQUcsRUFBRTtNQUNYc0ssQ0FBQyxHQUFHUyxLQUFLLENBQUN0Z0IsTUFBTTtNQUNoQkQsQ0FBQyxHQUFHNmhCLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUN2QjtNQUNKOWMsQ0FBQztJQUVELE9BQU8vRSxDQUFDLEdBQUc4ZixDQUFDLEVBQUU5ZixDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3BCK0UsQ0FBQyxHQUFHd2IsS0FBSyxDQUFDdmdCLENBQUMsQ0FBQztNQUNad1YsTUFBTSxDQUFDN1MsSUFBSSxDQUFDb0MsQ0FBQyxFQUFFQSxDQUFDLElBQUk2YyxRQUFRLEdBQUdBLFFBQVEsQ0FBQzdjLENBQUMsQ0FBQyxHQUFHd2IsS0FBSyxDQUFDdmdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RDtJQUVBd1YsTUFBTSxDQUFDMVAsQ0FBQyxHQUFHeWEsS0FBSyxDQUFDemEsQ0FBQztJQUNsQixPQUFPMFAsTUFBTTtFQUNmLENBQUM7RUFDR3JCLFdBQVcsR0FBRztJQUNoQitGLElBQUksRUFBRSxDQUFDO0lBQ1BELEdBQUcsRUFBRTtFQUNQLENBQUM7RUFDRztFQUNKO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E2SCxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQzFmLEtBQUssRUFBRTFDLE9BQU8sRUFBRXFpQixZQUFZLEVBQUVwSixTQUFTLEVBQUVzSCxNQUFNLEVBQUVoRSxNQUFNLEVBQUUrRixjQUFjLEVBQUVqYyxJQUFJLEVBQUVrYyxjQUFjLEVBQUVDLFdBQVcsRUFBRWpILGdCQUFnQixFQUFFa0gsV0FBVyxFQUFFcEgsa0JBQWtCLEVBQUVxSCxhQUFhLEVBQUU7SUFDck5yTixXQUFXLENBQUMzUyxLQUFLLENBQUMsS0FBS0EsS0FBSyxHQUFHQSxLQUFLLENBQUMyRCxJQUFJLENBQUMsQ0FBQztJQUUzQyxJQUFJd04sU0FBUyxDQUFDblIsS0FBSyxDQUFDLElBQUlBLEtBQUssQ0FBQ29SLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO01BQ3BEcFIsS0FBSyxHQUFHK2YsV0FBVyxJQUFJL2YsS0FBSyxDQUFDc1ksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBR0osV0FBVyxDQUFDLEdBQUcsR0FBR2xZLEtBQUssQ0FBQ29SLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXVPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RztJQUVBLElBQUloQyxJQUFJLEdBQUdoRixrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUNnRixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7TUFDekRzQyxFQUFFO01BQ0ZyZCxFQUFFO01BQ0ZuRyxPQUFPO0lBQ1hrYyxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUN1SCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hEcFQsS0FBSyxDQUFDOU0sS0FBSyxDQUFDLEtBQUtBLEtBQUssR0FBRyxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUVsQyxJQUFJLENBQUM0UyxTQUFTLENBQUM1UyxLQUFLLENBQUMsRUFBRTtNQUNyQjJTLFdBQVcsQ0FBQ3JWLE9BQU8sQ0FBQyxLQUFLQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3FHLElBQUksQ0FBQyxDQUFDO01BQ2pELElBQUl3YyxPQUFPLEdBQUcsQ0FBQ25nQixLQUFLLElBQUksR0FBRyxFQUFFaUgsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNuQ3VPLE1BQU07UUFDTjRLLFdBQVc7UUFDWEMsWUFBWTtRQUNackcsT0FBTztNQUNYdmQsT0FBTyxHQUFHZ0gsd0RBQVUsQ0FBQ25HLE9BQU8sRUFBRXFHLElBQUksQ0FBQyxJQUFJNUUsS0FBSztNQUM1Q3lXLE1BQU0sR0FBR3JELFVBQVUsQ0FBQzFWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUVsQyxJQUFJLENBQUMsQ0FBQytZLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNzQyxJQUFJLElBQUksQ0FBQ3RDLE1BQU0sQ0FBQ3FDLEdBQUcsS0FBS3RELGlCQUFpQixDQUFDOVgsT0FBTyxDQUFDLENBQUN1ZCxPQUFPLEtBQUssTUFBTSxFQUFFO1FBQzdGO1FBQ0FBLE9BQU8sR0FBR3ZkLE9BQU8sQ0FBQ2lZLEtBQUssQ0FBQ3NGLE9BQU87UUFDL0J2ZCxPQUFPLENBQUNpWSxLQUFLLENBQUNzRixPQUFPLEdBQUcsT0FBTztRQUMvQnhFLE1BQU0sR0FBR3JELFVBQVUsQ0FBQzFWLE9BQU8sQ0FBQztRQUM1QnVkLE9BQU8sR0FBR3ZkLE9BQU8sQ0FBQ2lZLEtBQUssQ0FBQ3NGLE9BQU8sR0FBR0EsT0FBTyxHQUFHdmQsT0FBTyxDQUFDaVksS0FBSyxDQUFDeUssY0FBYyxDQUFDLFNBQVMsQ0FBQztNQUNyRjtNQUVBaUIsV0FBVyxHQUFHbEksV0FBVyxDQUFDaUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFM0ssTUFBTSxDQUFDZSxTQUFTLENBQUN4VCxDQUFDLENBQUMsQ0FBQztNQUMxRHNkLFlBQVksR0FBR25JLFdBQVcsQ0FBQ2lJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUVSLFlBQVksQ0FBQztNQUMzRDNmLEtBQUssR0FBR3dWLE1BQU0sQ0FBQ2UsU0FBUyxDQUFDNVQsQ0FBQyxDQUFDLEdBQUdrZCxjQUFjLENBQUN0SixTQUFTLENBQUM1VCxDQUFDLENBQUMsR0FBR21kLFdBQVcsR0FBR00sV0FBVyxHQUFHdkMsTUFBTSxHQUFHd0MsWUFBWTtNQUM3R1QsY0FBYyxJQUFJaEcsZUFBZSxDQUFDZ0csY0FBYyxFQUFFUyxZQUFZLEVBQUU5SixTQUFTLEVBQUVvSixZQUFZLEdBQUdVLFlBQVksR0FBRyxFQUFFLElBQUlULGNBQWMsQ0FBQ3hHLFFBQVEsSUFBSWlILFlBQVksR0FBRyxFQUFFLENBQUM7TUFDNUpWLFlBQVksSUFBSUEsWUFBWSxHQUFHVSxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTDFILGtCQUFrQixLQUFLM1ksS0FBSyxHQUFHM0QsSUFBSSxDQUFDeUgsS0FBSyxDQUFDd2MsUUFBUSxDQUFDM0gsa0JBQWtCLENBQUN0YixhQUFhLENBQUN5YyxLQUFLLEVBQUVuQixrQkFBa0IsQ0FBQ3RiLGFBQWEsQ0FBQzRmLEdBQUcsRUFBRSxDQUFDLEVBQUU4QyxXQUFXLEVBQUUvZixLQUFLLENBQUMsQ0FBQztNQUN4SjRmLGNBQWMsSUFBSWhHLGVBQWUsQ0FBQ2dHLGNBQWMsRUFBRUQsWUFBWSxFQUFFcEosU0FBUyxFQUFFLElBQUksQ0FBQztJQUNsRjtJQUVBLElBQUl5SixhQUFhLEVBQUU7TUFDakJyYyxJQUFJLENBQUNxYyxhQUFhLENBQUMsR0FBR2hnQixLQUFLLElBQUksQ0FBQyxLQUFLO01BQ3JDQSxLQUFLLEdBQUcsQ0FBQyxLQUFLQSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzFCO0lBRUEsSUFBSTZaLE1BQU0sRUFBRTtNQUNWLElBQUlwRixRQUFRLEdBQUd6VSxLQUFLLEdBQUcyZixZQUFZO1FBQy9CM0csT0FBTyxHQUFHYSxNQUFNLENBQUNULFFBQVE7TUFDN0I2RyxFQUFFLEdBQUcsUUFBUSxHQUFHMUosU0FBUyxDQUFDdlQsRUFBRTtNQUU1QjRXLGVBQWUsQ0FBQ0MsTUFBTSxFQUFFcEYsUUFBUSxFQUFFOEIsU0FBUyxFQUFFeUMsT0FBTyxJQUFJdkUsUUFBUSxHQUFHLEVBQUUsSUFBSSxDQUFDdUUsT0FBTyxJQUFJLENBQUNILGdCQUFnQixHQUFHelcsSUFBSSxDQUFDOEMsR0FBRyxDQUFDbkcsS0FBSyxDQUFDa2hCLEVBQUUsQ0FBQyxFQUFFbmhCLE1BQU0sQ0FBQ21oQixFQUFFLENBQUMsQ0FBQyxHQUFHcEcsTUFBTSxDQUFDNEUsVUFBVSxDQUFDd0IsRUFBRSxDQUFDLEtBQUt4TCxRQUFRLEdBQUcsQ0FBQyxDQUFDO01BRWxMLElBQUlvRSxnQkFBZ0IsRUFBRTtRQUNwQmdILGNBQWMsR0FBRzFOLFVBQVUsQ0FBQ3lOLGNBQWMsQ0FBQztRQUMzQy9HLGdCQUFnQixLQUFLZ0IsTUFBTSxDQUFDbkYsS0FBSyxDQUFDNkIsU0FBUyxDQUFDaFQsRUFBRSxDQUFDWixDQUFDLENBQUMsR0FBR2tkLGNBQWMsQ0FBQ3RKLFNBQVMsQ0FBQ2hULEVBQUUsQ0FBQ1osQ0FBQyxDQUFDLEdBQUc0VCxTQUFTLENBQUNoVCxFQUFFLENBQUNnZCxDQUFDLEdBQUcxRyxNQUFNLENBQUNGLE9BQU8sR0FBR3JGLEdBQUcsQ0FBQztNQUM3SDtJQUNGO0lBRUEsSUFBSXFFLGtCQUFrQixJQUFJbGMsT0FBTyxFQUFFO01BQ2pDd2pCLEVBQUUsR0FBRzlOLFVBQVUsQ0FBQzFWLE9BQU8sQ0FBQztNQUN4QmtjLGtCQUFrQixDQUFDdUgsSUFBSSxDQUFDSCxXQUFXLENBQUM7TUFDcENuZCxFQUFFLEdBQUd1UCxVQUFVLENBQUMxVixPQUFPLENBQUM7TUFDeEJrYyxrQkFBa0IsQ0FBQzZILGFBQWEsR0FBR1AsRUFBRSxDQUFDMUosU0FBUyxDQUFDNVQsQ0FBQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQzJULFNBQVMsQ0FBQzVULENBQUMsQ0FBQztNQUNwRTNDLEtBQUssR0FBR0EsS0FBSyxHQUFHMlksa0JBQWtCLENBQUM2SCxhQUFhLEdBQUdULFdBQVc7SUFDaEU7SUFFQXBILGtCQUFrQixJQUFJQSxrQkFBa0IsQ0FBQ3VILElBQUksQ0FBQ3ZDLElBQUksQ0FBQztJQUNuRCxPQUFPaEYsa0JBQWtCLEdBQUczWSxLQUFLLEdBQUdvQyxJQUFJLENBQUNDLEtBQUssQ0FBQ3JDLEtBQUssQ0FBQztFQUN2RCxDQUFDO0VBQ0d5Z0IsVUFBVSxHQUFHLG9DQUFvQztFQUNqREMsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNqa0IsT0FBTyxFQUFFc2MsTUFBTSxFQUFFbEIsR0FBRyxFQUFFQyxJQUFJLEVBQUU7SUFDN0QsSUFBSXJiLE9BQU8sQ0FBQ2dpQixVQUFVLEtBQUsxRixNQUFNLEVBQUU7TUFDakMsSUFBSXJFLEtBQUssR0FBR2pZLE9BQU8sQ0FBQ2lZLEtBQUs7UUFDckIvUixDQUFDO1FBQ0RnYyxFQUFFO01BRU4sSUFBSTVGLE1BQU0sS0FBS2hhLEtBQUssRUFBRTtRQUNwQnRDLE9BQU8sQ0FBQ2trQixPQUFPLEdBQUdqTSxLQUFLLENBQUM0RSxPQUFPLENBQUMsQ0FBQzs7UUFFakNxRixFQUFFLEdBQUdwSyxpQkFBaUIsQ0FBQzlYLE9BQU8sQ0FBQztRQUUvQixLQUFLa0csQ0FBQyxJQUFJZ2MsRUFBRSxFQUFFO1VBQ1o7VUFDQSxJQUFJLENBQUMsQ0FBQ2hjLENBQUMsSUFBSSxDQUFDOGQsVUFBVSxDQUFDRyxJQUFJLENBQUNqZSxDQUFDLENBQUMsSUFBSWdjLEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQyxJQUFJLE9BQU8rUixLQUFLLENBQUMvUixDQUFDLENBQUMsS0FBSyxRQUFRLElBQUlBLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDcEYrUixLQUFLLENBQUMvUixDQUFDLENBQUMsR0FBR2djLEVBQUUsQ0FBQ2hjLENBQUMsQ0FBQztVQUNsQjtRQUNGO1FBRUErUixLQUFLLENBQUNtRCxHQUFHLEdBQUdBLEdBQUc7UUFDZm5ELEtBQUssQ0FBQ29ELElBQUksR0FBR0EsSUFBSTtNQUNuQixDQUFDLE1BQU07UUFDTHBELEtBQUssQ0FBQzRFLE9BQU8sR0FBRzdjLE9BQU8sQ0FBQ2trQixPQUFPO01BQ2pDO01BRUF0a0IsSUFBSSxDQUFDNkQsSUFBSSxDQUFDZ2YsUUFBUSxDQUFDemlCLE9BQU8sQ0FBQyxDQUFDaWYsT0FBTyxHQUFHLENBQUM7TUFDdkMzQyxNQUFNLENBQUNXLFdBQVcsQ0FBQ2pkLE9BQU8sQ0FBQztJQUM3QjtFQUNGLENBQUM7RUFDR29rQixvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUNDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDaEcsSUFBSUMsS0FBSyxHQUFHRixZQUFZO01BQ3BCRyxLQUFLLEdBQUdELEtBQUs7SUFDakIsT0FBTyxVQUFVamhCLEtBQUssRUFBRTtNQUN0QixJQUFJbWhCLE9BQU8sR0FBRy9lLElBQUksQ0FBQ0MsS0FBSyxDQUFDeWUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRTFDLElBQUlLLE9BQU8sS0FBS0YsS0FBSyxJQUFJRSxPQUFPLEtBQUtELEtBQUssSUFBSTllLElBQUksQ0FBQzRELEdBQUcsQ0FBQ21iLE9BQU8sR0FBR0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJN2UsSUFBSSxDQUFDNEQsR0FBRyxDQUFDbWIsT0FBTyxHQUFHRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDNUc7UUFDQWxoQixLQUFLLEdBQUdtaEIsT0FBTztRQUNmSCxXQUFXLElBQUlBLFdBQVcsQ0FBQyxDQUFDO01BQzlCO01BRUFFLEtBQUssR0FBR0QsS0FBSztNQUNiQSxLQUFLLEdBQUdqaEIsS0FBSztNQUNiLE9BQU9BLEtBQUs7SUFDZCxDQUFDO0VBQ0gsQ0FBQztFQUNHb2hCLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDdkgsTUFBTSxFQUFFdEQsU0FBUyxFQUFFdlcsS0FBSyxFQUFFO0lBQ2pFLElBQUltSCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2JBLElBQUksQ0FBQ29QLFNBQVMsQ0FBQzVULENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRzNDLEtBQUs7SUFDaEMzRCxJQUFJLENBQUMrZCxHQUFHLENBQUNQLE1BQU0sRUFBRTFTLElBQUksQ0FBQztFQUN4QixDQUFDO0VBQ0c7RUFDSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQWthLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ2hQLFFBQVEsRUFBRWtFLFNBQVMsRUFBRTtJQUNoRSxJQUFJK0ssU0FBUyxHQUFHbmQsNERBQWMsQ0FBQ2tPLFFBQVEsRUFBRWtFLFNBQVMsQ0FBQztNQUMvQ3FHLElBQUksR0FBRyxTQUFTLEdBQUdyRyxTQUFTLENBQUMzVCxFQUFFO01BQy9CO01BQ0oyZSxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ25lLFFBQVEsRUFBRStELElBQUksRUFBRTRaLFlBQVksRUFBRVMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7UUFDM0UsSUFBSTFNLEtBQUssR0FBR3dNLFFBQVEsQ0FBQ3hNLEtBQUs7VUFDdEIyTSxVQUFVLEdBQUd2YSxJQUFJLENBQUN1YSxVQUFVO1VBQzVCQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCWixZQUFZLEdBQUdBLFlBQVksSUFBSU8sU0FBUyxDQUFDLENBQUM7UUFFMUMsSUFBSU0sb0JBQW9CLEdBQUdmLG9CQUFvQixDQUFDUyxTQUFTLEVBQUVQLFlBQVksRUFBRSxZQUFZO1VBQ25GaE0sS0FBSyxDQUFDakcsSUFBSSxDQUFDLENBQUM7VUFDWnlTLFFBQVEsQ0FBQ3hNLEtBQUssR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUVGME0sT0FBTyxHQUFHRCxPQUFPLElBQUlDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQzs7UUFFbkNELE9BQU8sR0FBR0EsT0FBTyxJQUFJcGUsUUFBUSxHQUFHMmQsWUFBWTtRQUM1Q2hNLEtBQUssSUFBSUEsS0FBSyxDQUFDakcsSUFBSSxDQUFDLENBQUM7UUFDckIzSCxJQUFJLENBQUN5VixJQUFJLENBQUMsR0FBR3haLFFBQVE7UUFDckIrRCxJQUFJLENBQUN3YSxTQUFTLEdBQUdBLFNBQVM7UUFFMUJBLFNBQVMsQ0FBQy9FLElBQUksQ0FBQyxHQUFHLFlBQVk7VUFDNUIsT0FBT2dGLG9CQUFvQixDQUFDYixZQUFZLEdBQUdTLE9BQU8sR0FBR3pNLEtBQUssQ0FBQzhNLEtBQUssR0FBR0osT0FBTyxHQUFHMU0sS0FBSyxDQUFDOE0sS0FBSyxHQUFHOU0sS0FBSyxDQUFDOE0sS0FBSyxDQUFDO1FBQ3pHLENBQUM7UUFFRDFhLElBQUksQ0FBQzJhLFFBQVEsR0FBRyxZQUFZO1VBQzFCcmlCLG9EQUFVLENBQUNrQyxLQUFLLEVBQUU7VUFFbEI4WSxVQUFVLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFRHRULElBQUksQ0FBQ3VhLFVBQVUsR0FBRyxZQUFZO1VBQzVCSCxRQUFRLENBQUN4TSxLQUFLLEdBQUcsQ0FBQztVQUNsQjJNLFVBQVUsSUFBSUEsVUFBVSxDQUFDSyxJQUFJLENBQUNoTixLQUFLLENBQUM7UUFDdEMsQ0FBQztRQUVEQSxLQUFLLEdBQUd3TSxRQUFRLENBQUN4TSxLQUFLLEdBQUcxWSxJQUFJLENBQUMyWSxFQUFFLENBQUMzQyxRQUFRLEVBQUVsTCxJQUFJLENBQUM7UUFDaEQsT0FBTzROLEtBQUs7TUFDZCxDQUFDO0lBRUQxQyxRQUFRLENBQUN1SyxJQUFJLENBQUMsR0FBRzBFLFNBQVM7SUFFMUJBLFNBQVMsQ0FBQ3BLLFlBQVksR0FBRyxZQUFZO01BQ25DLE9BQU9xSyxRQUFRLENBQUN4TSxLQUFLLElBQUl3TSxRQUFRLENBQUN4TSxLQUFLLENBQUNqRyxJQUFJLENBQUMsQ0FBQyxLQUFLeVMsUUFBUSxDQUFDeE0sS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRURqVSxZQUFZLENBQUN1UixRQUFRLEVBQUUsT0FBTyxFQUFFaVAsU0FBUyxDQUFDcEssWUFBWSxDQUFDLENBQUMsQ0FBQzs7SUFHekQ1YSxhQUFhLENBQUNvSyxPQUFPLElBQUk1RixZQUFZLENBQUN1UixRQUFRLEVBQUUsV0FBVyxFQUFFaVAsU0FBUyxDQUFDcEssWUFBWSxDQUFDO0lBQ3BGLE9BQU9xSyxRQUFRO0VBQ2pCLENBQUM7QUFFTSxJQUFJamxCLGFBQWEsR0FBRyxhQUFhLFlBQVk7RUFDbEQsU0FBU0EsYUFBYUEsQ0FBQzZLLElBQUksRUFBRTRMLFNBQVMsRUFBRTtJQUN0Q3JVLFlBQVksSUFBSXBDLGFBQWEsQ0FBQzhTLFFBQVEsQ0FBQy9TLElBQUksQ0FBQyxJQUFJUyxPQUFPLENBQUNvSCxJQUFJLENBQUMsMkNBQTJDLENBQUM7SUFFekc3RSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBRWQsSUFBSSxDQUFDK0gsSUFBSSxDQUFDRCxJQUFJLEVBQUU0TCxTQUFTLENBQUM7RUFDNUI7RUFFQSxJQUFJMUwsTUFBTSxHQUFHL0ssYUFBYSxDQUFDbUMsU0FBUztFQUVwQzRJLE1BQU0sQ0FBQ0QsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUNELElBQUksRUFBRTRMLFNBQVMsRUFBRTtJQUMzQyxJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJLENBQUM2RyxLQUFLLEdBQUcsQ0FBQztJQUM5QixJQUFJLENBQUMzUyxJQUFJLElBQUksSUFBSSxDQUFDMkgsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUVwQyxJQUFJLENBQUNtQyxRQUFRLEVBQUU7TUFDYixJQUFJLENBQUM5TCxNQUFNLEdBQUcsSUFBSSxDQUFDc1gsT0FBTyxHQUFHLElBQUksQ0FBQzNOLElBQUksR0FBRzJDLFlBQVk7TUFDckQ7SUFDRjtJQUVBdEssSUFBSSxHQUFHd04sWUFBWSxDQUFDeEQsU0FBUyxDQUFDaEssSUFBSSxDQUFDLElBQUl5TCxTQUFTLENBQUN6TCxJQUFJLENBQUMsSUFBSUEsSUFBSSxDQUFDNmEsUUFBUSxHQUFHO01BQ3hFMWtCLE9BQU8sRUFBRTZKO0lBQ1gsQ0FBQyxHQUFHQSxJQUFJLEVBQUVzUSxTQUFTLENBQUM7SUFFcEIsSUFBSXdLLEtBQUssR0FBRzlhLElBQUk7TUFDWjJhLFFBQVEsR0FBR0csS0FBSyxDQUFDSCxRQUFRO01BQ3pCSSxXQUFXLEdBQUdELEtBQUssQ0FBQ0MsV0FBVztNQUMvQnBZLEVBQUUsR0FBR21ZLEtBQUssQ0FBQ25ZLEVBQUU7TUFDYnFZLFFBQVEsR0FBR0YsS0FBSyxDQUFDRSxRQUFRO01BQ3pCOUUsU0FBUyxHQUFHNEUsS0FBSyxDQUFDNUUsU0FBUztNQUMzQjlmLEtBQUssR0FBRzBrQixLQUFLLENBQUMxa0IsS0FBSztNQUNuQkQsT0FBTyxHQUFHMmtCLEtBQUssQ0FBQzNrQixPQUFPO01BQ3ZCcWYsR0FBRyxHQUFHc0YsS0FBSyxDQUFDdEYsR0FBRztNQUNmeUYsVUFBVSxHQUFHSCxLQUFLLENBQUNHLFVBQVU7TUFDN0JDLG1CQUFtQixHQUFHSixLQUFLLENBQUNJLG1CQUFtQjtNQUMvQzFLLGFBQWEsR0FBR3NLLEtBQUssQ0FBQ3RLLGFBQWE7TUFDbkMySyxlQUFlLEdBQUdMLEtBQUssQ0FBQ0ssZUFBZTtNQUN2Q0MsY0FBYyxHQUFHTixLQUFLLENBQUNNLGNBQWM7TUFDckNDLElBQUksR0FBR1AsS0FBSyxDQUFDTyxJQUFJO01BQ2pCeE0sSUFBSSxHQUFHaU0sS0FBSyxDQUFDak0sSUFBSTtNQUNqQnlNLFdBQVcsR0FBR1IsS0FBSyxDQUFDUSxXQUFXO01BQy9CQyxTQUFTLEdBQUdULEtBQUssQ0FBQ1MsU0FBUztNQUMzQi9KLGtCQUFrQixHQUFHc0osS0FBSyxDQUFDdEosa0JBQWtCO01BQzdDZ0ssYUFBYSxHQUFHVixLQUFLLENBQUNVLGFBQWE7TUFDbkNDLGVBQWUsR0FBR1gsS0FBSyxDQUFDVyxlQUFlO01BQ3ZDck0sU0FBUyxHQUFHcFAsSUFBSSxDQUFDMFYsVUFBVSxJQUFJMVYsSUFBSSxDQUFDd1Isa0JBQWtCLElBQUl4UixJQUFJLENBQUMwVixVQUFVLEtBQUssS0FBSyxHQUFHcGEscURBQVcsR0FBR1ksbURBQVM7TUFDN0d3ZixRQUFRLEdBQUcsQ0FBQ3RsQixLQUFLLElBQUlBLEtBQUssS0FBSyxDQUFDO01BQ2hDOFUsUUFBUSxHQUFHNU8sd0RBQVUsQ0FBQzBELElBQUksQ0FBQ2tMLFFBQVEsSUFBSXpULElBQUksQ0FBQztNQUM1Q2trQixhQUFhLEdBQUd6bUIsSUFBSSxDQUFDNkQsSUFBSSxDQUFDZ2YsUUFBUSxDQUFDN00sUUFBUSxDQUFDO01BQzVDekgsVUFBVSxHQUFHaEssV0FBVyxDQUFDeVIsUUFBUSxDQUFDO01BQ2xDd0csZ0JBQWdCLEdBQUcsQ0FBQyxTQUFTLElBQUkxUixJQUFJLEdBQUdBLElBQUksQ0FBQzRiLE9BQU8sR0FBR3RpQiwyREFBYSxDQUFDNFIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJekgsVUFBVSxJQUFJLE9BQU8sTUFBTSxPQUFPO01BQy9Ib1ksU0FBUyxHQUFHLENBQUM3YixJQUFJLENBQUM4YixPQUFPLEVBQUU5YixJQUFJLENBQUMrYixPQUFPLEVBQUUvYixJQUFJLENBQUNnYyxXQUFXLEVBQUVoYyxJQUFJLENBQUNpYyxXQUFXLENBQUM7TUFDNUUxTCxhQUFhLEdBQUdtTCxRQUFRLElBQUkxYixJQUFJLENBQUN1USxhQUFhLENBQUN6USxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3pEekosT0FBTyxHQUFHLFNBQVMsSUFBSTJKLElBQUksR0FBR0EsSUFBSSxDQUFDM0osT0FBTyxHQUFHaWEsU0FBUyxDQUFDamEsT0FBTztNQUM5RHNpQixXQUFXLEdBQUdsVixVQUFVLEdBQUcsQ0FBQyxHQUFHaEIsVUFBVSxDQUFDMkssaUJBQWlCLENBQUNsQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUdrRSxTQUFTLENBQUMzVCxFQUFFLEdBQUd3UixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDN0d6USxJQUFJLEdBQUcsSUFBSTtNQUNYMGYsYUFBYSxHQUFHbGMsSUFBSSxDQUFDa2MsYUFBYSxJQUFJLFlBQVk7UUFDcEQsT0FBT2xjLElBQUksQ0FBQ2tjLGFBQWEsQ0FBQzFmLElBQUksQ0FBQztNQUNqQyxDQUFDO01BQ0cyZixlQUFlLEdBQUdsUixZQUFZLENBQUNDLFFBQVEsRUFBRXpILFVBQVUsRUFBRTJMLFNBQVMsQ0FBQztNQUMvRGdOLGtCQUFrQixHQUFHalIsZUFBZSxDQUFDRCxRQUFRLEVBQUV6SCxVQUFVLENBQUM7TUFDMUQ0WSxRQUFRLEdBQUcsQ0FBQztNQUNaQyxXQUFXLEdBQUcsQ0FBQztNQUNmQyxZQUFZLEdBQUcsQ0FBQztNQUNoQnpNLFVBQVUsR0FBRzlTLDREQUFjLENBQUNrTyxRQUFRLEVBQUVrRSxTQUFTLENBQUM7TUFDaERvTixPQUFPO01BQ1BDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxPQUFPO01BQ1BDLE9BQU87TUFDUGpLLEtBQUs7TUFDTG1ELEdBQUc7TUFDSCtHLFdBQVc7TUFDWEMsU0FBUztNQUNUQyxrQkFBa0I7TUFDbEJDLGdCQUFnQjtNQUNoQkMsVUFBVTtNQUNWQyxrQkFBa0I7TUFDbEJDLE1BQU07TUFDTkMsZ0JBQWdCO01BQ2hCQyxjQUFjO01BQ2RDLFFBQVE7TUFDUnZHLE1BQU07TUFDTjFiLE1BQU07TUFDTmtpQixTQUFTO01BQ1RDLFNBQVM7TUFDVEMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFlBQVk7TUFDWnZHLFdBQVc7TUFDWHdHLGlCQUFpQjtNQUNqQkMsUUFBUTtNQUNSQyxlQUFlO01BQ2Z0RyxFQUFFO01BQ0Z1RyxLQUFLO01BQ0xDLEtBQUs7TUFDTEMsVUFBVTtNQUNWQyxXQUFXO01BQ1hDLFlBQVk7TUFDWkMsZUFBZTtNQUNmQyxVQUFVO01BQ1ZDLGdCQUFnQjtNQUNoQkMsY0FBYztNQUNkQyxrQkFBa0IsQ0FBQyxDQUFDOztJQUd4QmhpQixJQUFJLENBQUNpaUIsV0FBVyxHQUFHamlCLElBQUksQ0FBQ3VaLFNBQVMsR0FBRyxLQUFLO0lBQ3pDdlosSUFBSSxDQUFDcVosSUFBSSxHQUFHekcsU0FBUztJQUNyQm9CLGFBQWEsSUFBSSxFQUFFO0lBQ25CaFUsSUFBSSxDQUFDME8sUUFBUSxHQUFHQSxRQUFRO0lBQ3hCMU8sSUFBSSxDQUFDa2EsTUFBTSxHQUFHbEYsa0JBQWtCLEdBQUdBLGtCQUFrQixDQUFDZ0YsSUFBSSxDQUFDa0ksSUFBSSxDQUFDbE4sa0JBQWtCLENBQUMsR0FBRzFCLFVBQVU7SUFDaEc2TSxPQUFPLEdBQUc3TSxVQUFVLENBQUMsQ0FBQztJQUN0QnRULElBQUksQ0FBQ3dELElBQUksR0FBR0EsSUFBSTtJQUNoQjRMLFNBQVMsR0FBR0EsU0FBUyxJQUFJNUwsSUFBSSxDQUFDNEwsU0FBUztJQUV2QyxJQUFJLGlCQUFpQixJQUFJNUwsSUFBSSxFQUFFO01BQzdCaUosS0FBSyxHQUFHLENBQUM7TUFDVGpKLElBQUksQ0FBQzJlLGVBQWUsS0FBSyxDQUFDLElBQUksS0FBS3RJLFFBQVEsR0FBRzdaLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQ7O0lBRUFtZixhQUFhLENBQUNpRCxXQUFXLEdBQUdqRCxhQUFhLENBQUNpRCxXQUFXLElBQUk7TUFDdkRsTyxHQUFHLEVBQUV3SixnQkFBZ0IsQ0FBQ2hQLFFBQVEsRUFBRWhQLG1EQUFTLENBQUM7TUFDMUN5VSxJQUFJLEVBQUV1SixnQkFBZ0IsQ0FBQ2hQLFFBQVEsRUFBRTVQLHFEQUFXO0lBQzlDLENBQUM7SUFDRGtCLElBQUksQ0FBQ2dnQixPQUFPLEdBQUdBLE9BQU8sR0FBR2IsYUFBYSxDQUFDaUQsV0FBVyxDQUFDeFAsU0FBUyxDQUFDNVQsQ0FBQyxDQUFDO0lBRS9EZ0IsSUFBSSxDQUFDcWlCLGFBQWEsR0FBRyxVQUFVaG1CLEtBQUssRUFBRTtNQUNwQ3FsQixXQUFXLEdBQUd6UyxTQUFTLENBQUM1UyxLQUFLLENBQUMsSUFBSUEsS0FBSztNQUV2QyxJQUFJLENBQUNxbEIsV0FBVyxFQUFFO1FBQ2hCRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ25TLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ25FLElBQUksQ0FBQyxDQUFDO1FBQzNDc1csVUFBVSxHQUFHLENBQUM7TUFDaEIsQ0FBQyxNQUFNO1FBQ0xBLFVBQVUsR0FBR0EsVUFBVSxDQUFDam9CLFFBQVEsQ0FBQzZDLEtBQUssQ0FBQyxHQUFHb2xCLFVBQVUsR0FBRy9vQixJQUFJLENBQUMyWSxFQUFFLENBQUNqQyxTQUFTLEVBQUU7VUFDeEUzVixJQUFJLEVBQUUsTUFBTTtVQUNaNm9CLGFBQWEsRUFBRSxLQUFLO1VBQ3BCOW9CLFFBQVEsRUFBRWtvQixXQUFXO1VBQ3JCYSxNQUFNLEVBQUUsSUFBSTtVQUNaeEUsVUFBVSxFQUFFLFNBQVNBLFVBQVVBLENBQUEsRUFBRztZQUNoQyxPQUFPWSxlQUFlLElBQUlBLGVBQWUsQ0FBQzNlLElBQUksQ0FBQztVQUNqRDtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQztJQUVELElBQUlvUCxTQUFTLEVBQUU7TUFDYkEsU0FBUyxDQUFDNUwsSUFBSSxDQUFDZ2YsSUFBSSxHQUFHLEtBQUs7TUFDM0JwVCxTQUFTLENBQUNxVCxRQUFRLElBQUksQ0FBQ3ppQixJQUFJLENBQUMwaUIsVUFBVSxJQUFJdFQsU0FBUyxDQUFDNUwsSUFBSSxDQUFDbWYsZUFBZSxLQUFLLEtBQUssSUFBSW5mLElBQUksQ0FBQ21mLGVBQWUsS0FBSyxLQUFLLElBQUl2VCxTQUFTLENBQUM1VixRQUFRLENBQUMsQ0FBQyxJQUFJNFYsU0FBUyxDQUFDcUssTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7TUFFakx6WixJQUFJLENBQUNvUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ3RILEtBQUssQ0FBQyxDQUFDO01BQ2xDc0gsU0FBUyxDQUFDMVYsYUFBYSxHQUFHc0csSUFBSTtNQUM5QkEsSUFBSSxDQUFDcWlCLGFBQWEsQ0FBQ3pvQixLQUFLLENBQUM7TUFDekIybkIsS0FBSyxHQUFHLENBQUM7TUFDVHBiLEVBQUUsS0FBS0EsRUFBRSxHQUFHaUosU0FBUyxDQUFDNUwsSUFBSSxDQUFDMkMsRUFBRSxDQUFDO0lBQ2hDO0lBRUEsSUFBSWtNLElBQUksRUFBRTtNQUNSO01BQ0EsSUFBSSxDQUFDbkQsU0FBUyxDQUFDbUQsSUFBSSxDQUFDLElBQUlBLElBQUksQ0FBQ3pWLElBQUksRUFBRTtRQUNqQ3lWLElBQUksR0FBRztVQUNMdVEsTUFBTSxFQUFFdlE7UUFDVixDQUFDO01BQ0g7TUFFQSxnQkFBZ0IsSUFBSWpYLEtBQUssQ0FBQzJWLEtBQUssSUFBSXJZLElBQUksQ0FBQytkLEdBQUcsQ0FBQ3hQLFVBQVUsR0FBRyxDQUFDN0wsS0FBSyxFQUFFRCxNQUFNLENBQUMsR0FBR3VULFFBQVEsRUFBRTtRQUNuRm1LLGNBQWMsRUFBRTtNQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVKL2Msb0RBQVUsQ0FBQ3NYLE9BQU8sQ0FBQyxVQUFVbEksQ0FBQyxFQUFFO1FBQzlCLE9BQU84RCxXQUFXLENBQUM5RCxDQUFDLENBQUMsSUFBSUEsQ0FBQyxDQUFDblIsTUFBTSxNQUFNa04sVUFBVSxHQUFHL0wsSUFBSSxDQUFDd0YsZ0JBQWdCLElBQUl2RixNQUFNLEdBQUd1VCxRQUFRLENBQUMsS0FBS3hELENBQUMsQ0FBQ3RLLE1BQU0sR0FBRyxLQUFLLENBQUM7TUFDdkgsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFHSnNmLFFBQVEsR0FBR2xSLFdBQVcsQ0FBQ3FELElBQUksQ0FBQ3VRLE1BQU0sQ0FBQyxHQUFHdlEsSUFBSSxDQUFDdVEsTUFBTSxHQUFHdlEsSUFBSSxDQUFDdVEsTUFBTSxLQUFLLFFBQVEsR0FBR3hRLGdCQUFnQixDQUFDaEQsU0FBUyxDQUFDLEdBQUdpRCxJQUFJLENBQUN1USxNQUFNLEtBQUssbUJBQW1CLEdBQUc3UCxvQkFBb0IsQ0FBQzNELFNBQVMsQ0FBQyxHQUFHaUQsSUFBSSxDQUFDd1EsV0FBVyxLQUFLLEtBQUssR0FBRyxVQUFVeG1CLEtBQUssRUFBRTJXLEVBQUUsRUFBRTtRQUNyTyxPQUFPVixnQkFBZ0IsQ0FBQ0QsSUFBSSxDQUFDdVEsTUFBTSxDQUFDLENBQUN2bUIsS0FBSyxFQUFFTCxRQUFRLENBQUMsQ0FBQyxHQUFHOGpCLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHOU0sRUFBRSxDQUFDSixTQUFTLENBQUM7TUFDaEcsQ0FBQyxHQUFHbGEsSUFBSSxDQUFDeUgsS0FBSyxDQUFDa1MsSUFBSSxDQUFDQSxJQUFJLENBQUN1USxNQUFNLENBQUM7TUFDaENqQixZQUFZLEdBQUd0UCxJQUFJLENBQUM3WSxRQUFRLElBQUk7UUFDOUI2SCxHQUFHLEVBQUUsR0FBRztRQUNSRSxHQUFHLEVBQUU7TUFDUCxDQUFDO01BQ0RvZ0IsWUFBWSxHQUFHelMsU0FBUyxDQUFDeVMsWUFBWSxDQUFDLEdBQUczbUIsTUFBTSxDQUFDMm1CLFlBQVksQ0FBQ3RnQixHQUFHLEVBQUVzZ0IsWUFBWSxDQUFDcGdCLEdBQUcsQ0FBQyxHQUFHdkcsTUFBTSxDQUFDMm1CLFlBQVksRUFBRUEsWUFBWSxDQUFDO01BQ3hIQyxlQUFlLEdBQUdscEIsSUFBSSxDQUFDNFEsV0FBVyxDQUFDK0ksSUFBSSxDQUFDeVEsS0FBSyxJQUFJcEIsV0FBVyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsWUFBWTtRQUNuRixJQUFJeEgsTUFBTSxHQUFHNUcsVUFBVSxDQUFDLENBQUM7VUFDckJ5UCxpQkFBaUIsR0FBRy9tQixRQUFRLENBQUMsQ0FBQyxHQUFHOGpCLFdBQVcsR0FBRyxHQUFHO1VBQ2xEMU8sS0FBSyxHQUFHNE8sT0FBTyxDQUFDNU8sS0FBSztRQUV6QixJQUFJLENBQUMyUixpQkFBaUIsSUFBSXRrQixJQUFJLENBQUM0RCxHQUFHLENBQUNyQyxJQUFJLENBQUMyQixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUN5UCxLQUFLLElBQUksQ0FBQ2pGLGNBQWMsSUFBSTBULFFBQVEsS0FBSzNGLE1BQU0sRUFBRTtVQUNoSCxJQUFJNUssUUFBUSxHQUFHLENBQUM0SyxNQUFNLEdBQUcvRCxLQUFLLElBQUl3SyxNQUFNO1lBQ3BDMkIsYUFBYSxHQUFHbFQsU0FBUyxJQUFJLENBQUM4UCxRQUFRLEdBQUc5UCxTQUFTLENBQUNrVCxhQUFhLENBQUMsQ0FBQyxHQUFHaFQsUUFBUTtZQUM3RTBULFFBQVEsR0FBR0QsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUNULGFBQWEsR0FBR2QsS0FBSyxLQUFLeGxCLFFBQVEsQ0FBQyxDQUFDLEdBQUdnUSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztZQUM5RjZSLE9BQU8sR0FBR25sQixJQUFJLENBQUN5SCxLQUFLLENBQUN5QyxLQUFLLENBQUMsQ0FBQzBNLFFBQVEsRUFBRSxDQUFDLEdBQUdBLFFBQVEsRUFBRU0sSUFBSSxDQUFDb1QsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHQSxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFGQyxVQUFVLEdBQUczVCxRQUFRLElBQUkrQyxJQUFJLENBQUM2USxPQUFPLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBR3JGLE9BQU8sQ0FBQztZQUM5RHNGLFFBQVEsR0FBR25vQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWtsQixRQUFRLENBQUMrQyxVQUFVLEVBQUVqakIsSUFBSSxDQUFDLENBQUM7WUFDbkRvakIsU0FBUyxHQUFHM2tCLElBQUksQ0FBQ0MsS0FBSyxDQUFDeVgsS0FBSyxHQUFHZ04sUUFBUSxHQUFHeEMsTUFBTSxDQUFDO1lBQ2pEMEMsS0FBSyxHQUFHaFIsSUFBSTtZQUNaaVIsT0FBTyxHQUFHRCxLQUFLLENBQUNDLE9BQU87WUFDdkJDLFlBQVksR0FBR0YsS0FBSyxDQUFDaEcsV0FBVztZQUNoQ21HLFdBQVcsR0FBR0gsS0FBSyxDQUFDdEYsVUFBVTtVQUVsQyxJQUFJN0QsTUFBTSxJQUFJWixHQUFHLElBQUlZLE1BQU0sSUFBSS9ELEtBQUssSUFBSWlOLFNBQVMsS0FBS2xKLE1BQU0sRUFBRTtZQUM1RCxJQUFJOUksS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ3FSLFFBQVEsSUFBSXJSLEtBQUssQ0FBQzVVLElBQUksSUFBSW9ULElBQUksQ0FBQ3dULFNBQVMsR0FBR2xKLE1BQU0sQ0FBQyxFQUFFO2NBQ3RFO2NBQ0E7WUFDRjtZQUVBLElBQUk3SCxJQUFJLENBQUM2USxPQUFPLEtBQUssS0FBSyxFQUFFO2NBQzFCckYsT0FBTyxHQUFHc0YsUUFBUSxHQUFHN1QsUUFBUTtZQUMvQjtZQUVBMFEsT0FBTyxDQUFDb0QsU0FBUyxFQUFFO2NBQ2pCNXBCLFFBQVEsRUFBRW1vQixZQUFZLENBQUMvUixJQUFJLENBQUNuUixJQUFJLENBQUM4QyxHQUFHLENBQUNxTyxJQUFJLENBQUNxVCxVQUFVLEdBQUdYLGFBQWEsQ0FBQyxFQUFFMVMsSUFBSSxDQUFDdVQsUUFBUSxHQUFHYixhQUFhLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBR1UsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztjQUN2SXZwQixJQUFJLEVBQUU0WSxJQUFJLENBQUM1WSxJQUFJLElBQUksUUFBUTtjQUMzQitDLElBQUksRUFBRW9ULElBQUksQ0FBQ3dULFNBQVMsR0FBR2xKLE1BQU0sQ0FBQztjQUM5QjtjQUNBbUQsV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUEsRUFBRztnQkFDbEMsT0FBT3VFLGVBQWUsQ0FBQzVYLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSXVaLFlBQVksSUFBSUEsWUFBWSxDQUFDdmpCLElBQUksQ0FBQztjQUM1RSxDQUFDO2NBQ0QrZCxVQUFVLEVBQUUsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO2dCQUNoQy9kLElBQUksQ0FBQ3dCLE1BQU0sQ0FBQyxDQUFDO2dCQUNicWUsUUFBUSxHQUFHdk0sVUFBVSxDQUFDLENBQUM7Z0JBQ3ZCaU8sS0FBSyxHQUFHQyxLQUFLLEdBQUdwUyxTQUFTLElBQUksQ0FBQzhQLFFBQVEsR0FBRzlQLFNBQVMsQ0FBQ2tULGFBQWEsQ0FBQyxDQUFDLEdBQUd0aUIsSUFBSSxDQUFDc1AsUUFBUTtnQkFDbEZzUCxjQUFjLElBQUlBLGNBQWMsQ0FBQzVlLElBQUksQ0FBQztnQkFDdEN3akIsV0FBVyxJQUFJQSxXQUFXLENBQUN4akIsSUFBSSxDQUFDO2NBQ2xDO1lBQ0YsQ0FBQyxFQUFFa2EsTUFBTSxFQUFFMkQsT0FBTyxHQUFHOEMsTUFBTSxFQUFFeUMsU0FBUyxHQUFHbEosTUFBTSxHQUFHMkQsT0FBTyxHQUFHOEMsTUFBTSxDQUFDO1lBQ25FMkMsT0FBTyxJQUFJQSxPQUFPLENBQUN0akIsSUFBSSxFQUFFZ2dCLE9BQU8sQ0FBQzVPLEtBQUssQ0FBQztVQUN6QztRQUNGLENBQUMsTUFBTSxJQUFJcFIsSUFBSSxDQUFDeWpCLFFBQVEsSUFBSTVELFFBQVEsS0FBSzNGLE1BQU0sRUFBRTtVQUMvQzBILGVBQWUsQ0FBQzVYLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDL0I7TUFDRixDQUFDLENBQUMsQ0FBQ2xDLEtBQUssQ0FBQyxDQUFDO0lBQ1o7SUFFQTNCLEVBQUUsS0FBS3dRLElBQUksQ0FBQ3hRLEVBQUUsQ0FBQyxHQUFHbkcsSUFBSSxDQUFDO0lBQ3ZCckcsT0FBTyxHQUFHcUcsSUFBSSxDQUFDckcsT0FBTyxHQUFHbUcsd0RBQVUsQ0FBQ25HLE9BQU8sSUFBSXFmLEdBQUcsS0FBSyxJQUFJLElBQUlBLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRXJFZ0osa0JBQWtCLEdBQUdyb0IsT0FBTyxJQUFJQSxPQUFPLENBQUMrZ0IsS0FBSyxJQUFJL2dCLE9BQU8sQ0FBQytnQixLQUFLLENBQUNnSixRQUFRO0lBQ3ZFMUIsa0JBQWtCLEtBQUtBLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ2hpQixJQUFJLENBQUMsQ0FBQztJQUNyRWdaLEdBQUcsR0FBR0EsR0FBRyxLQUFLLElBQUksR0FBR3JmLE9BQU8sR0FBR21HLHdEQUFVLENBQUNrWixHQUFHLENBQUM7SUFDOUN4TCxTQUFTLENBQUMrUSxXQUFXLENBQUMsS0FBS0EsV0FBVyxHQUFHO01BQ3ZDb0YsT0FBTyxFQUFFaHFCLE9BQU87TUFDaEJpcUIsU0FBUyxFQUFFckY7SUFDYixDQUFDLENBQUM7SUFFRixJQUFJdkYsR0FBRyxFQUFFO01BQ1B5RixVQUFVLEtBQUssS0FBSyxJQUFJQSxVQUFVLEtBQUtqTyxPQUFPLEtBQUtpTyxVQUFVLEdBQUcsQ0FBQ0EsVUFBVSxJQUFJekYsR0FBRyxDQUFDOEIsVUFBVSxJQUFJOUIsR0FBRyxDQUFDOEIsVUFBVSxDQUFDL0osS0FBSyxJQUFJSCxpQkFBaUIsQ0FBQ29JLEdBQUcsQ0FBQzhCLFVBQVUsQ0FBQyxDQUFDekUsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUc5RixRQUFRLENBQUMsQ0FBQyxDQUFDOztNQUVuTXZRLElBQUksQ0FBQ2daLEdBQUcsR0FBR0EsR0FBRztNQUNkaUgsUUFBUSxHQUFHdm5CLElBQUksQ0FBQzZELElBQUksQ0FBQ2dmLFFBQVEsQ0FBQ3ZDLEdBQUcsQ0FBQztNQUVsQyxJQUFJLENBQUNpSCxRQUFRLENBQUMxRixNQUFNLEVBQUU7UUFDcEI7UUFDQSxJQUFJd0UsU0FBUyxFQUFFO1VBQ2JBLFNBQVMsR0FBR2pmLHdEQUFVLENBQUNpZixTQUFTLENBQUM7VUFDakNBLFNBQVMsSUFBSSxDQUFDQSxTQUFTLENBQUNWLFFBQVEsS0FBS1UsU0FBUyxHQUFHQSxTQUFTLENBQUN2QixPQUFPLElBQUl1QixTQUFTLENBQUM4RSxhQUFhLENBQUMsQ0FBQyxDQUFDOztVQUVoRzVELFFBQVEsQ0FBQ3RGLGNBQWMsR0FBRyxDQUFDLENBQUNvRSxTQUFTO1VBQ3JDQSxTQUFTLEtBQUtrQixRQUFRLENBQUNyRixXQUFXLEdBQUdlLFNBQVMsQ0FBQ29ELFNBQVMsQ0FBQyxDQUFDO1FBQzVEO1FBRUFrQixRQUFRLENBQUMxRixNQUFNLEdBQUdBLE1BQU0sR0FBR3dFLFNBQVMsSUFBSTdqQixJQUFJLENBQUMrWixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pFc0YsTUFBTSxDQUFDdUosU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ2xDNWQsRUFBRSxJQUFJb1UsTUFBTSxDQUFDdUosU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxHQUFHNWQsRUFBRSxDQUFDO1FBQzlDOFosUUFBUSxDQUFDYSxRQUFRLEdBQUdGLGdCQUFnQixHQUFHakYsU0FBUyxDQUFDM0MsR0FBRyxDQUFDO01BQ3ZELENBQUMsTUFBTTtRQUNMNEgsZ0JBQWdCLEdBQUdYLFFBQVEsQ0FBQ2EsUUFBUTtNQUN0QztNQUVBdGQsSUFBSSxDQUFDd2dCLE9BQU8sS0FBSyxLQUFLLElBQUl0ckIsSUFBSSxDQUFDK2QsR0FBRyxDQUFDdUMsR0FBRyxFQUFFO1FBQ3RDZ0wsT0FBTyxFQUFFO01BQ1gsQ0FBQyxDQUFDO01BQ0Zoa0IsSUFBSSxDQUFDdWEsTUFBTSxHQUFHQSxNQUFNLEdBQUcwRixRQUFRLENBQUMxRixNQUFNO01BQ3RDUyxFQUFFLEdBQUdwSyxpQkFBaUIsQ0FBQ29JLEdBQUcsQ0FBQztNQUMzQm1JLFlBQVksR0FBR25HLEVBQUUsQ0FBQ3lELFVBQVUsR0FBRzdMLFNBQVMsQ0FBQ3pULEdBQUcsQ0FBQztNQUM3QzRoQixTQUFTLEdBQUdyb0IsSUFBSSxDQUFDbUksV0FBVyxDQUFDbVksR0FBRyxDQUFDO01BQ2pDZ0ksU0FBUyxHQUFHdG9CLElBQUksQ0FBQ3VyQixXQUFXLENBQUNqTCxHQUFHLEVBQUVwRyxTQUFTLENBQUN0VCxDQUFDLEVBQUVxUixHQUFHLENBQUMsQ0FBQyxDQUFDOztNQUVyRG9LLFVBQVUsQ0FBQy9CLEdBQUcsRUFBRXVCLE1BQU0sRUFBRVMsRUFBRSxDQUFDO01BRTNCOEYsUUFBUSxHQUFHbkYsU0FBUyxDQUFDM0MsR0FBRyxDQUFDO0lBQzNCO0lBRUEsSUFBSW5mLE9BQU8sRUFBRTtNQUNYNG1CLFVBQVUsR0FBR3ZSLFNBQVMsQ0FBQ3JWLE9BQU8sQ0FBQyxHQUFHbVgsWUFBWSxDQUFDblgsT0FBTyxFQUFFMlosZUFBZSxDQUFDLEdBQUdBLGVBQWU7TUFDMUYrTSxrQkFBa0IsR0FBRzNMLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRXpPLEVBQUUsRUFBRXVJLFFBQVEsRUFBRWtFLFNBQVMsRUFBRTZOLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDNUZELGdCQUFnQixHQUFHNUwsYUFBYSxDQUFDLGNBQWMsRUFBRXpPLEVBQUUsRUFBRXVJLFFBQVEsRUFBRWtFLFNBQVMsRUFBRTZOLFVBQVUsRUFBRSxDQUFDLEVBQUVGLGtCQUFrQixDQUFDO01BQzVHMWhCLE1BQU0sR0FBRzBoQixrQkFBa0IsQ0FBQyxRQUFRLEdBQUczTixTQUFTLENBQUNoVCxFQUFFLENBQUNQLEVBQUUsQ0FBQztNQUV2RCxJQUFJNmtCLE9BQU8sR0FBR3BrQix3REFBVSxDQUFDaEQsMkRBQWEsQ0FBQzRSLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSUEsUUFBUSxDQUFDO01BRXhFMlIsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxHQUFHekwsYUFBYSxDQUFDLE9BQU8sRUFBRXpPLEVBQUUsRUFBRStkLE9BQU8sRUFBRXRSLFNBQVMsRUFBRTZOLFVBQVUsRUFBRTVoQixNQUFNLEVBQUUsQ0FBQyxFQUFFbVcsa0JBQWtCLENBQUM7TUFDMUhzTCxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEdBQUcxTCxhQUFhLENBQUMsS0FBSyxFQUFFek8sRUFBRSxFQUFFK2QsT0FBTyxFQUFFdFIsU0FBUyxFQUFFNk4sVUFBVSxFQUFFNWhCLE1BQU0sRUFBRSxDQUFDLEVBQUVtVyxrQkFBa0IsQ0FBQztNQUNwSEEsa0JBQWtCLEtBQUsrTSxjQUFjLEdBQUdycEIsSUFBSSxDQUFDdXJCLFdBQVcsQ0FBQyxDQUFDNUQsV0FBVyxFQUFFQyxTQUFTLENBQUMsRUFBRTFOLFNBQVMsQ0FBQ3RULENBQUMsRUFBRXFSLEdBQUcsQ0FBQyxDQUFDO01BRXJHLElBQUksQ0FBQ3VFLGdCQUFnQixJQUFJLEVBQUVuWixrREFBUSxDQUFDN0IsTUFBTSxJQUFJNEMsMkRBQWEsQ0FBQzRSLFFBQVEsRUFBRSxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUMvRm1DLGlCQUFpQixDQUFDNUosVUFBVSxHQUFHN0wsS0FBSyxHQUFHc1QsUUFBUSxDQUFDO1FBRWhEaFcsSUFBSSxDQUFDK2QsR0FBRyxDQUFDLENBQUM4SixrQkFBa0IsRUFBRUMsZ0JBQWdCLENBQUMsRUFBRTtVQUMvQ3dELE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQztRQUNGNUMsaUJBQWlCLEdBQUcxb0IsSUFBSSxDQUFDdXJCLFdBQVcsQ0FBQzFELGtCQUFrQixFQUFFM04sU0FBUyxDQUFDdFQsQ0FBQyxFQUFFcVIsR0FBRyxDQUFDO1FBQzFFMlEsZUFBZSxHQUFHNW9CLElBQUksQ0FBQ3VyQixXQUFXLENBQUN6RCxnQkFBZ0IsRUFBRTVOLFNBQVMsQ0FBQ3RULENBQUMsRUFBRXFSLEdBQUcsQ0FBQztNQUN4RTtJQUNGO0lBRUEsSUFBSXFFLGtCQUFrQixFQUFFO01BQ3RCLElBQUltUCxXQUFXLEdBQUduUCxrQkFBa0IsQ0FBQ3hSLElBQUksQ0FBQzJhLFFBQVE7UUFDOUNpRyxTQUFTLEdBQUdwUCxrQkFBa0IsQ0FBQ3hSLElBQUksQ0FBQzZnQixjQUFjO01BQ3REclAsa0JBQWtCLENBQUNzUCxhQUFhLENBQUMsVUFBVSxFQUFFLFlBQVk7UUFDdkR0a0IsSUFBSSxDQUFDd0IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCMmlCLFdBQVcsSUFBSUEsV0FBVyxDQUFDdG5CLEtBQUssQ0FBQ21ZLGtCQUFrQixFQUFFb1AsU0FBUyxJQUFJLEVBQUUsQ0FBQztNQUN2RSxDQUFDLENBQUM7SUFDSjtJQUVBcGtCLElBQUksQ0FBQ3VrQixRQUFRLEdBQUcsWUFBWTtNQUMxQixPQUFPN04sU0FBUyxDQUFDQSxTQUFTLENBQUMxWixPQUFPLENBQUNnRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEQSxJQUFJLENBQUN3a0IsSUFBSSxHQUFHLFlBQVk7TUFDdEIsT0FBTzlOLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDMVosT0FBTyxDQUFDZ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFREEsSUFBSSxDQUFDb0wsTUFBTSxHQUFHLFVBQVVBLE1BQU0sRUFBRXFaLElBQUksRUFBRTtNQUNwQyxJQUFJLENBQUNBLElBQUksRUFBRTtRQUNULE9BQU96a0IsSUFBSSxDQUFDbUwsSUFBSSxDQUFDLElBQUksQ0FBQztNQUN4QixDQUFDLENBQUM7O01BR0YsSUFBSXVaLENBQUMsR0FBR3RaLE1BQU0sS0FBSyxLQUFLLElBQUksQ0FBQ3BMLElBQUksQ0FBQ3dQLE9BQU87UUFDckNtVixjQUFjLEdBQUd6WSxXQUFXO01BRWhDLElBQUl3WSxDQUFDLEtBQUsxa0IsSUFBSSxDQUFDMGlCLFVBQVUsRUFBRTtRQUN6QixJQUFJZ0MsQ0FBQyxFQUFFO1VBQ0w3QyxVQUFVLEdBQUdwakIsSUFBSSxDQUFDOEMsR0FBRyxDQUFDK1IsVUFBVSxDQUFDLENBQUMsRUFBRXRULElBQUksQ0FBQ2thLE1BQU0sQ0FBQy9CLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUUzRDRILFlBQVksR0FBRy9mLElBQUksQ0FBQ3NQLFFBQVE7VUFDNUJ3UyxnQkFBZ0IsR0FBRzFTLFNBQVMsSUFBSUEsU0FBUyxDQUFDRSxRQUFRLENBQUMsQ0FBQztRQUN0RDtRQUVBK1EsV0FBVyxJQUFJLENBQUNBLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsZ0JBQWdCLENBQUMsQ0FBQ3BOLE9BQU8sQ0FBQyxVQUFVd0osQ0FBQyxFQUFFO1VBQ2pHLE9BQU9BLENBQUMsQ0FBQzdMLEtBQUssQ0FBQ3NGLE9BQU8sR0FBR3FPLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTztRQUMvQyxDQUFDLENBQUM7UUFFRixJQUFJQSxDQUFDLEVBQUU7VUFDTHhZLFdBQVcsR0FBR2xNLElBQUk7VUFDbEJBLElBQUksQ0FBQ3dCLE1BQU0sQ0FBQ2tqQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCOztRQUVBLElBQUkxTCxHQUFHLEtBQUssQ0FBQzhGLFdBQVcsSUFBSSxDQUFDOWUsSUFBSSxDQUFDeWpCLFFBQVEsQ0FBQyxFQUFFO1VBQzNDLElBQUlpQixDQUFDLEVBQUU7WUFDTHBLLFdBQVcsQ0FBQ3RCLEdBQUcsRUFBRXVCLE1BQU0sRUFBRXFHLGdCQUFnQixDQUFDO1VBQzVDLENBQUMsTUFBTTtZQUNMN0YsVUFBVSxDQUFDL0IsR0FBRyxFQUFFdUIsTUFBTSxFQUFFM0osaUJBQWlCLENBQUNvSSxHQUFHLENBQUMsRUFBRTRCLFdBQVcsQ0FBQztVQUM5RDtRQUNGO1FBRUE4SixDQUFDLElBQUkxa0IsSUFBSSxDQUFDd0IsTUFBTSxDQUFDa2pCLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRXJCeFksV0FBVyxHQUFHeVksY0FBYyxDQUFDLENBQUM7O1FBRTlCM2tCLElBQUksQ0FBQzBpQixVQUFVLEdBQUdnQyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQztJQUVEMWtCLElBQUksQ0FBQzhZLE9BQU8sR0FBRyxVQUFVOEwsSUFBSSxFQUFFbmpCLEtBQUssRUFBRXFQLFFBQVEsRUFBRStULFNBQVMsRUFBRTtNQUN6RDtNQUNBLElBQUksQ0FBQzNZLFdBQVcsSUFBSSxDQUFDbE0sSUFBSSxDQUFDd1AsT0FBTyxLQUFLLENBQUMvTixLQUFLLEVBQUU7UUFDNUM7TUFDRjtNQUVBLElBQUl1WCxHQUFHLElBQUk0TCxJQUFJLElBQUl2WCxlQUFlLEVBQUU7UUFDbENsUSxZQUFZLENBQUN4RSxhQUFhLEVBQUUsV0FBVyxFQUFFNGUsWUFBWSxDQUFDO1FBRXREO01BQ0Y7TUFFQSxDQUFDVyxjQUFjLElBQUl3SCxhQUFhLElBQUlBLGFBQWEsQ0FBQzFmLElBQUksQ0FBQztNQUN2RGtNLFdBQVcsR0FBR2xNLElBQUk7TUFFbEIsSUFBSWdnQixPQUFPLENBQUM1TyxLQUFLLElBQUksQ0FBQ04sUUFBUSxFQUFFO1FBQzlCO1FBQ0FrUCxPQUFPLENBQUM1TyxLQUFLLENBQUNqRyxJQUFJLENBQUMsQ0FBQztRQUNwQjZVLE9BQU8sQ0FBQzVPLEtBQUssR0FBRyxDQUFDO01BQ25CO01BRUFxUSxVQUFVLElBQUlBLFVBQVUsQ0FBQzNaLEtBQUssQ0FBQyxDQUFDO01BQ2hDNFcsbUJBQW1CLElBQUl0UCxTQUFTLElBQUlBLFNBQVMsQ0FBQ2hFLE1BQU0sQ0FBQztRQUNuREQsSUFBSSxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMyWixVQUFVLENBQUMsQ0FBQztNQUNmOWtCLElBQUksQ0FBQzBpQixVQUFVLElBQUkxaUIsSUFBSSxDQUFDb0wsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDMUNwTCxJQUFJLENBQUMrWSxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7O01BRTVCLElBQUl2RSxJQUFJLEdBQUdtTCxlQUFlLENBQUMsQ0FBQztRQUN4QnpELGNBQWMsR0FBRzBELGtCQUFrQixDQUFDLENBQUM7UUFDckNyZSxHQUFHLEdBQUd5VCxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUN4YixRQUFRLENBQUMsQ0FBQyxHQUFHb1YsVUFBVSxDQUFDRixRQUFRLEVBQUVrRSxTQUFTLENBQUM7UUFDMUZtUyxjQUFjLEdBQUdwRSxNQUFNLElBQUksSUFBSTtRQUMvQjloQixNQUFNLEdBQUcsQ0FBQztRQUNWbW1CLGNBQWMsR0FBR0gsU0FBUyxJQUFJLENBQUM7UUFDL0JJLFNBQVMsR0FBRy9WLFNBQVMsQ0FBQzRCLFFBQVEsQ0FBQyxHQUFHQSxRQUFRLENBQUN3SSxHQUFHLEdBQUc5VixJQUFJLENBQUM4VixHQUFHO1FBQ3pENEwsZ0JBQWdCLEdBQUcxaEIsSUFBSSxDQUFDMmhCLFVBQVUsSUFBSXhyQixPQUFPO1FBQzdDeXJCLFdBQVcsR0FBR2xXLFNBQVMsQ0FBQzRCLFFBQVEsQ0FBQyxHQUFHQSxRQUFRLENBQUNxRixLQUFLLEdBQUczUyxJQUFJLENBQUMyUyxLQUFLLEtBQUszUyxJQUFJLENBQUMyUyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUN4YyxPQUFPLEdBQUcsQ0FBQyxHQUFHcWYsR0FBRyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDOUhxTSxlQUFlLEdBQUdybEIsSUFBSSxDQUFDcWxCLGVBQWUsR0FBRzdoQixJQUFJLENBQUM2aEIsZUFBZSxJQUFJdmxCLHdEQUFVLENBQUMwRCxJQUFJLENBQUM2aEIsZUFBZSxFQUFFcmxCLElBQUksQ0FBQztRQUN2R3NsQixZQUFZLEdBQUczckIsT0FBTyxJQUFJOEUsSUFBSSxDQUFDOEMsR0FBRyxDQUFDLENBQUMsRUFBRW1WLFNBQVMsQ0FBQzFaLE9BQU8sQ0FBQ2dELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRS9GLENBQUMsR0FBR3FyQixZQUFZO1FBQ2hCdEssRUFBRTtRQUNGbkosTUFBTTtRQUNOcUksTUFBTTtRQUNOcUwsVUFBVTtRQUNWMUosUUFBUTtRQUNSMkosVUFBVTtRQUNWQyxNQUFNO1FBQ05DLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLGNBQWM7UUFDZEMsaUJBQWlCO1FBQ2pCQyxlQUFlO01BRW5CLElBQUlsc0IsT0FBTyxJQUFJcVYsU0FBUyxDQUFDNEIsUUFBUSxDQUFDLEVBQUU7UUFDbEM7UUFDQWdWLGlCQUFpQixHQUFHcHRCLElBQUksQ0FBQ21JLFdBQVcsQ0FBQzBmLGtCQUFrQixFQUFFM04sU0FBUyxDQUFDNVQsQ0FBQyxDQUFDO1FBQ3JFK21CLGVBQWUsR0FBR3J0QixJQUFJLENBQUNtSSxXQUFXLENBQUMyZixnQkFBZ0IsRUFBRTVOLFNBQVMsQ0FBQzVULENBQUMsQ0FBQztNQUNuRTtNQUVBLE9BQU8vRSxDQUFDLEVBQUUsRUFBRTtRQUNWO1FBQ0F1ckIsVUFBVSxHQUFHOU8sU0FBUyxDQUFDemMsQ0FBQyxDQUFDO1FBQ3pCdXJCLFVBQVUsQ0FBQ2xNLEdBQUcsSUFBSWtNLFVBQVUsQ0FBQzFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs1TSxXQUFXLEdBQUdsTSxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUVwRXlsQixNQUFNLEdBQUdELFVBQVUsQ0FBQ3hNLEdBQUc7UUFFdkIsSUFBSXlNLE1BQU0sS0FBS0EsTUFBTSxLQUFLOXJCLE9BQU8sSUFBSThyQixNQUFNLEtBQUt6TSxHQUFHLElBQUl5TSxNQUFNLEtBQUtKLGVBQWUsQ0FBQyxJQUFJLENBQUNHLFVBQVUsQ0FBQzlDLFVBQVUsRUFBRTtVQUM1R2tELFlBQVksS0FBS0EsWUFBWSxHQUFHLEVBQUUsQ0FBQztVQUNuQ0EsWUFBWSxDQUFDSSxPQUFPLENBQUNSLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1VBRWxDQSxVQUFVLENBQUNwYSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUMvQjtRQUVBLElBQUlvYSxVQUFVLEtBQUs5TyxTQUFTLENBQUN6YyxDQUFDLENBQUMsRUFBRTtVQUMvQjtVQUNBcXJCLFlBQVksRUFBRTtVQUNkcnJCLENBQUMsRUFBRTtRQUNMO01BQ0Y7TUFFQStVLFdBQVcsQ0FBQ29XLFdBQVcsQ0FBQyxLQUFLQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ3BsQixJQUFJLENBQUMsQ0FBQztNQUM3RG9sQixXQUFXLEdBQUc3WCxXQUFXLENBQUM2WCxXQUFXLEVBQUUsT0FBTyxFQUFFcGxCLElBQUksQ0FBQztNQUNyRG1XLEtBQUssR0FBRzRGLGNBQWMsQ0FBQ3FKLFdBQVcsRUFBRXpyQixPQUFPLEVBQUU2YSxJQUFJLEVBQUU1QixTQUFTLEVBQUVVLFVBQVUsQ0FBQyxDQUFDLEVBQUUrTSxXQUFXLEVBQUVFLGtCQUFrQixFQUFFdmdCLElBQUksRUFBRWtjLGNBQWMsRUFBRUMsV0FBVyxFQUFFakgsZ0JBQWdCLEVBQUUzVCxHQUFHLEVBQUV5VCxrQkFBa0IsRUFBRWhWLElBQUksQ0FBQ2lpQixXQUFXLElBQUksYUFBYSxDQUFDLEtBQUtqSixHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ25QaEssV0FBVyxDQUFDaVcsU0FBUyxDQUFDLEtBQUtBLFNBQVMsR0FBR0EsU0FBUyxDQUFDamxCLElBQUksQ0FBQyxDQUFDO01BRXZELElBQUl3TixTQUFTLENBQUN5WCxTQUFTLENBQUMsSUFBSSxDQUFDQSxTQUFTLENBQUNqb0IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BELElBQUksQ0FBQ2lvQixTQUFTLENBQUNqb0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1VBQzNCaW9CLFNBQVMsR0FBRyxDQUFDelgsU0FBUyxDQUFDNFgsV0FBVyxDQUFDLEdBQUdBLFdBQVcsQ0FBQzloQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJMmhCLFNBQVM7UUFDbkYsQ0FBQyxNQUFNO1VBQ0xwbUIsTUFBTSxHQUFHMFYsV0FBVyxDQUFDMFEsU0FBUyxDQUFDeFgsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFK0csSUFBSSxDQUFDO1VBQy9DeVEsU0FBUyxHQUFHelgsU0FBUyxDQUFDNFgsV0FBVyxDQUFDLEdBQUdBLFdBQVcsR0FBRyxDQUFDcFEsa0JBQWtCLEdBQUd0YyxJQUFJLENBQUN5SCxLQUFLLENBQUN3YyxRQUFRLENBQUMsQ0FBQyxFQUFFM0gsa0JBQWtCLENBQUN4YixRQUFRLENBQUMsQ0FBQyxFQUFFd2Isa0JBQWtCLENBQUN0YixhQUFhLENBQUN5YyxLQUFLLEVBQUVuQixrQkFBa0IsQ0FBQ3RiLGFBQWEsQ0FBQzRmLEdBQUcsRUFBRW5ELEtBQUssQ0FBQyxHQUFHQSxLQUFLLElBQUl0WCxNQUFNLENBQUMsQ0FBQzs7VUFFdk9xbUIsZ0JBQWdCLEdBQUd2ckIsT0FBTztRQUM1QjtNQUNGO01BRUFzckIsU0FBUyxHQUFHMVgsV0FBVyxDQUFDMFgsU0FBUyxFQUFFLEtBQUssRUFBRWpsQixJQUFJLENBQUM7TUFDL0NzWixHQUFHLEdBQUc3YSxJQUFJLENBQUM4QyxHQUFHLENBQUM0VSxLQUFLLEVBQUU0RixjQUFjLENBQUNrSixTQUFTLEtBQUtDLGdCQUFnQixHQUFHLFFBQVEsR0FBRzNqQixHQUFHLENBQUMsRUFBRTJqQixnQkFBZ0IsRUFBRTFRLElBQUksRUFBRTVCLFNBQVMsRUFBRVUsVUFBVSxDQUFDLENBQUMsR0FBR3pVLE1BQU0sRUFBRXloQixTQUFTLEVBQUVFLGdCQUFnQixFQUFFeGdCLElBQUksRUFBRWtjLGNBQWMsRUFBRUMsV0FBVyxFQUFFakgsZ0JBQWdCLEVBQUUzVCxHQUFHLEVBQUV5VCxrQkFBa0IsRUFBRWhWLElBQUksQ0FBQ3VaLFNBQVMsSUFBSSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztNQUNyUzFhLE1BQU0sR0FBRyxDQUFDO01BQ1Y1RSxDQUFDLEdBQUdxckIsWUFBWTtNQUVoQixPQUFPcnJCLENBQUMsRUFBRSxFQUFFO1FBQ1Z1ckIsVUFBVSxHQUFHOU8sU0FBUyxDQUFDemMsQ0FBQyxDQUFDO1FBQ3pCd3JCLE1BQU0sR0FBR0QsVUFBVSxDQUFDeE0sR0FBRztRQUV2QixJQUFJeU0sTUFBTSxJQUFJRCxVQUFVLENBQUNyUCxLQUFLLEdBQUdxUCxVQUFVLENBQUNTLFFBQVEsSUFBSTlQLEtBQUssSUFBSSxDQUFDbkIsa0JBQWtCLElBQUl3USxVQUFVLENBQUNsTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1VBQzFHMEIsRUFBRSxHQUFHd0ssVUFBVSxDQUFDbE0sR0FBRyxJQUFJdFosSUFBSSxDQUFDaWlCLFdBQVcsR0FBR3hqQixJQUFJLENBQUM4QyxHQUFHLENBQUMsQ0FBQyxFQUFFaWtCLFVBQVUsQ0FBQ3JQLEtBQUssQ0FBQyxHQUFHcVAsVUFBVSxDQUFDclAsS0FBSyxDQUFDO1VBRTNGLElBQUksQ0FBQ3NQLE1BQU0sS0FBSzlyQixPQUFPLElBQUk2ckIsVUFBVSxDQUFDclAsS0FBSyxHQUFHcVAsVUFBVSxDQUFDUyxRQUFRLEdBQUc5UCxLQUFLLElBQUlzUCxNQUFNLEtBQUtKLGVBQWUsS0FBS2xjLEtBQUssQ0FBQ2ljLFdBQVcsQ0FBQyxFQUFFO1lBQzlIO1lBQ0F2bUIsTUFBTSxJQUFJbWMsRUFBRSxJQUFJLENBQUMsR0FBR3dLLFVBQVUsQ0FBQ2xXLFFBQVEsQ0FBQztVQUMxQztVQUVBbVcsTUFBTSxLQUFLek0sR0FBRyxLQUFLZ00sY0FBYyxJQUFJaEssRUFBRSxDQUFDO1FBQzFDO01BQ0Y7TUFFQTdFLEtBQUssSUFBSXRYLE1BQU07TUFDZnlhLEdBQUcsSUFBSXphLE1BQU07TUFDYm1CLElBQUksQ0FBQ2lpQixXQUFXLEtBQUtqaUIsSUFBSSxDQUFDaWlCLFdBQVcsSUFBSXBqQixNQUFNLENBQUM7TUFFaEQsSUFBSW1CLElBQUksQ0FBQ3VaLFNBQVMsSUFBSSxDQUFDckIsY0FBYyxFQUFFO1FBQ3JDbFksSUFBSSxDQUFDdVosU0FBUyxHQUFHRCxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzlCQSxHQUFHLEdBQUc3YSxJQUFJLENBQUM0QyxHQUFHLENBQUNpWSxHQUFHLEVBQUUxSyxVQUFVLENBQUNGLFFBQVEsRUFBRWtFLFNBQVMsQ0FBQyxDQUFDO01BQ3REO01BRUErTixNQUFNLEdBQUdySCxHQUFHLEdBQUduRCxLQUFLLElBQUksQ0FBQ0EsS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLO01BRWhELElBQUk0TyxjQUFjLEVBQUU7UUFDbEI7UUFDQWhGLFlBQVksR0FBR3JuQixJQUFJLENBQUN5SCxLQUFLLENBQUN5QyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxLLElBQUksQ0FBQ3lILEtBQUssQ0FBQytsQixTQUFTLENBQUMvUCxLQUFLLEVBQUVtRCxHQUFHLEVBQUV1SSxVQUFVLENBQUMsQ0FBQztNQUNyRjtNQUVBN2hCLElBQUksQ0FBQ2ltQixRQUFRLEdBQUdqQixjQUFjO01BRTlCLElBQUkzRSxXQUFXLElBQUl4aEIsTUFBTSxFQUFFO1FBQ3pCO1FBQ0FtYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1BBLEVBQUUsQ0FBQ3BJLFNBQVMsQ0FBQ3RULENBQUMsQ0FBQyxHQUFHLElBQUksR0FBR1QsTUFBTTtRQUMvQndtQixlQUFlLEtBQUtySyxFQUFFLENBQUNwSSxTQUFTLENBQUM1VCxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUdzVSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFENWEsSUFBSSxDQUFDK2QsR0FBRyxDQUFDLENBQUM0SixXQUFXLEVBQUVDLFNBQVMsQ0FBQyxFQUFFdEYsRUFBRSxDQUFDO01BQ3hDO01BRUEsSUFBSWhDLEdBQUcsRUFBRTtRQUNQZ0MsRUFBRSxHQUFHcEssaUJBQWlCLENBQUNvSSxHQUFHLENBQUM7UUFDM0J1TSxVQUFVLEdBQUczUyxTQUFTLEtBQUtsVCxtREFBUztRQUNwQ3dhLE1BQU0sR0FBRzVHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFdkIyTixRQUFRLEdBQUdoYixVQUFVLENBQUM4YSxTQUFTLENBQUNuTyxTQUFTLENBQUN0VCxDQUFDLENBQUMsQ0FBQyxHQUFHMGxCLGNBQWM7UUFFOUQsSUFBSSxDQUFDempCLEdBQUcsSUFBSStYLEdBQUcsR0FBRyxDQUFDLEVBQUU7VUFDbkI7VUFDQXVNLGNBQWMsR0FBRyxDQUFDNWUsVUFBVSxHQUFHL0wsSUFBSSxDQUFDd0YsZ0JBQWdCLElBQUl2RixNQUFNLEdBQUd1VCxRQUFRLEVBQUVxQyxLQUFLO1VBQ2hGOFUsY0FBYyxHQUFHO1lBQ2Y5VSxLQUFLLEVBQUU4VSxjQUFjO1lBQ3JCeHBCLEtBQUssRUFBRXdwQixjQUFjLENBQUMsVUFBVSxHQUFHalQsU0FBUyxDQUFDdFQsQ0FBQyxDQUFDNm1CLFdBQVcsQ0FBQyxDQUFDO1VBQzlELENBQUM7VUFFRCxJQUFJbGYsVUFBVSxJQUFJMkosaUJBQWlCLENBQUN4VixLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUd3WCxTQUFTLENBQUN0VCxDQUFDLENBQUM2bUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMvRjtZQUNBTixjQUFjLENBQUM5VSxLQUFLLENBQUMsVUFBVSxHQUFHNkIsU0FBUyxDQUFDdFQsQ0FBQyxDQUFDNm1CLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRO1VBQ3pFO1FBQ0Y7UUFFQXBMLFVBQVUsQ0FBQy9CLEdBQUcsRUFBRXVCLE1BQU0sRUFBRVMsRUFBRSxDQUFDO1FBRTNCOEYsUUFBUSxHQUFHbkYsU0FBUyxDQUFDM0MsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFM0JuSCxNQUFNLEdBQUdyRCxVQUFVLENBQUN3SyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQzlCME0sY0FBYyxHQUFHeFEsZ0JBQWdCLElBQUkxVSw0REFBYyxDQUFDa08sUUFBUSxFQUFFNlcsVUFBVSxHQUFHem1CLHFEQUFXLEdBQUdZLG1EQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXJHLElBQUkrZSxVQUFVLEVBQUU7VUFDZDdELFdBQVcsR0FBRyxDQUFDNkQsVUFBVSxHQUFHN0wsU0FBUyxDQUFDelQsR0FBRyxFQUFFd2hCLE1BQU0sR0FBR3FFLGNBQWMsR0FBR3JVLEdBQUcsQ0FBQztVQUN6RWlLLFdBQVcsQ0FBQzdhLENBQUMsR0FBR3dhLE1BQU07VUFDdEJ0Z0IsQ0FBQyxHQUFHd2tCLFVBQVUsS0FBS2xPLFFBQVEsR0FBR3dCLFFBQVEsQ0FBQ2lILEdBQUcsRUFBRXBHLFNBQVMsQ0FBQyxHQUFHK04sTUFBTSxHQUFHcUUsY0FBYyxHQUFHLENBQUM7VUFDcEYvcUIsQ0FBQyxJQUFJMmdCLFdBQVcsQ0FBQ2hlLElBQUksQ0FBQ2dXLFNBQVMsQ0FBQ3hULENBQUMsRUFBRW5GLENBQUMsR0FBRzBXLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBRTdDOEosU0FBUyxDQUFDRyxXQUFXLENBQUM7VUFFdEIsSUFBSXlLLGVBQWUsRUFBRTtZQUNuQjtZQUNBM08sU0FBUyxDQUFDdEQsT0FBTyxDQUFDLFVBQVVyVCxDQUFDLEVBQUU7Y0FDN0IsSUFBSUEsQ0FBQyxDQUFDaVosR0FBRyxLQUFLcU0sZUFBZSxJQUFJdGxCLENBQUMsQ0FBQ3lELElBQUksQ0FBQ2liLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQzVEMWUsQ0FBQyxDQUFDZ1osYUFBYSxHQUFHLElBQUk7Y0FDeEI7WUFDRixDQUFDLENBQUM7VUFDSjtVQUVBN0QsZ0JBQWdCLElBQUk1QixVQUFVLENBQUN1TyxVQUFVLENBQUM7UUFDNUM7UUFFQSxJQUFJM00sZ0JBQWdCLEVBQUU7VUFDcEIyRyxRQUFRLEdBQUc7WUFDVDNILEdBQUcsRUFBRXJDLE1BQU0sQ0FBQ3FDLEdBQUcsSUFBSXFSLFVBQVUsR0FBR3JMLE1BQU0sR0FBRy9ELEtBQUssR0FBR3VQLGNBQWMsQ0FBQyxHQUFHL1UsR0FBRztZQUN0RXdELElBQUksRUFBRXRDLE1BQU0sQ0FBQ3NDLElBQUksSUFBSW9SLFVBQVUsR0FBR0csY0FBYyxHQUFHeEwsTUFBTSxHQUFHL0QsS0FBSyxDQUFDLEdBQUd4RixHQUFHO1lBQ3hFMEssU0FBUyxFQUFFLFlBQVk7WUFDdkJ2SyxRQUFRLEVBQUU7VUFDWixDQUFDO1VBQ0QrSyxRQUFRLENBQUM1TCxNQUFNLENBQUMsR0FBRzRMLFFBQVEsQ0FBQyxLQUFLLEdBQUdwTCxNQUFNLENBQUMsR0FBR2hTLElBQUksQ0FBQzJuQixJQUFJLENBQUN2VSxNQUFNLENBQUN4RCxLQUFLLENBQUMsR0FBR3NDLEdBQUc7VUFDM0VrTCxRQUFRLENBQUMzTCxPQUFPLENBQUMsR0FBRzJMLFFBQVEsQ0FBQyxLQUFLLEdBQUduTCxPQUFPLENBQUMsR0FBR2pTLElBQUksQ0FBQzJuQixJQUFJLENBQUN2VSxNQUFNLENBQUN0RCxNQUFNLENBQUMsR0FBR29DLEdBQUc7VUFDOUVrTCxRQUFRLENBQUNyTCxPQUFPLENBQUMsR0FBR3FMLFFBQVEsQ0FBQ3JMLE9BQU8sR0FBR0gsSUFBSSxDQUFDLEdBQUd3TCxRQUFRLENBQUNyTCxPQUFPLEdBQUdMLE1BQU0sQ0FBQyxHQUFHMEwsUUFBUSxDQUFDckwsT0FBTyxHQUFHRixPQUFPLENBQUMsR0FBR3VMLFFBQVEsQ0FBQ3JMLE9BQU8sR0FBR0osS0FBSyxDQUFDLEdBQUcsR0FBRztVQUN6SXlMLFFBQVEsQ0FBQ3RMLFFBQVEsQ0FBQyxHQUFHeUssRUFBRSxDQUFDekssUUFBUSxDQUFDO1VBQ2pDc0wsUUFBUSxDQUFDdEwsUUFBUSxHQUFHRixJQUFJLENBQUMsR0FBRzJLLEVBQUUsQ0FBQ3pLLFFBQVEsR0FBR0YsSUFBSSxDQUFDO1VBQy9Dd0wsUUFBUSxDQUFDdEwsUUFBUSxHQUFHSixNQUFNLENBQUMsR0FBRzZLLEVBQUUsQ0FBQ3pLLFFBQVEsR0FBR0osTUFBTSxDQUFDO1VBQ25EMEwsUUFBUSxDQUFDdEwsUUFBUSxHQUFHRCxPQUFPLENBQUMsR0FBRzBLLEVBQUUsQ0FBQ3pLLFFBQVEsR0FBR0QsT0FBTyxDQUFDO1VBQ3JEdUwsUUFBUSxDQUFDdEwsUUFBUSxHQUFHSCxLQUFLLENBQUMsR0FBRzRLLEVBQUUsQ0FBQ3pLLFFBQVEsR0FBR0gsS0FBSyxDQUFDO1VBQ2pEeVEsY0FBYyxHQUFHakYsVUFBVSxDQUFDZ0YsZ0JBQWdCLEVBQUUvRSxRQUFRLEVBQUVpRCxXQUFXLENBQUM7VUFDcEU1RyxjQUFjLElBQUk1RSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pDO1FBRUEsSUFBSWxFLFNBQVMsRUFBRTtVQUNiO1VBQ0F1VyxPQUFPLEdBQUd2VyxTQUFTLENBQUNxVCxRQUFRLENBQUMsQ0FBQzs7VUFFOUIvVixtQkFBbUIsQ0FBQyxDQUFDLENBQUM7VUFFdEIwQyxTQUFTLENBQUNxSyxNQUFNLENBQUNySyxTQUFTLENBQUM1VixRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7VUFDbEQwbkIsU0FBUyxHQUFHSCxTQUFTLENBQUNuTyxTQUFTLENBQUN0VCxDQUFDLENBQUMsR0FBRzJoQixRQUFRLEdBQUdOLE1BQU0sR0FBR3FFLGNBQWM7VUFDdkUzRCxRQUFRLEdBQUc1aUIsSUFBSSxDQUFDNEQsR0FBRyxDQUFDc2UsTUFBTSxHQUFHTyxTQUFTLENBQUMsR0FBRyxDQUFDO1VBQzNDaE0sZ0JBQWdCLElBQUltTSxRQUFRLElBQUlSLGNBQWMsQ0FBQ3hWLE1BQU0sQ0FBQ3dWLGNBQWMsQ0FBQzNtQixNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRXJGa1YsU0FBUyxDQUFDcUssTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1VBQy9Ca00sT0FBTyxJQUFJdlcsU0FBUyxDQUFDMFYsVUFBVSxDQUFDLElBQUksQ0FBQztVQUNyQzFWLFNBQVMsQ0FBQ2dHLE1BQU0sSUFBSWhHLFNBQVMsQ0FBQ00sU0FBUyxDQUFDTixTQUFTLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUVoRWhELG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLE1BQU07VUFDTHdVLFNBQVMsR0FBR1AsTUFBTTtRQUNwQjtRQUVBa0YsY0FBYyxLQUFLQSxjQUFjLENBQUN4cEIsS0FBSyxHQUFHd3BCLGNBQWMsQ0FBQzlVLEtBQUssQ0FBQyxVQUFVLEdBQUc2QixTQUFTLENBQUN0VCxDQUFDLENBQUM2bUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHTixjQUFjLENBQUN4cEIsS0FBSyxHQUFHd3BCLGNBQWMsQ0FBQzlVLEtBQUssQ0FBQ3lLLGNBQWMsQ0FBQyxXQUFXLEdBQUc1SSxTQUFTLENBQUN0VCxDQUFDLENBQUMsQ0FBQztNQUNqTSxDQUFDLE1BQU0sSUFBSTNGLE9BQU8sSUFBSTJaLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQzBCLGtCQUFrQixFQUFFO1FBQ3pEO1FBQ0FuRCxNQUFNLEdBQUdsWSxPQUFPLENBQUNtaEIsVUFBVTtRQUUzQixPQUFPakosTUFBTSxJQUFJQSxNQUFNLEtBQUt6VyxLQUFLLEVBQUU7VUFDakMsSUFBSXlXLE1BQU0sQ0FBQ3dVLFVBQVUsRUFBRTtZQUNyQmxRLEtBQUssSUFBSXRFLE1BQU0sQ0FBQ3dVLFVBQVU7WUFDMUIvTSxHQUFHLElBQUl6SCxNQUFNLENBQUN3VSxVQUFVO1VBQzFCO1VBRUF4VSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ2lKLFVBQVU7UUFDNUI7TUFDRjtNQUVBOEssWUFBWSxJQUFJQSxZQUFZLENBQUN4UyxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTtRQUNoRCxPQUFPQSxDQUFDLENBQUNxTCxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztNQUM5QixDQUFDLENBQUM7TUFDRnBMLElBQUksQ0FBQ21XLEtBQUssR0FBR0EsS0FBSztNQUNsQm5XLElBQUksQ0FBQ3NaLEdBQUcsR0FBR0EsR0FBRztNQUNkNkcsT0FBTyxHQUFHQyxPQUFPLEdBQUdsSSxjQUFjLEdBQUcySixVQUFVLEdBQUd2TyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRWhFLElBQUksQ0FBQzBCLGtCQUFrQixJQUFJLENBQUNrRCxjQUFjLEVBQUU7UUFDMUNpSSxPQUFPLEdBQUcwQixVQUFVLElBQUl2TyxVQUFVLENBQUN1TyxVQUFVLENBQUM7UUFDOUM3aEIsSUFBSSxDQUFDa2EsTUFBTSxDQUFDL0IsR0FBRyxHQUFHLENBQUM7TUFDckI7TUFFQW5ZLElBQUksQ0FBQ29MLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQ3hCMFUsV0FBVyxHQUFHOWpCLFFBQVEsQ0FBQyxDQUFDO01BRXhCLElBQUk0bEIsZUFBZSxFQUFFO1FBQ25CL0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZjs7UUFFQStCLGVBQWUsQ0FBQzVYLE9BQU8sQ0FBQyxJQUFJLENBQUM7TUFDL0I7TUFFQWtDLFdBQVcsR0FBRyxDQUFDO01BQ2ZrRCxTQUFTLElBQUk4UCxRQUFRLEtBQUs5UCxTQUFTLENBQUNxVCxRQUFRLElBQUlYLGdCQUFnQixDQUFDLElBQUkxUyxTQUFTLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEtBQUt3UyxnQkFBZ0IsSUFBSTFTLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDd1MsZ0JBQWdCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDckksTUFBTSxDQUFDckssU0FBUyxDQUFDNEssSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7TUFFeE0sSUFBSStLLGNBQWMsSUFBSWhGLFlBQVksS0FBSy9mLElBQUksQ0FBQ3NQLFFBQVEsSUFBSTBGLGtCQUFrQixFQUFFO1FBQzFFO1FBQ0E1RixTQUFTLElBQUksQ0FBQzhQLFFBQVEsSUFBSTlQLFNBQVMsQ0FBQ2tULGFBQWEsQ0FBQ3ROLGtCQUFrQixJQUFJbUIsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM0SixZQUFZLEdBQUdybkIsSUFBSSxDQUFDeUgsS0FBSyxDQUFDK2xCLFNBQVMsQ0FBQy9QLEtBQUssRUFBRW1ELEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR3lHLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUVySy9mLElBQUksQ0FBQ3NQLFFBQVEsR0FBR3lWLGNBQWMsSUFBSSxDQUFDNUUsT0FBTyxHQUFHaEssS0FBSyxJQUFJd0ssTUFBTSxLQUFLWixZQUFZLEdBQUcsQ0FBQyxHQUFHQSxZQUFZO01BQ2xHO01BRUEvRyxHQUFHLElBQUl5RixVQUFVLEtBQUtsRSxNQUFNLENBQUM4TCxVQUFVLEdBQUc1bkIsSUFBSSxDQUFDQyxLQUFLLENBQUNzQixJQUFJLENBQUNzUCxRQUFRLEdBQUc0UixTQUFTLENBQUMsQ0FBQztNQUNoRk8sVUFBVSxJQUFJQSxVQUFVLENBQUNxRCxVQUFVLENBQUMsQ0FBQztNQUVyQyxJQUFJLENBQUMzYixLQUFLLENBQUMyYyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzdCO1FBQ0FBLGlCQUFpQixJQUFJcHRCLElBQUksQ0FBQ21JLFdBQVcsQ0FBQzBmLGtCQUFrQixFQUFFM04sU0FBUyxDQUFDNVQsQ0FBQyxDQUFDO1FBQ3RFK21CLGVBQWUsSUFBSXJ0QixJQUFJLENBQUNtSSxXQUFXLENBQUMyZixnQkFBZ0IsRUFBRTVOLFNBQVMsQ0FBQzVULENBQUMsQ0FBQztRQUVsRXllLFlBQVksQ0FBQzhDLGtCQUFrQixFQUFFM04sU0FBUyxFQUFFa1QsaUJBQWlCLENBQUM7UUFFOURySSxZQUFZLENBQUM0QyxXQUFXLEVBQUV6TixTQUFTLEVBQUVrVCxpQkFBaUIsSUFBSWpCLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxRXBILFlBQVksQ0FBQytDLGdCQUFnQixFQUFFNU4sU0FBUyxFQUFFbVQsZUFBZSxDQUFDO1FBRTFEdEksWUFBWSxDQUFDNkMsU0FBUyxFQUFFMU4sU0FBUyxFQUFFbVQsZUFBZSxJQUFJbEIsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQ3hFO01BRUFFLGNBQWMsSUFBSSxDQUFDN00sY0FBYyxJQUFJbFksSUFBSSxDQUFDd0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVwRCxJQUFJa1ksU0FBUyxJQUFJLENBQUN4QixjQUFjLElBQUksQ0FBQ3dJLGtCQUFrQixFQUFFO1FBQ3ZEO1FBQ0FBLGtCQUFrQixHQUFHLElBQUk7UUFDekJoSCxTQUFTLENBQUMxWixJQUFJLENBQUM7UUFDZjBnQixrQkFBa0IsR0FBRyxLQUFLO01BQzVCO0lBQ0YsQ0FBQztJQUVEMWdCLElBQUksQ0FBQzJCLFdBQVcsR0FBRyxZQUFZO01BQzdCLE9BQU8sQ0FBQzJSLFVBQVUsQ0FBQyxDQUFDLEdBQUc4TSxPQUFPLEtBQUtwa0IsUUFBUSxDQUFDLENBQUMsR0FBR2dRLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRGhNLElBQUksQ0FBQ3NtQixZQUFZLEdBQUcsWUFBWTtNQUM5Qm5YLGFBQWEsQ0FBQ25QLElBQUksQ0FBQzJQLGlCQUFpQixDQUFDO01BRXJDLElBQUlQLFNBQVMsRUFBRTtRQUNicVMsVUFBVSxHQUFHQSxVQUFVLENBQUNuUyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDbVQsTUFBTSxDQUFDLENBQUMsR0FBR3BULGFBQWEsQ0FBQ0MsU0FBUyxFQUFFQSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRzZQLFFBQVEsSUFBSS9QLGFBQWEsQ0FBQ0MsU0FBUyxFQUFFcFAsSUFBSSxDQUFDNFMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDMUs7SUFDRixDQUFDO0lBRUQ1UyxJQUFJLENBQUN1bUIsYUFBYSxHQUFHLFVBQVVDLEtBQUssRUFBRTtNQUNwQyxPQUFPcFgsU0FBUyxJQUFJQSxTQUFTLENBQUMrQyxNQUFNLElBQUksQ0FBQ2dFLEtBQUssSUFBSW5XLElBQUksQ0FBQzhZLE9BQU8sQ0FBQyxDQUFDLElBQUkzQyxLQUFLLElBQUkvRyxTQUFTLENBQUMrQyxNQUFNLENBQUNxVSxLQUFLLENBQUMsR0FBR3BYLFNBQVMsQ0FBQzVWLFFBQVEsQ0FBQyxDQUFDLEdBQUdtbkIsTUFBTSxJQUFJLENBQUM7SUFDM0ksQ0FBQztJQUVEM2dCLElBQUksQ0FBQ3ltQixXQUFXLEdBQUcsVUFBVXJxQixJQUFJLEVBQUU7TUFDakMsSUFBSW5DLENBQUMsR0FBR3ljLFNBQVMsQ0FBQzFaLE9BQU8sQ0FBQ2dELElBQUksQ0FBQztRQUMzQlYsQ0FBQyxHQUFHVSxJQUFJLENBQUM0UyxTQUFTLEdBQUcsQ0FBQyxHQUFHOEQsU0FBUyxDQUFDL0ssS0FBSyxDQUFDLENBQUMsRUFBRTFSLENBQUMsQ0FBQyxDQUFDeXNCLE9BQU8sQ0FBQyxDQUFDLEdBQUdoUSxTQUFTLENBQUMvSyxLQUFLLENBQUMxUixDQUFDLEdBQUcsQ0FBQyxDQUFDO01BRXJGLE9BQU8sQ0FBQ3VULFNBQVMsQ0FBQ3BSLElBQUksQ0FBQyxHQUFHa0QsQ0FBQyxDQUFDMkwsTUFBTSxDQUFDLFVBQVVsTCxDQUFDLEVBQUU7UUFDOUMsT0FBT0EsQ0FBQyxDQUFDeUQsSUFBSSxDQUFDeWIsZUFBZSxLQUFLN2lCLElBQUk7TUFDeEMsQ0FBQyxDQUFDLEdBQUdrRCxDQUFDLEVBQUUyTCxNQUFNLENBQUMsVUFBVWxMLENBQUMsRUFBRTtRQUMxQixPQUFPQyxJQUFJLENBQUM0UyxTQUFTLEdBQUcsQ0FBQyxHQUFHN1MsQ0FBQyxDQUFDdVosR0FBRyxJQUFJbkQsS0FBSyxHQUFHcFcsQ0FBQyxDQUFDb1csS0FBSyxJQUFJbUQsR0FBRztNQUM3RCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUR0WixJQUFJLENBQUN3QixNQUFNLEdBQUcsVUFBVUUsS0FBSyxFQUFFdVksY0FBYyxFQUFFME0sU0FBUyxFQUFFO01BQ3hELElBQUkzUixrQkFBa0IsSUFBSSxDQUFDMlIsU0FBUyxJQUFJLENBQUNqbEIsS0FBSyxFQUFFO1FBQzlDO01BQ0Y7TUFFQSxJQUFJd1ksTUFBTSxHQUFHaEMsY0FBYyxLQUFLLElBQUksR0FBRzJKLFVBQVUsR0FBRzdoQixJQUFJLENBQUNrYSxNQUFNLENBQUMsQ0FBQztRQUM3RGxiLENBQUMsR0FBRzBDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQ3dZLE1BQU0sR0FBRy9ELEtBQUssSUFBSXdLLE1BQU07UUFDekNpRyxPQUFPLEdBQUc1bkIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxDQUFDLElBQUksQ0FBQztRQUN4QytnQixZQUFZLEdBQUcvZixJQUFJLENBQUNzUCxRQUFRO1FBQzVCbVUsUUFBUTtRQUNSb0QsU0FBUztRQUNUQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsY0FBYztNQUVsQixJQUFJbE4sY0FBYyxFQUFFO1FBQ2xCbUcsT0FBTyxHQUFHRCxPQUFPO1FBQ2pCQSxPQUFPLEdBQUduTCxrQkFBa0IsR0FBRzFCLFVBQVUsQ0FBQyxDQUFDLEdBQUc0RyxNQUFNO1FBRXBELElBQUk3SCxJQUFJLEVBQUU7VUFDUm1QLEtBQUssR0FBR0QsS0FBSztVQUNiQSxLQUFLLEdBQUduUyxTQUFTLElBQUksQ0FBQzhQLFFBQVEsR0FBRzlQLFNBQVMsQ0FBQ2tULGFBQWEsQ0FBQyxDQUFDLEdBQUdzRSxPQUFPO1FBQ3RFO01BQ0YsQ0FBQyxDQUFDOztNQUdGNVMsYUFBYSxJQUFJLENBQUM0UyxPQUFPLElBQUk1TixHQUFHLElBQUksQ0FBQzlNLFdBQVcsSUFBSSxDQUFDdFEsUUFBUSxJQUFJeVIsZUFBZSxJQUFJOEksS0FBSyxHQUFHK0QsTUFBTSxHQUFHLENBQUNBLE1BQU0sR0FBR2tHLE9BQU8sS0FBS3BrQixRQUFRLENBQUMsQ0FBQyxHQUFHZ1EsTUFBTSxDQUFDLEdBQUdnSSxhQUFhLEtBQUs0UyxPQUFPLEdBQUcsTUFBTSxDQUFDO01BRXJMLElBQUlBLE9BQU8sS0FBSzdHLFlBQVksSUFBSS9mLElBQUksQ0FBQ3dQLE9BQU8sRUFBRTtRQUM1Q2lVLFFBQVEsR0FBR3pqQixJQUFJLENBQUN5akIsUUFBUSxHQUFHLENBQUMsQ0FBQ21ELE9BQU8sSUFBSUEsT0FBTyxHQUFHLENBQUM7UUFDbkRDLFNBQVMsR0FBRyxDQUFDLENBQUM5RyxZQUFZLElBQUlBLFlBQVksR0FBRyxDQUFDO1FBQzlDa0gsT0FBTyxHQUFHeEQsUUFBUSxLQUFLb0QsU0FBUztRQUNoQ0csWUFBWSxHQUFHQyxPQUFPLElBQUksQ0FBQyxDQUFDTCxPQUFPLEtBQUssQ0FBQyxDQUFDN0csWUFBWSxDQUFDLENBQUM7O1FBRXhEL2YsSUFBSSxDQUFDNFMsU0FBUyxHQUFHZ1UsT0FBTyxHQUFHN0csWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQvZixJQUFJLENBQUNzUCxRQUFRLEdBQUdzWCxPQUFPO1FBRXZCLElBQUlJLFlBQVksSUFBSSxDQUFDOWEsV0FBVyxFQUFFO1VBQ2hDNGEsV0FBVyxHQUFHRixPQUFPLElBQUksQ0FBQzdHLFlBQVksR0FBRyxDQUFDLEdBQUc2RyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRzdHLFlBQVksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztVQUU3RixJQUFJYixRQUFRLEVBQUU7WUFDWjZILE1BQU0sR0FBRyxDQUFDRSxPQUFPLElBQUlsVCxhQUFhLENBQUMrUyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssTUFBTSxJQUFJL1MsYUFBYSxDQUFDK1MsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJL1MsYUFBYSxDQUFDK1MsV0FBVyxDQUFDLENBQUMsQ0FBQzs7WUFFaElLLGNBQWMsR0FBRy9YLFNBQVMsS0FBSzJYLE1BQU0sS0FBSyxVQUFVLElBQUlBLE1BQU0sS0FBSyxPQUFPLElBQUlBLE1BQU0sSUFBSTNYLFNBQVMsQ0FBQztVQUNwRztRQUNGO1FBRUE2UCxlQUFlLEtBQUtnSSxPQUFPLElBQUlFLGNBQWMsQ0FBQyxLQUFLQSxjQUFjLElBQUl2dEIsS0FBSyxJQUFJLENBQUN3VixTQUFTLENBQUMsS0FBS0osV0FBVyxDQUFDaVEsZUFBZSxDQUFDLEdBQUdBLGVBQWUsQ0FBQ2pmLElBQUksQ0FBQyxHQUFHQSxJQUFJLENBQUN5bUIsV0FBVyxDQUFDeEgsZUFBZSxDQUFDLENBQUM3TCxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTtVQUMxTSxPQUFPQSxDQUFDLENBQUN1bUIsWUFBWSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUNwSCxRQUFRLEVBQUU7VUFDYixJQUFJdUMsVUFBVSxJQUFJLENBQUN2VixXQUFXLElBQUksQ0FBQ3RRLFFBQVEsRUFBRTtZQUMzQzZsQixVQUFVLENBQUMyRixHQUFHLENBQUNDLEtBQUssR0FBRzVGLFVBQVUsQ0FBQzZGLE1BQU0sS0FBSzdGLFVBQVUsQ0FBQzRGLEtBQUssSUFBSTVGLFVBQVUsQ0FBQ2hJLE1BQU0sQ0FBQ2dJLFVBQVUsQ0FBQzJGLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHNUYsVUFBVSxDQUFDNkYsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFFOUgsSUFBSTdGLFVBQVUsQ0FBQzhGLE9BQU8sRUFBRTtjQUN0QjlGLFVBQVUsQ0FBQzhGLE9BQU8sQ0FBQyxlQUFlLEVBQUVYLE9BQU8sRUFBRXhYLFNBQVMsQ0FBQ29ZLE1BQU0sR0FBR3BZLFNBQVMsQ0FBQ3FZLEtBQUssQ0FBQztZQUNsRixDQUFDLE1BQU07Y0FDTDtjQUNBaEcsVUFBVSxDQUFDamUsSUFBSSxDQUFDOGUsYUFBYSxHQUFHc0UsT0FBTztjQUN2Q25GLFVBQVUsQ0FBQ3FELFVBQVUsQ0FBQyxDQUFDLENBQUM5YSxPQUFPLENBQUMsQ0FBQztZQUNuQztVQUNGLENBQUMsTUFBTSxJQUFJb0YsU0FBUyxFQUFFO1lBQ3BCQSxTQUFTLENBQUNrVCxhQUFhLENBQUNzRSxPQUFPLEVBQUUsQ0FBQyxFQUFFMWEsV0FBVyxLQUFLNFQsV0FBVyxJQUFJcGUsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUM3RTtRQUNGO1FBRUEsSUFBSXNYLEdBQUcsRUFBRTtVQUNQdFgsS0FBSyxJQUFJK2MsVUFBVSxLQUFLbEUsTUFBTSxDQUFDeEosS0FBSyxDQUFDME4sVUFBVSxHQUFHN0wsU0FBUyxDQUFDelQsR0FBRyxDQUFDLEdBQUdnaUIsWUFBWSxDQUFDO1VBRWhGLElBQUksQ0FBQ2pNLGdCQUFnQixFQUFFO1lBQ3JCOEwsU0FBUyxDQUFDalQsTUFBTSxDQUFDa1QsUUFBUSxHQUFHQyxTQUFTLEdBQUcwRixPQUFPLENBQUMsQ0FBQztVQUNuRCxDQUFDLE1BQU0sSUFBSUksWUFBWSxFQUFFO1lBQ3ZCRSxPQUFPLEdBQUcsQ0FBQ3hsQixLQUFLLElBQUlrbEIsT0FBTyxHQUFHN0csWUFBWSxJQUFJekcsR0FBRyxHQUFHLENBQUMsR0FBR1ksTUFBTSxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxJQUFJdEwsVUFBVSxDQUFDRixRQUFRLEVBQUVrRSxTQUFTLENBQUMsQ0FBQyxDQUFDOztZQUVqSCxJQUFJa00sV0FBVyxFQUFFO2NBQ2YsSUFBSSxDQUFDcGQsS0FBSyxLQUFLK2hCLFFBQVEsSUFBSXlELE9BQU8sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJclYsTUFBTSxHQUFHckQsVUFBVSxDQUFDd0ssR0FBRyxFQUFFLElBQUksQ0FBQztrQkFDOUJoRCxPQUFPLEdBQUdrRSxNQUFNLEdBQUcvRCxLQUFLO2dCQUU1QjRHLFNBQVMsQ0FBQy9ELEdBQUcsRUFBRTVkLEtBQUssRUFBRXlXLE1BQU0sQ0FBQ3FDLEdBQUcsSUFBSXRCLFNBQVMsS0FBS2xULG1EQUFTLEdBQUdzVyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUdyRixHQUFHLEVBQUVrQixNQUFNLENBQUNzQyxJQUFJLElBQUl2QixTQUFTLEtBQUtsVCxtREFBUyxHQUFHLENBQUMsR0FBR3NXLE9BQU8sQ0FBQyxHQUFHckYsR0FBRyxDQUFDO2NBQ2hKLENBQUMsTUFBTTtnQkFDTG9NLFNBQVMsQ0FBQy9ELEdBQUcsRUFBRXVCLE1BQU0sQ0FBQztjQUN4QjtZQUNGO1lBRUFFLFNBQVMsQ0FBQ2dKLFFBQVEsSUFBSXlELE9BQU8sR0FBR3JHLGNBQWMsR0FBR0MsUUFBUSxDQUFDO1lBRTFETyxRQUFRLElBQUl1RixPQUFPLEdBQUcsQ0FBQyxJQUFJbkQsUUFBUSxJQUFJekMsU0FBUyxDQUFDQyxRQUFRLElBQUkyRixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUNNLE9BQU8sR0FBR2hHLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUMxRztRQUNGO1FBRUE3TyxJQUFJLElBQUksQ0FBQzJOLE9BQU8sQ0FBQzVPLEtBQUssSUFBSSxDQUFDbEYsV0FBVyxJQUFJLENBQUN0USxRQUFRLElBQUlnbUIsZUFBZSxDQUFDNVgsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwRnVVLFdBQVcsS0FBSzBJLE9BQU8sSUFBSXBJLElBQUksSUFBSStILE9BQU8sS0FBS0EsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDelosZUFBZSxDQUFDLENBQUMsSUFBSXBCLFFBQVEsQ0FBQ3dTLFdBQVcsQ0FBQ29GLE9BQU8sQ0FBQyxDQUFDdlEsT0FBTyxDQUFDLFVBQVVsVyxFQUFFLEVBQUU7VUFDdEksT0FBT0EsRUFBRSxDQUFDNG1CLFNBQVMsQ0FBQ0wsUUFBUSxJQUFJNUUsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQ04sV0FBVyxDQUFDcUYsU0FBUyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRUp6RixRQUFRLElBQUksQ0FBQ2UsUUFBUSxJQUFJLENBQUN4ZCxLQUFLLElBQUl5YyxRQUFRLENBQUNuZSxJQUFJLENBQUM7UUFFakQsSUFBSWduQixZQUFZLElBQUksQ0FBQzlhLFdBQVcsRUFBRTtVQUNoQyxJQUFJZ1QsUUFBUSxFQUFFO1lBQ1osSUFBSWlJLGNBQWMsRUFBRTtjQUNsQixJQUFJSixNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUN6QjNYLFNBQVMsQ0FBQ3RILEtBQUssQ0FBQyxDQUFDLENBQUN3YSxhQUFhLENBQUMsQ0FBQyxDQUFDO2NBQ3BDLENBQUMsTUFBTSxJQUFJeUUsTUFBTSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IzWCxTQUFTLENBQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNsQyxLQUFLLENBQUMsQ0FBQztjQUNqQyxDQUFDLE1BQU0sSUFBSWlmLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQy9CM1gsU0FBUyxDQUFDcEYsT0FBTyxDQUFDLElBQUksQ0FBQztjQUN6QixDQUFDLE1BQU07Z0JBQ0xvRixTQUFTLENBQUMyWCxNQUFNLENBQUMsQ0FBQyxDQUFDO2NBQ3JCO1lBQ0Y7WUFFQTVJLFFBQVEsSUFBSUEsUUFBUSxDQUFDbmUsSUFBSSxDQUFDO1VBQzVCO1VBRUEsSUFBSWluQixPQUFPLElBQUksQ0FBQzlaLGVBQWUsRUFBRTtZQUMvQjtZQUNBcVIsUUFBUSxJQUFJeUksT0FBTyxJQUFJMVgsU0FBUyxDQUFDdlAsSUFBSSxFQUFFd2UsUUFBUSxDQUFDO1lBQ2hEYSxTQUFTLENBQUN5SCxXQUFXLENBQUMsSUFBSXZYLFNBQVMsQ0FBQ3ZQLElBQUksRUFBRXFmLFNBQVMsQ0FBQ3lILFdBQVcsQ0FBQyxDQUFDO1lBQ2pFakksSUFBSSxLQUFLK0gsT0FBTyxLQUFLLENBQUMsR0FBRzVtQixJQUFJLENBQUNtTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHa1UsU0FBUyxDQUFDeUgsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFNUUsSUFBSSxDQUFDRyxPQUFPLEVBQUU7Y0FDWjtjQUNBSCxXQUFXLEdBQUdGLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FDbkN2SCxTQUFTLENBQUN5SCxXQUFXLENBQUMsSUFBSXZYLFNBQVMsQ0FBQ3ZQLElBQUksRUFBRXFmLFNBQVMsQ0FBQ3lILFdBQVcsQ0FBQyxDQUFDO1lBQ25FO1VBQ0Y7VUFFQSxJQUFJOUgsYUFBYSxJQUFJLENBQUN5RSxRQUFRLElBQUlobEIsSUFBSSxDQUFDNEQsR0FBRyxDQUFDckMsSUFBSSxDQUFDMkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJc04sU0FBUyxDQUFDK1AsYUFBYSxDQUFDLEdBQUdBLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsSDdQLGFBQWEsQ0FBQ25QLElBQUksQ0FBQzJQLGlCQUFpQixDQUFDO1lBRXJDOFIsVUFBVSxHQUFHQSxVQUFVLENBQUNuUyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdILGFBQWEsQ0FBQ0MsU0FBUyxFQUFFMlgsTUFBTSxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQ0gsT0FBTyxFQUFFLENBQUMsQ0FBQztVQUN4RztRQUNGLENBQUMsTUFBTSxJQUFJMUgsUUFBUSxJQUFJZixRQUFRLElBQUksQ0FBQ2pTLFdBQVcsRUFBRTtVQUMvQ2lTLFFBQVEsQ0FBQ25lLElBQUksQ0FBQztRQUNoQjtNQUNGLENBQUMsQ0FBQzs7TUFHRixJQUFJc2hCLGVBQWUsRUFBRTtRQUNuQixJQUFJb0csQ0FBQyxHQUFHMVMsa0JBQWtCLEdBQUdrRixNQUFNLEdBQUdsRixrQkFBa0IsQ0FBQ3hiLFFBQVEsQ0FBQyxDQUFDLElBQUl3YixrQkFBa0IsQ0FBQzZILGFBQWEsSUFBSSxDQUFDLENBQUMsR0FBRzNDLE1BQU07UUFDdEhrSCxpQkFBaUIsQ0FBQ3NHLENBQUMsSUFBSW5ILGtCQUFrQixDQUFDL0osVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RDhLLGVBQWUsQ0FBQ29HLENBQUMsQ0FBQztNQUNwQjtNQUVBM0YsY0FBYyxJQUFJQSxjQUFjLENBQUMsQ0FBQzdILE1BQU0sR0FBR2xGLGtCQUFrQixDQUFDeGIsUUFBUSxDQUFDLENBQUMsSUFBSXdiLGtCQUFrQixDQUFDNkgsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRDdjLElBQUksQ0FBQzhLLE1BQU0sR0FBRyxVQUFVcEosS0FBSyxFQUFFb1gsT0FBTyxFQUFFO01BQ3RDLElBQUksQ0FBQzlZLElBQUksQ0FBQ3dQLE9BQU8sRUFBRTtRQUNqQnhQLElBQUksQ0FBQ3dQLE9BQU8sR0FBRyxJQUFJO1FBRW5CclMsWUFBWSxDQUFDdVIsUUFBUSxFQUFFLFFBQVEsRUFBRXdJLFNBQVMsQ0FBQztRQUUzQ2pRLFVBQVUsSUFBSTlKLFlBQVksQ0FBQ3VSLFFBQVEsRUFBRSxRQUFRLEVBQUU1USxTQUFTLENBQUM7UUFDekQ0aEIsYUFBYSxJQUFJdmlCLFlBQVksQ0FBQ3hFLGFBQWEsRUFBRSxhQUFhLEVBQUUrbUIsYUFBYSxDQUFDO1FBRTFFLElBQUloZSxLQUFLLEtBQUssS0FBSyxFQUFFO1VBQ25CMUIsSUFBSSxDQUFDc1AsUUFBUSxHQUFHeVEsWUFBWSxHQUFHLENBQUM7VUFDaENJLE9BQU8sR0FBR0MsT0FBTyxHQUFHUCxRQUFRLEdBQUd2TSxVQUFVLENBQUMsQ0FBQztRQUM3QztRQUVBd0YsT0FBTyxLQUFLLEtBQUssSUFBSTlZLElBQUksQ0FBQzhZLE9BQU8sQ0FBQyxDQUFDO01BQ3JDO0lBQ0YsQ0FBQztJQUVEOVksSUFBSSxDQUFDNGQsUUFBUSxHQUFHLFVBQVV2TCxJQUFJLEVBQUU7TUFDOUIsT0FBT0EsSUFBSSxJQUFJMk4sT0FBTyxHQUFHQSxPQUFPLENBQUM1TyxLQUFLLEdBQUdxUSxVQUFVO0lBQ3JELENBQUM7SUFFRHpoQixJQUFJLENBQUN3WixZQUFZLEdBQUcsVUFBVW1PLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVoRCxTQUFTLEVBQUU7TUFDcEU7TUFDQSxJQUFJN1Asa0JBQWtCLEVBQUU7UUFDdEI7UUFDQSxJQUFJaEMsRUFBRSxHQUFHZ0Msa0JBQWtCLENBQUN0YixhQUFhO1VBQ3JDRixRQUFRLEdBQUd3YixrQkFBa0IsQ0FBQ3hiLFFBQVEsQ0FBQyxDQUFDO1VBQ3hDc3VCLE9BQU8sR0FBRzlVLEVBQUUsQ0FBQ3NHLEdBQUcsR0FBR3RHLEVBQUUsQ0FBQ21ELEtBQUs7UUFFL0J3UixRQUFRLEdBQUczVSxFQUFFLENBQUNtRCxLQUFLLEdBQUcyUixPQUFPLEdBQUdILFFBQVEsR0FBR251QixRQUFRO1FBQ25Eb3VCLE1BQU0sR0FBRzVVLEVBQUUsQ0FBQ21ELEtBQUssR0FBRzJSLE9BQU8sR0FBR0YsTUFBTSxHQUFHcHVCLFFBQVE7TUFDakQ7TUFFQXdHLElBQUksQ0FBQzhZLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQ3pCM0MsS0FBSyxFQUFFekksVUFBVSxDQUFDaWEsUUFBUSxFQUFFRSxTQUFTLElBQUksQ0FBQyxDQUFDN25CLElBQUksQ0FBQ2lpQixXQUFXLENBQUM7UUFDNUQzSSxHQUFHLEVBQUU1TCxVQUFVLENBQUNrYSxNQUFNLEVBQUVDLFNBQVMsSUFBSSxDQUFDLENBQUM3bkIsSUFBSSxDQUFDdVosU0FBUztNQUN2RCxDQUFDLEVBQUVzTCxTQUFTLENBQUM7TUFDYjdrQixJQUFJLENBQUN3QixNQUFNLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRHhCLElBQUksQ0FBQ29aLGdCQUFnQixHQUFHLFVBQVUyTyxNQUFNLEVBQUU7TUFDeEMsSUFBSW5OLFdBQVcsSUFBSW1OLE1BQU0sRUFBRTtRQUN6QixJQUFJOXRCLENBQUMsR0FBRzJnQixXQUFXLENBQUM1ZCxPQUFPLENBQUM0VixTQUFTLENBQUN4VCxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVDd2IsV0FBVyxDQUFDM2dCLENBQUMsQ0FBQyxHQUFHZ00sVUFBVSxDQUFDMlUsV0FBVyxDQUFDM2dCLENBQUMsQ0FBQyxDQUFDLEdBQUc4dEIsTUFBTSxHQUFHcFgsR0FBRztRQUMxRGlLLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRzNVLFVBQVUsQ0FBQzJVLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHbU4sTUFBTSxHQUFHcFgsR0FBRztRQUUxRDhKLFNBQVMsQ0FBQ0csV0FBVyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQztJQUVENWEsSUFBSSxDQUFDZ0wsT0FBTyxHQUFHLFVBQVV0SixLQUFLLEVBQUVzbUIsY0FBYyxFQUFFO01BQzlDLElBQUlob0IsSUFBSSxDQUFDd1AsT0FBTyxFQUFFO1FBQ2hCOU4sS0FBSyxLQUFLLEtBQUssSUFBSTFCLElBQUksQ0FBQ29MLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQzFDcEwsSUFBSSxDQUFDd1AsT0FBTyxHQUFHeFAsSUFBSSxDQUFDeWpCLFFBQVEsR0FBRyxLQUFLO1FBQ3BDdUUsY0FBYyxJQUFJdkcsVUFBVSxJQUFJQSxVQUFVLENBQUMzWixLQUFLLENBQUMsQ0FBQztRQUNsRCtaLFVBQVUsR0FBRyxDQUFDO1FBQ2Q1QixRQUFRLEtBQUtBLFFBQVEsQ0FBQ2xJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEMySCxhQUFhLElBQUloaUIsZUFBZSxDQUFDL0UsYUFBYSxFQUFFLGFBQWEsRUFBRSttQixhQUFhLENBQUM7UUFFN0UsSUFBSWtDLGVBQWUsRUFBRTtVQUNuQkEsZUFBZSxDQUFDOVosS0FBSyxDQUFDLENBQUM7VUFDdkJrWSxPQUFPLENBQUM1TyxLQUFLLElBQUk0TyxPQUFPLENBQUM1TyxLQUFLLENBQUNqRyxJQUFJLENBQUMsQ0FBQyxLQUFLNlUsT0FBTyxDQUFDNU8sS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM5RDtRQUVBLElBQUksQ0FBQ25LLFVBQVUsRUFBRTtVQUNmLElBQUloTixDQUFDLEdBQUd5YyxTQUFTLENBQUN4YyxNQUFNO1VBRXhCLE9BQU9ELENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSXljLFNBQVMsQ0FBQ3pjLENBQUMsQ0FBQyxDQUFDeVUsUUFBUSxLQUFLQSxRQUFRLElBQUlnSSxTQUFTLENBQUN6YyxDQUFDLENBQUMsS0FBSytGLElBQUksRUFBRTtjQUMvRCxPQUFPLENBQUM7WUFDVjtVQUNGOztVQUVBdEMsZUFBZSxDQUFDZ1IsUUFBUSxFQUFFLFFBQVEsRUFBRXdJLFNBQVMsQ0FBQztVQUU5Q2pRLFVBQVUsSUFBSXZKLGVBQWUsQ0FBQ2dSLFFBQVEsRUFBRSxRQUFRLEVBQUU1USxTQUFTLENBQUM7UUFDOUQ7TUFDRjtJQUNGLENBQUM7SUFFRGtDLElBQUksQ0FBQ21MLElBQUksR0FBRyxVQUFVQyxNQUFNLEVBQUU0YyxjQUFjLEVBQUU7TUFDNUNob0IsSUFBSSxDQUFDZ0wsT0FBTyxDQUFDSSxNQUFNLEVBQUU0YyxjQUFjLENBQUM7TUFDcEN2RyxVQUFVLElBQUksQ0FBQ3VHLGNBQWMsSUFBSXZHLFVBQVUsQ0FBQ3RXLElBQUksQ0FBQyxDQUFDO01BQ2xEaEYsRUFBRSxJQUFJLE9BQU93USxJQUFJLENBQUN4USxFQUFFLENBQUM7TUFFckIsSUFBSWxNLENBQUMsR0FBR3ljLFNBQVMsQ0FBQzFaLE9BQU8sQ0FBQ2dELElBQUksQ0FBQztNQUUvQi9GLENBQUMsSUFBSSxDQUFDLElBQUl5YyxTQUFTLENBQUNyTCxNQUFNLENBQUNwUixDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ2hDQSxDQUFDLEtBQUtvUyxFQUFFLElBQUl1TixVQUFVLEdBQUcsQ0FBQyxJQUFJdk4sRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwQzs7TUFFQXBTLENBQUMsR0FBRyxDQUFDO01BRUx5YyxTQUFTLENBQUN0RCxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTtRQUM3QixPQUFPQSxDQUFDLENBQUMyTyxRQUFRLEtBQUsxTyxJQUFJLENBQUMwTyxRQUFRLEtBQUt6VSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ2hELENBQUMsQ0FBQztNQUVGQSxDQUFDLElBQUlpZSxjQUFjLEtBQUtsWSxJQUFJLENBQUNrYSxNQUFNLENBQUMvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO01BRTVDLElBQUkvSSxTQUFTLEVBQUU7UUFDYkEsU0FBUyxDQUFDMVYsYUFBYSxHQUFHLElBQUk7UUFDOUIwUixNQUFNLElBQUlnRSxTQUFTLENBQUNoRSxNQUFNLENBQUM7VUFDekJELElBQUksRUFBRTtRQUNSLENBQUMsQ0FBQztRQUNGNmMsY0FBYyxJQUFJNVksU0FBUyxDQUFDakUsSUFBSSxDQUFDLENBQUM7TUFDcEM7TUFFQWtWLFdBQVcsSUFBSSxDQUFDQSxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLGdCQUFnQixDQUFDLENBQUNwTixPQUFPLENBQUMsVUFBVXdKLENBQUMsRUFBRTtRQUNqRyxPQUFPQSxDQUFDLENBQUM5QixVQUFVLElBQUk4QixDQUFDLENBQUM5QixVQUFVLENBQUNyQyxXQUFXLENBQUNtRSxDQUFDLENBQUM7TUFDcEQsQ0FBQyxDQUFDO01BQ0YvQyxRQUFRLEtBQUs3WixJQUFJLEtBQUs2WixRQUFRLEdBQUcsQ0FBQyxDQUFDO01BRW5DLElBQUliLEdBQUcsRUFBRTtRQUNQaUgsUUFBUSxLQUFLQSxRQUFRLENBQUNsSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDOWQsQ0FBQyxHQUFHLENBQUM7UUFFTHljLFNBQVMsQ0FBQ3RELE9BQU8sQ0FBQyxVQUFVclQsQ0FBQyxFQUFFO1VBQzdCLE9BQU9BLENBQUMsQ0FBQ2laLEdBQUcsS0FBS0EsR0FBRyxJQUFJL2UsQ0FBQyxFQUFFO1FBQzdCLENBQUMsQ0FBQztRQUVGQSxDQUFDLEtBQUtnbUIsUUFBUSxDQUFDMUYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUI7O01BRUEvVyxJQUFJLENBQUN5a0IsTUFBTSxJQUFJemtCLElBQUksQ0FBQ3lrQixNQUFNLENBQUNqb0IsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRDBXLFNBQVMsQ0FBQzlaLElBQUksQ0FBQ29ELElBQUksQ0FBQztJQUVwQkEsSUFBSSxDQUFDOEssTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDekJrWCxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNoaUIsSUFBSSxDQUFDO0lBRTlDLElBQUlvUCxTQUFTLElBQUlBLFNBQVMsQ0FBQzJVLEdBQUcsSUFBSSxDQUFDcEQsTUFBTSxFQUFFO01BQ3pDO01BQ0EsSUFBSXVILFVBQVUsR0FBR2xvQixJQUFJLENBQUN3QixNQUFNLENBQUMsQ0FBQzs7TUFFOUJ4QixJQUFJLENBQUN3QixNQUFNLEdBQUcsWUFBWTtRQUN4QnhCLElBQUksQ0FBQ3dCLE1BQU0sR0FBRzBtQixVQUFVO1FBQ3hCL1IsS0FBSyxJQUFJbUQsR0FBRyxJQUFJdFosSUFBSSxDQUFDOFksT0FBTyxDQUFDLENBQUM7TUFDaEMsQ0FBQztNQUVEcGdCLElBQUksQ0FBQzRRLFdBQVcsQ0FBQyxJQUFJLEVBQUV0SixJQUFJLENBQUN3QixNQUFNLENBQUM7TUFDbkNtZixNQUFNLEdBQUcsSUFBSTtNQUNieEssS0FBSyxHQUFHbUQsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQyxNQUFNO01BQ0x0WixJQUFJLENBQUM4WSxPQUFPLENBQUMsQ0FBQztJQUNoQjtJQUVBRSxHQUFHLElBQUlWLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCLENBQUM7O0VBRUQzZixhQUFhLENBQUM4UyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ2xQLElBQUksRUFBRTtJQUMvQyxJQUFJLENBQUN4QixZQUFZLEVBQUU7TUFDakJyQyxJQUFJLEdBQUc2RCxJQUFJLElBQUlaLFFBQVEsQ0FBQyxDQUFDO01BQ3pCcVMsYUFBYSxDQUFDLENBQUMsSUFBSS9VLE1BQU0sQ0FBQ3dKLFFBQVEsSUFBSTlKLGFBQWEsQ0FBQ21TLE1BQU0sQ0FBQyxDQUFDO01BQzVEL1AsWUFBWSxHQUFHdVMsUUFBUTtJQUN6QjtJQUVBLE9BQU92UyxZQUFZO0VBQ3JCLENBQUM7RUFFRHBDLGFBQWEsQ0FBQ3VZLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDN1EsTUFBTSxFQUFFO0lBQ2pELElBQUlBLE1BQU0sRUFBRTtNQUNWLEtBQUssSUFBSXJCLENBQUMsSUFBSXFCLE1BQU0sRUFBRTtRQUNwQnlULFNBQVMsQ0FBQzlVLENBQUMsQ0FBQyxHQUFHcUIsTUFBTSxDQUFDckIsQ0FBQyxDQUFDO01BQzFCO0lBQ0Y7SUFFQSxPQUFPOFUsU0FBUztFQUNsQixDQUFDO0VBRURuYixhQUFhLENBQUNxUyxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQ3RKLEtBQUssRUFBRXlKLElBQUksRUFBRTtJQUNwRG1DLFFBQVEsR0FBRyxDQUFDO0lBRVpvSixTQUFTLENBQUN0RCxPQUFPLENBQUMsVUFBVXpaLE9BQU8sRUFBRTtNQUNuQyxPQUFPQSxPQUFPLENBQUN3UixJQUFJLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDekosS0FBSyxDQUFDO0lBQ2xELENBQUMsQ0FBQztJQUVGaEUsZUFBZSxDQUFDekMsSUFBSSxFQUFFLE9BQU8sRUFBRTZDLFNBQVMsQ0FBQztJQUV6Q0osZUFBZSxDQUFDeEMsSUFBSSxFQUFFLFFBQVEsRUFBRTRDLFNBQVMsQ0FBQztJQUUxQ3FxQixhQUFhLENBQUNsYyxhQUFhLENBQUM7SUFFNUJ2TyxlQUFlLENBQUN4QyxJQUFJLEVBQUUsYUFBYSxFQUFFNFMsWUFBWSxDQUFDO0lBRWxEcFEsZUFBZSxDQUFDdEMsS0FBSyxFQUFFLFlBQVksRUFBRTBTLFlBQVksQ0FBQztJQUVsRG1GLGNBQWMsQ0FBQ3ZWLGVBQWUsRUFBRXhDLElBQUksRUFBRSxrQ0FBa0MsRUFBRTBTLG1CQUFtQixDQUFDO0lBRTlGcUYsY0FBYyxDQUFDdlYsZUFBZSxFQUFFeEMsSUFBSSxFQUFFLDRCQUE0QixFQUFFMlMsaUJBQWlCLENBQUM7SUFFdEYvQixZQUFZLENBQUNYLElBQUksQ0FBQyxDQUFDO0lBRW5CMkQsbUJBQW1CLENBQUNwUixlQUFlLENBQUM7SUFFcEMsS0FBSyxJQUFJekQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNkIsb0RBQVUsQ0FBQzVCLE1BQU0sRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM3Q29aLGNBQWMsQ0FBQzNWLGVBQWUsRUFBRTVCLG9EQUFVLENBQUM3QixDQUFDLENBQUMsRUFBRTZCLG9EQUFVLENBQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFFakVvWixjQUFjLENBQUMzVixlQUFlLEVBQUU1QixvREFBVSxDQUFDN0IsQ0FBQyxDQUFDLEVBQUU2QixvREFBVSxDQUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FO0VBQ0YsQ0FBQztFQUVEdEIsYUFBYSxDQUFDbVMsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztJQUN2QzdQLElBQUksR0FBR2hDLE1BQU07SUFDYmlDLElBQUksR0FBR3VILFFBQVE7SUFDZnRILE1BQU0sR0FBR0QsSUFBSSxDQUFDeUgsZUFBZTtJQUM3QnZILEtBQUssR0FBR0YsSUFBSSxDQUFDd0gsSUFBSTtJQUVqQixJQUFJaEssSUFBSSxFQUFFO01BQ1JxVCxRQUFRLEdBQUdyVCxJQUFJLENBQUN5SCxLQUFLLENBQUNDLE9BQU87TUFDN0JwRixNQUFNLEdBQUd0QyxJQUFJLENBQUN5SCxLQUFLLENBQUN5QyxLQUFLO01BQ3pCbEgsUUFBUSxHQUFHaEQsSUFBSSxDQUFDNkQsSUFBSSxDQUFDc0csT0FBTyxJQUFJaUwsWUFBWTtNQUM1Q3BCLG1CQUFtQixHQUFHaFUsSUFBSSxDQUFDNkQsSUFBSSxDQUFDNnJCLGtCQUFrQixJQUFJdGEsWUFBWTtNQUNsRWQsa0JBQWtCLEdBQUcvUixJQUFJLENBQUNvRCxPQUFPLENBQUNDLGlCQUFpQixJQUFJLE1BQU07TUFDN0RxYixXQUFXLEdBQUcxZSxJQUFJLENBQUM0RSxXQUFXO01BQzlCbkgsSUFBSSxDQUFDNkQsSUFBSSxDQUFDZ0csT0FBTyxDQUFDLGVBQWUsRUFBRTVKLGFBQWEsQ0FBQyxDQUFDLENBQUM7O01BRW5ELElBQUl5QyxLQUFLLEVBQUU7UUFDVGtTLFFBQVEsR0FBRyxDQUFDO1FBQ1pMLFNBQVMsR0FBR3hLLFFBQVEsQ0FBQ3dTLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztRQUUzQ2hJLFNBQVMsQ0FBQzhELEtBQUssQ0FBQ3hDLE1BQU0sR0FBRyxPQUFPO1FBQ2hDdEIsU0FBUyxDQUFDOEQsS0FBSyxDQUFDRCxRQUFRLEdBQUcsVUFBVTtRQUVyQ3lILGFBQWEsQ0FBQyxDQUFDO1FBRWY1SyxVQUFVLENBQUMsQ0FBQztRQUVaN0ssa0RBQVEsQ0FBQzJJLFFBQVEsQ0FBQy9TLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBRXpCQyxhQUFhLENBQUNvSyxPQUFPLEdBQUdELGtEQUFRLENBQUNDLE9BQU87UUFDeENnSyxVQUFVLEdBQUdqSyxrREFBUSxDQUFDQyxPQUFPLElBQUkseUJBQXlCLENBQUNrYSxJQUFJLENBQUMvWixTQUFTLENBQUNtbEIsU0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFFdEZsckIsWUFBWSxDQUFDbEMsSUFBSSxFQUFFLE9BQU8sRUFBRTZDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1FBR3hDdkMsS0FBSyxHQUFHLENBQUNOLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssQ0FBQztRQUVuQyxJQUFJMUMsSUFBSSxDQUFDc0ssVUFBVSxFQUFFO1VBQ25CckssYUFBYSxDQUFDcUssVUFBVSxHQUFHLFVBQVVRLElBQUksRUFBRTtZQUN6QyxJQUFJOGtCLEVBQUUsR0FBRzV2QixJQUFJLENBQUNzSyxVQUFVLENBQUMsQ0FBQztjQUN0QmhFLENBQUM7WUFFTCxLQUFLQSxDQUFDLElBQUl3RSxJQUFJLEVBQUU7Y0FDZDhrQixFQUFFLENBQUN2RSxHQUFHLENBQUMva0IsQ0FBQyxFQUFFd0UsSUFBSSxDQUFDeEUsQ0FBQyxDQUFDLENBQUM7WUFDcEI7WUFFQSxPQUFPc3BCLEVBQUU7VUFDWCxDQUFDO1VBRUQ1dkIsSUFBSSxDQUFDOEUsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsWUFBWTtZQUNsRCxPQUFPd2EsVUFBVSxDQUFDLENBQUM7VUFDckIsQ0FBQyxDQUFDO1VBQ0Z0ZixJQUFJLENBQUM4RSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO1lBQ3BELE9BQU9tYSxlQUFlLENBQUMsQ0FBQztVQUMxQixDQUFDLENBQUM7VUFDRmpmLElBQUksQ0FBQzhFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFZO1lBQzlDZ2EsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFakJSLFNBQVMsQ0FBQyxZQUFZLENBQUM7VUFDekIsQ0FBQyxDQUFDO1VBQ0Z0ZSxJQUFJLENBQUNzSyxVQUFVLENBQUMseUJBQXlCLEVBQUUsWUFBWTtZQUNyRDtZQUNBaVUsa0JBQWtCLENBQUMsQ0FBQztZQUVwQixPQUFPQSxrQkFBa0I7VUFDM0IsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0w5ZCxPQUFPLENBQUNvSCxJQUFJLENBQUMsK0JBQStCLENBQUM7UUFDL0M7UUFFQTBXLGtCQUFrQixDQUFDLENBQUM7UUFFcEI5WixZQUFZLENBQUNqQyxJQUFJLEVBQUUsUUFBUSxFQUFFNEMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7UUFHekMsSUFBSXlxQixTQUFTLEdBQUdudEIsS0FBSyxDQUFDMlYsS0FBSztVQUN2QnlYLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxjQUFjO1VBQ2pDQyxjQUFjLEdBQUdod0IsSUFBSSxDQUFDNkQsSUFBSSxDQUFDOUQsU0FBUyxDQUFDcUMsU0FBUztVQUM5QytXLE1BQU07VUFDTjVYLENBQUM7UUFDTHl1QixjQUFjLENBQUN0ZCxNQUFNLElBQUk3USxNQUFNLENBQUNDLGNBQWMsQ0FBQ2t1QixjQUFjLEVBQUUsUUFBUSxFQUFFO1VBQ3ZFcnNCLEtBQUssRUFBRSxTQUFTQSxLQUFLQSxDQUFBLEVBQUc7WUFDdEIsT0FBTyxJQUFJLENBQUMyZCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1VBQy9CO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFSnVPLFNBQVMsQ0FBQ0UsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDOztRQUVwQzVXLE1BQU0sR0FBR3JELFVBQVUsQ0FBQ3BULEtBQUssQ0FBQztRQUMxQnNFLG1EQUFTLENBQUNrZCxDQUFDLEdBQUduZSxJQUFJLENBQUNDLEtBQUssQ0FBQ21ULE1BQU0sQ0FBQ3FDLEdBQUcsR0FBR3hVLG1EQUFTLENBQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7UUFFNURULHFEQUFXLENBQUM4ZCxDQUFDLEdBQUduZSxJQUFJLENBQUNDLEtBQUssQ0FBQ21ULE1BQU0sQ0FBQ3NDLElBQUksR0FBR3JWLHFEQUFXLENBQUNTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9EaXBCLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxjQUFjLEdBQUdELE1BQU0sR0FBR0QsU0FBUyxDQUFDL00sY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7UUFFM0Z2UCxhQUFhLEdBQUcwYyxXQUFXLENBQUM5UixLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQ3ZDbmUsSUFBSSxDQUFDNFEsV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZO1VBQ2hDLE9BQU8xTixRQUFRLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRnVCLFlBQVksQ0FBQ2pDLElBQUksRUFBRSxhQUFhLEVBQUU0UyxZQUFZLENBQUMsQ0FBQyxDQUFDOztRQUdqRDNRLFlBQVksQ0FBQy9CLEtBQUssRUFBRSxZQUFZLEVBQUUwUyxZQUFZLENBQUMsQ0FBQyxDQUFDOztRQUdqRG1GLGNBQWMsQ0FBQzlWLFlBQVksRUFBRWpDLElBQUksRUFBRSxrQ0FBa0MsRUFBRTBTLG1CQUFtQixDQUFDO1FBRTNGcUYsY0FBYyxDQUFDOVYsWUFBWSxFQUFFakMsSUFBSSxFQUFFLDRCQUE0QixFQUFFMlMsaUJBQWlCLENBQUM7UUFFbkZ6QixjQUFjLEdBQUcxVCxJQUFJLENBQUN5SCxLQUFLLENBQUN5b0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUVwRHhPLFdBQVcsQ0FBQ3hkLElBQUksQ0FBQ3dQLGNBQWMsQ0FBQztRQUVoQ3JSLFlBQVksR0FBR2lCLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCOFAsWUFBWSxHQUFHcFQsSUFBSSxDQUFDNFEsV0FBVyxDQUFDLEdBQUcsRUFBRWtPLFdBQVcsQ0FBQyxDQUFDMVAsS0FBSyxDQUFDLENBQUM7UUFDekQwRSxZQUFZLEdBQUcsQ0FBQ3RSLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZO1VBQ3BELElBQUkydEIsQ0FBQyxHQUFHNXRCLElBQUksQ0FBQ3FULFVBQVU7WUFDbkJ3YSxDQUFDLEdBQUc3dEIsSUFBSSxDQUFDdVAsV0FBVztVQUV4QixJQUFJdFAsSUFBSSxDQUFDNnRCLE1BQU0sRUFBRTtZQUNmemMsVUFBVSxHQUFHdWMsQ0FBQztZQUNkdGMsV0FBVyxHQUFHdWMsQ0FBQztVQUNqQixDQUFDLE1BQU0sSUFBSXhjLFVBQVUsS0FBS3VjLENBQUMsSUFBSXRjLFdBQVcsS0FBS3VjLENBQUMsRUFBRTtZQUNoRDVSLFNBQVMsQ0FBQyxDQUFDO1VBQ2I7UUFDRixDQUFDLEVBQUVoYyxJQUFJLEVBQUUsa0JBQWtCLEVBQUVzYyxXQUFXLEVBQUV2YyxJQUFJLEVBQUUsTUFBTSxFQUFFdWMsV0FBVyxFQUFFdmMsSUFBSSxFQUFFLFFBQVEsRUFBRWljLFNBQVMsQ0FBQztRQUUvRnBJLG1CQUFtQixDQUFDM1IsWUFBWSxDQUFDO1FBRWpDdVosU0FBUyxDQUFDdEQsT0FBTyxDQUFDLFVBQVV6WixPQUFPLEVBQUU7VUFDbkMsT0FBT0EsT0FBTyxDQUFDbVIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsS0FBSzdRLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzZCLG9EQUFVLENBQUM1QixNQUFNLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDekNvWixjQUFjLENBQUMzVixlQUFlLEVBQUU1QixvREFBVSxDQUFDN0IsQ0FBQyxDQUFDLEVBQUU2QixvREFBVSxDQUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBRWpFb1osY0FBYyxDQUFDM1YsZUFBZSxFQUFFNUIsb0RBQVUsQ0FBQzdCLENBQUMsQ0FBQyxFQUFFNkIsb0RBQVUsQ0FBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRTtNQUNGO0lBQ0Y7RUFDRixDQUFDO0VBRUR0QixhQUFhLENBQUMwSCxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQ21ELElBQUksRUFBRTtJQUMzQyxnQkFBZ0IsSUFBSUEsSUFBSSxLQUFLMkosZUFBZSxHQUFHLENBQUMsQ0FBQzNKLElBQUksQ0FBQ3dsQixjQUFjLENBQUM7SUFDckUsSUFBSUMsRUFBRSxHQUFHemxCLElBQUksQ0FBQzBsQixZQUFZO0lBQzFCRCxFQUFFLElBQUlkLGFBQWEsQ0FBQ2xjLGFBQWEsQ0FBQyxJQUFJLENBQUNBLGFBQWEsR0FBR2dkLEVBQUUsS0FBS04sV0FBVyxDQUFDOVIsS0FBSyxFQUFFb1MsRUFBRSxDQUFDO0lBQ3BGLG9CQUFvQixJQUFJemxCLElBQUksS0FBS29KLG1CQUFtQixHQUFHalUsYUFBYSxDQUFDb0ssT0FBTyxLQUFLLENBQUMsSUFBSVMsSUFBSSxDQUFDMmxCLGtCQUFrQixDQUFDO0lBRTlHLElBQUksbUJBQW1CLElBQUkzbEIsSUFBSSxFQUFFO01BQy9Cc0wsbUJBQW1CLENBQUNwUixlQUFlLENBQUMsSUFBSW9SLG1CQUFtQixDQUFDM1IsWUFBWSxFQUFFcUcsSUFBSSxDQUFDNGxCLGlCQUFpQixJQUFJLE1BQU0sQ0FBQztNQUMzR3pjLGFBQWEsR0FBRyxDQUFDbkosSUFBSSxDQUFDNGxCLGlCQUFpQixHQUFHLEVBQUUsRUFBRXBzQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFO0VBQ0YsQ0FBQztFQUVEckUsYUFBYSxDQUFDMHdCLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDdHZCLE1BQU0sRUFBRXlKLElBQUksRUFBRTtJQUNqRSxJQUFJekQsQ0FBQyxHQUFHRCx3REFBVSxDQUFDL0YsTUFBTSxDQUFDO01BQ3RCRSxDQUFDLEdBQUc2QixvREFBVSxDQUFDa0IsT0FBTyxDQUFDK0MsQ0FBQyxDQUFDO01BQ3pCa0gsVUFBVSxHQUFHaEssV0FBVyxDQUFDOEMsQ0FBQyxDQUFDO0lBRS9CLElBQUksQ0FBQzlGLENBQUMsRUFBRTtNQUNONkIsb0RBQVUsQ0FBQ3VQLE1BQU0sQ0FBQ3BSLENBQUMsRUFBRWdOLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDO0lBRUEsSUFBSXpELElBQUksRUFBRTtNQUNSeUQsVUFBVSxHQUFHbEwsa0RBQVEsQ0FBQ2lxQixPQUFPLENBQUMvcUIsSUFBSSxFQUFFdUksSUFBSSxFQUFFcEksS0FBSyxFQUFFb0ksSUFBSSxFQUFFckksTUFBTSxFQUFFcUksSUFBSSxDQUFDLEdBQUd6SCxrREFBUSxDQUFDaXFCLE9BQU8sQ0FBQ2ptQixDQUFDLEVBQUV5RCxJQUFJLENBQUM7SUFDbEc7RUFDRixDQUFDO0VBRUQ3SyxhQUFhLENBQUMyd0IsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUN6UixLQUFLLEVBQUU7SUFDOURuQixTQUFTLENBQUN0RCxPQUFPLENBQUMsVUFBVXJULENBQUMsRUFBRTtNQUM3QixPQUFPQSxDQUFDLENBQUNFLElBQUksSUFBSUYsQ0FBQyxDQUFDRSxJQUFJLENBQUM0WCxLQUFLLEtBQUtBLEtBQUssSUFBSTlYLENBQUMsQ0FBQ0UsSUFBSSxDQUFDa0wsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEUsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEeFMsYUFBYSxDQUFDNHdCLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDendCLE9BQU8sRUFBRW9sQixLQUFLLEVBQUVoRixVQUFVLEVBQUU7SUFDN0UsSUFBSXJILE1BQU0sR0FBRyxDQUFDckUsU0FBUyxDQUFDMVUsT0FBTyxDQUFDLEdBQUdnSCx3REFBVSxDQUFDaEgsT0FBTyxDQUFDLEdBQUdBLE9BQU8sRUFBRWdaLHFCQUFxQixDQUFDLENBQUM7TUFDckZqVCxNQUFNLEdBQUdnVCxNQUFNLENBQUNxSCxVQUFVLEdBQUdqSixNQUFNLEdBQUdDLE9BQU8sQ0FBQyxHQUFHZ08sS0FBSyxJQUFJLENBQUM7SUFDL0QsT0FBT2hGLFVBQVUsR0FBR3JILE1BQU0sQ0FBQ3lDLEtBQUssR0FBR3pWLE1BQU0sR0FBRyxDQUFDLElBQUlnVCxNQUFNLENBQUNzQyxJQUFJLEdBQUd0VixNQUFNLEdBQUc1RCxJQUFJLENBQUNxVCxVQUFVLEdBQUd1RCxNQUFNLENBQUN3QyxNQUFNLEdBQUd4VixNQUFNLEdBQUcsQ0FBQyxJQUFJZ1QsTUFBTSxDQUFDcUMsR0FBRyxHQUFHclYsTUFBTSxHQUFHNUQsSUFBSSxDQUFDdVAsV0FBVztFQUNoSyxDQUFDO0VBRUQ3UixhQUFhLENBQUM2d0Isa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDMXdCLE9BQU8sRUFBRTJ3QixjQUFjLEVBQUV2USxVQUFVLEVBQUU7SUFDbEcxTCxTQUFTLENBQUMxVSxPQUFPLENBQUMsS0FBS0EsT0FBTyxHQUFHZ0gsd0RBQVUsQ0FBQ2hILE9BQU8sQ0FBQyxDQUFDO0lBQ3JELElBQUkrWSxNQUFNLEdBQUcvWSxPQUFPLENBQUNnWixxQkFBcUIsQ0FBQyxDQUFDO01BQ3hDMEMsSUFBSSxHQUFHM0MsTUFBTSxDQUFDcUgsVUFBVSxHQUFHakosTUFBTSxHQUFHQyxPQUFPLENBQUM7TUFDNUNyUixNQUFNLEdBQUc0cUIsY0FBYyxJQUFJLElBQUksR0FBR2pWLElBQUksR0FBRyxDQUFDLEdBQUdpVixjQUFjLElBQUl4VixTQUFTLEdBQUdBLFNBQVMsQ0FBQ3dWLGNBQWMsQ0FBQyxHQUFHalYsSUFBSSxHQUFHLENBQUNpVixjQUFjLENBQUN6c0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHaUosVUFBVSxDQUFDd2pCLGNBQWMsQ0FBQyxHQUFHalYsSUFBSSxHQUFHLEdBQUcsR0FBR3ZPLFVBQVUsQ0FBQ3dqQixjQUFjLENBQUMsSUFBSSxDQUFDO0lBQzFOLE9BQU92USxVQUFVLEdBQUcsQ0FBQ3JILE1BQU0sQ0FBQ3NDLElBQUksR0FBR3RWLE1BQU0sSUFBSTVELElBQUksQ0FBQ3FULFVBQVUsR0FBRyxDQUFDdUQsTUFBTSxDQUFDcUMsR0FBRyxHQUFHclYsTUFBTSxJQUFJNUQsSUFBSSxDQUFDdVAsV0FBVztFQUN6RyxDQUFDO0VBRUQ3UixhQUFhLENBQUMrd0IsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUNDLGNBQWMsRUFBRTtJQUN2RGpULFNBQVMsQ0FBQy9LLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3lILE9BQU8sQ0FBQyxVQUFVclQsQ0FBQyxFQUFFO01BQ3RDLE9BQU9BLENBQUMsQ0FBQ3lELElBQUksQ0FBQzJDLEVBQUUsS0FBSyxnQkFBZ0IsSUFBSXBHLENBQUMsQ0FBQ29MLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQztJQUVGLElBQUl3ZSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLElBQUlDLFNBQVMsR0FBR3ZTLFVBQVUsQ0FBQ3FTLE9BQU8sSUFBSSxFQUFFO01BQ3hDclMsVUFBVSxHQUFHLENBQUMsQ0FBQztNQUNmdVMsU0FBUyxDQUFDeFcsT0FBTyxDQUFDLFVBQVVsVixDQUFDLEVBQUU7UUFDN0IsT0FBT0EsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFFRCxPQUFPdkYsYUFBYTtBQUN0QixDQUFDLENBQUMsQ0FBQztBQUNIQSxhQUFhLENBQUM0UyxPQUFPLEdBQUcsUUFBUTtBQUVoQzVTLGFBQWEsQ0FBQ2t4QixVQUFVLEdBQUcsVUFBVWxHLE9BQU8sRUFBRTtFQUM1QyxPQUFPQSxPQUFPLEdBQUc1WCxRQUFRLENBQUM0WCxPQUFPLENBQUMsQ0FBQ3ZRLE9BQU8sQ0FBQyxVQUFVclosTUFBTSxFQUFFO0lBQzNEO0lBQ0EsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNnWCxLQUFLLEVBQUU7TUFDMUIsSUFBSTlXLENBQUMsR0FBR3lkLFlBQVksQ0FBQzFhLE9BQU8sQ0FBQ2pELE1BQU0sQ0FBQztNQUVwQ0UsQ0FBQyxJQUFJLENBQUMsSUFBSXlkLFlBQVksQ0FBQ3JNLE1BQU0sQ0FBQ3BSLENBQUMsRUFBRSxDQUFDLENBQUM7TUFFbkN5ZCxZQUFZLENBQUM5YSxJQUFJLENBQUM3QyxNQUFNLEVBQUVBLE1BQU0sQ0FBQ2dYLEtBQUssQ0FBQzRFLE9BQU8sRUFBRTViLE1BQU0sQ0FBQytkLE9BQU8sSUFBSS9kLE1BQU0sQ0FBQyt2QixZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUVweEIsSUFBSSxDQUFDNkQsSUFBSSxDQUFDZ2YsUUFBUSxDQUFDeGhCLE1BQU0sQ0FBQyxFQUFFMkIsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3STtFQUNGLENBQUMsQ0FBQyxHQUFHZ2MsWUFBWTtBQUNuQixDQUFDO0FBRUQvZSxhQUFhLENBQUN5UyxNQUFNLEdBQUcsVUFBVXdaLElBQUksRUFBRWhOLEtBQUssRUFBRTtFQUM1QyxPQUFPSSxVQUFVLENBQUMsQ0FBQzRNLElBQUksRUFBRWhOLEtBQUssQ0FBQztBQUNqQyxDQUFDO0FBRURqZixhQUFhLENBQUM2UyxNQUFNLEdBQUcsVUFBVWhJLElBQUksRUFBRTRMLFNBQVMsRUFBRTtFQUNoRCxPQUFPLElBQUl6VyxhQUFhLENBQUM2SyxJQUFJLEVBQUU0TCxTQUFTLENBQUM7QUFDM0MsQ0FBQztBQUVEelcsYUFBYSxDQUFDbWdCLE9BQU8sR0FBRyxVQUFVaVIsSUFBSSxFQUFFO0VBQ3RDLE9BQU9BLElBQUksR0FBRzdTLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ25jLFlBQVksSUFBSXBDLGFBQWEsQ0FBQzhTLFFBQVEsQ0FBQyxDQUFDLEtBQUsrTCxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQzdGLENBQUM7QUFFRDdlLGFBQWEsQ0FBQzZJLE1BQU0sR0FBRyxVQUFVQyxLQUFLLEVBQUU7RUFDdEMsT0FBTyxFQUFFM0Ysb0RBQVUsQ0FBQ2tDLEtBQUssSUFBSThZLFVBQVUsQ0FBQ3JWLEtBQUssS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQ5SSxhQUFhLENBQUNxeEIsaUJBQWlCLEdBQUcvUixrQkFBa0I7QUFFcER0ZixhQUFhLENBQUNzeEIsU0FBUyxHQUFHLFVBQVVueEIsT0FBTyxFQUFFb2dCLFVBQVUsRUFBRTtFQUN2RCxPQUFPdEssVUFBVSxDQUFDOVYsT0FBTyxFQUFFb2dCLFVBQVUsR0FBR3BhLHFEQUFXLEdBQUdZLG1EQUFTLENBQUM7QUFDbEUsQ0FBQztBQUVEL0csYUFBYSxDQUFDdXhCLGFBQWEsR0FBRyxVQUFVcHhCLE9BQU8sRUFBRW9nQixVQUFVLEVBQUU7RUFDM0QsT0FBTzFZLDREQUFjLENBQUNWLHdEQUFVLENBQUNoSCxPQUFPLENBQUMsRUFBRW9nQixVQUFVLEdBQUdwYSxxREFBVyxHQUFHWSxtREFBUyxDQUFDO0FBQ2xGLENBQUM7QUFFRC9HLGFBQWEsQ0FBQ2lULE9BQU8sR0FBRyxVQUFVekYsRUFBRSxFQUFFO0VBQ3BDLE9BQU93USxJQUFJLENBQUN4USxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUVEeE4sYUFBYSxDQUFDK1MsTUFBTSxHQUFHLFlBQVk7RUFDakMsT0FBT2dMLFNBQVMsQ0FBQ3pMLE1BQU0sQ0FBQyxVQUFVbEwsQ0FBQyxFQUFFO0lBQ25DLE9BQU9BLENBQUMsQ0FBQ3lELElBQUksQ0FBQzJDLEVBQUUsS0FBSyxnQkFBZ0I7RUFDdkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7O0FBR0h4TixhQUFhLENBQUN3eEIsV0FBVyxHQUFHLFlBQVk7RUFDdEMsT0FBTyxDQUFDLENBQUM5YyxlQUFlO0FBQzFCLENBQUM7QUFFRDFVLGFBQWEsQ0FBQ3l4QixlQUFlLEdBQUc5WCxnQkFBZ0I7QUFFaEQzWixhQUFhLENBQUM2RSxnQkFBZ0IsR0FBRyxVQUFVSixJQUFJLEVBQUUrVixRQUFRLEVBQUU7RUFDekQsSUFBSTdULENBQUMsR0FBRytYLFVBQVUsQ0FBQ2phLElBQUksQ0FBQyxLQUFLaWEsVUFBVSxDQUFDamEsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBQ25ELENBQUNrQyxDQUFDLENBQUN0QyxPQUFPLENBQUNtVyxRQUFRLENBQUMsSUFBSTdULENBQUMsQ0FBQzFDLElBQUksQ0FBQ3VXLFFBQVEsQ0FBQztBQUMxQyxDQUFDO0FBRUR4YSxhQUFhLENBQUNnRixtQkFBbUIsR0FBRyxVQUFVUCxJQUFJLEVBQUUrVixRQUFRLEVBQUU7RUFDNUQsSUFBSTdULENBQUMsR0FBRytYLFVBQVUsQ0FBQ2phLElBQUksQ0FBQztJQUNwQm5ELENBQUMsR0FBR3FGLENBQUMsSUFBSUEsQ0FBQyxDQUFDdEMsT0FBTyxDQUFDbVcsUUFBUSxDQUFDO0VBQ2hDbFosQ0FBQyxJQUFJLENBQUMsSUFBSXFGLENBQUMsQ0FBQytMLE1BQU0sQ0FBQ3BSLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUVEdEIsYUFBYSxDQUFDMHhCLEtBQUssR0FBRyxVQUFVMUcsT0FBTyxFQUFFbmdCLElBQUksRUFBRTtFQUM3QyxJQUFJaU0sTUFBTSxHQUFHLEVBQUU7SUFDWDZhLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDYkMsUUFBUSxHQUFHL21CLElBQUksQ0FBQyttQixRQUFRLElBQUksS0FBSztJQUNqQ0MsUUFBUSxHQUFHaG5CLElBQUksQ0FBQ2duQixRQUFRLElBQUksR0FBRztJQUMvQkMsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUNydEIsSUFBSSxFQUFFK1YsUUFBUSxFQUFFO01BQ3pELElBQUl1WCxRQUFRLEdBQUcsRUFBRTtRQUNiQyxRQUFRLEdBQUcsRUFBRTtRQUNiN0gsS0FBSyxHQUFHcHFCLElBQUksQ0FBQzRRLFdBQVcsQ0FBQ2loQixRQUFRLEVBQUUsWUFBWTtVQUNqRHBYLFFBQVEsQ0FBQ3VYLFFBQVEsRUFBRUMsUUFBUSxDQUFDO1VBQzVCRCxRQUFRLEdBQUcsRUFBRTtVQUNiQyxRQUFRLEdBQUcsRUFBRTtRQUNmLENBQUMsQ0FBQyxDQUFDN2lCLEtBQUssQ0FBQyxDQUFDO01BQ1YsT0FBTyxVQUFVOUgsSUFBSSxFQUFFO1FBQ3JCMHFCLFFBQVEsQ0FBQ3h3QixNQUFNLElBQUk0b0IsS0FBSyxDQUFDOVksT0FBTyxDQUFDLElBQUksQ0FBQztRQUN0QzBnQixRQUFRLENBQUM5dEIsSUFBSSxDQUFDb0QsSUFBSSxDQUFDckcsT0FBTyxDQUFDO1FBQzNCZ3hCLFFBQVEsQ0FBQy90QixJQUFJLENBQUNvRCxJQUFJLENBQUM7UUFDbkJ3cUIsUUFBUSxJQUFJRSxRQUFRLENBQUN4d0IsTUFBTSxJQUFJNG9CLEtBQUssQ0FBQ3hULFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFDbEQsQ0FBQztJQUNILENBQUM7SUFDR3RRLENBQUM7RUFFTCxLQUFLQSxDQUFDLElBQUl3RSxJQUFJLEVBQUU7SUFDZDhtQixRQUFRLENBQUN0ckIsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQ3lPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJdUIsV0FBVyxDQUFDeEwsSUFBSSxDQUFDeEUsQ0FBQyxDQUFDLENBQUMsSUFBSUEsQ0FBQyxLQUFLLGVBQWUsR0FBR3lyQixhQUFhLENBQUN6ckIsQ0FBQyxFQUFFd0UsSUFBSSxDQUFDeEUsQ0FBQyxDQUFDLENBQUMsR0FBR3dFLElBQUksQ0FBQ3hFLENBQUMsQ0FBQztFQUM5SDtFQUVBLElBQUlnUSxXQUFXLENBQUN3YixRQUFRLENBQUMsRUFBRTtJQUN6QkEsUUFBUSxHQUFHQSxRQUFRLENBQUMsQ0FBQztJQUVyQnJ0QixZQUFZLENBQUN4RSxhQUFhLEVBQUUsU0FBUyxFQUFFLFlBQVk7TUFDakQsT0FBTzZ4QixRQUFRLEdBQUdobkIsSUFBSSxDQUFDZ25CLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKO0VBRUF6ZSxRQUFRLENBQUM0WCxPQUFPLENBQUMsQ0FBQ3ZRLE9BQU8sQ0FBQyxVQUFVclosTUFBTSxFQUFFO0lBQzFDLElBQUlzRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWYsS0FBS3JCLENBQUMsSUFBSXNyQixRQUFRLEVBQUU7TUFDbEJqcUIsTUFBTSxDQUFDckIsQ0FBQyxDQUFDLEdBQUdzckIsUUFBUSxDQUFDdHJCLENBQUMsQ0FBQztJQUN6QjtJQUVBcUIsTUFBTSxDQUFDMUcsT0FBTyxHQUFHSSxNQUFNO0lBQ3ZCMFYsTUFBTSxDQUFDN1MsSUFBSSxDQUFDakUsYUFBYSxDQUFDNlMsTUFBTSxDQUFDbkwsTUFBTSxDQUFDLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0VBRUYsT0FBT29QLE1BQU07QUFDZixDQUFDLENBQUMsQ0FBQzs7QUFHSCxJQUFJbWIsb0NBQW9DLEdBQUcsU0FBU0Esb0NBQW9DQSxDQUFDdFgsVUFBVSxFQUFFa0ssT0FBTyxFQUFFbEUsR0FBRyxFQUFFL1gsR0FBRyxFQUFFO0lBQ3RIaWMsT0FBTyxHQUFHamMsR0FBRyxHQUFHK1IsVUFBVSxDQUFDL1IsR0FBRyxDQUFDLEdBQUdpYyxPQUFPLEdBQUcsQ0FBQyxJQUFJbEssVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM5RCxPQUFPZ0csR0FBRyxHQUFHL1gsR0FBRyxHQUFHLENBQUNBLEdBQUcsR0FBR2ljLE9BQU8sS0FBS2xFLEdBQUcsR0FBR2tFLE9BQU8sQ0FBQyxHQUFHbEUsR0FBRyxHQUFHLENBQUMsR0FBR2tFLE9BQU8sSUFBSUEsT0FBTyxHQUFHbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUNoRyxDQUFDO0VBQ0d1UixtQkFBbUIsR0FBRyxTQUFTQSxtQkFBbUJBLENBQUM5d0IsTUFBTSxFQUFFNlksU0FBUyxFQUFFO0lBQ3hFLElBQUlBLFNBQVMsS0FBSyxJQUFJLEVBQUU7TUFDdEI3WSxNQUFNLENBQUNnWCxLQUFLLENBQUN5SyxjQUFjLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUMsTUFBTTtNQUNMemhCLE1BQU0sQ0FBQ2dYLEtBQUssQ0FBQytaLFdBQVcsR0FBR2xZLFNBQVMsS0FBSyxJQUFJLEdBQUcsTUFBTSxHQUFHQSxTQUFTLEdBQUcsTUFBTSxHQUFHQSxTQUFTLElBQUk5UCxrREFBUSxDQUFDQyxPQUFPLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzlJOztJQUVBaEosTUFBTSxLQUFLb0IsTUFBTSxJQUFJMHZCLG1CQUFtQixDQUFDenZCLEtBQUssRUFBRXdYLFNBQVMsQ0FBQztFQUM1RCxDQUFDO0VBQ0dtWSxTQUFTLEdBQUc7SUFDZEMsSUFBSSxFQUFFLENBQUM7SUFDUDlRLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDRytRLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDaEQsSUFBSS9tQixLQUFLLEdBQUcrbUIsS0FBSyxDQUFDL21CLEtBQUs7TUFDbkJwSyxNQUFNLEdBQUdteEIsS0FBSyxDQUFDbnhCLE1BQU07TUFDckIwTSxJQUFJLEdBQUd5a0IsS0FBSyxDQUFDemtCLElBQUk7SUFFckIsSUFBSTBrQixJQUFJLEdBQUcsQ0FBQ2huQixLQUFLLENBQUNoQyxjQUFjLEdBQUdnQyxLQUFLLENBQUNoQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUdnQyxLQUFLLEVBQUVwSyxNQUFNO01BQ3RFaUUsS0FBSyxHQUFHbXRCLElBQUksQ0FBQ3pRLEtBQUssSUFBSWhpQixJQUFJLENBQUM2RCxJQUFJLENBQUNnZixRQUFRLENBQUM0UCxJQUFJLENBQUM7TUFDOUNuUixJQUFJLEdBQUdoZSxRQUFRLENBQUMsQ0FBQztNQUNqQmdmLEVBQUU7SUFFTixJQUFJLENBQUNoZCxLQUFLLENBQUNvdEIsVUFBVSxJQUFJcFIsSUFBSSxHQUFHaGMsS0FBSyxDQUFDb3RCLFVBQVUsR0FBRyxJQUFJLEVBQUU7TUFDdkQ7TUFDQSxPQUFPRCxJQUFJLElBQUlBLElBQUksS0FBSy92QixLQUFLLEtBQUsrdkIsSUFBSSxDQUFDRSxZQUFZLElBQUlGLElBQUksQ0FBQ0csWUFBWSxJQUFJSCxJQUFJLENBQUNJLFdBQVcsSUFBSUosSUFBSSxDQUFDcFUsV0FBVyxJQUFJLEVBQUVnVSxTQUFTLENBQUMsQ0FBQy9QLEVBQUUsR0FBR3BLLGlCQUFpQixDQUFDdWEsSUFBSSxDQUFDLEVBQUVLLFNBQVMsQ0FBQyxJQUFJVCxTQUFTLENBQUMvUCxFQUFFLENBQUN5USxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdE1OLElBQUksR0FBR0EsSUFBSSxDQUFDclEsVUFBVTtNQUN4QjtNQUVBOWMsS0FBSyxDQUFDMHRCLFNBQVMsR0FBR1AsSUFBSSxJQUFJQSxJQUFJLEtBQUtweEIsTUFBTSxJQUFJLENBQUNrRCxXQUFXLENBQUNrdUIsSUFBSSxDQUFDLEtBQUtKLFNBQVMsQ0FBQyxDQUFDL1AsRUFBRSxHQUFHcEssaUJBQWlCLENBQUN1YSxJQUFJLENBQUMsRUFBRUssU0FBUyxDQUFDLElBQUlULFNBQVMsQ0FBQy9QLEVBQUUsQ0FBQ3lRLFNBQVMsQ0FBQyxDQUFDO01BQ25KenRCLEtBQUssQ0FBQ290QixVQUFVLEdBQUdwUixJQUFJO0lBQ3pCO0lBRUEsSUFBSWhjLEtBQUssQ0FBQzB0QixTQUFTLElBQUlqbEIsSUFBSSxLQUFLLEdBQUcsRUFBRTtNQUNuQ3RDLEtBQUssQ0FBQ3duQixlQUFlLENBQUMsQ0FBQztNQUN2QnhuQixLQUFLLENBQUNqQyxVQUFVLEdBQUcsSUFBSTtJQUN6QjtFQUNGLENBQUM7RUFDRztFQUNKMHBCLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDN3hCLE1BQU0sRUFBRXFELElBQUksRUFBRXl1QixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUNyRSxPQUFPaHBCLGtEQUFRLENBQUMwSSxNQUFNLENBQUM7TUFDckJ6UixNQUFNLEVBQUVBLE1BQU07TUFDZHdELE9BQU8sRUFBRSxJQUFJO01BQ2J1RyxRQUFRLEVBQUUsS0FBSztNQUNmaUMsUUFBUSxFQUFFLElBQUk7TUFDZDNJLElBQUksRUFBRUEsSUFBSTtNQUNWcUksT0FBTyxFQUFFcW1CLE1BQU0sR0FBR0EsTUFBTSxJQUFJYixhQUFhO01BQ3pDMW1CLE9BQU8sRUFBRXVuQixNQUFNO01BQ2Z4bkIsTUFBTSxFQUFFd25CLE1BQU07TUFDZDFoQixRQUFRLEVBQUUwaEIsTUFBTTtNQUNoQnBtQixRQUFRLEVBQUUsU0FBU0EsUUFBUUEsQ0FBQSxFQUFHO1FBQzVCLE9BQU9tbUIsTUFBTSxJQUFJMXVCLFlBQVksQ0FBQ2pDLElBQUksRUFBRTRILGtEQUFRLENBQUNPLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTBvQixjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztNQUMxRixDQUFDO01BQ0RwbUIsU0FBUyxFQUFFLFNBQVNBLFNBQVNBLENBQUEsRUFBRztRQUM5QixPQUFPakksZUFBZSxDQUFDeEMsSUFBSSxFQUFFNEgsa0RBQVEsQ0FBQ08sVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFMG9CLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDNUU7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0dDLFNBQVMsR0FBRyxnQ0FBZ0M7RUFDNUNDLGVBQWU7RUFDZkYsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUMvcEIsQ0FBQyxFQUFFO0lBQzlDLElBQUlrcUIsT0FBTyxHQUFHRixTQUFTLENBQUMvTyxJQUFJLENBQUNqYixDQUFDLENBQUNqSSxNQUFNLENBQUNveUIsT0FBTyxDQUFDO0lBRTlDLElBQUlELE9BQU8sSUFBSUQsZUFBZSxFQUFFO01BQzlCanFCLENBQUMsQ0FBQ0UsVUFBVSxHQUFHLElBQUk7TUFDbkIrcEIsZUFBZSxHQUFHQyxPQUFPO0lBQzNCO0VBQ0YsQ0FBQztFQUNHRSxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUM1b0IsSUFBSSxFQUFFO0lBQzdEMEwsU0FBUyxDQUFDMUwsSUFBSSxDQUFDLEtBQUtBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QkEsSUFBSSxDQUFDdkIsY0FBYyxHQUFHdUIsSUFBSSxDQUFDOEIsWUFBWSxHQUFHOUIsSUFBSSxDQUFDc0MsV0FBVyxHQUFHLElBQUk7SUFDakV0QyxJQUFJLENBQUNwRyxJQUFJLEtBQUtvRyxJQUFJLENBQUNwRyxJQUFJLEdBQUcsYUFBYSxDQUFDO0lBQ3hDb0csSUFBSSxDQUFDTSxRQUFRLEdBQUcsQ0FBQyxDQUFDTixJQUFJLENBQUNNLFFBQVE7SUFDL0JOLElBQUksQ0FBQzJDLEVBQUUsR0FBRzNDLElBQUksQ0FBQzJDLEVBQUUsSUFBSSxZQUFZO0lBRWpDLElBQUlrbUIsTUFBTSxHQUFHN29CLElBQUk7TUFDYjhvQixnQkFBZ0IsR0FBR0QsTUFBTSxDQUFDQyxnQkFBZ0I7TUFDMUNDLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUFRO01BQzFCQyxpQkFBaUIsR0FBR0gsTUFBTSxDQUFDRyxpQkFBaUI7TUFDNUNob0IsU0FBUyxHQUFHNm5CLE1BQU0sQ0FBQzduQixTQUFTO01BQzVCeEUsSUFBSTtNQUNKeXNCLElBQUk7TUFDSjF5QixNQUFNLEdBQUcrRix3REFBVSxDQUFDMEQsSUFBSSxDQUFDekosTUFBTSxDQUFDLElBQUlvQixNQUFNO01BQzFDdXhCLFFBQVEsR0FBR2gwQixJQUFJLENBQUM2RCxJQUFJLENBQUNnRyxPQUFPLENBQUMsQ0FBQyxDQUFDb3FCLGNBQWM7TUFDN0NDLGdCQUFnQixHQUFHRixRQUFRLElBQUlBLFFBQVEsQ0FBQ3BoQixHQUFHLENBQUMsQ0FBQztNQUM3QzRZLE9BQU8sR0FBR25YLFVBQVUsS0FBS3ZKLElBQUksQ0FBQzBnQixPQUFPLElBQUlwa0Isd0RBQVUsQ0FBQzBELElBQUksQ0FBQzBnQixPQUFPLENBQUMsSUFBSTBJLGdCQUFnQixJQUFJcHBCLElBQUksQ0FBQzBnQixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMwSSxnQkFBZ0IsQ0FBQ2hzQixNQUFNLENBQUMsQ0FBQyxJQUFJZ3NCLGdCQUFnQixDQUFDMUksT0FBTyxDQUFDLENBQUMsQ0FBQztNQUM1S3JkLFdBQVcsR0FBR3JHLDREQUFjLENBQUN6RyxNQUFNLEVBQUUyRixtREFBUyxDQUFDO01BQy9Da0gsV0FBVyxHQUFHcEcsNERBQWMsQ0FBQ3pHLE1BQU0sRUFBRStFLHFEQUFXLENBQUM7TUFDakR2RixLQUFLLEdBQUcsQ0FBQztNQUNUc3pCLFlBQVksR0FBRyxDQUFDL3BCLGtEQUFRLENBQUNDLE9BQU8sSUFBSTlILElBQUksQ0FBQzZ4QixjQUFjLEdBQUc3eEIsSUFBSSxDQUFDNnhCLGNBQWMsQ0FBQ3Z6QixLQUFLLEdBQUcwQixJQUFJLENBQUM2eEIsY0FBYyxDQUFDemUsS0FBSyxHQUFHcFQsSUFBSSxDQUFDOHhCLFVBQVUsSUFBSTl4QixJQUFJLENBQUNxVCxVQUFVO01BQ3BKMGUsWUFBWSxHQUFHLENBQUM7TUFDaEJDLHVCQUF1QixHQUFHamUsV0FBVyxDQUFDdWQsUUFBUSxDQUFDLEdBQUcsWUFBWTtRQUNoRSxPQUFPQSxRQUFRLENBQUN2c0IsSUFBSSxDQUFDO01BQ3ZCLENBQUMsR0FBRyxZQUFZO1FBQ2QsT0FBT3VzQixRQUFRLElBQUksR0FBRztNQUN4QixDQUFDO01BQ0dXLGFBQWE7TUFDYkMsYUFBYTtNQUNiQyxhQUFhLEdBQUd4QixjQUFjLENBQUM3eEIsTUFBTSxFQUFFeUosSUFBSSxDQUFDcEcsSUFBSSxFQUFFLElBQUksRUFBRW92QixpQkFBaUIsQ0FBQztNQUMxRWEsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUEsRUFBRztRQUMvQyxPQUFPRixhQUFhLEdBQUcsS0FBSztNQUM5QixDQUFDO01BQ0dHLFlBQVksR0FBR3hmLFlBQVk7TUFDM0J5ZixZQUFZLEdBQUd6ZixZQUFZO01BQzNCMGYsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUEsRUFBRztRQUN6Q2YsSUFBSSxHQUFHN2QsVUFBVSxDQUFDN1UsTUFBTSxFQUFFMkYsbURBQVMsQ0FBQztRQUNwQzZ0QixZQUFZLEdBQUd2eUIsTUFBTSxDQUFDK1IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUwZixJQUFJLENBQUM7UUFDL0NILGdCQUFnQixLQUFLZ0IsWUFBWSxHQUFHdHlCLE1BQU0sQ0FBQyxDQUFDLEVBQUU0VCxVQUFVLENBQUM3VSxNQUFNLEVBQUUrRSxxREFBVyxDQUFDLENBQUMsQ0FBQztRQUMvRW91QixhQUFhLEdBQUc5VSxVQUFVO01BQzVCLENBQUM7TUFDR3FWLG1CQUFtQixHQUFHLFNBQVNBLG1CQUFtQkEsQ0FBQSxFQUFHO1FBQ3ZEdkosT0FBTyxDQUFDeEosS0FBSyxDQUFDclMsQ0FBQyxHQUFHMEYsTUFBTSxDQUFDOUgsVUFBVSxDQUFDaWUsT0FBTyxDQUFDeEosS0FBSyxDQUFDclMsQ0FBQyxDQUFDLEdBQUd4QixXQUFXLENBQUNoSSxNQUFNLENBQUMsR0FBRyxJQUFJO1FBQ2pGcWxCLE9BQU8sQ0FBQ25ULEtBQUssQ0FBQzJjLFNBQVMsR0FBRyxrREFBa0QsR0FBR3puQixVQUFVLENBQUNpZSxPQUFPLENBQUN4SixLQUFLLENBQUNyUyxDQUFDLENBQUMsR0FBRyxTQUFTO1FBQ3RIeEIsV0FBVyxDQUFDaEksTUFBTSxHQUFHZ0ksV0FBVyxDQUFDakksT0FBTyxHQUFHLENBQUM7TUFDOUMsQ0FBQztNQUNHK3VCLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFBLEVBQUc7UUFDckMsSUFBSVIsYUFBYSxFQUFFO1VBQ2pCNWtCLHFCQUFxQixDQUFDOGtCLGVBQWUsQ0FBQztVQUV0QyxJQUFJeHVCLE1BQU0sR0FBR2tQLE1BQU0sQ0FBQy9OLElBQUksQ0FBQ3FILE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEM2UyxNQUFNLEdBQUdxVCxZQUFZLENBQUMxbUIsV0FBVyxDQUFDckksQ0FBQyxHQUFHSyxNQUFNLENBQUM7VUFFakQsSUFBSXFsQixPQUFPLElBQUloSyxNQUFNLEtBQUtyVCxXQUFXLENBQUNySSxDQUFDLEdBQUdxSSxXQUFXLENBQUNoSSxNQUFNLEVBQUU7WUFDNURnSSxXQUFXLENBQUNoSSxNQUFNLEdBQUdxYixNQUFNLEdBQUdyVCxXQUFXLENBQUNySSxDQUFDO1lBRTNDLElBQUk2SixDQUFDLEdBQUcwRixNQUFNLENBQUMsQ0FBQzlILFVBQVUsQ0FBQ2llLE9BQU8sSUFBSUEsT0FBTyxDQUFDeEosS0FBSyxDQUFDclMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJeEIsV0FBVyxDQUFDaEksTUFBTSxDQUFDO1lBRWxGcWxCLE9BQU8sQ0FBQ25ULEtBQUssQ0FBQzJjLFNBQVMsR0FBRyxrREFBa0QsR0FBR3JsQixDQUFDLEdBQUcsU0FBUztZQUM1RjZiLE9BQU8sQ0FBQ3hKLEtBQUssQ0FBQ3JTLENBQUMsR0FBR0EsQ0FBQyxHQUFHLElBQUk7WUFDMUJ4QixXQUFXLENBQUNqSSxPQUFPLEdBQUc5QyxvREFBVSxDQUFDa0MsS0FBSztZQUV0QzhZLFVBQVUsQ0FBQyxDQUFDO1VBQ2Q7VUFFQSxPQUFPLElBQUk7UUFDYjtRQUVBalEsV0FBVyxDQUFDaEksTUFBTSxJQUFJNHVCLG1CQUFtQixDQUFDLENBQUM7UUFDM0NOLGFBQWEsR0FBRyxJQUFJO01BQ3RCLENBQUM7TUFDRy9iLEtBQUs7TUFDTHdjLFlBQVk7TUFDWkMsWUFBWTtNQUNaem5CLGlCQUFpQjtNQUNqQjBuQixRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQSxFQUFHO1FBQ2pDO1FBQ0FOLFlBQVksQ0FBQyxDQUFDO1FBRWQsSUFBSXBjLEtBQUssQ0FBQ3FTLFFBQVEsQ0FBQyxDQUFDLElBQUlyUyxLQUFLLENBQUM1TixJQUFJLENBQUN1RCxPQUFPLEdBQUcwbEIsSUFBSSxFQUFFO1VBQ2pENWxCLFdBQVcsQ0FBQyxDQUFDLEdBQUc0bEIsSUFBSSxHQUFHcmIsS0FBSyxDQUFDOUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJekksV0FBVyxDQUFDNGxCLElBQUksQ0FBQyxHQUFHcmIsS0FBSyxDQUFDbVcsT0FBTyxDQUFDLFNBQVMsRUFBRWtGLElBQUksQ0FBQztRQUNoRztNQUNGLENBQUM7SUFFRHZJLE9BQU8sSUFBSXhyQixJQUFJLENBQUMrZCxHQUFHLENBQUN5TixPQUFPLEVBQUU7TUFDM0I3YixDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVKN0UsSUFBSSxDQUFDNkIsV0FBVyxHQUFHLFVBQVVyRCxDQUFDLEVBQUU7TUFDOUIsT0FBTytLLFVBQVUsSUFBSS9LLENBQUMsQ0FBQzVFLElBQUksS0FBSyxXQUFXLElBQUl1d0IsVUFBVSxDQUFDM3JCLENBQUMsQ0FBQyxJQUFJekksS0FBSyxHQUFHLElBQUksSUFBSXlJLENBQUMsQ0FBQzVFLElBQUksS0FBSyxZQUFZLElBQUk0QyxJQUFJLENBQUMrSixXQUFXLElBQUkvSCxDQUFDLENBQUNrSSxPQUFPLElBQUlsSSxDQUFDLENBQUNrSSxPQUFPLENBQUNoUSxNQUFNLEdBQUcsQ0FBQztJQUNsSyxDQUFDO0lBRURzSixJQUFJLENBQUNlLE9BQU8sR0FBRyxZQUFZO01BQ3pCNG9CLGFBQWEsR0FBRyxLQUFLO01BQ3JCLElBQUlZLFNBQVMsR0FBR3gwQixLQUFLO01BQ3JCQSxLQUFLLEdBQUd3VSxNQUFNLENBQUMsQ0FBQzlTLElBQUksQ0FBQzZ4QixjQUFjLElBQUk3eEIsSUFBSSxDQUFDNnhCLGNBQWMsQ0FBQ3Z6QixLQUFLLElBQUksQ0FBQyxJQUFJc3pCLFlBQVksQ0FBQztNQUN0RnpiLEtBQUssQ0FBQ3RKLEtBQUssQ0FBQyxDQUFDO01BQ2JpbUIsU0FBUyxLQUFLeDBCLEtBQUssSUFBSXN4QixtQkFBbUIsQ0FBQzl3QixNQUFNLEVBQUVSLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHK3lCLGdCQUFnQixHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7TUFDeEdzQixZQUFZLEdBQUdobkIsV0FBVyxDQUFDLENBQUM7TUFDNUJpbkIsWUFBWSxHQUFHaG5CLFdBQVcsQ0FBQyxDQUFDO01BQzVCMm1CLFlBQVksQ0FBQyxDQUFDO01BQ2ROLGFBQWEsR0FBRzlVLFVBQVU7SUFDNUIsQ0FBQztJQUVENVUsSUFBSSxDQUFDZ0IsU0FBUyxHQUFHaEIsSUFBSSxDQUFDK0IsY0FBYyxHQUFHLFVBQVV2RixJQUFJLEVBQUVvSixXQUFXLEVBQUU7TUFDbEV2QyxXQUFXLENBQUNoSSxNQUFNLElBQUk0dUIsbUJBQW1CLENBQUMsQ0FBQztNQUUzQyxJQUFJLENBQUNya0IsV0FBVyxFQUFFO1FBQ2hCaEQsaUJBQWlCLENBQUM0RCxPQUFPLENBQUMsSUFBSSxDQUFDO01BQ2pDLENBQUMsTUFBTTtRQUNMbE8sb0RBQVUsQ0FBQ2tDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEI7O1FBRUEsSUFBSWd3QixHQUFHLEdBQUdmLHVCQUF1QixDQUFDLENBQUM7VUFDL0JnQixhQUFhO1VBQ2I3SyxTQUFTO1FBRWIsSUFBSWtKLGdCQUFnQixFQUFFO1VBQ3BCMkIsYUFBYSxHQUFHcm5CLFdBQVcsQ0FBQyxDQUFDO1VBQzdCd2MsU0FBUyxHQUFHNkssYUFBYSxHQUFHRCxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUNodUIsSUFBSSxDQUFDa3VCLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQzs7VUFFbEVGLEdBQUcsSUFBSXBELG9DQUFvQyxDQUFDaGtCLFdBQVcsRUFBRXFuQixhQUFhLEVBQUU3SyxTQUFTLEVBQUV4VSxVQUFVLENBQUM3VSxNQUFNLEVBQUUrRSxxREFBVyxDQUFDLENBQUM7VUFDbkhzUyxLQUFLLENBQUM1TixJQUFJLENBQUNzRCxPQUFPLEdBQUd3bUIsWUFBWSxDQUFDbEssU0FBUyxDQUFDO1FBQzlDO1FBRUE2SyxhQUFhLEdBQUdwbkIsV0FBVyxDQUFDLENBQUM7UUFDN0J1YyxTQUFTLEdBQUc2SyxhQUFhLEdBQUdELEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQ2h1QixJQUFJLENBQUNtdUIsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDOztRQUVsRUgsR0FBRyxJQUFJcEQsb0NBQW9DLENBQUMvakIsV0FBVyxFQUFFb25CLGFBQWEsRUFBRTdLLFNBQVMsRUFBRXhVLFVBQVUsQ0FBQzdVLE1BQU0sRUFBRTJGLG1EQUFTLENBQUMsQ0FBQztRQUNqSDBSLEtBQUssQ0FBQzVOLElBQUksQ0FBQ3VELE9BQU8sR0FBR3dtQixZQUFZLENBQUNuSyxTQUFTLENBQUM7UUFDNUNoUyxLQUFLLENBQUMwVCxVQUFVLENBQUMsQ0FBQyxDQUFDdHJCLFFBQVEsQ0FBQ3cwQixHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzQyxJQUFJcmhCLFVBQVUsSUFBSXFFLEtBQUssQ0FBQzVOLElBQUksQ0FBQ3VELE9BQU8sSUFBSTBsQixJQUFJLElBQUl3QixhQUFhLElBQUl4QixJQUFJLEdBQUcsQ0FBQyxFQUFFO1VBQ3pFO1VBQ0EvekIsSUFBSSxDQUFDMlksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1Y4TSxRQUFRLEVBQUUyUCxRQUFRO1lBQ2xCdDBCLFFBQVEsRUFBRXcwQjtVQUNaLENBQUMsQ0FBQztRQUNKO01BQ0Y7TUFFQXhwQixTQUFTLElBQUlBLFNBQVMsQ0FBQ3hFLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUR3RCxJQUFJLENBQUNpQyxPQUFPLEdBQUcsWUFBWTtNQUN6QjJMLEtBQUssQ0FBQ2lkLEdBQUcsSUFBSWpkLEtBQUssQ0FBQ3RKLEtBQUssQ0FBQyxDQUFDO01BRTFCLElBQUk5TCxRQUFRLENBQUMsQ0FBQyxHQUFHZ3hCLFlBQVksR0FBRyxJQUFJLEVBQUU7UUFDcEM7UUFDQUUsYUFBYSxHQUFHLENBQUM7UUFDakJGLFlBQVksR0FBR2h4QixRQUFRLENBQUMsQ0FBQztNQUMzQjtJQUNGLENBQUM7SUFFRHdILElBQUksQ0FBQ3VCLFFBQVEsR0FBRyxVQUFVL0UsSUFBSSxFQUFFK0gsRUFBRSxFQUFFQyxFQUFFLEVBQUVzbUIsTUFBTSxFQUFFQyxNQUFNLEVBQUU7TUFDdERuVyxVQUFVLEtBQUs4VSxhQUFhLElBQUlNLFlBQVksQ0FBQyxDQUFDO01BQzlDemxCLEVBQUUsSUFBSXVrQixnQkFBZ0IsSUFBSTFsQixXQUFXLENBQUMwbUIsWUFBWSxDQUFDZ0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLdm1CLEVBQUUsR0FBRzZsQixZQUFZLElBQUk1dEIsSUFBSSxDQUFDNkksTUFBTSxHQUFHN0ksSUFBSSxDQUFDb0ksQ0FBQyxDQUFDLEdBQUd4QixXQUFXLENBQUMsQ0FBQyxHQUFHbUIsRUFBRSxHQUFHdW1CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFaEosSUFBSXRtQixFQUFFLEVBQUU7UUFDTm5CLFdBQVcsQ0FBQ2hJLE1BQU0sSUFBSTR1QixtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLElBQUkxcUIsT0FBTyxHQUFHd3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBS3ZtQixFQUFFO1VBQzFCSyxDQUFDLEdBQUd0RixPQUFPLEdBQUc4cUIsWUFBWSxHQUFHN3RCLElBQUksQ0FBQzhJLE1BQU0sR0FBRzlJLElBQUksQ0FBQ3FJLENBQUMsR0FBR3hCLFdBQVcsQ0FBQyxDQUFDLEdBQUdtQixFQUFFLEdBQUd1bUIsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUNsRkMsUUFBUSxHQUFHakIsWUFBWSxDQUFDbGxCLENBQUMsQ0FBQztRQUM5QnRGLE9BQU8sSUFBSXNGLENBQUMsS0FBS21tQixRQUFRLEtBQUtYLFlBQVksSUFBSVcsUUFBUSxHQUFHbm1CLENBQUMsQ0FBQztRQUMzRHhCLFdBQVcsQ0FBQzJuQixRQUFRLENBQUM7TUFDdkI7TUFFQSxDQUFDeG1CLEVBQUUsSUFBSUQsRUFBRSxLQUFLK08sVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEdFQsSUFBSSxDQUFDa0MsUUFBUSxHQUFHLFlBQVk7TUFDMUJtbEIsbUJBQW1CLENBQUM5d0IsTUFBTSxFQUFFdXlCLGdCQUFnQixHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7TUFFM0QzekIsYUFBYSxDQUFDNkUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFc3dCLFFBQVEsQ0FBQztNQUVuRDN3QixZQUFZLENBQUNsQyxJQUFJLEVBQUUsUUFBUSxFQUFFNnlCLFFBQVEsQ0FBQztNQUV0QyxJQUFJam5CLFdBQVcsQ0FBQ2pHLE1BQU0sRUFBRTtRQUN0QmlHLFdBQVcsQ0FBQzlNLE1BQU0sQ0FBQ2dYLEtBQUssQ0FBQzhILGNBQWMsR0FBRyxNQUFNO1FBQ2hEaFMsV0FBVyxDQUFDakcsTUFBTSxHQUFHZ0csV0FBVyxDQUFDaEcsTUFBTSxHQUFHLEtBQUs7TUFDakQ7TUFFQXdzQixhQUFhLENBQUN0aUIsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEdEgsSUFBSSxDQUFDbUMsU0FBUyxHQUFHLFlBQVk7TUFDM0JrbEIsbUJBQW1CLENBQUM5d0IsTUFBTSxFQUFFLElBQUksQ0FBQztNQUVqQzJELGVBQWUsQ0FBQ3pDLElBQUksRUFBRSxRQUFRLEVBQUU2eUIsUUFBUSxDQUFDO01BRXpDbjFCLGFBQWEsQ0FBQ2dGLG1CQUFtQixDQUFDLFNBQVMsRUFBRW13QixRQUFRLENBQUM7TUFDdERWLGFBQWEsQ0FBQ2ppQixJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQzSCxJQUFJLENBQUN1QyxRQUFRLEdBQUd2QyxJQUFJLENBQUN1QyxRQUFRLEtBQUssS0FBSztJQUN2Qy9GLElBQUksR0FBRyxJQUFJOEMsa0RBQVEsQ0FBQ1UsSUFBSSxDQUFDO0lBQ3pCeEQsSUFBSSxDQUFDckIsR0FBRyxHQUFHb08sVUFBVSxDQUFDLENBQUM7O0lBRXZCQSxVQUFVLElBQUksQ0FBQ2xHLFdBQVcsQ0FBQyxDQUFDLElBQUlBLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVoRGtHLFVBQVUsSUFBSXJVLElBQUksQ0FBQysxQixNQUFNLENBQUMxSyxHQUFHLENBQUNqVyxZQUFZLENBQUMsQ0FBQyxDQUFDOztJQUU3QzFILGlCQUFpQixHQUFHcEcsSUFBSSxDQUFDNkssR0FBRztJQUM1QnVHLEtBQUssR0FBRzFZLElBQUksQ0FBQzJZLEVBQUUsQ0FBQ3JSLElBQUksRUFBRTtNQUNwQnZHLElBQUksRUFBRSxRQUFRO01BQ2Q4b0IsTUFBTSxFQUFFLElBQUk7TUFDWnpiLE9BQU8sRUFBRXdsQixnQkFBZ0IsR0FBRyxPQUFPLEdBQUcsS0FBSztNQUMzQ3ZsQixPQUFPLEVBQUUsT0FBTztNQUNoQmlYLFNBQVMsRUFBRTtRQUNUalgsT0FBTyxFQUFFbVcsb0JBQW9CLENBQUNyVyxXQUFXLEVBQUVBLFdBQVcsQ0FBQyxDQUFDLEVBQUUsWUFBWTtVQUNwRSxPQUFPdUssS0FBSyxDQUFDdEosS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztNQUNILENBQUM7TUFDRHFXLFFBQVEsRUFBRXJILFVBQVU7TUFDcEJpSCxVQUFVLEVBQUUzWCxpQkFBaUIsQ0FBQzVDLElBQUksQ0FBQ3VhO0lBQ3JDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRUosT0FBTy9kLElBQUk7RUFDYixDQUFDO0FBRURySCxhQUFhLENBQUMrWixJQUFJLEdBQUcsVUFBVXJWLElBQUksRUFBRTtFQUNuQyxPQUFPcVosU0FBUyxDQUFDaEUsSUFBSSxDQUFDclYsSUFBSSxJQUFJLFVBQVVpQyxDQUFDLEVBQUVxVCxDQUFDLEVBQUU7SUFDNUMsT0FBTyxDQUFDclQsQ0FBQyxDQUFDa0UsSUFBSSxDQUFDMmUsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRzdpQixDQUFDLENBQUM2VyxLQUFLLElBQUl4RCxDQUFDLENBQUN3RCxLQUFLLEdBQUcsQ0FBQ3hELENBQUMsQ0FBQ25QLElBQUksQ0FBQzJlLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDMUcsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEeHBCLGFBQWEsQ0FBQysxQixPQUFPLEdBQUcsVUFBVWxyQixJQUFJLEVBQUU7RUFDdEMsT0FBTyxJQUFJVixrREFBUSxDQUFDVSxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQUVEN0ssYUFBYSxDQUFDZzJCLGVBQWUsR0FBRyxVQUFVbnJCLElBQUksRUFBRTtFQUM5QyxJQUFJLE9BQU9BLElBQUksS0FBSyxXQUFXLEVBQUU7SUFDL0IsT0FBT2hJLFdBQVc7RUFDcEI7RUFFQSxJQUFJZ0ksSUFBSSxLQUFLLElBQUksSUFBSWhJLFdBQVcsRUFBRTtJQUNoQyxPQUFPQSxXQUFXLENBQUNzUCxNQUFNLENBQUMsQ0FBQztFQUM3QjtFQUVBLElBQUl0SCxJQUFJLEtBQUssS0FBSyxFQUFFO0lBQ2xCLE9BQU9oSSxXQUFXLElBQUlBLFdBQVcsQ0FBQzJQLElBQUksQ0FBQyxDQUFDO0VBQzFDO0VBRUEsSUFBSXlqQixVQUFVLEdBQUdwckIsSUFBSSxZQUFZVixrREFBUSxHQUFHVSxJQUFJLEdBQUc0b0Isb0JBQW9CLENBQUM1b0IsSUFBSSxDQUFDO0VBQzdFaEksV0FBVyxJQUFJQSxXQUFXLENBQUN6QixNQUFNLEtBQUs2MEIsVUFBVSxDQUFDNzBCLE1BQU0sSUFBSXlCLFdBQVcsQ0FBQzJQLElBQUksQ0FBQyxDQUFDO0VBQzdFbE8sV0FBVyxDQUFDMnhCLFVBQVUsQ0FBQzcwQixNQUFNLENBQUMsS0FBS3lCLFdBQVcsR0FBR296QixVQUFVLENBQUM7RUFDNUQsT0FBT0EsVUFBVTtBQUNuQixDQUFDO0FBRURqMkIsYUFBYSxDQUFDNEQsSUFBSSxHQUFHO0VBQ25CO0VBQ0F1RSxnQkFBZ0IsRUFBRUEsMERBQWdCO0VBQ2xDOHFCLGNBQWMsRUFBRUEsY0FBYztFQUM5Qjl2QixVQUFVLEVBQUVBLG9EQUFVO0VBQ3RCQyxRQUFRLEVBQUVBLGtEQUFRO0VBQ2xCVSxNQUFNLEVBQUU7SUFDTjtJQUNBb3lCLEVBQUUsRUFBRSxTQUFTQSxFQUFFQSxDQUFBLEVBQUc7TUFDaEJ4aEIsZUFBZSxJQUFJMkosU0FBUyxDQUFDLGFBQWEsQ0FBQztNQUMzQzNKLGVBQWUsR0FBR3JSLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRDtJQUNBOHlCLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxDQUFBLEVBQUc7TUFDbEIsT0FBTzVpQixXQUFXO0lBQ3BCO0VBQ0Y7QUFDRixDQUFDO0FBQ0R2USxRQUFRLENBQUMsQ0FBQyxJQUFJakQsSUFBSSxDQUFDRSxjQUFjLENBQUNELGFBQWEsQ0FBQzs7Ozs7Ozs7O1VDNWlGaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9nc2FwL09ic2VydmVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZ3NhcC9TY3JvbGxUcmlnZ2VyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIlxuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcbiAgICB0aGlzLmltYWdlcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIildXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5pbWFnZXMsIFwiRUxFTUVOVFwiKVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgSU5cIiwgdGhpcy5lbGVtZW50KVxuICAgIGdzYXAuZnJvbSh0aGlzLmltYWdlcywge1xuICAgICAgc2NhbGU6IDAuMixcbiAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gICAgZ3NhcC5mcm9tKHRoaXMuaW1hZ2VzLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIG1hcmtlcnM6IHRydWVcbiAgICAgIH0sXG4gICAgICBzY2FsZTogMC4yXG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgT1VUXCIpXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBPYnNlcnZlciAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2NsYW1wLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWwsXG4gICAgX2JvZHksXG4gICAgX2lzVG91Y2gsXG4gICAgX3BvaW50ZXJUeXBlLFxuICAgIFNjcm9sbFRyaWdnZXIsXG4gICAgX3Jvb3QsXG4gICAgX25vcm1hbGl6ZXIsXG4gICAgX2V2ZW50VHlwZXMsXG4gICAgX2NvbnRleHQsXG4gICAgX2dldEdTQVAgPSBmdW5jdGlvbiBfZ2V0R1NBUCgpIHtcbiAgcmV0dXJuIGdzYXAgfHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoZ3NhcCA9IHdpbmRvdy5nc2FwKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luICYmIGdzYXA7XG59LFxuICAgIF9zdGFydHVwID0gMSxcbiAgICBfb2JzZXJ2ZXJzID0gW10sXG4gICAgX3Njcm9sbGVycyA9IFtdLFxuICAgIF9wcm94aWVzID0gW10sXG4gICAgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICBfYnJpZGdlID0gZnVuY3Rpb24gX2JyaWRnZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59LFxuICAgIF9pbnRlZ3JhdGUgPSBmdW5jdGlvbiBfaW50ZWdyYXRlKCkge1xuICB2YXIgY29yZSA9IFNjcm9sbFRyaWdnZXIuY29yZSxcbiAgICAgIGRhdGEgPSBjb3JlLmJyaWRnZSB8fCB7fSxcbiAgICAgIHNjcm9sbGVycyA9IGNvcmUuX3Njcm9sbGVycyxcbiAgICAgIHByb3hpZXMgPSBjb3JlLl9wcm94aWVzO1xuICBzY3JvbGxlcnMucHVzaC5hcHBseShzY3JvbGxlcnMsIF9zY3JvbGxlcnMpO1xuICBwcm94aWVzLnB1c2guYXBwbHkocHJveGllcywgX3Byb3hpZXMpO1xuICBfc2Nyb2xsZXJzID0gc2Nyb2xsZXJzO1xuICBfcHJveGllcyA9IHByb3hpZXM7XG5cbiAgX2JyaWRnZSA9IGZ1bmN0aW9uIF9icmlkZ2UobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZGF0YVtuYW1lXSh2YWx1ZSk7XG4gIH07XG59LFxuICAgIF9nZXRQcm94eVByb3AgPSBmdW5jdGlvbiBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHJldHVybiB+X3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSAmJiBfcHJveGllc1tfcHJveGllcy5pbmRleE9mKGVsZW1lbnQpICsgMV1bcHJvcGVydHldO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGVsKSB7XG4gIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGVsKTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF9zY3JvbGxMZWZ0ID0gXCJzY3JvbGxMZWZ0XCIsXG4gICAgX3Njcm9sbFRvcCA9IFwic2Nyb2xsVG9wXCIsXG4gICAgX29uU2Nyb2xsID0gZnVuY3Rpb24gX29uU2Nyb2xsKCkge1xuICByZXR1cm4gX25vcm1hbGl6ZXIgJiYgX25vcm1hbGl6ZXIuaXNQcmVzc2VkIHx8IF9zY3JvbGxlcnMuY2FjaGUrKztcbn0sXG4gICAgX3Njcm9sbENhY2hlRnVuYyA9IGZ1bmN0aW9uIF9zY3JvbGxDYWNoZUZ1bmMoZiwgZG9Ob3RDYWNoZSkge1xuICB2YXIgY2FjaGluZ0Z1bmMgPSBmdW5jdGlvbiBjYWNoaW5nRnVuYyh2YWx1ZSkge1xuICAgIC8vIHNpbmNlIHJlYWRpbmcgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0L3BhZ2VPZmZzZXRZL3BhZ2VPZmZzZXRYIGNhbiB0cmlnZ2VyIGEgbGF5b3V0LCB0aGlzIGZ1bmN0aW9uIGFsbG93cyB1cyB0byBjYWNoZSB0aGUgdmFsdWUgc28gaXQgb25seSBnZXRzIHJlYWQgZnJlc2ggYWZ0ZXIgYSBcInNjcm9sbFwiIGV2ZW50IGZpcmVzIChvciB3aGlsZSB3ZSdyZSByZWZyZXNoaW5nIGJlY2F1c2UgdGhhdCBjYW4gbGVuZ3RoZW4gdGhlIHBhZ2UgYW5kIGFsdGVyIHRoZSBzY3JvbGwgcG9zaXRpb24pLiB3aGVuIFwic29mdFwiIGlzIHRydWUsIHRoYXQgbWVhbnMgZG9uJ3QgYWN0dWFsbHkgc2V0IHRoZSBzY3JvbGwsIGJ1dCBjYWNoZSB0aGUgbmV3IHZhbHVlIGluc3RlYWQgKHVzZWZ1bCBpbiBTY3JvbGxTbW9vdGhlcilcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIF9zdGFydHVwICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiKTsgLy8gb3RoZXJ3aXNlIHRoZSBuZXcgcG9zaXRpb24gd2lsbCBnZXQgb3ZlcndyaXR0ZW4gYnkgdGhlIGJyb3dzZXIgb25sb2FkLlxuXG4gICAgICB2YXIgaXNOb3JtYWxpemluZyA9IF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmlzUHJlc3NlZDtcbiAgICAgIHZhbHVlID0gY2FjaGluZ0Z1bmMudiA9IE1hdGgucm91bmQodmFsdWUpIHx8IChfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci5pT1MgPyAxIDogMCk7IC8vVE9ETzogaU9TIEJ1ZzogaWYgeW91IGFsbG93IGl0IHRvIGdvIHRvIDAsIFNhZmFyaSBjYW4gc3RhcnQgdG8gcmVwb3J0IHN1cGVyIHN0cmFuZ2UgKHdpbGRseSBpbmFjY3VyYXRlKSB0b3VjaCBwb3NpdGlvbnMhXG5cbiAgICAgIGYodmFsdWUpO1xuICAgICAgY2FjaGluZ0Z1bmMuY2FjaGVJRCA9IF9zY3JvbGxlcnMuY2FjaGU7XG4gICAgICBpc05vcm1hbGl6aW5nICYmIF9icmlkZ2UoXCJzc1wiLCB2YWx1ZSk7IC8vIHNldCBzY3JvbGwgKG5vdGlmeSBTY3JvbGxUcmlnZ2VyIHNvIGl0IGNhbiBkaXNwYXRjaCBhIFwic2Nyb2xsU3RhcnRcIiBldmVudCBpZiBuZWNlc3NhcnlcbiAgICB9IGVsc2UgaWYgKGRvTm90Q2FjaGUgfHwgX3Njcm9sbGVycy5jYWNoZSAhPT0gY2FjaGluZ0Z1bmMuY2FjaGVJRCB8fCBfYnJpZGdlKFwicmVmXCIpKSB7XG4gICAgICBjYWNoaW5nRnVuYy5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcbiAgICAgIGNhY2hpbmdGdW5jLnYgPSBmKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hpbmdGdW5jLnYgKyBjYWNoaW5nRnVuYy5vZmZzZXQ7XG4gIH07XG5cbiAgY2FjaGluZ0Z1bmMub2Zmc2V0ID0gMDtcbiAgcmV0dXJuIGYgJiYgY2FjaGluZ0Z1bmM7XG59LFxuICAgIF9ob3Jpem9udGFsID0ge1xuICBzOiBfc2Nyb2xsTGVmdCxcbiAgcDogXCJsZWZ0XCIsXG4gIHAyOiBcIkxlZnRcIixcbiAgb3M6IFwicmlnaHRcIixcbiAgb3MyOiBcIlJpZ2h0XCIsXG4gIGQ6IFwid2lkdGhcIixcbiAgZDI6IFwiV2lkdGhcIixcbiAgYTogXCJ4XCIsXG4gIHNjOiBfc2Nyb2xsQ2FjaGVGdW5jKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyh2YWx1ZSwgX3ZlcnRpY2FsLnNjKCkpIDogX3dpbi5wYWdlWE9mZnNldCB8fCBfZG9jW19zY3JvbGxMZWZ0XSB8fCBfZG9jRWxbX3Njcm9sbExlZnRdIHx8IF9ib2R5W19zY3JvbGxMZWZ0XSB8fCAwO1xuICB9KVxufSxcbiAgICBfdmVydGljYWwgPSB7XG4gIHM6IF9zY3JvbGxUb3AsXG4gIHA6IFwidG9wXCIsXG4gIHAyOiBcIlRvcFwiLFxuICBvczogXCJib3R0b21cIixcbiAgb3MyOiBcIkJvdHRvbVwiLFxuICBkOiBcImhlaWdodFwiLFxuICBkMjogXCJIZWlnaHRcIixcbiAgYTogXCJ5XCIsXG4gIG9wOiBfaG9yaXpvbnRhbCxcbiAgc2M6IF9zY3JvbGxDYWNoZUZ1bmMoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKF9ob3Jpem9udGFsLnNjKCksIHZhbHVlKSA6IF93aW4ucGFnZVlPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsVG9wXSB8fCBfZG9jRWxbX3Njcm9sbFRvcF0gfHwgX2JvZHlbX3Njcm9sbFRvcF0gfHwgMDtcbiAgfSlcbn0sXG4gICAgX2dldFRhcmdldCA9IGZ1bmN0aW9uIF9nZXRUYXJnZXQodCwgc2VsZikge1xuICByZXR1cm4gKHNlbGYgJiYgc2VsZi5fY3R4ICYmIHNlbGYuX2N0eC5zZWxlY3RvciB8fCBnc2FwLnV0aWxzLnRvQXJyYXkpKHQpWzBdIHx8ICh0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIiAmJiBnc2FwLmNvbmZpZygpLm51bGxUYXJnZXRXYXJuICE9PSBmYWxzZSA/IGNvbnNvbGUud2FybihcIkVsZW1lbnQgbm90IGZvdW5kOlwiLCB0KSA6IG51bGwpO1xufSxcbiAgICBfZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxGdW5jKGVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIHMgPSBfcmVmLnMsXG4gICAgICBzYyA9IF9yZWYuc2M7XG4gIC8vIHdlIHN0b3JlIHRoZSBzY3JvbGxlciBmdW5jdGlvbnMgaW4gYW4gYWx0ZXJuYXRpbmcgc2VxdWVuY2VkIEFycmF5IGxpa2UgW2VsZW1lbnQsIHZlcnRpY2FsU2Nyb2xsRnVuYywgaG9yaXpvbnRhbFNjcm9sbEZ1bmMsIC4uLl0gc28gdGhhdCB3ZSBjYW4gbWluaW1pemUgbWVtb3J5LCBtYXhpbWl6ZSBwZXJmb3JtYW5jZSwgYW5kIHdlIGFsc28gcmVjb3JkIHRoZSBsYXN0IHBvc2l0aW9uIGFzIGEgXCIucmVjXCIgcHJvcGVydHkgaW4gb3JkZXIgdG8gcmV2ZXJ0IHRvIHRoYXQgYWZ0ZXIgcmVmcmVzaGluZyB0byBlbnN1cmUgdGhpbmdzIGRvbid0IHNoaWZ0IGFyb3VuZC5cbiAgX2lzVmlld3BvcnQoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsKTtcblxuICB2YXIgaSA9IF9zY3JvbGxlcnMuaW5kZXhPZihlbGVtZW50KSxcbiAgICAgIG9mZnNldCA9IHNjID09PSBfdmVydGljYWwuc2MgPyAxIDogMjtcblxuICAhfmkgJiYgKGkgPSBfc2Nyb2xsZXJzLnB1c2goZWxlbWVudCkgLSAxKTtcbiAgX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSB8fCBfYWRkTGlzdGVuZXIoZWxlbWVudCwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTsgLy8gY2xlYXIgdGhlIGNhY2hlIHdoZW4gYSBzY3JvbGwgb2NjdXJzXG5cbiAgdmFyIHByZXYgPSBfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdLFxuICAgICAgZnVuYyA9IHByZXYgfHwgKF9zY3JvbGxlcnNbaSArIG9mZnNldF0gPSBfc2Nyb2xsQ2FjaGVGdW5jKF9nZXRQcm94eVByb3AoZWxlbWVudCwgcyksIHRydWUpIHx8IChfaXNWaWV3cG9ydChlbGVtZW50KSA/IHNjIDogX3Njcm9sbENhY2hlRnVuYyhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGVsZW1lbnRbc10gPSB2YWx1ZSA6IGVsZW1lbnRbc107XG4gIH0pKSk7XG4gIGZ1bmMudGFyZ2V0ID0gZWxlbWVudDtcbiAgcHJldiB8fCAoZnVuYy5zbW9vdGggPSBnc2FwLmdldFByb3BlcnR5KGVsZW1lbnQsIFwic2Nyb2xsQmVoYXZpb3JcIikgPT09IFwic21vb3RoXCIpOyAvLyBvbmx5IHNldCBpdCB0aGUgZmlyc3QgdGltZSAoZG9uJ3QgcmVzZXQgZXZlcnkgdGltZSBhIHNjcm9sbEZ1bmMgaXMgcmVxdWVzdGVkIGJlY2F1c2UgcGVyaGFwcyBpdCBoYXBwZW5zIGR1cmluZyBhIHJlZnJlc2goKSB3aGVuIGl0J3MgZGlzYWJsZWQgaW4gU2Nyb2xsVHJpZ2dlci5cblxuICByZXR1cm4gZnVuYztcbn0sXG4gICAgX2dldFZlbG9jaXR5UHJvcCA9IGZ1bmN0aW9uIF9nZXRWZWxvY2l0eVByb3AodmFsdWUsIG1pblRpbWVSZWZyZXNoLCB1c2VEZWx0YSkge1xuICB2YXIgdjEgPSB2YWx1ZSxcbiAgICAgIHYyID0gdmFsdWUsXG4gICAgICB0MSA9IF9nZXRUaW1lKCksXG4gICAgICB0MiA9IHQxLFxuICAgICAgbWluID0gbWluVGltZVJlZnJlc2ggfHwgNTAsXG4gICAgICBkcm9wVG9aZXJvVGltZSA9IE1hdGgubWF4KDUwMCwgbWluICogMyksXG4gICAgICB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodmFsdWUsIGZvcmNlKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGltZSgpO1xuXG4gICAgaWYgKGZvcmNlIHx8IHQgLSB0MSA+IG1pbikge1xuICAgICAgdjIgPSB2MTtcbiAgICAgIHYxID0gdmFsdWU7XG4gICAgICB0MiA9IHQxO1xuICAgICAgdDEgPSB0O1xuICAgIH0gZWxzZSBpZiAodXNlRGVsdGEpIHtcbiAgICAgIHYxICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3QgdG90YWxseSBuZWNlc3NhcnksIGJ1dCBtYWtlcyBpdCBhIGJpdCBtb3JlIGFjY3VyYXRlIGJ5IGFkanVzdGluZyB0aGUgdjEgdmFsdWUgYWNjb3JkaW5nIHRvIHRoZSBuZXcgc2xvcGUuIFRoaXMgd2F5IHdlJ3JlIG5vdCBqdXN0IGlnbm9yaW5nIHRoZSBpbmNvbWluZyBkYXRhLiBSZW1vdmluZyBmb3Igbm93IGJlY2F1c2UgaXQgZG9lc24ndCBzZWVtIHRvIG1ha2UgbXVjaCBwcmFjdGljYWwgZGlmZmVyZW5jZSBhbmQgaXQncyBwcm9iYWJseSBub3Qgd29ydGggdGhlIGtiLlxuICAgICAgdjEgPSB2MiArICh2YWx1ZSAtIHYyKSAvICh0IC0gdDIpICogKHQxIC0gdDIpO1xuICAgIH1cbiAgfSxcbiAgICAgIHJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdjIgPSB2MSA9IHVzZURlbHRhID8gMCA6IHYxO1xuICAgIHQyID0gdDEgPSAwO1xuICB9LFxuICAgICAgZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eShsYXRlc3RWYWx1ZSkge1xuICAgIHZhciB0T2xkID0gdDIsXG4gICAgICAgIHZPbGQgPSB2MixcbiAgICAgICAgdCA9IF9nZXRUaW1lKCk7XG5cbiAgICAobGF0ZXN0VmFsdWUgfHwgbGF0ZXN0VmFsdWUgPT09IDApICYmIGxhdGVzdFZhbHVlICE9PSB2MSAmJiB1cGRhdGUobGF0ZXN0VmFsdWUpO1xuICAgIHJldHVybiB0MSA9PT0gdDIgfHwgdCAtIHQyID4gZHJvcFRvWmVyb1RpbWUgPyAwIDogKHYxICsgKHVzZURlbHRhID8gdk9sZCA6IC12T2xkKSkgLyAoKHVzZURlbHRhID8gdCA6IHQxKSAtIHRPbGQpICogMTAwMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHJlc2V0OiByZXNldCxcbiAgICBnZXRWZWxvY2l0eTogZ2V0VmVsb2NpdHlcbiAgfTtcbn0sXG4gICAgX2dldEV2ZW50ID0gZnVuY3Rpb24gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KSB7XG4gIHByZXZlbnREZWZhdWx0ICYmICFlLl9nc2FwQWxsb3cgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xufSxcbiAgICBfZ2V0QWJzb2x1dGVNYXggPSBmdW5jdGlvbiBfZ2V0QWJzb2x1dGVNYXgoYSkge1xuICB2YXIgbWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYSksXG4gICAgICBtaW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCBhKTtcbiAgcmV0dXJuIE1hdGguYWJzKG1heCkgPj0gTWF0aC5hYnMobWluKSA/IG1heCA6IG1pbjtcbn0sXG4gICAgX3NldFNjcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2V0U2Nyb2xsVHJpZ2dlcigpIHtcbiAgU2Nyb2xsVHJpZ2dlciA9IGdzYXAuY29yZS5nbG9iYWxzKCkuU2Nyb2xsVHJpZ2dlcjtcbiAgU2Nyb2xsVHJpZ2dlciAmJiBTY3JvbGxUcmlnZ2VyLmNvcmUgJiYgX2ludGVncmF0ZSgpO1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoY29yZSkge1xuICBnc2FwID0gY29yZSB8fCBfZ2V0R1NBUCgpO1xuXG4gIGlmIChnc2FwICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gZG9jdW1lbnQ7XG4gICAgX2RvY0VsID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX2JvZHkgPSBfZG9jLmJvZHk7XG4gICAgX3Jvb3QgPSBbX3dpbiwgX2RvYywgX2RvY0VsLCBfYm9keV07XG4gICAgX2NsYW1wID0gZ3NhcC51dGlscy5jbGFtcDtcblxuICAgIF9jb250ZXh0ID0gZ3NhcC5jb3JlLmNvbnRleHQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBfcG9pbnRlclR5cGUgPSBcIm9ucG9pbnRlcmVudGVyXCIgaW4gX2JvZHkgPyBcInBvaW50ZXJcIiA6IFwibW91c2VcIjsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICBfaXNUb3VjaCA9IE9ic2VydmVyLmlzVG91Y2ggPSBfd2luLm1hdGNoTWVkaWEgJiYgX3dpbi5tYXRjaE1lZGlhKFwiKGhvdmVyOiBub25lKSwgKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcyA/IDEgOiBcIm9udG91Y2hzdGFydFwiIGluIF93aW4gfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDAgPyAyIDogMDtcbiAgICBfZXZlbnRUeXBlcyA9IE9ic2VydmVyLmV2ZW50VHlwZXMgPSAoXCJvbnRvdWNoc3RhcnRcIiBpbiBfZG9jRWwgPyBcInRvdWNoc3RhcnQsdG91Y2htb3ZlLHRvdWNoY2FuY2VsLHRvdWNoZW5kXCIgOiAhKFwib25wb2ludGVyZG93blwiIGluIF9kb2NFbCkgPyBcIm1vdXNlZG93bixtb3VzZW1vdmUsbW91c2V1cCxtb3VzZXVwXCIgOiBcInBvaW50ZXJkb3duLHBvaW50ZXJtb3ZlLHBvaW50ZXJjYW5jZWwscG9pbnRlcnVwXCIpLnNwbGl0KFwiLFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfc3RhcnR1cCA9IDA7XG4gICAgfSwgNTAwKTtcblxuICAgIF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG5cbiAgICBfY29yZUluaXR0ZWQgPSAxO1xuICB9XG5cbiAgcmV0dXJuIF9jb3JlSW5pdHRlZDtcbn07XG5cbl9ob3Jpem9udGFsLm9wID0gX3ZlcnRpY2FsO1xuX3Njcm9sbGVycy5jYWNoZSA9IDA7XG5leHBvcnQgdmFyIE9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2ZXIodmFycykge1xuICAgIHRoaXMuaW5pdCh2YXJzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KHZhcnMpIHtcbiAgICBfY29yZUluaXR0ZWQgfHwgX2luaXRDb3JlKGdzYXApIHx8IGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKE9ic2VydmVyKVwiKTtcbiAgICBTY3JvbGxUcmlnZ2VyIHx8IF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG4gICAgdmFyIHRvbGVyYW5jZSA9IHZhcnMudG9sZXJhbmNlLFxuICAgICAgICBkcmFnTWluaW11bSA9IHZhcnMuZHJhZ01pbmltdW0sXG4gICAgICAgIHR5cGUgPSB2YXJzLnR5cGUsXG4gICAgICAgIHRhcmdldCA9IHZhcnMudGFyZ2V0LFxuICAgICAgICBsaW5lSGVpZ2h0ID0gdmFycy5saW5lSGVpZ2h0LFxuICAgICAgICBkZWJvdW5jZSA9IHZhcnMuZGVib3VuY2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gdmFycy5wcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgb25TdG9wID0gdmFycy5vblN0b3AsXG4gICAgICAgIG9uU3RvcERlbGF5ID0gdmFycy5vblN0b3BEZWxheSxcbiAgICAgICAgaWdub3JlID0gdmFycy5pZ25vcmUsXG4gICAgICAgIHdoZWVsU3BlZWQgPSB2YXJzLndoZWVsU3BlZWQsXG4gICAgICAgIGV2ZW50ID0gdmFycy5ldmVudCxcbiAgICAgICAgb25EcmFnU3RhcnQgPSB2YXJzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWdFbmQgPSB2YXJzLm9uRHJhZ0VuZCxcbiAgICAgICAgb25EcmFnID0gdmFycy5vbkRyYWcsXG4gICAgICAgIG9uUHJlc3MgPSB2YXJzLm9uUHJlc3MsXG4gICAgICAgIG9uUmVsZWFzZSA9IHZhcnMub25SZWxlYXNlLFxuICAgICAgICBvblJpZ2h0ID0gdmFycy5vblJpZ2h0LFxuICAgICAgICBvbkxlZnQgPSB2YXJzLm9uTGVmdCxcbiAgICAgICAgb25VcCA9IHZhcnMub25VcCxcbiAgICAgICAgb25Eb3duID0gdmFycy5vbkRvd24sXG4gICAgICAgIG9uQ2hhbmdlWCA9IHZhcnMub25DaGFuZ2VYLFxuICAgICAgICBvbkNoYW5nZVkgPSB2YXJzLm9uQ2hhbmdlWSxcbiAgICAgICAgb25DaGFuZ2UgPSB2YXJzLm9uQ2hhbmdlLFxuICAgICAgICBvblRvZ2dsZVggPSB2YXJzLm9uVG9nZ2xlWCxcbiAgICAgICAgb25Ub2dnbGVZID0gdmFycy5vblRvZ2dsZVksXG4gICAgICAgIG9uSG92ZXIgPSB2YXJzLm9uSG92ZXIsXG4gICAgICAgIG9uSG92ZXJFbmQgPSB2YXJzLm9uSG92ZXJFbmQsXG4gICAgICAgIG9uTW92ZSA9IHZhcnMub25Nb3ZlLFxuICAgICAgICBpZ25vcmVDaGVjayA9IHZhcnMuaWdub3JlQ2hlY2ssXG4gICAgICAgIGlzTm9ybWFsaXplciA9IHZhcnMuaXNOb3JtYWxpemVyLFxuICAgICAgICBvbkdlc3R1cmVTdGFydCA9IHZhcnMub25HZXN0dXJlU3RhcnQsXG4gICAgICAgIG9uR2VzdHVyZUVuZCA9IHZhcnMub25HZXN0dXJlRW5kLFxuICAgICAgICBvbldoZWVsID0gdmFycy5vbldoZWVsLFxuICAgICAgICBvbkVuYWJsZSA9IHZhcnMub25FbmFibGUsXG4gICAgICAgIG9uRGlzYWJsZSA9IHZhcnMub25EaXNhYmxlLFxuICAgICAgICBvbkNsaWNrID0gdmFycy5vbkNsaWNrLFxuICAgICAgICBzY3JvbGxTcGVlZCA9IHZhcnMuc2Nyb2xsU3BlZWQsXG4gICAgICAgIGNhcHR1cmUgPSB2YXJzLmNhcHR1cmUsXG4gICAgICAgIGFsbG93Q2xpY2tzID0gdmFycy5hbGxvd0NsaWNrcyxcbiAgICAgICAgbG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzLFxuICAgICAgICBvbkxvY2tBeGlzID0gdmFycy5vbkxvY2tBeGlzO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ID0gX2dldFRhcmdldCh0YXJnZXQpIHx8IF9kb2NFbDtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIGlnbm9yZSAmJiAoaWdub3JlID0gZ3NhcC51dGlscy50b0FycmF5KGlnbm9yZSkpO1xuICAgIHRvbGVyYW5jZSA9IHRvbGVyYW5jZSB8fCAxZS05O1xuICAgIGRyYWdNaW5pbXVtID0gZHJhZ01pbmltdW0gfHwgMDtcbiAgICB3aGVlbFNwZWVkID0gd2hlZWxTcGVlZCB8fCAxO1xuICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgfHwgMTtcbiAgICB0eXBlID0gdHlwZSB8fCBcIndoZWVsLHRvdWNoLHBvaW50ZXJcIjtcbiAgICBkZWJvdW5jZSA9IGRlYm91bmNlICE9PSBmYWxzZTtcbiAgICBsaW5lSGVpZ2h0IHx8IChsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChfd2luLmdldENvbXB1dGVkU3R5bGUoX2JvZHkpLmxpbmVIZWlnaHQpIHx8IDIyKTsgLy8gbm90ZTogYnJvd3NlciBtYXkgcmVwb3J0IFwibm9ybWFsXCIsIHNvIGRlZmF1bHQgdG8gMjIuXG5cbiAgICB2YXIgaWQsXG4gICAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgICBkcmFnZ2VkLFxuICAgICAgICBtb3ZlZCxcbiAgICAgICAgd2hlZWxlZCxcbiAgICAgICAgbG9ja2VkLFxuICAgICAgICBheGlzLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgcHJldkRlbHRhWCA9IDAsXG4gICAgICAgIHByZXZEZWx0YVkgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jWCA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX2hvcml6b250YWwpLFxuICAgICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgICAgc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgIHNjcm9sbFkgPSBzY3JvbGxGdW5jWSgpLFxuICAgICAgICBsaW1pdFRvVG91Y2ggPSB+dHlwZS5pbmRleE9mKFwidG91Y2hcIikgJiYgIX50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpICYmIF9ldmVudFR5cGVzWzBdID09PSBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgIC8vIGZvciBkZXZpY2VzIHRoYXQgYWNjb21tb2RhdGUgbW91c2UgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMsIHdlIG5lZWQgdG8gZGlzdGluZ3Vpc2guXG4gICAgaXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHRhcmdldCksXG4gICAgICAgIG93bmVyRG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgX2RvYyxcbiAgICAgICAgZGVsdGFYID0gWzAsIDAsIDBdLFxuICAgICAgICAvLyB3aGVlbCwgc2Nyb2xsLCBwb2ludGVyL3RvdWNoXG4gICAgZGVsdGFZID0gWzAsIDAsIDBdLFxuICAgICAgICBvbkNsaWNrVGltZSA9IDAsXG4gICAgICAgIGNsaWNrQ2FwdHVyZSA9IGZ1bmN0aW9uIGNsaWNrQ2FwdHVyZSgpIHtcbiAgICAgIHJldHVybiBvbkNsaWNrVGltZSA9IF9nZXRUaW1lKCk7XG4gICAgfSxcbiAgICAgICAgX2lnbm9yZUNoZWNrID0gZnVuY3Rpb24gX2lnbm9yZUNoZWNrKGUsIGlzUG9pbnRlck9yVG91Y2gpIHtcbiAgICAgIHJldHVybiAoc2VsZi5ldmVudCA9IGUpICYmIGlnbm9yZSAmJiB+aWdub3JlLmluZGV4T2YoZS50YXJnZXQpIHx8IGlzUG9pbnRlck9yVG91Y2ggJiYgbGltaXRUb1RvdWNoICYmIGUucG9pbnRlclR5cGUgIT09IFwidG91Y2hcIiB8fCBpZ25vcmVDaGVjayAmJiBpZ25vcmVDaGVjayhlLCBpc1BvaW50ZXJPclRvdWNoKTtcbiAgICB9LFxuICAgICAgICBvblN0b3BGdW5jID0gZnVuY3Rpb24gb25TdG9wRnVuYygpIHtcbiAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBkeCA9IHNlbGYuZGVsdGFYID0gX2dldEFic29sdXRlTWF4KGRlbHRhWCksXG4gICAgICAgICAgZHkgPSBzZWxmLmRlbHRhWSA9IF9nZXRBYnNvbHV0ZU1heChkZWx0YVkpLFxuICAgICAgICAgIGNoYW5nZWRYID0gTWF0aC5hYnMoZHgpID49IHRvbGVyYW5jZSxcbiAgICAgICAgICBjaGFuZ2VkWSA9IE1hdGguYWJzKGR5KSA+PSB0b2xlcmFuY2U7XG5cbiAgICAgIG9uQ2hhbmdlICYmIChjaGFuZ2VkWCB8fCBjaGFuZ2VkWSkgJiYgb25DaGFuZ2Uoc2VsZiwgZHgsIGR5LCBkZWx0YVgsIGRlbHRhWSk7IC8vIGluIFNjcm9sbFRyaWdnZXIubm9ybWFsaXplU2Nyb2xsKCksIHdlIG5lZWQgdG8ga25vdyBpZiBpdCB3YXMgdG91Y2gvcG9pbnRlciBzbyB3ZSBuZWVkIGFjY2VzcyB0byB0aGUgZGVsdGFYL2RlbHRhWSBBcnJheXMgYmVmb3JlIHdlIGNsZWFyIHRoZW0gb3V0LlxuXG4gICAgICBpZiAoY2hhbmdlZFgpIHtcbiAgICAgICAgb25SaWdodCAmJiBzZWxmLmRlbHRhWCA+IDAgJiYgb25SaWdodChzZWxmKTtcbiAgICAgICAgb25MZWZ0ICYmIHNlbGYuZGVsdGFYIDwgMCAmJiBvbkxlZnQoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWCAmJiBvbkNoYW5nZVgoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWCAmJiBzZWxmLmRlbHRhWCA8IDAgIT09IHByZXZEZWx0YVggPCAwICYmIG9uVG9nZ2xlWChzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWCA9IHNlbGYuZGVsdGFYO1xuICAgICAgICBkZWx0YVhbMF0gPSBkZWx0YVhbMV0gPSBkZWx0YVhbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZFkpIHtcbiAgICAgICAgb25Eb3duICYmIHNlbGYuZGVsdGFZID4gMCAmJiBvbkRvd24oc2VsZik7XG4gICAgICAgIG9uVXAgJiYgc2VsZi5kZWx0YVkgPCAwICYmIG9uVXAoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWSAmJiBvbkNoYW5nZVkoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWSAmJiBzZWxmLmRlbHRhWSA8IDAgIT09IHByZXZEZWx0YVkgPCAwICYmIG9uVG9nZ2xlWShzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWSA9IHNlbGYuZGVsdGFZO1xuICAgICAgICBkZWx0YVlbMF0gPSBkZWx0YVlbMV0gPSBkZWx0YVlbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobW92ZWQgfHwgZHJhZ2dlZCkge1xuICAgICAgICBvbk1vdmUgJiYgb25Nb3ZlKHNlbGYpO1xuXG4gICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgb25EcmFnKHNlbGYpO1xuICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxvY2tlZCAmJiAhKGxvY2tlZCA9IGZhbHNlKSAmJiBvbkxvY2tBeGlzICYmIG9uTG9ja0F4aXMoc2VsZik7XG5cbiAgICAgIGlmICh3aGVlbGVkKSB7XG4gICAgICAgIG9uV2hlZWwoc2VsZik7XG4gICAgICAgIHdoZWVsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWQgPSAwO1xuICAgIH0sXG4gICAgICAgIG9uRGVsdGEgPSBmdW5jdGlvbiBvbkRlbHRhKHgsIHksIGluZGV4KSB7XG4gICAgICBkZWx0YVhbaW5kZXhdICs9IHg7XG4gICAgICBkZWx0YVlbaW5kZXhdICs9IHk7XG5cbiAgICAgIHNlbGYuX3Z4LnVwZGF0ZSh4KTtcblxuICAgICAgc2VsZi5fdnkudXBkYXRlKHkpO1xuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YSA9IGZ1bmN0aW9uIG9uVG91Y2hPclBvaW50ZXJEZWx0YSh4LCB5KSB7XG4gICAgICBpZiAobG9ja0F4aXMgJiYgIWF4aXMpIHtcbiAgICAgICAgc2VsZi5heGlzID0gYXhpcyA9IE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeSkgPyBcInhcIiA6IFwieVwiO1xuICAgICAgICBsb2NrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ5XCIpIHtcbiAgICAgICAgZGVsdGFYWzJdICs9IHg7XG5cbiAgICAgICAgc2VsZi5fdngudXBkYXRlKHgsIHRydWUpOyAvLyB1cGRhdGUgdGhlIHZlbG9jaXR5IGFzIGZyZXF1ZW50bHkgYXMgcG9zc2libGUgaW5zdGVhZCBvZiBpbiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHNvIHRoYXQgdmVyeSBxdWljayB0b3VjaC1zY3JvbGxzIChmbGlja3MpIGZlZWwgbmF0dXJhbC4gSWYgaXQncyB0aGUgbW91c2UvdG91Y2gvcG9pbnRlciwgZm9yY2UgaXQgc28gdGhhdCB3ZSBnZXQgc25hcHB5L2FjY3VyYXRlIG1vbWVudHVtIHNjcm9sbC5cblxuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ4XCIpIHtcbiAgICAgICAgZGVsdGFZWzJdICs9IHk7XG5cbiAgICAgICAgc2VsZi5fdnkudXBkYXRlKHksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIF9vbkRyYWcgPSBmdW5jdGlvbiBfb25EcmFnKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIHZhciB4ID0gZS5jbGllbnRYLFxuICAgICAgICAgIHkgPSBlLmNsaWVudFksXG4gICAgICAgICAgZHggPSB4IC0gc2VsZi54LFxuICAgICAgICAgIGR5ID0geSAtIHNlbGYueSxcbiAgICAgICAgICBpc0RyYWdnaW5nID0gc2VsZi5pc0RyYWdnaW5nO1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nIHx8IE1hdGguYWJzKHNlbGYuc3RhcnRYIC0geCkgPj0gZHJhZ01pbmltdW0gfHwgTWF0aC5hYnMoc2VsZi5zdGFydFkgLSB5KSA+PSBkcmFnTWluaW11bSkge1xuICAgICAgICBvbkRyYWcgJiYgKGRyYWdnZWQgPSB0cnVlKTtcbiAgICAgICAgaXNEcmFnZ2luZyB8fCAoc2VsZi5pc0RyYWdnaW5nID0gdHJ1ZSk7XG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgICAgICBpc0RyYWdnaW5nIHx8IG9uRHJhZ1N0YXJ0ICYmIG9uRHJhZ1N0YXJ0KHNlbGYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIF9vblByZXNzID0gc2VsZi5vblByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkgfHwgZSAmJiBlLmJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuYXhpcyA9IGF4aXMgPSBudWxsO1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucGF1c2UoKTtcbiAgICAgIHNlbGYuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGUgPSBfZ2V0RXZlbnQoZSk7IC8vIG5vdGU6IG1heSBuZWVkIHRvIHByZXZlbnREZWZhdWx0KD8pIFdvbid0IHNpZGUtc2Nyb2xsIG9uIGlPUyBTYWZhcmkgaWYgd2UgZG8sIHRob3VnaC5cblxuICAgICAgcHJldkRlbHRhWCA9IHByZXZEZWx0YVkgPSAwO1xuICAgICAgc2VsZi5zdGFydFggPSBzZWxmLnggPSBlLmNsaWVudFg7XG4gICAgICBzZWxmLnN0YXJ0WSA9IHNlbGYueSA9IGUuY2xpZW50WTtcblxuICAgICAgc2VsZi5fdngucmVzZXQoKTsgLy8gb3RoZXJ3aXNlIHRoZSB0MiBtYXkgYmUgc3RhbGUgaWYgdGhlIHVzZXIgdG91Y2hlcyBhbmQgZmxpY2tzIHN1cGVyIGZhc3QgYW5kIHJlbGVhc2VzIGluIGxlc3MgdGhhbiAyIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aWNrcywgY2F1c2luZyB2ZWxvY2l0eSB0byBiZSAwLlxuXG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIF9hZGRMaXN0ZW5lcihpc05vcm1hbGl6ZXIgPyB0YXJnZXQgOiBvd25lckRvYywgX2V2ZW50VHlwZXNbMV0sIF9vbkRyYWcsIHByZXZlbnREZWZhdWx0LCB0cnVlKTtcblxuICAgICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgICBvblByZXNzICYmIG9uUHJlc3Moc2VsZik7XG4gICAgfSxcbiAgICAgICAgX29uUmVsZWFzZSA9IHNlbGYub25SZWxlYXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNOb3JtYWxpemVyID8gdGFyZ2V0IDogb3duZXJEb2MsIF9ldmVudFR5cGVzWzFdLCBfb25EcmFnLCB0cnVlKTtcblxuICAgICAgdmFyIGlzVHJhY2tpbmdEcmFnID0gIWlzTmFOKHNlbGYueSAtIHNlbGYuc3RhcnRZKSxcbiAgICAgICAgICB3YXNEcmFnZ2luZyA9IHNlbGYuaXNEcmFnZ2luZyAmJiAoTWF0aC5hYnMoc2VsZi54IC0gc2VsZi5zdGFydFgpID4gMyB8fCBNYXRoLmFicyhzZWxmLnkgLSBzZWxmLnN0YXJ0WSkgPiAzKSxcbiAgICAgICAgICAvLyBzb21lIHRvdWNoIGRldmljZXMgbmVlZCBzb21lIHdpZ2dsZSByb29tIGluIHRlcm1zIG9mIHNlbnNpbmcgY2xpY2tzIC0gdGhlIGZpbmdlciBtYXkgbW92ZSBhIGZldyBwaXhlbHMuXG4gICAgICBldmVudERhdGEgPSBfZ2V0RXZlbnQoZSk7XG5cbiAgICAgIGlmICghd2FzRHJhZ2dpbmcgJiYgaXNUcmFja2luZ0RyYWcpIHtcbiAgICAgICAgc2VsZi5fdngucmVzZXQoKTtcblxuICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCAmJiBhbGxvd0NsaWNrcykge1xuICAgICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC4wOCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB3b24ndCB0cnVzdCBzY3JpcHQtZ2VuZXJhdGVkIGNsaWNrcywgc28gaWYgdGhlIHVzZXIgdHJpZXMgdG8gY2xpY2sgb24gYSB2aWRlbyB0byBwbGF5IGl0LCBmb3IgZXhhbXBsZSwgaXQgc2ltcGx5IHdvbid0IHdvcmsuIFNpbmNlIGEgcmVndWxhciBcImNsaWNrXCIgZXZlbnQgd2lsbCBtb3N0IGxpa2VseSBiZSBnZW5lcmF0ZWQgYW55d2F5IChvbmUgdGhhdCBoYXMgaXRzIGlzVHJ1c3RlZCBmbGFnIHNldCB0byB0cnVlKSwgd2UgbXVzdCBzbGlnaHRseSBkZWxheSBvdXIgc2NyaXB0LWdlbmVyYXRlZCBjbGljayBzbyB0aGF0IHRoZSBcInJlYWxcIi90cnVzdGVkIG9uZSBpcyBwcmlvcml0aXplZC4gUmVtZW1iZXIsIHdoZW4gdGhlcmUgYXJlIGR1cGxpY2F0ZSBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbiwgd2Ugc3VwcHJlc3MgYWxsIGJ1dCB0aGUgZmlyc3Qgb25lLiBTb21lIGJyb3dzZXJzIGRvbid0IGV2ZW4gdHJpZ2dlciB0aGUgXCJyZWFsXCIgb25lIGF0IGFsbCwgc28gb3VyIHN5bnRoZXRpYyBvbmUgaXMgYSBzYWZldHkgdmFsdmUgdGhhdCBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIHdoYXQsIGEgY2xpY2sgZXZlbnQgZG9lcyBnZXQgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgIGlmIChfZ2V0VGltZSgpIC0gb25DbGlja1RpbWUgPiAzMDAgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xpY2spIHtcbiAgICAgICAgICAgICAgICAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgbW9iaWxlIFNhZmFyaSkgZG9uJ3QgcHJvcGVybHkgdHJpZ2dlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG93bmVyRG9jLmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bnRoZXRpY0V2ZW50ID0gb3duZXJEb2MuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBzeW50aGV0aWNFdmVudC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUsIF93aW4sIDEsIGV2ZW50RGF0YS5zY3JlZW5YLCBldmVudERhdGEuc2NyZWVuWSwgZXZlbnREYXRhLmNsaWVudFgsIGV2ZW50RGF0YS5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChzeW50aGV0aWNFdmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmlzRHJhZ2dpbmcgPSBzZWxmLmlzR2VzdHVyaW5nID0gc2VsZi5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgIG9uU3RvcCAmJiAhaXNOb3JtYWxpemVyICYmIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICBvbkRyYWdFbmQgJiYgd2FzRHJhZ2dpbmcgJiYgb25EcmFnRW5kKHNlbGYpO1xuICAgICAgb25SZWxlYXNlICYmIG9uUmVsZWFzZShzZWxmLCB3YXNEcmFnZ2luZyk7XG4gICAgfSxcbiAgICAgICAgX29uR2VzdHVyZVN0YXJ0ID0gZnVuY3Rpb24gX29uR2VzdHVyZVN0YXJ0KGUpIHtcbiAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEgJiYgKHNlbGYuaXNHZXN0dXJpbmcgPSB0cnVlKSAmJiBvbkdlc3R1cmVTdGFydChlLCBzZWxmLmlzRHJhZ2dpbmcpO1xuICAgIH0sXG4gICAgICAgIF9vbkdlc3R1cmVFbmQgPSBmdW5jdGlvbiBfb25HZXN0dXJlRW5kKCkge1xuICAgICAgcmV0dXJuIChzZWxmLmlzR2VzdHVyaW5nID0gZmFsc2UpIHx8IG9uR2VzdHVyZUVuZChzZWxmKTtcbiAgICB9LFxuICAgICAgICBvblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgeCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgICAgeSA9IHNjcm9sbEZ1bmNZKCk7XG4gICAgICBvbkRlbHRhKCh4IC0gc2Nyb2xsWCkgKiBzY3JvbGxTcGVlZCwgKHkgLSBzY3JvbGxZKSAqIHNjcm9sbFNwZWVkLCAxKTtcbiAgICAgIHNjcm9sbFggPSB4O1xuICAgICAgc2Nyb2xsWSA9IHk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25XaGVlbCA9IGZ1bmN0aW9uIF9vbldoZWVsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIG9uV2hlZWwgJiYgKHdoZWVsZWQgPSB0cnVlKTtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gKGUuZGVsdGFNb2RlID09PSAxID8gbGluZUhlaWdodCA6IGUuZGVsdGFNb2RlID09PSAyID8gX3dpbi5pbm5lckhlaWdodCA6IDEpICogd2hlZWxTcGVlZDtcbiAgICAgIG9uRGVsdGEoZS5kZWx0YVggKiBtdWx0aXBsaWVyLCBlLmRlbHRhWSAqIG11bHRpcGxpZXIsIDApO1xuICAgICAgb25TdG9wICYmICFpc05vcm1hbGl6ZXIgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25Nb3ZlID0gZnVuY3Rpb24gX29uTW92ZShlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHggPSBlLmNsaWVudFgsXG4gICAgICAgICAgeSA9IGUuY2xpZW50WSxcbiAgICAgICAgICBkeCA9IHggLSBzZWxmLngsXG4gICAgICAgICAgZHkgPSB5IC0gc2VsZi55O1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAoZHggfHwgZHkpICYmIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyID0gZnVuY3Rpb24gX29uSG92ZXIoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyRW5kID0gZnVuY3Rpb24gX29uSG92ZXJFbmQoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyRW5kKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkNsaWNrID0gZnVuY3Rpb24gX29uQ2xpY2soZSkge1xuICAgICAgcmV0dXJuIF9pZ25vcmVDaGVjayhlKSB8fCBfZ2V0RXZlbnQoZSwgcHJldmVudERlZmF1bHQpICYmIG9uQ2xpY2soc2VsZik7XG4gICAgfTtcblxuICAgIG9uU3RvcERlbGF5ZWRDYWxsID0gc2VsZi5fZGMgPSBnc2FwLmRlbGF5ZWRDYWxsKG9uU3RvcERlbGF5IHx8IDAuMjUsIG9uU3RvcEZ1bmMpLnBhdXNlKCk7XG4gICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgc2VsZi5fdnggPSBfZ2V0VmVsb2NpdHlQcm9wKDAsIDUwLCB0cnVlKTtcbiAgICBzZWxmLl92eSA9IF9nZXRWZWxvY2l0eVByb3AoMCwgNTAsIHRydWUpO1xuICAgIHNlbGYuc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYO1xuICAgIHNlbGYuc2Nyb2xsWSA9IHNjcm9sbEZ1bmNZO1xuICAgIHNlbGYuaXNEcmFnZ2luZyA9IHNlbGYuaXNHZXN0dXJpbmcgPSBzZWxmLmlzUHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgX2NvbnRleHQodGhpcyk7XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXNlbGYuaXNFbmFibGVkKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihpc1ZpZXdwb3J0ID8gb3duZXJEb2MgOiB0YXJnZXQsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICAgICAgdHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpID49IDAgJiYgX2FkZExpc3RlbmVyKGlzVmlld3BvcnQgPyBvd25lckRvYyA6IHRhcmdldCwgXCJzY3JvbGxcIiwgb25TY3JvbGwsIHByZXZlbnREZWZhdWx0LCBjYXB0dXJlKTtcbiAgICAgICAgdHlwZS5pbmRleE9mKFwid2hlZWxcIikgPj0gMCAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBcIndoZWVsXCIsIF9vbldoZWVsLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZihcInRvdWNoXCIpID49IDAgJiYgX2lzVG91Y2ggfHwgdHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA+PSAwKSB7XG4gICAgICAgICAgX2FkZExpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICAgIF9hZGRMaXN0ZW5lcihvd25lckRvYywgX2V2ZW50VHlwZXNbM10sIF9vblJlbGVhc2UpO1xuXG4gICAgICAgICAgYWxsb3dDbGlja3MgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBjbGlja0NhcHR1cmUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBvbkNsaWNrICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIFwiY2xpY2tcIiwgX29uQ2xpY2spO1xuICAgICAgICAgIG9uR2VzdHVyZVN0YXJ0ICYmIF9hZGRMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlc3RhcnRcIiwgX29uR2VzdHVyZVN0YXJ0KTtcbiAgICAgICAgICBvbkdlc3R1cmVFbmQgJiYgX2FkZExpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVlbmRcIiwgX29uR2VzdHVyZUVuZCk7XG4gICAgICAgICAgb25Ib3ZlciAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImVudGVyXCIsIF9vbkhvdmVyKTtcbiAgICAgICAgICBvbkhvdmVyRW5kICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuICAgICAgICAgIG9uTW92ZSAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcIm1vdmVcIiwgX29uTW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGUgJiYgZS50eXBlICYmIF9vblByZXNzKGUpO1xuICAgICAgICBvbkVuYWJsZSAmJiBvbkVuYWJsZShzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmlzRW5hYmxlZCkge1xuICAgICAgICAvLyBvbmx5IHJlbW92ZSB0aGUgX29uU2Nyb2xsIGxpc3RlbmVyIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3RoZXJzIHRoYXQgcmVseSBvbiB0aGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgX29ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICByZXR1cm4gbyAhPT0gc2VsZiAmJiBfaXNWaWV3cG9ydChvLnRhcmdldCk7XG4gICAgICAgIH0pLmxlbmd0aCB8fCBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgICAgIGlmIChzZWxmLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGlzTm9ybWFsaXplciA/IHRhcmdldCA6IG93bmVyRG9jLCBfZXZlbnRUeXBlc1sxXSwgX29uRHJhZywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBvblNjcm9sbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJ3aGVlbFwiLCBfb25XaGVlbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBjYXB0dXJlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzNdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBcImNsaWNrXCIsIGNsaWNrQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBfb25DbGljayk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVzdGFydFwiLCBfb25HZXN0dXJlU3RhcnQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlZW5kXCIsIF9vbkdlc3R1cmVFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwiZW50ZXJcIiwgX29uSG92ZXIpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibW92ZVwiLCBfb25Nb3ZlKTtcblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHNlbGYuaXNQcmVzc2VkID0gc2VsZi5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIG9uRGlzYWJsZSAmJiBvbkRpc2FibGUoc2VsZik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYua2lsbCA9IHNlbGYucmV2ZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5kaXNhYmxlKCk7XG5cbiAgICAgIHZhciBpID0gX29ic2VydmVycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX29ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBfbm9ybWFsaXplciA9PT0gc2VsZiAmJiAoX25vcm1hbGl6ZXIgPSAwKTtcbiAgICB9O1xuXG4gICAgX29ic2VydmVycy5wdXNoKHNlbGYpO1xuXG4gICAgaXNOb3JtYWxpemVyICYmIF9pc1ZpZXdwb3J0KHRhcmdldCkgJiYgKF9ub3JtYWxpemVyID0gc2VsZik7XG4gICAgc2VsZi5lbmFibGUoZXZlbnQpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZlciwgW3tcbiAgICBrZXk6IFwidmVsb2NpdHlYXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnguZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmVsb2NpdHlZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnkuZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2ZXI7XG59KCk7XG5PYnNlcnZlci52ZXJzaW9uID0gXCIzLjEyLjJcIjtcblxuT2JzZXJ2ZXIuY3JlYXRlID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcih2YXJzKTtcbn07XG5cbk9ic2VydmVyLnJlZ2lzdGVyID0gX2luaXRDb3JlO1xuXG5PYnNlcnZlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLnNsaWNlKCk7XG59O1xuXG5PYnNlcnZlci5nZXRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLnZhcnMuaWQgPT09IGlkO1xuICB9KVswXTtcbn07XG5cbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihPYnNlcnZlcik7XG5leHBvcnQgeyBPYnNlcnZlciBhcyBkZWZhdWx0LCBfaXNWaWV3cG9ydCwgX3Njcm9sbGVycywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9wcm94aWVzLCBfZ2V0VmVsb2NpdHlQcm9wLCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfZ2V0VGFyZ2V0IH07IiwiLyohXG4gKiBTY3JvbGxUcmlnZ2VyIDMuMTIuMlxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IE9ic2VydmVyLCBfZ2V0VGFyZ2V0LCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfc2Nyb2xsZXJzLCBfcHJveGllcywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9nZXRWZWxvY2l0eVByb3AgfSBmcm9tIFwiLi9PYnNlcnZlci5qc1wiO1xuXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbCxcbiAgICBfYm9keSxcbiAgICBfcm9vdCxcbiAgICBfcmVzaXplRGVsYXksXG4gICAgX3RvQXJyYXksXG4gICAgX2NsYW1wLFxuICAgIF90aW1lMixcbiAgICBfc3luY0ludGVydmFsLFxuICAgIF9yZWZyZXNoaW5nLFxuICAgIF9wb2ludGVySXNEb3duLFxuICAgIF90cmFuc2Zvcm1Qcm9wLFxuICAgIF9pLFxuICAgIF9wcmV2V2lkdGgsXG4gICAgX3ByZXZIZWlnaHQsXG4gICAgX2F1dG9SZWZyZXNoLFxuICAgIF9zb3J0LFxuICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgX2lnbm9yZVJlc2l6ZSxcbiAgICBfbm9ybWFsaXplcixcbiAgICBfaWdub3JlTW9iaWxlUmVzaXplLFxuICAgIF9iYXNlU2NyZWVuSGVpZ2h0LFxuICAgIF9iYXNlU2NyZWVuV2lkdGgsXG4gICAgX2ZpeElPU0J1ZyxcbiAgICBfY29udGV4dCxcbiAgICBfc2Nyb2xsUmVzdG9yYXRpb24sXG4gICAgX2RpdjEwMHZoLFxuICAgIF8xMDB2aCxcbiAgICBfbGltaXRDYWxsYmFja3MsXG4gICAgLy8gaWYgdHJ1ZSwgd2UnbGwgb25seSB0cmlnZ2VyIGNhbGxiYWNrcyBpZiB0aGUgYWN0aXZlIHN0YXRlIHRvZ2dsZXMsIHNvIGlmIHlvdSBzY3JvbGwgaW1tZWRpYXRlbHkgcGFzdCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucyBvZiBhIFNjcm9sbFRyaWdnZXIgKHRodXMgaW5hY3RpdmUgdG8gaW5hY3RpdmUpLCBuZWl0aGVyIGl0cyBvbkVudGVyIG5vciBvbkxlYXZlIHdpbGwgYmUgY2FsbGVkLiBUaGlzIGlzIHVzZWZ1bCBkdXJpbmcgc3RhcnR1cC5cbl9zdGFydHVwID0gMSxcbiAgICBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgIF90aW1lMSA9IF9nZXRUaW1lKCksXG4gICAgX2xhc3RTY3JvbGxUaW1lID0gMCxcbiAgICBfZW5hYmxlZCA9IDAsXG4gICAgX3BhcnNlQ2xhbXAgPSBmdW5jdGlvbiBfcGFyc2VDbGFtcCh2YWx1ZSwgdHlwZSwgc2VsZikge1xuICB2YXIgY2xhbXAgPSBfaXNTdHJpbmcodmFsdWUpICYmICh2YWx1ZS5zdWJzdHIoMCwgNikgPT09IFwiY2xhbXAoXCIgfHwgdmFsdWUuaW5kZXhPZihcIm1heFwiKSA+IC0xKTtcbiAgc2VsZltcIl9cIiArIHR5cGUgKyBcIkNsYW1wXCJdID0gY2xhbXA7XG4gIHJldHVybiBjbGFtcCA/IHZhbHVlLnN1YnN0cig2LCB2YWx1ZS5sZW5ndGggLSA3KSA6IHZhbHVlO1xufSxcbiAgICBfa2VlcENsYW1wID0gZnVuY3Rpb24gX2tlZXBDbGFtcCh2YWx1ZSwgY2xhbXApIHtcbiAgcmV0dXJuIGNsYW1wICYmICghX2lzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5zdWJzdHIoMCwgNikgIT09IFwiY2xhbXAoXCIpID8gXCJjbGFtcChcIiArIHZhbHVlICsgXCIpXCIgOiB2YWx1ZTtcbn0sXG4gICAgX3JhZkJ1Z0ZpeCA9IGZ1bmN0aW9uIF9yYWZCdWdGaXgoKSB7XG4gIHJldHVybiBfZW5hYmxlZCAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3JhZkJ1Z0ZpeCk7XG59LFxuICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCksIHNjcmVlbiByZXBhaW50cyB3ZXJlbid0IGNvbnNpc3RlbnQgdW5sZXNzIHdlIGhhZCBTT01FVEhJTkcgcXVldWVkIHVwIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpISBTbyB0aGlzIGp1c3QgY3JlYXRlcyBhIHN1cGVyIHNpbXBsZSBsb29wIHRvIGtlZXAgaXQgYWxpdmUgYW5kIHNtb290aCBvdXQgcmVwYWludHMuXG5fcG9pbnRlckRvd25IYW5kbGVyID0gZnVuY3Rpb24gX3BvaW50ZXJEb3duSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMTtcbn0sXG4gICAgX3BvaW50ZXJVcEhhbmRsZXIgPSBmdW5jdGlvbiBfcG9pbnRlclVwSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMDtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHYpIHtcbiAgcmV0dXJuIHY7XG59LFxuICAgIF9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCBfd2luZG93RXhpc3RzKCkgJiYgKGdzYXAgPSB3aW5kb3cuZ3NhcCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbiAmJiBnc2FwO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGUpIHtcbiAgcmV0dXJuICEhfl9yb290LmluZGV4T2YoZSk7XG59LFxuICAgIF9nZXRWaWV3cG9ydERpbWVuc2lvbiA9IGZ1bmN0aW9uIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkaW1lbnNpb25Qcm9wZXJ0eSkge1xuICByZXR1cm4gKGRpbWVuc2lvblByb3BlcnR5ID09PSBcIkhlaWdodFwiID8gXzEwMHZoIDogX3dpbltcImlubmVyXCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV0pIHx8IF9kb2NFbFtcImNsaWVudFwiICsgZGltZW5zaW9uUHJvcGVydHldIHx8IF9ib2R5W1wiY2xpZW50XCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV07XG59LFxuICAgIF9nZXRCb3VuZHNGdW5jID0gZnVuY3Rpb24gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkge1xuICByZXR1cm4gX2dldFByb3h5UHJvcChlbGVtZW50LCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiKSB8fCAoX2lzVmlld3BvcnQoZWxlbWVudCkgPyBmdW5jdGlvbiAoKSB7XG4gICAgX3dpbk9mZnNldHMud2lkdGggPSBfd2luLmlubmVyV2lkdGg7XG4gICAgX3dpbk9mZnNldHMuaGVpZ2h0ID0gXzEwMHZoO1xuICAgIHJldHVybiBfd2luT2Zmc2V0cztcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgfSk7XG59LFxuICAgIF9nZXRTaXplRnVuYyA9IGZ1bmN0aW9uIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgX3JlZikge1xuICB2YXIgZCA9IF9yZWYuZCxcbiAgICAgIGQyID0gX3JlZi5kMixcbiAgICAgIGEgPSBfcmVmLmE7XG4gIHJldHVybiAoYSA9IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYSgpW2RdO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoaXNWaWV3cG9ydCA/IF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBzY3JvbGxlcltcImNsaWVudFwiICsgZDJdKSB8fCAwO1xuICB9O1xufSxcbiAgICBfZ2V0T2Zmc2V0c0Z1bmMgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0c0Z1bmMoZWxlbWVudCwgaXNWaWV3cG9ydCkge1xuICByZXR1cm4gIWlzVmlld3BvcnQgfHwgfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgPyBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3dpbk9mZnNldHM7XG4gIH07XG59LFxuICAgIF9tYXhTY3JvbGwgPSBmdW5jdGlvbiBfbWF4U2Nyb2xsKGVsZW1lbnQsIF9yZWYyKSB7XG4gIHZhciBzID0gX3JlZjIucyxcbiAgICAgIGQyID0gX3JlZjIuZDIsXG4gICAgICBkID0gX3JlZjIuZCxcbiAgICAgIGEgPSBfcmVmMi5hO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgKHMgPSBcInNjcm9sbFwiICsgZDIpICYmIChhID0gX2dldFByb3h5UHJvcChlbGVtZW50LCBzKSkgPyBhKCkgLSBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSgpW2RdIDogX2lzVmlld3BvcnQoZWxlbWVudCkgPyAoX2RvY0VsW3NdIHx8IF9ib2R5W3NdKSAtIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBlbGVtZW50W3NdIC0gZWxlbWVudFtcIm9mZnNldFwiICsgZDJdKTtcbn0sXG4gICAgX2l0ZXJhdGVBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uIF9pdGVyYXRlQXV0b1JlZnJlc2goZnVuYywgZXZlbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX2F1dG9SZWZyZXNoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgKCFldmVudHMgfHwgfmV2ZW50cy5pbmRleE9mKF9hdXRvUmVmcmVzaFtpICsgMV0pKSAmJiBmdW5jKF9hdXRvUmVmcmVzaFtpXSwgX2F1dG9SZWZyZXNoW2kgKyAxXSwgX2F1dG9SZWZyZXNoW2kgKyAyXSk7XG4gIH1cbn0sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9lbmRBbmltYXRpb24gPSBmdW5jdGlvbiBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgcmV2ZXJzZWQsIHBhdXNlKSB7XG4gIHJldHVybiBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKHJldmVyc2VkID8gMCA6IDEpICYmIHBhdXNlICYmIGFuaW1hdGlvbi5wYXVzZSgpO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soc2VsZiwgZnVuYykge1xuICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMoc2VsZik7XG4gICAgcmVzdWx0ICYmIHJlc3VsdC50b3RhbFRpbWUgJiYgKHNlbGYuY2FsbGJhY2tBbmltYXRpb24gPSByZXN1bHQpO1xuICB9XG59LFxuICAgIF9hYnMgPSBNYXRoLmFicyxcbiAgICBfbGVmdCA9IFwibGVmdFwiLFxuICAgIF90b3AgPSBcInRvcFwiLFxuICAgIF9yaWdodCA9IFwicmlnaHRcIixcbiAgICBfYm90dG9tID0gXCJib3R0b21cIixcbiAgICBfd2lkdGggPSBcIndpZHRoXCIsXG4gICAgX2hlaWdodCA9IFwiaGVpZ2h0XCIsXG4gICAgX1JpZ2h0ID0gXCJSaWdodFwiLFxuICAgIF9MZWZ0ID0gXCJMZWZ0XCIsXG4gICAgX1RvcCA9IFwiVG9wXCIsXG4gICAgX0JvdHRvbSA9IFwiQm90dG9tXCIsXG4gICAgX3BhZGRpbmcgPSBcInBhZGRpbmdcIixcbiAgICBfbWFyZ2luID0gXCJtYXJnaW5cIixcbiAgICBfV2lkdGggPSBcIldpZHRoXCIsXG4gICAgX0hlaWdodCA9IFwiSGVpZ2h0XCIsXG4gICAgX3B4ID0gXCJweFwiLFxuICAgIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gX3dpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSxcbiAgICBfbWFrZVBvc2l0aW9uYWJsZSA9IGZ1bmN0aW9uIF9tYWtlUG9zaXRpb25hYmxlKGVsZW1lbnQpIHtcbiAgLy8gaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBoYXMgcG9zaXRpb246IGFic29sdXRlIG9yIGZpeGVkLCBsZWF2ZSB0aGF0LCBvdGhlcndpc2UgbWFrZSBpdCBwb3NpdGlvbjogcmVsYXRpdmVcbiAgdmFyIHBvc2l0aW9uID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb247XG5cbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiA/IHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9nZXRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzKGVsZW1lbnQsIHdpdGhvdXRUcmFuc2Zvcm1zKSB7XG4gIHZhciB0d2VlbiA9IHdpdGhvdXRUcmFuc2Zvcm1zICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW190cmFuc2Zvcm1Qcm9wXSAhPT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiAmJiBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeFBlcmNlbnQ6IDAsXG4gICAgeVBlcmNlbnQ6IDAsXG4gICAgcm90YXRpb246IDAsXG4gICAgcm90YXRpb25YOiAwLFxuICAgIHJvdGF0aW9uWTogMCxcbiAgICBzY2FsZTogMSxcbiAgICBza2V3WDogMCxcbiAgICBza2V3WTogMFxuICB9KS5wcm9ncmVzcygxKSxcbiAgICAgIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHR3ZWVuICYmIHR3ZWVuLnByb2dyZXNzKDApLmtpbGwoKTtcbiAgcmV0dXJuIGJvdW5kcztcbn0sXG4gICAgX2dldFNpemUgPSBmdW5jdGlvbiBfZ2V0U2l6ZShlbGVtZW50LCBfcmVmMykge1xuICB2YXIgZDIgPSBfcmVmMy5kMjtcbiAgcmV0dXJuIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSB8fCBlbGVtZW50W1wiY2xpZW50XCIgKyBkMl0gfHwgMDtcbn0sXG4gICAgX2dldExhYmVsUmF0aW9BcnJheSA9IGZ1bmN0aW9uIF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpIHtcbiAgdmFyIGEgPSBbXSxcbiAgICAgIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIGR1cmF0aW9uID0gdGltZWxpbmUuZHVyYXRpb24oKSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGEucHVzaChsYWJlbHNbcF0gLyBkdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gYTtcbn0sXG4gICAgX2dldENsb3Nlc3RMYWJlbCA9IGZ1bmN0aW9uIF9nZXRDbG9zZXN0TGFiZWwoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZ3NhcC51dGlscy5zbmFwKF9nZXRMYWJlbFJhdGlvQXJyYXkoYW5pbWF0aW9uKSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICBfc25hcERpcmVjdGlvbmFsID0gZnVuY3Rpb24gX3NuYXBEaXJlY3Rpb25hbChzbmFwSW5jcmVtZW50T3JBcnJheSkge1xuICB2YXIgc25hcCA9IGdzYXAudXRpbHMuc25hcChzbmFwSW5jcmVtZW50T3JBcnJheSksXG4gICAgICBhID0gQXJyYXkuaXNBcnJheShzbmFwSW5jcmVtZW50T3JBcnJheSkgJiYgc25hcEluY3JlbWVudE9yQXJyYXkuc2xpY2UoMCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG4gIHJldHVybiBhID8gZnVuY3Rpb24gKHZhbHVlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCkge1xuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMWUtMztcbiAgICB9XG5cbiAgICB2YXIgaTtcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gc25hcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHZhbHVlIC09IHRocmVzaG9sZDsgLy8gdG8gYXZvaWQgcm91bmRpbmcgZXJyb3JzLiBJZiB3ZSdyZSB0b28gc3RyaWN0LCBpdCBtaWdodCBzbmFwIGZvcndhcmQsIHRoZW4gaW1tZWRpYXRlbHkgYWdhaW4sIGFuZCBhZ2Fpbi5cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPj0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYVtpIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgPSBhLmxlbmd0aDtcbiAgICAgIHZhbHVlICs9IHRocmVzaG9sZDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAoYVtpXSA8PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBhW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFbMF07XG4gIH0gOiBmdW5jdGlvbiAodmFsdWUsIGRpcmVjdGlvbiwgdGhyZXNob2xkKSB7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxZS0zO1xuICAgIH1cblxuICAgIHZhciBzbmFwcGVkID0gc25hcCh2YWx1ZSk7XG4gICAgcmV0dXJuICFkaXJlY3Rpb24gfHwgTWF0aC5hYnMoc25hcHBlZCAtIHZhbHVlKSA8IHRocmVzaG9sZCB8fCBzbmFwcGVkIC0gdmFsdWUgPCAwID09PSBkaXJlY3Rpb24gPCAwID8gc25hcHBlZCA6IHNuYXAoZGlyZWN0aW9uIDwgMCA/IHZhbHVlIC0gc25hcEluY3JlbWVudE9yQXJyYXkgOiB2YWx1ZSArIHNuYXBJbmNyZW1lbnRPckFycmF5KTtcbiAgfTtcbn0sXG4gICAgX2dldExhYmVsQXREaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxBdERpcmVjdGlvbih0aW1lbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgIHJldHVybiBfc25hcERpcmVjdGlvbmFsKF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpKSh2YWx1ZSwgc3QuZGlyZWN0aW9uKTtcbiAgfTtcbn0sXG4gICAgX211bHRpTGlzdGVuZXIgPSBmdW5jdGlvbiBfbXVsdGlMaXN0ZW5lcihmdW5jLCBlbGVtZW50LCB0eXBlcywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHR5cGVzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmMoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2spO1xuICB9KTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF93aGVlbExpc3RlbmVyID0gZnVuY3Rpb24gX3doZWVsTGlzdGVuZXIoZnVuYywgZWwsIHNjcm9sbEZ1bmMpIHtcbiAgc2Nyb2xsRnVuYyA9IHNjcm9sbEZ1bmMgJiYgc2Nyb2xsRnVuYy53aGVlbEhhbmRsZXI7XG5cbiAgaWYgKHNjcm9sbEZ1bmMpIHtcbiAgICBmdW5jKGVsLCBcIndoZWVsXCIsIHNjcm9sbEZ1bmMpO1xuICAgIGZ1bmMoZWwsIFwidG91Y2htb3ZlXCIsIHNjcm9sbEZ1bmMpO1xuICB9XG59LFxuICAgIF9tYXJrZXJEZWZhdWx0cyA9IHtcbiAgc3RhcnRDb2xvcjogXCJncmVlblwiLFxuICBlbmRDb2xvcjogXCJyZWRcIixcbiAgaW5kZW50OiAwLFxuICBmb250U2l6ZTogXCIxNnB4XCIsXG4gIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcbiAgYW50aWNpcGF0ZVBpbjogMFxufSxcbiAgICBfa2V5d29yZHMgPSB7XG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgY2VudGVyOiAwLjUsXG4gIGJvdHRvbTogMSxcbiAgcmlnaHQ6IDFcbn0sXG4gICAgX29mZnNldFRvUHggPSBmdW5jdGlvbiBfb2Zmc2V0VG9QeCh2YWx1ZSwgc2l6ZSkge1xuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBlcUluZGV4ID0gdmFsdWUuaW5kZXhPZihcIj1cIiksXG4gICAgICAgIHJlbGF0aXZlID0gfmVxSW5kZXggPyArKHZhbHVlLmNoYXJBdChlcUluZGV4IC0gMSkgKyAxKSAqIHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKGVxSW5kZXggKyAxKSkgOiAwO1xuXG4gICAgaWYgKH5lcUluZGV4KSB7XG4gICAgICB2YWx1ZS5pbmRleE9mKFwiJVwiKSA+IGVxSW5kZXggJiYgKHJlbGF0aXZlICo9IHNpemUgLyAxMDApO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgZXFJbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHZhbHVlID0gcmVsYXRpdmUgKyAodmFsdWUgaW4gX2tleXdvcmRzID8gX2tleXdvcmRzW3ZhbHVlXSAqIHNpemUgOiB+dmFsdWUuaW5kZXhPZihcIiVcIikgPyBwYXJzZUZsb2F0KHZhbHVlKSAqIHNpemUgLyAxMDAgOiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn0sXG4gICAgX2NyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIF9jcmVhdGVNYXJrZXIodHlwZSwgbmFtZSwgY29udGFpbmVyLCBkaXJlY3Rpb24sIF9yZWY0LCBvZmZzZXQsIG1hdGNoV2lkdGhFbCwgY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gIHZhciBzdGFydENvbG9yID0gX3JlZjQuc3RhcnRDb2xvcixcbiAgICAgIGVuZENvbG9yID0gX3JlZjQuZW5kQ29sb3IsXG4gICAgICBmb250U2l6ZSA9IF9yZWY0LmZvbnRTaXplLFxuICAgICAgaW5kZW50ID0gX3JlZjQuaW5kZW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWY0LmZvbnRXZWlnaHQ7XG5cbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICB1c2VGaXhlZFBvc2l0aW9uID0gX2lzVmlld3BvcnQoY29udGFpbmVyKSB8fCBfZ2V0UHJveHlQcm9wKGNvbnRhaW5lciwgXCJwaW5UeXBlXCIpID09PSBcImZpeGVkXCIsXG4gICAgICBpc1Njcm9sbGVyID0gdHlwZS5pbmRleE9mKFwic2Nyb2xsZXJcIikgIT09IC0xLFxuICAgICAgcGFyZW50ID0gdXNlRml4ZWRQb3NpdGlvbiA/IF9ib2R5IDogY29udGFpbmVyLFxuICAgICAgaXNTdGFydCA9IHR5cGUuaW5kZXhPZihcInN0YXJ0XCIpICE9PSAtMSxcbiAgICAgIGNvbG9yID0gaXNTdGFydCA/IHN0YXJ0Q29sb3IgOiBlbmRDb2xvcixcbiAgICAgIGNzcyA9IFwiYm9yZGVyLWNvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXNpemU6XCIgKyBmb250U2l6ZSArIFwiO2NvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXdlaWdodDpcIiArIGZvbnRXZWlnaHQgKyBcIjtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpzYW5zLXNlcmlmLEFyaWFsO3otaW5kZXg6MTAwMDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO1wiO1xuXG4gIGNzcyArPSBcInBvc2l0aW9uOlwiICsgKChpc1Njcm9sbGVyIHx8IGNvbnRhaW5lckFuaW1hdGlvbikgJiYgdXNlRml4ZWRQb3NpdGlvbiA/IFwiZml4ZWQ7XCIgOiBcImFic29sdXRlO1wiKTtcbiAgKGlzU2Nyb2xsZXIgfHwgY29udGFpbmVyQW5pbWF0aW9uIHx8ICF1c2VGaXhlZFBvc2l0aW9uKSAmJiAoY3NzICs9IChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9yaWdodCA6IF9ib3R0b20pICsgXCI6XCIgKyAob2Zmc2V0ICsgcGFyc2VGbG9hdChpbmRlbnQpKSArIFwicHg7XCIpO1xuICBtYXRjaFdpZHRoRWwgJiYgKGNzcyArPSBcImJveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6XCIgKyBtYXRjaFdpZHRoRWwub2Zmc2V0V2lkdGggKyBcInB4O1wiKTtcbiAgZS5faXNTdGFydCA9IGlzU3RhcnQ7XG4gIGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnc2FwLW1hcmtlci1cIiArIHR5cGUgKyAobmFtZSA/IFwiIG1hcmtlci1cIiArIG5hbWUgOiBcIlwiKSk7XG4gIGUuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgZS5pbm5lclRleHQgPSBuYW1lIHx8IG5hbWUgPT09IDAgPyB0eXBlICsgXCItXCIgKyBuYW1lIDogdHlwZTtcbiAgcGFyZW50LmNoaWxkcmVuWzBdID8gcGFyZW50Lmluc2VydEJlZm9yZShlLCBwYXJlbnQuY2hpbGRyZW5bMF0pIDogcGFyZW50LmFwcGVuZENoaWxkKGUpO1xuICBlLl9vZmZzZXQgPSBlW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gIF9wb3NpdGlvbk1hcmtlcihlLCAwLCBkaXJlY3Rpb24sIGlzU3RhcnQpO1xuXG4gIHJldHVybiBlO1xufSxcbiAgICBfcG9zaXRpb25NYXJrZXIgPSBmdW5jdGlvbiBfcG9zaXRpb25NYXJrZXIobWFya2VyLCBzdGFydCwgZGlyZWN0aW9uLCBmbGlwcGVkKSB7XG4gIHZhciB2YXJzID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICAgICAgc2lkZSA9IGRpcmVjdGlvbltmbGlwcGVkID8gXCJvczJcIiA6IFwicDJcIl0sXG4gICAgICBvcHBvc2l0ZVNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwicDJcIiA6IFwib3MyXCJdO1xuICBtYXJrZXIuX2lzRmxpcHBlZCA9IGZsaXBwZWQ7XG4gIHZhcnNbZGlyZWN0aW9uLmEgKyBcIlBlcmNlbnRcIl0gPSBmbGlwcGVkID8gLTEwMCA6IDA7XG4gIHZhcnNbZGlyZWN0aW9uLmFdID0gZmxpcHBlZCA/IFwiMXB4XCIgOiAwO1xuICB2YXJzW1wiYm9yZGVyXCIgKyBzaWRlICsgX1dpZHRoXSA9IDE7XG4gIHZhcnNbXCJib3JkZXJcIiArIG9wcG9zaXRlU2lkZSArIF9XaWR0aF0gPSAwO1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IHN0YXJ0ICsgXCJweFwiO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICBfdHJpZ2dlcnMgPSBbXSxcbiAgICBfaWRzID0ge30sXG4gICAgX3JhZklELFxuICAgIF9zeW5jID0gZnVuY3Rpb24gX3N5bmMoKSB7XG4gIHJldHVybiBfZ2V0VGltZSgpIC0gX2xhc3RTY3JvbGxUaW1lID4gMzQgJiYgKF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKSk7XG59LFxuICAgIF9vblNjcm9sbCA9IGZ1bmN0aW9uIF9vblNjcm9sbCgpIHtcbiAgLy8gcHJldmlvdXNseSwgd2UgdHJpZWQgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgYnkgYmF0Y2hpbmcvZGVmZXJyaW5nIHRvIHRoZSBuZXh0IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpLCBidXQgZGlzY292ZXJlZCB0aGF0IFNhZmFyaSBoYXMgYSBmZXcgYnVncyB0aGF0IG1ha2UgdGhpcyB1bndvcmthYmxlIChlc3BlY2lhbGx5IG9uIGlPUykuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xNmM0MzViMTJlZjA5YzM4MTI1MjA0ODE4ZTdiNDVmYz9lZGl0b3JzPTAwMTAgYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqT3hZcFEvM2RkNjVjY2VjNWE2MGYxZDg2MmMzNTVkODRkMTQ1NjI/ZWRpdG9ycz0wMDEwIGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzP2VkaXRvcnM9MDAxMFxuICBpZiAoIV9ub3JtYWxpemVyIHx8ICFfbm9ybWFsaXplci5pc1ByZXNzZWQgfHwgX25vcm1hbGl6ZXIuc3RhcnRYID4gX2JvZHkuY2xpZW50V2lkdGgpIHtcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBkcmFnZ2luZyB0aGUgc2Nyb2xsYmFyLCBhbGxvdyBpdC5cbiAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICBpZiAoX25vcm1hbGl6ZXIpIHtcbiAgICAgIF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3VwZGF0ZUFsbCgpOyAvLyBTYWZhcmkgaW4gcGFydGljdWxhciAob24gZGVza3RvcCkgTkVFRFMgdGhlIGltbWVkaWF0ZSB1cGRhdGUgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZWFzIGlPUyBzZWVtcyB0byBiZW5lZml0IGZyb20gd2FpdGluZyBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRpY2ssIGF0IGxlYXN0IHdoZW4gbm9ybWFsaXppbmcuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9xQllvenFPP2VkaXRvcnM9MDExMFxuXG4gICAgfVxuXG4gICAgX2xhc3RTY3JvbGxUaW1lIHx8IF9kaXNwYXRjaChcInNjcm9sbFN0YXJ0XCIpO1xuICAgIF9sYXN0U2Nyb2xsVGltZSA9IF9nZXRUaW1lKCk7XG4gIH1cbn0sXG4gICAgX3NldEJhc2VEaW1lbnNpb25zID0gZnVuY3Rpb24gX3NldEJhc2VEaW1lbnNpb25zKCkge1xuICBfYmFzZVNjcmVlbldpZHRoID0gX3dpbi5pbm5lcldpZHRoO1xuICBfYmFzZVNjcmVlbkhlaWdodCA9IF93aW4uaW5uZXJIZWlnaHQ7XG59LFxuICAgIF9vblJlc2l6ZSA9IGZ1bmN0aW9uIF9vblJlc2l6ZSgpIHtcbiAgX3Njcm9sbGVycy5jYWNoZSsrO1xuICAhX3JlZnJlc2hpbmcgJiYgIV9pZ25vcmVSZXNpemUgJiYgIV9kb2MuZnVsbHNjcmVlbkVsZW1lbnQgJiYgIV9kb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiYgKCFfaWdub3JlTW9iaWxlUmVzaXplIHx8IF9iYXNlU2NyZWVuV2lkdGggIT09IF93aW4uaW5uZXJXaWR0aCB8fCBNYXRoLmFicyhfd2luLmlubmVySGVpZ2h0IC0gX2Jhc2VTY3JlZW5IZWlnaHQpID4gX3dpbi5pbm5lckhlaWdodCAqIDAuMjUpICYmIF9yZXNpemVEZWxheS5yZXN0YXJ0KHRydWUpO1xufSxcbiAgICAvLyBpZ25vcmUgcmVzaXplcyB0cmlnZ2VyZWQgYnkgcmVmcmVzaCgpXG5fbGlzdGVuZXJzID0ge30sXG4gICAgX2VtcHR5QXJyYXkgPSBbXSxcbiAgICBfc29mdFJlZnJlc2ggPSBmdW5jdGlvbiBfc29mdFJlZnJlc2goKSB7XG4gIHJldHVybiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKSB8fCBfcmVmcmVzaEFsbCh0cnVlKTtcbn0sXG4gICAgX2Rpc3BhdGNoID0gZnVuY3Rpb24gX2Rpc3BhdGNoKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnNbdHlwZV0gJiYgX2xpc3RlbmVyc1t0eXBlXS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZigpO1xuICB9KSB8fCBfZW1wdHlBcnJheTtcbn0sXG4gICAgX3NhdmVkU3R5bGVzID0gW10sXG4gICAgLy8gd2hlbiBTY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMoKSBpcyBjYWxsZWQsIHRoZSBpbmxpbmUgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiB0aGlzIEFycmF5IGluIGEgc2VxdWVudGlhbCBmb3JtYXQgbGlrZSBbZWxlbWVudCwgY3NzVGV4dCwgZ3NDYWNoZSwgbWVkaWFdLiBUaGlzIGtlZXBzIGl0IHZlcnkgbWVtb3J5LWVmZmljaWVudCBhbmQgZmFzdCB0byBpdGVyYXRlIHRocm91Z2guXG5fcmV2ZXJ0UmVjb3JkZWQgPSBmdW5jdGlvbiBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfc2F2ZWRTdHlsZXMubGVuZ3RoOyBpICs9IDUpIHtcbiAgICBpZiAoIW1lZGlhIHx8IF9zYXZlZFN0eWxlc1tpICsgNF0gJiYgX3NhdmVkU3R5bGVzW2kgKyA0XS5xdWVyeSA9PT0gbWVkaWEpIHtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5zdHlsZS5jc3NUZXh0ID0gX3NhdmVkU3R5bGVzW2kgKyAxXTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5nZXRCQm94ICYmIF9zYXZlZFN0eWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgX3NhdmVkU3R5bGVzW2kgKyAyXSB8fCBcIlwiKTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpICsgM10udW5jYWNoZSA9IDE7XG4gICAgfVxuICB9XG59LFxuICAgIF9yZXZlcnRBbGwgPSBmdW5jdGlvbiBfcmV2ZXJ0QWxsKGtpbGwsIG1lZGlhKSB7XG4gIHZhciB0cmlnZ2VyO1xuXG4gIGZvciAoX2kgPSAwOyBfaSA8IF90cmlnZ2Vycy5sZW5ndGg7IF9pKyspIHtcbiAgICB0cmlnZ2VyID0gX3RyaWdnZXJzW19pXTtcblxuICAgIGlmICh0cmlnZ2VyICYmICghbWVkaWEgfHwgdHJpZ2dlci5fY3R4ID09PSBtZWRpYSkpIHtcbiAgICAgIGlmIChraWxsKSB7XG4gICAgICAgIHRyaWdnZXIua2lsbCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1lZGlhICYmIF9yZXZlcnRSZWNvcmRlZChtZWRpYSk7XG4gIG1lZGlhIHx8IF9kaXNwYXRjaChcInJldmVydFwiKTtcbn0sXG4gICAgX2NsZWFyU2Nyb2xsTWVtb3J5ID0gZnVuY3Rpb24gX2NsZWFyU2Nyb2xsTWVtb3J5KHNjcm9sbFJlc3RvcmF0aW9uLCBmb3JjZSkge1xuICAvLyB6ZXJvLW91dCBhbGwgdGhlIHJlY29yZGVkIHNjcm9sbCBwb3NpdGlvbnMuIERvbid0IHVzZSBfdHJpZ2dlcnMgYmVjYXVzZSBpZiwgZm9yIGV4YW1wbGUsIC5tYXRjaE1lZGlhKCkgaXMgdXNlZCB0byBjcmVhdGUgc29tZSBTY3JvbGxUcmlnZ2VycyBhbmQgdGhlbiB0aGUgdXNlciByZXNpemVzIGFuZCBpdCByZW1vdmVzIEFMTCBTY3JvbGxUcmlnZ2VycywgYW5kIHRoZW4gZ28gYmFjayB0byBhIHNpemUgd2hlcmUgdGhlcmUgYXJlIFNjcm9sbFRyaWdnZXJzLCBpdCB3b3VsZCBoYXZlIGtlcHQgdGhlIHBvc2l0aW9uKHMpIHNhdmVkIGZyb20gdGhlIGluaXRpYWwgc3RhdGUuXG4gIF9zY3JvbGxlcnMuY2FjaGUrKztcbiAgKGZvcmNlIHx8ICFfcmVmcmVzaGluZ0FsbCkgJiYgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24ob2JqKSAmJiBvYmouY2FjaGVJRCsrICYmIChvYmoucmVjID0gMCk7XG4gIH0pO1xuICBfaXNTdHJpbmcoc2Nyb2xsUmVzdG9yYXRpb24pICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBfc2Nyb2xsUmVzdG9yYXRpb24gPSBzY3JvbGxSZXN0b3JhdGlvbik7XG59LFxuICAgIF9yZWZyZXNoaW5nQWxsLFxuICAgIF9yZWZyZXNoSUQgPSAwLFxuICAgIF9xdWV1ZVJlZnJlc2hJRCxcbiAgICBfcXVldWVSZWZyZXNoQWxsID0gZnVuY3Rpb24gX3F1ZXVlUmVmcmVzaEFsbCgpIHtcbiAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWxsIF9yZWZyZXNoQWxsKCkgZXZlcnkgdGltZSB3ZSBjcmVhdGUgYSBuZXcgU2Nyb2xsVHJpZ2dlciAoZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMpIC0gaXQncyBiZXR0ZXIgdG8gYmF0Y2ggdGhlbS4gU29tZSBmcmFtZXdvcmtzIGR5bmFtaWNhbGx5IGxvYWQgY29udGVudCBhbmQgd2UgY2FuJ3QgcmVseSBvbiB0aGUgd2luZG93J3MgXCJsb2FkXCIgb3IgXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnRzIHRvIHRyaWdnZXIgaXQuXG4gIGlmIChfcXVldWVSZWZyZXNoSUQgIT09IF9yZWZyZXNoSUQpIHtcbiAgICB2YXIgaWQgPSBfcXVldWVSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaWQgPT09IF9yZWZyZXNoSUQgJiYgX3JlZnJlc2hBbGwodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn0sXG4gICAgX3JlZnJlc2gxMDB2aCA9IGZ1bmN0aW9uIF9yZWZyZXNoMTAwdmgoKSB7XG4gIF9ib2R5LmFwcGVuZENoaWxkKF9kaXYxMDB2aCk7XG5cbiAgXzEwMHZoID0gX2RpdjEwMHZoLm9mZnNldEhlaWdodCB8fCBfd2luLmlubmVySGVpZ2h0O1xuXG4gIF9ib2R5LnJlbW92ZUNoaWxkKF9kaXYxMDB2aCk7XG59LFxuICAgIF9yZWZyZXNoQWxsID0gZnVuY3Rpb24gX3JlZnJlc2hBbGwoZm9yY2UsIHNraXBSZXZlcnQpIHtcbiAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhZm9yY2UpIHtcbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yZWZyZXNoMTAwdmgoKTtcblxuICBfcmVmcmVzaGluZ0FsbCA9IFNjcm9sbFRyaWdnZXIuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblxuICBfc2Nyb2xsZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBfaXNGdW5jdGlvbihvYmopICYmICsrb2JqLmNhY2hlSUQgJiYgKG9iai5yZWMgPSBvYmooKSk7XG4gIH0pOyAvLyBmb3JjZSB0aGUgY2xlYXJpbmcgb2YgdGhlIGNhY2hlIGJlY2F1c2Ugc29tZSBicm93c2VycyB0YWtlIGEgbGl0dGxlIHdoaWxlIHRvIGRpc3BhdGNoIHRoZSBcInNjcm9sbFwiIGV2ZW50IGFuZCB0aGUgdXNlciBtYXkgaGF2ZSBjaGFuZ2VkIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIHRoZW4gY2FsbGVkIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIHJpZ2h0IGF3YXlcblxuXG4gIHZhciByZWZyZXNoSW5pdHMgPSBfZGlzcGF0Y2goXCJyZWZyZXNoSW5pdFwiKTtcblxuICBfc29ydCAmJiBTY3JvbGxUcmlnZ2VyLnNvcnQoKTtcbiAgc2tpcFJldmVydCB8fCBfcmV2ZXJ0QWxsKCk7XG5cbiAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoX2lzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgb2JqLnNtb290aCAmJiAob2JqLnRhcmdldC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwiYXV0b1wiKTsgLy8gc21vb3RoIHNjcm9sbGluZyBpbnRlcmZlcmVzXG5cbiAgICAgIG9iaigwKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQucmVmcmVzaCgpO1xuICB9KTsgLy8gZG9uJ3QgbG9vcCB3aXRoIF9pIGJlY2F1c2UgZHVyaW5nIGEgcmVmcmVzaCgpIHNvbWVvbmUgY291bGQgY2FsbCBTY3JvbGxUcmlnZ2VyLnVwZGF0ZSgpIHdoaWNoIHdvdWxkIGl0ZXJhdGUgdGhyb3VnaCBfaSByZXN1bHRpbmcgaW4gYSBza2lwLlxuXG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAvLyBuZXN0ZWQgcGlucyAocGlubmVkQ29udGFpbmVyKSB3aXRoIHBpblNwYWNpbmcgbWF5IGV4cGFuZCB0aGUgY29udGFpbmVyLCBzbyB3ZSBtdXN0IGFjY29tbW9kYXRlIHRoYXQgaGVyZS5cbiAgICBpZiAodC5fc3ViUGluT2Zmc2V0ICYmIHQucGluKSB7XG4gICAgICB2YXIgcHJvcCA9IHQudmFycy5ob3Jpem9udGFsID8gXCJvZmZzZXRXaWR0aFwiIDogXCJvZmZzZXRIZWlnaHRcIixcbiAgICAgICAgICBvcmlnaW5hbCA9IHQucGluW3Byb3BdO1xuICAgICAgdC5yZXZlcnQodHJ1ZSwgMSk7XG4gICAgICB0LmFkanVzdFBpblNwYWNpbmcodC5waW5bcHJvcF0gLSBvcmlnaW5hbCk7XG4gICAgICB0LnJlZnJlc2goKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgLy8gdGhlIHNjcm9sbGVyJ3MgbWF4IHNjcm9sbCBwb3NpdGlvbiBtYXkgY2hhbmdlIGFmdGVyIGFsbCB0aGUgU2Nyb2xsVHJpZ2dlcnMgcmVmcmVzaGVkIChsaWtlIHBpbm5pbmcgY291bGQgcHVzaCBpdCBkb3duKSwgc28gd2UgbmVlZCB0byBsb29wIGJhY2sgYW5kIGNvcnJlY3QgYW55IHdpdGggZW5kOiBcIm1heFwiLiBTYW1lIGZvciBhbnl0aGluZyB3aXRoIGEgY2xhbXBlZCBlbmRcbiAgICB2YXIgbWF4ID0gX21heFNjcm9sbCh0LnNjcm9sbGVyLCB0Ll9kaXIpO1xuXG4gICAgKHQudmFycy5lbmQgPT09IFwibWF4XCIgfHwgdC5fZW5kQ2xhbXAgJiYgdC5lbmQgPiBtYXgpICYmIHQuc2V0UG9zaXRpb25zKHQuc3RhcnQsIE1hdGgubWF4KHQuc3RhcnQgKyAxLCBtYXgpLCB0cnVlKTtcbiAgfSk7XG5cbiAgcmVmcmVzaEluaXRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnJlbmRlciAmJiByZXN1bHQucmVuZGVyKC0xKTtcbiAgfSk7IC8vIGlmIHRoZSBvblJlZnJlc2hJbml0KCkgcmV0dXJucyBhbiBhbmltYXRpb24gKHR5cGljYWxseSBhIGdzYXAuc2V0KCkpLCByZXZlcnQgaXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBwdXQgdGhpbmdzIGluIGEgY2VydGFpbiBzcG90IGJlZm9yZSByZWZyZXNoaW5nIGZvciBtZWFzdXJlbWVudCBwdXJwb3NlcywgYW5kIHRoZW4gcHV0IHRoaW5ncyBiYWNrLlxuXG4gIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKF9pc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIG9iai5zbW9vdGggJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9iai50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgfSk7XG4gICAgICBvYmoucmVjICYmIG9iaihvYmoucmVjKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9jbGVhclNjcm9sbE1lbW9yeShfc2Nyb2xsUmVzdG9yYXRpb24sIDEpO1xuXG4gIF9yZXNpemVEZWxheS5wYXVzZSgpO1xuXG4gIF9yZWZyZXNoSUQrKztcbiAgX3JlZnJlc2hpbmdBbGwgPSAyO1xuXG4gIF91cGRhdGVBbGwoMik7XG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odC52YXJzLm9uUmVmcmVzaCkgJiYgdC52YXJzLm9uUmVmcmVzaCh0KTtcbiAgfSk7XG5cbiAgX3JlZnJlc2hpbmdBbGwgPSBTY3JvbGxUcmlnZ2VyLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gIF9kaXNwYXRjaChcInJlZnJlc2hcIik7XG59LFxuICAgIF9sYXN0U2Nyb2xsID0gMCxcbiAgICBfZGlyZWN0aW9uID0gMSxcbiAgICBfcHJpbWFyeSxcbiAgICBfdXBkYXRlQWxsID0gZnVuY3Rpb24gX3VwZGF0ZUFsbChmb3JjZSkge1xuICBpZiAoIV9yZWZyZXNoaW5nQWxsIHx8IGZvcmNlID09PSAyKSB7XG4gICAgU2Nyb2xsVHJpZ2dlci5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICBfcHJpbWFyeSAmJiBfcHJpbWFyeS51cGRhdGUoMCk7IC8vIFNjcm9sbFNtb290aGVyIHVzZXMgcmVmcmVzaFByaW9yaXR5IC05OTk5IHRvIGJlY29tZSB0aGUgcHJpbWFyeSB0aGF0IGdldHMgdXBkYXRlZCBiZWZvcmUgYWxsIG90aGVycyBiZWNhdXNlIGl0IGFmZmVjdHMgdGhlIHNjcm9sbCBwb3NpdGlvbi5cblxuICAgIHZhciBsID0gX3RyaWdnZXJzLmxlbmd0aCxcbiAgICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICAgIHJlY29yZFZlbG9jaXR5ID0gdGltZSAtIF90aW1lMSA+PSA1MCxcbiAgICAgICAgc2Nyb2xsID0gbCAmJiBfdHJpZ2dlcnNbMF0uc2Nyb2xsKCk7XG5cbiAgICBfZGlyZWN0aW9uID0gX2xhc3RTY3JvbGwgPiBzY3JvbGwgPyAtMSA6IDE7XG4gICAgX3JlZnJlc2hpbmdBbGwgfHwgKF9sYXN0U2Nyb2xsID0gc2Nyb2xsKTtcblxuICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgICAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhX3BvaW50ZXJJc0Rvd24gJiYgdGltZSAtIF9sYXN0U2Nyb2xsVGltZSA+IDIwMCkge1xuICAgICAgICBfbGFzdFNjcm9sbFRpbWUgPSAwO1xuXG4gICAgICAgIF9kaXNwYXRjaChcInNjcm9sbEVuZFwiKTtcbiAgICAgIH1cblxuICAgICAgX3RpbWUyID0gX3RpbWUxO1xuICAgICAgX3RpbWUxID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAoX2RpcmVjdGlvbiA8IDApIHtcbiAgICAgIF9pID0gbDtcblxuICAgICAgd2hpbGUgKF9pLS0gPiAwKSB7XG4gICAgICAgIF90cmlnZ2Vyc1tfaV0gJiYgX3RyaWdnZXJzW19pXS51cGRhdGUoMCwgcmVjb3JkVmVsb2NpdHkpO1xuICAgICAgfVxuXG4gICAgICBfZGlyZWN0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgbDsgX2krKykge1xuICAgICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIF9yYWZJRCA9IDA7XG59LFxuICAgIF9wcm9wTmFtZXNUb0NvcHkgPSBbX2xlZnQsIF90b3AsIF9ib3R0b20sIF9yaWdodCwgX21hcmdpbiArIF9Cb3R0b20sIF9tYXJnaW4gKyBfUmlnaHQsIF9tYXJnaW4gKyBfVG9wLCBfbWFyZ2luICsgX0xlZnQsIFwiZGlzcGxheVwiLCBcImZsZXhTaHJpbmtcIiwgXCJmbG9hdFwiLCBcInpJbmRleFwiLCBcImdyaWRDb2x1bW5TdGFydFwiLCBcImdyaWRDb2x1bW5FbmRcIiwgXCJncmlkUm93U3RhcnRcIiwgXCJncmlkUm93RW5kXCIsIFwiZ3JpZEFyZWFcIiwgXCJqdXN0aWZ5U2VsZlwiLCBcImFsaWduU2VsZlwiLCBcInBsYWNlU2VsZlwiLCBcIm9yZGVyXCJdLFxuICAgIF9zdGF0ZVByb3BzID0gX3Byb3BOYW1lc1RvQ29weS5jb25jYXQoW193aWR0aCwgX2hlaWdodCwgXCJib3hTaXppbmdcIiwgXCJtYXhcIiArIF9XaWR0aCwgXCJtYXhcIiArIF9IZWlnaHQsIFwicG9zaXRpb25cIiwgX21hcmdpbiwgX3BhZGRpbmcsIF9wYWRkaW5nICsgX1RvcCwgX3BhZGRpbmcgKyBfUmlnaHQsIF9wYWRkaW5nICsgX0JvdHRvbSwgX3BhZGRpbmcgKyBfTGVmdF0pLFxuICAgIF9zd2FwUGluT3V0ID0gZnVuY3Rpb24gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHN0YXRlKSB7XG4gIF9zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgdmFyIGNhY2hlID0gcGluLl9nc2FwO1xuXG4gIGlmIChjYWNoZS5zcGFjZXJJc05hdGl2ZSkge1xuICAgIF9zZXRTdGF0ZShjYWNoZS5zcGFjZXJTdGF0ZSk7XG4gIH0gZWxzZSBpZiAocGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBwYXJlbnQgPSBzcGFjZXIucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocGluLCBzcGFjZXIpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHNwYWNlcik7XG4gICAgfVxuICB9XG5cbiAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IGZhbHNlO1xufSxcbiAgICBfc3dhcFBpbkluID0gZnVuY3Rpb24gX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgY3MsIHNwYWNlclN0YXRlKSB7XG4gIGlmICghcGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBpID0gX3Byb3BOYW1lc1RvQ29weS5sZW5ndGgsXG4gICAgICAgIHNwYWNlclN0eWxlID0gc3BhY2VyLnN0eWxlLFxuICAgICAgICBwaW5TdHlsZSA9IHBpbi5zdHlsZSxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHAgPSBfcHJvcE5hbWVzVG9Db3B5W2ldO1xuICAgICAgc3BhY2VyU3R5bGVbcF0gPSBjc1twXTtcbiAgICB9XG5cbiAgICBzcGFjZXJTdHlsZS5wb3NpdGlvbiA9IGNzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG4gICAgY3MuZGlzcGxheSA9PT0gXCJpbmxpbmVcIiAmJiAoc3BhY2VyU3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIHBpblN0eWxlW19ib3R0b21dID0gcGluU3R5bGVbX3JpZ2h0XSA9IFwiYXV0b1wiO1xuICAgIHNwYWNlclN0eWxlLmZsZXhCYXNpcyA9IGNzLmZsZXhCYXNpcyB8fCBcImF1dG9cIjtcbiAgICBzcGFjZXJTdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgIHNwYWNlclN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIHNwYWNlclN0eWxlW193aWR0aF0gPSBfZ2V0U2l6ZShwaW4sIF9ob3Jpem9udGFsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfaGVpZ2h0XSA9IF9nZXRTaXplKHBpbiwgX3ZlcnRpY2FsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfcGFkZGluZ10gPSBwaW5TdHlsZVtfbWFyZ2luXSA9IHBpblN0eWxlW190b3BdID0gcGluU3R5bGVbX2xlZnRdID0gXCIwXCI7XG5cbiAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG4gICAgcGluU3R5bGVbX3dpZHRoXSA9IHBpblN0eWxlW1wibWF4XCIgKyBfV2lkdGhdID0gY3NbX3dpZHRoXTtcbiAgICBwaW5TdHlsZVtfaGVpZ2h0XSA9IHBpblN0eWxlW1wibWF4XCIgKyBfSGVpZ2h0XSA9IGNzW19oZWlnaHRdO1xuICAgIHBpblN0eWxlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcblxuICAgIGlmIChwaW4ucGFyZW50Tm9kZSAhPT0gc3BhY2VyKSB7XG4gICAgICBwaW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhY2VyLCBwaW4pO1xuICAgICAgc3BhY2VyLmFwcGVuZENoaWxkKHBpbik7XG4gICAgfVxuXG4gICAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IHRydWU7XG4gIH1cbn0sXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9zZXRTdGF0ZSA9IGZ1bmN0aW9uIF9zZXRTdGF0ZShzdGF0ZSkge1xuICBpZiAoc3RhdGUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS50LnN0eWxlLFxuICAgICAgICBsID0gc3RhdGUubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcCxcbiAgICAgICAgdmFsdWU7XG4gICAgKHN0YXRlLnQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHN0YXRlLnQpKS51bmNhY2hlID0gMTsgLy8gb3RoZXJ3aXNlIHRyYW5zZm9ybXMgbWF5IGJlIG9mZlxuXG4gICAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGVbaSArIDFdO1xuICAgICAgcCA9IHN0YXRlW2ldO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgc3R5bGVbcF0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVbcF0pIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocC5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldFN0YXRlID0gZnVuY3Rpb24gX2dldFN0YXRlKGVsZW1lbnQpIHtcbiAgLy8gcmV0dXJucyBhbiBBcnJheSB3aXRoIGFsdGVybmF0aW5nIHZhbHVlcyBsaWtlIFtwcm9wZXJ0eSwgdmFsdWUsIHByb3BlcnR5LCB2YWx1ZV0gYW5kIGEgXCJ0XCIgcHJvcGVydHkgcG9pbnRpbmcgdG8gdGhlIHRhcmdldCAoZWxlbWVudCkuIE1ha2VzIGl0IGZhc3QgYW5kIGNoZWFwLlxuICB2YXIgbCA9IF9zdGF0ZVByb3BzLmxlbmd0aCxcbiAgICAgIHN0eWxlID0gZWxlbWVudC5zdHlsZSxcbiAgICAgIHN0YXRlID0gW10sXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHN0YXRlLnB1c2goX3N0YXRlUHJvcHNbaV0sIHN0eWxlW19zdGF0ZVByb3BzW2ldXSk7XG4gIH1cblxuICBzdGF0ZS50ID0gZWxlbWVudDtcbiAgcmV0dXJuIHN0YXRlO1xufSxcbiAgICBfY29weVN0YXRlID0gZnVuY3Rpb24gX2NvcHlTdGF0ZShzdGF0ZSwgb3ZlcnJpZGUsIG9taXRPZmZzZXRzKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG4gICAgICBpID0gb21pdE9mZnNldHMgPyA4IDogMCxcbiAgICAgIC8vIHNraXAgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIGlmIG9taXRPZmZzZXRzIGlzIHRydWVcbiAgcDtcblxuICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuICAgIHAgPSBzdGF0ZVtpXTtcbiAgICByZXN1bHQucHVzaChwLCBwIGluIG92ZXJyaWRlID8gb3ZlcnJpZGVbcF0gOiBzdGF0ZVtpICsgMV0pO1xuICB9XG5cbiAgcmVzdWx0LnQgPSBzdGF0ZS50O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfd2luT2Zmc2V0cyA9IHtcbiAgbGVmdDogMCxcbiAgdG9wOiAwXG59LFxuICAgIC8vIC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAoPykgQWxsb3cgdXNlcnMgdG8gY2FsY3VsYXRlIHdoZXJlIGEgdHJpZ2dlciBoaXRzIChzY3JvbGwgcG9zaXRpb24pIGxpa2UgZ2V0U2Nyb2xsUG9zaXRpb24oXCIjaWRcIiwgXCJ0b3AgYm90dG9tXCIpXG4vLyBfZ2V0U2Nyb2xsUG9zaXRpb24gPSAodHJpZ2dlciwgcG9zaXRpb24sIHtzY3JvbGxlciwgY29udGFpbmVyQW5pbWF0aW9uLCBob3Jpem9udGFsfSkgPT4ge1xuLy8gXHRzY3JvbGxlciA9IF9nZXRUYXJnZXQoc2Nyb2xsZXIgfHwgX3dpbik7XG4vLyBcdGxldCBkaXJlY3Rpb24gPSBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4vLyBcdFx0aXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHNjcm9sbGVyKTtcbi8vIFx0X2dldFNpemVGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0LCBkaXJlY3Rpb24pO1xuLy8gXHRyZXR1cm4gX3BhcnNlUG9zaXRpb24ocG9zaXRpb24sIF9nZXRUYXJnZXQodHJpZ2dlciksIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgZGlyZWN0aW9uKSgpLCBkaXJlY3Rpb24sIF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pKCksIDAsIDAsIDAsIF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCkoKSwgaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCwgMCwgY29udGFpbmVyQW5pbWF0aW9uID8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgOiBfbWF4U2Nyb2xsKHNjcm9sbGVyKSwgY29udGFpbmVyQW5pbWF0aW9uKTtcbi8vIH0sXG5fcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKHZhbHVlLCB0cmlnZ2VyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsLCBtYXJrZXIsIG1hcmtlclNjcm9sbGVyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIHNjcm9sbGVyTWF4LCBjb250YWluZXJBbmltYXRpb24sIGNsYW1wWmVyb1Byb3ApIHtcbiAgX2lzRnVuY3Rpb24odmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlKHNlbGYpKTtcblxuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5zdWJzdHIoMCwgMykgPT09IFwibWF4XCIpIHtcbiAgICB2YWx1ZSA9IHNjcm9sbGVyTWF4ICsgKHZhbHVlLmNoYXJBdCg0KSA9PT0gXCI9XCIgPyBfb2Zmc2V0VG9QeChcIjBcIiArIHZhbHVlLnN1YnN0cigzKSwgc2Nyb2xsZXJTaXplKSA6IDApO1xuICB9XG5cbiAgdmFyIHRpbWUgPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24udGltZSgpIDogMCxcbiAgICAgIHAxLFxuICAgICAgcDIsXG4gICAgICBlbGVtZW50O1xuICBjb250YWluZXJBbmltYXRpb24gJiYgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoMCk7XG4gIGlzTmFOKHZhbHVlKSB8fCAodmFsdWUgPSArdmFsdWUpOyAvLyBjb252ZXJ0IGEgc3RyaW5nIG51bWJlciBsaWtlIFwiNDVcIiB0byBhbiBhY3R1YWwgbnVtYmVyXG5cbiAgaWYgKCFfaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgX2lzRnVuY3Rpb24odHJpZ2dlcikgJiYgKHRyaWdnZXIgPSB0cmlnZ2VyKHNlbGYpKTtcbiAgICB2YXIgb2Zmc2V0cyA9ICh2YWx1ZSB8fCBcIjBcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICBib3VuZHMsXG4gICAgICAgIGxvY2FsT2Zmc2V0LFxuICAgICAgICBnbG9iYWxPZmZzZXQsXG4gICAgICAgIGRpc3BsYXk7XG4gICAgZWxlbWVudCA9IF9nZXRUYXJnZXQodHJpZ2dlciwgc2VsZikgfHwgX2JvZHk7XG4gICAgYm91bmRzID0gX2dldEJvdW5kcyhlbGVtZW50KSB8fCB7fTtcblxuICAgIGlmICgoIWJvdW5kcyB8fCAhYm91bmRzLmxlZnQgJiYgIWJvdW5kcy50b3ApICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyBpZiBkaXNwbGF5IGlzIFwibm9uZVwiLCBpdCB3b24ndCByZXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgcHJvcGVybHlcbiAgICAgIGRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuICAgICAgZGlzcGxheSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgOiBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICB9XG5cbiAgICBsb2NhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMF0sIGJvdW5kc1tkaXJlY3Rpb24uZF0pO1xuICAgIGdsb2JhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMV0gfHwgXCIwXCIsIHNjcm9sbGVyU2l6ZSk7XG4gICAgdmFsdWUgPSBib3VuZHNbZGlyZWN0aW9uLnBdIC0gc2Nyb2xsZXJCb3VuZHNbZGlyZWN0aW9uLnBdIC0gYm9yZGVyV2lkdGggKyBsb2NhbE9mZnNldCArIHNjcm9sbCAtIGdsb2JhbE9mZnNldDtcbiAgICBtYXJrZXJTY3JvbGxlciAmJiBfcG9zaXRpb25NYXJrZXIobWFya2VyU2Nyb2xsZXIsIGdsb2JhbE9mZnNldCwgZGlyZWN0aW9uLCBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQgPCAyMCB8fCBtYXJrZXJTY3JvbGxlci5faXNTdGFydCAmJiBnbG9iYWxPZmZzZXQgPiAyMCk7XG4gICAgc2Nyb2xsZXJTaXplIC09IHNjcm9sbGVyU2l6ZSAtIGdsb2JhbE9mZnNldDsgLy8gYWRqdXN0IGZvciB0aGUgbWFya2VyXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uICYmICh2YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuc3RhcnQsIGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmVuZCwgMCwgc2Nyb2xsZXJNYXgsIHZhbHVlKSk7XG4gICAgbWFya2VyU2Nyb2xsZXIgJiYgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoY2xhbXBaZXJvUHJvcCkge1xuICAgIHNlbGZbY2xhbXBaZXJvUHJvcF0gPSB2YWx1ZSB8fCAtMC4wMDE7XG4gICAgdmFsdWUgPCAwICYmICh2YWx1ZSA9IDApO1xuICB9XG5cbiAgaWYgKG1hcmtlcikge1xuICAgIHZhciBwb3NpdGlvbiA9IHZhbHVlICsgc2Nyb2xsZXJTaXplLFxuICAgICAgICBpc1N0YXJ0ID0gbWFya2VyLl9pc1N0YXJ0O1xuICAgIHAxID0gXCJzY3JvbGxcIiArIGRpcmVjdGlvbi5kMjtcblxuICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzU3RhcnQgJiYgcG9zaXRpb24gPiAyMCB8fCAhaXNTdGFydCAmJiAodXNlRml4ZWRQb3NpdGlvbiA/IE1hdGgubWF4KF9ib2R5W3AxXSwgX2RvY0VsW3AxXSkgOiBtYXJrZXIucGFyZW50Tm9kZVtwMV0pIDw9IHBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBfZ2V0Qm91bmRzKG1hcmtlclNjcm9sbGVyKTtcbiAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgKG1hcmtlci5zdHlsZVtkaXJlY3Rpb24ub3AucF0gPSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ub3AucF0gLSBkaXJlY3Rpb24ub3AubSAtIG1hcmtlci5fb2Zmc2V0ICsgX3B4KTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmIGVsZW1lbnQpIHtcbiAgICBwMSA9IF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoc2Nyb2xsZXJNYXgpO1xuICAgIHAyID0gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgICBjb250YWluZXJBbmltYXRpb24uX2NhU2Nyb2xsRGlzdCA9IHAxW2RpcmVjdGlvbi5wXSAtIHAyW2RpcmVjdGlvbi5wXTtcbiAgICB2YWx1ZSA9IHZhbHVlIC8gY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgKiBzY3JvbGxlck1heDtcbiAgfVxuXG4gIGNvbnRhaW5lckFuaW1hdGlvbiAmJiBjb250YWluZXJBbmltYXRpb24uc2Vlayh0aW1lKTtcbiAgcmV0dXJuIGNvbnRhaW5lckFuaW1hdGlvbiA/IHZhbHVlIDogTWF0aC5yb3VuZCh2YWx1ZSk7XG59LFxuICAgIF9wcmVmaXhFeHAgPSAvKHdlYmtpdHxtb3p8bGVuZ3RofGNzc1RleHR8aW5zZXQpL2ksXG4gICAgX3JlcGFyZW50ID0gZnVuY3Rpb24gX3JlcGFyZW50KGVsZW1lbnQsIHBhcmVudCwgdG9wLCBsZWZ0KSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgIHAsXG4gICAgICAgIGNzO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gX2JvZHkpIHtcbiAgICAgIGVsZW1lbnQuX3N0T3JpZyA9IHN0eWxlLmNzc1RleHQ7IC8vIHJlY29yZCBvcmlnaW5hbCBpbmxpbmUgc3R5bGVzIHNvIHdlIGNhbiByZXZlcnQgdGhlbSBsYXRlclxuXG4gICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICBmb3IgKHAgaW4gY3MpIHtcbiAgICAgICAgLy8gbXVzdCBjb3B5IGFsbCByZWxldmFudCBzdHlsZXMgdG8gZW5zdXJlIHRoYXQgbm90aGluZyBjaGFuZ2VzIHZpc3VhbGx5IHdoZW4gd2UgcmVwYXJlbnQgdG8gdGhlIDxib2R5Pi4gU2tpcCB0aGUgdmVuZG9yIHByZWZpeGVkIG9uZXMuXG4gICAgICAgIGlmICghK3AgJiYgIV9wcmVmaXhFeHAudGVzdChwKSAmJiBjc1twXSAmJiB0eXBlb2Ygc3R5bGVbcF0gPT09IFwic3RyaW5nXCIgJiYgcCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICBzdHlsZVtwXSA9IGNzW3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gZWxlbWVudC5fc3RPcmlnO1xuICAgIH1cblxuICAgIGdzYXAuY29yZS5nZXRDYWNoZShlbGVtZW50KS51bmNhY2hlID0gMTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn0sXG4gICAgX2ludGVycnVwdGlvblRyYWNrZXIgPSBmdW5jdGlvbiBfaW50ZXJydXB0aW9uVHJhY2tlcihnZXRWYWx1ZUZ1bmMsIGluaXRpYWxWYWx1ZSwgb25JbnRlcnJ1cHQpIHtcbiAgdmFyIGxhc3QxID0gaW5pdGlhbFZhbHVlLFxuICAgICAgbGFzdDIgPSBsYXN0MTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChnZXRWYWx1ZUZ1bmMoKSk7IC8vIHJvdW5kIGJlY2F1c2UgaW4gc29tZSBbdmVyeSB1bmNvbW1vbl0gV2luZG93cyBlbnZpcm9ubWVudHMsIHNjcm9sbCBjYW4gZ2V0IHJlcG9ydGVkIHdpdGggZGVjaW1hbHMgZXZlbiB0aG91Z2ggaXQgd2FzIHNldCB3aXRob3V0LlxuXG4gICAgaWYgKGN1cnJlbnQgIT09IGxhc3QxICYmIGN1cnJlbnQgIT09IGxhc3QyICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MSkgPiAzICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MikgPiAzKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBzY3JvbGxzLCBraWxsIHRoZSB0d2Vlbi4gaU9TIFNhZmFyaSBpbnRlcm1pdHRlbnRseSBtaXNyZXBvcnRzIHRoZSBzY3JvbGwgcG9zaXRpb24sIGl0IG1heSBiZSB0aGUgbW9zdCByZWNlbnRseS1zZXQgb25lIG9yIHRoZSBvbmUgYmVmb3JlIHRoYXQhIFdoZW4gU2FmYXJpIGlzIHpvb21lZCAoQ01ELSspLCBpdCBvZnRlbiBtaXNyZXBvcnRzIGFzIDEgcGl4ZWwgb2ZmIHRvbyEgU28gaWYgd2Ugc2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gMTI1LCBmb3IgZXhhbXBsZSwgaXQnbGwgYWN0dWFsbHkgcmVwb3J0IGl0IGFzIDEyNC5cbiAgICAgIHZhbHVlID0gY3VycmVudDtcbiAgICAgIG9uSW50ZXJydXB0ICYmIG9uSW50ZXJydXB0KCk7XG4gICAgfVxuXG4gICAgbGFzdDIgPSBsYXN0MTtcbiAgICBsYXN0MSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn0sXG4gICAgX3NoaWZ0TWFya2VyID0gZnVuY3Rpb24gX3NoaWZ0TWFya2VyKG1hcmtlciwgZGlyZWN0aW9uLCB2YWx1ZSkge1xuICB2YXIgdmFycyA9IHt9O1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IFwiKz1cIiArIHZhbHVlO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICAvLyBfbWVyZ2VBbmltYXRpb25zID0gYW5pbWF0aW9ucyA9PiB7XG4vLyBcdGxldCB0bCA9IGdzYXAudGltZWxpbmUoe3Ntb290aENoaWxkVGltaW5nOiB0cnVlfSkuc3RhcnRUaW1lKE1hdGgubWluKC4uLmFuaW1hdGlvbnMubWFwKGEgPT4gYS5nbG9iYWxUaW1lKDApKSkpO1xuLy8gXHRhbmltYXRpb25zLmZvckVhY2goYSA9PiB7bGV0IHRpbWUgPSBhLnRvdGFsVGltZSgpOyB0bC5hZGQoYSk7IGEudG90YWxUaW1lKHRpbWUpOyB9KTtcbi8vIFx0dGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBmYWxzZTtcbi8vIFx0cmV0dXJuIHRsO1xuLy8gfSxcbi8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHR3ZWVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaW4gdGhlIGRpcmVjdGlvbiBwcm92aWRlZCwgYW5kIHdoZW4gZG9pbmcgc28gaXQnbGwgYWRkIGEgLnR3ZWVuIHByb3BlcnR5IHRvIHRoZSBGVU5DVElPTiBpdHNlbGYsIGFuZCByZW1vdmUgaXQgd2hlbiB0aGUgdHdlZW4gY29tcGxldGVzIG9yIGdldHMga2lsbGVkLiBUaGlzIGdpdmVzIHVzIGEgd2F5IHRvIGhhdmUgbXVsdGlwbGUgU2Nyb2xsVHJpZ2dlcnMgdXNlIGEgY2VudHJhbCBmdW5jdGlvbiBmb3IgYW55IGdpdmVuIHNjcm9sbGVyIGFuZCBzZWUgaWYgdGhlcmUncyBhIHNjcm9sbCB0d2VlbiBydW5uaW5nICh3aGljaCB3b3VsZCBhZmZlY3QgaWYvaG93IHRoaW5ncyBnZXQgdXBkYXRlZClcbl9nZXRUd2VlbkNyZWF0b3IgPSBmdW5jdGlvbiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBkaXJlY3Rpb24pIHtcbiAgdmFyIGdldFNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgcHJvcCA9IFwiX3Njcm9sbFwiICsgZGlyZWN0aW9uLnAyLFxuICAgICAgLy8gYWRkIGEgdHdlZW5hYmxlIHByb3BlcnR5IHRvIHRoZSBzY3JvbGxlciB0aGF0J3MgYSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uLCBsaWtlIF9zY3JvbGxUb3Agb3IgX3Njcm9sbExlZnQuIFRoaXMgd2F5LCBpZiBzb21lb25lIGRvZXMgZ3NhcC5raWxsVHdlZW5zT2Yoc2Nyb2xsZXIpIGl0J2xsIGtpbGwgdGhlIHNjcm9sbCB0d2Vlbi5cbiAgZ2V0VHdlZW4gPSBmdW5jdGlvbiBnZXRUd2VlbihzY3JvbGxUbywgdmFycywgaW5pdGlhbFZhbHVlLCBjaGFuZ2UxLCBjaGFuZ2UyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4sXG4gICAgICAgIG9uQ29tcGxldGUgPSB2YXJzLm9uQ29tcGxldGUsXG4gICAgICAgIG1vZGlmaWVycyA9IHt9O1xuICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZSB8fCBnZXRTY3JvbGwoKTtcblxuICAgIHZhciBjaGVja0ZvckludGVycnVwdGlvbiA9IF9pbnRlcnJ1cHRpb25UcmFja2VyKGdldFNjcm9sbCwgaW5pdGlhbFZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0d2Vlbi5raWxsKCk7XG4gICAgICBnZXRUd2Vlbi50d2VlbiA9IDA7XG4gICAgfSk7XG5cbiAgICBjaGFuZ2UyID0gY2hhbmdlMSAmJiBjaGFuZ2UyIHx8IDA7IC8vIGlmIGNoYW5nZTEgaXMgMCwgd2Ugc2V0IHRoYXQgdG8gdGhlIGRpZmZlcmVuY2UgYW5kIGlnbm9yZSBjaGFuZ2UyLiBPdGhlcndpc2UsIHRoZXJlIHdvdWxkIGJlIGEgY29tcG91bmQgZWZmZWN0LlxuXG4gICAgY2hhbmdlMSA9IGNoYW5nZTEgfHwgc2Nyb2xsVG8gLSBpbml0aWFsVmFsdWU7XG4gICAgdHdlZW4gJiYgdHdlZW4ua2lsbCgpO1xuICAgIHZhcnNbcHJvcF0gPSBzY3JvbGxUbztcbiAgICB2YXJzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblxuICAgIG1vZGlmaWVyc1twcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjaGVja0ZvckludGVycnVwdGlvbihpbml0aWFsVmFsdWUgKyBjaGFuZ2UxICogdHdlZW4ucmF0aW8gKyBjaGFuZ2UyICogdHdlZW4ucmF0aW8gKiB0d2Vlbi5yYXRpbyk7XG4gICAgfTtcblxuICAgIHZhcnMub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICAgIF91cGRhdGVBbGwoKTtcbiAgICB9O1xuXG4gICAgdmFycy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZ2V0VHdlZW4udHdlZW4gPSAwO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlLmNhbGwodHdlZW4pO1xuICAgIH07XG5cbiAgICB0d2VlbiA9IGdldFR3ZWVuLnR3ZWVuID0gZ3NhcC50byhzY3JvbGxlciwgdmFycyk7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9O1xuXG4gIHNjcm9sbGVyW3Byb3BdID0gZ2V0U2Nyb2xsO1xuXG4gIGdldFNjcm9sbC53aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFR3ZWVuLnR3ZWVuICYmIGdldFR3ZWVuLnR3ZWVuLmtpbGwoKSAmJiAoZ2V0VHdlZW4udHdlZW4gPSAwKTtcbiAgfTtcblxuICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwid2hlZWxcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7IC8vIFdpbmRvd3MgbWFjaGluZXMgaGFuZGxlIG1vdXNld2hlZWwgc2Nyb2xsaW5nIGluIGNodW5rcyAobGlrZSBcIjMgbGluZXMgcGVyIHNjcm9sbFwiKSBtZWFuaW5nIHRoZSB0eXBpY2FsIHN0cmF0ZWd5IGZvciBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgaXNuJ3QgYXMgc2Vuc2l0aXZlLiBJdCdzIG11Y2ggbW9yZSBsaWtlbHkgdG8gbWF0Y2ggb25lIG9mIHRoZSBwcmV2aW91cyAyIHNjcm9sbCBldmVudCBwb3NpdGlvbnMuIFNvIHdlIGtpbGwgYW55IHNuYXBwaW5nIGFzIHNvb24gYXMgdGhlcmUncyBhIHdoZWVsIGV2ZW50LlxuXG5cbiAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoICYmIF9hZGRMaXN0ZW5lcihzY3JvbGxlciwgXCJ0b3VjaG1vdmVcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7XG4gIHJldHVybiBnZXRUd2Vlbjtcbn07XG5cbmV4cG9ydCB2YXIgU2Nyb2xsVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjcm9sbFRyaWdnZXIodmFycywgYW5pbWF0aW9uKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIoZ3NhcCkgfHwgY29uc29sZS53YXJuKFwiUGxlYXNlIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcIik7XG5cbiAgICBfY29udGV4dCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdCh2YXJzLCBhbmltYXRpb24pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFRyaWdnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzLCBhbmltYXRpb24pIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5zdGFydCA9IDA7XG4gICAgdGhpcy52YXJzICYmIHRoaXMua2lsbCh0cnVlLCB0cnVlKTsgLy8gaW4gY2FzZSBpdCdzIGJlaW5nIGluaXR0ZWQgYWdhaW5cblxuICAgIGlmICghX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy5yZWZyZXNoID0gdGhpcy5raWxsID0gX3Bhc3NUaHJvdWdoO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhcnMgPSBfc2V0RGVmYXVsdHMoX2lzU3RyaW5nKHZhcnMpIHx8IF9pc051bWJlcih2YXJzKSB8fCB2YXJzLm5vZGVUeXBlID8ge1xuICAgICAgdHJpZ2dlcjogdmFyc1xuICAgIH0gOiB2YXJzLCBfZGVmYXVsdHMpO1xuXG4gICAgdmFyIF92YXJzID0gdmFycyxcbiAgICAgICAgb25VcGRhdGUgPSBfdmFycy5vblVwZGF0ZSxcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSBfdmFycy50b2dnbGVDbGFzcyxcbiAgICAgICAgaWQgPSBfdmFycy5pZCxcbiAgICAgICAgb25Ub2dnbGUgPSBfdmFycy5vblRvZ2dsZSxcbiAgICAgICAgb25SZWZyZXNoID0gX3ZhcnMub25SZWZyZXNoLFxuICAgICAgICBzY3J1YiA9IF92YXJzLnNjcnViLFxuICAgICAgICB0cmlnZ2VyID0gX3ZhcnMudHJpZ2dlcixcbiAgICAgICAgcGluID0gX3ZhcnMucGluLFxuICAgICAgICBwaW5TcGFjaW5nID0gX3ZhcnMucGluU3BhY2luZyxcbiAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCA9IF92YXJzLmludmFsaWRhdGVPblJlZnJlc2gsXG4gICAgICAgIGFudGljaXBhdGVQaW4gPSBfdmFycy5hbnRpY2lwYXRlUGluLFxuICAgICAgICBvblNjcnViQ29tcGxldGUgPSBfdmFycy5vblNjcnViQ29tcGxldGUsXG4gICAgICAgIG9uU25hcENvbXBsZXRlID0gX3ZhcnMub25TbmFwQ29tcGxldGUsXG4gICAgICAgIG9uY2UgPSBfdmFycy5vbmNlLFxuICAgICAgICBzbmFwID0gX3ZhcnMuc25hcCxcbiAgICAgICAgcGluUmVwYXJlbnQgPSBfdmFycy5waW5SZXBhcmVudCxcbiAgICAgICAgcGluU3BhY2VyID0gX3ZhcnMucGluU3BhY2VyLFxuICAgICAgICBjb250YWluZXJBbmltYXRpb24gPSBfdmFycy5jb250YWluZXJBbmltYXRpb24sXG4gICAgICAgIGZhc3RTY3JvbGxFbmQgPSBfdmFycy5mYXN0U2Nyb2xsRW5kLFxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgPSBfdmFycy5wcmV2ZW50T3ZlcmxhcHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IHZhcnMuaG9yaXpvbnRhbCB8fCB2YXJzLmNvbnRhaW5lckFuaW1hdGlvbiAmJiB2YXJzLmhvcml6b250YWwgIT09IGZhbHNlID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4gICAgICAgIGlzVG9nZ2xlID0gIXNjcnViICYmIHNjcnViICE9PSAwLFxuICAgICAgICBzY3JvbGxlciA9IF9nZXRUYXJnZXQodmFycy5zY3JvbGxlciB8fCBfd2luKSxcbiAgICAgICAgc2Nyb2xsZXJDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShzY3JvbGxlciksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydChzY3JvbGxlciksXG4gICAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSAoXCJwaW5UeXBlXCIgaW4gdmFycyA/IHZhcnMucGluVHlwZSA6IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwicGluVHlwZVwiKSB8fCBpc1ZpZXdwb3J0ICYmIFwiZml4ZWRcIikgPT09IFwiZml4ZWRcIixcbiAgICAgICAgY2FsbGJhY2tzID0gW3ZhcnMub25FbnRlciwgdmFycy5vbkxlYXZlLCB2YXJzLm9uRW50ZXJCYWNrLCB2YXJzLm9uTGVhdmVCYWNrXSxcbiAgICAgICAgdG9nZ2xlQWN0aW9ucyA9IGlzVG9nZ2xlICYmIHZhcnMudG9nZ2xlQWN0aW9ucy5zcGxpdChcIiBcIiksXG4gICAgICAgIG1hcmtlcnMgPSBcIm1hcmtlcnNcIiBpbiB2YXJzID8gdmFycy5tYXJrZXJzIDogX2RlZmF1bHRzLm1hcmtlcnMsXG4gICAgICAgIGJvcmRlcldpZHRoID0gaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9uUmVmcmVzaEluaXQgPSB2YXJzLm9uUmVmcmVzaEluaXQgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhcnMub25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICB9LFxuICAgICAgICBnZXRTY3JvbGxlclNpemUgPSBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbiksXG4gICAgICAgIGdldFNjcm9sbGVyT2Zmc2V0cyA9IF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCksXG4gICAgICAgIGxhc3RTbmFwID0gMCxcbiAgICAgICAgbGFzdFJlZnJlc2ggPSAwLFxuICAgICAgICBwcmV2UHJvZ3Jlc3MgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jID0gX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgIHR3ZWVuVG8sXG4gICAgICAgIHBpbkNhY2hlLFxuICAgICAgICBzbmFwRnVuYyxcbiAgICAgICAgc2Nyb2xsMSxcbiAgICAgICAgc2Nyb2xsMixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgbWFya2VyU3RhcnQsXG4gICAgICAgIG1hcmtlckVuZCxcbiAgICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJFbmRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJWYXJzLFxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2gsXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSxcbiAgICAgICAgcGluQWN0aXZlU3RhdGUsXG4gICAgICAgIHBpblN0YXRlLFxuICAgICAgICBzcGFjZXIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgcGluR2V0dGVyLFxuICAgICAgICBwaW5TZXR0ZXIsXG4gICAgICAgIHBpblN0YXJ0LFxuICAgICAgICBwaW5DaGFuZ2UsXG4gICAgICAgIHNwYWNpbmdTdGFydCxcbiAgICAgICAgc3BhY2VyU3RhdGUsXG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyLFxuICAgICAgICBwaW5Nb3ZlcyxcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyLFxuICAgICAgICBjcyxcbiAgICAgICAgc25hcDEsXG4gICAgICAgIHNuYXAyLFxuICAgICAgICBzY3J1YlR3ZWVuLFxuICAgICAgICBzY3J1YlNtb290aCxcbiAgICAgICAgc25hcER1ckNsYW1wLFxuICAgICAgICBzbmFwRGVsYXllZENhbGwsXG4gICAgICAgIHByZXZTY3JvbGwsXG4gICAgICAgIHByZXZBbmltUHJvZ3Jlc3MsXG4gICAgICAgIGNhTWFya2VyU2V0dGVyLFxuICAgICAgICBjdXN0b21SZXZlcnRSZXR1cm47IC8vIGZvciB0aGUgc2FrZSBvZiBlZmZpY2llbmN5LCBfc3RhcnRDbGFtcC9fZW5kQ2xhbXAgc2VydmUgbGlrZSBhIHRydXRoeSB2YWx1ZSBpbmRpY2F0aW5nIHRoYXQgY2xhbXBpbmcgd2FzIGVuYWJsZWQgb24gdGhlIHN0YXJ0L2VuZCwgYW5kIEFMU08gc3RvcmUgdGhlIGFjdHVhbCBwcmUtY2xhbXBlZCBudW1lcmljIHZhbHVlLiBXZSB0YXAgaW50byB0aGF0IGluIFNjcm9sbFNtb290aGVyIGZvciBzcGVlZCBlZmZlY3RzLiBTbyBmb3IgZXhhbXBsZSwgaWYgc3RhcnQ9XCJjbGFtcCh0b3AgYm90dG9tKVwiIHJlc3VsdHMgaW4gYSBzdGFydCBvZiAtMTAwIG5hdHVyYWxseSwgaXQgd291bGQgZ2V0IGNsYW1wZWQgdG8gMCBidXQgLTEwMCB3b3VsZCBiZSBzdG9yZWQgaW4gX3N0YXJ0Q2xhbXAuXG5cblxuICAgIHNlbGYuX3N0YXJ0Q2xhbXAgPSBzZWxmLl9lbmRDbGFtcCA9IGZhbHNlO1xuICAgIHNlbGYuX2RpciA9IGRpcmVjdGlvbjtcbiAgICBhbnRpY2lwYXRlUGluICo9IDQ1O1xuICAgIHNlbGYuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcbiAgICBzZWxmLnNjcm9sbCA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IGNvbnRhaW5lckFuaW1hdGlvbi50aW1lLmJpbmQoY29udGFpbmVyQW5pbWF0aW9uKSA6IHNjcm9sbEZ1bmM7XG4gICAgc2Nyb2xsMSA9IHNjcm9sbEZ1bmMoKTtcbiAgICBzZWxmLnZhcnMgPSB2YXJzO1xuICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCB2YXJzLmFuaW1hdGlvbjtcblxuICAgIGlmIChcInJlZnJlc2hQcmlvcml0eVwiIGluIHZhcnMpIHtcbiAgICAgIF9zb3J0ID0gMTtcbiAgICAgIHZhcnMucmVmcmVzaFByaW9yaXR5ID09PSAtOTk5OSAmJiAoX3ByaW1hcnkgPSBzZWxmKTsgLy8gdXNlZCBieSBTY3JvbGxTbW9vdGhlclxuICAgIH1cblxuICAgIHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGwgPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsIHx8IHtcbiAgICAgIHRvcDogX2dldFR3ZWVuQ3JlYXRvcihzY3JvbGxlciwgX3ZlcnRpY2FsKSxcbiAgICAgIGxlZnQ6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF9ob3Jpem9udGFsKVxuICAgIH07XG4gICAgc2VsZi50d2VlblRvID0gdHdlZW5UbyA9IHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGxbZGlyZWN0aW9uLnBdO1xuXG4gICAgc2VsZi5zY3J1YkR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBzY3J1YlNtb290aCA9IF9pc051bWJlcih2YWx1ZSkgJiYgdmFsdWU7XG5cbiAgICAgIGlmICghc2NydWJTbW9vdGgpIHtcbiAgICAgICAgc2NydWJUd2VlbiAmJiBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpLmtpbGwoKTtcbiAgICAgICAgc2NydWJUd2VlbiA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5kdXJhdGlvbih2YWx1ZSkgOiBzY3J1YlR3ZWVuID0gZ3NhcC50byhhbmltYXRpb24sIHtcbiAgICAgICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgICAgICB0b3RhbFByb2dyZXNzOiBcIis9MFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiBzY3J1YlNtb290aCxcbiAgICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBvblNjcnViQ29tcGxldGUgJiYgb25TY3J1YkNvbXBsZXRlKHNlbGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi52YXJzLmxhenkgPSBmYWxzZTtcbiAgICAgIGFuaW1hdGlvbi5faW5pdHRlZCAmJiAhc2VsZi5pc1JldmVydGVkIHx8IGFuaW1hdGlvbi52YXJzLmltbWVkaWF0ZVJlbmRlciAhPT0gZmFsc2UgJiYgdmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIGFuaW1hdGlvbi5kdXJhdGlvbigpICYmIGFuaW1hdGlvbi5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogaWYgdGhpcyBTY3JvbGxUcmlnZ2VyIGdldHMgcmUtaW5pdHRlZCwgYSBmcm9tKCkgdHdlZW4gd2l0aCBhIHN0YWdnZXIgY291bGQgZ2V0IGluaXR0ZWQgaW5pdGlhbGx5IGFuZCB0aGVuIHJldmVydGVkIG9uIHRoZSByZS1pbml0IHdoaWNoIG1lYW5zIGl0J2xsIG5lZWQgdG8gZ2V0IHJlbmRlcmVkIGFnYWluIGhlcmUgdG8gcHJvcGVybHkgZGlzcGxheSB0aGluZ3MuIE90aGVyd2lzZSwgU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMzY3Nzctc2Nyb2xsc21vb3RoZXItc3BsaXR0ZXh0LW5leHRqcy8gYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL2VZUHlQcGQ/ZWRpdG9ycz0wMDEwXG5cbiAgICAgIHNlbGYuYW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IHNlbGY7XG4gICAgICBzZWxmLnNjcnViRHVyYXRpb24oc2NydWIpO1xuICAgICAgc25hcDEgPSAwO1xuICAgICAgaWQgfHwgKGlkID0gYW5pbWF0aW9uLnZhcnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChzbmFwKSB7XG4gICAgICAvLyBUT0RPOiBwb3RlbnRpYWwgaWRlYTogdXNlIGxlZ2l0aW1hdGUgQ1NTIHNjcm9sbCBzbmFwcGluZyBieSBwdXNoaW5nIGludmlzaWJsZSBlbGVtZW50cyBpbnRvIHRoZSBET00gdGhhdCBzZXJ2ZSBhcyBzbmFwIHBvc2l0aW9ucywgYW5kIHRvZ2dsZSB0aGUgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSBvblRvZ2dsZS4gU2VlIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqTHJnV00gZm9yIGEgcXVpY2sgcHJvb2Ygb2YgY29uY2VwdC5cbiAgICAgIGlmICghX2lzT2JqZWN0KHNuYXApIHx8IHNuYXAucHVzaCkge1xuICAgICAgICBzbmFwID0ge1xuICAgICAgICAgIHNuYXBUbzogc25hcFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBcInNjcm9sbEJlaGF2aW9yXCIgaW4gX2JvZHkuc3R5bGUgJiYgZ3NhcC5zZXQoaXNWaWV3cG9ydCA/IFtfYm9keSwgX2RvY0VsXSA6IHNjcm9sbGVyLCB7XG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcImF1dG9cIlxuICAgICAgfSk7IC8vIHNtb290aCBzY3JvbGxpbmcgZG9lc24ndCB3b3JrIHdpdGggc25hcC5cblxuICAgICAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBfaXNGdW5jdGlvbihvKSAmJiBvLnRhcmdldCA9PT0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpICYmIChvLnNtb290aCA9IGZhbHNlKTtcbiAgICAgIH0pOyAvLyBub3RlOiBzZXQgc21vb3RoIHRvIGZhbHNlIG9uIGJvdGggdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHNjcm9sbCBnZXR0ZXJzL3NldHRlcnNcblxuXG4gICAgICBzbmFwRnVuYyA9IF9pc0Z1bmN0aW9uKHNuYXAuc25hcFRvKSA/IHNuYXAuc25hcFRvIDogc25hcC5zbmFwVG8gPT09IFwibGFiZWxzXCIgPyBfZ2V0Q2xvc2VzdExhYmVsKGFuaW1hdGlvbikgOiBzbmFwLnNuYXBUbyA9PT0gXCJsYWJlbHNEaXJlY3Rpb25hbFwiID8gX2dldExhYmVsQXREaXJlY3Rpb24oYW5pbWF0aW9uKSA6IHNuYXAuZGlyZWN0aW9uYWwgIT09IGZhbHNlID8gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgICAgICByZXR1cm4gX3NuYXBEaXJlY3Rpb25hbChzbmFwLnNuYXBUbykodmFsdWUsIF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCA/IDAgOiBzdC5kaXJlY3Rpb24pO1xuICAgICAgfSA6IGdzYXAudXRpbHMuc25hcChzbmFwLnNuYXBUbyk7XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBzbmFwLmR1cmF0aW9uIHx8IHtcbiAgICAgICAgbWluOiAwLjEsXG4gICAgICAgIG1heDogMlxuICAgICAgfTtcbiAgICAgIHNuYXBEdXJDbGFtcCA9IF9pc09iamVjdChzbmFwRHVyQ2xhbXApID8gX2NsYW1wKHNuYXBEdXJDbGFtcC5taW4sIHNuYXBEdXJDbGFtcC5tYXgpIDogX2NsYW1wKHNuYXBEdXJDbGFtcCwgc25hcER1ckNsYW1wKTtcbiAgICAgIHNuYXBEZWxheWVkQ2FsbCA9IGdzYXAuZGVsYXllZENhbGwoc25hcC5kZWxheSB8fCBzY3J1YlNtb290aCAvIDIgfHwgMC4xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSBzY3JvbGxGdW5jKCksXG4gICAgICAgICAgICByZWZyZXNoZWRSZWNlbnRseSA9IF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCxcbiAgICAgICAgICAgIHR3ZWVuID0gdHdlZW5Uby50d2VlbjtcblxuICAgICAgICBpZiAoKHJlZnJlc2hlZFJlY2VudGx5IHx8IE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPCAxMCkgJiYgIXR3ZWVuICYmICFfcG9pbnRlcklzRG93biAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNjcm9sbCAtIHN0YXJ0KSAvIGNoYW5nZSxcbiAgICAgICAgICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIHZlbG9jaXR5ID0gcmVmcmVzaGVkUmVjZW50bHkgPyAwIDogKHRvdGFsUHJvZ3Jlc3MgLSBzbmFwMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDAsXG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBnc2FwLnV0aWxzLmNsYW1wKC1wcm9ncmVzcywgMSAtIHByb2dyZXNzLCBfYWJzKHZlbG9jaXR5IC8gMikgKiB2ZWxvY2l0eSAvIDAuMTg1KSxcbiAgICAgICAgICAgICAgbmF0dXJhbEVuZCA9IHByb2dyZXNzICsgKHNuYXAuaW5lcnRpYSA9PT0gZmFsc2UgPyAwIDogY2hhbmdlMSksXG4gICAgICAgICAgICAgIGVuZFZhbHVlID0gX2NsYW1wKDAsIDEsIHNuYXBGdW5jKG5hdHVyYWxFbmQsIHNlbGYpKSxcbiAgICAgICAgICAgICAgZW5kU2Nyb2xsID0gTWF0aC5yb3VuZChzdGFydCArIGVuZFZhbHVlICogY2hhbmdlKSxcbiAgICAgICAgICAgICAgX3NuYXAgPSBzbmFwLFxuICAgICAgICAgICAgICBvblN0YXJ0ID0gX3NuYXAub25TdGFydCxcbiAgICAgICAgICAgICAgX29uSW50ZXJydXB0ID0gX3NuYXAub25JbnRlcnJ1cHQsXG4gICAgICAgICAgICAgIF9vbkNvbXBsZXRlID0gX3NuYXAub25Db21wbGV0ZTtcblxuICAgICAgICAgIGlmIChzY3JvbGwgPD0gZW5kICYmIHNjcm9sbCA+PSBzdGFydCAmJiBlbmRTY3JvbGwgIT09IHNjcm9sbCkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuICYmICF0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5kYXRhIDw9IF9hYnMoZW5kU2Nyb2xsIC0gc2Nyb2xsKSkge1xuICAgICAgICAgICAgICAvLyB0aGVyZSdzIGFuIG92ZXJsYXBwaW5nIHNuYXAhIFNvIHdlIG11c3QgZmlndXJlIG91dCB3aGljaCBvbmUgaXMgY2xvc2VyIGFuZCBsZXQgdGhhdCB0d2VlbiBsaXZlLlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbmFwLmluZXJ0aWEgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBlbmRWYWx1ZSAtIHByb2dyZXNzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0d2VlblRvKGVuZFNjcm9sbCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogc25hcER1ckNsYW1wKF9hYnMoTWF0aC5tYXgoX2FicyhuYXR1cmFsRW5kIC0gdG90YWxQcm9ncmVzcyksIF9hYnMoZW5kVmFsdWUgLSB0b3RhbFByb2dyZXNzKSkgKiAwLjE4NSAvIHZlbG9jaXR5IC8gMC4wNSB8fCAwKSksXG4gICAgICAgICAgICAgIGVhc2U6IHNuYXAuZWFzZSB8fCBcInBvd2VyM1wiLFxuICAgICAgICAgICAgICBkYXRhOiBfYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCksXG4gICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgZGlzdGFuY2Ugc28gdGhhdCBpZiBhbm90aGVyIHNuYXAgdHdlZW4gb2NjdXJzIChjb25mbGljdCkgd2UgY2FuIHByaW9yaXRpemUgdGhlIGNsb3Nlc3Qgc25hcC5cbiAgICAgICAgICAgICAgb25JbnRlcnJ1cHQ6IGZ1bmN0aW9uIG9uSW50ZXJydXB0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKSAmJiBfb25JbnRlcnJ1cHQgJiYgX29uSW50ZXJydXB0KHNlbGYpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgICAgICAgICAgc25hcDEgPSBzbmFwMiA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogc2VsZi5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBvblNuYXBDb21wbGV0ZSAmJiBvblNuYXBDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSAmJiBfb25Db21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc2Nyb2xsLCBjaGFuZ2UxICogY2hhbmdlLCBlbmRTY3JvbGwgLSBzY3JvbGwgLSBjaGFuZ2UxICogY2hhbmdlKTtcbiAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydChzZWxmLCB0d2VlblRvLnR3ZWVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0FjdGl2ZSAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWQgJiYgKF9pZHNbaWRdID0gc2VsZik7XG4gICAgdHJpZ2dlciA9IHNlbGYudHJpZ2dlciA9IF9nZXRUYXJnZXQodHJpZ2dlciB8fCBwaW4gIT09IHRydWUgJiYgcGluKTsgLy8gaWYgYSB0cmlnZ2VyIGhhcyBzb21lIGtpbmQgb2Ygc2Nyb2xsLXJlbGF0ZWQgZWZmZWN0IGFwcGxpZWQgdGhhdCBjb3VsZCBjb250YW1pbmF0ZSB0aGUgXCJ5XCIgb3IgXCJ4XCIgcG9zaXRpb24gKGxpa2UgYSBTY3JvbGxTbW9vdGhlciBlZmZlY3QpLCB3ZSBuZWVkZWQgYSB3YXkgdG8gdGVtcG9yYXJpbHkgcmV2ZXJ0IGl0LCBzbyB3ZSB1c2UgdGhlIHN0UmV2ZXJ0IHByb3BlcnR5IG9mIHRoZSBnc0NhY2hlLiBJdCBjYW4gcmV0dXJuIGFub3RoZXIgZnVuY3Rpb24gdGhhdCB3ZSdsbCBjYWxsIGF0IHRoZSBlbmQgc28gaXQgY2FuIHJldHVybiB0byBpdHMgbm9ybWFsIHN0YXRlLlxuXG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuID0gdHJpZ2dlciAmJiB0cmlnZ2VyLl9nc2FwICYmIHRyaWdnZXIuX2dzYXAuc3RSZXZlcnQ7XG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuICYmIChjdXN0b21SZXZlcnRSZXR1cm4gPSBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZikpO1xuICAgIHBpbiA9IHBpbiA9PT0gdHJ1ZSA/IHRyaWdnZXIgOiBfZ2V0VGFyZ2V0KHBpbik7XG4gICAgX2lzU3RyaW5nKHRvZ2dsZUNsYXNzKSAmJiAodG9nZ2xlQ2xhc3MgPSB7XG4gICAgICB0YXJnZXRzOiB0cmlnZ2VyLFxuICAgICAgY2xhc3NOYW1lOiB0b2dnbGVDbGFzc1xuICAgIH0pO1xuXG4gICAgaWYgKHBpbikge1xuICAgICAgcGluU3BhY2luZyA9PT0gZmFsc2UgfHwgcGluU3BhY2luZyA9PT0gX21hcmdpbiB8fCAocGluU3BhY2luZyA9ICFwaW5TcGFjaW5nICYmIHBpbi5wYXJlbnROb2RlICYmIHBpbi5wYXJlbnROb2RlLnN0eWxlICYmIF9nZXRDb21wdXRlZFN0eWxlKHBpbi5wYXJlbnROb2RlKS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IGZhbHNlIDogX3BhZGRpbmcpOyAvLyBpZiB0aGUgcGFyZW50IGlzIGRpc3BsYXk6IGZsZXgsIGRvbid0IGFwcGx5IHBpblNwYWNpbmcgYnkgZGVmYXVsdC4gV2Ugc2hvdWxkIGNoZWNrIHRoYXQgcGluLnBhcmVudE5vZGUgaXMgYW4gZWxlbWVudCAobm90IHNoYWRvdyBkb20gd2luZG93KVxuXG4gICAgICBzZWxmLnBpbiA9IHBpbjtcbiAgICAgIHBpbkNhY2hlID0gZ3NhcC5jb3JlLmdldENhY2hlKHBpbik7XG5cbiAgICAgIGlmICghcGluQ2FjaGUuc3BhY2VyKSB7XG4gICAgICAgIC8vIHJlY29yZCB0aGUgc3BhY2VyIGFuZCBwaW5PcmlnaW5hbFN0YXRlIG9uIHRoZSBjYWNoZSBpbiBjYXNlIHNvbWVvbmUgdHJpZXMgcGlubmluZyB0aGUgc2FtZSBlbGVtZW50IHdpdGggTVVMVElQTEUgU2Nyb2xsVHJpZ2dlcnMgLSB3ZSBkb24ndCB3YW50IHRvIGhhdmUgbXVsdGlwbGUgc3BhY2VycyBvciByZWNvcmQgdGhlIFwib3JpZ2luYWxcIiBwaW4gc3RhdGUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBhZmZlY3RlZCBieSBhbm90aGVyIFNjcm9sbFRyaWdnZXIuXG4gICAgICAgIGlmIChwaW5TcGFjZXIpIHtcbiAgICAgICAgICBwaW5TcGFjZXIgPSBfZ2V0VGFyZ2V0KHBpblNwYWNlcik7XG4gICAgICAgICAgcGluU3BhY2VyICYmICFwaW5TcGFjZXIubm9kZVR5cGUgJiYgKHBpblNwYWNlciA9IHBpblNwYWNlci5jdXJyZW50IHx8IHBpblNwYWNlci5uYXRpdmVFbGVtZW50KTsgLy8gZm9yIFJlYWN0ICYgQW5ndWxhclxuXG4gICAgICAgICAgcGluQ2FjaGUuc3BhY2VySXNOYXRpdmUgPSAhIXBpblNwYWNlcjtcbiAgICAgICAgICBwaW5TcGFjZXIgJiYgKHBpbkNhY2hlLnNwYWNlclN0YXRlID0gX2dldFN0YXRlKHBpblNwYWNlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGluQ2FjaGUuc3BhY2VyID0gc3BhY2VyID0gcGluU3BhY2VyIHx8IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJwaW4tc3BhY2VyXCIpO1xuICAgICAgICBpZCAmJiBzcGFjZXIuY2xhc3NMaXN0LmFkZChcInBpbi1zcGFjZXItXCIgKyBpZCk7XG4gICAgICAgIHBpbkNhY2hlLnBpblN0YXRlID0gcGluT3JpZ2luYWxTdGF0ZSA9IF9nZXRTdGF0ZShwaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSA9IHBpbkNhY2hlLnBpblN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXJzLmZvcmNlM0QgIT09IGZhbHNlICYmIGdzYXAuc2V0KHBpbiwge1xuICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3BhY2VyID0gc3BhY2VyID0gcGluQ2FjaGUuc3BhY2VyO1xuICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgc3BhY2luZ1N0YXJ0ID0gY3NbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdO1xuICAgICAgcGluR2V0dGVyID0gZ3NhcC5nZXRQcm9wZXJ0eShwaW4pO1xuICAgICAgcGluU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihwaW4sIGRpcmVjdGlvbi5hLCBfcHgpOyAvLyBwaW4uZmlyc3RDaGlsZCAmJiAhX21heFNjcm9sbChwaW4sIGRpcmVjdGlvbikgJiYgKHBpbi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCIpOyAvLyBwcm90ZWN0cyBmcm9tIGNvbGxhcHNpbmcgbWFyZ2lucywgYnV0IGNhbiBoYXZlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xZTQyYzdhNzNiZmE0MDlkMmNmMWUxODRlN2E0MjQ4ZCBzbyBpdCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiBqdXN0IHRlbGxpbmcgcGVvcGxlIHRvIHNldCB1cCB0aGVpciBDU1MgdG8gYXZvaWQgdGhlIGNvbGxhcHNpbmcgbWFyZ2lucyAob3ZlcmZsb3c6IGhpZGRlbiB8IGF1dG8gaXMganVzdCBvbmUgb3B0aW9uLiBBbm90aGVyIGlzIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudCkuXG5cbiAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgcGluU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcbiAgICB9XG5cbiAgICBpZiAobWFya2Vycykge1xuICAgICAgbWFya2VyVmFycyA9IF9pc09iamVjdChtYXJrZXJzKSA/IF9zZXREZWZhdWx0cyhtYXJrZXJzLCBfbWFya2VyRGVmYXVsdHMpIDogX21hcmtlckRlZmF1bHRzO1xuICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLXN0YXJ0XCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwKTtcbiAgICAgIG1hcmtlckVuZFRyaWdnZXIgPSBfY3JlYXRlTWFya2VyKFwic2Nyb2xsZXItZW5kXCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwLCBtYXJrZXJTdGFydFRyaWdnZXIpO1xuICAgICAgb2Zmc2V0ID0gbWFya2VyU3RhcnRUcmlnZ2VyW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gICAgICB2YXIgY29udGVudCA9IF9nZXRUYXJnZXQoX2dldFByb3h5UHJvcChzY3JvbGxlciwgXCJjb250ZW50XCIpIHx8IHNjcm9sbGVyKTtcblxuICAgICAgbWFya2VyU3RhcnQgPSB0aGlzLm1hcmtlclN0YXJ0ID0gX2NyZWF0ZU1hcmtlcihcInN0YXJ0XCIsIGlkLCBjb250ZW50LCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIG9mZnNldCwgMCwgY29udGFpbmVyQW5pbWF0aW9uKTtcbiAgICAgIG1hcmtlckVuZCA9IHRoaXMubWFya2VyRW5kID0gX2NyZWF0ZU1hcmtlcihcImVuZFwiLCBpZCwgY29udGVudCwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCBvZmZzZXQsIDAsIGNvbnRhaW5lckFuaW1hdGlvbik7XG4gICAgICBjb250YWluZXJBbmltYXRpb24gJiYgKGNhTWFya2VyU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihbbWFya2VyU3RhcnQsIG1hcmtlckVuZF0sIGRpcmVjdGlvbi5hLCBfcHgpKTtcblxuICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uICYmICEoX3Byb3hpZXMubGVuZ3RoICYmIF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZml4ZWRNYXJrZXJzXCIpID09PSB0cnVlKSkge1xuICAgICAgICBfbWFrZVBvc2l0aW9uYWJsZShpc1ZpZXdwb3J0ID8gX2JvZHkgOiBzY3JvbGxlcik7XG5cbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0sIHtcbiAgICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gICAgICB2YXIgb2xkT25VcGRhdGUgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZSxcbiAgICAgICAgICBvbGRQYXJhbXMgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZVBhcmFtcztcbiAgICAgIGNvbnRhaW5lckFuaW1hdGlvbi5ldmVudENhbGxiYWNrKFwib25VcGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZSgwLCAwLCAxKTtcbiAgICAgICAgb2xkT25VcGRhdGUgJiYgb2xkT25VcGRhdGUuYXBwbHkoY29udGFpbmVyQW5pbWF0aW9uLCBvbGRQYXJhbXMgfHwgW10pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdHJpZ2dlcnNbX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikgLSAxXTtcbiAgICB9O1xuXG4gICAgc2VsZi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90cmlnZ2Vyc1tfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSArIDFdO1xuICAgIH07XG5cbiAgICBzZWxmLnJldmVydCA9IGZ1bmN0aW9uIChyZXZlcnQsIHRlbXApIHtcbiAgICAgIGlmICghdGVtcCkge1xuICAgICAgICByZXR1cm4gc2VsZi5raWxsKHRydWUpO1xuICAgICAgfSAvLyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGdzYXAuY29udGV4dCgpIGFuZCBnc2FwLm1hdGNoTWVkaWEoKSB3aGljaCBjYWxsIHJldmVydCgpXG5cblxuICAgICAgdmFyIHIgPSByZXZlcnQgIT09IGZhbHNlIHx8ICFzZWxmLmVuYWJsZWQsXG4gICAgICAgICAgcHJldlJlZnJlc2hpbmcgPSBfcmVmcmVzaGluZztcblxuICAgICAgaWYgKHIgIT09IHNlbGYuaXNSZXZlcnRlZCkge1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHByZXZTY3JvbGwgPSBNYXRoLm1heChzY3JvbGxGdW5jKCksIHNlbGYuc2Nyb2xsLnJlYyB8fCAwKTsgLy8gcmVjb3JkIHRoZSBzY3JvbGwgc28gd2UgY2FuIHJldmVydCBsYXRlciAocmVwb3NpdGlvbmluZy9waW5uaW5nIHRoaW5ncyBjYW4gYWZmZWN0IHNjcm9sbCBwb3NpdGlvbikuIEluIHRoZSBzdGF0aWMgcmVmcmVzaCgpIG1ldGhvZCwgd2UgZmlyc3QgcmVjb3JkIGFsbCB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhcyBhIHJlZmVyZW5jZS5cblxuICAgICAgICAgIHByZXZQcm9ncmVzcyA9IHNlbGYucHJvZ3Jlc3M7XG4gICAgICAgICAgcHJldkFuaW1Qcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtlclN0YXJ0ICYmIFttYXJrZXJTdGFydCwgbWFya2VyRW5kLCBtYXJrZXJTdGFydFRyaWdnZXIsIG1hcmtlckVuZFRyaWdnZXJdLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5zdHlsZS5kaXNwbGF5ID0gciA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocikge1xuICAgICAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcbiAgICAgICAgICBzZWxmLnVwZGF0ZShyKTsgLy8gbWFrZSBzdXJlIHRoZSBwaW4gaXMgYmFjayBpbiBpdHMgb3JpZ2luYWwgcG9zaXRpb24gc28gdGhhdCBhbGwgdGhlIG1lYXN1cmVtZW50cyBhcmUgY29ycmVjdC4gZG8gdGhpcyBCRUZPUkUgc3dhcHBpbmcgdGhlIHBpbiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaW4gJiYgKCFwaW5SZXBhcmVudCB8fCAhc2VsZi5pc0FjdGl2ZSkpIHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHBpbk9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pLCBzcGFjZXJTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgciB8fCBzZWxmLnVwZGF0ZShyKTsgLy8gd2hlbiB3ZSdyZSByZXN0b3JpbmcsIHRoZSB1cGRhdGUgc2hvdWxkIHJ1biBBRlRFUiBzd2FwcGluZyB0aGUgcGluIGludG8gaXRzIHBpbi1zcGFjZXIuXG5cbiAgICAgICAgX3JlZnJlc2hpbmcgPSBwcmV2UmVmcmVzaGluZzsgLy8gcmVzdG9yZS4gV2Ugc2V0IGl0IHRvIHRydWUgZHVyaW5nIHRoZSB1cGRhdGUoKSBzbyB0aGF0IHRoaW5ncyBmaXJlIHByb3Blcmx5IGluIHRoZXJlLlxuXG4gICAgICAgIHNlbGYuaXNSZXZlcnRlZCA9IHI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucmVmcmVzaCA9IGZ1bmN0aW9uIChzb2Z0LCBmb3JjZSwgcG9zaXRpb24sIHBpbk9mZnNldCkge1xuICAgICAgLy8gcG9zaXRpb24gaXMgdHlwaWNhbGx5IG9ubHkgZGVmaW5lZCBpZiBpdCdzIGNvbWluZyBmcm9tIHNldFBvc2l0aW9ucygpIC0gaXQncyBhIHdheSB0byBza2lwIHRoZSBub3JtYWwgcGFyc2luZy4gcGluT2Zmc2V0IGlzIGFsc28gb25seSBmcm9tIHNldFBvc2l0aW9ucygpIGFuZCBpcyBtb3N0bHkgcmVsYXRlZCB0byBmYW5jeSBzdHVmZiB3ZSBuZWVkIHRvIGRvIGluIFNjcm9sbFNtb290aGVyIHdpdGggZWZmZWN0c1xuICAgICAgaWYgKChfcmVmcmVzaGluZyB8fCAhc2VsZi5lbmFibGVkKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluICYmIHNvZnQgJiYgX2xhc3RTY3JvbGxUaW1lKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInNjcm9sbEVuZFwiLCBfc29mdFJlZnJlc2gpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgIV9yZWZyZXNoaW5nQWxsICYmIG9uUmVmcmVzaEluaXQgJiYgb25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcblxuICAgICAgaWYgKHR3ZWVuVG8udHdlZW4gJiYgIXBvc2l0aW9uKSB7XG4gICAgICAgIC8vIHdlIHNraXAgdGhpcyBpZiBhIHBvc2l0aW9uIGlzIHBhc3NlZCBpbiBiZWNhdXNlIHR5cGljYWxseSB0aGF0J3MgZnJvbSAuc2V0UG9zaXRpb25zKCkgYW5kIGl0J3MgYmVzdCB0byBhbGxvdyBpbi1wcm9ncmVzcyBzbmFwcGluZyB0byBjb250aW51ZS5cbiAgICAgICAgdHdlZW5Uby50d2Vlbi5raWxsKCk7XG4gICAgICAgIHR3ZWVuVG8udHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcbiAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggJiYgYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICBraWxsOiBmYWxzZVxuICAgICAgfSkuaW52YWxpZGF0ZSgpO1xuICAgICAgc2VsZi5pc1JldmVydGVkIHx8IHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgc2VsZi5fc3ViUGluT2Zmc2V0ID0gZmFsc2U7IC8vIHdlJ2xsIHNldCB0aGlzIHRvIHRydWUgaW4gdGhlIHN1Yi1waW5zIGlmIHdlIGZpbmQgYW55XG5cbiAgICAgIHZhciBzaXplID0gZ2V0U2Nyb2xsZXJTaXplKCksXG4gICAgICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBnZXRTY3JvbGxlck9mZnNldHMoKSxcbiAgICAgICAgICBtYXggPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSA6IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgaXNGaXJzdFJlZnJlc2ggPSBjaGFuZ2UgPD0gMC4wMSxcbiAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgIG90aGVyUGluT2Zmc2V0ID0gcGluT2Zmc2V0IHx8IDAsXG4gICAgICAgICAgcGFyc2VkRW5kID0gX2lzT2JqZWN0KHBvc2l0aW9uKSA/IHBvc2l0aW9uLmVuZCA6IHZhcnMuZW5kLFxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB2YXJzLmVuZFRyaWdnZXIgfHwgdHJpZ2dlcixcbiAgICAgICAgICBwYXJzZWRTdGFydCA9IF9pc09iamVjdChwb3NpdGlvbikgPyBwb3NpdGlvbi5zdGFydCA6IHZhcnMuc3RhcnQgfHwgKHZhcnMuc3RhcnQgPT09IDAgfHwgIXRyaWdnZXIgPyAwIDogcGluID8gXCIwIDBcIiA6IFwiMCAxMDAlXCIpLFxuICAgICAgICAgIHBpbm5lZENvbnRhaW5lciA9IHNlbGYucGlubmVkQ29udGFpbmVyID0gdmFycy5waW5uZWRDb250YWluZXIgJiYgX2dldFRhcmdldCh2YXJzLnBpbm5lZENvbnRhaW5lciwgc2VsZiksXG4gICAgICAgICAgdHJpZ2dlckluZGV4ID0gdHJpZ2dlciAmJiBNYXRoLm1heCgwLCBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSkgfHwgMCxcbiAgICAgICAgICBpID0gdHJpZ2dlckluZGV4LFxuICAgICAgICAgIGNzLFxuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBzY3JvbGwsXG4gICAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICAgICAgICBvdmVycmlkZSxcbiAgICAgICAgICBjdXJUcmlnZ2VyLFxuICAgICAgICAgIGN1clBpbixcbiAgICAgICAgICBvcHBvc2l0ZVNjcm9sbCxcbiAgICAgICAgICBpbml0dGVkLFxuICAgICAgICAgIHJldmVydGVkUGlucyxcbiAgICAgICAgICBmb3JjZWRPdmVyZmxvdyxcbiAgICAgICAgICBtYXJrZXJTdGFydE9mZnNldCxcbiAgICAgICAgICBtYXJrZXJFbmRPZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJzICYmIF9pc09iamVjdChwb3NpdGlvbikpIHtcbiAgICAgICAgLy8gaWYgd2UgYWx0ZXIgdGhlIHN0YXJ0L2VuZCBwb3NpdGlvbnMgd2l0aCAuc2V0UG9zaXRpb25zKCksIGl0IGdlbmVyYWxseSBmZWVkcyBpbiBhYnNvbHV0ZSBOVU1CRVJTIHdoaWNoIGRvbid0IGNvbnZleSBpbmZvcm1hdGlvbiBhYm91dCB3aGVyZSB0byBsaW5lIHVwIHRoZSBtYXJrZXJzLCBzbyB0byBrZWVwIGl0IGludHVpdGl2ZSwgd2UgcmVjb3JkIGhvdyBmYXIgdGhlIHRyaWdnZXIgcG9zaXRpb25zIHNoaWZ0IGFmdGVyIGFwcGx5aW5nIHRoZSBuZXcgbnVtYmVycyBhbmQgdGhlbiBvZmZzZXQgYnkgdGhhdCBtdWNoIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uIFdlIGRvIHRoZSBzYW1lIHRvIHRoZSBhc3NvY2lhdGVkIHRyaWdnZXIgbWFya2VycyB0b28gb2YgY291cnNlLlxuICAgICAgICBtYXJrZXJTdGFydE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24ucCk7XG4gICAgICAgIG1hcmtlckVuZE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIHVzZXIgbWlnaHQgdHJ5IHRvIHBpbiB0aGUgc2FtZSBlbGVtZW50IG1vcmUgdGhhbiBvbmNlLCBzbyB3ZSBtdXN0IGZpbmQgYW55IHByaW9yIHRyaWdnZXJzIHdpdGggdGhlIHNhbWUgcGluLCByZXZlcnQgdGhlbSwgYW5kIGRldGVybWluZSBob3cgbG9uZyB0aGV5J3JlIHBpbm5pbmcgc28gdGhhdCB3ZSBjYW4gb2Zmc2V0IHRoaW5ncyBhcHByb3ByaWF0ZWx5LiBNYWtlIHN1cmUgd2UgcmV2ZXJ0IGZyb20gbGFzdCB0byBmaXJzdCBzbyB0aGF0IHRoaW5ncyBcInJld2luZFwiIHByb3Blcmx5LlxuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJUcmlnZ2VyLmVuZCB8fCBjdXJUcmlnZ2VyLnJlZnJlc2goMCwgMSkgfHwgKF9yZWZyZXNoaW5nID0gc2VsZik7IC8vIGlmIGl0J3MgYSB0aW1lbGluZS1iYXNlZCB0cmlnZ2VyIHRoYXQgaGFzbid0IGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWQgeWV0IGJlY2F1c2UgaXQncyB3YWl0aW5nIGZvciAxIHRpY2ssIGp1c3QgZm9yY2UgdGhlIHJlZnJlc2goKSBoZXJlLCBvdGhlcndpc2UgaWYgaXQgY29udGFpbnMgYSBwaW4gdGhhdCdzIHN1cHBvc2VkIHRvIGFmZmVjdCBvdGhlciBTY3JvbGxUcmlnZ2VycyBmdXJ0aGVyIGRvd24gdGhlIHBhZ2UsIHRoZXkgd29uJ3QgYmUgYWRqdXN0ZWQgcHJvcGVybHkuXG5cbiAgICAgICAgY3VyUGluID0gY3VyVHJpZ2dlci5waW47XG5cbiAgICAgICAgaWYgKGN1clBpbiAmJiAoY3VyUGluID09PSB0cmlnZ2VyIHx8IGN1clBpbiA9PT0gcGluIHx8IGN1clBpbiA9PT0gcGlubmVkQ29udGFpbmVyKSAmJiAhY3VyVHJpZ2dlci5pc1JldmVydGVkKSB7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zIHx8IChyZXZlcnRlZFBpbnMgPSBbXSk7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zLnVuc2hpZnQoY3VyVHJpZ2dlcik7IC8vIHdlJ2xsIHJldmVydCBmcm9tIGZpcnN0IHRvIGxhc3QgdG8gbWFrZSBzdXJlIHRoaW5ncyByZWFjaCB0aGVpciBlbmQgc3RhdGUgcHJvcGVybHlcblxuICAgICAgICAgIGN1clRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clRyaWdnZXIgIT09IF90cmlnZ2Vyc1tpXSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgaXQgZ290IHJlbW92ZWQuXG4gICAgICAgICAgdHJpZ2dlckluZGV4LS07XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9pc0Z1bmN0aW9uKHBhcnNlZFN0YXJ0KSAmJiAocGFyc2VkU3RhcnQgPSBwYXJzZWRTdGFydChzZWxmKSk7XG4gICAgICBwYXJzZWRTdGFydCA9IF9wYXJzZUNsYW1wKHBhcnNlZFN0YXJ0LCBcInN0YXJ0XCIsIHNlbGYpO1xuICAgICAgc3RhcnQgPSBfcGFyc2VQb3NpdGlvbihwYXJzZWRTdGFydCwgdHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzY3JvbGxGdW5jKCksIG1hcmtlclN0YXJ0LCBtYXJrZXJTdGFydFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgXCJfc3RhcnRDbGFtcFwiKSB8fCAocGluID8gLTAuMDAxIDogMCk7XG4gICAgICBfaXNGdW5jdGlvbihwYXJzZWRFbmQpICYmIChwYXJzZWRFbmQgPSBwYXJzZWRFbmQoc2VsZikpO1xuXG4gICAgICBpZiAoX2lzU3RyaW5nKHBhcnNlZEVuZCkgJiYgIXBhcnNlZEVuZC5pbmRleE9mKFwiKz1cIikpIHtcbiAgICAgICAgaWYgKH5wYXJzZWRFbmQuaW5kZXhPZihcIiBcIikpIHtcbiAgICAgICAgICBwYXJzZWRFbmQgPSAoX2lzU3RyaW5nKHBhcnNlZFN0YXJ0KSA/IHBhcnNlZFN0YXJ0LnNwbGl0KFwiIFwiKVswXSA6IFwiXCIpICsgcGFyc2VkRW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCA9IF9vZmZzZXRUb1B4KHBhcnNlZEVuZC5zdWJzdHIoMiksIHNpemUpO1xuICAgICAgICAgIHBhcnNlZEVuZCA9IF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydCA6IChjb250YWluZXJBbmltYXRpb24gPyBnc2FwLnV0aWxzLm1hcFJhbmdlKDAsIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLCBjb250YWluZXJBbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5zdGFydCwgY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuZW5kLCBzdGFydCkgOiBzdGFydCkgKyBvZmZzZXQ7IC8vIF9wYXJzZVBvc2l0aW9uIHdvbid0IGZhY3RvciBpbiB0aGUgb2Zmc2V0IGlmIHRoZSBzdGFydCBpcyBhIG51bWJlciwgc28gZG8gaXQgaGVyZS5cblxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZEVuZCA9IF9wYXJzZUNsYW1wKHBhcnNlZEVuZCwgXCJlbmRcIiwgc2VsZik7XG4gICAgICBlbmQgPSBNYXRoLm1heChzdGFydCwgX3BhcnNlUG9zaXRpb24ocGFyc2VkRW5kIHx8IChwYXJzZWRFbmRUcmlnZ2VyID8gXCIxMDAlIDBcIiA6IG1heCksIHBhcnNlZEVuZFRyaWdnZXIsIHNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsRnVuYygpICsgb2Zmc2V0LCBtYXJrZXJFbmQsIG1hcmtlckVuZFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX2VuZENsYW1wICYmIFwiX2VuZENsYW1wXCIpKSB8fCAtMC4wMDE7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgICAgaSA9IHRyaWdnZXJJbmRleDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJQaW4gPSBjdXJUcmlnZ2VyLnBpbjtcblxuICAgICAgICBpZiAoY3VyUGluICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDw9IHN0YXJ0ICYmICFjb250YWluZXJBbmltYXRpb24gJiYgY3VyVHJpZ2dlci5lbmQgPiAwKSB7XG4gICAgICAgICAgY3MgPSBjdXJUcmlnZ2VyLmVuZCAtIChzZWxmLl9zdGFydENsYW1wID8gTWF0aC5tYXgoMCwgY3VyVHJpZ2dlci5zdGFydCkgOiBjdXJUcmlnZ2VyLnN0YXJ0KTtcblxuICAgICAgICAgIGlmICgoY3VyUGluID09PSB0cmlnZ2VyICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDwgc3RhcnQgfHwgY3VyUGluID09PSBwaW5uZWRDb250YWluZXIpICYmIGlzTmFOKHBhcnNlZFN0YXJ0KSkge1xuICAgICAgICAgICAgLy8gbnVtZXJpYyBzdGFydCB2YWx1ZXMgc2hvdWxkbid0IGJlIG9mZnNldCBhdCBhbGwgLSB0cmVhdCB0aGVtIGFzIGFic29sdXRlXG4gICAgICAgICAgICBvZmZzZXQgKz0gY3MgKiAoMSAtIGN1clRyaWdnZXIucHJvZ3Jlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1clBpbiA9PT0gcGluICYmIChvdGhlclBpbk9mZnNldCArPSBjcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gb2Zmc2V0O1xuICAgICAgZW5kICs9IG9mZnNldDtcbiAgICAgIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgKHNlbGYuX3N0YXJ0Q2xhbXAgKz0gb2Zmc2V0KTtcblxuICAgICAgaWYgKHNlbGYuX2VuZENsYW1wICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzZWxmLl9lbmRDbGFtcCA9IGVuZCB8fCAtMC4wMDE7XG4gICAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9IGVuZCAtIHN0YXJ0IHx8IChzdGFydCAtPSAwLjAxKSAmJiAwLjAwMTtcblxuICAgICAgaWYgKGlzRmlyc3RSZWZyZXNoKSB7XG4gICAgICAgIC8vIG9uIHRoZSB2ZXJ5IGZpcnN0IHJlZnJlc2goKSwgdGhlIHByZXZQcm9ncmVzcyBjb3VsZG4ndCBoYXZlIGJlZW4gYWNjdXJhdGUgeWV0IGJlY2F1c2UgdGhlIHN0YXJ0L2VuZCB3ZXJlIG5ldmVyIGNhbGN1bGF0ZWQsIHNvIHdlIHNldCBpdCBoZXJlLiBCZWZvcmUgMy4xMS41LCBpdCBjb3VsZCBsZWFkIHRvIGFuIGluYWNjdXJhdGUgc2Nyb2xsIHBvc2l0aW9uIHJlc3RvcmF0aW9uIHdpdGggc25hcHBpbmcuXG4gICAgICAgIHByZXZQcm9ncmVzcyA9IGdzYXAudXRpbHMuY2xhbXAoMCwgMSwgZ3NhcC51dGlscy5ub3JtYWxpemUoc3RhcnQsIGVuZCwgcHJldlNjcm9sbCkpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9waW5QdXNoID0gb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJTdGFydCAmJiBvZmZzZXQpIHtcbiAgICAgICAgLy8gb2Zmc2V0IHRoZSBtYXJrZXJzIGlmIG5lY2Vzc2FyeVxuICAgICAgICBjcyA9IHt9O1xuICAgICAgICBjc1tkaXJlY3Rpb24uYV0gPSBcIis9XCIgKyBvZmZzZXQ7XG4gICAgICAgIHBpbm5lZENvbnRhaW5lciAmJiAoY3NbZGlyZWN0aW9uLnBdID0gXCItPVwiICsgc2Nyb2xsRnVuYygpKTtcbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0LCBtYXJrZXJFbmRdLCBjcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgICBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSBfdmVydGljYWw7XG4gICAgICAgIHNjcm9sbCA9IHNjcm9sbEZ1bmMoKTsgLy8gcmVjYWxjdWxhdGUgYmVjYXVzZSB0aGUgdHJpZ2dlcnMgY2FuIGFmZmVjdCB0aGUgc2Nyb2xsXG5cbiAgICAgICAgcGluU3RhcnQgPSBwYXJzZUZsb2F0KHBpbkdldHRlcihkaXJlY3Rpb24uYSkpICsgb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgICAgaWYgKCFtYXggJiYgZW5kID4gMSkge1xuICAgICAgICAgIC8vIG1ha2VzIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIHNjcm9sbGJhciwgb3RoZXJ3aXNlIGlmIHNvbWV0aGluZyBoYXMgd2lkdGg6IDEwMCUsIGZvciBleGFtcGxlLCBpdCB3b3VsZCBiZSB0b28gYmlnIChleGNsdWRlIHRoZSBzY3JvbGxiYXIpLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNTE4Mi1zY3JvbGx0cmlnZ2VyLXdpZHRoLW9mLXBhZ2UtaW5jcmVhc2Utd2hlcmUtbWFya2Vycy1hcmUtc2V0LXRvLWZhbHNlL1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpLnN0eWxlO1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0ge1xuICAgICAgICAgICAgc3R5bGU6IGZvcmNlZE92ZXJmbG93LFxuICAgICAgICAgICAgdmFsdWU6IGZvcmNlZE92ZXJmbG93W1wib3ZlcmZsb3dcIiArIGRpcmVjdGlvbi5hLnRvVXBwZXJDYXNlKCldXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc1ZpZXdwb3J0ICYmIF9nZXRDb21wdXRlZFN0eWxlKF9ib2R5KVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSAhPT0gXCJzY3JvbGxcIikge1xuICAgICAgICAgICAgLy8gYXZvaWQgYW4gZXh0cmEgc2Nyb2xsYmFyIGlmIEJPVEggPGh0bWw+IGFuZCA8Ym9keT4gaGF2ZSBvdmVyZmxvdyBzZXQgdG8gXCJzY3JvbGxcIlxuICAgICAgICAgICAgZm9yY2VkT3ZlcmZsb3cuc3R5bGVbXCJvdmVyZmxvd1wiICsgZGlyZWN0aW9uLmEudG9VcHBlckNhc2UoKV0gPSBcInNjcm9sbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgICBwaW5TdGF0ZSA9IF9nZXRTdGF0ZShwaW4pOyAvLyB0cmFuc2Zvcm1zIHdpbGwgaW50ZXJmZXJlIHdpdGggdGhlIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSBwbGFjZW1lbnQsIHNvIHJlbW92ZSB0aGVtIHRlbXBvcmFyaWx5LiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBmYWN0b3JzIGluIHRyYW5zZm9ybXMuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpO1xuICAgICAgICBvcHBvc2l0ZVNjcm9sbCA9IHVzZUZpeGVkUG9zaXRpb24gJiYgX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGlzVmVydGljYWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCkoKTtcblxuICAgICAgICBpZiAocGluU3BhY2luZykge1xuICAgICAgICAgIHNwYWNlclN0YXRlID0gW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyLCBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCArIF9weF07XG4gICAgICAgICAgc3BhY2VyU3RhdGUudCA9IHNwYWNlcjtcbiAgICAgICAgICBpID0gcGluU3BhY2luZyA9PT0gX3BhZGRpbmcgPyBfZ2V0U2l6ZShwaW4sIGRpcmVjdGlvbikgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCA6IDA7XG4gICAgICAgICAgaSAmJiBzcGFjZXJTdGF0ZS5wdXNoKGRpcmVjdGlvbi5kLCBpICsgX3B4KTsgLy8gZm9yIGJveC1zaXppbmc6IGJvcmRlci1ib3ggKG11c3QgaW5jbHVkZSBwYWRkaW5nKS5cblxuICAgICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG5cbiAgICAgICAgICBpZiAocGlubmVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBpbiBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSwgd2UgbmVlZCB0byByZS1ldmFsdWF0ZSB0aGUgcGluQ29udGFpbmVyJ3Mgc2l6ZSBiZWNhdXNlIHRoaXMgcGluU3BhY2luZyBtYXkgc3RyZXRjaCBpdCBvdXQsIGJ1dCB3ZSBjYW4ndCBqdXN0IGFkZCB0aGUgZXhhY3QgZGlzdGFuY2UgYmVjYXVzZSBkZXBlbmRpbmcgb24gbGF5b3V0LCBpdCBtYXkgbm90IHB1c2ggdGhpbmdzIGRvd24gb3IgaXQgbWF5IG9ubHkgZG8gc28gcGFydGlhbGx5LlxuICAgICAgICAgICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgaWYgKHQucGluID09PSBwaW5uZWRDb250YWluZXIgJiYgdC52YXJzLnBpblNwYWNpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdC5fc3ViUGluT2Zmc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICBvdmVycmlkZSA9IHtcbiAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCArIChpc1ZlcnRpY2FsID8gc2Nyb2xsIC0gc3RhcnQgOiBvcHBvc2l0ZVNjcm9sbCkgKyBfcHgsXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIChpc1ZlcnRpY2FsID8gb3Bwb3NpdGVTY3JvbGwgOiBzY3JvbGwgLSBzdGFydCkgKyBfcHgsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgb3ZlcnJpZGVbX3dpZHRoXSA9IG92ZXJyaWRlW1wibWF4XCIgKyBfV2lkdGhdID0gTWF0aC5jZWlsKGJvdW5kcy53aWR0aCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX2hlaWdodF0gPSBvdmVycmlkZVtcIm1heFwiICsgX0hlaWdodF0gPSBNYXRoLmNlaWwoYm91bmRzLmhlaWdodCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX21hcmdpbl0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1RvcF0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1JpZ2h0XSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfQm90dG9tXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfTGVmdF0gPSBcIjBcIjtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfVG9wXSA9IGNzW19wYWRkaW5nICsgX1RvcF07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfUmlnaHRdID0gY3NbX3BhZGRpbmcgKyBfUmlnaHRdO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0JvdHRvbV0gPSBjc1tfcGFkZGluZyArIF9Cb3R0b21dO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0xlZnRdID0gY3NbX3BhZGRpbmcgKyBfTGVmdF07XG4gICAgICAgICAgcGluQWN0aXZlU3RhdGUgPSBfY29weVN0YXRlKHBpbk9yaWdpbmFsU3RhdGUsIG92ZXJyaWRlLCBwaW5SZXBhcmVudCk7XG4gICAgICAgICAgX3JlZnJlc2hpbmdBbGwgJiYgc2Nyb2xsRnVuYygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIG1pZ2h0IGJlIGFmZmVjdGluZyB0aGUgdHJhbnNmb3JtLCBzbyB3ZSBtdXN0IGp1bXAgdG8gdGhlIGVuZCwgY2hlY2sgdGhlIHZhbHVlLCBhbmQgY29tcGVuc2F0ZSBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCB3aGVuIGl0IGJlY29tZXMgdW5waW5uZWQsIHRoZSBwaW5TZXR0ZXIoKSB3aWxsIGdldCBzZXQgdG8gYSB2YWx1ZSB0aGF0IGRvZXNuJ3QgaW5jbHVkZSB3aGF0ZXZlciB0aGUgYW5pbWF0aW9uIGRpZC5cbiAgICAgICAgICBpbml0dGVkID0gYW5pbWF0aW9uLl9pbml0dGVkOyAvLyBpZiBub3QsIHdlIG11c3QgaW52YWxpZGF0ZSgpIGFmdGVyIHRoaXMgc3RlcCwgb3RoZXJ3aXNlIGl0IGNvdWxkIGxvY2sgaW4gc3RhcnRpbmcgdmFsdWVzIHByZW1hdHVyZWx5LlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygxKTtcblxuICAgICAgICAgIGFuaW1hdGlvbi5yZW5kZXIoYW5pbWF0aW9uLmR1cmF0aW9uKCksIHRydWUsIHRydWUpO1xuICAgICAgICAgIHBpbkNoYW5nZSA9IHBpbkdldHRlcihkaXJlY3Rpb24uYSkgLSBwaW5TdGFydCArIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0O1xuICAgICAgICAgIHBpbk1vdmVzID0gTWF0aC5hYnMoY2hhbmdlIC0gcGluQ2hhbmdlKSA+IDE7XG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBwaW5Nb3ZlcyAmJiBwaW5BY3RpdmVTdGF0ZS5zcGxpY2UocGluQWN0aXZlU3RhdGUubGVuZ3RoIC0gMiwgMik7IC8vIHRyYW5zZm9ybSBpcyB0aGUgbGFzdCBwcm9wZXJ0eS92YWx1ZSBzZXQgaW4gdGhlIHN0YXRlIEFycmF5LiBTaW5jZSB0aGUgYW5pbWF0aW9uIGlzIGNvbnRyb2xsaW5nIHRoYXQsIHdlIHNob3VsZCBvbWl0IGl0LlxuXG4gICAgICAgICAgYW5pbWF0aW9uLnJlbmRlcigwLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkIHx8IGFuaW1hdGlvbi5pbnZhbGlkYXRlKHRydWUpO1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQgfHwgYW5pbWF0aW9uLnRvdGFsVGltZShhbmltYXRpb24udG90YWxUaW1lKCkpOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGEgdG9nZ2xlQWN0aW9uIGNhbGxlZCBwbGF5KCkgYW5kIHRoZW4gcmVmcmVzaCgpIGhhcHBlbnMgYW5kIHdoZW4gd2UgcmVuZGVyKDEpIGFib3ZlLCBpdCB3b3VsZCBjYXVzZSB0aGUgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGFuZCBnZXQgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQsIHNvIHRoaXMgbWFrZXMgc3VyZSBpdCBnZXRzIHB1dCBiYWNrIGluLlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaW5DaGFuZ2UgPSBjaGFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JjZWRPdmVyZmxvdyAmJiAoZm9yY2VkT3ZlcmZsb3cudmFsdWUgPyBmb3JjZWRPdmVyZmxvdy5zdHlsZVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSA9IGZvcmNlZE92ZXJmbG93LnZhbHVlIDogZm9yY2VkT3ZlcmZsb3cuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvdy1cIiArIGRpcmVjdGlvbi5hKSk7XG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgJiYgc2Nyb2xsRnVuYygpICYmICFjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gaXQgbWF5IGJlIElOU0lERSBhIHBpbm5lZCBlbGVtZW50LCBzbyB3YWxrIHVwIHRoZSB0cmVlIGFuZCBsb29rIGZvciBhbnkgZWxlbWVudHMgd2l0aCBfcGluT2Zmc2V0IHRvIGNvbXBlbnNhdGUgYmVjYXVzZSBhbnl0aGluZyB3aXRoIHBpblNwYWNpbmcgdGhhdCdzIGFscmVhZHkgc2Nyb2xsZWQgd291bGQgdGhyb3cgb2ZmIHRoZSBtZWFzdXJlbWVudHMgaW4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgYm91bmRzID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuXG4gICAgICAgIHdoaWxlIChib3VuZHMgJiYgYm91bmRzICE9PSBfYm9keSkge1xuICAgICAgICAgIGlmIChib3VuZHMuX3Bpbk9mZnNldCkge1xuICAgICAgICAgICAgc3RhcnQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgICBlbmQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm91bmRzID0gYm91bmRzLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV2ZXJ0ZWRQaW5zICYmIHJldmVydGVkUGlucy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3RhcnQgPSBzdGFydDtcbiAgICAgIHNlbGYuZW5kID0gZW5kO1xuICAgICAgc2Nyb2xsMSA9IHNjcm9sbDIgPSBfcmVmcmVzaGluZ0FsbCA/IHByZXZTY3JvbGwgOiBzY3JvbGxGdW5jKCk7IC8vIHJlc2V0IHZlbG9jaXR5XG5cbiAgICAgIGlmICghY29udGFpbmVyQW5pbWF0aW9uICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzY3JvbGwxIDwgcHJldlNjcm9sbCAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICBzZWxmLnNjcm9sbC5yZWMgPSAwO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICBsYXN0UmVmcmVzaCA9IF9nZXRUaW1lKCk7XG5cbiAgICAgIGlmIChzbmFwRGVsYXllZENhbGwpIHtcbiAgICAgICAgbGFzdFNuYXAgPSAtMTsgLy8ganVzdCBzbyBzbmFwcGluZyBnZXRzIHJlLWVuYWJsZWQsIGNsZWFyIG91dCBhbnkgcmVjb3JkZWQgbGFzdCB2YWx1ZVxuICAgICAgICAvLyBzZWxmLmlzQWN0aXZlICYmIHNjcm9sbEZ1bmMoc3RhcnQgKyBjaGFuZ2UgKiBwcmV2UHJvZ3Jlc3MpOyAvLyBwcmV2aW91c2x5IHRoaXMgbGluZSB3YXMgaGVyZSB0byBlbnN1cmUgdGhhdCB3aGVuIHNuYXBwaW5nIGtpY2tzIGluLCBpdCdzIGZyb20gdGhlIHByZXZpb3VzIHByb2dyZXNzIGJ1dCBpbiBzb21lIGNhc2VzIHRoYXQncyBub3QgZGVzaXJhYmxlLCBsaWtlIGFuIGFsbC1wYWdlIFNjcm9sbFRyaWdnZXIgd2hlbiBuZXcgY29udGVudCBnZXRzIGFkZGVkIHRvIHRoZSBwYWdlLCB0aGF0J2QgdG90YWxseSBjaGFuZ2UgdGhlIHByb2dyZXNzLlxuXG4gICAgICAgIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBfcmVmcmVzaGluZyA9IDA7XG4gICAgICBhbmltYXRpb24gJiYgaXNUb2dnbGUgJiYgKGFuaW1hdGlvbi5faW5pdHRlZCB8fCBwcmV2QW5pbVByb2dyZXNzKSAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKSAhPT0gcHJldkFuaW1Qcm9ncmVzcyAmJiBhbmltYXRpb24ucHJvZ3Jlc3MocHJldkFuaW1Qcm9ncmVzcyB8fCAwLCB0cnVlKS5yZW5kZXIoYW5pbWF0aW9uLnRpbWUoKSwgdHJ1ZSwgdHJ1ZSk7IC8vIG11c3QgZm9yY2UgYSByZS1yZW5kZXIgYmVjYXVzZSBpZiBzYXZlU3R5bGVzKCkgd2FzIHVzZWQgb24gdGhlIHRhcmdldChzKSwgdGhlIHN0eWxlcyBjb3VsZCBoYXZlIGJlZW4gd2lwZWQgb3V0IGR1cmluZyB0aGUgcmVmcmVzaCgpLlxuXG4gICAgICBpZiAoaXNGaXJzdFJlZnJlc2ggfHwgcHJldlByb2dyZXNzICE9PSBzZWxmLnByb2dyZXNzIHx8IGNvbnRhaW5lckFuaW1hdGlvbikge1xuICAgICAgICAvLyBlbnN1cmVzIHRoYXQgdGhlIGRpcmVjdGlvbiBpcyBzZXQgcHJvcGVybHkgKHdoZW4gcmVmcmVzaGluZywgcHJvZ3Jlc3MgaXMgc2V0IGJhY2sgdG8gMCBpbml0aWFsbHksIHRoZW4gYmFjayBhZ2FpbiB0byB3aGVyZXZlciBpdCBuZWVkcyB0byBiZSkgYW5kIHRoYXQgY2FsbGJhY2tzIGFyZSB0cmlnZ2VyZWQuXG4gICAgICAgIGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgJiYgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoY29udGFpbmVyQW5pbWF0aW9uICYmIHN0YXJ0IDwgLTAuMDAxICYmICFwcmV2UHJvZ3Jlc3MgPyBnc2FwLnV0aWxzLm5vcm1hbGl6ZShzdGFydCwgZW5kLCAwKSA6IHByZXZQcm9ncmVzcywgdHJ1ZSk7IC8vIHRvIGF2b2lkIGlzc3VlcyB3aGVyZSBhbmltYXRpb24gY2FsbGJhY2tzIGxpa2Ugb25TdGFydCBhcmVuJ3QgdHJpZ2dlcmVkLlxuXG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBpc0ZpcnN0UmVmcmVzaCB8fCAoc2Nyb2xsMSAtIHN0YXJ0KSAvIGNoYW5nZSA9PT0gcHJldlByb2dyZXNzID8gMCA6IHByZXZQcm9ncmVzcztcbiAgICAgIH1cblxuICAgICAgcGluICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5fcGluT2Zmc2V0ID0gTWF0aC5yb3VuZChzZWxmLnByb2dyZXNzICogcGluQ2hhbmdlKSk7XG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4uaW52YWxpZGF0ZSgpO1xuXG4gICAgICBpZiAoIWlzTmFOKG1hcmtlclN0YXJ0T2Zmc2V0KSkge1xuICAgICAgICAvLyBudW1iZXJzIHdlcmUgcGFzc2VkIGluIGZvciB0aGUgcG9zaXRpb24gd2hpY2ggYXJlIGFic29sdXRlLCBzbyBpbnN0ZWFkIG9mIGp1c3QgcHV0dGluZyB0aGUgbWFya2VycyBhdCB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LCB3ZSBmaWd1cmUgb3V0IGhvdyBmYXIgdGhleSBzaGlmdGVkIGRvd24gKGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhleSB3ZXJlIG9yaWdpbmFsbHkgcG9zaXRpb25lZCBpbiBjbG9zZXIgcmVsYXRpb24gdG8gdGhlIHRyaWdnZXIgZWxlbWVudCB3aXRoIHZhbHVlcyBsaWtlIFwidG9wXCIsIFwiY2VudGVyXCIsIGEgcGVyY2VudGFnZSBvciB3aGF0ZXZlciwgc28gd2Ugb2Zmc2V0IHRoYXQgbXVjaCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIHRvIGJhc2ljYWxseSByZXZlcnQgdGhlbSB0byB0aGUgcmVsYXRpdmUgcG9zaXRpb24gdGh5IHdlcmUgYXQgcHJldmlvdXNseS5cbiAgICAgICAgbWFya2VyU3RhcnRPZmZzZXQgLT0gZ3NhcC5nZXRQcm9wZXJ0eShtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbi5wKTtcbiAgICAgICAgbWFya2VyRW5kT2Zmc2V0IC09IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbiwgbWFya2VyU3RhcnRPZmZzZXQpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydCwgZGlyZWN0aW9uLCBtYXJrZXJTdGFydE9mZnNldCAtIChwaW5PZmZzZXQgfHwgMCkpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24sIG1hcmtlckVuZE9mZnNldCk7XG5cbiAgICAgICAgX3NoaWZ0TWFya2VyKG1hcmtlckVuZCwgZGlyZWN0aW9uLCBtYXJrZXJFbmRPZmZzZXQgLSAocGluT2Zmc2V0IHx8IDApKTtcbiAgICAgIH1cblxuICAgICAgaXNGaXJzdFJlZnJlc2ggJiYgIV9yZWZyZXNoaW5nQWxsICYmIHNlbGYudXBkYXRlKCk7IC8vIGVkZ2UgY2FzZSAtIHdoZW4geW91IHJlbG9hZCBhIHBhZ2Ugd2hlbiBpdCdzIGFscmVhZHkgc2Nyb2xsZWQgZG93biwgc29tZSBicm93c2VycyBmaXJlIGEgXCJzY3JvbGxcIiBldmVudCBiZWZvcmUgRE9NQ29udGVudExvYWRlZCwgdHJpZ2dlcmluZyBhbiB1cGRhdGVBbGwoKS4gSWYgd2UgZG9uJ3QgdXBkYXRlIHRoZSBzZWxmLnByb2dyZXNzIGFzIHBhcnQgb2YgcmVmcmVzaCgpLCB0aGVuIHdoZW4gaXQgaGFwcGVucyBuZXh0LCBpdCBtYXkgcmVjb3JkIHByZXZQcm9ncmVzcyBhcyAwIHdoZW4gaXQgcmVhbGx5IHNob3VsZG4ndCwgcG90ZW50aWFsbHkgY2F1c2luZyBhIGNhbGxiYWNrIGluIGFuIGFuaW1hdGlvbiB0byBmaXJlIGFnYWluLlxuXG4gICAgICBpZiAob25SZWZyZXNoICYmICFfcmVmcmVzaGluZ0FsbCAmJiAhZXhlY3V0aW5nT25SZWZyZXNoKSB7XG4gICAgICAgIC8vIHdoZW4gcmVmcmVzaGluZyBhbGwsIHdlIGRvIGV4dHJhIHdvcmsgdG8gY29ycmVjdCBwaW5uZWRDb250YWluZXIgc2l6ZXMgYW5kIGVuc3VyZSB0aGluZ3MgZG9uJ3QgZXhjZWVkIHRoZSBtYXhTY3JvbGwsIHNvIHdlIHNob3VsZCBkbyBhbGwgdGhlIHJlZnJlc2hlcyBhdCB0aGUgZW5kIGFmdGVyIGFsbCB0aGF0IHdvcmsgc28gdGhhdCB0aGUgc3RhcnQvZW5kIHZhbHVlcyBhcmUgY29ycmVjdGVkLlxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2ggPSB0cnVlO1xuICAgICAgICBvblJlZnJlc2goc2VsZik7XG4gICAgICAgIGV4ZWN1dGluZ09uUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChzY3JvbGxGdW5jKCkgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIDEwMDAgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5lbmRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHNjcnViVHdlZW4gPyBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpIDogIWFuaW1hdGlvbi5wYXVzZWQoKSA/IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24ucmV2ZXJzZWQoKSkgOiBpc1RvZ2dsZSB8fCBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgc2VsZi5kaXJlY3Rpb24gPCAwLCAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5sYWJlbFRvU2Nyb2xsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICByZXR1cm4gYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5sYWJlbHMgJiYgKHN0YXJ0IHx8IHNlbGYucmVmcmVzaCgpIHx8IHN0YXJ0KSArIGFuaW1hdGlvbi5sYWJlbHNbbGFiZWxdIC8gYW5pbWF0aW9uLmR1cmF0aW9uKCkgKiBjaGFuZ2UgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUcmFpbGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpLFxuICAgICAgICAgIGEgPSBzZWxmLmRpcmVjdGlvbiA+IDAgPyBfdHJpZ2dlcnMuc2xpY2UoMCwgaSkucmV2ZXJzZSgpIDogX3RyaWdnZXJzLnNsaWNlKGkgKyAxKTtcblxuICAgICAgcmV0dXJuIChfaXNTdHJpbmcobmFtZSkgPyBhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC52YXJzLnByZXZlbnRPdmVybGFwcyA9PT0gbmFtZTtcbiAgICAgIH0pIDogYSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBzZWxmLmRpcmVjdGlvbiA+IDAgPyB0LmVuZCA8PSBzdGFydCA6IHQuc3RhcnQgPj0gZW5kO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYudXBkYXRlID0gZnVuY3Rpb24gKHJlc2V0LCByZWNvcmRWZWxvY2l0eSwgZm9yY2VGYWtlKSB7XG4gICAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmICFmb3JjZUZha2UgJiYgIXJlc2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjcm9sbCA9IF9yZWZyZXNoaW5nQWxsID09PSB0cnVlID8gcHJldlNjcm9sbCA6IHNlbGYuc2Nyb2xsKCksXG4gICAgICAgICAgcCA9IHJlc2V0ID8gMCA6IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG4gICAgICAgICAgY2xpcHBlZCA9IHAgPCAwID8gMCA6IHAgPiAxID8gMSA6IHAgfHwgMCxcbiAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzLFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgIHdhc0FjdGl2ZSxcbiAgICAgICAgICB0b2dnbGVTdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgc3RhdGVDaGFuZ2VkLFxuICAgICAgICAgIHRvZ2dsZWQsXG4gICAgICAgICAgaXNBdE1heCxcbiAgICAgICAgICBpc1Rha2luZ0FjdGlvbjtcblxuICAgICAgaWYgKHJlY29yZFZlbG9jaXR5KSB7XG4gICAgICAgIHNjcm9sbDIgPSBzY3JvbGwxO1xuICAgICAgICBzY3JvbGwxID0gY29udGFpbmVyQW5pbWF0aW9uID8gc2Nyb2xsRnVuYygpIDogc2Nyb2xsO1xuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgc25hcDIgPSBzbmFwMTtcbiAgICAgICAgICBzbmFwMSA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogY2xpcHBlZDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBhbnRpY2lwYXRlIHRoZSBwaW5uaW5nIGEgZmV3IHRpY2tzIGFoZWFkIG9mIHRpbWUgYmFzZWQgb24gdmVsb2NpdHkgdG8gYXZvaWQgYSB2aXN1YWwgZ2xpdGNoIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG1vc3QgYnJvd3NlcnMgZG8gc2Nyb2xsaW5nIG9uIGEgc2VwYXJhdGUgdGhyZWFkIChub3Qgc3luY2VkIHdpdGggcmVxdWVzdEFuaW1hdGlvbkZyYW1lKS5cblxuXG4gICAgICBhbnRpY2lwYXRlUGluICYmICFjbGlwcGVkICYmIHBpbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIF9sYXN0U2Nyb2xsVGltZSAmJiBzdGFydCA8IHNjcm9sbCArIChzY3JvbGwgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIGFudGljaXBhdGVQaW4gJiYgKGNsaXBwZWQgPSAwLjAwMDEpO1xuXG4gICAgICBpZiAoY2xpcHBlZCAhPT0gcHJldlByb2dyZXNzICYmIHNlbGYuZW5hYmxlZCkge1xuICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuaXNBY3RpdmUgPSAhIWNsaXBwZWQgJiYgY2xpcHBlZCA8IDE7XG4gICAgICAgIHdhc0FjdGl2ZSA9ICEhcHJldlByb2dyZXNzICYmIHByZXZQcm9ncmVzcyA8IDE7XG4gICAgICAgIHRvZ2dsZWQgPSBpc0FjdGl2ZSAhPT0gd2FzQWN0aXZlO1xuICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0b2dnbGVkIHx8ICEhY2xpcHBlZCAhPT0gISFwcmV2UHJvZ3Jlc3M7IC8vIGNvdWxkIGdvIGZyb20gc3RhcnQgYWxsIHRoZSB3YXkgdG8gZW5kLCB0aHVzIGl0IGRpZG4ndCB0b2dnbGUgYnV0IGl0IGRpZCBjaGFuZ2Ugc3RhdGUgaW4gYSBzZW5zZSAobWF5IG5lZWQgdG8gZmlyZSBhIGNhbGxiYWNrKVxuXG4gICAgICAgIHNlbGYuZGlyZWN0aW9uID0gY2xpcHBlZCA+IHByZXZQcm9ncmVzcyA/IDEgOiAtMTtcbiAgICAgICAgc2VsZi5wcm9ncmVzcyA9IGNsaXBwZWQ7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgJiYgIXByZXZQcm9ncmVzcyA/IDAgOiBjbGlwcGVkID09PSAxID8gMSA6IHByZXZQcm9ncmVzcyA9PT0gMSA/IDIgOiAzOyAvLyAwID0gZW50ZXIsIDEgPSBsZWF2ZSwgMiA9IGVudGVyQmFjaywgMyA9IGxlYXZlQmFjayAod2UgcHJpb3JpdGl6ZSB0aGUgRklSU1QgZW5jb3VudGVyLCB0aHVzIGlmIHlvdSBzY3JvbGwgcmVhbGx5IGZhc3QgcGFzdCB0aGUgb25FbnRlciBhbmQgb25MZWF2ZSBpbiBvbmUgdGljaywgaXQnZCBwcmlvcml0aXplIG9uRW50ZXIuXG5cbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICF0b2dnbGVkICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSAhPT0gXCJub25lXCIgJiYgdG9nZ2xlQWN0aW9uc1t0b2dnbGVTdGF0ZSArIDFdIHx8IHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGVdOyAvLyBpZiBpdCBkaWRuJ3QgdG9nZ2xlLCB0aGF0IG1lYW5zIGl0IHNob3QgcmlnaHQgcGFzdCBhbmQgc2luY2Ugd2UgcHJpb3JpdGl6ZSB0aGUgXCJlbnRlclwiIGFjdGlvbiwgd2Ugc2hvdWxkIHN3aXRjaCB0byB0aGUgXCJsZWF2ZVwiIGluIHRoaXMgY2FzZSAoYnV0IG9ubHkgaWYgb25lIGlzIGRlZmluZWQpXG5cbiAgICAgICAgICAgIGlzVGFraW5nQWN0aW9uID0gYW5pbWF0aW9uICYmIChhY3Rpb24gPT09IFwiY29tcGxldGVcIiB8fCBhY3Rpb24gPT09IFwicmVzZXRcIiB8fCBhY3Rpb24gaW4gYW5pbWF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgJiYgKHRvZ2dsZWQgfHwgaXNUYWtpbmdBY3Rpb24pICYmIChpc1Rha2luZ0FjdGlvbiB8fCBzY3J1YiB8fCAhYW5pbWF0aW9uKSAmJiAoX2lzRnVuY3Rpb24ocHJldmVudE92ZXJsYXBzKSA/IHByZXZlbnRPdmVybGFwcyhzZWxmKSA6IHNlbGYuZ2V0VHJhaWxpbmcocHJldmVudE92ZXJsYXBzKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuZW5kQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoIWlzVG9nZ2xlKSB7XG4gICAgICAgICAgaWYgKHNjcnViVHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCkge1xuICAgICAgICAgICAgc2NydWJUd2Vlbi5fZHAuX3RpbWUgLSBzY3J1YlR3ZWVuLl9zdGFydCAhPT0gc2NydWJUd2Vlbi5fdGltZSAmJiBzY3J1YlR3ZWVuLnJlbmRlcihzY3J1YlR3ZWVuLl9kcC5fdGltZSAtIHNjcnViVHdlZW4uX3N0YXJ0KTsgLy8gaWYgdGhlcmUncyBhIHNjcnViIG9uIGJvdGggdGhlIGNvbnRhaW5lciBhbmltYXRpb24gYW5kIHRoaXMgb25lIChvciBhIFNjcm9sbFNtb290aGVyKSwgdGhlIHVwZGF0ZSBvcmRlciB3b3VsZCBjYXVzZSB0aGlzIG9uZSBub3QgdG8gaGF2ZSByZW5kZXJlZCB5ZXQsIHNvIGl0IHdvdWxkbid0IG1ha2UgYW55IHByb2dyZXNzIGJlZm9yZSB3ZSAucmVzdGFydCgpIGl0IGhlYWRpbmcgdG93YXJkIHRoZSBuZXcgcHJvZ3Jlc3Mgc28gaXQnZCBhcHBlYXIgc3R1Y2sgdGh1cyB3ZSBmb3JjZSBhIHJlbmRlciBoZXJlLlxuXG4gICAgICAgICAgICBpZiAoc2NydWJUd2Vlbi5yZXNldFRvKSB7XG4gICAgICAgICAgICAgIHNjcnViVHdlZW4ucmVzZXRUbyhcInRvdGFsUHJvZ3Jlc3NcIiwgY2xpcHBlZCwgYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBsZWdhY3kgc3VwcG9ydCAoY291cnRlc3kpLCBiZWZvcmUgMy4xMC4wXG4gICAgICAgICAgICAgIHNjcnViVHdlZW4udmFycy50b3RhbFByb2dyZXNzID0gY2xpcHBlZDtcbiAgICAgICAgICAgICAgc2NydWJUd2Vlbi5pbnZhbGlkYXRlKCkucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb24udG90YWxQcm9ncmVzcyhjbGlwcGVkLCAhIShfcmVmcmVzaGluZyAmJiAobGFzdFJlZnJlc2ggfHwgcmVzZXQpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBpbikge1xuICAgICAgICAgIHJlc2V0ICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5zdHlsZVtwaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMl0gPSBzcGFjaW5nU3RhcnQpO1xuXG4gICAgICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBwaW5TZXR0ZXIoX3JvdW5kKHBpblN0YXJ0ICsgcGluQ2hhbmdlICogY2xpcHBlZCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICBpc0F0TWF4ID0gIXJlc2V0ICYmIGNsaXBwZWQgPiBwcmV2UHJvZ3Jlc3MgJiYgZW5kICsgMSA+IHNjcm9sbCAmJiBzY3JvbGwgKyAxID49IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbik7IC8vIGlmIGl0J3MgYXQgdGhlIFZFUlkgZW5kIG9mIHRoZSBwYWdlLCBkb24ndCBzd2l0Y2ggYXdheSBmcm9tIHBvc2l0aW9uOiBmaXhlZCBiZWNhdXNlIGl0J3MgcG9pbnRsZXNzIGFuZCBpdCBjb3VsZCBjYXVzZSBhIGJyaWVmIGZsYXNoIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHVwICh3aGVuIGl0IGdldHMgcGlubmVkIGFnYWluKVxuXG4gICAgICAgICAgICBpZiAocGluUmVwYXJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCFyZXNldCAmJiAoaXNBY3RpdmUgfHwgaXNBdE1heCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gc2Nyb2xsIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBfcmVwYXJlbnQocGluLCBfYm9keSwgYm91bmRzLnRvcCArIChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9vZmZzZXQgOiAwKSArIF9weCwgYm91bmRzLmxlZnQgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyAwIDogX29mZnNldCkgKyBfcHgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXBhcmVudChwaW4sIHNwYWNlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NldFN0YXRlKGlzQWN0aXZlIHx8IGlzQXRNYXggPyBwaW5BY3RpdmVTdGF0ZSA6IHBpblN0YXRlKTtcblxuICAgICAgICAgICAgcGluTW92ZXMgJiYgY2xpcHBlZCA8IDEgJiYgaXNBY3RpdmUgfHwgcGluU2V0dGVyKHBpblN0YXJ0ICsgKGNsaXBwZWQgPT09IDEgJiYgIWlzQXRNYXggPyBwaW5DaGFuZ2UgOiAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc25hcCAmJiAhdHdlZW5Uby50d2VlbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyAmJiAodG9nZ2xlZCB8fCBvbmNlICYmIGNsaXBwZWQgJiYgKGNsaXBwZWQgPCAxIHx8ICFfbGltaXRDYWxsYmFja3MpKSAmJiBfdG9BcnJheSh0b2dnbGVDbGFzcy50YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3RbaXNBY3RpdmUgfHwgb25jZSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSh0b2dnbGVDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICB9KTsgLy8gY2xhc3NlcyBjb3VsZCBhZmZlY3QgcG9zaXRpb25pbmcsIHNvIGRvIGl0IGV2ZW4gaWYgcmVzZXQgb3IgcmVmcmVzaGluZyBpcyB0cnVlLlxuXG4gICAgICAgIG9uVXBkYXRlICYmICFpc1RvZ2dsZSAmJiAhcmVzZXQgJiYgb25VcGRhdGUoc2VsZik7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGlmIChpc1Rha2luZ0FjdGlvbikge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSkucGF1c2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uW2FjdGlvbl0oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvblVwZGF0ZSAmJiBvblVwZGF0ZShzZWxmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9nZ2xlZCB8fCAhX2xpbWl0Q2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBvbiBzdGFydHVwLCB0aGUgcGFnZSBjb3VsZCBiZSBzY3JvbGxlZCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGNhbGxiYWNrcyB0aGF0IGRpZG4ndCB0b2dnbGUuIEZvciBleGFtcGxlIG9uRW50ZXIgc2hvdWxkbid0IGZpcmUgaWYgdGhlIFNjcm9sbFRyaWdnZXIgaXNuJ3QgYWN0dWFsbHkgZW50ZXJlZC5cbiAgICAgICAgICAgIG9uVG9nZ2xlICYmIHRvZ2dsZWQgJiYgX2NhbGxiYWNrKHNlbGYsIG9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgX2NhbGxiYWNrKHNlbGYsIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0pO1xuICAgICAgICAgICAgb25jZSAmJiAoY2xpcHBlZCA9PT0gMSA/IHNlbGYua2lsbChmYWxzZSwgMSkgOiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdID0gMCk7IC8vIGEgY2FsbGJhY2sgc2hvdWxkbid0IGJlIGNhbGxlZCBhZ2FpbiBpZiBvbmNlIGlzIHRydWUuXG5cbiAgICAgICAgICAgIGlmICghdG9nZ2xlZCkge1xuICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRvIGdvIGNvbXBsZXRlbHkgcGFzdCwgbGlrZSBmcm9tIGJlZm9yZSB0aGUgc3RhcnQgdG8gYWZ0ZXIgdGhlIGVuZCAob3IgdmljZS12ZXJzYSkgaW4gd2hpY2ggY2FzZSBCT1RIIGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWQgaW4gdGhhdCBvcmRlclxuICAgICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgPT09IDEgPyAxIDogMztcbiAgICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBfY2FsbGJhY2soc2VsZiwgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZhc3RTY3JvbGxFbmQgJiYgIWlzQWN0aXZlICYmIE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPiAoX2lzTnVtYmVyKGZhc3RTY3JvbGxFbmQpID8gZmFzdFNjcm9sbEVuZCA6IDI1MDApKSB7XG4gICAgICAgICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5wcm9ncmVzcygxKSA6IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhY3Rpb24gPT09IFwicmV2ZXJzZVwiID8gMSA6ICFjbGlwcGVkLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUb2dnbGUgJiYgb25VcGRhdGUgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgb25VcGRhdGUoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gdXBkYXRlIGFic29sdXRlbHktcG9zaXRpb25lZCBtYXJrZXJzIChvbmx5IGlmIHRoZSBzY3JvbGxlciBpc24ndCB0aGUgdmlld3BvcnQpXG5cblxuICAgICAgaWYgKG1hcmtlckVuZFNldHRlcikge1xuICAgICAgICB2YXIgbiA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IHNjcm9sbCAvIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpICogKGNvbnRhaW5lckFuaW1hdGlvbi5fY2FTY3JvbGxEaXN0IHx8IDApIDogc2Nyb2xsO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlcihuICsgKG1hcmtlclN0YXJ0VHJpZ2dlci5faXNGbGlwcGVkID8gMSA6IDApKTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyKG4pO1xuICAgICAgfVxuXG4gICAgICBjYU1hcmtlclNldHRlciAmJiBjYU1hcmtlclNldHRlcigtc2Nyb2xsIC8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgKiAoY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgfHwgMCkpO1xuICAgIH07XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgcmVmcmVzaCkge1xuICAgICAgaWYgKCFzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgc2VsZi5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwicmVzaXplXCIsIF9vblJlc2l6ZSk7XG5cbiAgICAgICAgaXNWaWV3cG9ydCB8fCBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cbiAgICAgICAgaWYgKHJlc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBwcmV2UHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgIHNjcm9sbDEgPSBzY3JvbGwyID0gbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoICE9PSBmYWxzZSAmJiBzZWxmLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUd2VlbiA9IGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICByZXR1cm4gc25hcCAmJiB0d2VlblRvID8gdHdlZW5Uby50d2VlbiA6IHNjcnViVHdlZW47XG4gICAgfTtcblxuICAgIHNlbGYuc2V0UG9zaXRpb25zID0gZnVuY3Rpb24gKG5ld1N0YXJ0LCBuZXdFbmQsIGtlZXBDbGFtcCwgcGluT2Zmc2V0KSB7XG4gICAgICAvLyBkb2Vzbid0IHBlcnNpc3QgYWZ0ZXIgcmVmcmVzaCgpISBJbnRlbmRlZCB0byBiZSBhIHdheSB0byBvdmVycmlkZSB2YWx1ZXMgdGhhdCB3ZXJlIHNldCBkdXJpbmcgcmVmcmVzaCgpLCBsaWtlIHlvdSBjb3VsZCBzZXQgaXQgaW4gb25SZWZyZXNoKClcbiAgICAgIGlmIChjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gY29udmVydCByYXRpb3MgaW50byBzY3JvbGwgcG9zaXRpb25zLiBSZW1lbWJlciwgc3RhcnQvZW5kIHZhbHVlcyBvbiBTY3JvbGxUcmlnZ2VycyB0aGF0IGhhdmUgYSBjb250YWluZXJBbmltYXRpb24gcmVmZXIgdG8gdGhlIHRpbWUgKGluIHNlY29uZHMpLCBOT1Qgc2Nyb2xsIHBvc2l0aW9ucy5cbiAgICAgICAgdmFyIHN0ID0gY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgICAgICBkdXJhdGlvbiA9IGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLFxuICAgICAgICAgICAgX2NoYW5nZSA9IHN0LmVuZCAtIHN0LnN0YXJ0O1xuXG4gICAgICAgIG5ld1N0YXJ0ID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3U3RhcnQgLyBkdXJhdGlvbjtcbiAgICAgICAgbmV3RW5kID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3RW5kIC8gZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYucmVmcmVzaChmYWxzZSwgZmFsc2UsIHtcbiAgICAgICAgc3RhcnQ6IF9rZWVwQ2xhbXAobmV3U3RhcnQsIGtlZXBDbGFtcCAmJiAhIXNlbGYuX3N0YXJ0Q2xhbXApLFxuICAgICAgICBlbmQ6IF9rZWVwQ2xhbXAobmV3RW5kLCBrZWVwQ2xhbXAgJiYgISFzZWxmLl9lbmRDbGFtcClcbiAgICAgIH0sIHBpbk9mZnNldCk7XG4gICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBzZWxmLmFkanVzdFBpblNwYWNpbmcgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICBpZiAoc3BhY2VyU3RhdGUgJiYgYW1vdW50KSB7XG4gICAgICAgIHZhciBpID0gc3BhY2VyU3RhdGUuaW5kZXhPZihkaXJlY3Rpb24uZCkgKyAxO1xuICAgICAgICBzcGFjZXJTdGF0ZVtpXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbaV0pICsgYW1vdW50ICsgX3B4O1xuICAgICAgICBzcGFjZXJTdGF0ZVsxXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbMV0pICsgYW1vdW50ICsgX3B4O1xuXG4gICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIGlmIChzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgcmVzZXQgIT09IGZhbHNlICYmIHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICBzZWxmLmVuYWJsZWQgPSBzZWxmLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGFsbG93QW5pbWF0aW9uIHx8IHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5wYXVzZSgpO1xuICAgICAgICBwcmV2U2Nyb2xsID0gMDtcbiAgICAgICAgcGluQ2FjaGUgJiYgKHBpbkNhY2hlLnVuY2FjaGUgPSAxKTtcbiAgICAgICAgb25SZWZyZXNoSW5pdCAmJiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoSW5pdFwiLCBvblJlZnJlc2hJbml0KTtcblxuICAgICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICAgICAgdHdlZW5Uby50d2VlbiAmJiB0d2VlblRvLnR3ZWVuLmtpbGwoKSAmJiAodHdlZW5Uby50d2VlbiA9IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKF90cmlnZ2Vyc1tpXS5zY3JvbGxlciA9PT0gc2Nyb2xsZXIgJiYgX3RyaWdnZXJzW2ldICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAgIHJldHVybjsgLy9kb24ndCByZW1vdmUgdGhlIGxpc3RlbmVycyBpZiB0aGVyZSBhcmUgc3RpbGwgb3RoZXIgdHJpZ2dlcnMgcmVmZXJlbmNpbmcgaXQuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG4gICAgICAgICAgaXNWaWV3cG9ydCB8fCBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5raWxsID0gZnVuY3Rpb24gKHJldmVydCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIHNlbGYuZGlzYWJsZShyZXZlcnQsIGFsbG93QW5pbWF0aW9uKTtcbiAgICAgIHNjcnViVHdlZW4gJiYgIWFsbG93QW5pbWF0aW9uICYmIHNjcnViVHdlZW4ua2lsbCgpO1xuICAgICAgaWQgJiYgZGVsZXRlIF9pZHNbaWRdO1xuXG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX3RyaWdnZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGkgPT09IF9pICYmIF9kaXJlY3Rpb24gPiAwICYmIF9pLS07IC8vIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSByZWZyZXNoKCkgb3IgdXBkYXRlKCksIHNwbGljaW5nIHdvdWxkIGNhdXNlIHNraXBzIGluIHRoZSBpbmRleCwgc28gYWRqdXN0Li4uXG4gICAgICAvLyBpZiBubyBvdGhlciBTY3JvbGxUcmlnZ2VyIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBzY3JvbGxlciBhcmUgZm91bmQsIHdpcGUgb3V0IGFueSByZWNvcmRlZCBzY3JvbGwgcG9zaXRpb24uIE90aGVyd2lzZSwgaW4gYSBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbiwgZm9yIGV4YW1wbGUsIGl0IGNvdWxkIG1haW50YWluIHNjcm9sbCBwb3NpdGlvbiB3aGVuIGl0IHJlYWxseSBzaG91bGRuJ3QuXG5cbiAgICAgIGkgPSAwO1xuXG4gICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5zY3JvbGxlciA9PT0gc2VsZi5zY3JvbGxlciAmJiAoaSA9IDEpO1xuICAgICAgfSk7XG5cbiAgICAgIGkgfHwgX3JlZnJlc2hpbmdBbGwgfHwgKHNlbGYuc2Nyb2xsLnJlYyA9IDApO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyID0gbnVsbDtcbiAgICAgICAgcmV2ZXJ0ICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICAgIGtpbGw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBhbmltYXRpb24ua2lsbCgpO1xuICAgICAgfVxuXG4gICAgICBtYXJrZXJTdGFydCAmJiBbbWFya2VyU3RhcnQsIG1hcmtlckVuZCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnBhcmVudE5vZGUgJiYgbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pO1xuICAgICAgfSk7XG4gICAgICBfcHJpbWFyeSA9PT0gc2VsZiAmJiAoX3ByaW1hcnkgPSAwKTtcblxuICAgICAgaWYgKHBpbikge1xuICAgICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuICAgICAgICBpID0gMDtcblxuICAgICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LnBpbiA9PT0gcGluICYmIGkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaSB8fCAocGluQ2FjaGUuc3BhY2VyID0gMCk7IC8vIGlmIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBTY3JvbGxUcmlnZ2VycyB3aXRoIHRoZSBzYW1lIHBpbiwgcmVtb3ZlIHRoZSBzcGFjZXIsIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBjb250YW1pbmF0ZWQgd2l0aCBvbGQvc3RhbGUgdmFsdWVzIGlmIHRoZSB1c2VyIHJlLWNyZWF0ZXMgYSBTY3JvbGxUcmlnZ2VyIGZvciB0aGUgc2FtZSBlbGVtZW50LlxuICAgICAgfVxuXG4gICAgICB2YXJzLm9uS2lsbCAmJiB2YXJzLm9uS2lsbChzZWxmKTtcbiAgICB9O1xuXG4gICAgX3RyaWdnZXJzLnB1c2goc2VsZik7XG5cbiAgICBzZWxmLmVuYWJsZShmYWxzZSwgZmFsc2UpO1xuICAgIGN1c3RvbVJldmVydFJldHVybiAmJiBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZik7XG5cbiAgICBpZiAoYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5hZGQgJiYgIWNoYW5nZSkge1xuICAgICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBpcyBhIHRpbWVsaW5lLCBpdCBtYXkgbm90IGhhdmUgYmVlbiBwb3B1bGF0ZWQgeWV0LCBzbyBpdCB3b3VsZG4ndCByZW5kZXIgYXQgdGhlIHByb3BlciBwbGFjZSBvbiB0aGUgZmlyc3QgcmVmcmVzaCgpLCB0aHVzIHdlIHNob3VsZCBzY2hlZHVsZSBvbmUgZm9yIHRoZSBuZXh0IHRpY2suIElmIFwiY2hhbmdlXCIgaXMgZGVmaW5lZCwgd2Uga25vdyBpdCBtdXN0IGJlIHJlLWVuYWJsaW5nLCB0aHVzIHdlIGNhbiByZWZyZXNoKCkgcmlnaHQgYXdheS5cbiAgICAgIHZhciB1cGRhdGVGdW5jID0gc2VsZi51cGRhdGU7IC8vIHNvbWUgYnJvd3NlcnMgbWF5IGZpcmUgYSBzY3JvbGwgZXZlbnQgQkVGT1JFIGEgdGljayBlbGFwc2VzIGFuZC9vciB0aGUgRE9NQ29udGVudExvYWRlZCBmaXJlcy4gU28gdGhlcmUncyBhIGNoYW5jZSB1cGRhdGUoKSB3aWxsIGJlIGNhbGxlZCBCRUZPUkUgYSByZWZyZXNoKCkgaGFzIGhhcHBlbmVkIG9uIGEgVGltZWxpbmUtYXR0YWNoZWQgU2Nyb2xsVHJpZ2dlciB3aGljaCBtZWFucyB0aGUgc3RhcnQvZW5kIHdvbid0IGJlIGNhbGN1bGF0ZWQgeWV0LiBXZSBkb24ndCB3YW50IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlIHVwZGF0ZSgpIG1ldGhvZCAobGlrZSBjaGVjayB0byBzZWUgaWYgZW5kIGlzIGRlZmluZWQgYW5kIGlmIG5vdCwgZm9yY2UgYSByZWZyZXNoKCkpIGJlY2F1c2UgdGhhdCdzIGEgZnVuY3Rpb24gdGhhdCBnZXRzIGhpdCBhIExPVCAocGVyZm9ybWFuY2UpLiBTbyB3ZSBzd2FwIG91dCB0aGUgcmVhbCB1cGRhdGUoKSBtZXRob2QgZm9yIHRoaXMgb25lIHRoYXQnbGwgcmUtYXR0YWNoIGl0IHRoZSBmaXJzdCB0aW1lIGl0IGdldHMgY2FsbGVkIGFuZCBvZiBjb3Vyc2UgZm9yY2VzIGEgcmVmcmVzaCgpLlxuXG4gICAgICBzZWxmLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi51cGRhdGUgPSB1cGRhdGVGdW5jO1xuICAgICAgICBzdGFydCB8fCBlbmQgfHwgc2VsZi5yZWZyZXNoKCk7XG4gICAgICB9O1xuXG4gICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuMDEsIHNlbGYudXBkYXRlKTtcbiAgICAgIGNoYW5nZSA9IDAuMDE7XG4gICAgICBzdGFydCA9IGVuZCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHBpbiAmJiBfcXVldWVSZWZyZXNoQWxsKCk7IC8vIHBpbm5pbmcgY291bGQgYWZmZWN0IHRoZSBwb3NpdGlvbnMgb2Ygb3RoZXIgdGhpbmdzLCBzbyBtYWtlIHN1cmUgd2UgcXVldWUgYSBmdWxsIHJlZnJlc2goKVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3Rlcihjb3JlKSB7XG4gICAgaWYgKCFfY29yZUluaXR0ZWQpIHtcbiAgICAgIGdzYXAgPSBjb3JlIHx8IF9nZXRHU0FQKCk7XG4gICAgICBfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50ICYmIFNjcm9sbFRyaWdnZXIuZW5hYmxlKCk7XG4gICAgICBfY29yZUluaXR0ZWQgPSBfZW5hYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvcmVJbml0dGVkO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMgPSBmdW5jdGlvbiBkZWZhdWx0cyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBwIGluIGNvbmZpZykge1xuICAgICAgICBfZGVmYXVsdHNbcF0gPSBjb25maWdbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKHJlc2V0LCBraWxsKSB7XG4gICAgX2VuYWJsZWQgPSAwO1xuXG4gICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyW2tpbGwgPyBcImtpbGxcIiA6IFwiZGlzYWJsZVwiXShyZXNldCk7XG4gICAgfSk7XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoX3dpbiwgXCJ3aGVlbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICBjbGVhckludGVydmFsKF9zeW5jSW50ZXJ2YWwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfYm9keSwgXCJ0b3VjaHN0YXJ0XCIsIF9wYXNzVGhyb3VnaCk7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIiwgX3BvaW50ZXJEb3duSGFuZGxlcik7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIiwgX3BvaW50ZXJVcEhhbmRsZXIpO1xuXG4gICAgX3Jlc2l6ZURlbGF5LmtpbGwoKTtcblxuICAgIF9pdGVyYXRlQXV0b1JlZnJlc2goX3JlbW92ZUxpc3RlbmVyKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAxXSk7XG5cbiAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMl0pO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBkb2N1bWVudDtcbiAgICBfZG9jRWwgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfYm9keSA9IF9kb2MuYm9keTtcblxuICAgIGlmIChnc2FwKSB7XG4gICAgICBfdG9BcnJheSA9IGdzYXAudXRpbHMudG9BcnJheTtcbiAgICAgIF9jbGFtcCA9IGdzYXAudXRpbHMuY2xhbXA7XG4gICAgICBfY29udGV4dCA9IGdzYXAuY29yZS5jb250ZXh0IHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMgPSBnc2FwLmNvcmUuc3VwcHJlc3NPdmVyd3JpdGVzIHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zY3JvbGxSZXN0b3JhdGlvbiA9IF93aW4uaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiB8fCBcImF1dG9cIjtcbiAgICAgIF9sYXN0U2Nyb2xsID0gX3dpbi5wYWdlWU9mZnNldDtcbiAgICAgIGdzYXAuY29yZS5nbG9iYWxzKFwiU2Nyb2xsVHJpZ2dlclwiLCBTY3JvbGxUcmlnZ2VyKTsgLy8gbXVzdCByZWdpc3RlciB0aGUgZ2xvYmFsIG1hbnVhbGx5IGJlY2F1c2UgaW4gSW50ZXJuZXQgRXhwbG9yZXIsIGZ1bmN0aW9ucyAoY2xhc3NlcykgZG9uJ3QgaGF2ZSBhIFwibmFtZVwiIHByb3BlcnR5LlxuXG4gICAgICBpZiAoX2JvZHkpIHtcbiAgICAgICAgX2VuYWJsZWQgPSAxO1xuICAgICAgICBfZGl2MTAwdmggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyB0byBzb2x2ZSBtb2JpbGUgYnJvd3NlciBhZGRyZXNzIGJhciBzaG93L2hpZGUgcmVzaXppbmcsIHdlIHNob3VsZG4ndCByZWx5IG9uIHdpbmRvdy5pbm5lckhlaWdodC4gSW5zdGVhZCwgdXNlIGEgPGRpdj4gd2l0aCBpdHMgaGVpZ2h0IHNldCB0byAxMDB2aCBhbmQgbWVhc3VyZSB0aGF0IHNpbmNlIHRoYXQncyB3aGF0IHRoZSBzY3JvbGxpbmcgaXMgYmFzZWQgb24gYW55d2F5IGFuZCBpdCdzIG5vdCBhZmZlY3RlZCBieSBhZGRyZXNzIGJhciBzaG93aW5nL2hpZGluZy5cblxuICAgICAgICBfZGl2MTAwdmguc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgICAgICBfZGl2MTAwdmguc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICAgICAgX3JlZnJlc2gxMDB2aCgpO1xuXG4gICAgICAgIF9yYWZCdWdGaXgoKTtcblxuICAgICAgICBPYnNlcnZlci5yZWdpc3Rlcihnc2FwKTsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoID0gT2JzZXJ2ZXIuaXNUb3VjaDtcbiAgICAgICAgX2ZpeElPU0J1ZyA9IE9ic2VydmVyLmlzVG91Y2ggJiYgLyhpUGFkfGlQaG9uZXxpUG9kfE1hYykvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBzaW5jZSAyMDE3LCBpT1MgaGFzIGhhZCBhIGJ1ZyB0aGF0IGNhdXNlcyBldmVudC5jbGllbnRYL1kgdG8gYmUgaW5hY2N1cmF0ZSB3aGVuIGEgc2Nyb2xsIG9jY3VycywgdGh1cyB3ZSBtdXN0IGFsdGVybmF0ZSBpZ25vcmluZyBldmVyeSBvdGhlciB0b3VjaG1vdmUgZXZlbnQgdG8gd29yayBhcm91bmQgaXQuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgxOTU0IGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzXG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF93aW4sIFwid2hlZWxcIiwgX29uU2Nyb2xsKTsgLy8gbW9zdGx5IGZvciAzcmQgcGFydHkgc21vb3RoIHNjcm9sbGluZyBsaWJyYXJpZXMuXG5cblxuICAgICAgICBfcm9vdCA9IFtfd2luLCBfZG9jLCBfZG9jRWwsIF9ib2R5XTtcblxuICAgICAgICBpZiAoZ3NhcC5tYXRjaE1lZGlhKSB7XG4gICAgICAgICAgU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgICAgICAgICAgIHZhciBtbSA9IGdzYXAubWF0Y2hNZWRpYSgpLFxuICAgICAgICAgICAgICAgIHA7XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIG1tLmFkZChwLCB2YXJzW3BdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1tO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBnc2FwLmFkZEV2ZW50TGlzdGVuZXIoXCJtYXRjaE1lZGlhSW5pdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JldmVydEFsbCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFSZXZlcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXZlcnRSZWNvcmRlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3JlZnJlc2hBbGwoMCwgMSk7XG5cbiAgICAgICAgICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ3NhcC5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gd2hlbiBvcmllbnRhdGlvbiBjaGFuZ2VzLCB3ZSBzaG91bGQgdGFrZSBuZXcgYmFzZSBtZWFzdXJlbWVudHMgZm9yIHRoZSBpZ25vcmVNb2JpbGVSZXNpemUgZmVhdHVyZS5cbiAgICAgICAgICAgIF9zZXRCYXNlRGltZW5zaW9ucygpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3NldEJhc2VEaW1lbnNpb25zO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlcXVpcmVzIEdTQVAgMy4xMS4wIG9yIGxhdGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldEJhc2VEaW1lbnNpb25zKCk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7IC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgQ2hyb21lKSwgdGhlIHdpbmRvdyBzdG9wcyBkaXNwYXRjaGluZyBzY3JvbGwgZXZlbnRzIG9uIHRoZSB3aW5kb3cgaWYgeW91IHNjcm9sbCByZWFsbHkgZmFzdCwgYnV0IGl0J3MgY29uc2lzdGVudCBvbiB0aGUgZG9jdW1lbnQhXG5cblxuICAgICAgICB2YXIgYm9keVN0eWxlID0gX2JvZHkuc3R5bGUsXG4gICAgICAgICAgICBib3JkZXIgPSBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUsXG4gICAgICAgICAgICBBbmltYXRpb25Qcm90byA9IGdzYXAuY29yZS5BbmltYXRpb24ucHJvdG90eXBlLFxuICAgICAgICAgICAgYm91bmRzLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgQW5pbWF0aW9uUHJvdG8ucmV2ZXJ0IHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25Qcm90bywgXCJyZXZlcnRcIiwge1xuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUoLTAuMDEsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChBbmltYXRpb24ucmV2ZXJ0KCkgd2FzIGFkZGVkIGFmdGVyIDMuMTAuNClcblxuICAgICAgICBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUgPSBcInNvbGlkXCI7IC8vIHdvcmtzIGFyb3VuZCBhbiBpc3N1ZSB3aGVyZSBhIG1hcmdpbiBvZiBhIGNoaWxkIGVsZW1lbnQgY291bGQgdGhyb3cgb2ZmIHRoZSBib3VuZHMgb2YgdGhlIF9ib2R5LCBtYWtpbmcgaXQgc2VlbSBsaWtlIHRoZXJlJ3MgYSBtYXJnaW4gd2hlbiB0aGVyZSBhY3R1YWxseSBpc24ndC4gVGhlIGJvcmRlciBlbnN1cmVzIHRoYXQgdGhlIGJvdW5kcyBhcmUgYWNjdXJhdGUuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhfYm9keSk7XG4gICAgICAgIF92ZXJ0aWNhbC5tID0gTWF0aC5yb3VuZChib3VuZHMudG9wICsgX3ZlcnRpY2FsLnNjKCkpIHx8IDA7IC8vIGFjY29tbW9kYXRlIHRoZSBvZmZzZXQgb2YgdGhlIDxib2R5PiBjYXVzZWQgYnkgbWFyZ2lucyBhbmQvb3IgcGFkZGluZ1xuXG4gICAgICAgIF9ob3Jpem9udGFsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgX2hvcml6b250YWwuc2MoKSkgfHwgMDtcbiAgICAgICAgYm9yZGVyID8gYm9keVN0eWxlLmJvcmRlclRvcFN0eWxlID0gYm9yZGVyIDogYm9keVN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXRvcC1zdHlsZVwiKTsgLy8gVE9ETzogKD8pIG1heWJlIG1vdmUgdG8gbGV2ZXJhZ2luZyB0aGUgdmVsb2NpdHkgbWVjaGFuaXNtIGluIE9ic2VydmVyIGFuZCBza2lwIGludGVydmFscy5cblxuICAgICAgICBfc3luY0ludGVydmFsID0gc2V0SW50ZXJ2YWwoX3N5bmMsIDI1MCk7XG4gICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC41LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zdGFydHVwID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTsgLy8gc29tZSBvbGRlciBBbmRyb2lkIGRldmljZXMgaW50ZXJtaXR0ZW50bHkgc3RvcCBkaXNwYXRjaGluZyBcInRvdWNobW92ZVwiIGV2ZW50cyBpZiB3ZSBkb24ndCBsaXN0ZW4gZm9yIFwidG91Y2hjYW5jZWxcIiBvbiB0aGUgZG9jdW1lbnQuXG5cblxuICAgICAgICBfYWRkTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpOyAvL3dvcmtzIGFyb3VuZCBTYWZhcmkgYnVnOiBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIxNDUwLWRyYWdnYWJsZS1pbi1pZnJhbWUtb24tbW9iaWxlLWlzLWJ1Z2d5L1xuXG5cbiAgICAgICAgX211bHRpTGlzdGVuZXIoX2FkZExpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsIF9wb2ludGVyRG93bkhhbmRsZXIpO1xuXG4gICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLCBfcG9pbnRlclVwSGFuZGxlcik7XG5cbiAgICAgICAgX3RyYW5zZm9ybVByb3AgPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9zdGF0ZVByb3BzLnB1c2goX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICAgIF9jb3JlSW5pdHRlZCA9IF9nZXRUaW1lKCk7XG4gICAgICAgIF9yZXNpemVEZWxheSA9IGdzYXAuZGVsYXllZENhbGwoMC4yLCBfcmVmcmVzaEFsbCkucGF1c2UoKTtcbiAgICAgICAgX2F1dG9SZWZyZXNoID0gW19kb2MsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHcgPSBfd2luLmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgIGggPSBfd2luLmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKF9kb2MuaGlkZGVuKSB7XG4gICAgICAgICAgICBfcHJldldpZHRoID0gdztcbiAgICAgICAgICAgIF9wcmV2SGVpZ2h0ID0gaDtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wcmV2V2lkdGggIT09IHcgfHwgX3ByZXZIZWlnaHQgIT09IGgpIHtcbiAgICAgICAgICAgIF9vblJlc2l6ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2RvYywgXCJET01Db250ZW50TG9hZGVkXCIsIF9yZWZyZXNoQWxsLCBfd2luLCBcImxvYWRcIiwgX3JlZnJlc2hBbGwsIF93aW4sIFwicmVzaXplXCIsIF9vblJlc2l6ZV07XG5cbiAgICAgICAgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIpO1xuXG4gICAgICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyaWdnZXIuZW5hYmxlKDAsIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMV0pO1xuXG4gICAgICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jb25maWcgPSBmdW5jdGlvbiBjb25maWcodmFycykge1xuICAgIFwibGltaXRDYWxsYmFja3NcIiBpbiB2YXJzICYmIChfbGltaXRDYWxsYmFja3MgPSAhIXZhcnMubGltaXRDYWxsYmFja3MpO1xuICAgIHZhciBtcyA9IHZhcnMuc3luY0ludGVydmFsO1xuICAgIG1zICYmIGNsZWFySW50ZXJ2YWwoX3N5bmNJbnRlcnZhbCkgfHwgKF9zeW5jSW50ZXJ2YWwgPSBtcykgJiYgc2V0SW50ZXJ2YWwoX3N5bmMsIG1zKTtcbiAgICBcImlnbm9yZU1vYmlsZVJlc2l6ZVwiIGluIHZhcnMgJiYgKF9pZ25vcmVNb2JpbGVSZXNpemUgPSBTY3JvbGxUcmlnZ2VyLmlzVG91Y2ggPT09IDEgJiYgdmFycy5pZ25vcmVNb2JpbGVSZXNpemUpO1xuXG4gICAgaWYgKFwiYXV0b1JlZnJlc2hFdmVudHNcIiBpbiB2YXJzKSB7XG4gICAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9yZW1vdmVMaXN0ZW5lcikgfHwgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIsIHZhcnMuYXV0b1JlZnJlc2hFdmVudHMgfHwgXCJub25lXCIpO1xuICAgICAgX2lnbm9yZVJlc2l6ZSA9ICh2YXJzLmF1dG9SZWZyZXNoRXZlbnRzICsgXCJcIikuaW5kZXhPZihcInJlc2l6ZVwiKSA9PT0gLTE7XG4gICAgfVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuc2Nyb2xsZXJQcm94eSA9IGZ1bmN0aW9uIHNjcm9sbGVyUHJveHkodGFyZ2V0LCB2YXJzKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGFyZ2V0KHRhcmdldCksXG4gICAgICAgIGkgPSBfc2Nyb2xsZXJzLmluZGV4T2YodCksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydCh0KTtcblxuICAgIGlmICh+aSkge1xuICAgICAgX3Njcm9sbGVycy5zcGxpY2UoaSwgaXNWaWV3cG9ydCA/IDYgOiAyKTtcbiAgICB9XG5cbiAgICBpZiAodmFycykge1xuICAgICAgaXNWaWV3cG9ydCA/IF9wcm94aWVzLnVuc2hpZnQoX3dpbiwgdmFycywgX2JvZHksIHZhcnMsIF9kb2NFbCwgdmFycykgOiBfcHJveGllcy51bnNoaWZ0KHQsIHZhcnMpO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmNsZWFyTWF0Y2hNZWRpYSA9IGZ1bmN0aW9uIGNsZWFyTWF0Y2hNZWRpYShxdWVyeSkge1xuICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5fY3R4ICYmIHQuX2N0eC5xdWVyeSA9PT0gcXVlcnkgJiYgdC5fY3R4LmtpbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5pc0luVmlld3BvcnQgPSBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCwgcmF0aW8sIGhvcml6b250YWwpIHtcbiAgICB2YXIgYm91bmRzID0gKF9pc1N0cmluZyhlbGVtZW50KSA/IF9nZXRUYXJnZXQoZWxlbWVudCkgOiBlbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgb2Zmc2V0ID0gYm91bmRzW2hvcml6b250YWwgPyBfd2lkdGggOiBfaGVpZ2h0XSAqIHJhdGlvIHx8IDA7XG4gICAgcmV0dXJuIGhvcml6b250YWwgPyBib3VuZHMucmlnaHQgLSBvZmZzZXQgPiAwICYmIGJvdW5kcy5sZWZ0ICsgb2Zmc2V0IDwgX3dpbi5pbm5lcldpZHRoIDogYm91bmRzLmJvdHRvbSAtIG9mZnNldCA+IDAgJiYgYm91bmRzLnRvcCArIG9mZnNldCA8IF93aW4uaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5wb3NpdGlvbkluVmlld3BvcnQgPSBmdW5jdGlvbiBwb3NpdGlvbkluVmlld3BvcnQoZWxlbWVudCwgcmVmZXJlbmNlUG9pbnQsIGhvcml6b250YWwpIHtcbiAgICBfaXNTdHJpbmcoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZ2V0VGFyZ2V0KGVsZW1lbnQpKTtcbiAgICB2YXIgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2l6ZSA9IGJvdW5kc1tob3Jpem9udGFsID8gX3dpZHRoIDogX2hlaWdodF0sXG4gICAgICAgIG9mZnNldCA9IHJlZmVyZW5jZVBvaW50ID09IG51bGwgPyBzaXplIC8gMiA6IHJlZmVyZW5jZVBvaW50IGluIF9rZXl3b3JkcyA/IF9rZXl3b3Jkc1tyZWZlcmVuY2VQb2ludF0gKiBzaXplIDogfnJlZmVyZW5jZVBvaW50LmluZGV4T2YoXCIlXCIpID8gcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgKiBzaXplIC8gMTAwIDogcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgfHwgMDtcbiAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChib3VuZHMubGVmdCArIG9mZnNldCkgLyBfd2luLmlubmVyV2lkdGggOiAoYm91bmRzLnRvcCArIG9mZnNldCkgLyBfd2luLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIua2lsbEFsbCA9IGZ1bmN0aW9uIGtpbGxBbGwoYWxsb3dMaXN0ZW5lcnMpIHtcbiAgICBfdHJpZ2dlcnMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiICYmIHQua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93TGlzdGVuZXJzICE9PSB0cnVlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gX2xpc3RlbmVycy5raWxsQWxsIHx8IFtdO1xuICAgICAgX2xpc3RlbmVycyA9IHt9O1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsVHJpZ2dlcjtcbn0oKTtcblNjcm9sbFRyaWdnZXIudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5cblNjcm9sbFRyaWdnZXIuc2F2ZVN0eWxlcyA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XG4gIHJldHVybiB0YXJnZXRzID8gX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgLy8gc2F2ZWQgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiBhIGNvbnNlY3V0aXZlIGFsdGVybmF0aW5nIEFycmF5LCBsaWtlIFtlbGVtZW50LCBjc3NUZXh0LCB0cmFuc2Zvcm0gYXR0cmlidXRlLCBjYWNoZSwgbWF0Y2hNZWRpYSwgLi4uXVxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlKSB7XG4gICAgICB2YXIgaSA9IF9zYXZlZFN0eWxlcy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGkgPj0gMCAmJiBfc2F2ZWRTdHlsZXMuc3BsaWNlKGksIDUpO1xuXG4gICAgICBfc2F2ZWRTdHlsZXMucHVzaCh0YXJnZXQsIHRhcmdldC5zdHlsZS5jc3NUZXh0LCB0YXJnZXQuZ2V0QkJveCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLCBnc2FwLmNvcmUuZ2V0Q2FjaGUodGFyZ2V0KSwgX2NvbnRleHQoKSk7XG4gICAgfVxuICB9KSA6IF9zYXZlZFN0eWxlcztcbn07XG5cblNjcm9sbFRyaWdnZXIucmV2ZXJ0ID0gZnVuY3Rpb24gKHNvZnQsIG1lZGlhKSB7XG4gIHJldHVybiBfcmV2ZXJ0QWxsKCFzb2Z0LCBtZWRpYSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YXJzLCBhbmltYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbik7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJlZnJlc2ggPSBmdW5jdGlvbiAoc2FmZSkge1xuICByZXR1cm4gc2FmZSA/IF9vblJlc2l6ZSgpIDogKF9jb3JlSW5pdHRlZCB8fCBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKCkpICYmIF9yZWZyZXNoQWxsKHRydWUpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci51cGRhdGUgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgcmV0dXJuICsrX3Njcm9sbGVycy5jYWNoZSAmJiBfdXBkYXRlQWxsKGZvcmNlID09PSB0cnVlID8gMiA6IDApO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5jbGVhclNjcm9sbE1lbW9yeSA9IF9jbGVhclNjcm9sbE1lbW9yeTtcblxuU2Nyb2xsVHJpZ2dlci5tYXhTY3JvbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgaG9yaXpvbnRhbCkge1xuICByZXR1cm4gX21heFNjcm9sbChlbGVtZW50LCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRTY3JvbGxGdW5jID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcbiAgcmV0dXJuIF9nZXRTY3JvbGxGdW5jKF9nZXRUYXJnZXQoZWxlbWVudCksIGhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIF9pZHNbaWRdO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfdHJpZ2dlcnMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiO1xuICB9KTtcbn07IC8vIGl0J3MgY29tbW9uIGZvciBwZW9wbGUgdG8gU2Nyb2xsVHJpZ2dlci5nZXRBbGwodCA9PiB0LmtpbGwoKSkgb24gcGFnZSByb3V0ZXMsIGZvciBleGFtcGxlLCBhbmQgd2UgZG9uJ3Qgd2FudCBpdCB0byBydWluIHNtb290aCBzY3JvbGxpbmcgYnkga2lsbGluZyB0aGUgbWFpbiBTY3JvbGxTbW9vdGhlciBvbmUuXG5cblxuU2Nyb2xsVHJpZ2dlci5pc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhX2xhc3RTY3JvbGxUaW1lO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5zbmFwRGlyZWN0aW9uYWwgPSBfc25hcERpcmVjdGlvbmFsO1xuXG5TY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdIHx8IChfbGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSxcbiAgICAgIGkgPSBhICYmIGEuaW5kZXhPZihjYWxsYmFjayk7XG4gIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuYmF0Y2ggPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICB2YXJzQ29weSA9IHt9LFxuICAgICAgaW50ZXJ2YWwgPSB2YXJzLmludGVydmFsIHx8IDAuMDE2LFxuICAgICAgYmF0Y2hNYXggPSB2YXJzLmJhdGNoTWF4IHx8IDFlOSxcbiAgICAgIHByb3h5Q2FsbGJhY2sgPSBmdW5jdGlvbiBwcm94eUNhbGxiYWNrKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHRyaWdnZXJzID0gW10sXG4gICAgICAgIGRlbGF5ID0gZ3NhcC5kZWxheWVkQ2FsbChpbnRlcnZhbCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2soZWxlbWVudHMsIHRyaWdnZXJzKTtcbiAgICAgIGVsZW1lbnRzID0gW107XG4gICAgICB0cmlnZ2VycyA9IFtdO1xuICAgIH0pLnBhdXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgICBlbGVtZW50cy5sZW5ndGggfHwgZGVsYXkucmVzdGFydCh0cnVlKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goc2VsZi50cmlnZ2VyKTtcbiAgICAgIHRyaWdnZXJzLnB1c2goc2VsZik7XG4gICAgICBiYXRjaE1heCA8PSBlbGVtZW50cy5sZW5ndGggJiYgZGVsYXkucHJvZ3Jlc3MoMSk7XG4gICAgfTtcbiAgfSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICB2YXJzQ29weVtwXSA9IHAuc3Vic3RyKDAsIDIpID09PSBcIm9uXCIgJiYgX2lzRnVuY3Rpb24odmFyc1twXSkgJiYgcCAhPT0gXCJvblJlZnJlc2hJbml0XCIgPyBwcm94eUNhbGxiYWNrKHAsIHZhcnNbcF0pIDogdmFyc1twXTtcbiAgfVxuXG4gIGlmIChfaXNGdW5jdGlvbihiYXRjaE1heCkpIHtcbiAgICBiYXRjaE1heCA9IGJhdGNoTWF4KCk7XG5cbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXRjaE1heCA9IHZhcnMuYmF0Y2hNYXgoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgIGZvciAocCBpbiB2YXJzQ29weSkge1xuICAgICAgY29uZmlnW3BdID0gdmFyc0NvcHlbcF07XG4gICAgfVxuXG4gICAgY29uZmlnLnRyaWdnZXIgPSB0YXJnZXQ7XG4gICAgcmVzdWx0LnB1c2goU2Nyb2xsVHJpZ2dlci5jcmVhdGUoY29uZmlnKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyB0byByZWR1Y2UgZmlsZSBzaXplLiBjbGFtcHMgdGhlIHNjcm9sbCBhbmQgYWxzbyByZXR1cm5zIGEgZHVyYXRpb24gbXVsdGlwbGllciBzbyB0aGF0IGlmIHRoZSBzY3JvbGwgZ2V0cyBjaG9wcGVkIHNob3J0ZXIsIHRoZSBkdXJhdGlvbiBnZXRzIGN1cnRhaWxlZCBhcyB3ZWxsIChvdGhlcndpc2UgaWYgeW91J3JlIHZlcnkgY2xvc2UgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSwgZm9yIGV4YW1wbGUsIGFuZCBzd2lwZSB1cCByZWFsbHkgZmFzdCwgaXQnbGwgc3VkZGVubHkgc2xvdyBkb3duIGFuZCB0YWtlIGEgbG9uZyB0aW1lIHRvIHJlYWNoIHRoZSB0b3ApLlxuXG5cbnZhciBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIgPSBmdW5jdGlvbiBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuYywgY3VycmVudCwgZW5kLCBtYXgpIHtcbiAgY3VycmVudCA+IG1heCA/IHNjcm9sbEZ1bmMobWF4KSA6IGN1cnJlbnQgPCAwICYmIHNjcm9sbEZ1bmMoMCk7XG4gIHJldHVybiBlbmQgPiBtYXggPyAobWF4IC0gY3VycmVudCkgLyAoZW5kIC0gY3VycmVudCkgOiBlbmQgPCAwID8gY3VycmVudCAvIChjdXJyZW50IC0gZW5kKSA6IDE7XG59LFxuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcgPSBmdW5jdGlvbiBfYWxsb3dOYXRpdmVQYW5uaW5nKHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHRydWUpIHtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnN0eWxlLnRvdWNoQWN0aW9uID0gZGlyZWN0aW9uID09PSB0cnVlID8gXCJhdXRvXCIgOiBkaXJlY3Rpb24gPyBcInBhbi1cIiArIGRpcmVjdGlvbiArIChPYnNlcnZlci5pc1RvdWNoID8gXCIgcGluY2gtem9vbVwiIDogXCJcIikgOiBcIm5vbmVcIjsgLy8gbm90ZTogRmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgaXQgcGluY2gtem9vbSBwcm9wZXJseSwgYXQgbGVhc3QgaW4gYWRkaXRpb24gdG8gYSBwYW4teCBvciBwYW4teS5cbiAgfVxuXG4gIHRhcmdldCA9PT0gX2RvY0VsICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcoX2JvZHksIGRpcmVjdGlvbik7XG59LFxuICAgIF9vdmVyZmxvdyA9IHtcbiAgYXV0bzogMSxcbiAgc2Nyb2xsOiAxXG59LFxuICAgIF9uZXN0ZWRTY3JvbGwgPSBmdW5jdGlvbiBfbmVzdGVkU2Nyb2xsKF9yZWY1KSB7XG4gIHZhciBldmVudCA9IF9yZWY1LmV2ZW50LFxuICAgICAgdGFyZ2V0ID0gX3JlZjUudGFyZ2V0LFxuICAgICAgYXhpcyA9IF9yZWY1LmF4aXM7XG5cbiAgdmFyIG5vZGUgPSAoZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50KS50YXJnZXQsXG4gICAgICBjYWNoZSA9IG5vZGUuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKG5vZGUpLFxuICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBjcztcblxuICBpZiAoIWNhY2hlLl9pc1Njcm9sbFQgfHwgdGltZSAtIGNhY2hlLl9pc1Njcm9sbFQgPiAyMDAwKSB7XG4gICAgLy8gY2FjaGUgZm9yIDIgc2Vjb25kcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IF9ib2R5ICYmIChub2RlLnNjcm9sbEhlaWdodCA8PSBub2RlLmNsaWVudEhlaWdodCAmJiBub2RlLnNjcm9sbFdpZHRoIDw9IG5vZGUuY2xpZW50V2lkdGggfHwgIShfb3ZlcmZsb3dbKGNzID0gX2dldENvbXB1dGVkU3R5bGUobm9kZSkpLm92ZXJmbG93WV0gfHwgX292ZXJmbG93W2NzLm92ZXJmbG93WF0pKSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjYWNoZS5faXNTY3JvbGwgPSBub2RlICYmIG5vZGUgIT09IHRhcmdldCAmJiAhX2lzVmlld3BvcnQobm9kZSkgJiYgKF9vdmVyZmxvd1soY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSkub3ZlcmZsb3dZXSB8fCBfb3ZlcmZsb3dbY3Mub3ZlcmZsb3dYXSk7XG4gICAgY2FjaGUuX2lzU2Nyb2xsVCA9IHRpbWU7XG4gIH1cblxuICBpZiAoY2FjaGUuX2lzU2Nyb2xsIHx8IGF4aXMgPT09IFwieFwiKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuX2dzYXBBbGxvdyA9IHRydWU7XG4gIH1cbn0sXG4gICAgLy8gY2FwdHVyZSBldmVudHMgb24gc2Nyb2xsYWJsZSBlbGVtZW50cyBJTlNJREUgdGhlIDxib2R5PiBhbmQgYWxsb3cgdGhvc2UgYnkgY2FsbGluZyBzdG9wUHJvcGFnYXRpb24oKSB3aGVuIHdlIGZpbmQgYSBzY3JvbGxhYmxlIGFuY2VzdG9yXG5faW5wdXRPYnNlcnZlciA9IGZ1bmN0aW9uIF9pbnB1dE9ic2VydmVyKHRhcmdldCwgdHlwZSwgaW5wdXRzLCBuZXN0ZWQpIHtcbiAgcmV0dXJuIE9ic2VydmVyLmNyZWF0ZSh7XG4gICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgY2FwdHVyZTogdHJ1ZSxcbiAgICBkZWJvdW5jZTogZmFsc2UsXG4gICAgbG9ja0F4aXM6IHRydWUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBvbldoZWVsOiBuZXN0ZWQgPSBuZXN0ZWQgJiYgX25lc3RlZFNjcm9sbCxcbiAgICBvblByZXNzOiBuZXN0ZWQsXG4gICAgb25EcmFnOiBuZXN0ZWQsXG4gICAgb25TY3JvbGw6IG5lc3RlZCxcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gb25FbmFibGUoKSB7XG4gICAgICByZXR1cm4gaW5wdXRzICYmIF9hZGRMaXN0ZW5lcihfZG9jLCBPYnNlcnZlci5ldmVudFR5cGVzWzBdLCBfY2FwdHVyZUlucHV0cywgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICByZXR1cm4gX3JlbW92ZUxpc3RlbmVyKF9kb2MsIE9ic2VydmVyLmV2ZW50VHlwZXNbMF0sIF9jYXB0dXJlSW5wdXRzLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSxcbiAgICBfaW5wdXRFeHAgPSAvKGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkvaSxcbiAgICBfaW5wdXRJc0ZvY3VzZWQsXG4gICAgX2NhcHR1cmVJbnB1dHMgPSBmdW5jdGlvbiBfY2FwdHVyZUlucHV0cyhlKSB7XG4gIHZhciBpc0lucHV0ID0gX2lucHV0RXhwLnRlc3QoZS50YXJnZXQudGFnTmFtZSk7XG5cbiAgaWYgKGlzSW5wdXQgfHwgX2lucHV0SXNGb2N1c2VkKSB7XG4gICAgZS5fZ3NhcEFsbG93ID0gdHJ1ZTtcbiAgICBfaW5wdXRJc0ZvY3VzZWQgPSBpc0lucHV0O1xuICB9XG59LFxuICAgIF9nZXRTY3JvbGxOb3JtYWxpemVyID0gZnVuY3Rpb24gX2dldFNjcm9sbE5vcm1hbGl6ZXIodmFycykge1xuICBfaXNPYmplY3QodmFycykgfHwgKHZhcnMgPSB7fSk7XG4gIHZhcnMucHJldmVudERlZmF1bHQgPSB2YXJzLmlzTm9ybWFsaXplciA9IHZhcnMuYWxsb3dDbGlja3MgPSB0cnVlO1xuICB2YXJzLnR5cGUgfHwgKHZhcnMudHlwZSA9IFwid2hlZWwsdG91Y2hcIik7XG4gIHZhcnMuZGVib3VuY2UgPSAhIXZhcnMuZGVib3VuY2U7XG4gIHZhcnMuaWQgPSB2YXJzLmlkIHx8IFwibm9ybWFsaXplclwiO1xuXG4gIHZhciBfdmFyczIgPSB2YXJzLFxuICAgICAgbm9ybWFsaXplU2Nyb2xsWCA9IF92YXJzMi5ub3JtYWxpemVTY3JvbGxYLFxuICAgICAgbW9tZW50dW0gPSBfdmFyczIubW9tZW50dW0sXG4gICAgICBhbGxvd05lc3RlZFNjcm9sbCA9IF92YXJzMi5hbGxvd05lc3RlZFNjcm9sbCxcbiAgICAgIG9uUmVsZWFzZSA9IF92YXJzMi5vblJlbGVhc2UsXG4gICAgICBzZWxmLFxuICAgICAgbWF4WSxcbiAgICAgIHRhcmdldCA9IF9nZXRUYXJnZXQodmFycy50YXJnZXQpIHx8IF9kb2NFbCxcbiAgICAgIHNtb290aGVyID0gZ3NhcC5jb3JlLmdsb2JhbHMoKS5TY3JvbGxTbW9vdGhlcixcbiAgICAgIHNtb290aGVySW5zdGFuY2UgPSBzbW9vdGhlciAmJiBzbW9vdGhlci5nZXQoKSxcbiAgICAgIGNvbnRlbnQgPSBfZml4SU9TQnVnICYmICh2YXJzLmNvbnRlbnQgJiYgX2dldFRhcmdldCh2YXJzLmNvbnRlbnQpIHx8IHNtb290aGVySW5zdGFuY2UgJiYgdmFycy5jb250ZW50ICE9PSBmYWxzZSAmJiAhc21vb3RoZXJJbnN0YW5jZS5zbW9vdGgoKSAmJiBzbW9vdGhlckluc3RhbmNlLmNvbnRlbnQoKSksXG4gICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgIHNjcm9sbEZ1bmNYID0gX2dldFNjcm9sbEZ1bmModGFyZ2V0LCBfaG9yaXpvbnRhbCksXG4gICAgICBzY2FsZSA9IDEsXG4gICAgICBpbml0aWFsU2NhbGUgPSAoT2JzZXJ2ZXIuaXNUb3VjaCAmJiBfd2luLnZpc3VhbFZpZXdwb3J0ID8gX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSAqIF93aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiBfd2luLm91dGVyV2lkdGgpIC8gX3dpbi5pbm5lcldpZHRoLFxuICAgICAgd2hlZWxSZWZyZXNoID0gMCxcbiAgICAgIHJlc29sdmVNb21lbnR1bUR1cmF0aW9uID0gX2lzRnVuY3Rpb24obW9tZW50dW0pID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb21lbnR1bShzZWxmKTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW9tZW50dW0gfHwgMi44O1xuICB9LFxuICAgICAgbGFzdFJlZnJlc2hJRCxcbiAgICAgIHNraXBUb3VjaE1vdmUsXG4gICAgICBpbnB1dE9ic2VydmVyID0gX2lucHV0T2JzZXJ2ZXIodGFyZ2V0LCB2YXJzLnR5cGUsIHRydWUsIGFsbG93TmVzdGVkU2Nyb2xsKSxcbiAgICAgIHJlc3VtZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIHJlc3VtZVRvdWNoTW92ZSgpIHtcbiAgICByZXR1cm4gc2tpcFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9LFxuICAgICAgc2Nyb2xsQ2xhbXBYID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgc2Nyb2xsQ2xhbXBZID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgdXBkYXRlQ2xhbXBzID0gZnVuY3Rpb24gdXBkYXRlQ2xhbXBzKCkge1xuICAgIG1heFkgPSBfbWF4U2Nyb2xsKHRhcmdldCwgX3ZlcnRpY2FsKTtcbiAgICBzY3JvbGxDbGFtcFkgPSBfY2xhbXAoX2ZpeElPU0J1ZyA/IDEgOiAwLCBtYXhZKTtcbiAgICBub3JtYWxpemVTY3JvbGxYICYmIChzY3JvbGxDbGFtcFggPSBfY2xhbXAoMCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSkpO1xuICAgIGxhc3RSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICB9LFxuICAgICAgcmVtb3ZlQ29udGVudE9mZnNldCA9IGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnRPZmZzZXQoKSB7XG4gICAgY29udGVudC5fZ3NhcC55ID0gX3JvdW5kKHBhcnNlRmxvYXQoY29udGVudC5fZ3NhcC55KSArIHNjcm9sbEZ1bmNZLm9mZnNldCkgKyBcInB4XCI7XG4gICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgcGFyc2VGbG9hdChjb250ZW50Ll9nc2FwLnkpICsgXCIsIDAsIDEpXCI7XG4gICAgc2Nyb2xsRnVuY1kub2Zmc2V0ID0gc2Nyb2xsRnVuY1kuY2FjaGVJRCA9IDA7XG4gIH0sXG4gICAgICBpZ25vcmVEcmFnID0gZnVuY3Rpb24gaWdub3JlRHJhZygpIHtcbiAgICBpZiAoc2tpcFRvdWNoTW92ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc3VtZVRvdWNoTW92ZSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSBfcm91bmQoc2VsZi5kZWx0YVkgLyAyKSxcbiAgICAgICAgICBzY3JvbGwgPSBzY3JvbGxDbGFtcFkoc2Nyb2xsRnVuY1kudiAtIG9mZnNldCk7XG5cbiAgICAgIGlmIChjb250ZW50ICYmIHNjcm9sbCAhPT0gc2Nyb2xsRnVuY1kudiArIHNjcm9sbEZ1bmNZLm9mZnNldCkge1xuICAgICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgPSBzY3JvbGwgLSBzY3JvbGxGdW5jWS52O1xuXG4gICAgICAgIHZhciB5ID0gX3JvdW5kKChwYXJzZUZsb2F0KGNvbnRlbnQgJiYgY29udGVudC5fZ3NhcC55KSB8fCAwKSAtIHNjcm9sbEZ1bmNZLm9mZnNldCk7XG5cbiAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgeSArIFwiLCAwLCAxKVwiO1xuICAgICAgICBjb250ZW50Ll9nc2FwLnkgPSB5ICsgXCJweFwiO1xuICAgICAgICBzY3JvbGxGdW5jWS5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcblxuICAgICAgICBfdXBkYXRlQWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNjcm9sbEZ1bmNZLm9mZnNldCAmJiByZW1vdmVDb250ZW50T2Zmc2V0KCk7XG4gICAgc2tpcFRvdWNoTW92ZSA9IHRydWU7XG4gIH0sXG4gICAgICB0d2VlbixcbiAgICAgIHN0YXJ0U2Nyb2xsWCxcbiAgICAgIHN0YXJ0U2Nyb2xsWSxcbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiB0aGUgd2luZG93IHJlc2l6ZXMsIGxpa2Ugb24gYW4gaVBob25lIHdoaWNoIEFwcGxlIEZPUkNFUyB0aGUgYWRkcmVzcyBiYXIgdG8gc2hvdy9oaWRlIGV2ZW4gaWYgd2UgZXZlbnQucHJldmVudERlZmF1bHQoKSwgaXQgbWF5IGJlIHNjcm9sbGluZyB0b28gZmFyIG5vdyB0aGF0IHRoZSBhZGRyZXNzIGJhciBpcyBzaG93aW5nLCBzbyB3ZSBtdXN0IGR5bmFtaWNhbGx5IGFkanVzdCB0aGUgbW9tZW50dW0gdHdlZW4uXG4gICAgdXBkYXRlQ2xhbXBzKCk7XG5cbiAgICBpZiAodHdlZW4uaXNBY3RpdmUoKSAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPiBtYXhZKSB7XG4gICAgICBzY3JvbGxGdW5jWSgpID4gbWF4WSA/IHR3ZWVuLnByb2dyZXNzKDEpICYmIHNjcm9sbEZ1bmNZKG1heFkpIDogdHdlZW4ucmVzZXRUbyhcInNjcm9sbFlcIiwgbWF4WSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRlbnQgJiYgZ3NhcC5zZXQoY29udGVudCwge1xuICAgIHk6IFwiKz0wXCJcbiAgfSk7IC8vIHRvIGVuc3VyZSB0aGVyZSdzIGEgY2FjaGUgKGVsZW1lbnQuX2dzYXApXG5cbiAgdmFycy5pZ25vcmVDaGVjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIF9maXhJT1NCdWcgJiYgZS50eXBlID09PSBcInRvdWNobW92ZVwiICYmIGlnbm9yZURyYWcoZSkgfHwgc2NhbGUgPiAxLjA1ICYmIGUudHlwZSAhPT0gXCJ0b3VjaHN0YXJ0XCIgfHwgc2VsZi5pc0dlc3R1cmluZyB8fCBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG5cbiAgdmFycy5vblByZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHNraXBUb3VjaE1vdmUgPSBmYWxzZTtcbiAgICB2YXIgcHJldlNjYWxlID0gc2NhbGU7XG4gICAgc2NhbGUgPSBfcm91bmQoKF93aW4udmlzdWFsVmlld3BvcnQgJiYgX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSB8fCAxKSAvIGluaXRpYWxTY2FsZSk7XG4gICAgdHdlZW4ucGF1c2UoKTtcbiAgICBwcmV2U2NhbGUgIT09IHNjYWxlICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBzY2FsZSA+IDEuMDEgPyB0cnVlIDogbm9ybWFsaXplU2Nyb2xsWCA/IGZhbHNlIDogXCJ4XCIpO1xuICAgIHN0YXJ0U2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCk7XG4gICAgc3RhcnRTY3JvbGxZID0gc2Nyb2xsRnVuY1koKTtcbiAgICB1cGRhdGVDbGFtcHMoKTtcbiAgICBsYXN0UmVmcmVzaElEID0gX3JlZnJlc2hJRDtcbiAgfTtcblxuICB2YXJzLm9uUmVsZWFzZSA9IHZhcnMub25HZXN0dXJlU3RhcnQgPSBmdW5jdGlvbiAoc2VsZiwgd2FzRHJhZ2dpbmcpIHtcbiAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuXG4gICAgaWYgKCF3YXNEcmFnZ2luZykge1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Njcm9sbGVycy5jYWNoZSsrOyAvLyBtYWtlIHN1cmUgd2UncmUgcHVsbGluZyB0aGUgbm9uLWNhY2hlZCB2YWx1ZVxuICAgICAgLy8gYWx0ZXJuYXRlIGFsZ29yaXRobTogZHVyWCA9IE1hdGgubWluKDYsIE1hdGguYWJzKHNlbGYudmVsb2NpdHlYIC8gODAwKSksXHRkdXIgPSBNYXRoLm1heChkdXJYLCBNYXRoLm1pbig2LCBNYXRoLmFicyhzZWxmLnZlbG9jaXR5WSAvIDgwMCkpKTsgZHVyID0gZHVyICogKDAuNCArICgxIC0gX3Bvd2VyNEluKGR1ciAvIDYpKSAqIDAuNikpICogKG1vbWVudHVtU3BlZWQgfHwgMSlcblxuICAgICAgdmFyIGR1ciA9IHJlc29sdmVNb21lbnR1bUR1cmF0aW9uKCksXG4gICAgICAgICAgY3VycmVudFNjcm9sbCxcbiAgICAgICAgICBlbmRTY3JvbGw7XG5cbiAgICAgIGlmIChub3JtYWxpemVTY3JvbGxYKSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBzY3JvbGxGdW5jWCgpO1xuICAgICAgICBlbmRTY3JvbGwgPSBjdXJyZW50U2Nyb2xsICsgZHVyICogMC4wNSAqIC1zZWxmLnZlbG9jaXR5WCAvIDAuMjI3OyAvLyB0aGUgY29uc3RhbnQgLjIyNyBpcyBmcm9tIHBvd2VyNCgwLjA1KS4gdmVsb2NpdHkgaXMgaW52ZXJ0ZWQgYmVjYXVzZSBzY3JvbGxpbmcgZ29lcyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuXG4gICAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1gsIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSk7XG4gICAgICAgIHR3ZWVuLnZhcnMuc2Nyb2xsWCA9IHNjcm9sbENsYW1wWChlbmRTY3JvbGwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsRnVuY1koKTtcbiAgICAgIGVuZFNjcm9sbCA9IGN1cnJlbnRTY3JvbGwgKyBkdXIgKiAwLjA1ICogLXNlbGYudmVsb2NpdHlZIC8gMC4yMjc7IC8vIHRoZSBjb25zdGFudCAuMjI3IGlzIGZyb20gcG93ZXI0KDAuMDUpXG5cbiAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1ksIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF92ZXJ0aWNhbCkpO1xuICAgICAgdHdlZW4udmFycy5zY3JvbGxZID0gc2Nyb2xsQ2xhbXBZKGVuZFNjcm9sbCk7XG4gICAgICB0d2Vlbi5pbnZhbGlkYXRlKCkuZHVyYXRpb24oZHVyKS5wbGF5KDAuMDEpO1xuXG4gICAgICBpZiAoX2ZpeElPU0J1ZyAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPj0gbWF4WSB8fCBjdXJyZW50U2Nyb2xsID49IG1heFkgLSAxKSB7XG4gICAgICAgIC8vIGlPUyBidWc6IGl0J2xsIHNob3cgdGhlIGFkZHJlc3MgYmFyIGJ1dCBOT1QgZmlyZSB0aGUgd2luZG93IFwicmVzaXplXCIgZXZlbnQgdW50aWwgdGhlIGFuaW1hdGlvbiBpcyBkb25lIGJ1dCB3ZSBtdXN0IHByb3RlY3QgYWdhaW5zdCBvdmVyc2hvb3Qgc28gd2UgbGV2ZXJhZ2UgYW4gb25VcGRhdGUgdG8gZG8gc28uXG4gICAgICAgIGdzYXAudG8oe30sIHtcbiAgICAgICAgICBvblVwZGF0ZTogb25SZXNpemUsXG4gICAgICAgICAgZHVyYXRpb246IGR1clxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbGVhc2UgJiYgb25SZWxlYXNlKHNlbGYpO1xuICB9O1xuXG4gIHZhcnMub25XaGVlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0d2Vlbi5fdHMgJiYgdHdlZW4ucGF1c2UoKTtcblxuICAgIGlmIChfZ2V0VGltZSgpIC0gd2hlZWxSZWZyZXNoID4gMTAwMCkge1xuICAgICAgLy8gYWZ0ZXIgMSBzZWNvbmQsIHJlZnJlc2ggdGhlIGNsYW1wcyBvdGhlcndpc2UgdGhhdCdsbCBvbmx5IGhhcHBlbiB3aGVuIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIGlzIGNhbGxlZCBvciBmb3IgdG91Y2gtc2Nyb2xsaW5nLlxuICAgICAgbGFzdFJlZnJlc2hJRCA9IDA7XG4gICAgICB3aGVlbFJlZnJlc2ggPSBfZ2V0VGltZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXJzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHNlbGYsIGR4LCBkeSwgeEFycmF5LCB5QXJyYXkpIHtcbiAgICBfcmVmcmVzaElEICE9PSBsYXN0UmVmcmVzaElEICYmIHVwZGF0ZUNsYW1wcygpO1xuICAgIGR4ICYmIG5vcm1hbGl6ZVNjcm9sbFggJiYgc2Nyb2xsRnVuY1goc2Nyb2xsQ2xhbXBYKHhBcnJheVsyXSA9PT0gZHggPyBzdGFydFNjcm9sbFggKyAoc2VsZi5zdGFydFggLSBzZWxmLngpIDogc2Nyb2xsRnVuY1goKSArIGR4IC0geEFycmF5WzFdKSk7IC8vIGZvciBtb3JlIHByZWNpc2lvbiwgd2UgdHJhY2sgcG9pbnRlci90b3VjaCBtb3ZlbWVudCBmcm9tIHRoZSBzdGFydCwgb3RoZXJ3aXNlIGl0J2xsIGRyaWZ0LlxuXG4gICAgaWYgKGR5KSB7XG4gICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuICAgICAgdmFyIGlzVG91Y2ggPSB5QXJyYXlbMl0gPT09IGR5LFxuICAgICAgICAgIHkgPSBpc1RvdWNoID8gc3RhcnRTY3JvbGxZICsgc2VsZi5zdGFydFkgLSBzZWxmLnkgOiBzY3JvbGxGdW5jWSgpICsgZHkgLSB5QXJyYXlbMV0sXG4gICAgICAgICAgeUNsYW1wZWQgPSBzY3JvbGxDbGFtcFkoeSk7XG4gICAgICBpc1RvdWNoICYmIHkgIT09IHlDbGFtcGVkICYmIChzdGFydFNjcm9sbFkgKz0geUNsYW1wZWQgLSB5KTtcbiAgICAgIHNjcm9sbEZ1bmNZKHlDbGFtcGVkKTtcbiAgICB9XG5cbiAgICAoZHkgfHwgZHgpICYmIF91cGRhdGVBbGwoKTtcbiAgfTtcblxuICB2YXJzLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBub3JtYWxpemVTY3JvbGxYID8gZmFsc2UgOiBcInhcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoXCIsIG9uUmVzaXplKTtcblxuICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cbiAgICBpZiAoc2Nyb2xsRnVuY1kuc21vb3RoKSB7XG4gICAgICBzY3JvbGxGdW5jWS50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIjtcbiAgICAgIHNjcm9sbEZ1bmNZLnNtb290aCA9IHNjcm9sbEZ1bmNYLnNtb290aCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlucHV0T2JzZXJ2ZXIuZW5hYmxlKCk7XG4gIH07XG5cbiAgdmFycy5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2FsbG93TmF0aXZlUGFubmluZyh0YXJnZXQsIHRydWUpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF93aW4sIFwicmVzaXplXCIsIG9uUmVzaXplKTtcblxuICAgIFNjcm9sbFRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hcIiwgb25SZXNpemUpO1xuICAgIGlucHV0T2JzZXJ2ZXIua2lsbCgpO1xuICB9O1xuXG4gIHZhcnMubG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzICE9PSBmYWxzZTtcbiAgc2VsZiA9IG5ldyBPYnNlcnZlcih2YXJzKTtcbiAgc2VsZi5pT1MgPSBfZml4SU9TQnVnOyAvLyB1c2VkIGluIHRoZSBPYnNlcnZlciBnZXRDYWNoZWRTY3JvbGwoKSBmdW5jdGlvbiB0byB3b3JrIGFyb3VuZCBhbiBpT1MgYnVnIHRoYXQgd3JlYWtzIGhhdm9jIHdpdGggVG91Y2hFdmVudC5jbGllbnRZIGlmIHdlIGFsbG93IHNjcm9sbCB0byBnbyBhbGwgdGhlIHdheSBiYWNrIHRvIDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiAhc2Nyb2xsRnVuY1koKSAmJiBzY3JvbGxGdW5jWSgxKTsgLy8gaU9TIGJ1ZyBjYXVzZXMgZXZlbnQuY2xpZW50WSB2YWx1ZXMgdG8gZnJlYWsgb3V0ICh3aWxkbHkgaW5hY2N1cmF0ZSkgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBleGFjdGx5IDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiBnc2FwLnRpY2tlci5hZGQoX3Bhc3NUaHJvdWdoKTsgLy8gcHJldmVudCB0aGUgdGlja2VyIGZyb20gc2xlZXBpbmdcblxuICBvblN0b3BEZWxheWVkQ2FsbCA9IHNlbGYuX2RjO1xuICB0d2VlbiA9IGdzYXAudG8oc2VsZiwge1xuICAgIGVhc2U6IFwicG93ZXI0XCIsXG4gICAgcGF1c2VkOiB0cnVlLFxuICAgIHNjcm9sbFg6IG5vcm1hbGl6ZVNjcm9sbFggPyBcIis9MC4xXCIgOiBcIis9MFwiLFxuICAgIHNjcm9sbFk6IFwiKz0wLjFcIixcbiAgICBtb2RpZmllcnM6IHtcbiAgICAgIHNjcm9sbFk6IF9pbnRlcnJ1cHRpb25UcmFja2VyKHNjcm9sbEZ1bmNZLCBzY3JvbGxGdW5jWSgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0d2Vlbi5wYXVzZSgpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIG9uVXBkYXRlOiBfdXBkYXRlQWxsLFxuICAgIG9uQ29tcGxldGU6IG9uU3RvcERlbGF5ZWRDYWxsLnZhcnMub25Db21wbGV0ZVxuICB9KTsgLy8gd2UgbmVlZCB0aGUgbW9kaWZpZXIgdG8gc2Vuc2UgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBhbHRlcmVkIG91dHNpZGUgb2YgdGhlIG1vbWVudHVtIHR3ZWVuIChsaWtlIHdpdGggYSBzY3JvbGxUbyB0d2Vlbikgc28gd2UgY2FuIHBhdXNlKCkgaXQgdG8gcHJldmVudCBjb25mbGljdHMuXG5cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnNvcnQgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gX3RyaWdnZXJzLnNvcnQoZnVuYyB8fCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAoYS52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYgKyBhLnN0YXJ0IC0gKGIuc3RhcnQgKyAoYi52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYpO1xuICB9KTtcbn07XG5cblNjcm9sbFRyaWdnZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIodmFycyk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLm5vcm1hbGl6ZVNjcm9sbCA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIGlmICh0eXBlb2YgdmFycyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBfbm9ybWFsaXplcjtcbiAgfVxuXG4gIGlmICh2YXJzID09PSB0cnVlICYmIF9ub3JtYWxpemVyKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyLmVuYWJsZSgpO1xuICB9XG5cbiAgaWYgKHZhcnMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVyID0gdmFycyBpbnN0YW5jZW9mIE9ic2VydmVyID8gdmFycyA6IF9nZXRTY3JvbGxOb3JtYWxpemVyKHZhcnMpO1xuICBfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci50YXJnZXQgPT09IG5vcm1hbGl6ZXIudGFyZ2V0ICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgX2lzVmlld3BvcnQobm9ybWFsaXplci50YXJnZXQpICYmIChfbm9ybWFsaXplciA9IG5vcm1hbGl6ZXIpO1xuICByZXR1cm4gbm9ybWFsaXplcjtcbn07XG5cblNjcm9sbFRyaWdnZXIuY29yZSA9IHtcbiAgLy8gc21hbGxlciBmaWxlIHNpemUgd2F5IHRvIGxldmVyYWdlIGluIFNjcm9sbFNtb290aGVyIGFuZCBPYnNlcnZlclxuICBfZ2V0VmVsb2NpdHlQcm9wOiBfZ2V0VmVsb2NpdHlQcm9wLFxuICBfaW5wdXRPYnNlcnZlcjogX2lucHV0T2JzZXJ2ZXIsXG4gIF9zY3JvbGxlcnM6IF9zY3JvbGxlcnMsXG4gIF9wcm94aWVzOiBfcHJveGllcyxcbiAgYnJpZGdlOiB7XG4gICAgLy8gd2hlbiBub3JtYWxpemVTY3JvbGwgc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIChzcyA9IHNldFNjcm9sbClcbiAgICBzczogZnVuY3Rpb24gc3MoKSB7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgfHwgX2Rpc3BhdGNoKFwic2Nyb2xsU3RhcnRcIik7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgPSBfZ2V0VGltZSgpO1xuICAgIH0sXG4gICAgLy8gYSB3YXkgdG8gZ2V0IHRoZSBfcmVmcmVzaGluZyB2YWx1ZSBpbiBPYnNlcnZlclxuICAgIHJlZjogZnVuY3Rpb24gcmVmKCkge1xuICAgICAgcmV0dXJuIF9yZWZyZXNoaW5nO1xuICAgIH1cbiAgfVxufTtcbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCB7IFNjcm9sbFRyaWdnZXIgYXMgZGVmYXVsdCB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdiZjczMGM5NDljZDNjNzkyZDkxXCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJmcm9tIiwic2NhbGUiLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInNjcnViIiwibWFya2VycyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfY29yZUluaXR0ZWQiLCJfY2xhbXAiLCJfd2luIiwiX2RvYyIsIl9kb2NFbCIsIl9ib2R5IiwiX2lzVG91Y2giLCJfcG9pbnRlclR5cGUiLCJfcm9vdCIsIl9ub3JtYWxpemVyIiwiX2V2ZW50VHlwZXMiLCJfY29udGV4dCIsIl9nZXRHU0FQIiwiX3N0YXJ0dXAiLCJfb2JzZXJ2ZXJzIiwiX3Njcm9sbGVycyIsIl9wcm94aWVzIiwiX2dldFRpbWUiLCJEYXRlIiwibm93IiwiX2JyaWRnZSIsIm5hbWUiLCJ2YWx1ZSIsIl9pbnRlZ3JhdGUiLCJjb3JlIiwiZGF0YSIsImJyaWRnZSIsInNjcm9sbGVycyIsInByb3hpZXMiLCJwdXNoIiwiYXBwbHkiLCJfZ2V0UHJveHlQcm9wIiwicHJvcGVydHkiLCJpbmRleE9mIiwiX2lzVmlld3BvcnQiLCJlbCIsIl9hZGRMaXN0ZW5lciIsInR5cGUiLCJmdW5jIiwibm9uUGFzc2l2ZSIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIl9yZW1vdmVMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2Nyb2xsTGVmdCIsIl9zY3JvbGxUb3AiLCJfb25TY3JvbGwiLCJpc1ByZXNzZWQiLCJjYWNoZSIsIl9zY3JvbGxDYWNoZUZ1bmMiLCJmIiwiZG9Ob3RDYWNoZSIsImNhY2hpbmdGdW5jIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwiaXNOb3JtYWxpemluZyIsInYiLCJNYXRoIiwicm91bmQiLCJpT1MiLCJjYWNoZUlEIiwib2Zmc2V0IiwiX2hvcml6b250YWwiLCJzIiwicCIsInAyIiwib3MiLCJvczIiLCJkIiwiZDIiLCJhIiwic2MiLCJhcmd1bWVudHMiLCJzY3JvbGxUbyIsIl92ZXJ0aWNhbCIsInBhZ2VYT2Zmc2V0Iiwib3AiLCJwYWdlWU9mZnNldCIsIl9nZXRUYXJnZXQiLCJ0Iiwic2VsZiIsIl9jdHgiLCJzZWxlY3RvciIsInV0aWxzIiwidG9BcnJheSIsImNvbmZpZyIsIm51bGxUYXJnZXRXYXJuIiwid2FybiIsIl9nZXRTY3JvbGxGdW5jIiwiX3JlZiIsInNjcm9sbGluZ0VsZW1lbnQiLCJwcmV2Iiwic21vb3RoIiwiZ2V0UHJvcGVydHkiLCJfZ2V0VmVsb2NpdHlQcm9wIiwibWluVGltZVJlZnJlc2giLCJ1c2VEZWx0YSIsInYxIiwidjIiLCJ0MSIsInQyIiwibWluIiwiZHJvcFRvWmVyb1RpbWUiLCJtYXgiLCJ1cGRhdGUiLCJmb3JjZSIsInJlc2V0IiwiZ2V0VmVsb2NpdHkiLCJsYXRlc3RWYWx1ZSIsInRPbGQiLCJ2T2xkIiwiX2dldEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2dzYXBBbGxvdyIsImNoYW5nZWRUb3VjaGVzIiwiX2dldEFic29sdXRlTWF4IiwiYWJzIiwiX3NldFNjcm9sbFRyaWdnZXIiLCJnbG9iYWxzIiwiX2luaXRDb3JlIiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhbXAiLCJjb250ZXh0IiwiT2JzZXJ2ZXIiLCJpc1RvdWNoIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1zTWF4VG91Y2hQb2ludHMiLCJldmVudFR5cGVzIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwidmFycyIsImluaXQiLCJfcHJvdG8iLCJ0b2xlcmFuY2UiLCJkcmFnTWluaW11bSIsImxpbmVIZWlnaHQiLCJkZWJvdW5jZSIsIm9uU3RvcCIsIm9uU3RvcERlbGF5IiwiaWdub3JlIiwid2hlZWxTcGVlZCIsImV2ZW50Iiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJvbkRyYWciLCJvblByZXNzIiwib25SZWxlYXNlIiwib25SaWdodCIsIm9uTGVmdCIsIm9uVXAiLCJvbkRvd24iLCJvbkNoYW5nZVgiLCJvbkNoYW5nZVkiLCJvbkNoYW5nZSIsIm9uVG9nZ2xlWCIsIm9uVG9nZ2xlWSIsIm9uSG92ZXIiLCJvbkhvdmVyRW5kIiwib25Nb3ZlIiwiaWdub3JlQ2hlY2siLCJpc05vcm1hbGl6ZXIiLCJvbkdlc3R1cmVTdGFydCIsIm9uR2VzdHVyZUVuZCIsIm9uV2hlZWwiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uQ2xpY2siLCJzY3JvbGxTcGVlZCIsImFsbG93Q2xpY2tzIiwibG9ja0F4aXMiLCJvbkxvY2tBeGlzIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJpZCIsIm9uU3RvcERlbGF5ZWRDYWxsIiwiZHJhZ2dlZCIsIm1vdmVkIiwid2hlZWxlZCIsImxvY2tlZCIsImF4aXMiLCJwcmV2RGVsdGFYIiwicHJldkRlbHRhWSIsInNjcm9sbEZ1bmNYIiwic2Nyb2xsRnVuY1kiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImxpbWl0VG9Ub3VjaCIsImlzVmlld3BvcnQiLCJvd25lckRvYyIsIm93bmVyRG9jdW1lbnQiLCJkZWx0YVgiLCJkZWx0YVkiLCJvbkNsaWNrVGltZSIsImNsaWNrQ2FwdHVyZSIsIl9pZ25vcmVDaGVjayIsImlzUG9pbnRlck9yVG91Y2giLCJwb2ludGVyVHlwZSIsIm9uU3RvcEZ1bmMiLCJfdngiLCJfdnkiLCJwYXVzZSIsImR4IiwiZHkiLCJjaGFuZ2VkWCIsImNoYW5nZWRZIiwib25EZWx0YSIsIngiLCJ5IiwiaW5kZXgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvblRvdWNoT3JQb2ludGVyRGVsdGEiLCJfb25EcmFnIiwiY2xpZW50WCIsImNsaWVudFkiLCJpc0RyYWdnaW5nIiwic3RhcnRYIiwic3RhcnRZIiwiX29uUHJlc3MiLCJidXR0b24iLCJfb25SZWxlYXNlIiwiaXNUcmFja2luZ0RyYWciLCJpc05hTiIsIndhc0RyYWdnaW5nIiwiZXZlbnREYXRhIiwiZGVsYXllZENhbGwiLCJkZWZhdWx0UHJldmVudGVkIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsInN5bnRoZXRpY0V2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImRpc3BhdGNoRXZlbnQiLCJpc0dlc3R1cmluZyIsInJlc3RhcnQiLCJfb25HZXN0dXJlU3RhcnQiLCJ0b3VjaGVzIiwiX29uR2VzdHVyZUVuZCIsIm9uU2Nyb2xsIiwiX29uV2hlZWwiLCJtdWx0aXBsaWVyIiwiZGVsdGFNb2RlIiwiaW5uZXJIZWlnaHQiLCJfb25Nb3ZlIiwiX29uSG92ZXIiLCJfb25Ib3ZlckVuZCIsIl9vbkNsaWNrIiwiX2RjIiwiZW5hYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZSIsImZpbHRlciIsIm8iLCJraWxsIiwicmV2ZXJ0Iiwic3BsaWNlIiwiZ2V0IiwidmVyc2lvbiIsImNyZWF0ZSIsInJlZ2lzdGVyIiwiZ2V0QWxsIiwic2xpY2UiLCJnZXRCeUlkIiwiZGVmYXVsdCIsIl9yZXNpemVEZWxheSIsIl90b0FycmF5IiwiX3RpbWUyIiwiX3N5bmNJbnRlcnZhbCIsIl9yZWZyZXNoaW5nIiwiX3BvaW50ZXJJc0Rvd24iLCJfdHJhbnNmb3JtUHJvcCIsIl9pIiwiX3ByZXZXaWR0aCIsIl9wcmV2SGVpZ2h0IiwiX2F1dG9SZWZyZXNoIiwiX3NvcnQiLCJfc3VwcHJlc3NPdmVyd3JpdGVzIiwiX2lnbm9yZVJlc2l6ZSIsIl9pZ25vcmVNb2JpbGVSZXNpemUiLCJfYmFzZVNjcmVlbkhlaWdodCIsIl9iYXNlU2NyZWVuV2lkdGgiLCJfZml4SU9TQnVnIiwiX3Njcm9sbFJlc3RvcmF0aW9uIiwiX2RpdjEwMHZoIiwiXzEwMHZoIiwiX2xpbWl0Q2FsbGJhY2tzIiwiX3RpbWUxIiwiX2xhc3RTY3JvbGxUaW1lIiwiX2VuYWJsZWQiLCJfcGFyc2VDbGFtcCIsIl9pc1N0cmluZyIsInN1YnN0ciIsIl9rZWVwQ2xhbXAiLCJfcmFmQnVnRml4IiwiX3BvaW50ZXJEb3duSGFuZGxlciIsIl9wb2ludGVyVXBIYW5kbGVyIiwiX3Bhc3NUaHJvdWdoIiwiX3JvdW5kIiwiX3dpbmRvd0V4aXN0cyIsIl9nZXRWaWV3cG9ydERpbWVuc2lvbiIsImRpbWVuc2lvblByb3BlcnR5IiwiX2dldEJvdW5kc0Z1bmMiLCJfd2luT2Zmc2V0cyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsIl9nZXRCb3VuZHMiLCJfZ2V0U2l6ZUZ1bmMiLCJzY3JvbGxlciIsIl9nZXRPZmZzZXRzRnVuYyIsIl9tYXhTY3JvbGwiLCJfcmVmMiIsIl9pdGVyYXRlQXV0b1JlZnJlc2giLCJldmVudHMiLCJfaXNGdW5jdGlvbiIsIl9pc051bWJlciIsIl9pc09iamVjdCIsIl9lbmRBbmltYXRpb24iLCJhbmltYXRpb24iLCJyZXZlcnNlZCIsInByb2dyZXNzIiwiX2NhbGxiYWNrIiwiZW5hYmxlZCIsInJlc3VsdCIsInRvdGFsVGltZSIsImNhbGxiYWNrQW5pbWF0aW9uIiwiX2FicyIsIl9sZWZ0IiwiX3RvcCIsIl9yaWdodCIsIl9ib3R0b20iLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX1JpZ2h0IiwiX0xlZnQiLCJfVG9wIiwiX0JvdHRvbSIsIl9wYWRkaW5nIiwiX21hcmdpbiIsIl9XaWR0aCIsIl9IZWlnaHQiLCJfcHgiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIl9tYWtlUG9zaXRpb25hYmxlIiwicG9zaXRpb24iLCJzdHlsZSIsIl9zZXREZWZhdWx0cyIsIm9iaiIsImRlZmF1bHRzIiwid2l0aG91dFRyYW5zZm9ybXMiLCJ0d2VlbiIsInRvIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsInJvdGF0aW9uIiwicm90YXRpb25YIiwicm90YXRpb25ZIiwic2tld1giLCJza2V3WSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIl9nZXRTaXplIiwiX3JlZjMiLCJfZ2V0TGFiZWxSYXRpb0FycmF5IiwidGltZWxpbmUiLCJsYWJlbHMiLCJfZ2V0Q2xvc2VzdExhYmVsIiwic25hcCIsIl9zbmFwRGlyZWN0aW9uYWwiLCJzbmFwSW5jcmVtZW50T3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsInNvcnQiLCJiIiwiZGlyZWN0aW9uIiwidGhyZXNob2xkIiwic25hcHBlZCIsIl9nZXRMYWJlbEF0RGlyZWN0aW9uIiwic3QiLCJfbXVsdGlMaXN0ZW5lciIsInR5cGVzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiX3doZWVsTGlzdGVuZXIiLCJzY3JvbGxGdW5jIiwid2hlZWxIYW5kbGVyIiwiX21hcmtlckRlZmF1bHRzIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwiaW5kZW50IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiX2RlZmF1bHRzIiwidG9nZ2xlQWN0aW9ucyIsImFudGljaXBhdGVQaW4iLCJfa2V5d29yZHMiLCJ0b3AiLCJsZWZ0IiwiY2VudGVyIiwiYm90dG9tIiwicmlnaHQiLCJfb2Zmc2V0VG9QeCIsInNpemUiLCJlcUluZGV4IiwicmVsYXRpdmUiLCJjaGFyQXQiLCJfY3JlYXRlTWFya2VyIiwiY29udGFpbmVyIiwiX3JlZjQiLCJtYXRjaFdpZHRoRWwiLCJjb250YWluZXJBbmltYXRpb24iLCJjcmVhdGVFbGVtZW50IiwidXNlRml4ZWRQb3NpdGlvbiIsImlzU2Nyb2xsZXIiLCJwYXJlbnQiLCJpc1N0YXJ0IiwiY29sb3IiLCJjc3MiLCJvZmZzZXRXaWR0aCIsIl9pc1N0YXJ0Iiwic2V0QXR0cmlidXRlIiwiY3NzVGV4dCIsImlubmVyVGV4dCIsImNoaWxkcmVuIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJfb2Zmc2V0IiwiX3Bvc2l0aW9uTWFya2VyIiwibWFya2VyIiwic3RhcnQiLCJmbGlwcGVkIiwiZGlzcGxheSIsInNpZGUiLCJvcHBvc2l0ZVNpZGUiLCJfaXNGbGlwcGVkIiwic2V0IiwiX3RyaWdnZXJzIiwiX2lkcyIsIl9yYWZJRCIsIl9zeW5jIiwiX3VwZGF0ZUFsbCIsImNsaWVudFdpZHRoIiwiX2Rpc3BhdGNoIiwiX3NldEJhc2VEaW1lbnNpb25zIiwiX29uUmVzaXplIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIl9saXN0ZW5lcnMiLCJfZW1wdHlBcnJheSIsIl9zb2Z0UmVmcmVzaCIsIl9yZWZyZXNoQWxsIiwibWFwIiwiX3NhdmVkU3R5bGVzIiwiX3JldmVydFJlY29yZGVkIiwibWVkaWEiLCJxdWVyeSIsImdldEJCb3giLCJ1bmNhY2hlIiwiX3JldmVydEFsbCIsIl9jbGVhclNjcm9sbE1lbW9yeSIsIl9yZWZyZXNoaW5nQWxsIiwicmVjIiwiX3JlZnJlc2hJRCIsIl9xdWV1ZVJlZnJlc2hJRCIsIl9xdWV1ZVJlZnJlc2hBbGwiLCJfcmVmcmVzaDEwMHZoIiwib2Zmc2V0SGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJza2lwUmV2ZXJ0IiwiaXNSZWZyZXNoaW5nIiwicmVmcmVzaEluaXRzIiwic2Nyb2xsQmVoYXZpb3IiLCJyZWZyZXNoIiwiX3N1YlBpbk9mZnNldCIsInBpbiIsInByb3AiLCJob3Jpem9udGFsIiwib3JpZ2luYWwiLCJhZGp1c3RQaW5TcGFjaW5nIiwiX2RpciIsImVuZCIsIl9lbmRDbGFtcCIsInNldFBvc2l0aW9ucyIsInJlbmRlciIsIm9uUmVmcmVzaCIsIl9sYXN0U2Nyb2xsIiwiX2RpcmVjdGlvbiIsIl9wcmltYXJ5IiwiaXNVcGRhdGluZyIsImwiLCJ0aW1lIiwicmVjb3JkVmVsb2NpdHkiLCJzY3JvbGwiLCJfcHJvcE5hbWVzVG9Db3B5IiwiX3N0YXRlUHJvcHMiLCJjb25jYXQiLCJfc3dhcFBpbk91dCIsInNwYWNlciIsInN0YXRlIiwiX3NldFN0YXRlIiwiX2dzYXAiLCJzcGFjZXJJc05hdGl2ZSIsInNwYWNlclN0YXRlIiwic3dhcHBlZEluIiwicGFyZW50Tm9kZSIsIl9zd2FwUGluSW4iLCJjcyIsInNwYWNlclN0eWxlIiwicGluU3R5bGUiLCJmbGV4QmFzaXMiLCJvdmVyZmxvdyIsImJveFNpemluZyIsIl9jYXBzRXhwIiwiZ2V0Q2FjaGUiLCJyZW1vdmVQcm9wZXJ0eSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIl9nZXRTdGF0ZSIsIl9jb3B5U3RhdGUiLCJvdmVycmlkZSIsIm9taXRPZmZzZXRzIiwiX3BhcnNlUG9zaXRpb24iLCJzY3JvbGxlclNpemUiLCJtYXJrZXJTY3JvbGxlciIsInNjcm9sbGVyQm91bmRzIiwiYm9yZGVyV2lkdGgiLCJzY3JvbGxlck1heCIsImNsYW1wWmVyb1Byb3AiLCJwMSIsInNlZWsiLCJvZmZzZXRzIiwibG9jYWxPZmZzZXQiLCJnbG9iYWxPZmZzZXQiLCJtYXBSYW5nZSIsIm0iLCJfY2FTY3JvbGxEaXN0IiwiX3ByZWZpeEV4cCIsIl9yZXBhcmVudCIsIl9zdE9yaWciLCJ0ZXN0IiwiX2ludGVycnVwdGlvblRyYWNrZXIiLCJnZXRWYWx1ZUZ1bmMiLCJpbml0aWFsVmFsdWUiLCJvbkludGVycnVwdCIsImxhc3QxIiwibGFzdDIiLCJjdXJyZW50IiwiX3NoaWZ0TWFya2VyIiwiX2dldFR3ZWVuQ3JlYXRvciIsImdldFNjcm9sbCIsImdldFR3ZWVuIiwiY2hhbmdlMSIsImNoYW5nZTIiLCJvbkNvbXBsZXRlIiwibW9kaWZpZXJzIiwiY2hlY2tGb3JJbnRlcnJ1cHRpb24iLCJyYXRpbyIsIm9uVXBkYXRlIiwiY2FsbCIsIm5vZGVUeXBlIiwiX3ZhcnMiLCJ0b2dnbGVDbGFzcyIsIm9uVG9nZ2xlIiwicGluU3BhY2luZyIsImludmFsaWRhdGVPblJlZnJlc2giLCJvblNjcnViQ29tcGxldGUiLCJvblNuYXBDb21wbGV0ZSIsIm9uY2UiLCJwaW5SZXBhcmVudCIsInBpblNwYWNlciIsImZhc3RTY3JvbGxFbmQiLCJwcmV2ZW50T3ZlcmxhcHMiLCJpc1RvZ2dsZSIsInNjcm9sbGVyQ2FjaGUiLCJwaW5UeXBlIiwiY2FsbGJhY2tzIiwib25FbnRlciIsIm9uTGVhdmUiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwib25SZWZyZXNoSW5pdCIsImdldFNjcm9sbGVyU2l6ZSIsImdldFNjcm9sbGVyT2Zmc2V0cyIsImxhc3RTbmFwIiwibGFzdFJlZnJlc2giLCJwcmV2UHJvZ3Jlc3MiLCJ0d2VlblRvIiwicGluQ2FjaGUiLCJzbmFwRnVuYyIsInNjcm9sbDEiLCJzY3JvbGwyIiwibWFya2VyU3RhcnQiLCJtYXJrZXJFbmQiLCJtYXJrZXJTdGFydFRyaWdnZXIiLCJtYXJrZXJFbmRUcmlnZ2VyIiwibWFya2VyVmFycyIsImV4ZWN1dGluZ09uUmVmcmVzaCIsImNoYW5nZSIsInBpbk9yaWdpbmFsU3RhdGUiLCJwaW5BY3RpdmVTdGF0ZSIsInBpblN0YXRlIiwicGluR2V0dGVyIiwicGluU2V0dGVyIiwicGluU3RhcnQiLCJwaW5DaGFuZ2UiLCJzcGFjaW5nU3RhcnQiLCJtYXJrZXJTdGFydFNldHRlciIsInBpbk1vdmVzIiwibWFya2VyRW5kU2V0dGVyIiwic25hcDEiLCJzbmFwMiIsInNjcnViVHdlZW4iLCJzY3J1YlNtb290aCIsInNuYXBEdXJDbGFtcCIsInNuYXBEZWxheWVkQ2FsbCIsInByZXZTY3JvbGwiLCJwcmV2QW5pbVByb2dyZXNzIiwiY2FNYXJrZXJTZXR0ZXIiLCJjdXN0b21SZXZlcnRSZXR1cm4iLCJfc3RhcnRDbGFtcCIsImJpbmQiLCJyZWZyZXNoUHJpb3JpdHkiLCJ0d2VlblNjcm9sbCIsInNjcnViRHVyYXRpb24iLCJ0b3RhbFByb2dyZXNzIiwicGF1c2VkIiwibGF6eSIsIl9pbml0dGVkIiwiaXNSZXZlcnRlZCIsImltbWVkaWF0ZVJlbmRlciIsInNuYXBUbyIsImRpcmVjdGlvbmFsIiwiZGVsYXkiLCJyZWZyZXNoZWRSZWNlbnRseSIsInZlbG9jaXR5IiwibmF0dXJhbEVuZCIsImluZXJ0aWEiLCJlbmRWYWx1ZSIsImVuZFNjcm9sbCIsIl9zbmFwIiwib25TdGFydCIsIl9vbkludGVycnVwdCIsIl9vbkNvbXBsZXRlIiwiaXNBY3RpdmUiLCJzdFJldmVydCIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJuYXRpdmVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yY2UzRCIsInF1aWNrU2V0dGVyIiwiY29udGVudCIsIm9sZE9uVXBkYXRlIiwib2xkUGFyYW1zIiwib25VcGRhdGVQYXJhbXMiLCJldmVudENhbGxiYWNrIiwicHJldmlvdXMiLCJuZXh0IiwidGVtcCIsInIiLCJwcmV2UmVmcmVzaGluZyIsInNvZnQiLCJwaW5PZmZzZXQiLCJpbnZhbGlkYXRlIiwiaXNGaXJzdFJlZnJlc2giLCJvdGhlclBpbk9mZnNldCIsInBhcnNlZEVuZCIsInBhcnNlZEVuZFRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwicGFyc2VkU3RhcnQiLCJwaW5uZWRDb250YWluZXIiLCJ0cmlnZ2VySW5kZXgiLCJpc1ZlcnRpY2FsIiwiY3VyVHJpZ2dlciIsImN1clBpbiIsIm9wcG9zaXRlU2Nyb2xsIiwiaW5pdHRlZCIsInJldmVydGVkUGlucyIsImZvcmNlZE92ZXJmbG93IiwibWFya2VyU3RhcnRPZmZzZXQiLCJtYXJrZXJFbmRPZmZzZXQiLCJ1bnNoaWZ0IiwiX3BpblB1c2giLCJub3JtYWxpemUiLCJ0b1VwcGVyQ2FzZSIsImNlaWwiLCJfcGluT2Zmc2V0IiwiZW5kQW5pbWF0aW9uIiwibGFiZWxUb1Njcm9sbCIsImxhYmVsIiwiZ2V0VHJhaWxpbmciLCJyZXZlcnNlIiwiZm9yY2VGYWtlIiwiY2xpcHBlZCIsIndhc0FjdGl2ZSIsInRvZ2dsZVN0YXRlIiwiYWN0aW9uIiwic3RhdGVDaGFuZ2VkIiwidG9nZ2xlZCIsImlzQXRNYXgiLCJpc1Rha2luZ0FjdGlvbiIsIl9kcCIsIl90aW1lIiwiX3N0YXJ0IiwicmVzZXRUbyIsIl90VGltZSIsIl90RHVyIiwibiIsIm5ld1N0YXJ0IiwibmV3RW5kIiwia2VlcENsYW1wIiwiX2NoYW5nZSIsImFtb3VudCIsImFsbG93QW5pbWF0aW9uIiwib25LaWxsIiwidXBkYXRlRnVuYyIsImNsZWFySW50ZXJ2YWwiLCJzdXBwcmVzc092ZXJ3cml0ZXMiLCJ1c2VyQWdlbnQiLCJtbSIsImJvZHlTdHlsZSIsImJvcmRlciIsImJvcmRlclRvcFN0eWxlIiwiQW5pbWF0aW9uUHJvdG8iLCJzZXRJbnRlcnZhbCIsImNoZWNrUHJlZml4IiwidyIsImgiLCJoaWRkZW4iLCJsaW1pdENhbGxiYWNrcyIsIm1zIiwic3luY0ludGVydmFsIiwiaWdub3JlTW9iaWxlUmVzaXplIiwiYXV0b1JlZnJlc2hFdmVudHMiLCJzY3JvbGxlclByb3h5IiwiY2xlYXJNYXRjaE1lZGlhIiwiaXNJblZpZXdwb3J0IiwicG9zaXRpb25JblZpZXdwb3J0IiwicmVmZXJlbmNlUG9pbnQiLCJraWxsQWxsIiwiYWxsb3dMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzYXZlU3R5bGVzIiwiZ2V0QXR0cmlidXRlIiwic2FmZSIsImNsZWFyU2Nyb2xsTWVtb3J5IiwibWF4U2Nyb2xsIiwiZ2V0U2Nyb2xsRnVuYyIsImlzU2Nyb2xsaW5nIiwic25hcERpcmVjdGlvbmFsIiwiYmF0Y2giLCJ2YXJzQ29weSIsImludGVydmFsIiwiYmF0Y2hNYXgiLCJwcm94eUNhbGxiYWNrIiwiZWxlbWVudHMiLCJ0cmlnZ2VycyIsIl9jbGFtcFNjcm9sbEFuZEdldER1cmF0aW9uTXVsdGlwbGllciIsIl9hbGxvd05hdGl2ZVBhbm5pbmciLCJ0b3VjaEFjdGlvbiIsIl9vdmVyZmxvdyIsImF1dG8iLCJfbmVzdGVkU2Nyb2xsIiwiX3JlZjUiLCJub2RlIiwiX2lzU2Nyb2xsVCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFdpZHRoIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiX2lzU2Nyb2xsIiwic3RvcFByb3BhZ2F0aW9uIiwiX2lucHV0T2JzZXJ2ZXIiLCJpbnB1dHMiLCJuZXN0ZWQiLCJfY2FwdHVyZUlucHV0cyIsIl9pbnB1dEV4cCIsIl9pbnB1dElzRm9jdXNlZCIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiX2dldFNjcm9sbE5vcm1hbGl6ZXIiLCJfdmFyczIiLCJub3JtYWxpemVTY3JvbGxYIiwibW9tZW50dW0iLCJhbGxvd05lc3RlZFNjcm9sbCIsIm1heFkiLCJzbW9vdGhlciIsIlNjcm9sbFNtb290aGVyIiwic21vb3RoZXJJbnN0YW5jZSIsImluaXRpYWxTY2FsZSIsInZpc3VhbFZpZXdwb3J0Iiwib3V0ZXJXaWR0aCIsIndoZWVsUmVmcmVzaCIsInJlc29sdmVNb21lbnR1bUR1cmF0aW9uIiwibGFzdFJlZnJlc2hJRCIsInNraXBUb3VjaE1vdmUiLCJpbnB1dE9ic2VydmVyIiwicmVzdW1lVG91Y2hNb3ZlIiwic2Nyb2xsQ2xhbXBYIiwic2Nyb2xsQ2xhbXBZIiwidXBkYXRlQ2xhbXBzIiwicmVtb3ZlQ29udGVudE9mZnNldCIsInRyYW5zZm9ybSIsImlnbm9yZURyYWciLCJzdGFydFNjcm9sbFgiLCJzdGFydFNjcm9sbFkiLCJvblJlc2l6ZSIsInByZXZTY2FsZSIsImR1ciIsImN1cnJlbnRTY3JvbGwiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJwbGF5IiwiX3RzIiwieEFycmF5IiwieUFycmF5IiwieUNsYW1wZWQiLCJ0aWNrZXIiLCJvYnNlcnZlIiwibm9ybWFsaXplU2Nyb2xsIiwibm9ybWFsaXplciIsInNzIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==