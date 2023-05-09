/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getString() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('hello webpack!');
    }, 2000);
  });
}
function helloWorld() {
  return _helloWorld.apply(this, arguments);
}
function _helloWorld() {
  _helloWorld = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getString();
          case 2:
            message = _context.sent;
            console.log(message);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloWorld.apply(this, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzA0Ni43IDg3NS43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zODcgMCAzODcgMjE4Ljl2NDM3LjlsLTM4NyAyMTguOS0zODctMjE4Ljl2LTQzNy45eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im03MDQuOSA2NDEuNy0zMDUuMSAxNzIuNnYtMTM0LjRsMTkwLjEtMTA0LjZ6bTIwLjktMTguOXYtMzYwLjlsLTExMS42IDY0LjV2MjMyem0tNjU3LjkgMTguOSAzMDUuMSAxNzIuNnYtMTM0LjRsLTE5MC4yLTEwNC42em0tMjAuOS0xOC45di0zNjAuOWwxMTEuNiA2NC41djIzMnptMTMuMS0zODQuMyAzMTIuOS0xNzd2MTI5LjlsLTIwMC41IDExMC4zLTEuNi45em02NTIuNiAwLTMxMi45LTE3N3YxMjkuOWwyMDAuNSAxMTAuMiAxLjYuOXoiIGZpbGw9IiM4ZWQ2ZmIiLz48cGF0aCBkPSJtMzczIDY0OS4zLTE4Ny42LTEwMy4ydi0yMDQuM2wxODcuNiAxMDguM3ptMjYuOCAwIDE4Ny42LTEwMy4xdi0yMDQuNGwtMTg3LjYgMTA4LjN6bS0yMDEuNy0zMzEuMSAxODguMy0xMDMuNSAxODguMyAxMDMuNS0xODguMyAxMDguN3oiIGZpbGw9IiMxYzc4YzAiLz48cGF0aCBkPSJtMTE2NC4zIDU3Ni4zaDgyLjVsODQuMS0yODAuMmgtODAuNGwtNDkuOCAxOTguOC01My4xLTE5OC44aC02OS42bC01My42IDE5OC44LTQ5LjMtMTk4LjhoLTgwLjRsODMuNiAyODAuMmg4Mi41bDUyLTE3OS41em0xNzAuOS0xMzkuM2MwIDg0LjEgNTcuMyAxNDYuMyAxNDcuNCAxNDYuMyA2OS43IDAgMTA3LjItNDEuOCAxMTcuOS02MS42bC00OC44LTM3Yy04IDExLjgtMzAgMzQuMy02OC4xIDM0LjMtNDEuMyAwLTcxLjMtMjYuOC03Mi45LTY0LjNoMTk3LjNjLjUtNS40LjUtMTAuNy41LTE2LjEgMC05MS42LTQ5LjMtMTQ5LjUtMTM2LjEtMTQ5LjUtNzkuOSAwLTEzNy4yIDYzLjItMTM3LjIgMTQ3Ljl6bTc3LjctMzAuNmMzLjItMzIuMSAyNS43LTU2LjggNjAuNi01Ni44IDMzLjggMCA1OC40IDIyLjUgNjAgNTYuOHptMjIzLjUgMTY5LjloNjkuN3YtMjguOWM3LjUgOS4xIDM1LjQgMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzNy4yLTYwLjUgMTM3LjItMTQ2LjggMC04Ni44LTUyLjUtMTQ3LjMtMTMyLjktMTQ3LjMtNDguMiAwLTc2LjEgMjYuOC04My4xIDM2LjR2LTEzNi43aC03My45djM4Ny40em03MS44LTEzOS4zYzAtNTIuNSAzMS4xLTgyLjUgNzEuOC04Mi41IDQyLjkgMCA3MS44IDMzLjggNzEuOCA4Mi41IDAgNDkuOC0zMCA4MC45LTcxLjggODAuOS00NSAwLTcxLjgtMzYuNS03MS44LTgwLjl6bTI0NyAyMzkuNWg3My45di0xMjkuMmM3IDkuMSAzNC44IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzIuOS02MC41IDEzMi45LTE0Ny4zIDAtODUuNy01Ni44LTE0Ni44LTEzNy4yLTE0Ni44LTQ3LjcgMC03NS42IDI2LjgtODMuMSAzNi40di0yOS41aC02OS43djM4MC41em03MS44LTI0MS4xYzAtNDQuNSAyNi44LTgwLjkgNzEuOC04MC45IDQxLjggMCA3MS44IDMxLjEgNzEuOCA4MC45IDAgNDguOC0yOC45IDgyLjUtNzEuOCA4Mi41LTQwLjcgMC03MS44LTMwLTcxLjgtODIuNXptMjMxLjUgNTQuMWMwIDU4LjkgNDguMiA5My44IDEwNSA5My44IDMyLjIgMCA1My42LTkuNiA2OC4xLTI1LjJsNC44IDE4LjJoNjUuNHYtMTc3LjRjMC02Mi43LTI2LjgtMTA5LjgtMTE2LjgtMTA5LjgtNDIuOSAwLTg1LjIgMTYuMS0xMTAuNCAzMy4ybDI3LjkgNTAuNGExNjUuMiAxNjUuMiAwIDAgMSA3NC41LTE5LjhjMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MmE5NS4yIDk1LjIgMCAwIDEgNjUuNCAyNi44bDIwLjktNjIuMmExNDIuNiAxNDIuNiAwIDAgMCAtODguNC0zMGMtODUuMiAwLTE0OSA2Mi43LTE0OSAxNDcuOXM2Mi4yIDE0Ni4zIDE0OS41IDE0Ni4zYTE0MSAxNDEgMCAwIDAgODcuMy0zMGwtMTkuOC02MC41Yy0xMi40IDEwLjEtMzQuOSAyNS4xLTYzLjMgMjUuMXptMTEwLjkgNTguNGg3My45di0xNDQuN2w5My44IDE0NC43aDg2LjhsLTEwNi4xLTE1My4zIDk4LjYtMTI3aC04My4xbC05MCAxMTcuOXYtMjI1aC03My45eiIgZmlsbD0iI2Y1ZmFmYSIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/container.jpg":
/*!**********************************!*\
  !*** ./src/assets/container.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/af6323163b27c6f79dfe.jpg";

/***/ }),

