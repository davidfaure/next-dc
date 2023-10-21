"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/utils/text.js":
/*!***************************!*\
  !*** ./app/utils/text.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate),
/* harmony export */   split: () => (/* binding */ split)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);

function split({
  element,
  expression = " ",
  append = true
}) {
  const words = splitText(element.innerHTML.toString().trim(), expression);
  let innerHTML = "";
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, line => {
    if (line.indexOf("<br>") > -1) {
      const lines = line.split("<br>");
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(lines, (line, index) => {
        innerHTML += index > 0 ? "<br>" + parseLine(line) : parseLine(line);
      });
    } else {
      innerHTML += parseLine(line);
    }
  });
  element.innerHTML = innerHTML;
  const spans = element.querySelectorAll("span");
  if (append) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, span => {
      const isSingleLetter = span.textContent.length === 1;
      const isNotEmpty = span.innerHTML.trim() !== "";
      const isNotAndCharacter = span.textContent !== "&";
      const isNotDashCharacter = span.textContent !== "-";
      if (isSingleLetter && isNotEmpty && isNotAndCharacter && isNotDashCharacter) {
        span.innerHTML = `${span.textContent}&nbsp;`;
      }
    });
  }
  return spans;
}
function calculate(spans) {
  const lines = [];
  let words = [];
  let position = spans[0].offsetTop;
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, (span, index) => {
    if (span.offsetTop === position) {
      words.push(span);
    }
    if (span.offsetTop !== position) {
      lines.push(words);
      words = [];
      words.push(span);
      position = span.offsetTop;
    }
    if (index + 1 === spans.length) {
      lines.push(words);
    }
  });
  return lines;
}
function splitText(text, expression) {
  const splits = text.split("<br>");
  let words = [];
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(splits, (item, index) => {
    if (index > 0) {
      words.push("<br>");
    }
    words = words.concat(item.split(expression));
    let isLink = false;
    let link = "";
    const innerHTML = [];
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, word => {
      if (!isLink && (word.includes("<a") || word.includes("<strong"))) {
        link = "";
        isLink = true;
      }
      if (isLink) {
        link += ` ${word}`;
      }
      if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
        innerHTML.push(link);
        link = "";
      }
      if (!isLink && link === "") {
        innerHTML.push(word);
      }
      if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
        isLink = false;
      }
    });
    words = innerHTML;
  });
  return words;
}
function parseLine(line) {
  line = line.trim();
  if (line === "" || line === " ") {
    return line;
  } else {
    return line === "<br>" ? "<br>" : `<span>${line}</span>` + (line.length > 1 ? " " : "");
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9823ab9b2166abda46c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRTtNQUNYO01BRUEsSUFBSSxDQUFDRCxNQUFNLElBQUlDLElBQUksS0FBSyxFQUFFLEVBQUU7UUFDMUIxQixTQUFTLENBQUNvQixJQUFJLENBQUNPLElBQUksQ0FBQztNQUN0QjtNQUVBLElBQUlGLE1BQU0sS0FBS0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUlELElBQUksQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7UUFDakVILE1BQU0sR0FBRyxLQUFLO01BQ2hCO0lBQ0YsQ0FBQyxDQUFDO0lBRUYzQixLQUFLLEdBQUdFLFNBQVM7RUFDbkIsQ0FBQyxDQUFDO0VBRUYsT0FBT0YsS0FBSztBQUNkO0FBRUEsU0FBU1MsU0FBU0EsQ0FBQ0osSUFBSSxFQUFFO0VBQ3ZCQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUM7RUFFbEIsSUFBSUMsSUFBSSxLQUFLLEVBQUUsSUFBSUEsSUFBSSxLQUFLLEdBQUcsRUFBRTtJQUMvQixPQUFPQSxJQUFJO0VBQ2IsQ0FBQyxNQUFNO0lBQ0wsT0FBT0EsSUFBSSxLQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUksU0FBUUEsSUFBSyxTQUFRLElBQUlBLElBQUksQ0FBQ1UsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQ3pGO0FBQ0Y7Ozs7Ozs7O1VDNUhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC91dGlscy90ZXh0LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh7IGVsZW1lbnQsIGV4cHJlc3Npb24gPSBcIiBcIiwgYXBwZW5kID0gdHJ1ZSB9KSB7XG4gIGNvbnN0IHdvcmRzID0gc3BsaXRUZXh0KGVsZW1lbnQuaW5uZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLCBleHByZXNzaW9uKVxuXG4gIGxldCBpbm5lckhUTUwgPSBcIlwiXG5cbiAgZWFjaCh3b3JkcywgbGluZSA9PiB7XG4gICAgaWYgKGxpbmUuaW5kZXhPZihcIjxicj5cIikgPiAtMSkge1xuICAgICAgY29uc3QgbGluZXMgPSBsaW5lLnNwbGl0KFwiPGJyPlwiKVxuXG4gICAgICBlYWNoKGxpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5uZXJIVE1MICs9IGluZGV4ID4gMCA/IFwiPGJyPlwiICsgcGFyc2VMaW5lKGxpbmUpIDogcGFyc2VMaW5lKGxpbmUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckhUTUwgKz0gcGFyc2VMaW5lKGxpbmUpXG4gICAgfVxuICB9KVxuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgY29uc3Qgc3BhbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXG5cbiAgaWYgKGFwcGVuZCkge1xuICAgIGVhY2goc3BhbnMsIHNwYW4gPT4ge1xuICAgICAgY29uc3QgaXNTaW5nbGVMZXR0ZXIgPSBzcGFuLnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMVxuICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHNwYW4uaW5uZXJIVE1MLnRyaW0oKSAhPT0gXCJcIlxuICAgICAgY29uc3QgaXNOb3RBbmRDaGFyYWN0ZXIgPSBzcGFuLnRleHRDb250ZW50ICE9PSBcIiZcIlxuICAgICAgY29uc3QgaXNOb3REYXNoQ2hhcmFjdGVyID0gc3Bhbi50ZXh0Q29udGVudCAhPT0gXCItXCJcblxuICAgICAgaWYgKGlzU2luZ2xlTGV0dGVyICYmIGlzTm90RW1wdHkgJiYgaXNOb3RBbmRDaGFyYWN0ZXIgJiYgaXNOb3REYXNoQ2hhcmFjdGVyKSB7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYCR7c3Bhbi50ZXh0Q29udGVudH0mbmJzcDtgXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzcGFuc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlKHNwYW5zKSB7XG4gIGNvbnN0IGxpbmVzID0gW11cbiAgbGV0IHdvcmRzID0gW11cblxuICBsZXQgcG9zaXRpb24gPSBzcGFuc1swXS5vZmZzZXRUb3BcblxuICBlYWNoKHNwYW5zLCAoc3BhbiwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3Bhbi5vZmZzZXRUb3AgPT09IHBvc2l0aW9uKSB7XG4gICAgICB3b3Jkcy5wdXNoKHNwYW4pXG4gICAgfVxuXG4gICAgaWYgKHNwYW4ub2Zmc2V0VG9wICE9PSBwb3NpdGlvbikge1xuICAgICAgbGluZXMucHVzaCh3b3JkcylcblxuICAgICAgd29yZHMgPSBbXVxuICAgICAgd29yZHMucHVzaChzcGFuKVxuXG4gICAgICBwb3NpdGlvbiA9IHNwYW4ub2Zmc2V0VG9wXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICsgMSA9PT0gc3BhbnMubGVuZ3RoKSB7XG4gICAgICBsaW5lcy5wdXNoKHdvcmRzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gbGluZXNcbn1cblxuZnVuY3Rpb24gc3BsaXRUZXh0KHRleHQsIGV4cHJlc3Npb24pIHtcbiAgY29uc3Qgc3BsaXRzID0gdGV4dC5zcGxpdChcIjxicj5cIilcblxuICBsZXQgd29yZHMgPSBbXVxuXG4gIGVhY2goc3BsaXRzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB3b3Jkcy5wdXNoKFwiPGJyPlwiKVxuICAgIH1cblxuICAgIHdvcmRzID0gd29yZHMuY29uY2F0KGl0ZW0uc3BsaXQoZXhwcmVzc2lvbikpXG5cbiAgICBsZXQgaXNMaW5rID0gZmFsc2VcbiAgICBsZXQgbGluayA9IFwiXCJcblxuICAgIGNvbnN0IGlubmVySFRNTCA9IFtdXG5cbiAgICBlYWNoKHdvcmRzLCB3b3JkID0+IHtcbiAgICAgIGlmICghaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKFwiPGFcIikgfHwgd29yZC5pbmNsdWRlcyhcIjxzdHJvbmdcIikpKSB7XG4gICAgICAgIGxpbmsgPSBcIlwiXG5cbiAgICAgICAgaXNMaW5rID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgIGxpbmsgKz0gYCAke3dvcmR9YFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKFwiL2E+XCIpIHx8IHdvcmQuaW5jbHVkZXMoXCIvc3Ryb25nPlwiKSkpIHtcbiAgICAgICAgaW5uZXJIVE1MLnB1c2gobGluaylcblxuICAgICAgICBsaW5rID0gXCJcIlxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGluayAmJiBsaW5rID09PSBcIlwiKSB7XG4gICAgICAgIGlubmVySFRNTC5wdXNoKHdvcmQpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xpbmsgJiYgKHdvcmQuaW5jbHVkZXMoXCIvYT5cIikgfHwgd29yZC5pbmNsdWRlcyhcIi9zdHJvbmc+XCIpKSkge1xuICAgICAgICBpc0xpbmsgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3b3JkcyA9IGlubmVySFRNTFxuICB9KVxuXG4gIHJldHVybiB3b3Jkc1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xuICBsaW5lID0gbGluZS50cmltKClcblxuICBpZiAobGluZSA9PT0gXCJcIiB8fCBsaW5lID09PSBcIiBcIikge1xuICAgIHJldHVybiBsaW5lXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpbmUgPT09IFwiPGJyPlwiID8gXCI8YnI+XCIgOiBgPHNwYW4+JHtsaW5lfTwvc3Bhbj5gICsgKGxpbmUubGVuZ3RoID4gMSA/IFwiIFwiIDogXCJcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTgyM2FiOWIyMTY2YWJkYTQ2YzlcIikiXSwibmFtZXMiOlsiZWFjaCIsInNwbGl0IiwiZWxlbWVudCIsImV4cHJlc3Npb24iLCJhcHBlbmQiLCJ3b3JkcyIsInNwbGl0VGV4dCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwidHJpbSIsImxpbmUiLCJpbmRleE9mIiwibGluZXMiLCJpbmRleCIsInBhcnNlTGluZSIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInNwYW4iLCJpc1NpbmdsZUxldHRlciIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiaXNOb3RFbXB0eSIsImlzTm90QW5kQ2hhcmFjdGVyIiwiaXNOb3REYXNoQ2hhcmFjdGVyIiwiY2FsY3VsYXRlIiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJwdXNoIiwidGV4dCIsInNwbGl0cyIsIml0ZW0iLCJjb25jYXQiLCJpc0xpbmsiLCJsaW5rIiwid29yZCIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==