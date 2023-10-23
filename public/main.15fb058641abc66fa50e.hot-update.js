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
      ease: "power2.out",
      delay: 1
    });
    // gsap.from(this.images, {
    //   scrollTrigger: {
    //     trigger: this.element,
    //     scrub: true,
    //     markers: true
    //   },
    //   scale: 0.2
    // })
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
/******/ 	__webpack_require__.h = () => ("990472039afa7f1f7d47")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLElBQUk0akIsVUFBVSxHQUFHdnJCLElBQUksWUFBWVYsa0RBQVEsR0FBR1UsSUFBSSxHQUFHK29CLG9CQUFvQixDQUFDL29CLElBQUksQ0FBQztFQUM3RWhJLFdBQVcsSUFBSUEsV0FBVyxDQUFDekIsTUFBTSxLQUFLZzFCLFVBQVUsQ0FBQ2gxQixNQUFNLElBQUl5QixXQUFXLENBQUMyUCxJQUFJLENBQUMsQ0FBQztFQUM3RWxPLFdBQVcsQ0FBQzh4QixVQUFVLENBQUNoMUIsTUFBTSxDQUFDLEtBQUt5QixXQUFXLEdBQUd1ekIsVUFBVSxDQUFDO0VBQzVELE9BQU9BLFVBQVU7QUFDbkIsQ0FBQztBQUVEajJCLGFBQWEsQ0FBQ3lELElBQUksR0FBRztFQUNuQjtFQUNBdUUsZ0JBQWdCLEVBQUVBLDBEQUFnQjtFQUNsQ2lyQixjQUFjLEVBQUVBLGNBQWM7RUFDOUJqd0IsVUFBVSxFQUFFQSxvREFBVTtFQUN0QkMsUUFBUSxFQUFFQSxrREFBUTtFQUNsQlUsTUFBTSxFQUFFO0lBQ047SUFDQXV5QixFQUFFLEVBQUUsU0FBU0EsRUFBRUEsQ0FBQSxFQUFHO01BQ2hCM2hCLGVBQWUsSUFBSTJKLFNBQVMsQ0FBQyxhQUFhLENBQUM7TUFDM0MzSixlQUFlLEdBQUdyUixRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7SUFDQWl6QixHQUFHLEVBQUUsU0FBU0EsR0FBR0EsQ0FBQSxFQUFHO01BQ2xCLE9BQU8vaUIsV0FBVztJQUNwQjtFQUNGO0FBQ0YsQ0FBQztBQUNEdlEsUUFBUSxDQUFDLENBQUMsSUFBSTlDLElBQUksQ0FBQ0UsY0FBYyxDQUFDRCxhQUFhLENBQUM7Ozs7Ozs7OztVQzVpRmhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1NjYWxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZ3NhcC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2dzYXAvU2Nyb2xsVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCJcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5pbWFnZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpXVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VzLCBcIkVMRU1FTlRcIilcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nIElOXCIsIHRoaXMuZWxlbWVudClcbiAgICBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAgIHNjYWxlOiAwLjIsXG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCIsXG4gICAgICBkZWxheTogMVxuICAgIH0pXG4gICAgLy8gZ3NhcC5mcm9tKHRoaXMuaW1hZ2VzLCB7XG4gICAgLy8gICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgLy8gICAgIHRyaWdnZXI6IHRoaXMuZWxlbWVudCxcbiAgICAvLyAgICAgc2NydWI6IHRydWUsXG4gICAgLy8gICAgIG1hcmtlcnM6IHRydWVcbiAgICAvLyAgIH0sXG4gICAgLy8gICBzY2FsZTogMC4yXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgT1VUXCIpXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBPYnNlcnZlciAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2NsYW1wLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWwsXG4gICAgX2JvZHksXG4gICAgX2lzVG91Y2gsXG4gICAgX3BvaW50ZXJUeXBlLFxuICAgIFNjcm9sbFRyaWdnZXIsXG4gICAgX3Jvb3QsXG4gICAgX25vcm1hbGl6ZXIsXG4gICAgX2V2ZW50VHlwZXMsXG4gICAgX2NvbnRleHQsXG4gICAgX2dldEdTQVAgPSBmdW5jdGlvbiBfZ2V0R1NBUCgpIHtcbiAgcmV0dXJuIGdzYXAgfHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoZ3NhcCA9IHdpbmRvdy5nc2FwKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luICYmIGdzYXA7XG59LFxuICAgIF9zdGFydHVwID0gMSxcbiAgICBfb2JzZXJ2ZXJzID0gW10sXG4gICAgX3Njcm9sbGVycyA9IFtdLFxuICAgIF9wcm94aWVzID0gW10sXG4gICAgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICBfYnJpZGdlID0gZnVuY3Rpb24gX2JyaWRnZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59LFxuICAgIF9pbnRlZ3JhdGUgPSBmdW5jdGlvbiBfaW50ZWdyYXRlKCkge1xuICB2YXIgY29yZSA9IFNjcm9sbFRyaWdnZXIuY29yZSxcbiAgICAgIGRhdGEgPSBjb3JlLmJyaWRnZSB8fCB7fSxcbiAgICAgIHNjcm9sbGVycyA9IGNvcmUuX3Njcm9sbGVycyxcbiAgICAgIHByb3hpZXMgPSBjb3JlLl9wcm94aWVzO1xuICBzY3JvbGxlcnMucHVzaC5hcHBseShzY3JvbGxlcnMsIF9zY3JvbGxlcnMpO1xuICBwcm94aWVzLnB1c2guYXBwbHkocHJveGllcywgX3Byb3hpZXMpO1xuICBfc2Nyb2xsZXJzID0gc2Nyb2xsZXJzO1xuICBfcHJveGllcyA9IHByb3hpZXM7XG5cbiAgX2JyaWRnZSA9IGZ1bmN0aW9uIF9icmlkZ2UobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZGF0YVtuYW1lXSh2YWx1ZSk7XG4gIH07XG59LFxuICAgIF9nZXRQcm94eVByb3AgPSBmdW5jdGlvbiBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHJldHVybiB+X3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSAmJiBfcHJveGllc1tfcHJveGllcy5pbmRleE9mKGVsZW1lbnQpICsgMV1bcHJvcGVydHldO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGVsKSB7XG4gIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGVsKTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF9zY3JvbGxMZWZ0ID0gXCJzY3JvbGxMZWZ0XCIsXG4gICAgX3Njcm9sbFRvcCA9IFwic2Nyb2xsVG9wXCIsXG4gICAgX29uU2Nyb2xsID0gZnVuY3Rpb24gX29uU2Nyb2xsKCkge1xuICByZXR1cm4gX25vcm1hbGl6ZXIgJiYgX25vcm1hbGl6ZXIuaXNQcmVzc2VkIHx8IF9zY3JvbGxlcnMuY2FjaGUrKztcbn0sXG4gICAgX3Njcm9sbENhY2hlRnVuYyA9IGZ1bmN0aW9uIF9zY3JvbGxDYWNoZUZ1bmMoZiwgZG9Ob3RDYWNoZSkge1xuICB2YXIgY2FjaGluZ0Z1bmMgPSBmdW5jdGlvbiBjYWNoaW5nRnVuYyh2YWx1ZSkge1xuICAgIC8vIHNpbmNlIHJlYWRpbmcgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0L3BhZ2VPZmZzZXRZL3BhZ2VPZmZzZXRYIGNhbiB0cmlnZ2VyIGEgbGF5b3V0LCB0aGlzIGZ1bmN0aW9uIGFsbG93cyB1cyB0byBjYWNoZSB0aGUgdmFsdWUgc28gaXQgb25seSBnZXRzIHJlYWQgZnJlc2ggYWZ0ZXIgYSBcInNjcm9sbFwiIGV2ZW50IGZpcmVzIChvciB3aGlsZSB3ZSdyZSByZWZyZXNoaW5nIGJlY2F1c2UgdGhhdCBjYW4gbGVuZ3RoZW4gdGhlIHBhZ2UgYW5kIGFsdGVyIHRoZSBzY3JvbGwgcG9zaXRpb24pLiB3aGVuIFwic29mdFwiIGlzIHRydWUsIHRoYXQgbWVhbnMgZG9uJ3QgYWN0dWFsbHkgc2V0IHRoZSBzY3JvbGwsIGJ1dCBjYWNoZSB0aGUgbmV3IHZhbHVlIGluc3RlYWQgKHVzZWZ1bCBpbiBTY3JvbGxTbW9vdGhlcilcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIF9zdGFydHVwICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiKTsgLy8gb3RoZXJ3aXNlIHRoZSBuZXcgcG9zaXRpb24gd2lsbCBnZXQgb3ZlcndyaXR0ZW4gYnkgdGhlIGJyb3dzZXIgb25sb2FkLlxuXG4gICAgICB2YXIgaXNOb3JtYWxpemluZyA9IF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmlzUHJlc3NlZDtcbiAgICAgIHZhbHVlID0gY2FjaGluZ0Z1bmMudiA9IE1hdGgucm91bmQodmFsdWUpIHx8IChfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci5pT1MgPyAxIDogMCk7IC8vVE9ETzogaU9TIEJ1ZzogaWYgeW91IGFsbG93IGl0IHRvIGdvIHRvIDAsIFNhZmFyaSBjYW4gc3RhcnQgdG8gcmVwb3J0IHN1cGVyIHN0cmFuZ2UgKHdpbGRseSBpbmFjY3VyYXRlKSB0b3VjaCBwb3NpdGlvbnMhXG5cbiAgICAgIGYodmFsdWUpO1xuICAgICAgY2FjaGluZ0Z1bmMuY2FjaGVJRCA9IF9zY3JvbGxlcnMuY2FjaGU7XG4gICAgICBpc05vcm1hbGl6aW5nICYmIF9icmlkZ2UoXCJzc1wiLCB2YWx1ZSk7IC8vIHNldCBzY3JvbGwgKG5vdGlmeSBTY3JvbGxUcmlnZ2VyIHNvIGl0IGNhbiBkaXNwYXRjaCBhIFwic2Nyb2xsU3RhcnRcIiBldmVudCBpZiBuZWNlc3NhcnlcbiAgICB9IGVsc2UgaWYgKGRvTm90Q2FjaGUgfHwgX3Njcm9sbGVycy5jYWNoZSAhPT0gY2FjaGluZ0Z1bmMuY2FjaGVJRCB8fCBfYnJpZGdlKFwicmVmXCIpKSB7XG4gICAgICBjYWNoaW5nRnVuYy5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcbiAgICAgIGNhY2hpbmdGdW5jLnYgPSBmKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hpbmdGdW5jLnYgKyBjYWNoaW5nRnVuYy5vZmZzZXQ7XG4gIH07XG5cbiAgY2FjaGluZ0Z1bmMub2Zmc2V0ID0gMDtcbiAgcmV0dXJuIGYgJiYgY2FjaGluZ0Z1bmM7XG59LFxuICAgIF9ob3Jpem9udGFsID0ge1xuICBzOiBfc2Nyb2xsTGVmdCxcbiAgcDogXCJsZWZ0XCIsXG4gIHAyOiBcIkxlZnRcIixcbiAgb3M6IFwicmlnaHRcIixcbiAgb3MyOiBcIlJpZ2h0XCIsXG4gIGQ6IFwid2lkdGhcIixcbiAgZDI6IFwiV2lkdGhcIixcbiAgYTogXCJ4XCIsXG4gIHNjOiBfc2Nyb2xsQ2FjaGVGdW5jKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyh2YWx1ZSwgX3ZlcnRpY2FsLnNjKCkpIDogX3dpbi5wYWdlWE9mZnNldCB8fCBfZG9jW19zY3JvbGxMZWZ0XSB8fCBfZG9jRWxbX3Njcm9sbExlZnRdIHx8IF9ib2R5W19zY3JvbGxMZWZ0XSB8fCAwO1xuICB9KVxufSxcbiAgICBfdmVydGljYWwgPSB7XG4gIHM6IF9zY3JvbGxUb3AsXG4gIHA6IFwidG9wXCIsXG4gIHAyOiBcIlRvcFwiLFxuICBvczogXCJib3R0b21cIixcbiAgb3MyOiBcIkJvdHRvbVwiLFxuICBkOiBcImhlaWdodFwiLFxuICBkMjogXCJIZWlnaHRcIixcbiAgYTogXCJ5XCIsXG4gIG9wOiBfaG9yaXpvbnRhbCxcbiAgc2M6IF9zY3JvbGxDYWNoZUZ1bmMoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKF9ob3Jpem9udGFsLnNjKCksIHZhbHVlKSA6IF93aW4ucGFnZVlPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsVG9wXSB8fCBfZG9jRWxbX3Njcm9sbFRvcF0gfHwgX2JvZHlbX3Njcm9sbFRvcF0gfHwgMDtcbiAgfSlcbn0sXG4gICAgX2dldFRhcmdldCA9IGZ1bmN0aW9uIF9nZXRUYXJnZXQodCwgc2VsZikge1xuICByZXR1cm4gKHNlbGYgJiYgc2VsZi5fY3R4ICYmIHNlbGYuX2N0eC5zZWxlY3RvciB8fCBnc2FwLnV0aWxzLnRvQXJyYXkpKHQpWzBdIHx8ICh0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIiAmJiBnc2FwLmNvbmZpZygpLm51bGxUYXJnZXRXYXJuICE9PSBmYWxzZSA/IGNvbnNvbGUud2FybihcIkVsZW1lbnQgbm90IGZvdW5kOlwiLCB0KSA6IG51bGwpO1xufSxcbiAgICBfZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxGdW5jKGVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIHMgPSBfcmVmLnMsXG4gICAgICBzYyA9IF9yZWYuc2M7XG4gIC8vIHdlIHN0b3JlIHRoZSBzY3JvbGxlciBmdW5jdGlvbnMgaW4gYW4gYWx0ZXJuYXRpbmcgc2VxdWVuY2VkIEFycmF5IGxpa2UgW2VsZW1lbnQsIHZlcnRpY2FsU2Nyb2xsRnVuYywgaG9yaXpvbnRhbFNjcm9sbEZ1bmMsIC4uLl0gc28gdGhhdCB3ZSBjYW4gbWluaW1pemUgbWVtb3J5LCBtYXhpbWl6ZSBwZXJmb3JtYW5jZSwgYW5kIHdlIGFsc28gcmVjb3JkIHRoZSBsYXN0IHBvc2l0aW9uIGFzIGEgXCIucmVjXCIgcHJvcGVydHkgaW4gb3JkZXIgdG8gcmV2ZXJ0IHRvIHRoYXQgYWZ0ZXIgcmVmcmVzaGluZyB0byBlbnN1cmUgdGhpbmdzIGRvbid0IHNoaWZ0IGFyb3VuZC5cbiAgX2lzVmlld3BvcnQoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsKTtcblxuICB2YXIgaSA9IF9zY3JvbGxlcnMuaW5kZXhPZihlbGVtZW50KSxcbiAgICAgIG9mZnNldCA9IHNjID09PSBfdmVydGljYWwuc2MgPyAxIDogMjtcblxuICAhfmkgJiYgKGkgPSBfc2Nyb2xsZXJzLnB1c2goZWxlbWVudCkgLSAxKTtcbiAgX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSB8fCBfYWRkTGlzdGVuZXIoZWxlbWVudCwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTsgLy8gY2xlYXIgdGhlIGNhY2hlIHdoZW4gYSBzY3JvbGwgb2NjdXJzXG5cbiAgdmFyIHByZXYgPSBfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdLFxuICAgICAgZnVuYyA9IHByZXYgfHwgKF9zY3JvbGxlcnNbaSArIG9mZnNldF0gPSBfc2Nyb2xsQ2FjaGVGdW5jKF9nZXRQcm94eVByb3AoZWxlbWVudCwgcyksIHRydWUpIHx8IChfaXNWaWV3cG9ydChlbGVtZW50KSA/IHNjIDogX3Njcm9sbENhY2hlRnVuYyhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGVsZW1lbnRbc10gPSB2YWx1ZSA6IGVsZW1lbnRbc107XG4gIH0pKSk7XG4gIGZ1bmMudGFyZ2V0ID0gZWxlbWVudDtcbiAgcHJldiB8fCAoZnVuYy5zbW9vdGggPSBnc2FwLmdldFByb3BlcnR5KGVsZW1lbnQsIFwic2Nyb2xsQmVoYXZpb3JcIikgPT09IFwic21vb3RoXCIpOyAvLyBvbmx5IHNldCBpdCB0aGUgZmlyc3QgdGltZSAoZG9uJ3QgcmVzZXQgZXZlcnkgdGltZSBhIHNjcm9sbEZ1bmMgaXMgcmVxdWVzdGVkIGJlY2F1c2UgcGVyaGFwcyBpdCBoYXBwZW5zIGR1cmluZyBhIHJlZnJlc2goKSB3aGVuIGl0J3MgZGlzYWJsZWQgaW4gU2Nyb2xsVHJpZ2dlci5cblxuICByZXR1cm4gZnVuYztcbn0sXG4gICAgX2dldFZlbG9jaXR5UHJvcCA9IGZ1bmN0aW9uIF9nZXRWZWxvY2l0eVByb3AodmFsdWUsIG1pblRpbWVSZWZyZXNoLCB1c2VEZWx0YSkge1xuICB2YXIgdjEgPSB2YWx1ZSxcbiAgICAgIHYyID0gdmFsdWUsXG4gICAgICB0MSA9IF9nZXRUaW1lKCksXG4gICAgICB0MiA9IHQxLFxuICAgICAgbWluID0gbWluVGltZVJlZnJlc2ggfHwgNTAsXG4gICAgICBkcm9wVG9aZXJvVGltZSA9IE1hdGgubWF4KDUwMCwgbWluICogMyksXG4gICAgICB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodmFsdWUsIGZvcmNlKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGltZSgpO1xuXG4gICAgaWYgKGZvcmNlIHx8IHQgLSB0MSA+IG1pbikge1xuICAgICAgdjIgPSB2MTtcbiAgICAgIHYxID0gdmFsdWU7XG4gICAgICB0MiA9IHQxO1xuICAgICAgdDEgPSB0O1xuICAgIH0gZWxzZSBpZiAodXNlRGVsdGEpIHtcbiAgICAgIHYxICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3QgdG90YWxseSBuZWNlc3NhcnksIGJ1dCBtYWtlcyBpdCBhIGJpdCBtb3JlIGFjY3VyYXRlIGJ5IGFkanVzdGluZyB0aGUgdjEgdmFsdWUgYWNjb3JkaW5nIHRvIHRoZSBuZXcgc2xvcGUuIFRoaXMgd2F5IHdlJ3JlIG5vdCBqdXN0IGlnbm9yaW5nIHRoZSBpbmNvbWluZyBkYXRhLiBSZW1vdmluZyBmb3Igbm93IGJlY2F1c2UgaXQgZG9lc24ndCBzZWVtIHRvIG1ha2UgbXVjaCBwcmFjdGljYWwgZGlmZmVyZW5jZSBhbmQgaXQncyBwcm9iYWJseSBub3Qgd29ydGggdGhlIGtiLlxuICAgICAgdjEgPSB2MiArICh2YWx1ZSAtIHYyKSAvICh0IC0gdDIpICogKHQxIC0gdDIpO1xuICAgIH1cbiAgfSxcbiAgICAgIHJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdjIgPSB2MSA9IHVzZURlbHRhID8gMCA6IHYxO1xuICAgIHQyID0gdDEgPSAwO1xuICB9LFxuICAgICAgZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eShsYXRlc3RWYWx1ZSkge1xuICAgIHZhciB0T2xkID0gdDIsXG4gICAgICAgIHZPbGQgPSB2MixcbiAgICAgICAgdCA9IF9nZXRUaW1lKCk7XG5cbiAgICAobGF0ZXN0VmFsdWUgfHwgbGF0ZXN0VmFsdWUgPT09IDApICYmIGxhdGVzdFZhbHVlICE9PSB2MSAmJiB1cGRhdGUobGF0ZXN0VmFsdWUpO1xuICAgIHJldHVybiB0MSA9PT0gdDIgfHwgdCAtIHQyID4gZHJvcFRvWmVyb1RpbWUgPyAwIDogKHYxICsgKHVzZURlbHRhID8gdk9sZCA6IC12T2xkKSkgLyAoKHVzZURlbHRhID8gdCA6IHQxKSAtIHRPbGQpICogMTAwMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHJlc2V0OiByZXNldCxcbiAgICBnZXRWZWxvY2l0eTogZ2V0VmVsb2NpdHlcbiAgfTtcbn0sXG4gICAgX2dldEV2ZW50ID0gZnVuY3Rpb24gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KSB7XG4gIHByZXZlbnREZWZhdWx0ICYmICFlLl9nc2FwQWxsb3cgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xufSxcbiAgICBfZ2V0QWJzb2x1dGVNYXggPSBmdW5jdGlvbiBfZ2V0QWJzb2x1dGVNYXgoYSkge1xuICB2YXIgbWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYSksXG4gICAgICBtaW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCBhKTtcbiAgcmV0dXJuIE1hdGguYWJzKG1heCkgPj0gTWF0aC5hYnMobWluKSA/IG1heCA6IG1pbjtcbn0sXG4gICAgX3NldFNjcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2V0U2Nyb2xsVHJpZ2dlcigpIHtcbiAgU2Nyb2xsVHJpZ2dlciA9IGdzYXAuY29yZS5nbG9iYWxzKCkuU2Nyb2xsVHJpZ2dlcjtcbiAgU2Nyb2xsVHJpZ2dlciAmJiBTY3JvbGxUcmlnZ2VyLmNvcmUgJiYgX2ludGVncmF0ZSgpO1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoY29yZSkge1xuICBnc2FwID0gY29yZSB8fCBfZ2V0R1NBUCgpO1xuXG4gIGlmIChnc2FwICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gZG9jdW1lbnQ7XG4gICAgX2RvY0VsID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX2JvZHkgPSBfZG9jLmJvZHk7XG4gICAgX3Jvb3QgPSBbX3dpbiwgX2RvYywgX2RvY0VsLCBfYm9keV07XG4gICAgX2NsYW1wID0gZ3NhcC51dGlscy5jbGFtcDtcblxuICAgIF9jb250ZXh0ID0gZ3NhcC5jb3JlLmNvbnRleHQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBfcG9pbnRlclR5cGUgPSBcIm9ucG9pbnRlcmVudGVyXCIgaW4gX2JvZHkgPyBcInBvaW50ZXJcIiA6IFwibW91c2VcIjsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICBfaXNUb3VjaCA9IE9ic2VydmVyLmlzVG91Y2ggPSBfd2luLm1hdGNoTWVkaWEgJiYgX3dpbi5tYXRjaE1lZGlhKFwiKGhvdmVyOiBub25lKSwgKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcyA/IDEgOiBcIm9udG91Y2hzdGFydFwiIGluIF93aW4gfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDAgPyAyIDogMDtcbiAgICBfZXZlbnRUeXBlcyA9IE9ic2VydmVyLmV2ZW50VHlwZXMgPSAoXCJvbnRvdWNoc3RhcnRcIiBpbiBfZG9jRWwgPyBcInRvdWNoc3RhcnQsdG91Y2htb3ZlLHRvdWNoY2FuY2VsLHRvdWNoZW5kXCIgOiAhKFwib25wb2ludGVyZG93blwiIGluIF9kb2NFbCkgPyBcIm1vdXNlZG93bixtb3VzZW1vdmUsbW91c2V1cCxtb3VzZXVwXCIgOiBcInBvaW50ZXJkb3duLHBvaW50ZXJtb3ZlLHBvaW50ZXJjYW5jZWwscG9pbnRlcnVwXCIpLnNwbGl0KFwiLFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfc3RhcnR1cCA9IDA7XG4gICAgfSwgNTAwKTtcblxuICAgIF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG5cbiAgICBfY29yZUluaXR0ZWQgPSAxO1xuICB9XG5cbiAgcmV0dXJuIF9jb3JlSW5pdHRlZDtcbn07XG5cbl9ob3Jpem9udGFsLm9wID0gX3ZlcnRpY2FsO1xuX3Njcm9sbGVycy5jYWNoZSA9IDA7XG5leHBvcnQgdmFyIE9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2ZXIodmFycykge1xuICAgIHRoaXMuaW5pdCh2YXJzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KHZhcnMpIHtcbiAgICBfY29yZUluaXR0ZWQgfHwgX2luaXRDb3JlKGdzYXApIHx8IGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKE9ic2VydmVyKVwiKTtcbiAgICBTY3JvbGxUcmlnZ2VyIHx8IF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG4gICAgdmFyIHRvbGVyYW5jZSA9IHZhcnMudG9sZXJhbmNlLFxuICAgICAgICBkcmFnTWluaW11bSA9IHZhcnMuZHJhZ01pbmltdW0sXG4gICAgICAgIHR5cGUgPSB2YXJzLnR5cGUsXG4gICAgICAgIHRhcmdldCA9IHZhcnMudGFyZ2V0LFxuICAgICAgICBsaW5lSGVpZ2h0ID0gdmFycy5saW5lSGVpZ2h0LFxuICAgICAgICBkZWJvdW5jZSA9IHZhcnMuZGVib3VuY2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gdmFycy5wcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgb25TdG9wID0gdmFycy5vblN0b3AsXG4gICAgICAgIG9uU3RvcERlbGF5ID0gdmFycy5vblN0b3BEZWxheSxcbiAgICAgICAgaWdub3JlID0gdmFycy5pZ25vcmUsXG4gICAgICAgIHdoZWVsU3BlZWQgPSB2YXJzLndoZWVsU3BlZWQsXG4gICAgICAgIGV2ZW50ID0gdmFycy5ldmVudCxcbiAgICAgICAgb25EcmFnU3RhcnQgPSB2YXJzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWdFbmQgPSB2YXJzLm9uRHJhZ0VuZCxcbiAgICAgICAgb25EcmFnID0gdmFycy5vbkRyYWcsXG4gICAgICAgIG9uUHJlc3MgPSB2YXJzLm9uUHJlc3MsXG4gICAgICAgIG9uUmVsZWFzZSA9IHZhcnMub25SZWxlYXNlLFxuICAgICAgICBvblJpZ2h0ID0gdmFycy5vblJpZ2h0LFxuICAgICAgICBvbkxlZnQgPSB2YXJzLm9uTGVmdCxcbiAgICAgICAgb25VcCA9IHZhcnMub25VcCxcbiAgICAgICAgb25Eb3duID0gdmFycy5vbkRvd24sXG4gICAgICAgIG9uQ2hhbmdlWCA9IHZhcnMub25DaGFuZ2VYLFxuICAgICAgICBvbkNoYW5nZVkgPSB2YXJzLm9uQ2hhbmdlWSxcbiAgICAgICAgb25DaGFuZ2UgPSB2YXJzLm9uQ2hhbmdlLFxuICAgICAgICBvblRvZ2dsZVggPSB2YXJzLm9uVG9nZ2xlWCxcbiAgICAgICAgb25Ub2dnbGVZID0gdmFycy5vblRvZ2dsZVksXG4gICAgICAgIG9uSG92ZXIgPSB2YXJzLm9uSG92ZXIsXG4gICAgICAgIG9uSG92ZXJFbmQgPSB2YXJzLm9uSG92ZXJFbmQsXG4gICAgICAgIG9uTW92ZSA9IHZhcnMub25Nb3ZlLFxuICAgICAgICBpZ25vcmVDaGVjayA9IHZhcnMuaWdub3JlQ2hlY2ssXG4gICAgICAgIGlzTm9ybWFsaXplciA9IHZhcnMuaXNOb3JtYWxpemVyLFxuICAgICAgICBvbkdlc3R1cmVTdGFydCA9IHZhcnMub25HZXN0dXJlU3RhcnQsXG4gICAgICAgIG9uR2VzdHVyZUVuZCA9IHZhcnMub25HZXN0dXJlRW5kLFxuICAgICAgICBvbldoZWVsID0gdmFycy5vbldoZWVsLFxuICAgICAgICBvbkVuYWJsZSA9IHZhcnMub25FbmFibGUsXG4gICAgICAgIG9uRGlzYWJsZSA9IHZhcnMub25EaXNhYmxlLFxuICAgICAgICBvbkNsaWNrID0gdmFycy5vbkNsaWNrLFxuICAgICAgICBzY3JvbGxTcGVlZCA9IHZhcnMuc2Nyb2xsU3BlZWQsXG4gICAgICAgIGNhcHR1cmUgPSB2YXJzLmNhcHR1cmUsXG4gICAgICAgIGFsbG93Q2xpY2tzID0gdmFycy5hbGxvd0NsaWNrcyxcbiAgICAgICAgbG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzLFxuICAgICAgICBvbkxvY2tBeGlzID0gdmFycy5vbkxvY2tBeGlzO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ID0gX2dldFRhcmdldCh0YXJnZXQpIHx8IF9kb2NFbDtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIGlnbm9yZSAmJiAoaWdub3JlID0gZ3NhcC51dGlscy50b0FycmF5KGlnbm9yZSkpO1xuICAgIHRvbGVyYW5jZSA9IHRvbGVyYW5jZSB8fCAxZS05O1xuICAgIGRyYWdNaW5pbXVtID0gZHJhZ01pbmltdW0gfHwgMDtcbiAgICB3aGVlbFNwZWVkID0gd2hlZWxTcGVlZCB8fCAxO1xuICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgfHwgMTtcbiAgICB0eXBlID0gdHlwZSB8fCBcIndoZWVsLHRvdWNoLHBvaW50ZXJcIjtcbiAgICBkZWJvdW5jZSA9IGRlYm91bmNlICE9PSBmYWxzZTtcbiAgICBsaW5lSGVpZ2h0IHx8IChsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChfd2luLmdldENvbXB1dGVkU3R5bGUoX2JvZHkpLmxpbmVIZWlnaHQpIHx8IDIyKTsgLy8gbm90ZTogYnJvd3NlciBtYXkgcmVwb3J0IFwibm9ybWFsXCIsIHNvIGRlZmF1bHQgdG8gMjIuXG5cbiAgICB2YXIgaWQsXG4gICAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgICBkcmFnZ2VkLFxuICAgICAgICBtb3ZlZCxcbiAgICAgICAgd2hlZWxlZCxcbiAgICAgICAgbG9ja2VkLFxuICAgICAgICBheGlzLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgcHJldkRlbHRhWCA9IDAsXG4gICAgICAgIHByZXZEZWx0YVkgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jWCA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX2hvcml6b250YWwpLFxuICAgICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgICAgc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgIHNjcm9sbFkgPSBzY3JvbGxGdW5jWSgpLFxuICAgICAgICBsaW1pdFRvVG91Y2ggPSB+dHlwZS5pbmRleE9mKFwidG91Y2hcIikgJiYgIX50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpICYmIF9ldmVudFR5cGVzWzBdID09PSBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgIC8vIGZvciBkZXZpY2VzIHRoYXQgYWNjb21tb2RhdGUgbW91c2UgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMsIHdlIG5lZWQgdG8gZGlzdGluZ3Vpc2guXG4gICAgaXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHRhcmdldCksXG4gICAgICAgIG93bmVyRG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgX2RvYyxcbiAgICAgICAgZGVsdGFYID0gWzAsIDAsIDBdLFxuICAgICAgICAvLyB3aGVlbCwgc2Nyb2xsLCBwb2ludGVyL3RvdWNoXG4gICAgZGVsdGFZID0gWzAsIDAsIDBdLFxuICAgICAgICBvbkNsaWNrVGltZSA9IDAsXG4gICAgICAgIGNsaWNrQ2FwdHVyZSA9IGZ1bmN0aW9uIGNsaWNrQ2FwdHVyZSgpIHtcbiAgICAgIHJldHVybiBvbkNsaWNrVGltZSA9IF9nZXRUaW1lKCk7XG4gICAgfSxcbiAgICAgICAgX2lnbm9yZUNoZWNrID0gZnVuY3Rpb24gX2lnbm9yZUNoZWNrKGUsIGlzUG9pbnRlck9yVG91Y2gpIHtcbiAgICAgIHJldHVybiAoc2VsZi5ldmVudCA9IGUpICYmIGlnbm9yZSAmJiB+aWdub3JlLmluZGV4T2YoZS50YXJnZXQpIHx8IGlzUG9pbnRlck9yVG91Y2ggJiYgbGltaXRUb1RvdWNoICYmIGUucG9pbnRlclR5cGUgIT09IFwidG91Y2hcIiB8fCBpZ25vcmVDaGVjayAmJiBpZ25vcmVDaGVjayhlLCBpc1BvaW50ZXJPclRvdWNoKTtcbiAgICB9LFxuICAgICAgICBvblN0b3BGdW5jID0gZnVuY3Rpb24gb25TdG9wRnVuYygpIHtcbiAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBkeCA9IHNlbGYuZGVsdGFYID0gX2dldEFic29sdXRlTWF4KGRlbHRhWCksXG4gICAgICAgICAgZHkgPSBzZWxmLmRlbHRhWSA9IF9nZXRBYnNvbHV0ZU1heChkZWx0YVkpLFxuICAgICAgICAgIGNoYW5nZWRYID0gTWF0aC5hYnMoZHgpID49IHRvbGVyYW5jZSxcbiAgICAgICAgICBjaGFuZ2VkWSA9IE1hdGguYWJzKGR5KSA+PSB0b2xlcmFuY2U7XG5cbiAgICAgIG9uQ2hhbmdlICYmIChjaGFuZ2VkWCB8fCBjaGFuZ2VkWSkgJiYgb25DaGFuZ2Uoc2VsZiwgZHgsIGR5LCBkZWx0YVgsIGRlbHRhWSk7IC8vIGluIFNjcm9sbFRyaWdnZXIubm9ybWFsaXplU2Nyb2xsKCksIHdlIG5lZWQgdG8ga25vdyBpZiBpdCB3YXMgdG91Y2gvcG9pbnRlciBzbyB3ZSBuZWVkIGFjY2VzcyB0byB0aGUgZGVsdGFYL2RlbHRhWSBBcnJheXMgYmVmb3JlIHdlIGNsZWFyIHRoZW0gb3V0LlxuXG4gICAgICBpZiAoY2hhbmdlZFgpIHtcbiAgICAgICAgb25SaWdodCAmJiBzZWxmLmRlbHRhWCA+IDAgJiYgb25SaWdodChzZWxmKTtcbiAgICAgICAgb25MZWZ0ICYmIHNlbGYuZGVsdGFYIDwgMCAmJiBvbkxlZnQoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWCAmJiBvbkNoYW5nZVgoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWCAmJiBzZWxmLmRlbHRhWCA8IDAgIT09IHByZXZEZWx0YVggPCAwICYmIG9uVG9nZ2xlWChzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWCA9IHNlbGYuZGVsdGFYO1xuICAgICAgICBkZWx0YVhbMF0gPSBkZWx0YVhbMV0gPSBkZWx0YVhbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZFkpIHtcbiAgICAgICAgb25Eb3duICYmIHNlbGYuZGVsdGFZID4gMCAmJiBvbkRvd24oc2VsZik7XG4gICAgICAgIG9uVXAgJiYgc2VsZi5kZWx0YVkgPCAwICYmIG9uVXAoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWSAmJiBvbkNoYW5nZVkoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWSAmJiBzZWxmLmRlbHRhWSA8IDAgIT09IHByZXZEZWx0YVkgPCAwICYmIG9uVG9nZ2xlWShzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWSA9IHNlbGYuZGVsdGFZO1xuICAgICAgICBkZWx0YVlbMF0gPSBkZWx0YVlbMV0gPSBkZWx0YVlbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobW92ZWQgfHwgZHJhZ2dlZCkge1xuICAgICAgICBvbk1vdmUgJiYgb25Nb3ZlKHNlbGYpO1xuXG4gICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgb25EcmFnKHNlbGYpO1xuICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxvY2tlZCAmJiAhKGxvY2tlZCA9IGZhbHNlKSAmJiBvbkxvY2tBeGlzICYmIG9uTG9ja0F4aXMoc2VsZik7XG5cbiAgICAgIGlmICh3aGVlbGVkKSB7XG4gICAgICAgIG9uV2hlZWwoc2VsZik7XG4gICAgICAgIHdoZWVsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWQgPSAwO1xuICAgIH0sXG4gICAgICAgIG9uRGVsdGEgPSBmdW5jdGlvbiBvbkRlbHRhKHgsIHksIGluZGV4KSB7XG4gICAgICBkZWx0YVhbaW5kZXhdICs9IHg7XG4gICAgICBkZWx0YVlbaW5kZXhdICs9IHk7XG5cbiAgICAgIHNlbGYuX3Z4LnVwZGF0ZSh4KTtcblxuICAgICAgc2VsZi5fdnkudXBkYXRlKHkpO1xuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YSA9IGZ1bmN0aW9uIG9uVG91Y2hPclBvaW50ZXJEZWx0YSh4LCB5KSB7XG4gICAgICBpZiAobG9ja0F4aXMgJiYgIWF4aXMpIHtcbiAgICAgICAgc2VsZi5heGlzID0gYXhpcyA9IE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeSkgPyBcInhcIiA6IFwieVwiO1xuICAgICAgICBsb2NrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ5XCIpIHtcbiAgICAgICAgZGVsdGFYWzJdICs9IHg7XG5cbiAgICAgICAgc2VsZi5fdngudXBkYXRlKHgsIHRydWUpOyAvLyB1cGRhdGUgdGhlIHZlbG9jaXR5IGFzIGZyZXF1ZW50bHkgYXMgcG9zc2libGUgaW5zdGVhZCBvZiBpbiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHNvIHRoYXQgdmVyeSBxdWljayB0b3VjaC1zY3JvbGxzIChmbGlja3MpIGZlZWwgbmF0dXJhbC4gSWYgaXQncyB0aGUgbW91c2UvdG91Y2gvcG9pbnRlciwgZm9yY2UgaXQgc28gdGhhdCB3ZSBnZXQgc25hcHB5L2FjY3VyYXRlIG1vbWVudHVtIHNjcm9sbC5cblxuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ4XCIpIHtcbiAgICAgICAgZGVsdGFZWzJdICs9IHk7XG5cbiAgICAgICAgc2VsZi5fdnkudXBkYXRlKHksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIF9vbkRyYWcgPSBmdW5jdGlvbiBfb25EcmFnKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIHZhciB4ID0gZS5jbGllbnRYLFxuICAgICAgICAgIHkgPSBlLmNsaWVudFksXG4gICAgICAgICAgZHggPSB4IC0gc2VsZi54LFxuICAgICAgICAgIGR5ID0geSAtIHNlbGYueSxcbiAgICAgICAgICBpc0RyYWdnaW5nID0gc2VsZi5pc0RyYWdnaW5nO1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nIHx8IE1hdGguYWJzKHNlbGYuc3RhcnRYIC0geCkgPj0gZHJhZ01pbmltdW0gfHwgTWF0aC5hYnMoc2VsZi5zdGFydFkgLSB5KSA+PSBkcmFnTWluaW11bSkge1xuICAgICAgICBvbkRyYWcgJiYgKGRyYWdnZWQgPSB0cnVlKTtcbiAgICAgICAgaXNEcmFnZ2luZyB8fCAoc2VsZi5pc0RyYWdnaW5nID0gdHJ1ZSk7XG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgICAgICBpc0RyYWdnaW5nIHx8IG9uRHJhZ1N0YXJ0ICYmIG9uRHJhZ1N0YXJ0KHNlbGYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIF9vblByZXNzID0gc2VsZi5vblByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkgfHwgZSAmJiBlLmJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuYXhpcyA9IGF4aXMgPSBudWxsO1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucGF1c2UoKTtcbiAgICAgIHNlbGYuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGUgPSBfZ2V0RXZlbnQoZSk7IC8vIG5vdGU6IG1heSBuZWVkIHRvIHByZXZlbnREZWZhdWx0KD8pIFdvbid0IHNpZGUtc2Nyb2xsIG9uIGlPUyBTYWZhcmkgaWYgd2UgZG8sIHRob3VnaC5cblxuICAgICAgcHJldkRlbHRhWCA9IHByZXZEZWx0YVkgPSAwO1xuICAgICAgc2VsZi5zdGFydFggPSBzZWxmLnggPSBlLmNsaWVudFg7XG4gICAgICBzZWxmLnN0YXJ0WSA9IHNlbGYueSA9IGUuY2xpZW50WTtcblxuICAgICAgc2VsZi5fdngucmVzZXQoKTsgLy8gb3RoZXJ3aXNlIHRoZSB0MiBtYXkgYmUgc3RhbGUgaWYgdGhlIHVzZXIgdG91Y2hlcyBhbmQgZmxpY2tzIHN1cGVyIGZhc3QgYW5kIHJlbGVhc2VzIGluIGxlc3MgdGhhbiAyIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aWNrcywgY2F1c2luZyB2ZWxvY2l0eSB0byBiZSAwLlxuXG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIF9hZGRMaXN0ZW5lcihpc05vcm1hbGl6ZXIgPyB0YXJnZXQgOiBvd25lckRvYywgX2V2ZW50VHlwZXNbMV0sIF9vbkRyYWcsIHByZXZlbnREZWZhdWx0LCB0cnVlKTtcblxuICAgICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgICBvblByZXNzICYmIG9uUHJlc3Moc2VsZik7XG4gICAgfSxcbiAgICAgICAgX29uUmVsZWFzZSA9IHNlbGYub25SZWxlYXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNOb3JtYWxpemVyID8gdGFyZ2V0IDogb3duZXJEb2MsIF9ldmVudFR5cGVzWzFdLCBfb25EcmFnLCB0cnVlKTtcblxuICAgICAgdmFyIGlzVHJhY2tpbmdEcmFnID0gIWlzTmFOKHNlbGYueSAtIHNlbGYuc3RhcnRZKSxcbiAgICAgICAgICB3YXNEcmFnZ2luZyA9IHNlbGYuaXNEcmFnZ2luZyAmJiAoTWF0aC5hYnMoc2VsZi54IC0gc2VsZi5zdGFydFgpID4gMyB8fCBNYXRoLmFicyhzZWxmLnkgLSBzZWxmLnN0YXJ0WSkgPiAzKSxcbiAgICAgICAgICAvLyBzb21lIHRvdWNoIGRldmljZXMgbmVlZCBzb21lIHdpZ2dsZSByb29tIGluIHRlcm1zIG9mIHNlbnNpbmcgY2xpY2tzIC0gdGhlIGZpbmdlciBtYXkgbW92ZSBhIGZldyBwaXhlbHMuXG4gICAgICBldmVudERhdGEgPSBfZ2V0RXZlbnQoZSk7XG5cbiAgICAgIGlmICghd2FzRHJhZ2dpbmcgJiYgaXNUcmFja2luZ0RyYWcpIHtcbiAgICAgICAgc2VsZi5fdngucmVzZXQoKTtcblxuICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCAmJiBhbGxvd0NsaWNrcykge1xuICAgICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC4wOCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB3b24ndCB0cnVzdCBzY3JpcHQtZ2VuZXJhdGVkIGNsaWNrcywgc28gaWYgdGhlIHVzZXIgdHJpZXMgdG8gY2xpY2sgb24gYSB2aWRlbyB0byBwbGF5IGl0LCBmb3IgZXhhbXBsZSwgaXQgc2ltcGx5IHdvbid0IHdvcmsuIFNpbmNlIGEgcmVndWxhciBcImNsaWNrXCIgZXZlbnQgd2lsbCBtb3N0IGxpa2VseSBiZSBnZW5lcmF0ZWQgYW55d2F5IChvbmUgdGhhdCBoYXMgaXRzIGlzVHJ1c3RlZCBmbGFnIHNldCB0byB0cnVlKSwgd2UgbXVzdCBzbGlnaHRseSBkZWxheSBvdXIgc2NyaXB0LWdlbmVyYXRlZCBjbGljayBzbyB0aGF0IHRoZSBcInJlYWxcIi90cnVzdGVkIG9uZSBpcyBwcmlvcml0aXplZC4gUmVtZW1iZXIsIHdoZW4gdGhlcmUgYXJlIGR1cGxpY2F0ZSBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbiwgd2Ugc3VwcHJlc3MgYWxsIGJ1dCB0aGUgZmlyc3Qgb25lLiBTb21lIGJyb3dzZXJzIGRvbid0IGV2ZW4gdHJpZ2dlciB0aGUgXCJyZWFsXCIgb25lIGF0IGFsbCwgc28gb3VyIHN5bnRoZXRpYyBvbmUgaXMgYSBzYWZldHkgdmFsdmUgdGhhdCBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIHdoYXQsIGEgY2xpY2sgZXZlbnQgZG9lcyBnZXQgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgIGlmIChfZ2V0VGltZSgpIC0gb25DbGlja1RpbWUgPiAzMDAgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xpY2spIHtcbiAgICAgICAgICAgICAgICAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgbW9iaWxlIFNhZmFyaSkgZG9uJ3QgcHJvcGVybHkgdHJpZ2dlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG93bmVyRG9jLmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bnRoZXRpY0V2ZW50ID0gb3duZXJEb2MuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBzeW50aGV0aWNFdmVudC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUsIF93aW4sIDEsIGV2ZW50RGF0YS5zY3JlZW5YLCBldmVudERhdGEuc2NyZWVuWSwgZXZlbnREYXRhLmNsaWVudFgsIGV2ZW50RGF0YS5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChzeW50aGV0aWNFdmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmlzRHJhZ2dpbmcgPSBzZWxmLmlzR2VzdHVyaW5nID0gc2VsZi5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgIG9uU3RvcCAmJiAhaXNOb3JtYWxpemVyICYmIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICBvbkRyYWdFbmQgJiYgd2FzRHJhZ2dpbmcgJiYgb25EcmFnRW5kKHNlbGYpO1xuICAgICAgb25SZWxlYXNlICYmIG9uUmVsZWFzZShzZWxmLCB3YXNEcmFnZ2luZyk7XG4gICAgfSxcbiAgICAgICAgX29uR2VzdHVyZVN0YXJ0ID0gZnVuY3Rpb24gX29uR2VzdHVyZVN0YXJ0KGUpIHtcbiAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEgJiYgKHNlbGYuaXNHZXN0dXJpbmcgPSB0cnVlKSAmJiBvbkdlc3R1cmVTdGFydChlLCBzZWxmLmlzRHJhZ2dpbmcpO1xuICAgIH0sXG4gICAgICAgIF9vbkdlc3R1cmVFbmQgPSBmdW5jdGlvbiBfb25HZXN0dXJlRW5kKCkge1xuICAgICAgcmV0dXJuIChzZWxmLmlzR2VzdHVyaW5nID0gZmFsc2UpIHx8IG9uR2VzdHVyZUVuZChzZWxmKTtcbiAgICB9LFxuICAgICAgICBvblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgeCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgICAgeSA9IHNjcm9sbEZ1bmNZKCk7XG4gICAgICBvbkRlbHRhKCh4IC0gc2Nyb2xsWCkgKiBzY3JvbGxTcGVlZCwgKHkgLSBzY3JvbGxZKSAqIHNjcm9sbFNwZWVkLCAxKTtcbiAgICAgIHNjcm9sbFggPSB4O1xuICAgICAgc2Nyb2xsWSA9IHk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25XaGVlbCA9IGZ1bmN0aW9uIF9vbldoZWVsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIG9uV2hlZWwgJiYgKHdoZWVsZWQgPSB0cnVlKTtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gKGUuZGVsdGFNb2RlID09PSAxID8gbGluZUhlaWdodCA6IGUuZGVsdGFNb2RlID09PSAyID8gX3dpbi5pbm5lckhlaWdodCA6IDEpICogd2hlZWxTcGVlZDtcbiAgICAgIG9uRGVsdGEoZS5kZWx0YVggKiBtdWx0aXBsaWVyLCBlLmRlbHRhWSAqIG11bHRpcGxpZXIsIDApO1xuICAgICAgb25TdG9wICYmICFpc05vcm1hbGl6ZXIgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25Nb3ZlID0gZnVuY3Rpb24gX29uTW92ZShlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHggPSBlLmNsaWVudFgsXG4gICAgICAgICAgeSA9IGUuY2xpZW50WSxcbiAgICAgICAgICBkeCA9IHggLSBzZWxmLngsXG4gICAgICAgICAgZHkgPSB5IC0gc2VsZi55O1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAoZHggfHwgZHkpICYmIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyID0gZnVuY3Rpb24gX29uSG92ZXIoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyRW5kID0gZnVuY3Rpb24gX29uSG92ZXJFbmQoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyRW5kKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkNsaWNrID0gZnVuY3Rpb24gX29uQ2xpY2soZSkge1xuICAgICAgcmV0dXJuIF9pZ25vcmVDaGVjayhlKSB8fCBfZ2V0RXZlbnQoZSwgcHJldmVudERlZmF1bHQpICYmIG9uQ2xpY2soc2VsZik7XG4gICAgfTtcblxuICAgIG9uU3RvcERlbGF5ZWRDYWxsID0gc2VsZi5fZGMgPSBnc2FwLmRlbGF5ZWRDYWxsKG9uU3RvcERlbGF5IHx8IDAuMjUsIG9uU3RvcEZ1bmMpLnBhdXNlKCk7XG4gICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgc2VsZi5fdnggPSBfZ2V0VmVsb2NpdHlQcm9wKDAsIDUwLCB0cnVlKTtcbiAgICBzZWxmLl92eSA9IF9nZXRWZWxvY2l0eVByb3AoMCwgNTAsIHRydWUpO1xuICAgIHNlbGYuc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYO1xuICAgIHNlbGYuc2Nyb2xsWSA9IHNjcm9sbEZ1bmNZO1xuICAgIHNlbGYuaXNEcmFnZ2luZyA9IHNlbGYuaXNHZXN0dXJpbmcgPSBzZWxmLmlzUHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgX2NvbnRleHQodGhpcyk7XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXNlbGYuaXNFbmFibGVkKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihpc1ZpZXdwb3J0ID8gb3duZXJEb2MgOiB0YXJnZXQsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICAgICAgdHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpID49IDAgJiYgX2FkZExpc3RlbmVyKGlzVmlld3BvcnQgPyBvd25lckRvYyA6IHRhcmdldCwgXCJzY3JvbGxcIiwgb25TY3JvbGwsIHByZXZlbnREZWZhdWx0LCBjYXB0dXJlKTtcbiAgICAgICAgdHlwZS5pbmRleE9mKFwid2hlZWxcIikgPj0gMCAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBcIndoZWVsXCIsIF9vbldoZWVsLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZihcInRvdWNoXCIpID49IDAgJiYgX2lzVG91Y2ggfHwgdHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA+PSAwKSB7XG4gICAgICAgICAgX2FkZExpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICAgIF9hZGRMaXN0ZW5lcihvd25lckRvYywgX2V2ZW50VHlwZXNbM10sIF9vblJlbGVhc2UpO1xuXG4gICAgICAgICAgYWxsb3dDbGlja3MgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBjbGlja0NhcHR1cmUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBvbkNsaWNrICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIFwiY2xpY2tcIiwgX29uQ2xpY2spO1xuICAgICAgICAgIG9uR2VzdHVyZVN0YXJ0ICYmIF9hZGRMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlc3RhcnRcIiwgX29uR2VzdHVyZVN0YXJ0KTtcbiAgICAgICAgICBvbkdlc3R1cmVFbmQgJiYgX2FkZExpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVlbmRcIiwgX29uR2VzdHVyZUVuZCk7XG4gICAgICAgICAgb25Ib3ZlciAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImVudGVyXCIsIF9vbkhvdmVyKTtcbiAgICAgICAgICBvbkhvdmVyRW5kICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuICAgICAgICAgIG9uTW92ZSAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcIm1vdmVcIiwgX29uTW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGUgJiYgZS50eXBlICYmIF9vblByZXNzKGUpO1xuICAgICAgICBvbkVuYWJsZSAmJiBvbkVuYWJsZShzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmlzRW5hYmxlZCkge1xuICAgICAgICAvLyBvbmx5IHJlbW92ZSB0aGUgX29uU2Nyb2xsIGxpc3RlbmVyIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3RoZXJzIHRoYXQgcmVseSBvbiB0aGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgX29ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICByZXR1cm4gbyAhPT0gc2VsZiAmJiBfaXNWaWV3cG9ydChvLnRhcmdldCk7XG4gICAgICAgIH0pLmxlbmd0aCB8fCBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgICAgIGlmIChzZWxmLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGlzTm9ybWFsaXplciA/IHRhcmdldCA6IG93bmVyRG9jLCBfZXZlbnRUeXBlc1sxXSwgX29uRHJhZywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBvblNjcm9sbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJ3aGVlbFwiLCBfb25XaGVlbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBjYXB0dXJlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzNdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBcImNsaWNrXCIsIGNsaWNrQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBfb25DbGljayk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVzdGFydFwiLCBfb25HZXN0dXJlU3RhcnQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlZW5kXCIsIF9vbkdlc3R1cmVFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwiZW50ZXJcIiwgX29uSG92ZXIpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibW92ZVwiLCBfb25Nb3ZlKTtcblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHNlbGYuaXNQcmVzc2VkID0gc2VsZi5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIG9uRGlzYWJsZSAmJiBvbkRpc2FibGUoc2VsZik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYua2lsbCA9IHNlbGYucmV2ZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5kaXNhYmxlKCk7XG5cbiAgICAgIHZhciBpID0gX29ic2VydmVycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX29ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBfbm9ybWFsaXplciA9PT0gc2VsZiAmJiAoX25vcm1hbGl6ZXIgPSAwKTtcbiAgICB9O1xuXG4gICAgX29ic2VydmVycy5wdXNoKHNlbGYpO1xuXG4gICAgaXNOb3JtYWxpemVyICYmIF9pc1ZpZXdwb3J0KHRhcmdldCkgJiYgKF9ub3JtYWxpemVyID0gc2VsZik7XG4gICAgc2VsZi5lbmFibGUoZXZlbnQpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZlciwgW3tcbiAgICBrZXk6IFwidmVsb2NpdHlYXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnguZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmVsb2NpdHlZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnkuZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2ZXI7XG59KCk7XG5PYnNlcnZlci52ZXJzaW9uID0gXCIzLjEyLjJcIjtcblxuT2JzZXJ2ZXIuY3JlYXRlID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcih2YXJzKTtcbn07XG5cbk9ic2VydmVyLnJlZ2lzdGVyID0gX2luaXRDb3JlO1xuXG5PYnNlcnZlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLnNsaWNlKCk7XG59O1xuXG5PYnNlcnZlci5nZXRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLnZhcnMuaWQgPT09IGlkO1xuICB9KVswXTtcbn07XG5cbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihPYnNlcnZlcik7XG5leHBvcnQgeyBPYnNlcnZlciBhcyBkZWZhdWx0LCBfaXNWaWV3cG9ydCwgX3Njcm9sbGVycywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9wcm94aWVzLCBfZ2V0VmVsb2NpdHlQcm9wLCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfZ2V0VGFyZ2V0IH07IiwiLyohXG4gKiBTY3JvbGxUcmlnZ2VyIDMuMTIuMlxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IE9ic2VydmVyLCBfZ2V0VGFyZ2V0LCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfc2Nyb2xsZXJzLCBfcHJveGllcywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9nZXRWZWxvY2l0eVByb3AgfSBmcm9tIFwiLi9PYnNlcnZlci5qc1wiO1xuXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbCxcbiAgICBfYm9keSxcbiAgICBfcm9vdCxcbiAgICBfcmVzaXplRGVsYXksXG4gICAgX3RvQXJyYXksXG4gICAgX2NsYW1wLFxuICAgIF90aW1lMixcbiAgICBfc3luY0ludGVydmFsLFxuICAgIF9yZWZyZXNoaW5nLFxuICAgIF9wb2ludGVySXNEb3duLFxuICAgIF90cmFuc2Zvcm1Qcm9wLFxuICAgIF9pLFxuICAgIF9wcmV2V2lkdGgsXG4gICAgX3ByZXZIZWlnaHQsXG4gICAgX2F1dG9SZWZyZXNoLFxuICAgIF9zb3J0LFxuICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgX2lnbm9yZVJlc2l6ZSxcbiAgICBfbm9ybWFsaXplcixcbiAgICBfaWdub3JlTW9iaWxlUmVzaXplLFxuICAgIF9iYXNlU2NyZWVuSGVpZ2h0LFxuICAgIF9iYXNlU2NyZWVuV2lkdGgsXG4gICAgX2ZpeElPU0J1ZyxcbiAgICBfY29udGV4dCxcbiAgICBfc2Nyb2xsUmVzdG9yYXRpb24sXG4gICAgX2RpdjEwMHZoLFxuICAgIF8xMDB2aCxcbiAgICBfbGltaXRDYWxsYmFja3MsXG4gICAgLy8gaWYgdHJ1ZSwgd2UnbGwgb25seSB0cmlnZ2VyIGNhbGxiYWNrcyBpZiB0aGUgYWN0aXZlIHN0YXRlIHRvZ2dsZXMsIHNvIGlmIHlvdSBzY3JvbGwgaW1tZWRpYXRlbHkgcGFzdCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucyBvZiBhIFNjcm9sbFRyaWdnZXIgKHRodXMgaW5hY3RpdmUgdG8gaW5hY3RpdmUpLCBuZWl0aGVyIGl0cyBvbkVudGVyIG5vciBvbkxlYXZlIHdpbGwgYmUgY2FsbGVkLiBUaGlzIGlzIHVzZWZ1bCBkdXJpbmcgc3RhcnR1cC5cbl9zdGFydHVwID0gMSxcbiAgICBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgIF90aW1lMSA9IF9nZXRUaW1lKCksXG4gICAgX2xhc3RTY3JvbGxUaW1lID0gMCxcbiAgICBfZW5hYmxlZCA9IDAsXG4gICAgX3BhcnNlQ2xhbXAgPSBmdW5jdGlvbiBfcGFyc2VDbGFtcCh2YWx1ZSwgdHlwZSwgc2VsZikge1xuICB2YXIgY2xhbXAgPSBfaXNTdHJpbmcodmFsdWUpICYmICh2YWx1ZS5zdWJzdHIoMCwgNikgPT09IFwiY2xhbXAoXCIgfHwgdmFsdWUuaW5kZXhPZihcIm1heFwiKSA+IC0xKTtcbiAgc2VsZltcIl9cIiArIHR5cGUgKyBcIkNsYW1wXCJdID0gY2xhbXA7XG4gIHJldHVybiBjbGFtcCA/IHZhbHVlLnN1YnN0cig2LCB2YWx1ZS5sZW5ndGggLSA3KSA6IHZhbHVlO1xufSxcbiAgICBfa2VlcENsYW1wID0gZnVuY3Rpb24gX2tlZXBDbGFtcCh2YWx1ZSwgY2xhbXApIHtcbiAgcmV0dXJuIGNsYW1wICYmICghX2lzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5zdWJzdHIoMCwgNikgIT09IFwiY2xhbXAoXCIpID8gXCJjbGFtcChcIiArIHZhbHVlICsgXCIpXCIgOiB2YWx1ZTtcbn0sXG4gICAgX3JhZkJ1Z0ZpeCA9IGZ1bmN0aW9uIF9yYWZCdWdGaXgoKSB7XG4gIHJldHVybiBfZW5hYmxlZCAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3JhZkJ1Z0ZpeCk7XG59LFxuICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCksIHNjcmVlbiByZXBhaW50cyB3ZXJlbid0IGNvbnNpc3RlbnQgdW5sZXNzIHdlIGhhZCBTT01FVEhJTkcgcXVldWVkIHVwIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpISBTbyB0aGlzIGp1c3QgY3JlYXRlcyBhIHN1cGVyIHNpbXBsZSBsb29wIHRvIGtlZXAgaXQgYWxpdmUgYW5kIHNtb290aCBvdXQgcmVwYWludHMuXG5fcG9pbnRlckRvd25IYW5kbGVyID0gZnVuY3Rpb24gX3BvaW50ZXJEb3duSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMTtcbn0sXG4gICAgX3BvaW50ZXJVcEhhbmRsZXIgPSBmdW5jdGlvbiBfcG9pbnRlclVwSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMDtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHYpIHtcbiAgcmV0dXJuIHY7XG59LFxuICAgIF9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCBfd2luZG93RXhpc3RzKCkgJiYgKGdzYXAgPSB3aW5kb3cuZ3NhcCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbiAmJiBnc2FwO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGUpIHtcbiAgcmV0dXJuICEhfl9yb290LmluZGV4T2YoZSk7XG59LFxuICAgIF9nZXRWaWV3cG9ydERpbWVuc2lvbiA9IGZ1bmN0aW9uIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkaW1lbnNpb25Qcm9wZXJ0eSkge1xuICByZXR1cm4gKGRpbWVuc2lvblByb3BlcnR5ID09PSBcIkhlaWdodFwiID8gXzEwMHZoIDogX3dpbltcImlubmVyXCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV0pIHx8IF9kb2NFbFtcImNsaWVudFwiICsgZGltZW5zaW9uUHJvcGVydHldIHx8IF9ib2R5W1wiY2xpZW50XCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV07XG59LFxuICAgIF9nZXRCb3VuZHNGdW5jID0gZnVuY3Rpb24gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkge1xuICByZXR1cm4gX2dldFByb3h5UHJvcChlbGVtZW50LCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiKSB8fCAoX2lzVmlld3BvcnQoZWxlbWVudCkgPyBmdW5jdGlvbiAoKSB7XG4gICAgX3dpbk9mZnNldHMud2lkdGggPSBfd2luLmlubmVyV2lkdGg7XG4gICAgX3dpbk9mZnNldHMuaGVpZ2h0ID0gXzEwMHZoO1xuICAgIHJldHVybiBfd2luT2Zmc2V0cztcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgfSk7XG59LFxuICAgIF9nZXRTaXplRnVuYyA9IGZ1bmN0aW9uIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgX3JlZikge1xuICB2YXIgZCA9IF9yZWYuZCxcbiAgICAgIGQyID0gX3JlZi5kMixcbiAgICAgIGEgPSBfcmVmLmE7XG4gIHJldHVybiAoYSA9IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYSgpW2RdO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoaXNWaWV3cG9ydCA/IF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBzY3JvbGxlcltcImNsaWVudFwiICsgZDJdKSB8fCAwO1xuICB9O1xufSxcbiAgICBfZ2V0T2Zmc2V0c0Z1bmMgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0c0Z1bmMoZWxlbWVudCwgaXNWaWV3cG9ydCkge1xuICByZXR1cm4gIWlzVmlld3BvcnQgfHwgfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgPyBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3dpbk9mZnNldHM7XG4gIH07XG59LFxuICAgIF9tYXhTY3JvbGwgPSBmdW5jdGlvbiBfbWF4U2Nyb2xsKGVsZW1lbnQsIF9yZWYyKSB7XG4gIHZhciBzID0gX3JlZjIucyxcbiAgICAgIGQyID0gX3JlZjIuZDIsXG4gICAgICBkID0gX3JlZjIuZCxcbiAgICAgIGEgPSBfcmVmMi5hO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgKHMgPSBcInNjcm9sbFwiICsgZDIpICYmIChhID0gX2dldFByb3h5UHJvcChlbGVtZW50LCBzKSkgPyBhKCkgLSBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSgpW2RdIDogX2lzVmlld3BvcnQoZWxlbWVudCkgPyAoX2RvY0VsW3NdIHx8IF9ib2R5W3NdKSAtIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBlbGVtZW50W3NdIC0gZWxlbWVudFtcIm9mZnNldFwiICsgZDJdKTtcbn0sXG4gICAgX2l0ZXJhdGVBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uIF9pdGVyYXRlQXV0b1JlZnJlc2goZnVuYywgZXZlbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX2F1dG9SZWZyZXNoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgKCFldmVudHMgfHwgfmV2ZW50cy5pbmRleE9mKF9hdXRvUmVmcmVzaFtpICsgMV0pKSAmJiBmdW5jKF9hdXRvUmVmcmVzaFtpXSwgX2F1dG9SZWZyZXNoW2kgKyAxXSwgX2F1dG9SZWZyZXNoW2kgKyAyXSk7XG4gIH1cbn0sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9lbmRBbmltYXRpb24gPSBmdW5jdGlvbiBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgcmV2ZXJzZWQsIHBhdXNlKSB7XG4gIHJldHVybiBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKHJldmVyc2VkID8gMCA6IDEpICYmIHBhdXNlICYmIGFuaW1hdGlvbi5wYXVzZSgpO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soc2VsZiwgZnVuYykge1xuICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMoc2VsZik7XG4gICAgcmVzdWx0ICYmIHJlc3VsdC50b3RhbFRpbWUgJiYgKHNlbGYuY2FsbGJhY2tBbmltYXRpb24gPSByZXN1bHQpO1xuICB9XG59LFxuICAgIF9hYnMgPSBNYXRoLmFicyxcbiAgICBfbGVmdCA9IFwibGVmdFwiLFxuICAgIF90b3AgPSBcInRvcFwiLFxuICAgIF9yaWdodCA9IFwicmlnaHRcIixcbiAgICBfYm90dG9tID0gXCJib3R0b21cIixcbiAgICBfd2lkdGggPSBcIndpZHRoXCIsXG4gICAgX2hlaWdodCA9IFwiaGVpZ2h0XCIsXG4gICAgX1JpZ2h0ID0gXCJSaWdodFwiLFxuICAgIF9MZWZ0ID0gXCJMZWZ0XCIsXG4gICAgX1RvcCA9IFwiVG9wXCIsXG4gICAgX0JvdHRvbSA9IFwiQm90dG9tXCIsXG4gICAgX3BhZGRpbmcgPSBcInBhZGRpbmdcIixcbiAgICBfbWFyZ2luID0gXCJtYXJnaW5cIixcbiAgICBfV2lkdGggPSBcIldpZHRoXCIsXG4gICAgX0hlaWdodCA9IFwiSGVpZ2h0XCIsXG4gICAgX3B4ID0gXCJweFwiLFxuICAgIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gX3dpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSxcbiAgICBfbWFrZVBvc2l0aW9uYWJsZSA9IGZ1bmN0aW9uIF9tYWtlUG9zaXRpb25hYmxlKGVsZW1lbnQpIHtcbiAgLy8gaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBoYXMgcG9zaXRpb246IGFic29sdXRlIG9yIGZpeGVkLCBsZWF2ZSB0aGF0LCBvdGhlcndpc2UgbWFrZSBpdCBwb3NpdGlvbjogcmVsYXRpdmVcbiAgdmFyIHBvc2l0aW9uID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb247XG5cbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiA/IHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9nZXRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzKGVsZW1lbnQsIHdpdGhvdXRUcmFuc2Zvcm1zKSB7XG4gIHZhciB0d2VlbiA9IHdpdGhvdXRUcmFuc2Zvcm1zICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW190cmFuc2Zvcm1Qcm9wXSAhPT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiAmJiBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeFBlcmNlbnQ6IDAsXG4gICAgeVBlcmNlbnQ6IDAsXG4gICAgcm90YXRpb246IDAsXG4gICAgcm90YXRpb25YOiAwLFxuICAgIHJvdGF0aW9uWTogMCxcbiAgICBzY2FsZTogMSxcbiAgICBza2V3WDogMCxcbiAgICBza2V3WTogMFxuICB9KS5wcm9ncmVzcygxKSxcbiAgICAgIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHR3ZWVuICYmIHR3ZWVuLnByb2dyZXNzKDApLmtpbGwoKTtcbiAgcmV0dXJuIGJvdW5kcztcbn0sXG4gICAgX2dldFNpemUgPSBmdW5jdGlvbiBfZ2V0U2l6ZShlbGVtZW50LCBfcmVmMykge1xuICB2YXIgZDIgPSBfcmVmMy5kMjtcbiAgcmV0dXJuIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSB8fCBlbGVtZW50W1wiY2xpZW50XCIgKyBkMl0gfHwgMDtcbn0sXG4gICAgX2dldExhYmVsUmF0aW9BcnJheSA9IGZ1bmN0aW9uIF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpIHtcbiAgdmFyIGEgPSBbXSxcbiAgICAgIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIGR1cmF0aW9uID0gdGltZWxpbmUuZHVyYXRpb24oKSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGEucHVzaChsYWJlbHNbcF0gLyBkdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gYTtcbn0sXG4gICAgX2dldENsb3Nlc3RMYWJlbCA9IGZ1bmN0aW9uIF9nZXRDbG9zZXN0TGFiZWwoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZ3NhcC51dGlscy5zbmFwKF9nZXRMYWJlbFJhdGlvQXJyYXkoYW5pbWF0aW9uKSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICBfc25hcERpcmVjdGlvbmFsID0gZnVuY3Rpb24gX3NuYXBEaXJlY3Rpb25hbChzbmFwSW5jcmVtZW50T3JBcnJheSkge1xuICB2YXIgc25hcCA9IGdzYXAudXRpbHMuc25hcChzbmFwSW5jcmVtZW50T3JBcnJheSksXG4gICAgICBhID0gQXJyYXkuaXNBcnJheShzbmFwSW5jcmVtZW50T3JBcnJheSkgJiYgc25hcEluY3JlbWVudE9yQXJyYXkuc2xpY2UoMCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG4gIHJldHVybiBhID8gZnVuY3Rpb24gKHZhbHVlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCkge1xuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMWUtMztcbiAgICB9XG5cbiAgICB2YXIgaTtcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gc25hcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHZhbHVlIC09IHRocmVzaG9sZDsgLy8gdG8gYXZvaWQgcm91bmRpbmcgZXJyb3JzLiBJZiB3ZSdyZSB0b28gc3RyaWN0LCBpdCBtaWdodCBzbmFwIGZvcndhcmQsIHRoZW4gaW1tZWRpYXRlbHkgYWdhaW4sIGFuZCBhZ2Fpbi5cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPj0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYVtpIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgPSBhLmxlbmd0aDtcbiAgICAgIHZhbHVlICs9IHRocmVzaG9sZDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAoYVtpXSA8PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBhW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFbMF07XG4gIH0gOiBmdW5jdGlvbiAodmFsdWUsIGRpcmVjdGlvbiwgdGhyZXNob2xkKSB7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxZS0zO1xuICAgIH1cblxuICAgIHZhciBzbmFwcGVkID0gc25hcCh2YWx1ZSk7XG4gICAgcmV0dXJuICFkaXJlY3Rpb24gfHwgTWF0aC5hYnMoc25hcHBlZCAtIHZhbHVlKSA8IHRocmVzaG9sZCB8fCBzbmFwcGVkIC0gdmFsdWUgPCAwID09PSBkaXJlY3Rpb24gPCAwID8gc25hcHBlZCA6IHNuYXAoZGlyZWN0aW9uIDwgMCA/IHZhbHVlIC0gc25hcEluY3JlbWVudE9yQXJyYXkgOiB2YWx1ZSArIHNuYXBJbmNyZW1lbnRPckFycmF5KTtcbiAgfTtcbn0sXG4gICAgX2dldExhYmVsQXREaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxBdERpcmVjdGlvbih0aW1lbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgIHJldHVybiBfc25hcERpcmVjdGlvbmFsKF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpKSh2YWx1ZSwgc3QuZGlyZWN0aW9uKTtcbiAgfTtcbn0sXG4gICAgX211bHRpTGlzdGVuZXIgPSBmdW5jdGlvbiBfbXVsdGlMaXN0ZW5lcihmdW5jLCBlbGVtZW50LCB0eXBlcywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHR5cGVzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmMoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2spO1xuICB9KTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF93aGVlbExpc3RlbmVyID0gZnVuY3Rpb24gX3doZWVsTGlzdGVuZXIoZnVuYywgZWwsIHNjcm9sbEZ1bmMpIHtcbiAgc2Nyb2xsRnVuYyA9IHNjcm9sbEZ1bmMgJiYgc2Nyb2xsRnVuYy53aGVlbEhhbmRsZXI7XG5cbiAgaWYgKHNjcm9sbEZ1bmMpIHtcbiAgICBmdW5jKGVsLCBcIndoZWVsXCIsIHNjcm9sbEZ1bmMpO1xuICAgIGZ1bmMoZWwsIFwidG91Y2htb3ZlXCIsIHNjcm9sbEZ1bmMpO1xuICB9XG59LFxuICAgIF9tYXJrZXJEZWZhdWx0cyA9IHtcbiAgc3RhcnRDb2xvcjogXCJncmVlblwiLFxuICBlbmRDb2xvcjogXCJyZWRcIixcbiAgaW5kZW50OiAwLFxuICBmb250U2l6ZTogXCIxNnB4XCIsXG4gIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcbiAgYW50aWNpcGF0ZVBpbjogMFxufSxcbiAgICBfa2V5d29yZHMgPSB7XG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgY2VudGVyOiAwLjUsXG4gIGJvdHRvbTogMSxcbiAgcmlnaHQ6IDFcbn0sXG4gICAgX29mZnNldFRvUHggPSBmdW5jdGlvbiBfb2Zmc2V0VG9QeCh2YWx1ZSwgc2l6ZSkge1xuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBlcUluZGV4ID0gdmFsdWUuaW5kZXhPZihcIj1cIiksXG4gICAgICAgIHJlbGF0aXZlID0gfmVxSW5kZXggPyArKHZhbHVlLmNoYXJBdChlcUluZGV4IC0gMSkgKyAxKSAqIHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKGVxSW5kZXggKyAxKSkgOiAwO1xuXG4gICAgaWYgKH5lcUluZGV4KSB7XG4gICAgICB2YWx1ZS5pbmRleE9mKFwiJVwiKSA+IGVxSW5kZXggJiYgKHJlbGF0aXZlICo9IHNpemUgLyAxMDApO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgZXFJbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHZhbHVlID0gcmVsYXRpdmUgKyAodmFsdWUgaW4gX2tleXdvcmRzID8gX2tleXdvcmRzW3ZhbHVlXSAqIHNpemUgOiB+dmFsdWUuaW5kZXhPZihcIiVcIikgPyBwYXJzZUZsb2F0KHZhbHVlKSAqIHNpemUgLyAxMDAgOiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn0sXG4gICAgX2NyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIF9jcmVhdGVNYXJrZXIodHlwZSwgbmFtZSwgY29udGFpbmVyLCBkaXJlY3Rpb24sIF9yZWY0LCBvZmZzZXQsIG1hdGNoV2lkdGhFbCwgY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gIHZhciBzdGFydENvbG9yID0gX3JlZjQuc3RhcnRDb2xvcixcbiAgICAgIGVuZENvbG9yID0gX3JlZjQuZW5kQ29sb3IsXG4gICAgICBmb250U2l6ZSA9IF9yZWY0LmZvbnRTaXplLFxuICAgICAgaW5kZW50ID0gX3JlZjQuaW5kZW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWY0LmZvbnRXZWlnaHQ7XG5cbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICB1c2VGaXhlZFBvc2l0aW9uID0gX2lzVmlld3BvcnQoY29udGFpbmVyKSB8fCBfZ2V0UHJveHlQcm9wKGNvbnRhaW5lciwgXCJwaW5UeXBlXCIpID09PSBcImZpeGVkXCIsXG4gICAgICBpc1Njcm9sbGVyID0gdHlwZS5pbmRleE9mKFwic2Nyb2xsZXJcIikgIT09IC0xLFxuICAgICAgcGFyZW50ID0gdXNlRml4ZWRQb3NpdGlvbiA/IF9ib2R5IDogY29udGFpbmVyLFxuICAgICAgaXNTdGFydCA9IHR5cGUuaW5kZXhPZihcInN0YXJ0XCIpICE9PSAtMSxcbiAgICAgIGNvbG9yID0gaXNTdGFydCA/IHN0YXJ0Q29sb3IgOiBlbmRDb2xvcixcbiAgICAgIGNzcyA9IFwiYm9yZGVyLWNvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXNpemU6XCIgKyBmb250U2l6ZSArIFwiO2NvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXdlaWdodDpcIiArIGZvbnRXZWlnaHQgKyBcIjtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpzYW5zLXNlcmlmLEFyaWFsO3otaW5kZXg6MTAwMDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO1wiO1xuXG4gIGNzcyArPSBcInBvc2l0aW9uOlwiICsgKChpc1Njcm9sbGVyIHx8IGNvbnRhaW5lckFuaW1hdGlvbikgJiYgdXNlRml4ZWRQb3NpdGlvbiA/IFwiZml4ZWQ7XCIgOiBcImFic29sdXRlO1wiKTtcbiAgKGlzU2Nyb2xsZXIgfHwgY29udGFpbmVyQW5pbWF0aW9uIHx8ICF1c2VGaXhlZFBvc2l0aW9uKSAmJiAoY3NzICs9IChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9yaWdodCA6IF9ib3R0b20pICsgXCI6XCIgKyAob2Zmc2V0ICsgcGFyc2VGbG9hdChpbmRlbnQpKSArIFwicHg7XCIpO1xuICBtYXRjaFdpZHRoRWwgJiYgKGNzcyArPSBcImJveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6XCIgKyBtYXRjaFdpZHRoRWwub2Zmc2V0V2lkdGggKyBcInB4O1wiKTtcbiAgZS5faXNTdGFydCA9IGlzU3RhcnQ7XG4gIGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnc2FwLW1hcmtlci1cIiArIHR5cGUgKyAobmFtZSA/IFwiIG1hcmtlci1cIiArIG5hbWUgOiBcIlwiKSk7XG4gIGUuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgZS5pbm5lclRleHQgPSBuYW1lIHx8IG5hbWUgPT09IDAgPyB0eXBlICsgXCItXCIgKyBuYW1lIDogdHlwZTtcbiAgcGFyZW50LmNoaWxkcmVuWzBdID8gcGFyZW50Lmluc2VydEJlZm9yZShlLCBwYXJlbnQuY2hpbGRyZW5bMF0pIDogcGFyZW50LmFwcGVuZENoaWxkKGUpO1xuICBlLl9vZmZzZXQgPSBlW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gIF9wb3NpdGlvbk1hcmtlcihlLCAwLCBkaXJlY3Rpb24sIGlzU3RhcnQpO1xuXG4gIHJldHVybiBlO1xufSxcbiAgICBfcG9zaXRpb25NYXJrZXIgPSBmdW5jdGlvbiBfcG9zaXRpb25NYXJrZXIobWFya2VyLCBzdGFydCwgZGlyZWN0aW9uLCBmbGlwcGVkKSB7XG4gIHZhciB2YXJzID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICAgICAgc2lkZSA9IGRpcmVjdGlvbltmbGlwcGVkID8gXCJvczJcIiA6IFwicDJcIl0sXG4gICAgICBvcHBvc2l0ZVNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwicDJcIiA6IFwib3MyXCJdO1xuICBtYXJrZXIuX2lzRmxpcHBlZCA9IGZsaXBwZWQ7XG4gIHZhcnNbZGlyZWN0aW9uLmEgKyBcIlBlcmNlbnRcIl0gPSBmbGlwcGVkID8gLTEwMCA6IDA7XG4gIHZhcnNbZGlyZWN0aW9uLmFdID0gZmxpcHBlZCA/IFwiMXB4XCIgOiAwO1xuICB2YXJzW1wiYm9yZGVyXCIgKyBzaWRlICsgX1dpZHRoXSA9IDE7XG4gIHZhcnNbXCJib3JkZXJcIiArIG9wcG9zaXRlU2lkZSArIF9XaWR0aF0gPSAwO1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IHN0YXJ0ICsgXCJweFwiO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICBfdHJpZ2dlcnMgPSBbXSxcbiAgICBfaWRzID0ge30sXG4gICAgX3JhZklELFxuICAgIF9zeW5jID0gZnVuY3Rpb24gX3N5bmMoKSB7XG4gIHJldHVybiBfZ2V0VGltZSgpIC0gX2xhc3RTY3JvbGxUaW1lID4gMzQgJiYgKF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKSk7XG59LFxuICAgIF9vblNjcm9sbCA9IGZ1bmN0aW9uIF9vblNjcm9sbCgpIHtcbiAgLy8gcHJldmlvdXNseSwgd2UgdHJpZWQgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgYnkgYmF0Y2hpbmcvZGVmZXJyaW5nIHRvIHRoZSBuZXh0IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpLCBidXQgZGlzY292ZXJlZCB0aGF0IFNhZmFyaSBoYXMgYSBmZXcgYnVncyB0aGF0IG1ha2UgdGhpcyB1bndvcmthYmxlIChlc3BlY2lhbGx5IG9uIGlPUykuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xNmM0MzViMTJlZjA5YzM4MTI1MjA0ODE4ZTdiNDVmYz9lZGl0b3JzPTAwMTAgYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqT3hZcFEvM2RkNjVjY2VjNWE2MGYxZDg2MmMzNTVkODRkMTQ1NjI/ZWRpdG9ycz0wMDEwIGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzP2VkaXRvcnM9MDAxMFxuICBpZiAoIV9ub3JtYWxpemVyIHx8ICFfbm9ybWFsaXplci5pc1ByZXNzZWQgfHwgX25vcm1hbGl6ZXIuc3RhcnRYID4gX2JvZHkuY2xpZW50V2lkdGgpIHtcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBkcmFnZ2luZyB0aGUgc2Nyb2xsYmFyLCBhbGxvdyBpdC5cbiAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICBpZiAoX25vcm1hbGl6ZXIpIHtcbiAgICAgIF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3VwZGF0ZUFsbCgpOyAvLyBTYWZhcmkgaW4gcGFydGljdWxhciAob24gZGVza3RvcCkgTkVFRFMgdGhlIGltbWVkaWF0ZSB1cGRhdGUgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZWFzIGlPUyBzZWVtcyB0byBiZW5lZml0IGZyb20gd2FpdGluZyBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRpY2ssIGF0IGxlYXN0IHdoZW4gbm9ybWFsaXppbmcuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9xQllvenFPP2VkaXRvcnM9MDExMFxuXG4gICAgfVxuXG4gICAgX2xhc3RTY3JvbGxUaW1lIHx8IF9kaXNwYXRjaChcInNjcm9sbFN0YXJ0XCIpO1xuICAgIF9sYXN0U2Nyb2xsVGltZSA9IF9nZXRUaW1lKCk7XG4gIH1cbn0sXG4gICAgX3NldEJhc2VEaW1lbnNpb25zID0gZnVuY3Rpb24gX3NldEJhc2VEaW1lbnNpb25zKCkge1xuICBfYmFzZVNjcmVlbldpZHRoID0gX3dpbi5pbm5lcldpZHRoO1xuICBfYmFzZVNjcmVlbkhlaWdodCA9IF93aW4uaW5uZXJIZWlnaHQ7XG59LFxuICAgIF9vblJlc2l6ZSA9IGZ1bmN0aW9uIF9vblJlc2l6ZSgpIHtcbiAgX3Njcm9sbGVycy5jYWNoZSsrO1xuICAhX3JlZnJlc2hpbmcgJiYgIV9pZ25vcmVSZXNpemUgJiYgIV9kb2MuZnVsbHNjcmVlbkVsZW1lbnQgJiYgIV9kb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiYgKCFfaWdub3JlTW9iaWxlUmVzaXplIHx8IF9iYXNlU2NyZWVuV2lkdGggIT09IF93aW4uaW5uZXJXaWR0aCB8fCBNYXRoLmFicyhfd2luLmlubmVySGVpZ2h0IC0gX2Jhc2VTY3JlZW5IZWlnaHQpID4gX3dpbi5pbm5lckhlaWdodCAqIDAuMjUpICYmIF9yZXNpemVEZWxheS5yZXN0YXJ0KHRydWUpO1xufSxcbiAgICAvLyBpZ25vcmUgcmVzaXplcyB0cmlnZ2VyZWQgYnkgcmVmcmVzaCgpXG5fbGlzdGVuZXJzID0ge30sXG4gICAgX2VtcHR5QXJyYXkgPSBbXSxcbiAgICBfc29mdFJlZnJlc2ggPSBmdW5jdGlvbiBfc29mdFJlZnJlc2goKSB7XG4gIHJldHVybiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKSB8fCBfcmVmcmVzaEFsbCh0cnVlKTtcbn0sXG4gICAgX2Rpc3BhdGNoID0gZnVuY3Rpb24gX2Rpc3BhdGNoKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnNbdHlwZV0gJiYgX2xpc3RlbmVyc1t0eXBlXS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZigpO1xuICB9KSB8fCBfZW1wdHlBcnJheTtcbn0sXG4gICAgX3NhdmVkU3R5bGVzID0gW10sXG4gICAgLy8gd2hlbiBTY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMoKSBpcyBjYWxsZWQsIHRoZSBpbmxpbmUgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiB0aGlzIEFycmF5IGluIGEgc2VxdWVudGlhbCBmb3JtYXQgbGlrZSBbZWxlbWVudCwgY3NzVGV4dCwgZ3NDYWNoZSwgbWVkaWFdLiBUaGlzIGtlZXBzIGl0IHZlcnkgbWVtb3J5LWVmZmljaWVudCBhbmQgZmFzdCB0byBpdGVyYXRlIHRocm91Z2guXG5fcmV2ZXJ0UmVjb3JkZWQgPSBmdW5jdGlvbiBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfc2F2ZWRTdHlsZXMubGVuZ3RoOyBpICs9IDUpIHtcbiAgICBpZiAoIW1lZGlhIHx8IF9zYXZlZFN0eWxlc1tpICsgNF0gJiYgX3NhdmVkU3R5bGVzW2kgKyA0XS5xdWVyeSA9PT0gbWVkaWEpIHtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5zdHlsZS5jc3NUZXh0ID0gX3NhdmVkU3R5bGVzW2kgKyAxXTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5nZXRCQm94ICYmIF9zYXZlZFN0eWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgX3NhdmVkU3R5bGVzW2kgKyAyXSB8fCBcIlwiKTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpICsgM10udW5jYWNoZSA9IDE7XG4gICAgfVxuICB9XG59LFxuICAgIF9yZXZlcnRBbGwgPSBmdW5jdGlvbiBfcmV2ZXJ0QWxsKGtpbGwsIG1lZGlhKSB7XG4gIHZhciB0cmlnZ2VyO1xuXG4gIGZvciAoX2kgPSAwOyBfaSA8IF90cmlnZ2Vycy5sZW5ndGg7IF9pKyspIHtcbiAgICB0cmlnZ2VyID0gX3RyaWdnZXJzW19pXTtcblxuICAgIGlmICh0cmlnZ2VyICYmICghbWVkaWEgfHwgdHJpZ2dlci5fY3R4ID09PSBtZWRpYSkpIHtcbiAgICAgIGlmIChraWxsKSB7XG4gICAgICAgIHRyaWdnZXIua2lsbCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1lZGlhICYmIF9yZXZlcnRSZWNvcmRlZChtZWRpYSk7XG4gIG1lZGlhIHx8IF9kaXNwYXRjaChcInJldmVydFwiKTtcbn0sXG4gICAgX2NsZWFyU2Nyb2xsTWVtb3J5ID0gZnVuY3Rpb24gX2NsZWFyU2Nyb2xsTWVtb3J5KHNjcm9sbFJlc3RvcmF0aW9uLCBmb3JjZSkge1xuICAvLyB6ZXJvLW91dCBhbGwgdGhlIHJlY29yZGVkIHNjcm9sbCBwb3NpdGlvbnMuIERvbid0IHVzZSBfdHJpZ2dlcnMgYmVjYXVzZSBpZiwgZm9yIGV4YW1wbGUsIC5tYXRjaE1lZGlhKCkgaXMgdXNlZCB0byBjcmVhdGUgc29tZSBTY3JvbGxUcmlnZ2VycyBhbmQgdGhlbiB0aGUgdXNlciByZXNpemVzIGFuZCBpdCByZW1vdmVzIEFMTCBTY3JvbGxUcmlnZ2VycywgYW5kIHRoZW4gZ28gYmFjayB0byBhIHNpemUgd2hlcmUgdGhlcmUgYXJlIFNjcm9sbFRyaWdnZXJzLCBpdCB3b3VsZCBoYXZlIGtlcHQgdGhlIHBvc2l0aW9uKHMpIHNhdmVkIGZyb20gdGhlIGluaXRpYWwgc3RhdGUuXG4gIF9zY3JvbGxlcnMuY2FjaGUrKztcbiAgKGZvcmNlIHx8ICFfcmVmcmVzaGluZ0FsbCkgJiYgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24ob2JqKSAmJiBvYmouY2FjaGVJRCsrICYmIChvYmoucmVjID0gMCk7XG4gIH0pO1xuICBfaXNTdHJpbmcoc2Nyb2xsUmVzdG9yYXRpb24pICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBfc2Nyb2xsUmVzdG9yYXRpb24gPSBzY3JvbGxSZXN0b3JhdGlvbik7XG59LFxuICAgIF9yZWZyZXNoaW5nQWxsLFxuICAgIF9yZWZyZXNoSUQgPSAwLFxuICAgIF9xdWV1ZVJlZnJlc2hJRCxcbiAgICBfcXVldWVSZWZyZXNoQWxsID0gZnVuY3Rpb24gX3F1ZXVlUmVmcmVzaEFsbCgpIHtcbiAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWxsIF9yZWZyZXNoQWxsKCkgZXZlcnkgdGltZSB3ZSBjcmVhdGUgYSBuZXcgU2Nyb2xsVHJpZ2dlciAoZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMpIC0gaXQncyBiZXR0ZXIgdG8gYmF0Y2ggdGhlbS4gU29tZSBmcmFtZXdvcmtzIGR5bmFtaWNhbGx5IGxvYWQgY29udGVudCBhbmQgd2UgY2FuJ3QgcmVseSBvbiB0aGUgd2luZG93J3MgXCJsb2FkXCIgb3IgXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnRzIHRvIHRyaWdnZXIgaXQuXG4gIGlmIChfcXVldWVSZWZyZXNoSUQgIT09IF9yZWZyZXNoSUQpIHtcbiAgICB2YXIgaWQgPSBfcXVldWVSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaWQgPT09IF9yZWZyZXNoSUQgJiYgX3JlZnJlc2hBbGwodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn0sXG4gICAgX3JlZnJlc2gxMDB2aCA9IGZ1bmN0aW9uIF9yZWZyZXNoMTAwdmgoKSB7XG4gIF9ib2R5LmFwcGVuZENoaWxkKF9kaXYxMDB2aCk7XG5cbiAgXzEwMHZoID0gX2RpdjEwMHZoLm9mZnNldEhlaWdodCB8fCBfd2luLmlubmVySGVpZ2h0O1xuXG4gIF9ib2R5LnJlbW92ZUNoaWxkKF9kaXYxMDB2aCk7XG59LFxuICAgIF9yZWZyZXNoQWxsID0gZnVuY3Rpb24gX3JlZnJlc2hBbGwoZm9yY2UsIHNraXBSZXZlcnQpIHtcbiAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhZm9yY2UpIHtcbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yZWZyZXNoMTAwdmgoKTtcblxuICBfcmVmcmVzaGluZ0FsbCA9IFNjcm9sbFRyaWdnZXIuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblxuICBfc2Nyb2xsZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBfaXNGdW5jdGlvbihvYmopICYmICsrb2JqLmNhY2hlSUQgJiYgKG9iai5yZWMgPSBvYmooKSk7XG4gIH0pOyAvLyBmb3JjZSB0aGUgY2xlYXJpbmcgb2YgdGhlIGNhY2hlIGJlY2F1c2Ugc29tZSBicm93c2VycyB0YWtlIGEgbGl0dGxlIHdoaWxlIHRvIGRpc3BhdGNoIHRoZSBcInNjcm9sbFwiIGV2ZW50IGFuZCB0aGUgdXNlciBtYXkgaGF2ZSBjaGFuZ2VkIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIHRoZW4gY2FsbGVkIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIHJpZ2h0IGF3YXlcblxuXG4gIHZhciByZWZyZXNoSW5pdHMgPSBfZGlzcGF0Y2goXCJyZWZyZXNoSW5pdFwiKTtcblxuICBfc29ydCAmJiBTY3JvbGxUcmlnZ2VyLnNvcnQoKTtcbiAgc2tpcFJldmVydCB8fCBfcmV2ZXJ0QWxsKCk7XG5cbiAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoX2lzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgb2JqLnNtb290aCAmJiAob2JqLnRhcmdldC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwiYXV0b1wiKTsgLy8gc21vb3RoIHNjcm9sbGluZyBpbnRlcmZlcmVzXG5cbiAgICAgIG9iaigwKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQucmVmcmVzaCgpO1xuICB9KTsgLy8gZG9uJ3QgbG9vcCB3aXRoIF9pIGJlY2F1c2UgZHVyaW5nIGEgcmVmcmVzaCgpIHNvbWVvbmUgY291bGQgY2FsbCBTY3JvbGxUcmlnZ2VyLnVwZGF0ZSgpIHdoaWNoIHdvdWxkIGl0ZXJhdGUgdGhyb3VnaCBfaSByZXN1bHRpbmcgaW4gYSBza2lwLlxuXG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAvLyBuZXN0ZWQgcGlucyAocGlubmVkQ29udGFpbmVyKSB3aXRoIHBpblNwYWNpbmcgbWF5IGV4cGFuZCB0aGUgY29udGFpbmVyLCBzbyB3ZSBtdXN0IGFjY29tbW9kYXRlIHRoYXQgaGVyZS5cbiAgICBpZiAodC5fc3ViUGluT2Zmc2V0ICYmIHQucGluKSB7XG4gICAgICB2YXIgcHJvcCA9IHQudmFycy5ob3Jpem9udGFsID8gXCJvZmZzZXRXaWR0aFwiIDogXCJvZmZzZXRIZWlnaHRcIixcbiAgICAgICAgICBvcmlnaW5hbCA9IHQucGluW3Byb3BdO1xuICAgICAgdC5yZXZlcnQodHJ1ZSwgMSk7XG4gICAgICB0LmFkanVzdFBpblNwYWNpbmcodC5waW5bcHJvcF0gLSBvcmlnaW5hbCk7XG4gICAgICB0LnJlZnJlc2goKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgLy8gdGhlIHNjcm9sbGVyJ3MgbWF4IHNjcm9sbCBwb3NpdGlvbiBtYXkgY2hhbmdlIGFmdGVyIGFsbCB0aGUgU2Nyb2xsVHJpZ2dlcnMgcmVmcmVzaGVkIChsaWtlIHBpbm5pbmcgY291bGQgcHVzaCBpdCBkb3duKSwgc28gd2UgbmVlZCB0byBsb29wIGJhY2sgYW5kIGNvcnJlY3QgYW55IHdpdGggZW5kOiBcIm1heFwiLiBTYW1lIGZvciBhbnl0aGluZyB3aXRoIGEgY2xhbXBlZCBlbmRcbiAgICB2YXIgbWF4ID0gX21heFNjcm9sbCh0LnNjcm9sbGVyLCB0Ll9kaXIpO1xuXG4gICAgKHQudmFycy5lbmQgPT09IFwibWF4XCIgfHwgdC5fZW5kQ2xhbXAgJiYgdC5lbmQgPiBtYXgpICYmIHQuc2V0UG9zaXRpb25zKHQuc3RhcnQsIE1hdGgubWF4KHQuc3RhcnQgKyAxLCBtYXgpLCB0cnVlKTtcbiAgfSk7XG5cbiAgcmVmcmVzaEluaXRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnJlbmRlciAmJiByZXN1bHQucmVuZGVyKC0xKTtcbiAgfSk7IC8vIGlmIHRoZSBvblJlZnJlc2hJbml0KCkgcmV0dXJucyBhbiBhbmltYXRpb24gKHR5cGljYWxseSBhIGdzYXAuc2V0KCkpLCByZXZlcnQgaXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBwdXQgdGhpbmdzIGluIGEgY2VydGFpbiBzcG90IGJlZm9yZSByZWZyZXNoaW5nIGZvciBtZWFzdXJlbWVudCBwdXJwb3NlcywgYW5kIHRoZW4gcHV0IHRoaW5ncyBiYWNrLlxuXG4gIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKF9pc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIG9iai5zbW9vdGggJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9iai50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgfSk7XG4gICAgICBvYmoucmVjICYmIG9iaihvYmoucmVjKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9jbGVhclNjcm9sbE1lbW9yeShfc2Nyb2xsUmVzdG9yYXRpb24sIDEpO1xuXG4gIF9yZXNpemVEZWxheS5wYXVzZSgpO1xuXG4gIF9yZWZyZXNoSUQrKztcbiAgX3JlZnJlc2hpbmdBbGwgPSAyO1xuXG4gIF91cGRhdGVBbGwoMik7XG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odC52YXJzLm9uUmVmcmVzaCkgJiYgdC52YXJzLm9uUmVmcmVzaCh0KTtcbiAgfSk7XG5cbiAgX3JlZnJlc2hpbmdBbGwgPSBTY3JvbGxUcmlnZ2VyLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gIF9kaXNwYXRjaChcInJlZnJlc2hcIik7XG59LFxuICAgIF9sYXN0U2Nyb2xsID0gMCxcbiAgICBfZGlyZWN0aW9uID0gMSxcbiAgICBfcHJpbWFyeSxcbiAgICBfdXBkYXRlQWxsID0gZnVuY3Rpb24gX3VwZGF0ZUFsbChmb3JjZSkge1xuICBpZiAoIV9yZWZyZXNoaW5nQWxsIHx8IGZvcmNlID09PSAyKSB7XG4gICAgU2Nyb2xsVHJpZ2dlci5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICBfcHJpbWFyeSAmJiBfcHJpbWFyeS51cGRhdGUoMCk7IC8vIFNjcm9sbFNtb290aGVyIHVzZXMgcmVmcmVzaFByaW9yaXR5IC05OTk5IHRvIGJlY29tZSB0aGUgcHJpbWFyeSB0aGF0IGdldHMgdXBkYXRlZCBiZWZvcmUgYWxsIG90aGVycyBiZWNhdXNlIGl0IGFmZmVjdHMgdGhlIHNjcm9sbCBwb3NpdGlvbi5cblxuICAgIHZhciBsID0gX3RyaWdnZXJzLmxlbmd0aCxcbiAgICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICAgIHJlY29yZFZlbG9jaXR5ID0gdGltZSAtIF90aW1lMSA+PSA1MCxcbiAgICAgICAgc2Nyb2xsID0gbCAmJiBfdHJpZ2dlcnNbMF0uc2Nyb2xsKCk7XG5cbiAgICBfZGlyZWN0aW9uID0gX2xhc3RTY3JvbGwgPiBzY3JvbGwgPyAtMSA6IDE7XG4gICAgX3JlZnJlc2hpbmdBbGwgfHwgKF9sYXN0U2Nyb2xsID0gc2Nyb2xsKTtcblxuICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgICAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhX3BvaW50ZXJJc0Rvd24gJiYgdGltZSAtIF9sYXN0U2Nyb2xsVGltZSA+IDIwMCkge1xuICAgICAgICBfbGFzdFNjcm9sbFRpbWUgPSAwO1xuXG4gICAgICAgIF9kaXNwYXRjaChcInNjcm9sbEVuZFwiKTtcbiAgICAgIH1cblxuICAgICAgX3RpbWUyID0gX3RpbWUxO1xuICAgICAgX3RpbWUxID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAoX2RpcmVjdGlvbiA8IDApIHtcbiAgICAgIF9pID0gbDtcblxuICAgICAgd2hpbGUgKF9pLS0gPiAwKSB7XG4gICAgICAgIF90cmlnZ2Vyc1tfaV0gJiYgX3RyaWdnZXJzW19pXS51cGRhdGUoMCwgcmVjb3JkVmVsb2NpdHkpO1xuICAgICAgfVxuXG4gICAgICBfZGlyZWN0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgbDsgX2krKykge1xuICAgICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIF9yYWZJRCA9IDA7XG59LFxuICAgIF9wcm9wTmFtZXNUb0NvcHkgPSBbX2xlZnQsIF90b3AsIF9ib3R0b20sIF9yaWdodCwgX21hcmdpbiArIF9Cb3R0b20sIF9tYXJnaW4gKyBfUmlnaHQsIF9tYXJnaW4gKyBfVG9wLCBfbWFyZ2luICsgX0xlZnQsIFwiZGlzcGxheVwiLCBcImZsZXhTaHJpbmtcIiwgXCJmbG9hdFwiLCBcInpJbmRleFwiLCBcImdyaWRDb2x1bW5TdGFydFwiLCBcImdyaWRDb2x1bW5FbmRcIiwgXCJncmlkUm93U3RhcnRcIiwgXCJncmlkUm93RW5kXCIsIFwiZ3JpZEFyZWFcIiwgXCJqdXN0aWZ5U2VsZlwiLCBcImFsaWduU2VsZlwiLCBcInBsYWNlU2VsZlwiLCBcIm9yZGVyXCJdLFxuICAgIF9zdGF0ZVByb3BzID0gX3Byb3BOYW1lc1RvQ29weS5jb25jYXQoW193aWR0aCwgX2hlaWdodCwgXCJib3hTaXppbmdcIiwgXCJtYXhcIiArIF9XaWR0aCwgXCJtYXhcIiArIF9IZWlnaHQsIFwicG9zaXRpb25cIiwgX21hcmdpbiwgX3BhZGRpbmcsIF9wYWRkaW5nICsgX1RvcCwgX3BhZGRpbmcgKyBfUmlnaHQsIF9wYWRkaW5nICsgX0JvdHRvbSwgX3BhZGRpbmcgKyBfTGVmdF0pLFxuICAgIF9zd2FwUGluT3V0ID0gZnVuY3Rpb24gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHN0YXRlKSB7XG4gIF9zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgdmFyIGNhY2hlID0gcGluLl9nc2FwO1xuXG4gIGlmIChjYWNoZS5zcGFjZXJJc05hdGl2ZSkge1xuICAgIF9zZXRTdGF0ZShjYWNoZS5zcGFjZXJTdGF0ZSk7XG4gIH0gZWxzZSBpZiAocGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBwYXJlbnQgPSBzcGFjZXIucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocGluLCBzcGFjZXIpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHNwYWNlcik7XG4gICAgfVxuICB9XG5cbiAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IGZhbHNlO1xufSxcbiAgICBfc3dhcFBpbkluID0gZnVuY3Rpb24gX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgY3MsIHNwYWNlclN0YXRlKSB7XG4gIGlmICghcGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBpID0gX3Byb3BOYW1lc1RvQ29weS5sZW5ndGgsXG4gICAgICAgIHNwYWNlclN0eWxlID0gc3BhY2VyLnN0eWxlLFxuICAgICAgICBwaW5TdHlsZSA9IHBpbi5zdHlsZSxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHAgPSBfcHJvcE5hbWVzVG9Db3B5W2ldO1xuICAgICAgc3BhY2VyU3R5bGVbcF0gPSBjc1twXTtcbiAgICB9XG5cbiAgICBzcGFjZXJTdHlsZS5wb3NpdGlvbiA9IGNzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG4gICAgY3MuZGlzcGxheSA9PT0gXCJpbmxpbmVcIiAmJiAoc3BhY2VyU3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIHBpblN0eWxlW19ib3R0b21dID0gcGluU3R5bGVbX3JpZ2h0XSA9IFwiYXV0b1wiO1xuICAgIHNwYWNlclN0eWxlLmZsZXhCYXNpcyA9IGNzLmZsZXhCYXNpcyB8fCBcImF1dG9cIjtcbiAgICBzcGFjZXJTdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgIHNwYWNlclN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIHNwYWNlclN0eWxlW193aWR0aF0gPSBfZ2V0U2l6ZShwaW4sIF9ob3Jpem9udGFsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfaGVpZ2h0XSA9IF9nZXRTaXplKHBpbiwgX3ZlcnRpY2FsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfcGFkZGluZ10gPSBwaW5TdHlsZVtfbWFyZ2luXSA9IHBpblN0eWxlW190b3BdID0gcGluU3R5bGVbX2xlZnRdID0gXCIwXCI7XG5cbiAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG4gICAgcGluU3R5bGVbX3dpZHRoXSA9IHBpblN0eWxlW1wibWF4XCIgKyBfV2lkdGhdID0gY3NbX3dpZHRoXTtcbiAgICBwaW5TdHlsZVtfaGVpZ2h0XSA9IHBpblN0eWxlW1wibWF4XCIgKyBfSGVpZ2h0XSA9IGNzW19oZWlnaHRdO1xuICAgIHBpblN0eWxlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcblxuICAgIGlmIChwaW4ucGFyZW50Tm9kZSAhPT0gc3BhY2VyKSB7XG4gICAgICBwaW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhY2VyLCBwaW4pO1xuICAgICAgc3BhY2VyLmFwcGVuZENoaWxkKHBpbik7XG4gICAgfVxuXG4gICAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IHRydWU7XG4gIH1cbn0sXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9zZXRTdGF0ZSA9IGZ1bmN0aW9uIF9zZXRTdGF0ZShzdGF0ZSkge1xuICBpZiAoc3RhdGUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS50LnN0eWxlLFxuICAgICAgICBsID0gc3RhdGUubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcCxcbiAgICAgICAgdmFsdWU7XG4gICAgKHN0YXRlLnQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHN0YXRlLnQpKS51bmNhY2hlID0gMTsgLy8gb3RoZXJ3aXNlIHRyYW5zZm9ybXMgbWF5IGJlIG9mZlxuXG4gICAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGVbaSArIDFdO1xuICAgICAgcCA9IHN0YXRlW2ldO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgc3R5bGVbcF0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVbcF0pIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocC5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldFN0YXRlID0gZnVuY3Rpb24gX2dldFN0YXRlKGVsZW1lbnQpIHtcbiAgLy8gcmV0dXJucyBhbiBBcnJheSB3aXRoIGFsdGVybmF0aW5nIHZhbHVlcyBsaWtlIFtwcm9wZXJ0eSwgdmFsdWUsIHByb3BlcnR5LCB2YWx1ZV0gYW5kIGEgXCJ0XCIgcHJvcGVydHkgcG9pbnRpbmcgdG8gdGhlIHRhcmdldCAoZWxlbWVudCkuIE1ha2VzIGl0IGZhc3QgYW5kIGNoZWFwLlxuICB2YXIgbCA9IF9zdGF0ZVByb3BzLmxlbmd0aCxcbiAgICAgIHN0eWxlID0gZWxlbWVudC5zdHlsZSxcbiAgICAgIHN0YXRlID0gW10sXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHN0YXRlLnB1c2goX3N0YXRlUHJvcHNbaV0sIHN0eWxlW19zdGF0ZVByb3BzW2ldXSk7XG4gIH1cblxuICBzdGF0ZS50ID0gZWxlbWVudDtcbiAgcmV0dXJuIHN0YXRlO1xufSxcbiAgICBfY29weVN0YXRlID0gZnVuY3Rpb24gX2NvcHlTdGF0ZShzdGF0ZSwgb3ZlcnJpZGUsIG9taXRPZmZzZXRzKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG4gICAgICBpID0gb21pdE9mZnNldHMgPyA4IDogMCxcbiAgICAgIC8vIHNraXAgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIGlmIG9taXRPZmZzZXRzIGlzIHRydWVcbiAgcDtcblxuICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuICAgIHAgPSBzdGF0ZVtpXTtcbiAgICByZXN1bHQucHVzaChwLCBwIGluIG92ZXJyaWRlID8gb3ZlcnJpZGVbcF0gOiBzdGF0ZVtpICsgMV0pO1xuICB9XG5cbiAgcmVzdWx0LnQgPSBzdGF0ZS50O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfd2luT2Zmc2V0cyA9IHtcbiAgbGVmdDogMCxcbiAgdG9wOiAwXG59LFxuICAgIC8vIC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAoPykgQWxsb3cgdXNlcnMgdG8gY2FsY3VsYXRlIHdoZXJlIGEgdHJpZ2dlciBoaXRzIChzY3JvbGwgcG9zaXRpb24pIGxpa2UgZ2V0U2Nyb2xsUG9zaXRpb24oXCIjaWRcIiwgXCJ0b3AgYm90dG9tXCIpXG4vLyBfZ2V0U2Nyb2xsUG9zaXRpb24gPSAodHJpZ2dlciwgcG9zaXRpb24sIHtzY3JvbGxlciwgY29udGFpbmVyQW5pbWF0aW9uLCBob3Jpem9udGFsfSkgPT4ge1xuLy8gXHRzY3JvbGxlciA9IF9nZXRUYXJnZXQoc2Nyb2xsZXIgfHwgX3dpbik7XG4vLyBcdGxldCBkaXJlY3Rpb24gPSBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4vLyBcdFx0aXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHNjcm9sbGVyKTtcbi8vIFx0X2dldFNpemVGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0LCBkaXJlY3Rpb24pO1xuLy8gXHRyZXR1cm4gX3BhcnNlUG9zaXRpb24ocG9zaXRpb24sIF9nZXRUYXJnZXQodHJpZ2dlciksIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgZGlyZWN0aW9uKSgpLCBkaXJlY3Rpb24sIF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pKCksIDAsIDAsIDAsIF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCkoKSwgaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCwgMCwgY29udGFpbmVyQW5pbWF0aW9uID8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgOiBfbWF4U2Nyb2xsKHNjcm9sbGVyKSwgY29udGFpbmVyQW5pbWF0aW9uKTtcbi8vIH0sXG5fcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKHZhbHVlLCB0cmlnZ2VyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsLCBtYXJrZXIsIG1hcmtlclNjcm9sbGVyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIHNjcm9sbGVyTWF4LCBjb250YWluZXJBbmltYXRpb24sIGNsYW1wWmVyb1Byb3ApIHtcbiAgX2lzRnVuY3Rpb24odmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlKHNlbGYpKTtcblxuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5zdWJzdHIoMCwgMykgPT09IFwibWF4XCIpIHtcbiAgICB2YWx1ZSA9IHNjcm9sbGVyTWF4ICsgKHZhbHVlLmNoYXJBdCg0KSA9PT0gXCI9XCIgPyBfb2Zmc2V0VG9QeChcIjBcIiArIHZhbHVlLnN1YnN0cigzKSwgc2Nyb2xsZXJTaXplKSA6IDApO1xuICB9XG5cbiAgdmFyIHRpbWUgPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24udGltZSgpIDogMCxcbiAgICAgIHAxLFxuICAgICAgcDIsXG4gICAgICBlbGVtZW50O1xuICBjb250YWluZXJBbmltYXRpb24gJiYgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoMCk7XG4gIGlzTmFOKHZhbHVlKSB8fCAodmFsdWUgPSArdmFsdWUpOyAvLyBjb252ZXJ0IGEgc3RyaW5nIG51bWJlciBsaWtlIFwiNDVcIiB0byBhbiBhY3R1YWwgbnVtYmVyXG5cbiAgaWYgKCFfaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgX2lzRnVuY3Rpb24odHJpZ2dlcikgJiYgKHRyaWdnZXIgPSB0cmlnZ2VyKHNlbGYpKTtcbiAgICB2YXIgb2Zmc2V0cyA9ICh2YWx1ZSB8fCBcIjBcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICBib3VuZHMsXG4gICAgICAgIGxvY2FsT2Zmc2V0LFxuICAgICAgICBnbG9iYWxPZmZzZXQsXG4gICAgICAgIGRpc3BsYXk7XG4gICAgZWxlbWVudCA9IF9nZXRUYXJnZXQodHJpZ2dlciwgc2VsZikgfHwgX2JvZHk7XG4gICAgYm91bmRzID0gX2dldEJvdW5kcyhlbGVtZW50KSB8fCB7fTtcblxuICAgIGlmICgoIWJvdW5kcyB8fCAhYm91bmRzLmxlZnQgJiYgIWJvdW5kcy50b3ApICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyBpZiBkaXNwbGF5IGlzIFwibm9uZVwiLCBpdCB3b24ndCByZXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgcHJvcGVybHlcbiAgICAgIGRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuICAgICAgZGlzcGxheSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgOiBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICB9XG5cbiAgICBsb2NhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMF0sIGJvdW5kc1tkaXJlY3Rpb24uZF0pO1xuICAgIGdsb2JhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMV0gfHwgXCIwXCIsIHNjcm9sbGVyU2l6ZSk7XG4gICAgdmFsdWUgPSBib3VuZHNbZGlyZWN0aW9uLnBdIC0gc2Nyb2xsZXJCb3VuZHNbZGlyZWN0aW9uLnBdIC0gYm9yZGVyV2lkdGggKyBsb2NhbE9mZnNldCArIHNjcm9sbCAtIGdsb2JhbE9mZnNldDtcbiAgICBtYXJrZXJTY3JvbGxlciAmJiBfcG9zaXRpb25NYXJrZXIobWFya2VyU2Nyb2xsZXIsIGdsb2JhbE9mZnNldCwgZGlyZWN0aW9uLCBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQgPCAyMCB8fCBtYXJrZXJTY3JvbGxlci5faXNTdGFydCAmJiBnbG9iYWxPZmZzZXQgPiAyMCk7XG4gICAgc2Nyb2xsZXJTaXplIC09IHNjcm9sbGVyU2l6ZSAtIGdsb2JhbE9mZnNldDsgLy8gYWRqdXN0IGZvciB0aGUgbWFya2VyXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uICYmICh2YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuc3RhcnQsIGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmVuZCwgMCwgc2Nyb2xsZXJNYXgsIHZhbHVlKSk7XG4gICAgbWFya2VyU2Nyb2xsZXIgJiYgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoY2xhbXBaZXJvUHJvcCkge1xuICAgIHNlbGZbY2xhbXBaZXJvUHJvcF0gPSB2YWx1ZSB8fCAtMC4wMDE7XG4gICAgdmFsdWUgPCAwICYmICh2YWx1ZSA9IDApO1xuICB9XG5cbiAgaWYgKG1hcmtlcikge1xuICAgIHZhciBwb3NpdGlvbiA9IHZhbHVlICsgc2Nyb2xsZXJTaXplLFxuICAgICAgICBpc1N0YXJ0ID0gbWFya2VyLl9pc1N0YXJ0O1xuICAgIHAxID0gXCJzY3JvbGxcIiArIGRpcmVjdGlvbi5kMjtcblxuICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzU3RhcnQgJiYgcG9zaXRpb24gPiAyMCB8fCAhaXNTdGFydCAmJiAodXNlRml4ZWRQb3NpdGlvbiA/IE1hdGgubWF4KF9ib2R5W3AxXSwgX2RvY0VsW3AxXSkgOiBtYXJrZXIucGFyZW50Tm9kZVtwMV0pIDw9IHBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBfZ2V0Qm91bmRzKG1hcmtlclNjcm9sbGVyKTtcbiAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgKG1hcmtlci5zdHlsZVtkaXJlY3Rpb24ub3AucF0gPSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ub3AucF0gLSBkaXJlY3Rpb24ub3AubSAtIG1hcmtlci5fb2Zmc2V0ICsgX3B4KTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmIGVsZW1lbnQpIHtcbiAgICBwMSA9IF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoc2Nyb2xsZXJNYXgpO1xuICAgIHAyID0gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgICBjb250YWluZXJBbmltYXRpb24uX2NhU2Nyb2xsRGlzdCA9IHAxW2RpcmVjdGlvbi5wXSAtIHAyW2RpcmVjdGlvbi5wXTtcbiAgICB2YWx1ZSA9IHZhbHVlIC8gY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgKiBzY3JvbGxlck1heDtcbiAgfVxuXG4gIGNvbnRhaW5lckFuaW1hdGlvbiAmJiBjb250YWluZXJBbmltYXRpb24uc2Vlayh0aW1lKTtcbiAgcmV0dXJuIGNvbnRhaW5lckFuaW1hdGlvbiA/IHZhbHVlIDogTWF0aC5yb3VuZCh2YWx1ZSk7XG59LFxuICAgIF9wcmVmaXhFeHAgPSAvKHdlYmtpdHxtb3p8bGVuZ3RofGNzc1RleHR8aW5zZXQpL2ksXG4gICAgX3JlcGFyZW50ID0gZnVuY3Rpb24gX3JlcGFyZW50KGVsZW1lbnQsIHBhcmVudCwgdG9wLCBsZWZ0KSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgIHAsXG4gICAgICAgIGNzO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gX2JvZHkpIHtcbiAgICAgIGVsZW1lbnQuX3N0T3JpZyA9IHN0eWxlLmNzc1RleHQ7IC8vIHJlY29yZCBvcmlnaW5hbCBpbmxpbmUgc3R5bGVzIHNvIHdlIGNhbiByZXZlcnQgdGhlbSBsYXRlclxuXG4gICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICBmb3IgKHAgaW4gY3MpIHtcbiAgICAgICAgLy8gbXVzdCBjb3B5IGFsbCByZWxldmFudCBzdHlsZXMgdG8gZW5zdXJlIHRoYXQgbm90aGluZyBjaGFuZ2VzIHZpc3VhbGx5IHdoZW4gd2UgcmVwYXJlbnQgdG8gdGhlIDxib2R5Pi4gU2tpcCB0aGUgdmVuZG9yIHByZWZpeGVkIG9uZXMuXG4gICAgICAgIGlmICghK3AgJiYgIV9wcmVmaXhFeHAudGVzdChwKSAmJiBjc1twXSAmJiB0eXBlb2Ygc3R5bGVbcF0gPT09IFwic3RyaW5nXCIgJiYgcCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICBzdHlsZVtwXSA9IGNzW3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gZWxlbWVudC5fc3RPcmlnO1xuICAgIH1cblxuICAgIGdzYXAuY29yZS5nZXRDYWNoZShlbGVtZW50KS51bmNhY2hlID0gMTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn0sXG4gICAgX2ludGVycnVwdGlvblRyYWNrZXIgPSBmdW5jdGlvbiBfaW50ZXJydXB0aW9uVHJhY2tlcihnZXRWYWx1ZUZ1bmMsIGluaXRpYWxWYWx1ZSwgb25JbnRlcnJ1cHQpIHtcbiAgdmFyIGxhc3QxID0gaW5pdGlhbFZhbHVlLFxuICAgICAgbGFzdDIgPSBsYXN0MTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChnZXRWYWx1ZUZ1bmMoKSk7IC8vIHJvdW5kIGJlY2F1c2UgaW4gc29tZSBbdmVyeSB1bmNvbW1vbl0gV2luZG93cyBlbnZpcm9ubWVudHMsIHNjcm9sbCBjYW4gZ2V0IHJlcG9ydGVkIHdpdGggZGVjaW1hbHMgZXZlbiB0aG91Z2ggaXQgd2FzIHNldCB3aXRob3V0LlxuXG4gICAgaWYgKGN1cnJlbnQgIT09IGxhc3QxICYmIGN1cnJlbnQgIT09IGxhc3QyICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MSkgPiAzICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MikgPiAzKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBzY3JvbGxzLCBraWxsIHRoZSB0d2Vlbi4gaU9TIFNhZmFyaSBpbnRlcm1pdHRlbnRseSBtaXNyZXBvcnRzIHRoZSBzY3JvbGwgcG9zaXRpb24sIGl0IG1heSBiZSB0aGUgbW9zdCByZWNlbnRseS1zZXQgb25lIG9yIHRoZSBvbmUgYmVmb3JlIHRoYXQhIFdoZW4gU2FmYXJpIGlzIHpvb21lZCAoQ01ELSspLCBpdCBvZnRlbiBtaXNyZXBvcnRzIGFzIDEgcGl4ZWwgb2ZmIHRvbyEgU28gaWYgd2Ugc2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gMTI1LCBmb3IgZXhhbXBsZSwgaXQnbGwgYWN0dWFsbHkgcmVwb3J0IGl0IGFzIDEyNC5cbiAgICAgIHZhbHVlID0gY3VycmVudDtcbiAgICAgIG9uSW50ZXJydXB0ICYmIG9uSW50ZXJydXB0KCk7XG4gICAgfVxuXG4gICAgbGFzdDIgPSBsYXN0MTtcbiAgICBsYXN0MSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn0sXG4gICAgX3NoaWZ0TWFya2VyID0gZnVuY3Rpb24gX3NoaWZ0TWFya2VyKG1hcmtlciwgZGlyZWN0aW9uLCB2YWx1ZSkge1xuICB2YXIgdmFycyA9IHt9O1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IFwiKz1cIiArIHZhbHVlO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICAvLyBfbWVyZ2VBbmltYXRpb25zID0gYW5pbWF0aW9ucyA9PiB7XG4vLyBcdGxldCB0bCA9IGdzYXAudGltZWxpbmUoe3Ntb290aENoaWxkVGltaW5nOiB0cnVlfSkuc3RhcnRUaW1lKE1hdGgubWluKC4uLmFuaW1hdGlvbnMubWFwKGEgPT4gYS5nbG9iYWxUaW1lKDApKSkpO1xuLy8gXHRhbmltYXRpb25zLmZvckVhY2goYSA9PiB7bGV0IHRpbWUgPSBhLnRvdGFsVGltZSgpOyB0bC5hZGQoYSk7IGEudG90YWxUaW1lKHRpbWUpOyB9KTtcbi8vIFx0dGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBmYWxzZTtcbi8vIFx0cmV0dXJuIHRsO1xuLy8gfSxcbi8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHR3ZWVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaW4gdGhlIGRpcmVjdGlvbiBwcm92aWRlZCwgYW5kIHdoZW4gZG9pbmcgc28gaXQnbGwgYWRkIGEgLnR3ZWVuIHByb3BlcnR5IHRvIHRoZSBGVU5DVElPTiBpdHNlbGYsIGFuZCByZW1vdmUgaXQgd2hlbiB0aGUgdHdlZW4gY29tcGxldGVzIG9yIGdldHMga2lsbGVkLiBUaGlzIGdpdmVzIHVzIGEgd2F5IHRvIGhhdmUgbXVsdGlwbGUgU2Nyb2xsVHJpZ2dlcnMgdXNlIGEgY2VudHJhbCBmdW5jdGlvbiBmb3IgYW55IGdpdmVuIHNjcm9sbGVyIGFuZCBzZWUgaWYgdGhlcmUncyBhIHNjcm9sbCB0d2VlbiBydW5uaW5nICh3aGljaCB3b3VsZCBhZmZlY3QgaWYvaG93IHRoaW5ncyBnZXQgdXBkYXRlZClcbl9nZXRUd2VlbkNyZWF0b3IgPSBmdW5jdGlvbiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBkaXJlY3Rpb24pIHtcbiAgdmFyIGdldFNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgcHJvcCA9IFwiX3Njcm9sbFwiICsgZGlyZWN0aW9uLnAyLFxuICAgICAgLy8gYWRkIGEgdHdlZW5hYmxlIHByb3BlcnR5IHRvIHRoZSBzY3JvbGxlciB0aGF0J3MgYSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uLCBsaWtlIF9zY3JvbGxUb3Agb3IgX3Njcm9sbExlZnQuIFRoaXMgd2F5LCBpZiBzb21lb25lIGRvZXMgZ3NhcC5raWxsVHdlZW5zT2Yoc2Nyb2xsZXIpIGl0J2xsIGtpbGwgdGhlIHNjcm9sbCB0d2Vlbi5cbiAgZ2V0VHdlZW4gPSBmdW5jdGlvbiBnZXRUd2VlbihzY3JvbGxUbywgdmFycywgaW5pdGlhbFZhbHVlLCBjaGFuZ2UxLCBjaGFuZ2UyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4sXG4gICAgICAgIG9uQ29tcGxldGUgPSB2YXJzLm9uQ29tcGxldGUsXG4gICAgICAgIG1vZGlmaWVycyA9IHt9O1xuICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZSB8fCBnZXRTY3JvbGwoKTtcblxuICAgIHZhciBjaGVja0ZvckludGVycnVwdGlvbiA9IF9pbnRlcnJ1cHRpb25UcmFja2VyKGdldFNjcm9sbCwgaW5pdGlhbFZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0d2Vlbi5raWxsKCk7XG4gICAgICBnZXRUd2Vlbi50d2VlbiA9IDA7XG4gICAgfSk7XG5cbiAgICBjaGFuZ2UyID0gY2hhbmdlMSAmJiBjaGFuZ2UyIHx8IDA7IC8vIGlmIGNoYW5nZTEgaXMgMCwgd2Ugc2V0IHRoYXQgdG8gdGhlIGRpZmZlcmVuY2UgYW5kIGlnbm9yZSBjaGFuZ2UyLiBPdGhlcndpc2UsIHRoZXJlIHdvdWxkIGJlIGEgY29tcG91bmQgZWZmZWN0LlxuXG4gICAgY2hhbmdlMSA9IGNoYW5nZTEgfHwgc2Nyb2xsVG8gLSBpbml0aWFsVmFsdWU7XG4gICAgdHdlZW4gJiYgdHdlZW4ua2lsbCgpO1xuICAgIHZhcnNbcHJvcF0gPSBzY3JvbGxUbztcbiAgICB2YXJzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblxuICAgIG1vZGlmaWVyc1twcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjaGVja0ZvckludGVycnVwdGlvbihpbml0aWFsVmFsdWUgKyBjaGFuZ2UxICogdHdlZW4ucmF0aW8gKyBjaGFuZ2UyICogdHdlZW4ucmF0aW8gKiB0d2Vlbi5yYXRpbyk7XG4gICAgfTtcblxuICAgIHZhcnMub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICAgIF91cGRhdGVBbGwoKTtcbiAgICB9O1xuXG4gICAgdmFycy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZ2V0VHdlZW4udHdlZW4gPSAwO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlLmNhbGwodHdlZW4pO1xuICAgIH07XG5cbiAgICB0d2VlbiA9IGdldFR3ZWVuLnR3ZWVuID0gZ3NhcC50byhzY3JvbGxlciwgdmFycyk7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9O1xuXG4gIHNjcm9sbGVyW3Byb3BdID0gZ2V0U2Nyb2xsO1xuXG4gIGdldFNjcm9sbC53aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFR3ZWVuLnR3ZWVuICYmIGdldFR3ZWVuLnR3ZWVuLmtpbGwoKSAmJiAoZ2V0VHdlZW4udHdlZW4gPSAwKTtcbiAgfTtcblxuICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwid2hlZWxcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7IC8vIFdpbmRvd3MgbWFjaGluZXMgaGFuZGxlIG1vdXNld2hlZWwgc2Nyb2xsaW5nIGluIGNodW5rcyAobGlrZSBcIjMgbGluZXMgcGVyIHNjcm9sbFwiKSBtZWFuaW5nIHRoZSB0eXBpY2FsIHN0cmF0ZWd5IGZvciBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgaXNuJ3QgYXMgc2Vuc2l0aXZlLiBJdCdzIG11Y2ggbW9yZSBsaWtlbHkgdG8gbWF0Y2ggb25lIG9mIHRoZSBwcmV2aW91cyAyIHNjcm9sbCBldmVudCBwb3NpdGlvbnMuIFNvIHdlIGtpbGwgYW55IHNuYXBwaW5nIGFzIHNvb24gYXMgdGhlcmUncyBhIHdoZWVsIGV2ZW50LlxuXG5cbiAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoICYmIF9hZGRMaXN0ZW5lcihzY3JvbGxlciwgXCJ0b3VjaG1vdmVcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7XG4gIHJldHVybiBnZXRUd2Vlbjtcbn07XG5cbmV4cG9ydCB2YXIgU2Nyb2xsVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjcm9sbFRyaWdnZXIodmFycywgYW5pbWF0aW9uKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIoZ3NhcCkgfHwgY29uc29sZS53YXJuKFwiUGxlYXNlIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcIik7XG5cbiAgICBfY29udGV4dCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdCh2YXJzLCBhbmltYXRpb24pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFRyaWdnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzLCBhbmltYXRpb24pIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5zdGFydCA9IDA7XG4gICAgdGhpcy52YXJzICYmIHRoaXMua2lsbCh0cnVlLCB0cnVlKTsgLy8gaW4gY2FzZSBpdCdzIGJlaW5nIGluaXR0ZWQgYWdhaW5cblxuICAgIGlmICghX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy5yZWZyZXNoID0gdGhpcy5raWxsID0gX3Bhc3NUaHJvdWdoO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhcnMgPSBfc2V0RGVmYXVsdHMoX2lzU3RyaW5nKHZhcnMpIHx8IF9pc051bWJlcih2YXJzKSB8fCB2YXJzLm5vZGVUeXBlID8ge1xuICAgICAgdHJpZ2dlcjogdmFyc1xuICAgIH0gOiB2YXJzLCBfZGVmYXVsdHMpO1xuXG4gICAgdmFyIF92YXJzID0gdmFycyxcbiAgICAgICAgb25VcGRhdGUgPSBfdmFycy5vblVwZGF0ZSxcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSBfdmFycy50b2dnbGVDbGFzcyxcbiAgICAgICAgaWQgPSBfdmFycy5pZCxcbiAgICAgICAgb25Ub2dnbGUgPSBfdmFycy5vblRvZ2dsZSxcbiAgICAgICAgb25SZWZyZXNoID0gX3ZhcnMub25SZWZyZXNoLFxuICAgICAgICBzY3J1YiA9IF92YXJzLnNjcnViLFxuICAgICAgICB0cmlnZ2VyID0gX3ZhcnMudHJpZ2dlcixcbiAgICAgICAgcGluID0gX3ZhcnMucGluLFxuICAgICAgICBwaW5TcGFjaW5nID0gX3ZhcnMucGluU3BhY2luZyxcbiAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCA9IF92YXJzLmludmFsaWRhdGVPblJlZnJlc2gsXG4gICAgICAgIGFudGljaXBhdGVQaW4gPSBfdmFycy5hbnRpY2lwYXRlUGluLFxuICAgICAgICBvblNjcnViQ29tcGxldGUgPSBfdmFycy5vblNjcnViQ29tcGxldGUsXG4gICAgICAgIG9uU25hcENvbXBsZXRlID0gX3ZhcnMub25TbmFwQ29tcGxldGUsXG4gICAgICAgIG9uY2UgPSBfdmFycy5vbmNlLFxuICAgICAgICBzbmFwID0gX3ZhcnMuc25hcCxcbiAgICAgICAgcGluUmVwYXJlbnQgPSBfdmFycy5waW5SZXBhcmVudCxcbiAgICAgICAgcGluU3BhY2VyID0gX3ZhcnMucGluU3BhY2VyLFxuICAgICAgICBjb250YWluZXJBbmltYXRpb24gPSBfdmFycy5jb250YWluZXJBbmltYXRpb24sXG4gICAgICAgIGZhc3RTY3JvbGxFbmQgPSBfdmFycy5mYXN0U2Nyb2xsRW5kLFxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgPSBfdmFycy5wcmV2ZW50T3ZlcmxhcHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IHZhcnMuaG9yaXpvbnRhbCB8fCB2YXJzLmNvbnRhaW5lckFuaW1hdGlvbiAmJiB2YXJzLmhvcml6b250YWwgIT09IGZhbHNlID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4gICAgICAgIGlzVG9nZ2xlID0gIXNjcnViICYmIHNjcnViICE9PSAwLFxuICAgICAgICBzY3JvbGxlciA9IF9nZXRUYXJnZXQodmFycy5zY3JvbGxlciB8fCBfd2luKSxcbiAgICAgICAgc2Nyb2xsZXJDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShzY3JvbGxlciksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydChzY3JvbGxlciksXG4gICAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSAoXCJwaW5UeXBlXCIgaW4gdmFycyA/IHZhcnMucGluVHlwZSA6IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwicGluVHlwZVwiKSB8fCBpc1ZpZXdwb3J0ICYmIFwiZml4ZWRcIikgPT09IFwiZml4ZWRcIixcbiAgICAgICAgY2FsbGJhY2tzID0gW3ZhcnMub25FbnRlciwgdmFycy5vbkxlYXZlLCB2YXJzLm9uRW50ZXJCYWNrLCB2YXJzLm9uTGVhdmVCYWNrXSxcbiAgICAgICAgdG9nZ2xlQWN0aW9ucyA9IGlzVG9nZ2xlICYmIHZhcnMudG9nZ2xlQWN0aW9ucy5zcGxpdChcIiBcIiksXG4gICAgICAgIG1hcmtlcnMgPSBcIm1hcmtlcnNcIiBpbiB2YXJzID8gdmFycy5tYXJrZXJzIDogX2RlZmF1bHRzLm1hcmtlcnMsXG4gICAgICAgIGJvcmRlcldpZHRoID0gaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9uUmVmcmVzaEluaXQgPSB2YXJzLm9uUmVmcmVzaEluaXQgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhcnMub25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICB9LFxuICAgICAgICBnZXRTY3JvbGxlclNpemUgPSBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbiksXG4gICAgICAgIGdldFNjcm9sbGVyT2Zmc2V0cyA9IF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCksXG4gICAgICAgIGxhc3RTbmFwID0gMCxcbiAgICAgICAgbGFzdFJlZnJlc2ggPSAwLFxuICAgICAgICBwcmV2UHJvZ3Jlc3MgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jID0gX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgIHR3ZWVuVG8sXG4gICAgICAgIHBpbkNhY2hlLFxuICAgICAgICBzbmFwRnVuYyxcbiAgICAgICAgc2Nyb2xsMSxcbiAgICAgICAgc2Nyb2xsMixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgbWFya2VyU3RhcnQsXG4gICAgICAgIG1hcmtlckVuZCxcbiAgICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJFbmRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJWYXJzLFxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2gsXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSxcbiAgICAgICAgcGluQWN0aXZlU3RhdGUsXG4gICAgICAgIHBpblN0YXRlLFxuICAgICAgICBzcGFjZXIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgcGluR2V0dGVyLFxuICAgICAgICBwaW5TZXR0ZXIsXG4gICAgICAgIHBpblN0YXJ0LFxuICAgICAgICBwaW5DaGFuZ2UsXG4gICAgICAgIHNwYWNpbmdTdGFydCxcbiAgICAgICAgc3BhY2VyU3RhdGUsXG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyLFxuICAgICAgICBwaW5Nb3ZlcyxcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyLFxuICAgICAgICBjcyxcbiAgICAgICAgc25hcDEsXG4gICAgICAgIHNuYXAyLFxuICAgICAgICBzY3J1YlR3ZWVuLFxuICAgICAgICBzY3J1YlNtb290aCxcbiAgICAgICAgc25hcER1ckNsYW1wLFxuICAgICAgICBzbmFwRGVsYXllZENhbGwsXG4gICAgICAgIHByZXZTY3JvbGwsXG4gICAgICAgIHByZXZBbmltUHJvZ3Jlc3MsXG4gICAgICAgIGNhTWFya2VyU2V0dGVyLFxuICAgICAgICBjdXN0b21SZXZlcnRSZXR1cm47IC8vIGZvciB0aGUgc2FrZSBvZiBlZmZpY2llbmN5LCBfc3RhcnRDbGFtcC9fZW5kQ2xhbXAgc2VydmUgbGlrZSBhIHRydXRoeSB2YWx1ZSBpbmRpY2F0aW5nIHRoYXQgY2xhbXBpbmcgd2FzIGVuYWJsZWQgb24gdGhlIHN0YXJ0L2VuZCwgYW5kIEFMU08gc3RvcmUgdGhlIGFjdHVhbCBwcmUtY2xhbXBlZCBudW1lcmljIHZhbHVlLiBXZSB0YXAgaW50byB0aGF0IGluIFNjcm9sbFNtb290aGVyIGZvciBzcGVlZCBlZmZlY3RzLiBTbyBmb3IgZXhhbXBsZSwgaWYgc3RhcnQ9XCJjbGFtcCh0b3AgYm90dG9tKVwiIHJlc3VsdHMgaW4gYSBzdGFydCBvZiAtMTAwIG5hdHVyYWxseSwgaXQgd291bGQgZ2V0IGNsYW1wZWQgdG8gMCBidXQgLTEwMCB3b3VsZCBiZSBzdG9yZWQgaW4gX3N0YXJ0Q2xhbXAuXG5cblxuICAgIHNlbGYuX3N0YXJ0Q2xhbXAgPSBzZWxmLl9lbmRDbGFtcCA9IGZhbHNlO1xuICAgIHNlbGYuX2RpciA9IGRpcmVjdGlvbjtcbiAgICBhbnRpY2lwYXRlUGluICo9IDQ1O1xuICAgIHNlbGYuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcbiAgICBzZWxmLnNjcm9sbCA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IGNvbnRhaW5lckFuaW1hdGlvbi50aW1lLmJpbmQoY29udGFpbmVyQW5pbWF0aW9uKSA6IHNjcm9sbEZ1bmM7XG4gICAgc2Nyb2xsMSA9IHNjcm9sbEZ1bmMoKTtcbiAgICBzZWxmLnZhcnMgPSB2YXJzO1xuICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCB2YXJzLmFuaW1hdGlvbjtcblxuICAgIGlmIChcInJlZnJlc2hQcmlvcml0eVwiIGluIHZhcnMpIHtcbiAgICAgIF9zb3J0ID0gMTtcbiAgICAgIHZhcnMucmVmcmVzaFByaW9yaXR5ID09PSAtOTk5OSAmJiAoX3ByaW1hcnkgPSBzZWxmKTsgLy8gdXNlZCBieSBTY3JvbGxTbW9vdGhlclxuICAgIH1cblxuICAgIHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGwgPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsIHx8IHtcbiAgICAgIHRvcDogX2dldFR3ZWVuQ3JlYXRvcihzY3JvbGxlciwgX3ZlcnRpY2FsKSxcbiAgICAgIGxlZnQ6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF9ob3Jpem9udGFsKVxuICAgIH07XG4gICAgc2VsZi50d2VlblRvID0gdHdlZW5UbyA9IHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGxbZGlyZWN0aW9uLnBdO1xuXG4gICAgc2VsZi5zY3J1YkR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBzY3J1YlNtb290aCA9IF9pc051bWJlcih2YWx1ZSkgJiYgdmFsdWU7XG5cbiAgICAgIGlmICghc2NydWJTbW9vdGgpIHtcbiAgICAgICAgc2NydWJUd2VlbiAmJiBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpLmtpbGwoKTtcbiAgICAgICAgc2NydWJUd2VlbiA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5kdXJhdGlvbih2YWx1ZSkgOiBzY3J1YlR3ZWVuID0gZ3NhcC50byhhbmltYXRpb24sIHtcbiAgICAgICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgICAgICB0b3RhbFByb2dyZXNzOiBcIis9MFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiBzY3J1YlNtb290aCxcbiAgICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBvblNjcnViQ29tcGxldGUgJiYgb25TY3J1YkNvbXBsZXRlKHNlbGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi52YXJzLmxhenkgPSBmYWxzZTtcbiAgICAgIGFuaW1hdGlvbi5faW5pdHRlZCAmJiAhc2VsZi5pc1JldmVydGVkIHx8IGFuaW1hdGlvbi52YXJzLmltbWVkaWF0ZVJlbmRlciAhPT0gZmFsc2UgJiYgdmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIGFuaW1hdGlvbi5kdXJhdGlvbigpICYmIGFuaW1hdGlvbi5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogaWYgdGhpcyBTY3JvbGxUcmlnZ2VyIGdldHMgcmUtaW5pdHRlZCwgYSBmcm9tKCkgdHdlZW4gd2l0aCBhIHN0YWdnZXIgY291bGQgZ2V0IGluaXR0ZWQgaW5pdGlhbGx5IGFuZCB0aGVuIHJldmVydGVkIG9uIHRoZSByZS1pbml0IHdoaWNoIG1lYW5zIGl0J2xsIG5lZWQgdG8gZ2V0IHJlbmRlcmVkIGFnYWluIGhlcmUgdG8gcHJvcGVybHkgZGlzcGxheSB0aGluZ3MuIE90aGVyd2lzZSwgU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMzY3Nzctc2Nyb2xsc21vb3RoZXItc3BsaXR0ZXh0LW5leHRqcy8gYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL2VZUHlQcGQ/ZWRpdG9ycz0wMDEwXG5cbiAgICAgIHNlbGYuYW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IHNlbGY7XG4gICAgICBzZWxmLnNjcnViRHVyYXRpb24oc2NydWIpO1xuICAgICAgc25hcDEgPSAwO1xuICAgICAgaWQgfHwgKGlkID0gYW5pbWF0aW9uLnZhcnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChzbmFwKSB7XG4gICAgICAvLyBUT0RPOiBwb3RlbnRpYWwgaWRlYTogdXNlIGxlZ2l0aW1hdGUgQ1NTIHNjcm9sbCBzbmFwcGluZyBieSBwdXNoaW5nIGludmlzaWJsZSBlbGVtZW50cyBpbnRvIHRoZSBET00gdGhhdCBzZXJ2ZSBhcyBzbmFwIHBvc2l0aW9ucywgYW5kIHRvZ2dsZSB0aGUgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSBvblRvZ2dsZS4gU2VlIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqTHJnV00gZm9yIGEgcXVpY2sgcHJvb2Ygb2YgY29uY2VwdC5cbiAgICAgIGlmICghX2lzT2JqZWN0KHNuYXApIHx8IHNuYXAucHVzaCkge1xuICAgICAgICBzbmFwID0ge1xuICAgICAgICAgIHNuYXBUbzogc25hcFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBcInNjcm9sbEJlaGF2aW9yXCIgaW4gX2JvZHkuc3R5bGUgJiYgZ3NhcC5zZXQoaXNWaWV3cG9ydCA/IFtfYm9keSwgX2RvY0VsXSA6IHNjcm9sbGVyLCB7XG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcImF1dG9cIlxuICAgICAgfSk7IC8vIHNtb290aCBzY3JvbGxpbmcgZG9lc24ndCB3b3JrIHdpdGggc25hcC5cblxuICAgICAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBfaXNGdW5jdGlvbihvKSAmJiBvLnRhcmdldCA9PT0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpICYmIChvLnNtb290aCA9IGZhbHNlKTtcbiAgICAgIH0pOyAvLyBub3RlOiBzZXQgc21vb3RoIHRvIGZhbHNlIG9uIGJvdGggdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHNjcm9sbCBnZXR0ZXJzL3NldHRlcnNcblxuXG4gICAgICBzbmFwRnVuYyA9IF9pc0Z1bmN0aW9uKHNuYXAuc25hcFRvKSA/IHNuYXAuc25hcFRvIDogc25hcC5zbmFwVG8gPT09IFwibGFiZWxzXCIgPyBfZ2V0Q2xvc2VzdExhYmVsKGFuaW1hdGlvbikgOiBzbmFwLnNuYXBUbyA9PT0gXCJsYWJlbHNEaXJlY3Rpb25hbFwiID8gX2dldExhYmVsQXREaXJlY3Rpb24oYW5pbWF0aW9uKSA6IHNuYXAuZGlyZWN0aW9uYWwgIT09IGZhbHNlID8gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgICAgICByZXR1cm4gX3NuYXBEaXJlY3Rpb25hbChzbmFwLnNuYXBUbykodmFsdWUsIF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCA/IDAgOiBzdC5kaXJlY3Rpb24pO1xuICAgICAgfSA6IGdzYXAudXRpbHMuc25hcChzbmFwLnNuYXBUbyk7XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBzbmFwLmR1cmF0aW9uIHx8IHtcbiAgICAgICAgbWluOiAwLjEsXG4gICAgICAgIG1heDogMlxuICAgICAgfTtcbiAgICAgIHNuYXBEdXJDbGFtcCA9IF9pc09iamVjdChzbmFwRHVyQ2xhbXApID8gX2NsYW1wKHNuYXBEdXJDbGFtcC5taW4sIHNuYXBEdXJDbGFtcC5tYXgpIDogX2NsYW1wKHNuYXBEdXJDbGFtcCwgc25hcER1ckNsYW1wKTtcbiAgICAgIHNuYXBEZWxheWVkQ2FsbCA9IGdzYXAuZGVsYXllZENhbGwoc25hcC5kZWxheSB8fCBzY3J1YlNtb290aCAvIDIgfHwgMC4xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSBzY3JvbGxGdW5jKCksXG4gICAgICAgICAgICByZWZyZXNoZWRSZWNlbnRseSA9IF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCxcbiAgICAgICAgICAgIHR3ZWVuID0gdHdlZW5Uby50d2VlbjtcblxuICAgICAgICBpZiAoKHJlZnJlc2hlZFJlY2VudGx5IHx8IE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPCAxMCkgJiYgIXR3ZWVuICYmICFfcG9pbnRlcklzRG93biAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNjcm9sbCAtIHN0YXJ0KSAvIGNoYW5nZSxcbiAgICAgICAgICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIHZlbG9jaXR5ID0gcmVmcmVzaGVkUmVjZW50bHkgPyAwIDogKHRvdGFsUHJvZ3Jlc3MgLSBzbmFwMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDAsXG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBnc2FwLnV0aWxzLmNsYW1wKC1wcm9ncmVzcywgMSAtIHByb2dyZXNzLCBfYWJzKHZlbG9jaXR5IC8gMikgKiB2ZWxvY2l0eSAvIDAuMTg1KSxcbiAgICAgICAgICAgICAgbmF0dXJhbEVuZCA9IHByb2dyZXNzICsgKHNuYXAuaW5lcnRpYSA9PT0gZmFsc2UgPyAwIDogY2hhbmdlMSksXG4gICAgICAgICAgICAgIGVuZFZhbHVlID0gX2NsYW1wKDAsIDEsIHNuYXBGdW5jKG5hdHVyYWxFbmQsIHNlbGYpKSxcbiAgICAgICAgICAgICAgZW5kU2Nyb2xsID0gTWF0aC5yb3VuZChzdGFydCArIGVuZFZhbHVlICogY2hhbmdlKSxcbiAgICAgICAgICAgICAgX3NuYXAgPSBzbmFwLFxuICAgICAgICAgICAgICBvblN0YXJ0ID0gX3NuYXAub25TdGFydCxcbiAgICAgICAgICAgICAgX29uSW50ZXJydXB0ID0gX3NuYXAub25JbnRlcnJ1cHQsXG4gICAgICAgICAgICAgIF9vbkNvbXBsZXRlID0gX3NuYXAub25Db21wbGV0ZTtcblxuICAgICAgICAgIGlmIChzY3JvbGwgPD0gZW5kICYmIHNjcm9sbCA+PSBzdGFydCAmJiBlbmRTY3JvbGwgIT09IHNjcm9sbCkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuICYmICF0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5kYXRhIDw9IF9hYnMoZW5kU2Nyb2xsIC0gc2Nyb2xsKSkge1xuICAgICAgICAgICAgICAvLyB0aGVyZSdzIGFuIG92ZXJsYXBwaW5nIHNuYXAhIFNvIHdlIG11c3QgZmlndXJlIG91dCB3aGljaCBvbmUgaXMgY2xvc2VyIGFuZCBsZXQgdGhhdCB0d2VlbiBsaXZlLlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbmFwLmluZXJ0aWEgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBlbmRWYWx1ZSAtIHByb2dyZXNzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0d2VlblRvKGVuZFNjcm9sbCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogc25hcER1ckNsYW1wKF9hYnMoTWF0aC5tYXgoX2FicyhuYXR1cmFsRW5kIC0gdG90YWxQcm9ncmVzcyksIF9hYnMoZW5kVmFsdWUgLSB0b3RhbFByb2dyZXNzKSkgKiAwLjE4NSAvIHZlbG9jaXR5IC8gMC4wNSB8fCAwKSksXG4gICAgICAgICAgICAgIGVhc2U6IHNuYXAuZWFzZSB8fCBcInBvd2VyM1wiLFxuICAgICAgICAgICAgICBkYXRhOiBfYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCksXG4gICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgZGlzdGFuY2Ugc28gdGhhdCBpZiBhbm90aGVyIHNuYXAgdHdlZW4gb2NjdXJzIChjb25mbGljdCkgd2UgY2FuIHByaW9yaXRpemUgdGhlIGNsb3Nlc3Qgc25hcC5cbiAgICAgICAgICAgICAgb25JbnRlcnJ1cHQ6IGZ1bmN0aW9uIG9uSW50ZXJydXB0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKSAmJiBfb25JbnRlcnJ1cHQgJiYgX29uSW50ZXJydXB0KHNlbGYpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgICAgICAgICAgc25hcDEgPSBzbmFwMiA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogc2VsZi5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBvblNuYXBDb21wbGV0ZSAmJiBvblNuYXBDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSAmJiBfb25Db21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc2Nyb2xsLCBjaGFuZ2UxICogY2hhbmdlLCBlbmRTY3JvbGwgLSBzY3JvbGwgLSBjaGFuZ2UxICogY2hhbmdlKTtcbiAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydChzZWxmLCB0d2VlblRvLnR3ZWVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0FjdGl2ZSAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWQgJiYgKF9pZHNbaWRdID0gc2VsZik7XG4gICAgdHJpZ2dlciA9IHNlbGYudHJpZ2dlciA9IF9nZXRUYXJnZXQodHJpZ2dlciB8fCBwaW4gIT09IHRydWUgJiYgcGluKTsgLy8gaWYgYSB0cmlnZ2VyIGhhcyBzb21lIGtpbmQgb2Ygc2Nyb2xsLXJlbGF0ZWQgZWZmZWN0IGFwcGxpZWQgdGhhdCBjb3VsZCBjb250YW1pbmF0ZSB0aGUgXCJ5XCIgb3IgXCJ4XCIgcG9zaXRpb24gKGxpa2UgYSBTY3JvbGxTbW9vdGhlciBlZmZlY3QpLCB3ZSBuZWVkZWQgYSB3YXkgdG8gdGVtcG9yYXJpbHkgcmV2ZXJ0IGl0LCBzbyB3ZSB1c2UgdGhlIHN0UmV2ZXJ0IHByb3BlcnR5IG9mIHRoZSBnc0NhY2hlLiBJdCBjYW4gcmV0dXJuIGFub3RoZXIgZnVuY3Rpb24gdGhhdCB3ZSdsbCBjYWxsIGF0IHRoZSBlbmQgc28gaXQgY2FuIHJldHVybiB0byBpdHMgbm9ybWFsIHN0YXRlLlxuXG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuID0gdHJpZ2dlciAmJiB0cmlnZ2VyLl9nc2FwICYmIHRyaWdnZXIuX2dzYXAuc3RSZXZlcnQ7XG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuICYmIChjdXN0b21SZXZlcnRSZXR1cm4gPSBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZikpO1xuICAgIHBpbiA9IHBpbiA9PT0gdHJ1ZSA/IHRyaWdnZXIgOiBfZ2V0VGFyZ2V0KHBpbik7XG4gICAgX2lzU3RyaW5nKHRvZ2dsZUNsYXNzKSAmJiAodG9nZ2xlQ2xhc3MgPSB7XG4gICAgICB0YXJnZXRzOiB0cmlnZ2VyLFxuICAgICAgY2xhc3NOYW1lOiB0b2dnbGVDbGFzc1xuICAgIH0pO1xuXG4gICAgaWYgKHBpbikge1xuICAgICAgcGluU3BhY2luZyA9PT0gZmFsc2UgfHwgcGluU3BhY2luZyA9PT0gX21hcmdpbiB8fCAocGluU3BhY2luZyA9ICFwaW5TcGFjaW5nICYmIHBpbi5wYXJlbnROb2RlICYmIHBpbi5wYXJlbnROb2RlLnN0eWxlICYmIF9nZXRDb21wdXRlZFN0eWxlKHBpbi5wYXJlbnROb2RlKS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IGZhbHNlIDogX3BhZGRpbmcpOyAvLyBpZiB0aGUgcGFyZW50IGlzIGRpc3BsYXk6IGZsZXgsIGRvbid0IGFwcGx5IHBpblNwYWNpbmcgYnkgZGVmYXVsdC4gV2Ugc2hvdWxkIGNoZWNrIHRoYXQgcGluLnBhcmVudE5vZGUgaXMgYW4gZWxlbWVudCAobm90IHNoYWRvdyBkb20gd2luZG93KVxuXG4gICAgICBzZWxmLnBpbiA9IHBpbjtcbiAgICAgIHBpbkNhY2hlID0gZ3NhcC5jb3JlLmdldENhY2hlKHBpbik7XG5cbiAgICAgIGlmICghcGluQ2FjaGUuc3BhY2VyKSB7XG4gICAgICAgIC8vIHJlY29yZCB0aGUgc3BhY2VyIGFuZCBwaW5PcmlnaW5hbFN0YXRlIG9uIHRoZSBjYWNoZSBpbiBjYXNlIHNvbWVvbmUgdHJpZXMgcGlubmluZyB0aGUgc2FtZSBlbGVtZW50IHdpdGggTVVMVElQTEUgU2Nyb2xsVHJpZ2dlcnMgLSB3ZSBkb24ndCB3YW50IHRvIGhhdmUgbXVsdGlwbGUgc3BhY2VycyBvciByZWNvcmQgdGhlIFwib3JpZ2luYWxcIiBwaW4gc3RhdGUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBhZmZlY3RlZCBieSBhbm90aGVyIFNjcm9sbFRyaWdnZXIuXG4gICAgICAgIGlmIChwaW5TcGFjZXIpIHtcbiAgICAgICAgICBwaW5TcGFjZXIgPSBfZ2V0VGFyZ2V0KHBpblNwYWNlcik7XG4gICAgICAgICAgcGluU3BhY2VyICYmICFwaW5TcGFjZXIubm9kZVR5cGUgJiYgKHBpblNwYWNlciA9IHBpblNwYWNlci5jdXJyZW50IHx8IHBpblNwYWNlci5uYXRpdmVFbGVtZW50KTsgLy8gZm9yIFJlYWN0ICYgQW5ndWxhclxuXG4gICAgICAgICAgcGluQ2FjaGUuc3BhY2VySXNOYXRpdmUgPSAhIXBpblNwYWNlcjtcbiAgICAgICAgICBwaW5TcGFjZXIgJiYgKHBpbkNhY2hlLnNwYWNlclN0YXRlID0gX2dldFN0YXRlKHBpblNwYWNlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGluQ2FjaGUuc3BhY2VyID0gc3BhY2VyID0gcGluU3BhY2VyIHx8IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJwaW4tc3BhY2VyXCIpO1xuICAgICAgICBpZCAmJiBzcGFjZXIuY2xhc3NMaXN0LmFkZChcInBpbi1zcGFjZXItXCIgKyBpZCk7XG4gICAgICAgIHBpbkNhY2hlLnBpblN0YXRlID0gcGluT3JpZ2luYWxTdGF0ZSA9IF9nZXRTdGF0ZShwaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSA9IHBpbkNhY2hlLnBpblN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXJzLmZvcmNlM0QgIT09IGZhbHNlICYmIGdzYXAuc2V0KHBpbiwge1xuICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3BhY2VyID0gc3BhY2VyID0gcGluQ2FjaGUuc3BhY2VyO1xuICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgc3BhY2luZ1N0YXJ0ID0gY3NbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdO1xuICAgICAgcGluR2V0dGVyID0gZ3NhcC5nZXRQcm9wZXJ0eShwaW4pO1xuICAgICAgcGluU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihwaW4sIGRpcmVjdGlvbi5hLCBfcHgpOyAvLyBwaW4uZmlyc3RDaGlsZCAmJiAhX21heFNjcm9sbChwaW4sIGRpcmVjdGlvbikgJiYgKHBpbi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCIpOyAvLyBwcm90ZWN0cyBmcm9tIGNvbGxhcHNpbmcgbWFyZ2lucywgYnV0IGNhbiBoYXZlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xZTQyYzdhNzNiZmE0MDlkMmNmMWUxODRlN2E0MjQ4ZCBzbyBpdCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiBqdXN0IHRlbGxpbmcgcGVvcGxlIHRvIHNldCB1cCB0aGVpciBDU1MgdG8gYXZvaWQgdGhlIGNvbGxhcHNpbmcgbWFyZ2lucyAob3ZlcmZsb3c6IGhpZGRlbiB8IGF1dG8gaXMganVzdCBvbmUgb3B0aW9uLiBBbm90aGVyIGlzIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudCkuXG5cbiAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgcGluU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcbiAgICB9XG5cbiAgICBpZiAobWFya2Vycykge1xuICAgICAgbWFya2VyVmFycyA9IF9pc09iamVjdChtYXJrZXJzKSA/IF9zZXREZWZhdWx0cyhtYXJrZXJzLCBfbWFya2VyRGVmYXVsdHMpIDogX21hcmtlckRlZmF1bHRzO1xuICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLXN0YXJ0XCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwKTtcbiAgICAgIG1hcmtlckVuZFRyaWdnZXIgPSBfY3JlYXRlTWFya2VyKFwic2Nyb2xsZXItZW5kXCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwLCBtYXJrZXJTdGFydFRyaWdnZXIpO1xuICAgICAgb2Zmc2V0ID0gbWFya2VyU3RhcnRUcmlnZ2VyW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gICAgICB2YXIgY29udGVudCA9IF9nZXRUYXJnZXQoX2dldFByb3h5UHJvcChzY3JvbGxlciwgXCJjb250ZW50XCIpIHx8IHNjcm9sbGVyKTtcblxuICAgICAgbWFya2VyU3RhcnQgPSB0aGlzLm1hcmtlclN0YXJ0ID0gX2NyZWF0ZU1hcmtlcihcInN0YXJ0XCIsIGlkLCBjb250ZW50LCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIG9mZnNldCwgMCwgY29udGFpbmVyQW5pbWF0aW9uKTtcbiAgICAgIG1hcmtlckVuZCA9IHRoaXMubWFya2VyRW5kID0gX2NyZWF0ZU1hcmtlcihcImVuZFwiLCBpZCwgY29udGVudCwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCBvZmZzZXQsIDAsIGNvbnRhaW5lckFuaW1hdGlvbik7XG4gICAgICBjb250YWluZXJBbmltYXRpb24gJiYgKGNhTWFya2VyU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihbbWFya2VyU3RhcnQsIG1hcmtlckVuZF0sIGRpcmVjdGlvbi5hLCBfcHgpKTtcblxuICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uICYmICEoX3Byb3hpZXMubGVuZ3RoICYmIF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZml4ZWRNYXJrZXJzXCIpID09PSB0cnVlKSkge1xuICAgICAgICBfbWFrZVBvc2l0aW9uYWJsZShpc1ZpZXdwb3J0ID8gX2JvZHkgOiBzY3JvbGxlcik7XG5cbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0sIHtcbiAgICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gICAgICB2YXIgb2xkT25VcGRhdGUgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZSxcbiAgICAgICAgICBvbGRQYXJhbXMgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZVBhcmFtcztcbiAgICAgIGNvbnRhaW5lckFuaW1hdGlvbi5ldmVudENhbGxiYWNrKFwib25VcGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZSgwLCAwLCAxKTtcbiAgICAgICAgb2xkT25VcGRhdGUgJiYgb2xkT25VcGRhdGUuYXBwbHkoY29udGFpbmVyQW5pbWF0aW9uLCBvbGRQYXJhbXMgfHwgW10pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdHJpZ2dlcnNbX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikgLSAxXTtcbiAgICB9O1xuXG4gICAgc2VsZi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90cmlnZ2Vyc1tfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSArIDFdO1xuICAgIH07XG5cbiAgICBzZWxmLnJldmVydCA9IGZ1bmN0aW9uIChyZXZlcnQsIHRlbXApIHtcbiAgICAgIGlmICghdGVtcCkge1xuICAgICAgICByZXR1cm4gc2VsZi5raWxsKHRydWUpO1xuICAgICAgfSAvLyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGdzYXAuY29udGV4dCgpIGFuZCBnc2FwLm1hdGNoTWVkaWEoKSB3aGljaCBjYWxsIHJldmVydCgpXG5cblxuICAgICAgdmFyIHIgPSByZXZlcnQgIT09IGZhbHNlIHx8ICFzZWxmLmVuYWJsZWQsXG4gICAgICAgICAgcHJldlJlZnJlc2hpbmcgPSBfcmVmcmVzaGluZztcblxuICAgICAgaWYgKHIgIT09IHNlbGYuaXNSZXZlcnRlZCkge1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHByZXZTY3JvbGwgPSBNYXRoLm1heChzY3JvbGxGdW5jKCksIHNlbGYuc2Nyb2xsLnJlYyB8fCAwKTsgLy8gcmVjb3JkIHRoZSBzY3JvbGwgc28gd2UgY2FuIHJldmVydCBsYXRlciAocmVwb3NpdGlvbmluZy9waW5uaW5nIHRoaW5ncyBjYW4gYWZmZWN0IHNjcm9sbCBwb3NpdGlvbikuIEluIHRoZSBzdGF0aWMgcmVmcmVzaCgpIG1ldGhvZCwgd2UgZmlyc3QgcmVjb3JkIGFsbCB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhcyBhIHJlZmVyZW5jZS5cblxuICAgICAgICAgIHByZXZQcm9ncmVzcyA9IHNlbGYucHJvZ3Jlc3M7XG4gICAgICAgICAgcHJldkFuaW1Qcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtlclN0YXJ0ICYmIFttYXJrZXJTdGFydCwgbWFya2VyRW5kLCBtYXJrZXJTdGFydFRyaWdnZXIsIG1hcmtlckVuZFRyaWdnZXJdLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5zdHlsZS5kaXNwbGF5ID0gciA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocikge1xuICAgICAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcbiAgICAgICAgICBzZWxmLnVwZGF0ZShyKTsgLy8gbWFrZSBzdXJlIHRoZSBwaW4gaXMgYmFjayBpbiBpdHMgb3JpZ2luYWwgcG9zaXRpb24gc28gdGhhdCBhbGwgdGhlIG1lYXN1cmVtZW50cyBhcmUgY29ycmVjdC4gZG8gdGhpcyBCRUZPUkUgc3dhcHBpbmcgdGhlIHBpbiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaW4gJiYgKCFwaW5SZXBhcmVudCB8fCAhc2VsZi5pc0FjdGl2ZSkpIHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHBpbk9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pLCBzcGFjZXJTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgciB8fCBzZWxmLnVwZGF0ZShyKTsgLy8gd2hlbiB3ZSdyZSByZXN0b3JpbmcsIHRoZSB1cGRhdGUgc2hvdWxkIHJ1biBBRlRFUiBzd2FwcGluZyB0aGUgcGluIGludG8gaXRzIHBpbi1zcGFjZXIuXG5cbiAgICAgICAgX3JlZnJlc2hpbmcgPSBwcmV2UmVmcmVzaGluZzsgLy8gcmVzdG9yZS4gV2Ugc2V0IGl0IHRvIHRydWUgZHVyaW5nIHRoZSB1cGRhdGUoKSBzbyB0aGF0IHRoaW5ncyBmaXJlIHByb3Blcmx5IGluIHRoZXJlLlxuXG4gICAgICAgIHNlbGYuaXNSZXZlcnRlZCA9IHI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucmVmcmVzaCA9IGZ1bmN0aW9uIChzb2Z0LCBmb3JjZSwgcG9zaXRpb24sIHBpbk9mZnNldCkge1xuICAgICAgLy8gcG9zaXRpb24gaXMgdHlwaWNhbGx5IG9ubHkgZGVmaW5lZCBpZiBpdCdzIGNvbWluZyBmcm9tIHNldFBvc2l0aW9ucygpIC0gaXQncyBhIHdheSB0byBza2lwIHRoZSBub3JtYWwgcGFyc2luZy4gcGluT2Zmc2V0IGlzIGFsc28gb25seSBmcm9tIHNldFBvc2l0aW9ucygpIGFuZCBpcyBtb3N0bHkgcmVsYXRlZCB0byBmYW5jeSBzdHVmZiB3ZSBuZWVkIHRvIGRvIGluIFNjcm9sbFNtb290aGVyIHdpdGggZWZmZWN0c1xuICAgICAgaWYgKChfcmVmcmVzaGluZyB8fCAhc2VsZi5lbmFibGVkKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluICYmIHNvZnQgJiYgX2xhc3RTY3JvbGxUaW1lKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInNjcm9sbEVuZFwiLCBfc29mdFJlZnJlc2gpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgIV9yZWZyZXNoaW5nQWxsICYmIG9uUmVmcmVzaEluaXQgJiYgb25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcblxuICAgICAgaWYgKHR3ZWVuVG8udHdlZW4gJiYgIXBvc2l0aW9uKSB7XG4gICAgICAgIC8vIHdlIHNraXAgdGhpcyBpZiBhIHBvc2l0aW9uIGlzIHBhc3NlZCBpbiBiZWNhdXNlIHR5cGljYWxseSB0aGF0J3MgZnJvbSAuc2V0UG9zaXRpb25zKCkgYW5kIGl0J3MgYmVzdCB0byBhbGxvdyBpbi1wcm9ncmVzcyBzbmFwcGluZyB0byBjb250aW51ZS5cbiAgICAgICAgdHdlZW5Uby50d2Vlbi5raWxsKCk7XG4gICAgICAgIHR3ZWVuVG8udHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcbiAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggJiYgYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICBraWxsOiBmYWxzZVxuICAgICAgfSkuaW52YWxpZGF0ZSgpO1xuICAgICAgc2VsZi5pc1JldmVydGVkIHx8IHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgc2VsZi5fc3ViUGluT2Zmc2V0ID0gZmFsc2U7IC8vIHdlJ2xsIHNldCB0aGlzIHRvIHRydWUgaW4gdGhlIHN1Yi1waW5zIGlmIHdlIGZpbmQgYW55XG5cbiAgICAgIHZhciBzaXplID0gZ2V0U2Nyb2xsZXJTaXplKCksXG4gICAgICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBnZXRTY3JvbGxlck9mZnNldHMoKSxcbiAgICAgICAgICBtYXggPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSA6IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgaXNGaXJzdFJlZnJlc2ggPSBjaGFuZ2UgPD0gMC4wMSxcbiAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgIG90aGVyUGluT2Zmc2V0ID0gcGluT2Zmc2V0IHx8IDAsXG4gICAgICAgICAgcGFyc2VkRW5kID0gX2lzT2JqZWN0KHBvc2l0aW9uKSA/IHBvc2l0aW9uLmVuZCA6IHZhcnMuZW5kLFxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB2YXJzLmVuZFRyaWdnZXIgfHwgdHJpZ2dlcixcbiAgICAgICAgICBwYXJzZWRTdGFydCA9IF9pc09iamVjdChwb3NpdGlvbikgPyBwb3NpdGlvbi5zdGFydCA6IHZhcnMuc3RhcnQgfHwgKHZhcnMuc3RhcnQgPT09IDAgfHwgIXRyaWdnZXIgPyAwIDogcGluID8gXCIwIDBcIiA6IFwiMCAxMDAlXCIpLFxuICAgICAgICAgIHBpbm5lZENvbnRhaW5lciA9IHNlbGYucGlubmVkQ29udGFpbmVyID0gdmFycy5waW5uZWRDb250YWluZXIgJiYgX2dldFRhcmdldCh2YXJzLnBpbm5lZENvbnRhaW5lciwgc2VsZiksXG4gICAgICAgICAgdHJpZ2dlckluZGV4ID0gdHJpZ2dlciAmJiBNYXRoLm1heCgwLCBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSkgfHwgMCxcbiAgICAgICAgICBpID0gdHJpZ2dlckluZGV4LFxuICAgICAgICAgIGNzLFxuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBzY3JvbGwsXG4gICAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICAgICAgICBvdmVycmlkZSxcbiAgICAgICAgICBjdXJUcmlnZ2VyLFxuICAgICAgICAgIGN1clBpbixcbiAgICAgICAgICBvcHBvc2l0ZVNjcm9sbCxcbiAgICAgICAgICBpbml0dGVkLFxuICAgICAgICAgIHJldmVydGVkUGlucyxcbiAgICAgICAgICBmb3JjZWRPdmVyZmxvdyxcbiAgICAgICAgICBtYXJrZXJTdGFydE9mZnNldCxcbiAgICAgICAgICBtYXJrZXJFbmRPZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJzICYmIF9pc09iamVjdChwb3NpdGlvbikpIHtcbiAgICAgICAgLy8gaWYgd2UgYWx0ZXIgdGhlIHN0YXJ0L2VuZCBwb3NpdGlvbnMgd2l0aCAuc2V0UG9zaXRpb25zKCksIGl0IGdlbmVyYWxseSBmZWVkcyBpbiBhYnNvbHV0ZSBOVU1CRVJTIHdoaWNoIGRvbid0IGNvbnZleSBpbmZvcm1hdGlvbiBhYm91dCB3aGVyZSB0byBsaW5lIHVwIHRoZSBtYXJrZXJzLCBzbyB0byBrZWVwIGl0IGludHVpdGl2ZSwgd2UgcmVjb3JkIGhvdyBmYXIgdGhlIHRyaWdnZXIgcG9zaXRpb25zIHNoaWZ0IGFmdGVyIGFwcGx5aW5nIHRoZSBuZXcgbnVtYmVycyBhbmQgdGhlbiBvZmZzZXQgYnkgdGhhdCBtdWNoIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uIFdlIGRvIHRoZSBzYW1lIHRvIHRoZSBhc3NvY2lhdGVkIHRyaWdnZXIgbWFya2VycyB0b28gb2YgY291cnNlLlxuICAgICAgICBtYXJrZXJTdGFydE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24ucCk7XG4gICAgICAgIG1hcmtlckVuZE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIHVzZXIgbWlnaHQgdHJ5IHRvIHBpbiB0aGUgc2FtZSBlbGVtZW50IG1vcmUgdGhhbiBvbmNlLCBzbyB3ZSBtdXN0IGZpbmQgYW55IHByaW9yIHRyaWdnZXJzIHdpdGggdGhlIHNhbWUgcGluLCByZXZlcnQgdGhlbSwgYW5kIGRldGVybWluZSBob3cgbG9uZyB0aGV5J3JlIHBpbm5pbmcgc28gdGhhdCB3ZSBjYW4gb2Zmc2V0IHRoaW5ncyBhcHByb3ByaWF0ZWx5LiBNYWtlIHN1cmUgd2UgcmV2ZXJ0IGZyb20gbGFzdCB0byBmaXJzdCBzbyB0aGF0IHRoaW5ncyBcInJld2luZFwiIHByb3Blcmx5LlxuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJUcmlnZ2VyLmVuZCB8fCBjdXJUcmlnZ2VyLnJlZnJlc2goMCwgMSkgfHwgKF9yZWZyZXNoaW5nID0gc2VsZik7IC8vIGlmIGl0J3MgYSB0aW1lbGluZS1iYXNlZCB0cmlnZ2VyIHRoYXQgaGFzbid0IGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWQgeWV0IGJlY2F1c2UgaXQncyB3YWl0aW5nIGZvciAxIHRpY2ssIGp1c3QgZm9yY2UgdGhlIHJlZnJlc2goKSBoZXJlLCBvdGhlcndpc2UgaWYgaXQgY29udGFpbnMgYSBwaW4gdGhhdCdzIHN1cHBvc2VkIHRvIGFmZmVjdCBvdGhlciBTY3JvbGxUcmlnZ2VycyBmdXJ0aGVyIGRvd24gdGhlIHBhZ2UsIHRoZXkgd29uJ3QgYmUgYWRqdXN0ZWQgcHJvcGVybHkuXG5cbiAgICAgICAgY3VyUGluID0gY3VyVHJpZ2dlci5waW47XG5cbiAgICAgICAgaWYgKGN1clBpbiAmJiAoY3VyUGluID09PSB0cmlnZ2VyIHx8IGN1clBpbiA9PT0gcGluIHx8IGN1clBpbiA9PT0gcGlubmVkQ29udGFpbmVyKSAmJiAhY3VyVHJpZ2dlci5pc1JldmVydGVkKSB7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zIHx8IChyZXZlcnRlZFBpbnMgPSBbXSk7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zLnVuc2hpZnQoY3VyVHJpZ2dlcik7IC8vIHdlJ2xsIHJldmVydCBmcm9tIGZpcnN0IHRvIGxhc3QgdG8gbWFrZSBzdXJlIHRoaW5ncyByZWFjaCB0aGVpciBlbmQgc3RhdGUgcHJvcGVybHlcblxuICAgICAgICAgIGN1clRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clRyaWdnZXIgIT09IF90cmlnZ2Vyc1tpXSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgaXQgZ290IHJlbW92ZWQuXG4gICAgICAgICAgdHJpZ2dlckluZGV4LS07XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9pc0Z1bmN0aW9uKHBhcnNlZFN0YXJ0KSAmJiAocGFyc2VkU3RhcnQgPSBwYXJzZWRTdGFydChzZWxmKSk7XG4gICAgICBwYXJzZWRTdGFydCA9IF9wYXJzZUNsYW1wKHBhcnNlZFN0YXJ0LCBcInN0YXJ0XCIsIHNlbGYpO1xuICAgICAgc3RhcnQgPSBfcGFyc2VQb3NpdGlvbihwYXJzZWRTdGFydCwgdHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzY3JvbGxGdW5jKCksIG1hcmtlclN0YXJ0LCBtYXJrZXJTdGFydFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgXCJfc3RhcnRDbGFtcFwiKSB8fCAocGluID8gLTAuMDAxIDogMCk7XG4gICAgICBfaXNGdW5jdGlvbihwYXJzZWRFbmQpICYmIChwYXJzZWRFbmQgPSBwYXJzZWRFbmQoc2VsZikpO1xuXG4gICAgICBpZiAoX2lzU3RyaW5nKHBhcnNlZEVuZCkgJiYgIXBhcnNlZEVuZC5pbmRleE9mKFwiKz1cIikpIHtcbiAgICAgICAgaWYgKH5wYXJzZWRFbmQuaW5kZXhPZihcIiBcIikpIHtcbiAgICAgICAgICBwYXJzZWRFbmQgPSAoX2lzU3RyaW5nKHBhcnNlZFN0YXJ0KSA/IHBhcnNlZFN0YXJ0LnNwbGl0KFwiIFwiKVswXSA6IFwiXCIpICsgcGFyc2VkRW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCA9IF9vZmZzZXRUb1B4KHBhcnNlZEVuZC5zdWJzdHIoMiksIHNpemUpO1xuICAgICAgICAgIHBhcnNlZEVuZCA9IF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydCA6IChjb250YWluZXJBbmltYXRpb24gPyBnc2FwLnV0aWxzLm1hcFJhbmdlKDAsIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLCBjb250YWluZXJBbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5zdGFydCwgY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuZW5kLCBzdGFydCkgOiBzdGFydCkgKyBvZmZzZXQ7IC8vIF9wYXJzZVBvc2l0aW9uIHdvbid0IGZhY3RvciBpbiB0aGUgb2Zmc2V0IGlmIHRoZSBzdGFydCBpcyBhIG51bWJlciwgc28gZG8gaXQgaGVyZS5cblxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZEVuZCA9IF9wYXJzZUNsYW1wKHBhcnNlZEVuZCwgXCJlbmRcIiwgc2VsZik7XG4gICAgICBlbmQgPSBNYXRoLm1heChzdGFydCwgX3BhcnNlUG9zaXRpb24ocGFyc2VkRW5kIHx8IChwYXJzZWRFbmRUcmlnZ2VyID8gXCIxMDAlIDBcIiA6IG1heCksIHBhcnNlZEVuZFRyaWdnZXIsIHNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsRnVuYygpICsgb2Zmc2V0LCBtYXJrZXJFbmQsIG1hcmtlckVuZFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX2VuZENsYW1wICYmIFwiX2VuZENsYW1wXCIpKSB8fCAtMC4wMDE7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgICAgaSA9IHRyaWdnZXJJbmRleDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJQaW4gPSBjdXJUcmlnZ2VyLnBpbjtcblxuICAgICAgICBpZiAoY3VyUGluICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDw9IHN0YXJ0ICYmICFjb250YWluZXJBbmltYXRpb24gJiYgY3VyVHJpZ2dlci5lbmQgPiAwKSB7XG4gICAgICAgICAgY3MgPSBjdXJUcmlnZ2VyLmVuZCAtIChzZWxmLl9zdGFydENsYW1wID8gTWF0aC5tYXgoMCwgY3VyVHJpZ2dlci5zdGFydCkgOiBjdXJUcmlnZ2VyLnN0YXJ0KTtcblxuICAgICAgICAgIGlmICgoY3VyUGluID09PSB0cmlnZ2VyICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDwgc3RhcnQgfHwgY3VyUGluID09PSBwaW5uZWRDb250YWluZXIpICYmIGlzTmFOKHBhcnNlZFN0YXJ0KSkge1xuICAgICAgICAgICAgLy8gbnVtZXJpYyBzdGFydCB2YWx1ZXMgc2hvdWxkbid0IGJlIG9mZnNldCBhdCBhbGwgLSB0cmVhdCB0aGVtIGFzIGFic29sdXRlXG4gICAgICAgICAgICBvZmZzZXQgKz0gY3MgKiAoMSAtIGN1clRyaWdnZXIucHJvZ3Jlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1clBpbiA9PT0gcGluICYmIChvdGhlclBpbk9mZnNldCArPSBjcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gb2Zmc2V0O1xuICAgICAgZW5kICs9IG9mZnNldDtcbiAgICAgIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgKHNlbGYuX3N0YXJ0Q2xhbXAgKz0gb2Zmc2V0KTtcblxuICAgICAgaWYgKHNlbGYuX2VuZENsYW1wICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzZWxmLl9lbmRDbGFtcCA9IGVuZCB8fCAtMC4wMDE7XG4gICAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9IGVuZCAtIHN0YXJ0IHx8IChzdGFydCAtPSAwLjAxKSAmJiAwLjAwMTtcblxuICAgICAgaWYgKGlzRmlyc3RSZWZyZXNoKSB7XG4gICAgICAgIC8vIG9uIHRoZSB2ZXJ5IGZpcnN0IHJlZnJlc2goKSwgdGhlIHByZXZQcm9ncmVzcyBjb3VsZG4ndCBoYXZlIGJlZW4gYWNjdXJhdGUgeWV0IGJlY2F1c2UgdGhlIHN0YXJ0L2VuZCB3ZXJlIG5ldmVyIGNhbGN1bGF0ZWQsIHNvIHdlIHNldCBpdCBoZXJlLiBCZWZvcmUgMy4xMS41LCBpdCBjb3VsZCBsZWFkIHRvIGFuIGluYWNjdXJhdGUgc2Nyb2xsIHBvc2l0aW9uIHJlc3RvcmF0aW9uIHdpdGggc25hcHBpbmcuXG4gICAgICAgIHByZXZQcm9ncmVzcyA9IGdzYXAudXRpbHMuY2xhbXAoMCwgMSwgZ3NhcC51dGlscy5ub3JtYWxpemUoc3RhcnQsIGVuZCwgcHJldlNjcm9sbCkpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9waW5QdXNoID0gb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJTdGFydCAmJiBvZmZzZXQpIHtcbiAgICAgICAgLy8gb2Zmc2V0IHRoZSBtYXJrZXJzIGlmIG5lY2Vzc2FyeVxuICAgICAgICBjcyA9IHt9O1xuICAgICAgICBjc1tkaXJlY3Rpb24uYV0gPSBcIis9XCIgKyBvZmZzZXQ7XG4gICAgICAgIHBpbm5lZENvbnRhaW5lciAmJiAoY3NbZGlyZWN0aW9uLnBdID0gXCItPVwiICsgc2Nyb2xsRnVuYygpKTtcbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0LCBtYXJrZXJFbmRdLCBjcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgICBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSBfdmVydGljYWw7XG4gICAgICAgIHNjcm9sbCA9IHNjcm9sbEZ1bmMoKTsgLy8gcmVjYWxjdWxhdGUgYmVjYXVzZSB0aGUgdHJpZ2dlcnMgY2FuIGFmZmVjdCB0aGUgc2Nyb2xsXG5cbiAgICAgICAgcGluU3RhcnQgPSBwYXJzZUZsb2F0KHBpbkdldHRlcihkaXJlY3Rpb24uYSkpICsgb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgICAgaWYgKCFtYXggJiYgZW5kID4gMSkge1xuICAgICAgICAgIC8vIG1ha2VzIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIHNjcm9sbGJhciwgb3RoZXJ3aXNlIGlmIHNvbWV0aGluZyBoYXMgd2lkdGg6IDEwMCUsIGZvciBleGFtcGxlLCBpdCB3b3VsZCBiZSB0b28gYmlnIChleGNsdWRlIHRoZSBzY3JvbGxiYXIpLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNTE4Mi1zY3JvbGx0cmlnZ2VyLXdpZHRoLW9mLXBhZ2UtaW5jcmVhc2Utd2hlcmUtbWFya2Vycy1hcmUtc2V0LXRvLWZhbHNlL1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpLnN0eWxlO1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0ge1xuICAgICAgICAgICAgc3R5bGU6IGZvcmNlZE92ZXJmbG93LFxuICAgICAgICAgICAgdmFsdWU6IGZvcmNlZE92ZXJmbG93W1wib3ZlcmZsb3dcIiArIGRpcmVjdGlvbi5hLnRvVXBwZXJDYXNlKCldXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc1ZpZXdwb3J0ICYmIF9nZXRDb21wdXRlZFN0eWxlKF9ib2R5KVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSAhPT0gXCJzY3JvbGxcIikge1xuICAgICAgICAgICAgLy8gYXZvaWQgYW4gZXh0cmEgc2Nyb2xsYmFyIGlmIEJPVEggPGh0bWw+IGFuZCA8Ym9keT4gaGF2ZSBvdmVyZmxvdyBzZXQgdG8gXCJzY3JvbGxcIlxuICAgICAgICAgICAgZm9yY2VkT3ZlcmZsb3cuc3R5bGVbXCJvdmVyZmxvd1wiICsgZGlyZWN0aW9uLmEudG9VcHBlckNhc2UoKV0gPSBcInNjcm9sbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgICBwaW5TdGF0ZSA9IF9nZXRTdGF0ZShwaW4pOyAvLyB0cmFuc2Zvcm1zIHdpbGwgaW50ZXJmZXJlIHdpdGggdGhlIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSBwbGFjZW1lbnQsIHNvIHJlbW92ZSB0aGVtIHRlbXBvcmFyaWx5LiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBmYWN0b3JzIGluIHRyYW5zZm9ybXMuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpO1xuICAgICAgICBvcHBvc2l0ZVNjcm9sbCA9IHVzZUZpeGVkUG9zaXRpb24gJiYgX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGlzVmVydGljYWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCkoKTtcblxuICAgICAgICBpZiAocGluU3BhY2luZykge1xuICAgICAgICAgIHNwYWNlclN0YXRlID0gW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyLCBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCArIF9weF07XG4gICAgICAgICAgc3BhY2VyU3RhdGUudCA9IHNwYWNlcjtcbiAgICAgICAgICBpID0gcGluU3BhY2luZyA9PT0gX3BhZGRpbmcgPyBfZ2V0U2l6ZShwaW4sIGRpcmVjdGlvbikgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCA6IDA7XG4gICAgICAgICAgaSAmJiBzcGFjZXJTdGF0ZS5wdXNoKGRpcmVjdGlvbi5kLCBpICsgX3B4KTsgLy8gZm9yIGJveC1zaXppbmc6IGJvcmRlci1ib3ggKG11c3QgaW5jbHVkZSBwYWRkaW5nKS5cblxuICAgICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG5cbiAgICAgICAgICBpZiAocGlubmVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBpbiBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSwgd2UgbmVlZCB0byByZS1ldmFsdWF0ZSB0aGUgcGluQ29udGFpbmVyJ3Mgc2l6ZSBiZWNhdXNlIHRoaXMgcGluU3BhY2luZyBtYXkgc3RyZXRjaCBpdCBvdXQsIGJ1dCB3ZSBjYW4ndCBqdXN0IGFkZCB0aGUgZXhhY3QgZGlzdGFuY2UgYmVjYXVzZSBkZXBlbmRpbmcgb24gbGF5b3V0LCBpdCBtYXkgbm90IHB1c2ggdGhpbmdzIGRvd24gb3IgaXQgbWF5IG9ubHkgZG8gc28gcGFydGlhbGx5LlxuICAgICAgICAgICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgaWYgKHQucGluID09PSBwaW5uZWRDb250YWluZXIgJiYgdC52YXJzLnBpblNwYWNpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdC5fc3ViUGluT2Zmc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICBvdmVycmlkZSA9IHtcbiAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCArIChpc1ZlcnRpY2FsID8gc2Nyb2xsIC0gc3RhcnQgOiBvcHBvc2l0ZVNjcm9sbCkgKyBfcHgsXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIChpc1ZlcnRpY2FsID8gb3Bwb3NpdGVTY3JvbGwgOiBzY3JvbGwgLSBzdGFydCkgKyBfcHgsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgb3ZlcnJpZGVbX3dpZHRoXSA9IG92ZXJyaWRlW1wibWF4XCIgKyBfV2lkdGhdID0gTWF0aC5jZWlsKGJvdW5kcy53aWR0aCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX2hlaWdodF0gPSBvdmVycmlkZVtcIm1heFwiICsgX0hlaWdodF0gPSBNYXRoLmNlaWwoYm91bmRzLmhlaWdodCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX21hcmdpbl0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1RvcF0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1JpZ2h0XSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfQm90dG9tXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfTGVmdF0gPSBcIjBcIjtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfVG9wXSA9IGNzW19wYWRkaW5nICsgX1RvcF07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfUmlnaHRdID0gY3NbX3BhZGRpbmcgKyBfUmlnaHRdO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0JvdHRvbV0gPSBjc1tfcGFkZGluZyArIF9Cb3R0b21dO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0xlZnRdID0gY3NbX3BhZGRpbmcgKyBfTGVmdF07XG4gICAgICAgICAgcGluQWN0aXZlU3RhdGUgPSBfY29weVN0YXRlKHBpbk9yaWdpbmFsU3RhdGUsIG92ZXJyaWRlLCBwaW5SZXBhcmVudCk7XG4gICAgICAgICAgX3JlZnJlc2hpbmdBbGwgJiYgc2Nyb2xsRnVuYygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIG1pZ2h0IGJlIGFmZmVjdGluZyB0aGUgdHJhbnNmb3JtLCBzbyB3ZSBtdXN0IGp1bXAgdG8gdGhlIGVuZCwgY2hlY2sgdGhlIHZhbHVlLCBhbmQgY29tcGVuc2F0ZSBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCB3aGVuIGl0IGJlY29tZXMgdW5waW5uZWQsIHRoZSBwaW5TZXR0ZXIoKSB3aWxsIGdldCBzZXQgdG8gYSB2YWx1ZSB0aGF0IGRvZXNuJ3QgaW5jbHVkZSB3aGF0ZXZlciB0aGUgYW5pbWF0aW9uIGRpZC5cbiAgICAgICAgICBpbml0dGVkID0gYW5pbWF0aW9uLl9pbml0dGVkOyAvLyBpZiBub3QsIHdlIG11c3QgaW52YWxpZGF0ZSgpIGFmdGVyIHRoaXMgc3RlcCwgb3RoZXJ3aXNlIGl0IGNvdWxkIGxvY2sgaW4gc3RhcnRpbmcgdmFsdWVzIHByZW1hdHVyZWx5LlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygxKTtcblxuICAgICAgICAgIGFuaW1hdGlvbi5yZW5kZXIoYW5pbWF0aW9uLmR1cmF0aW9uKCksIHRydWUsIHRydWUpO1xuICAgICAgICAgIHBpbkNoYW5nZSA9IHBpbkdldHRlcihkaXJlY3Rpb24uYSkgLSBwaW5TdGFydCArIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0O1xuICAgICAgICAgIHBpbk1vdmVzID0gTWF0aC5hYnMoY2hhbmdlIC0gcGluQ2hhbmdlKSA+IDE7XG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBwaW5Nb3ZlcyAmJiBwaW5BY3RpdmVTdGF0ZS5zcGxpY2UocGluQWN0aXZlU3RhdGUubGVuZ3RoIC0gMiwgMik7IC8vIHRyYW5zZm9ybSBpcyB0aGUgbGFzdCBwcm9wZXJ0eS92YWx1ZSBzZXQgaW4gdGhlIHN0YXRlIEFycmF5LiBTaW5jZSB0aGUgYW5pbWF0aW9uIGlzIGNvbnRyb2xsaW5nIHRoYXQsIHdlIHNob3VsZCBvbWl0IGl0LlxuXG4gICAgICAgICAgYW5pbWF0aW9uLnJlbmRlcigwLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkIHx8IGFuaW1hdGlvbi5pbnZhbGlkYXRlKHRydWUpO1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQgfHwgYW5pbWF0aW9uLnRvdGFsVGltZShhbmltYXRpb24udG90YWxUaW1lKCkpOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGEgdG9nZ2xlQWN0aW9uIGNhbGxlZCBwbGF5KCkgYW5kIHRoZW4gcmVmcmVzaCgpIGhhcHBlbnMgYW5kIHdoZW4gd2UgcmVuZGVyKDEpIGFib3ZlLCBpdCB3b3VsZCBjYXVzZSB0aGUgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGFuZCBnZXQgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQsIHNvIHRoaXMgbWFrZXMgc3VyZSBpdCBnZXRzIHB1dCBiYWNrIGluLlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaW5DaGFuZ2UgPSBjaGFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JjZWRPdmVyZmxvdyAmJiAoZm9yY2VkT3ZlcmZsb3cudmFsdWUgPyBmb3JjZWRPdmVyZmxvdy5zdHlsZVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSA9IGZvcmNlZE92ZXJmbG93LnZhbHVlIDogZm9yY2VkT3ZlcmZsb3cuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvdy1cIiArIGRpcmVjdGlvbi5hKSk7XG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgJiYgc2Nyb2xsRnVuYygpICYmICFjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gaXQgbWF5IGJlIElOU0lERSBhIHBpbm5lZCBlbGVtZW50LCBzbyB3YWxrIHVwIHRoZSB0cmVlIGFuZCBsb29rIGZvciBhbnkgZWxlbWVudHMgd2l0aCBfcGluT2Zmc2V0IHRvIGNvbXBlbnNhdGUgYmVjYXVzZSBhbnl0aGluZyB3aXRoIHBpblNwYWNpbmcgdGhhdCdzIGFscmVhZHkgc2Nyb2xsZWQgd291bGQgdGhyb3cgb2ZmIHRoZSBtZWFzdXJlbWVudHMgaW4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgYm91bmRzID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuXG4gICAgICAgIHdoaWxlIChib3VuZHMgJiYgYm91bmRzICE9PSBfYm9keSkge1xuICAgICAgICAgIGlmIChib3VuZHMuX3Bpbk9mZnNldCkge1xuICAgICAgICAgICAgc3RhcnQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgICBlbmQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm91bmRzID0gYm91bmRzLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV2ZXJ0ZWRQaW5zICYmIHJldmVydGVkUGlucy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3RhcnQgPSBzdGFydDtcbiAgICAgIHNlbGYuZW5kID0gZW5kO1xuICAgICAgc2Nyb2xsMSA9IHNjcm9sbDIgPSBfcmVmcmVzaGluZ0FsbCA/IHByZXZTY3JvbGwgOiBzY3JvbGxGdW5jKCk7IC8vIHJlc2V0IHZlbG9jaXR5XG5cbiAgICAgIGlmICghY29udGFpbmVyQW5pbWF0aW9uICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzY3JvbGwxIDwgcHJldlNjcm9sbCAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICBzZWxmLnNjcm9sbC5yZWMgPSAwO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICBsYXN0UmVmcmVzaCA9IF9nZXRUaW1lKCk7XG5cbiAgICAgIGlmIChzbmFwRGVsYXllZENhbGwpIHtcbiAgICAgICAgbGFzdFNuYXAgPSAtMTsgLy8ganVzdCBzbyBzbmFwcGluZyBnZXRzIHJlLWVuYWJsZWQsIGNsZWFyIG91dCBhbnkgcmVjb3JkZWQgbGFzdCB2YWx1ZVxuICAgICAgICAvLyBzZWxmLmlzQWN0aXZlICYmIHNjcm9sbEZ1bmMoc3RhcnQgKyBjaGFuZ2UgKiBwcmV2UHJvZ3Jlc3MpOyAvLyBwcmV2aW91c2x5IHRoaXMgbGluZSB3YXMgaGVyZSB0byBlbnN1cmUgdGhhdCB3aGVuIHNuYXBwaW5nIGtpY2tzIGluLCBpdCdzIGZyb20gdGhlIHByZXZpb3VzIHByb2dyZXNzIGJ1dCBpbiBzb21lIGNhc2VzIHRoYXQncyBub3QgZGVzaXJhYmxlLCBsaWtlIGFuIGFsbC1wYWdlIFNjcm9sbFRyaWdnZXIgd2hlbiBuZXcgY29udGVudCBnZXRzIGFkZGVkIHRvIHRoZSBwYWdlLCB0aGF0J2QgdG90YWxseSBjaGFuZ2UgdGhlIHByb2dyZXNzLlxuXG4gICAgICAgIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBfcmVmcmVzaGluZyA9IDA7XG4gICAgICBhbmltYXRpb24gJiYgaXNUb2dnbGUgJiYgKGFuaW1hdGlvbi5faW5pdHRlZCB8fCBwcmV2QW5pbVByb2dyZXNzKSAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKSAhPT0gcHJldkFuaW1Qcm9ncmVzcyAmJiBhbmltYXRpb24ucHJvZ3Jlc3MocHJldkFuaW1Qcm9ncmVzcyB8fCAwLCB0cnVlKS5yZW5kZXIoYW5pbWF0aW9uLnRpbWUoKSwgdHJ1ZSwgdHJ1ZSk7IC8vIG11c3QgZm9yY2UgYSByZS1yZW5kZXIgYmVjYXVzZSBpZiBzYXZlU3R5bGVzKCkgd2FzIHVzZWQgb24gdGhlIHRhcmdldChzKSwgdGhlIHN0eWxlcyBjb3VsZCBoYXZlIGJlZW4gd2lwZWQgb3V0IGR1cmluZyB0aGUgcmVmcmVzaCgpLlxuXG4gICAgICBpZiAoaXNGaXJzdFJlZnJlc2ggfHwgcHJldlByb2dyZXNzICE9PSBzZWxmLnByb2dyZXNzIHx8IGNvbnRhaW5lckFuaW1hdGlvbikge1xuICAgICAgICAvLyBlbnN1cmVzIHRoYXQgdGhlIGRpcmVjdGlvbiBpcyBzZXQgcHJvcGVybHkgKHdoZW4gcmVmcmVzaGluZywgcHJvZ3Jlc3MgaXMgc2V0IGJhY2sgdG8gMCBpbml0aWFsbHksIHRoZW4gYmFjayBhZ2FpbiB0byB3aGVyZXZlciBpdCBuZWVkcyB0byBiZSkgYW5kIHRoYXQgY2FsbGJhY2tzIGFyZSB0cmlnZ2VyZWQuXG4gICAgICAgIGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgJiYgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoY29udGFpbmVyQW5pbWF0aW9uICYmIHN0YXJ0IDwgLTAuMDAxICYmICFwcmV2UHJvZ3Jlc3MgPyBnc2FwLnV0aWxzLm5vcm1hbGl6ZShzdGFydCwgZW5kLCAwKSA6IHByZXZQcm9ncmVzcywgdHJ1ZSk7IC8vIHRvIGF2b2lkIGlzc3VlcyB3aGVyZSBhbmltYXRpb24gY2FsbGJhY2tzIGxpa2Ugb25TdGFydCBhcmVuJ3QgdHJpZ2dlcmVkLlxuXG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBpc0ZpcnN0UmVmcmVzaCB8fCAoc2Nyb2xsMSAtIHN0YXJ0KSAvIGNoYW5nZSA9PT0gcHJldlByb2dyZXNzID8gMCA6IHByZXZQcm9ncmVzcztcbiAgICAgIH1cblxuICAgICAgcGluICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5fcGluT2Zmc2V0ID0gTWF0aC5yb3VuZChzZWxmLnByb2dyZXNzICogcGluQ2hhbmdlKSk7XG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4uaW52YWxpZGF0ZSgpO1xuXG4gICAgICBpZiAoIWlzTmFOKG1hcmtlclN0YXJ0T2Zmc2V0KSkge1xuICAgICAgICAvLyBudW1iZXJzIHdlcmUgcGFzc2VkIGluIGZvciB0aGUgcG9zaXRpb24gd2hpY2ggYXJlIGFic29sdXRlLCBzbyBpbnN0ZWFkIG9mIGp1c3QgcHV0dGluZyB0aGUgbWFya2VycyBhdCB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LCB3ZSBmaWd1cmUgb3V0IGhvdyBmYXIgdGhleSBzaGlmdGVkIGRvd24gKGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhleSB3ZXJlIG9yaWdpbmFsbHkgcG9zaXRpb25lZCBpbiBjbG9zZXIgcmVsYXRpb24gdG8gdGhlIHRyaWdnZXIgZWxlbWVudCB3aXRoIHZhbHVlcyBsaWtlIFwidG9wXCIsIFwiY2VudGVyXCIsIGEgcGVyY2VudGFnZSBvciB3aGF0ZXZlciwgc28gd2Ugb2Zmc2V0IHRoYXQgbXVjaCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIHRvIGJhc2ljYWxseSByZXZlcnQgdGhlbSB0byB0aGUgcmVsYXRpdmUgcG9zaXRpb24gdGh5IHdlcmUgYXQgcHJldmlvdXNseS5cbiAgICAgICAgbWFya2VyU3RhcnRPZmZzZXQgLT0gZ3NhcC5nZXRQcm9wZXJ0eShtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbi5wKTtcbiAgICAgICAgbWFya2VyRW5kT2Zmc2V0IC09IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbiwgbWFya2VyU3RhcnRPZmZzZXQpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydCwgZGlyZWN0aW9uLCBtYXJrZXJTdGFydE9mZnNldCAtIChwaW5PZmZzZXQgfHwgMCkpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24sIG1hcmtlckVuZE9mZnNldCk7XG5cbiAgICAgICAgX3NoaWZ0TWFya2VyKG1hcmtlckVuZCwgZGlyZWN0aW9uLCBtYXJrZXJFbmRPZmZzZXQgLSAocGluT2Zmc2V0IHx8IDApKTtcbiAgICAgIH1cblxuICAgICAgaXNGaXJzdFJlZnJlc2ggJiYgIV9yZWZyZXNoaW5nQWxsICYmIHNlbGYudXBkYXRlKCk7IC8vIGVkZ2UgY2FzZSAtIHdoZW4geW91IHJlbG9hZCBhIHBhZ2Ugd2hlbiBpdCdzIGFscmVhZHkgc2Nyb2xsZWQgZG93biwgc29tZSBicm93c2VycyBmaXJlIGEgXCJzY3JvbGxcIiBldmVudCBiZWZvcmUgRE9NQ29udGVudExvYWRlZCwgdHJpZ2dlcmluZyBhbiB1cGRhdGVBbGwoKS4gSWYgd2UgZG9uJ3QgdXBkYXRlIHRoZSBzZWxmLnByb2dyZXNzIGFzIHBhcnQgb2YgcmVmcmVzaCgpLCB0aGVuIHdoZW4gaXQgaGFwcGVucyBuZXh0LCBpdCBtYXkgcmVjb3JkIHByZXZQcm9ncmVzcyBhcyAwIHdoZW4gaXQgcmVhbGx5IHNob3VsZG4ndCwgcG90ZW50aWFsbHkgY2F1c2luZyBhIGNhbGxiYWNrIGluIGFuIGFuaW1hdGlvbiB0byBmaXJlIGFnYWluLlxuXG4gICAgICBpZiAob25SZWZyZXNoICYmICFfcmVmcmVzaGluZ0FsbCAmJiAhZXhlY3V0aW5nT25SZWZyZXNoKSB7XG4gICAgICAgIC8vIHdoZW4gcmVmcmVzaGluZyBhbGwsIHdlIGRvIGV4dHJhIHdvcmsgdG8gY29ycmVjdCBwaW5uZWRDb250YWluZXIgc2l6ZXMgYW5kIGVuc3VyZSB0aGluZ3MgZG9uJ3QgZXhjZWVkIHRoZSBtYXhTY3JvbGwsIHNvIHdlIHNob3VsZCBkbyBhbGwgdGhlIHJlZnJlc2hlcyBhdCB0aGUgZW5kIGFmdGVyIGFsbCB0aGF0IHdvcmsgc28gdGhhdCB0aGUgc3RhcnQvZW5kIHZhbHVlcyBhcmUgY29ycmVjdGVkLlxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2ggPSB0cnVlO1xuICAgICAgICBvblJlZnJlc2goc2VsZik7XG4gICAgICAgIGV4ZWN1dGluZ09uUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChzY3JvbGxGdW5jKCkgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIDEwMDAgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5lbmRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHNjcnViVHdlZW4gPyBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpIDogIWFuaW1hdGlvbi5wYXVzZWQoKSA/IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24ucmV2ZXJzZWQoKSkgOiBpc1RvZ2dsZSB8fCBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgc2VsZi5kaXJlY3Rpb24gPCAwLCAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5sYWJlbFRvU2Nyb2xsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICByZXR1cm4gYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5sYWJlbHMgJiYgKHN0YXJ0IHx8IHNlbGYucmVmcmVzaCgpIHx8IHN0YXJ0KSArIGFuaW1hdGlvbi5sYWJlbHNbbGFiZWxdIC8gYW5pbWF0aW9uLmR1cmF0aW9uKCkgKiBjaGFuZ2UgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUcmFpbGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpLFxuICAgICAgICAgIGEgPSBzZWxmLmRpcmVjdGlvbiA+IDAgPyBfdHJpZ2dlcnMuc2xpY2UoMCwgaSkucmV2ZXJzZSgpIDogX3RyaWdnZXJzLnNsaWNlKGkgKyAxKTtcblxuICAgICAgcmV0dXJuIChfaXNTdHJpbmcobmFtZSkgPyBhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC52YXJzLnByZXZlbnRPdmVybGFwcyA9PT0gbmFtZTtcbiAgICAgIH0pIDogYSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBzZWxmLmRpcmVjdGlvbiA+IDAgPyB0LmVuZCA8PSBzdGFydCA6IHQuc3RhcnQgPj0gZW5kO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYudXBkYXRlID0gZnVuY3Rpb24gKHJlc2V0LCByZWNvcmRWZWxvY2l0eSwgZm9yY2VGYWtlKSB7XG4gICAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmICFmb3JjZUZha2UgJiYgIXJlc2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjcm9sbCA9IF9yZWZyZXNoaW5nQWxsID09PSB0cnVlID8gcHJldlNjcm9sbCA6IHNlbGYuc2Nyb2xsKCksXG4gICAgICAgICAgcCA9IHJlc2V0ID8gMCA6IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG4gICAgICAgICAgY2xpcHBlZCA9IHAgPCAwID8gMCA6IHAgPiAxID8gMSA6IHAgfHwgMCxcbiAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzLFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgIHdhc0FjdGl2ZSxcbiAgICAgICAgICB0b2dnbGVTdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgc3RhdGVDaGFuZ2VkLFxuICAgICAgICAgIHRvZ2dsZWQsXG4gICAgICAgICAgaXNBdE1heCxcbiAgICAgICAgICBpc1Rha2luZ0FjdGlvbjtcblxuICAgICAgaWYgKHJlY29yZFZlbG9jaXR5KSB7XG4gICAgICAgIHNjcm9sbDIgPSBzY3JvbGwxO1xuICAgICAgICBzY3JvbGwxID0gY29udGFpbmVyQW5pbWF0aW9uID8gc2Nyb2xsRnVuYygpIDogc2Nyb2xsO1xuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgc25hcDIgPSBzbmFwMTtcbiAgICAgICAgICBzbmFwMSA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogY2xpcHBlZDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBhbnRpY2lwYXRlIHRoZSBwaW5uaW5nIGEgZmV3IHRpY2tzIGFoZWFkIG9mIHRpbWUgYmFzZWQgb24gdmVsb2NpdHkgdG8gYXZvaWQgYSB2aXN1YWwgZ2xpdGNoIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG1vc3QgYnJvd3NlcnMgZG8gc2Nyb2xsaW5nIG9uIGEgc2VwYXJhdGUgdGhyZWFkIChub3Qgc3luY2VkIHdpdGggcmVxdWVzdEFuaW1hdGlvbkZyYW1lKS5cblxuXG4gICAgICBhbnRpY2lwYXRlUGluICYmICFjbGlwcGVkICYmIHBpbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIF9sYXN0U2Nyb2xsVGltZSAmJiBzdGFydCA8IHNjcm9sbCArIChzY3JvbGwgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIGFudGljaXBhdGVQaW4gJiYgKGNsaXBwZWQgPSAwLjAwMDEpO1xuXG4gICAgICBpZiAoY2xpcHBlZCAhPT0gcHJldlByb2dyZXNzICYmIHNlbGYuZW5hYmxlZCkge1xuICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuaXNBY3RpdmUgPSAhIWNsaXBwZWQgJiYgY2xpcHBlZCA8IDE7XG4gICAgICAgIHdhc0FjdGl2ZSA9ICEhcHJldlByb2dyZXNzICYmIHByZXZQcm9ncmVzcyA8IDE7XG4gICAgICAgIHRvZ2dsZWQgPSBpc0FjdGl2ZSAhPT0gd2FzQWN0aXZlO1xuICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0b2dnbGVkIHx8ICEhY2xpcHBlZCAhPT0gISFwcmV2UHJvZ3Jlc3M7IC8vIGNvdWxkIGdvIGZyb20gc3RhcnQgYWxsIHRoZSB3YXkgdG8gZW5kLCB0aHVzIGl0IGRpZG4ndCB0b2dnbGUgYnV0IGl0IGRpZCBjaGFuZ2Ugc3RhdGUgaW4gYSBzZW5zZSAobWF5IG5lZWQgdG8gZmlyZSBhIGNhbGxiYWNrKVxuXG4gICAgICAgIHNlbGYuZGlyZWN0aW9uID0gY2xpcHBlZCA+IHByZXZQcm9ncmVzcyA/IDEgOiAtMTtcbiAgICAgICAgc2VsZi5wcm9ncmVzcyA9IGNsaXBwZWQ7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgJiYgIXByZXZQcm9ncmVzcyA/IDAgOiBjbGlwcGVkID09PSAxID8gMSA6IHByZXZQcm9ncmVzcyA9PT0gMSA/IDIgOiAzOyAvLyAwID0gZW50ZXIsIDEgPSBsZWF2ZSwgMiA9IGVudGVyQmFjaywgMyA9IGxlYXZlQmFjayAod2UgcHJpb3JpdGl6ZSB0aGUgRklSU1QgZW5jb3VudGVyLCB0aHVzIGlmIHlvdSBzY3JvbGwgcmVhbGx5IGZhc3QgcGFzdCB0aGUgb25FbnRlciBhbmQgb25MZWF2ZSBpbiBvbmUgdGljaywgaXQnZCBwcmlvcml0aXplIG9uRW50ZXIuXG5cbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICF0b2dnbGVkICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSAhPT0gXCJub25lXCIgJiYgdG9nZ2xlQWN0aW9uc1t0b2dnbGVTdGF0ZSArIDFdIHx8IHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGVdOyAvLyBpZiBpdCBkaWRuJ3QgdG9nZ2xlLCB0aGF0IG1lYW5zIGl0IHNob3QgcmlnaHQgcGFzdCBhbmQgc2luY2Ugd2UgcHJpb3JpdGl6ZSB0aGUgXCJlbnRlclwiIGFjdGlvbiwgd2Ugc2hvdWxkIHN3aXRjaCB0byB0aGUgXCJsZWF2ZVwiIGluIHRoaXMgY2FzZSAoYnV0IG9ubHkgaWYgb25lIGlzIGRlZmluZWQpXG5cbiAgICAgICAgICAgIGlzVGFraW5nQWN0aW9uID0gYW5pbWF0aW9uICYmIChhY3Rpb24gPT09IFwiY29tcGxldGVcIiB8fCBhY3Rpb24gPT09IFwicmVzZXRcIiB8fCBhY3Rpb24gaW4gYW5pbWF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgJiYgKHRvZ2dsZWQgfHwgaXNUYWtpbmdBY3Rpb24pICYmIChpc1Rha2luZ0FjdGlvbiB8fCBzY3J1YiB8fCAhYW5pbWF0aW9uKSAmJiAoX2lzRnVuY3Rpb24ocHJldmVudE92ZXJsYXBzKSA/IHByZXZlbnRPdmVybGFwcyhzZWxmKSA6IHNlbGYuZ2V0VHJhaWxpbmcocHJldmVudE92ZXJsYXBzKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuZW5kQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoIWlzVG9nZ2xlKSB7XG4gICAgICAgICAgaWYgKHNjcnViVHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCkge1xuICAgICAgICAgICAgc2NydWJUd2Vlbi5fZHAuX3RpbWUgLSBzY3J1YlR3ZWVuLl9zdGFydCAhPT0gc2NydWJUd2Vlbi5fdGltZSAmJiBzY3J1YlR3ZWVuLnJlbmRlcihzY3J1YlR3ZWVuLl9kcC5fdGltZSAtIHNjcnViVHdlZW4uX3N0YXJ0KTsgLy8gaWYgdGhlcmUncyBhIHNjcnViIG9uIGJvdGggdGhlIGNvbnRhaW5lciBhbmltYXRpb24gYW5kIHRoaXMgb25lIChvciBhIFNjcm9sbFNtb290aGVyKSwgdGhlIHVwZGF0ZSBvcmRlciB3b3VsZCBjYXVzZSB0aGlzIG9uZSBub3QgdG8gaGF2ZSByZW5kZXJlZCB5ZXQsIHNvIGl0IHdvdWxkbid0IG1ha2UgYW55IHByb2dyZXNzIGJlZm9yZSB3ZSAucmVzdGFydCgpIGl0IGhlYWRpbmcgdG93YXJkIHRoZSBuZXcgcHJvZ3Jlc3Mgc28gaXQnZCBhcHBlYXIgc3R1Y2sgdGh1cyB3ZSBmb3JjZSBhIHJlbmRlciBoZXJlLlxuXG4gICAgICAgICAgICBpZiAoc2NydWJUd2Vlbi5yZXNldFRvKSB7XG4gICAgICAgICAgICAgIHNjcnViVHdlZW4ucmVzZXRUbyhcInRvdGFsUHJvZ3Jlc3NcIiwgY2xpcHBlZCwgYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBsZWdhY3kgc3VwcG9ydCAoY291cnRlc3kpLCBiZWZvcmUgMy4xMC4wXG4gICAgICAgICAgICAgIHNjcnViVHdlZW4udmFycy50b3RhbFByb2dyZXNzID0gY2xpcHBlZDtcbiAgICAgICAgICAgICAgc2NydWJUd2Vlbi5pbnZhbGlkYXRlKCkucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb24udG90YWxQcm9ncmVzcyhjbGlwcGVkLCAhIShfcmVmcmVzaGluZyAmJiAobGFzdFJlZnJlc2ggfHwgcmVzZXQpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBpbikge1xuICAgICAgICAgIHJlc2V0ICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5zdHlsZVtwaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMl0gPSBzcGFjaW5nU3RhcnQpO1xuXG4gICAgICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBwaW5TZXR0ZXIoX3JvdW5kKHBpblN0YXJ0ICsgcGluQ2hhbmdlICogY2xpcHBlZCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICBpc0F0TWF4ID0gIXJlc2V0ICYmIGNsaXBwZWQgPiBwcmV2UHJvZ3Jlc3MgJiYgZW5kICsgMSA+IHNjcm9sbCAmJiBzY3JvbGwgKyAxID49IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbik7IC8vIGlmIGl0J3MgYXQgdGhlIFZFUlkgZW5kIG9mIHRoZSBwYWdlLCBkb24ndCBzd2l0Y2ggYXdheSBmcm9tIHBvc2l0aW9uOiBmaXhlZCBiZWNhdXNlIGl0J3MgcG9pbnRsZXNzIGFuZCBpdCBjb3VsZCBjYXVzZSBhIGJyaWVmIGZsYXNoIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHVwICh3aGVuIGl0IGdldHMgcGlubmVkIGFnYWluKVxuXG4gICAgICAgICAgICBpZiAocGluUmVwYXJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCFyZXNldCAmJiAoaXNBY3RpdmUgfHwgaXNBdE1heCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gc2Nyb2xsIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBfcmVwYXJlbnQocGluLCBfYm9keSwgYm91bmRzLnRvcCArIChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9vZmZzZXQgOiAwKSArIF9weCwgYm91bmRzLmxlZnQgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyAwIDogX29mZnNldCkgKyBfcHgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXBhcmVudChwaW4sIHNwYWNlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NldFN0YXRlKGlzQWN0aXZlIHx8IGlzQXRNYXggPyBwaW5BY3RpdmVTdGF0ZSA6IHBpblN0YXRlKTtcblxuICAgICAgICAgICAgcGluTW92ZXMgJiYgY2xpcHBlZCA8IDEgJiYgaXNBY3RpdmUgfHwgcGluU2V0dGVyKHBpblN0YXJ0ICsgKGNsaXBwZWQgPT09IDEgJiYgIWlzQXRNYXggPyBwaW5DaGFuZ2UgOiAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc25hcCAmJiAhdHdlZW5Uby50d2VlbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyAmJiAodG9nZ2xlZCB8fCBvbmNlICYmIGNsaXBwZWQgJiYgKGNsaXBwZWQgPCAxIHx8ICFfbGltaXRDYWxsYmFja3MpKSAmJiBfdG9BcnJheSh0b2dnbGVDbGFzcy50YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3RbaXNBY3RpdmUgfHwgb25jZSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSh0b2dnbGVDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICB9KTsgLy8gY2xhc3NlcyBjb3VsZCBhZmZlY3QgcG9zaXRpb25pbmcsIHNvIGRvIGl0IGV2ZW4gaWYgcmVzZXQgb3IgcmVmcmVzaGluZyBpcyB0cnVlLlxuXG4gICAgICAgIG9uVXBkYXRlICYmICFpc1RvZ2dsZSAmJiAhcmVzZXQgJiYgb25VcGRhdGUoc2VsZik7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGlmIChpc1Rha2luZ0FjdGlvbikge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSkucGF1c2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uW2FjdGlvbl0oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvblVwZGF0ZSAmJiBvblVwZGF0ZShzZWxmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9nZ2xlZCB8fCAhX2xpbWl0Q2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBvbiBzdGFydHVwLCB0aGUgcGFnZSBjb3VsZCBiZSBzY3JvbGxlZCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGNhbGxiYWNrcyB0aGF0IGRpZG4ndCB0b2dnbGUuIEZvciBleGFtcGxlIG9uRW50ZXIgc2hvdWxkbid0IGZpcmUgaWYgdGhlIFNjcm9sbFRyaWdnZXIgaXNuJ3QgYWN0dWFsbHkgZW50ZXJlZC5cbiAgICAgICAgICAgIG9uVG9nZ2xlICYmIHRvZ2dsZWQgJiYgX2NhbGxiYWNrKHNlbGYsIG9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgX2NhbGxiYWNrKHNlbGYsIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0pO1xuICAgICAgICAgICAgb25jZSAmJiAoY2xpcHBlZCA9PT0gMSA/IHNlbGYua2lsbChmYWxzZSwgMSkgOiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdID0gMCk7IC8vIGEgY2FsbGJhY2sgc2hvdWxkbid0IGJlIGNhbGxlZCBhZ2FpbiBpZiBvbmNlIGlzIHRydWUuXG5cbiAgICAgICAgICAgIGlmICghdG9nZ2xlZCkge1xuICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRvIGdvIGNvbXBsZXRlbHkgcGFzdCwgbGlrZSBmcm9tIGJlZm9yZSB0aGUgc3RhcnQgdG8gYWZ0ZXIgdGhlIGVuZCAob3IgdmljZS12ZXJzYSkgaW4gd2hpY2ggY2FzZSBCT1RIIGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWQgaW4gdGhhdCBvcmRlclxuICAgICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgPT09IDEgPyAxIDogMztcbiAgICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBfY2FsbGJhY2soc2VsZiwgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZhc3RTY3JvbGxFbmQgJiYgIWlzQWN0aXZlICYmIE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPiAoX2lzTnVtYmVyKGZhc3RTY3JvbGxFbmQpID8gZmFzdFNjcm9sbEVuZCA6IDI1MDApKSB7XG4gICAgICAgICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5wcm9ncmVzcygxKSA6IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhY3Rpb24gPT09IFwicmV2ZXJzZVwiID8gMSA6ICFjbGlwcGVkLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUb2dnbGUgJiYgb25VcGRhdGUgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgb25VcGRhdGUoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gdXBkYXRlIGFic29sdXRlbHktcG9zaXRpb25lZCBtYXJrZXJzIChvbmx5IGlmIHRoZSBzY3JvbGxlciBpc24ndCB0aGUgdmlld3BvcnQpXG5cblxuICAgICAgaWYgKG1hcmtlckVuZFNldHRlcikge1xuICAgICAgICB2YXIgbiA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IHNjcm9sbCAvIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpICogKGNvbnRhaW5lckFuaW1hdGlvbi5fY2FTY3JvbGxEaXN0IHx8IDApIDogc2Nyb2xsO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlcihuICsgKG1hcmtlclN0YXJ0VHJpZ2dlci5faXNGbGlwcGVkID8gMSA6IDApKTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyKG4pO1xuICAgICAgfVxuXG4gICAgICBjYU1hcmtlclNldHRlciAmJiBjYU1hcmtlclNldHRlcigtc2Nyb2xsIC8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgKiAoY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgfHwgMCkpO1xuICAgIH07XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgcmVmcmVzaCkge1xuICAgICAgaWYgKCFzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgc2VsZi5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwicmVzaXplXCIsIF9vblJlc2l6ZSk7XG5cbiAgICAgICAgaXNWaWV3cG9ydCB8fCBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cbiAgICAgICAgaWYgKHJlc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBwcmV2UHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgIHNjcm9sbDEgPSBzY3JvbGwyID0gbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoICE9PSBmYWxzZSAmJiBzZWxmLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUd2VlbiA9IGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICByZXR1cm4gc25hcCAmJiB0d2VlblRvID8gdHdlZW5Uby50d2VlbiA6IHNjcnViVHdlZW47XG4gICAgfTtcblxuICAgIHNlbGYuc2V0UG9zaXRpb25zID0gZnVuY3Rpb24gKG5ld1N0YXJ0LCBuZXdFbmQsIGtlZXBDbGFtcCwgcGluT2Zmc2V0KSB7XG4gICAgICAvLyBkb2Vzbid0IHBlcnNpc3QgYWZ0ZXIgcmVmcmVzaCgpISBJbnRlbmRlZCB0byBiZSBhIHdheSB0byBvdmVycmlkZSB2YWx1ZXMgdGhhdCB3ZXJlIHNldCBkdXJpbmcgcmVmcmVzaCgpLCBsaWtlIHlvdSBjb3VsZCBzZXQgaXQgaW4gb25SZWZyZXNoKClcbiAgICAgIGlmIChjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gY29udmVydCByYXRpb3MgaW50byBzY3JvbGwgcG9zaXRpb25zLiBSZW1lbWJlciwgc3RhcnQvZW5kIHZhbHVlcyBvbiBTY3JvbGxUcmlnZ2VycyB0aGF0IGhhdmUgYSBjb250YWluZXJBbmltYXRpb24gcmVmZXIgdG8gdGhlIHRpbWUgKGluIHNlY29uZHMpLCBOT1Qgc2Nyb2xsIHBvc2l0aW9ucy5cbiAgICAgICAgdmFyIHN0ID0gY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgICAgICBkdXJhdGlvbiA9IGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLFxuICAgICAgICAgICAgX2NoYW5nZSA9IHN0LmVuZCAtIHN0LnN0YXJ0O1xuXG4gICAgICAgIG5ld1N0YXJ0ID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3U3RhcnQgLyBkdXJhdGlvbjtcbiAgICAgICAgbmV3RW5kID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3RW5kIC8gZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYucmVmcmVzaChmYWxzZSwgZmFsc2UsIHtcbiAgICAgICAgc3RhcnQ6IF9rZWVwQ2xhbXAobmV3U3RhcnQsIGtlZXBDbGFtcCAmJiAhIXNlbGYuX3N0YXJ0Q2xhbXApLFxuICAgICAgICBlbmQ6IF9rZWVwQ2xhbXAobmV3RW5kLCBrZWVwQ2xhbXAgJiYgISFzZWxmLl9lbmRDbGFtcClcbiAgICAgIH0sIHBpbk9mZnNldCk7XG4gICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBzZWxmLmFkanVzdFBpblNwYWNpbmcgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICBpZiAoc3BhY2VyU3RhdGUgJiYgYW1vdW50KSB7XG4gICAgICAgIHZhciBpID0gc3BhY2VyU3RhdGUuaW5kZXhPZihkaXJlY3Rpb24uZCkgKyAxO1xuICAgICAgICBzcGFjZXJTdGF0ZVtpXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbaV0pICsgYW1vdW50ICsgX3B4O1xuICAgICAgICBzcGFjZXJTdGF0ZVsxXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbMV0pICsgYW1vdW50ICsgX3B4O1xuXG4gICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIGlmIChzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgcmVzZXQgIT09IGZhbHNlICYmIHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICBzZWxmLmVuYWJsZWQgPSBzZWxmLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGFsbG93QW5pbWF0aW9uIHx8IHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5wYXVzZSgpO1xuICAgICAgICBwcmV2U2Nyb2xsID0gMDtcbiAgICAgICAgcGluQ2FjaGUgJiYgKHBpbkNhY2hlLnVuY2FjaGUgPSAxKTtcbiAgICAgICAgb25SZWZyZXNoSW5pdCAmJiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoSW5pdFwiLCBvblJlZnJlc2hJbml0KTtcblxuICAgICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICAgICAgdHdlZW5Uby50d2VlbiAmJiB0d2VlblRvLnR3ZWVuLmtpbGwoKSAmJiAodHdlZW5Uby50d2VlbiA9IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKF90cmlnZ2Vyc1tpXS5zY3JvbGxlciA9PT0gc2Nyb2xsZXIgJiYgX3RyaWdnZXJzW2ldICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAgIHJldHVybjsgLy9kb24ndCByZW1vdmUgdGhlIGxpc3RlbmVycyBpZiB0aGVyZSBhcmUgc3RpbGwgb3RoZXIgdHJpZ2dlcnMgcmVmZXJlbmNpbmcgaXQuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG4gICAgICAgICAgaXNWaWV3cG9ydCB8fCBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5raWxsID0gZnVuY3Rpb24gKHJldmVydCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIHNlbGYuZGlzYWJsZShyZXZlcnQsIGFsbG93QW5pbWF0aW9uKTtcbiAgICAgIHNjcnViVHdlZW4gJiYgIWFsbG93QW5pbWF0aW9uICYmIHNjcnViVHdlZW4ua2lsbCgpO1xuICAgICAgaWQgJiYgZGVsZXRlIF9pZHNbaWRdO1xuXG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX3RyaWdnZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGkgPT09IF9pICYmIF9kaXJlY3Rpb24gPiAwICYmIF9pLS07IC8vIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSByZWZyZXNoKCkgb3IgdXBkYXRlKCksIHNwbGljaW5nIHdvdWxkIGNhdXNlIHNraXBzIGluIHRoZSBpbmRleCwgc28gYWRqdXN0Li4uXG4gICAgICAvLyBpZiBubyBvdGhlciBTY3JvbGxUcmlnZ2VyIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBzY3JvbGxlciBhcmUgZm91bmQsIHdpcGUgb3V0IGFueSByZWNvcmRlZCBzY3JvbGwgcG9zaXRpb24uIE90aGVyd2lzZSwgaW4gYSBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbiwgZm9yIGV4YW1wbGUsIGl0IGNvdWxkIG1haW50YWluIHNjcm9sbCBwb3NpdGlvbiB3aGVuIGl0IHJlYWxseSBzaG91bGRuJ3QuXG5cbiAgICAgIGkgPSAwO1xuXG4gICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5zY3JvbGxlciA9PT0gc2VsZi5zY3JvbGxlciAmJiAoaSA9IDEpO1xuICAgICAgfSk7XG5cbiAgICAgIGkgfHwgX3JlZnJlc2hpbmdBbGwgfHwgKHNlbGYuc2Nyb2xsLnJlYyA9IDApO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyID0gbnVsbDtcbiAgICAgICAgcmV2ZXJ0ICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICAgIGtpbGw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBhbmltYXRpb24ua2lsbCgpO1xuICAgICAgfVxuXG4gICAgICBtYXJrZXJTdGFydCAmJiBbbWFya2VyU3RhcnQsIG1hcmtlckVuZCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnBhcmVudE5vZGUgJiYgbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pO1xuICAgICAgfSk7XG4gICAgICBfcHJpbWFyeSA9PT0gc2VsZiAmJiAoX3ByaW1hcnkgPSAwKTtcblxuICAgICAgaWYgKHBpbikge1xuICAgICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuICAgICAgICBpID0gMDtcblxuICAgICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LnBpbiA9PT0gcGluICYmIGkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaSB8fCAocGluQ2FjaGUuc3BhY2VyID0gMCk7IC8vIGlmIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBTY3JvbGxUcmlnZ2VycyB3aXRoIHRoZSBzYW1lIHBpbiwgcmVtb3ZlIHRoZSBzcGFjZXIsIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBjb250YW1pbmF0ZWQgd2l0aCBvbGQvc3RhbGUgdmFsdWVzIGlmIHRoZSB1c2VyIHJlLWNyZWF0ZXMgYSBTY3JvbGxUcmlnZ2VyIGZvciB0aGUgc2FtZSBlbGVtZW50LlxuICAgICAgfVxuXG4gICAgICB2YXJzLm9uS2lsbCAmJiB2YXJzLm9uS2lsbChzZWxmKTtcbiAgICB9O1xuXG4gICAgX3RyaWdnZXJzLnB1c2goc2VsZik7XG5cbiAgICBzZWxmLmVuYWJsZShmYWxzZSwgZmFsc2UpO1xuICAgIGN1c3RvbVJldmVydFJldHVybiAmJiBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZik7XG5cbiAgICBpZiAoYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5hZGQgJiYgIWNoYW5nZSkge1xuICAgICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBpcyBhIHRpbWVsaW5lLCBpdCBtYXkgbm90IGhhdmUgYmVlbiBwb3B1bGF0ZWQgeWV0LCBzbyBpdCB3b3VsZG4ndCByZW5kZXIgYXQgdGhlIHByb3BlciBwbGFjZSBvbiB0aGUgZmlyc3QgcmVmcmVzaCgpLCB0aHVzIHdlIHNob3VsZCBzY2hlZHVsZSBvbmUgZm9yIHRoZSBuZXh0IHRpY2suIElmIFwiY2hhbmdlXCIgaXMgZGVmaW5lZCwgd2Uga25vdyBpdCBtdXN0IGJlIHJlLWVuYWJsaW5nLCB0aHVzIHdlIGNhbiByZWZyZXNoKCkgcmlnaHQgYXdheS5cbiAgICAgIHZhciB1cGRhdGVGdW5jID0gc2VsZi51cGRhdGU7IC8vIHNvbWUgYnJvd3NlcnMgbWF5IGZpcmUgYSBzY3JvbGwgZXZlbnQgQkVGT1JFIGEgdGljayBlbGFwc2VzIGFuZC9vciB0aGUgRE9NQ29udGVudExvYWRlZCBmaXJlcy4gU28gdGhlcmUncyBhIGNoYW5jZSB1cGRhdGUoKSB3aWxsIGJlIGNhbGxlZCBCRUZPUkUgYSByZWZyZXNoKCkgaGFzIGhhcHBlbmVkIG9uIGEgVGltZWxpbmUtYXR0YWNoZWQgU2Nyb2xsVHJpZ2dlciB3aGljaCBtZWFucyB0aGUgc3RhcnQvZW5kIHdvbid0IGJlIGNhbGN1bGF0ZWQgeWV0LiBXZSBkb24ndCB3YW50IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlIHVwZGF0ZSgpIG1ldGhvZCAobGlrZSBjaGVjayB0byBzZWUgaWYgZW5kIGlzIGRlZmluZWQgYW5kIGlmIG5vdCwgZm9yY2UgYSByZWZyZXNoKCkpIGJlY2F1c2UgdGhhdCdzIGEgZnVuY3Rpb24gdGhhdCBnZXRzIGhpdCBhIExPVCAocGVyZm9ybWFuY2UpLiBTbyB3ZSBzd2FwIG91dCB0aGUgcmVhbCB1cGRhdGUoKSBtZXRob2QgZm9yIHRoaXMgb25lIHRoYXQnbGwgcmUtYXR0YWNoIGl0IHRoZSBmaXJzdCB0aW1lIGl0IGdldHMgY2FsbGVkIGFuZCBvZiBjb3Vyc2UgZm9yY2VzIGEgcmVmcmVzaCgpLlxuXG4gICAgICBzZWxmLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi51cGRhdGUgPSB1cGRhdGVGdW5jO1xuICAgICAgICBzdGFydCB8fCBlbmQgfHwgc2VsZi5yZWZyZXNoKCk7XG4gICAgICB9O1xuXG4gICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuMDEsIHNlbGYudXBkYXRlKTtcbiAgICAgIGNoYW5nZSA9IDAuMDE7XG4gICAgICBzdGFydCA9IGVuZCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHBpbiAmJiBfcXVldWVSZWZyZXNoQWxsKCk7IC8vIHBpbm5pbmcgY291bGQgYWZmZWN0IHRoZSBwb3NpdGlvbnMgb2Ygb3RoZXIgdGhpbmdzLCBzbyBtYWtlIHN1cmUgd2UgcXVldWUgYSBmdWxsIHJlZnJlc2goKVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3Rlcihjb3JlKSB7XG4gICAgaWYgKCFfY29yZUluaXR0ZWQpIHtcbiAgICAgIGdzYXAgPSBjb3JlIHx8IF9nZXRHU0FQKCk7XG4gICAgICBfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50ICYmIFNjcm9sbFRyaWdnZXIuZW5hYmxlKCk7XG4gICAgICBfY29yZUluaXR0ZWQgPSBfZW5hYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvcmVJbml0dGVkO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMgPSBmdW5jdGlvbiBkZWZhdWx0cyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBwIGluIGNvbmZpZykge1xuICAgICAgICBfZGVmYXVsdHNbcF0gPSBjb25maWdbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKHJlc2V0LCBraWxsKSB7XG4gICAgX2VuYWJsZWQgPSAwO1xuXG4gICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyW2tpbGwgPyBcImtpbGxcIiA6IFwiZGlzYWJsZVwiXShyZXNldCk7XG4gICAgfSk7XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoX3dpbiwgXCJ3aGVlbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICBjbGVhckludGVydmFsKF9zeW5jSW50ZXJ2YWwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfYm9keSwgXCJ0b3VjaHN0YXJ0XCIsIF9wYXNzVGhyb3VnaCk7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIiwgX3BvaW50ZXJEb3duSGFuZGxlcik7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIiwgX3BvaW50ZXJVcEhhbmRsZXIpO1xuXG4gICAgX3Jlc2l6ZURlbGF5LmtpbGwoKTtcblxuICAgIF9pdGVyYXRlQXV0b1JlZnJlc2goX3JlbW92ZUxpc3RlbmVyKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAxXSk7XG5cbiAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMl0pO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBkb2N1bWVudDtcbiAgICBfZG9jRWwgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfYm9keSA9IF9kb2MuYm9keTtcblxuICAgIGlmIChnc2FwKSB7XG4gICAgICBfdG9BcnJheSA9IGdzYXAudXRpbHMudG9BcnJheTtcbiAgICAgIF9jbGFtcCA9IGdzYXAudXRpbHMuY2xhbXA7XG4gICAgICBfY29udGV4dCA9IGdzYXAuY29yZS5jb250ZXh0IHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMgPSBnc2FwLmNvcmUuc3VwcHJlc3NPdmVyd3JpdGVzIHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zY3JvbGxSZXN0b3JhdGlvbiA9IF93aW4uaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiB8fCBcImF1dG9cIjtcbiAgICAgIF9sYXN0U2Nyb2xsID0gX3dpbi5wYWdlWU9mZnNldDtcbiAgICAgIGdzYXAuY29yZS5nbG9iYWxzKFwiU2Nyb2xsVHJpZ2dlclwiLCBTY3JvbGxUcmlnZ2VyKTsgLy8gbXVzdCByZWdpc3RlciB0aGUgZ2xvYmFsIG1hbnVhbGx5IGJlY2F1c2UgaW4gSW50ZXJuZXQgRXhwbG9yZXIsIGZ1bmN0aW9ucyAoY2xhc3NlcykgZG9uJ3QgaGF2ZSBhIFwibmFtZVwiIHByb3BlcnR5LlxuXG4gICAgICBpZiAoX2JvZHkpIHtcbiAgICAgICAgX2VuYWJsZWQgPSAxO1xuICAgICAgICBfZGl2MTAwdmggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyB0byBzb2x2ZSBtb2JpbGUgYnJvd3NlciBhZGRyZXNzIGJhciBzaG93L2hpZGUgcmVzaXppbmcsIHdlIHNob3VsZG4ndCByZWx5IG9uIHdpbmRvdy5pbm5lckhlaWdodC4gSW5zdGVhZCwgdXNlIGEgPGRpdj4gd2l0aCBpdHMgaGVpZ2h0IHNldCB0byAxMDB2aCBhbmQgbWVhc3VyZSB0aGF0IHNpbmNlIHRoYXQncyB3aGF0IHRoZSBzY3JvbGxpbmcgaXMgYmFzZWQgb24gYW55d2F5IGFuZCBpdCdzIG5vdCBhZmZlY3RlZCBieSBhZGRyZXNzIGJhciBzaG93aW5nL2hpZGluZy5cblxuICAgICAgICBfZGl2MTAwdmguc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgICAgICBfZGl2MTAwdmguc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICAgICAgX3JlZnJlc2gxMDB2aCgpO1xuXG4gICAgICAgIF9yYWZCdWdGaXgoKTtcblxuICAgICAgICBPYnNlcnZlci5yZWdpc3Rlcihnc2FwKTsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoID0gT2JzZXJ2ZXIuaXNUb3VjaDtcbiAgICAgICAgX2ZpeElPU0J1ZyA9IE9ic2VydmVyLmlzVG91Y2ggJiYgLyhpUGFkfGlQaG9uZXxpUG9kfE1hYykvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBzaW5jZSAyMDE3LCBpT1MgaGFzIGhhZCBhIGJ1ZyB0aGF0IGNhdXNlcyBldmVudC5jbGllbnRYL1kgdG8gYmUgaW5hY2N1cmF0ZSB3aGVuIGEgc2Nyb2xsIG9jY3VycywgdGh1cyB3ZSBtdXN0IGFsdGVybmF0ZSBpZ25vcmluZyBldmVyeSBvdGhlciB0b3VjaG1vdmUgZXZlbnQgdG8gd29yayBhcm91bmQgaXQuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgxOTU0IGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzXG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF93aW4sIFwid2hlZWxcIiwgX29uU2Nyb2xsKTsgLy8gbW9zdGx5IGZvciAzcmQgcGFydHkgc21vb3RoIHNjcm9sbGluZyBsaWJyYXJpZXMuXG5cblxuICAgICAgICBfcm9vdCA9IFtfd2luLCBfZG9jLCBfZG9jRWwsIF9ib2R5XTtcblxuICAgICAgICBpZiAoZ3NhcC5tYXRjaE1lZGlhKSB7XG4gICAgICAgICAgU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgICAgICAgICAgIHZhciBtbSA9IGdzYXAubWF0Y2hNZWRpYSgpLFxuICAgICAgICAgICAgICAgIHA7XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIG1tLmFkZChwLCB2YXJzW3BdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1tO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBnc2FwLmFkZEV2ZW50TGlzdGVuZXIoXCJtYXRjaE1lZGlhSW5pdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JldmVydEFsbCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFSZXZlcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXZlcnRSZWNvcmRlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3JlZnJlc2hBbGwoMCwgMSk7XG5cbiAgICAgICAgICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ3NhcC5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gd2hlbiBvcmllbnRhdGlvbiBjaGFuZ2VzLCB3ZSBzaG91bGQgdGFrZSBuZXcgYmFzZSBtZWFzdXJlbWVudHMgZm9yIHRoZSBpZ25vcmVNb2JpbGVSZXNpemUgZmVhdHVyZS5cbiAgICAgICAgICAgIF9zZXRCYXNlRGltZW5zaW9ucygpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3NldEJhc2VEaW1lbnNpb25zO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlcXVpcmVzIEdTQVAgMy4xMS4wIG9yIGxhdGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldEJhc2VEaW1lbnNpb25zKCk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7IC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgQ2hyb21lKSwgdGhlIHdpbmRvdyBzdG9wcyBkaXNwYXRjaGluZyBzY3JvbGwgZXZlbnRzIG9uIHRoZSB3aW5kb3cgaWYgeW91IHNjcm9sbCByZWFsbHkgZmFzdCwgYnV0IGl0J3MgY29uc2lzdGVudCBvbiB0aGUgZG9jdW1lbnQhXG5cblxuICAgICAgICB2YXIgYm9keVN0eWxlID0gX2JvZHkuc3R5bGUsXG4gICAgICAgICAgICBib3JkZXIgPSBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUsXG4gICAgICAgICAgICBBbmltYXRpb25Qcm90byA9IGdzYXAuY29yZS5BbmltYXRpb24ucHJvdG90eXBlLFxuICAgICAgICAgICAgYm91bmRzLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgQW5pbWF0aW9uUHJvdG8ucmV2ZXJ0IHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25Qcm90bywgXCJyZXZlcnRcIiwge1xuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUoLTAuMDEsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChBbmltYXRpb24ucmV2ZXJ0KCkgd2FzIGFkZGVkIGFmdGVyIDMuMTAuNClcblxuICAgICAgICBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUgPSBcInNvbGlkXCI7IC8vIHdvcmtzIGFyb3VuZCBhbiBpc3N1ZSB3aGVyZSBhIG1hcmdpbiBvZiBhIGNoaWxkIGVsZW1lbnQgY291bGQgdGhyb3cgb2ZmIHRoZSBib3VuZHMgb2YgdGhlIF9ib2R5LCBtYWtpbmcgaXQgc2VlbSBsaWtlIHRoZXJlJ3MgYSBtYXJnaW4gd2hlbiB0aGVyZSBhY3R1YWxseSBpc24ndC4gVGhlIGJvcmRlciBlbnN1cmVzIHRoYXQgdGhlIGJvdW5kcyBhcmUgYWNjdXJhdGUuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhfYm9keSk7XG4gICAgICAgIF92ZXJ0aWNhbC5tID0gTWF0aC5yb3VuZChib3VuZHMudG9wICsgX3ZlcnRpY2FsLnNjKCkpIHx8IDA7IC8vIGFjY29tbW9kYXRlIHRoZSBvZmZzZXQgb2YgdGhlIDxib2R5PiBjYXVzZWQgYnkgbWFyZ2lucyBhbmQvb3IgcGFkZGluZ1xuXG4gICAgICAgIF9ob3Jpem9udGFsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgX2hvcml6b250YWwuc2MoKSkgfHwgMDtcbiAgICAgICAgYm9yZGVyID8gYm9keVN0eWxlLmJvcmRlclRvcFN0eWxlID0gYm9yZGVyIDogYm9keVN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXRvcC1zdHlsZVwiKTsgLy8gVE9ETzogKD8pIG1heWJlIG1vdmUgdG8gbGV2ZXJhZ2luZyB0aGUgdmVsb2NpdHkgbWVjaGFuaXNtIGluIE9ic2VydmVyIGFuZCBza2lwIGludGVydmFscy5cblxuICAgICAgICBfc3luY0ludGVydmFsID0gc2V0SW50ZXJ2YWwoX3N5bmMsIDI1MCk7XG4gICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC41LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zdGFydHVwID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTsgLy8gc29tZSBvbGRlciBBbmRyb2lkIGRldmljZXMgaW50ZXJtaXR0ZW50bHkgc3RvcCBkaXNwYXRjaGluZyBcInRvdWNobW92ZVwiIGV2ZW50cyBpZiB3ZSBkb24ndCBsaXN0ZW4gZm9yIFwidG91Y2hjYW5jZWxcIiBvbiB0aGUgZG9jdW1lbnQuXG5cblxuICAgICAgICBfYWRkTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpOyAvL3dvcmtzIGFyb3VuZCBTYWZhcmkgYnVnOiBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIxNDUwLWRyYWdnYWJsZS1pbi1pZnJhbWUtb24tbW9iaWxlLWlzLWJ1Z2d5L1xuXG5cbiAgICAgICAgX211bHRpTGlzdGVuZXIoX2FkZExpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsIF9wb2ludGVyRG93bkhhbmRsZXIpO1xuXG4gICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLCBfcG9pbnRlclVwSGFuZGxlcik7XG5cbiAgICAgICAgX3RyYW5zZm9ybVByb3AgPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9zdGF0ZVByb3BzLnB1c2goX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICAgIF9jb3JlSW5pdHRlZCA9IF9nZXRUaW1lKCk7XG4gICAgICAgIF9yZXNpemVEZWxheSA9IGdzYXAuZGVsYXllZENhbGwoMC4yLCBfcmVmcmVzaEFsbCkucGF1c2UoKTtcbiAgICAgICAgX2F1dG9SZWZyZXNoID0gW19kb2MsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHcgPSBfd2luLmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgIGggPSBfd2luLmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKF9kb2MuaGlkZGVuKSB7XG4gICAgICAgICAgICBfcHJldldpZHRoID0gdztcbiAgICAgICAgICAgIF9wcmV2SGVpZ2h0ID0gaDtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wcmV2V2lkdGggIT09IHcgfHwgX3ByZXZIZWlnaHQgIT09IGgpIHtcbiAgICAgICAgICAgIF9vblJlc2l6ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2RvYywgXCJET01Db250ZW50TG9hZGVkXCIsIF9yZWZyZXNoQWxsLCBfd2luLCBcImxvYWRcIiwgX3JlZnJlc2hBbGwsIF93aW4sIFwicmVzaXplXCIsIF9vblJlc2l6ZV07XG5cbiAgICAgICAgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIpO1xuXG4gICAgICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyaWdnZXIuZW5hYmxlKDAsIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMV0pO1xuXG4gICAgICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jb25maWcgPSBmdW5jdGlvbiBjb25maWcodmFycykge1xuICAgIFwibGltaXRDYWxsYmFja3NcIiBpbiB2YXJzICYmIChfbGltaXRDYWxsYmFja3MgPSAhIXZhcnMubGltaXRDYWxsYmFja3MpO1xuICAgIHZhciBtcyA9IHZhcnMuc3luY0ludGVydmFsO1xuICAgIG1zICYmIGNsZWFySW50ZXJ2YWwoX3N5bmNJbnRlcnZhbCkgfHwgKF9zeW5jSW50ZXJ2YWwgPSBtcykgJiYgc2V0SW50ZXJ2YWwoX3N5bmMsIG1zKTtcbiAgICBcImlnbm9yZU1vYmlsZVJlc2l6ZVwiIGluIHZhcnMgJiYgKF9pZ25vcmVNb2JpbGVSZXNpemUgPSBTY3JvbGxUcmlnZ2VyLmlzVG91Y2ggPT09IDEgJiYgdmFycy5pZ25vcmVNb2JpbGVSZXNpemUpO1xuXG4gICAgaWYgKFwiYXV0b1JlZnJlc2hFdmVudHNcIiBpbiB2YXJzKSB7XG4gICAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9yZW1vdmVMaXN0ZW5lcikgfHwgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIsIHZhcnMuYXV0b1JlZnJlc2hFdmVudHMgfHwgXCJub25lXCIpO1xuICAgICAgX2lnbm9yZVJlc2l6ZSA9ICh2YXJzLmF1dG9SZWZyZXNoRXZlbnRzICsgXCJcIikuaW5kZXhPZihcInJlc2l6ZVwiKSA9PT0gLTE7XG4gICAgfVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuc2Nyb2xsZXJQcm94eSA9IGZ1bmN0aW9uIHNjcm9sbGVyUHJveHkodGFyZ2V0LCB2YXJzKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGFyZ2V0KHRhcmdldCksXG4gICAgICAgIGkgPSBfc2Nyb2xsZXJzLmluZGV4T2YodCksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydCh0KTtcblxuICAgIGlmICh+aSkge1xuICAgICAgX3Njcm9sbGVycy5zcGxpY2UoaSwgaXNWaWV3cG9ydCA/IDYgOiAyKTtcbiAgICB9XG5cbiAgICBpZiAodmFycykge1xuICAgICAgaXNWaWV3cG9ydCA/IF9wcm94aWVzLnVuc2hpZnQoX3dpbiwgdmFycywgX2JvZHksIHZhcnMsIF9kb2NFbCwgdmFycykgOiBfcHJveGllcy51bnNoaWZ0KHQsIHZhcnMpO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmNsZWFyTWF0Y2hNZWRpYSA9IGZ1bmN0aW9uIGNsZWFyTWF0Y2hNZWRpYShxdWVyeSkge1xuICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5fY3R4ICYmIHQuX2N0eC5xdWVyeSA9PT0gcXVlcnkgJiYgdC5fY3R4LmtpbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5pc0luVmlld3BvcnQgPSBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCwgcmF0aW8sIGhvcml6b250YWwpIHtcbiAgICB2YXIgYm91bmRzID0gKF9pc1N0cmluZyhlbGVtZW50KSA/IF9nZXRUYXJnZXQoZWxlbWVudCkgOiBlbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgb2Zmc2V0ID0gYm91bmRzW2hvcml6b250YWwgPyBfd2lkdGggOiBfaGVpZ2h0XSAqIHJhdGlvIHx8IDA7XG4gICAgcmV0dXJuIGhvcml6b250YWwgPyBib3VuZHMucmlnaHQgLSBvZmZzZXQgPiAwICYmIGJvdW5kcy5sZWZ0ICsgb2Zmc2V0IDwgX3dpbi5pbm5lcldpZHRoIDogYm91bmRzLmJvdHRvbSAtIG9mZnNldCA+IDAgJiYgYm91bmRzLnRvcCArIG9mZnNldCA8IF93aW4uaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5wb3NpdGlvbkluVmlld3BvcnQgPSBmdW5jdGlvbiBwb3NpdGlvbkluVmlld3BvcnQoZWxlbWVudCwgcmVmZXJlbmNlUG9pbnQsIGhvcml6b250YWwpIHtcbiAgICBfaXNTdHJpbmcoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZ2V0VGFyZ2V0KGVsZW1lbnQpKTtcbiAgICB2YXIgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2l6ZSA9IGJvdW5kc1tob3Jpem9udGFsID8gX3dpZHRoIDogX2hlaWdodF0sXG4gICAgICAgIG9mZnNldCA9IHJlZmVyZW5jZVBvaW50ID09IG51bGwgPyBzaXplIC8gMiA6IHJlZmVyZW5jZVBvaW50IGluIF9rZXl3b3JkcyA/IF9rZXl3b3Jkc1tyZWZlcmVuY2VQb2ludF0gKiBzaXplIDogfnJlZmVyZW5jZVBvaW50LmluZGV4T2YoXCIlXCIpID8gcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgKiBzaXplIC8gMTAwIDogcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgfHwgMDtcbiAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChib3VuZHMubGVmdCArIG9mZnNldCkgLyBfd2luLmlubmVyV2lkdGggOiAoYm91bmRzLnRvcCArIG9mZnNldCkgLyBfd2luLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIua2lsbEFsbCA9IGZ1bmN0aW9uIGtpbGxBbGwoYWxsb3dMaXN0ZW5lcnMpIHtcbiAgICBfdHJpZ2dlcnMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiICYmIHQua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93TGlzdGVuZXJzICE9PSB0cnVlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gX2xpc3RlbmVycy5raWxsQWxsIHx8IFtdO1xuICAgICAgX2xpc3RlbmVycyA9IHt9O1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsVHJpZ2dlcjtcbn0oKTtcblNjcm9sbFRyaWdnZXIudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5cblNjcm9sbFRyaWdnZXIuc2F2ZVN0eWxlcyA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XG4gIHJldHVybiB0YXJnZXRzID8gX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgLy8gc2F2ZWQgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiBhIGNvbnNlY3V0aXZlIGFsdGVybmF0aW5nIEFycmF5LCBsaWtlIFtlbGVtZW50LCBjc3NUZXh0LCB0cmFuc2Zvcm0gYXR0cmlidXRlLCBjYWNoZSwgbWF0Y2hNZWRpYSwgLi4uXVxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlKSB7XG4gICAgICB2YXIgaSA9IF9zYXZlZFN0eWxlcy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGkgPj0gMCAmJiBfc2F2ZWRTdHlsZXMuc3BsaWNlKGksIDUpO1xuXG4gICAgICBfc2F2ZWRTdHlsZXMucHVzaCh0YXJnZXQsIHRhcmdldC5zdHlsZS5jc3NUZXh0LCB0YXJnZXQuZ2V0QkJveCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLCBnc2FwLmNvcmUuZ2V0Q2FjaGUodGFyZ2V0KSwgX2NvbnRleHQoKSk7XG4gICAgfVxuICB9KSA6IF9zYXZlZFN0eWxlcztcbn07XG5cblNjcm9sbFRyaWdnZXIucmV2ZXJ0ID0gZnVuY3Rpb24gKHNvZnQsIG1lZGlhKSB7XG4gIHJldHVybiBfcmV2ZXJ0QWxsKCFzb2Z0LCBtZWRpYSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YXJzLCBhbmltYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbik7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJlZnJlc2ggPSBmdW5jdGlvbiAoc2FmZSkge1xuICByZXR1cm4gc2FmZSA/IF9vblJlc2l6ZSgpIDogKF9jb3JlSW5pdHRlZCB8fCBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKCkpICYmIF9yZWZyZXNoQWxsKHRydWUpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci51cGRhdGUgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgcmV0dXJuICsrX3Njcm9sbGVycy5jYWNoZSAmJiBfdXBkYXRlQWxsKGZvcmNlID09PSB0cnVlID8gMiA6IDApO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5jbGVhclNjcm9sbE1lbW9yeSA9IF9jbGVhclNjcm9sbE1lbW9yeTtcblxuU2Nyb2xsVHJpZ2dlci5tYXhTY3JvbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgaG9yaXpvbnRhbCkge1xuICByZXR1cm4gX21heFNjcm9sbChlbGVtZW50LCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRTY3JvbGxGdW5jID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcbiAgcmV0dXJuIF9nZXRTY3JvbGxGdW5jKF9nZXRUYXJnZXQoZWxlbWVudCksIGhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIF9pZHNbaWRdO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfdHJpZ2dlcnMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiO1xuICB9KTtcbn07IC8vIGl0J3MgY29tbW9uIGZvciBwZW9wbGUgdG8gU2Nyb2xsVHJpZ2dlci5nZXRBbGwodCA9PiB0LmtpbGwoKSkgb24gcGFnZSByb3V0ZXMsIGZvciBleGFtcGxlLCBhbmQgd2UgZG9uJ3Qgd2FudCBpdCB0byBydWluIHNtb290aCBzY3JvbGxpbmcgYnkga2lsbGluZyB0aGUgbWFpbiBTY3JvbGxTbW9vdGhlciBvbmUuXG5cblxuU2Nyb2xsVHJpZ2dlci5pc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhX2xhc3RTY3JvbGxUaW1lO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5zbmFwRGlyZWN0aW9uYWwgPSBfc25hcERpcmVjdGlvbmFsO1xuXG5TY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdIHx8IChfbGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSxcbiAgICAgIGkgPSBhICYmIGEuaW5kZXhPZihjYWxsYmFjayk7XG4gIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuYmF0Y2ggPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICB2YXJzQ29weSA9IHt9LFxuICAgICAgaW50ZXJ2YWwgPSB2YXJzLmludGVydmFsIHx8IDAuMDE2LFxuICAgICAgYmF0Y2hNYXggPSB2YXJzLmJhdGNoTWF4IHx8IDFlOSxcbiAgICAgIHByb3h5Q2FsbGJhY2sgPSBmdW5jdGlvbiBwcm94eUNhbGxiYWNrKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHRyaWdnZXJzID0gW10sXG4gICAgICAgIGRlbGF5ID0gZ3NhcC5kZWxheWVkQ2FsbChpbnRlcnZhbCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2soZWxlbWVudHMsIHRyaWdnZXJzKTtcbiAgICAgIGVsZW1lbnRzID0gW107XG4gICAgICB0cmlnZ2VycyA9IFtdO1xuICAgIH0pLnBhdXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgICBlbGVtZW50cy5sZW5ndGggfHwgZGVsYXkucmVzdGFydCh0cnVlKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goc2VsZi50cmlnZ2VyKTtcbiAgICAgIHRyaWdnZXJzLnB1c2goc2VsZik7XG4gICAgICBiYXRjaE1heCA8PSBlbGVtZW50cy5sZW5ndGggJiYgZGVsYXkucHJvZ3Jlc3MoMSk7XG4gICAgfTtcbiAgfSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICB2YXJzQ29weVtwXSA9IHAuc3Vic3RyKDAsIDIpID09PSBcIm9uXCIgJiYgX2lzRnVuY3Rpb24odmFyc1twXSkgJiYgcCAhPT0gXCJvblJlZnJlc2hJbml0XCIgPyBwcm94eUNhbGxiYWNrKHAsIHZhcnNbcF0pIDogdmFyc1twXTtcbiAgfVxuXG4gIGlmIChfaXNGdW5jdGlvbihiYXRjaE1heCkpIHtcbiAgICBiYXRjaE1heCA9IGJhdGNoTWF4KCk7XG5cbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXRjaE1heCA9IHZhcnMuYmF0Y2hNYXgoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgIGZvciAocCBpbiB2YXJzQ29weSkge1xuICAgICAgY29uZmlnW3BdID0gdmFyc0NvcHlbcF07XG4gICAgfVxuXG4gICAgY29uZmlnLnRyaWdnZXIgPSB0YXJnZXQ7XG4gICAgcmVzdWx0LnB1c2goU2Nyb2xsVHJpZ2dlci5jcmVhdGUoY29uZmlnKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyB0byByZWR1Y2UgZmlsZSBzaXplLiBjbGFtcHMgdGhlIHNjcm9sbCBhbmQgYWxzbyByZXR1cm5zIGEgZHVyYXRpb24gbXVsdGlwbGllciBzbyB0aGF0IGlmIHRoZSBzY3JvbGwgZ2V0cyBjaG9wcGVkIHNob3J0ZXIsIHRoZSBkdXJhdGlvbiBnZXRzIGN1cnRhaWxlZCBhcyB3ZWxsIChvdGhlcndpc2UgaWYgeW91J3JlIHZlcnkgY2xvc2UgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSwgZm9yIGV4YW1wbGUsIGFuZCBzd2lwZSB1cCByZWFsbHkgZmFzdCwgaXQnbGwgc3VkZGVubHkgc2xvdyBkb3duIGFuZCB0YWtlIGEgbG9uZyB0aW1lIHRvIHJlYWNoIHRoZSB0b3ApLlxuXG5cbnZhciBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIgPSBmdW5jdGlvbiBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuYywgY3VycmVudCwgZW5kLCBtYXgpIHtcbiAgY3VycmVudCA+IG1heCA/IHNjcm9sbEZ1bmMobWF4KSA6IGN1cnJlbnQgPCAwICYmIHNjcm9sbEZ1bmMoMCk7XG4gIHJldHVybiBlbmQgPiBtYXggPyAobWF4IC0gY3VycmVudCkgLyAoZW5kIC0gY3VycmVudCkgOiBlbmQgPCAwID8gY3VycmVudCAvIChjdXJyZW50IC0gZW5kKSA6IDE7XG59LFxuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcgPSBmdW5jdGlvbiBfYWxsb3dOYXRpdmVQYW5uaW5nKHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHRydWUpIHtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnN0eWxlLnRvdWNoQWN0aW9uID0gZGlyZWN0aW9uID09PSB0cnVlID8gXCJhdXRvXCIgOiBkaXJlY3Rpb24gPyBcInBhbi1cIiArIGRpcmVjdGlvbiArIChPYnNlcnZlci5pc1RvdWNoID8gXCIgcGluY2gtem9vbVwiIDogXCJcIikgOiBcIm5vbmVcIjsgLy8gbm90ZTogRmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgaXQgcGluY2gtem9vbSBwcm9wZXJseSwgYXQgbGVhc3QgaW4gYWRkaXRpb24gdG8gYSBwYW4teCBvciBwYW4teS5cbiAgfVxuXG4gIHRhcmdldCA9PT0gX2RvY0VsICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcoX2JvZHksIGRpcmVjdGlvbik7XG59LFxuICAgIF9vdmVyZmxvdyA9IHtcbiAgYXV0bzogMSxcbiAgc2Nyb2xsOiAxXG59LFxuICAgIF9uZXN0ZWRTY3JvbGwgPSBmdW5jdGlvbiBfbmVzdGVkU2Nyb2xsKF9yZWY1KSB7XG4gIHZhciBldmVudCA9IF9yZWY1LmV2ZW50LFxuICAgICAgdGFyZ2V0ID0gX3JlZjUudGFyZ2V0LFxuICAgICAgYXhpcyA9IF9yZWY1LmF4aXM7XG5cbiAgdmFyIG5vZGUgPSAoZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50KS50YXJnZXQsXG4gICAgICBjYWNoZSA9IG5vZGUuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKG5vZGUpLFxuICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBjcztcblxuICBpZiAoIWNhY2hlLl9pc1Njcm9sbFQgfHwgdGltZSAtIGNhY2hlLl9pc1Njcm9sbFQgPiAyMDAwKSB7XG4gICAgLy8gY2FjaGUgZm9yIDIgc2Vjb25kcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IF9ib2R5ICYmIChub2RlLnNjcm9sbEhlaWdodCA8PSBub2RlLmNsaWVudEhlaWdodCAmJiBub2RlLnNjcm9sbFdpZHRoIDw9IG5vZGUuY2xpZW50V2lkdGggfHwgIShfb3ZlcmZsb3dbKGNzID0gX2dldENvbXB1dGVkU3R5bGUobm9kZSkpLm92ZXJmbG93WV0gfHwgX292ZXJmbG93W2NzLm92ZXJmbG93WF0pKSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjYWNoZS5faXNTY3JvbGwgPSBub2RlICYmIG5vZGUgIT09IHRhcmdldCAmJiAhX2lzVmlld3BvcnQobm9kZSkgJiYgKF9vdmVyZmxvd1soY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSkub3ZlcmZsb3dZXSB8fCBfb3ZlcmZsb3dbY3Mub3ZlcmZsb3dYXSk7XG4gICAgY2FjaGUuX2lzU2Nyb2xsVCA9IHRpbWU7XG4gIH1cblxuICBpZiAoY2FjaGUuX2lzU2Nyb2xsIHx8IGF4aXMgPT09IFwieFwiKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuX2dzYXBBbGxvdyA9IHRydWU7XG4gIH1cbn0sXG4gICAgLy8gY2FwdHVyZSBldmVudHMgb24gc2Nyb2xsYWJsZSBlbGVtZW50cyBJTlNJREUgdGhlIDxib2R5PiBhbmQgYWxsb3cgdGhvc2UgYnkgY2FsbGluZyBzdG9wUHJvcGFnYXRpb24oKSB3aGVuIHdlIGZpbmQgYSBzY3JvbGxhYmxlIGFuY2VzdG9yXG5faW5wdXRPYnNlcnZlciA9IGZ1bmN0aW9uIF9pbnB1dE9ic2VydmVyKHRhcmdldCwgdHlwZSwgaW5wdXRzLCBuZXN0ZWQpIHtcbiAgcmV0dXJuIE9ic2VydmVyLmNyZWF0ZSh7XG4gICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgY2FwdHVyZTogdHJ1ZSxcbiAgICBkZWJvdW5jZTogZmFsc2UsXG4gICAgbG9ja0F4aXM6IHRydWUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBvbldoZWVsOiBuZXN0ZWQgPSBuZXN0ZWQgJiYgX25lc3RlZFNjcm9sbCxcbiAgICBvblByZXNzOiBuZXN0ZWQsXG4gICAgb25EcmFnOiBuZXN0ZWQsXG4gICAgb25TY3JvbGw6IG5lc3RlZCxcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gb25FbmFibGUoKSB7XG4gICAgICByZXR1cm4gaW5wdXRzICYmIF9hZGRMaXN0ZW5lcihfZG9jLCBPYnNlcnZlci5ldmVudFR5cGVzWzBdLCBfY2FwdHVyZUlucHV0cywgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICByZXR1cm4gX3JlbW92ZUxpc3RlbmVyKF9kb2MsIE9ic2VydmVyLmV2ZW50VHlwZXNbMF0sIF9jYXB0dXJlSW5wdXRzLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSxcbiAgICBfaW5wdXRFeHAgPSAvKGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkvaSxcbiAgICBfaW5wdXRJc0ZvY3VzZWQsXG4gICAgX2NhcHR1cmVJbnB1dHMgPSBmdW5jdGlvbiBfY2FwdHVyZUlucHV0cyhlKSB7XG4gIHZhciBpc0lucHV0ID0gX2lucHV0RXhwLnRlc3QoZS50YXJnZXQudGFnTmFtZSk7XG5cbiAgaWYgKGlzSW5wdXQgfHwgX2lucHV0SXNGb2N1c2VkKSB7XG4gICAgZS5fZ3NhcEFsbG93ID0gdHJ1ZTtcbiAgICBfaW5wdXRJc0ZvY3VzZWQgPSBpc0lucHV0O1xuICB9XG59LFxuICAgIF9nZXRTY3JvbGxOb3JtYWxpemVyID0gZnVuY3Rpb24gX2dldFNjcm9sbE5vcm1hbGl6ZXIodmFycykge1xuICBfaXNPYmplY3QodmFycykgfHwgKHZhcnMgPSB7fSk7XG4gIHZhcnMucHJldmVudERlZmF1bHQgPSB2YXJzLmlzTm9ybWFsaXplciA9IHZhcnMuYWxsb3dDbGlja3MgPSB0cnVlO1xuICB2YXJzLnR5cGUgfHwgKHZhcnMudHlwZSA9IFwid2hlZWwsdG91Y2hcIik7XG4gIHZhcnMuZGVib3VuY2UgPSAhIXZhcnMuZGVib3VuY2U7XG4gIHZhcnMuaWQgPSB2YXJzLmlkIHx8IFwibm9ybWFsaXplclwiO1xuXG4gIHZhciBfdmFyczIgPSB2YXJzLFxuICAgICAgbm9ybWFsaXplU2Nyb2xsWCA9IF92YXJzMi5ub3JtYWxpemVTY3JvbGxYLFxuICAgICAgbW9tZW50dW0gPSBfdmFyczIubW9tZW50dW0sXG4gICAgICBhbGxvd05lc3RlZFNjcm9sbCA9IF92YXJzMi5hbGxvd05lc3RlZFNjcm9sbCxcbiAgICAgIG9uUmVsZWFzZSA9IF92YXJzMi5vblJlbGVhc2UsXG4gICAgICBzZWxmLFxuICAgICAgbWF4WSxcbiAgICAgIHRhcmdldCA9IF9nZXRUYXJnZXQodmFycy50YXJnZXQpIHx8IF9kb2NFbCxcbiAgICAgIHNtb290aGVyID0gZ3NhcC5jb3JlLmdsb2JhbHMoKS5TY3JvbGxTbW9vdGhlcixcbiAgICAgIHNtb290aGVySW5zdGFuY2UgPSBzbW9vdGhlciAmJiBzbW9vdGhlci5nZXQoKSxcbiAgICAgIGNvbnRlbnQgPSBfZml4SU9TQnVnICYmICh2YXJzLmNvbnRlbnQgJiYgX2dldFRhcmdldCh2YXJzLmNvbnRlbnQpIHx8IHNtb290aGVySW5zdGFuY2UgJiYgdmFycy5jb250ZW50ICE9PSBmYWxzZSAmJiAhc21vb3RoZXJJbnN0YW5jZS5zbW9vdGgoKSAmJiBzbW9vdGhlckluc3RhbmNlLmNvbnRlbnQoKSksXG4gICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgIHNjcm9sbEZ1bmNYID0gX2dldFNjcm9sbEZ1bmModGFyZ2V0LCBfaG9yaXpvbnRhbCksXG4gICAgICBzY2FsZSA9IDEsXG4gICAgICBpbml0aWFsU2NhbGUgPSAoT2JzZXJ2ZXIuaXNUb3VjaCAmJiBfd2luLnZpc3VhbFZpZXdwb3J0ID8gX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSAqIF93aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiBfd2luLm91dGVyV2lkdGgpIC8gX3dpbi5pbm5lcldpZHRoLFxuICAgICAgd2hlZWxSZWZyZXNoID0gMCxcbiAgICAgIHJlc29sdmVNb21lbnR1bUR1cmF0aW9uID0gX2lzRnVuY3Rpb24obW9tZW50dW0pID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb21lbnR1bShzZWxmKTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW9tZW50dW0gfHwgMi44O1xuICB9LFxuICAgICAgbGFzdFJlZnJlc2hJRCxcbiAgICAgIHNraXBUb3VjaE1vdmUsXG4gICAgICBpbnB1dE9ic2VydmVyID0gX2lucHV0T2JzZXJ2ZXIodGFyZ2V0LCB2YXJzLnR5cGUsIHRydWUsIGFsbG93TmVzdGVkU2Nyb2xsKSxcbiAgICAgIHJlc3VtZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIHJlc3VtZVRvdWNoTW92ZSgpIHtcbiAgICByZXR1cm4gc2tpcFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9LFxuICAgICAgc2Nyb2xsQ2xhbXBYID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgc2Nyb2xsQ2xhbXBZID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgdXBkYXRlQ2xhbXBzID0gZnVuY3Rpb24gdXBkYXRlQ2xhbXBzKCkge1xuICAgIG1heFkgPSBfbWF4U2Nyb2xsKHRhcmdldCwgX3ZlcnRpY2FsKTtcbiAgICBzY3JvbGxDbGFtcFkgPSBfY2xhbXAoX2ZpeElPU0J1ZyA/IDEgOiAwLCBtYXhZKTtcbiAgICBub3JtYWxpemVTY3JvbGxYICYmIChzY3JvbGxDbGFtcFggPSBfY2xhbXAoMCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSkpO1xuICAgIGxhc3RSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICB9LFxuICAgICAgcmVtb3ZlQ29udGVudE9mZnNldCA9IGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnRPZmZzZXQoKSB7XG4gICAgY29udGVudC5fZ3NhcC55ID0gX3JvdW5kKHBhcnNlRmxvYXQoY29udGVudC5fZ3NhcC55KSArIHNjcm9sbEZ1bmNZLm9mZnNldCkgKyBcInB4XCI7XG4gICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgcGFyc2VGbG9hdChjb250ZW50Ll9nc2FwLnkpICsgXCIsIDAsIDEpXCI7XG4gICAgc2Nyb2xsRnVuY1kub2Zmc2V0ID0gc2Nyb2xsRnVuY1kuY2FjaGVJRCA9IDA7XG4gIH0sXG4gICAgICBpZ25vcmVEcmFnID0gZnVuY3Rpb24gaWdub3JlRHJhZygpIHtcbiAgICBpZiAoc2tpcFRvdWNoTW92ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc3VtZVRvdWNoTW92ZSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSBfcm91bmQoc2VsZi5kZWx0YVkgLyAyKSxcbiAgICAgICAgICBzY3JvbGwgPSBzY3JvbGxDbGFtcFkoc2Nyb2xsRnVuY1kudiAtIG9mZnNldCk7XG5cbiAgICAgIGlmIChjb250ZW50ICYmIHNjcm9sbCAhPT0gc2Nyb2xsRnVuY1kudiArIHNjcm9sbEZ1bmNZLm9mZnNldCkge1xuICAgICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgPSBzY3JvbGwgLSBzY3JvbGxGdW5jWS52O1xuXG4gICAgICAgIHZhciB5ID0gX3JvdW5kKChwYXJzZUZsb2F0KGNvbnRlbnQgJiYgY29udGVudC5fZ3NhcC55KSB8fCAwKSAtIHNjcm9sbEZ1bmNZLm9mZnNldCk7XG5cbiAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgeSArIFwiLCAwLCAxKVwiO1xuICAgICAgICBjb250ZW50Ll9nc2FwLnkgPSB5ICsgXCJweFwiO1xuICAgICAgICBzY3JvbGxGdW5jWS5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcblxuICAgICAgICBfdXBkYXRlQWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNjcm9sbEZ1bmNZLm9mZnNldCAmJiByZW1vdmVDb250ZW50T2Zmc2V0KCk7XG4gICAgc2tpcFRvdWNoTW92ZSA9IHRydWU7XG4gIH0sXG4gICAgICB0d2VlbixcbiAgICAgIHN0YXJ0U2Nyb2xsWCxcbiAgICAgIHN0YXJ0U2Nyb2xsWSxcbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiB0aGUgd2luZG93IHJlc2l6ZXMsIGxpa2Ugb24gYW4gaVBob25lIHdoaWNoIEFwcGxlIEZPUkNFUyB0aGUgYWRkcmVzcyBiYXIgdG8gc2hvdy9oaWRlIGV2ZW4gaWYgd2UgZXZlbnQucHJldmVudERlZmF1bHQoKSwgaXQgbWF5IGJlIHNjcm9sbGluZyB0b28gZmFyIG5vdyB0aGF0IHRoZSBhZGRyZXNzIGJhciBpcyBzaG93aW5nLCBzbyB3ZSBtdXN0IGR5bmFtaWNhbGx5IGFkanVzdCB0aGUgbW9tZW50dW0gdHdlZW4uXG4gICAgdXBkYXRlQ2xhbXBzKCk7XG5cbiAgICBpZiAodHdlZW4uaXNBY3RpdmUoKSAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPiBtYXhZKSB7XG4gICAgICBzY3JvbGxGdW5jWSgpID4gbWF4WSA/IHR3ZWVuLnByb2dyZXNzKDEpICYmIHNjcm9sbEZ1bmNZKG1heFkpIDogdHdlZW4ucmVzZXRUbyhcInNjcm9sbFlcIiwgbWF4WSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRlbnQgJiYgZ3NhcC5zZXQoY29udGVudCwge1xuICAgIHk6IFwiKz0wXCJcbiAgfSk7IC8vIHRvIGVuc3VyZSB0aGVyZSdzIGEgY2FjaGUgKGVsZW1lbnQuX2dzYXApXG5cbiAgdmFycy5pZ25vcmVDaGVjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIF9maXhJT1NCdWcgJiYgZS50eXBlID09PSBcInRvdWNobW92ZVwiICYmIGlnbm9yZURyYWcoZSkgfHwgc2NhbGUgPiAxLjA1ICYmIGUudHlwZSAhPT0gXCJ0b3VjaHN0YXJ0XCIgfHwgc2VsZi5pc0dlc3R1cmluZyB8fCBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG5cbiAgdmFycy5vblByZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHNraXBUb3VjaE1vdmUgPSBmYWxzZTtcbiAgICB2YXIgcHJldlNjYWxlID0gc2NhbGU7XG4gICAgc2NhbGUgPSBfcm91bmQoKF93aW4udmlzdWFsVmlld3BvcnQgJiYgX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSB8fCAxKSAvIGluaXRpYWxTY2FsZSk7XG4gICAgdHdlZW4ucGF1c2UoKTtcbiAgICBwcmV2U2NhbGUgIT09IHNjYWxlICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBzY2FsZSA+IDEuMDEgPyB0cnVlIDogbm9ybWFsaXplU2Nyb2xsWCA/IGZhbHNlIDogXCJ4XCIpO1xuICAgIHN0YXJ0U2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCk7XG4gICAgc3RhcnRTY3JvbGxZID0gc2Nyb2xsRnVuY1koKTtcbiAgICB1cGRhdGVDbGFtcHMoKTtcbiAgICBsYXN0UmVmcmVzaElEID0gX3JlZnJlc2hJRDtcbiAgfTtcblxuICB2YXJzLm9uUmVsZWFzZSA9IHZhcnMub25HZXN0dXJlU3RhcnQgPSBmdW5jdGlvbiAoc2VsZiwgd2FzRHJhZ2dpbmcpIHtcbiAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuXG4gICAgaWYgKCF3YXNEcmFnZ2luZykge1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Njcm9sbGVycy5jYWNoZSsrOyAvLyBtYWtlIHN1cmUgd2UncmUgcHVsbGluZyB0aGUgbm9uLWNhY2hlZCB2YWx1ZVxuICAgICAgLy8gYWx0ZXJuYXRlIGFsZ29yaXRobTogZHVyWCA9IE1hdGgubWluKDYsIE1hdGguYWJzKHNlbGYudmVsb2NpdHlYIC8gODAwKSksXHRkdXIgPSBNYXRoLm1heChkdXJYLCBNYXRoLm1pbig2LCBNYXRoLmFicyhzZWxmLnZlbG9jaXR5WSAvIDgwMCkpKTsgZHVyID0gZHVyICogKDAuNCArICgxIC0gX3Bvd2VyNEluKGR1ciAvIDYpKSAqIDAuNikpICogKG1vbWVudHVtU3BlZWQgfHwgMSlcblxuICAgICAgdmFyIGR1ciA9IHJlc29sdmVNb21lbnR1bUR1cmF0aW9uKCksXG4gICAgICAgICAgY3VycmVudFNjcm9sbCxcbiAgICAgICAgICBlbmRTY3JvbGw7XG5cbiAgICAgIGlmIChub3JtYWxpemVTY3JvbGxYKSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBzY3JvbGxGdW5jWCgpO1xuICAgICAgICBlbmRTY3JvbGwgPSBjdXJyZW50U2Nyb2xsICsgZHVyICogMC4wNSAqIC1zZWxmLnZlbG9jaXR5WCAvIDAuMjI3OyAvLyB0aGUgY29uc3RhbnQgLjIyNyBpcyBmcm9tIHBvd2VyNCgwLjA1KS4gdmVsb2NpdHkgaXMgaW52ZXJ0ZWQgYmVjYXVzZSBzY3JvbGxpbmcgZ29lcyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuXG4gICAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1gsIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSk7XG4gICAgICAgIHR3ZWVuLnZhcnMuc2Nyb2xsWCA9IHNjcm9sbENsYW1wWChlbmRTY3JvbGwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsRnVuY1koKTtcbiAgICAgIGVuZFNjcm9sbCA9IGN1cnJlbnRTY3JvbGwgKyBkdXIgKiAwLjA1ICogLXNlbGYudmVsb2NpdHlZIC8gMC4yMjc7IC8vIHRoZSBjb25zdGFudCAuMjI3IGlzIGZyb20gcG93ZXI0KDAuMDUpXG5cbiAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1ksIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF92ZXJ0aWNhbCkpO1xuICAgICAgdHdlZW4udmFycy5zY3JvbGxZID0gc2Nyb2xsQ2xhbXBZKGVuZFNjcm9sbCk7XG4gICAgICB0d2Vlbi5pbnZhbGlkYXRlKCkuZHVyYXRpb24oZHVyKS5wbGF5KDAuMDEpO1xuXG4gICAgICBpZiAoX2ZpeElPU0J1ZyAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPj0gbWF4WSB8fCBjdXJyZW50U2Nyb2xsID49IG1heFkgLSAxKSB7XG4gICAgICAgIC8vIGlPUyBidWc6IGl0J2xsIHNob3cgdGhlIGFkZHJlc3MgYmFyIGJ1dCBOT1QgZmlyZSB0aGUgd2luZG93IFwicmVzaXplXCIgZXZlbnQgdW50aWwgdGhlIGFuaW1hdGlvbiBpcyBkb25lIGJ1dCB3ZSBtdXN0IHByb3RlY3QgYWdhaW5zdCBvdmVyc2hvb3Qgc28gd2UgbGV2ZXJhZ2UgYW4gb25VcGRhdGUgdG8gZG8gc28uXG4gICAgICAgIGdzYXAudG8oe30sIHtcbiAgICAgICAgICBvblVwZGF0ZTogb25SZXNpemUsXG4gICAgICAgICAgZHVyYXRpb246IGR1clxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbGVhc2UgJiYgb25SZWxlYXNlKHNlbGYpO1xuICB9O1xuXG4gIHZhcnMub25XaGVlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0d2Vlbi5fdHMgJiYgdHdlZW4ucGF1c2UoKTtcblxuICAgIGlmIChfZ2V0VGltZSgpIC0gd2hlZWxSZWZyZXNoID4gMTAwMCkge1xuICAgICAgLy8gYWZ0ZXIgMSBzZWNvbmQsIHJlZnJlc2ggdGhlIGNsYW1wcyBvdGhlcndpc2UgdGhhdCdsbCBvbmx5IGhhcHBlbiB3aGVuIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIGlzIGNhbGxlZCBvciBmb3IgdG91Y2gtc2Nyb2xsaW5nLlxuICAgICAgbGFzdFJlZnJlc2hJRCA9IDA7XG4gICAgICB3aGVlbFJlZnJlc2ggPSBfZ2V0VGltZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXJzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHNlbGYsIGR4LCBkeSwgeEFycmF5LCB5QXJyYXkpIHtcbiAgICBfcmVmcmVzaElEICE9PSBsYXN0UmVmcmVzaElEICYmIHVwZGF0ZUNsYW1wcygpO1xuICAgIGR4ICYmIG5vcm1hbGl6ZVNjcm9sbFggJiYgc2Nyb2xsRnVuY1goc2Nyb2xsQ2xhbXBYKHhBcnJheVsyXSA9PT0gZHggPyBzdGFydFNjcm9sbFggKyAoc2VsZi5zdGFydFggLSBzZWxmLngpIDogc2Nyb2xsRnVuY1goKSArIGR4IC0geEFycmF5WzFdKSk7IC8vIGZvciBtb3JlIHByZWNpc2lvbiwgd2UgdHJhY2sgcG9pbnRlci90b3VjaCBtb3ZlbWVudCBmcm9tIHRoZSBzdGFydCwgb3RoZXJ3aXNlIGl0J2xsIGRyaWZ0LlxuXG4gICAgaWYgKGR5KSB7XG4gICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuICAgICAgdmFyIGlzVG91Y2ggPSB5QXJyYXlbMl0gPT09IGR5LFxuICAgICAgICAgIHkgPSBpc1RvdWNoID8gc3RhcnRTY3JvbGxZICsgc2VsZi5zdGFydFkgLSBzZWxmLnkgOiBzY3JvbGxGdW5jWSgpICsgZHkgLSB5QXJyYXlbMV0sXG4gICAgICAgICAgeUNsYW1wZWQgPSBzY3JvbGxDbGFtcFkoeSk7XG4gICAgICBpc1RvdWNoICYmIHkgIT09IHlDbGFtcGVkICYmIChzdGFydFNjcm9sbFkgKz0geUNsYW1wZWQgLSB5KTtcbiAgICAgIHNjcm9sbEZ1bmNZKHlDbGFtcGVkKTtcbiAgICB9XG5cbiAgICAoZHkgfHwgZHgpICYmIF91cGRhdGVBbGwoKTtcbiAgfTtcblxuICB2YXJzLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBub3JtYWxpemVTY3JvbGxYID8gZmFsc2UgOiBcInhcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoXCIsIG9uUmVzaXplKTtcblxuICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cbiAgICBpZiAoc2Nyb2xsRnVuY1kuc21vb3RoKSB7XG4gICAgICBzY3JvbGxGdW5jWS50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIjtcbiAgICAgIHNjcm9sbEZ1bmNZLnNtb290aCA9IHNjcm9sbEZ1bmNYLnNtb290aCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlucHV0T2JzZXJ2ZXIuZW5hYmxlKCk7XG4gIH07XG5cbiAgdmFycy5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2FsbG93TmF0aXZlUGFubmluZyh0YXJnZXQsIHRydWUpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF93aW4sIFwicmVzaXplXCIsIG9uUmVzaXplKTtcblxuICAgIFNjcm9sbFRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hcIiwgb25SZXNpemUpO1xuICAgIGlucHV0T2JzZXJ2ZXIua2lsbCgpO1xuICB9O1xuXG4gIHZhcnMubG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzICE9PSBmYWxzZTtcbiAgc2VsZiA9IG5ldyBPYnNlcnZlcih2YXJzKTtcbiAgc2VsZi5pT1MgPSBfZml4SU9TQnVnOyAvLyB1c2VkIGluIHRoZSBPYnNlcnZlciBnZXRDYWNoZWRTY3JvbGwoKSBmdW5jdGlvbiB0byB3b3JrIGFyb3VuZCBhbiBpT1MgYnVnIHRoYXQgd3JlYWtzIGhhdm9jIHdpdGggVG91Y2hFdmVudC5jbGllbnRZIGlmIHdlIGFsbG93IHNjcm9sbCB0byBnbyBhbGwgdGhlIHdheSBiYWNrIHRvIDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiAhc2Nyb2xsRnVuY1koKSAmJiBzY3JvbGxGdW5jWSgxKTsgLy8gaU9TIGJ1ZyBjYXVzZXMgZXZlbnQuY2xpZW50WSB2YWx1ZXMgdG8gZnJlYWsgb3V0ICh3aWxkbHkgaW5hY2N1cmF0ZSkgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBleGFjdGx5IDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiBnc2FwLnRpY2tlci5hZGQoX3Bhc3NUaHJvdWdoKTsgLy8gcHJldmVudCB0aGUgdGlja2VyIGZyb20gc2xlZXBpbmdcblxuICBvblN0b3BEZWxheWVkQ2FsbCA9IHNlbGYuX2RjO1xuICB0d2VlbiA9IGdzYXAudG8oc2VsZiwge1xuICAgIGVhc2U6IFwicG93ZXI0XCIsXG4gICAgcGF1c2VkOiB0cnVlLFxuICAgIHNjcm9sbFg6IG5vcm1hbGl6ZVNjcm9sbFggPyBcIis9MC4xXCIgOiBcIis9MFwiLFxuICAgIHNjcm9sbFk6IFwiKz0wLjFcIixcbiAgICBtb2RpZmllcnM6IHtcbiAgICAgIHNjcm9sbFk6IF9pbnRlcnJ1cHRpb25UcmFja2VyKHNjcm9sbEZ1bmNZLCBzY3JvbGxGdW5jWSgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0d2Vlbi5wYXVzZSgpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIG9uVXBkYXRlOiBfdXBkYXRlQWxsLFxuICAgIG9uQ29tcGxldGU6IG9uU3RvcERlbGF5ZWRDYWxsLnZhcnMub25Db21wbGV0ZVxuICB9KTsgLy8gd2UgbmVlZCB0aGUgbW9kaWZpZXIgdG8gc2Vuc2UgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBhbHRlcmVkIG91dHNpZGUgb2YgdGhlIG1vbWVudHVtIHR3ZWVuIChsaWtlIHdpdGggYSBzY3JvbGxUbyB0d2Vlbikgc28gd2UgY2FuIHBhdXNlKCkgaXQgdG8gcHJldmVudCBjb25mbGljdHMuXG5cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnNvcnQgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gX3RyaWdnZXJzLnNvcnQoZnVuYyB8fCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAoYS52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYgKyBhLnN0YXJ0IC0gKGIuc3RhcnQgKyAoYi52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYpO1xuICB9KTtcbn07XG5cblNjcm9sbFRyaWdnZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIodmFycyk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLm5vcm1hbGl6ZVNjcm9sbCA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIGlmICh0eXBlb2YgdmFycyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBfbm9ybWFsaXplcjtcbiAgfVxuXG4gIGlmICh2YXJzID09PSB0cnVlICYmIF9ub3JtYWxpemVyKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyLmVuYWJsZSgpO1xuICB9XG5cbiAgaWYgKHZhcnMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVyID0gdmFycyBpbnN0YW5jZW9mIE9ic2VydmVyID8gdmFycyA6IF9nZXRTY3JvbGxOb3JtYWxpemVyKHZhcnMpO1xuICBfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci50YXJnZXQgPT09IG5vcm1hbGl6ZXIudGFyZ2V0ICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgX2lzVmlld3BvcnQobm9ybWFsaXplci50YXJnZXQpICYmIChfbm9ybWFsaXplciA9IG5vcm1hbGl6ZXIpO1xuICByZXR1cm4gbm9ybWFsaXplcjtcbn07XG5cblNjcm9sbFRyaWdnZXIuY29yZSA9IHtcbiAgLy8gc21hbGxlciBmaWxlIHNpemUgd2F5IHRvIGxldmVyYWdlIGluIFNjcm9sbFNtb290aGVyIGFuZCBPYnNlcnZlclxuICBfZ2V0VmVsb2NpdHlQcm9wOiBfZ2V0VmVsb2NpdHlQcm9wLFxuICBfaW5wdXRPYnNlcnZlcjogX2lucHV0T2JzZXJ2ZXIsXG4gIF9zY3JvbGxlcnM6IF9zY3JvbGxlcnMsXG4gIF9wcm94aWVzOiBfcHJveGllcyxcbiAgYnJpZGdlOiB7XG4gICAgLy8gd2hlbiBub3JtYWxpemVTY3JvbGwgc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIChzcyA9IHNldFNjcm9sbClcbiAgICBzczogZnVuY3Rpb24gc3MoKSB7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgfHwgX2Rpc3BhdGNoKFwic2Nyb2xsU3RhcnRcIik7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgPSBfZ2V0VGltZSgpO1xuICAgIH0sXG4gICAgLy8gYSB3YXkgdG8gZ2V0IHRoZSBfcmVmcmVzaGluZyB2YWx1ZSBpbiBPYnNlcnZlclxuICAgIHJlZjogZnVuY3Rpb24gcmVmKCkge1xuICAgICAgcmV0dXJuIF9yZWZyZXNoaW5nO1xuICAgIH1cbiAgfVxufTtcbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCB7IFNjcm9sbFRyaWdnZXIgYXMgZGVmYXVsdCB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5MDQ3MjAzOWFmYTdmMWY3ZDQ3XCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJmcm9tIiwic2NhbGUiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfY29yZUluaXR0ZWQiLCJfY2xhbXAiLCJfd2luIiwiX2RvYyIsIl9kb2NFbCIsIl9ib2R5IiwiX2lzVG91Y2giLCJfcG9pbnRlclR5cGUiLCJfcm9vdCIsIl9ub3JtYWxpemVyIiwiX2V2ZW50VHlwZXMiLCJfY29udGV4dCIsIl9nZXRHU0FQIiwiX3N0YXJ0dXAiLCJfb2JzZXJ2ZXJzIiwiX3Njcm9sbGVycyIsIl9wcm94aWVzIiwiX2dldFRpbWUiLCJEYXRlIiwibm93IiwiX2JyaWRnZSIsIm5hbWUiLCJ2YWx1ZSIsIl9pbnRlZ3JhdGUiLCJjb3JlIiwiZGF0YSIsImJyaWRnZSIsInNjcm9sbGVycyIsInByb3hpZXMiLCJwdXNoIiwiYXBwbHkiLCJfZ2V0UHJveHlQcm9wIiwicHJvcGVydHkiLCJpbmRleE9mIiwiX2lzVmlld3BvcnQiLCJlbCIsIl9hZGRMaXN0ZW5lciIsInR5cGUiLCJmdW5jIiwibm9uUGFzc2l2ZSIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIl9yZW1vdmVMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2Nyb2xsTGVmdCIsIl9zY3JvbGxUb3AiLCJfb25TY3JvbGwiLCJpc1ByZXNzZWQiLCJjYWNoZSIsIl9zY3JvbGxDYWNoZUZ1bmMiLCJmIiwiZG9Ob3RDYWNoZSIsImNhY2hpbmdGdW5jIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwiaXNOb3JtYWxpemluZyIsInYiLCJNYXRoIiwicm91bmQiLCJpT1MiLCJjYWNoZUlEIiwib2Zmc2V0IiwiX2hvcml6b250YWwiLCJzIiwicCIsInAyIiwib3MiLCJvczIiLCJkIiwiZDIiLCJhIiwic2MiLCJhcmd1bWVudHMiLCJzY3JvbGxUbyIsIl92ZXJ0aWNhbCIsInBhZ2VYT2Zmc2V0Iiwib3AiLCJwYWdlWU9mZnNldCIsIl9nZXRUYXJnZXQiLCJ0Iiwic2VsZiIsIl9jdHgiLCJzZWxlY3RvciIsInV0aWxzIiwidG9BcnJheSIsImNvbmZpZyIsIm51bGxUYXJnZXRXYXJuIiwid2FybiIsIl9nZXRTY3JvbGxGdW5jIiwiX3JlZiIsInNjcm9sbGluZ0VsZW1lbnQiLCJwcmV2Iiwic21vb3RoIiwiZ2V0UHJvcGVydHkiLCJfZ2V0VmVsb2NpdHlQcm9wIiwibWluVGltZVJlZnJlc2giLCJ1c2VEZWx0YSIsInYxIiwidjIiLCJ0MSIsInQyIiwibWluIiwiZHJvcFRvWmVyb1RpbWUiLCJtYXgiLCJ1cGRhdGUiLCJmb3JjZSIsInJlc2V0IiwiZ2V0VmVsb2NpdHkiLCJsYXRlc3RWYWx1ZSIsInRPbGQiLCJ2T2xkIiwiX2dldEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX2dzYXBBbGxvdyIsImNoYW5nZWRUb3VjaGVzIiwiX2dldEFic29sdXRlTWF4IiwiYWJzIiwiX3NldFNjcm9sbFRyaWdnZXIiLCJnbG9iYWxzIiwiX2luaXRDb3JlIiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhbXAiLCJjb250ZXh0IiwiT2JzZXJ2ZXIiLCJpc1RvdWNoIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1zTWF4VG91Y2hQb2ludHMiLCJldmVudFR5cGVzIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwidmFycyIsImluaXQiLCJfcHJvdG8iLCJ0b2xlcmFuY2UiLCJkcmFnTWluaW11bSIsImxpbmVIZWlnaHQiLCJkZWJvdW5jZSIsIm9uU3RvcCIsIm9uU3RvcERlbGF5IiwiaWdub3JlIiwid2hlZWxTcGVlZCIsImV2ZW50Iiwib25EcmFnU3RhcnQiLCJvbkRyYWdFbmQiLCJvbkRyYWciLCJvblByZXNzIiwib25SZWxlYXNlIiwib25SaWdodCIsIm9uTGVmdCIsIm9uVXAiLCJvbkRvd24iLCJvbkNoYW5nZVgiLCJvbkNoYW5nZVkiLCJvbkNoYW5nZSIsIm9uVG9nZ2xlWCIsIm9uVG9nZ2xlWSIsIm9uSG92ZXIiLCJvbkhvdmVyRW5kIiwib25Nb3ZlIiwiaWdub3JlQ2hlY2siLCJpc05vcm1hbGl6ZXIiLCJvbkdlc3R1cmVTdGFydCIsIm9uR2VzdHVyZUVuZCIsIm9uV2hlZWwiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uQ2xpY2siLCJzY3JvbGxTcGVlZCIsImFsbG93Q2xpY2tzIiwibG9ja0F4aXMiLCJvbkxvY2tBeGlzIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJpZCIsIm9uU3RvcERlbGF5ZWRDYWxsIiwiZHJhZ2dlZCIsIm1vdmVkIiwid2hlZWxlZCIsImxvY2tlZCIsImF4aXMiLCJwcmV2RGVsdGFYIiwicHJldkRlbHRhWSIsInNjcm9sbEZ1bmNYIiwic2Nyb2xsRnVuY1kiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImxpbWl0VG9Ub3VjaCIsImlzVmlld3BvcnQiLCJvd25lckRvYyIsIm93bmVyRG9jdW1lbnQiLCJkZWx0YVgiLCJkZWx0YVkiLCJvbkNsaWNrVGltZSIsImNsaWNrQ2FwdHVyZSIsIl9pZ25vcmVDaGVjayIsImlzUG9pbnRlck9yVG91Y2giLCJwb2ludGVyVHlwZSIsIm9uU3RvcEZ1bmMiLCJfdngiLCJfdnkiLCJwYXVzZSIsImR4IiwiZHkiLCJjaGFuZ2VkWCIsImNoYW5nZWRZIiwib25EZWx0YSIsIngiLCJ5IiwiaW5kZXgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvblRvdWNoT3JQb2ludGVyRGVsdGEiLCJfb25EcmFnIiwiY2xpZW50WCIsImNsaWVudFkiLCJpc0RyYWdnaW5nIiwic3RhcnRYIiwic3RhcnRZIiwiX29uUHJlc3MiLCJidXR0b24iLCJfb25SZWxlYXNlIiwiaXNUcmFja2luZ0RyYWciLCJpc05hTiIsIndhc0RyYWdnaW5nIiwiZXZlbnREYXRhIiwiZGVsYXllZENhbGwiLCJkZWZhdWx0UHJldmVudGVkIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsInN5bnRoZXRpY0V2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImRpc3BhdGNoRXZlbnQiLCJpc0dlc3R1cmluZyIsInJlc3RhcnQiLCJfb25HZXN0dXJlU3RhcnQiLCJ0b3VjaGVzIiwiX29uR2VzdHVyZUVuZCIsIm9uU2Nyb2xsIiwiX29uV2hlZWwiLCJtdWx0aXBsaWVyIiwiZGVsdGFNb2RlIiwiaW5uZXJIZWlnaHQiLCJfb25Nb3ZlIiwiX29uSG92ZXIiLCJfb25Ib3ZlckVuZCIsIl9vbkNsaWNrIiwiX2RjIiwiZW5hYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZSIsImZpbHRlciIsIm8iLCJraWxsIiwicmV2ZXJ0Iiwic3BsaWNlIiwiZ2V0IiwidmVyc2lvbiIsImNyZWF0ZSIsInJlZ2lzdGVyIiwiZ2V0QWxsIiwic2xpY2UiLCJnZXRCeUlkIiwiZGVmYXVsdCIsIl9yZXNpemVEZWxheSIsIl90b0FycmF5IiwiX3RpbWUyIiwiX3N5bmNJbnRlcnZhbCIsIl9yZWZyZXNoaW5nIiwiX3BvaW50ZXJJc0Rvd24iLCJfdHJhbnNmb3JtUHJvcCIsIl9pIiwiX3ByZXZXaWR0aCIsIl9wcmV2SGVpZ2h0IiwiX2F1dG9SZWZyZXNoIiwiX3NvcnQiLCJfc3VwcHJlc3NPdmVyd3JpdGVzIiwiX2lnbm9yZVJlc2l6ZSIsIl9pZ25vcmVNb2JpbGVSZXNpemUiLCJfYmFzZVNjcmVlbkhlaWdodCIsIl9iYXNlU2NyZWVuV2lkdGgiLCJfZml4SU9TQnVnIiwiX3Njcm9sbFJlc3RvcmF0aW9uIiwiX2RpdjEwMHZoIiwiXzEwMHZoIiwiX2xpbWl0Q2FsbGJhY2tzIiwiX3RpbWUxIiwiX2xhc3RTY3JvbGxUaW1lIiwiX2VuYWJsZWQiLCJfcGFyc2VDbGFtcCIsIl9pc1N0cmluZyIsInN1YnN0ciIsIl9rZWVwQ2xhbXAiLCJfcmFmQnVnRml4IiwiX3BvaW50ZXJEb3duSGFuZGxlciIsIl9wb2ludGVyVXBIYW5kbGVyIiwiX3Bhc3NUaHJvdWdoIiwiX3JvdW5kIiwiX3dpbmRvd0V4aXN0cyIsIl9nZXRWaWV3cG9ydERpbWVuc2lvbiIsImRpbWVuc2lvblByb3BlcnR5IiwiX2dldEJvdW5kc0Z1bmMiLCJfd2luT2Zmc2V0cyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsIl9nZXRCb3VuZHMiLCJfZ2V0U2l6ZUZ1bmMiLCJzY3JvbGxlciIsIl9nZXRPZmZzZXRzRnVuYyIsIl9tYXhTY3JvbGwiLCJfcmVmMiIsIl9pdGVyYXRlQXV0b1JlZnJlc2giLCJldmVudHMiLCJfaXNGdW5jdGlvbiIsIl9pc051bWJlciIsIl9pc09iamVjdCIsIl9lbmRBbmltYXRpb24iLCJhbmltYXRpb24iLCJyZXZlcnNlZCIsInByb2dyZXNzIiwiX2NhbGxiYWNrIiwiZW5hYmxlZCIsInJlc3VsdCIsInRvdGFsVGltZSIsImNhbGxiYWNrQW5pbWF0aW9uIiwiX2FicyIsIl9sZWZ0IiwiX3RvcCIsIl9yaWdodCIsIl9ib3R0b20iLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX1JpZ2h0IiwiX0xlZnQiLCJfVG9wIiwiX0JvdHRvbSIsIl9wYWRkaW5nIiwiX21hcmdpbiIsIl9XaWR0aCIsIl9IZWlnaHQiLCJfcHgiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIl9tYWtlUG9zaXRpb25hYmxlIiwicG9zaXRpb24iLCJzdHlsZSIsIl9zZXREZWZhdWx0cyIsIm9iaiIsImRlZmF1bHRzIiwid2l0aG91dFRyYW5zZm9ybXMiLCJ0d2VlbiIsInRvIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsInJvdGF0aW9uIiwicm90YXRpb25YIiwicm90YXRpb25ZIiwic2tld1giLCJza2V3WSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIl9nZXRTaXplIiwiX3JlZjMiLCJfZ2V0TGFiZWxSYXRpb0FycmF5IiwidGltZWxpbmUiLCJsYWJlbHMiLCJfZ2V0Q2xvc2VzdExhYmVsIiwic25hcCIsIl9zbmFwRGlyZWN0aW9uYWwiLCJzbmFwSW5jcmVtZW50T3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsInNvcnQiLCJiIiwiZGlyZWN0aW9uIiwidGhyZXNob2xkIiwic25hcHBlZCIsIl9nZXRMYWJlbEF0RGlyZWN0aW9uIiwic3QiLCJfbXVsdGlMaXN0ZW5lciIsInR5cGVzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiX3doZWVsTGlzdGVuZXIiLCJzY3JvbGxGdW5jIiwid2hlZWxIYW5kbGVyIiwiX21hcmtlckRlZmF1bHRzIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwiaW5kZW50IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiX2RlZmF1bHRzIiwidG9nZ2xlQWN0aW9ucyIsImFudGljaXBhdGVQaW4iLCJfa2V5d29yZHMiLCJ0b3AiLCJsZWZ0IiwiY2VudGVyIiwiYm90dG9tIiwicmlnaHQiLCJfb2Zmc2V0VG9QeCIsInNpemUiLCJlcUluZGV4IiwicmVsYXRpdmUiLCJjaGFyQXQiLCJfY3JlYXRlTWFya2VyIiwiY29udGFpbmVyIiwiX3JlZjQiLCJtYXRjaFdpZHRoRWwiLCJjb250YWluZXJBbmltYXRpb24iLCJjcmVhdGVFbGVtZW50IiwidXNlRml4ZWRQb3NpdGlvbiIsImlzU2Nyb2xsZXIiLCJwYXJlbnQiLCJpc1N0YXJ0IiwiY29sb3IiLCJjc3MiLCJvZmZzZXRXaWR0aCIsIl9pc1N0YXJ0Iiwic2V0QXR0cmlidXRlIiwiY3NzVGV4dCIsImlubmVyVGV4dCIsImNoaWxkcmVuIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJfb2Zmc2V0IiwiX3Bvc2l0aW9uTWFya2VyIiwibWFya2VyIiwic3RhcnQiLCJmbGlwcGVkIiwiZGlzcGxheSIsInNpZGUiLCJvcHBvc2l0ZVNpZGUiLCJfaXNGbGlwcGVkIiwic2V0IiwiX3RyaWdnZXJzIiwiX2lkcyIsIl9yYWZJRCIsIl9zeW5jIiwiX3VwZGF0ZUFsbCIsImNsaWVudFdpZHRoIiwiX2Rpc3BhdGNoIiwiX3NldEJhc2VEaW1lbnNpb25zIiwiX29uUmVzaXplIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIl9saXN0ZW5lcnMiLCJfZW1wdHlBcnJheSIsIl9zb2Z0UmVmcmVzaCIsIl9yZWZyZXNoQWxsIiwibWFwIiwiX3NhdmVkU3R5bGVzIiwiX3JldmVydFJlY29yZGVkIiwibWVkaWEiLCJxdWVyeSIsImdldEJCb3giLCJ1bmNhY2hlIiwiX3JldmVydEFsbCIsInRyaWdnZXIiLCJfY2xlYXJTY3JvbGxNZW1vcnkiLCJfcmVmcmVzaGluZ0FsbCIsInJlYyIsIl9yZWZyZXNoSUQiLCJfcXVldWVSZWZyZXNoSUQiLCJfcXVldWVSZWZyZXNoQWxsIiwiX3JlZnJlc2gxMDB2aCIsIm9mZnNldEhlaWdodCIsInJlbW92ZUNoaWxkIiwic2tpcFJldmVydCIsImlzUmVmcmVzaGluZyIsInJlZnJlc2hJbml0cyIsInNjcm9sbEJlaGF2aW9yIiwicmVmcmVzaCIsIl9zdWJQaW5PZmZzZXQiLCJwaW4iLCJwcm9wIiwiaG9yaXpvbnRhbCIsIm9yaWdpbmFsIiwiYWRqdXN0UGluU3BhY2luZyIsIl9kaXIiLCJlbmQiLCJfZW5kQ2xhbXAiLCJzZXRQb3NpdGlvbnMiLCJyZW5kZXIiLCJvblJlZnJlc2giLCJfbGFzdFNjcm9sbCIsIl9kaXJlY3Rpb24iLCJfcHJpbWFyeSIsImlzVXBkYXRpbmciLCJsIiwidGltZSIsInJlY29yZFZlbG9jaXR5Iiwic2Nyb2xsIiwiX3Byb3BOYW1lc1RvQ29weSIsIl9zdGF0ZVByb3BzIiwiY29uY2F0IiwiX3N3YXBQaW5PdXQiLCJzcGFjZXIiLCJzdGF0ZSIsIl9zZXRTdGF0ZSIsIl9nc2FwIiwic3BhY2VySXNOYXRpdmUiLCJzcGFjZXJTdGF0ZSIsInN3YXBwZWRJbiIsInBhcmVudE5vZGUiLCJfc3dhcFBpbkluIiwiY3MiLCJzcGFjZXJTdHlsZSIsInBpblN0eWxlIiwiZmxleEJhc2lzIiwib3ZlcmZsb3ciLCJib3hTaXppbmciLCJfY2Fwc0V4cCIsImdldENhY2hlIiwicmVtb3ZlUHJvcGVydHkiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJfZ2V0U3RhdGUiLCJfY29weVN0YXRlIiwib3ZlcnJpZGUiLCJvbWl0T2Zmc2V0cyIsIl9wYXJzZVBvc2l0aW9uIiwic2Nyb2xsZXJTaXplIiwibWFya2VyU2Nyb2xsZXIiLCJzY3JvbGxlckJvdW5kcyIsImJvcmRlcldpZHRoIiwic2Nyb2xsZXJNYXgiLCJjbGFtcFplcm9Qcm9wIiwicDEiLCJzZWVrIiwib2Zmc2V0cyIsImxvY2FsT2Zmc2V0IiwiZ2xvYmFsT2Zmc2V0IiwibWFwUmFuZ2UiLCJzY3JvbGxUcmlnZ2VyIiwibSIsIl9jYVNjcm9sbERpc3QiLCJfcHJlZml4RXhwIiwiX3JlcGFyZW50IiwiX3N0T3JpZyIsInRlc3QiLCJfaW50ZXJydXB0aW9uVHJhY2tlciIsImdldFZhbHVlRnVuYyIsImluaXRpYWxWYWx1ZSIsIm9uSW50ZXJydXB0IiwibGFzdDEiLCJsYXN0MiIsImN1cnJlbnQiLCJfc2hpZnRNYXJrZXIiLCJfZ2V0VHdlZW5DcmVhdG9yIiwiZ2V0U2Nyb2xsIiwiZ2V0VHdlZW4iLCJjaGFuZ2UxIiwiY2hhbmdlMiIsIm9uQ29tcGxldGUiLCJtb2RpZmllcnMiLCJjaGVja0ZvckludGVycnVwdGlvbiIsInJhdGlvIiwib25VcGRhdGUiLCJjYWxsIiwibm9kZVR5cGUiLCJfdmFycyIsInRvZ2dsZUNsYXNzIiwib25Ub2dnbGUiLCJzY3J1YiIsInBpblNwYWNpbmciLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwib25TY3J1YkNvbXBsZXRlIiwib25TbmFwQ29tcGxldGUiLCJvbmNlIiwicGluUmVwYXJlbnQiLCJwaW5TcGFjZXIiLCJmYXN0U2Nyb2xsRW5kIiwicHJldmVudE92ZXJsYXBzIiwiaXNUb2dnbGUiLCJzY3JvbGxlckNhY2hlIiwicGluVHlwZSIsImNhbGxiYWNrcyIsIm9uRW50ZXIiLCJvbkxlYXZlIiwib25FbnRlckJhY2siLCJvbkxlYXZlQmFjayIsIm1hcmtlcnMiLCJvblJlZnJlc2hJbml0IiwiZ2V0U2Nyb2xsZXJTaXplIiwiZ2V0U2Nyb2xsZXJPZmZzZXRzIiwibGFzdFNuYXAiLCJsYXN0UmVmcmVzaCIsInByZXZQcm9ncmVzcyIsInR3ZWVuVG8iLCJwaW5DYWNoZSIsInNuYXBGdW5jIiwic2Nyb2xsMSIsInNjcm9sbDIiLCJtYXJrZXJTdGFydCIsIm1hcmtlckVuZCIsIm1hcmtlclN0YXJ0VHJpZ2dlciIsIm1hcmtlckVuZFRyaWdnZXIiLCJtYXJrZXJWYXJzIiwiZXhlY3V0aW5nT25SZWZyZXNoIiwiY2hhbmdlIiwicGluT3JpZ2luYWxTdGF0ZSIsInBpbkFjdGl2ZVN0YXRlIiwicGluU3RhdGUiLCJwaW5HZXR0ZXIiLCJwaW5TZXR0ZXIiLCJwaW5TdGFydCIsInBpbkNoYW5nZSIsInNwYWNpbmdTdGFydCIsIm1hcmtlclN0YXJ0U2V0dGVyIiwicGluTW92ZXMiLCJtYXJrZXJFbmRTZXR0ZXIiLCJzbmFwMSIsInNuYXAyIiwic2NydWJUd2VlbiIsInNjcnViU21vb3RoIiwic25hcER1ckNsYW1wIiwic25hcERlbGF5ZWRDYWxsIiwicHJldlNjcm9sbCIsInByZXZBbmltUHJvZ3Jlc3MiLCJjYU1hcmtlclNldHRlciIsImN1c3RvbVJldmVydFJldHVybiIsIl9zdGFydENsYW1wIiwiYmluZCIsInJlZnJlc2hQcmlvcml0eSIsInR3ZWVuU2Nyb2xsIiwic2NydWJEdXJhdGlvbiIsInRvdGFsUHJvZ3Jlc3MiLCJwYXVzZWQiLCJsYXp5IiwiX2luaXR0ZWQiLCJpc1JldmVydGVkIiwiaW1tZWRpYXRlUmVuZGVyIiwic25hcFRvIiwiZGlyZWN0aW9uYWwiLCJyZWZyZXNoZWRSZWNlbnRseSIsInZlbG9jaXR5IiwibmF0dXJhbEVuZCIsImluZXJ0aWEiLCJlbmRWYWx1ZSIsImVuZFNjcm9sbCIsIl9zbmFwIiwib25TdGFydCIsIl9vbkludGVycnVwdCIsIl9vbkNvbXBsZXRlIiwiaXNBY3RpdmUiLCJzdFJldmVydCIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJuYXRpdmVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yY2UzRCIsInF1aWNrU2V0dGVyIiwiY29udGVudCIsIm9sZE9uVXBkYXRlIiwib2xkUGFyYW1zIiwib25VcGRhdGVQYXJhbXMiLCJldmVudENhbGxiYWNrIiwicHJldmlvdXMiLCJuZXh0IiwidGVtcCIsInIiLCJwcmV2UmVmcmVzaGluZyIsInNvZnQiLCJwaW5PZmZzZXQiLCJpbnZhbGlkYXRlIiwiaXNGaXJzdFJlZnJlc2giLCJvdGhlclBpbk9mZnNldCIsInBhcnNlZEVuZCIsInBhcnNlZEVuZFRyaWdnZXIiLCJlbmRUcmlnZ2VyIiwicGFyc2VkU3RhcnQiLCJwaW5uZWRDb250YWluZXIiLCJ0cmlnZ2VySW5kZXgiLCJpc1ZlcnRpY2FsIiwiY3VyVHJpZ2dlciIsImN1clBpbiIsIm9wcG9zaXRlU2Nyb2xsIiwiaW5pdHRlZCIsInJldmVydGVkUGlucyIsImZvcmNlZE92ZXJmbG93IiwibWFya2VyU3RhcnRPZmZzZXQiLCJtYXJrZXJFbmRPZmZzZXQiLCJ1bnNoaWZ0IiwiX3BpblB1c2giLCJub3JtYWxpemUiLCJ0b1VwcGVyQ2FzZSIsImNlaWwiLCJfcGluT2Zmc2V0IiwiZW5kQW5pbWF0aW9uIiwibGFiZWxUb1Njcm9sbCIsImxhYmVsIiwiZ2V0VHJhaWxpbmciLCJyZXZlcnNlIiwiZm9yY2VGYWtlIiwiY2xpcHBlZCIsIndhc0FjdGl2ZSIsInRvZ2dsZVN0YXRlIiwiYWN0aW9uIiwic3RhdGVDaGFuZ2VkIiwidG9nZ2xlZCIsImlzQXRNYXgiLCJpc1Rha2luZ0FjdGlvbiIsIl9kcCIsIl90aW1lIiwiX3N0YXJ0IiwicmVzZXRUbyIsIl90VGltZSIsIl90RHVyIiwibiIsIm5ld1N0YXJ0IiwibmV3RW5kIiwia2VlcENsYW1wIiwiX2NoYW5nZSIsImFtb3VudCIsImFsbG93QW5pbWF0aW9uIiwib25LaWxsIiwidXBkYXRlRnVuYyIsImNsZWFySW50ZXJ2YWwiLCJzdXBwcmVzc092ZXJ3cml0ZXMiLCJ1c2VyQWdlbnQiLCJtbSIsImJvZHlTdHlsZSIsImJvcmRlciIsImJvcmRlclRvcFN0eWxlIiwiQW5pbWF0aW9uUHJvdG8iLCJzZXRJbnRlcnZhbCIsImNoZWNrUHJlZml4IiwidyIsImgiLCJoaWRkZW4iLCJsaW1pdENhbGxiYWNrcyIsIm1zIiwic3luY0ludGVydmFsIiwiaWdub3JlTW9iaWxlUmVzaXplIiwiYXV0b1JlZnJlc2hFdmVudHMiLCJzY3JvbGxlclByb3h5IiwiY2xlYXJNYXRjaE1lZGlhIiwiaXNJblZpZXdwb3J0IiwicG9zaXRpb25JblZpZXdwb3J0IiwicmVmZXJlbmNlUG9pbnQiLCJraWxsQWxsIiwiYWxsb3dMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzYXZlU3R5bGVzIiwiZ2V0QXR0cmlidXRlIiwic2FmZSIsImNsZWFyU2Nyb2xsTWVtb3J5IiwibWF4U2Nyb2xsIiwiZ2V0U2Nyb2xsRnVuYyIsImlzU2Nyb2xsaW5nIiwic25hcERpcmVjdGlvbmFsIiwiYmF0Y2giLCJ2YXJzQ29weSIsImludGVydmFsIiwiYmF0Y2hNYXgiLCJwcm94eUNhbGxiYWNrIiwiZWxlbWVudHMiLCJ0cmlnZ2VycyIsIl9jbGFtcFNjcm9sbEFuZEdldER1cmF0aW9uTXVsdGlwbGllciIsIl9hbGxvd05hdGl2ZVBhbm5pbmciLCJ0b3VjaEFjdGlvbiIsIl9vdmVyZmxvdyIsImF1dG8iLCJfbmVzdGVkU2Nyb2xsIiwiX3JlZjUiLCJub2RlIiwiX2lzU2Nyb2xsVCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFdpZHRoIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiX2lzU2Nyb2xsIiwic3RvcFByb3BhZ2F0aW9uIiwiX2lucHV0T2JzZXJ2ZXIiLCJpbnB1dHMiLCJuZXN0ZWQiLCJfY2FwdHVyZUlucHV0cyIsIl9pbnB1dEV4cCIsIl9pbnB1dElzRm9jdXNlZCIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiX2dldFNjcm9sbE5vcm1hbGl6ZXIiLCJfdmFyczIiLCJub3JtYWxpemVTY3JvbGxYIiwibW9tZW50dW0iLCJhbGxvd05lc3RlZFNjcm9sbCIsIm1heFkiLCJzbW9vdGhlciIsIlNjcm9sbFNtb290aGVyIiwic21vb3RoZXJJbnN0YW5jZSIsImluaXRpYWxTY2FsZSIsInZpc3VhbFZpZXdwb3J0Iiwib3V0ZXJXaWR0aCIsIndoZWVsUmVmcmVzaCIsInJlc29sdmVNb21lbnR1bUR1cmF0aW9uIiwibGFzdFJlZnJlc2hJRCIsInNraXBUb3VjaE1vdmUiLCJpbnB1dE9ic2VydmVyIiwicmVzdW1lVG91Y2hNb3ZlIiwic2Nyb2xsQ2xhbXBYIiwic2Nyb2xsQ2xhbXBZIiwidXBkYXRlQ2xhbXBzIiwicmVtb3ZlQ29udGVudE9mZnNldCIsInRyYW5zZm9ybSIsImlnbm9yZURyYWciLCJzdGFydFNjcm9sbFgiLCJzdGFydFNjcm9sbFkiLCJvblJlc2l6ZSIsInByZXZTY2FsZSIsImR1ciIsImN1cnJlbnRTY3JvbGwiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJwbGF5IiwiX3RzIiwieEFycmF5IiwieUFycmF5IiwieUNsYW1wZWQiLCJ0aWNrZXIiLCJvYnNlcnZlIiwibm9ybWFsaXplU2Nyb2xsIiwibm9ybWFsaXplciIsInNzIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==