/***/ "./src/assets/message.txt":
/*!********************************!*\
  !*** ./src/assets/message.txt ***!
  \********************************/
/***/ ((module) => {

module.exports = "hello webpack";

/***/ }),

/***/ "./src/assets/bg.png":
/*!***************************!*\
  !*** ./src/assets/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/460dd47f3cb291aab131.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ "./src/hello-world.js");
/* harmony import */ var _assets_container_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/container.jpg */ "./src/assets/container.jpg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_message_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/message.txt */ "./src/assets/message.txt");
/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg.png */ "./src/assets/bg.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.less */ "./src/style.less");







(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__["default"])();
var img = document.createElement('img');
img.src = _assets_container_jpg__WEBPACK_IMPORTED_MODULE_1__;
document.body.appendChild(img);
var img2 = document.createElement('img');
img2.style.cssText = 'width: 500px; height: 300px;';
img2.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__;
document.body.appendChild(img2);
var block = document.createElement('div');
block.style.cssText = 'width: 200px; height: 200px;';
block.className = 'container';
block.textContent = _assets_message_txt__WEBPACK_IMPORTED_MODULE_3__;
document.body.appendChild(block);
var img3 = document.createElement('img');
img3.style.cssText = 'width: 500px; height: 300px;';
img3.src = _assets_bg_png__WEBPACK_IMPORTED_MODULE_4__;
document.body.appendChild(img3);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTtBQUFBO0FBQUE7QUFEQSxTQUFTQSxTQUFTLEdBQUc7RUFDbkIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdENDLFVBQVUsQ0FBQyxZQUFNO01BQ2ZGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ0o7QUFBQyxTQUVjRyxVQUFVO0VBQUE7QUFBQTtBQUFBO0VBQUEseUVBQXpCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FDc0JMLFNBQVMsRUFBRTtVQUFBO1lBQTNCTSxPQUFPO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUN0QjtFQUFBO0FBQUE7QUFFRCxpRUFBZUQsVUFBVTs7Ozs7Ozs7Ozs7QUNiekI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDSztBQUNKO0FBQ087QUFDVjtBQUNoQjtBQUNDO0FBRXRCQSx3REFBVSxFQUFFO0FBRVosSUFBTVEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDekNGLEdBQUcsQ0FBQ0csR0FBRyxHQUFHUCxrREFBTTtBQUNoQkssUUFBUSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDO0FBRTlCLElBQU1NLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLDhCQUE4QjtBQUNuREYsSUFBSSxDQUFDSCxHQUFHLEdBQUdOLDZDQUFPO0FBQ2xCSSxRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUM7QUFFL0IsSUFBTUcsS0FBSyxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDM0NPLEtBQUssQ0FBQ0YsS0FBSyxDQUFDQyxPQUFPLEdBQUcsOEJBQThCO0FBQ3BEQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxXQUFXO0FBQzdCRCxLQUFLLENBQUNFLFdBQVcsR0FBR2IsZ0RBQVc7QUFDL0JHLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNJLEtBQUssQ0FBQztBQUVoQyxJQUFNRyxJQUFJLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMxQ1UsSUFBSSxDQUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBRyw4QkFBOEI7QUFDbkRJLElBQUksQ0FBQ1QsR0FBRyxHQUFHSiwyQ0FBTTtBQUNqQkUsUUFBUSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz84N2YxIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5sZXNzPzhlNzQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdHJpbmcoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKCdoZWxsbyB3ZWJwYWNrIScpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhlbGxvV29ybGQoKXtcclxuICBsZXQgbWVzc2FnZSA9IGF3YWl0IGdldFN0cmluZygpO1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWxsb1dvcmxkOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBoZWxsb1dvcmxkIGZyb20gJy4vaGVsbG8td29ybGQnO1xyXG5pbXBvcnQgaW1nU3JjIGZyb20gJy4vYXNzZXRzL2NvbnRhaW5lci5qcGcnO1xyXG5pbXBvcnQgbG9nb1N2ZyBmcm9tICcuL2Fzc2V0cy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBtZXNzYWdlVGV4dCBmcm9tICcuL2Fzc2V0cy9tZXNzYWdlLnR4dCc7XHJcbmltcG9ydCBwbmdTcmMgZnJvbSAnLi9hc3NldHMvYmcucG5nJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5sZXNzJztcclxuXHJcbmhlbGxvV29ybGQoKTtcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gaW1nU3JjO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5jb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmltZzIuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNTAwcHg7IGhlaWdodDogMzAwcHg7JztcclxuaW1nMi5zcmMgPSBsb2dvU3ZnO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZzIpO1xyXG5cclxuY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYmxvY2suc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7JztcclxuYmxvY2suY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbmJsb2NrLnRleHRDb250ZW50ID0gbWVzc2FnZVRleHQ7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxvY2spO1xyXG5cclxuY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWczLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDMwMHB4Oyc7XHJcbmltZzMuc3JjID0gcG5nU3JjO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZzMpOyJdLCJuYW1lcyI6WyJnZXRTdHJpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJoZWxsb1dvcmxkIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJpbWdTcmMiLCJsb2dvU3ZnIiwibWVzc2FnZVRleHQiLCJwbmdTcmMiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbWcyIiwic3R5bGUiLCJjc3NUZXh0IiwiYmxvY2siLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImltZzMiXSwic291cmNlUm9vdCI6IiJ9