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
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
    console.log(element, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN");
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
/******/ 	__webpack_require__.h = () => ("a6def1b89e924f0faf19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNjIxN2Y1YTQ4ZmM2NTZmYTFjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRCxJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxFQUFFLFNBQVMsQ0FBQztFQUNqQztFQUVBTyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDN0I7RUFFQUYsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzlCO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxTQUFTRSxpQkFBaUJBLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0VBQUUsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUFFLElBQUlFLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxDQUFDLENBQUM7SUFBRUUsVUFBVSxDQUFDQyxVQUFVLEdBQUdELFVBQVUsQ0FBQ0MsVUFBVSxJQUFJ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QUFVO0FBQ25CLENBQUM7QUFFRGgyQixhQUFhLENBQUNvRCxJQUFJLEdBQUc7RUFDbkI7RUFDQXVFLGdCQUFnQixFQUFFQSwwREFBZ0I7RUFDbENxckIsY0FBYyxFQUFFQSxjQUFjO0VBQzlCcndCLFVBQVUsRUFBRUEsb0RBQVU7RUFDdEJDLFFBQVEsRUFBRUEsa0RBQVE7RUFDbEJVLE1BQU0sRUFBRTtJQUNOO0lBQ0EyeUIsRUFBRSxFQUFFLFNBQVNBLEVBQUVBLENBQUEsRUFBRztNQUNoQi9oQixlQUFlLElBQUk2SixTQUFTLENBQUMsYUFBYSxDQUFDO01BQzNDN0osZUFBZSxHQUFHclIsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNEO0lBQ0FxekIsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLENBQUEsRUFBRztNQUNsQixPQUFPbmpCLFdBQVc7SUFDcEI7RUFDRjtBQUNGLENBQUM7QUFDRHZRLFFBQVEsQ0FBQyxDQUFDLElBQUl6QyxJQUFJLENBQUNFLGNBQWMsQ0FBQ0QsYUFBYSxDQUFDOzs7Ozs7Ozs7VUM1aUZoRCIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9TY2FsZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2dzYXAvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9nc2FwL1Njcm9sbFRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiXG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuaW1hZ2VzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKV1cblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIFwiRUxFTUVOVFwiKVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgSU5cIilcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgT1VUXCIpXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBPYnNlcnZlciAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2NsYW1wLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWwsXG4gICAgX2JvZHksXG4gICAgX2lzVG91Y2gsXG4gICAgX3BvaW50ZXJUeXBlLFxuICAgIFNjcm9sbFRyaWdnZXIsXG4gICAgX3Jvb3QsXG4gICAgX25vcm1hbGl6ZXIsXG4gICAgX2V2ZW50VHlwZXMsXG4gICAgX2NvbnRleHQsXG4gICAgX2dldEdTQVAgPSBmdW5jdGlvbiBfZ2V0R1NBUCgpIHtcbiAgcmV0dXJuIGdzYXAgfHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoZ3NhcCA9IHdpbmRvdy5nc2FwKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luICYmIGdzYXA7XG59LFxuICAgIF9zdGFydHVwID0gMSxcbiAgICBfb2JzZXJ2ZXJzID0gW10sXG4gICAgX3Njcm9sbGVycyA9IFtdLFxuICAgIF9wcm94aWVzID0gW10sXG4gICAgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICBfYnJpZGdlID0gZnVuY3Rpb24gX2JyaWRnZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59LFxuICAgIF9pbnRlZ3JhdGUgPSBmdW5jdGlvbiBfaW50ZWdyYXRlKCkge1xuICB2YXIgY29yZSA9IFNjcm9sbFRyaWdnZXIuY29yZSxcbiAgICAgIGRhdGEgPSBjb3JlLmJyaWRnZSB8fCB7fSxcbiAgICAgIHNjcm9sbGVycyA9IGNvcmUuX3Njcm9sbGVycyxcbiAgICAgIHByb3hpZXMgPSBjb3JlLl9wcm94aWVzO1xuICBzY3JvbGxlcnMucHVzaC5hcHBseShzY3JvbGxlcnMsIF9zY3JvbGxlcnMpO1xuICBwcm94aWVzLnB1c2guYXBwbHkocHJveGllcywgX3Byb3hpZXMpO1xuICBfc2Nyb2xsZXJzID0gc2Nyb2xsZXJzO1xuICBfcHJveGllcyA9IHByb3hpZXM7XG5cbiAgX2JyaWRnZSA9IGZ1bmN0aW9uIF9icmlkZ2UobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZGF0YVtuYW1lXSh2YWx1ZSk7XG4gIH07XG59LFxuICAgIF9nZXRQcm94eVByb3AgPSBmdW5jdGlvbiBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHJldHVybiB+X3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSAmJiBfcHJveGllc1tfcHJveGllcy5pbmRleE9mKGVsZW1lbnQpICsgMV1bcHJvcGVydHldO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGVsKSB7XG4gIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGVsKTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF9zY3JvbGxMZWZ0ID0gXCJzY3JvbGxMZWZ0XCIsXG4gICAgX3Njcm9sbFRvcCA9IFwic2Nyb2xsVG9wXCIsXG4gICAgX29uU2Nyb2xsID0gZnVuY3Rpb24gX29uU2Nyb2xsKCkge1xuICByZXR1cm4gX25vcm1hbGl6ZXIgJiYgX25vcm1hbGl6ZXIuaXNQcmVzc2VkIHx8IF9zY3JvbGxlcnMuY2FjaGUrKztcbn0sXG4gICAgX3Njcm9sbENhY2hlRnVuYyA9IGZ1bmN0aW9uIF9zY3JvbGxDYWNoZUZ1bmMoZiwgZG9Ob3RDYWNoZSkge1xuICB2YXIgY2FjaGluZ0Z1bmMgPSBmdW5jdGlvbiBjYWNoaW5nRnVuYyh2YWx1ZSkge1xuICAgIC8vIHNpbmNlIHJlYWRpbmcgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0L3BhZ2VPZmZzZXRZL3BhZ2VPZmZzZXRYIGNhbiB0cmlnZ2VyIGEgbGF5b3V0LCB0aGlzIGZ1bmN0aW9uIGFsbG93cyB1cyB0byBjYWNoZSB0aGUgdmFsdWUgc28gaXQgb25seSBnZXRzIHJlYWQgZnJlc2ggYWZ0ZXIgYSBcInNjcm9sbFwiIGV2ZW50IGZpcmVzIChvciB3aGlsZSB3ZSdyZSByZWZyZXNoaW5nIGJlY2F1c2UgdGhhdCBjYW4gbGVuZ3RoZW4gdGhlIHBhZ2UgYW5kIGFsdGVyIHRoZSBzY3JvbGwgcG9zaXRpb24pLiB3aGVuIFwic29mdFwiIGlzIHRydWUsIHRoYXQgbWVhbnMgZG9uJ3QgYWN0dWFsbHkgc2V0IHRoZSBzY3JvbGwsIGJ1dCBjYWNoZSB0aGUgbmV3IHZhbHVlIGluc3RlYWQgKHVzZWZ1bCBpbiBTY3JvbGxTbW9vdGhlcilcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIF9zdGFydHVwICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiKTsgLy8gb3RoZXJ3aXNlIHRoZSBuZXcgcG9zaXRpb24gd2lsbCBnZXQgb3ZlcndyaXR0ZW4gYnkgdGhlIGJyb3dzZXIgb25sb2FkLlxuXG4gICAgICB2YXIgaXNOb3JtYWxpemluZyA9IF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmlzUHJlc3NlZDtcbiAgICAgIHZhbHVlID0gY2FjaGluZ0Z1bmMudiA9IE1hdGgucm91bmQodmFsdWUpIHx8IChfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci5pT1MgPyAxIDogMCk7IC8vVE9ETzogaU9TIEJ1ZzogaWYgeW91IGFsbG93IGl0IHRvIGdvIHRvIDAsIFNhZmFyaSBjYW4gc3RhcnQgdG8gcmVwb3J0IHN1cGVyIHN0cmFuZ2UgKHdpbGRseSBpbmFjY3VyYXRlKSB0b3VjaCBwb3NpdGlvbnMhXG5cbiAgICAgIGYodmFsdWUpO1xuICAgICAgY2FjaGluZ0Z1bmMuY2FjaGVJRCA9IF9zY3JvbGxlcnMuY2FjaGU7XG4gICAgICBpc05vcm1hbGl6aW5nICYmIF9icmlkZ2UoXCJzc1wiLCB2YWx1ZSk7IC8vIHNldCBzY3JvbGwgKG5vdGlmeSBTY3JvbGxUcmlnZ2VyIHNvIGl0IGNhbiBkaXNwYXRjaCBhIFwic2Nyb2xsU3RhcnRcIiBldmVudCBpZiBuZWNlc3NhcnlcbiAgICB9IGVsc2UgaWYgKGRvTm90Q2FjaGUgfHwgX3Njcm9sbGVycy5jYWNoZSAhPT0gY2FjaGluZ0Z1bmMuY2FjaGVJRCB8fCBfYnJpZGdlKFwicmVmXCIpKSB7XG4gICAgICBjYWNoaW5nRnVuYy5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcbiAgICAgIGNhY2hpbmdGdW5jLnYgPSBmKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hpbmdGdW5jLnYgKyBjYWNoaW5nRnVuYy5vZmZzZXQ7XG4gIH07XG5cbiAgY2FjaGluZ0Z1bmMub2Zmc2V0ID0gMDtcbiAgcmV0dXJuIGYgJiYgY2FjaGluZ0Z1bmM7XG59LFxuICAgIF9ob3Jpem9udGFsID0ge1xuICBzOiBfc2Nyb2xsTGVmdCxcbiAgcDogXCJsZWZ0XCIsXG4gIHAyOiBcIkxlZnRcIixcbiAgb3M6IFwicmlnaHRcIixcbiAgb3MyOiBcIlJpZ2h0XCIsXG4gIGQ6IFwid2lkdGhcIixcbiAgZDI6IFwiV2lkdGhcIixcbiAgYTogXCJ4XCIsXG4gIHNjOiBfc2Nyb2xsQ2FjaGVGdW5jKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyh2YWx1ZSwgX3ZlcnRpY2FsLnNjKCkpIDogX3dpbi5wYWdlWE9mZnNldCB8fCBfZG9jW19zY3JvbGxMZWZ0XSB8fCBfZG9jRWxbX3Njcm9sbExlZnRdIHx8IF9ib2R5W19zY3JvbGxMZWZ0XSB8fCAwO1xuICB9KVxufSxcbiAgICBfdmVydGljYWwgPSB7XG4gIHM6IF9zY3JvbGxUb3AsXG4gIHA6IFwidG9wXCIsXG4gIHAyOiBcIlRvcFwiLFxuICBvczogXCJib3R0b21cIixcbiAgb3MyOiBcIkJvdHRvbVwiLFxuICBkOiBcImhlaWdodFwiLFxuICBkMjogXCJIZWlnaHRcIixcbiAgYTogXCJ5XCIsXG4gIG9wOiBfaG9yaXpvbnRhbCxcbiAgc2M6IF9zY3JvbGxDYWNoZUZ1bmMoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKF9ob3Jpem9udGFsLnNjKCksIHZhbHVlKSA6IF93aW4ucGFnZVlPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsVG9wXSB8fCBfZG9jRWxbX3Njcm9sbFRvcF0gfHwgX2JvZHlbX3Njcm9sbFRvcF0gfHwgMDtcbiAgfSlcbn0sXG4gICAgX2dldFRhcmdldCA9IGZ1bmN0aW9uIF9nZXRUYXJnZXQodCwgc2VsZikge1xuICByZXR1cm4gKHNlbGYgJiYgc2VsZi5fY3R4ICYmIHNlbGYuX2N0eC5zZWxlY3RvciB8fCBnc2FwLnV0aWxzLnRvQXJyYXkpKHQpWzBdIHx8ICh0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIiAmJiBnc2FwLmNvbmZpZygpLm51bGxUYXJnZXRXYXJuICE9PSBmYWxzZSA/IGNvbnNvbGUud2FybihcIkVsZW1lbnQgbm90IGZvdW5kOlwiLCB0KSA6IG51bGwpO1xufSxcbiAgICBfZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxGdW5jKGVsZW1lbnQsIF9yZWYpIHtcbiAgdmFyIHMgPSBfcmVmLnMsXG4gICAgICBzYyA9IF9yZWYuc2M7XG4gIC8vIHdlIHN0b3JlIHRoZSBzY3JvbGxlciBmdW5jdGlvbnMgaW4gYW4gYWx0ZXJuYXRpbmcgc2VxdWVuY2VkIEFycmF5IGxpa2UgW2VsZW1lbnQsIHZlcnRpY2FsU2Nyb2xsRnVuYywgaG9yaXpvbnRhbFNjcm9sbEZ1bmMsIC4uLl0gc28gdGhhdCB3ZSBjYW4gbWluaW1pemUgbWVtb3J5LCBtYXhpbWl6ZSBwZXJmb3JtYW5jZSwgYW5kIHdlIGFsc28gcmVjb3JkIHRoZSBsYXN0IHBvc2l0aW9uIGFzIGEgXCIucmVjXCIgcHJvcGVydHkgaW4gb3JkZXIgdG8gcmV2ZXJ0IHRvIHRoYXQgYWZ0ZXIgcmVmcmVzaGluZyB0byBlbnN1cmUgdGhpbmdzIGRvbid0IHNoaWZ0IGFyb3VuZC5cbiAgX2lzVmlld3BvcnQoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsKTtcblxuICB2YXIgaSA9IF9zY3JvbGxlcnMuaW5kZXhPZihlbGVtZW50KSxcbiAgICAgIG9mZnNldCA9IHNjID09PSBfdmVydGljYWwuc2MgPyAxIDogMjtcblxuICAhfmkgJiYgKGkgPSBfc2Nyb2xsZXJzLnB1c2goZWxlbWVudCkgLSAxKTtcbiAgX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSB8fCBfYWRkTGlzdGVuZXIoZWxlbWVudCwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTsgLy8gY2xlYXIgdGhlIGNhY2hlIHdoZW4gYSBzY3JvbGwgb2NjdXJzXG5cbiAgdmFyIHByZXYgPSBfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdLFxuICAgICAgZnVuYyA9IHByZXYgfHwgKF9zY3JvbGxlcnNbaSArIG9mZnNldF0gPSBfc2Nyb2xsQ2FjaGVGdW5jKF9nZXRQcm94eVByb3AoZWxlbWVudCwgcyksIHRydWUpIHx8IChfaXNWaWV3cG9ydChlbGVtZW50KSA/IHNjIDogX3Njcm9sbENhY2hlRnVuYyhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGVsZW1lbnRbc10gPSB2YWx1ZSA6IGVsZW1lbnRbc107XG4gIH0pKSk7XG4gIGZ1bmMudGFyZ2V0ID0gZWxlbWVudDtcbiAgcHJldiB8fCAoZnVuYy5zbW9vdGggPSBnc2FwLmdldFByb3BlcnR5KGVsZW1lbnQsIFwic2Nyb2xsQmVoYXZpb3JcIikgPT09IFwic21vb3RoXCIpOyAvLyBvbmx5IHNldCBpdCB0aGUgZmlyc3QgdGltZSAoZG9uJ3QgcmVzZXQgZXZlcnkgdGltZSBhIHNjcm9sbEZ1bmMgaXMgcmVxdWVzdGVkIGJlY2F1c2UgcGVyaGFwcyBpdCBoYXBwZW5zIGR1cmluZyBhIHJlZnJlc2goKSB3aGVuIGl0J3MgZGlzYWJsZWQgaW4gU2Nyb2xsVHJpZ2dlci5cblxuICByZXR1cm4gZnVuYztcbn0sXG4gICAgX2dldFZlbG9jaXR5UHJvcCA9IGZ1bmN0aW9uIF9nZXRWZWxvY2l0eVByb3AodmFsdWUsIG1pblRpbWVSZWZyZXNoLCB1c2VEZWx0YSkge1xuICB2YXIgdjEgPSB2YWx1ZSxcbiAgICAgIHYyID0gdmFsdWUsXG4gICAgICB0MSA9IF9nZXRUaW1lKCksXG4gICAgICB0MiA9IHQxLFxuICAgICAgbWluID0gbWluVGltZVJlZnJlc2ggfHwgNTAsXG4gICAgICBkcm9wVG9aZXJvVGltZSA9IE1hdGgubWF4KDUwMCwgbWluICogMyksXG4gICAgICB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodmFsdWUsIGZvcmNlKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGltZSgpO1xuXG4gICAgaWYgKGZvcmNlIHx8IHQgLSB0MSA+IG1pbikge1xuICAgICAgdjIgPSB2MTtcbiAgICAgIHYxID0gdmFsdWU7XG4gICAgICB0MiA9IHQxO1xuICAgICAgdDEgPSB0O1xuICAgIH0gZWxzZSBpZiAodXNlRGVsdGEpIHtcbiAgICAgIHYxICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3QgdG90YWxseSBuZWNlc3NhcnksIGJ1dCBtYWtlcyBpdCBhIGJpdCBtb3JlIGFjY3VyYXRlIGJ5IGFkanVzdGluZyB0aGUgdjEgdmFsdWUgYWNjb3JkaW5nIHRvIHRoZSBuZXcgc2xvcGUuIFRoaXMgd2F5IHdlJ3JlIG5vdCBqdXN0IGlnbm9yaW5nIHRoZSBpbmNvbWluZyBkYXRhLiBSZW1vdmluZyBmb3Igbm93IGJlY2F1c2UgaXQgZG9lc24ndCBzZWVtIHRvIG1ha2UgbXVjaCBwcmFjdGljYWwgZGlmZmVyZW5jZSBhbmQgaXQncyBwcm9iYWJseSBub3Qgd29ydGggdGhlIGtiLlxuICAgICAgdjEgPSB2MiArICh2YWx1ZSAtIHYyKSAvICh0IC0gdDIpICogKHQxIC0gdDIpO1xuICAgIH1cbiAgfSxcbiAgICAgIHJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdjIgPSB2MSA9IHVzZURlbHRhID8gMCA6IHYxO1xuICAgIHQyID0gdDEgPSAwO1xuICB9LFxuICAgICAgZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eShsYXRlc3RWYWx1ZSkge1xuICAgIHZhciB0T2xkID0gdDIsXG4gICAgICAgIHZPbGQgPSB2MixcbiAgICAgICAgdCA9IF9nZXRUaW1lKCk7XG5cbiAgICAobGF0ZXN0VmFsdWUgfHwgbGF0ZXN0VmFsdWUgPT09IDApICYmIGxhdGVzdFZhbHVlICE9PSB2MSAmJiB1cGRhdGUobGF0ZXN0VmFsdWUpO1xuICAgIHJldHVybiB0MSA9PT0gdDIgfHwgdCAtIHQyID4gZHJvcFRvWmVyb1RpbWUgPyAwIDogKHYxICsgKHVzZURlbHRhID8gdk9sZCA6IC12T2xkKSkgLyAoKHVzZURlbHRhID8gdCA6IHQxKSAtIHRPbGQpICogMTAwMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHJlc2V0OiByZXNldCxcbiAgICBnZXRWZWxvY2l0eTogZ2V0VmVsb2NpdHlcbiAgfTtcbn0sXG4gICAgX2dldEV2ZW50ID0gZnVuY3Rpb24gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KSB7XG4gIHByZXZlbnREZWZhdWx0ICYmICFlLl9nc2FwQWxsb3cgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xufSxcbiAgICBfZ2V0QWJzb2x1dGVNYXggPSBmdW5jdGlvbiBfZ2V0QWJzb2x1dGVNYXgoYSkge1xuICB2YXIgbWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYSksXG4gICAgICBtaW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCBhKTtcbiAgcmV0dXJuIE1hdGguYWJzKG1heCkgPj0gTWF0aC5hYnMobWluKSA/IG1heCA6IG1pbjtcbn0sXG4gICAgX3NldFNjcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2V0U2Nyb2xsVHJpZ2dlcigpIHtcbiAgU2Nyb2xsVHJpZ2dlciA9IGdzYXAuY29yZS5nbG9iYWxzKCkuU2Nyb2xsVHJpZ2dlcjtcbiAgU2Nyb2xsVHJpZ2dlciAmJiBTY3JvbGxUcmlnZ2VyLmNvcmUgJiYgX2ludGVncmF0ZSgpO1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoY29yZSkge1xuICBnc2FwID0gY29yZSB8fCBfZ2V0R1NBUCgpO1xuXG4gIGlmIChnc2FwICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gZG9jdW1lbnQ7XG4gICAgX2RvY0VsID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX2JvZHkgPSBfZG9jLmJvZHk7XG4gICAgX3Jvb3QgPSBbX3dpbiwgX2RvYywgX2RvY0VsLCBfYm9keV07XG4gICAgX2NsYW1wID0gZ3NhcC51dGlscy5jbGFtcDtcblxuICAgIF9jb250ZXh0ID0gZ3NhcC5jb3JlLmNvbnRleHQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBfcG9pbnRlclR5cGUgPSBcIm9ucG9pbnRlcmVudGVyXCIgaW4gX2JvZHkgPyBcInBvaW50ZXJcIiA6IFwibW91c2VcIjsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICBfaXNUb3VjaCA9IE9ic2VydmVyLmlzVG91Y2ggPSBfd2luLm1hdGNoTWVkaWEgJiYgX3dpbi5tYXRjaE1lZGlhKFwiKGhvdmVyOiBub25lKSwgKHBvaW50ZXI6IGNvYXJzZSlcIikubWF0Y2hlcyA/IDEgOiBcIm9udG91Y2hzdGFydFwiIGluIF93aW4gfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDAgPyAyIDogMDtcbiAgICBfZXZlbnRUeXBlcyA9IE9ic2VydmVyLmV2ZW50VHlwZXMgPSAoXCJvbnRvdWNoc3RhcnRcIiBpbiBfZG9jRWwgPyBcInRvdWNoc3RhcnQsdG91Y2htb3ZlLHRvdWNoY2FuY2VsLHRvdWNoZW5kXCIgOiAhKFwib25wb2ludGVyZG93blwiIGluIF9kb2NFbCkgPyBcIm1vdXNlZG93bixtb3VzZW1vdmUsbW91c2V1cCxtb3VzZXVwXCIgOiBcInBvaW50ZXJkb3duLHBvaW50ZXJtb3ZlLHBvaW50ZXJjYW5jZWwscG9pbnRlcnVwXCIpLnNwbGl0KFwiLFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfc3RhcnR1cCA9IDA7XG4gICAgfSwgNTAwKTtcblxuICAgIF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG5cbiAgICBfY29yZUluaXR0ZWQgPSAxO1xuICB9XG5cbiAgcmV0dXJuIF9jb3JlSW5pdHRlZDtcbn07XG5cbl9ob3Jpem9udGFsLm9wID0gX3ZlcnRpY2FsO1xuX3Njcm9sbGVycy5jYWNoZSA9IDA7XG5leHBvcnQgdmFyIE9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2ZXIodmFycykge1xuICAgIHRoaXMuaW5pdCh2YXJzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KHZhcnMpIHtcbiAgICBfY29yZUluaXR0ZWQgfHwgX2luaXRDb3JlKGdzYXApIHx8IGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKE9ic2VydmVyKVwiKTtcbiAgICBTY3JvbGxUcmlnZ2VyIHx8IF9zZXRTY3JvbGxUcmlnZ2VyKCk7XG4gICAgdmFyIHRvbGVyYW5jZSA9IHZhcnMudG9sZXJhbmNlLFxuICAgICAgICBkcmFnTWluaW11bSA9IHZhcnMuZHJhZ01pbmltdW0sXG4gICAgICAgIHR5cGUgPSB2YXJzLnR5cGUsXG4gICAgICAgIHRhcmdldCA9IHZhcnMudGFyZ2V0LFxuICAgICAgICBsaW5lSGVpZ2h0ID0gdmFycy5saW5lSGVpZ2h0LFxuICAgICAgICBkZWJvdW5jZSA9IHZhcnMuZGVib3VuY2UsXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gdmFycy5wcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgb25TdG9wID0gdmFycy5vblN0b3AsXG4gICAgICAgIG9uU3RvcERlbGF5ID0gdmFycy5vblN0b3BEZWxheSxcbiAgICAgICAgaWdub3JlID0gdmFycy5pZ25vcmUsXG4gICAgICAgIHdoZWVsU3BlZWQgPSB2YXJzLndoZWVsU3BlZWQsXG4gICAgICAgIGV2ZW50ID0gdmFycy5ldmVudCxcbiAgICAgICAgb25EcmFnU3RhcnQgPSB2YXJzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWdFbmQgPSB2YXJzLm9uRHJhZ0VuZCxcbiAgICAgICAgb25EcmFnID0gdmFycy5vbkRyYWcsXG4gICAgICAgIG9uUHJlc3MgPSB2YXJzLm9uUHJlc3MsXG4gICAgICAgIG9uUmVsZWFzZSA9IHZhcnMub25SZWxlYXNlLFxuICAgICAgICBvblJpZ2h0ID0gdmFycy5vblJpZ2h0LFxuICAgICAgICBvbkxlZnQgPSB2YXJzLm9uTGVmdCxcbiAgICAgICAgb25VcCA9IHZhcnMub25VcCxcbiAgICAgICAgb25Eb3duID0gdmFycy5vbkRvd24sXG4gICAgICAgIG9uQ2hhbmdlWCA9IHZhcnMub25DaGFuZ2VYLFxuICAgICAgICBvbkNoYW5nZVkgPSB2YXJzLm9uQ2hhbmdlWSxcbiAgICAgICAgb25DaGFuZ2UgPSB2YXJzLm9uQ2hhbmdlLFxuICAgICAgICBvblRvZ2dsZVggPSB2YXJzLm9uVG9nZ2xlWCxcbiAgICAgICAgb25Ub2dnbGVZID0gdmFycy5vblRvZ2dsZVksXG4gICAgICAgIG9uSG92ZXIgPSB2YXJzLm9uSG92ZXIsXG4gICAgICAgIG9uSG92ZXJFbmQgPSB2YXJzLm9uSG92ZXJFbmQsXG4gICAgICAgIG9uTW92ZSA9IHZhcnMub25Nb3ZlLFxuICAgICAgICBpZ25vcmVDaGVjayA9IHZhcnMuaWdub3JlQ2hlY2ssXG4gICAgICAgIGlzTm9ybWFsaXplciA9IHZhcnMuaXNOb3JtYWxpemVyLFxuICAgICAgICBvbkdlc3R1cmVTdGFydCA9IHZhcnMub25HZXN0dXJlU3RhcnQsXG4gICAgICAgIG9uR2VzdHVyZUVuZCA9IHZhcnMub25HZXN0dXJlRW5kLFxuICAgICAgICBvbldoZWVsID0gdmFycy5vbldoZWVsLFxuICAgICAgICBvbkVuYWJsZSA9IHZhcnMub25FbmFibGUsXG4gICAgICAgIG9uRGlzYWJsZSA9IHZhcnMub25EaXNhYmxlLFxuICAgICAgICBvbkNsaWNrID0gdmFycy5vbkNsaWNrLFxuICAgICAgICBzY3JvbGxTcGVlZCA9IHZhcnMuc2Nyb2xsU3BlZWQsXG4gICAgICAgIGNhcHR1cmUgPSB2YXJzLmNhcHR1cmUsXG4gICAgICAgIGFsbG93Q2xpY2tzID0gdmFycy5hbGxvd0NsaWNrcyxcbiAgICAgICAgbG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzLFxuICAgICAgICBvbkxvY2tBeGlzID0gdmFycy5vbkxvY2tBeGlzO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ID0gX2dldFRhcmdldCh0YXJnZXQpIHx8IF9kb2NFbDtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIGlnbm9yZSAmJiAoaWdub3JlID0gZ3NhcC51dGlscy50b0FycmF5KGlnbm9yZSkpO1xuICAgIHRvbGVyYW5jZSA9IHRvbGVyYW5jZSB8fCAxZS05O1xuICAgIGRyYWdNaW5pbXVtID0gZHJhZ01pbmltdW0gfHwgMDtcbiAgICB3aGVlbFNwZWVkID0gd2hlZWxTcGVlZCB8fCAxO1xuICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgfHwgMTtcbiAgICB0eXBlID0gdHlwZSB8fCBcIndoZWVsLHRvdWNoLHBvaW50ZXJcIjtcbiAgICBkZWJvdW5jZSA9IGRlYm91bmNlICE9PSBmYWxzZTtcbiAgICBsaW5lSGVpZ2h0IHx8IChsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChfd2luLmdldENvbXB1dGVkU3R5bGUoX2JvZHkpLmxpbmVIZWlnaHQpIHx8IDIyKTsgLy8gbm90ZTogYnJvd3NlciBtYXkgcmVwb3J0IFwibm9ybWFsXCIsIHNvIGRlZmF1bHQgdG8gMjIuXG5cbiAgICB2YXIgaWQsXG4gICAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgICBkcmFnZ2VkLFxuICAgICAgICBtb3ZlZCxcbiAgICAgICAgd2hlZWxlZCxcbiAgICAgICAgbG9ja2VkLFxuICAgICAgICBheGlzLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgcHJldkRlbHRhWCA9IDAsXG4gICAgICAgIHByZXZEZWx0YVkgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jWCA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX2hvcml6b250YWwpLFxuICAgICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgICAgc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgIHNjcm9sbFkgPSBzY3JvbGxGdW5jWSgpLFxuICAgICAgICBsaW1pdFRvVG91Y2ggPSB+dHlwZS5pbmRleE9mKFwidG91Y2hcIikgJiYgIX50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpICYmIF9ldmVudFR5cGVzWzBdID09PSBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgIC8vIGZvciBkZXZpY2VzIHRoYXQgYWNjb21tb2RhdGUgbW91c2UgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMsIHdlIG5lZWQgdG8gZGlzdGluZ3Vpc2guXG4gICAgaXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHRhcmdldCksXG4gICAgICAgIG93bmVyRG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgX2RvYyxcbiAgICAgICAgZGVsdGFYID0gWzAsIDAsIDBdLFxuICAgICAgICAvLyB3aGVlbCwgc2Nyb2xsLCBwb2ludGVyL3RvdWNoXG4gICAgZGVsdGFZID0gWzAsIDAsIDBdLFxuICAgICAgICBvbkNsaWNrVGltZSA9IDAsXG4gICAgICAgIGNsaWNrQ2FwdHVyZSA9IGZ1bmN0aW9uIGNsaWNrQ2FwdHVyZSgpIHtcbiAgICAgIHJldHVybiBvbkNsaWNrVGltZSA9IF9nZXRUaW1lKCk7XG4gICAgfSxcbiAgICAgICAgX2lnbm9yZUNoZWNrID0gZnVuY3Rpb24gX2lnbm9yZUNoZWNrKGUsIGlzUG9pbnRlck9yVG91Y2gpIHtcbiAgICAgIHJldHVybiAoc2VsZi5ldmVudCA9IGUpICYmIGlnbm9yZSAmJiB+aWdub3JlLmluZGV4T2YoZS50YXJnZXQpIHx8IGlzUG9pbnRlck9yVG91Y2ggJiYgbGltaXRUb1RvdWNoICYmIGUucG9pbnRlclR5cGUgIT09IFwidG91Y2hcIiB8fCBpZ25vcmVDaGVjayAmJiBpZ25vcmVDaGVjayhlLCBpc1BvaW50ZXJPclRvdWNoKTtcbiAgICB9LFxuICAgICAgICBvblN0b3BGdW5jID0gZnVuY3Rpb24gb25TdG9wRnVuYygpIHtcbiAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBkeCA9IHNlbGYuZGVsdGFYID0gX2dldEFic29sdXRlTWF4KGRlbHRhWCksXG4gICAgICAgICAgZHkgPSBzZWxmLmRlbHRhWSA9IF9nZXRBYnNvbHV0ZU1heChkZWx0YVkpLFxuICAgICAgICAgIGNoYW5nZWRYID0gTWF0aC5hYnMoZHgpID49IHRvbGVyYW5jZSxcbiAgICAgICAgICBjaGFuZ2VkWSA9IE1hdGguYWJzKGR5KSA+PSB0b2xlcmFuY2U7XG5cbiAgICAgIG9uQ2hhbmdlICYmIChjaGFuZ2VkWCB8fCBjaGFuZ2VkWSkgJiYgb25DaGFuZ2Uoc2VsZiwgZHgsIGR5LCBkZWx0YVgsIGRlbHRhWSk7IC8vIGluIFNjcm9sbFRyaWdnZXIubm9ybWFsaXplU2Nyb2xsKCksIHdlIG5lZWQgdG8ga25vdyBpZiBpdCB3YXMgdG91Y2gvcG9pbnRlciBzbyB3ZSBuZWVkIGFjY2VzcyB0byB0aGUgZGVsdGFYL2RlbHRhWSBBcnJheXMgYmVmb3JlIHdlIGNsZWFyIHRoZW0gb3V0LlxuXG4gICAgICBpZiAoY2hhbmdlZFgpIHtcbiAgICAgICAgb25SaWdodCAmJiBzZWxmLmRlbHRhWCA+IDAgJiYgb25SaWdodChzZWxmKTtcbiAgICAgICAgb25MZWZ0ICYmIHNlbGYuZGVsdGFYIDwgMCAmJiBvbkxlZnQoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWCAmJiBvbkNoYW5nZVgoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWCAmJiBzZWxmLmRlbHRhWCA8IDAgIT09IHByZXZEZWx0YVggPCAwICYmIG9uVG9nZ2xlWChzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWCA9IHNlbGYuZGVsdGFYO1xuICAgICAgICBkZWx0YVhbMF0gPSBkZWx0YVhbMV0gPSBkZWx0YVhbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZFkpIHtcbiAgICAgICAgb25Eb3duICYmIHNlbGYuZGVsdGFZID4gMCAmJiBvbkRvd24oc2VsZik7XG4gICAgICAgIG9uVXAgJiYgc2VsZi5kZWx0YVkgPCAwICYmIG9uVXAoc2VsZik7XG4gICAgICAgIG9uQ2hhbmdlWSAmJiBvbkNoYW5nZVkoc2VsZik7XG4gICAgICAgIG9uVG9nZ2xlWSAmJiBzZWxmLmRlbHRhWSA8IDAgIT09IHByZXZEZWx0YVkgPCAwICYmIG9uVG9nZ2xlWShzZWxmKTtcbiAgICAgICAgcHJldkRlbHRhWSA9IHNlbGYuZGVsdGFZO1xuICAgICAgICBkZWx0YVlbMF0gPSBkZWx0YVlbMV0gPSBkZWx0YVlbMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobW92ZWQgfHwgZHJhZ2dlZCkge1xuICAgICAgICBvbk1vdmUgJiYgb25Nb3ZlKHNlbGYpO1xuXG4gICAgICAgIGlmIChkcmFnZ2VkKSB7XG4gICAgICAgICAgb25EcmFnKHNlbGYpO1xuICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxvY2tlZCAmJiAhKGxvY2tlZCA9IGZhbHNlKSAmJiBvbkxvY2tBeGlzICYmIG9uTG9ja0F4aXMoc2VsZik7XG5cbiAgICAgIGlmICh3aGVlbGVkKSB7XG4gICAgICAgIG9uV2hlZWwoc2VsZik7XG4gICAgICAgIHdoZWVsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWQgPSAwO1xuICAgIH0sXG4gICAgICAgIG9uRGVsdGEgPSBmdW5jdGlvbiBvbkRlbHRhKHgsIHksIGluZGV4KSB7XG4gICAgICBkZWx0YVhbaW5kZXhdICs9IHg7XG4gICAgICBkZWx0YVlbaW5kZXhdICs9IHk7XG5cbiAgICAgIHNlbGYuX3Z4LnVwZGF0ZSh4KTtcblxuICAgICAgc2VsZi5fdnkudXBkYXRlKHkpO1xuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YSA9IGZ1bmN0aW9uIG9uVG91Y2hPclBvaW50ZXJEZWx0YSh4LCB5KSB7XG4gICAgICBpZiAobG9ja0F4aXMgJiYgIWF4aXMpIHtcbiAgICAgICAgc2VsZi5heGlzID0gYXhpcyA9IE1hdGguYWJzKHgpID4gTWF0aC5hYnMoeSkgPyBcInhcIiA6IFwieVwiO1xuICAgICAgICBsb2NrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ5XCIpIHtcbiAgICAgICAgZGVsdGFYWzJdICs9IHg7XG5cbiAgICAgICAgc2VsZi5fdngudXBkYXRlKHgsIHRydWUpOyAvLyB1cGRhdGUgdGhlIHZlbG9jaXR5IGFzIGZyZXF1ZW50bHkgYXMgcG9zc2libGUgaW5zdGVhZCBvZiBpbiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHNvIHRoYXQgdmVyeSBxdWljayB0b3VjaC1zY3JvbGxzIChmbGlja3MpIGZlZWwgbmF0dXJhbC4gSWYgaXQncyB0aGUgbW91c2UvdG91Y2gvcG9pbnRlciwgZm9yY2UgaXQgc28gdGhhdCB3ZSBnZXQgc25hcHB5L2FjY3VyYXRlIG1vbWVudHVtIHNjcm9sbC5cblxuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyAhPT0gXCJ4XCIpIHtcbiAgICAgICAgZGVsdGFZWzJdICs9IHk7XG5cbiAgICAgICAgc2VsZi5fdnkudXBkYXRlKHksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBkZWJvdW5jZSA/IGlkIHx8IChpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpKSA6IHVwZGF0ZSgpO1xuICAgIH0sXG4gICAgICAgIF9vbkRyYWcgPSBmdW5jdGlvbiBfb25EcmFnKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIHZhciB4ID0gZS5jbGllbnRYLFxuICAgICAgICAgIHkgPSBlLmNsaWVudFksXG4gICAgICAgICAgZHggPSB4IC0gc2VsZi54LFxuICAgICAgICAgIGR5ID0geSAtIHNlbGYueSxcbiAgICAgICAgICBpc0RyYWdnaW5nID0gc2VsZi5pc0RyYWdnaW5nO1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nIHx8IE1hdGguYWJzKHNlbGYuc3RhcnRYIC0geCkgPj0gZHJhZ01pbmltdW0gfHwgTWF0aC5hYnMoc2VsZi5zdGFydFkgLSB5KSA+PSBkcmFnTWluaW11bSkge1xuICAgICAgICBvbkRyYWcgJiYgKGRyYWdnZWQgPSB0cnVlKTtcbiAgICAgICAgaXNEcmFnZ2luZyB8fCAoc2VsZi5pc0RyYWdnaW5nID0gdHJ1ZSk7XG4gICAgICAgIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgICAgICBpc0RyYWdnaW5nIHx8IG9uRHJhZ1N0YXJ0ICYmIG9uRHJhZ1N0YXJ0KHNlbGYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIF9vblByZXNzID0gc2VsZi5vblByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkgfHwgZSAmJiBlLmJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuYXhpcyA9IGF4aXMgPSBudWxsO1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucGF1c2UoKTtcbiAgICAgIHNlbGYuaXNQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGUgPSBfZ2V0RXZlbnQoZSk7IC8vIG5vdGU6IG1heSBuZWVkIHRvIHByZXZlbnREZWZhdWx0KD8pIFdvbid0IHNpZGUtc2Nyb2xsIG9uIGlPUyBTYWZhcmkgaWYgd2UgZG8sIHRob3VnaC5cblxuICAgICAgcHJldkRlbHRhWCA9IHByZXZEZWx0YVkgPSAwO1xuICAgICAgc2VsZi5zdGFydFggPSBzZWxmLnggPSBlLmNsaWVudFg7XG4gICAgICBzZWxmLnN0YXJ0WSA9IHNlbGYueSA9IGUuY2xpZW50WTtcblxuICAgICAgc2VsZi5fdngucmVzZXQoKTsgLy8gb3RoZXJ3aXNlIHRoZSB0MiBtYXkgYmUgc3RhbGUgaWYgdGhlIHVzZXIgdG91Y2hlcyBhbmQgZmxpY2tzIHN1cGVyIGZhc3QgYW5kIHJlbGVhc2VzIGluIGxlc3MgdGhhbiAyIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aWNrcywgY2F1c2luZyB2ZWxvY2l0eSB0byBiZSAwLlxuXG5cbiAgICAgIHNlbGYuX3Z5LnJlc2V0KCk7XG5cbiAgICAgIF9hZGRMaXN0ZW5lcihpc05vcm1hbGl6ZXIgPyB0YXJnZXQgOiBvd25lckRvYywgX2V2ZW50VHlwZXNbMV0sIF9vbkRyYWcsIHByZXZlbnREZWZhdWx0LCB0cnVlKTtcblxuICAgICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgICBvblByZXNzICYmIG9uUHJlc3Moc2VsZik7XG4gICAgfSxcbiAgICAgICAgX29uUmVsZWFzZSA9IHNlbGYub25SZWxlYXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSwgMSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNOb3JtYWxpemVyID8gdGFyZ2V0IDogb3duZXJEb2MsIF9ldmVudFR5cGVzWzFdLCBfb25EcmFnLCB0cnVlKTtcblxuICAgICAgdmFyIGlzVHJhY2tpbmdEcmFnID0gIWlzTmFOKHNlbGYueSAtIHNlbGYuc3RhcnRZKSxcbiAgICAgICAgICB3YXNEcmFnZ2luZyA9IHNlbGYuaXNEcmFnZ2luZyAmJiAoTWF0aC5hYnMoc2VsZi54IC0gc2VsZi5zdGFydFgpID4gMyB8fCBNYXRoLmFicyhzZWxmLnkgLSBzZWxmLnN0YXJ0WSkgPiAzKSxcbiAgICAgICAgICAvLyBzb21lIHRvdWNoIGRldmljZXMgbmVlZCBzb21lIHdpZ2dsZSByb29tIGluIHRlcm1zIG9mIHNlbnNpbmcgY2xpY2tzIC0gdGhlIGZpbmdlciBtYXkgbW92ZSBhIGZldyBwaXhlbHMuXG4gICAgICBldmVudERhdGEgPSBfZ2V0RXZlbnQoZSk7XG5cbiAgICAgIGlmICghd2FzRHJhZ2dpbmcgJiYgaXNUcmFja2luZ0RyYWcpIHtcbiAgICAgICAgc2VsZi5fdngucmVzZXQoKTtcblxuICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCAmJiBhbGxvd0NsaWNrcykge1xuICAgICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC4wOCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB3b24ndCB0cnVzdCBzY3JpcHQtZ2VuZXJhdGVkIGNsaWNrcywgc28gaWYgdGhlIHVzZXIgdHJpZXMgdG8gY2xpY2sgb24gYSB2aWRlbyB0byBwbGF5IGl0LCBmb3IgZXhhbXBsZSwgaXQgc2ltcGx5IHdvbid0IHdvcmsuIFNpbmNlIGEgcmVndWxhciBcImNsaWNrXCIgZXZlbnQgd2lsbCBtb3N0IGxpa2VseSBiZSBnZW5lcmF0ZWQgYW55d2F5IChvbmUgdGhhdCBoYXMgaXRzIGlzVHJ1c3RlZCBmbGFnIHNldCB0byB0cnVlKSwgd2UgbXVzdCBzbGlnaHRseSBkZWxheSBvdXIgc2NyaXB0LWdlbmVyYXRlZCBjbGljayBzbyB0aGF0IHRoZSBcInJlYWxcIi90cnVzdGVkIG9uZSBpcyBwcmlvcml0aXplZC4gUmVtZW1iZXIsIHdoZW4gdGhlcmUgYXJlIGR1cGxpY2F0ZSBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbiwgd2Ugc3VwcHJlc3MgYWxsIGJ1dCB0aGUgZmlyc3Qgb25lLiBTb21lIGJyb3dzZXJzIGRvbid0IGV2ZW4gdHJpZ2dlciB0aGUgXCJyZWFsXCIgb25lIGF0IGFsbCwgc28gb3VyIHN5bnRoZXRpYyBvbmUgaXMgYSBzYWZldHkgdmFsdmUgdGhhdCBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIHdoYXQsIGEgY2xpY2sgZXZlbnQgZG9lcyBnZXQgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgIGlmIChfZ2V0VGltZSgpIC0gb25DbGlja1RpbWUgPiAzMDAgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xpY2spIHtcbiAgICAgICAgICAgICAgICAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgbW9iaWxlIFNhZmFyaSkgZG9uJ3QgcHJvcGVybHkgdHJpZ2dlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG93bmVyRG9jLmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bnRoZXRpY0V2ZW50ID0gb3duZXJEb2MuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBzeW50aGV0aWNFdmVudC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUsIF93aW4sIDEsIGV2ZW50RGF0YS5zY3JlZW5YLCBldmVudERhdGEuc2NyZWVuWSwgZXZlbnREYXRhLmNsaWVudFgsIGV2ZW50RGF0YS5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChzeW50aGV0aWNFdmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmlzRHJhZ2dpbmcgPSBzZWxmLmlzR2VzdHVyaW5nID0gc2VsZi5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgIG9uU3RvcCAmJiAhaXNOb3JtYWxpemVyICYmIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICBvbkRyYWdFbmQgJiYgd2FzRHJhZ2dpbmcgJiYgb25EcmFnRW5kKHNlbGYpO1xuICAgICAgb25SZWxlYXNlICYmIG9uUmVsZWFzZShzZWxmLCB3YXNEcmFnZ2luZyk7XG4gICAgfSxcbiAgICAgICAgX29uR2VzdHVyZVN0YXJ0ID0gZnVuY3Rpb24gX29uR2VzdHVyZVN0YXJ0KGUpIHtcbiAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEgJiYgKHNlbGYuaXNHZXN0dXJpbmcgPSB0cnVlKSAmJiBvbkdlc3R1cmVTdGFydChlLCBzZWxmLmlzRHJhZ2dpbmcpO1xuICAgIH0sXG4gICAgICAgIF9vbkdlc3R1cmVFbmQgPSBmdW5jdGlvbiBfb25HZXN0dXJlRW5kKCkge1xuICAgICAgcmV0dXJuIChzZWxmLmlzR2VzdHVyaW5nID0gZmFsc2UpIHx8IG9uR2VzdHVyZUVuZChzZWxmKTtcbiAgICB9LFxuICAgICAgICBvblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgeCA9IHNjcm9sbEZ1bmNYKCksXG4gICAgICAgICAgeSA9IHNjcm9sbEZ1bmNZKCk7XG4gICAgICBvbkRlbHRhKCh4IC0gc2Nyb2xsWCkgKiBzY3JvbGxTcGVlZCwgKHkgLSBzY3JvbGxZKSAqIHNjcm9sbFNwZWVkLCAxKTtcbiAgICAgIHNjcm9sbFggPSB4O1xuICAgICAgc2Nyb2xsWSA9IHk7XG4gICAgICBvblN0b3AgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25XaGVlbCA9IGZ1bmN0aW9uIF9vbldoZWVsKGUpIHtcbiAgICAgIGlmIChfaWdub3JlQ2hlY2soZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlID0gX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgIG9uV2hlZWwgJiYgKHdoZWVsZWQgPSB0cnVlKTtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gKGUuZGVsdGFNb2RlID09PSAxID8gbGluZUhlaWdodCA6IGUuZGVsdGFNb2RlID09PSAyID8gX3dpbi5pbm5lckhlaWdodCA6IDEpICogd2hlZWxTcGVlZDtcbiAgICAgIG9uRGVsdGEoZS5kZWx0YVggKiBtdWx0aXBsaWVyLCBlLmRlbHRhWSAqIG11bHRpcGxpZXIsIDApO1xuICAgICAgb25TdG9wICYmICFpc05vcm1hbGl6ZXIgJiYgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9LFxuICAgICAgICBfb25Nb3ZlID0gZnVuY3Rpb24gX29uTW92ZShlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHggPSBlLmNsaWVudFgsXG4gICAgICAgICAgeSA9IGUuY2xpZW50WSxcbiAgICAgICAgICBkeCA9IHggLSBzZWxmLngsXG4gICAgICAgICAgZHkgPSB5IC0gc2VsZi55O1xuICAgICAgc2VsZi54ID0geDtcbiAgICAgIHNlbGYueSA9IHk7XG4gICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAoZHggfHwgZHkpICYmIG9uVG91Y2hPclBvaW50ZXJEZWx0YShkeCwgZHkpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyID0gZnVuY3Rpb24gX29uSG92ZXIoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkhvdmVyRW5kID0gZnVuY3Rpb24gX29uSG92ZXJFbmQoZSkge1xuICAgICAgc2VsZi5ldmVudCA9IGU7XG4gICAgICBvbkhvdmVyRW5kKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vbkNsaWNrID0gZnVuY3Rpb24gX29uQ2xpY2soZSkge1xuICAgICAgcmV0dXJuIF9pZ25vcmVDaGVjayhlKSB8fCBfZ2V0RXZlbnQoZSwgcHJldmVudERlZmF1bHQpICYmIG9uQ2xpY2soc2VsZik7XG4gICAgfTtcblxuICAgIG9uU3RvcERlbGF5ZWRDYWxsID0gc2VsZi5fZGMgPSBnc2FwLmRlbGF5ZWRDYWxsKG9uU3RvcERlbGF5IHx8IDAuMjUsIG9uU3RvcEZ1bmMpLnBhdXNlKCk7XG4gICAgc2VsZi5kZWx0YVggPSBzZWxmLmRlbHRhWSA9IDA7XG4gICAgc2VsZi5fdnggPSBfZ2V0VmVsb2NpdHlQcm9wKDAsIDUwLCB0cnVlKTtcbiAgICBzZWxmLl92eSA9IF9nZXRWZWxvY2l0eVByb3AoMCwgNTAsIHRydWUpO1xuICAgIHNlbGYuc2Nyb2xsWCA9IHNjcm9sbEZ1bmNYO1xuICAgIHNlbGYuc2Nyb2xsWSA9IHNjcm9sbEZ1bmNZO1xuICAgIHNlbGYuaXNEcmFnZ2luZyA9IHNlbGYuaXNHZXN0dXJpbmcgPSBzZWxmLmlzUHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgX2NvbnRleHQodGhpcyk7XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXNlbGYuaXNFbmFibGVkKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihpc1ZpZXdwb3J0ID8gb3duZXJEb2MgOiB0YXJnZXQsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICAgICAgdHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpID49IDAgJiYgX2FkZExpc3RlbmVyKGlzVmlld3BvcnQgPyBvd25lckRvYyA6IHRhcmdldCwgXCJzY3JvbGxcIiwgb25TY3JvbGwsIHByZXZlbnREZWZhdWx0LCBjYXB0dXJlKTtcbiAgICAgICAgdHlwZS5pbmRleE9mKFwid2hlZWxcIikgPj0gMCAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBcIndoZWVsXCIsIF9vbldoZWVsLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZihcInRvdWNoXCIpID49IDAgJiYgX2lzVG91Y2ggfHwgdHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA+PSAwKSB7XG4gICAgICAgICAgX2FkZExpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICAgIF9hZGRMaXN0ZW5lcihvd25lckRvYywgX2V2ZW50VHlwZXNbM10sIF9vblJlbGVhc2UpO1xuXG4gICAgICAgICAgYWxsb3dDbGlja3MgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBjbGlja0NhcHR1cmUsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBvbkNsaWNrICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIFwiY2xpY2tcIiwgX29uQ2xpY2spO1xuICAgICAgICAgIG9uR2VzdHVyZVN0YXJ0ICYmIF9hZGRMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlc3RhcnRcIiwgX29uR2VzdHVyZVN0YXJ0KTtcbiAgICAgICAgICBvbkdlc3R1cmVFbmQgJiYgX2FkZExpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVlbmRcIiwgX29uR2VzdHVyZUVuZCk7XG4gICAgICAgICAgb25Ib3ZlciAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImVudGVyXCIsIF9vbkhvdmVyKTtcbiAgICAgICAgICBvbkhvdmVyRW5kICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuICAgICAgICAgIG9uTW92ZSAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcIm1vdmVcIiwgX29uTW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGUgJiYgZS50eXBlICYmIF9vblByZXNzKGUpO1xuICAgICAgICBvbkVuYWJsZSAmJiBvbkVuYWJsZShzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmlzRW5hYmxlZCkge1xuICAgICAgICAvLyBvbmx5IHJlbW92ZSB0aGUgX29uU2Nyb2xsIGxpc3RlbmVyIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3RoZXJzIHRoYXQgcmVseSBvbiB0aGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgX29ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICByZXR1cm4gbyAhPT0gc2VsZiAmJiBfaXNWaWV3cG9ydChvLnRhcmdldCk7XG4gICAgICAgIH0pLmxlbmd0aCB8fCBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgICAgIGlmIChzZWxmLmlzUHJlc3NlZCkge1xuICAgICAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGlzTm9ybWFsaXplciA/IHRhcmdldCA6IG93bmVyRG9jLCBfZXZlbnRUeXBlc1sxXSwgX29uRHJhZywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBvblNjcm9sbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJ3aGVlbFwiLCBfb25XaGVlbCwgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgX2V2ZW50VHlwZXNbMF0sIF9vblByZXNzLCBjYXB0dXJlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzJdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzNdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBcImNsaWNrXCIsIGNsaWNrQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBfb25DbGljayk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBcImdlc3R1cmVzdGFydFwiLCBfb25HZXN0dXJlU3RhcnQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlZW5kXCIsIF9vbkdlc3R1cmVFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwiZW50ZXJcIiwgX29uSG92ZXIpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibGVhdmVcIiwgX29uSG92ZXJFbmQpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9wb2ludGVyVHlwZSArIFwibW92ZVwiLCBfb25Nb3ZlKTtcblxuICAgICAgICBzZWxmLmlzRW5hYmxlZCA9IHNlbGYuaXNQcmVzc2VkID0gc2VsZi5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIG9uRGlzYWJsZSAmJiBvbkRpc2FibGUoc2VsZik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYua2lsbCA9IHNlbGYucmV2ZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5kaXNhYmxlKCk7XG5cbiAgICAgIHZhciBpID0gX29ic2VydmVycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX29ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICBfbm9ybWFsaXplciA9PT0gc2VsZiAmJiAoX25vcm1hbGl6ZXIgPSAwKTtcbiAgICB9O1xuXG4gICAgX29ic2VydmVycy5wdXNoKHNlbGYpO1xuXG4gICAgaXNOb3JtYWxpemVyICYmIF9pc1ZpZXdwb3J0KHRhcmdldCkgJiYgKF9ub3JtYWxpemVyID0gc2VsZik7XG4gICAgc2VsZi5lbmFibGUoZXZlbnQpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZlciwgW3tcbiAgICBrZXk6IFwidmVsb2NpdHlYXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnguZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmVsb2NpdHlZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdnkuZ2V0VmVsb2NpdHkoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2ZXI7XG59KCk7XG5PYnNlcnZlci52ZXJzaW9uID0gXCIzLjEyLjJcIjtcblxuT2JzZXJ2ZXIuY3JlYXRlID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcih2YXJzKTtcbn07XG5cbk9ic2VydmVyLnJlZ2lzdGVyID0gX2luaXRDb3JlO1xuXG5PYnNlcnZlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLnNsaWNlKCk7XG59O1xuXG5PYnNlcnZlci5nZXRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBfb2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLnZhcnMuaWQgPT09IGlkO1xuICB9KVswXTtcbn07XG5cbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihPYnNlcnZlcik7XG5leHBvcnQgeyBPYnNlcnZlciBhcyBkZWZhdWx0LCBfaXNWaWV3cG9ydCwgX3Njcm9sbGVycywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9wcm94aWVzLCBfZ2V0VmVsb2NpdHlQcm9wLCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfZ2V0VGFyZ2V0IH07IiwiLyohXG4gKiBTY3JvbGxUcmlnZ2VyIDMuMTIuMlxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IE9ic2VydmVyLCBfZ2V0VGFyZ2V0LCBfdmVydGljYWwsIF9ob3Jpem9udGFsLCBfc2Nyb2xsZXJzLCBfcHJveGllcywgX2dldFNjcm9sbEZ1bmMsIF9nZXRQcm94eVByb3AsIF9nZXRWZWxvY2l0eVByb3AgfSBmcm9tIFwiLi9PYnNlcnZlci5qc1wiO1xuXG52YXIgZ3NhcCxcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbCxcbiAgICBfYm9keSxcbiAgICBfcm9vdCxcbiAgICBfcmVzaXplRGVsYXksXG4gICAgX3RvQXJyYXksXG4gICAgX2NsYW1wLFxuICAgIF90aW1lMixcbiAgICBfc3luY0ludGVydmFsLFxuICAgIF9yZWZyZXNoaW5nLFxuICAgIF9wb2ludGVySXNEb3duLFxuICAgIF90cmFuc2Zvcm1Qcm9wLFxuICAgIF9pLFxuICAgIF9wcmV2V2lkdGgsXG4gICAgX3ByZXZIZWlnaHQsXG4gICAgX2F1dG9SZWZyZXNoLFxuICAgIF9zb3J0LFxuICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgX2lnbm9yZVJlc2l6ZSxcbiAgICBfbm9ybWFsaXplcixcbiAgICBfaWdub3JlTW9iaWxlUmVzaXplLFxuICAgIF9iYXNlU2NyZWVuSGVpZ2h0LFxuICAgIF9iYXNlU2NyZWVuV2lkdGgsXG4gICAgX2ZpeElPU0J1ZyxcbiAgICBfY29udGV4dCxcbiAgICBfc2Nyb2xsUmVzdG9yYXRpb24sXG4gICAgX2RpdjEwMHZoLFxuICAgIF8xMDB2aCxcbiAgICBfbGltaXRDYWxsYmFja3MsXG4gICAgLy8gaWYgdHJ1ZSwgd2UnbGwgb25seSB0cmlnZ2VyIGNhbGxiYWNrcyBpZiB0aGUgYWN0aXZlIHN0YXRlIHRvZ2dsZXMsIHNvIGlmIHlvdSBzY3JvbGwgaW1tZWRpYXRlbHkgcGFzdCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucyBvZiBhIFNjcm9sbFRyaWdnZXIgKHRodXMgaW5hY3RpdmUgdG8gaW5hY3RpdmUpLCBuZWl0aGVyIGl0cyBvbkVudGVyIG5vciBvbkxlYXZlIHdpbGwgYmUgY2FsbGVkLiBUaGlzIGlzIHVzZWZ1bCBkdXJpbmcgc3RhcnR1cC5cbl9zdGFydHVwID0gMSxcbiAgICBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgIF90aW1lMSA9IF9nZXRUaW1lKCksXG4gICAgX2xhc3RTY3JvbGxUaW1lID0gMCxcbiAgICBfZW5hYmxlZCA9IDAsXG4gICAgX3BhcnNlQ2xhbXAgPSBmdW5jdGlvbiBfcGFyc2VDbGFtcCh2YWx1ZSwgdHlwZSwgc2VsZikge1xuICB2YXIgY2xhbXAgPSBfaXNTdHJpbmcodmFsdWUpICYmICh2YWx1ZS5zdWJzdHIoMCwgNikgPT09IFwiY2xhbXAoXCIgfHwgdmFsdWUuaW5kZXhPZihcIm1heFwiKSA+IC0xKTtcbiAgc2VsZltcIl9cIiArIHR5cGUgKyBcIkNsYW1wXCJdID0gY2xhbXA7XG4gIHJldHVybiBjbGFtcCA/IHZhbHVlLnN1YnN0cig2LCB2YWx1ZS5sZW5ndGggLSA3KSA6IHZhbHVlO1xufSxcbiAgICBfa2VlcENsYW1wID0gZnVuY3Rpb24gX2tlZXBDbGFtcCh2YWx1ZSwgY2xhbXApIHtcbiAgcmV0dXJuIGNsYW1wICYmICghX2lzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5zdWJzdHIoMCwgNikgIT09IFwiY2xhbXAoXCIpID8gXCJjbGFtcChcIiArIHZhbHVlICsgXCIpXCIgOiB2YWx1ZTtcbn0sXG4gICAgX3JhZkJ1Z0ZpeCA9IGZ1bmN0aW9uIF9yYWZCdWdGaXgoKSB7XG4gIHJldHVybiBfZW5hYmxlZCAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3JhZkJ1Z0ZpeCk7XG59LFxuICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCksIHNjcmVlbiByZXBhaW50cyB3ZXJlbid0IGNvbnNpc3RlbnQgdW5sZXNzIHdlIGhhZCBTT01FVEhJTkcgcXVldWVkIHVwIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpISBTbyB0aGlzIGp1c3QgY3JlYXRlcyBhIHN1cGVyIHNpbXBsZSBsb29wIHRvIGtlZXAgaXQgYWxpdmUgYW5kIHNtb290aCBvdXQgcmVwYWludHMuXG5fcG9pbnRlckRvd25IYW5kbGVyID0gZnVuY3Rpb24gX3BvaW50ZXJEb3duSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMTtcbn0sXG4gICAgX3BvaW50ZXJVcEhhbmRsZXIgPSBmdW5jdGlvbiBfcG9pbnRlclVwSGFuZGxlcigpIHtcbiAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMDtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHYpIHtcbiAgcmV0dXJuIHY7XG59LFxuICAgIF9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCBfd2luZG93RXhpc3RzKCkgJiYgKGdzYXAgPSB3aW5kb3cuZ3NhcCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbiAmJiBnc2FwO1xufSxcbiAgICBfaXNWaWV3cG9ydCA9IGZ1bmN0aW9uIF9pc1ZpZXdwb3J0KGUpIHtcbiAgcmV0dXJuICEhfl9yb290LmluZGV4T2YoZSk7XG59LFxuICAgIF9nZXRWaWV3cG9ydERpbWVuc2lvbiA9IGZ1bmN0aW9uIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkaW1lbnNpb25Qcm9wZXJ0eSkge1xuICByZXR1cm4gKGRpbWVuc2lvblByb3BlcnR5ID09PSBcIkhlaWdodFwiID8gXzEwMHZoIDogX3dpbltcImlubmVyXCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV0pIHx8IF9kb2NFbFtcImNsaWVudFwiICsgZGltZW5zaW9uUHJvcGVydHldIHx8IF9ib2R5W1wiY2xpZW50XCIgKyBkaW1lbnNpb25Qcm9wZXJ0eV07XG59LFxuICAgIF9nZXRCb3VuZHNGdW5jID0gZnVuY3Rpb24gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkge1xuICByZXR1cm4gX2dldFByb3h5UHJvcChlbGVtZW50LCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiKSB8fCAoX2lzVmlld3BvcnQoZWxlbWVudCkgPyBmdW5jdGlvbiAoKSB7XG4gICAgX3dpbk9mZnNldHMud2lkdGggPSBfd2luLmlubmVyV2lkdGg7XG4gICAgX3dpbk9mZnNldHMuaGVpZ2h0ID0gXzEwMHZoO1xuICAgIHJldHVybiBfd2luT2Zmc2V0cztcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgfSk7XG59LFxuICAgIF9nZXRTaXplRnVuYyA9IGZ1bmN0aW9uIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgX3JlZikge1xuICB2YXIgZCA9IF9yZWYuZCxcbiAgICAgIGQyID0gX3JlZi5kMixcbiAgICAgIGEgPSBfcmVmLmE7XG4gIHJldHVybiAoYSA9IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYSgpW2RdO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoaXNWaWV3cG9ydCA/IF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBzY3JvbGxlcltcImNsaWVudFwiICsgZDJdKSB8fCAwO1xuICB9O1xufSxcbiAgICBfZ2V0T2Zmc2V0c0Z1bmMgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0c0Z1bmMoZWxlbWVudCwgaXNWaWV3cG9ydCkge1xuICByZXR1cm4gIWlzVmlld3BvcnQgfHwgfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgPyBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3dpbk9mZnNldHM7XG4gIH07XG59LFxuICAgIF9tYXhTY3JvbGwgPSBmdW5jdGlvbiBfbWF4U2Nyb2xsKGVsZW1lbnQsIF9yZWYyKSB7XG4gIHZhciBzID0gX3JlZjIucyxcbiAgICAgIGQyID0gX3JlZjIuZDIsXG4gICAgICBkID0gX3JlZjIuZCxcbiAgICAgIGEgPSBfcmVmMi5hO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgKHMgPSBcInNjcm9sbFwiICsgZDIpICYmIChhID0gX2dldFByb3h5UHJvcChlbGVtZW50LCBzKSkgPyBhKCkgLSBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSgpW2RdIDogX2lzVmlld3BvcnQoZWxlbWVudCkgPyAoX2RvY0VsW3NdIHx8IF9ib2R5W3NdKSAtIF9nZXRWaWV3cG9ydERpbWVuc2lvbihkMikgOiBlbGVtZW50W3NdIC0gZWxlbWVudFtcIm9mZnNldFwiICsgZDJdKTtcbn0sXG4gICAgX2l0ZXJhdGVBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uIF9pdGVyYXRlQXV0b1JlZnJlc2goZnVuYywgZXZlbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX2F1dG9SZWZyZXNoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgKCFldmVudHMgfHwgfmV2ZW50cy5pbmRleE9mKF9hdXRvUmVmcmVzaFtpICsgMV0pKSAmJiBmdW5jKF9hdXRvUmVmcmVzaFtpXSwgX2F1dG9SZWZyZXNoW2kgKyAxXSwgX2F1dG9SZWZyZXNoW2kgKyAyXSk7XG4gIH1cbn0sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9lbmRBbmltYXRpb24gPSBmdW5jdGlvbiBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgcmV2ZXJzZWQsIHBhdXNlKSB7XG4gIHJldHVybiBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKHJldmVyc2VkID8gMCA6IDEpICYmIHBhdXNlICYmIGFuaW1hdGlvbi5wYXVzZSgpO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soc2VsZiwgZnVuYykge1xuICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMoc2VsZik7XG4gICAgcmVzdWx0ICYmIHJlc3VsdC50b3RhbFRpbWUgJiYgKHNlbGYuY2FsbGJhY2tBbmltYXRpb24gPSByZXN1bHQpO1xuICB9XG59LFxuICAgIF9hYnMgPSBNYXRoLmFicyxcbiAgICBfbGVmdCA9IFwibGVmdFwiLFxuICAgIF90b3AgPSBcInRvcFwiLFxuICAgIF9yaWdodCA9IFwicmlnaHRcIixcbiAgICBfYm90dG9tID0gXCJib3R0b21cIixcbiAgICBfd2lkdGggPSBcIndpZHRoXCIsXG4gICAgX2hlaWdodCA9IFwiaGVpZ2h0XCIsXG4gICAgX1JpZ2h0ID0gXCJSaWdodFwiLFxuICAgIF9MZWZ0ID0gXCJMZWZ0XCIsXG4gICAgX1RvcCA9IFwiVG9wXCIsXG4gICAgX0JvdHRvbSA9IFwiQm90dG9tXCIsXG4gICAgX3BhZGRpbmcgPSBcInBhZGRpbmdcIixcbiAgICBfbWFyZ2luID0gXCJtYXJnaW5cIixcbiAgICBfV2lkdGggPSBcIldpZHRoXCIsXG4gICAgX0hlaWdodCA9IFwiSGVpZ2h0XCIsXG4gICAgX3B4ID0gXCJweFwiLFxuICAgIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gX3dpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSxcbiAgICBfbWFrZVBvc2l0aW9uYWJsZSA9IGZ1bmN0aW9uIF9tYWtlUG9zaXRpb25hYmxlKGVsZW1lbnQpIHtcbiAgLy8gaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBoYXMgcG9zaXRpb246IGFic29sdXRlIG9yIGZpeGVkLCBsZWF2ZSB0aGF0LCBvdGhlcndpc2UgbWFrZSBpdCBwb3NpdGlvbjogcmVsYXRpdmVcbiAgdmFyIHBvc2l0aW9uID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb247XG5cbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiA/IHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9nZXRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzKGVsZW1lbnQsIHdpdGhvdXRUcmFuc2Zvcm1zKSB7XG4gIHZhciB0d2VlbiA9IHdpdGhvdXRUcmFuc2Zvcm1zICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW190cmFuc2Zvcm1Qcm9wXSAhPT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiAmJiBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeFBlcmNlbnQ6IDAsXG4gICAgeVBlcmNlbnQ6IDAsXG4gICAgcm90YXRpb246IDAsXG4gICAgcm90YXRpb25YOiAwLFxuICAgIHJvdGF0aW9uWTogMCxcbiAgICBzY2FsZTogMSxcbiAgICBza2V3WDogMCxcbiAgICBza2V3WTogMFxuICB9KS5wcm9ncmVzcygxKSxcbiAgICAgIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHR3ZWVuICYmIHR3ZWVuLnByb2dyZXNzKDApLmtpbGwoKTtcbiAgcmV0dXJuIGJvdW5kcztcbn0sXG4gICAgX2dldFNpemUgPSBmdW5jdGlvbiBfZ2V0U2l6ZShlbGVtZW50LCBfcmVmMykge1xuICB2YXIgZDIgPSBfcmVmMy5kMjtcbiAgcmV0dXJuIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSB8fCBlbGVtZW50W1wiY2xpZW50XCIgKyBkMl0gfHwgMDtcbn0sXG4gICAgX2dldExhYmVsUmF0aW9BcnJheSA9IGZ1bmN0aW9uIF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpIHtcbiAgdmFyIGEgPSBbXSxcbiAgICAgIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIGR1cmF0aW9uID0gdGltZWxpbmUuZHVyYXRpb24oKSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGEucHVzaChsYWJlbHNbcF0gLyBkdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gYTtcbn0sXG4gICAgX2dldENsb3Nlc3RMYWJlbCA9IGZ1bmN0aW9uIF9nZXRDbG9zZXN0TGFiZWwoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZ3NhcC51dGlscy5zbmFwKF9nZXRMYWJlbFJhdGlvQXJyYXkoYW5pbWF0aW9uKSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICBfc25hcERpcmVjdGlvbmFsID0gZnVuY3Rpb24gX3NuYXBEaXJlY3Rpb25hbChzbmFwSW5jcmVtZW50T3JBcnJheSkge1xuICB2YXIgc25hcCA9IGdzYXAudXRpbHMuc25hcChzbmFwSW5jcmVtZW50T3JBcnJheSksXG4gICAgICBhID0gQXJyYXkuaXNBcnJheShzbmFwSW5jcmVtZW50T3JBcnJheSkgJiYgc25hcEluY3JlbWVudE9yQXJyYXkuc2xpY2UoMCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG4gIHJldHVybiBhID8gZnVuY3Rpb24gKHZhbHVlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCkge1xuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMWUtMztcbiAgICB9XG5cbiAgICB2YXIgaTtcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gc25hcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHZhbHVlIC09IHRocmVzaG9sZDsgLy8gdG8gYXZvaWQgcm91bmRpbmcgZXJyb3JzLiBJZiB3ZSdyZSB0b28gc3RyaWN0LCBpdCBtaWdodCBzbmFwIGZvcndhcmQsIHRoZW4gaW1tZWRpYXRlbHkgYWdhaW4sIGFuZCBhZ2Fpbi5cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPj0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYVtpIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgPSBhLmxlbmd0aDtcbiAgICAgIHZhbHVlICs9IHRocmVzaG9sZDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAoYVtpXSA8PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBhW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFbMF07XG4gIH0gOiBmdW5jdGlvbiAodmFsdWUsIGRpcmVjdGlvbiwgdGhyZXNob2xkKSB7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxZS0zO1xuICAgIH1cblxuICAgIHZhciBzbmFwcGVkID0gc25hcCh2YWx1ZSk7XG4gICAgcmV0dXJuICFkaXJlY3Rpb24gfHwgTWF0aC5hYnMoc25hcHBlZCAtIHZhbHVlKSA8IHRocmVzaG9sZCB8fCBzbmFwcGVkIC0gdmFsdWUgPCAwID09PSBkaXJlY3Rpb24gPCAwID8gc25hcHBlZCA6IHNuYXAoZGlyZWN0aW9uIDwgMCA/IHZhbHVlIC0gc25hcEluY3JlbWVudE9yQXJyYXkgOiB2YWx1ZSArIHNuYXBJbmNyZW1lbnRPckFycmF5KTtcbiAgfTtcbn0sXG4gICAgX2dldExhYmVsQXREaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxBdERpcmVjdGlvbih0aW1lbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgIHJldHVybiBfc25hcERpcmVjdGlvbmFsKF9nZXRMYWJlbFJhdGlvQXJyYXkodGltZWxpbmUpKSh2YWx1ZSwgc3QuZGlyZWN0aW9uKTtcbiAgfTtcbn0sXG4gICAgX211bHRpTGlzdGVuZXIgPSBmdW5jdGlvbiBfbXVsdGlMaXN0ZW5lcihmdW5jLCBlbGVtZW50LCB0eXBlcywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHR5cGVzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmMoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2spO1xuICB9KTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIG5vblBhc3NpdmUsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogIW5vblBhc3NpdmUsXG4gICAgY2FwdHVyZTogISFjYXB0dXJlXG4gIH0pO1xufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsICEhY2FwdHVyZSk7XG59LFxuICAgIF93aGVlbExpc3RlbmVyID0gZnVuY3Rpb24gX3doZWVsTGlzdGVuZXIoZnVuYywgZWwsIHNjcm9sbEZ1bmMpIHtcbiAgc2Nyb2xsRnVuYyA9IHNjcm9sbEZ1bmMgJiYgc2Nyb2xsRnVuYy53aGVlbEhhbmRsZXI7XG5cbiAgaWYgKHNjcm9sbEZ1bmMpIHtcbiAgICBmdW5jKGVsLCBcIndoZWVsXCIsIHNjcm9sbEZ1bmMpO1xuICAgIGZ1bmMoZWwsIFwidG91Y2htb3ZlXCIsIHNjcm9sbEZ1bmMpO1xuICB9XG59LFxuICAgIF9tYXJrZXJEZWZhdWx0cyA9IHtcbiAgc3RhcnRDb2xvcjogXCJncmVlblwiLFxuICBlbmRDb2xvcjogXCJyZWRcIixcbiAgaW5kZW50OiAwLFxuICBmb250U2l6ZTogXCIxNnB4XCIsXG4gIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJcbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcbiAgYW50aWNpcGF0ZVBpbjogMFxufSxcbiAgICBfa2V5d29yZHMgPSB7XG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgY2VudGVyOiAwLjUsXG4gIGJvdHRvbTogMSxcbiAgcmlnaHQ6IDFcbn0sXG4gICAgX29mZnNldFRvUHggPSBmdW5jdGlvbiBfb2Zmc2V0VG9QeCh2YWx1ZSwgc2l6ZSkge1xuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBlcUluZGV4ID0gdmFsdWUuaW5kZXhPZihcIj1cIiksXG4gICAgICAgIHJlbGF0aXZlID0gfmVxSW5kZXggPyArKHZhbHVlLmNoYXJBdChlcUluZGV4IC0gMSkgKyAxKSAqIHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKGVxSW5kZXggKyAxKSkgOiAwO1xuXG4gICAgaWYgKH5lcUluZGV4KSB7XG4gICAgICB2YWx1ZS5pbmRleE9mKFwiJVwiKSA+IGVxSW5kZXggJiYgKHJlbGF0aXZlICo9IHNpemUgLyAxMDApO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgZXFJbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHZhbHVlID0gcmVsYXRpdmUgKyAodmFsdWUgaW4gX2tleXdvcmRzID8gX2tleXdvcmRzW3ZhbHVlXSAqIHNpemUgOiB+dmFsdWUuaW5kZXhPZihcIiVcIikgPyBwYXJzZUZsb2F0KHZhbHVlKSAqIHNpemUgLyAxMDAgOiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn0sXG4gICAgX2NyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIF9jcmVhdGVNYXJrZXIodHlwZSwgbmFtZSwgY29udGFpbmVyLCBkaXJlY3Rpb24sIF9yZWY0LCBvZmZzZXQsIG1hdGNoV2lkdGhFbCwgY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gIHZhciBzdGFydENvbG9yID0gX3JlZjQuc3RhcnRDb2xvcixcbiAgICAgIGVuZENvbG9yID0gX3JlZjQuZW5kQ29sb3IsXG4gICAgICBmb250U2l6ZSA9IF9yZWY0LmZvbnRTaXplLFxuICAgICAgaW5kZW50ID0gX3JlZjQuaW5kZW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWY0LmZvbnRXZWlnaHQ7XG5cbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICB1c2VGaXhlZFBvc2l0aW9uID0gX2lzVmlld3BvcnQoY29udGFpbmVyKSB8fCBfZ2V0UHJveHlQcm9wKGNvbnRhaW5lciwgXCJwaW5UeXBlXCIpID09PSBcImZpeGVkXCIsXG4gICAgICBpc1Njcm9sbGVyID0gdHlwZS5pbmRleE9mKFwic2Nyb2xsZXJcIikgIT09IC0xLFxuICAgICAgcGFyZW50ID0gdXNlRml4ZWRQb3NpdGlvbiA/IF9ib2R5IDogY29udGFpbmVyLFxuICAgICAgaXNTdGFydCA9IHR5cGUuaW5kZXhPZihcInN0YXJ0XCIpICE9PSAtMSxcbiAgICAgIGNvbG9yID0gaXNTdGFydCA/IHN0YXJ0Q29sb3IgOiBlbmRDb2xvcixcbiAgICAgIGNzcyA9IFwiYm9yZGVyLWNvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXNpemU6XCIgKyBmb250U2l6ZSArIFwiO2NvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXdlaWdodDpcIiArIGZvbnRXZWlnaHQgKyBcIjtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpzYW5zLXNlcmlmLEFyaWFsO3otaW5kZXg6MTAwMDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO1wiO1xuXG4gIGNzcyArPSBcInBvc2l0aW9uOlwiICsgKChpc1Njcm9sbGVyIHx8IGNvbnRhaW5lckFuaW1hdGlvbikgJiYgdXNlRml4ZWRQb3NpdGlvbiA/IFwiZml4ZWQ7XCIgOiBcImFic29sdXRlO1wiKTtcbiAgKGlzU2Nyb2xsZXIgfHwgY29udGFpbmVyQW5pbWF0aW9uIHx8ICF1c2VGaXhlZFBvc2l0aW9uKSAmJiAoY3NzICs9IChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9yaWdodCA6IF9ib3R0b20pICsgXCI6XCIgKyAob2Zmc2V0ICsgcGFyc2VGbG9hdChpbmRlbnQpKSArIFwicHg7XCIpO1xuICBtYXRjaFdpZHRoRWwgJiYgKGNzcyArPSBcImJveC1zaXppbmc6Ym9yZGVyLWJveDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6XCIgKyBtYXRjaFdpZHRoRWwub2Zmc2V0V2lkdGggKyBcInB4O1wiKTtcbiAgZS5faXNTdGFydCA9IGlzU3RhcnQ7XG4gIGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJnc2FwLW1hcmtlci1cIiArIHR5cGUgKyAobmFtZSA/IFwiIG1hcmtlci1cIiArIG5hbWUgOiBcIlwiKSk7XG4gIGUuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgZS5pbm5lclRleHQgPSBuYW1lIHx8IG5hbWUgPT09IDAgPyB0eXBlICsgXCItXCIgKyBuYW1lIDogdHlwZTtcbiAgcGFyZW50LmNoaWxkcmVuWzBdID8gcGFyZW50Lmluc2VydEJlZm9yZShlLCBwYXJlbnQuY2hpbGRyZW5bMF0pIDogcGFyZW50LmFwcGVuZENoaWxkKGUpO1xuICBlLl9vZmZzZXQgPSBlW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gIF9wb3NpdGlvbk1hcmtlcihlLCAwLCBkaXJlY3Rpb24sIGlzU3RhcnQpO1xuXG4gIHJldHVybiBlO1xufSxcbiAgICBfcG9zaXRpb25NYXJrZXIgPSBmdW5jdGlvbiBfcG9zaXRpb25NYXJrZXIobWFya2VyLCBzdGFydCwgZGlyZWN0aW9uLCBmbGlwcGVkKSB7XG4gIHZhciB2YXJzID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICAgICAgc2lkZSA9IGRpcmVjdGlvbltmbGlwcGVkID8gXCJvczJcIiA6IFwicDJcIl0sXG4gICAgICBvcHBvc2l0ZVNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwicDJcIiA6IFwib3MyXCJdO1xuICBtYXJrZXIuX2lzRmxpcHBlZCA9IGZsaXBwZWQ7XG4gIHZhcnNbZGlyZWN0aW9uLmEgKyBcIlBlcmNlbnRcIl0gPSBmbGlwcGVkID8gLTEwMCA6IDA7XG4gIHZhcnNbZGlyZWN0aW9uLmFdID0gZmxpcHBlZCA/IFwiMXB4XCIgOiAwO1xuICB2YXJzW1wiYm9yZGVyXCIgKyBzaWRlICsgX1dpZHRoXSA9IDE7XG4gIHZhcnNbXCJib3JkZXJcIiArIG9wcG9zaXRlU2lkZSArIF9XaWR0aF0gPSAwO1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IHN0YXJ0ICsgXCJweFwiO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICBfdHJpZ2dlcnMgPSBbXSxcbiAgICBfaWRzID0ge30sXG4gICAgX3JhZklELFxuICAgIF9zeW5jID0gZnVuY3Rpb24gX3N5bmMoKSB7XG4gIHJldHVybiBfZ2V0VGltZSgpIC0gX2xhc3RTY3JvbGxUaW1lID4gMzQgJiYgKF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKSk7XG59LFxuICAgIF9vblNjcm9sbCA9IGZ1bmN0aW9uIF9vblNjcm9sbCgpIHtcbiAgLy8gcHJldmlvdXNseSwgd2UgdHJpZWQgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgYnkgYmF0Y2hpbmcvZGVmZXJyaW5nIHRvIHRoZSBuZXh0IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpLCBidXQgZGlzY292ZXJlZCB0aGF0IFNhZmFyaSBoYXMgYSBmZXcgYnVncyB0aGF0IG1ha2UgdGhpcyB1bndvcmthYmxlIChlc3BlY2lhbGx5IG9uIGlPUykuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xNmM0MzViMTJlZjA5YzM4MTI1MjA0ODE4ZTdiNDVmYz9lZGl0b3JzPTAwMTAgYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqT3hZcFEvM2RkNjVjY2VjNWE2MGYxZDg2MmMzNTVkODRkMTQ1NjI/ZWRpdG9ycz0wMDEwIGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzP2VkaXRvcnM9MDAxMFxuICBpZiAoIV9ub3JtYWxpemVyIHx8ICFfbm9ybWFsaXplci5pc1ByZXNzZWQgfHwgX25vcm1hbGl6ZXIuc3RhcnRYID4gX2JvZHkuY2xpZW50V2lkdGgpIHtcbiAgICAvLyBpZiB0aGUgdXNlciBpcyBkcmFnZ2luZyB0aGUgc2Nyb2xsYmFyLCBhbGxvdyBpdC5cbiAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICBpZiAoX25vcm1hbGl6ZXIpIHtcbiAgICAgIF9yYWZJRCB8fCAoX3JhZklEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF91cGRhdGVBbGwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3VwZGF0ZUFsbCgpOyAvLyBTYWZhcmkgaW4gcGFydGljdWxhciAob24gZGVza3RvcCkgTkVFRFMgdGhlIGltbWVkaWF0ZSB1cGRhdGUgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZWFzIGlPUyBzZWVtcyB0byBiZW5lZml0IGZyb20gd2FpdGluZyBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHRpY2ssIGF0IGxlYXN0IHdoZW4gbm9ybWFsaXppbmcuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9xQllvenFPP2VkaXRvcnM9MDExMFxuXG4gICAgfVxuXG4gICAgX2xhc3RTY3JvbGxUaW1lIHx8IF9kaXNwYXRjaChcInNjcm9sbFN0YXJ0XCIpO1xuICAgIF9sYXN0U2Nyb2xsVGltZSA9IF9nZXRUaW1lKCk7XG4gIH1cbn0sXG4gICAgX3NldEJhc2VEaW1lbnNpb25zID0gZnVuY3Rpb24gX3NldEJhc2VEaW1lbnNpb25zKCkge1xuICBfYmFzZVNjcmVlbldpZHRoID0gX3dpbi5pbm5lcldpZHRoO1xuICBfYmFzZVNjcmVlbkhlaWdodCA9IF93aW4uaW5uZXJIZWlnaHQ7XG59LFxuICAgIF9vblJlc2l6ZSA9IGZ1bmN0aW9uIF9vblJlc2l6ZSgpIHtcbiAgX3Njcm9sbGVycy5jYWNoZSsrO1xuICAhX3JlZnJlc2hpbmcgJiYgIV9pZ25vcmVSZXNpemUgJiYgIV9kb2MuZnVsbHNjcmVlbkVsZW1lbnQgJiYgIV9kb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiYgKCFfaWdub3JlTW9iaWxlUmVzaXplIHx8IF9iYXNlU2NyZWVuV2lkdGggIT09IF93aW4uaW5uZXJXaWR0aCB8fCBNYXRoLmFicyhfd2luLmlubmVySGVpZ2h0IC0gX2Jhc2VTY3JlZW5IZWlnaHQpID4gX3dpbi5pbm5lckhlaWdodCAqIDAuMjUpICYmIF9yZXNpemVEZWxheS5yZXN0YXJ0KHRydWUpO1xufSxcbiAgICAvLyBpZ25vcmUgcmVzaXplcyB0cmlnZ2VyZWQgYnkgcmVmcmVzaCgpXG5fbGlzdGVuZXJzID0ge30sXG4gICAgX2VtcHR5QXJyYXkgPSBbXSxcbiAgICBfc29mdFJlZnJlc2ggPSBmdW5jdGlvbiBfc29mdFJlZnJlc2goKSB7XG4gIHJldHVybiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKSB8fCBfcmVmcmVzaEFsbCh0cnVlKTtcbn0sXG4gICAgX2Rpc3BhdGNoID0gZnVuY3Rpb24gX2Rpc3BhdGNoKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnNbdHlwZV0gJiYgX2xpc3RlbmVyc1t0eXBlXS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZigpO1xuICB9KSB8fCBfZW1wdHlBcnJheTtcbn0sXG4gICAgX3NhdmVkU3R5bGVzID0gW10sXG4gICAgLy8gd2hlbiBTY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMoKSBpcyBjYWxsZWQsIHRoZSBpbmxpbmUgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiB0aGlzIEFycmF5IGluIGEgc2VxdWVudGlhbCBmb3JtYXQgbGlrZSBbZWxlbWVudCwgY3NzVGV4dCwgZ3NDYWNoZSwgbWVkaWFdLiBUaGlzIGtlZXBzIGl0IHZlcnkgbWVtb3J5LWVmZmljaWVudCBhbmQgZmFzdCB0byBpdGVyYXRlIHRocm91Z2guXG5fcmV2ZXJ0UmVjb3JkZWQgPSBmdW5jdGlvbiBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfc2F2ZWRTdHlsZXMubGVuZ3RoOyBpICs9IDUpIHtcbiAgICBpZiAoIW1lZGlhIHx8IF9zYXZlZFN0eWxlc1tpICsgNF0gJiYgX3NhdmVkU3R5bGVzW2kgKyA0XS5xdWVyeSA9PT0gbWVkaWEpIHtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5zdHlsZS5jc3NUZXh0ID0gX3NhdmVkU3R5bGVzW2kgKyAxXTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpXS5nZXRCQm94ICYmIF9zYXZlZFN0eWxlc1tpXS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgX3NhdmVkU3R5bGVzW2kgKyAyXSB8fCBcIlwiKTtcbiAgICAgIF9zYXZlZFN0eWxlc1tpICsgM10udW5jYWNoZSA9IDE7XG4gICAgfVxuICB9XG59LFxuICAgIF9yZXZlcnRBbGwgPSBmdW5jdGlvbiBfcmV2ZXJ0QWxsKGtpbGwsIG1lZGlhKSB7XG4gIHZhciB0cmlnZ2VyO1xuXG4gIGZvciAoX2kgPSAwOyBfaSA8IF90cmlnZ2Vycy5sZW5ndGg7IF9pKyspIHtcbiAgICB0cmlnZ2VyID0gX3RyaWdnZXJzW19pXTtcblxuICAgIGlmICh0cmlnZ2VyICYmICghbWVkaWEgfHwgdHJpZ2dlci5fY3R4ID09PSBtZWRpYSkpIHtcbiAgICAgIGlmIChraWxsKSB7XG4gICAgICAgIHRyaWdnZXIua2lsbCgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1lZGlhICYmIF9yZXZlcnRSZWNvcmRlZChtZWRpYSk7XG4gIG1lZGlhIHx8IF9kaXNwYXRjaChcInJldmVydFwiKTtcbn0sXG4gICAgX2NsZWFyU2Nyb2xsTWVtb3J5ID0gZnVuY3Rpb24gX2NsZWFyU2Nyb2xsTWVtb3J5KHNjcm9sbFJlc3RvcmF0aW9uLCBmb3JjZSkge1xuICAvLyB6ZXJvLW91dCBhbGwgdGhlIHJlY29yZGVkIHNjcm9sbCBwb3NpdGlvbnMuIERvbid0IHVzZSBfdHJpZ2dlcnMgYmVjYXVzZSBpZiwgZm9yIGV4YW1wbGUsIC5tYXRjaE1lZGlhKCkgaXMgdXNlZCB0byBjcmVhdGUgc29tZSBTY3JvbGxUcmlnZ2VycyBhbmQgdGhlbiB0aGUgdXNlciByZXNpemVzIGFuZCBpdCByZW1vdmVzIEFMTCBTY3JvbGxUcmlnZ2VycywgYW5kIHRoZW4gZ28gYmFjayB0byBhIHNpemUgd2hlcmUgdGhlcmUgYXJlIFNjcm9sbFRyaWdnZXJzLCBpdCB3b3VsZCBoYXZlIGtlcHQgdGhlIHBvc2l0aW9uKHMpIHNhdmVkIGZyb20gdGhlIGluaXRpYWwgc3RhdGUuXG4gIF9zY3JvbGxlcnMuY2FjaGUrKztcbiAgKGZvcmNlIHx8ICFfcmVmcmVzaGluZ0FsbCkgJiYgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24ob2JqKSAmJiBvYmouY2FjaGVJRCsrICYmIChvYmoucmVjID0gMCk7XG4gIH0pO1xuICBfaXNTdHJpbmcoc2Nyb2xsUmVzdG9yYXRpb24pICYmIChfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBfc2Nyb2xsUmVzdG9yYXRpb24gPSBzY3JvbGxSZXN0b3JhdGlvbik7XG59LFxuICAgIF9yZWZyZXNoaW5nQWxsLFxuICAgIF9yZWZyZXNoSUQgPSAwLFxuICAgIF9xdWV1ZVJlZnJlc2hJRCxcbiAgICBfcXVldWVSZWZyZXNoQWxsID0gZnVuY3Rpb24gX3F1ZXVlUmVmcmVzaEFsbCgpIHtcbiAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWxsIF9yZWZyZXNoQWxsKCkgZXZlcnkgdGltZSB3ZSBjcmVhdGUgYSBuZXcgU2Nyb2xsVHJpZ2dlciAoZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMpIC0gaXQncyBiZXR0ZXIgdG8gYmF0Y2ggdGhlbS4gU29tZSBmcmFtZXdvcmtzIGR5bmFtaWNhbGx5IGxvYWQgY29udGVudCBhbmQgd2UgY2FuJ3QgcmVseSBvbiB0aGUgd2luZG93J3MgXCJsb2FkXCIgb3IgXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnRzIHRvIHRyaWdnZXIgaXQuXG4gIGlmIChfcXVldWVSZWZyZXNoSUQgIT09IF9yZWZyZXNoSUQpIHtcbiAgICB2YXIgaWQgPSBfcXVldWVSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaWQgPT09IF9yZWZyZXNoSUQgJiYgX3JlZnJlc2hBbGwodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn0sXG4gICAgX3JlZnJlc2gxMDB2aCA9IGZ1bmN0aW9uIF9yZWZyZXNoMTAwdmgoKSB7XG4gIF9ib2R5LmFwcGVuZENoaWxkKF9kaXYxMDB2aCk7XG5cbiAgXzEwMHZoID0gX2RpdjEwMHZoLm9mZnNldEhlaWdodCB8fCBfd2luLmlubmVySGVpZ2h0O1xuXG4gIF9ib2R5LnJlbW92ZUNoaWxkKF9kaXYxMDB2aCk7XG59LFxuICAgIF9yZWZyZXNoQWxsID0gZnVuY3Rpb24gX3JlZnJlc2hBbGwoZm9yY2UsIHNraXBSZXZlcnQpIHtcbiAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhZm9yY2UpIHtcbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yZWZyZXNoMTAwdmgoKTtcblxuICBfcmVmcmVzaGluZ0FsbCA9IFNjcm9sbFRyaWdnZXIuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblxuICBfc2Nyb2xsZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBfaXNGdW5jdGlvbihvYmopICYmICsrb2JqLmNhY2hlSUQgJiYgKG9iai5yZWMgPSBvYmooKSk7XG4gIH0pOyAvLyBmb3JjZSB0aGUgY2xlYXJpbmcgb2YgdGhlIGNhY2hlIGJlY2F1c2Ugc29tZSBicm93c2VycyB0YWtlIGEgbGl0dGxlIHdoaWxlIHRvIGRpc3BhdGNoIHRoZSBcInNjcm9sbFwiIGV2ZW50IGFuZCB0aGUgdXNlciBtYXkgaGF2ZSBjaGFuZ2VkIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIHRoZW4gY2FsbGVkIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIHJpZ2h0IGF3YXlcblxuXG4gIHZhciByZWZyZXNoSW5pdHMgPSBfZGlzcGF0Y2goXCJyZWZyZXNoSW5pdFwiKTtcblxuICBfc29ydCAmJiBTY3JvbGxUcmlnZ2VyLnNvcnQoKTtcbiAgc2tpcFJldmVydCB8fCBfcmV2ZXJ0QWxsKCk7XG5cbiAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoX2lzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgb2JqLnNtb290aCAmJiAob2JqLnRhcmdldC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwiYXV0b1wiKTsgLy8gc21vb3RoIHNjcm9sbGluZyBpbnRlcmZlcmVzXG5cbiAgICAgIG9iaigwKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQucmVmcmVzaCgpO1xuICB9KTsgLy8gZG9uJ3QgbG9vcCB3aXRoIF9pIGJlY2F1c2UgZHVyaW5nIGEgcmVmcmVzaCgpIHNvbWVvbmUgY291bGQgY2FsbCBTY3JvbGxUcmlnZ2VyLnVwZGF0ZSgpIHdoaWNoIHdvdWxkIGl0ZXJhdGUgdGhyb3VnaCBfaSByZXN1bHRpbmcgaW4gYSBza2lwLlxuXG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAvLyBuZXN0ZWQgcGlucyAocGlubmVkQ29udGFpbmVyKSB3aXRoIHBpblNwYWNpbmcgbWF5IGV4cGFuZCB0aGUgY29udGFpbmVyLCBzbyB3ZSBtdXN0IGFjY29tbW9kYXRlIHRoYXQgaGVyZS5cbiAgICBpZiAodC5fc3ViUGluT2Zmc2V0ICYmIHQucGluKSB7XG4gICAgICB2YXIgcHJvcCA9IHQudmFycy5ob3Jpem9udGFsID8gXCJvZmZzZXRXaWR0aFwiIDogXCJvZmZzZXRIZWlnaHRcIixcbiAgICAgICAgICBvcmlnaW5hbCA9IHQucGluW3Byb3BdO1xuICAgICAgdC5yZXZlcnQodHJ1ZSwgMSk7XG4gICAgICB0LmFkanVzdFBpblNwYWNpbmcodC5waW5bcHJvcF0gLSBvcmlnaW5hbCk7XG4gICAgICB0LnJlZnJlc2goKTtcbiAgICB9XG4gIH0pO1xuXG4gIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgLy8gdGhlIHNjcm9sbGVyJ3MgbWF4IHNjcm9sbCBwb3NpdGlvbiBtYXkgY2hhbmdlIGFmdGVyIGFsbCB0aGUgU2Nyb2xsVHJpZ2dlcnMgcmVmcmVzaGVkIChsaWtlIHBpbm5pbmcgY291bGQgcHVzaCBpdCBkb3duKSwgc28gd2UgbmVlZCB0byBsb29wIGJhY2sgYW5kIGNvcnJlY3QgYW55IHdpdGggZW5kOiBcIm1heFwiLiBTYW1lIGZvciBhbnl0aGluZyB3aXRoIGEgY2xhbXBlZCBlbmRcbiAgICB2YXIgbWF4ID0gX21heFNjcm9sbCh0LnNjcm9sbGVyLCB0Ll9kaXIpO1xuXG4gICAgKHQudmFycy5lbmQgPT09IFwibWF4XCIgfHwgdC5fZW5kQ2xhbXAgJiYgdC5lbmQgPiBtYXgpICYmIHQuc2V0UG9zaXRpb25zKHQuc3RhcnQsIE1hdGgubWF4KHQuc3RhcnQgKyAxLCBtYXgpLCB0cnVlKTtcbiAgfSk7XG5cbiAgcmVmcmVzaEluaXRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnJlbmRlciAmJiByZXN1bHQucmVuZGVyKC0xKTtcbiAgfSk7IC8vIGlmIHRoZSBvblJlZnJlc2hJbml0KCkgcmV0dXJucyBhbiBhbmltYXRpb24gKHR5cGljYWxseSBhIGdzYXAuc2V0KCkpLCByZXZlcnQgaXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBwdXQgdGhpbmdzIGluIGEgY2VydGFpbiBzcG90IGJlZm9yZSByZWZyZXNoaW5nIGZvciBtZWFzdXJlbWVudCBwdXJwb3NlcywgYW5kIHRoZW4gcHV0IHRoaW5ncyBiYWNrLlxuXG4gIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKF9pc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIG9iai5zbW9vdGggJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9iai50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgfSk7XG4gICAgICBvYmoucmVjICYmIG9iaihvYmoucmVjKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9jbGVhclNjcm9sbE1lbW9yeShfc2Nyb2xsUmVzdG9yYXRpb24sIDEpO1xuXG4gIF9yZXNpemVEZWxheS5wYXVzZSgpO1xuXG4gIF9yZWZyZXNoSUQrKztcbiAgX3JlZnJlc2hpbmdBbGwgPSAyO1xuXG4gIF91cGRhdGVBbGwoMik7XG5cbiAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24odC52YXJzLm9uUmVmcmVzaCkgJiYgdC52YXJzLm9uUmVmcmVzaCh0KTtcbiAgfSk7XG5cbiAgX3JlZnJlc2hpbmdBbGwgPSBTY3JvbGxUcmlnZ2VyLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gIF9kaXNwYXRjaChcInJlZnJlc2hcIik7XG59LFxuICAgIF9sYXN0U2Nyb2xsID0gMCxcbiAgICBfZGlyZWN0aW9uID0gMSxcbiAgICBfcHJpbWFyeSxcbiAgICBfdXBkYXRlQWxsID0gZnVuY3Rpb24gX3VwZGF0ZUFsbChmb3JjZSkge1xuICBpZiAoIV9yZWZyZXNoaW5nQWxsIHx8IGZvcmNlID09PSAyKSB7XG4gICAgU2Nyb2xsVHJpZ2dlci5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICBfcHJpbWFyeSAmJiBfcHJpbWFyeS51cGRhdGUoMCk7IC8vIFNjcm9sbFNtb290aGVyIHVzZXMgcmVmcmVzaFByaW9yaXR5IC05OTk5IHRvIGJlY29tZSB0aGUgcHJpbWFyeSB0aGF0IGdldHMgdXBkYXRlZCBiZWZvcmUgYWxsIG90aGVycyBiZWNhdXNlIGl0IGFmZmVjdHMgdGhlIHNjcm9sbCBwb3NpdGlvbi5cblxuICAgIHZhciBsID0gX3RyaWdnZXJzLmxlbmd0aCxcbiAgICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICAgIHJlY29yZFZlbG9jaXR5ID0gdGltZSAtIF90aW1lMSA+PSA1MCxcbiAgICAgICAgc2Nyb2xsID0gbCAmJiBfdHJpZ2dlcnNbMF0uc2Nyb2xsKCk7XG5cbiAgICBfZGlyZWN0aW9uID0gX2xhc3RTY3JvbGwgPiBzY3JvbGwgPyAtMSA6IDE7XG4gICAgX3JlZnJlc2hpbmdBbGwgfHwgKF9sYXN0U2Nyb2xsID0gc2Nyb2xsKTtcblxuICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgICAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhX3BvaW50ZXJJc0Rvd24gJiYgdGltZSAtIF9sYXN0U2Nyb2xsVGltZSA+IDIwMCkge1xuICAgICAgICBfbGFzdFNjcm9sbFRpbWUgPSAwO1xuXG4gICAgICAgIF9kaXNwYXRjaChcInNjcm9sbEVuZFwiKTtcbiAgICAgIH1cblxuICAgICAgX3RpbWUyID0gX3RpbWUxO1xuICAgICAgX3RpbWUxID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAoX2RpcmVjdGlvbiA8IDApIHtcbiAgICAgIF9pID0gbDtcblxuICAgICAgd2hpbGUgKF9pLS0gPiAwKSB7XG4gICAgICAgIF90cmlnZ2Vyc1tfaV0gJiYgX3RyaWdnZXJzW19pXS51cGRhdGUoMCwgcmVjb3JkVmVsb2NpdHkpO1xuICAgICAgfVxuXG4gICAgICBfZGlyZWN0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgbDsgX2krKykge1xuICAgICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIF9yYWZJRCA9IDA7XG59LFxuICAgIF9wcm9wTmFtZXNUb0NvcHkgPSBbX2xlZnQsIF90b3AsIF9ib3R0b20sIF9yaWdodCwgX21hcmdpbiArIF9Cb3R0b20sIF9tYXJnaW4gKyBfUmlnaHQsIF9tYXJnaW4gKyBfVG9wLCBfbWFyZ2luICsgX0xlZnQsIFwiZGlzcGxheVwiLCBcImZsZXhTaHJpbmtcIiwgXCJmbG9hdFwiLCBcInpJbmRleFwiLCBcImdyaWRDb2x1bW5TdGFydFwiLCBcImdyaWRDb2x1bW5FbmRcIiwgXCJncmlkUm93U3RhcnRcIiwgXCJncmlkUm93RW5kXCIsIFwiZ3JpZEFyZWFcIiwgXCJqdXN0aWZ5U2VsZlwiLCBcImFsaWduU2VsZlwiLCBcInBsYWNlU2VsZlwiLCBcIm9yZGVyXCJdLFxuICAgIF9zdGF0ZVByb3BzID0gX3Byb3BOYW1lc1RvQ29weS5jb25jYXQoW193aWR0aCwgX2hlaWdodCwgXCJib3hTaXppbmdcIiwgXCJtYXhcIiArIF9XaWR0aCwgXCJtYXhcIiArIF9IZWlnaHQsIFwicG9zaXRpb25cIiwgX21hcmdpbiwgX3BhZGRpbmcsIF9wYWRkaW5nICsgX1RvcCwgX3BhZGRpbmcgKyBfUmlnaHQsIF9wYWRkaW5nICsgX0JvdHRvbSwgX3BhZGRpbmcgKyBfTGVmdF0pLFxuICAgIF9zd2FwUGluT3V0ID0gZnVuY3Rpb24gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHN0YXRlKSB7XG4gIF9zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgdmFyIGNhY2hlID0gcGluLl9nc2FwO1xuXG4gIGlmIChjYWNoZS5zcGFjZXJJc05hdGl2ZSkge1xuICAgIF9zZXRTdGF0ZShjYWNoZS5zcGFjZXJTdGF0ZSk7XG4gIH0gZWxzZSBpZiAocGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBwYXJlbnQgPSBzcGFjZXIucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocGluLCBzcGFjZXIpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHNwYWNlcik7XG4gICAgfVxuICB9XG5cbiAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IGZhbHNlO1xufSxcbiAgICBfc3dhcFBpbkluID0gZnVuY3Rpb24gX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgY3MsIHNwYWNlclN0YXRlKSB7XG4gIGlmICghcGluLl9nc2FwLnN3YXBwZWRJbikge1xuICAgIHZhciBpID0gX3Byb3BOYW1lc1RvQ29weS5sZW5ndGgsXG4gICAgICAgIHNwYWNlclN0eWxlID0gc3BhY2VyLnN0eWxlLFxuICAgICAgICBwaW5TdHlsZSA9IHBpbi5zdHlsZSxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHAgPSBfcHJvcE5hbWVzVG9Db3B5W2ldO1xuICAgICAgc3BhY2VyU3R5bGVbcF0gPSBjc1twXTtcbiAgICB9XG5cbiAgICBzcGFjZXJTdHlsZS5wb3NpdGlvbiA9IGNzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG4gICAgY3MuZGlzcGxheSA9PT0gXCJpbmxpbmVcIiAmJiAoc3BhY2VyU3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIpO1xuICAgIHBpblN0eWxlW19ib3R0b21dID0gcGluU3R5bGVbX3JpZ2h0XSA9IFwiYXV0b1wiO1xuICAgIHNwYWNlclN0eWxlLmZsZXhCYXNpcyA9IGNzLmZsZXhCYXNpcyB8fCBcImF1dG9cIjtcbiAgICBzcGFjZXJTdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgIHNwYWNlclN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIHNwYWNlclN0eWxlW193aWR0aF0gPSBfZ2V0U2l6ZShwaW4sIF9ob3Jpem9udGFsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfaGVpZ2h0XSA9IF9nZXRTaXplKHBpbiwgX3ZlcnRpY2FsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfcGFkZGluZ10gPSBwaW5TdHlsZVtfbWFyZ2luXSA9IHBpblN0eWxlW190b3BdID0gcGluU3R5bGVbX2xlZnRdID0gXCIwXCI7XG5cbiAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG4gICAgcGluU3R5bGVbX3dpZHRoXSA9IHBpblN0eWxlW1wibWF4XCIgKyBfV2lkdGhdID0gY3NbX3dpZHRoXTtcbiAgICBwaW5TdHlsZVtfaGVpZ2h0XSA9IHBpblN0eWxlW1wibWF4XCIgKyBfSGVpZ2h0XSA9IGNzW19oZWlnaHRdO1xuICAgIHBpblN0eWxlW19wYWRkaW5nXSA9IGNzW19wYWRkaW5nXTtcblxuICAgIGlmIChwaW4ucGFyZW50Tm9kZSAhPT0gc3BhY2VyKSB7XG4gICAgICBwaW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhY2VyLCBwaW4pO1xuICAgICAgc3BhY2VyLmFwcGVuZENoaWxkKHBpbik7XG4gICAgfVxuXG4gICAgcGluLl9nc2FwLnN3YXBwZWRJbiA9IHRydWU7XG4gIH1cbn0sXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9zZXRTdGF0ZSA9IGZ1bmN0aW9uIF9zZXRTdGF0ZShzdGF0ZSkge1xuICBpZiAoc3RhdGUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS50LnN0eWxlLFxuICAgICAgICBsID0gc3RhdGUubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcCxcbiAgICAgICAgdmFsdWU7XG4gICAgKHN0YXRlLnQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHN0YXRlLnQpKS51bmNhY2hlID0gMTsgLy8gb3RoZXJ3aXNlIHRyYW5zZm9ybXMgbWF5IGJlIG9mZlxuXG4gICAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGVbaSArIDFdO1xuICAgICAgcCA9IHN0YXRlW2ldO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgc3R5bGVbcF0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVbcF0pIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocC5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldFN0YXRlID0gZnVuY3Rpb24gX2dldFN0YXRlKGVsZW1lbnQpIHtcbiAgLy8gcmV0dXJucyBhbiBBcnJheSB3aXRoIGFsdGVybmF0aW5nIHZhbHVlcyBsaWtlIFtwcm9wZXJ0eSwgdmFsdWUsIHByb3BlcnR5LCB2YWx1ZV0gYW5kIGEgXCJ0XCIgcHJvcGVydHkgcG9pbnRpbmcgdG8gdGhlIHRhcmdldCAoZWxlbWVudCkuIE1ha2VzIGl0IGZhc3QgYW5kIGNoZWFwLlxuICB2YXIgbCA9IF9zdGF0ZVByb3BzLmxlbmd0aCxcbiAgICAgIHN0eWxlID0gZWxlbWVudC5zdHlsZSxcbiAgICAgIHN0YXRlID0gW10sXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHN0YXRlLnB1c2goX3N0YXRlUHJvcHNbaV0sIHN0eWxlW19zdGF0ZVByb3BzW2ldXSk7XG4gIH1cblxuICBzdGF0ZS50ID0gZWxlbWVudDtcbiAgcmV0dXJuIHN0YXRlO1xufSxcbiAgICBfY29weVN0YXRlID0gZnVuY3Rpb24gX2NvcHlTdGF0ZShzdGF0ZSwgb3ZlcnJpZGUsIG9taXRPZmZzZXRzKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG4gICAgICBpID0gb21pdE9mZnNldHMgPyA4IDogMCxcbiAgICAgIC8vIHNraXAgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIGlmIG9taXRPZmZzZXRzIGlzIHRydWVcbiAgcDtcblxuICBmb3IgKDsgaSA8IGw7IGkgKz0gMikge1xuICAgIHAgPSBzdGF0ZVtpXTtcbiAgICByZXN1bHQucHVzaChwLCBwIGluIG92ZXJyaWRlID8gb3ZlcnJpZGVbcF0gOiBzdGF0ZVtpICsgMV0pO1xuICB9XG5cbiAgcmVzdWx0LnQgPSBzdGF0ZS50O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfd2luT2Zmc2V0cyA9IHtcbiAgbGVmdDogMCxcbiAgdG9wOiAwXG59LFxuICAgIC8vIC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAoPykgQWxsb3cgdXNlcnMgdG8gY2FsY3VsYXRlIHdoZXJlIGEgdHJpZ2dlciBoaXRzIChzY3JvbGwgcG9zaXRpb24pIGxpa2UgZ2V0U2Nyb2xsUG9zaXRpb24oXCIjaWRcIiwgXCJ0b3AgYm90dG9tXCIpXG4vLyBfZ2V0U2Nyb2xsUG9zaXRpb24gPSAodHJpZ2dlciwgcG9zaXRpb24sIHtzY3JvbGxlciwgY29udGFpbmVyQW5pbWF0aW9uLCBob3Jpem9udGFsfSkgPT4ge1xuLy8gXHRzY3JvbGxlciA9IF9nZXRUYXJnZXQoc2Nyb2xsZXIgfHwgX3dpbik7XG4vLyBcdGxldCBkaXJlY3Rpb24gPSBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4vLyBcdFx0aXNWaWV3cG9ydCA9IF9pc1ZpZXdwb3J0KHNjcm9sbGVyKTtcbi8vIFx0X2dldFNpemVGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0LCBkaXJlY3Rpb24pO1xuLy8gXHRyZXR1cm4gX3BhcnNlUG9zaXRpb24ocG9zaXRpb24sIF9nZXRUYXJnZXQodHJpZ2dlciksIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgZGlyZWN0aW9uKSgpLCBkaXJlY3Rpb24sIF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pKCksIDAsIDAsIDAsIF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCkoKSwgaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCwgMCwgY29udGFpbmVyQW5pbWF0aW9uID8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgOiBfbWF4U2Nyb2xsKHNjcm9sbGVyKSwgY29udGFpbmVyQW5pbWF0aW9uKTtcbi8vIH0sXG5fcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKHZhbHVlLCB0cmlnZ2VyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsLCBtYXJrZXIsIG1hcmtlclNjcm9sbGVyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIHNjcm9sbGVyTWF4LCBjb250YWluZXJBbmltYXRpb24sIGNsYW1wWmVyb1Byb3ApIHtcbiAgX2lzRnVuY3Rpb24odmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlKHNlbGYpKTtcblxuICBpZiAoX2lzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5zdWJzdHIoMCwgMykgPT09IFwibWF4XCIpIHtcbiAgICB2YWx1ZSA9IHNjcm9sbGVyTWF4ICsgKHZhbHVlLmNoYXJBdCg0KSA9PT0gXCI9XCIgPyBfb2Zmc2V0VG9QeChcIjBcIiArIHZhbHVlLnN1YnN0cigzKSwgc2Nyb2xsZXJTaXplKSA6IDApO1xuICB9XG5cbiAgdmFyIHRpbWUgPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24udGltZSgpIDogMCxcbiAgICAgIHAxLFxuICAgICAgcDIsXG4gICAgICBlbGVtZW50O1xuICBjb250YWluZXJBbmltYXRpb24gJiYgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoMCk7XG4gIGlzTmFOKHZhbHVlKSB8fCAodmFsdWUgPSArdmFsdWUpOyAvLyBjb252ZXJ0IGEgc3RyaW5nIG51bWJlciBsaWtlIFwiNDVcIiB0byBhbiBhY3R1YWwgbnVtYmVyXG5cbiAgaWYgKCFfaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgX2lzRnVuY3Rpb24odHJpZ2dlcikgJiYgKHRyaWdnZXIgPSB0cmlnZ2VyKHNlbGYpKTtcbiAgICB2YXIgb2Zmc2V0cyA9ICh2YWx1ZSB8fCBcIjBcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICBib3VuZHMsXG4gICAgICAgIGxvY2FsT2Zmc2V0LFxuICAgICAgICBnbG9iYWxPZmZzZXQsXG4gICAgICAgIGRpc3BsYXk7XG4gICAgZWxlbWVudCA9IF9nZXRUYXJnZXQodHJpZ2dlciwgc2VsZikgfHwgX2JvZHk7XG4gICAgYm91bmRzID0gX2dldEJvdW5kcyhlbGVtZW50KSB8fCB7fTtcblxuICAgIGlmICgoIWJvdW5kcyB8fCAhYm91bmRzLmxlZnQgJiYgIWJvdW5kcy50b3ApICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyBpZiBkaXNwbGF5IGlzIFwibm9uZVwiLCBpdCB3b24ndCByZXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgcHJvcGVybHlcbiAgICAgIGRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuICAgICAgZGlzcGxheSA/IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgOiBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICB9XG5cbiAgICBsb2NhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMF0sIGJvdW5kc1tkaXJlY3Rpb24uZF0pO1xuICAgIGdsb2JhbE9mZnNldCA9IF9vZmZzZXRUb1B4KG9mZnNldHNbMV0gfHwgXCIwXCIsIHNjcm9sbGVyU2l6ZSk7XG4gICAgdmFsdWUgPSBib3VuZHNbZGlyZWN0aW9uLnBdIC0gc2Nyb2xsZXJCb3VuZHNbZGlyZWN0aW9uLnBdIC0gYm9yZGVyV2lkdGggKyBsb2NhbE9mZnNldCArIHNjcm9sbCAtIGdsb2JhbE9mZnNldDtcbiAgICBtYXJrZXJTY3JvbGxlciAmJiBfcG9zaXRpb25NYXJrZXIobWFya2VyU2Nyb2xsZXIsIGdsb2JhbE9mZnNldCwgZGlyZWN0aW9uLCBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQgPCAyMCB8fCBtYXJrZXJTY3JvbGxlci5faXNTdGFydCAmJiBnbG9iYWxPZmZzZXQgPiAyMCk7XG4gICAgc2Nyb2xsZXJTaXplIC09IHNjcm9sbGVyU2l6ZSAtIGdsb2JhbE9mZnNldDsgLy8gYWRqdXN0IGZvciB0aGUgbWFya2VyXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uICYmICh2YWx1ZSA9IGdzYXAudXRpbHMubWFwUmFuZ2UoY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuc3RhcnQsIGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmVuZCwgMCwgc2Nyb2xsZXJNYXgsIHZhbHVlKSk7XG4gICAgbWFya2VyU2Nyb2xsZXIgJiYgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoY2xhbXBaZXJvUHJvcCkge1xuICAgIHNlbGZbY2xhbXBaZXJvUHJvcF0gPSB2YWx1ZSB8fCAtMC4wMDE7XG4gICAgdmFsdWUgPCAwICYmICh2YWx1ZSA9IDApO1xuICB9XG5cbiAgaWYgKG1hcmtlcikge1xuICAgIHZhciBwb3NpdGlvbiA9IHZhbHVlICsgc2Nyb2xsZXJTaXplLFxuICAgICAgICBpc1N0YXJ0ID0gbWFya2VyLl9pc1N0YXJ0O1xuICAgIHAxID0gXCJzY3JvbGxcIiArIGRpcmVjdGlvbi5kMjtcblxuICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzU3RhcnQgJiYgcG9zaXRpb24gPiAyMCB8fCAhaXNTdGFydCAmJiAodXNlRml4ZWRQb3NpdGlvbiA/IE1hdGgubWF4KF9ib2R5W3AxXSwgX2RvY0VsW3AxXSkgOiBtYXJrZXIucGFyZW50Tm9kZVtwMV0pIDw9IHBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBfZ2V0Qm91bmRzKG1hcmtlclNjcm9sbGVyKTtcbiAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgKG1hcmtlci5zdHlsZVtkaXJlY3Rpb24ub3AucF0gPSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ub3AucF0gLSBkaXJlY3Rpb24ub3AubSAtIG1hcmtlci5fb2Zmc2V0ICsgX3B4KTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmIGVsZW1lbnQpIHtcbiAgICBwMSA9IF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsoc2Nyb2xsZXJNYXgpO1xuICAgIHAyID0gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgICBjb250YWluZXJBbmltYXRpb24uX2NhU2Nyb2xsRGlzdCA9IHAxW2RpcmVjdGlvbi5wXSAtIHAyW2RpcmVjdGlvbi5wXTtcbiAgICB2YWx1ZSA9IHZhbHVlIC8gY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgKiBzY3JvbGxlck1heDtcbiAgfVxuXG4gIGNvbnRhaW5lckFuaW1hdGlvbiAmJiBjb250YWluZXJBbmltYXRpb24uc2Vlayh0aW1lKTtcbiAgcmV0dXJuIGNvbnRhaW5lckFuaW1hdGlvbiA/IHZhbHVlIDogTWF0aC5yb3VuZCh2YWx1ZSk7XG59LFxuICAgIF9wcmVmaXhFeHAgPSAvKHdlYmtpdHxtb3p8bGVuZ3RofGNzc1RleHR8aW5zZXQpL2ksXG4gICAgX3JlcGFyZW50ID0gZnVuY3Rpb24gX3JlcGFyZW50KGVsZW1lbnQsIHBhcmVudCwgdG9wLCBsZWZ0KSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgIHAsXG4gICAgICAgIGNzO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gX2JvZHkpIHtcbiAgICAgIGVsZW1lbnQuX3N0T3JpZyA9IHN0eWxlLmNzc1RleHQ7IC8vIHJlY29yZCBvcmlnaW5hbCBpbmxpbmUgc3R5bGVzIHNvIHdlIGNhbiByZXZlcnQgdGhlbSBsYXRlclxuXG4gICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICBmb3IgKHAgaW4gY3MpIHtcbiAgICAgICAgLy8gbXVzdCBjb3B5IGFsbCByZWxldmFudCBzdHlsZXMgdG8gZW5zdXJlIHRoYXQgbm90aGluZyBjaGFuZ2VzIHZpc3VhbGx5IHdoZW4gd2UgcmVwYXJlbnQgdG8gdGhlIDxib2R5Pi4gU2tpcCB0aGUgdmVuZG9yIHByZWZpeGVkIG9uZXMuXG4gICAgICAgIGlmICghK3AgJiYgIV9wcmVmaXhFeHAudGVzdChwKSAmJiBjc1twXSAmJiB0eXBlb2Ygc3R5bGVbcF0gPT09IFwic3RyaW5nXCIgJiYgcCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICBzdHlsZVtwXSA9IGNzW3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHN0eWxlLmxlZnQgPSBsZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gZWxlbWVudC5fc3RPcmlnO1xuICAgIH1cblxuICAgIGdzYXAuY29yZS5nZXRDYWNoZShlbGVtZW50KS51bmNhY2hlID0gMTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn0sXG4gICAgX2ludGVycnVwdGlvblRyYWNrZXIgPSBmdW5jdGlvbiBfaW50ZXJydXB0aW9uVHJhY2tlcihnZXRWYWx1ZUZ1bmMsIGluaXRpYWxWYWx1ZSwgb25JbnRlcnJ1cHQpIHtcbiAgdmFyIGxhc3QxID0gaW5pdGlhbFZhbHVlLFxuICAgICAgbGFzdDIgPSBsYXN0MTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChnZXRWYWx1ZUZ1bmMoKSk7IC8vIHJvdW5kIGJlY2F1c2UgaW4gc29tZSBbdmVyeSB1bmNvbW1vbl0gV2luZG93cyBlbnZpcm9ubWVudHMsIHNjcm9sbCBjYW4gZ2V0IHJlcG9ydGVkIHdpdGggZGVjaW1hbHMgZXZlbiB0aG91Z2ggaXQgd2FzIHNldCB3aXRob3V0LlxuXG4gICAgaWYgKGN1cnJlbnQgIT09IGxhc3QxICYmIGN1cnJlbnQgIT09IGxhc3QyICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MSkgPiAzICYmIE1hdGguYWJzKGN1cnJlbnQgLSBsYXN0MikgPiAzKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBzY3JvbGxzLCBraWxsIHRoZSB0d2Vlbi4gaU9TIFNhZmFyaSBpbnRlcm1pdHRlbnRseSBtaXNyZXBvcnRzIHRoZSBzY3JvbGwgcG9zaXRpb24sIGl0IG1heSBiZSB0aGUgbW9zdCByZWNlbnRseS1zZXQgb25lIG9yIHRoZSBvbmUgYmVmb3JlIHRoYXQhIFdoZW4gU2FmYXJpIGlzIHpvb21lZCAoQ01ELSspLCBpdCBvZnRlbiBtaXNyZXBvcnRzIGFzIDEgcGl4ZWwgb2ZmIHRvbyEgU28gaWYgd2Ugc2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gMTI1LCBmb3IgZXhhbXBsZSwgaXQnbGwgYWN0dWFsbHkgcmVwb3J0IGl0IGFzIDEyNC5cbiAgICAgIHZhbHVlID0gY3VycmVudDtcbiAgICAgIG9uSW50ZXJydXB0ICYmIG9uSW50ZXJydXB0KCk7XG4gICAgfVxuXG4gICAgbGFzdDIgPSBsYXN0MTtcbiAgICBsYXN0MSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn0sXG4gICAgX3NoaWZ0TWFya2VyID0gZnVuY3Rpb24gX3NoaWZ0TWFya2VyKG1hcmtlciwgZGlyZWN0aW9uLCB2YWx1ZSkge1xuICB2YXIgdmFycyA9IHt9O1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IFwiKz1cIiArIHZhbHVlO1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICAvLyBfbWVyZ2VBbmltYXRpb25zID0gYW5pbWF0aW9ucyA9PiB7XG4vLyBcdGxldCB0bCA9IGdzYXAudGltZWxpbmUoe3Ntb290aENoaWxkVGltaW5nOiB0cnVlfSkuc3RhcnRUaW1lKE1hdGgubWluKC4uLmFuaW1hdGlvbnMubWFwKGEgPT4gYS5nbG9iYWxUaW1lKDApKSkpO1xuLy8gXHRhbmltYXRpb25zLmZvckVhY2goYSA9PiB7bGV0IHRpbWUgPSBhLnRvdGFsVGltZSgpOyB0bC5hZGQoYSk7IGEudG90YWxUaW1lKHRpbWUpOyB9KTtcbi8vIFx0dGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBmYWxzZTtcbi8vIFx0cmV0dXJuIHRsO1xuLy8gfSxcbi8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHR3ZWVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaW4gdGhlIGRpcmVjdGlvbiBwcm92aWRlZCwgYW5kIHdoZW4gZG9pbmcgc28gaXQnbGwgYWRkIGEgLnR3ZWVuIHByb3BlcnR5IHRvIHRoZSBGVU5DVElPTiBpdHNlbGYsIGFuZCByZW1vdmUgaXQgd2hlbiB0aGUgdHdlZW4gY29tcGxldGVzIG9yIGdldHMga2lsbGVkLiBUaGlzIGdpdmVzIHVzIGEgd2F5IHRvIGhhdmUgbXVsdGlwbGUgU2Nyb2xsVHJpZ2dlcnMgdXNlIGEgY2VudHJhbCBmdW5jdGlvbiBmb3IgYW55IGdpdmVuIHNjcm9sbGVyIGFuZCBzZWUgaWYgdGhlcmUncyBhIHNjcm9sbCB0d2VlbiBydW5uaW5nICh3aGljaCB3b3VsZCBhZmZlY3QgaWYvaG93IHRoaW5ncyBnZXQgdXBkYXRlZClcbl9nZXRUd2VlbkNyZWF0b3IgPSBmdW5jdGlvbiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBkaXJlY3Rpb24pIHtcbiAgdmFyIGdldFNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgcHJvcCA9IFwiX3Njcm9sbFwiICsgZGlyZWN0aW9uLnAyLFxuICAgICAgLy8gYWRkIGEgdHdlZW5hYmxlIHByb3BlcnR5IHRvIHRoZSBzY3JvbGxlciB0aGF0J3MgYSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uLCBsaWtlIF9zY3JvbGxUb3Agb3IgX3Njcm9sbExlZnQuIFRoaXMgd2F5LCBpZiBzb21lb25lIGRvZXMgZ3NhcC5raWxsVHdlZW5zT2Yoc2Nyb2xsZXIpIGl0J2xsIGtpbGwgdGhlIHNjcm9sbCB0d2Vlbi5cbiAgZ2V0VHdlZW4gPSBmdW5jdGlvbiBnZXRUd2VlbihzY3JvbGxUbywgdmFycywgaW5pdGlhbFZhbHVlLCBjaGFuZ2UxLCBjaGFuZ2UyKSB7XG4gICAgdmFyIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4sXG4gICAgICAgIG9uQ29tcGxldGUgPSB2YXJzLm9uQ29tcGxldGUsXG4gICAgICAgIG1vZGlmaWVycyA9IHt9O1xuICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZSB8fCBnZXRTY3JvbGwoKTtcblxuICAgIHZhciBjaGVja0ZvckludGVycnVwdGlvbiA9IF9pbnRlcnJ1cHRpb25UcmFja2VyKGdldFNjcm9sbCwgaW5pdGlhbFZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0d2Vlbi5raWxsKCk7XG4gICAgICBnZXRUd2Vlbi50d2VlbiA9IDA7XG4gICAgfSk7XG5cbiAgICBjaGFuZ2UyID0gY2hhbmdlMSAmJiBjaGFuZ2UyIHx8IDA7IC8vIGlmIGNoYW5nZTEgaXMgMCwgd2Ugc2V0IHRoYXQgdG8gdGhlIGRpZmZlcmVuY2UgYW5kIGlnbm9yZSBjaGFuZ2UyLiBPdGhlcndpc2UsIHRoZXJlIHdvdWxkIGJlIGEgY29tcG91bmQgZWZmZWN0LlxuXG4gICAgY2hhbmdlMSA9IGNoYW5nZTEgfHwgc2Nyb2xsVG8gLSBpbml0aWFsVmFsdWU7XG4gICAgdHdlZW4gJiYgdHdlZW4ua2lsbCgpO1xuICAgIHZhcnNbcHJvcF0gPSBzY3JvbGxUbztcbiAgICB2YXJzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcblxuICAgIG1vZGlmaWVyc1twcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjaGVja0ZvckludGVycnVwdGlvbihpbml0aWFsVmFsdWUgKyBjaGFuZ2UxICogdHdlZW4ucmF0aW8gKyBjaGFuZ2UyICogdHdlZW4ucmF0aW8gKiB0d2Vlbi5yYXRpbyk7XG4gICAgfTtcblxuICAgIHZhcnMub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfc2Nyb2xsZXJzLmNhY2hlKys7XG5cbiAgICAgIF91cGRhdGVBbGwoKTtcbiAgICB9O1xuXG4gICAgdmFycy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZ2V0VHdlZW4udHdlZW4gPSAwO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlLmNhbGwodHdlZW4pO1xuICAgIH07XG5cbiAgICB0d2VlbiA9IGdldFR3ZWVuLnR3ZWVuID0gZ3NhcC50byhzY3JvbGxlciwgdmFycyk7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9O1xuXG4gIHNjcm9sbGVyW3Byb3BdID0gZ2V0U2Nyb2xsO1xuXG4gIGdldFNjcm9sbC53aGVlbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFR3ZWVuLnR3ZWVuICYmIGdldFR3ZWVuLnR3ZWVuLmtpbGwoKSAmJiAoZ2V0VHdlZW4udHdlZW4gPSAwKTtcbiAgfTtcblxuICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwid2hlZWxcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7IC8vIFdpbmRvd3MgbWFjaGluZXMgaGFuZGxlIG1vdXNld2hlZWwgc2Nyb2xsaW5nIGluIGNodW5rcyAobGlrZSBcIjMgbGluZXMgcGVyIHNjcm9sbFwiKSBtZWFuaW5nIHRoZSB0eXBpY2FsIHN0cmF0ZWd5IGZvciBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgaXNuJ3QgYXMgc2Vuc2l0aXZlLiBJdCdzIG11Y2ggbW9yZSBsaWtlbHkgdG8gbWF0Y2ggb25lIG9mIHRoZSBwcmV2aW91cyAyIHNjcm9sbCBldmVudCBwb3NpdGlvbnMuIFNvIHdlIGtpbGwgYW55IHNuYXBwaW5nIGFzIHNvb24gYXMgdGhlcmUncyBhIHdoZWVsIGV2ZW50LlxuXG5cbiAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoICYmIF9hZGRMaXN0ZW5lcihzY3JvbGxlciwgXCJ0b3VjaG1vdmVcIiwgZ2V0U2Nyb2xsLndoZWVsSGFuZGxlcik7XG4gIHJldHVybiBnZXRUd2Vlbjtcbn07XG5cbmV4cG9ydCB2YXIgU2Nyb2xsVHJpZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNjcm9sbFRyaWdnZXIodmFycywgYW5pbWF0aW9uKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIoZ3NhcCkgfHwgY29uc29sZS53YXJuKFwiUGxlYXNlIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcIik7XG5cbiAgICBfY29udGV4dCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdCh2YXJzLCBhbmltYXRpb24pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFRyaWdnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzLCBhbmltYXRpb24pIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5zdGFydCA9IDA7XG4gICAgdGhpcy52YXJzICYmIHRoaXMua2lsbCh0cnVlLCB0cnVlKTsgLy8gaW4gY2FzZSBpdCdzIGJlaW5nIGluaXR0ZWQgYWdhaW5cblxuICAgIGlmICghX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy5yZWZyZXNoID0gdGhpcy5raWxsID0gX3Bhc3NUaHJvdWdoO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhcnMgPSBfc2V0RGVmYXVsdHMoX2lzU3RyaW5nKHZhcnMpIHx8IF9pc051bWJlcih2YXJzKSB8fCB2YXJzLm5vZGVUeXBlID8ge1xuICAgICAgdHJpZ2dlcjogdmFyc1xuICAgIH0gOiB2YXJzLCBfZGVmYXVsdHMpO1xuXG4gICAgdmFyIF92YXJzID0gdmFycyxcbiAgICAgICAgb25VcGRhdGUgPSBfdmFycy5vblVwZGF0ZSxcbiAgICAgICAgdG9nZ2xlQ2xhc3MgPSBfdmFycy50b2dnbGVDbGFzcyxcbiAgICAgICAgaWQgPSBfdmFycy5pZCxcbiAgICAgICAgb25Ub2dnbGUgPSBfdmFycy5vblRvZ2dsZSxcbiAgICAgICAgb25SZWZyZXNoID0gX3ZhcnMub25SZWZyZXNoLFxuICAgICAgICBzY3J1YiA9IF92YXJzLnNjcnViLFxuICAgICAgICB0cmlnZ2VyID0gX3ZhcnMudHJpZ2dlcixcbiAgICAgICAgcGluID0gX3ZhcnMucGluLFxuICAgICAgICBwaW5TcGFjaW5nID0gX3ZhcnMucGluU3BhY2luZyxcbiAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCA9IF92YXJzLmludmFsaWRhdGVPblJlZnJlc2gsXG4gICAgICAgIGFudGljaXBhdGVQaW4gPSBfdmFycy5hbnRpY2lwYXRlUGluLFxuICAgICAgICBvblNjcnViQ29tcGxldGUgPSBfdmFycy5vblNjcnViQ29tcGxldGUsXG4gICAgICAgIG9uU25hcENvbXBsZXRlID0gX3ZhcnMub25TbmFwQ29tcGxldGUsXG4gICAgICAgIG9uY2UgPSBfdmFycy5vbmNlLFxuICAgICAgICBzbmFwID0gX3ZhcnMuc25hcCxcbiAgICAgICAgcGluUmVwYXJlbnQgPSBfdmFycy5waW5SZXBhcmVudCxcbiAgICAgICAgcGluU3BhY2VyID0gX3ZhcnMucGluU3BhY2VyLFxuICAgICAgICBjb250YWluZXJBbmltYXRpb24gPSBfdmFycy5jb250YWluZXJBbmltYXRpb24sXG4gICAgICAgIGZhc3RTY3JvbGxFbmQgPSBfdmFycy5mYXN0U2Nyb2xsRW5kLFxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgPSBfdmFycy5wcmV2ZW50T3ZlcmxhcHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IHZhcnMuaG9yaXpvbnRhbCB8fCB2YXJzLmNvbnRhaW5lckFuaW1hdGlvbiAmJiB2YXJzLmhvcml6b250YWwgIT09IGZhbHNlID8gX2hvcml6b250YWwgOiBfdmVydGljYWwsXG4gICAgICAgIGlzVG9nZ2xlID0gIXNjcnViICYmIHNjcnViICE9PSAwLFxuICAgICAgICBzY3JvbGxlciA9IF9nZXRUYXJnZXQodmFycy5zY3JvbGxlciB8fCBfd2luKSxcbiAgICAgICAgc2Nyb2xsZXJDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShzY3JvbGxlciksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydChzY3JvbGxlciksXG4gICAgICAgIHVzZUZpeGVkUG9zaXRpb24gPSAoXCJwaW5UeXBlXCIgaW4gdmFycyA/IHZhcnMucGluVHlwZSA6IF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwicGluVHlwZVwiKSB8fCBpc1ZpZXdwb3J0ICYmIFwiZml4ZWRcIikgPT09IFwiZml4ZWRcIixcbiAgICAgICAgY2FsbGJhY2tzID0gW3ZhcnMub25FbnRlciwgdmFycy5vbkxlYXZlLCB2YXJzLm9uRW50ZXJCYWNrLCB2YXJzLm9uTGVhdmVCYWNrXSxcbiAgICAgICAgdG9nZ2xlQWN0aW9ucyA9IGlzVG9nZ2xlICYmIHZhcnMudG9nZ2xlQWN0aW9ucy5zcGxpdChcIiBcIiksXG4gICAgICAgIG1hcmtlcnMgPSBcIm1hcmtlcnNcIiBpbiB2YXJzID8gdmFycy5tYXJrZXJzIDogX2RlZmF1bHRzLm1hcmtlcnMsXG4gICAgICAgIGJvcmRlcldpZHRoID0gaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9uUmVmcmVzaEluaXQgPSB2YXJzLm9uUmVmcmVzaEluaXQgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhcnMub25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICB9LFxuICAgICAgICBnZXRTY3JvbGxlclNpemUgPSBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbiksXG4gICAgICAgIGdldFNjcm9sbGVyT2Zmc2V0cyA9IF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCksXG4gICAgICAgIGxhc3RTbmFwID0gMCxcbiAgICAgICAgbGFzdFJlZnJlc2ggPSAwLFxuICAgICAgICBwcmV2UHJvZ3Jlc3MgPSAwLFxuICAgICAgICBzY3JvbGxGdW5jID0gX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgIHR3ZWVuVG8sXG4gICAgICAgIHBpbkNhY2hlLFxuICAgICAgICBzbmFwRnVuYyxcbiAgICAgICAgc2Nyb2xsMSxcbiAgICAgICAgc2Nyb2xsMixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgbWFya2VyU3RhcnQsXG4gICAgICAgIG1hcmtlckVuZCxcbiAgICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJFbmRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJWYXJzLFxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2gsXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSxcbiAgICAgICAgcGluQWN0aXZlU3RhdGUsXG4gICAgICAgIHBpblN0YXRlLFxuICAgICAgICBzcGFjZXIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgcGluR2V0dGVyLFxuICAgICAgICBwaW5TZXR0ZXIsXG4gICAgICAgIHBpblN0YXJ0LFxuICAgICAgICBwaW5DaGFuZ2UsXG4gICAgICAgIHNwYWNpbmdTdGFydCxcbiAgICAgICAgc3BhY2VyU3RhdGUsXG4gICAgICAgIG1hcmtlclN0YXJ0U2V0dGVyLFxuICAgICAgICBwaW5Nb3ZlcyxcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyLFxuICAgICAgICBjcyxcbiAgICAgICAgc25hcDEsXG4gICAgICAgIHNuYXAyLFxuICAgICAgICBzY3J1YlR3ZWVuLFxuICAgICAgICBzY3J1YlNtb290aCxcbiAgICAgICAgc25hcER1ckNsYW1wLFxuICAgICAgICBzbmFwRGVsYXllZENhbGwsXG4gICAgICAgIHByZXZTY3JvbGwsXG4gICAgICAgIHByZXZBbmltUHJvZ3Jlc3MsXG4gICAgICAgIGNhTWFya2VyU2V0dGVyLFxuICAgICAgICBjdXN0b21SZXZlcnRSZXR1cm47IC8vIGZvciB0aGUgc2FrZSBvZiBlZmZpY2llbmN5LCBfc3RhcnRDbGFtcC9fZW5kQ2xhbXAgc2VydmUgbGlrZSBhIHRydXRoeSB2YWx1ZSBpbmRpY2F0aW5nIHRoYXQgY2xhbXBpbmcgd2FzIGVuYWJsZWQgb24gdGhlIHN0YXJ0L2VuZCwgYW5kIEFMU08gc3RvcmUgdGhlIGFjdHVhbCBwcmUtY2xhbXBlZCBudW1lcmljIHZhbHVlLiBXZSB0YXAgaW50byB0aGF0IGluIFNjcm9sbFNtb290aGVyIGZvciBzcGVlZCBlZmZlY3RzLiBTbyBmb3IgZXhhbXBsZSwgaWYgc3RhcnQ9XCJjbGFtcCh0b3AgYm90dG9tKVwiIHJlc3VsdHMgaW4gYSBzdGFydCBvZiAtMTAwIG5hdHVyYWxseSwgaXQgd291bGQgZ2V0IGNsYW1wZWQgdG8gMCBidXQgLTEwMCB3b3VsZCBiZSBzdG9yZWQgaW4gX3N0YXJ0Q2xhbXAuXG5cblxuICAgIHNlbGYuX3N0YXJ0Q2xhbXAgPSBzZWxmLl9lbmRDbGFtcCA9IGZhbHNlO1xuICAgIHNlbGYuX2RpciA9IGRpcmVjdGlvbjtcbiAgICBhbnRpY2lwYXRlUGluICo9IDQ1O1xuICAgIHNlbGYuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcbiAgICBzZWxmLnNjcm9sbCA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IGNvbnRhaW5lckFuaW1hdGlvbi50aW1lLmJpbmQoY29udGFpbmVyQW5pbWF0aW9uKSA6IHNjcm9sbEZ1bmM7XG4gICAgc2Nyb2xsMSA9IHNjcm9sbEZ1bmMoKTtcbiAgICBzZWxmLnZhcnMgPSB2YXJzO1xuICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCB2YXJzLmFuaW1hdGlvbjtcblxuICAgIGlmIChcInJlZnJlc2hQcmlvcml0eVwiIGluIHZhcnMpIHtcbiAgICAgIF9zb3J0ID0gMTtcbiAgICAgIHZhcnMucmVmcmVzaFByaW9yaXR5ID09PSAtOTk5OSAmJiAoX3ByaW1hcnkgPSBzZWxmKTsgLy8gdXNlZCBieSBTY3JvbGxTbW9vdGhlclxuICAgIH1cblxuICAgIHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGwgPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsIHx8IHtcbiAgICAgIHRvcDogX2dldFR3ZWVuQ3JlYXRvcihzY3JvbGxlciwgX3ZlcnRpY2FsKSxcbiAgICAgIGxlZnQ6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF9ob3Jpem9udGFsKVxuICAgIH07XG4gICAgc2VsZi50d2VlblRvID0gdHdlZW5UbyA9IHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGxbZGlyZWN0aW9uLnBdO1xuXG4gICAgc2VsZi5zY3J1YkR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBzY3J1YlNtb290aCA9IF9pc051bWJlcih2YWx1ZSkgJiYgdmFsdWU7XG5cbiAgICAgIGlmICghc2NydWJTbW9vdGgpIHtcbiAgICAgICAgc2NydWJUd2VlbiAmJiBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpLmtpbGwoKTtcbiAgICAgICAgc2NydWJUd2VlbiA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5kdXJhdGlvbih2YWx1ZSkgOiBzY3J1YlR3ZWVuID0gZ3NhcC50byhhbmltYXRpb24sIHtcbiAgICAgICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgICAgICB0b3RhbFByb2dyZXNzOiBcIis9MFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiBzY3J1YlNtb290aCxcbiAgICAgICAgICBwYXVzZWQ6IHRydWUsXG4gICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBvblNjcnViQ29tcGxldGUgJiYgb25TY3J1YkNvbXBsZXRlKHNlbGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi52YXJzLmxhenkgPSBmYWxzZTtcbiAgICAgIGFuaW1hdGlvbi5faW5pdHRlZCAmJiAhc2VsZi5pc1JldmVydGVkIHx8IGFuaW1hdGlvbi52YXJzLmltbWVkaWF0ZVJlbmRlciAhPT0gZmFsc2UgJiYgdmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIGFuaW1hdGlvbi5kdXJhdGlvbigpICYmIGFuaW1hdGlvbi5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogaWYgdGhpcyBTY3JvbGxUcmlnZ2VyIGdldHMgcmUtaW5pdHRlZCwgYSBmcm9tKCkgdHdlZW4gd2l0aCBhIHN0YWdnZXIgY291bGQgZ2V0IGluaXR0ZWQgaW5pdGlhbGx5IGFuZCB0aGVuIHJldmVydGVkIG9uIHRoZSByZS1pbml0IHdoaWNoIG1lYW5zIGl0J2xsIG5lZWQgdG8gZ2V0IHJlbmRlcmVkIGFnYWluIGhlcmUgdG8gcHJvcGVybHkgZGlzcGxheSB0aGluZ3MuIE90aGVyd2lzZSwgU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMzY3Nzctc2Nyb2xsc21vb3RoZXItc3BsaXR0ZXh0LW5leHRqcy8gYW5kIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL2VZUHlQcGQ/ZWRpdG9ycz0wMDEwXG5cbiAgICAgIHNlbGYuYW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IHNlbGY7XG4gICAgICBzZWxmLnNjcnViRHVyYXRpb24oc2NydWIpO1xuICAgICAgc25hcDEgPSAwO1xuICAgICAgaWQgfHwgKGlkID0gYW5pbWF0aW9uLnZhcnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChzbmFwKSB7XG4gICAgICAvLyBUT0RPOiBwb3RlbnRpYWwgaWRlYTogdXNlIGxlZ2l0aW1hdGUgQ1NTIHNjcm9sbCBzbmFwcGluZyBieSBwdXNoaW5nIGludmlzaWJsZSBlbGVtZW50cyBpbnRvIHRoZSBET00gdGhhdCBzZXJ2ZSBhcyBzbmFwIHBvc2l0aW9ucywgYW5kIHRvZ2dsZSB0aGUgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSBvblRvZ2dsZS4gU2VlIGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuL0pqTHJnV00gZm9yIGEgcXVpY2sgcHJvb2Ygb2YgY29uY2VwdC5cbiAgICAgIGlmICghX2lzT2JqZWN0KHNuYXApIHx8IHNuYXAucHVzaCkge1xuICAgICAgICBzbmFwID0ge1xuICAgICAgICAgIHNuYXBUbzogc25hcFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBcInNjcm9sbEJlaGF2aW9yXCIgaW4gX2JvZHkuc3R5bGUgJiYgZ3NhcC5zZXQoaXNWaWV3cG9ydCA/IFtfYm9keSwgX2RvY0VsXSA6IHNjcm9sbGVyLCB7XG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiBcImF1dG9cIlxuICAgICAgfSk7IC8vIHNtb290aCBzY3JvbGxpbmcgZG9lc24ndCB3b3JrIHdpdGggc25hcC5cblxuICAgICAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBfaXNGdW5jdGlvbihvKSAmJiBvLnRhcmdldCA9PT0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpICYmIChvLnNtb290aCA9IGZhbHNlKTtcbiAgICAgIH0pOyAvLyBub3RlOiBzZXQgc21vb3RoIHRvIGZhbHNlIG9uIGJvdGggdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHNjcm9sbCBnZXR0ZXJzL3NldHRlcnNcblxuXG4gICAgICBzbmFwRnVuYyA9IF9pc0Z1bmN0aW9uKHNuYXAuc25hcFRvKSA/IHNuYXAuc25hcFRvIDogc25hcC5zbmFwVG8gPT09IFwibGFiZWxzXCIgPyBfZ2V0Q2xvc2VzdExhYmVsKGFuaW1hdGlvbikgOiBzbmFwLnNuYXBUbyA9PT0gXCJsYWJlbHNEaXJlY3Rpb25hbFwiID8gX2dldExhYmVsQXREaXJlY3Rpb24oYW5pbWF0aW9uKSA6IHNuYXAuZGlyZWN0aW9uYWwgIT09IGZhbHNlID8gZnVuY3Rpb24gKHZhbHVlLCBzdCkge1xuICAgICAgICByZXR1cm4gX3NuYXBEaXJlY3Rpb25hbChzbmFwLnNuYXBUbykodmFsdWUsIF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCA/IDAgOiBzdC5kaXJlY3Rpb24pO1xuICAgICAgfSA6IGdzYXAudXRpbHMuc25hcChzbmFwLnNuYXBUbyk7XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBzbmFwLmR1cmF0aW9uIHx8IHtcbiAgICAgICAgbWluOiAwLjEsXG4gICAgICAgIG1heDogMlxuICAgICAgfTtcbiAgICAgIHNuYXBEdXJDbGFtcCA9IF9pc09iamVjdChzbmFwRHVyQ2xhbXApID8gX2NsYW1wKHNuYXBEdXJDbGFtcC5taW4sIHNuYXBEdXJDbGFtcC5tYXgpIDogX2NsYW1wKHNuYXBEdXJDbGFtcCwgc25hcER1ckNsYW1wKTtcbiAgICAgIHNuYXBEZWxheWVkQ2FsbCA9IGdzYXAuZGVsYXllZENhbGwoc25hcC5kZWxheSB8fCBzY3J1YlNtb290aCAvIDIgfHwgMC4xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSBzY3JvbGxGdW5jKCksXG4gICAgICAgICAgICByZWZyZXNoZWRSZWNlbnRseSA9IF9nZXRUaW1lKCkgLSBsYXN0UmVmcmVzaCA8IDUwMCxcbiAgICAgICAgICAgIHR3ZWVuID0gdHdlZW5Uby50d2VlbjtcblxuICAgICAgICBpZiAoKHJlZnJlc2hlZFJlY2VudGx5IHx8IE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPCAxMCkgJiYgIXR3ZWVuICYmICFfcG9pbnRlcklzRG93biAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNjcm9sbCAtIHN0YXJ0KSAvIGNoYW5nZSxcbiAgICAgICAgICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIHZlbG9jaXR5ID0gcmVmcmVzaGVkUmVjZW50bHkgPyAwIDogKHRvdGFsUHJvZ3Jlc3MgLSBzbmFwMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDAsXG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBnc2FwLnV0aWxzLmNsYW1wKC1wcm9ncmVzcywgMSAtIHByb2dyZXNzLCBfYWJzKHZlbG9jaXR5IC8gMikgKiB2ZWxvY2l0eSAvIDAuMTg1KSxcbiAgICAgICAgICAgICAgbmF0dXJhbEVuZCA9IHByb2dyZXNzICsgKHNuYXAuaW5lcnRpYSA9PT0gZmFsc2UgPyAwIDogY2hhbmdlMSksXG4gICAgICAgICAgICAgIGVuZFZhbHVlID0gX2NsYW1wKDAsIDEsIHNuYXBGdW5jKG5hdHVyYWxFbmQsIHNlbGYpKSxcbiAgICAgICAgICAgICAgZW5kU2Nyb2xsID0gTWF0aC5yb3VuZChzdGFydCArIGVuZFZhbHVlICogY2hhbmdlKSxcbiAgICAgICAgICAgICAgX3NuYXAgPSBzbmFwLFxuICAgICAgICAgICAgICBvblN0YXJ0ID0gX3NuYXAub25TdGFydCxcbiAgICAgICAgICAgICAgX29uSW50ZXJydXB0ID0gX3NuYXAub25JbnRlcnJ1cHQsXG4gICAgICAgICAgICAgIF9vbkNvbXBsZXRlID0gX3NuYXAub25Db21wbGV0ZTtcblxuICAgICAgICAgIGlmIChzY3JvbGwgPD0gZW5kICYmIHNjcm9sbCA+PSBzdGFydCAmJiBlbmRTY3JvbGwgIT09IHNjcm9sbCkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuICYmICF0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5kYXRhIDw9IF9hYnMoZW5kU2Nyb2xsIC0gc2Nyb2xsKSkge1xuICAgICAgICAgICAgICAvLyB0aGVyZSdzIGFuIG92ZXJsYXBwaW5nIHNuYXAhIFNvIHdlIG11c3QgZmlndXJlIG91dCB3aGljaCBvbmUgaXMgY2xvc2VyIGFuZCBsZXQgdGhhdCB0d2VlbiBsaXZlLlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbmFwLmluZXJ0aWEgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNoYW5nZTEgPSBlbmRWYWx1ZSAtIHByb2dyZXNzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0d2VlblRvKGVuZFNjcm9sbCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogc25hcER1ckNsYW1wKF9hYnMoTWF0aC5tYXgoX2FicyhuYXR1cmFsRW5kIC0gdG90YWxQcm9ncmVzcyksIF9hYnMoZW5kVmFsdWUgLSB0b3RhbFByb2dyZXNzKSkgKiAwLjE4NSAvIHZlbG9jaXR5IC8gMC4wNSB8fCAwKSksXG4gICAgICAgICAgICAgIGVhc2U6IHNuYXAuZWFzZSB8fCBcInBvd2VyM1wiLFxuICAgICAgICAgICAgICBkYXRhOiBfYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCksXG4gICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgZGlzdGFuY2Ugc28gdGhhdCBpZiBhbm90aGVyIHNuYXAgdHdlZW4gb2NjdXJzIChjb25mbGljdCkgd2UgY2FuIHByaW9yaXRpemUgdGhlIGNsb3Nlc3Qgc25hcC5cbiAgICAgICAgICAgICAgb25JbnRlcnJ1cHQ6IGZ1bmN0aW9uIG9uSW50ZXJydXB0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKSAmJiBfb25JbnRlcnJ1cHQgJiYgX29uSW50ZXJydXB0KHNlbGYpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgICAgICAgICAgc25hcDEgPSBzbmFwMiA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogc2VsZi5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBvblNuYXBDb21wbGV0ZSAmJiBvblNuYXBDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgICBfb25Db21wbGV0ZSAmJiBfb25Db21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc2Nyb2xsLCBjaGFuZ2UxICogY2hhbmdlLCBlbmRTY3JvbGwgLSBzY3JvbGwgLSBjaGFuZ2UxICogY2hhbmdlKTtcbiAgICAgICAgICAgIG9uU3RhcnQgJiYgb25TdGFydChzZWxmLCB0d2VlblRvLnR3ZWVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0FjdGl2ZSAmJiBsYXN0U25hcCAhPT0gc2Nyb2xsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWQgJiYgKF9pZHNbaWRdID0gc2VsZik7XG4gICAgdHJpZ2dlciA9IHNlbGYudHJpZ2dlciA9IF9nZXRUYXJnZXQodHJpZ2dlciB8fCBwaW4gIT09IHRydWUgJiYgcGluKTsgLy8gaWYgYSB0cmlnZ2VyIGhhcyBzb21lIGtpbmQgb2Ygc2Nyb2xsLXJlbGF0ZWQgZWZmZWN0IGFwcGxpZWQgdGhhdCBjb3VsZCBjb250YW1pbmF0ZSB0aGUgXCJ5XCIgb3IgXCJ4XCIgcG9zaXRpb24gKGxpa2UgYSBTY3JvbGxTbW9vdGhlciBlZmZlY3QpLCB3ZSBuZWVkZWQgYSB3YXkgdG8gdGVtcG9yYXJpbHkgcmV2ZXJ0IGl0LCBzbyB3ZSB1c2UgdGhlIHN0UmV2ZXJ0IHByb3BlcnR5IG9mIHRoZSBnc0NhY2hlLiBJdCBjYW4gcmV0dXJuIGFub3RoZXIgZnVuY3Rpb24gdGhhdCB3ZSdsbCBjYWxsIGF0IHRoZSBlbmQgc28gaXQgY2FuIHJldHVybiB0byBpdHMgbm9ybWFsIHN0YXRlLlxuXG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuID0gdHJpZ2dlciAmJiB0cmlnZ2VyLl9nc2FwICYmIHRyaWdnZXIuX2dzYXAuc3RSZXZlcnQ7XG4gICAgY3VzdG9tUmV2ZXJ0UmV0dXJuICYmIChjdXN0b21SZXZlcnRSZXR1cm4gPSBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZikpO1xuICAgIHBpbiA9IHBpbiA9PT0gdHJ1ZSA/IHRyaWdnZXIgOiBfZ2V0VGFyZ2V0KHBpbik7XG4gICAgX2lzU3RyaW5nKHRvZ2dsZUNsYXNzKSAmJiAodG9nZ2xlQ2xhc3MgPSB7XG4gICAgICB0YXJnZXRzOiB0cmlnZ2VyLFxuICAgICAgY2xhc3NOYW1lOiB0b2dnbGVDbGFzc1xuICAgIH0pO1xuXG4gICAgaWYgKHBpbikge1xuICAgICAgcGluU3BhY2luZyA9PT0gZmFsc2UgfHwgcGluU3BhY2luZyA9PT0gX21hcmdpbiB8fCAocGluU3BhY2luZyA9ICFwaW5TcGFjaW5nICYmIHBpbi5wYXJlbnROb2RlICYmIHBpbi5wYXJlbnROb2RlLnN0eWxlICYmIF9nZXRDb21wdXRlZFN0eWxlKHBpbi5wYXJlbnROb2RlKS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IGZhbHNlIDogX3BhZGRpbmcpOyAvLyBpZiB0aGUgcGFyZW50IGlzIGRpc3BsYXk6IGZsZXgsIGRvbid0IGFwcGx5IHBpblNwYWNpbmcgYnkgZGVmYXVsdC4gV2Ugc2hvdWxkIGNoZWNrIHRoYXQgcGluLnBhcmVudE5vZGUgaXMgYW4gZWxlbWVudCAobm90IHNoYWRvdyBkb20gd2luZG93KVxuXG4gICAgICBzZWxmLnBpbiA9IHBpbjtcbiAgICAgIHBpbkNhY2hlID0gZ3NhcC5jb3JlLmdldENhY2hlKHBpbik7XG5cbiAgICAgIGlmICghcGluQ2FjaGUuc3BhY2VyKSB7XG4gICAgICAgIC8vIHJlY29yZCB0aGUgc3BhY2VyIGFuZCBwaW5PcmlnaW5hbFN0YXRlIG9uIHRoZSBjYWNoZSBpbiBjYXNlIHNvbWVvbmUgdHJpZXMgcGlubmluZyB0aGUgc2FtZSBlbGVtZW50IHdpdGggTVVMVElQTEUgU2Nyb2xsVHJpZ2dlcnMgLSB3ZSBkb24ndCB3YW50IHRvIGhhdmUgbXVsdGlwbGUgc3BhY2VycyBvciByZWNvcmQgdGhlIFwib3JpZ2luYWxcIiBwaW4gc3RhdGUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBhZmZlY3RlZCBieSBhbm90aGVyIFNjcm9sbFRyaWdnZXIuXG4gICAgICAgIGlmIChwaW5TcGFjZXIpIHtcbiAgICAgICAgICBwaW5TcGFjZXIgPSBfZ2V0VGFyZ2V0KHBpblNwYWNlcik7XG4gICAgICAgICAgcGluU3BhY2VyICYmICFwaW5TcGFjZXIubm9kZVR5cGUgJiYgKHBpblNwYWNlciA9IHBpblNwYWNlci5jdXJyZW50IHx8IHBpblNwYWNlci5uYXRpdmVFbGVtZW50KTsgLy8gZm9yIFJlYWN0ICYgQW5ndWxhclxuXG4gICAgICAgICAgcGluQ2FjaGUuc3BhY2VySXNOYXRpdmUgPSAhIXBpblNwYWNlcjtcbiAgICAgICAgICBwaW5TcGFjZXIgJiYgKHBpbkNhY2hlLnNwYWNlclN0YXRlID0gX2dldFN0YXRlKHBpblNwYWNlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGluQ2FjaGUuc3BhY2VyID0gc3BhY2VyID0gcGluU3BhY2VyIHx8IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJwaW4tc3BhY2VyXCIpO1xuICAgICAgICBpZCAmJiBzcGFjZXIuY2xhc3NMaXN0LmFkZChcInBpbi1zcGFjZXItXCIgKyBpZCk7XG4gICAgICAgIHBpbkNhY2hlLnBpblN0YXRlID0gcGluT3JpZ2luYWxTdGF0ZSA9IF9nZXRTdGF0ZShwaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGluT3JpZ2luYWxTdGF0ZSA9IHBpbkNhY2hlLnBpblN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXJzLmZvcmNlM0QgIT09IGZhbHNlICYmIGdzYXAuc2V0KHBpbiwge1xuICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3BhY2VyID0gc3BhY2VyID0gcGluQ2FjaGUuc3BhY2VyO1xuICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgc3BhY2luZ1N0YXJ0ID0gY3NbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdO1xuICAgICAgcGluR2V0dGVyID0gZ3NhcC5nZXRQcm9wZXJ0eShwaW4pO1xuICAgICAgcGluU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihwaW4sIGRpcmVjdGlvbi5hLCBfcHgpOyAvLyBwaW4uZmlyc3RDaGlsZCAmJiAhX21heFNjcm9sbChwaW4sIGRpcmVjdGlvbikgJiYgKHBpbi5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCIpOyAvLyBwcm90ZWN0cyBmcm9tIGNvbGxhcHNpbmcgbWFyZ2lucywgYnV0IGNhbiBoYXZlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi8xZTQyYzdhNzNiZmE0MDlkMmNmMWUxODRlN2E0MjQ4ZCBzbyBpdCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiBqdXN0IHRlbGxpbmcgcGVvcGxlIHRvIHNldCB1cCB0aGVpciBDU1MgdG8gYXZvaWQgdGhlIGNvbGxhcHNpbmcgbWFyZ2lucyAob3ZlcmZsb3c6IGhpZGRlbiB8IGF1dG8gaXMganVzdCBvbmUgb3B0aW9uLiBBbm90aGVyIGlzIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudCkuXG5cbiAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgcGluU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcbiAgICB9XG5cbiAgICBpZiAobWFya2Vycykge1xuICAgICAgbWFya2VyVmFycyA9IF9pc09iamVjdChtYXJrZXJzKSA/IF9zZXREZWZhdWx0cyhtYXJrZXJzLCBfbWFya2VyRGVmYXVsdHMpIDogX21hcmtlckRlZmF1bHRzO1xuICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLXN0YXJ0XCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwKTtcbiAgICAgIG1hcmtlckVuZFRyaWdnZXIgPSBfY3JlYXRlTWFya2VyKFwic2Nyb2xsZXItZW5kXCIsIGlkLCBzY3JvbGxlciwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCAwLCBtYXJrZXJTdGFydFRyaWdnZXIpO1xuICAgICAgb2Zmc2V0ID0gbWFya2VyU3RhcnRUcmlnZ2VyW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gICAgICB2YXIgY29udGVudCA9IF9nZXRUYXJnZXQoX2dldFByb3h5UHJvcChzY3JvbGxlciwgXCJjb250ZW50XCIpIHx8IHNjcm9sbGVyKTtcblxuICAgICAgbWFya2VyU3RhcnQgPSB0aGlzLm1hcmtlclN0YXJ0ID0gX2NyZWF0ZU1hcmtlcihcInN0YXJ0XCIsIGlkLCBjb250ZW50LCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIG9mZnNldCwgMCwgY29udGFpbmVyQW5pbWF0aW9uKTtcbiAgICAgIG1hcmtlckVuZCA9IHRoaXMubWFya2VyRW5kID0gX2NyZWF0ZU1hcmtlcihcImVuZFwiLCBpZCwgY29udGVudCwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCBvZmZzZXQsIDAsIGNvbnRhaW5lckFuaW1hdGlvbik7XG4gICAgICBjb250YWluZXJBbmltYXRpb24gJiYgKGNhTWFya2VyU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihbbWFya2VyU3RhcnQsIG1hcmtlckVuZF0sIGRpcmVjdGlvbi5hLCBfcHgpKTtcblxuICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uICYmICEoX3Byb3hpZXMubGVuZ3RoICYmIF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiZml4ZWRNYXJrZXJzXCIpID09PSB0cnVlKSkge1xuICAgICAgICBfbWFrZVBvc2l0aW9uYWJsZShpc1ZpZXdwb3J0ID8gX2JvZHkgOiBzY3JvbGxlcik7XG5cbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0sIHtcbiAgICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gICAgICB2YXIgb2xkT25VcGRhdGUgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZSxcbiAgICAgICAgICBvbGRQYXJhbXMgPSBjb250YWluZXJBbmltYXRpb24udmFycy5vblVwZGF0ZVBhcmFtcztcbiAgICAgIGNvbnRhaW5lckFuaW1hdGlvbi5ldmVudENhbGxiYWNrKFwib25VcGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZSgwLCAwLCAxKTtcbiAgICAgICAgb2xkT25VcGRhdGUgJiYgb2xkT25VcGRhdGUuYXBwbHkoY29udGFpbmVyQW5pbWF0aW9uLCBvbGRQYXJhbXMgfHwgW10pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5wcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdHJpZ2dlcnNbX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikgLSAxXTtcbiAgICB9O1xuXG4gICAgc2VsZi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90cmlnZ2Vyc1tfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSArIDFdO1xuICAgIH07XG5cbiAgICBzZWxmLnJldmVydCA9IGZ1bmN0aW9uIChyZXZlcnQsIHRlbXApIHtcbiAgICAgIGlmICghdGVtcCkge1xuICAgICAgICByZXR1cm4gc2VsZi5raWxsKHRydWUpO1xuICAgICAgfSAvLyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGdzYXAuY29udGV4dCgpIGFuZCBnc2FwLm1hdGNoTWVkaWEoKSB3aGljaCBjYWxsIHJldmVydCgpXG5cblxuICAgICAgdmFyIHIgPSByZXZlcnQgIT09IGZhbHNlIHx8ICFzZWxmLmVuYWJsZWQsXG4gICAgICAgICAgcHJldlJlZnJlc2hpbmcgPSBfcmVmcmVzaGluZztcblxuICAgICAgaWYgKHIgIT09IHNlbGYuaXNSZXZlcnRlZCkge1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHByZXZTY3JvbGwgPSBNYXRoLm1heChzY3JvbGxGdW5jKCksIHNlbGYuc2Nyb2xsLnJlYyB8fCAwKTsgLy8gcmVjb3JkIHRoZSBzY3JvbGwgc28gd2UgY2FuIHJldmVydCBsYXRlciAocmVwb3NpdGlvbmluZy9waW5uaW5nIHRoaW5ncyBjYW4gYWZmZWN0IHNjcm9sbCBwb3NpdGlvbikuIEluIHRoZSBzdGF0aWMgcmVmcmVzaCgpIG1ldGhvZCwgd2UgZmlyc3QgcmVjb3JkIGFsbCB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhcyBhIHJlZmVyZW5jZS5cblxuICAgICAgICAgIHByZXZQcm9ncmVzcyA9IHNlbGYucHJvZ3Jlc3M7XG4gICAgICAgICAgcHJldkFuaW1Qcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtlclN0YXJ0ICYmIFttYXJrZXJTdGFydCwgbWFya2VyRW5kLCBtYXJrZXJTdGFydFRyaWdnZXIsIG1hcmtlckVuZFRyaWdnZXJdLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5zdHlsZS5kaXNwbGF5ID0gciA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocikge1xuICAgICAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcbiAgICAgICAgICBzZWxmLnVwZGF0ZShyKTsgLy8gbWFrZSBzdXJlIHRoZSBwaW4gaXMgYmFjayBpbiBpdHMgb3JpZ2luYWwgcG9zaXRpb24gc28gdGhhdCBhbGwgdGhlIG1lYXN1cmVtZW50cyBhcmUgY29ycmVjdC4gZG8gdGhpcyBCRUZPUkUgc3dhcHBpbmcgdGhlIHBpbiBvdXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaW4gJiYgKCFwaW5SZXBhcmVudCB8fCAhc2VsZi5pc0FjdGl2ZSkpIHtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHBpbk9yaWdpbmFsU3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pLCBzcGFjZXJTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgciB8fCBzZWxmLnVwZGF0ZShyKTsgLy8gd2hlbiB3ZSdyZSByZXN0b3JpbmcsIHRoZSB1cGRhdGUgc2hvdWxkIHJ1biBBRlRFUiBzd2FwcGluZyB0aGUgcGluIGludG8gaXRzIHBpbi1zcGFjZXIuXG5cbiAgICAgICAgX3JlZnJlc2hpbmcgPSBwcmV2UmVmcmVzaGluZzsgLy8gcmVzdG9yZS4gV2Ugc2V0IGl0IHRvIHRydWUgZHVyaW5nIHRoZSB1cGRhdGUoKSBzbyB0aGF0IHRoaW5ncyBmaXJlIHByb3Blcmx5IGluIHRoZXJlLlxuXG4gICAgICAgIHNlbGYuaXNSZXZlcnRlZCA9IHI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucmVmcmVzaCA9IGZ1bmN0aW9uIChzb2Z0LCBmb3JjZSwgcG9zaXRpb24sIHBpbk9mZnNldCkge1xuICAgICAgLy8gcG9zaXRpb24gaXMgdHlwaWNhbGx5IG9ubHkgZGVmaW5lZCBpZiBpdCdzIGNvbWluZyBmcm9tIHNldFBvc2l0aW9ucygpIC0gaXQncyBhIHdheSB0byBza2lwIHRoZSBub3JtYWwgcGFyc2luZy4gcGluT2Zmc2V0IGlzIGFsc28gb25seSBmcm9tIHNldFBvc2l0aW9ucygpIGFuZCBpcyBtb3N0bHkgcmVsYXRlZCB0byBmYW5jeSBzdHVmZiB3ZSBuZWVkIHRvIGRvIGluIFNjcm9sbFNtb290aGVyIHdpdGggZWZmZWN0c1xuICAgICAgaWYgKChfcmVmcmVzaGluZyB8fCAhc2VsZi5lbmFibGVkKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluICYmIHNvZnQgJiYgX2xhc3RTY3JvbGxUaW1lKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInNjcm9sbEVuZFwiLCBfc29mdFJlZnJlc2gpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgIV9yZWZyZXNoaW5nQWxsICYmIG9uUmVmcmVzaEluaXQgJiYgb25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICAgIF9yZWZyZXNoaW5nID0gc2VsZjtcblxuICAgICAgaWYgKHR3ZWVuVG8udHdlZW4gJiYgIXBvc2l0aW9uKSB7XG4gICAgICAgIC8vIHdlIHNraXAgdGhpcyBpZiBhIHBvc2l0aW9uIGlzIHBhc3NlZCBpbiBiZWNhdXNlIHR5cGljYWxseSB0aGF0J3MgZnJvbSAuc2V0UG9zaXRpb25zKCkgYW5kIGl0J3MgYmVzdCB0byBhbGxvdyBpbi1wcm9ncmVzcyBzbmFwcGluZyB0byBjb250aW51ZS5cbiAgICAgICAgdHdlZW5Uby50d2Vlbi5raWxsKCk7XG4gICAgICAgIHR3ZWVuVG8udHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcbiAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggJiYgYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICBraWxsOiBmYWxzZVxuICAgICAgfSkuaW52YWxpZGF0ZSgpO1xuICAgICAgc2VsZi5pc1JldmVydGVkIHx8IHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgc2VsZi5fc3ViUGluT2Zmc2V0ID0gZmFsc2U7IC8vIHdlJ2xsIHNldCB0aGlzIHRvIHRydWUgaW4gdGhlIHN1Yi1waW5zIGlmIHdlIGZpbmQgYW55XG5cbiAgICAgIHZhciBzaXplID0gZ2V0U2Nyb2xsZXJTaXplKCksXG4gICAgICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBnZXRTY3JvbGxlck9mZnNldHMoKSxcbiAgICAgICAgICBtYXggPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSA6IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgaXNGaXJzdFJlZnJlc2ggPSBjaGFuZ2UgPD0gMC4wMSxcbiAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgIG90aGVyUGluT2Zmc2V0ID0gcGluT2Zmc2V0IHx8IDAsXG4gICAgICAgICAgcGFyc2VkRW5kID0gX2lzT2JqZWN0KHBvc2l0aW9uKSA/IHBvc2l0aW9uLmVuZCA6IHZhcnMuZW5kLFxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB2YXJzLmVuZFRyaWdnZXIgfHwgdHJpZ2dlcixcbiAgICAgICAgICBwYXJzZWRTdGFydCA9IF9pc09iamVjdChwb3NpdGlvbikgPyBwb3NpdGlvbi5zdGFydCA6IHZhcnMuc3RhcnQgfHwgKHZhcnMuc3RhcnQgPT09IDAgfHwgIXRyaWdnZXIgPyAwIDogcGluID8gXCIwIDBcIiA6IFwiMCAxMDAlXCIpLFxuICAgICAgICAgIHBpbm5lZENvbnRhaW5lciA9IHNlbGYucGlubmVkQ29udGFpbmVyID0gdmFycy5waW5uZWRDb250YWluZXIgJiYgX2dldFRhcmdldCh2YXJzLnBpbm5lZENvbnRhaW5lciwgc2VsZiksXG4gICAgICAgICAgdHJpZ2dlckluZGV4ID0gdHJpZ2dlciAmJiBNYXRoLm1heCgwLCBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSkgfHwgMCxcbiAgICAgICAgICBpID0gdHJpZ2dlckluZGV4LFxuICAgICAgICAgIGNzLFxuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBzY3JvbGwsXG4gICAgICAgICAgaXNWZXJ0aWNhbCxcbiAgICAgICAgICBvdmVycmlkZSxcbiAgICAgICAgICBjdXJUcmlnZ2VyLFxuICAgICAgICAgIGN1clBpbixcbiAgICAgICAgICBvcHBvc2l0ZVNjcm9sbCxcbiAgICAgICAgICBpbml0dGVkLFxuICAgICAgICAgIHJldmVydGVkUGlucyxcbiAgICAgICAgICBmb3JjZWRPdmVyZmxvdyxcbiAgICAgICAgICBtYXJrZXJTdGFydE9mZnNldCxcbiAgICAgICAgICBtYXJrZXJFbmRPZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJzICYmIF9pc09iamVjdChwb3NpdGlvbikpIHtcbiAgICAgICAgLy8gaWYgd2UgYWx0ZXIgdGhlIHN0YXJ0L2VuZCBwb3NpdGlvbnMgd2l0aCAuc2V0UG9zaXRpb25zKCksIGl0IGdlbmVyYWxseSBmZWVkcyBpbiBhYnNvbHV0ZSBOVU1CRVJTIHdoaWNoIGRvbid0IGNvbnZleSBpbmZvcm1hdGlvbiBhYm91dCB3aGVyZSB0byBsaW5lIHVwIHRoZSBtYXJrZXJzLCBzbyB0byBrZWVwIGl0IGludHVpdGl2ZSwgd2UgcmVjb3JkIGhvdyBmYXIgdGhlIHRyaWdnZXIgcG9zaXRpb25zIHNoaWZ0IGFmdGVyIGFwcGx5aW5nIHRoZSBuZXcgbnVtYmVycyBhbmQgdGhlbiBvZmZzZXQgYnkgdGhhdCBtdWNoIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uIFdlIGRvIHRoZSBzYW1lIHRvIHRoZSBhc3NvY2lhdGVkIHRyaWdnZXIgbWFya2VycyB0b28gb2YgY291cnNlLlxuICAgICAgICBtYXJrZXJTdGFydE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24ucCk7XG4gICAgICAgIG1hcmtlckVuZE9mZnNldCA9IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIHVzZXIgbWlnaHQgdHJ5IHRvIHBpbiB0aGUgc2FtZSBlbGVtZW50IG1vcmUgdGhhbiBvbmNlLCBzbyB3ZSBtdXN0IGZpbmQgYW55IHByaW9yIHRyaWdnZXJzIHdpdGggdGhlIHNhbWUgcGluLCByZXZlcnQgdGhlbSwgYW5kIGRldGVybWluZSBob3cgbG9uZyB0aGV5J3JlIHBpbm5pbmcgc28gdGhhdCB3ZSBjYW4gb2Zmc2V0IHRoaW5ncyBhcHByb3ByaWF0ZWx5LiBNYWtlIHN1cmUgd2UgcmV2ZXJ0IGZyb20gbGFzdCB0byBmaXJzdCBzbyB0aGF0IHRoaW5ncyBcInJld2luZFwiIHByb3Blcmx5LlxuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJUcmlnZ2VyLmVuZCB8fCBjdXJUcmlnZ2VyLnJlZnJlc2goMCwgMSkgfHwgKF9yZWZyZXNoaW5nID0gc2VsZik7IC8vIGlmIGl0J3MgYSB0aW1lbGluZS1iYXNlZCB0cmlnZ2VyIHRoYXQgaGFzbid0IGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWQgeWV0IGJlY2F1c2UgaXQncyB3YWl0aW5nIGZvciAxIHRpY2ssIGp1c3QgZm9yY2UgdGhlIHJlZnJlc2goKSBoZXJlLCBvdGhlcndpc2UgaWYgaXQgY29udGFpbnMgYSBwaW4gdGhhdCdzIHN1cHBvc2VkIHRvIGFmZmVjdCBvdGhlciBTY3JvbGxUcmlnZ2VycyBmdXJ0aGVyIGRvd24gdGhlIHBhZ2UsIHRoZXkgd29uJ3QgYmUgYWRqdXN0ZWQgcHJvcGVybHkuXG5cbiAgICAgICAgY3VyUGluID0gY3VyVHJpZ2dlci5waW47XG5cbiAgICAgICAgaWYgKGN1clBpbiAmJiAoY3VyUGluID09PSB0cmlnZ2VyIHx8IGN1clBpbiA9PT0gcGluIHx8IGN1clBpbiA9PT0gcGlubmVkQ29udGFpbmVyKSAmJiAhY3VyVHJpZ2dlci5pc1JldmVydGVkKSB7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zIHx8IChyZXZlcnRlZFBpbnMgPSBbXSk7XG4gICAgICAgICAgcmV2ZXJ0ZWRQaW5zLnVuc2hpZnQoY3VyVHJpZ2dlcik7IC8vIHdlJ2xsIHJldmVydCBmcm9tIGZpcnN0IHRvIGxhc3QgdG8gbWFrZSBzdXJlIHRoaW5ncyByZWFjaCB0aGVpciBlbmQgc3RhdGUgcHJvcGVybHlcblxuICAgICAgICAgIGN1clRyaWdnZXIucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clRyaWdnZXIgIT09IF90cmlnZ2Vyc1tpXSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgaXQgZ290IHJlbW92ZWQuXG4gICAgICAgICAgdHJpZ2dlckluZGV4LS07XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9pc0Z1bmN0aW9uKHBhcnNlZFN0YXJ0KSAmJiAocGFyc2VkU3RhcnQgPSBwYXJzZWRTdGFydChzZWxmKSk7XG4gICAgICBwYXJzZWRTdGFydCA9IF9wYXJzZUNsYW1wKHBhcnNlZFN0YXJ0LCBcInN0YXJ0XCIsIHNlbGYpO1xuICAgICAgc3RhcnQgPSBfcGFyc2VQb3NpdGlvbihwYXJzZWRTdGFydCwgdHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzY3JvbGxGdW5jKCksIG1hcmtlclN0YXJ0LCBtYXJrZXJTdGFydFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgXCJfc3RhcnRDbGFtcFwiKSB8fCAocGluID8gLTAuMDAxIDogMCk7XG4gICAgICBfaXNGdW5jdGlvbihwYXJzZWRFbmQpICYmIChwYXJzZWRFbmQgPSBwYXJzZWRFbmQoc2VsZikpO1xuXG4gICAgICBpZiAoX2lzU3RyaW5nKHBhcnNlZEVuZCkgJiYgIXBhcnNlZEVuZC5pbmRleE9mKFwiKz1cIikpIHtcbiAgICAgICAgaWYgKH5wYXJzZWRFbmQuaW5kZXhPZihcIiBcIikpIHtcbiAgICAgICAgICBwYXJzZWRFbmQgPSAoX2lzU3RyaW5nKHBhcnNlZFN0YXJ0KSA/IHBhcnNlZFN0YXJ0LnNwbGl0KFwiIFwiKVswXSA6IFwiXCIpICsgcGFyc2VkRW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCA9IF9vZmZzZXRUb1B4KHBhcnNlZEVuZC5zdWJzdHIoMiksIHNpemUpO1xuICAgICAgICAgIHBhcnNlZEVuZCA9IF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydCA6IChjb250YWluZXJBbmltYXRpb24gPyBnc2FwLnV0aWxzLm1hcFJhbmdlKDAsIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLCBjb250YWluZXJBbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5zdGFydCwgY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuZW5kLCBzdGFydCkgOiBzdGFydCkgKyBvZmZzZXQ7IC8vIF9wYXJzZVBvc2l0aW9uIHdvbid0IGZhY3RvciBpbiB0aGUgb2Zmc2V0IGlmIHRoZSBzdGFydCBpcyBhIG51bWJlciwgc28gZG8gaXQgaGVyZS5cblxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZEVuZCA9IF9wYXJzZUNsYW1wKHBhcnNlZEVuZCwgXCJlbmRcIiwgc2VsZik7XG4gICAgICBlbmQgPSBNYXRoLm1heChzdGFydCwgX3BhcnNlUG9zaXRpb24ocGFyc2VkRW5kIHx8IChwYXJzZWRFbmRUcmlnZ2VyID8gXCIxMDAlIDBcIiA6IG1heCksIHBhcnNlZEVuZFRyaWdnZXIsIHNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsRnVuYygpICsgb2Zmc2V0LCBtYXJrZXJFbmQsIG1hcmtlckVuZFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4LCBjb250YWluZXJBbmltYXRpb24sIHNlbGYuX2VuZENsYW1wICYmIFwiX2VuZENsYW1wXCIpKSB8fCAtMC4wMDE7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgICAgaSA9IHRyaWdnZXJJbmRleDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjdXJUcmlnZ2VyID0gX3RyaWdnZXJzW2ldO1xuICAgICAgICBjdXJQaW4gPSBjdXJUcmlnZ2VyLnBpbjtcblxuICAgICAgICBpZiAoY3VyUGluICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDw9IHN0YXJ0ICYmICFjb250YWluZXJBbmltYXRpb24gJiYgY3VyVHJpZ2dlci5lbmQgPiAwKSB7XG4gICAgICAgICAgY3MgPSBjdXJUcmlnZ2VyLmVuZCAtIChzZWxmLl9zdGFydENsYW1wID8gTWF0aC5tYXgoMCwgY3VyVHJpZ2dlci5zdGFydCkgOiBjdXJUcmlnZ2VyLnN0YXJ0KTtcblxuICAgICAgICAgIGlmICgoY3VyUGluID09PSB0cmlnZ2VyICYmIGN1clRyaWdnZXIuc3RhcnQgLSBjdXJUcmlnZ2VyLl9waW5QdXNoIDwgc3RhcnQgfHwgY3VyUGluID09PSBwaW5uZWRDb250YWluZXIpICYmIGlzTmFOKHBhcnNlZFN0YXJ0KSkge1xuICAgICAgICAgICAgLy8gbnVtZXJpYyBzdGFydCB2YWx1ZXMgc2hvdWxkbid0IGJlIG9mZnNldCBhdCBhbGwgLSB0cmVhdCB0aGVtIGFzIGFic29sdXRlXG4gICAgICAgICAgICBvZmZzZXQgKz0gY3MgKiAoMSAtIGN1clRyaWdnZXIucHJvZ3Jlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1clBpbiA9PT0gcGluICYmIChvdGhlclBpbk9mZnNldCArPSBjcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gb2Zmc2V0O1xuICAgICAgZW5kICs9IG9mZnNldDtcbiAgICAgIHNlbGYuX3N0YXJ0Q2xhbXAgJiYgKHNlbGYuX3N0YXJ0Q2xhbXAgKz0gb2Zmc2V0KTtcblxuICAgICAgaWYgKHNlbGYuX2VuZENsYW1wICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzZWxmLl9lbmRDbGFtcCA9IGVuZCB8fCAtMC4wMDE7XG4gICAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9IGVuZCAtIHN0YXJ0IHx8IChzdGFydCAtPSAwLjAxKSAmJiAwLjAwMTtcblxuICAgICAgaWYgKGlzRmlyc3RSZWZyZXNoKSB7XG4gICAgICAgIC8vIG9uIHRoZSB2ZXJ5IGZpcnN0IHJlZnJlc2goKSwgdGhlIHByZXZQcm9ncmVzcyBjb3VsZG4ndCBoYXZlIGJlZW4gYWNjdXJhdGUgeWV0IGJlY2F1c2UgdGhlIHN0YXJ0L2VuZCB3ZXJlIG5ldmVyIGNhbGN1bGF0ZWQsIHNvIHdlIHNldCBpdCBoZXJlLiBCZWZvcmUgMy4xMS41LCBpdCBjb3VsZCBsZWFkIHRvIGFuIGluYWNjdXJhdGUgc2Nyb2xsIHBvc2l0aW9uIHJlc3RvcmF0aW9uIHdpdGggc25hcHBpbmcuXG4gICAgICAgIHByZXZQcm9ncmVzcyA9IGdzYXAudXRpbHMuY2xhbXAoMCwgMSwgZ3NhcC51dGlscy5ub3JtYWxpemUoc3RhcnQsIGVuZCwgcHJldlNjcm9sbCkpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9waW5QdXNoID0gb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgIGlmIChtYXJrZXJTdGFydCAmJiBvZmZzZXQpIHtcbiAgICAgICAgLy8gb2Zmc2V0IHRoZSBtYXJrZXJzIGlmIG5lY2Vzc2FyeVxuICAgICAgICBjcyA9IHt9O1xuICAgICAgICBjc1tkaXJlY3Rpb24uYV0gPSBcIis9XCIgKyBvZmZzZXQ7XG4gICAgICAgIHBpbm5lZENvbnRhaW5lciAmJiAoY3NbZGlyZWN0aW9uLnBdID0gXCItPVwiICsgc2Nyb2xsRnVuYygpKTtcbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0LCBtYXJrZXJFbmRdLCBjcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgICBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSBfdmVydGljYWw7XG4gICAgICAgIHNjcm9sbCA9IHNjcm9sbEZ1bmMoKTsgLy8gcmVjYWxjdWxhdGUgYmVjYXVzZSB0aGUgdHJpZ2dlcnMgY2FuIGFmZmVjdCB0aGUgc2Nyb2xsXG5cbiAgICAgICAgcGluU3RhcnQgPSBwYXJzZUZsb2F0KHBpbkdldHRlcihkaXJlY3Rpb24uYSkpICsgb3RoZXJQaW5PZmZzZXQ7XG5cbiAgICAgICAgaWYgKCFtYXggJiYgZW5kID4gMSkge1xuICAgICAgICAgIC8vIG1ha2VzIHN1cmUgdGhlIHNjcm9sbGVyIGhhcyBhIHNjcm9sbGJhciwgb3RoZXJ3aXNlIGlmIHNvbWV0aGluZyBoYXMgd2lkdGg6IDEwMCUsIGZvciBleGFtcGxlLCBpdCB3b3VsZCBiZSB0b28gYmlnIChleGNsdWRlIHRoZSBzY3JvbGxiYXIpLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNTE4Mi1zY3JvbGx0cmlnZ2VyLXdpZHRoLW9mLXBhZ2UtaW5jcmVhc2Utd2hlcmUtbWFya2Vycy1hcmUtc2V0LXRvLWZhbHNlL1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0gKGlzVmlld3BvcnQgPyBfZG9jLnNjcm9sbGluZ0VsZW1lbnQgfHwgX2RvY0VsIDogc2Nyb2xsZXIpLnN0eWxlO1xuICAgICAgICAgIGZvcmNlZE92ZXJmbG93ID0ge1xuICAgICAgICAgICAgc3R5bGU6IGZvcmNlZE92ZXJmbG93LFxuICAgICAgICAgICAgdmFsdWU6IGZvcmNlZE92ZXJmbG93W1wib3ZlcmZsb3dcIiArIGRpcmVjdGlvbi5hLnRvVXBwZXJDYXNlKCldXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc1ZpZXdwb3J0ICYmIF9nZXRDb21wdXRlZFN0eWxlKF9ib2R5KVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSAhPT0gXCJzY3JvbGxcIikge1xuICAgICAgICAgICAgLy8gYXZvaWQgYW4gZXh0cmEgc2Nyb2xsYmFyIGlmIEJPVEggPGh0bWw+IGFuZCA8Ym9keT4gaGF2ZSBvdmVyZmxvdyBzZXQgdG8gXCJzY3JvbGxcIlxuICAgICAgICAgICAgZm9yY2VkT3ZlcmZsb3cuc3R5bGVbXCJvdmVyZmxvd1wiICsgZGlyZWN0aW9uLmEudG9VcHBlckNhc2UoKV0gPSBcInNjcm9sbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgICBwaW5TdGF0ZSA9IF9nZXRTdGF0ZShwaW4pOyAvLyB0cmFuc2Zvcm1zIHdpbGwgaW50ZXJmZXJlIHdpdGggdGhlIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSBwbGFjZW1lbnQsIHNvIHJlbW92ZSB0aGVtIHRlbXBvcmFyaWx5LiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBmYWN0b3JzIGluIHRyYW5zZm9ybXMuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpO1xuICAgICAgICBvcHBvc2l0ZVNjcm9sbCA9IHVzZUZpeGVkUG9zaXRpb24gJiYgX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGlzVmVydGljYWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCkoKTtcblxuICAgICAgICBpZiAocGluU3BhY2luZykge1xuICAgICAgICAgIHNwYWNlclN0YXRlID0gW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyLCBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCArIF9weF07XG4gICAgICAgICAgc3BhY2VyU3RhdGUudCA9IHNwYWNlcjtcbiAgICAgICAgICBpID0gcGluU3BhY2luZyA9PT0gX3BhZGRpbmcgPyBfZ2V0U2l6ZShwaW4sIGRpcmVjdGlvbikgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCA6IDA7XG4gICAgICAgICAgaSAmJiBzcGFjZXJTdGF0ZS5wdXNoKGRpcmVjdGlvbi5kLCBpICsgX3B4KTsgLy8gZm9yIGJveC1zaXppbmc6IGJvcmRlci1ib3ggKG11c3QgaW5jbHVkZSBwYWRkaW5nKS5cblxuICAgICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG5cbiAgICAgICAgICBpZiAocGlubmVkQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBpbiBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSwgd2UgbmVlZCB0byByZS1ldmFsdWF0ZSB0aGUgcGluQ29udGFpbmVyJ3Mgc2l6ZSBiZWNhdXNlIHRoaXMgcGluU3BhY2luZyBtYXkgc3RyZXRjaCBpdCBvdXQsIGJ1dCB3ZSBjYW4ndCBqdXN0IGFkZCB0aGUgZXhhY3QgZGlzdGFuY2UgYmVjYXVzZSBkZXBlbmRpbmcgb24gbGF5b3V0LCBpdCBtYXkgbm90IHB1c2ggdGhpbmdzIGRvd24gb3IgaXQgbWF5IG9ubHkgZG8gc28gcGFydGlhbGx5LlxuICAgICAgICAgICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgaWYgKHQucGluID09PSBwaW5uZWRDb250YWluZXIgJiYgdC52YXJzLnBpblNwYWNpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdC5fc3ViUGluT2Zmc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICBvdmVycmlkZSA9IHtcbiAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCArIChpc1ZlcnRpY2FsID8gc2Nyb2xsIC0gc3RhcnQgOiBvcHBvc2l0ZVNjcm9sbCkgKyBfcHgsXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIChpc1ZlcnRpY2FsID8gb3Bwb3NpdGVTY3JvbGwgOiBzY3JvbGwgLSBzdGFydCkgKyBfcHgsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgb3ZlcnJpZGVbX3dpZHRoXSA9IG92ZXJyaWRlW1wibWF4XCIgKyBfV2lkdGhdID0gTWF0aC5jZWlsKGJvdW5kcy53aWR0aCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX2hlaWdodF0gPSBvdmVycmlkZVtcIm1heFwiICsgX0hlaWdodF0gPSBNYXRoLmNlaWwoYm91bmRzLmhlaWdodCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX21hcmdpbl0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1RvcF0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1JpZ2h0XSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfQm90dG9tXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfTGVmdF0gPSBcIjBcIjtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfVG9wXSA9IGNzW19wYWRkaW5nICsgX1RvcF07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfUmlnaHRdID0gY3NbX3BhZGRpbmcgKyBfUmlnaHRdO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0JvdHRvbV0gPSBjc1tfcGFkZGluZyArIF9Cb3R0b21dO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0xlZnRdID0gY3NbX3BhZGRpbmcgKyBfTGVmdF07XG4gICAgICAgICAgcGluQWN0aXZlU3RhdGUgPSBfY29weVN0YXRlKHBpbk9yaWdpbmFsU3RhdGUsIG92ZXJyaWRlLCBwaW5SZXBhcmVudCk7XG4gICAgICAgICAgX3JlZnJlc2hpbmdBbGwgJiYgc2Nyb2xsRnVuYygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIG1pZ2h0IGJlIGFmZmVjdGluZyB0aGUgdHJhbnNmb3JtLCBzbyB3ZSBtdXN0IGp1bXAgdG8gdGhlIGVuZCwgY2hlY2sgdGhlIHZhbHVlLCBhbmQgY29tcGVuc2F0ZSBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCB3aGVuIGl0IGJlY29tZXMgdW5waW5uZWQsIHRoZSBwaW5TZXR0ZXIoKSB3aWxsIGdldCBzZXQgdG8gYSB2YWx1ZSB0aGF0IGRvZXNuJ3QgaW5jbHVkZSB3aGF0ZXZlciB0aGUgYW5pbWF0aW9uIGRpZC5cbiAgICAgICAgICBpbml0dGVkID0gYW5pbWF0aW9uLl9pbml0dGVkOyAvLyBpZiBub3QsIHdlIG11c3QgaW52YWxpZGF0ZSgpIGFmdGVyIHRoaXMgc3RlcCwgb3RoZXJ3aXNlIGl0IGNvdWxkIGxvY2sgaW4gc3RhcnRpbmcgdmFsdWVzIHByZW1hdHVyZWx5LlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygxKTtcblxuICAgICAgICAgIGFuaW1hdGlvbi5yZW5kZXIoYW5pbWF0aW9uLmR1cmF0aW9uKCksIHRydWUsIHRydWUpO1xuICAgICAgICAgIHBpbkNoYW5nZSA9IHBpbkdldHRlcihkaXJlY3Rpb24uYSkgLSBwaW5TdGFydCArIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0O1xuICAgICAgICAgIHBpbk1vdmVzID0gTWF0aC5hYnMoY2hhbmdlIC0gcGluQ2hhbmdlKSA+IDE7XG4gICAgICAgICAgdXNlRml4ZWRQb3NpdGlvbiAmJiBwaW5Nb3ZlcyAmJiBwaW5BY3RpdmVTdGF0ZS5zcGxpY2UocGluQWN0aXZlU3RhdGUubGVuZ3RoIC0gMiwgMik7IC8vIHRyYW5zZm9ybSBpcyB0aGUgbGFzdCBwcm9wZXJ0eS92YWx1ZSBzZXQgaW4gdGhlIHN0YXRlIEFycmF5LiBTaW5jZSB0aGUgYW5pbWF0aW9uIGlzIGNvbnRyb2xsaW5nIHRoYXQsIHdlIHNob3VsZCBvbWl0IGl0LlxuXG4gICAgICAgICAgYW5pbWF0aW9uLnJlbmRlcigwLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkIHx8IGFuaW1hdGlvbi5pbnZhbGlkYXRlKHRydWUpO1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQgfHwgYW5pbWF0aW9uLnRvdGFsVGltZShhbmltYXRpb24udG90YWxUaW1lKCkpOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGEgdG9nZ2xlQWN0aW9uIGNhbGxlZCBwbGF5KCkgYW5kIHRoZW4gcmVmcmVzaCgpIGhhcHBlbnMgYW5kIHdoZW4gd2UgcmVuZGVyKDEpIGFib3ZlLCBpdCB3b3VsZCBjYXVzZSB0aGUgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGFuZCBnZXQgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQsIHNvIHRoaXMgbWFrZXMgc3VyZSBpdCBnZXRzIHB1dCBiYWNrIGluLlxuXG4gICAgICAgICAgX3N1cHByZXNzT3ZlcndyaXRlcygwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaW5DaGFuZ2UgPSBjaGFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JjZWRPdmVyZmxvdyAmJiAoZm9yY2VkT3ZlcmZsb3cudmFsdWUgPyBmb3JjZWRPdmVyZmxvdy5zdHlsZVtcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXSA9IGZvcmNlZE92ZXJmbG93LnZhbHVlIDogZm9yY2VkT3ZlcmZsb3cuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvdy1cIiArIGRpcmVjdGlvbi5hKSk7XG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgJiYgc2Nyb2xsRnVuYygpICYmICFjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gaXQgbWF5IGJlIElOU0lERSBhIHBpbm5lZCBlbGVtZW50LCBzbyB3YWxrIHVwIHRoZSB0cmVlIGFuZCBsb29rIGZvciBhbnkgZWxlbWVudHMgd2l0aCBfcGluT2Zmc2V0IHRvIGNvbXBlbnNhdGUgYmVjYXVzZSBhbnl0aGluZyB3aXRoIHBpblNwYWNpbmcgdGhhdCdzIGFscmVhZHkgc2Nyb2xsZWQgd291bGQgdGhyb3cgb2ZmIHRoZSBtZWFzdXJlbWVudHMgaW4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgYm91bmRzID0gdHJpZ2dlci5wYXJlbnROb2RlO1xuXG4gICAgICAgIHdoaWxlIChib3VuZHMgJiYgYm91bmRzICE9PSBfYm9keSkge1xuICAgICAgICAgIGlmIChib3VuZHMuX3Bpbk9mZnNldCkge1xuICAgICAgICAgICAgc3RhcnQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgICBlbmQgLT0gYm91bmRzLl9waW5PZmZzZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm91bmRzID0gYm91bmRzLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV2ZXJ0ZWRQaW5zICYmIHJldmVydGVkUGlucy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuc3RhcnQgPSBzdGFydDtcbiAgICAgIHNlbGYuZW5kID0gZW5kO1xuICAgICAgc2Nyb2xsMSA9IHNjcm9sbDIgPSBfcmVmcmVzaGluZ0FsbCA/IHByZXZTY3JvbGwgOiBzY3JvbGxGdW5jKCk7IC8vIHJlc2V0IHZlbG9jaXR5XG5cbiAgICAgIGlmICghY29udGFpbmVyQW5pbWF0aW9uICYmICFfcmVmcmVzaGluZ0FsbCkge1xuICAgICAgICBzY3JvbGwxIDwgcHJldlNjcm9sbCAmJiBzY3JvbGxGdW5jKHByZXZTY3JvbGwpO1xuICAgICAgICBzZWxmLnNjcm9sbC5yZWMgPSAwO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnJldmVydChmYWxzZSwgdHJ1ZSk7XG4gICAgICBsYXN0UmVmcmVzaCA9IF9nZXRUaW1lKCk7XG5cbiAgICAgIGlmIChzbmFwRGVsYXllZENhbGwpIHtcbiAgICAgICAgbGFzdFNuYXAgPSAtMTsgLy8ganVzdCBzbyBzbmFwcGluZyBnZXRzIHJlLWVuYWJsZWQsIGNsZWFyIG91dCBhbnkgcmVjb3JkZWQgbGFzdCB2YWx1ZVxuICAgICAgICAvLyBzZWxmLmlzQWN0aXZlICYmIHNjcm9sbEZ1bmMoc3RhcnQgKyBjaGFuZ2UgKiBwcmV2UHJvZ3Jlc3MpOyAvLyBwcmV2aW91c2x5IHRoaXMgbGluZSB3YXMgaGVyZSB0byBlbnN1cmUgdGhhdCB3aGVuIHNuYXBwaW5nIGtpY2tzIGluLCBpdCdzIGZyb20gdGhlIHByZXZpb3VzIHByb2dyZXNzIGJ1dCBpbiBzb21lIGNhc2VzIHRoYXQncyBub3QgZGVzaXJhYmxlLCBsaWtlIGFuIGFsbC1wYWdlIFNjcm9sbFRyaWdnZXIgd2hlbiBuZXcgY29udGVudCBnZXRzIGFkZGVkIHRvIHRoZSBwYWdlLCB0aGF0J2QgdG90YWxseSBjaGFuZ2UgdGhlIHByb2dyZXNzLlxuXG4gICAgICAgIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBfcmVmcmVzaGluZyA9IDA7XG4gICAgICBhbmltYXRpb24gJiYgaXNUb2dnbGUgJiYgKGFuaW1hdGlvbi5faW5pdHRlZCB8fCBwcmV2QW5pbVByb2dyZXNzKSAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKSAhPT0gcHJldkFuaW1Qcm9ncmVzcyAmJiBhbmltYXRpb24ucHJvZ3Jlc3MocHJldkFuaW1Qcm9ncmVzcyB8fCAwLCB0cnVlKS5yZW5kZXIoYW5pbWF0aW9uLnRpbWUoKSwgdHJ1ZSwgdHJ1ZSk7IC8vIG11c3QgZm9yY2UgYSByZS1yZW5kZXIgYmVjYXVzZSBpZiBzYXZlU3R5bGVzKCkgd2FzIHVzZWQgb24gdGhlIHRhcmdldChzKSwgdGhlIHN0eWxlcyBjb3VsZCBoYXZlIGJlZW4gd2lwZWQgb3V0IGR1cmluZyB0aGUgcmVmcmVzaCgpLlxuXG4gICAgICBpZiAoaXNGaXJzdFJlZnJlc2ggfHwgcHJldlByb2dyZXNzICE9PSBzZWxmLnByb2dyZXNzIHx8IGNvbnRhaW5lckFuaW1hdGlvbikge1xuICAgICAgICAvLyBlbnN1cmVzIHRoYXQgdGhlIGRpcmVjdGlvbiBpcyBzZXQgcHJvcGVybHkgKHdoZW4gcmVmcmVzaGluZywgcHJvZ3Jlc3MgaXMgc2V0IGJhY2sgdG8gMCBpbml0aWFsbHksIHRoZW4gYmFjayBhZ2FpbiB0byB3aGVyZXZlciBpdCBuZWVkcyB0byBiZSkgYW5kIHRoYXQgY2FsbGJhY2tzIGFyZSB0cmlnZ2VyZWQuXG4gICAgICAgIGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgJiYgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoY29udGFpbmVyQW5pbWF0aW9uICYmIHN0YXJ0IDwgLTAuMDAxICYmICFwcmV2UHJvZ3Jlc3MgPyBnc2FwLnV0aWxzLm5vcm1hbGl6ZShzdGFydCwgZW5kLCAwKSA6IHByZXZQcm9ncmVzcywgdHJ1ZSk7IC8vIHRvIGF2b2lkIGlzc3VlcyB3aGVyZSBhbmltYXRpb24gY2FsbGJhY2tzIGxpa2Ugb25TdGFydCBhcmVuJ3QgdHJpZ2dlcmVkLlxuXG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBpc0ZpcnN0UmVmcmVzaCB8fCAoc2Nyb2xsMSAtIHN0YXJ0KSAvIGNoYW5nZSA9PT0gcHJldlByb2dyZXNzID8gMCA6IHByZXZQcm9ncmVzcztcbiAgICAgIH1cblxuICAgICAgcGluICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5fcGluT2Zmc2V0ID0gTWF0aC5yb3VuZChzZWxmLnByb2dyZXNzICogcGluQ2hhbmdlKSk7XG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4uaW52YWxpZGF0ZSgpO1xuXG4gICAgICBpZiAoIWlzTmFOKG1hcmtlclN0YXJ0T2Zmc2V0KSkge1xuICAgICAgICAvLyBudW1iZXJzIHdlcmUgcGFzc2VkIGluIGZvciB0aGUgcG9zaXRpb24gd2hpY2ggYXJlIGFic29sdXRlLCBzbyBpbnN0ZWFkIG9mIGp1c3QgcHV0dGluZyB0aGUgbWFya2VycyBhdCB0aGUgdmVyeSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LCB3ZSBmaWd1cmUgb3V0IGhvdyBmYXIgdGhleSBzaGlmdGVkIGRvd24gKGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhleSB3ZXJlIG9yaWdpbmFsbHkgcG9zaXRpb25lZCBpbiBjbG9zZXIgcmVsYXRpb24gdG8gdGhlIHRyaWdnZXIgZWxlbWVudCB3aXRoIHZhbHVlcyBsaWtlIFwidG9wXCIsIFwiY2VudGVyXCIsIGEgcGVyY2VudGFnZSBvciB3aGF0ZXZlciwgc28gd2Ugb2Zmc2V0IHRoYXQgbXVjaCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIHRvIGJhc2ljYWxseSByZXZlcnQgdGhlbSB0byB0aGUgcmVsYXRpdmUgcG9zaXRpb24gdGh5IHdlcmUgYXQgcHJldmlvdXNseS5cbiAgICAgICAgbWFya2VyU3RhcnRPZmZzZXQgLT0gZ3NhcC5nZXRQcm9wZXJ0eShtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbi5wKTtcbiAgICAgICAgbWFya2VyRW5kT2Zmc2V0IC09IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydFRyaWdnZXIsIGRpcmVjdGlvbiwgbWFya2VyU3RhcnRPZmZzZXQpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJTdGFydCwgZGlyZWN0aW9uLCBtYXJrZXJTdGFydE9mZnNldCAtIChwaW5PZmZzZXQgfHwgMCkpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24sIG1hcmtlckVuZE9mZnNldCk7XG5cbiAgICAgICAgX3NoaWZ0TWFya2VyKG1hcmtlckVuZCwgZGlyZWN0aW9uLCBtYXJrZXJFbmRPZmZzZXQgLSAocGluT2Zmc2V0IHx8IDApKTtcbiAgICAgIH1cblxuICAgICAgaXNGaXJzdFJlZnJlc2ggJiYgIV9yZWZyZXNoaW5nQWxsICYmIHNlbGYudXBkYXRlKCk7IC8vIGVkZ2UgY2FzZSAtIHdoZW4geW91IHJlbG9hZCBhIHBhZ2Ugd2hlbiBpdCdzIGFscmVhZHkgc2Nyb2xsZWQgZG93biwgc29tZSBicm93c2VycyBmaXJlIGEgXCJzY3JvbGxcIiBldmVudCBiZWZvcmUgRE9NQ29udGVudExvYWRlZCwgdHJpZ2dlcmluZyBhbiB1cGRhdGVBbGwoKS4gSWYgd2UgZG9uJ3QgdXBkYXRlIHRoZSBzZWxmLnByb2dyZXNzIGFzIHBhcnQgb2YgcmVmcmVzaCgpLCB0aGVuIHdoZW4gaXQgaGFwcGVucyBuZXh0LCBpdCBtYXkgcmVjb3JkIHByZXZQcm9ncmVzcyBhcyAwIHdoZW4gaXQgcmVhbGx5IHNob3VsZG4ndCwgcG90ZW50aWFsbHkgY2F1c2luZyBhIGNhbGxiYWNrIGluIGFuIGFuaW1hdGlvbiB0byBmaXJlIGFnYWluLlxuXG4gICAgICBpZiAob25SZWZyZXNoICYmICFfcmVmcmVzaGluZ0FsbCAmJiAhZXhlY3V0aW5nT25SZWZyZXNoKSB7XG4gICAgICAgIC8vIHdoZW4gcmVmcmVzaGluZyBhbGwsIHdlIGRvIGV4dHJhIHdvcmsgdG8gY29ycmVjdCBwaW5uZWRDb250YWluZXIgc2l6ZXMgYW5kIGVuc3VyZSB0aGluZ3MgZG9uJ3QgZXhjZWVkIHRoZSBtYXhTY3JvbGwsIHNvIHdlIHNob3VsZCBkbyBhbGwgdGhlIHJlZnJlc2hlcyBhdCB0aGUgZW5kIGFmdGVyIGFsbCB0aGF0IHdvcmsgc28gdGhhdCB0aGUgc3RhcnQvZW5kIHZhbHVlcyBhcmUgY29ycmVjdGVkLlxuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2ggPSB0cnVlO1xuICAgICAgICBvblJlZnJlc2goc2VsZik7XG4gICAgICAgIGV4ZWN1dGluZ09uUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChzY3JvbGxGdW5jKCkgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIDEwMDAgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5lbmRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHNjcnViVHdlZW4gPyBzY3J1YlR3ZWVuLnByb2dyZXNzKDEpIDogIWFuaW1hdGlvbi5wYXVzZWQoKSA/IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24ucmV2ZXJzZWQoKSkgOiBpc1RvZ2dsZSB8fCBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgc2VsZi5kaXJlY3Rpb24gPCAwLCAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5sYWJlbFRvU2Nyb2xsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICByZXR1cm4gYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5sYWJlbHMgJiYgKHN0YXJ0IHx8IHNlbGYucmVmcmVzaCgpIHx8IHN0YXJ0KSArIGFuaW1hdGlvbi5sYWJlbHNbbGFiZWxdIC8gYW5pbWF0aW9uLmR1cmF0aW9uKCkgKiBjaGFuZ2UgfHwgMDtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUcmFpbGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpLFxuICAgICAgICAgIGEgPSBzZWxmLmRpcmVjdGlvbiA+IDAgPyBfdHJpZ2dlcnMuc2xpY2UoMCwgaSkucmV2ZXJzZSgpIDogX3RyaWdnZXJzLnNsaWNlKGkgKyAxKTtcblxuICAgICAgcmV0dXJuIChfaXNTdHJpbmcobmFtZSkgPyBhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC52YXJzLnByZXZlbnRPdmVybGFwcyA9PT0gbmFtZTtcbiAgICAgIH0pIDogYSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBzZWxmLmRpcmVjdGlvbiA+IDAgPyB0LmVuZCA8PSBzdGFydCA6IHQuc3RhcnQgPj0gZW5kO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYudXBkYXRlID0gZnVuY3Rpb24gKHJlc2V0LCByZWNvcmRWZWxvY2l0eSwgZm9yY2VGYWtlKSB7XG4gICAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uICYmICFmb3JjZUZha2UgJiYgIXJlc2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjcm9sbCA9IF9yZWZyZXNoaW5nQWxsID09PSB0cnVlID8gcHJldlNjcm9sbCA6IHNlbGYuc2Nyb2xsKCksXG4gICAgICAgICAgcCA9IHJlc2V0ID8gMCA6IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG4gICAgICAgICAgY2xpcHBlZCA9IHAgPCAwID8gMCA6IHAgPiAxID8gMSA6IHAgfHwgMCxcbiAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzLFxuICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgIHdhc0FjdGl2ZSxcbiAgICAgICAgICB0b2dnbGVTdGF0ZSxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgc3RhdGVDaGFuZ2VkLFxuICAgICAgICAgIHRvZ2dsZWQsXG4gICAgICAgICAgaXNBdE1heCxcbiAgICAgICAgICBpc1Rha2luZ0FjdGlvbjtcblxuICAgICAgaWYgKHJlY29yZFZlbG9jaXR5KSB7XG4gICAgICAgIHNjcm9sbDIgPSBzY3JvbGwxO1xuICAgICAgICBzY3JvbGwxID0gY29udGFpbmVyQW5pbWF0aW9uID8gc2Nyb2xsRnVuYygpIDogc2Nyb2xsO1xuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgc25hcDIgPSBzbmFwMTtcbiAgICAgICAgICBzbmFwMSA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogY2xpcHBlZDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBhbnRpY2lwYXRlIHRoZSBwaW5uaW5nIGEgZmV3IHRpY2tzIGFoZWFkIG9mIHRpbWUgYmFzZWQgb24gdmVsb2NpdHkgdG8gYXZvaWQgYSB2aXN1YWwgZ2xpdGNoIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG1vc3QgYnJvd3NlcnMgZG8gc2Nyb2xsaW5nIG9uIGEgc2VwYXJhdGUgdGhyZWFkIChub3Qgc3luY2VkIHdpdGggcmVxdWVzdEFuaW1hdGlvbkZyYW1lKS5cblxuXG4gICAgICBhbnRpY2lwYXRlUGluICYmICFjbGlwcGVkICYmIHBpbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIF9sYXN0U2Nyb2xsVGltZSAmJiBzdGFydCA8IHNjcm9sbCArIChzY3JvbGwgLSBzY3JvbGwyKSAvIChfZ2V0VGltZSgpIC0gX3RpbWUyKSAqIGFudGljaXBhdGVQaW4gJiYgKGNsaXBwZWQgPSAwLjAwMDEpO1xuXG4gICAgICBpZiAoY2xpcHBlZCAhPT0gcHJldlByb2dyZXNzICYmIHNlbGYuZW5hYmxlZCkge1xuICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuaXNBY3RpdmUgPSAhIWNsaXBwZWQgJiYgY2xpcHBlZCA8IDE7XG4gICAgICAgIHdhc0FjdGl2ZSA9ICEhcHJldlByb2dyZXNzICYmIHByZXZQcm9ncmVzcyA8IDE7XG4gICAgICAgIHRvZ2dsZWQgPSBpc0FjdGl2ZSAhPT0gd2FzQWN0aXZlO1xuICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0b2dnbGVkIHx8ICEhY2xpcHBlZCAhPT0gISFwcmV2UHJvZ3Jlc3M7IC8vIGNvdWxkIGdvIGZyb20gc3RhcnQgYWxsIHRoZSB3YXkgdG8gZW5kLCB0aHVzIGl0IGRpZG4ndCB0b2dnbGUgYnV0IGl0IGRpZCBjaGFuZ2Ugc3RhdGUgaW4gYSBzZW5zZSAobWF5IG5lZWQgdG8gZmlyZSBhIGNhbGxiYWNrKVxuXG4gICAgICAgIHNlbGYuZGlyZWN0aW9uID0gY2xpcHBlZCA+IHByZXZQcm9ncmVzcyA/IDEgOiAtMTtcbiAgICAgICAgc2VsZi5wcm9ncmVzcyA9IGNsaXBwZWQ7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgJiYgIXByZXZQcm9ncmVzcyA/IDAgOiBjbGlwcGVkID09PSAxID8gMSA6IHByZXZQcm9ncmVzcyA9PT0gMSA/IDIgOiAzOyAvLyAwID0gZW50ZXIsIDEgPSBsZWF2ZSwgMiA9IGVudGVyQmFjaywgMyA9IGxlYXZlQmFjayAod2UgcHJpb3JpdGl6ZSB0aGUgRklSU1QgZW5jb3VudGVyLCB0aHVzIGlmIHlvdSBzY3JvbGwgcmVhbGx5IGZhc3QgcGFzdCB0aGUgb25FbnRlciBhbmQgb25MZWF2ZSBpbiBvbmUgdGljaywgaXQnZCBwcmlvcml0aXplIG9uRW50ZXIuXG5cbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICF0b2dnbGVkICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSAhPT0gXCJub25lXCIgJiYgdG9nZ2xlQWN0aW9uc1t0b2dnbGVTdGF0ZSArIDFdIHx8IHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGVdOyAvLyBpZiBpdCBkaWRuJ3QgdG9nZ2xlLCB0aGF0IG1lYW5zIGl0IHNob3QgcmlnaHQgcGFzdCBhbmQgc2luY2Ugd2UgcHJpb3JpdGl6ZSB0aGUgXCJlbnRlclwiIGFjdGlvbiwgd2Ugc2hvdWxkIHN3aXRjaCB0byB0aGUgXCJsZWF2ZVwiIGluIHRoaXMgY2FzZSAoYnV0IG9ubHkgaWYgb25lIGlzIGRlZmluZWQpXG5cbiAgICAgICAgICAgIGlzVGFraW5nQWN0aW9uID0gYW5pbWF0aW9uICYmIChhY3Rpb24gPT09IFwiY29tcGxldGVcIiB8fCBhY3Rpb24gPT09IFwicmVzZXRcIiB8fCBhY3Rpb24gaW4gYW5pbWF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ZW50T3ZlcmxhcHMgJiYgKHRvZ2dsZWQgfHwgaXNUYWtpbmdBY3Rpb24pICYmIChpc1Rha2luZ0FjdGlvbiB8fCBzY3J1YiB8fCAhYW5pbWF0aW9uKSAmJiAoX2lzRnVuY3Rpb24ocHJldmVudE92ZXJsYXBzKSA/IHByZXZlbnRPdmVybGFwcyhzZWxmKSA6IHNlbGYuZ2V0VHJhaWxpbmcocHJldmVudE92ZXJsYXBzKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuZW5kQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoIWlzVG9nZ2xlKSB7XG4gICAgICAgICAgaWYgKHNjcnViVHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCkge1xuICAgICAgICAgICAgc2NydWJUd2Vlbi5fZHAuX3RpbWUgLSBzY3J1YlR3ZWVuLl9zdGFydCAhPT0gc2NydWJUd2Vlbi5fdGltZSAmJiBzY3J1YlR3ZWVuLnJlbmRlcihzY3J1YlR3ZWVuLl9kcC5fdGltZSAtIHNjcnViVHdlZW4uX3N0YXJ0KTsgLy8gaWYgdGhlcmUncyBhIHNjcnViIG9uIGJvdGggdGhlIGNvbnRhaW5lciBhbmltYXRpb24gYW5kIHRoaXMgb25lIChvciBhIFNjcm9sbFNtb290aGVyKSwgdGhlIHVwZGF0ZSBvcmRlciB3b3VsZCBjYXVzZSB0aGlzIG9uZSBub3QgdG8gaGF2ZSByZW5kZXJlZCB5ZXQsIHNvIGl0IHdvdWxkbid0IG1ha2UgYW55IHByb2dyZXNzIGJlZm9yZSB3ZSAucmVzdGFydCgpIGl0IGhlYWRpbmcgdG93YXJkIHRoZSBuZXcgcHJvZ3Jlc3Mgc28gaXQnZCBhcHBlYXIgc3R1Y2sgdGh1cyB3ZSBmb3JjZSBhIHJlbmRlciBoZXJlLlxuXG4gICAgICAgICAgICBpZiAoc2NydWJUd2Vlbi5yZXNldFRvKSB7XG4gICAgICAgICAgICAgIHNjcnViVHdlZW4ucmVzZXRUbyhcInRvdGFsUHJvZ3Jlc3NcIiwgY2xpcHBlZCwgYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBsZWdhY3kgc3VwcG9ydCAoY291cnRlc3kpLCBiZWZvcmUgMy4xMC4wXG4gICAgICAgICAgICAgIHNjcnViVHdlZW4udmFycy50b3RhbFByb2dyZXNzID0gY2xpcHBlZDtcbiAgICAgICAgICAgICAgc2NydWJUd2Vlbi5pbnZhbGlkYXRlKCkucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb24udG90YWxQcm9ncmVzcyhjbGlwcGVkLCAhIShfcmVmcmVzaGluZyAmJiAobGFzdFJlZnJlc2ggfHwgcmVzZXQpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBpbikge1xuICAgICAgICAgIHJlc2V0ICYmIHBpblNwYWNpbmcgJiYgKHNwYWNlci5zdHlsZVtwaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMl0gPSBzcGFjaW5nU3RhcnQpO1xuXG4gICAgICAgICAgaWYgKCF1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBwaW5TZXR0ZXIoX3JvdW5kKHBpblN0YXJ0ICsgcGluQ2hhbmdlICogY2xpcHBlZCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICBpc0F0TWF4ID0gIXJlc2V0ICYmIGNsaXBwZWQgPiBwcmV2UHJvZ3Jlc3MgJiYgZW5kICsgMSA+IHNjcm9sbCAmJiBzY3JvbGwgKyAxID49IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbik7IC8vIGlmIGl0J3MgYXQgdGhlIFZFUlkgZW5kIG9mIHRoZSBwYWdlLCBkb24ndCBzd2l0Y2ggYXdheSBmcm9tIHBvc2l0aW9uOiBmaXhlZCBiZWNhdXNlIGl0J3MgcG9pbnRsZXNzIGFuZCBpdCBjb3VsZCBjYXVzZSBhIGJyaWVmIGZsYXNoIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHVwICh3aGVuIGl0IGdldHMgcGlubmVkIGFnYWluKVxuXG4gICAgICAgICAgICBpZiAocGluUmVwYXJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCFyZXNldCAmJiAoaXNBY3RpdmUgfHwgaXNBdE1heCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfb2Zmc2V0ID0gc2Nyb2xsIC0gc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICBfcmVwYXJlbnQocGluLCBfYm9keSwgYm91bmRzLnRvcCArIChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IF9vZmZzZXQgOiAwKSArIF9weCwgYm91bmRzLmxlZnQgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyAwIDogX29mZnNldCkgKyBfcHgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXBhcmVudChwaW4sIHNwYWNlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NldFN0YXRlKGlzQWN0aXZlIHx8IGlzQXRNYXggPyBwaW5BY3RpdmVTdGF0ZSA6IHBpblN0YXRlKTtcblxuICAgICAgICAgICAgcGluTW92ZXMgJiYgY2xpcHBlZCA8IDEgJiYgaXNBY3RpdmUgfHwgcGluU2V0dGVyKHBpblN0YXJ0ICsgKGNsaXBwZWQgPT09IDEgJiYgIWlzQXRNYXggPyBwaW5DaGFuZ2UgOiAwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc25hcCAmJiAhdHdlZW5Uby50d2VlbiAmJiAhX3JlZnJlc2hpbmcgJiYgIV9zdGFydHVwICYmIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB0b2dnbGVDbGFzcyAmJiAodG9nZ2xlZCB8fCBvbmNlICYmIGNsaXBwZWQgJiYgKGNsaXBwZWQgPCAxIHx8ICFfbGltaXRDYWxsYmFja3MpKSAmJiBfdG9BcnJheSh0b2dnbGVDbGFzcy50YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3RbaXNBY3RpdmUgfHwgb25jZSA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSh0b2dnbGVDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICB9KTsgLy8gY2xhc3NlcyBjb3VsZCBhZmZlY3QgcG9zaXRpb25pbmcsIHNvIGRvIGl0IGV2ZW4gaWYgcmVzZXQgb3IgcmVmcmVzaGluZyBpcyB0cnVlLlxuXG4gICAgICAgIG9uVXBkYXRlICYmICFpc1RvZ2dsZSAmJiAhcmVzZXQgJiYgb25VcGRhdGUoc2VsZik7XG5cbiAgICAgICAgaWYgKHN0YXRlQ2hhbmdlZCAmJiAhX3JlZnJlc2hpbmcpIHtcbiAgICAgICAgICBpZiAoaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGlmIChpc1Rha2luZ0FjdGlvbikge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSkucGF1c2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uW2FjdGlvbl0oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvblVwZGF0ZSAmJiBvblVwZGF0ZShzZWxmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodG9nZ2xlZCB8fCAhX2xpbWl0Q2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBvbiBzdGFydHVwLCB0aGUgcGFnZSBjb3VsZCBiZSBzY3JvbGxlZCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGNhbGxiYWNrcyB0aGF0IGRpZG4ndCB0b2dnbGUuIEZvciBleGFtcGxlIG9uRW50ZXIgc2hvdWxkbid0IGZpcmUgaWYgdGhlIFNjcm9sbFRyaWdnZXIgaXNuJ3QgYWN0dWFsbHkgZW50ZXJlZC5cbiAgICAgICAgICAgIG9uVG9nZ2xlICYmIHRvZ2dsZWQgJiYgX2NhbGxiYWNrKHNlbGYsIG9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgX2NhbGxiYWNrKHNlbGYsIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0pO1xuICAgICAgICAgICAgb25jZSAmJiAoY2xpcHBlZCA9PT0gMSA/IHNlbGYua2lsbChmYWxzZSwgMSkgOiBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdID0gMCk7IC8vIGEgY2FsbGJhY2sgc2hvdWxkbid0IGJlIGNhbGxlZCBhZ2FpbiBpZiBvbmNlIGlzIHRydWUuXG5cbiAgICAgICAgICAgIGlmICghdG9nZ2xlZCkge1xuICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRvIGdvIGNvbXBsZXRlbHkgcGFzdCwgbGlrZSBmcm9tIGJlZm9yZSB0aGUgc3RhcnQgdG8gYWZ0ZXIgdGhlIGVuZCAob3IgdmljZS12ZXJzYSkgaW4gd2hpY2ggY2FzZSBCT1RIIGNhbGxiYWNrcyBzaG91bGQgYmUgZmlyZWQgaW4gdGhhdCBvcmRlclxuICAgICAgICAgICAgICB0b2dnbGVTdGF0ZSA9IGNsaXBwZWQgPT09IDEgPyAxIDogMztcbiAgICAgICAgICAgICAgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSAmJiBfY2FsbGJhY2soc2VsZiwgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZhc3RTY3JvbGxFbmQgJiYgIWlzQWN0aXZlICYmIE1hdGguYWJzKHNlbGYuZ2V0VmVsb2NpdHkoKSkgPiAoX2lzTnVtYmVyKGZhc3RTY3JvbGxFbmQpID8gZmFzdFNjcm9sbEVuZCA6IDI1MDApKSB7XG4gICAgICAgICAgICBfZW5kQW5pbWF0aW9uKHNlbGYuY2FsbGJhY2tBbmltYXRpb24pO1xuXG4gICAgICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5wcm9ncmVzcygxKSA6IF9lbmRBbmltYXRpb24oYW5pbWF0aW9uLCBhY3Rpb24gPT09IFwicmV2ZXJzZVwiID8gMSA6ICFjbGlwcGVkLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUb2dnbGUgJiYgb25VcGRhdGUgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgb25VcGRhdGUoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gdXBkYXRlIGFic29sdXRlbHktcG9zaXRpb25lZCBtYXJrZXJzIChvbmx5IGlmIHRoZSBzY3JvbGxlciBpc24ndCB0aGUgdmlld3BvcnQpXG5cblxuICAgICAgaWYgKG1hcmtlckVuZFNldHRlcikge1xuICAgICAgICB2YXIgbiA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IHNjcm9sbCAvIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpICogKGNvbnRhaW5lckFuaW1hdGlvbi5fY2FTY3JvbGxEaXN0IHx8IDApIDogc2Nyb2xsO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlcihuICsgKG1hcmtlclN0YXJ0VHJpZ2dlci5faXNGbGlwcGVkID8gMSA6IDApKTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyKG4pO1xuICAgICAgfVxuXG4gICAgICBjYU1hcmtlclNldHRlciAmJiBjYU1hcmtlclNldHRlcigtc2Nyb2xsIC8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgKiAoY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgfHwgMCkpO1xuICAgIH07XG5cbiAgICBzZWxmLmVuYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgcmVmcmVzaCkge1xuICAgICAgaWYgKCFzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgc2VsZi5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwicmVzaXplXCIsIF9vblJlc2l6ZSk7XG5cbiAgICAgICAgaXNWaWV3cG9ydCB8fCBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cbiAgICAgICAgaWYgKHJlc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBwcmV2UHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgIHNjcm9sbDEgPSBzY3JvbGwyID0gbGFzdFNuYXAgPSBzY3JvbGxGdW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoICE9PSBmYWxzZSAmJiBzZWxmLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUd2VlbiA9IGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICByZXR1cm4gc25hcCAmJiB0d2VlblRvID8gdHdlZW5Uby50d2VlbiA6IHNjcnViVHdlZW47XG4gICAgfTtcblxuICAgIHNlbGYuc2V0UG9zaXRpb25zID0gZnVuY3Rpb24gKG5ld1N0YXJ0LCBuZXdFbmQsIGtlZXBDbGFtcCwgcGluT2Zmc2V0KSB7XG4gICAgICAvLyBkb2Vzbid0IHBlcnNpc3QgYWZ0ZXIgcmVmcmVzaCgpISBJbnRlbmRlZCB0byBiZSBhIHdheSB0byBvdmVycmlkZSB2YWx1ZXMgdGhhdCB3ZXJlIHNldCBkdXJpbmcgcmVmcmVzaCgpLCBsaWtlIHlvdSBjb3VsZCBzZXQgaXQgaW4gb25SZWZyZXNoKClcbiAgICAgIGlmIChjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gY29udmVydCByYXRpb3MgaW50byBzY3JvbGwgcG9zaXRpb25zLiBSZW1lbWJlciwgc3RhcnQvZW5kIHZhbHVlcyBvbiBTY3JvbGxUcmlnZ2VycyB0aGF0IGhhdmUgYSBjb250YWluZXJBbmltYXRpb24gcmVmZXIgdG8gdGhlIHRpbWUgKGluIHNlY29uZHMpLCBOT1Qgc2Nyb2xsIHBvc2l0aW9ucy5cbiAgICAgICAgdmFyIHN0ID0gY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgICAgICBkdXJhdGlvbiA9IGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpLFxuICAgICAgICAgICAgX2NoYW5nZSA9IHN0LmVuZCAtIHN0LnN0YXJ0O1xuXG4gICAgICAgIG5ld1N0YXJ0ID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3U3RhcnQgLyBkdXJhdGlvbjtcbiAgICAgICAgbmV3RW5kID0gc3Quc3RhcnQgKyBfY2hhbmdlICogbmV3RW5kIC8gZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYucmVmcmVzaChmYWxzZSwgZmFsc2UsIHtcbiAgICAgICAgc3RhcnQ6IF9rZWVwQ2xhbXAobmV3U3RhcnQsIGtlZXBDbGFtcCAmJiAhIXNlbGYuX3N0YXJ0Q2xhbXApLFxuICAgICAgICBlbmQ6IF9rZWVwQ2xhbXAobmV3RW5kLCBrZWVwQ2xhbXAgJiYgISFzZWxmLl9lbmRDbGFtcClcbiAgICAgIH0sIHBpbk9mZnNldCk7XG4gICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBzZWxmLmFkanVzdFBpblNwYWNpbmcgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICBpZiAoc3BhY2VyU3RhdGUgJiYgYW1vdW50KSB7XG4gICAgICAgIHZhciBpID0gc3BhY2VyU3RhdGUuaW5kZXhPZihkaXJlY3Rpb24uZCkgKyAxO1xuICAgICAgICBzcGFjZXJTdGF0ZVtpXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbaV0pICsgYW1vdW50ICsgX3B4O1xuICAgICAgICBzcGFjZXJTdGF0ZVsxXSA9IHBhcnNlRmxvYXQoc3BhY2VyU3RhdGVbMV0pICsgYW1vdW50ICsgX3B4O1xuXG4gICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZGlzYWJsZSA9IGZ1bmN0aW9uIChyZXNldCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIGlmIChzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgcmVzZXQgIT09IGZhbHNlICYmIHNlbGYucmV2ZXJ0KHRydWUsIHRydWUpO1xuICAgICAgICBzZWxmLmVuYWJsZWQgPSBzZWxmLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGFsbG93QW5pbWF0aW9uIHx8IHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5wYXVzZSgpO1xuICAgICAgICBwcmV2U2Nyb2xsID0gMDtcbiAgICAgICAgcGluQ2FjaGUgJiYgKHBpbkNhY2hlLnVuY2FjaGUgPSAxKTtcbiAgICAgICAgb25SZWZyZXNoSW5pdCAmJiBfcmVtb3ZlTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoSW5pdFwiLCBvblJlZnJlc2hJbml0KTtcblxuICAgICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG4gICAgICAgICAgc25hcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICAgICAgdHdlZW5Uby50d2VlbiAmJiB0d2VlblRvLnR3ZWVuLmtpbGwoKSAmJiAodHdlZW5Uby50d2VlbiA9IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgaWYgKF90cmlnZ2Vyc1tpXS5zY3JvbGxlciA9PT0gc2Nyb2xsZXIgJiYgX3RyaWdnZXJzW2ldICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAgIHJldHVybjsgLy9kb24ndCByZW1vdmUgdGhlIGxpc3RlbmVycyBpZiB0aGVyZSBhcmUgc3RpbGwgb3RoZXIgdHJpZ2dlcnMgcmVmZXJlbmNpbmcgaXQuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG4gICAgICAgICAgaXNWaWV3cG9ydCB8fCBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5raWxsID0gZnVuY3Rpb24gKHJldmVydCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIHNlbGYuZGlzYWJsZShyZXZlcnQsIGFsbG93QW5pbWF0aW9uKTtcbiAgICAgIHNjcnViVHdlZW4gJiYgIWFsbG93QW5pbWF0aW9uICYmIHNjcnViVHdlZW4ua2lsbCgpO1xuICAgICAgaWQgJiYgZGVsZXRlIF9pZHNbaWRdO1xuXG4gICAgICB2YXIgaSA9IF90cmlnZ2Vycy5pbmRleE9mKHNlbGYpO1xuXG4gICAgICBpID49IDAgJiYgX3RyaWdnZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIGkgPT09IF9pICYmIF9kaXJlY3Rpb24gPiAwICYmIF9pLS07IC8vIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSByZWZyZXNoKCkgb3IgdXBkYXRlKCksIHNwbGljaW5nIHdvdWxkIGNhdXNlIHNraXBzIGluIHRoZSBpbmRleCwgc28gYWRqdXN0Li4uXG4gICAgICAvLyBpZiBubyBvdGhlciBTY3JvbGxUcmlnZ2VyIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBzY3JvbGxlciBhcmUgZm91bmQsIHdpcGUgb3V0IGFueSByZWNvcmRlZCBzY3JvbGwgcG9zaXRpb24uIE90aGVyd2lzZSwgaW4gYSBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbiwgZm9yIGV4YW1wbGUsIGl0IGNvdWxkIG1haW50YWluIHNjcm9sbCBwb3NpdGlvbiB3aGVuIGl0IHJlYWxseSBzaG91bGRuJ3QuXG5cbiAgICAgIGkgPSAwO1xuXG4gICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5zY3JvbGxlciA9PT0gc2VsZi5zY3JvbGxlciAmJiAoaSA9IDEpO1xuICAgICAgfSk7XG5cbiAgICAgIGkgfHwgX3JlZnJlc2hpbmdBbGwgfHwgKHNlbGYuc2Nyb2xsLnJlYyA9IDApO1xuXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyID0gbnVsbDtcbiAgICAgICAgcmV2ZXJ0ICYmIGFuaW1hdGlvbi5yZXZlcnQoe1xuICAgICAgICAgIGtpbGw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBhbmltYXRpb24ua2lsbCgpO1xuICAgICAgfVxuXG4gICAgICBtYXJrZXJTdGFydCAmJiBbbWFya2VyU3RhcnQsIG1hcmtlckVuZCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnBhcmVudE5vZGUgJiYgbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pO1xuICAgICAgfSk7XG4gICAgICBfcHJpbWFyeSA9PT0gc2VsZiAmJiAoX3ByaW1hcnkgPSAwKTtcblxuICAgICAgaWYgKHBpbikge1xuICAgICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuICAgICAgICBpID0gMDtcblxuICAgICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LnBpbiA9PT0gcGluICYmIGkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaSB8fCAocGluQ2FjaGUuc3BhY2VyID0gMCk7IC8vIGlmIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBTY3JvbGxUcmlnZ2VycyB3aXRoIHRoZSBzYW1lIHBpbiwgcmVtb3ZlIHRoZSBzcGFjZXIsIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBjb250YW1pbmF0ZWQgd2l0aCBvbGQvc3RhbGUgdmFsdWVzIGlmIHRoZSB1c2VyIHJlLWNyZWF0ZXMgYSBTY3JvbGxUcmlnZ2VyIGZvciB0aGUgc2FtZSBlbGVtZW50LlxuICAgICAgfVxuXG4gICAgICB2YXJzLm9uS2lsbCAmJiB2YXJzLm9uS2lsbChzZWxmKTtcbiAgICB9O1xuXG4gICAgX3RyaWdnZXJzLnB1c2goc2VsZik7XG5cbiAgICBzZWxmLmVuYWJsZShmYWxzZSwgZmFsc2UpO1xuICAgIGN1c3RvbVJldmVydFJldHVybiAmJiBjdXN0b21SZXZlcnRSZXR1cm4oc2VsZik7XG5cbiAgICBpZiAoYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5hZGQgJiYgIWNoYW5nZSkge1xuICAgICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBpcyBhIHRpbWVsaW5lLCBpdCBtYXkgbm90IGhhdmUgYmVlbiBwb3B1bGF0ZWQgeWV0LCBzbyBpdCB3b3VsZG4ndCByZW5kZXIgYXQgdGhlIHByb3BlciBwbGFjZSBvbiB0aGUgZmlyc3QgcmVmcmVzaCgpLCB0aHVzIHdlIHNob3VsZCBzY2hlZHVsZSBvbmUgZm9yIHRoZSBuZXh0IHRpY2suIElmIFwiY2hhbmdlXCIgaXMgZGVmaW5lZCwgd2Uga25vdyBpdCBtdXN0IGJlIHJlLWVuYWJsaW5nLCB0aHVzIHdlIGNhbiByZWZyZXNoKCkgcmlnaHQgYXdheS5cbiAgICAgIHZhciB1cGRhdGVGdW5jID0gc2VsZi51cGRhdGU7IC8vIHNvbWUgYnJvd3NlcnMgbWF5IGZpcmUgYSBzY3JvbGwgZXZlbnQgQkVGT1JFIGEgdGljayBlbGFwc2VzIGFuZC9vciB0aGUgRE9NQ29udGVudExvYWRlZCBmaXJlcy4gU28gdGhlcmUncyBhIGNoYW5jZSB1cGRhdGUoKSB3aWxsIGJlIGNhbGxlZCBCRUZPUkUgYSByZWZyZXNoKCkgaGFzIGhhcHBlbmVkIG9uIGEgVGltZWxpbmUtYXR0YWNoZWQgU2Nyb2xsVHJpZ2dlciB3aGljaCBtZWFucyB0aGUgc3RhcnQvZW5kIHdvbid0IGJlIGNhbGN1bGF0ZWQgeWV0LiBXZSBkb24ndCB3YW50IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlIHVwZGF0ZSgpIG1ldGhvZCAobGlrZSBjaGVjayB0byBzZWUgaWYgZW5kIGlzIGRlZmluZWQgYW5kIGlmIG5vdCwgZm9yY2UgYSByZWZyZXNoKCkpIGJlY2F1c2UgdGhhdCdzIGEgZnVuY3Rpb24gdGhhdCBnZXRzIGhpdCBhIExPVCAocGVyZm9ybWFuY2UpLiBTbyB3ZSBzd2FwIG91dCB0aGUgcmVhbCB1cGRhdGUoKSBtZXRob2QgZm9yIHRoaXMgb25lIHRoYXQnbGwgcmUtYXR0YWNoIGl0IHRoZSBmaXJzdCB0aW1lIGl0IGdldHMgY2FsbGVkIGFuZCBvZiBjb3Vyc2UgZm9yY2VzIGEgcmVmcmVzaCgpLlxuXG4gICAgICBzZWxmLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi51cGRhdGUgPSB1cGRhdGVGdW5jO1xuICAgICAgICBzdGFydCB8fCBlbmQgfHwgc2VsZi5yZWZyZXNoKCk7XG4gICAgICB9O1xuXG4gICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuMDEsIHNlbGYudXBkYXRlKTtcbiAgICAgIGNoYW5nZSA9IDAuMDE7XG4gICAgICBzdGFydCA9IGVuZCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHBpbiAmJiBfcXVldWVSZWZyZXNoQWxsKCk7IC8vIHBpbm5pbmcgY291bGQgYWZmZWN0IHRoZSBwb3NpdGlvbnMgb2Ygb3RoZXIgdGhpbmdzLCBzbyBtYWtlIHN1cmUgd2UgcXVldWUgYSBmdWxsIHJlZnJlc2goKVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3Rlcihjb3JlKSB7XG4gICAgaWYgKCFfY29yZUluaXR0ZWQpIHtcbiAgICAgIGdzYXAgPSBjb3JlIHx8IF9nZXRHU0FQKCk7XG4gICAgICBfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50ICYmIFNjcm9sbFRyaWdnZXIuZW5hYmxlKCk7XG4gICAgICBfY29yZUluaXR0ZWQgPSBfZW5hYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvcmVJbml0dGVkO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMgPSBmdW5jdGlvbiBkZWZhdWx0cyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBwIGluIGNvbmZpZykge1xuICAgICAgICBfZGVmYXVsdHNbcF0gPSBjb25maWdbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKHJlc2V0LCBraWxsKSB7XG4gICAgX2VuYWJsZWQgPSAwO1xuXG4gICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyW2tpbGwgPyBcImtpbGxcIiA6IFwiZGlzYWJsZVwiXShyZXNldCk7XG4gICAgfSk7XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoX3dpbiwgXCJ3aGVlbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICBjbGVhckludGVydmFsKF9zeW5jSW50ZXJ2YWwpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfYm9keSwgXCJ0b3VjaHN0YXJ0XCIsIF9wYXNzVGhyb3VnaCk7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIiwgX3BvaW50ZXJEb3duSGFuZGxlcik7XG5cbiAgICBfbXVsdGlMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIiwgX3BvaW50ZXJVcEhhbmRsZXIpO1xuXG4gICAgX3Jlc2l6ZURlbGF5LmtpbGwoKTtcblxuICAgIF9pdGVyYXRlQXV0b1JlZnJlc2goX3JlbW92ZUxpc3RlbmVyKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAxXSk7XG5cbiAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMl0pO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBkb2N1bWVudDtcbiAgICBfZG9jRWwgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfYm9keSA9IF9kb2MuYm9keTtcblxuICAgIGlmIChnc2FwKSB7XG4gICAgICBfdG9BcnJheSA9IGdzYXAudXRpbHMudG9BcnJheTtcbiAgICAgIF9jbGFtcCA9IGdzYXAudXRpbHMuY2xhbXA7XG4gICAgICBfY29udGV4dCA9IGdzYXAuY29yZS5jb250ZXh0IHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMgPSBnc2FwLmNvcmUuc3VwcHJlc3NPdmVyd3JpdGVzIHx8IF9wYXNzVGhyb3VnaDtcbiAgICAgIF9zY3JvbGxSZXN0b3JhdGlvbiA9IF93aW4uaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiB8fCBcImF1dG9cIjtcbiAgICAgIF9sYXN0U2Nyb2xsID0gX3dpbi5wYWdlWU9mZnNldDtcbiAgICAgIGdzYXAuY29yZS5nbG9iYWxzKFwiU2Nyb2xsVHJpZ2dlclwiLCBTY3JvbGxUcmlnZ2VyKTsgLy8gbXVzdCByZWdpc3RlciB0aGUgZ2xvYmFsIG1hbnVhbGx5IGJlY2F1c2UgaW4gSW50ZXJuZXQgRXhwbG9yZXIsIGZ1bmN0aW9ucyAoY2xhc3NlcykgZG9uJ3QgaGF2ZSBhIFwibmFtZVwiIHByb3BlcnR5LlxuXG4gICAgICBpZiAoX2JvZHkpIHtcbiAgICAgICAgX2VuYWJsZWQgPSAxO1xuICAgICAgICBfZGl2MTAwdmggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyB0byBzb2x2ZSBtb2JpbGUgYnJvd3NlciBhZGRyZXNzIGJhciBzaG93L2hpZGUgcmVzaXppbmcsIHdlIHNob3VsZG4ndCByZWx5IG9uIHdpbmRvdy5pbm5lckhlaWdodC4gSW5zdGVhZCwgdXNlIGEgPGRpdj4gd2l0aCBpdHMgaGVpZ2h0IHNldCB0byAxMDB2aCBhbmQgbWVhc3VyZSB0aGF0IHNpbmNlIHRoYXQncyB3aGF0IHRoZSBzY3JvbGxpbmcgaXMgYmFzZWQgb24gYW55d2F5IGFuZCBpdCdzIG5vdCBhZmZlY3RlZCBieSBhZGRyZXNzIGJhciBzaG93aW5nL2hpZGluZy5cblxuICAgICAgICBfZGl2MTAwdmguc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgICAgICBfZGl2MTAwdmguc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICAgICAgX3JlZnJlc2gxMDB2aCgpO1xuXG4gICAgICAgIF9yYWZCdWdGaXgoKTtcblxuICAgICAgICBPYnNlcnZlci5yZWdpc3Rlcihnc2FwKTsgLy8gaXNUb3VjaCBpcyAwIGlmIG5vIHRvdWNoLCAxIGlmIE9OTFkgdG91Y2gsIGFuZCAyIGlmIGl0IGNhbiBhY2NvbW1vZGF0ZSB0b3VjaCBidXQgYWxzbyBvdGhlciB0eXBlcyBsaWtlIG1vdXNlL3BvaW50ZXIuXG5cbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5pc1RvdWNoID0gT2JzZXJ2ZXIuaXNUb3VjaDtcbiAgICAgICAgX2ZpeElPU0J1ZyA9IE9ic2VydmVyLmlzVG91Y2ggJiYgLyhpUGFkfGlQaG9uZXxpUG9kfE1hYykvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBzaW5jZSAyMDE3LCBpT1MgaGFzIGhhZCBhIGJ1ZyB0aGF0IGNhdXNlcyBldmVudC5jbGllbnRYL1kgdG8gYmUgaW5hY2N1cmF0ZSB3aGVuIGEgc2Nyb2xsIG9jY3VycywgdGh1cyB3ZSBtdXN0IGFsdGVybmF0ZSBpZ25vcmluZyBldmVyeSBvdGhlciB0b3VjaG1vdmUgZXZlbnQgdG8gd29yayBhcm91bmQgaXQuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgxOTU0IGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9FeGJyUE5hLzA4N2NlZjE5N2RjMzU0NDVhMDk1MWU4OTM1YzQxNTAzXG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF93aW4sIFwid2hlZWxcIiwgX29uU2Nyb2xsKTsgLy8gbW9zdGx5IGZvciAzcmQgcGFydHkgc21vb3RoIHNjcm9sbGluZyBsaWJyYXJpZXMuXG5cblxuICAgICAgICBfcm9vdCA9IFtfd2luLCBfZG9jLCBfZG9jRWwsIF9ib2R5XTtcblxuICAgICAgICBpZiAoZ3NhcC5tYXRjaE1lZGlhKSB7XG4gICAgICAgICAgU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhID0gZnVuY3Rpb24gKHZhcnMpIHtcbiAgICAgICAgICAgIHZhciBtbSA9IGdzYXAubWF0Y2hNZWRpYSgpLFxuICAgICAgICAgICAgICAgIHA7XG5cbiAgICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgIG1tLmFkZChwLCB2YXJzW3BdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1tO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBnc2FwLmFkZEV2ZW50TGlzdGVuZXIoXCJtYXRjaE1lZGlhSW5pdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JldmVydEFsbCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFSZXZlcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXZlcnRSZWNvcmRlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1hdGNoTWVkaWFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3JlZnJlc2hBbGwoMCwgMSk7XG5cbiAgICAgICAgICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ3NhcC5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gd2hlbiBvcmllbnRhdGlvbiBjaGFuZ2VzLCB3ZSBzaG91bGQgdGFrZSBuZXcgYmFzZSBtZWFzdXJlbWVudHMgZm9yIHRoZSBpZ25vcmVNb2JpbGVSZXNpemUgZmVhdHVyZS5cbiAgICAgICAgICAgIF9zZXRCYXNlRGltZW5zaW9ucygpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3NldEJhc2VEaW1lbnNpb25zO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlcXVpcmVzIEdTQVAgMy4xMS4wIG9yIGxhdGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NldEJhc2VEaW1lbnNpb25zKCk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7IC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgQ2hyb21lKSwgdGhlIHdpbmRvdyBzdG9wcyBkaXNwYXRjaGluZyBzY3JvbGwgZXZlbnRzIG9uIHRoZSB3aW5kb3cgaWYgeW91IHNjcm9sbCByZWFsbHkgZmFzdCwgYnV0IGl0J3MgY29uc2lzdGVudCBvbiB0aGUgZG9jdW1lbnQhXG5cblxuICAgICAgICB2YXIgYm9keVN0eWxlID0gX2JvZHkuc3R5bGUsXG4gICAgICAgICAgICBib3JkZXIgPSBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUsXG4gICAgICAgICAgICBBbmltYXRpb25Qcm90byA9IGdzYXAuY29yZS5BbmltYXRpb24ucHJvdG90eXBlLFxuICAgICAgICAgICAgYm91bmRzLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgQW5pbWF0aW9uUHJvdG8ucmV2ZXJ0IHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRpb25Qcm90bywgXCJyZXZlcnRcIiwge1xuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUoLTAuMDEsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChBbmltYXRpb24ucmV2ZXJ0KCkgd2FzIGFkZGVkIGFmdGVyIDMuMTAuNClcblxuICAgICAgICBib2R5U3R5bGUuYm9yZGVyVG9wU3R5bGUgPSBcInNvbGlkXCI7IC8vIHdvcmtzIGFyb3VuZCBhbiBpc3N1ZSB3aGVyZSBhIG1hcmdpbiBvZiBhIGNoaWxkIGVsZW1lbnQgY291bGQgdGhyb3cgb2ZmIHRoZSBib3VuZHMgb2YgdGhlIF9ib2R5LCBtYWtpbmcgaXQgc2VlbSBsaWtlIHRoZXJlJ3MgYSBtYXJnaW4gd2hlbiB0aGVyZSBhY3R1YWxseSBpc24ndC4gVGhlIGJvcmRlciBlbnN1cmVzIHRoYXQgdGhlIGJvdW5kcyBhcmUgYWNjdXJhdGUuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhfYm9keSk7XG4gICAgICAgIF92ZXJ0aWNhbC5tID0gTWF0aC5yb3VuZChib3VuZHMudG9wICsgX3ZlcnRpY2FsLnNjKCkpIHx8IDA7IC8vIGFjY29tbW9kYXRlIHRoZSBvZmZzZXQgb2YgdGhlIDxib2R5PiBjYXVzZWQgYnkgbWFyZ2lucyBhbmQvb3IgcGFkZGluZ1xuXG4gICAgICAgIF9ob3Jpem9udGFsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgX2hvcml6b250YWwuc2MoKSkgfHwgMDtcbiAgICAgICAgYm9yZGVyID8gYm9keVN0eWxlLmJvcmRlclRvcFN0eWxlID0gYm9yZGVyIDogYm9keVN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXRvcC1zdHlsZVwiKTsgLy8gVE9ETzogKD8pIG1heWJlIG1vdmUgdG8gbGV2ZXJhZ2luZyB0aGUgdmVsb2NpdHkgbWVjaGFuaXNtIGluIE9ic2VydmVyIGFuZCBza2lwIGludGVydmFscy5cblxuICAgICAgICBfc3luY0ludGVydmFsID0gc2V0SW50ZXJ2YWwoX3N5bmMsIDI1MCk7XG4gICAgICAgIGdzYXAuZGVsYXllZENhbGwoMC41LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zdGFydHVwID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwidG91Y2hjYW5jZWxcIiwgX3Bhc3NUaHJvdWdoKTsgLy8gc29tZSBvbGRlciBBbmRyb2lkIGRldmljZXMgaW50ZXJtaXR0ZW50bHkgc3RvcCBkaXNwYXRjaGluZyBcInRvdWNobW92ZVwiIGV2ZW50cyBpZiB3ZSBkb24ndCBsaXN0ZW4gZm9yIFwidG91Y2hjYW5jZWxcIiBvbiB0aGUgZG9jdW1lbnQuXG5cblxuICAgICAgICBfYWRkTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpOyAvL3dvcmtzIGFyb3VuZCBTYWZhcmkgYnVnOiBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIxNDUwLWRyYWdnYWJsZS1pbi1pZnJhbWUtb24tbW9iaWxlLWlzLWJ1Z2d5L1xuXG5cbiAgICAgICAgX211bHRpTGlzdGVuZXIoX2FkZExpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsIF9wb2ludGVyRG93bkhhbmRsZXIpO1xuXG4gICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLCBfcG9pbnRlclVwSGFuZGxlcik7XG5cbiAgICAgICAgX3RyYW5zZm9ybVByb3AgPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9zdGF0ZVByb3BzLnB1c2goX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICAgIF9jb3JlSW5pdHRlZCA9IF9nZXRUaW1lKCk7XG4gICAgICAgIF9yZXNpemVEZWxheSA9IGdzYXAuZGVsYXllZENhbGwoMC4yLCBfcmVmcmVzaEFsbCkucGF1c2UoKTtcbiAgICAgICAgX2F1dG9SZWZyZXNoID0gW19kb2MsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHcgPSBfd2luLmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgIGggPSBfd2luLmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKF9kb2MuaGlkZGVuKSB7XG4gICAgICAgICAgICBfcHJldldpZHRoID0gdztcbiAgICAgICAgICAgIF9wcmV2SGVpZ2h0ID0gaDtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wcmV2V2lkdGggIT09IHcgfHwgX3ByZXZIZWlnaHQgIT09IGgpIHtcbiAgICAgICAgICAgIF9vblJlc2l6ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2RvYywgXCJET01Db250ZW50TG9hZGVkXCIsIF9yZWZyZXNoQWxsLCBfd2luLCBcImxvYWRcIiwgX3JlZnJlc2hBbGwsIF93aW4sIFwicmVzaXplXCIsIF9vblJlc2l6ZV07XG5cbiAgICAgICAgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIpO1xuXG4gICAgICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyaWdnZXIuZW5hYmxlKDAsIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX3Njcm9sbGVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMV0pO1xuXG4gICAgICAgICAgX3doZWVsTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfc2Nyb2xsZXJzW2ldLCBfc2Nyb2xsZXJzW2kgKyAyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jb25maWcgPSBmdW5jdGlvbiBjb25maWcodmFycykge1xuICAgIFwibGltaXRDYWxsYmFja3NcIiBpbiB2YXJzICYmIChfbGltaXRDYWxsYmFja3MgPSAhIXZhcnMubGltaXRDYWxsYmFja3MpO1xuICAgIHZhciBtcyA9IHZhcnMuc3luY0ludGVydmFsO1xuICAgIG1zICYmIGNsZWFySW50ZXJ2YWwoX3N5bmNJbnRlcnZhbCkgfHwgKF9zeW5jSW50ZXJ2YWwgPSBtcykgJiYgc2V0SW50ZXJ2YWwoX3N5bmMsIG1zKTtcbiAgICBcImlnbm9yZU1vYmlsZVJlc2l6ZVwiIGluIHZhcnMgJiYgKF9pZ25vcmVNb2JpbGVSZXNpemUgPSBTY3JvbGxUcmlnZ2VyLmlzVG91Y2ggPT09IDEgJiYgdmFycy5pZ25vcmVNb2JpbGVSZXNpemUpO1xuXG4gICAgaWYgKFwiYXV0b1JlZnJlc2hFdmVudHNcIiBpbiB2YXJzKSB7XG4gICAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9yZW1vdmVMaXN0ZW5lcikgfHwgX2l0ZXJhdGVBdXRvUmVmcmVzaChfYWRkTGlzdGVuZXIsIHZhcnMuYXV0b1JlZnJlc2hFdmVudHMgfHwgXCJub25lXCIpO1xuICAgICAgX2lnbm9yZVJlc2l6ZSA9ICh2YXJzLmF1dG9SZWZyZXNoRXZlbnRzICsgXCJcIikuaW5kZXhPZihcInJlc2l6ZVwiKSA9PT0gLTE7XG4gICAgfVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuc2Nyb2xsZXJQcm94eSA9IGZ1bmN0aW9uIHNjcm9sbGVyUHJveHkodGFyZ2V0LCB2YXJzKSB7XG4gICAgdmFyIHQgPSBfZ2V0VGFyZ2V0KHRhcmdldCksXG4gICAgICAgIGkgPSBfc2Nyb2xsZXJzLmluZGV4T2YodCksXG4gICAgICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydCh0KTtcblxuICAgIGlmICh+aSkge1xuICAgICAgX3Njcm9sbGVycy5zcGxpY2UoaSwgaXNWaWV3cG9ydCA/IDYgOiAyKTtcbiAgICB9XG5cbiAgICBpZiAodmFycykge1xuICAgICAgaXNWaWV3cG9ydCA/IF9wcm94aWVzLnVuc2hpZnQoX3dpbiwgdmFycywgX2JvZHksIHZhcnMsIF9kb2NFbCwgdmFycykgOiBfcHJveGllcy51bnNoaWZ0KHQsIHZhcnMpO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmNsZWFyTWF0Y2hNZWRpYSA9IGZ1bmN0aW9uIGNsZWFyTWF0Y2hNZWRpYShxdWVyeSkge1xuICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5fY3R4ICYmIHQuX2N0eC5xdWVyeSA9PT0gcXVlcnkgJiYgdC5fY3R4LmtpbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5pc0luVmlld3BvcnQgPSBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCwgcmF0aW8sIGhvcml6b250YWwpIHtcbiAgICB2YXIgYm91bmRzID0gKF9pc1N0cmluZyhlbGVtZW50KSA/IF9nZXRUYXJnZXQoZWxlbWVudCkgOiBlbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgb2Zmc2V0ID0gYm91bmRzW2hvcml6b250YWwgPyBfd2lkdGggOiBfaGVpZ2h0XSAqIHJhdGlvIHx8IDA7XG4gICAgcmV0dXJuIGhvcml6b250YWwgPyBib3VuZHMucmlnaHQgLSBvZmZzZXQgPiAwICYmIGJvdW5kcy5sZWZ0ICsgb2Zmc2V0IDwgX3dpbi5pbm5lcldpZHRoIDogYm91bmRzLmJvdHRvbSAtIG9mZnNldCA+IDAgJiYgYm91bmRzLnRvcCArIG9mZnNldCA8IF93aW4uaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5wb3NpdGlvbkluVmlld3BvcnQgPSBmdW5jdGlvbiBwb3NpdGlvbkluVmlld3BvcnQoZWxlbWVudCwgcmVmZXJlbmNlUG9pbnQsIGhvcml6b250YWwpIHtcbiAgICBfaXNTdHJpbmcoZWxlbWVudCkgJiYgKGVsZW1lbnQgPSBfZ2V0VGFyZ2V0KGVsZW1lbnQpKTtcbiAgICB2YXIgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgc2l6ZSA9IGJvdW5kc1tob3Jpem9udGFsID8gX3dpZHRoIDogX2hlaWdodF0sXG4gICAgICAgIG9mZnNldCA9IHJlZmVyZW5jZVBvaW50ID09IG51bGwgPyBzaXplIC8gMiA6IHJlZmVyZW5jZVBvaW50IGluIF9rZXl3b3JkcyA/IF9rZXl3b3Jkc1tyZWZlcmVuY2VQb2ludF0gKiBzaXplIDogfnJlZmVyZW5jZVBvaW50LmluZGV4T2YoXCIlXCIpID8gcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgKiBzaXplIC8gMTAwIDogcGFyc2VGbG9hdChyZWZlcmVuY2VQb2ludCkgfHwgMDtcbiAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChib3VuZHMubGVmdCArIG9mZnNldCkgLyBfd2luLmlubmVyV2lkdGggOiAoYm91bmRzLnRvcCArIG9mZnNldCkgLyBfd2luLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIua2lsbEFsbCA9IGZ1bmN0aW9uIGtpbGxBbGwoYWxsb3dMaXN0ZW5lcnMpIHtcbiAgICBfdHJpZ2dlcnMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiICYmIHQua2lsbCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFsbG93TGlzdGVuZXJzICE9PSB0cnVlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gX2xpc3RlbmVycy5raWxsQWxsIHx8IFtdO1xuICAgICAgX2xpc3RlbmVycyA9IHt9O1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsVHJpZ2dlcjtcbn0oKTtcblNjcm9sbFRyaWdnZXIudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5cblNjcm9sbFRyaWdnZXIuc2F2ZVN0eWxlcyA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XG4gIHJldHVybiB0YXJnZXRzID8gX3RvQXJyYXkodGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgLy8gc2F2ZWQgc3R5bGVzIGFyZSByZWNvcmRlZCBpbiBhIGNvbnNlY3V0aXZlIGFsdGVybmF0aW5nIEFycmF5LCBsaWtlIFtlbGVtZW50LCBjc3NUZXh0LCB0cmFuc2Zvcm0gYXR0cmlidXRlLCBjYWNoZSwgbWF0Y2hNZWRpYSwgLi4uXVxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlKSB7XG4gICAgICB2YXIgaSA9IF9zYXZlZFN0eWxlcy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGkgPj0gMCAmJiBfc2F2ZWRTdHlsZXMuc3BsaWNlKGksIDUpO1xuXG4gICAgICBfc2F2ZWRTdHlsZXMucHVzaCh0YXJnZXQsIHRhcmdldC5zdHlsZS5jc3NUZXh0LCB0YXJnZXQuZ2V0QkJveCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLCBnc2FwLmNvcmUuZ2V0Q2FjaGUodGFyZ2V0KSwgX2NvbnRleHQoKSk7XG4gICAgfVxuICB9KSA6IF9zYXZlZFN0eWxlcztcbn07XG5cblNjcm9sbFRyaWdnZXIucmV2ZXJ0ID0gZnVuY3Rpb24gKHNvZnQsIG1lZGlhKSB7XG4gIHJldHVybiBfcmV2ZXJ0QWxsKCFzb2Z0LCBtZWRpYSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YXJzLCBhbmltYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbik7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJlZnJlc2ggPSBmdW5jdGlvbiAoc2FmZSkge1xuICByZXR1cm4gc2FmZSA/IF9vblJlc2l6ZSgpIDogKF9jb3JlSW5pdHRlZCB8fCBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKCkpICYmIF9yZWZyZXNoQWxsKHRydWUpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci51cGRhdGUgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgcmV0dXJuICsrX3Njcm9sbGVycy5jYWNoZSAmJiBfdXBkYXRlQWxsKGZvcmNlID09PSB0cnVlID8gMiA6IDApO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5jbGVhclNjcm9sbE1lbW9yeSA9IF9jbGVhclNjcm9sbE1lbW9yeTtcblxuU2Nyb2xsVHJpZ2dlci5tYXhTY3JvbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgaG9yaXpvbnRhbCkge1xuICByZXR1cm4gX21heFNjcm9sbChlbGVtZW50LCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRTY3JvbGxGdW5jID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcbiAgcmV0dXJuIF9nZXRTY3JvbGxGdW5jKF9nZXRUYXJnZXQoZWxlbWVudCksIGhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIF9pZHNbaWRdO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfdHJpZ2dlcnMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudmFycy5pZCAhPT0gXCJTY3JvbGxTbW9vdGhlclwiO1xuICB9KTtcbn07IC8vIGl0J3MgY29tbW9uIGZvciBwZW9wbGUgdG8gU2Nyb2xsVHJpZ2dlci5nZXRBbGwodCA9PiB0LmtpbGwoKSkgb24gcGFnZSByb3V0ZXMsIGZvciBleGFtcGxlLCBhbmQgd2UgZG9uJ3Qgd2FudCBpdCB0byBydWluIHNtb290aCBzY3JvbGxpbmcgYnkga2lsbGluZyB0aGUgbWFpbiBTY3JvbGxTbW9vdGhlciBvbmUuXG5cblxuU2Nyb2xsVHJpZ2dlci5pc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhX2xhc3RTY3JvbGxUaW1lO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5zbmFwRGlyZWN0aW9uYWwgPSBfc25hcERpcmVjdGlvbmFsO1xuXG5TY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdIHx8IChfbGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSxcbiAgICAgIGkgPSBhICYmIGEuaW5kZXhPZihjYWxsYmFjayk7XG4gIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuYmF0Y2ggPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICB2YXJzQ29weSA9IHt9LFxuICAgICAgaW50ZXJ2YWwgPSB2YXJzLmludGVydmFsIHx8IDAuMDE2LFxuICAgICAgYmF0Y2hNYXggPSB2YXJzLmJhdGNoTWF4IHx8IDFlOSxcbiAgICAgIHByb3h5Q2FsbGJhY2sgPSBmdW5jdGlvbiBwcm94eUNhbGxiYWNrKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHRyaWdnZXJzID0gW10sXG4gICAgICAgIGRlbGF5ID0gZ3NhcC5kZWxheWVkQ2FsbChpbnRlcnZhbCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2soZWxlbWVudHMsIHRyaWdnZXJzKTtcbiAgICAgIGVsZW1lbnRzID0gW107XG4gICAgICB0cmlnZ2VycyA9IFtdO1xuICAgIH0pLnBhdXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgICBlbGVtZW50cy5sZW5ndGggfHwgZGVsYXkucmVzdGFydCh0cnVlKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goc2VsZi50cmlnZ2VyKTtcbiAgICAgIHRyaWdnZXJzLnB1c2goc2VsZik7XG4gICAgICBiYXRjaE1heCA8PSBlbGVtZW50cy5sZW5ndGggJiYgZGVsYXkucHJvZ3Jlc3MoMSk7XG4gICAgfTtcbiAgfSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICB2YXJzQ29weVtwXSA9IHAuc3Vic3RyKDAsIDIpID09PSBcIm9uXCIgJiYgX2lzRnVuY3Rpb24odmFyc1twXSkgJiYgcCAhPT0gXCJvblJlZnJlc2hJbml0XCIgPyBwcm94eUNhbGxiYWNrKHAsIHZhcnNbcF0pIDogdmFyc1twXTtcbiAgfVxuXG4gIGlmIChfaXNGdW5jdGlvbihiYXRjaE1heCkpIHtcbiAgICBiYXRjaE1heCA9IGJhdGNoTWF4KCk7XG5cbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXRjaE1heCA9IHZhcnMuYmF0Y2hNYXgoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgIGZvciAocCBpbiB2YXJzQ29weSkge1xuICAgICAgY29uZmlnW3BdID0gdmFyc0NvcHlbcF07XG4gICAgfVxuXG4gICAgY29uZmlnLnRyaWdnZXIgPSB0YXJnZXQ7XG4gICAgcmVzdWx0LnB1c2goU2Nyb2xsVHJpZ2dlci5jcmVhdGUoY29uZmlnKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyB0byByZWR1Y2UgZmlsZSBzaXplLiBjbGFtcHMgdGhlIHNjcm9sbCBhbmQgYWxzbyByZXR1cm5zIGEgZHVyYXRpb24gbXVsdGlwbGllciBzbyB0aGF0IGlmIHRoZSBzY3JvbGwgZ2V0cyBjaG9wcGVkIHNob3J0ZXIsIHRoZSBkdXJhdGlvbiBnZXRzIGN1cnRhaWxlZCBhcyB3ZWxsIChvdGhlcndpc2UgaWYgeW91J3JlIHZlcnkgY2xvc2UgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSwgZm9yIGV4YW1wbGUsIGFuZCBzd2lwZSB1cCByZWFsbHkgZmFzdCwgaXQnbGwgc3VkZGVubHkgc2xvdyBkb3duIGFuZCB0YWtlIGEgbG9uZyB0aW1lIHRvIHJlYWNoIHRoZSB0b3ApLlxuXG5cbnZhciBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIgPSBmdW5jdGlvbiBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuYywgY3VycmVudCwgZW5kLCBtYXgpIHtcbiAgY3VycmVudCA+IG1heCA/IHNjcm9sbEZ1bmMobWF4KSA6IGN1cnJlbnQgPCAwICYmIHNjcm9sbEZ1bmMoMCk7XG4gIHJldHVybiBlbmQgPiBtYXggPyAobWF4IC0gY3VycmVudCkgLyAoZW5kIC0gY3VycmVudCkgOiBlbmQgPCAwID8gY3VycmVudCAvIChjdXJyZW50IC0gZW5kKSA6IDE7XG59LFxuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcgPSBmdW5jdGlvbiBfYWxsb3dOYXRpdmVQYW5uaW5nKHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHRydWUpIHtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnN0eWxlLnRvdWNoQWN0aW9uID0gZGlyZWN0aW9uID09PSB0cnVlID8gXCJhdXRvXCIgOiBkaXJlY3Rpb24gPyBcInBhbi1cIiArIGRpcmVjdGlvbiArIChPYnNlcnZlci5pc1RvdWNoID8gXCIgcGluY2gtem9vbVwiIDogXCJcIikgOiBcIm5vbmVcIjsgLy8gbm90ZTogRmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgaXQgcGluY2gtem9vbSBwcm9wZXJseSwgYXQgbGVhc3QgaW4gYWRkaXRpb24gdG8gYSBwYW4teCBvciBwYW4teS5cbiAgfVxuXG4gIHRhcmdldCA9PT0gX2RvY0VsICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcoX2JvZHksIGRpcmVjdGlvbik7XG59LFxuICAgIF9vdmVyZmxvdyA9IHtcbiAgYXV0bzogMSxcbiAgc2Nyb2xsOiAxXG59LFxuICAgIF9uZXN0ZWRTY3JvbGwgPSBmdW5jdGlvbiBfbmVzdGVkU2Nyb2xsKF9yZWY1KSB7XG4gIHZhciBldmVudCA9IF9yZWY1LmV2ZW50LFxuICAgICAgdGFyZ2V0ID0gX3JlZjUudGFyZ2V0LFxuICAgICAgYXhpcyA9IF9yZWY1LmF4aXM7XG5cbiAgdmFyIG5vZGUgPSAoZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50KS50YXJnZXQsXG4gICAgICBjYWNoZSA9IG5vZGUuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKG5vZGUpLFxuICAgICAgdGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBjcztcblxuICBpZiAoIWNhY2hlLl9pc1Njcm9sbFQgfHwgdGltZSAtIGNhY2hlLl9pc1Njcm9sbFQgPiAyMDAwKSB7XG4gICAgLy8gY2FjaGUgZm9yIDIgc2Vjb25kcyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IF9ib2R5ICYmIChub2RlLnNjcm9sbEhlaWdodCA8PSBub2RlLmNsaWVudEhlaWdodCAmJiBub2RlLnNjcm9sbFdpZHRoIDw9IG5vZGUuY2xpZW50V2lkdGggfHwgIShfb3ZlcmZsb3dbKGNzID0gX2dldENvbXB1dGVkU3R5bGUobm9kZSkpLm92ZXJmbG93WV0gfHwgX292ZXJmbG93W2NzLm92ZXJmbG93WF0pKSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBjYWNoZS5faXNTY3JvbGwgPSBub2RlICYmIG5vZGUgIT09IHRhcmdldCAmJiAhX2lzVmlld3BvcnQobm9kZSkgJiYgKF9vdmVyZmxvd1soY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSkub3ZlcmZsb3dZXSB8fCBfb3ZlcmZsb3dbY3Mub3ZlcmZsb3dYXSk7XG4gICAgY2FjaGUuX2lzU2Nyb2xsVCA9IHRpbWU7XG4gIH1cblxuICBpZiAoY2FjaGUuX2lzU2Nyb2xsIHx8IGF4aXMgPT09IFwieFwiKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuX2dzYXBBbGxvdyA9IHRydWU7XG4gIH1cbn0sXG4gICAgLy8gY2FwdHVyZSBldmVudHMgb24gc2Nyb2xsYWJsZSBlbGVtZW50cyBJTlNJREUgdGhlIDxib2R5PiBhbmQgYWxsb3cgdGhvc2UgYnkgY2FsbGluZyBzdG9wUHJvcGFnYXRpb24oKSB3aGVuIHdlIGZpbmQgYSBzY3JvbGxhYmxlIGFuY2VzdG9yXG5faW5wdXRPYnNlcnZlciA9IGZ1bmN0aW9uIF9pbnB1dE9ic2VydmVyKHRhcmdldCwgdHlwZSwgaW5wdXRzLCBuZXN0ZWQpIHtcbiAgcmV0dXJuIE9ic2VydmVyLmNyZWF0ZSh7XG4gICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgY2FwdHVyZTogdHJ1ZSxcbiAgICBkZWJvdW5jZTogZmFsc2UsXG4gICAgbG9ja0F4aXM6IHRydWUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBvbldoZWVsOiBuZXN0ZWQgPSBuZXN0ZWQgJiYgX25lc3RlZFNjcm9sbCxcbiAgICBvblByZXNzOiBuZXN0ZWQsXG4gICAgb25EcmFnOiBuZXN0ZWQsXG4gICAgb25TY3JvbGw6IG5lc3RlZCxcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gb25FbmFibGUoKSB7XG4gICAgICByZXR1cm4gaW5wdXRzICYmIF9hZGRMaXN0ZW5lcihfZG9jLCBPYnNlcnZlci5ldmVudFR5cGVzWzBdLCBfY2FwdHVyZUlucHV0cywgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICByZXR1cm4gX3JlbW92ZUxpc3RlbmVyKF9kb2MsIE9ic2VydmVyLmV2ZW50VHlwZXNbMF0sIF9jYXB0dXJlSW5wdXRzLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSxcbiAgICBfaW5wdXRFeHAgPSAvKGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkvaSxcbiAgICBfaW5wdXRJc0ZvY3VzZWQsXG4gICAgX2NhcHR1cmVJbnB1dHMgPSBmdW5jdGlvbiBfY2FwdHVyZUlucHV0cyhlKSB7XG4gIHZhciBpc0lucHV0ID0gX2lucHV0RXhwLnRlc3QoZS50YXJnZXQudGFnTmFtZSk7XG5cbiAgaWYgKGlzSW5wdXQgfHwgX2lucHV0SXNGb2N1c2VkKSB7XG4gICAgZS5fZ3NhcEFsbG93ID0gdHJ1ZTtcbiAgICBfaW5wdXRJc0ZvY3VzZWQgPSBpc0lucHV0O1xuICB9XG59LFxuICAgIF9nZXRTY3JvbGxOb3JtYWxpemVyID0gZnVuY3Rpb24gX2dldFNjcm9sbE5vcm1hbGl6ZXIodmFycykge1xuICBfaXNPYmplY3QodmFycykgfHwgKHZhcnMgPSB7fSk7XG4gIHZhcnMucHJldmVudERlZmF1bHQgPSB2YXJzLmlzTm9ybWFsaXplciA9IHZhcnMuYWxsb3dDbGlja3MgPSB0cnVlO1xuICB2YXJzLnR5cGUgfHwgKHZhcnMudHlwZSA9IFwid2hlZWwsdG91Y2hcIik7XG4gIHZhcnMuZGVib3VuY2UgPSAhIXZhcnMuZGVib3VuY2U7XG4gIHZhcnMuaWQgPSB2YXJzLmlkIHx8IFwibm9ybWFsaXplclwiO1xuXG4gIHZhciBfdmFyczIgPSB2YXJzLFxuICAgICAgbm9ybWFsaXplU2Nyb2xsWCA9IF92YXJzMi5ub3JtYWxpemVTY3JvbGxYLFxuICAgICAgbW9tZW50dW0gPSBfdmFyczIubW9tZW50dW0sXG4gICAgICBhbGxvd05lc3RlZFNjcm9sbCA9IF92YXJzMi5hbGxvd05lc3RlZFNjcm9sbCxcbiAgICAgIG9uUmVsZWFzZSA9IF92YXJzMi5vblJlbGVhc2UsXG4gICAgICBzZWxmLFxuICAgICAgbWF4WSxcbiAgICAgIHRhcmdldCA9IF9nZXRUYXJnZXQodmFycy50YXJnZXQpIHx8IF9kb2NFbCxcbiAgICAgIHNtb290aGVyID0gZ3NhcC5jb3JlLmdsb2JhbHMoKS5TY3JvbGxTbW9vdGhlcixcbiAgICAgIHNtb290aGVySW5zdGFuY2UgPSBzbW9vdGhlciAmJiBzbW9vdGhlci5nZXQoKSxcbiAgICAgIGNvbnRlbnQgPSBfZml4SU9TQnVnICYmICh2YXJzLmNvbnRlbnQgJiYgX2dldFRhcmdldCh2YXJzLmNvbnRlbnQpIHx8IHNtb290aGVySW5zdGFuY2UgJiYgdmFycy5jb250ZW50ICE9PSBmYWxzZSAmJiAhc21vb3RoZXJJbnN0YW5jZS5zbW9vdGgoKSAmJiBzbW9vdGhlckluc3RhbmNlLmNvbnRlbnQoKSksXG4gICAgICBzY3JvbGxGdW5jWSA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX3ZlcnRpY2FsKSxcbiAgICAgIHNjcm9sbEZ1bmNYID0gX2dldFNjcm9sbEZ1bmModGFyZ2V0LCBfaG9yaXpvbnRhbCksXG4gICAgICBzY2FsZSA9IDEsXG4gICAgICBpbml0aWFsU2NhbGUgPSAoT2JzZXJ2ZXIuaXNUb3VjaCAmJiBfd2luLnZpc3VhbFZpZXdwb3J0ID8gX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSAqIF93aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiBfd2luLm91dGVyV2lkdGgpIC8gX3dpbi5pbm5lcldpZHRoLFxuICAgICAgd2hlZWxSZWZyZXNoID0gMCxcbiAgICAgIHJlc29sdmVNb21lbnR1bUR1cmF0aW9uID0gX2lzRnVuY3Rpb24obW9tZW50dW0pID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb21lbnR1bShzZWxmKTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW9tZW50dW0gfHwgMi44O1xuICB9LFxuICAgICAgbGFzdFJlZnJlc2hJRCxcbiAgICAgIHNraXBUb3VjaE1vdmUsXG4gICAgICBpbnB1dE9ic2VydmVyID0gX2lucHV0T2JzZXJ2ZXIodGFyZ2V0LCB2YXJzLnR5cGUsIHRydWUsIGFsbG93TmVzdGVkU2Nyb2xsKSxcbiAgICAgIHJlc3VtZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIHJlc3VtZVRvdWNoTW92ZSgpIHtcbiAgICByZXR1cm4gc2tpcFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9LFxuICAgICAgc2Nyb2xsQ2xhbXBYID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgc2Nyb2xsQ2xhbXBZID0gX3Bhc3NUaHJvdWdoLFxuICAgICAgdXBkYXRlQ2xhbXBzID0gZnVuY3Rpb24gdXBkYXRlQ2xhbXBzKCkge1xuICAgIG1heFkgPSBfbWF4U2Nyb2xsKHRhcmdldCwgX3ZlcnRpY2FsKTtcbiAgICBzY3JvbGxDbGFtcFkgPSBfY2xhbXAoX2ZpeElPU0J1ZyA/IDEgOiAwLCBtYXhZKTtcbiAgICBub3JtYWxpemVTY3JvbGxYICYmIChzY3JvbGxDbGFtcFggPSBfY2xhbXAoMCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSkpO1xuICAgIGxhc3RSZWZyZXNoSUQgPSBfcmVmcmVzaElEO1xuICB9LFxuICAgICAgcmVtb3ZlQ29udGVudE9mZnNldCA9IGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnRPZmZzZXQoKSB7XG4gICAgY29udGVudC5fZ3NhcC55ID0gX3JvdW5kKHBhcnNlRmxvYXQoY29udGVudC5fZ3NhcC55KSArIHNjcm9sbEZ1bmNZLm9mZnNldCkgKyBcInB4XCI7XG4gICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgcGFyc2VGbG9hdChjb250ZW50Ll9nc2FwLnkpICsgXCIsIDAsIDEpXCI7XG4gICAgc2Nyb2xsRnVuY1kub2Zmc2V0ID0gc2Nyb2xsRnVuY1kuY2FjaGVJRCA9IDA7XG4gIH0sXG4gICAgICBpZ25vcmVEcmFnID0gZnVuY3Rpb24gaWdub3JlRHJhZygpIHtcbiAgICBpZiAoc2tpcFRvdWNoTW92ZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc3VtZVRvdWNoTW92ZSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSBfcm91bmQoc2VsZi5kZWx0YVkgLyAyKSxcbiAgICAgICAgICBzY3JvbGwgPSBzY3JvbGxDbGFtcFkoc2Nyb2xsRnVuY1kudiAtIG9mZnNldCk7XG5cbiAgICAgIGlmIChjb250ZW50ICYmIHNjcm9sbCAhPT0gc2Nyb2xsRnVuY1kudiArIHNjcm9sbEZ1bmNZLm9mZnNldCkge1xuICAgICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgPSBzY3JvbGwgLSBzY3JvbGxGdW5jWS52O1xuXG4gICAgICAgIHZhciB5ID0gX3JvdW5kKChwYXJzZUZsb2F0KGNvbnRlbnQgJiYgY29udGVudC5fZ3NhcC55KSB8fCAwKSAtIHNjcm9sbEZ1bmNZLm9mZnNldCk7XG5cbiAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIFwiICsgeSArIFwiLCAwLCAxKVwiO1xuICAgICAgICBjb250ZW50Ll9nc2FwLnkgPSB5ICsgXCJweFwiO1xuICAgICAgICBzY3JvbGxGdW5jWS5jYWNoZUlEID0gX3Njcm9sbGVycy5jYWNoZTtcblxuICAgICAgICBfdXBkYXRlQWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNjcm9sbEZ1bmNZLm9mZnNldCAmJiByZW1vdmVDb250ZW50T2Zmc2V0KCk7XG4gICAgc2tpcFRvdWNoTW92ZSA9IHRydWU7XG4gIH0sXG4gICAgICB0d2VlbixcbiAgICAgIHN0YXJ0U2Nyb2xsWCxcbiAgICAgIHN0YXJ0U2Nyb2xsWSxcbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLFxuICAgICAgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiB0aGUgd2luZG93IHJlc2l6ZXMsIGxpa2Ugb24gYW4gaVBob25lIHdoaWNoIEFwcGxlIEZPUkNFUyB0aGUgYWRkcmVzcyBiYXIgdG8gc2hvdy9oaWRlIGV2ZW4gaWYgd2UgZXZlbnQucHJldmVudERlZmF1bHQoKSwgaXQgbWF5IGJlIHNjcm9sbGluZyB0b28gZmFyIG5vdyB0aGF0IHRoZSBhZGRyZXNzIGJhciBpcyBzaG93aW5nLCBzbyB3ZSBtdXN0IGR5bmFtaWNhbGx5IGFkanVzdCB0aGUgbW9tZW50dW0gdHdlZW4uXG4gICAgdXBkYXRlQ2xhbXBzKCk7XG5cbiAgICBpZiAodHdlZW4uaXNBY3RpdmUoKSAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPiBtYXhZKSB7XG4gICAgICBzY3JvbGxGdW5jWSgpID4gbWF4WSA/IHR3ZWVuLnByb2dyZXNzKDEpICYmIHNjcm9sbEZ1bmNZKG1heFkpIDogdHdlZW4ucmVzZXRUbyhcInNjcm9sbFlcIiwgbWF4WSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRlbnQgJiYgZ3NhcC5zZXQoY29udGVudCwge1xuICAgIHk6IFwiKz0wXCJcbiAgfSk7IC8vIHRvIGVuc3VyZSB0aGVyZSdzIGEgY2FjaGUgKGVsZW1lbnQuX2dzYXApXG5cbiAgdmFycy5pZ25vcmVDaGVjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIF9maXhJT1NCdWcgJiYgZS50eXBlID09PSBcInRvdWNobW92ZVwiICYmIGlnbm9yZURyYWcoZSkgfHwgc2NhbGUgPiAxLjA1ICYmIGUudHlwZSAhPT0gXCJ0b3VjaHN0YXJ0XCIgfHwgc2VsZi5pc0dlc3R1cmluZyB8fCBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG5cbiAgdmFycy5vblByZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHNraXBUb3VjaE1vdmUgPSBmYWxzZTtcbiAgICB2YXIgcHJldlNjYWxlID0gc2NhbGU7XG4gICAgc2NhbGUgPSBfcm91bmQoKF93aW4udmlzdWFsVmlld3BvcnQgJiYgX3dpbi52aXN1YWxWaWV3cG9ydC5zY2FsZSB8fCAxKSAvIGluaXRpYWxTY2FsZSk7XG4gICAgdHdlZW4ucGF1c2UoKTtcbiAgICBwcmV2U2NhbGUgIT09IHNjYWxlICYmIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBzY2FsZSA+IDEuMDEgPyB0cnVlIDogbm9ybWFsaXplU2Nyb2xsWCA/IGZhbHNlIDogXCJ4XCIpO1xuICAgIHN0YXJ0U2Nyb2xsWCA9IHNjcm9sbEZ1bmNYKCk7XG4gICAgc3RhcnRTY3JvbGxZID0gc2Nyb2xsRnVuY1koKTtcbiAgICB1cGRhdGVDbGFtcHMoKTtcbiAgICBsYXN0UmVmcmVzaElEID0gX3JlZnJlc2hJRDtcbiAgfTtcblxuICB2YXJzLm9uUmVsZWFzZSA9IHZhcnMub25HZXN0dXJlU3RhcnQgPSBmdW5jdGlvbiAoc2VsZiwgd2FzRHJhZ2dpbmcpIHtcbiAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuXG4gICAgaWYgKCF3YXNEcmFnZ2luZykge1xuICAgICAgb25TdG9wRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Njcm9sbGVycy5jYWNoZSsrOyAvLyBtYWtlIHN1cmUgd2UncmUgcHVsbGluZyB0aGUgbm9uLWNhY2hlZCB2YWx1ZVxuICAgICAgLy8gYWx0ZXJuYXRlIGFsZ29yaXRobTogZHVyWCA9IE1hdGgubWluKDYsIE1hdGguYWJzKHNlbGYudmVsb2NpdHlYIC8gODAwKSksXHRkdXIgPSBNYXRoLm1heChkdXJYLCBNYXRoLm1pbig2LCBNYXRoLmFicyhzZWxmLnZlbG9jaXR5WSAvIDgwMCkpKTsgZHVyID0gZHVyICogKDAuNCArICgxIC0gX3Bvd2VyNEluKGR1ciAvIDYpKSAqIDAuNikpICogKG1vbWVudHVtU3BlZWQgfHwgMSlcblxuICAgICAgdmFyIGR1ciA9IHJlc29sdmVNb21lbnR1bUR1cmF0aW9uKCksXG4gICAgICAgICAgY3VycmVudFNjcm9sbCxcbiAgICAgICAgICBlbmRTY3JvbGw7XG5cbiAgICAgIGlmIChub3JtYWxpemVTY3JvbGxYKSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBzY3JvbGxGdW5jWCgpO1xuICAgICAgICBlbmRTY3JvbGwgPSBjdXJyZW50U2Nyb2xsICsgZHVyICogMC4wNSAqIC1zZWxmLnZlbG9jaXR5WCAvIDAuMjI3OyAvLyB0aGUgY29uc3RhbnQgLjIyNyBpcyBmcm9tIHBvd2VyNCgwLjA1KS4gdmVsb2NpdHkgaXMgaW52ZXJ0ZWQgYmVjYXVzZSBzY3JvbGxpbmcgZ29lcyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuXG4gICAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1gsIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF9ob3Jpem9udGFsKSk7XG4gICAgICAgIHR3ZWVuLnZhcnMuc2Nyb2xsWCA9IHNjcm9sbENsYW1wWChlbmRTY3JvbGwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsRnVuY1koKTtcbiAgICAgIGVuZFNjcm9sbCA9IGN1cnJlbnRTY3JvbGwgKyBkdXIgKiAwLjA1ICogLXNlbGYudmVsb2NpdHlZIC8gMC4yMjc7IC8vIHRoZSBjb25zdGFudCAuMjI3IGlzIGZyb20gcG93ZXI0KDAuMDUpXG5cbiAgICAgIGR1ciAqPSBfY2xhbXBTY3JvbGxBbmRHZXREdXJhdGlvbk11bHRpcGxpZXIoc2Nyb2xsRnVuY1ksIGN1cnJlbnRTY3JvbGwsIGVuZFNjcm9sbCwgX21heFNjcm9sbCh0YXJnZXQsIF92ZXJ0aWNhbCkpO1xuICAgICAgdHdlZW4udmFycy5zY3JvbGxZID0gc2Nyb2xsQ2xhbXBZKGVuZFNjcm9sbCk7XG4gICAgICB0d2Vlbi5pbnZhbGlkYXRlKCkuZHVyYXRpb24oZHVyKS5wbGF5KDAuMDEpO1xuXG4gICAgICBpZiAoX2ZpeElPU0J1ZyAmJiB0d2Vlbi52YXJzLnNjcm9sbFkgPj0gbWF4WSB8fCBjdXJyZW50U2Nyb2xsID49IG1heFkgLSAxKSB7XG4gICAgICAgIC8vIGlPUyBidWc6IGl0J2xsIHNob3cgdGhlIGFkZHJlc3MgYmFyIGJ1dCBOT1QgZmlyZSB0aGUgd2luZG93IFwicmVzaXplXCIgZXZlbnQgdW50aWwgdGhlIGFuaW1hdGlvbiBpcyBkb25lIGJ1dCB3ZSBtdXN0IHByb3RlY3QgYWdhaW5zdCBvdmVyc2hvb3Qgc28gd2UgbGV2ZXJhZ2UgYW4gb25VcGRhdGUgdG8gZG8gc28uXG4gICAgICAgIGdzYXAudG8oe30sIHtcbiAgICAgICAgICBvblVwZGF0ZTogb25SZXNpemUsXG4gICAgICAgICAgZHVyYXRpb246IGR1clxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbGVhc2UgJiYgb25SZWxlYXNlKHNlbGYpO1xuICB9O1xuXG4gIHZhcnMub25XaGVlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0d2Vlbi5fdHMgJiYgdHdlZW4ucGF1c2UoKTtcblxuICAgIGlmIChfZ2V0VGltZSgpIC0gd2hlZWxSZWZyZXNoID4gMTAwMCkge1xuICAgICAgLy8gYWZ0ZXIgMSBzZWNvbmQsIHJlZnJlc2ggdGhlIGNsYW1wcyBvdGhlcndpc2UgdGhhdCdsbCBvbmx5IGhhcHBlbiB3aGVuIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIGlzIGNhbGxlZCBvciBmb3IgdG91Y2gtc2Nyb2xsaW5nLlxuICAgICAgbGFzdFJlZnJlc2hJRCA9IDA7XG4gICAgICB3aGVlbFJlZnJlc2ggPSBfZ2V0VGltZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXJzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHNlbGYsIGR4LCBkeSwgeEFycmF5LCB5QXJyYXkpIHtcbiAgICBfcmVmcmVzaElEICE9PSBsYXN0UmVmcmVzaElEICYmIHVwZGF0ZUNsYW1wcygpO1xuICAgIGR4ICYmIG5vcm1hbGl6ZVNjcm9sbFggJiYgc2Nyb2xsRnVuY1goc2Nyb2xsQ2xhbXBYKHhBcnJheVsyXSA9PT0gZHggPyBzdGFydFNjcm9sbFggKyAoc2VsZi5zdGFydFggLSBzZWxmLngpIDogc2Nyb2xsRnVuY1goKSArIGR4IC0geEFycmF5WzFdKSk7IC8vIGZvciBtb3JlIHByZWNpc2lvbiwgd2UgdHJhY2sgcG9pbnRlci90b3VjaCBtb3ZlbWVudCBmcm9tIHRoZSBzdGFydCwgb3RoZXJ3aXNlIGl0J2xsIGRyaWZ0LlxuXG4gICAgaWYgKGR5KSB7XG4gICAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuICAgICAgdmFyIGlzVG91Y2ggPSB5QXJyYXlbMl0gPT09IGR5LFxuICAgICAgICAgIHkgPSBpc1RvdWNoID8gc3RhcnRTY3JvbGxZICsgc2VsZi5zdGFydFkgLSBzZWxmLnkgOiBzY3JvbGxGdW5jWSgpICsgZHkgLSB5QXJyYXlbMV0sXG4gICAgICAgICAgeUNsYW1wZWQgPSBzY3JvbGxDbGFtcFkoeSk7XG4gICAgICBpc1RvdWNoICYmIHkgIT09IHlDbGFtcGVkICYmIChzdGFydFNjcm9sbFkgKz0geUNsYW1wZWQgLSB5KTtcbiAgICAgIHNjcm9sbEZ1bmNZKHlDbGFtcGVkKTtcbiAgICB9XG5cbiAgICAoZHkgfHwgZHgpICYmIF91cGRhdGVBbGwoKTtcbiAgfTtcblxuICB2YXJzLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCBub3JtYWxpemVTY3JvbGxYID8gZmFsc2UgOiBcInhcIik7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoXCIsIG9uUmVzaXplKTtcblxuICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cbiAgICBpZiAoc2Nyb2xsRnVuY1kuc21vb3RoKSB7XG4gICAgICBzY3JvbGxGdW5jWS50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIjtcbiAgICAgIHNjcm9sbEZ1bmNZLnNtb290aCA9IHNjcm9sbEZ1bmNYLnNtb290aCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlucHV0T2JzZXJ2ZXIuZW5hYmxlKCk7XG4gIH07XG5cbiAgdmFycy5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2FsbG93TmF0aXZlUGFubmluZyh0YXJnZXQsIHRydWUpO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF93aW4sIFwicmVzaXplXCIsIG9uUmVzaXplKTtcblxuICAgIFNjcm9sbFRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hcIiwgb25SZXNpemUpO1xuICAgIGlucHV0T2JzZXJ2ZXIua2lsbCgpO1xuICB9O1xuXG4gIHZhcnMubG9ja0F4aXMgPSB2YXJzLmxvY2tBeGlzICE9PSBmYWxzZTtcbiAgc2VsZiA9IG5ldyBPYnNlcnZlcih2YXJzKTtcbiAgc2VsZi5pT1MgPSBfZml4SU9TQnVnOyAvLyB1c2VkIGluIHRoZSBPYnNlcnZlciBnZXRDYWNoZWRTY3JvbGwoKSBmdW5jdGlvbiB0byB3b3JrIGFyb3VuZCBhbiBpT1MgYnVnIHRoYXQgd3JlYWtzIGhhdm9jIHdpdGggVG91Y2hFdmVudC5jbGllbnRZIGlmIHdlIGFsbG93IHNjcm9sbCB0byBnbyBhbGwgdGhlIHdheSBiYWNrIHRvIDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiAhc2Nyb2xsRnVuY1koKSAmJiBzY3JvbGxGdW5jWSgxKTsgLy8gaU9TIGJ1ZyBjYXVzZXMgZXZlbnQuY2xpZW50WSB2YWx1ZXMgdG8gZnJlYWsgb3V0ICh3aWxkbHkgaW5hY2N1cmF0ZSkgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBleGFjdGx5IDAuXG5cbiAgX2ZpeElPU0J1ZyAmJiBnc2FwLnRpY2tlci5hZGQoX3Bhc3NUaHJvdWdoKTsgLy8gcHJldmVudCB0aGUgdGlja2VyIGZyb20gc2xlZXBpbmdcblxuICBvblN0b3BEZWxheWVkQ2FsbCA9IHNlbGYuX2RjO1xuICB0d2VlbiA9IGdzYXAudG8oc2VsZiwge1xuICAgIGVhc2U6IFwicG93ZXI0XCIsXG4gICAgcGF1c2VkOiB0cnVlLFxuICAgIHNjcm9sbFg6IG5vcm1hbGl6ZVNjcm9sbFggPyBcIis9MC4xXCIgOiBcIis9MFwiLFxuICAgIHNjcm9sbFk6IFwiKz0wLjFcIixcbiAgICBtb2RpZmllcnM6IHtcbiAgICAgIHNjcm9sbFk6IF9pbnRlcnJ1cHRpb25UcmFja2VyKHNjcm9sbEZ1bmNZLCBzY3JvbGxGdW5jWSgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0d2Vlbi5wYXVzZSgpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIG9uVXBkYXRlOiBfdXBkYXRlQWxsLFxuICAgIG9uQ29tcGxldGU6IG9uU3RvcERlbGF5ZWRDYWxsLnZhcnMub25Db21wbGV0ZVxuICB9KTsgLy8gd2UgbmVlZCB0aGUgbW9kaWZpZXIgdG8gc2Vuc2UgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBhbHRlcmVkIG91dHNpZGUgb2YgdGhlIG1vbWVudHVtIHR3ZWVuIChsaWtlIHdpdGggYSBzY3JvbGxUbyB0d2Vlbikgc28gd2UgY2FuIHBhdXNlKCkgaXQgdG8gcHJldmVudCBjb25mbGljdHMuXG5cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnNvcnQgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gX3RyaWdnZXJzLnNvcnQoZnVuYyB8fCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAoYS52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYgKyBhLnN0YXJ0IC0gKGIuc3RhcnQgKyAoYi52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYpO1xuICB9KTtcbn07XG5cblNjcm9sbFRyaWdnZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIodmFycyk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLm5vcm1hbGl6ZVNjcm9sbCA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIGlmICh0eXBlb2YgdmFycyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBfbm9ybWFsaXplcjtcbiAgfVxuXG4gIGlmICh2YXJzID09PSB0cnVlICYmIF9ub3JtYWxpemVyKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyLmVuYWJsZSgpO1xuICB9XG5cbiAgaWYgKHZhcnMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVyID0gdmFycyBpbnN0YW5jZW9mIE9ic2VydmVyID8gdmFycyA6IF9nZXRTY3JvbGxOb3JtYWxpemVyKHZhcnMpO1xuICBfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci50YXJnZXQgPT09IG5vcm1hbGl6ZXIudGFyZ2V0ICYmIF9ub3JtYWxpemVyLmtpbGwoKTtcbiAgX2lzVmlld3BvcnQobm9ybWFsaXplci50YXJnZXQpICYmIChfbm9ybWFsaXplciA9IG5vcm1hbGl6ZXIpO1xuICByZXR1cm4gbm9ybWFsaXplcjtcbn07XG5cblNjcm9sbFRyaWdnZXIuY29yZSA9IHtcbiAgLy8gc21hbGxlciBmaWxlIHNpemUgd2F5IHRvIGxldmVyYWdlIGluIFNjcm9sbFNtb290aGVyIGFuZCBPYnNlcnZlclxuICBfZ2V0VmVsb2NpdHlQcm9wOiBfZ2V0VmVsb2NpdHlQcm9wLFxuICBfaW5wdXRPYnNlcnZlcjogX2lucHV0T2JzZXJ2ZXIsXG4gIF9zY3JvbGxlcnM6IF9zY3JvbGxlcnMsXG4gIF9wcm94aWVzOiBfcHJveGllcyxcbiAgYnJpZGdlOiB7XG4gICAgLy8gd2hlbiBub3JtYWxpemVTY3JvbGwgc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIChzcyA9IHNldFNjcm9sbClcbiAgICBzczogZnVuY3Rpb24gc3MoKSB7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgfHwgX2Rpc3BhdGNoKFwic2Nyb2xsU3RhcnRcIik7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgPSBfZ2V0VGltZSgpO1xuICAgIH0sXG4gICAgLy8gYSB3YXkgdG8gZ2V0IHRoZSBfcmVmcmVzaGluZyB2YWx1ZSBpbiBPYnNlcnZlclxuICAgIHJlZjogZnVuY3Rpb24gcmVmKCkge1xuICAgICAgcmV0dXJuIF9yZWZyZXNoaW5nO1xuICAgIH1cbiAgfVxufTtcbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCB7IFNjcm9sbFRyaWdnZXIgYXMgZGVmYXVsdCB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2ZGVmMWI4OWU5MjRmMGZhZjE5XCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NvcmVJbml0dGVkIiwiX2NsYW1wIiwiX3dpbiIsIl9kb2MiLCJfZG9jRWwiLCJfYm9keSIsIl9pc1RvdWNoIiwiX3BvaW50ZXJUeXBlIiwiX3Jvb3QiLCJfbm9ybWFsaXplciIsIl9ldmVudFR5cGVzIiwiX2NvbnRleHQiLCJfZ2V0R1NBUCIsIl9zdGFydHVwIiwiX29ic2VydmVycyIsIl9zY3JvbGxlcnMiLCJfcHJveGllcyIsIl9nZXRUaW1lIiwiRGF0ZSIsIm5vdyIsIl9icmlkZ2UiLCJuYW1lIiwidmFsdWUiLCJfaW50ZWdyYXRlIiwiY29yZSIsImRhdGEiLCJicmlkZ2UiLCJzY3JvbGxlcnMiLCJwcm94aWVzIiwicHVzaCIsImFwcGx5IiwiX2dldFByb3h5UHJvcCIsInByb3BlcnR5IiwiaW5kZXhPZiIsIl9pc1ZpZXdwb3J0IiwiZWwiLCJfYWRkTGlzdGVuZXIiLCJ0eXBlIiwiZnVuYyIsIm5vblBhc3NpdmUiLCJjYXB0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJfcmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3Njcm9sbExlZnQiLCJfc2Nyb2xsVG9wIiwiX29uU2Nyb2xsIiwiaXNQcmVzc2VkIiwiY2FjaGUiLCJfc2Nyb2xsQ2FjaGVGdW5jIiwiZiIsImRvTm90Q2FjaGUiLCJjYWNoaW5nRnVuYyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsImlzTm9ybWFsaXppbmciLCJ2IiwiTWF0aCIsInJvdW5kIiwiaU9TIiwiY2FjaGVJRCIsIm9mZnNldCIsIl9ob3Jpem9udGFsIiwicyIsInAiLCJwMiIsIm9zIiwib3MyIiwiZCIsImQyIiwiYSIsInNjIiwiYXJndW1lbnRzIiwic2Nyb2xsVG8iLCJfdmVydGljYWwiLCJwYWdlWE9mZnNldCIsIm9wIiwicGFnZVlPZmZzZXQiLCJfZ2V0VGFyZ2V0IiwidCIsInNlbGYiLCJfY3R4Iiwic2VsZWN0b3IiLCJ1dGlscyIsInRvQXJyYXkiLCJjb25maWciLCJudWxsVGFyZ2V0V2FybiIsIndhcm4iLCJfZ2V0U2Nyb2xsRnVuYyIsIl9yZWYiLCJzY3JvbGxpbmdFbGVtZW50IiwicHJldiIsInNtb290aCIsImdldFByb3BlcnR5IiwiX2dldFZlbG9jaXR5UHJvcCIsIm1pblRpbWVSZWZyZXNoIiwidXNlRGVsdGEiLCJ2MSIsInYyIiwidDEiLCJ0MiIsIm1pbiIsImRyb3BUb1plcm9UaW1lIiwibWF4IiwidXBkYXRlIiwiZm9yY2UiLCJyZXNldCIsImdldFZlbG9jaXR5IiwibGF0ZXN0VmFsdWUiLCJ0T2xkIiwidk9sZCIsIl9nZXRFdmVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9nc2FwQWxsb3ciLCJjaGFuZ2VkVG91Y2hlcyIsIl9nZXRBYnNvbHV0ZU1heCIsImFicyIsIl9zZXRTY3JvbGxUcmlnZ2VyIiwiZ2xvYmFscyIsIl9pbml0Q29yZSIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsImNsYW1wIiwiY29udGV4dCIsIk9ic2VydmVyIiwiaXNUb3VjaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiZXZlbnRUeXBlcyIsInNwbGl0Iiwic2V0VGltZW91dCIsInZhcnMiLCJpbml0IiwiX3Byb3RvIiwidG9sZXJhbmNlIiwiZHJhZ01pbmltdW0iLCJsaW5lSGVpZ2h0IiwiZGVib3VuY2UiLCJvblN0b3AiLCJvblN0b3BEZWxheSIsImlnbm9yZSIsIndoZWVsU3BlZWQiLCJldmVudCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwib25EcmFnIiwib25QcmVzcyIsIm9uUmVsZWFzZSIsIm9uUmlnaHQiLCJvbkxlZnQiLCJvblVwIiwib25Eb3duIiwib25DaGFuZ2VYIiwib25DaGFuZ2VZIiwib25DaGFuZ2UiLCJvblRvZ2dsZVgiLCJvblRvZ2dsZVkiLCJvbkhvdmVyIiwib25Ib3ZlckVuZCIsIm9uTW92ZSIsImlnbm9yZUNoZWNrIiwiaXNOb3JtYWxpemVyIiwib25HZXN0dXJlU3RhcnQiLCJvbkdlc3R1cmVFbmQiLCJvbldoZWVsIiwib25FbmFibGUiLCJvbkRpc2FibGUiLCJvbkNsaWNrIiwic2Nyb2xsU3BlZWQiLCJhbGxvd0NsaWNrcyIsImxvY2tBeGlzIiwib25Mb2NrQXhpcyIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaWQiLCJvblN0b3BEZWxheWVkQ2FsbCIsImRyYWdnZWQiLCJtb3ZlZCIsIndoZWVsZWQiLCJsb2NrZWQiLCJheGlzIiwicHJldkRlbHRhWCIsInByZXZEZWx0YVkiLCJzY3JvbGxGdW5jWCIsInNjcm9sbEZ1bmNZIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJsaW1pdFRvVG91Y2giLCJpc1ZpZXdwb3J0Iiwib3duZXJEb2MiLCJvd25lckRvY3VtZW50IiwiZGVsdGFYIiwiZGVsdGFZIiwib25DbGlja1RpbWUiLCJjbGlja0NhcHR1cmUiLCJfaWdub3JlQ2hlY2siLCJpc1BvaW50ZXJPclRvdWNoIiwicG9pbnRlclR5cGUiLCJvblN0b3BGdW5jIiwiX3Z4IiwiX3Z5IiwicGF1c2UiLCJkeCIsImR5IiwiY2hhbmdlZFgiLCJjaGFuZ2VkWSIsIm9uRGVsdGEiLCJ4IiwieSIsImluZGV4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25Ub3VjaE9yUG9pbnRlckRlbHRhIiwiX29uRHJhZyIsImNsaWVudFgiLCJjbGllbnRZIiwiaXNEcmFnZ2luZyIsInN0YXJ0WCIsInN0YXJ0WSIsIl9vblByZXNzIiwiYnV0dG9uIiwiX29uUmVsZWFzZSIsImlzVHJhY2tpbmdEcmFnIiwiaXNOYU4iLCJ3YXNEcmFnZ2luZyIsImV2ZW50RGF0YSIsImRlbGF5ZWRDYWxsIiwiZGVmYXVsdFByZXZlbnRlZCIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJzeW50aGV0aWNFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwic2NyZWVuWCIsInNjcmVlblkiLCJkaXNwYXRjaEV2ZW50IiwiaXNHZXN0dXJpbmciLCJyZXN0YXJ0IiwiX29uR2VzdHVyZVN0YXJ0IiwidG91Y2hlcyIsIl9vbkdlc3R1cmVFbmQiLCJvblNjcm9sbCIsIl9vbldoZWVsIiwibXVsdGlwbGllciIsImRlbHRhTW9kZSIsImlubmVySGVpZ2h0IiwiX29uTW92ZSIsIl9vbkhvdmVyIiwiX29uSG92ZXJFbmQiLCJfb25DbGljayIsIl9kYyIsImVuYWJsZSIsImlzRW5hYmxlZCIsImRpc2FibGUiLCJmaWx0ZXIiLCJvIiwia2lsbCIsInJldmVydCIsInNwbGljZSIsImdldCIsInZlcnNpb24iLCJjcmVhdGUiLCJyZWdpc3RlciIsImdldEFsbCIsInNsaWNlIiwiZ2V0QnlJZCIsImRlZmF1bHQiLCJfcmVzaXplRGVsYXkiLCJfdG9BcnJheSIsIl90aW1lMiIsIl9zeW5jSW50ZXJ2YWwiLCJfcmVmcmVzaGluZyIsIl9wb2ludGVySXNEb3duIiwiX3RyYW5zZm9ybVByb3AiLCJfaSIsIl9wcmV2V2lkdGgiLCJfcHJldkhlaWdodCIsIl9hdXRvUmVmcmVzaCIsIl9zb3J0IiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl9pZ25vcmVSZXNpemUiLCJfaWdub3JlTW9iaWxlUmVzaXplIiwiX2Jhc2VTY3JlZW5IZWlnaHQiLCJfYmFzZVNjcmVlbldpZHRoIiwiX2ZpeElPU0J1ZyIsIl9zY3JvbGxSZXN0b3JhdGlvbiIsIl9kaXYxMDB2aCIsIl8xMDB2aCIsIl9saW1pdENhbGxiYWNrcyIsIl90aW1lMSIsIl9sYXN0U2Nyb2xsVGltZSIsIl9lbmFibGVkIiwiX3BhcnNlQ2xhbXAiLCJfaXNTdHJpbmciLCJzdWJzdHIiLCJfa2VlcENsYW1wIiwiX3JhZkJ1Z0ZpeCIsIl9wb2ludGVyRG93bkhhbmRsZXIiLCJfcG9pbnRlclVwSGFuZGxlciIsIl9wYXNzVGhyb3VnaCIsIl9yb3VuZCIsIl93aW5kb3dFeGlzdHMiLCJfZ2V0Vmlld3BvcnREaW1lbnNpb24iLCJkaW1lbnNpb25Qcm9wZXJ0eSIsIl9nZXRCb3VuZHNGdW5jIiwiX3dpbk9mZnNldHMiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJfZ2V0Qm91bmRzIiwiX2dldFNpemVGdW5jIiwic2Nyb2xsZXIiLCJfZ2V0T2Zmc2V0c0Z1bmMiLCJfbWF4U2Nyb2xsIiwiX3JlZjIiLCJfaXRlcmF0ZUF1dG9SZWZyZXNoIiwiZXZlbnRzIiwiX2lzRnVuY3Rpb24iLCJfaXNOdW1iZXIiLCJfaXNPYmplY3QiLCJfZW5kQW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwicmV2ZXJzZWQiLCJwcm9ncmVzcyIsIl9jYWxsYmFjayIsImVuYWJsZWQiLCJyZXN1bHQiLCJ0b3RhbFRpbWUiLCJjYWxsYmFja0FuaW1hdGlvbiIsIl9hYnMiLCJfbGVmdCIsIl90b3AiLCJfcmlnaHQiLCJfYm90dG9tIiwiX3dpZHRoIiwiX2hlaWdodCIsIl9SaWdodCIsIl9MZWZ0IiwiX1RvcCIsIl9Cb3R0b20iLCJfcGFkZGluZyIsIl9tYXJnaW4iLCJfV2lkdGgiLCJfSGVpZ2h0IiwiX3B4IiwiX2dldENvbXB1dGVkU3R5bGUiLCJfbWFrZVBvc2l0aW9uYWJsZSIsInBvc2l0aW9uIiwic3R5bGUiLCJfc2V0RGVmYXVsdHMiLCJvYmoiLCJkZWZhdWx0cyIsIndpdGhvdXRUcmFuc2Zvcm1zIiwidHdlZW4iLCJ0byIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJyb3RhdGlvbiIsInJvdGF0aW9uWCIsInJvdGF0aW9uWSIsInNjYWxlIiwic2tld1giLCJza2V3WSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIl9nZXRTaXplIiwiX3JlZjMiLCJfZ2V0TGFiZWxSYXRpb0FycmF5IiwidGltZWxpbmUiLCJsYWJlbHMiLCJkdXJhdGlvbiIsIl9nZXRDbG9zZXN0TGFiZWwiLCJzbmFwIiwiX3NuYXBEaXJlY3Rpb25hbCIsInNuYXBJbmNyZW1lbnRPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5Iiwic29ydCIsImIiLCJkaXJlY3Rpb24iLCJ0aHJlc2hvbGQiLCJzbmFwcGVkIiwiX2dldExhYmVsQXREaXJlY3Rpb24iLCJzdCIsIl9tdWx0aUxpc3RlbmVyIiwidHlwZXMiLCJjYWxsYmFjayIsImZvckVhY2giLCJfd2hlZWxMaXN0ZW5lciIsInNjcm9sbEZ1bmMiLCJ3aGVlbEhhbmRsZXIiLCJfbWFya2VyRGVmYXVsdHMiLCJzdGFydENvbG9yIiwiZW5kQ29sb3IiLCJpbmRlbnQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJfZGVmYXVsdHMiLCJ0b2dnbGVBY3Rpb25zIiwiYW50aWNpcGF0ZVBpbiIsIl9rZXl3b3JkcyIsInRvcCIsImxlZnQiLCJjZW50ZXIiLCJib3R0b20iLCJyaWdodCIsIl9vZmZzZXRUb1B4Iiwic2l6ZSIsImVxSW5kZXgiLCJyZWxhdGl2ZSIsImNoYXJBdCIsIl9jcmVhdGVNYXJrZXIiLCJjb250YWluZXIiLCJfcmVmNCIsIm1hdGNoV2lkdGhFbCIsImNvbnRhaW5lckFuaW1hdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VGaXhlZFBvc2l0aW9uIiwiaXNTY3JvbGxlciIsInBhcmVudCIsImlzU3RhcnQiLCJjb2xvciIsImNzcyIsIm9mZnNldFdpZHRoIiwiX2lzU3RhcnQiLCJzZXRBdHRyaWJ1dGUiLCJjc3NUZXh0IiwiaW5uZXJUZXh0IiwiY2hpbGRyZW4iLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIl9vZmZzZXQiLCJfcG9zaXRpb25NYXJrZXIiLCJtYXJrZXIiLCJzdGFydCIsImZsaXBwZWQiLCJkaXNwbGF5Iiwic2lkZSIsIm9wcG9zaXRlU2lkZSIsIl9pc0ZsaXBwZWQiLCJzZXQiLCJfdHJpZ2dlcnMiLCJfaWRzIiwiX3JhZklEIiwiX3N5bmMiLCJfdXBkYXRlQWxsIiwiY2xpZW50V2lkdGgiLCJfZGlzcGF0Y2giLCJfc2V0QmFzZURpbWVuc2lvbnMiLCJfb25SZXNpemUiLCJmdWxsc2NyZWVuRWxlbWVudCIsIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IiwiX2xpc3RlbmVycyIsIl9lbXB0eUFycmF5IiwiX3NvZnRSZWZyZXNoIiwiX3JlZnJlc2hBbGwiLCJtYXAiLCJfc2F2ZWRTdHlsZXMiLCJfcmV2ZXJ0UmVjb3JkZWQiLCJtZWRpYSIsInF1ZXJ5IiwiZ2V0QkJveCIsInVuY2FjaGUiLCJfcmV2ZXJ0QWxsIiwidHJpZ2dlciIsIl9jbGVhclNjcm9sbE1lbW9yeSIsIl9yZWZyZXNoaW5nQWxsIiwicmVjIiwiX3JlZnJlc2hJRCIsIl9xdWV1ZVJlZnJlc2hJRCIsIl9xdWV1ZVJlZnJlc2hBbGwiLCJfcmVmcmVzaDEwMHZoIiwib2Zmc2V0SGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJza2lwUmV2ZXJ0IiwiaXNSZWZyZXNoaW5nIiwicmVmcmVzaEluaXRzIiwic2Nyb2xsQmVoYXZpb3IiLCJyZWZyZXNoIiwiX3N1YlBpbk9mZnNldCIsInBpbiIsInByb3AiLCJob3Jpem9udGFsIiwib3JpZ2luYWwiLCJhZGp1c3RQaW5TcGFjaW5nIiwiX2RpciIsImVuZCIsIl9lbmRDbGFtcCIsInNldFBvc2l0aW9ucyIsInJlbmRlciIsIm9uUmVmcmVzaCIsIl9sYXN0U2Nyb2xsIiwiX2RpcmVjdGlvbiIsIl9wcmltYXJ5IiwiaXNVcGRhdGluZyIsImwiLCJ0aW1lIiwicmVjb3JkVmVsb2NpdHkiLCJzY3JvbGwiLCJfcHJvcE5hbWVzVG9Db3B5IiwiX3N0YXRlUHJvcHMiLCJjb25jYXQiLCJfc3dhcFBpbk91dCIsInNwYWNlciIsInN0YXRlIiwiX3NldFN0YXRlIiwiX2dzYXAiLCJzcGFjZXJJc05hdGl2ZSIsInNwYWNlclN0YXRlIiwic3dhcHBlZEluIiwicGFyZW50Tm9kZSIsIl9zd2FwUGluSW4iLCJjcyIsInNwYWNlclN0eWxlIiwicGluU3R5bGUiLCJmbGV4QmFzaXMiLCJvdmVyZmxvdyIsImJveFNpemluZyIsIl9jYXBzRXhwIiwiZ2V0Q2FjaGUiLCJyZW1vdmVQcm9wZXJ0eSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIl9nZXRTdGF0ZSIsIl9jb3B5U3RhdGUiLCJvdmVycmlkZSIsIm9taXRPZmZzZXRzIiwiX3BhcnNlUG9zaXRpb24iLCJzY3JvbGxlclNpemUiLCJtYXJrZXJTY3JvbGxlciIsInNjcm9sbGVyQm91bmRzIiwiYm9yZGVyV2lkdGgiLCJzY3JvbGxlck1heCIsImNsYW1wWmVyb1Byb3AiLCJwMSIsInNlZWsiLCJvZmZzZXRzIiwibG9jYWxPZmZzZXQiLCJnbG9iYWxPZmZzZXQiLCJtYXBSYW5nZSIsInNjcm9sbFRyaWdnZXIiLCJtIiwiX2NhU2Nyb2xsRGlzdCIsIl9wcmVmaXhFeHAiLCJfcmVwYXJlbnQiLCJfc3RPcmlnIiwidGVzdCIsIl9pbnRlcnJ1cHRpb25UcmFja2VyIiwiZ2V0VmFsdWVGdW5jIiwiaW5pdGlhbFZhbHVlIiwib25JbnRlcnJ1cHQiLCJsYXN0MSIsImxhc3QyIiwiY3VycmVudCIsIl9zaGlmdE1hcmtlciIsIl9nZXRUd2VlbkNyZWF0b3IiLCJnZXRTY3JvbGwiLCJnZXRUd2VlbiIsImNoYW5nZTEiLCJjaGFuZ2UyIiwib25Db21wbGV0ZSIsIm1vZGlmaWVycyIsImNoZWNrRm9ySW50ZXJydXB0aW9uIiwicmF0aW8iLCJvblVwZGF0ZSIsImNhbGwiLCJub2RlVHlwZSIsIl92YXJzIiwidG9nZ2xlQ2xhc3MiLCJvblRvZ2dsZSIsInNjcnViIiwicGluU3BhY2luZyIsImludmFsaWRhdGVPblJlZnJlc2giLCJvblNjcnViQ29tcGxldGUiLCJvblNuYXBDb21wbGV0ZSIsIm9uY2UiLCJwaW5SZXBhcmVudCIsInBpblNwYWNlciIsImZhc3RTY3JvbGxFbmQiLCJwcmV2ZW50T3ZlcmxhcHMiLCJpc1RvZ2dsZSIsInNjcm9sbGVyQ2FjaGUiLCJwaW5UeXBlIiwiY2FsbGJhY2tzIiwib25FbnRlciIsIm9uTGVhdmUiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwibWFya2VycyIsIm9uUmVmcmVzaEluaXQiLCJnZXRTY3JvbGxlclNpemUiLCJnZXRTY3JvbGxlck9mZnNldHMiLCJsYXN0U25hcCIsImxhc3RSZWZyZXNoIiwicHJldlByb2dyZXNzIiwidHdlZW5UbyIsInBpbkNhY2hlIiwic25hcEZ1bmMiLCJzY3JvbGwxIiwic2Nyb2xsMiIsIm1hcmtlclN0YXJ0IiwibWFya2VyRW5kIiwibWFya2VyU3RhcnRUcmlnZ2VyIiwibWFya2VyRW5kVHJpZ2dlciIsIm1hcmtlclZhcnMiLCJleGVjdXRpbmdPblJlZnJlc2giLCJjaGFuZ2UiLCJwaW5PcmlnaW5hbFN0YXRlIiwicGluQWN0aXZlU3RhdGUiLCJwaW5TdGF0ZSIsInBpbkdldHRlciIsInBpblNldHRlciIsInBpblN0YXJ0IiwicGluQ2hhbmdlIiwic3BhY2luZ1N0YXJ0IiwibWFya2VyU3RhcnRTZXR0ZXIiLCJwaW5Nb3ZlcyIsIm1hcmtlckVuZFNldHRlciIsInNuYXAxIiwic25hcDIiLCJzY3J1YlR3ZWVuIiwic2NydWJTbW9vdGgiLCJzbmFwRHVyQ2xhbXAiLCJzbmFwRGVsYXllZENhbGwiLCJwcmV2U2Nyb2xsIiwicHJldkFuaW1Qcm9ncmVzcyIsImNhTWFya2VyU2V0dGVyIiwiY3VzdG9tUmV2ZXJ0UmV0dXJuIiwiX3N0YXJ0Q2xhbXAiLCJiaW5kIiwicmVmcmVzaFByaW9yaXR5IiwidHdlZW5TY3JvbGwiLCJzY3J1YkR1cmF0aW9uIiwiZWFzZSIsInRvdGFsUHJvZ3Jlc3MiLCJwYXVzZWQiLCJsYXp5IiwiX2luaXR0ZWQiLCJpc1JldmVydGVkIiwiaW1tZWRpYXRlUmVuZGVyIiwic25hcFRvIiwiZGlyZWN0aW9uYWwiLCJkZWxheSIsInJlZnJlc2hlZFJlY2VudGx5IiwidmVsb2NpdHkiLCJuYXR1cmFsRW5kIiwiaW5lcnRpYSIsImVuZFZhbHVlIiwiZW5kU2Nyb2xsIiwiX3NuYXAiLCJvblN0YXJ0IiwiX29uSW50ZXJydXB0IiwiX29uQ29tcGxldGUiLCJpc0FjdGl2ZSIsInN0UmV2ZXJ0IiwidGFyZ2V0cyIsImNsYXNzTmFtZSIsIm5hdGl2ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JjZTNEIiwicXVpY2tTZXR0ZXIiLCJjb250ZW50Iiwib2xkT25VcGRhdGUiLCJvbGRQYXJhbXMiLCJvblVwZGF0ZVBhcmFtcyIsImV2ZW50Q2FsbGJhY2siLCJwcmV2aW91cyIsIm5leHQiLCJ0ZW1wIiwiciIsInByZXZSZWZyZXNoaW5nIiwic29mdCIsInBpbk9mZnNldCIsImludmFsaWRhdGUiLCJpc0ZpcnN0UmVmcmVzaCIsIm90aGVyUGluT2Zmc2V0IiwicGFyc2VkRW5kIiwicGFyc2VkRW5kVHJpZ2dlciIsImVuZFRyaWdnZXIiLCJwYXJzZWRTdGFydCIsInBpbm5lZENvbnRhaW5lciIsInRyaWdnZXJJbmRleCIsImlzVmVydGljYWwiLCJjdXJUcmlnZ2VyIiwiY3VyUGluIiwib3Bwb3NpdGVTY3JvbGwiLCJpbml0dGVkIiwicmV2ZXJ0ZWRQaW5zIiwiZm9yY2VkT3ZlcmZsb3ciLCJtYXJrZXJTdGFydE9mZnNldCIsIm1hcmtlckVuZE9mZnNldCIsInVuc2hpZnQiLCJfcGluUHVzaCIsIm5vcm1hbGl6ZSIsInRvVXBwZXJDYXNlIiwiY2VpbCIsIl9waW5PZmZzZXQiLCJlbmRBbmltYXRpb24iLCJsYWJlbFRvU2Nyb2xsIiwibGFiZWwiLCJnZXRUcmFpbGluZyIsInJldmVyc2UiLCJmb3JjZUZha2UiLCJjbGlwcGVkIiwid2FzQWN0aXZlIiwidG9nZ2xlU3RhdGUiLCJhY3Rpb24iLCJzdGF0ZUNoYW5nZWQiLCJ0b2dnbGVkIiwiaXNBdE1heCIsImlzVGFraW5nQWN0aW9uIiwiX2RwIiwiX3RpbWUiLCJfc3RhcnQiLCJyZXNldFRvIiwiX3RUaW1lIiwiX3REdXIiLCJuIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJrZWVwQ2xhbXAiLCJfY2hhbmdlIiwiYW1vdW50IiwiYWxsb3dBbmltYXRpb24iLCJvbktpbGwiLCJ1cGRhdGVGdW5jIiwiY2xlYXJJbnRlcnZhbCIsInN1cHByZXNzT3ZlcndyaXRlcyIsInVzZXJBZ2VudCIsIm1tIiwiYm9keVN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyVG9wU3R5bGUiLCJBbmltYXRpb25Qcm90byIsInNldEludGVydmFsIiwiY2hlY2tQcmVmaXgiLCJ3IiwiaCIsImhpZGRlbiIsImxpbWl0Q2FsbGJhY2tzIiwibXMiLCJzeW5jSW50ZXJ2YWwiLCJpZ25vcmVNb2JpbGVSZXNpemUiLCJhdXRvUmVmcmVzaEV2ZW50cyIsInNjcm9sbGVyUHJveHkiLCJjbGVhck1hdGNoTWVkaWEiLCJpc0luVmlld3BvcnQiLCJwb3NpdGlvbkluVmlld3BvcnQiLCJyZWZlcmVuY2VQb2ludCIsImtpbGxBbGwiLCJhbGxvd0xpc3RlbmVycyIsImxpc3RlbmVycyIsInNhdmVTdHlsZXMiLCJnZXRBdHRyaWJ1dGUiLCJzYWZlIiwiY2xlYXJTY3JvbGxNZW1vcnkiLCJtYXhTY3JvbGwiLCJnZXRTY3JvbGxGdW5jIiwiaXNTY3JvbGxpbmciLCJzbmFwRGlyZWN0aW9uYWwiLCJiYXRjaCIsInZhcnNDb3B5IiwiaW50ZXJ2YWwiLCJiYXRjaE1heCIsInByb3h5Q2FsbGJhY2siLCJlbGVtZW50cyIsInRyaWdnZXJzIiwiX2NsYW1wU2Nyb2xsQW5kR2V0RHVyYXRpb25NdWx0aXBsaWVyIiwiX2FsbG93TmF0aXZlUGFubmluZyIsInRvdWNoQWN0aW9uIiwiX292ZXJmbG93IiwiYXV0byIsIl9uZXN0ZWRTY3JvbGwiLCJfcmVmNSIsIm5vZGUiLCJfaXNTY3JvbGxUIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJfaXNTY3JvbGwiLCJzdG9wUHJvcGFnYXRpb24iLCJfaW5wdXRPYnNlcnZlciIsImlucHV0cyIsIm5lc3RlZCIsIl9jYXB0dXJlSW5wdXRzIiwiX2lucHV0RXhwIiwiX2lucHV0SXNGb2N1c2VkIiwiaXNJbnB1dCIsInRhZ05hbWUiLCJfZ2V0U2Nyb2xsTm9ybWFsaXplciIsIl92YXJzMiIsIm5vcm1hbGl6ZVNjcm9sbFgiLCJtb21lbnR1bSIsImFsbG93TmVzdGVkU2Nyb2xsIiwibWF4WSIsInNtb290aGVyIiwiU2Nyb2xsU21vb3RoZXIiLCJzbW9vdGhlckluc3RhbmNlIiwiaW5pdGlhbFNjYWxlIiwidmlzdWFsVmlld3BvcnQiLCJvdXRlcldpZHRoIiwid2hlZWxSZWZyZXNoIiwicmVzb2x2ZU1vbWVudHVtRHVyYXRpb24iLCJsYXN0UmVmcmVzaElEIiwic2tpcFRvdWNoTW92ZSIsImlucHV0T2JzZXJ2ZXIiLCJyZXN1bWVUb3VjaE1vdmUiLCJzY3JvbGxDbGFtcFgiLCJzY3JvbGxDbGFtcFkiLCJ1cGRhdGVDbGFtcHMiLCJyZW1vdmVDb250ZW50T2Zmc2V0IiwidHJhbnNmb3JtIiwiaWdub3JlRHJhZyIsInN0YXJ0U2Nyb2xsWCIsInN0YXJ0U2Nyb2xsWSIsIm9uUmVzaXplIiwicHJldlNjYWxlIiwiZHVyIiwiY3VycmVudFNjcm9sbCIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsInBsYXkiLCJfdHMiLCJ4QXJyYXkiLCJ5QXJyYXkiLCJ5Q2xhbXBlZCIsInRpY2tlciIsIm9ic2VydmUiLCJub3JtYWxpemVTY3JvbGwiLCJub3JtYWxpemVyIiwic3MiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9