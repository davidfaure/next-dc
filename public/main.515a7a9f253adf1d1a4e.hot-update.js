"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = /** @type {HTMLScriptElement} */document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1698054229233
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("daeed457053b67cfe1ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBc0IsbUJBQU8sQ0FBQyx5SkFBMEUsY0FBYywrQkFBK0I7QUFDckosTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cblxudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9IC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuICBpZiAoIWlzVXJsUmVxdWVzdCggLyoqIEB0eXBlIHtzdHJpbmd9ICovdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG5cbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1tdKS5qb2luKFwiL1wiKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2OTgwNTQyMjkyMzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYWVlZDQ1NzA1M2I2N2NmZTFhY1wiKSJdLCJuYW1lcyI6WyJub3JtYWxpemVVcmwiLCJyZXF1aXJlIiwic3JjQnlNb2R1bGVJZCIsIk9iamVjdCIsImNyZWF0ZSIsIm5vRG9jdW1lbnQiLCJkb2N1bWVudCIsImZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsImRlYm91bmNlIiwiZm4iLCJ0aW1lIiwidGltZW91dCIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiZnVuY3Rpb25DYWxsIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwibm9vcCIsImdldEN1cnJlbnRTY3JpcHRVcmwiLCJtb2R1bGVJZCIsInNyYyIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYXN0U2NyaXB0VGFnIiwibGVuZ3RoIiwiZmlsZU1hcCIsInNwbGl0UmVzdWx0Iiwic3BsaXQiLCJmaWxlbmFtZSIsInJlcGxhY2UiLCJtYXAiLCJtYXBSdWxlIiwicmVnIiwiUmVnRXhwIiwiY29uY2F0IiwidXBkYXRlQ3NzIiwiZWwiLCJ1cmwiLCJocmVmIiwiaXNVcmxSZXF1ZXN0IiwiaXNMb2FkZWQiLCJpbmRleE9mIiwidmlzaXRlZCIsIm5ld0VsIiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkRhdGUiLCJub3ciLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZ2V0UmVsb2FkVXJsIiwicmV0Iiwic29tZSIsInJlbG9hZFN0eWxlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVkIiwiY2FsbCIsInJlbG9hZEFsbCIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTY3JpcHRTcmMiLCJ1cGRhdGUiLCJyZWxvYWRlZCIsImxvY2FscyIsImpvaW4iLCJwYXRoQ29tcG9uZW50cyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInBvcCIsInB1c2giLCJ1cmxTdHJpbmciLCJ0cmltIiwicHJvdG9jb2wiLCJjb21wb25lbnRzIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=